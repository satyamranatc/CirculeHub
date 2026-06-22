package com.example.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.DTO.LoginModel;
import com.example.backend.Models.UserModel;
import com.example.backend.Repo.UserRepo;

@RestController
@CrossOrigin("*")
public class UserController 
{

    @Autowired
    private UserRepo userRepo;

    @PostMapping("/api/user/register")
    public String register(@RequestBody UserModel user)
    {
        userRepo.save(user);
        return "success";
    }

    @PostMapping("/api/user/login")
    public String login(@RequestBody LoginModel user)
    {
        List allUsers = userRepo.findAll();
        
        for(int i = 0; i < allUsers.size(); i++)
        {
            if(((UserModel)allUsers.get(i)).getEmail().equals(user.getEmail()) && ((UserModel)allUsers.get(i)).getPassword().equals(user.getPassword()))
            {
                return "success";
            }
            else
            {
                return "fail";
            }
        }

        return "success";
    }
    
}

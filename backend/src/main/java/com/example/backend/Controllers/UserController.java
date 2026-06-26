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
    public UserModel register(@RequestBody UserModel user)
    {
        UserModel newUser = userRepo.save(user);
        return newUser;
    }

    @PostMapping("/api/user/login")
    public UserModel login(@RequestBody LoginModel user)
    {

        List allUsers = userRepo.findAll();


        System.out.println(user.getPassword() + " " + user.getEmail());
        for(int i = 0; i < allUsers.size(); i++)
        {
           if(user.getPassword().equals(((UserModel)allUsers.get(i)).getPassword()) && user.getEmail().equals(((UserModel)allUsers.get(i)).getEmail()))
           {
               return (UserModel)allUsers.get(i);
           }
        }

        return null;
    }
    
}

package com.example.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Models.PostModel;
import com.example.backend.Repo.PostRepo;

@RestController
@CrossOrigin("*")
public class PostController 
{

    @Autowired
    private PostRepo postRepo;

    @GetMapping("/api/posts")
    public List<PostModel> getPosts()
    {
        return postRepo.findAll();
    }
    

    @PostMapping("/api/post")
    public String addPost(@RequestBody PostModel post)
    {
        postRepo.save(post);
        return "success";
    }
}

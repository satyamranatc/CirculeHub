package com.example.backend.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.Models.PostModel;

public interface PostRepo extends JpaRepository<PostModel, Long>
{
    
}

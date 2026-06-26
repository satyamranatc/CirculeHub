package com.example.backend.Models;


import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class PostModel 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String pic;
    private String caption;

    @ManyToOne
    private UserModel author;

    public PostModel(String pic, String caption, UserModel author) {
        this.pic = pic;
        this.caption = caption;
        this.author = author;
    }

    public PostModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public UserModel getAuthor() {
    return author;
}

public void setAuthor(UserModel author) {
    this.author = author;
}
    
}

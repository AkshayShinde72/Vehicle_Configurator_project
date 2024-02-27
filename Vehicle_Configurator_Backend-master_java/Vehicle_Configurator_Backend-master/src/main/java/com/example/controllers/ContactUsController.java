package com.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.ContactUs;
import com.example.services.ContactUsService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ContactUsController {

    @Autowired
    private ContactUsService contactusservice;
    
    @PostMapping("/api/contact")
    public void saveContact(@RequestBody ContactUs contact) {
        System.out.println("Received message: " + contact);
        contactusservice.saveContact(contact);
    }
}

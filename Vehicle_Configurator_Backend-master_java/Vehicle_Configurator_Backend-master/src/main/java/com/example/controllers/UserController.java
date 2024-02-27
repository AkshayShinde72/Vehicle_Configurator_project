package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.services.UserManager;
import com.example.entities.Segment;
import com.example.entities.User;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

	@Autowired
    private UserManager userManager;

	@PostMapping(value="api/signup")
    public void registerCompany(@RequestBody User Reg) {

        System.out.println("hello");
        userManager.createUser(Reg);
    }
	

	@PostMapping(value="api/login")
    public boolean validateUser(@RequestBody User Reg) {
		
		System.out.println("Logged In");
		return userManager.validateUser(Reg);
    }	 
	
	

}
package com.example.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.example.services.JwtUtil;
import com.example.services.UserDetailService;
import com.example.services.UserManager;
import com.example.demo.JwtResponse;
import com.example.entities.User;
import com.example.repositories.UserRepository;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

	@Autowired
    private JwtUtil jwtutil;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private UserDetailService userDetailService;

	@Autowired
    private UserManager userManager;

	@PostMapping(value="public/signup")
    public void registerCompany(@RequestBody User Reg) {

        System.out.println("hello");
        userManager.createUser(Reg);
    }
	
	 @PostMapping("public/token")
	    public ResponseEntity<?> generateToken(@RequestBody User customer) {
	        try {
	            System.out.println("Inside token method");
	            System.out.println(customer);
	            Optional<User> user = userRepository.findByUserNameAndPassword(customer.getUsername(), customer.getPassword());
	            System.out.println("User is present?" + user.isPresent());
	            if (user.isEmpty()) {
	                throw new UsernameNotFoundException("Credentials don't match");
	            }
	            userDetailService.setPassword(customer.getPassword());
	            UserDetails userDetails = userDetailService.loadUserByUsername(customer.getUsername());
	            String token = jwtutil.generateToken(userDetails,user.get());
	            System.out.println("JWT " + token);
	            return ResponseEntity.ok(new JwtResponse(token));
	        } catch (Exception ee) {
	            ee.printStackTrace();
	            return null;
	        }
	    }

//	@PostMapping(value="api/login")
//    public boolean validateUser(@RequestBody User Reg) {
//		
//		System.out.println("Logged In");
//		return userManager.validateUser(Reg);
//    }	 
	
	

}
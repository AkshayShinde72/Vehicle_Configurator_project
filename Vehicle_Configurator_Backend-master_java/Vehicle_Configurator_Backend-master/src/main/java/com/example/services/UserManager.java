package com.example.services;

import java.util.Optional;

import com.example.entities.User;

public interface UserManager  {
	
	 public void createUser(User user) ;
	 public boolean validateUser(User user);

//	 public Optional<Registration> getUserByUsername(String username) ;

}
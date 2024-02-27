package com.example.services;

import java.util.List;
import java.util.Optional;

import com.example.entities.User;

public interface UserManager  {
	
	 public User createUser(User customer) ;
	  public User getCustomerById(Integer id) ;
	  public List<User> getAllCustomers();
	  
	// public boolean validateUser(User user);

//	 public Optional<Registration> getUserByUsername(String username) ;

}
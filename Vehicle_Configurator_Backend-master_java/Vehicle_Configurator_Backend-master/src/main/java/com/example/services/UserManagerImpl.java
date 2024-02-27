package com.example.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.repositories.UserRepository;
import com.example.entities.User;



@Service
public class UserManagerImpl implements UserManager{
	@Autowired
	private UserRepository userRepository;
	

	public void createUser(User user) {
         userRepository.save(user);
    }
	


	public boolean validateUser(User user) {
		
        return userRepository.validateUser(user.getUsername(), user.getPassword());
    }

//    public Optional<Registration> getUserByUsername(String username) {
//        return registrationRepository.findByUsername(username);
//    }

}

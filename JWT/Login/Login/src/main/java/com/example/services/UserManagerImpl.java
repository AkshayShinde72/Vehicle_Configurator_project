package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.repositories.UserRepository;
import com.example.entities.User;



@Service
public class UserManagerImpl implements UserManager{
//	@Autowired
//	private UserRepository userRepository;
//	
//
//	public void createUser(User user) {
//         userRepository.save(user);
//    }
//	
//
//
//	public boolean validateUser(User user) {
//		
//        return userRepository.validateUser(user.getUsername(), user.getPassword());
//    }
//
////    public Optional<Registration> getUserByUsername(String username) {
////        return registrationRepository.findByUsername(username);
////    }
	
	
	private UserRepository userRepository;

    @Autowired
    public UserManagerImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllCustomers() {
        return userRepository.findAll();
    }

    public User getCustomerById(Integer id) {
        Optional<User> optionalCustomer = userRepository.findById(id);
        return optionalCustomer.orElse(null);
    }

    public User createUser(User customer) {
        // You can implement additional logic here (e.g., validation) before saving the customer
        return userRepository.save(customer);
    }



 
}

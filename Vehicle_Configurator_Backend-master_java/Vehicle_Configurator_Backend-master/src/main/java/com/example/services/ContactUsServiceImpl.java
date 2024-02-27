package com.example.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.ContactUs;
import com.example.repositories.ContactUsRepository;

@Service
public class ContactUsServiceImpl implements ContactUsService {

    @Autowired
    private ContactUsRepository feedbackRepository;
    
    @Override
    public void saveContact(ContactUs contact) {
        feedbackRepository.save(contact);
    }
}

package com.example.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.FeedbackEntity;
import com.example.repositories.FeedbackRepository;

@Service
public class FeedbackServiceImpl implements FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;
    
    @Override
    public void saveFeedback(FeedbackEntity feedback) {
        feedbackRepository.save(feedback);
    }
}

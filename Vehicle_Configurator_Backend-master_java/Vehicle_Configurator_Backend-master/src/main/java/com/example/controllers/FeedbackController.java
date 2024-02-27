package com.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.FeedbackEntity;
import com.example.services.FeedbackService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;
    
    @PostMapping("/api/feedback")
    public void saveFeedback(@RequestBody FeedbackEntity feedback) {
        System.out.println("Received feedback: " + feedback);
        feedbackService.saveFeedback(feedback);
    }
}

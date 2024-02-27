package com.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.entities.Segment;
import com.example.services.SegmentService;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/segments")
public class SegmentController {
    private final SegmentService segmentService;

    @Autowired
    public SegmentController(SegmentService segmentService) {
        this.segmentService = segmentService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Segment>> getAllSegments() {
        List<Segment> segments = segmentService.getAllSegments();
        return new ResponseEntity<>(segments, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Segment> getSegmentById(@PathVariable int id) {
    	Segment segment = segmentService.getSegmentById(id);
        if (segment != null) {
            return new ResponseEntity<>(segment, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Segment> createSegment(@RequestBody Segment segment) {
    	Segment createdSegment = segmentService.createOrUpdateSegment(segment);
        return new ResponseEntity<>(createdSegment, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSegment(@PathVariable int id) {
        segmentService.deleteSegment(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

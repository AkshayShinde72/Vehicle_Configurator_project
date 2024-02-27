package com.example.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Segment;
import com.example.repositories.SegmentRepository;

import java.util.List;

@Service
public class SegmentService {
    private final SegmentRepository segmentRepository;

    @Autowired
    public SegmentService(SegmentRepository segmentRepository) {
        this.segmentRepository = segmentRepository;
    }

    public List<Segment> getAllSegments() {
        return segmentRepository.findAll();
    }

    public Segment getSegmentById(int id) {
        return segmentRepository.findById(id).orElse(null);
    }

    public Segment createOrUpdateSegment(Segment segment) {
        return segmentRepository.save(segment);
    }

    public void deleteSegment(int id) {
        segmentRepository.deleteById(id);
    }

	
}
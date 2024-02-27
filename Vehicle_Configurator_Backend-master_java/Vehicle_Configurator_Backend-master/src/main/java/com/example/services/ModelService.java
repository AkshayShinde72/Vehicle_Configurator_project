package com.example.services;

import java.util.List;

import com.example.entities.Model;
import com.example.entities.Segment;
import com.example.repositories.ModelRepository;

public interface ModelService {
	List<Model> getvariant(int Seg_id , int Mfg_id);

	 List<Model> findAllModelsById(int id);
	
}
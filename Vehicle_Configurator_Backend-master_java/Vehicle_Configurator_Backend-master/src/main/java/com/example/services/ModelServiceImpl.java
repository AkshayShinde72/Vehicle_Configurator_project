package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Model;
import com.example.repositories.ModelRepository;

@Service
public class ModelServiceImpl implements ModelService {
	@Autowired
	private ModelRepository mdl_repo;

	@Override
	public List<Model> getvariant(int Seg_id, int Mfg_id) {
		// TODO Auto-generated method stub
		return mdl_repo.getVariants(Seg_id, Mfg_id);
	}

	@Override
    public List<Model> findAllModelsById(int id) {
        return mdl_repo.findAllById(id);
    }
	
}
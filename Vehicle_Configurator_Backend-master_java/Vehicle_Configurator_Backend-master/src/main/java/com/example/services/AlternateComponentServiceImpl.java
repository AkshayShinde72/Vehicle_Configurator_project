package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dtos.SubCompPrice;
import com.example.repositories.AlternateComponentRepository;

@Service
public class AlternateComponentServiceImpl implements  AlternateComponentService {

	@Autowired
	AlternateComponentRepository alt_repo;


	@Override
	public List<String> getCompnameByStd(int model_id) {
		// TODO Auto-generated method stub
		return alt_repo.getCompnameByStd(model_id);
	}

	@Override
	public List<String> getCompnameByInt(int model_id) {
		// TODO Auto-generated method stub
		return alt_repo.getCompnameByInt(model_id);
	}

	@Override
	public List<String> getCompnameByExt(int model_id) {
		// TODO Auto-generated method stub
		return alt_repo.getCompnameByExt(model_id);
	}
	
	@Override
	public List<String> getCompnameByCore(int model_id) {
		// TODO Auto-generated method stub
		return alt_repo.getCompnameByCore(model_id);
	}

	
//	  @Override 
	  public List<SubCompPrice> getConfigurableConfig(int model_id,String comp_name) { 
		  return alt_repo.getConfigurableConfig(model_id, comp_name); }
//	  
//	
	  @Override public SubCompPrice getFinalConfig(int alt_id) {
		  return alt_repo.getFinalConfig(alt_id); }
//	 
	 
	
	
	
}
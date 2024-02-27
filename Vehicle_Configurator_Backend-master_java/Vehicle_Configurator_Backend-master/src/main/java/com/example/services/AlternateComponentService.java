package com.example.services;

import java.util.List;

import java.util.Map;


import org.springframework.data.repository.query.Param;

import com.example.dtos.SubCompPrice;

import com.example.entities.Alternate_Component;

public interface AlternateComponentService {
	
	List<String> getCompnameByStd(int model_id);
	
	List<String> getCompnameByInt(int model_id);
	List<String> getCompnameByExt(int model_id);
	List<String> getCompnameByCore(int model_id);
	public List<SubCompPrice> getConfigurableConfig( int model_id ,String comp_name);
//	
    SubCompPrice getFinalConfig(int alt_id );
//	

}
package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dtos.SubCompPrice;
import com.example.entities.Alternate_Component;
import com.example.services.AlternateComponentService;

@RestController
@CrossOrigin
public class AlternateComponentController {

	@Autowired
	AlternateComponentService service;

	 
	 
	
	@GetMapping("api/std/{model_id}")
	public List<String> getCompnameByStd(@PathVariable int model_id) {
		return service.getCompnameByStd(model_id);
	}
	
	@GetMapping("api/interior/{model_id}")
	public List<String> getCompnameByInt(@PathVariable int model_id) {
		return service.getCompnameByInt(model_id);
	}
	
	@GetMapping("api/exterior/{model_id}")
	public List<String> getCompnameByExt(@PathVariable int model_id) {
		return service.getCompnameByExt(model_id);
	}
	
	@GetMapping("api/core/{model_id}")
	public List<String> getCompnameByCore(@PathVariable int model_id) {
		return service.getCompnameByCore(model_id);
	}
	

	@GetMapping("api/invoice/{alt_id}")
	public SubCompPrice getFinalConfig(@PathVariable int alt_id) {
		return service.getFinalConfig(alt_id);
	}
//	
	@GetMapping("api/config/{model_id}/{comp_name}") 
	  public List<SubCompPrice> getConfigurableconfig(@PathVariable int model_id , @PathVariable String comp_name) { 
		  // TODO Auto-generated method stub 
		  return service.getConfigurableConfig(model_id ,comp_name); }
//	
//	
//	
//	
	
	
	

}

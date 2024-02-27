package com.example.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Model;
import com.example.repositories.ModelRepository;
import com.example.services.ModelService;

@RestController
@CrossOrigin
public class ModelController {

	@Autowired
	private ModelService mdl_mgr;

	
	  @GetMapping("api/Model/{Seg_id}/{Mfg_id}") public List<Model>
	  getVariantList(@PathVariable(value="Seg_id") int Seg_id, @PathVariable(value="Mfg_id") int Mfg_id)
	  {
		  return mdl_mgr.getvariant(Seg_id, Mfg_id);
	  }
	  
	  @GetMapping("api/Model/{id}")
	    public ResponseEntity<List<Model>> getAllModelsById(@PathVariable int id) {
	        List<Model> models = mdl_mgr.findAllModelsById(id);

	        if (!models.isEmpty()) {
	            return ResponseEntity.ok(models);
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }
	  
	 
	/*
	 * @GetMapping("api/Model/{Seg_id}/{Mfg_id}") public List<Model>
	 * getVariantList(@PathVariable(value="Seg_id") int
	 * Seg_id, @PathVariable(value="Mfg_id") int Mfg_id) { return
	 * mdl_mgr.getvariant(2,2); List<Model> list=new ArrayList<Model>();
	 * list.add(new Model()); return list;* }
	 */

}
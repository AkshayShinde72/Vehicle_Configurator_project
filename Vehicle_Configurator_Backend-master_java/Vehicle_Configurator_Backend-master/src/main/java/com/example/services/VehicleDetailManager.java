package com.example.services;

import java.util.List;

import com.example.entities.Model;

public interface VehicleDetailManager {

	public List<String> getVehicleDetailsByCore(int model_id);
	public List<String> getVehicleDetailsByStandard(int model_id);
	public List<String> getVehicleDetailsByInterior(int model_id);
	public List<String> getVehicleDetailsByExterior(int model_id);
	public double getPrice(int model_id);
	
}
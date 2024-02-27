package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.repositories.VehicleDetailRepository;

@Service
public class VehicleDetailManagerImpl implements VehicleDetailManager{
	
	@Autowired
	private VehicleDetailRepository vehicledetail_rpo;

	@Override
	public List<String> getVehicleDetailsByCore(int model_id) {
		// TODO Auto-generated method stub
		return vehicledetail_rpo.getVehicleDetailsByCore(model_id);
	}

	@Override
	public double getPrice(int model_id) {
		return vehicledetail_rpo.getPriceByModel(model_id).getPrice();
	}

	@Override
	public List<String> getVehicleDetailsByStandard(int model_id) {
		return vehicledetail_rpo.getVehicleDetailsByStandard(model_id);
	}

	@Override
	public List<String> getVehicleDetailsByInterior(int model_id) {
		return vehicledetail_rpo.getVehicleDetailsByInterior(model_id);
	}

	@Override
	public List<String> getVehicleDetailsByExterior(int model_id) {
		return vehicledetail_rpo.getVehicleDetailsByexterior(model_id);
	}



	
	
}
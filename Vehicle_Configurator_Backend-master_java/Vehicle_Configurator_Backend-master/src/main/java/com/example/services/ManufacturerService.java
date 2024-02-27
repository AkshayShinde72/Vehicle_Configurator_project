package com.example.services;

import java.util.List;

import com.example.entities.Manufacturer;



public interface ManufacturerService {

	List<Manufacturer> getAllManufacturersById(Long segId);
}
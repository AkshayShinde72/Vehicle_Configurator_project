package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entities.Manufacturer;



public interface ManufacturerRepository extends JpaRepository<Manufacturer, Long> {

	List<Manufacturer> findBySegmentId(Long segId);

}

package com.example.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.repositories.ComponentRepository;

public class ComponentManagerImpl implements Componentmanager{
	@Autowired
	private ComponentRepository component_repo;
}
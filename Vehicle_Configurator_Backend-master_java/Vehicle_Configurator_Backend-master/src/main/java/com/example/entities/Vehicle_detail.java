package com.example.entities;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "vehicle_detail")
public class Vehicle_detail {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int config_id;
	
	private String comp_type;
	
	private String is_configurable;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "model_id")
	private Model variant;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "comp_id")
	private Component  component;

	public int getConfig_id() {
		return config_id;
	}

	public void setConfig_id(int config_id) {
		this.config_id = config_id;
	}


	public String getComp_type() {
		return comp_type;
	}

	public void setComp_type(String comp_type) {
		this.comp_type = comp_type;
	}

	public String getIs_configurable() {
		return is_configurable;
	}

	public void setIs_configurable(String is_configurable) {
		this.is_configurable = is_configurable;
	}


	
	
	
	
	
	
	
	
	

}

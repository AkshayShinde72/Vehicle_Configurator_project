package com.example.entities;



import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "component")
public class Component {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int comp_id;
	
	private String comp_name;
	
	private String sub_type;
	
	
	@OneToMany(cascade = CascadeType.ALL , mappedBy = "component")
	private Set<Vehicle_detail> com_vehicles;

	public int getComp_id() {
		return comp_id;
	}

	public void setComp_id(int comp_id) {
		this.comp_id = comp_id;
	}

	public String getComp_name() {
		return comp_name;
	}

	public void setComp_name(String comp_name) {
		this.comp_name = comp_name;
	}

	public String getSub_type() {
		return sub_type;
	}

	public void setSub_type(String sub_type) {
		this.sub_type = sub_type;
	}
	
	


	

}

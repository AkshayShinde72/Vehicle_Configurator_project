package com.example.entities;


import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "models")
public class Model {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id; 
    private String modelName; 
    private double price;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "Seg_id")
    private Segment segmentMaster; 

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "Mfg_id")
    private Manufacturer mfgMaster; 
    
    @OneToMany(cascade = CascadeType.ALL , mappedBy = "variant")
	private Set<Vehicle_detail> vehicles;

    private String imagePath;

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getModelName() {
        return modelName;
    }

    public void setModelName(String modelName) {
        this.modelName = modelName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Segment getSegmentMaster() {
        return segmentMaster;
    }

    public void setSegmentMaster(Segment segmentMaster) {
        this.segmentMaster = segmentMaster;
    }

    public Manufacturer getMfgMaster() {
        return mfgMaster;
    }

    public void setMfgMaster(Manufacturer mfgMaster) {
        this.mfgMaster = mfgMaster;
    }



}

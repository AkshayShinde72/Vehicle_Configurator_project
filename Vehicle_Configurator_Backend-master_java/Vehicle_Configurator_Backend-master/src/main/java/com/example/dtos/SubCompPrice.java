
package com.example.dtos;

public class SubCompPrice {
	
	private String Sub_type;
	
	private double delta_price;
	
	private int alt_id;
	
	

	public SubCompPrice(String sub_type, double delta_price, int alt_id) {
		super();
		Sub_type = sub_type;
		this.delta_price = delta_price;
		this.alt_id = alt_id;
	}

	public String getSub_type() {
		return Sub_type;
	}

	public void setSub_type(String sub_type) {
		Sub_type = sub_type;
	}

	public double getPrice() {
		return delta_price;
	}

	public void setPrice(int price) {
		this.delta_price = price;
	}

	public int getAlt_id() {
		return alt_id;
	}

	public void setAlt_id(int alt_id) {
		this.alt_id = alt_id;
	}
	
	
	
	

}
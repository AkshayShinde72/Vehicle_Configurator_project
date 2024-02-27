package com.example.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
	
	//@Email(message = "Invalid email format") // Add the @Email annotation here
	private String emailid;
	
	//@NotBlank(message = "Username is mandatory")
    private String username;
	
	//@NotBlank(message = "Password is Mandatory ")
    private String password;
	
	//@NotBlank(message = "Componey name is mandatory")
    private String comp_name;
	
	//@NotBlank(message = "Address is mandatory")
	private String address;
	
    //@Pattern(regexp = "^[0-9]{10}$", message = "Invalid mobile number format")
	private String telephone;
	
	//@NotBlank(message = "Holding is required")
	private String holding;
	
	//@NotBlank(message = "Autherized person name is mandatory")
	private String name_auth_person;
	
	//@NotBlank(message = "Designation is required ")
	private String designation;
	
	//@Pattern(regexp = "^[0-9]{10}$", message = "Invalid mobile number format")
	private String auth_tel;
	
	//@Pattern(regexp = "^[0-9]{10}$", message = "Invalid mobile number format")
	private String auth_cell;
	
	//@NotBlank(message = "This is required ")
	private String comp_st_no;
	
	//@NotBlank(message = "This is required ")
	private String vat_no;
	
	//@NotNull(message = " PAN Number is mandatory")
	private String pan;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}


	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getComp_name() {
		return comp_name;
	}

	public void setComp_name(String comp_name) {
		this.comp_name = comp_name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getHolding() {
		return holding;
	}

	public void setHolding(String holding) {
		this.holding = holding;
	}

	public String getName_auth_person() {
		return name_auth_person;
	}

	public void setName_auth_person(String name_auth_person) {
		this.name_auth_person = name_auth_person;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getAuth_tel() {
		return auth_tel;
	}

	public void setAuth_tel(String auth_tel) {
		this.auth_tel = auth_tel;
	}

	public String getAuth_cell() {
		return auth_cell;
	}

	public void setAuth_cell(String auth_cell) {
		this.auth_cell = auth_cell;
	}

	public String getComp_st_no() {
		return comp_st_no;
	}

	public void setComp_st_no(String comp_st_no) {
		this.comp_st_no = comp_st_no;
	}

	public String getVat_no() {
		return vat_no;
	}

	public void setVat_no(String vat_no) {
		this.vat_no = vat_no;
	}

	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

}

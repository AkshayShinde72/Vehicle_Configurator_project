package com.example.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "alternate_component")
public class Alternate_Component {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int  alt_id;
		private int model_id;
		private int comp_id;
		private int alt_comp_id;
		private double delta_price;
		public int getAlt_id() {
			return alt_id;
		}
		public void setAlt_id(int alt_id) {
			this.alt_id = alt_id;
		}
		public int getModel_id() {
			return model_id;
		}
		public void setModel_id(int model_id) {
			this.model_id = model_id;
		}
		public int getComp_id() {
			return comp_id;
		}
		public void setComp_id(int comp_id) {
			this.comp_id = comp_id;
		}
		public int getAlt_comp_id() {
			return alt_comp_id;
		}
		public void setAlt_comp_id(int alt_comp_id) {
			this.alt_comp_id = alt_comp_id;
		}
		public double getDelta_price() {
			return delta_price;
		}
		public void setDelta_price(double delta_price) {
			this.delta_price = delta_price;
		}
}

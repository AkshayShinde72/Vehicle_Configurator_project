package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entities.ContactUs;


@Repository
public interface ContactUsRepository extends JpaRepository<ContactUs, Integer> {

}

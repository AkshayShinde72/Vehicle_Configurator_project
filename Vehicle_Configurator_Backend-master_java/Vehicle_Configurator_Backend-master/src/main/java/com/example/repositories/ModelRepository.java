package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entities.Model;

import jakarta.transaction.Transactional;
@Repository
@Transactional
public interface ModelRepository extends JpaRepository<Model, Integer> {
	@Query(value = "SELECT distinct v.* FROM segments AS s INNER JOIN manufacturers AS m ON s.id = m.seg_id INNER JOIN models AS v ON v.Seg_id = :Seg_id AND v.Mfg_id = :Mfg_id",nativeQuery=true)
	List<Model> getVariants(@Param("Seg_id") int seg_id,@Param("Mfg_id") int mfg_id);
	
	List<Model> findAllById(int id);
}
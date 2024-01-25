package com.medicine.pharmacy.repository;

import com.medicine.pharmacy.model.SanitaryMaterial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SanitaryMaterialRepository extends JpaRepository<SanitaryMaterial, Long> {
}

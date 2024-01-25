package com.medicine.pharmacy.repository;

import com.medicine.pharmacy.model.MedicalCosmetics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalCosmeticsRepository extends JpaRepository<MedicalCosmetics, Long> {
}

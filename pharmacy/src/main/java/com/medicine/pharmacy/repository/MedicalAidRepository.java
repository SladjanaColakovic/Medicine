package com.medicine.pharmacy.repository;

import com.medicine.pharmacy.model.MedicalAid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalAidRepository extends JpaRepository<MedicalAid, Long> {
}

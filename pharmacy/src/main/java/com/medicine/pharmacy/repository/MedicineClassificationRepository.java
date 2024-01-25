package com.medicine.pharmacy.repository;

import com.medicine.pharmacy.model.MedicineClassification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicineClassificationRepository extends JpaRepository<MedicineClassification, Long> {
}

package com.medicine.pharmacy.repository;

import com.medicine.pharmacy.model.Medicine;
import com.medicine.pharmacy.model.MedicineClassification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long> {
    List<Medicine> findByClassificationId(Long classificationId);
}
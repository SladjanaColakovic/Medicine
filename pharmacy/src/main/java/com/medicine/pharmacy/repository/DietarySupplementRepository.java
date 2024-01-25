package com.medicine.pharmacy.repository;

import com.medicine.pharmacy.model.DietarySupplement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DietarySupplementRepository extends JpaRepository<DietarySupplement, Long> {
}

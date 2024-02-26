package com.medicine.pharmacy.repository;

import com.medicine.pharmacy.model.MedicalCosmetics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicalCosmeticsRepository extends JpaRepository<MedicalCosmetics, Long> {

    @Query("select c from MedicalCosmetics c where (:searchTerm is null OR lower(c.name) like concat('%', lower(:searchTerm), '%'))")
    List<MedicalCosmetics> search(String searchTerm);
}

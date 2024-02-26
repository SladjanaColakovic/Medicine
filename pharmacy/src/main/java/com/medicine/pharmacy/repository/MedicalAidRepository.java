package com.medicine.pharmacy.repository;

import com.medicine.pharmacy.model.MedicalAid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicalAidRepository extends JpaRepository<MedicalAid, Long> {
    @Query("select a from MedicalAid a where (:searchTerm is null OR lower(a.name) like concat('%', lower(:searchTerm), '%'))")
    List<MedicalAid> search(String searchTerm);
}

package com.medicine.pharmacy.repository;

import com.medicine.pharmacy.model.SanitaryMaterial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SanitaryMaterialRepository extends JpaRepository<SanitaryMaterial, Long> {
    @Query("select m from SanitaryMaterial m where (:searchTerm is null OR lower(m.name) like concat('%', lower(:searchTerm), '%'))")
    List<SanitaryMaterial> search(String searchTerm);
}

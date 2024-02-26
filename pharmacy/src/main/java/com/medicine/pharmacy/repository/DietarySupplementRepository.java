package com.medicine.pharmacy.repository;

import com.medicine.pharmacy.model.DietarySupplement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DietarySupplementRepository extends JpaRepository<DietarySupplement, Long> {
    @Query("select s from DietarySupplement s where (:searchTerm is null OR lower(s.name) like concat('%', lower(:searchTerm), '%'))")
    List<DietarySupplement> search(String searchTerm);
}

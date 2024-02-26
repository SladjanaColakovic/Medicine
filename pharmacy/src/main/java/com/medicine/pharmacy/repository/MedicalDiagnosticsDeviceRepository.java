package com.medicine.pharmacy.repository;

import com.medicine.pharmacy.model.MedicalDiagnosticsDevice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicalDiagnosticsDeviceRepository extends JpaRepository<MedicalDiagnosticsDevice, Long> {
    @Query("select d from MedicalDiagnosticsDevice d where (:searchTerm is null OR lower(d.name) like concat('%', lower(:searchTerm), '%'))")
    List<MedicalDiagnosticsDevice> search(String searchTerm);
}

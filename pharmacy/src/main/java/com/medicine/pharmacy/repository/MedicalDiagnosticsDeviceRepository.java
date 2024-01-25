package com.medicine.pharmacy.repository;

import com.medicine.pharmacy.model.MedicalDiagnosticsDevice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalDiagnosticsDeviceRepository extends JpaRepository<MedicalDiagnosticsDevice, Long> {
}

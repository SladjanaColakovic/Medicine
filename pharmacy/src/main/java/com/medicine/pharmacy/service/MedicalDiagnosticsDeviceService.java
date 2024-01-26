package com.medicine.pharmacy.service;

import com.medicine.pharmacy.dto.EditMedicalDiagnosticsDeviceDto;
import com.medicine.pharmacy.dto.NewMedicalDiagnosticsDeviceDto;
import com.medicine.pharmacy.model.MedicalDiagnosticsDevice;

import java.util.List;

public interface MedicalDiagnosticsDeviceService {
    MedicalDiagnosticsDevice add(NewMedicalDiagnosticsDeviceDto newMedicalDiagnosticsDevice);
    List<MedicalDiagnosticsDevice> getAll();
    MedicalDiagnosticsDevice getById(Long id);
    MedicalDiagnosticsDevice edit(EditMedicalDiagnosticsDeviceDto editMedicalDiagnosticsDevice);
    void delete(Long id);
}
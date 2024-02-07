package com.medicine.pharmacy.service;

import com.medicine.pharmacy.dto.EditMedicalDiagnosticsDeviceDto;
import com.medicine.pharmacy.dto.NewMedicalDiagnosticsDeviceDto;
import com.medicine.pharmacy.model.MedicalDiagnosticsDevice;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface MedicalDiagnosticsDeviceService {
    MedicalDiagnosticsDevice add(NewMedicalDiagnosticsDeviceDto newMedicalDiagnosticsDevice, MultipartFile image);
    List<MedicalDiagnosticsDevice> getAll();
    MedicalDiagnosticsDevice getById(Long id);
    MedicalDiagnosticsDevice edit(EditMedicalDiagnosticsDeviceDto editMedicalDiagnosticsDevice);
    void delete(Long id);
    List<MedicalDiagnosticsDevice> search(String searchTerm);
    MedicalDiagnosticsDevice changeImage(Long id, MultipartFile image);
}

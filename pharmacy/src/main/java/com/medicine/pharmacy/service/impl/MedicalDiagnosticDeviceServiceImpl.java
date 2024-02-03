package com.medicine.pharmacy.service.impl;

import com.medicine.pharmacy.dto.EditMedicalDiagnosticsDeviceDto;
import com.medicine.pharmacy.dto.NewMedicalDiagnosticsDeviceDto;
import com.medicine.pharmacy.model.MedicalDiagnosticsDevice;
import com.medicine.pharmacy.repository.MedicalDiagnosticsDeviceRepository;
import com.medicine.pharmacy.service.MedicalDiagnosticsDeviceService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalDiagnosticDeviceServiceImpl implements MedicalDiagnosticsDeviceService {

    @Autowired
    private MedicalDiagnosticsDeviceRepository repository;

    @Autowired
    private ModelMapper mapper;

    @Override
    public MedicalDiagnosticsDevice add(NewMedicalDiagnosticsDeviceDto newMedicalDiagnosticsDevice) {
        MedicalDiagnosticsDevice medicalDiagnosticsDevice = mapper.map(newMedicalDiagnosticsDevice, MedicalDiagnosticsDevice.class);
        return repository.save(medicalDiagnosticsDevice);
    }

    @Override
    public List<MedicalDiagnosticsDevice> getAll() {
        return repository.findAll();
    }

    @Override
    public MedicalDiagnosticsDevice getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public MedicalDiagnosticsDevice edit(EditMedicalDiagnosticsDeviceDto editMedicalDiagnosticsDevice) {
        MedicalDiagnosticsDevice edited = mapper.map(editMedicalDiagnosticsDevice, MedicalDiagnosticsDevice.class);
        return repository.save(edited);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<MedicalDiagnosticsDevice> search(String searchTerm) {
        return repository.search(searchTerm);
    }
}

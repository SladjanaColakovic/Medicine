package com.medicine.pharmacy.service.impl;

import com.medicine.pharmacy.dto.EditMedicalCosmeticsDto;
import com.medicine.pharmacy.dto.NewMedicalCosmeticsDto;
import com.medicine.pharmacy.model.MedicalCosmetics;
import com.medicine.pharmacy.repository.MedicalCosmeticsRepository;
import com.medicine.pharmacy.service.MedicalCosmeticsService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalCosmeticsServiceImpl implements MedicalCosmeticsService {

    @Autowired
    private MedicalCosmeticsRepository repository;

    @Autowired
    private ModelMapper mapper;
    @Override
    public MedicalCosmetics add(NewMedicalCosmeticsDto newMedicalCosmetics) {
        MedicalCosmetics medicalCosmetics = mapper.map(newMedicalCosmetics, MedicalCosmetics.class);
        return repository.save(medicalCosmetics);
    }

    @Override
    public List<MedicalCosmetics> getAll() {
        return repository.findAll();
    }

    @Override
    public MedicalCosmetics getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public MedicalCosmetics edit(EditMedicalCosmeticsDto editMedicalCosmetics) {
        MedicalCosmetics edited = mapper.map(editMedicalCosmetics, MedicalCosmetics.class);
        return repository.save(edited);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<MedicalCosmetics> search(String searchTerm) {
        return repository.search(searchTerm);
    }
}

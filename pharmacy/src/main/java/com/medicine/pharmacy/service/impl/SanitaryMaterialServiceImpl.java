package com.medicine.pharmacy.service.impl;

import com.medicine.pharmacy.dto.EditSanitaryMaterialDto;
import com.medicine.pharmacy.dto.NewSanitaryMaterialDto;
import com.medicine.pharmacy.model.SanitaryMaterial;
import com.medicine.pharmacy.repository.SanitaryMaterialRepository;
import com.medicine.pharmacy.service.SanitaryMaterialService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SanitaryMaterialServiceImpl implements SanitaryMaterialService {

    @Autowired
    private SanitaryMaterialRepository repository;
    @Autowired
    private ModelMapper mapper;

    @Override
    public SanitaryMaterial add(NewSanitaryMaterialDto newSanitaryMaterial) {
        SanitaryMaterial sanitaryMaterial = mapper.map(newSanitaryMaterial, SanitaryMaterial.class);
        return repository.save(sanitaryMaterial);
    }

    @Override
    public List<SanitaryMaterial> getAll() {
        return repository.findAll();
    }

    @Override
    public SanitaryMaterial getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public SanitaryMaterial edit(EditSanitaryMaterialDto editSanitaryMaterial) {
        SanitaryMaterial edited = mapper.map(editSanitaryMaterial, SanitaryMaterial.class);
        return repository.save(edited);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<SanitaryMaterial> search(String searchTerm) {
        return repository.search(searchTerm);
    }
}

package com.medicine.pharmacy.service.impl;

import com.medicine.pharmacy.dto.EditSanitaryMaterialDto;
import com.medicine.pharmacy.dto.NewSanitaryMaterialDto;
import com.medicine.pharmacy.model.Image;
import com.medicine.pharmacy.model.SanitaryMaterial;
import com.medicine.pharmacy.repository.SanitaryMaterialRepository;
import com.medicine.pharmacy.service.ImageService;
import com.medicine.pharmacy.service.SanitaryMaterialService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class SanitaryMaterialServiceImpl implements SanitaryMaterialService {

    @Autowired
    private SanitaryMaterialRepository repository;
    @Autowired
    private ModelMapper mapper;
    @Autowired
    private ImageService imageService;

    @Override
    public SanitaryMaterial add(NewSanitaryMaterialDto newSanitaryMaterial, MultipartFile image) {
        SanitaryMaterial sanitaryMaterial = mapper.map(newSanitaryMaterial, SanitaryMaterial.class);
        Image materialImage = imageService.createImage(image);
        sanitaryMaterial.setImage(materialImage);
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
        Image image = repository.findById(editSanitaryMaterial.getId()).orElse(null).getImage();
        edited.setImage(image);
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

    @Override
    public SanitaryMaterial changeImage(Long id, MultipartFile image) {
        SanitaryMaterial material = repository.findById(id).orElse(null);
        Image materialImage = imageService.createImage(image);
        material.setImage(materialImage);
        return repository.save(material);
    }
}

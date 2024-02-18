package com.medicine.pharmacy.service.impl;

import com.medicine.pharmacy.dto.EditMedicalCosmeticsDto;
import com.medicine.pharmacy.dto.NewMedicalCosmeticsDto;
import com.medicine.pharmacy.model.Image;
import com.medicine.pharmacy.model.MedicalCosmetics;
import com.medicine.pharmacy.repository.MedicalCosmeticsRepository;
import com.medicine.pharmacy.service.ImageService;
import com.medicine.pharmacy.service.MedicalCosmeticsService;
import com.medicine.pharmacy.validation.MedicalCosmeticsValidation;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class MedicalCosmeticsServiceImpl implements MedicalCosmeticsService {

    @Autowired
    private MedicalCosmeticsRepository repository;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private ImageService imageService;
    @Override
    public MedicalCosmetics add(NewMedicalCosmeticsDto newMedicalCosmetics, MultipartFile image) {
        if(!MedicalCosmeticsValidation.isAddOperationValid(newMedicalCosmetics)) return null;
        MedicalCosmetics medicalCosmetics = mapper.map(newMedicalCosmetics, MedicalCosmetics.class);
        Image cosmeticImage = imageService.createImage(image);
        if(cosmeticImage == null) return null;
        medicalCosmetics.setImage(cosmeticImage);
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
        if(!MedicalCosmeticsValidation.isEditOperationValid(editMedicalCosmetics)) return null;
        MedicalCosmetics edited = mapper.map(editMedicalCosmetics, MedicalCosmetics.class);
        MedicalCosmetics cosmetic = repository.findById(editMedicalCosmetics.getId()).orElse(null);
        if(cosmetic == null) return null;
        Image image = cosmetic.getImage();
        edited.setImage(image);
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

    @Override
    public MedicalCosmetics changeImage(Long id, MultipartFile image) {
        MedicalCosmetics cosmetic = repository.findById(id).orElse(null);
        if(cosmetic == null) return null;
        Image cosmeticImage = imageService.createImage(image);
        if(cosmeticImage == null) return null;
        cosmetic.setImage(cosmeticImage);
        return repository.save(cosmetic);
    }
}

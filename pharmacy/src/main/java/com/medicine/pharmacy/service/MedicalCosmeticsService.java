package com.medicine.pharmacy.service;


import com.medicine.pharmacy.dto.EditMedicalCosmeticsDto;
import com.medicine.pharmacy.dto.NewMedicalCosmeticsDto;
import com.medicine.pharmacy.model.MedicalCosmetics;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface MedicalCosmeticsService {
    MedicalCosmetics add(NewMedicalCosmeticsDto newMedicalCosmetics, MultipartFile image);
    List<MedicalCosmetics> getAll();
    MedicalCosmetics getById(Long id);
    MedicalCosmetics edit(EditMedicalCosmeticsDto editMedicalCosmetics);
    void delete(Long id);
    List<MedicalCosmetics> search(String searchTerm);
    MedicalCosmetics changeImage(Long id, MultipartFile image);
}

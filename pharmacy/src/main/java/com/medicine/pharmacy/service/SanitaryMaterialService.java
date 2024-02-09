package com.medicine.pharmacy.service;


import com.medicine.pharmacy.dto.EditSanitaryMaterialDto;
import com.medicine.pharmacy.dto.NewSanitaryMaterialDto;
import com.medicine.pharmacy.model.SanitaryMaterial;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface SanitaryMaterialService {
    SanitaryMaterial add(NewSanitaryMaterialDto newSanitaryMaterial, MultipartFile image);
    List<SanitaryMaterial> getAll();
    SanitaryMaterial getById(Long id);
    SanitaryMaterial edit(EditSanitaryMaterialDto editSanitaryMaterial);
    void delete(Long id);
    List<SanitaryMaterial> search(String searchTerm);
    SanitaryMaterial changeImage(Long id, MultipartFile image);
}

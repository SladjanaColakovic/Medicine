package com.medicine.pharmacy.service;


import com.medicine.pharmacy.dto.EditSanitaryMaterialDto;
import com.medicine.pharmacy.dto.NewSanitaryMaterialDto;
import com.medicine.pharmacy.model.SanitaryMaterial;

import java.util.List;

public interface SanitaryMaterialService {
    SanitaryMaterial add(NewSanitaryMaterialDto newSanitaryMaterial);
    List<SanitaryMaterial> getAll();
    SanitaryMaterial getById(Long id);
    SanitaryMaterial edit(EditSanitaryMaterialDto editSanitaryMaterial);
    void delete(Long id);
}

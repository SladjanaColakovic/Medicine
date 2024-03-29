package com.medicine.pharmacy.service;

import com.medicine.pharmacy.dto.EditDietarySupplementDto;
import com.medicine.pharmacy.dto.NewDietarySupplementDto;
import com.medicine.pharmacy.model.DietarySupplement;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface DietarySupplementService {
    DietarySupplement add(NewDietarySupplementDto newDietarySupplement, MultipartFile image);
    List<DietarySupplement> getAll();
    DietarySupplement getById(Long id);
    DietarySupplement edit(EditDietarySupplementDto editDietarySupplement);
    void delete(Long id);
    List<DietarySupplement> search(String searchTerm);
    DietarySupplement changeImage(Long id, MultipartFile image);

}

package com.medicine.pharmacy.service;

import com.medicine.pharmacy.dto.EditMedicineDto;
import com.medicine.pharmacy.dto.NewMedicineDto;
import com.medicine.pharmacy.model.Medicine;

import java.util.List;

public interface MedicineService {
    Medicine add(NewMedicineDto newMedicine);
    List<Medicine> getAll();
    Medicine getById(Long id);
    Medicine edit(EditMedicineDto editMedicine);
    void delete(Long id);
    List<Medicine> getByClassification(Long classificationId);
    List<Medicine> search(String searchTerm);

}

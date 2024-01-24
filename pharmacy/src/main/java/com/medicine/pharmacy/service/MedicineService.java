package com.medicine.pharmacy.service;

import com.medicine.pharmacy.dto.NewMedicineDto;
import com.medicine.pharmacy.model.Medicine;

public interface MedicineService {
    Medicine addMedicine(NewMedicineDto newMedicine);
}

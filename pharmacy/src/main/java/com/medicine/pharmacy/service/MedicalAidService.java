package com.medicine.pharmacy.service;

import com.medicine.pharmacy.dto.EditMedicalAidDto;
import com.medicine.pharmacy.dto.NewMedicalAidDto;
import com.medicine.pharmacy.model.MedicalAid;

import java.util.List;

public interface MedicalAidService {
    MedicalAid add(NewMedicalAidDto newMedicalAid);
    List<MedicalAid> getAll();
    MedicalAid getById(Long id);
    MedicalAid edit(EditMedicalAidDto editMedicalAid);
    void delete(Long id);
}

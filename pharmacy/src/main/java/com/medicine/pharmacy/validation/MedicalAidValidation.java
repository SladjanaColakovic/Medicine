package com.medicine.pharmacy.validation;

import com.medicine.pharmacy.dto.EditMedicalAidDto;
import com.medicine.pharmacy.dto.NewMedicalAidDto;

public class MedicalAidValidation {
    public static Boolean isAddOperationValid(NewMedicalAidDto medicalAid){
        return  medicalAid.getName() != null && !medicalAid.getName().equals("") &&
                medicalAid.getDescription() != null && !medicalAid.getDescription().equals("");
    }

    public static Boolean isEditOperationValid(EditMedicalAidDto medicalAid){
        return  medicalAid.getName() != null && !medicalAid.getName().equals("") &&
                medicalAid.getDescription() != null && !medicalAid.getDescription().equals("");
    }
}

package com.medicine.pharmacy.validation;

import com.medicine.pharmacy.dto.EditMedicalCosmeticsDto;
import com.medicine.pharmacy.dto.NewMedicalCosmeticsDto;

public class MedicalCosmeticsValidation {

    public static Boolean isAddOperationValid(NewMedicalCosmeticsDto medicalCosmetics){
        return medicalCosmetics.getName() != null && !medicalCosmetics.getName().equals("") &&
                medicalCosmetics.getComposition() != null && !medicalCosmetics.getComposition().equals("") &&
                medicalCosmetics.getDescription() != null && !medicalCosmetics.getDescription().equals("") &&
                medicalCosmetics.getApplicationMethod() != null && !medicalCosmetics.getApplicationMethod().equals("") &&
                medicalCosmetics.getForm() != null && !medicalCosmetics.getForm().equals("");
    }

    public static Boolean isEditOperationValid(EditMedicalCosmeticsDto medicalCosmetics){
        return medicalCosmetics.getName() != null && !medicalCosmetics.getName().equals("") &&
                medicalCosmetics.getComposition() != null && !medicalCosmetics.getComposition().equals("") &&
                medicalCosmetics.getDescription() != null && !medicalCosmetics.getDescription().equals("") &&
                medicalCosmetics.getApplicationMethod() != null && !medicalCosmetics.getApplicationMethod().equals("") &&
                medicalCosmetics.getForm() != null && !medicalCosmetics.getForm().equals("");
    }
}

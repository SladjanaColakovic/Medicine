package com.medicine.pharmacy.validation;

import com.medicine.pharmacy.dto.EditMedicineDto;
import com.medicine.pharmacy.dto.NewMedicineDto;

public class MedicineValidation {
    public static Boolean isAddOperationValid(NewMedicineDto medicine){
        return medicine.getProprietaryName() != null && !medicine.getProprietaryName().equals("") &&
                medicine.getNotProprietaryName() != null && !medicine.getNotProprietaryName().equals("") &&
                medicine.getDose() != null && !medicine.getDose().equals("") &&
                medicine.getComposition() != null && !medicine.getComposition().equals("") &&
                medicine.getClassification() != null && !medicine.getClassification().equals("") &&
                medicine.getIndications() != null && !medicine.getIndications().equals("") &&
                medicine.getContraindications() != null && !medicine.getContraindications().equals("") &&
                medicine.getApplicationMethod() != null && !medicine.getApplicationMethod().equals("") &&
                medicine.getInteractions() != null && !medicine.getInteractions().equals("") &&
                medicine.getSideEffects() != null && !medicine.getSideEffects().equals("");
    }

    public static Boolean isEditOperationValid(EditMedicineDto medicine){
        return medicine.getProprietaryName() != null && !medicine.getProprietaryName().equals("") &&
                medicine.getNotProprietaryName() != null && !medicine.getNotProprietaryName().equals("") &&
                medicine.getDose() != null && !medicine.getDose().equals("") &&
                medicine.getComposition() != null && !medicine.getComposition().equals("") &&
                medicine.getClassification() != null && !medicine.getClassification().equals("") &&
                medicine.getIndications() != null && !medicine.getIndications().equals("") &&
                medicine.getContraindications() != null && !medicine.getContraindications().equals("") &&
                medicine.getApplicationMethod() != null && !medicine.getApplicationMethod().equals("") &&
                medicine.getInteractions() != null && !medicine.getInteractions().equals("") &&
                medicine.getSideEffects() != null && !medicine.getSideEffects().equals("");
    }
}

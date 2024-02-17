package com.medicine.pharmacy.validation;

import com.medicine.pharmacy.dto.EditDietarySupplementDto;
import com.medicine.pharmacy.dto.NewDietarySupplementDto;

public class DietarySupplementValidation {

    public static Boolean isAddOperationValid(NewDietarySupplementDto dietarySupplement) {
        return  dietarySupplement.getDose() != null && !dietarySupplement.getDose().equals("") &&
                dietarySupplement.getComposition() != null && !dietarySupplement.getComposition().equals("") &&
                dietarySupplement.getName() != null && !dietarySupplement.getName().equals("") &&
                dietarySupplement.getIndications() != null && !dietarySupplement.getIndications().equals("") &&
                dietarySupplement.getInteractions() != null && !dietarySupplement.getInteractions().equals("") &&
                dietarySupplement.getApplicationMethod() != null && !dietarySupplement.getApplicationMethod().equals("") &&
                dietarySupplement.getSideEffects() != null && !dietarySupplement.getSideEffects().equals("") &&
                dietarySupplement.getContraindications() != null && !dietarySupplement.getContraindications().equals("");
    }

    public static Boolean isEditOperationValid(EditDietarySupplementDto dietarySupplement){
        return  dietarySupplement.getDose() != null && !dietarySupplement.getDose().equals("") &&
                dietarySupplement.getComposition() != null && !dietarySupplement.getComposition().equals("") &&
                dietarySupplement.getName() != null && !dietarySupplement.getName().equals("") &&
                dietarySupplement.getIndications() != null && !dietarySupplement.getIndications().equals("") &&
                dietarySupplement.getInteractions() != null && !dietarySupplement.getInteractions().equals("") &&
                dietarySupplement.getApplicationMethod() != null && !dietarySupplement.getApplicationMethod().equals("") &&
                dietarySupplement.getSideEffects() != null && !dietarySupplement.getSideEffects().equals("") &&
                dietarySupplement.getContraindications() != null && !dietarySupplement.getContraindications().equals("");
    }

}

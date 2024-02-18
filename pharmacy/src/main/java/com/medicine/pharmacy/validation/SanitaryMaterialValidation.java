package com.medicine.pharmacy.validation;

import com.medicine.pharmacy.dto.EditSanitaryMaterialDto;
import com.medicine.pharmacy.dto.NewSanitaryMaterialDto;

public class SanitaryMaterialValidation {
    public static Boolean isAddOperationValid(NewSanitaryMaterialDto sanitaryMaterial){
        return sanitaryMaterial.getName() != null && !sanitaryMaterial.getName().equals("") &&
                sanitaryMaterial.getDescription() != null && !sanitaryMaterial.getDescription().equals("");
    }

    public static Boolean isEditOperationValid(EditSanitaryMaterialDto sanitaryMaterial){
        return sanitaryMaterial.getName() != null && !sanitaryMaterial.getName().equals("") &&
                sanitaryMaterial.getDescription() != null && !sanitaryMaterial.getDescription().equals("");
    }
}

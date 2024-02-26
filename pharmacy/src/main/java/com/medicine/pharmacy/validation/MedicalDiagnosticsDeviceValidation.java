package com.medicine.pharmacy.validation;

import com.medicine.pharmacy.dto.EditMedicalDiagnosticsDeviceDto;
import com.medicine.pharmacy.dto.NewMedicalDiagnosticsDeviceDto;

public class MedicalDiagnosticsDeviceValidation {

    public static Boolean isAddOperationValid(NewMedicalDiagnosticsDeviceDto medicalDiagnosticsDevice){
        return medicalDiagnosticsDevice.getName() != null && !medicalDiagnosticsDevice.getName().equals("") &&
                medicalDiagnosticsDevice.getDescription() != null && !medicalDiagnosticsDevice.getDescription().equals("") &&
                medicalDiagnosticsDevice.getGuide() != null && !medicalDiagnosticsDevice.getGuide().equals("");
    }

    public static Boolean isEditOperationValid(EditMedicalDiagnosticsDeviceDto medicalDiagnosticsDevice){
        return medicalDiagnosticsDevice.getName() != null && !medicalDiagnosticsDevice.getName().equals("") &&
                medicalDiagnosticsDevice.getDescription() != null && !medicalDiagnosticsDevice.getDescription().equals("") &&
                medicalDiagnosticsDevice.getGuide() != null && !medicalDiagnosticsDevice.getGuide().equals("");
    }
}

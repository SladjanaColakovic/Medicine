package com.medicine.pharmacy.dto;

import com.medicine.pharmacy.model.MedicineClassification;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class NewMedicineDto {
    private String proprietaryName;
    private String notProprietaryName;
    private String indications;
    private String sideEffects;
    private String interactions;
    private String applicationMethod;
    private String composition;
    private String dose;
    private String contraindications;
    private MedicineClassificationDto classification;
}

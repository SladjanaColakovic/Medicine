package com.medicine.pharmacy.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class EditMedicineDto {
    private Long id;
    private String proprietaryName;
    private String notProprietaryName;
    private String indications;
    private String sideEffects;
    private String interactions;
    private String applicationMethod;
    private String composition;
    private String dose;
    private String contraindications;
    private Long classificationId;
}

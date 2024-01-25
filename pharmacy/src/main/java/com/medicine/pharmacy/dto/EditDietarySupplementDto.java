package com.medicine.pharmacy.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class EditDietarySupplementDto {
    private Long id;
    private String name;
    private String composition;
    private String dose;
    private String applicationMethod;
    private String indications;
    private String interactions;
    private String contraindications;
    private String sideEffects;
}

package com.medicine.pharmacy.dto;

import com.medicine.pharmacy.enumeration.MedicineCosmeticsForm;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class NewMedicalCosmeticsDto {
    private String name;
    private String description;
    private String applicationMethod;
    private String composition;
    private MedicineCosmeticsForm form;
}

package com.medicine.pharmacy.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class EditMedicalDiagnosticsDeviceDto {
    private Long id;
    private String name;
    private String description;
    private String guide;
}

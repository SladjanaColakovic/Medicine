package com.medicine.pharmacy.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@NoArgsConstructor
public class NewMedicalDiagnosticsDeviceDto {
    private String name;
    private String description;
    private String guide;
}

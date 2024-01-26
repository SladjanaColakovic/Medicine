package com.medicine.pharmacy.model;

import com.medicine.pharmacy.enumeration.MedicineCosmeticsForm;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class MedicalCosmetics {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String applicationMethod;
    private String composition;
    private MedicineCosmeticsForm form;

    @OneToOne
    private Image image;
}

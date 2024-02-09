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
    @Column(length = 1024)
    private String description;
    @Column(length = 1024)
    private String applicationMethod;
    @Column(length = 1024)
    private String composition;
    private MedicineCosmeticsForm form;

    @OneToOne(cascade = CascadeType.ALL)
    private Image image;
}

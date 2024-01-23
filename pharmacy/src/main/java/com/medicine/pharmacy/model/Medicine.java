package com.medicine.pharmacy.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Medicine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    @OneToOne
    @JoinColumn(name = "classification_id", referencedColumnName = "id")
    private MedicineClassification classification;


}

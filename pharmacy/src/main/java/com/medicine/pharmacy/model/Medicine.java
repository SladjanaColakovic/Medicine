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
    @Column(length = 1024)
    private String indications;
    @Column(length = 1024)
    private String sideEffects;
    @Column(length = 1024)
    private String interactions;
    @Column(length = 1024)
    private String applicationMethod;
    @Column(length = 1024)
    private String composition;
    private String dose;
    @Column(length = 1024)
    private String contraindications;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "classification_id", referencedColumnName = "id")
    private MedicineClassification classification;

    @OneToOne
    private Image image;


}

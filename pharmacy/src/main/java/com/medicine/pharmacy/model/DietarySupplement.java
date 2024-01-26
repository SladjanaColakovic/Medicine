package com.medicine.pharmacy.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class DietarySupplement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String composition;
    private String dose;
    private String applicationMethod;
    private String indications;
    private String interactions;
    private String contraindications;
    private String sideEffects;

    @OneToOne
    private Image image;
}

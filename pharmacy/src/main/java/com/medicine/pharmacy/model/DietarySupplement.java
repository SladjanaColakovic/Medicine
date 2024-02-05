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
    @Column(length = 1024)
    private String composition;
    @Column(length = 1024)
    private String dose;
    @Column(length = 1024)
    private String applicationMethod;
    @Column(length = 1024)
    private String indications;
    @Column(length = 1024)
    private String interactions;
    @Column(length = 1024)
    private String contraindications;
    @Column(length = 1024)
    private String sideEffects;

    @OneToOne
    private Image image;
}

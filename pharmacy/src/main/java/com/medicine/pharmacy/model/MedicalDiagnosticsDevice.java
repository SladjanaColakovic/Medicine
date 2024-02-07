package com.medicine.pharmacy.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class MedicalDiagnosticsDevice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    @Column(length = 1024)
    private String description;
    @Column(length = 1024)
    private String guide;

    @OneToOne(cascade = CascadeType.ALL)
    private Image image;
}

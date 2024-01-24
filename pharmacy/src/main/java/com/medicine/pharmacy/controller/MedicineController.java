package com.medicine.pharmacy.controller;

import com.medicine.pharmacy.dto.NewMedicineDto;
import com.medicine.pharmacy.model.Medicine;
import com.medicine.pharmacy.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/medicine")
public class MedicineController {

    @Autowired
    private MedicineService service;
    @PostMapping
    public ResponseEntity<?> addMedicine(@RequestBody NewMedicineDto newMedicine){
        Medicine medicine =  service.addMedicine(newMedicine);
        return new ResponseEntity<>(medicine, HttpStatus.CREATED);
    }
}

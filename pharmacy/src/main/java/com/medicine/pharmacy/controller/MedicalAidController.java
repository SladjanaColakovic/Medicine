package com.medicine.pharmacy.controller;

import com.medicine.pharmacy.dto.EditMedicalAidDto;
import com.medicine.pharmacy.dto.NewMedicalAidDto;
import com.medicine.pharmacy.service.MedicalAidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/medicalAid")
public class MedicalAidController {

    @Autowired
    private MedicalAidService service;

    @PostMapping
    public ResponseEntity<?> add(@RequestBody NewMedicalAidDto newMedicalAid){
        return new ResponseEntity<>(service.add(newMedicalAid), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getAll(){
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        return new ResponseEntity<>(service.getById(id), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> edit(@RequestBody EditMedicalAidDto editMedicalAid){
        return new ResponseEntity<>(service.edit(editMedicalAid), HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

package com.medicine.pharmacy.controller;

import com.medicine.pharmacy.dto.EditMedicalCosmeticsDto;
import com.medicine.pharmacy.dto.NewMedicalCosmeticsDto;
import com.medicine.pharmacy.service.MedicalCosmeticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/cosmetics")
public class MedicalCosmeticsController {

    @Autowired
    private MedicalCosmeticsService service;

    @PostMapping
    public ResponseEntity<?> add(@RequestBody NewMedicalCosmeticsDto newMedicalCosmetics){
        return new ResponseEntity<>(service.add(newMedicalCosmetics), HttpStatus.CREATED);
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
    public ResponseEntity<?> edit(@RequestBody EditMedicalCosmeticsDto editMedicalCosmetics){
        return new ResponseEntity<>(service.edit(editMedicalCosmetics), HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(path = "/search")
    public ResponseEntity<?> search(@RequestParam("searchTerm") String searchTerm){
        return new ResponseEntity<>(service.search(searchTerm), HttpStatus.OK);
    }
}

package com.medicine.pharmacy.controller;

import com.medicine.pharmacy.dto.EditMedicalCosmeticsDto;
import com.medicine.pharmacy.dto.NewMedicalCosmeticsDto;
import com.medicine.pharmacy.model.MedicalCosmetics;
import com.medicine.pharmacy.service.MedicalCosmeticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/api/cosmetics")
public class MedicalCosmeticsController {

    @Autowired
    private MedicalCosmeticsService service;

    @PostMapping
    public ResponseEntity<?> add(@RequestPart("cosmetic") NewMedicalCosmeticsDto newMedicalCosmetics,
                                 @RequestPart("image") MultipartFile image){
        MedicalCosmetics result = service.add(newMedicalCosmetics, image);
        if(result == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getAll(){
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        MedicalCosmetics result = service.getById(id);
        if(result == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> edit(@RequestBody EditMedicalCosmeticsDto editMedicalCosmetics){
        MedicalCosmetics result = service.edit(editMedicalCosmetics);
        if(result == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(result, HttpStatus.OK);
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

    @PutMapping(value = "/image")
    public ResponseEntity<?> changeImage(@RequestPart("id") Long id,
                                         @RequestPart("image") MultipartFile image) {
        MedicalCosmetics result = service.changeImage(id, image);
        if(result == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}

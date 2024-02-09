package com.medicine.pharmacy.controller;

import com.medicine.pharmacy.dto.EditSanitaryMaterialDto;
import com.medicine.pharmacy.dto.NewMedicineDto;
import com.medicine.pharmacy.dto.NewSanitaryMaterialDto;
import com.medicine.pharmacy.service.SanitaryMaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/api/sanitaryMaterials")
public class SanitaryMaterialController {

    @Autowired
    private SanitaryMaterialService service;

    @PostMapping
    public ResponseEntity<?> add(@RequestPart("material") NewSanitaryMaterialDto newSanitaryMaterial,
                                 @RequestPart("image") MultipartFile image){
        return new ResponseEntity<>(service.add(newSanitaryMaterial, image), HttpStatus.CREATED);
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
    public ResponseEntity<?> edit(@RequestBody EditSanitaryMaterialDto editSanitaryMaterial){
        return new ResponseEntity<>(service.edit(editSanitaryMaterial), HttpStatus.OK);
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
        return new ResponseEntity<>(service.changeImage(id, image), HttpStatus.OK);
    }
}

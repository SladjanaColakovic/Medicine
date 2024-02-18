package com.medicine.pharmacy.controller;

import com.medicine.pharmacy.dto.EditSanitaryMaterialDto;
import com.medicine.pharmacy.dto.NewMedicineDto;
import com.medicine.pharmacy.dto.NewSanitaryMaterialDto;
import com.medicine.pharmacy.model.SanitaryMaterial;
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
        SanitaryMaterial result = service.add(newSanitaryMaterial, image);
        if(result == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getAll(){
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        SanitaryMaterial result = service.getById(id);
        if(result == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> edit(@RequestBody EditSanitaryMaterialDto editSanitaryMaterial){
        SanitaryMaterial result = service.edit(editSanitaryMaterial);
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
        SanitaryMaterial result = service.changeImage(id, image);
        if(result == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}

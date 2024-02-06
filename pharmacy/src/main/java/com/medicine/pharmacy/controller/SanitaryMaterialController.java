package com.medicine.pharmacy.controller;

import com.medicine.pharmacy.dto.EditSanitaryMaterialDto;
import com.medicine.pharmacy.dto.NewSanitaryMaterialDto;
import com.medicine.pharmacy.service.SanitaryMaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/sanitaryMaterials")
public class SanitaryMaterialController {

    @Autowired
    private SanitaryMaterialService service;

    @PostMapping
    public ResponseEntity<?> add(@RequestBody NewSanitaryMaterialDto newSanitaryMaterial){
        return new ResponseEntity<>(service.add(newSanitaryMaterial), HttpStatus.CREATED);
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
}

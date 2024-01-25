package com.medicine.pharmacy.controller;

import com.medicine.pharmacy.dto.EditDietarySupplementDto;
import com.medicine.pharmacy.dto.NewDietarySupplementDto;
import com.medicine.pharmacy.service.DietarySupplementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/supplement")
public class DietarySupplementController {

    @Autowired
    private DietarySupplementService service;

    @PostMapping
    public ResponseEntity<?> add(@RequestBody NewDietarySupplementDto newDietarySupplement){
        return new ResponseEntity<>(service.add(newDietarySupplement), HttpStatus.CREATED);
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
    public ResponseEntity<?> edit(@RequestBody EditDietarySupplementDto editDietarySupplement){
        return new ResponseEntity<>(service.edit(editDietarySupplement), HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

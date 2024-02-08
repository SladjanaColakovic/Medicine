package com.medicine.pharmacy.controller;

import com.medicine.pharmacy.dto.EditMedicineDto;
import com.medicine.pharmacy.dto.NewMedicineDto;
import com.medicine.pharmacy.model.Medicine;
import com.medicine.pharmacy.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/api/medicine")
public class MedicineController {

    @Autowired
    private MedicineService service;
    @PostMapping
    public ResponseEntity<?> add(@RequestPart("medicine") NewMedicineDto newMedicine,
                                 @RequestPart("image")MultipartFile image){
        Medicine medicine =  service.add(newMedicine, image);
        return new ResponseEntity<>(medicine, HttpStatus.CREATED);
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
    public ResponseEntity<?> edit(@RequestBody EditMedicineDto editMedicine){
        return new ResponseEntity<>(service.edit(editMedicine), HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(path = "/classification/{id}")
    public ResponseEntity<?> getByClassification(@PathVariable Long id){
        return new ResponseEntity<>(service.getByClassification(id), HttpStatus.OK);
    }

    @GetMapping(path = "/search")
    public ResponseEntity<?> search(@RequestParam("searchTerm") String searchTerm,
                                    @RequestParam("classification") Long id){
        return new ResponseEntity<>(service.search(searchTerm, id), HttpStatus.OK);
    }

    @PutMapping(value = "/image")
    public ResponseEntity<?> changeImage(@RequestPart("id") Long id,
                                         @RequestPart("image") MultipartFile image) {
        return new ResponseEntity<>(service.changeImage(id, image), HttpStatus.OK);
    }
}

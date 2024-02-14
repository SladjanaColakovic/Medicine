package com.medicine.pharmacy.controller;

import com.medicine.pharmacy.dto.EditMedicalAidDto;
import com.medicine.pharmacy.dto.NewMedicalAidDto;
import com.medicine.pharmacy.model.MedicalAid;
import com.medicine.pharmacy.service.MedicalAidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/api/medicalAid")
public class MedicalAidController {

    @Autowired
    private MedicalAidService service;

    @PostMapping
    public ResponseEntity<?> add(@RequestPart("aid") NewMedicalAidDto newMedicalAid,
                                 @RequestPart("image") MultipartFile image){
        return new ResponseEntity<>(service.add(newMedicalAid, image), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getAll(){
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        MedicalAid result = service.getById(id);
        if(result == null) return  new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> edit(@RequestBody EditMedicalAidDto editMedicalAid){
        MedicalAid result = service.edit(editMedicalAid);
        if(result == null) return  new ResponseEntity<>(HttpStatus.BAD_REQUEST);
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
        MedicalAid result = service.changeImage(id, image);
        if(result == null) return  new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}

package com.medicine.pharmacy.controller;

import com.medicine.pharmacy.dto.EditMedicalDiagnosticsDeviceDto;
import com.medicine.pharmacy.dto.NewMedicalDiagnosticsDeviceDto;
import com.medicine.pharmacy.service.MedicalDiagnosticsDeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/api/devices")
public class MedicalDiagnosticsDeviceController {

    @Autowired
    private MedicalDiagnosticsDeviceService service;

    @PostMapping
    public ResponseEntity<?> add(@RequestPart("device") NewMedicalDiagnosticsDeviceDto newMedicalDiagnosticsDevice,
                                 @RequestPart("image") MultipartFile image){
        return new ResponseEntity<>(service.add(newMedicalDiagnosticsDevice, image), HttpStatus.CREATED);
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
    public ResponseEntity<?> edit(@RequestBody EditMedicalDiagnosticsDeviceDto editMedicalDiagnosticsDevice){
        return new ResponseEntity<>(service.edit(editMedicalDiagnosticsDevice), HttpStatus.OK);
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

package com.medicine.pharmacy.service.impl;

import com.medicine.pharmacy.dto.EditMedicalAidDto;
import com.medicine.pharmacy.dto.NewMedicalAidDto;
import com.medicine.pharmacy.model.Image;
import com.medicine.pharmacy.model.MedicalAid;
import com.medicine.pharmacy.repository.MedicalAidRepository;
import com.medicine.pharmacy.service.ImageService;
import com.medicine.pharmacy.service.MedicalAidService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class MedicalAidServiceImpl implements MedicalAidService {

    @Autowired
    private MedicalAidRepository repository;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private ImageService imageService;

    @Override
    public MedicalAid add(NewMedicalAidDto newMedicalAid, MultipartFile image) {
        MedicalAid medicalAid = mapper.map(newMedicalAid, MedicalAid.class);
        Image aidImage = imageService.createImage(image);
        medicalAid.setImage(aidImage);
        return repository.save(medicalAid);
    }

    @Override
    public List<MedicalAid> getAll() {
        return repository.findAll();
    }

    @Override
    public MedicalAid getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public MedicalAid edit(EditMedicalAidDto editMedicalAid) {
        MedicalAid edited = mapper.map(editMedicalAid, MedicalAid.class);
        return repository.save(edited);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<MedicalAid> search(String searchTerm) {
        return repository.search(searchTerm);
    }
}

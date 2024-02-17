package com.medicine.pharmacy.service.impl;

import com.medicine.pharmacy.dto.EditMedicalAidDto;
import com.medicine.pharmacy.dto.NewMedicalAidDto;
import com.medicine.pharmacy.model.Image;
import com.medicine.pharmacy.model.MedicalAid;
import com.medicine.pharmacy.repository.MedicalAidRepository;
import com.medicine.pharmacy.service.ImageService;
import com.medicine.pharmacy.service.MedicalAidService;
import com.medicine.pharmacy.validation.MedicalAidValidation;
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
        if(!MedicalAidValidation.isAddOperationValid(newMedicalAid)) return null;
        MedicalAid medicalAid = mapper.map(newMedicalAid, MedicalAid.class);
        Image aidImage = imageService.createImage(image);
        if(image == null) return null;
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
        if(!MedicalAidValidation.isEditOperationValid(editMedicalAid)) return null;
        MedicalAid aid = repository.findById(editMedicalAid.getId()).orElse(null);
        if(aid == null) return null;
        Image image = aid.getImage();
        MedicalAid edited = mapper.map(editMedicalAid, MedicalAid.class);
        edited.setImage(image);
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

    @Override
    public MedicalAid changeImage(Long id, MultipartFile image) {
        MedicalAid aid = repository.findById(id).orElse(null);
        if(aid == null) return null;
        Image aidImage = imageService.createImage(image);
        if(image == null) return null;
        aid.setImage(aidImage);
        return repository.save(aid);
    }
}

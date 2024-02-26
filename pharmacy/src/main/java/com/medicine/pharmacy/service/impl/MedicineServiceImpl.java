package com.medicine.pharmacy.service.impl;

import com.medicine.pharmacy.dto.EditMedicineDto;
import com.medicine.pharmacy.dto.NewMedicineDto;
import com.medicine.pharmacy.model.Image;
import com.medicine.pharmacy.model.Medicine;
import com.medicine.pharmacy.repository.MedicineRepository;
import com.medicine.pharmacy.service.ImageService;
import com.medicine.pharmacy.service.MedicineService;
import com.medicine.pharmacy.validation.MedicineValidation;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class MedicineServiceImpl implements MedicineService {

    @Autowired
    private MedicineRepository repository;

    @Autowired
    private ImageService imageService;

    @Autowired
    private ModelMapper mapper;
    @Override
    public Medicine add(NewMedicineDto newMedicine, MultipartFile image) {
        if(!MedicineValidation.isAddOperationValid(newMedicine)) return null;
        Medicine medicine = mapper.map(newMedicine, Medicine.class);
        Image medicineImage = imageService.createImage(image);
        if(medicineImage == null) return null;
        medicine.setImage(medicineImage);
        return repository.save(medicine);
    }

    @Override
    public List<Medicine> getAll() {
        return repository.findAll();
    }

    @Override
    public Medicine getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Medicine edit(EditMedicineDto editMedicine) {
        if(!MedicineValidation.isEditOperationValid(editMedicine)) return null;
        Medicine edited = mapper.map(editMedicine, Medicine.class);
        Medicine medicine = repository.findById(editMedicine.getId()).orElse(null);
        if(medicine == null) return null;
        Image image = medicine.getImage();
        edited.setImage(image);
        return repository.save(edited);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<Medicine> getByClassification(Long classificationId) {
        return repository.findByClassificationId(classificationId);
    }

    @Override
    public List<Medicine> search(String searchTerm, Long classificationId) {
        return repository.search(searchTerm, classificationId);
    }

    @Override
    public Medicine changeImage(Long id, MultipartFile image) {
        Medicine medicine = repository.findById(id).orElse(null);
        if(medicine == null) return null;
        Image medicineImage = imageService.createImage(image);
        if(medicineImage == null) return null;
        medicine.setImage(medicineImage);
        return repository.save(medicine);
    }
}

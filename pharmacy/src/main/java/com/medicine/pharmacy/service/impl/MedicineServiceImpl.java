package com.medicine.pharmacy.service.impl;

import com.medicine.pharmacy.dto.EditMedicineDto;
import com.medicine.pharmacy.dto.NewMedicineDto;
import com.medicine.pharmacy.model.Medicine;
import com.medicine.pharmacy.model.MedicineClassification;
import com.medicine.pharmacy.repository.MedicineClassificationRepository;
import com.medicine.pharmacy.repository.MedicineRepository;
import com.medicine.pharmacy.service.MedicineService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicineServiceImpl implements MedicineService {

    @Autowired
    private MedicineRepository repository;

    @Autowired
    private ModelMapper mapper;
    @Override
    public Medicine add(NewMedicineDto newMedicine) {
        Medicine medicine = mapper.map(newMedicine, Medicine.class);
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
        /*Medicine medicine = repository.findById(editMedicine.getId()).get();
        MedicineClassification classification = classificationRepository.findById(editMedicine.getClassificationId()).get();
        medicine.setDose(editMedicine.getDose());
        medicine.setClassification(classification);
        medicine.setComposition(editMedicine.getComposition());
        medicine.setContraindications(editMedicine.getContraindications());
        medicine.setApplicationMethod(editMedicine.getApplicationMethod());
        medicine.setIndications(editMedicine.getIndications());
        medicine.setInteractions(editMedicine.getInteractions());
        medicine.setSideEffects(editMedicine.getSideEffects());
        medicine.setNotProprietaryName(editMedicine.getNotProprietaryName());
        medicine.setProprietaryName(editMedicine.getProprietaryName());*/
        Medicine edited = mapper.map(editMedicine, Medicine.class);
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
}

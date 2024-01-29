package com.medicine.pharmacy.service.impl;

import com.medicine.pharmacy.model.MedicineClassification;
import com.medicine.pharmacy.repository.MedicineClassificationRepository;
import com.medicine.pharmacy.service.MedicineClassificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicineClassificationServiceImpl implements MedicineClassificationService {

    @Autowired
    private MedicineClassificationRepository repository;

    @Override
    public List<MedicineClassification> getAll() {
        return repository.findAll();
    }
}

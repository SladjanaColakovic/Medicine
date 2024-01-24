package com.medicine.pharmacy.service.impl;

import com.medicine.pharmacy.dto.NewMedicineDto;
import com.medicine.pharmacy.model.Medicine;
import com.medicine.pharmacy.repository.MedicineRepository;
import com.medicine.pharmacy.service.MedicineService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MedicineServiceImpl implements MedicineService {

    @Autowired
    private MedicineRepository repository;

    @Autowired
    private ModelMapper mapper;
    @Override
    public Medicine addMedicine(NewMedicineDto newMedicine) {
        Medicine medicine = mapper.map(newMedicine, Medicine.class);
        return repository.save(medicine);
    }
}

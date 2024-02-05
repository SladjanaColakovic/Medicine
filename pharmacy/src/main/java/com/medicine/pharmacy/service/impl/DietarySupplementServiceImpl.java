package com.medicine.pharmacy.service.impl;

import com.medicine.pharmacy.dto.EditDietarySupplementDto;
import com.medicine.pharmacy.dto.NewDietarySupplementDto;
import com.medicine.pharmacy.model.DietarySupplement;
import com.medicine.pharmacy.repository.DietarySupplementRepository;
import com.medicine.pharmacy.service.DietarySupplementService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DietarySupplementServiceImpl implements DietarySupplementService {

    @Autowired
    private DietarySupplementRepository repository;

    @Autowired
    private ModelMapper mapper;

    @Override
    public DietarySupplement add(NewDietarySupplementDto newDietarySupplement) {
        DietarySupplement dietarySupplement = mapper.map(newDietarySupplement, DietarySupplement.class);
        return repository.save(dietarySupplement);
    }

    @Override
    public List<DietarySupplement> getAll() {
        return repository.findAll();
    }

    @Override
    public DietarySupplement getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public DietarySupplement edit(EditDietarySupplementDto editDietarySupplement) {
        DietarySupplement edited = mapper.map(editDietarySupplement, DietarySupplement.class);
        return repository.save(edited);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<DietarySupplement> search(String searchTerm) {
        return repository.search(searchTerm);
    }
}

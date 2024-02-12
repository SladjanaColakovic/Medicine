package com.medicine.pharmacy.service.impl;

import com.medicine.pharmacy.dto.EditDietarySupplementDto;
import com.medicine.pharmacy.dto.NewDietarySupplementDto;
import com.medicine.pharmacy.model.DietarySupplement;
import com.medicine.pharmacy.model.Image;
import com.medicine.pharmacy.repository.DietarySupplementRepository;
import com.medicine.pharmacy.service.DietarySupplementService;
import com.medicine.pharmacy.service.ImageService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class DietarySupplementServiceImpl implements DietarySupplementService {

    @Autowired
    private DietarySupplementRepository repository;

    @Autowired
    private ModelMapper mapper;
    @Autowired
    private ImageService imageService;

    @Override
    public DietarySupplement add(NewDietarySupplementDto newDietarySupplement, MultipartFile image) {
        DietarySupplement dietarySupplement = mapper.map(newDietarySupplement, DietarySupplement.class);
        Image supplementImage = imageService.createImage(image);
        dietarySupplement.setImage(supplementImage);
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
        Image image = repository.findById(editDietarySupplement.getId()).orElse(null).getImage();
        DietarySupplement edited = mapper.map(editDietarySupplement, DietarySupplement.class);
        edited.setImage(image);
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

    @Override
    public DietarySupplement changeImage(Long id, MultipartFile image) {
        DietarySupplement supplement = repository.findById(id).orElse(null);
        Image supplementImage = imageService.createImage(image);
        supplement.setImage(supplementImage);
        return repository.save(supplement);
    }
}

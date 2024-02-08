package com.medicine.pharmacy.service.impl;

import com.medicine.pharmacy.model.Image;
import com.medicine.pharmacy.service.ImageService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class ImageServiceImpl implements ImageService {
    @Override
    public Image createImage(MultipartFile file) {
        Image image = null;
        try {
            image = new Image(file.getOriginalFilename(), file.getContentType(), file.getBytes());
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
        return image;
    }
}

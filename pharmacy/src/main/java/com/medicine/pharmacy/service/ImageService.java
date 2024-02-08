package com.medicine.pharmacy.service;

import com.medicine.pharmacy.model.Image;
import org.springframework.web.multipart.MultipartFile;

public interface ImageService {
    Image createImage(MultipartFile file);
}

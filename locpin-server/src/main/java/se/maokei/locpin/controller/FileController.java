package se.maokei.locpin.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
public class FileController {
    private static final Logger LOGGER = LoggerFactory.getLogger(FileController.class);

    @PostMapping("/photos/add")
    public void addPhoto(@RequestParam("image") MultipartFile image) throws IOException {
        //todo
    }
}

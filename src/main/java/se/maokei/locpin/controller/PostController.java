package se.maokei.locpin.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import se.maokei.locpin.repository.PostRepository;

@RestController
@RequestMapping("/api")
public class PostController {
    @Autowired
    private PostRepository postRepository;

    private static final Logger logger = LoggerFactory.getLogger(PostController.class);
}

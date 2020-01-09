package se.maokei.locpin.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import se.maokei.locpin.model.Post;
import se.maokei.locpin.payload.ApiResponse;
import se.maokei.locpin.payload.PostPayload;
import se.maokei.locpin.repository.PostRepository;
import se.maokei.locpin.security.CurrentUser;
import se.maokei.locpin.service.PostService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/post")
public class PostController {
    @Autowired
    private PostService postService;
    private static final Logger logger = LoggerFactory.getLogger(PostController.class);

    @GetMapping("/getAllPosts")
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }

    @GetMapping("/{postId}")
    public Post getPostById(@PathVariable Long postId) {
        return postService.getPostById(postId);
    }

    @PostMapping
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> createPost(@Valid @RequestBody PostPayload postPayload) {
        //TODO Error validation service
        //if(errorMap != null) return errorMap;
        this.postService.createPost(postPayload);
        return new ResponseEntity<>(
                new ApiResponse(true, "Post Created Successfully"), HttpStatus.OK
        );
    }
}

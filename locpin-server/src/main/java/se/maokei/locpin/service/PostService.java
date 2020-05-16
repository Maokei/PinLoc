package se.maokei.locpin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.maokei.locpin.model.Post;
import se.maokei.locpin.payload.PostPayload;
import se.maokei.locpin.repository.PostRepository;
import se.maokei.locpin.security.UserPrincipal;

import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public List<Post> getAllPosts() {
        List<Post> posts = postRepository.findAll();
        return posts;
    }

    public Post getPostById(Long id) {
        return this.postRepository.findById(id).get();
    }

    public void createPost(PostPayload payload) {
        Post post = new Post();
        post.setImage(payload.getImage());
        post.setLatitude(payload.getLatitude());
        post.setLongitude(payload.getLongitude());
        post.setDescription(payload.getDescription());
        this.postRepository.save(post);
    }
}

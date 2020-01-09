package se.maokei.locpin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import se.maokei.locpin.model.Post;

import java.util.Optional;

public interface PostRepository extends JpaRepository<Post, Long> {
    Optional<Post> findById(Long id);
}

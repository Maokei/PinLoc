package se.maokei.locpin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import se.maokei.locpin.model.Post;

public interface PostRepository extends JpaRepository<Post, Long> {
}

package se.maokei.locpin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import se.maokei.locpin.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}

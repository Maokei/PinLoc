package se.maokei.locpin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import se.maokei.locpin.model.Pin;

public interface PinRepository extends JpaRepository<Pin, Long> {
}

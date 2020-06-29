package se.maokei.locpin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.maokei.locpin.model.DBFile;

@Repository
public interface DBFileRepository extends JpaRepository <DBFile, String> {
}

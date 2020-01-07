package se.maokei.locpin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import se.maokei.locpin.model.Role;
import se.maokei.locpin.model.RoleName;
import se.maokei.locpin.repository.RoleRepository;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {
    @Autowired
    RoleRepository roleRepo;

    public DataInitializer(RoleRepository roleRepo) {
        this.roleRepo = roleRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        initiateRoles();
        initiateTestUser();
    }


    /*@EventListener(value = ApplicationReadyEvent.class)
    public void init() {
        initiateRoles();
    }*/

    /**
     * Sets up default roles for the application
     * INSERT INTO roles(name) VALUES('ROLE_USER');
     * INSERT INTO roles(name) VALUES('ROLE_ADMIN');
     * */
    private void initiateRoles() {
        System.out.println("Inserting roles");
        List<Role> roles = new ArrayList();
        roles.add(new Role(RoleName.ROLE_ADMIN));
        roles.add(new Role(RoleName.ROLE_USER));
        roleRepo.deleteAll();
        roleRepo.saveAll(roles);
        System.out.println("Roles inserted");
    }

    private void initiateTestUser() {

    }
}

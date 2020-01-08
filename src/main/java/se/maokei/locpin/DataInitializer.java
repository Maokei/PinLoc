package se.maokei.locpin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import se.maokei.locpin.exception.ApplicationException;
import se.maokei.locpin.model.Role;
import se.maokei.locpin.model.RoleName;
import se.maokei.locpin.model.User;
import se.maokei.locpin.repository.RoleRepository;
import se.maokei.locpin.repository.UserRepository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {
    @Autowired
    RoleRepository roleRepo;
    @Autowired
    UserRepository userRepo;

    public DataInitializer(RoleRepository roleRepo, UserRepository userRepo) {
        this.roleRepo = roleRepo;
        this.userRepo = userRepo;
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
        User testUser = new User();
        testUser.setName("Administrator");
        testUser.setUsername("admin");
        testUser.setEmail("admin@gmail.com");
        //test12345
        testUser.setPassword("$2a$10$npEFJsg/gzUj0129jz09v.l332yoEysO7JvXnDFg5WbC3DrRT/CUK");
        Role userRoles = roleRepo.findByName(RoleName.ROLE_ADMIN)
                .orElseThrow(() -> new ApplicationException("User Roles not set in time"));
        testUser.setRoles(Collections.singleton(userRoles));
        userRepo.save(testUser);

        User testUser2 = new User();
        testUser2.setName("Bosse");
        testUser2.setUsername("blackcat");
        testUser2.setEmail("bosse@gmail.com");
        //test12345
        testUser2.setPassword("$2a$10$npEFJsg/gzUj0129jz09v.l332yoEysO7JvXnDFg5WbC3DrRT/CUK");
        Role userRoles2 = roleRepo.findByName(RoleName.ROLE_USER)
                .orElseThrow(() -> new ApplicationException("User Roles not set in time"));
        testUser.setRoles(Collections.singleton(userRoles2));
        userRepo.save(testUser);
    }

    private void initiateTestPin() {

    }
}

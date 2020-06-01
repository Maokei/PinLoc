package se.maokei.locpin.web.controllers;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootTest
@AutoConfigureMockMvc
@EnableWebMvc
public class UserControllerTest {
    private String baseUrl = "";

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void usernameAvailableTest() {
        String endpoint = "/user/checkUsernameAvailability";
        String username = "EvilBob";
    }
}

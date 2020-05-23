package se.maokei.locpin.web.controllers;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import se.maokei.locpin.controller.UserController;

@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)
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

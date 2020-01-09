package se.maokei.locpin.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import se.maokei.locpin.exception.ResourceNotFoundException;
import se.maokei.locpin.model.User;
import se.maokei.locpin.payload.UserIdentityAvailability;
import se.maokei.locpin.payload.UserProfile;
import se.maokei.locpin.payload.UserSummary;
import se.maokei.locpin.repository.PostRepository;
import se.maokei.locpin.repository.UserRepository;
import se.maokei.locpin.security.CurrentUser;
import se.maokei.locpin.security.UserPrincipal;

/**
 Get the currently logged in user.
 Check if a username is available for registration.
 Check if an email is available for registration.
 Get the public profile of a user.
 Get a paginated list of se.maokei.pins created by a given user.
 Get a paginated list of se.maokei.pins in which a given user has created
 */

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public UserSummary getCurrentUser(@CurrentUser UserPrincipal currentUser) {
        UserSummary userSummary = new UserSummary(currentUser.getId(), currentUser.getUsername(), currentUser.getName());
        return userSummary;
    }

    @GetMapping("/user/checkUsernameAvailability")
    public UserIdentityAvailability checkUsernameAvailability(@RequestParam(value = "username") String username) {
        Boolean isAvailable = !userRepository.existsByUsername(username);
        return new UserIdentityAvailability(isAvailable);
    }

    @GetMapping("/user/checkEmailAvailability")
    public UserIdentityAvailability checkEmailAvailability(@RequestParam(value = "email") String email) {
        Boolean isAvailable = !userRepository.existsByEmail(email);
        return new UserIdentityAvailability(isAvailable);
    }

    @GetMapping("/users/{username}")
    public UserProfile getUserProfile(@PathVariable(value = "username") String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User", "username", username));

        UserProfile userProfile = new UserProfile(user.getId(), user.getUsername(), user.getName());

        return userProfile;
    }
}
package se.maokei.locpin.payload;

import lombok.Data;

import java.time.Instant;

@Data
public class UserProfile {
    private Long id;
    private String username;
    private String name;


    public UserProfile(Long id, String username, String name) {
        this.id = id;
        this.username = username;
        this.name = name;
    }
}
package se.maokei.locpin.payload;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class PostPayload {
    @NotNull
    private String image;
    @NotNull
    private float longitude;
    @NotNull
    private float latitude;
    @NotBlank
    @Size(max = 500)
    private String description;
}

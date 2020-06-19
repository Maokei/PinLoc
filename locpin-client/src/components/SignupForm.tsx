import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Button from "@material-ui/core/Button";

export const SignupForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const [helperText, setHelperText] = useState("");
    const [error, setError] = useState(false);

    const handleChange = (e: any) => {
        if (
            // eslint-disable-next-line
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        ) {
            setError(true);
        } else {
            setEmail(e.target.value);
        }
        setName(e.target.value);
        setUsername(e.target.value);
        setPassword(e.target.value);
    };

    const handleSubmit = async () => {
        const data = {
            email,
            name,
            password,
            username,
        };
        const res: any = await axios.post(
            "http://localhost:8080/api/auth/signup",
            data
        );
        //handle response
        console.log(res.data);
        console.log(res.data.email);
    };

    useEffect(() => {
        if (email.trim() && name.trim() && username.trim() && password.trim()) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [email, name, username, password]);

    return (
        <form
            style={{ padding: "0 1em" }}
            className="center"
            noValidate
            autoComplete="off">
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <MailOutlineIcon />
                </Grid>
                <Grid item>
                    <TextField
                        id="input-with-icon-grid"
                        className="input-field"
                        label="Email"
                        name="email"
                        error={error}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <HowToRegIcon />
                </Grid>
                <Grid item>
                    <TextField
                        id="input-with-icon-grid"
                        className="input-field"
                        label="Name"
                        error={error}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <AccountCircle />
                </Grid>
                <Grid item>
                    <TextField
                        id="input-with-icon-grid"
                        className="input-field"
                        label="Username"
                        error={error}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <VpnKeyIcon />
                </Grid>
                <Grid item>
                    <TextField
                        id="input-with-icon-grid"
                        className="input-field"
                        label="Password"
                        error={error}
                        helperText={helperText}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
            <br />

            <Button
                className="btn"
                variant="outlined"
                onClick={handleSubmit}
                disabled={isButtonDisabled}>
                Submit
            </Button>
        </form>
    );
};

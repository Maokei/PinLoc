import React, { useState, useEffect } from "react";
// import { AppReducer } from '../reducer'
import axios from "axios";
import { BASE_URL, SIGNIN_ENDPOINT } from "../constants";

import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Button from "@material-ui/core/Button";

export const LoginForm = () => {
    // const [form, dispatch] = useReducer(AppReducer, [])
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [helperText, setHelperText] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (email.trim() && password.trim()) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [email, password]);

    const handleSubmit = async () => {
        const url = `${BASE_URL}${SIGNIN_ENDPOINT}`;
        const data = { email, password };

        const res: any = await axios.post(url, data);

        if (email === data.email && password === data.password) {
            setError(false);
            setHelperText("Login successfully");
        } else {
            setHelperText("Incorrect email or password");
        }

        console.log({ data });
    };

    const handleKeyPress = (e: any) => {
        if (e.keyCode === 13 || e.which === 13) {
            isButtonDisabled || handleSubmit();
        }
    };

    return (
        <form
            style={{ padding: "0 1em" }}
            className="center"
            noValidate
            autoComplete="off">
            {helperText}
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <AccountCircle />
                </Grid>
                <Grid item>
                    <TextField
                        id="input-with-icon-grid"
                        className="input-field"
                        label="Email Address"
                        type="email"
                        error={error}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyPress={(e) => handleKeyPress}
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
                        type="password"
                        error={error}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyPress={(e) => handleKeyPress}
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

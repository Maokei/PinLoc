import React, { useState, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line
import { useNavigate, navigate } from "@reach/router";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Button from "@material-ui/core/Button";
import { BASE_URL, SIGNUP_ENDPOINT } from "../constants";

const SignupForm = (): JSX.Element => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [helperText, setHelperText] = useState("");
    const [msg, setMsg] = useState("");
    let errorArray: string[] = [];

    const handleSubmit = async () => {
        errorArray = [];
        const data = {
            email,
            name,
            password,
            username,
        };

        const emailRegex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
        if (
            !emailRegex.test(email) ||
            !(email.length > 3) ||
            email.length > 40
        ) {
            errorArray.push("Bad email");
        }
        if (name.length < 3 || name.length > 41) {
            errorArray.push("Name needs to between 3 and 40 characters.");
        }
        if (username.length < 3 || username.length > 16) {
            errorArray.push("Name needs to between 3 and 15 characters.");
        }
        if (password.length < 3 || password.length > 101) {
            errorArray.push("Password needs to between 3 and 100 characters.");
        }
        if (errorArray.length > 0) {
            return;
        }

        const res: any = await axios
            .post(`${BASE_URL}${SIGNUP_ENDPOINT}`, data)
            .catch((error) => {
                if (error.response) {
                    setMsg(error.response.data.message);
                } else {
                    console.log("Error", error.message);
                }
            });
        console.log(res);

        errorArray = [];
        if (res.data.success) {
            navigate("/login");
        }
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
            {msg}
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <MailOutlineIcon />
                </Grid>
                <Grid item>
                    <TextField
                        id="input-with-icon-grid mail-icon"
                        className="input-field"
                        label="Email"
                        name="email"
                        type="email"
                        error={errorArray.length > 0}
                        onChange={(e) => setEmail(e.target.value)}
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
                        id="input-with-icon-grid name-icon"
                        className="input-field"
                        label="Name"
                        error={errorArray.length > 0}
                        onChange={(e) => setName(e.target.value)}
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
                        id="input-with-icon-grid user-icon"
                        className="input-field"
                        label="Username"
                        error={errorArray.length > 0}
                        onChange={(e) => setUsername(e.target.value)}
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
                        id="input-with-icon-grid passoword-icon"
                        className="input-field"
                        label="Password"
                        type="password"
                        error={errorArray.length > 0}
                        helperText={helperText}
                        onChange={(e) => setPassword(e.target.value)}
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

export default SignupForm;

import React, { useState, useReducer, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context";
import { AppReducer, ActionType } from "../reducer";
import { BASE_URL, SIGNIN_ENDPOINT } from "../constants";

import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Button from "@material-ui/core/Button";

export const LoginForm = () => {
    const initialState = useContext(AppContext);
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [usernameOrEmail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [helperText, setHelperText] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [error, setError] = useState(false);

    const fetchInfo = async () => {
        const client = axios.create();
        client.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response.status === 401) {
                }
                return Promise.reject(error);
            }
        );

        const res = await client
            .post(`${BASE_URL}${SIGNIN_ENDPOINT}`, {
                usernameOrEmail,
                password,
            })
            .then((response) => {
                //console.log(response);
            })
            .catch((err) => {
                //console.log(err);
            });

        dispatch({ type: ActionType.USER_LOGIN, payload: res.data });

        /* if (usernameOrEmail === res.data && password === res.data) {
            setError(false);
            setHelperText("Login successfully");
        } else {
            setHelperText("Incorrect email or password");
        } */
    };

    const handleKeyPress = (e: any) => {
        if (e.keyCode === 13 || e.which === 13) {
            isButtonDisabled || fetchInfo();
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
                        helperText={helperText}
                        error={error}
                        onChange={(e) => setEmail(e.target.value)}
                        // onKeyPress={(e) => handleKeyPress}
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
                        helperText={helperText}
                        error={error}
                        onChange={(e) => setPassword(e.target.value)}
                        // onKeyPress={(e) => handleKeyPress}
                    />
                </Grid>
            </Grid>
            <br />
            <Button
                className="btn"
                variant="outlined"
                // disabled={isButtonDisabled}
                onClick={fetchInfo}>
                Submit
            </Button>
        </form>
    );
};

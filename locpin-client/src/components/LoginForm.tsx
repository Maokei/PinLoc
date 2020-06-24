import React, { useContext, useReducer } from "react";
import { AppContext } from "../context";
import { ActionType, AppReducer } from "../reducer";
import axios from "axios";
import { BASE_URL, SIGNIN_ENDPOINT } from "../constants";

import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Button from "@material-ui/core/Button";

export const LoginForm = () => {
    const initialState = useContext(AppContext);
    // eslint-disable-next-line
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${BASE_URL}${SIGNIN_ENDPOINT}`;
        const data = {};
        axios.post(url, data).then(res => {

        })
        .catch(err => {
            if(err.response) {
                //400, 500
            } else if(err.request) {
                //request did not leave or no response
            } else {
                console.error("Unknown error at login");
            }
        })
    }

    return (
        <form
            style={{ padding: "0 1em" }}
            className="center"
            noValidate
            autoComplete="off">
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <AccountCircle />
                </Grid>
                <Grid item>
                    <TextField
                        id="input-with-icon-grid"
                        className="input-field"
                        label="Email Address"
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
                    />
                </Grid>
            </Grid>
            <br />
            <Button
                className="btn"
                variant="outlined"
                onClick={() =>
                    dispatch({ type: ActionType.USER_LOGIN, payload: "swe" })
                }>
                Submit
            </Button>
        </form>
    );
};

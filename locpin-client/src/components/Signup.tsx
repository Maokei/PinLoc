import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import { PinLogo } from "./PinLogo";
import SignupForm from "./SignupForm";
import Link from "@material-ui/core/Link";

export const Signup = () => {
    return (
        <Container>
            <PinLogo />
            <h2 className="center">Sign Up</h2>
            <SignupForm />
            <Grid container className="link-center">
                {/* <Link href="#">
                    Fogot password?
                </Link> */}
                <p>
                    Already got an account?
                    <Link href="/">Log In</Link>
                </p>
            </Grid>
        </Container>
    );
};

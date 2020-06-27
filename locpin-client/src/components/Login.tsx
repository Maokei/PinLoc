import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import { PinLogo } from "./PinLogo";
import { LoginForm } from "./LoginForm";
import Link from "@material-ui/core/Link";

const Login = () => {
    // const preventDefault = (event) => event.preventDefault();

    return (
        <Container>
            <PinLogo />
            <h2 className="center">Log In</h2>
            <LoginForm />
            <Grid container className="link-center">
                {/* <Link href="#">Fogot password?</Link> */}
                <p>
                    Don't have an account?
                    <Link href="/signup">Join Now</Link>
                </p>
            </Grid>
        </Container>
    );
};

export default Login;
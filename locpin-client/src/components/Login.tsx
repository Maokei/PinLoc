import React from 'react'
import { Container } from '@material-ui/core'
import { PinLogo } from './PinLogo'
import { LoginForm } from './LoginForm';
import Link from '@material-ui/core/Link';

export const Login = () => {
    // const preventDefault = (event) => event.preventDefault();

    return (
        <Container>
            <PinLogo />
            <h2 className='center'>Log In</h2>
            <LoginForm />
            <Link href="#">
                Fogot password?
            </Link>
            <p>Don't have an account? 
                <Link href="#">
                    Join Now
                </Link>
            </p>
        </Container>
    )
}

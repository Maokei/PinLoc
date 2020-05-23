import React from 'react'
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';

export const LoginForm = () => {
    return (
        <form className='center' noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Email Address" variant="outlined" />
            <br />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <br />
            <Button className='btn' variant="outlined">
                Submit
            </Button>
        </form>
    )
}

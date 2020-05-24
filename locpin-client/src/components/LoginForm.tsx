import React from 'react'
import { TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button';

export const LoginForm = () => {
    return (
        <form style={{ padding: '0 1em' }} className='center' noValidate autoComplete="off">
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <AccountCircle />
                </Grid>
                <Grid item>
                    <TextField id="input-with-icon-grid" className='input-field' label="Email Address" />
                </Grid>
            </Grid>
            {/* <TextField id="outlined-basic" label="Email Address" variant="outlined" /> */}
            <br />
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <VpnKeyIcon />
                </Grid>
                <Grid item>
                    <TextField id="input-with-icon-grid" className='input-field' label="Password" />
                </Grid>
            </Grid>
            {/* <TextField id="outlined-basic" label="Password" variant="outlined" /> */}
            <br />
            <Button className='btn' variant="outlined">
                Submit
            </Button>
        </form>
    )
}

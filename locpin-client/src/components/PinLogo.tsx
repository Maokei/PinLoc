import React from 'react'
import Box from '@material-ui/core/Box'
import EditLocationOutlinedIcon from '@material-ui/icons/EditLocationOutlined';

export const PinLogo = () => {
    return (
        <div style={{ marginTop: '3em' }} className='center'>
            <Box bgcolor="warning.main" className='logo-border'>
                <EditLocationOutlinedIcon />
            </Box>
        </div>
    )
}

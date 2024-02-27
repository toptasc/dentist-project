import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const CustomSnackbar = ({open,handleClose,text,severity}) => {
    return (
        <div className='CustomSnacbar' >
            <Snackbar open={open} autoHideDuration={2000000} onClose={handleClose} anchorOrigin={{ horizontal:"center",vertical:"top" }}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {text}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default CustomSnackbar
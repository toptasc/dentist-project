import React, { useEffect, useState } from 'react'
import { checkFirebaseUser, useFirebaseAuthentication } from '../../utils/firebase';
import { useRouter } from 'next/router';
import { Backdrop, CircularProgress } from '@mui/material';

const ProtectPage = ({ children }) => {
    const [isLogin, setIslogin] = useState(false);
    const authUser = useFirebaseAuthentication();
    console.log("authUser", authUser);
    const router = useRouter();
    useEffect(() => {
        if (authUser === null) {
            router.push("/admin");
        }
    })
    if (authUser) {
        return <>{children}</>
    }
    else return (
        <div>
            <Backdrop
                sx={{ color: "InfoBackground", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default ProtectPage 
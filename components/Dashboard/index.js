import React from 'react'
import { logoutFireStore, useStoreListener } from '../../utils/firebase'
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const Dashboard = () => {
    
    const router = useRouter();
    const users = useStoreListener();
    const handleLogout = () => {
        router.push("/");
        logoutFireStore();
        
    }
    const handleRoute = () => {
        router.push("/");
    }
    return (
    <div>
        Dashboard
        <Button onClick={handleRoute} >Anasayfa</Button>
        {users.map((user)=>{
            return (
                <>
                    <h3>{JSON.stringify(user)}</h3>
                </>
            )
                
            
        })}
        <Button  onClick={handleLogout} >Logout</Button>
    </div>
  )
}

export default Dashboard
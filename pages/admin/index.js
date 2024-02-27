import React, { useEffect, useState } from 'react'
import Login from '../../components/Login';
import CustomSnackbar from "../../components/CustomSnackbar"
import { useFirebaseAuthentication } from '../../utils/firebase';
import { useRouter } from 'next/router';
const Admin = () => {
    const [severity, setSeverity] = useState("");
    const [text, setText] = useState("");
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const router = useRouter();
    const authUser = useFirebaseAuthentication();

    useEffect(()=>{
      if(authUser){
        router.push("/dashboard");
      }
    },[authUser]);
  
  return (
    <div>
        <Login setSeverity={setSeverity} setText={setText} handleOpen={handleOpen} />
        <CustomSnackbar severity={severity}  text={text} open={open} handleClose={handleClose}  />
    </div>
  )
}

export default Admin
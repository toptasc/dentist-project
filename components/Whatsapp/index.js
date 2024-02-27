import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IconButton } from '@mui/material';
import styles from "../../styles/Home.module.scss"
import Link from 'next/link';
const Whatsapp = () => {

  const pushWhatsappWeb = () => {
    console.log("safd")
  }
  return (
    <div className={styles.whatsapp}>
      
            <Link href={"https://wa.me/905411971016"}  target="_blank" >
              <WhatsAppIcon fontSize='large' sx={{color:"#4FCE5D"}} />
            </Link>
   
    </div>
  )
}

export default Whatsapp
import React, { useState } from 'react'
import Layout from '../../components/Layout'
import  SuggestionForm from "../../components/SuggestionForm"
import CustomSnackbar from '../../components/CustomSnackbar'
import { Button, Typography } from '@mui/material'
const SuggestionandOpinion = () => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [text, setText]= useState("")
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <Layout>
        
          <CustomSnackbar handleClose={handleClose} open={open} severity={severity} text={text}/>
          <SuggestionForm  handleClose={handleClose} handleOpen={handleOpen} setSeverity={setSeverity} setText={setText} />
     
    </Layout>
  )
}

export default SuggestionandOpinion
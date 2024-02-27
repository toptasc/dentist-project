import React, { useState } from 'react'
import { Container } from '@mui/material';
import Navbar from '../Navbar';
import SideBar from '../SideBar';
import Whatsapp from "../Whatsapp"
const Layout = ({children}) => {

    const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);
    //   const handleToogleSideBar = () => {
    //     setIsSideBarOpen(!isSideBarOpen);
    //   }
return(
    <>
        <Navbar setIsSideBarOpen={setIsSideBarOpen} />
        <SideBar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen}/>
        {children}
        <Whatsapp />
    </>
    
  )
}

export default Layout
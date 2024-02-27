import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useRouter } from 'next/router';

export default function SideBar({isSideBarOpen,setIsSideBarOpen}) {
    const router = useRouter();
    const handleClose = () => {
        setIsSideBarOpen(false);
    }
    const handleRouter = (route) => {
      router.push(`${route}`)
    }
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={handleClose}
      onKeyDown={handleClose}
    >
      <List>
        {[{title:'Anasayfa',route:"/"}, {title:'Hakkımızda',route:"/about"}, {title:'Hizmetlerimiz',route:"/services"}, {title:'Medya',route:"/media"}, {title:'İletişim',route:"/communication"},{title:'Görüş ve Öneriler', route:"/suggestionandopinion"}].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={()=>handleRouter(item.route)} >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );
    
  return (
    <div>
      {['left'].map((anchor) => (
          <>
            {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer
            key={anchor}
            anchor={anchor}
            open={isSideBarOpen}
            onClose={handleClose}
          >
            {list(anchor)}
          </Drawer>
        </>
      ))}
    </div>
  );
}
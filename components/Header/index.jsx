import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import PatientForm from '../PatientRegistration';
import DriverForm from '../DriverRegistration';
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function Headers(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", display:"grid", gap:2 }}>
      <Link href="/">
        <Image src="/images/gold-logo.png" width={100} height={100} />
      </Link>
      <Divider />
      <Link
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        href="/transfer"
      >
        Transfer
      </Link>
      <PatientForm />
      <DriverForm />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/">
              <Image src="/images/logo.png" width={100} height={100} />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
              <Link
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                href="/transfer"
              >
                Transfer
              </Link>
              <PatientForm />
              <DriverForm />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Headers.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Headers;
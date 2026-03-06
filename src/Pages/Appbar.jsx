import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Project', 'Skill', 'Contact'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
    e.preventDefault();
    e.currentTarget.textContent === 'Project' && document.getElementById('project')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    e.currentTarget.textContent === 'Skill' &&
    document.getElementById('skill')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
      e.currentTarget.textContent === 'Contact' &&
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: 1 }}>
      <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
        <Toolbar disableGutters sx={{ minHeight: { xs: 56, sm: 64 } }}>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: { md: 1 }, color: 'black' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: { md: 3, lg: 4 },
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: { md: '.2rem', lg: '.3rem' },
              color: 'black',
              textDecoration: 'none',
              fontSize: { md: '1.1rem', lg: '1.25rem' }
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {/* Mobile Logo - Left Side */}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'black', fontSize: '1.5rem' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: { xs: '.1rem', sm: '.15rem' },
              color: 'black',
              textDecoration: 'none',
              fontSize: { xs: '1rem', sm: '1.25rem' }
            }}
          >
            LOGO
          </Typography>

          {/* Mobile Menu - Right Side */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
              sx={{ color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: { md: 1, lg: 2 } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

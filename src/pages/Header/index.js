import React, { useState } from 'react'
import style from './style.module.scss'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { constRoute } from '../../utility/constRoute'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const pages = [
    { name: 'Home', path: constRoute.exact },
    { name: 'Collection', path: constRoute.collection },
    { name: 'Contact Us', path: constRoute.contactUs }
  ];

  return (
    <div className={style.headerContainer}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={constRoute.exact}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '35px'
            }}
          >
            ShopGenie
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(e) => setAnchorElNav(e.currentTarget)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <a
                    href={page.path}
                    className={style.menuStyle}
                    textAlign="center">
                    {page.name}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href={constRoute.exact}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '35px'
            }}
          >
            ShopGenie
          </Typography>
          <Box sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: "right",
            paddingRight: '20px'
          }}>
            {pages.map((page) => (
              <Link
                to={page.path}
                key={page}
                className={style.menuStyle}
                onClick={() => setAnchorElNav(null)}
              >
                {page.name}
              </Link>
            ))}
          </Box>
          <div className={style.iconContainer}>
            <a href={constRoute.wishList} className={style.favIconContainer}>
              <FavoriteBorderIcon />
              <h1>0</h1>
            </a>
            <a href='/' className={style.cartIconContainer}>
              <LocalMallOutlinedIcon />
              <h2>0</h2>
            </a>
          </div>
        </Toolbar>
      </Container>
    </div >
  )
}

export default Header

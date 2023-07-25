import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const MenuBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          WallStreetZen
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/search">
          Search
        </Button>
        <Button color="inherit" component={Link} to="/pricing">
          Pricing
        </Button>
        <Button color="inherit" component={Link} to="/screener">
          Screener
        </Button>
        <Button color="inherit" component={Link} to="/stockideas">
          Stock Ideas
        </Button>
        <Button color="inherit" component={Link} to="/topanalyst">
          Top Analyst
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;

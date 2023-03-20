import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography } from '@mui/material';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Shop
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
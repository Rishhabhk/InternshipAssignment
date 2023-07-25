import * as React from 'react';
import { AppBar, Toolbar, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useState, useEffect } from 'react'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type Props = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ isLoggedIn, setIsLoggedIn }: Props) => {
  const [navName, setNavName] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const userData = localStorage.getItem("formData");
  const userInfo = JSON.parse(userData || '{}');


  useEffect(() => {
    setNavName(userInfo.name)
  })

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    else {
      setOpen(false);
    }
  }

  function homeHandler() {
    if (userData === null) {
      setOpen(true);
    }
    else {
      navigate("/home");
    }
  }

  function signOutHandler() {
    localStorage.clear();
    navigate("/");
    setIsLoggedIn(false);
  }
  useEffect(() => {
  }, [isLoggedIn]);

  return (
    <>
      <AppBar elevation={0} position='static' color="transparent" variant="outlined">
        <Toolbar component="div" sx={{ justifyContent: 'flex-end' }} >
          {
            isLoggedIn ?
              (
                <>
                  <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>Welcome{` ${navName}`}</Typography>
                  <Stack direction='row' spacing={2}>
                    <Button variant="text" sx={{ pr: 5, pl: 5 }} onClick={homeHandler}>Home</Button>
                    <Button variant="contained" sx={{ pr: 5, pl: 5 }} onClick={signOutHandler}>Sign out</Button>
                  </Stack>
                </>
              ) :
              (
                <>
                  <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>Welcome</Typography>
                  <Button variant="text" sx={{ pr: 5, pl: 5 }} onClick={homeHandler}>Home</Button>
                </>
              )
          }
        </Toolbar>
      </AppBar>
      <Snackbar
        message="Please Sign Up"
        autoHideDuration={3000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Please Sign Up
        </Alert>
      </Snackbar>
    </>
  )
}

export default Navbar
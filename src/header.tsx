import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    TextField,
    Avatar,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Popover,
  } from "@material-ui/core";
  import React, { Component, useRef } from 'react'
  import { Link as RouterLink } from "react-router-dom";
  import remy from "./image/1.jpg";

  const headersData = [
    {
      label: "$9.99",
      href: "#",
    },
    {
      label: "Login",
      href: "/logout",
    },
  ];
                       
  const useStyles = makeStyles(() => ({
   header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },
  }));
                       
  export default function Header() {
    const [open, setOpen] = React.useState(false);
    const [logout, setLogout] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
      const [state, setstate] = React.useState({
        checkstatus:false,
      })

    const loginfun = () => {
    
    alert(username)
      if((username=="")||(password=="")){
       alert("Enter Email or Password");
      }else{
        localStorage.setItem("username",username);
        localStorage.setItem("password",password);
        let amount = 9.99;
        localStorage.setItem("amount",amount.toString());
        state.checkstatus=true;
        setOpen(false);
      }
    }
    const handleClickOpen = () => {
      setOpen(true);
    };
    const usernamchange = (event: any) => {
      setUsername(event.target.value)
     } 
     const passwordchange = (event: any) => {
      setPassword(event.target.value)
     }
    const handleClose = () => {
      setOpen(false);
    };
     const handleClickOpen1 = () => {
      setLogout(true);
    };
  
    const handleClose1 = () => {
      setLogout(false);
    }; 
    const logoutfun = () => {
      localStorage.setItem("username",'');
      localStorage.setItem("password",'');
      state.checkstatus=false;
    };
    console.log(headersData[0].label);
    const { header, logo } = useStyles();
                       
    const displayDesktop = () => {
      return (
        <Toolbar>
          {femmecubatorLogo}
          <div style={{width:"95%"}}>
          {getMenuButtons()}
          {login()}
          </div>
          <Avatar alt="Arun Kumar" src={remy} style={{display: state.checkstatus==true ? "block" : "none", float:"right"}} onClick={handleClickOpen1}/>
        </Toolbar>
      );
    };
    const login = () => {
      return (
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="email"
            name="email"
            placeholder="Email"
            fullWidth
            onChange={usernamchange}
            variant="standard" defaultValue={username}
           
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            placeholder="Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={passwordchange}
            defaultValue={password}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={loginfun}>Login</Button>
        </DialogActions>
      </Dialog>
      );
    };
                       
    const femmecubatorLogo = (
      <Typography variant="h6" component="h1" className={logo}>
        ABR
      </Typography>
    );
                       
    const getMenuButtons = () => {
      return (
        <><Button style={{ display: state.checkstatus==true ? "block" : "none",float: "right", color: "inherit" }}></Button><Button style={{ display: state.checkstatus==false ? "block" : "none",float: "right", color: "inherit" }} onClick={handleClickOpen}>Login</Button>
        <Popover style={{ top: "35px", marginRight: "50px", left: "-8%" }}
          open={logout}
          onClose={handleClose1}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <Typography style={{ padding: "10px 15px", minWidth: "85px", textAlign: "center" }}>{username}</Typography>
          <Typography style={{ padding: "10px 15px", minWidth: "85px", textAlign: "center" }}><a href="#" onClick={logoutfun}>Log Out</a></Typography>
        </Popover></>
      );

    };
                       
    return (
      <header>
        <AppBar className={header}>{displayDesktop()}</AppBar>
      </header>
    );
  }

function username(username: any, value: any) {
  throw new Error("Function not implemented.");
}

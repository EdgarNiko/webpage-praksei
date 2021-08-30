import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const headerData = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "About Us",
    href: "/About"
  },
  {
    label: "Contact Us",
    href: "/Contact"
  }
];

const useStyles = makeStyles(() => ({
  Header: {
    backgroundColor: "#699CB3",
    "@media (max-width: 900px)": {
      paddingLeft: 0
    }
  },
  mobbtn: {
    size: "18px",
    marginLeft: "38px"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  drawerMenu: {
    padding: "20px 30px"
  }
}));

export default function Header() {
  const classes = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        {Home}
        <div>{getMenuBtns()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose
          }}
        >
          <div className={classes.drawerMenu}>{getDrawerChoices()}</div>
        </Drawer>
        <div>{Home}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headerData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const Home = (
    <Typography variant="h6" component="h1">
      Prax Webpage
    </Typography>
  );

  const getMenuBtns = () => {
    return headerData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: classes.mobbtn
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={classes.Header} position="static">
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}

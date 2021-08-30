import React from "react";
import RedditIcon from "@material-ui/icons/Reddit";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: "transparent",
    width: "100%",
    position: "relative"
  },
  background: {
    backgroundColor: "#699CB3",
    height: 120,
    position: "relative"
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h3 style={{ textAlign: "center", color: "white" }}>
        {" "}
        OUR SOCIAL MEDIA{" "}
      </h3>
      <BottomNavigation className={classes.footer} showLabels>
        <BottomNavigationAction
          href="https://www.reddit.com"
          style={{ color: "#de3729" }}
          icon={<RedditIcon color="#de3729" />}
        />
        <BottomNavigationAction
          href="https://www.youtube.com"
          style={{ color: "#ff0000" }}
          icon={<YouTubeIcon color="#ff0000" />}
        />
        <BottomNavigationAction
          href="https://twitter.com"
          style={{ color: "#2377ff" }}
          icon={<TwitterIcon color="#2377ff" />}
        />
      </BottomNavigation>
    </div>
  );
}
export default Footer;

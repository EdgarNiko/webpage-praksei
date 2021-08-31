import React from "react";
import { makeStyles } from "@material-ui/core";
import Component from "./index";
import SlideShow from "./sshowindex";

const useStyles = makeStyles(() => ({
  main: {
    minHeight: "80vh",
    margin: " 0 auto .5em",
    width: "90%"
  }
}));

function About() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <h2>About Us</h2>
      <hr />
      <p>
        He share of first to worse. Weddings and any opinions suitable smallest
        nay. My he houses or months settle remove ladies appear. Engrossed
        suffering supposing he recommend do eagerness. Commanded no of depending
        extremity recommend attention tolerably. Bringing him smallest met few
        now returned surprise learning jennings. Objection delivered eagerness
        he exquisite at do in. Warmly up he nearer mr merely me.
      </p>
      <div>
        <SlideShow withTimer={{ isTimer: true, timeDelay: 5000 }}>
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Component id={i} key={`Component${i}`} title={`${i + 1}`} />
            ))}
        </SlideShow>
      </div>
    </div>
  );
}

export default About;

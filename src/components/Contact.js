import React from "react";
import Image from "./img.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  main: {
    minHeight: "80vh",
    width: "90%",
    margin: " 0 auto .5em"
  }
}));

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <h2>Contact Us</h2>
      <hr />
      <p> You can contact us via E-mail or by calling </p>
      <p>
        {" "}
        Email: <a href="mailto:example@example.com">
          {" "}
          example@example.com{" "}
        </a>{" "}
      </p>
      <p>
        {" "}
        Phone number: <a href="tel:971-238-****">971-238-****</a>{" "}
      </p>
      <br></br>
      <img src={Image} height="200" alt="just_some_text_here" />
    </div>
  );
}

export default Contact;

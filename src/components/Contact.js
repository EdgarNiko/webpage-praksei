import React, { Component } from "react";
import Image from "./img.png";

class Contact extends Component {
  render() {
    return (
      <div>
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
        <img src={Image} />
      </div>
    );
  }
}

export default Contact;

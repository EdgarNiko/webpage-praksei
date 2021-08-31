import React from "react";
import { Container, Overlay } from "./styles";

const Component = ({ title, id }) => {
  return (
    <Container imageId={id}>
      <Overlay>
        <h2>{title || "Component"} Title</h2>
        <div>
          <p>Mrs chief great maids these which are ham match she.</p>
        </div>
      </Overlay>
    </Container>
  );
};

export default Component;

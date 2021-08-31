import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 15px;
`;
Container.displayName = "Container";

export const Overlay = styled.div`
  div {
    padding: 20px 0;
  }
  h2 {
    color: #191018;
    padding-top: 15px;
  }
  p {
    line-height: 1.2rem;
    max-height: ${1.2 * 2}rem;
    padding-right: 1rem;
    color: #191018;
    overflow: hidden;
    position: relative;
  }
`;
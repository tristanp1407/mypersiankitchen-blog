import React from "react";
import styled from "styled-components";
import MpkLogo from "../Assets/Logo/mpk_logo.png";

const Page = styled("div")`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: #ffffff;
`;

const LogoImg = styled("img")`
  height: 315px;
  width: 315px;
  max-width: 80vw;
  max-height: 80vw;
  object-fit: contain;
`;

const Message = styled("p")`
  margin-top: 32px;
  font-family: "Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  letter-spacing: 0.6px;
  color: #000000;
  text-align: center;
`;

export default function Closed() {
  return (
    <Page>
      <LogoImg src={MpkLogo} alt="My Persian Kitchen" />
      <Message>Closed for now</Message>
    </Page>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles/Logo.styles";
import MpkLogo from "../Assets/Logo/mpk_logo.png";

export default function Logo() {
  return (
    <Link to={"/"}>
      <S.Logo>
        <img src={MpkLogo} alt="mpk-logo" />
      </S.Logo>
    </Link>
  );
}

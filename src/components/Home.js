import React, { useEffect, useState } from "react";
// import sanityClient from "../client.js";
import * as S from "../styles/home.styles";
import AllPosts from "../components/AllPosts"

export default function Home() {

  return (
    <div>
      <S.Title>Home</S.Title>

        <AllPosts/>
    </div>
  );
}
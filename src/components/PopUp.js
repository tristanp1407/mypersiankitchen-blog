import React, { useState, useEffect } from "react";
import * as S from "./styles/PopUp.styles";

const waveImg =
  "https://upload.wikimedia.org/wikipedia/commons/7/70/Emoji_u1f44b.svg";

export default function PopUp() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const popUpTimeout = setTimeout(() => setShowPopUp(true), 5000);

    return () => clearTimeout(popUpTimeout);
  }, []);

  const firstView = (
    <>
      <img src={waveImg} height={25} width={25} alt="waving hand emoji" />
      Need a website like this?{" "}
      <S.Button
        onClick={() => {
          setShowContact(true);
        }}
      >
        Yes
      </S.Button>
      <S.Button
        onClick={() => {
          setShowPopUp(false);
        }}
      >
        No
      </S.Button>
    </>
  );

  const contactView = (
    <S.List>
      <li>
        <h3>Hey, I'm Tristan</h3>
      </li>
      <li>I hope you like this website!</li>
      <br />
      <li>
        If you need a new website, or would like to improve your current one,
        feel free to get in touch be emailing me at{" "}
        <strong>tristan.plet@gmail.com</strong>
      </li>
      <br />
      <li>I'd love to hear from you &#128578;</li>
      <br />
      <S.Button onClick={() => setShowPopUp(false)}>Close</S.Button>
    </S.List>
  );

  return (
    <S.Container style={{ display: !showPopUp && "none" }}>
      {showContact ? contactView : firstView}
    </S.Container>
  );
}

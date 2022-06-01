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
      <img src={waveImg} height={25} width={25} />
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
        <h3>Let's talk!</h3>
      </li>
      <br />

      <li>Need a new website building?</li>
      <li>Need to improve a current website?</li>
      <li>Want to start selling online?</li>
      <br />
      <li>
        Get in touch by emailing <strong>tristan.plet@gmail.com</strong>{" "}
        &#128578;
      </li>
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

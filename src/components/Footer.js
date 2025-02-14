import React from "react";
import phoneIcon from "../Assets/Icons/Contact/phone.png";
import emailIcon from "../Assets/Icons/Contact/email.png";
import hygienRating from "../Assets/Icons/Contact/hygiene-rating.jpg";
// import * as S from "../components/styles/Footer.styles";
import styled from "styled-components";
import * as T from "../components/styles/Text.styles";
import { phoneNumber } from "../common/contacts";

const FooterBox = styled("div")`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  margin-top: 70px;
  font-size: 90%;
  padding-top: 20px;
`;

const Contact = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
`;

const IconAndText = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  cursor: pointer;
  font-weight: 300;

  &:hover {
    color: rgb(224, 224, 224);
  }

  & img {
    margin-top: auto;
    height: 35px;
  }

  & div {
    text-align: left;
  }
`;

const AdressLine = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 80%;
  width: max-content;
  margin: 15px auto 8px auto;
  cursor: pointer;
  font-weight: 300;

  &:hover {
    color: rgb(224, 224, 224);
  }

  & img {
    margin-top: auto;
    margin-right: 10px;
    height: 35px;
  }

  & div {
    text-align: left;
    width: 180px;
  }
`;

const HygienRatingWrapper = styled("div")`
  height: 100px;
  width: auto;
  display: flex;
  justify-content: center;
  padding: 19px 0 10px 0;

  & img {
    height: 100%;
    width: auto;
  }
`;

const Me = styled("div")`
  font-size: 70%;
  color: grey;
  padding-bottom: 10px;
  width: 100%;
  text-align: center;
  margin-bottom: 0;
  bottom: 0px;

  & a {
    transition: 0.5s ease;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const P = styled("p")`
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Raleway:wght@300&display=swap");
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  line-height: 2.5rem;
  font-size: 1.25rem;
  letter-spacing: 0.025rem;
  text-align: center;
`;

export default function Footer() {
  const contactLinks = {
    email: "mpkcontactus@gmail.com",
    phone: `tel:${phoneNumber}`,
    map: "https://goo.gl/maps/U7k4Kxd9W2byyNST7",
  };

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <FooterBox>
      <T.H1>GET IN TOUCH!</T.H1>

      <P>
        We'd love to hear from you. For all enquiries, please call us or email
        us:
      </P>

      <Contact>
        <IconAndText onClick={() => openLink(contactLinks.email)}>
          <img alt="email icon" src={emailIcon} />
          <div>mpkcontactus@gmail.com</div>
        </IconAndText>

        <IconAndText onClick={() => openLink(contactLinks.phone)}>
          <img alt="phone icon" src={phoneIcon} />
          <div>{phoneNumber}</div>
        </IconAndText>
      </Contact>

      <HygienRatingWrapper>
        <img alt="hygiene-rating" src={hygienRating} />
      </HygienRatingWrapper>

      <AdressLine>
        <p>© 2024 MY PERSIAN KITCHEN</p>
      </AdressLine>

      <Me>
        <p>
          <span>need a website like this? - </span>
          <a href="mailto:tristan.plet@gmail.com">tristan.plet@gmail.com</a>
        </p>
      </Me>
    </FooterBox>
  );
}

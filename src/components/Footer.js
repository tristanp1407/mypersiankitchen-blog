import React from "react";
import phoneIcon from "../Assets/Icons/Contact/phone.png";
import emailIcon from "../Assets/Icons/Contact/email.png";
import pinIcon from "../Assets/Icons/Contact/location.png";
import hygienRating from "../Assets/Icons/Contact/hygiene-rating.jpg";
import * as S from "../components/styles/Footer.styles";
import * as T from "../components/styles/Text.styles";

export default function Footer() {
  let contactLinks = {
    email: "mpkcontactus@gmail.com",
    phone: "tel:+447580801905",
    map: "https://goo.gl/maps/U7k4Kxd9W2byyNST7",
  };

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  let SS = S;
  let TT = T;

  return (
    <SS.FooterBox>
      <TT.H1>GET IN TOUCH!</TT.H1>

      <TT.P>
        We'd love to hear from you. For all enquiries, please call us or email
        us:
      </TT.P>

      <SS.Contact>
        <SS.IconAndText onClick={() => openLink(contactLinks.email)}>
          <img alt="email icon" src={emailIcon} />
          <div>mpkcontactus@gmail.com</div>
        </SS.IconAndText>

        <SS.IconAndText onClick={() => openLink(contactLinks.phone)}>
          <img alt="phone icon" src={phoneIcon} />
          <div>07580 801905</div>
        </SS.IconAndText>
      </SS.Contact>

      <SS.AdressLine onClick={() => openLink(contactLinks.map)}>
        <img alt="pin icon" src={pinIcon} />
        <div>Hope Street Yard, Hope St, Cambridge, CB1 3NA</div>
      </SS.AdressLine>

      <SS.HygienRatingWrapper>
        <img alt="hygiene-rating" src={hygienRating} />
      </SS.HygienRatingWrapper>

      <SS.Me>
        <p>
          designed by Tristan Plet -
          <a href="mailto:tristan.plet@gmail.com">tristan.plet@gmail.com</a>
        </p>
      </SS.Me>
    </SS.FooterBox>
  );
}

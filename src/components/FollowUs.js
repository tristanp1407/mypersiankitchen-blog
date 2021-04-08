import React from "react";
import * as S from "./styles/FollowUs.styles";
import * as T from "./styles/Text.styles";

import facebook from "../Assets/Icons/Social/fb_logo.png";
import deliveroo from "../Assets/Icons/Social/deliveroo_logo.png";
import instagram from "../Assets/Icons/Social/insta_logo.png";
import twitter from "../Assets/Icons/Social/twitter_logo.png";
import whatsapp from "../Assets/Icons/Social/whatsapp_logo.png";

export default function SocialMedia() {
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  let socialMediaLinks = {
    facebook: "https://www.facebook.com/mypersiankitchencamb/",
    instagram: "https://www.instagram.com/my.persiankitchen/",
    twitter: "https://twitter.com/mypersiancamb?lang=en",
    whatsapp: "https://wa.me/00447580801905",
    deliveroo:
      "https://deliveroo.co.uk/menu/cambridge/cambridge-centre/my-persian-kitchen",
  };

  return (
    <S.Wrapper>
      <T.P>Follow Us:</T.P>
      <S.LogosWrapper>
        <div onClick={() => openLink(socialMediaLinks.facebook)}>
          <img alt="facebook logo" src={facebook} />
        </div>
        <div onClick={() => openLink(socialMediaLinks.deliveroo)}>
          <img alt="deliveroo logo" src={deliveroo} />
        </div>
        <div onClick={() => openLink(socialMediaLinks.instagram)}>
          <img alt="instagram logo" src={instagram} />
        </div>
        <div onClick={() => openLink(socialMediaLinks.twitter)}>
          <img alt="twitter logo" src={twitter} />
        </div>
        <div onClick={() => openLink(socialMediaLinks.whatsapp)}>
          <img alt="whatsapp logo" src={whatsapp} />
        </div>
      </S.LogosWrapper>
    </S.Wrapper>
  );
}

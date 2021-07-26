import React, { useEffect, useState } from "react";
import Menu from "../Assets/Menu/mpk-menu-2020.pdf";
import Logo from "./Logo";
import AllPosts from "./AllPosts";
import Gallery from "./PhotoGalleries";
import SocialMedia from "./FollowUs";
import { gallery1, gallery2 } from "./PhotoGalleries";
import FacebookPlugin from "./FacebookPlugin";
import Footer from "./Footer";
import * as S from "./styles/Home.styles";
import * as T from "./styles/Text.styles";
import sanityClient from "../client";

export default function Home() {
  const downloadMenu = () => {
    window.open(Menu, "_blank");
  };

  const [noticeText, setNoticeText] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "notice"]{
        notice
    }`
      )
      .then((data) => {
        console.log(data[0].notice);
        setNoticeText(data[0].notice);
        console.log(noticeText);
      })
      .catch(console.error);
  }, []);

  return (
    <S.Page>
      <Logo />
      <S.BorderBox>
        <T.P>
          {noticeText ? (
            <>
              <strong>
                We are closed until Saturday the 24th of July. Back soon!
              </strong>
              <br />
              <br />
            </>
          ) : null}
          To place a hot food order we request 24 hours notice
          <br /> ...Persian slow-cooked food can't be rushed!
          <br />
          <br />
          We offer a free 6-mile radius delivery service from Cambridge centre,
          6-15 miles £5, all details in the menu.
          <br />
          <br />
          Nooshe Joon!
          <br />
          "May it be sweet for your soul"
          <br />
          <br />
        </T.P>
        <S.Button onClick={downloadMenu}>Download Menu</S.Button>
      </S.BorderBox>

      <T.Title>About Us</T.Title>
      <S.TextWrapper>
        <T.P>
          Offering modern and traditional Persian food, My Persian Kitchen
          brings to Cambridge one of the greatest, but least known, cuisines of
          the world. At MPK our aim is to share the food we love and offer
          creative and diverse dishes, which are nutritious, tantalising, and
          pleasing to all palates. We use the best local suppliers and the
          freshest ingredients in our dishes which, when possible, are
          supplemented with seasonal herbs and vegetables that we grow on our
          very own plot.
        </T.P>
      </S.TextWrapper>

      <Gallery gallery={gallery1} />

      <SocialMedia />

      <T.Title>Hire Us</T.Title>

      <S.TextWrapper>
        <T.P>
          Whether you’re having a gathering at home, throwing a party or hosting
          an event at work, we are available for private hire. Offering a
          refined Persian menu we cater for all occasions. We are Cambridge
          based, but happy to travel. To discuss your event please get in touch!
        </T.P>
      </S.TextWrapper>

      <Gallery gallery={gallery2} />

      <SocialMedia />

      <T.Title>Pop-Ups</T.Title>

      <S.TextWrapper>
        <T.P>
          My Persian Kitchen pop-ups are events held on a monthly basis to
          showcase Persian cuisine throughout Cambridgeshire – see below for
          upcoming events.
        </T.P>
      </S.TextWrapper>

      <FacebookPlugin />

      <SocialMedia />

      <T.Title>MPK Blog</T.Title>

      <AllPosts />

      <Footer />
    </S.Page>
  );
}

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import AllPosts from "./AllPosts";
import PhotoGallery from "./PhotoGalleries";
import SocialMedia from "./FollowUs";
import FacebookPlugin from "./FacebookPlugin";
import Footer from "./Footer";
import * as S from "./styles/Home.styles";
import * as T from "./styles/Text.styles";
import sanityClient from "../client";

export default function Home() {
  const downloadMenu = () => {
    window.open(
      "https://drive.google.com/file/d/1GdKrmtPc8O847zlOg0R3g6ZCtN4BucKm/view?usp=sharing",
      "_blank"
    );
  };

  const [noticeText, setNoticeText] = useState(null);

  const [galleryImages1, setGalleryImages1] = useState();
  const [galleryImages2, setGalleryImages2] = useState();
  const [galleryImages3, setGalleryImages3] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "notice"]{
        notice
    }`
      )
      .then((data) => {
        setNoticeText(data[0].notice);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "galleries"]{
         imageGallery1[]{
        asset->{
            url
        }
      },
         imageGallery2[]{
        asset->{
            url
        }
      },
         imageGallery3[]{
        asset->{
            url
        }
      }
    }`
      )
      .then((data) => {
        const sizeStr = "?w=300&h=300&fit=crop";

        setGalleryImages1(
          data[0].imageGallery1.map((asset) => asset.asset.url + sizeStr)
        );
        setGalleryImages2(
          data[0].imageGallery2.map((asset) => asset.asset.url + sizeStr)
        );
        setGalleryImages3(
          data[0].imageGallery3.map((asset) => asset.asset.url + sizeStr)
        );
      })
      .catch(console.error);
  }, []);

  return (
    <S.Page>
      <Logo />
      <S.BorderBox>
        <T.P>
          {noticeText && (
            <>
              <strong>{noticeText}</strong>
              <br />
              <br />
            </>
          )}
          To place a hot food order we request 24 hours notice
          <br /> ...Persian slow-cooked food can't be rushed!
          <br />
          <br />
          We offer a free 3-mile radius delivery service from Cambridge centre,
          3-10 miles £3-6 depending on distance, all details in the menu.
          <br />
          <br />
          Nooshe Joon!
          <br />
          "May it be sweet for your soul"
          <br />
          <br />
        </T.P>
        <S.Button onClick={downloadMenu}>View Menu</S.Button>
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

      {galleryImages1 && <PhotoGallery images={galleryImages1} />}

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

      {galleryImages2 && <PhotoGallery images={galleryImages2} />}

      <SocialMedia />

      <T.Title>Pop-Ups</T.Title>

      <S.TextWrapper>
        <T.P>
          My Persian Kitchen pop-ups are events held on a monthly basis to
          showcase Persian cuisine throughout Cambridgeshire – see below for
          upcoming events.
        </T.P>
      </S.TextWrapper>

      {galleryImages3 && <PhotoGallery images={galleryImages3} />}

      <FacebookPlugin />

      <SocialMedia />

      <T.Title>MPK Blog</T.Title>

      <AllPosts />

      <Footer />
    </S.Page>
  );
}

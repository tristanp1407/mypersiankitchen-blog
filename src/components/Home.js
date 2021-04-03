import React, { useEffect, useState } from "react";
// import sanityClient from "../client.js";
import * as S from "../styles/home.styles";
import AllPosts from "../components/AllPosts"
import Gallery from '../components/PhotoGalleries'
import SocialMedia from '../components/SocialMedia'
import {gallery1, gallery2} from './PhotoGalleries'

export default function Home() {



  return (
    <S.Page>
        <S.LogoContainer>LOGO</S.LogoContainer>
        <S.BorderBox>
            <S.Body>
                To place a hot food order we request 24 hours notice
                <br/> ...Persian slow-cooked food can't be rushed!
                <br />
                We offer a free 6 mile radius delivery service from Cambridge centre,
                all details in the menu.
                <br />
                <br />We are closed for the Easter Weekend - Happy Easter to you all!
                
                <br />
                <br />Nooshe Joon! 
                <br />"May it be sweet for your soul" 
                <br />
                <br />
            </S.Body>
            <S.Button>Download Menu</S.Button>
        </S.BorderBox>

        <S.Title>About Us</S.Title>
        <S.TextWrapper>
            <S.Body>
                Offering modern and traditional Persian food, My Persian Kitchen brings to Cambridge one of the greatest, but least known, cuisines of the world. At MPK our aim is to share the food we love and offer creative and diverse dishes, which are nutritious, tantalising, and pleasing to all palates. We use the best local suppliers and the freshest ingredients in our dishes which, when possible, are supplemented with seasonal herbs and vegetables that we grow on our very own plot.
            </S.Body>
        </S.TextWrapper>

        <Gallery gallery={gallery1}/>

        <SocialMedia/>

        <S.Title>About Us</S.Title>
        <S.TextWrapper>
            <S.Body>
                Offering modern and traditional Persian food, My Persian Kitchen brings to Cambridge one of the greatest, but least known, cuisines of the world. At MPK our aim is to share the food we love and offer creative and diverse dishes, which are nutritious, tantalising, and pleasing to all palates. We use the best local suppliers and the freshest ingredients in our dishes which, when possible, are supplemented with seasonal herbs and vegetables that we grow on our very own plot.
            </S.Body>
        </S.TextWrapper>
        
        <Gallery gallery={gallery2}/>
        
   
        {/* <AllPosts/> */}
    </S.Page>
  );
}
import React, { useEffect, useState } from "react";
// import sanityClient from "../client.js";
import * as S from "../styles/Home.styles";
import * as T from '../styles/Text.styles'
import Logo from './Logo'
import AllPosts from "./AllPosts"
import Gallery from './PhotoGalleries'
import SocialMedia from './FollowUs'
import {gallery1, gallery2} from './PhotoGalleries'
import FacebookPlugin from './FacebookPlugin'
import Footer from './Footer'

export default function Home() {



  return (
    <S.Page>
        <Logo/>
        <S.BorderBox>
            <T.P>
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
            </T.P>
            <S.Button>Download Menu</S.Button>
        </S.BorderBox>

        <T.Title>About Us</T.Title>
        <S.TextWrapper>
            <T.P>
                Offering modern and traditional Persian food, My Persian Kitchen brings to Cambridge one of the greatest, but least known, cuisines of the world. At MPK our aim is to share the food we love and offer creative and diverse dishes, which are nutritious, tantalising, and pleasing to all palates. We use the best local suppliers and the freshest ingredients in our dishes which, when possible, are supplemented with seasonal herbs and vegetables that we grow on our very own plot.
            </T.P>
        </S.TextWrapper>

        <Gallery gallery={gallery1}/>

        <SocialMedia/>

        <T.Title>About Us</T.Title>

        <S.TextWrapper>
            <T.P>
                Offering modern and traditional Persian food, My Persian Kitchen brings to Cambridge one of the greatest, but least known, cuisines of the world. At MPK our aim is to share the food we love and offer creative and diverse dishes, which are nutritious, tantalising, and pleasing to all palates. We use the best local suppliers and the freshest ingredients in our dishes which, when possible, are supplemented with seasonal herbs and vegetables that we grow on our very own plot.
            </T.P>
        </S.TextWrapper>
        
        <Gallery gallery={gallery2}/>
        
        <SocialMedia/>

        <T.Title>About Us</T.Title>

        <S.TextWrapper>
            <T.P>
                Offering modern and traditional Persian food, My Persian Kitchen brings to Cambridge one of the greatest, but least known, cuisines of the world. At MPK our aim is to share the food we love and offer creative and diverse dishes, which are nutritious, tantalising, and pleasing to all palates. We use the best local suppliers and the freshest ingredients in our dishes which, when possible, are supplemented with seasonal herbs and vegetables that we grow on our very own plot.
            </T.P>
        </S.TextWrapper>

        <FacebookPlugin/>
   
        <SocialMedia/>

        <Footer/>

        <AllPosts/>


    </S.Page>
  );
}
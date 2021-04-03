import React from 'react'
import * as S from '../styles/social_media.styles'

import facebook from '../Assets/Icons/Social/fb_logo.png'
import deliveroo from '../Assets/Icons/Social/deliveroo_logo.png'
import instagram from '../Assets/Icons/Social/insta_logo.png'
import twitter from '../Assets/Icons/Social/twitter_logo.png'
import whatsapp from '../Assets/Icons/Social/whatsapp_logo.png'


export default function SocialMedia() {

    return (
    <S.Wrapper>
        <h3>Follow Us:</h3>
        <S.LogosWrapper>
            <div><img src={facebook}/></div>
            <div><img src={deliveroo}/></div>
            <div><img src={instagram}/></div>
            <div><img src={twitter}/></div>
            <div><img src={whatsapp}/></div>
        </S.LogosWrapper>
    </S.Wrapper>
    )

}
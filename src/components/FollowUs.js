import React from 'react'
import * as S from '../styles/FollowUs.styles'
import * as T from '../styles/Text.styles'

import facebook from '../Assets/Icons/Social/fb_logo.png'
import deliveroo from '../Assets/Icons/Social/deliveroo_logo.png'
import instagram from '../Assets/Icons/Social/insta_logo.png'
import twitter from '../Assets/Icons/Social/twitter_logo.png'
import whatsapp from '../Assets/Icons/Social/whatsapp_logo.png'


export default function SocialMedia() {

    return (
    <S.Wrapper>
        <T.P>Follow Us:</T.P>
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
import React from 'react'
import * as S from '../styles/Footer.styles'
import * as T from '../styles/Text.styles'
import phoneIcon from '../Assets/Icons/Contact/phone.png'
import emailIcon from '../Assets/Icons/Contact/email.png'
import pinIcon from '../Assets/Icons/Contact/location.png'
import hygienRating from '../Assets/Icons/Contact/hygiene-rating.jpg'

export default function Footer() {

    return(
       <S.FooterBox>
           <T.H1>GET IN TOUCH!</T.H1>

           <T.P>We'd love to hear from you. For all enquiries, please call us or email us:</T.P>

           <S.Contact>
               <S.IconAndText>
                   <img src={phoneIcon}/>
                   <div>mpkcontactus@gmail.com</div>
               </S.IconAndText>

               <S.IconAndText>
                   <img src={emailIcon}/>
                   <div>07580 801905</div>
               </S.IconAndText>

               
           </S.Contact>

           <S.AdressLine>
                <img src={pinIcon}/>
                <div>Hope Street Yard, Hope St, Cambridge, CB1 3NA</div>
            </S.AdressLine>
            
            <S.HygienRatingWrapper>
                <img src={hygienRating}/>
            </S.HygienRatingWrapper>

            <S.Me>
                <p>
                    designed by Tristan Plet -  
                    <a href="mailto:tristan.plet@gmail.com">tristan.plet@gmail.com</a>
                </p>
            </S.Me>

       </S.FooterBox>
    )
}
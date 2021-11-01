import mpk15 from "../Assets/Gallery/mpk15.jpg";
import mpk30 from "../Assets/Gallery/mpk30.jpg";
import mpk31 from "../Assets/Gallery/mpk31.jpg";
import mpk27 from "../Assets/Gallery/mpk27.jpg";
import mpk32 from "../Assets/Gallery/mpk32.jpg";
import mpk29 from "../Assets/Gallery/mpk29.jpg";
import mpk11 from "../Assets/Gallery/mpk11.jpg";
import mpk16 from "../Assets/Gallery/mpk16.jpg";
import mpk14 from "../Assets/Gallery/mpk14.jpg";
import mpk23 from "../Assets/Gallery/mpk23.jpg";
import mpk28 from "../Assets/Gallery/mpk28.jpg";
import mpk22 from "../Assets/Gallery/mpk22.jpg";
import React from "react";
import * as S from "./styles/Gallery.styles";

let galleryImages1 = [mpk15, mpk30, mpk31, mpk27, mpk32, mpk29];
let galleryImages2 = [mpk11, mpk16, mpk14, mpk23, mpk28, mpk22];

export let gallery1 = galleryImages1.map((image, index) => {
  return (
    <S.OneImageWrapper>
      <S.OneImage key={index} alt="" src={image} />
    </S.OneImageWrapper>
  );
});

export let gallery2 = galleryImages2.map((image, index) => {
  return (
    <S.OneImageWrapper>
      <S.OneImage key={index} alt="" src={image} />
    </S.OneImageWrapper>
  );
});

export default function Gallery(props) {
  return <S.Gallery>{props.gallery}</S.Gallery>;
}

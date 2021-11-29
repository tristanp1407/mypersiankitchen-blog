import React from "react";
import * as S from "./styles/Gallery.styles";

export default function PhotoGallery({ images }) {
  return (
    <S.Gallery>
      {images.map((url, i) => (
        <S.OneImageWrapper key={i}>
          <S.OneImage src={url} />
        </S.OneImageWrapper>
      ))}
    </S.Gallery>
  );
}

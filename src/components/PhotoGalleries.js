import React from "react";
import * as S from "./styles/Gallery.styles";

// export let gallery1 = galleryImages1.map((image, index) => {
//   return (
//     <S.OneImageWrapper>
//       <S.OneImage key={index} alt="" src={image} />
//     </S.OneImageWrapper>
//   );
// });

// export let gallery2 = galleryImages2.map((image, index) => {
//   return (
//     <S.OneImageWrapper>
//       <S.OneImage key={index} alt="" src={image} />
//     </S.OneImageWrapper>
//   );
// });

// export default function Gallery(props) {
//   return <S.Gallery>{props.gallery}</S.Gallery>;
// }

export default function Gallery({ gallery }) {
  console.log(gallery);
  return null;
  // return gallery.map((url, index) => (
  //   <S.OneImageWrapper>
  //     <S.OneImage key={index} alt="" src={url} />
  //   </S.OneImageWrapper>
  // ));
}

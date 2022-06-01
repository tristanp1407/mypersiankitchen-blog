import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import * as S from "./styles/MenuPage.styles";
import * as T from "./styles/Text.styles";

export default function MenuPage() {
  const [menuContent, setMenuContent] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "menu"]{
       body
    }`
      )
      .then((data) => {
        console.log(data[0]);
        setMenuContent(data[0].body);
      })
      .catch(console.error);
  }, []);

  // if (!postData) return <div>Loading...</div>;

  return (
    <S.Wrapper>
      <BlockContent
        blocks={menuContent}
        projectId={sanityClient.clientConfig.projectId}
        dataset={sanityClient.clientConfig.dataset}
      />
    </S.Wrapper>
  );
}

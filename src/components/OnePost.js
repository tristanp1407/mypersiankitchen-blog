import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import Footer from "./Footer";
import Logo from "./Logo";
import * as S from "./styles/OnePost.styles";
import * as T from "./styles/Text.styles";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <S.OneBlogWrapper>
      <Logo />

      <S.TitleAuthorWrapper>
        <T.Title>{postData.title}</T.Title>

        <S.AuthorWrapper>
          <img
            src={urlFor(postData.authorImage).width(100).url()}
            alt="Author"
          />
          <T.P>{postData.name}</T.P>
        </S.AuthorWrapper>
      </S.TitleAuthorWrapper>

      <S.MainImageWrapper>
        <img src={urlFor(postData.mainImage).width(1000).url()} alt="" />
      </S.MainImageWrapper>

      <S.BlogBodyWrapper>
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </S.BlogBodyWrapper>

      <Footer />
    </S.OneBlogWrapper>
  );
}

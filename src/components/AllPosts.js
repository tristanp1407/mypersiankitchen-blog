import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import * as T from '../styles/Text.styles'
import * as S from '../styles/AllPosts.styles'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <S.AllPostsWrapper>
      <T.Title>Blog Posts</T.Title>
      
        {allPostsData &&
          allPostsData.map((post, index) => (

      <S.BlogTile>

          <Link to={"/" + post.slug.current} key={post.slug.current} key={index}>

              <S.BlogTileImage src={urlFor(post.mainImage).width(330).url()} alt="" />
          
              <S.BlogTitle>{post.title}</S.BlogTitle>

          </Link>

      </S.BlogTile>

          ))}
      
    </S.AllPostsWrapper>
  );
}
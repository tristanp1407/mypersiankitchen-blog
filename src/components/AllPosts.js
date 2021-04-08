import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
// import * as S from "../components/styles/AllPosts.styles";
import styled from "styled-components";

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

  const AllPostsWrapper = styled("div")`
    margin: 50px 0;
    max-width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
  `;

  const BlogTile = styled("div")`
    position: relative;
    width: 95vw;
    max-width: 330px;
    overflow: hidden;
    height: 250px;
    transition: 0.3s ease;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
  `;

  const BlogTileImage = styled("img")`
    opacity: 0.6;
    transition: 0.3s ease;
    height: 100%;
    width: 100%;
    object-fit: cover;

    &:hover {
      transform: scale(1.05);
    }
  `;

  const BlogTitle = styled("h2")`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Raleway:wght@300&display=swap");
    font-family: "Playfair Display", serif;
    font-weight: 400;
    margin: 15px;
    color: white;
    position: absolute;
    text-decoration: none;
    max-width: 300px;
    top: 0;
    left: 0;
  `;

  return (
    <AllPostsWrapper>
      {allPostsData &&
        allPostsData.map((post) => (
          <Link to={"/" + post.slug.current} key={post.slug.current}>
            <BlogTile>
              <BlogTileImage
                src={urlFor(post.mainImage).width(500).url()}
                alt="main image"
              />

              <BlogTitle>{post.title}</BlogTitle>
            </BlogTile>
          </Link>
        ))}
    </AllPostsWrapper>
  );
}

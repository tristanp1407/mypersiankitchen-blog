import styled from "styled-components";

export const OneBlogWrapper = styled("div")`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleAuthorWrapper = styled("div")`
  justify-content: left;
  max-width: 500px;
  width: 95vw;
`;

export const AuthorWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  margin: 30px 0;

  & img {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin-right: 10px;
    object-fit: cover;
  }
`;

export const MainImageWrapper = styled("div")`
  max-width: 1000px;
  width: 95vw;
  margin-bottom: 50px;

  & img {
    width: 100%;
  }
`;
export const BlogBodyWrapper = styled("div")`
  max-width: 700px;
  width: 90%;
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Raleway:wght@300&display=swap");
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  line-height: 2.5rem;
  font-size: 1.25rem;
  letter-spacing: 0.025rem;
  text-align: center;
`;

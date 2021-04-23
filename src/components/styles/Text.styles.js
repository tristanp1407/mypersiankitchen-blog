import styled from "styled-components";

export const P = styled("p")`
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Raleway:wght@300&display=swap");
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  line-height: 2.5rem;
  font-size: 1.25rem;
  letter-spacing: 0.025rem;
  text-align: center;
`;

export const Title = styled("h1")`
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Raleway:wght@300&display=swap");
  font-size: 3.5rem;
  font-family: "Playfair Display", serif;
  font-weight: 400;
  margin: 0 !important;
  text-align: center;
`;

export const BlogTitle = styled("h1")`
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Raleway:wght@300&display=swap");
  font-size: 3.5rem;
  font-family: "Playfair Display", serif;
  font-weight: 400;
  margin: 0 !important;
  text-align: left;

  @media (max-width: 700px) {
    font-size: 2rem;
  } ;
`;

export const H1 = styled("h1")`
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Raleway:wght@300&display=swap");
  /* font-size: 3.5rem; */
  font-family: "Playfair Display", serif;
  font-weight: 400;
  /* margin: 0 !important */
`;

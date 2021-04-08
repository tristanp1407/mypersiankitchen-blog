import styled from "styled-components";

export const Page = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px;
`;

export const BorderBox = styled("div")`
  width: 70%;
  max-width: 500px;
  font-size: 120%;
  text-align: center;
  line-height: 35px;
  padding: 30px;
  margin: 20px 10px 80px 10px;
  border: 2px solid rgba(0, 0, 0, 0.671);
`;

export const Button = styled("button")`
  border: 1px solid black;
  font-family: "Raleway", sans-serif;
  background-color: white;
  font-weight: 300;
  font-size: 1.25rem;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: auto;
  cursor: pointer;
  outline: 0;

  &:active,
  &:hover {
    background-color: black;
    color: white;
    outline: 0;
  }
`;

export const TextWrapper = styled("div")`
  width: 85%;
  max-width: 700px;
  line-height: 33px;
  letter-spacing: 0.6px;
  font-size: 110%;
  text-align: center;
  margin: 20px 0;
`;

export const Galery = styled("div")`
  display: flex;
  justify-content: center;
  flex: wrap;
  margin-top: 50px;
  margin-bottom: 10px;
  max-width: 1000px;

  &:div {
    margin: 1.5px;
    overflow: hidden;
    height: 47vw;
    width: 47vw;
    max-width: 300px;
    max-height: 300px;
    min-width: 150px;
    min-height: 150px;
  }

  &:img {
    height: 100%;
    filter: brightness(1);
    transition: transform 0.5s ease;
  }

  &:img:hover {
    transform: scale(1.1);
  }
`;

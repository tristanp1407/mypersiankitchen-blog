import styled from "styled-components";

export const Container = styled("div")`
  align-items: center;
  background: white;
  border-radius: 20px;
  bottom: 0;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  gap: 10px;
  margin: 30px;
  padding: 20px 24px;
  position: fixed;
  right: 0;
`;

export const Button = styled("button")`
  border: none;
  background: none;
  cursor: pointer;
  margin: 0 10px 0 0;
  padding: 0;
  text-decoration: underline;
`;

export const List = styled("ul")`
  list-style: none;
  padding: 0;
`;

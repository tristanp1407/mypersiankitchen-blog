import styled, {createGlobalStyle} from "styled-components"

createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Raleway:wght@300&display=swap');
 
  p {
    padding: 0;
    margin: 0;
    font-family: 'Raleway', sans-serif;
  }

  h1 {
    font-family: 'Playfair Display', serif;
  }
`

export const Title = styled('h1')`
    font-weight: 400;
`

export const Body = styled('p')`
    font-weight: 300;
`
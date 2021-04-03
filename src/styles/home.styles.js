import styled, {createGlobalStyle} from "styled-components"

createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Raleway:wght@300&display=swap');
 
 
 p {
    padding: 0;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 2rem;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 2rem;
  }

  h1 {
    font-family: 'Playfair Display', serif;
  }
`

export const Page = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const LogoContainer = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px;
`

export const BorderBox = styled('div')`
    width: 35%;
    min-width: 400px;
    border: 2px solid rgba(0,0,0,.671);
    padding: 30px;
    margin: 50px;
    text-align: center;

`

export const Button = styled('button')`
    border: 1px solid black;
    font-family: 'Raleway', sans-serif;
    background-color: white;
    font-weight: 300;
    font-size: 1.25rem;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: auto;
    cursor: pointer;

    &:active,
    &:hover{
        background-color: black;
        color: white;
    }
`

export const Title = styled('h1')`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Raleway:wght@300&display=swap');   
    font-size: 3.5rem;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
`

export const TextWrapper = styled('div')`
    max-width: 50rem;
    text-align: center;
`

export const Body = styled('p')`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Raleway:wght@300&display=swap');   
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    line-height: 2.5rem;
    font-size: 1.25rem;
    letter-spacing: 0.025rem;
`

export const Galery = styled('div')`
    display: flex;
    justify-content: center;
    flex: wrap;
    margin-top: 50px;
    margin-bottom: 10px;
    max-width: 1000px;

    &:div{
    margin: 1.5px;
    overflow: hidden;
    height: 47vw;
    width: 47vw;
    max-width: 300px;
    max-height: 300px;
    min-width: 150px;
    min-height: 150px;
    }

    &:img{
    height: 100%;
    filter: brightness(1);
    transition: transform 0.5s ease;
    }

    &:img:hover{
    transform: scale(1.1);
    }
`
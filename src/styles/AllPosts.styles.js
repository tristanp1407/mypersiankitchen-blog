import styled from 'styled-components'


export const AllPostsWrapper = styled('div')`
    margin: 50px 0;
    max-width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
`

export const BlogTile = styled('div')`
    position: relative;
    width: 330px;
    overflow: hidden;
    height: 250px;
    transition: 0.3s ease;
    background-color: black; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
`

export const BlogTileImage = styled('img')`
    opacity: 0.6;
    transition: 0.3s ease;
    height: 100%;

    &:hover{
        transform: scale(1.05)
    }
`

export const BlogTitle = styled('h2')`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Raleway:wght@300&display=swap');   
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    margin: 15px;
    color: white;
    position: absolute;
    text-decoration: none;
    max-width: 300px;
    top: 0;
    left: 0;
`
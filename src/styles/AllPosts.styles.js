import styled from 'styled-components'


export const AllPostsWrapper = styled('div')`
    margin: 50px 0;
`

export const BlogTile = styled('div')`
    position: relative;
    width: 330;
    /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
    transition: 0.3s ease;
    background-color: black;
    overflow: hidden;


    &:hover {
        /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); */
    }
`

export const BlogTileImage = styled('img')`
    opacity: 0.6;
    transition: 0.3s ease;
    

    &:hover{
        transform: scale(1.1)
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
import styled from 'styled-components'



export const FooterBox = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    margin-top: 70px;
    font-size: 90%;
    padding-top: 20px;
`

export const Contact = styled('div')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
`
export const IconAndText = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        color: rgb(224, 224, 224)
    }

    & img{
        margin-top: auto;
        height: 35px;
    }
`

export const AdressLine = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 80%;
    width: max-content;
    margin: 15px 0 8px 0;
    cursor: pointer;

    &:hover {
        color: rgb(224, 224, 224);
    }

    & img {
        margin-top: auto;
        height: 35px; 
    }
`

export const HygienRatingWrapper = styled('div')`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 19px 0 10px 0;
`

export const Me = styled('div')`
    font-size: 70%;
    color: grey;
    padding-bottom: 10px;
    width: 100%;
    text-align: center;
    margin-bottom: 0;
    bottom: 0px;
    

    & a {
        transition: 0.5s ease;
        color: white;

        &:hover {
            text-decoration: underline;
        }
    }

`
import styled from 'styled-components'


export const Gallery = styled('div')`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1000px;
    margin-top: 50px;
`

export const OneImageWrapper = styled('div')`
    margin: 1.5px;
    overflow: hidden;
    height: 47vw;
    width: 47vw;
    max-width: 300px;
    max-height: 300px;
    min-width: 150px;
    min-height: 150px;
`

export const OneImage = styled('img')`
    height: 100%;
    filter: brightness(1);
    transition: transform 0.5s ease;

    &:hover{
        transform: scale(1.1)
    }
`

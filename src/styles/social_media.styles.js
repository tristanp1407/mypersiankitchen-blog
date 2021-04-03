import styled from 'styled-components'


export const Wrapper = styled('div')`
    margin-top: 5px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
`

export const LogosWrapper = styled('div')`
    display: flex;

    & div{
        height: 5vw;
        width: 5vw;
        max-height: 30px;
        max-width: 30px;
        min-height: 20px;
        min-width: 20px;
        display: flex;
        margin-left: 20px;
    }

    & img{
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease;

        &:hover{
            transform: scale(1.2);
        }
    }


`

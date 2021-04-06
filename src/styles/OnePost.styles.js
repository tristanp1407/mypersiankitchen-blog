import styled from 'styled-components'


export const OneBlogWrapper = styled('div')`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
`

export const TitleAuthorWrapper = styled('div')`
    justify-content: left;
    width: 500px;
`

export const AuthorWrapper = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    margin: 30px 0;

    & img {
        border-radius: 50%;
        height: 40px;
        margin-right: 10px;
    }
`

export const MainImageWrapper = styled('div')`
    max-width: 1000px;
    width: 95vw;
    margin-bottom: 50px;
`
export const BlogBodyWrapper = styled('div')`
    max-width: 600px;
`



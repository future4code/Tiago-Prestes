import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 980px;
    max-width: 100%;
    margin: 0 auto;
    margin-top: 50px;
`

export const PosterContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    width: 160px;
    height: 280px;
    margin: 4px 4px 40px 4px;
`
export const TitleContainer = styled.div`
    margin-top: 4px;
    text-align: center;
    border-top: 2px solid #005005;
    border-left: 2px solid #005005;
    border-right: 2px solid #005005;
    border-radius: 2px;    
    P {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    max-width: 100%;
        img {
            border-radius: 4px;
            width: 160px;
            height: 225px;
            box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 0px rgba(0,0,0,0);
        }
`

export const VoteContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    border-radius: 100%;
    border: 2px solid #005005;
    background-color: #ffb300;
    padding: 4px;
    width: 30px;
        p {
            color: black;
        }
`

import styled from "styled-components";

const MainContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const PostContainer = styled.div`
display: flex;
flex-wrap: wrap;
padding: 14px;
justify-content: center;
`

const WriterBox = styled.div`
    margin: 8px 0px 8px 0px;
    padding: 12px;
        input {
            width: 400px;
            min-height: 66px; 
            padding: 12px;
            text-align: left;
            border: 2px solid #8096A4;
            border-radius: 6px;
        }
        button {
            width: 80px;
            height: 92px;
        }
`
export {
    MainContainer,
    WriterBox,
    PostContainer
}
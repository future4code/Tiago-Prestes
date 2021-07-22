import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: #27292D;
        p, h1, h2, h3, h4 {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
        }
`
const PageContainer = styled.div`
    display: flex;
    background: white;
    width: 760px;
    margin: 16px 0px 32px 0px;
    border-radius: 6px;
    flex-direction: column;
    align-items: center;
    justify-content: initial;
`
const PostContainer = styled.div`
    margin: 8px 0px 8px 0px;
    max-width: 660px;
        /* border: 2px solid #313131; */

`
const TextContainer = styled.div`
    /* border: 2px solid #313131; */
    padding: 12px;
`
const WriteBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8px 0px 8px 0px;
    align-items: center;
    /* border: 1px solid red; */
    padding: 12px;
        input {
            width: 640px;
            min-height: 66px; 
            padding: 12px;
            text-align: left;
            border: 2px solid #8096A4;
            border-radius: 6px;
        }
        
`

const CommentSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8px 0px 8px 0px;
    align-items: center;
        p {
            margin: 0;
            width: 640px;
            height: 66px;
            min-height: 90px; 
            padding: 12px;
            text-align: left;
            border: 2px dashed #8096A4;
            border-radius: 6px;
        }
    /* border: 1px solid pink; */
        
`

export {
    CommentSection,
    MainContainer,
    WriteBox,
    PostContainer,
    PageContainer,
    TextContainer
}
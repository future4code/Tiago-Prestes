import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
        p, h1, h2, h3, h4 {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
        }
`
const PageContainer = styled.div`
    display: flex;
    background: white;
    width: 760px;
    min-height: 500px;
    margin: 16px 0px 32px 0px;
    flex-direction: column;
    align-items: center;
    /* border-top: 1px solid black; */

    button {
            margin-top: 8px;
            margin-bottom: 8px;
            cursor: pointer;
            border: none;
            background: #2AA9E0;
            border-radius: 8px;
            
            :hover {
                    background: #6fdbff;
                } 
        }     
`

const PostContainer = styled.div`
    margin: 8px 0px 8px 0px;
    max-width: 660px;

`
const TextContainer = styled.div`
    padding: 12px;
    border-bottom: 1px solid grey;
    border-top: 1px solid grey;

`
const WriteBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8px 0px 8px 0px;
    align-items: center;
    padding: 12px;
    border-top: 1px solid black;
        input {
            width: 640px;
            min-height: 66px; 
            padding: 12px;
            text-align: left;
            border: 1px solid black;
        }
        button {
            margin-top: 8px;
            cursor: pointer;
            border: none;
            background: #2AA9E0;
            :hover {
                    background: #6fdbff;
                }   
        }   
`

const CommentSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8px 0px 8px 0px;
    align-items: center;
        p {
            margin: 0;
            width: 320px;
            height: 66px;
            min-height: 15px; 
            padding: 12px;
            text-align: left;
            border-bottom: 1px dashed black;
        }
        
`

export {
    CommentSection,
    MainContainer,
    WriteBox,
    PostContainer,
    PageContainer,
    TextContainer
}
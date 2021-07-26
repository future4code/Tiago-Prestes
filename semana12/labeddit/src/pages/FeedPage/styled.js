import styled from "styled-components";

const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const PostContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 14px;
justify-content: center;
border: 1px solid black;
`

const WriterBox = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px 0px 8px 0px;
    padding: 12px;
        input {
            width: 300px;
            padding: 12px;
            text-align: left;
            border: 1px solid black;
        }
        button {
            border-radius: 8px;
            margin-top: 8px;
            width: 80px;
            cursor: pointer;
            border: none;
            background: #2AA9E0;
            :hover {
                    background: #6fdbff;
                }
        }
`
export {
    MainContainer,
    WriterBox,
    PostContainer
}
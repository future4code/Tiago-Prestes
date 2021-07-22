import styled from "styled-components"

const PostContainer = styled.div`
    display: flex;
    margin: 8px 11px 8px 11px;
    background: white;
    width: 240px;
    border-radius: 6px;
    flex-direction: column;
    align-items: center;
    justify-content: initial;
        border: 2px solid #313131;

`
const TextContainer = styled.div`
    /* border: 2px solid #313131; */
    padding: 12px;
`
export { PostContainer,
        TextContainer 
    }
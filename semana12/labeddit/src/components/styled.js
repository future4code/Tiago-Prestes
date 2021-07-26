import styled from "styled-components"

const PostContainer = styled.button`
    display: flex;
    margin: 16px 11px 0px 11px;
    background: white;
    width: 500px;
    flex-direction: column;
    align-items: center;
    justify-content: initial;
    border: none;
        :hover {
            color: green;
        }
        :active {
            color: purple;
        }
        
`
const TextContainer = styled.div`
    padding: 12px;
`

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-top:  0px;
    padding: 8px;
    border-bottom: 1px solid black;

        button {
            border-radius: 16px;
            cursor: pointer;
            border: none;
            background: #2AA9E0;
            :hover {
                    background: #6fdbff;
                }
    }
`
export {
    PostContainer,
    TextContainer,
    ButtonContainer
}
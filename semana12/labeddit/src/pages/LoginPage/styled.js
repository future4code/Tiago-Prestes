import styled from "styled-components"

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 100px;
    input {
        width: 280px;
        margin: 16px;
        padding: 20px;
        border-radius: 6px;
    }
    button {
        width: 160px;
        padding: 10px;
        margin-bottom: 8px;
    }
`

export {
    MainContainer
}
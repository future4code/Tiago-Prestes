import styled from "styled-components";

const MainContainer = styled.div`
display: flex;
flex-direction: column;
text-align: left;
border: 1px solid black;
width: 450px;
margin: 0 auto;
margin-top: 16px;
-webkit-box-shadow: 3px 3px 6px 1px #000000; 
box-shadow: 3px 3px 6px 1px #000000;
    p {
        margin: 0px;
        padding: 5px;
    }
`
const Title = styled.p`
text-align: center;
font-weight: bold;
`

export {
    MainContainer,
    Title
}
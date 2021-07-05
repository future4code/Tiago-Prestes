import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    margin: 0 auto;
    text-align: center;
    width: 275px;
    height: 525px;
    border: 1px solid black;
    border-radius: 5%;
    flex-direction: column;
        img {
            width: 250px;
            height: 200px;
            margin: 0 auto;
            padding-bottom: 10px;
        }
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 10px;
`

const ContainerText = styled.div`
    background-color: black;
    width: 275px;
    height: 175px;
        p {
            color: white;
        }
`

export  {
    ButtonsContainer,
    MainContainer,
    ContainerText
  }
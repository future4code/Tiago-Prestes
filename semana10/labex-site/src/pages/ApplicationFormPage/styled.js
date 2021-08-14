import styled from "styled-components"

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    width: 500px;
`

const InputForm = styled.input` 
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: gray;
    margin: 0px 0px 15px;
`
const SelectForm = styled.select`
    width: 518px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    margin: 15px 0px 15px;
`

export { InputForm, MainContainer, SelectForm }
import styled from "styled-components"

const LoginContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 100px;
    input {
        width: 280px;
        margin: 16px;
        padding: 20px;
    }
    button {
            margin-top: 8px;
            margin-bottom: 8px;
            cursor: pointer;
            border: none;
            background: #2AA9E0;
            border-radius: 16px;
            
            :hover {
                    background: #6fdbff;
                } 
        }     
`

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
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

export {
    LoginContainer,
    MainContainer
}
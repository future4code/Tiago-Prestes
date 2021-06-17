import React from 'react'   
import axios from 'axios'
import styled from 'styled-components'

const ContainerLista = styled.div`
display: flex;
margin: 0 auto;
width: 250px;
border: 1px solid black;
justify-content: space-between;
`


export default class ListaUsers extends React.Component{
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => { //gera a lista
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

        axios.get(url, {
            headers: {
                Authorization: "tiago-prestes-molina"
            }
        })
        .then((res) => {
            this.setState({usuarios: res.data})
        })
        .catch((err) => {
            alert("Erro! Danger!!!")
        })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "tiago-prestes-molina"
            }
        })
        .then((res) => {
            alert("User delete!")
            this.pegarUsuarios()
        })
        .catch((err) => {
            alert("Error! Danger!!! Get back dude!!! This gonna explode!")
        })
    }

    render(){
        
        const listaUser = this.state.usuarios.map((user) => {
            return (
                <ContainerLista key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>X</button>
                </ContainerLista>
            )
        })

        return(
            <div>

                 <button onClick={this.props.irParaCadastro}>Ir para cadastro</button>
                 <h2>Lista usuário</h2>
                 {listaUser}
            </div>
        )
    }
}
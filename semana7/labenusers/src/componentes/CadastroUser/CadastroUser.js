import axios from 'axios';
import React from 'react';

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

export default class CadastroUser extends React.Component{
    state = {
        nome: "",
        email:""
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
       const body = {
           name: this.state.nome,
           email: this.state.email
       }

       axios.post(url, body, {
           headers: {
            Authorization: "tiago-prestes-molina"
           }
       })
       .then((res) => {
            alert("Usuário cadastrado com sucesso!")
            this.setState({nome: "", email: ""})
       })
       .catch((err) => {
           alert(err.response.data.message)
       })
    }

    render(){
        return(
            <div>
                <h2>Cadastro</h2>
                <button onClick={this.props.irParaLista}>Ir para lista de usuários</button>
                <input 
                placeholder={"Nome"}
                value={this.state.nome}
                onChange={this.handleNome}
                />
                <input 
                placeholder={"email"}
                value={this.state.email}
                onChange={this.handleEmail}
                />
                <button 
                onClick={this.fazerCadastro}
                >Cadastrar</button>
            </div>
        )
    }
}
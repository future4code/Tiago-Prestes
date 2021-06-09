import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  list-style: none;
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [

      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {

    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {

    const tarefasSalvas = localStorage.getItem('tarefas')
    const arrayDetarefas = JSON.parse(tarefasSalvas)
    if(arrayDetarefas) {
      this.setState({tarefas: arrayDetarefas})
    }

  };

  onChangeInput = (event) => {
    // recebe o valor do input
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    //cria uma nova tarefa
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novaListaDeTarefas = [...this.state.tarefas, novaTarefa]

    this.setState({tarefas: novaListaDeTarefas})//O texto vem do State que aqui é tarefas
  }

  selectTarefa = (id) => {
    //Altera para tarefa completa
    const novaListaDeTarefas = this.state.tarefas.map((tarefas) => {
      if(id === tarefas.id) {
        const novaTarefa = {
          ...tarefas,
          completa: !tarefas.completa
        }
        return novaTarefa
      } else {
        return tarefas
      }
    })

    this.setState({tarefas: novaListaDeTarefas})
  }

  onChangeFilter = (event) => {
    // filtra tarefas por completas e pendentes
    this.setState({filtro: event.target.value})
  }

  deleteList = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefas) => {
      return id !== tarefas.id
    })

    this.setState({tarefas: novaListaDeTarefas})

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input 
          type="text" 
          onChange={this.onChangeInput}
          value={this.state.inputValue}
          />
          <button 
          onClick={this.criaTarefa}>Adicionar
          </button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select 
          value={this.state.filter} 
          onChange={this.onChangeFilter}>
            <option value="">Todos</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
          <button
          onClick={this.deleteList}>Limpar lista
          </button>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                deleteList={this.deleteList}
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App

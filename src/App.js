import React, { Component } from "react";
import "./styles.css";
import styled from "styled-components";

const Conteiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #b33951;
  ul {
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li {
    list-style: none;
    color: #eff6ee;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
`;

const Titulo = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #6579a4;
`;

const Caixa = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const CaixaDeTexto = styled.input`
  width: 40vw;
  height: 6vh;
  border-radius: 50vw;
  border: solid #eff6ee;
  background-color: #343846;
  color: #eff6ee;
`;

const Botao = styled.button`
  width: 10vw;
  height: 6vh;
  border: solid #eff6ee;
  background-color: #343846;
  color: #eff6ee;
  border-radius: 50vw;
  font-size: 1.3rem;
`;

class App extends Component {
  state = {
    tarefa: "",
    lista: []
  };

  handleChange = (event) => {
    this.setState({
      tarefa: event.target.value
    });
  };

  adicionar = () => {
    if (this.state.tarefa === "") return;
    this.setState({
      lista: this.state.lista.concat({
        tarefa: this.state.tarefa,
        id: Math.random()
      }),
      tarefa: ""
    });
  };
  apagar = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => {
        return item.id !== id;
      })
    });
  };

  render() {
    return (
      <Conteiner>
        <Titulo>Lista de Tarefas</Titulo>
        <Caixa>
          <CaixaDeTexto
            value={this.state.tarefa}
            onChange={this.handleChange}
          />
          <Botao onClick={this.adicionar}>+</Botao>
        </Caixa>
        <ul>
          {this.state.lista.map((item) => (
            <li>
              {item.tarefa}
              <Botao
                onClick={() => {
                  this.apagar(item.id);
                }}
              >
                x
              </Botao>
            </li>
          ))}
        </ul>
      </Conteiner>
    );
  }
}
export default App;

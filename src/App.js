import React, { Component } from "react";

export default class Map extends Component{
  
  state = {
    dados: [
      {
        nome: "Leandro Murilo Fogaça",
        idade: 46,
        cpf: "734.828.905-36",
        email: "leandromurilofogaca@ligananet.com.br"
      },
      {
        nome: "Benício Noah Vieira",
        idade: 52,
        cpf: "749.003.785-93",
        email: "benicionoahvieira_@mmarques.com"
      },
      {
        nome: "Sebastião Raul Monteiro",
        idade: 32,
        cpf: "052.429.950-17",
        email: "ssebastiaoraulmonteiro@eldor.it"
      },
      {
        nome: "Camila Márcia Lívia Figueiredo",
        idade: 21,
        cpf: "923.932.834-39",
        email: 'camilamarcialiviafigueiredo@zigotto.com.br'
      },
      {
        nome: "Pedro Luan Ian Lima",
        idade: 33,
        cpf: "917.826.372-73",
        email: "ppedroluanianlima@vivax.com.br"
      },
      {
        nome: "Guilherme Martin Diogo Castro",
        idade: 60,
        cpf: "991.245.486-34",
        email: "gguilhermemartindiogocastro@purkyt.com"
      }]
  };

  render(){
    return(
      <div>
        {this.state.dados.map((item) => (
          <p>
            Olá, {item.nome} o e-mail que você usou para login foi {item.email}
          </p>
        ) )}
      </div>
    );
  }
}

//Crie um component de class

//Crie um array de objetos no STATE com pelo menos 6 objetos

//Faça um map do seu state e exiba os dados na tela

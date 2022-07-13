import React, { Component } from 'react';
import "./App.css";
import melancia from "./imagens/melancia.png"


class App extends Component{

  state = {
        nome: "Ana Carolina",
        //idade: 25,
        //comidaFavorita: "Bife com batata frita",
        //musicas: ["Oceano","smile", "correnteza"]
   

  }

  render(){
    return(
      //<section>
        <h1>Oi, me chamo {this.state.nome}</h1>
        //<h2>Tenho {this.state.idade} anos!</h2>
        //<h3>Gosto muito de comer {this.state.comidaFavorita}</h3>
        //<ol>
          //<li>{this.state.musicas[0]}</li>
          //<li>{this.state.musicas[1]}</li>
          //<li className='item'>{this.state.musicas[2]}</li>
        //</ol>
        //<img src={melancia} alt="melancia"/> 
      //</section>
     
    )
  }
}

export default App;






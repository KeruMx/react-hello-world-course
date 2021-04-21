import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import FormularioSimple from './Componentes/FormularioSimple';
import React, {Component} from 'react'
class  App extends  Component {
  constructor(){
    super();
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(({data }) => console.log(data))

    axios.post('https://jsonplaceholder.typicode.com/users', {
      name: 'Emmanuel A',
      username: 'KeruMx'
    }).then(({data })=> console.log(data))
    console.log("prueba contructor")
    //USOS DE FETCH
   /* GET  
   fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response) => console.log(response)) */
      
      /* POST  
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'E',
          username: 'KeruMx'
        })
      }).then((response) => response.json())
      .then((response) => console.log(response)) */
  }
  render() {
    return (
      <div className="">
        <FormularioSimple/>     
      </div>
    );
  }
}

export default App;

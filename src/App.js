import logo from './logo.svg';
import './App.css';

function App() {
  const condition = false
  if (condition) {
    console.log('VERDADERO')
    
  }else{
    console.log('FALSO')
  }
  condition ? console.log('VERDADERO') : console.log('FALSO')

  // spread oprador 
  const numeros =  [1,2,3,4,5]
  const letras =  ['a','b','c','d','e']

  // key dinamica
  // asiganacion de desctruccion
  const persona = {
    nombre: 'leon',
    edad: 30
  }
  const{nombre, edad, nacionalidad = 'indefinida'}= persona
  const { edad: edad2} = persona
  console.log(nombre)
  console.log(edad)
  console.log(nacionalidad.edad)
  console.log(edad2)
  
  return (
    <div className="App">
      <header className="App-header">
        <p> PRIMER ENTREGABLE - CURSO REACT -- CODERHOUSE </p>
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

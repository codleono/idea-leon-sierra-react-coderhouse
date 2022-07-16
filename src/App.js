import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar  from './components/navegacion/NavBar';
import Inicio from './components/paginas/Inicio';
import Items from './components/paginas/Items';
import Images from './components/paginas/Images';


function App() {
  
  // const condition = false
  // if (condition) {
  //   console.log('VERDADERO')
    
  // }else{
  //   console.log('FALSO')
  // }
  // condition ? console.log('VERDADERO') : console.log('FALSO')

  // // spread oprador 
  // const numeros =  [1,2,3,4,5]
  // const letras =  ['a','b','c','d','e']

  // // key dinamica
  // // asiganacion de desctruccion
  // const persona = {
  //   nombre: 'leon',
  //   edad: 30
  // }
  // const{nombre, edad, nacionalidad = 'indefinida'}= persona
  // const { edad: edad2} = persona
  // console.log(nombre)
  // console.log(edad)
  // console.log(nacionalidad.edad)
  // console.log(edad2)
  
  return (
    <Router>
      <NavBar/>
    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <p> PRIMER ENTREGABLE - CURSO REACT -- CODERHOUSE </p>
    //     <img src={logo} className="App-logo" alt="logo" />

    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>

    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

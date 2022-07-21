import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar  from './components/navegacion/NavBar';

import ItemListContainer from './components/navegacion/ItemListContainer';


function App() {
  
  
  return (
    <Router>
      <NavBar />

      <ItemListContainer greeting="Desde el componente ItemListContainer" />
    </Router>
  );
}

export default App;

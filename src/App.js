import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar  from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <Router>
      <NavBar />
      <ItemListContainer greeting="CATALOGO" />
      <br/>
     
    </Router>
  );
}

export default App;

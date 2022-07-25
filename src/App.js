import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar  from './components/navegacion/NavBar';
import ItemListContainer from './components/navegacion/ItemListContainer';
import ItemCount from './components/navegacion/ItemCount'


function App() {
  
  
  return (
    <Router>
      <NavBar />
      <ItemListContainer greeting=" Contador" />
      <br/>
      <ItemCount stock={10} initial = {1}/>
    </Router>
  );
}

export default App;

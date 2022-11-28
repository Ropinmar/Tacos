// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Menu from './components/Menu';
import Pedido from './components/Pedidos';

//nuestro componente principal
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header></Header>
      <Menu></Menu>
      <Pedido></Pedido>
    </div>
  );
}

export default App;

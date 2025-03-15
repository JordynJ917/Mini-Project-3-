import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Header from "./components/header";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div id='App'>
      <NavBar/>
      <Header />
      <ProductList/>
      <Footer/>
    </div>
  )
}

export default App


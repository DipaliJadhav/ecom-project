import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <h1>Ecom Project</h1>
      <Routes>
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 
      <Route path="/add" element={<AddProduct />} /> 
      <Route path="/edit" element={<EditProduct />} /> 
     
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

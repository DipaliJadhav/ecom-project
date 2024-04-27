import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import Register from './Register';
import Protected from './Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>      
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 
      <Route path="/add" element={<Protected Cm={AddProduct} />} /> 
      <Route path="/edit" element={<Protected Cm={EditProduct} />} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

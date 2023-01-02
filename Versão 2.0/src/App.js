import React from 'react';
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AdoteformCards from './routes/AdoteForm';
import Home from './routes/Home';
import Adote from './routes/Adote';
import Login from './routes/Login';
import Cadastro from './routes/Cadastro';
import Contato from './routes/Contato';
import About from './routes/Sobre';
import useAuth from "../src/components/Form/useAuth";
import { AuthProvider } from "../src/components/Form/auth";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
};


function App() {
  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adote' element={<Adote />} />
        <Route exact path="/adoteform" element={<Private Item={AdoteformCards} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route exact path="/contato" element={<Contato />} />
        <Route path='/sobre' element={<About />} />
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;

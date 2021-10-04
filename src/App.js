import React, {Fragment}  from 'react';
import './App.css';
import Header from './components/header/Header';
import Container from './components/container/Container';
import Footer from './components/footer/Footer';

export default function App() {

  const fecha = new Date().getFullYear();


  return (

    <Fragment>
        <Header/>
        <Container />
        <Footer fecha={fecha} />
    </Fragment>  

      
    );
}

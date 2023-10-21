import React from 'react';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './containers/Movies';


const App = () => {
  return ( 
    <>
      <Header/>
      <Movies/>
      <Footer/>
    </>
   );
}
 
export default App;
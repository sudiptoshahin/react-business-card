import logo from './logo.svg';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles.css';

export default class App extends React.Component {
  render() {
    return(
      <div className='container'>
        <Header />
       
        <Main />

        <Footer />
      </div>
    );
  }
}

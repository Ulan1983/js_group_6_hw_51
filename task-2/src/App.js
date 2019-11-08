import React from 'react';
import './App.css';
import Header from './components/header/header';
import Content from './components/content/content';
import Sidebar from './components/sidebar/sidebar';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;

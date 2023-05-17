import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Counter from './Components/Counter';
import Footer from './Components/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Counter />
    <Footer />
  </React.StrictMode>
);
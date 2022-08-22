/* eslint-disable */

import './App.css';
import { Routes, Route } from 'react-router-dom'
import Index from './pages/Index';
import Sub from './pages/Sub';
import Detail from './pages/Detail';
import Header from './pages/Header';
import Footer from './pages/Footer';


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/sub' element={<Sub />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

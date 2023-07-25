import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './componets/navbar';
import Footer from './componets/footer';
import HomeScreen from './pages/home';


const App = () => {
  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route path="/" exact component={HomeScreen} />
       
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

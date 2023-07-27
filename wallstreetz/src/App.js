import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './componets/navbar';
import { Header } from './componets/Header';
import Footer from './componets/footer';
import HomeScreen from './pages/home';
import SearchComponent from './componets/search';
import TestimonialCard from './componets/testimonialcard';
import Element from './componets/element';
import Testimonial from './componets/testimonialcard';

const App = () => {
  return (
    <Router>
      <MenuBar />
      <Element />
      <Testimonial/>
      <Routes>
        <Route path="/" exact component={HomeScreen} />
       
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

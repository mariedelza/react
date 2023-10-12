import React, { Component } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Routes>
            {/* creation de routes pour ma page d'accueil et details articles */}
              <Route path="/" element={<Home />} /> 
              <Route path="/articles/:id" element={<ArticleDetail />} />
          </Routes>
        </BrowserRouter>
    );
  }
}

export default App;

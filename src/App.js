import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/search" className="mr-4">Search</Link>
          <Link to="/phylogenetic-tree">Phylogenetic Tree</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/phylogenetic-tree" element={<PhylogeneticTree />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h1 className="text-xl font-bold">Welcome to Pathogen Genome Database</h1>;
}

function Search() {
  return <h1 className="text-xl">Search Page</h1>;
}

function PhylogeneticTree() {
  return <h1 className="text-xl">Phylogenetic Tree Visualization</h1>;
}

export default App;

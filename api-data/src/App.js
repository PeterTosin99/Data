import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Post from "./Post"; 
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/post/1">Post 1</Link>
            </li>
            <li>
              <Link to="/post/2">Post 2</Link>
            </li>
            <li>
              <Link to="/post/3">Post 3</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import './App.css';
import {  AddPost, Post, AddUser } from './pages';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< Post />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;

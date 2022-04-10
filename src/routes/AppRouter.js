import { Routes, Route } from 'react-router-dom';
import { AddPost, Post, AddUser } from '../pages';

const AppRouter = () => (
    <Routes>
        <Route path="/" element={< Post />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/add-user" element={<AddUser />} />
    </Routes>
);

export default AppRouter;
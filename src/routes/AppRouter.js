import { Routes, Route } from 'react-router-dom';
import { AddPost, Post, AddUser, NotFound } from '../pages';

const AppRouter = () => (
    <Routes>
        <Route path="/" element={< Post />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
);

export default AppRouter;
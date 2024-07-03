import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import LibraryRentStatus from './components/admin/LibraryRentStatus';
import LibraryBookStatus from './components/admin/LibraryBookStatus';
import LibraryUserStatus from './components/admin/LibraryUserStatus';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/admin/rent" element={<LibraryRentStatus />} />
                    <Route path="/admin/book" element={<LibraryBookStatus />} />
                    <Route path="/admin/user" element={<LibraryUserStatus />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

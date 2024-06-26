import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from "styled-components"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

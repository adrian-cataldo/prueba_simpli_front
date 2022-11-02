import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import '@picocss/pico'
import './App.css'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}
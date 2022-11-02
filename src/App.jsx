import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CompaniesPage from './pages/CompaniesPage'
import '@picocss/pico'
import './App.css'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/companies' element={<CompaniesPage />} />
            </Routes>
        </BrowserRouter>
    )
}
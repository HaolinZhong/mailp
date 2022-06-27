import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

const App = () => {
    return (
        <div className='app'>
            <Header />
            <Router>
                <Routes>
                    <Route path='/' element={<HomeScreen />} />
                </Routes>
            </Router>
            <Footer />
        </div>
        
    )
}

export default App
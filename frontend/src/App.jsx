import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import CourseScreen from './screens/CourseScreen'
import ReviewScreen from './screens/ReviewScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

const App = () => {
    return (
        <div>
            <Header />
            <Router>
                <Routes>
                    <Route path='/' element={<HomeScreen />} />
                    <Route path='/courses' element={<CourseScreen/>} />
                    <Route path='/courses/:id' element={<ReviewScreen/>} />
                    <Route path='/login' element={<LoginScreen/>} />
                    <Route path="/register" element={<RegisterScreen />} />
                </Routes>
            </Router>
            <Footer />
        </div>
        
    )
}

export default App
import React from 'react';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/style.scss'
import SideMenu from './components/SideMenu'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
    return (
        <>
            <Header />
            <SideMenu />
            <Router>
                <Routes />
            </Router>
            <Footer/>
        </>
    )
}
export default App;

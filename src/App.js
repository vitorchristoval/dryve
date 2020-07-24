import React from 'react';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/style.scss'
import SideMenu from './components/SideMenu'
import Header from './components/Header'
function App() {
    return (
        <>
        <Header/>
        <SideMenu/>
        <Router>
            <Routes />
        </Router>
        </>
    )
}
export default App;

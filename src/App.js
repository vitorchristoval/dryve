import React from 'react';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/style.scss'
import SideMenu from './components/SideMenu'
function App() {
    return (
        <>
    
        <SideMenu/>
        <Router>
            <Routes />
        </Router>
        </>
    )
}
export default App;

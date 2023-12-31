import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Navbar/Dialogs/Dialogs";
import News from "./components/Navbar/News/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";



const App = () => {
    return (<BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dialogs" element={<Dialogs />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />

                </Routes>
            </div>

        </div>
    </BrowserRouter>)
}

export default App;

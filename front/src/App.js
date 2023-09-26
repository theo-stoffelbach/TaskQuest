import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Equipe from "./Components/Equipe/Equipe";
import Navbar from "./Components/Navbar/Navbar";

import React from "react";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/equipe" element={<Equipe/>}/>
            </Routes>
        </div>
    );
}

export default App;

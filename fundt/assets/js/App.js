import { Routes, Route} from "react-router-dom"
import React, {Component, useEffect} from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Campaign from "./components/Campaign";
import Explore from "./components/Explore";

class App extends Component {



    render() {

        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<><Navbar/><Home/></>}  />
                    <Route path="/:id" element={<><Navbar/><Campaign/></>}  />
                    <Route path="/explore" element={<><Navbar/><Explore/></>}  />
                    <Route path="/dashboard" element={<><Navbar/></>}  />
                </Routes>
            </div>
        )
    }
}

export default App;

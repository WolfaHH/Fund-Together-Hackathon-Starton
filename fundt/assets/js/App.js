import { Routes, Route} from "react-router-dom"
import React, {Component, useEffect} from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
class App extends Component {



    render() {

        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<><Navbar/><Home/></>}  />
                    <Route path="/:id" element={<><Navbar/><Campaign/></>}  />
                    <Route path="/explore" element={<><Navbar/><Explore/></>}  />
                    <Route path="/dashboard" element={<><Navbar/><Dashboard/></>}  />
                </Routes>
            </div>
        )
    }
}

export default App;

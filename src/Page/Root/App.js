import React from "react";
import './App.css';
import HomePage from "../Home/HomePage";

function App() {
    return (
        <div className="App">
            <HomePage
                Address={'undefined'}
                SoldOut={false}
                MintMax={2020}
                MintCurrent={2020}
                MintPrise={0.02}
            />
        </div>
    );
}

export default App;

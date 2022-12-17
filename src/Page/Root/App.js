import React from "react";
import './App.css';
import HomePage from "../Home/HomePage";

function App() {

    const OnMintClick = () => {
        console.log('mint click\r\n');
    };
    const OnConnectClick = () => {
        console.log('mint connect wallet\r\n');
    };

    return (
        <div className="App">
            <HomePage
                OnMintClicked={OnMintClick}
                OnConnectClicked={OnConnectClick}
                Address={undefined}
                SoldOut={false}
                MintMax={2020}
                MintCurrent={0}
                MintPrise={0.02}
            />
        </div>
    );
}

export default App;

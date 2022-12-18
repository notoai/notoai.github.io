import React, {useEffect, useState} from "react";
import './App.css';
import HomePage from "../Home/HomePage";
import Artwork from "../Artwork/Artwork";

function App() {

    const [selectID, setSelectID] = useState([])

    useEffect(() => {
        setSelectID(0);
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const OnMintClick = () => {
        console.log('mint click\r\n');
    };
    const OnConnectClick = () => {
        console.log('mint connect wallet\r\n');
    };

    const BuildContent = (id) => {
        if (id === 0) {
            return (
                <HomePage
                    OnMintClicked={OnMintClick}
                    OnConnectClicked={OnConnectClick}
                    Address={undefined}
                    SoldOut={false}
                    MintMax={2020}
                    MintCurrent={0}
                    MintPrise={0.02}
                />
            );
        } else if (id === 1) {
            return (
                <Artwork/>
            );
        }
    }

    return (
        <div className="App">
            <div className='AppHeader'>
                <img
                    className='AppHeaderLogo'
                    src={process.env.PUBLIC_URL + '/images/Logo.png'}
                    alt='banner'/>
                <div
                    style={{
                        opacity: (selectID === 0) ? 1 : 0.5
                    }}
                    onClick={() => {
                        setSelectID(0)
                    }}
                    className='AppHeaderItem'>
                    Mint<span>No-to-AI</span>NFT
                </div>
                <div
                    style={{
                        opacity: (selectID === 1) ? 1 : 0.5
                    }}
                    onClick={() => {
                        setSelectID(1)
                    }}
                    className='AppHeaderItem'>
                    Artwork airdrop
                </div>
            </div>
            {BuildContent(selectID)}
        </div>
    );
}

export default App;

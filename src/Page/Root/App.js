import React, {useEffect, useState} from "react";
import './App.css';
import HomePage from "../Home/HomePage";
import Artwork from "../Artwork/Artwork";
import {WalletConnect, WalletDisconnect, WalletType} from "../../Web3/WalletUtils";
import {useWeb3React} from "@web3-react/core";

function App() {

    const context = useWeb3React()
    const {account} = context

    const [selectID, setSelectID] = useState([])

    const web3ReactContext = useWeb3React()

    useEffect(() => {
        setSelectID(0);
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const connect = (target) => {
        WalletConnect(web3ReactContext, target, (error) => {
            disconnect()
        }).then()
    }


    const disconnect = () => {
        WalletDisconnect(web3ReactContext)
    }


    const OnMintClick = () => {
        console.log('mint click\r\n');
    };
    const OnConnectClick = () => {
        connect(WalletType.MetaMask);
    };

    const GetShortAccount=(address)=>{
        if (address === undefined || address === null || address.length === 0) {
            return undefined
        }

        if (address.length < 10) {
            return address
        }

        return address.slice(0, 5) + '...' + address.slice(address.length - 4)
    }

    const BuildContent = (id) => {
        if (id === 0) {
            return (
                <HomePage
                    OnMintClicked={OnMintClick}
                    OnConnectClicked={OnConnectClick}
                    Address={GetShortAccount(account)}
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
                        onClick={() => {
                            setSelectID(0)
                        }}
                        className='AppHeaderItem'>
                        <div
                            style={{
                                filter: (selectID === 0) ? 'brightness(100%)' : 'brightness(50%)'
                            }}>
                            Mint<span>No-to-AI</span>NFT
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            setSelectID(1)
                        }}
                        className='AppHeaderItem'>
                        <div
                            style={{
                                filter: (selectID === 1) ? 'brightness(100%)' : 'brightness(50%)'
                            }}>
                            Artwork airdrop
                        </div>
                    </div>
                </div>
                {BuildContent(selectID)}
                <button onClick={connect}
                        className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Connect
                    to MetaMask
                </button>
        </div>
    );
}

export default App;

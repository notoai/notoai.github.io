import React, {useEffect, useState} from "react";
import './App.css';
import HomePage from "../Home/HomePage";
import Artwork from "../Artwork/Artwork";
import {WalletConnect, WalletDisconnect, WalletType} from "../../Web3/WalletUtils";
import {useWeb3React} from "@web3-react/core";
import Web3 from "web3";
import {Environment} from "../../Web3/Environment";
import LoadingPage from "../Loading/LoadingPage";
import {Jump2EtherScan} from "../../Uitls/JumpUtils";

function App() {
    const {account, active, library} = useWeb3React()
    const [selectID, setSelectID] = useState(0)
    const [mintClicked, setMintClicked] = useState(false)
    const [mintSuccess, setMintSuccess] = useState(false)
    const [transactionHash, setTransactionHash] = useState(null)
    const [mintFinished, setMintFinished] = useState(false)
    const [totalSupply, setTotalSupply] = useState(0)
    const [showLoading, setShowLoading] = useState(false)

    const web3ReactContext = useWeb3React()

    useEffect(() => {
        setSelectID(0);
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        loadData();
    }, [account, active]) // eslint-disable-line react-hooks/exhaustive-deps


    const loadData = () => {
        if (!account) {
            console.log('not active')
            return
        }
        console.log('load data')
        setTimeout(() => {
            if (showLoading === false) {
                setShowLoading(true)
            }
        }, 100);
        const web3 = new Web3(library.provider)
        const contract = new web3.eth.Contract(Environment.NoToAI_ABI, Environment.NoToAI_ContractAddress)
        contract.methods['totalSupply']().call().then((value) => {
            setTotalSupply(value)
            setTimeout(() => {
                setShowLoading(false)
            }, 100);
        })
    }
    // Mint
    const mint = async (count, totalPriceWei) => {
        setMintClicked(true);
        setMintSuccess(false);
        setTransactionHash(null);
        setMintFinished(false);
        if (!active) {
            setMintFinished(true);
            console.error("Please connect wallet!")
            return
        }
        if (!count) {
            setMintFinished(true);
            console.error("Param[count] not found!")
            return
        }
        if (!totalPriceWei) {
            console.error("Param[totalPriceWei] not found!")
            return
        }
        const web3 = new Web3(library.provider)
        const contract = new web3.eth.Contract(Environment.NoToAI_ABI, Environment.NoToAI_ContractAddress)
        const contractAddress = Environment.NoToAI_ContractAddress
        const data = contract.methods['mint'](count).encodeABI()
        const txObject = {
            from: account,
            to: contractAddress,
            value: web3.utils.toHex(totalPriceWei),
            data: data,
        }
        let transactionHash = null
        web3.eth.sendTransaction(txObject)
            .once('transactionHash', function (hash) {
                transactionHash = hash
            })
            .then(async (receipt) => {
                const isSuccess = receipt.status
                const transactionHash = receipt.transactionHash
                if (isSuccess) {
                    console.log('success')
                } else {
                    console.log('failed')
                }
                if (isSuccess) {
                    setMintSuccess(isSuccess)
                    setTransactionHash(transactionHash)
                    setMintFinished(true)
                }
            })
            .catch(async (e, hash) => {
                let tHash = hash || transactionHash
                console.error("Mint Failed!", tHash, e)
                if (tHash) {
                    setMintSuccess(false)
                    setTransactionHash(hash)
                    setMintFinished(true)
                } else {
                    setMintSuccess(false)
                    setTransactionHash(hash)
                    setMintFinished(true)
                }
            })
    }

    const OnMintClick = (value, price) => {
        if (value === 0) {
            return;
        }
        let total = Web3.utils.toWei(price + '');
        mint(value, total);
    };

    const OnConnectClick = () => {
        WalletConnect(web3ReactContext, WalletType.MetaMask, (error) => {
            WalletDisconnect(web3ReactContext)
        }).then(() => {
            loadData();
        })
    };

    const GetShortAccount = (address) => {
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
                    MintCurrent={totalSupply}
                    MintPrise={0.02}
                />
            );
        } else if (id === 1) {
            return (
                <Artwork/>
            );
        }
    }

    const CheckLoading = () => {
        let Message = '';
        let btn1 = undefined;
        let btn2 = undefined;

        if (mintClicked) {
            if (mintFinished) {
                if (mintSuccess) {
                    Message = 'Mint Successful';
                    btn2 = 'Close'
                } else {
                    Message = 'Mint Failed';
                    btn2 = 'Close'
                }
                if (transactionHash !== null && transactionHash !== undefined) {
                    btn1 = 'View Transaction'
                }
            } else {
                Message = 'Processing Mint, Please wait';
            }
            return (<LoadingPage
                Text={Message}
                Button1={btn1}
                Button2={btn2}
                OnButton1Click={() => {
                    Jump2EtherScan(transactionHash);
                }}
                OnButton2Click={() => {
                    setTimeout(()=>{
                        loadData();
                        setMintClicked(false);
                    },100);
                }}
            />);
        } else if (showLoading) {
            return (<LoadingPage
                Text={Message}
            />);
        } else {
            return null;
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
            {CheckLoading()}
        </div>
    );
}

export default App;

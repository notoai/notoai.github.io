import React, {Component} from 'react';
import './HomePage.css'
import {
    GetSvgMintTitle,
    SvgConnect,
    SvgDown,
    SvgJumpIcon,
    SvgOpenSeeIcon,
    SvgTwitterIcon,
    SvgUp
} from '../../SVG/SvgImages';
import {Jump2Contract, Jump2OpenSee, Jump2Twitter} from "../../Uitls/JumpUtils";

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MintValue: 0,
            MintTotalPrice: 0
        }
    }

    GetLimitValue(value) {
        let offset = this.props.MintMax - this.props.MintCurrent;
        if (value < 0) {
            value = 0;
        } else if (value > offset) {
            value = offset;
        }
        return value;
    }

    OnValueChange = (e) => {
        let value = this.GetLimitValue(e.target.value);
        this.setState({
            MintValue: value,
            MintTotalPrice: value * this.props.MintPrise
        })

    }


    OnClickUp = () => {
        let value = this.state.MintValue;
        value = this.GetLimitValue(value + 1);
        this.setState({
            MintValue: value,
            MintTotalPrice: value * this.props.MintPrise
        })
    }
    OnClickDown = () => {
        let value = this.state.MintValue;
        value = this.GetLimitValue(value - 1);
        this.setState({
            MintValue: value,
            MintTotalPrice: value * this.props.MintPrise
        })
    }

    BuildDialog() {
        if (this.props.SoldOut === true) {
            return (<div className='HomePageContentLogin'>
                <span className='HomePageMintSoldOutTitle'>
                Sold out
                </span>
                <span
                    className='HomePageMintSoldOutLabel'>{this.props.MintCurrent + '/' + this.props.MintMax + ' mint'}
                </span>
            </div>);
        } else if (this.props.Address === undefined) {
            return (<div className='HomePageContentLogin'>
                <button onClick={this.props.OnConnectClicked}>
                    CONNECT WALLET
                </button>
            </div>);
        } else {
            return (<div className='HomePageContentMint'>
                <div className='HomePageMintTitle'>Mint number</div>
                <div className='HomePageMintInputPanel'>
                    <input
                        onChange={this.OnValueChange}
                        value={this.state.MintValue}
                    />
                    <div
                        id='btnUp'
                        onClick={this.OnClickUp}
                        className='HomePageMintInputUp HomePageMintInputButton'>
                        {SvgUp("#6C6C6C")}
                    </div>
                    <div
                        id='btnDown'
                        onClick={this.OnClickDown}
                        className='HomePageMintInputDown HomePageMintInputButton'>
                        {SvgDown("#6C6C6C")}
                    </div>
                </div>
                <div className='HomePageMintPricePanel'>
                    <span>Total price</span>
                    <label>{this.state.MintTotalPrice} ETH</label>
                </div>
                <div>
                    <button onClick={() => {
                        let value = this.GetLimitValue(this.state.MintValue);
                        this.props.OnMintClicked(value, value * this.props.MintPrise);
                    }}>
                        MINT
                    </button>
                </div>
                <div style={{marginTop: '10px'}}>
                    <span
                        className='HomePageMintLabel'>{this.props.MintCurrent + '/' + this.props.MintMax + ' mint'}
                    </span>
                </div>
            </div>);
        }
    }

    buildConnectButton() {
        if (this.props.Address === undefined) {
            return (
                <button
                    className='HomePageWalletButton HomePageWalletButtonEn'
                    onClick={this.props.OnConnectClicked}>
                    <div style={{
                        transform: ['Scale(0.8)'],
                        marginRight: '10px'
                    }}>
                        {SvgConnect('#000000')}
                    </div>
                    Connect Wallet
                </button>
            );
        } else {
            return (
                <div className='HomePageWalletButton'>
                    {this.props.Address}
                </div>
            );

        }
    }

    render() {
        return (<div className='HomePageRoot'>
            <div className='HomePageHeader'>
                <img
                    src={process.env.PUBLIC_URL + '/images/Title.jpg'}
                    alt='banner'/>
                <img
                    className='HomePageSubTitleImg'
                    src={process.env.PUBLIC_URL + '/images/SubTitle.png'}
                    alt='banner'/>
                {this.buildConnectButton()}
                <div className='HomePageMintPenal'>
                    <div className='HomePageMintPanelHeader'>
                        {GetSvgMintTitle()}
                        <div className='HomePageMintPanelHeaderRight'>
                            <div
                                onClick={() => {
                                    Jump2Twitter();
                                }}
                                className='HomePageLinkPanel'>
                                {SvgTwitterIcon('#DB0000')}
                            </div>
                            <div
                                onClick={() => {
                                    Jump2OpenSee();
                                }}
                                className='HomePageLinkPanel'>
                                {SvgOpenSeeIcon('#DB0000')}
                            </div>
                            <div
                                onClick={() => {
                                    Jump2Contract();
                                }}
                                className='HomePageLinkPanel'>
                                {SvgJumpIcon('#FFFFFF')}
                            </div>
                        </div>
                    </div>
                    {this.BuildDialog()}
                </div>
            </div>
            <div className='HomePageContent'>
                <span>No-to-AI NFT</span> is the contract of ERC721A, with a total of 2020 pieces issued. You will see
                different <span>No-to-AI NFTs</span>. This is not only a declaration in the field of traditional art,
                but also in the field of web3, we should respect the creativity from our human brains. That's the soul.
            </div>
            <div style={{
                height: '2px', width: 'calc(100% - 80px)', margin: '20px 40px 15px', background: '#ffffff'
            }}/>
            <div className='HomePageContent'>
                <span>No-to-AI</span> can be seen as a light WEB3 digital art fund. We will put the NFT revenue in the
                treasury and reward some artists who contribute their works every week. We will divide the artists'
                works into ERC1155 NFT equal to <span>No-to-AI NFT</span>, and share the rights and interests to every
                holder.
                Royalty also
                enters the treasury as a reward for artists.
            </div>
            <div
                style={{
                    marginTop: '29px', marginBottom: '150px'
                }}
                className='HomePageContent'>
                All holders of <span>No-to-AI NFT</span> will receive airdrops and free-mints of digital artworks
                constantly from
                outstanding artists around the world. At the same time, we also encourage like-minded friends in the
                community to share their creations and collect them together.
            </div>
        </div>);
    }
}

export default HomePage;
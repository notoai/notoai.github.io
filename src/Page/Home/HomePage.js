import React, {Component} from 'react';
import './HomePage.css'
import {GetSvgMintTitle, SvgDown, SvgJumpIcon, SvgOpenSeeIcon, SvgTwitterIcon, SvgUp} from '../../SVG/SvgImages';

class HomePage extends Component {


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
                <span className='HomePageMintLabel'>
                    {this.props.MintCurrent + '/' + this.props.MintMax + ' mint'}
                </span>
            </div>);
        } else {
            return (<div className='HomePageContentMint'>
                <div className='HomePageMintTitle'>Mint number</div>
                <div className='HomePageMintInputPanel'>
                    <div className='HomePageMintInputUp HomePageMintInputButton'>
                        {SvgUp("#6C6C6C")}
                    </div>
                    <div className='HomePageMintInputDown HomePageMintInputButton'>
                        {SvgDown("#6C6C6C")}
                    </div>
                </div>
                <div className='HomePageMintPricePanel'>
                    <span>Total price</span>
                    <label>0.02 ETH</label>
                </div>
                <div>
                    <button onClick={this.props.OnMintClicked}>
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

    render() {
        return (<div className='HomePageRoot'>
            <div className='HomePageHeader'>
                <img
                    src={process.env.PUBLIC_URL + '/images/Logo.jpg'}
                    alt='banner'/>
                <img
                    className='HomePageSubTitleImg'
                    src={process.env.PUBLIC_URL + '/images/SubTitle.png'}
                    alt='banner'/>
                <div className='HomePageMintPenal'>
                    <div className='HomePageMintPanelHeader'>
                        {GetSvgMintTitle()}
                        <div className='HomePageMintPanelHeaderRight'>
                            <div className='HomePageLinkPanel'>
                                {SvgTwitterIcon('#DB0000')}
                            </div>
                            <div className='HomePageLinkPanel'>
                                {SvgOpenSeeIcon('#DB0000')}
                            </div>
                            <div className='HomePageLinkPanel'>
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
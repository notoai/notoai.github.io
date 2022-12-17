import React, {Component} from 'react';
import "./Artwork.css"

class Artwork extends Component {
    render() {
        return (<div className='ArtworkRoot'>
            <div className='ArtworkTitle'>
                Coming Soon
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

export default Artwork;
import React, {Component} from "react";
import "./HomePage.css"
import {GetSvgMintTitle} from "../../SVG/SvgTitle";

class HomePage extends Component {
    render() {
        return (<div className="HomePageRoot">
            <div className="HomePageHeader">
                <img
                    src={process.env.PUBLIC_URL + '/images/Logo.jpg'}
                    alt='banner'/>
                <img
                    className='HomePageSubTitleImg'
                    src={process.env.PUBLIC_URL + '/images/SubTitle.png'}
                    alt='banner'/>
                <div className="HomePageMintPenal">
                    <div className="HomePageMintPanelHeader">
                        {GetSvgMintTitle()}
                        <div className="HomePageMintPanelHeaderRight">

                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default HomePage;
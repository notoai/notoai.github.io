import {Component} from "react";
import './LoadingPage.css'

class LoadingPage extends Component {

    render() {
        return (
            <div className='LoadingRoot'>
                <div className="sk-cube-grid">
                    <div className="sk-cube sk-cube1"></div>
                    <div className="sk-cube sk-cube2"></div>
                    <div className="sk-cube sk-cube3"></div>
                    <div className="sk-cube sk-cube4"></div>
                    <div className="sk-cube sk-cube5"></div>
                    <div className="sk-cube sk-cube6"></div>
                    <div className="sk-cube sk-cube7"></div>
                    <div className="sk-cube sk-cube8"></div>
                    <div className="sk-cube sk-cube9"></div>
                </div>
                <label>{this.props.Text}</label>
                <div className='LoadingButtonPanel'>
                    {this.props.Button1 !== undefined ?
                        <button onClick={this.props.OnButton1Click}>
                            {this.props.Button1}
                        </button> : null
                    }
                    {this.props.Button2 !== undefined ?
                        <button onClick={this.props.OnButton2Click}>
                            {this.props.Button2}
                        </button> : null
                    }
                </div>
            </div>
        );
    }
}

export default LoadingPage;
import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
    state = {
        priced: [100, 150, 250],
        position: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ruo amet, quisquam unde quam non, eligendi nobis consectetur doloremque necessitatibus sed?',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rquisquam unde quam non, eligendi nobis consectetur doloremque necessitatibus sed?',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. , eligendi nob doloremqueis consectetur doloremque necessitatibus necessitatibus se.'
        ],
        linkto: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
        delay: [500, 0, 500]
    }


    showBoxes = () => (
        this.state.priced.map((box, i) => (
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.priced[i]}</span>
                            <span>{this.state.position[i]}</span>
                        </div>
                        <div className="pricing_description">
                            <span>{this.state.desc[i]}</span>
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;
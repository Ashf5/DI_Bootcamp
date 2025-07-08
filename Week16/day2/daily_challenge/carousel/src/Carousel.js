import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class MyCarousel extends Component {
    render() {
        return (
            <Carousel width={800}>
                <div>
                    <img src="/hong_kong.jpg" />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src="/macao.webp" />
                    <p className="legend">Macao</p>
                </div>
                <div>
                    <img src="/japan.webp" />
                    <p className="legend">Japan</p>
                </div>
                 <div>
                    <img src="/vegas.webp" />
                    <p className="legend">Vegas</p>
                </div>
            </Carousel>
        );
    }
};

export default MyCarousel
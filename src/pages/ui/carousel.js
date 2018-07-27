import React, {Component} from 'react';

import {Card, Carousel} from 'antd';

export default class Carousels extends Component{
    render(){
        return (
            <div>
                <Card title="Text Carousel" className="card-wrap">
                    <Carousel autoplay effect="fade">
                        <div><h3>Carousel banner - 1</h3></div>
                        <div><h3>Carousel banner - 2</h3></div>
                        <div><h3>Carousel banner - 3</h3></div>
                        <div><h3>Carousel banner - 4</h3></div>
                    </Carousel>
                </Card>
                <Card title="Image Carousel" className="slider-wrap">
                    <Carousel autoplay effect="fade">
                        <div>
                            <img src="/carousel-img/carousel-1.jpg" alt="carousel1"/>
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-2.jpg" alt="carousel2"/>
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-3.jpg" alt="carousel3"/>
                        </div>
                        
                    </Carousel>
                </Card>
            </div>
        )
    }
}

import React from "react";
import { Carousel, Col, Image, Row, Space } from "antd";
import './gallery.css';
import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';
import slide3 from '../../images/slide3.jpg';
import gallery1 from '../../images/gallery1.jpg';
import gallery2 from '../../images/gallery2.jpg';
import gallery3 from '../../images/gallery3.jpg';
import gallery4 from '../../images/gallery4.jpg';
import gallery5 from '../../images/gallery5.jpg';
import gallery6 from '../../images/gallery6.jpg';

const Gallery = () => {

    return (
        <Row align={"middle"}>
            <Col span={12}>
                <Carousel className="gallery carousel" autoplay>
                    <img className="gallery carousel image" src={slide1} alt="Mariage dining room" />
                    <img className="gallery carousel image" src={slide2} alt="A table during a dinning reception" />
                    <img className="gallery carousel image" src={slide3} alt="Dinner for an art gallery" />
                </Carousel>
            </Col>
            <Col span={12}>
                <Space direction="vertical" size={'large'}>
                    <Row justify={"space-around"}>
                        <Col span={6}>
                            <Image width={"100%"} src={gallery1} />
                        </Col>
                        <Col span={6}>
                            <Image width={"100%"} src={gallery2} />
                        </Col>
                        <Col span={6}>
                            <Image width={"100%"} src={gallery3} />
                        </Col>
                    </Row>
                    <Row justify={"space-around"}>
                        <Col span={6}>
                            <Image width={"100%"} src={gallery4} />
                        </Col>
                        <Col span={6}>
                            <Image width={"100%"} src={gallery5} />
                        </Col>
                        <Col span={6}>
                            <Image width={"100%"} src={gallery6} />
                        </Col>
                    </Row>
                </Space>
            </Col>
        </Row>
    );
}

export default Gallery;
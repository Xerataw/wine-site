import React from "react";
import { Carousel, Col, Image, Row, Space } from "antd";
import './gallery.css';
import slide1 from '../../images/slide1.webp';
import slide2 from '../../images/slide2.webp';
import slide3 from '../../images/slide3.webp';
import gallery1 from '../../images/gallery1.webp';
import gallery2 from '../../images/gallery2.webp';
import gallery3 from '../../images/gallery3.webp';
import gallery4 from '../../images/gallery4.webp';
import gallery5 from '../../images/gallery5.webp';
import gallery6 from '../../images/gallery6.webp';

const Gallery = () => {

    return (
        <Row align={"middle"} style={{
            marginTop: "5vh"
        }}>
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
                            <Image width={"100%"} src={gallery1}  alt="A table during a dinning reception"/>
                        </Col>
                        <Col span={6}>
                            <Image width={"100%"} src={gallery2} alt="People cheering"/>
                        </Col>
                        <Col span={6}>
                            <Image width={"100%"} src={gallery3} alt="A vine field"/>
                        </Col>
                    </Row>
                    <Row justify={"space-around"}>
                        <Col span={6}>
                            <Image width={"100%"} src={gallery4} alt="A vine field"/>
                        </Col>
                        <Col span={6}>
                            <Image width={"100%"} src={gallery5} alt="A banquet"/>
                        </Col>
                        <Col span={6}>
                            <Image width={"100%"} src={gallery6} alt="A mariage dining room"/>
                        </Col>
                    </Row>
                </Space>
            </Col>
        </Row>
    );
}

export default Gallery;
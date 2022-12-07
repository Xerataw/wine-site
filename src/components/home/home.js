import { Col, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";
import './home.css';

const Home = () => {

    return (
        <Row align={"middle"}>
            <Col span={12}>
                <div className="home container">
                    <article className="home">
                        <Title level={1}>You deserve what's best</Title>
                        <Paragraph>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe culpa a in quis repellat?
                            Repellendus ea illum inventore fugit cupiditate minus quidem, ab eius velit quibusdam ex, obcaecati
                            incidunt ut.
                        </Paragraph>
                    </article>
                </div>
            </Col>
            <Col span={12}>
                <div className="home container">
                    <Title level={1} className="home title">Wanpany</Title>
                </div>
            </Col>
        </Row>

    );
}

export default Home;
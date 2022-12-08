import { Col, Row, Space, Statistic } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";

const About = () => {

    return (
        <Row justify={"space-around"} style={{
            marginTop: "10vh"
        }}>
            <Col span={6}>
                <article className="about">
                    <Title>Our history</Title>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit modi molestias sunt obcaecati perferendis harum in magni odio, magnam sed quibusdam,
                        doloribus at illo perspiciatis quos enim ad maxime distinctio.
                    </Paragraph>
                </article>
            </Col>

            <Col span={6}>
                <article className="about">
                    <Title>Our mission</Title>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit modi molestias sunt obcaecati perferendis harum in magni odio, magnam sed quibusdam,
                        doloribus at illo perspiciatis quos enim ad maxime distinctio.
                    </Paragraph>
                </article>
            </Col>

            <Col span={6}>
                <article className="about">
                    <Title>Some numbers</Title>
                    <Space direction="vertical" size={"large"}>
                        <Statistic title="Active clients" value={1600} />
                        <Statistic title="Events organized" value={135} />
                    </Space>
                </article>
            </Col>
        </Row>
    );
}

export default About;
import { Col, ConfigProvider, Menu, Row } from "antd";
import * as React from "react";
import './index.css';

import logo from '../images/wine_logo.png';
import Home from "../components/home/home";

const IndexPage = () => {
  const siteParts = [
    {
      key: 1,
      label: "Home"
    },
    {
      key: 2,
      label: "About us"
    },
    {
      key: 3,
      label: "Gallery"
    },
    {
      key: 4,
      label: "Shop"
    },
    {
      key: 5,
      label: "Contact us"
    },
  ]

  return (
    <>
      <ConfigProvider theme={{
        token: {
          colorPrimary: '#B8286E',
          fontFamily: 'Montserrat',
          fontSize: '25px',
          fontSizeHeading1: '30px'
        },
        components: {
          Menu: {
            colorItemTextHover: '#FFFFFF'
          }
        }
      }}>
        <Row className="header" align={"middle"}>
          <Col span={12}>
            <img className="logoImage" src={logo} />
          </Col>
          <Col span={4}>

          </Col>
          <Col span={8}>
            <Menu className="menu" mode="horizontal" items={siteParts} />
          </Col>
        </Row>
        <Row>
          <Col span={16}>
          </Col>
          <Col>
            <Home />
          </Col>
        </Row>
      </ConfigProvider>
    </>
  )
}

export default IndexPage;

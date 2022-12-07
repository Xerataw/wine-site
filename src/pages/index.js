import { Col, ConfigProvider, Menu, Row } from "antd";
import * as React from "react";
import './index.css';

import logo from '../images/wine_logo.png';
import Home from '../components/home/home';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import Gallery from '../components/gallery/gallery';
import Shop from '../components/shop/shop';


const IndexPage = () => {
  const siteParts = [
    {
      key: "home",
      label: "Home",
      component: Home
    },
    {
      key: "about",
      label: "About us",
      component: About
    },
    {
      key: "gallery",
      label: "Gallery",
      component: Gallery
    },
    {
      key: "shop",
      label: "Shop",
      component: Shop
    },
    {
      key: "contact",
      label: "Contact us",
      component: Contact
    },
  ]

  const itemSelect = (item) => {
    //component = siteParts[item.key].component; 
  }

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
            <Menu className="menu" mode="horizontal" items={siteParts} defaultSelectedKeys={["home"]} onSelect={itemSelect} />
          </Col>
        </Row>
        <Contact />
      </ConfigProvider>
    </>
  )
}

export default IndexPage;

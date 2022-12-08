import { Col, ConfigProvider, Menu, Row } from "antd";
import * as React from "react";
import './index.css';

import logo from '../images/wine_logo.png';
import Home from '../components/home/home';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import Gallery from '../components/gallery/gallery';

const IndexPage = () => {
  const siteParts = [
    {
      key: "home",
      label: "Home",
    },
    {
      key: "about",
      label: "About us",
    },
    {
      key: "gallery",
      label: "Gallery",
    },
    {
      key: "contact",
      label: "Contact us",
    },
  ]

  const itemSelect = async (item) => {
    fadeOutLauncher();

    setTimeout(() => {
      fadeInLauncher(item);
    }, 550);
  }

  const fadeInLauncher = (item) => {
    switch (item.key) {
      case 'home':
        setHome(true);
        break;
      case 'about':
        setAbout(true);
        break;
      case 'gallery':
        setGallery(true);
        break;
      case 'contact':
        setContact(true);
        break;
    }
    setSlideIn(1);
  }

  const fadeOutLauncher = () => {
    setSlideOut(1);
    setTimeout(() => {
      unsetActualComponent();
    }, 500);
  }

  const unsetActualComponent = () => {
    setHome(false);
    setAbout(false);
    setGallery(false);
    setContact(false);
    setShop(false);
  }

  const resetAnimation = () => {
    if (slideIn == 1) {
      setSlideIn(0);
    }
    if (slideOut == 1) {
      setSlideOut(0)
    }
  }

  const [slideIn, setSlideIn] = React.useState(0);
  const [slideOut, setSlideOut] = React.useState(0);

  const [home, setHome] = React.useState(true);
  const [about, setAbout] = React.useState(false);
  const [gallery, setGallery] = React.useState(false);
  const [shop, setShop] = React.useState(false);
  const [contact, setContact] = React.useState(false);

  return (
    <div className="sliderContainer">
      <ConfigProvider theme={{
        token: {
          colorPrimary: '#B8286E',
          fontFamily: 'Montserrat',
          fontSize: '25px',
          fontSizeHeading1: '30px',
          colorError: '#db0000'
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
          <Col span={5}>

          </Col>
          <Col span={7}>
            <Menu className="menu" mode="horizontal" items={siteParts} defaultSelectedKeys={["home"]} onSelect={itemSelect} />
          </Col>
        </Row>
        <div className="slider" onAnimationEnd={resetAnimation} slidein={slideIn} slideout={slideOut}>
          {home && <Home />}
          {about && <About />}
          {gallery && <Gallery />}
          {contact && <Contact />}
        </div>
      </ConfigProvider>
    </div>
  )
}

export default IndexPage;

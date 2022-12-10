import { Col, ConfigProvider, Menu, Row } from "antd";
import * as React from "react";
import './index.css';

import logo from '../images/wine_logo.webp';
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

  const itemSelect = (item) => {
    fadeOutLauncher(item);

    setTimeout(() => {
      fadeInLauncher(item);
    }, 550);
  }

  const fadeInLauncher = (item) => {
    switch (item.key) {
      case 'home':
        setHome(true);
        setSlideInLeft(1);
        break;
      case 'about':
        setAbout(true);
        if (pastComponent === 'home') {
          setSlideInRight(1);
        } else {
          setSlideInLeft(1);
        }
        break;
      case 'gallery':
        setGallery(true);
        if (pastComponent === 'contact') {
          setSlideInLeft(1);
        } else {
          setSlideInRight(1);
        }
        break;
      case 'contact':
        setContact(true);
        setSlideInRight(1);
        break;
    }
    setPastComponent(item.key);
  }

  const fadeOutLauncher = (item) => {
    switch (item.key) {
      case 'home':
        setSlideOutRight(1);
        break;
      case 'about':
        if (pastComponent === 'home') {
          setSlideOutLeft(1);
        } else {
          setSlideOutRight(1);
        }
        break;
      case 'gallery':
        if (pastComponent === 'contact') {
          setSlideOutRight(1);
        } else {
          setSlideOutLeft(1);
        }
        break;
      case 'contact':
        setSlideOutLeft(1);
        break;
    }
    setTimeout(() => {
      unsetActualComponent();
    }, 500);
  }

  const unsetActualComponent = () => {
    setHome(false);
    setAbout(false);
    setGallery(false);
    setContact(false);
  }

  const resetAnimation = () => {
    setSlideInLeft(0);
    setSlideOutLeft(0);
    setSlideInRight(0);
    setSlideOutRight(0);
  }

  const [slideInleft, setSlideInLeft] = React.useState(0);
  const [slideOutLeft, setSlideOutLeft] = React.useState(0);
  const [slideInRight, setSlideInRight] = React.useState(0);
  const [slideOutRight, setSlideOutRight] = React.useState(0);

  const [home, setHome] = React.useState(true);
  const [about, setAbout] = React.useState(false);
  const [gallery, setGallery] = React.useState(false);
  const [contact, setContact] = React.useState(false);

  const [pastComponent, setPastComponent] = React.useState('home');

  return (
    <div className="sliderContainer">
      <ConfigProvider theme={{
        token: {
          colorPrimary: '#B8286E',
          fontFamily: 'Montserrat',
          fontSizeHeading1: '25px',
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
            <img className="logoImage" src={logo} alt="The logo of Wanepany company"/>
          </Col>
          <Col span={3}>

          </Col>
          <Col span={9}>
            <Menu className="menu" mode="horizontal" items={siteParts} defaultSelectedKeys={["home"]} onSelect={itemSelect} />
          </Col>
        </Row>
        <div className="slider" onAnimationEnd={resetAnimation} slideinleft={slideInleft} slideoutleft={slideOutLeft} slideinright={slideInRight} slideoutright={slideOutRight}>
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

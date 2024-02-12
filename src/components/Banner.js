import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import asterisk from "../assets/img/asterisk.svg";
import profile from "../assets/img/bw_bio.jpeg"
import profile2 from "../assets/img/ms_insta.jpeg"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [scrollY, setScrollY] = useState(0);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "Creative Thinker", "Moviebuff"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };
  const calculateStyle = (baseTranslate, baseRotate, multiplier=0.2) => ({
    transform: `translate3d(0px, ${-baseTranslate - scrollY * multiplier}px, 0px) scale3d(1,1,1) rotateZ(${baseRotate - scrollY * 0.02}deg)`,
    transformStyle: 'preserve-3d',
  });

  const calculateStyleH = (baseTranslate, multiplier = 0.2) => ({
    // will-change: `transform`,
    transform: `translate3d(0px, ${-baseTranslate - scrollY * multiplier}px, 0px) scale3d(1,1,1))  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
    transformStyle: 'preserve-3d',
  });

  const asteriskTextStyle = () => ({
    width: isHovered ? '100%' : '0%',
    willChange: 'transform',
    transition: 'width 0.7s ease', // Smooth transition for width change
    overflow: 'hidden', // Keep content from spilling out during transition
    transform: 'translate3d(0px, -30.054px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    transformStyle: 'preserve-3d'
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section id="mast" className="section">
      <div className="parallax-wrapper">
        <div className="container mast w-container">
          <div className="mast-space"></div>
          <div className="w-layout-grid mast-grid">
          <div className="mast-right">
              <div className="mast-heading-div">
                <h1 className="mast-heading-2" style={calculateStyleH(20.04)}>Software</h1>
              </div>
              <div className="mast-heading-div" >
                <h1 className="mast-heading-2" style={calculateStyleH(26.5583)}>Engineer</h1>
              </div>
              <div className="mast-heading-div" style={calculateStyleH(30.066, 0.3)}>
                <h1 className="mast-heading-2">in</h1>
                <h1 className="mast-heading-2">NYC</h1>
                <a href="#" className="spinned-outer w-inline-block w-lightbox" aria-label="open lightbox" onMouseEnter={() => setIsHovered(true)} 
                   onMouseLeave={() => setIsHovered(false)}>
                <h1 className="mast-heading-2">*</h1>
                  {/* <img src={asterisk} loading="lazy" alt="" className="circle-badge" /> */}
                </a>
              </div>
              <div className="asterisk-text" style={asteriskTextStyle()}>
                <div className="text-2">*This website is still a work in progress</div>
              </div>
            </div>
            <div className="mast-left">
              <a href="#" className="buttonmasthover button-home w-button" style={calculateStyle(20.04, -9.499,0.1)}>ms</a>
              <div className="div-block-63">
                <a href="#" className="hey w-inline-block" style={calculateStyle(17.8356, 18.998, 0.1)}>
                  <div className="hey-text">Hey, <br></br>this is <br></br>Maadesh</div>
                </a>
                <img src={profile} loading="lazy" alt="" className="avatar hide-desktop" style={calculateStyle(20.04, 3.998)}/>
              </div>
              <div className="buttonmasthover div-button-about" style={calculateStyle(27.054, -14.0481)}>
                <div className="about-button-no-dots">
                  <a href="#" className="button-about-2 w-button">About me</a>
                </div>
                <a href="#skills" class="dots w-inline-block">
                    <div id="w-node-_8b5f9212-3f17-407f-d140-509c4046460e-4f8d20bd" class="dot-2"></div>
                    <div id="w-node-_8b5f9212-3f17-407f-d140-509c4046460f-4f8d20bd" class="dot-2"></div>
                    <div class="dot-2"></div>
                    <div id="w-node-_8b5f9212-3f17-407f-d140-509c40464611-4f8d20bd" class="dot-2"></div>
                  </a>
              </div>
              <a href="#connect" className="buttonmasthover button-contact w-button" style={calculateStyle(35.07, 5.5491, 0.3)}>Get in touch</a>
              <a href="https://www.linkedin.com/in/maadesh/" target="_blank" rel="noopener noreferrer" className="buttonmasthover button-linkedin w-button" style={calculateStyle(32.565, 29.3487,0.4)}>in</a>
              <a href="#projects" className="buttonmasthover button-work w-button" style={calculateStyle(35.07, 1.5471, 0.32)}>See <br />my <br />projects!</a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

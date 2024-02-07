import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import contactImg from "../assets/img/nyu-brown.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import MailchimpSubscribe from "react-mailchimp-subscribe";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className="contact-image-left" src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                {/* <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form> */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus mattis molestie a iaculis at. Amet aliquam id diam maecenas ultricies mi eget mauris. Cursus metus aliquam eleifend mi in. Tincidunt dui ut ornare lectus sit amet. Ornare lectus sit amet est placerat in egestas. Ipsum dolor sit amet consectetur adipiscing elit. Sed faucibus turpis in eu mi bibendum neque egestas congue. Eu non diam phasellus vestibulum lorem sed risus. Dolor magna eget est lorem. Volutpat commodo sed egestas egestas fringilla phasellus. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Auctor urna nunc id cursus metus aliquam eleifend mi in. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Eget dolor morbi non arcu. Purus sit amet luctus venenatis lectus magna. Pellentesque id nibh tortor id. Condimentum lacinia quis vel eros donec ac odio tempor orci. In arcu cursus euismod quis viverra nibh cras pulvinar. Erat imperdiet sed euismod nisi porta lorem mollis. Quam elementum pulvinar etiam non. Libero enim sed faucibus turpis in eu mi. Elit scelerisque mauris pellentesque pulvinar pellentesque. Semper risus in hendrerit gravida rutrum quisque.</p>
              <span className="navbar-text">
              <div className="social-icon">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/maadesh/"><img src={navIcon1} alt="" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/maadesh/"><img src={navIcon2} alt="" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/maadesh/"><img src={navIcon3} alt="" /></a>
              </div>
              {/* <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink> */}
            </span>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">We Are Committed To Provide Safe Ride Solutions</h2>

                <p className="section__description">
                  At our company, safety is our top priority. We are committed to providing safe ride solutions for our
                  customers, whether it's through our car rental services, airport transfers, or city tours. We take all
                  necessary precautions to ensure that our vehicles are in excellent condition and equipped with the latest
                  safety features.
                </p>

                <p className="section__description">
                  Our professional drivers are also trained to prioritize your safety and well-being on every journey. Choose us
                  for your next ride and have peace of mind knowing that safety is always our top concern.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line" />
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+254798585665</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;

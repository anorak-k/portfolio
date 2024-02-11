import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/brown-gradient.jpg";
import projImg2 from "../assets/img/brown-gradient.jpg";
import projImg3 from "../assets/img/brown-gradient.jpg";
import colorSharp2 from "../assets/img/piano-vector-nofloor-nobg.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Project 1",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">

      {/* <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Project Showcase</h2>
                <p>Here are some of my works</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container> */}
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
      <div class="project-showcase">

            <h2>Project Showcase</h2>
            <p>Here are some of my works</p>
            <a href="project-url-1" class="project rectangle">
              <img src="projImg1" alt="Project 1"/>
            </a>

            <a href="project-url-2" class="project square">
              <img src="image-source-2" alt="Project 2"/>
            </a>

            <a href="project-url-3" class="project circle">
              <img src="image-source-3" alt="Project 3"/>
            </a>

            <a href="project-url-4" class="project rectangle">
              <img src="image-source-4" alt="Project 4"/>
            </a>
        </div>

    </section>
  )
}

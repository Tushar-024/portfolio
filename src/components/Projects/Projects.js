import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/brainboost.png")}
              isBlog={false}
              title="Brain Boost"
              description="Your AI-powered study assistant for accelerated learning"
              ghLink="https://github.com/Tushar-024/brainboost"
              demoLink="https://brainboost.tusharsingla.me/"
            />

          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={require("../../Assets/home-main.svg").default}
              isBlog={false}
              title="Portfolio"
              description="Personal Portfolio Website"
              ghLink="https://github.com/Tushar-024/portfolio"
              demoLink="https://tusharsingla.me/"
            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={require("../../Assets/home-main.svg").default}
              isBlog={false}
              title="Tickit"
              description="A todo app developed using Next.js and Node.js"
              ghLink="https://github.com/Tushar-024/todo_app"
              demoLink="https://Tickit.tusharsingla.me/"
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

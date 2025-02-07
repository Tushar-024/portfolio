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
            {/* <ProjectCard
              // imgPath={require("../../Assets/project1.png").default}
              isBlog={false}
              title="Demo Project 1"
              description="This is a demo project."
              ghLink=""
              demoLink=""
            /> */}
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import project from "../../Assets/Projects/project.png";
import elegant from "../../Assets/Projects/elegent.png";
import fantv from "../../Assets/Projects/fanTvPic .png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={fantv}
              isBlog={false}
              title="FanTv For Music NFT"
              description="Using NextJs for FanTv, a video streaming and sharing platform, catering to millions of users worldwide. Led a team of developers to deliver innovative features"
              ghLink="https://github.com/FanTigerTech/ArtistFirst"
              demoLink="https://fantv.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elegant}
              isBlog={false}
              title="Elegant Clothes"
              description="Design an Elegant Clothes section that showcases sophistication and refinement. Utilize clean layouts, high-quality imagery, elegant typography, and a subtle color palette. Arrange elements thoughtfully, paying attention to detail and ensuring seamless navigation. Optimize the design for responsiveness across different devices."
              ghLink="https://github.com/ankit13819/Elegant-Context-Clothes"
              demoLink="chatipy-5c072.firebaseapp.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Project Management"
              description="Basic Project Management, featuring a sleek and responsive user interface crafted with Tailwind CSS. Seamlessly manage tasks, track progress."
              ghLink="https://github.com/ankit13819/react-project-management"
              demoLink="chatipy-5c072.firebaseapp.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

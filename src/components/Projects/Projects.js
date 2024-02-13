import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/ankit13819/Chatify"
              demoLink="chatipy-5c072.firebaseapp.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

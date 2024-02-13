import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ankit Gupta </span>
            from <span className="purple"> Noida, India.</span>
            <br /> I completed my BTech in 2022 from Veer Bahadur Singh
            Purvanchal University.
            <br />
            Previously employed as a software developer at FanTv until September
            2022, Now have 1.8 years of experience in React development and I am
            actively seeking new opportunities. I am eager to contribute my
            skills and expertise to a dynamic team and am open to both
            entry-level and experienced positions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn More in free time
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ankit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Teodora Fatol </span>
            from <span className="purple"> Cluj-Napoca, Romania.</span>
            <br />
            I am currently employed as a frontend developer at PixelData.
            <br />
            <br />
            I have completed Mathematics and Computer Science  at UBB Cluj-Napoca.
            <br/>
              <br/>
              Also, I am an avid <b className="purple"> photographer</b>. I picked up this hobby only a couple of months ago, so it’s relatively fresh.
              <br/>
              <br/>
              Besides photography, I am educating myself on the basics of  <b className="purple"> graphic design</b> and photo/video editing.
              <br/>
              <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing board games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading a good book
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be grateful and want more in the same time!"{" "}
          </p>
          <footer className="blockquote-footer">Teodora</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

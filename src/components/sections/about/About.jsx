import React from "react";
import { Row, Col, Icon } from "antd";
import "../../../About.css";

const About = props => {
  return (
    <section className="aboutfull">
      <article className="about">
        <Row type="flex">
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="about-header">
            <span id="about">
              <Icon type="message" style={{ fontSize: "50" }} /> About
            </span>
          </Col>
          <Col xs={0} sm={0} md={12} lg={12} xl={12} className="about-header2">
            <span className="about-description">Here's why I build.</span>
          </Col>
          <Col span={24} className="about-card">
            <p>
              <mark className="about-contents-header">#Technology</mark>
              <br />
              The improvements in technology over the last short 15 years have
              been huge. We interact with technology on a daily basis and the
              tech industry now has one of the most significant impacts on the
              world. The industry is constantly changing and{" "}
              <mark className="highlight">
                I believe that change is good, and that learning should never
                stop.
              </mark>{" "}
              I love learning new things on a daily basis as a Developer and
              being at the forefront of this phenomenal industry. Over the last
              several years things have begun moving incredibly fast and web
              development is becoming even more important as Web Apps replace
              traditional software.
            </p>

            <p>
              <mark className="about-contents-header">#ThinkDifferent</mark>
              <br />I completed a{" "}
              <mark className="highlight">
                Bachelor of Music with Honours (1st) in Music Composition
              </mark>{" "}
              after leaving High School, which gives me a unique background and
              skillset. Thinking creatively, problem solving, being responsible
              and dependable, being able to work well with others and
              communicate effectively, critical reflection, performing under
              pressure, adaptability, analytical skills, attention to detail,
              self-management, planning and time management skills are all
              second nature to music graduates. For this reason,{" "}
              <mark className="highlight">
                musicians make excellent developers.
              </mark>
            </p>
            <p>
              I love a good challenge and trying new things to solve them. I
              really enjoy the creative process of envisioning solutions to
              problems and developing products. I now develop technology that{" "}
              <mark className="highlight">
                improves the way we learn, complete everyday tasks and the way
                we do our work.
              </mark>
            </p>

            <p>
              <mark className="about-contents-header">#UserFocused</mark>
              <br />I have significant end-user experience and know the{" "}
              <mark className="highlight">
                importance of user centered development.
              </mark>{" "}
              I am obsessed with details (in a good way), clean beautiful UIs
              and easy-to-use functionality. Putting myself in the user’s shoes
              during development, then fine-tuning the product with user
              feedback is something I spend extra time on. I know that often,{" "}
              <mark className="highlight">
                little things make all the difference.
              </mark>
            </p>
            <p>
              I gained invaluable experience from previous jobs where I taught
              people how to use technology to improve their lives or workflow,
              and from my own experiences as a user using a large multitude of
              different technologies.
            </p>
            <p>
              <mark className="about-contents-header">#GlobalAwareness</mark>
              <br />
              Having travelled extensively through 21 countries, spending the
              most of my life in New Zealand and now living in London, I also
              have a{" "}
              <mark className="highlight">
                global awareness and understanding of other cultures.
              </mark>{" "}
              Countries I've been to include: Australia, Austria, Belgium,
              Cambodia, China, Czech Republic, England, France, Germany, Hong
              Kong, Japan, Macau, the Netherlands, New Zealand, Singapore,
              Scotland, South Korea, Thailand, U.A.E, Vietnam and Wales.
            </p>
          </Col>
        </Row>
      </article>
    </section>
  );
};

export default About;
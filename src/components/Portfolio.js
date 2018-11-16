import React from "react";
import { Row, Col, Icon } from "antd";
import ProjectList from "./ProjectList";
import "./Portfolio.css";

const Portfolio = props => {
  return (
    <section className="portfoliofull">
      <div className="portfolio">
        <Row type="flex">
          <header>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              className="portfolio-header"
            >
              <span id="portfolio">
                <Icon type="appstore-o" style={{ fontSize: "50" }} /> My
                Projects
              </span>
            </Col>
            <Col
              xs={0}
              sm={0}
              md={12}
              lg={12}
              xl={12}
              className="portfolio-header2"
            >
              <span className="portfolio-description">
                Here's what I build.
              </span>
            </Col>
          </header>
          <ProjectList />
        </Row>
      </div>
    </section>
  );
};

export default Portfolio;

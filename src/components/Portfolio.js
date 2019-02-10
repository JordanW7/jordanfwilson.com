import React from "react";
import { Row, Col, Icon } from "antd";
import ProjectList from "./ProjectList";
import "./Portfolio.css";

const Portfolio = props => {
  return (
    <section className="portfoliofull">
      <div className="portfolio">
        <Row type="flex">
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            className="portfolio-header"
          >
            <header>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="portfolio-header" id="portfolio">
                  <Icon type="heart" style={{ fontSize: "50" }} /> My Projects
                </span>
                <span className="portfolio-header2 portfolio-description">
                  Here's what I build.
                </span>
              </div>
            </header>
          </Col>

          <ProjectList />
        </Row>
      </div>
    </section>
  );
};

export default Portfolio;

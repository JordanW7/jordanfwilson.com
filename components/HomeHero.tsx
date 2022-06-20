import styled from "styled-components";

const Section = styled.section`
  padding: 9vw 4vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-color: #1c6693;
  color: white;
`;

const Content = styled.div`
  width: 75%;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 34px;
  line-height: 46px;
  margin: 0 0 24px;
`;

const HomeHero = () => {
  return (
    <Section>
      <Content>
        <Title>
          Product-Minded Software Engineer. Problem Finder, Problem Solver,
          Mentor and Coach.
        </Title>
      </Content>
    </Section>
  );
};

export default HomeHero;

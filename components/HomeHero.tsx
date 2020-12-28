import styled from "styled-components";

const Section = styled.section`
  padding: 9vw 4vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-color: #e6e6e6;
`;

const Content = styled.div`
  width: 75%;
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 34px;
  line-height: 46px;
  margin: 0 0 24px;
`;

const HomeHero = () => {
  return (
    <Section>
      <Content>
        <Title>
          Problem Finder, Creative Problem Solver and Software Engineer.
        </Title>
      </Content>
    </Section>
  );
};

export default HomeHero;

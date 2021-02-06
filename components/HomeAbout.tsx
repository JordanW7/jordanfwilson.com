import Link from "next/link";
import styled from "styled-components";
import Button from "./common/Button";

const Section = styled.section`
  padding: 6vw 4vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 34px;
  line-height: 46px;
  margin: 0 0 24px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  object-fit: cover;
  overflow: hidden;
`;

const Paragraph = styled.p``;

const Column = styled.div`
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: calc(50% - 20px);
  }
`;

const ColumnTwo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: calc(50% - 20px);
    justify-content: flex-end;
  }
`;

const WhiteSpaceCol = styled.div`
  width: 0px;
  @media only screen and (min-width: 768px) {
    width: 40px;
  }
`;

const StyledButton = styled(Button)`
  @media only screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

const HomeAbout = () => {
  return (
    <Section>
      <Column>
        <Title>Hey there! My name is Jordan.</Title>
        <Paragraph>
          I'm a New Zealand Software Engineer living and working in London. I
          specialise in Full Stack product development and am most known for my
          customer-centric approach.
        </Paragraph>
        <Paragraph>
          I love a good challenge and trying new things to solve them. I really
          enjoy the creative process of envisioning solutions to problems and
          developing products. I am passionate about developing technology that
          helps great people achieve great things, improving the way we live our
          lives and the way we do our work in the 21st century.
        </Paragraph>
        <Link href="/about">
          <StyledButton color="#008DD5" hoverColor="rgb(0,141,213,0.9)" link>
            Learn more
          </StyledButton>
        </Link>
      </Column>
      <WhiteSpaceCol />
      <ColumnTwo>
        <Image src="/images/profile.jpg" alt="" />
      </ColumnTwo>
    </Section>
  );
};

export default HomeAbout;

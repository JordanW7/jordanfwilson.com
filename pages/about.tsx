import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styled from "styled-components";

const TopSection = styled.section`
  padding: 5vw 4vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-color: #1c6693;
  color: white;
`;

const ContentSection = styled.section`
  width: 100%;
  margin: 0px auto;
  max-width: 800px;
  padding: 40px;
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

const ContentTitle = styled.h2`
  font-size: 2rem;
`;

const ExternalLink = styled.a`
  color: #008dd5;
  :active,
  :link,
  :visited {
    color: #008dd5;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
`;

const ContentHeader = styled.h5`
  font-size: 1.25rem;
  font-weight: 300;
  margin: 0;
  text-shadow: 0 0 5px silver;
`;

const About = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <TopSection>
        <Content>
          <Title>About</Title>
        </Content>
      </TopSection>
      <ContentSection>
        <ContentTitle>
          Hello{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </ContentTitle>
        <p>I'm Jordan Wilson.</p>
        <p>
          <span role="img" aria-label="blue heart">
            💙
          </span>{" "}
          I love a good challenge and trying new things to solve them. I really
          enjoy the creative process of envisioning solutions to problems and
          developing products. I am passionate about developing technology that
          helps great people achieve great things, improving the way we live our
          lives in the 21st century.
        </p>
        <p>
          <span role="img" aria-label="fire">
            🔥
          </span>{" "}
          I always run toward fires. I love helping others and ensuring that
          similar fires don't happen in the future. Fires often provide
          invaluable learning opportunities.
        </p>
        <p>
          <span role="img" aria-label="chart">
            📈
          </span>{" "}
          I have a constant focus on ensuring whatever I do helps the business
          the most. I have experience in leading risky high-impact technical
          projects under pressure, tactically improving the execution of
          technical teams, managing incidents and improving resilience, taking
          new products through product-market fit and scaling challenges,
          improving the recruitment pipeline and setting vision and defining
          strategy in line with top-line business goals.
        </p>
        <p>
          <span role="img" aria-label="party emoji">
            🎉
          </span>{" "}
          I always do what I can to set up others for success. I love mentoring
          and coaching across an entire organisation. By helping others improve,
          the company improves and everyone wins.
        </p>
        <p>
          <span role="img" aria-label="books">
            📚
          </span>{" "}
          I have a curious nature with an unquenchable thirst for learning. I
          buy more books than I can finish and I sign up for more online courses
          than I can complete. This hunger for knowledge defines me in the way
          that I work.
        </p>
        <SectionTitle>What I'm building</SectionTitle>
        <p>
          At{" "}
          <ExternalLink
            href="https://redsift.com"
            rel="noreferrer"
            target="_blank"
          >
            Red Sift
          </ExternalLink>
          , I have direct product ownership of their new second product,{" "}
          <ExternalLink
            href="https://oninbox.redsift.com"
            rel="noreferrer"
            target="_blank"
          >
            OnINBOX
          </ExternalLink>
          . I am involved in constant strategic decision making and leadership
          over a team in a trying environment. I have gained immense experience
          leading development on{" "}
          <ExternalLink
            href="https://oninbox.redsift.com"
            rel="noreferrer"
            target="_blank"
          >
            OnINBOX
          </ExternalLink>{" "}
          from internal beta through product-market fit and scaling, gaining
          major global companies as customers in the process.
        </p>
        <SectionTitle>Why I build</SectionTitle>
        <ContentHeader>#Technology</ContentHeader>
        <p>
          The improvements in technology over the last short 15 years have been
          huge. We interact with technology on a daily basis and the tech
          industry now has one of the most significant impacts on the world. The
          industry is constantly changing and I believe that change is good, and
          that learning should never stop. I love learning new things on a daily
          basis as a developer and being at the forefront of this phenomenal
          industry. Over the last several years things have begun moving
          incredibly fast and web development is becoming even more important as
          Web Apps replace traditional software.
        </p>
        <ContentHeader>#ThinkDifferent</ContentHeader>
        <p>
          I completed a Bachelor of Music with Honours (1st) in Music
          Composition after leaving High School, which gives me a unique
          background and skillset. Thinking creatively, problem solving, being
          responsible and dependable, being able to work well with others and
          communicate effectively, critical reflection, performing under
          pressure, adaptability, analytical skills, attention to detail,
          self-management, planning and time management skills are all second
          nature to music graduates. For this reason, musicians make excellent
          developers.
        </p>
        <ContentHeader>#UserFocused</ContentHeader>
        <p>
          I understand the importance of user centered development. I am
          obsessed with details (in a good way), clean beautiful UIs and
          easy-to-use functionality. Putting myself in the user’s shoes during
          development, then fine-tuning the product with user feedback is
          something I spend extra time on. I know that often, little things make
          all the difference.
        </p>
      </ContentSection>
    </Layout>
  );
};

export default About;

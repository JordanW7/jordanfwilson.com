import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #e6e6e6; */
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: rgba(19, 15, 235, 0.1) -2px -14px 15px -10px;
  padding: 2vw 4vw;
  font-size: 15px;
  width: 100%;
  a:not(:first-child) {
    margin-left: 30px;
  }
`;

const Copyright = styled.span`
  margin-left: 30px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

const LinkText = styled.span`
  margin-left: 5px;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Link
        href="http://www.linkedin.com/in/jordanfwilson"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/linkedin.svg" width="20" height="20" alt="LinkedIn" />
        <LinkText> Linkedin</LinkText>
      </Link>
      <Link
        href="https://github.com/JordanW7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/github.svg" width="20" height="20" alt="Github" />
        <LinkText>Github</LinkText>
      </Link>
      <Copyright>{`© ${new Date().getFullYear()} Jordan Wilson`}</Copyright>
    </Container>
  );
};

export default Footer;

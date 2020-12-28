import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-content: center;
  /* background-color: rgba(0, 0, 0, 0.9); */
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: rgba(19, 15, 235, 0.1) -2px -14px 15px -10px;
  padding: 10px;
  /* color: white; */
  font-size: 15px;
  opacity: 0.8;
  height: 44px;
  width: 100%;
`;

const Link = styled.a`
  padding-left: 5px;
  padding-right: 20px;
  i {
    font-size: 18;
  }
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
        {/* <Icon type="linkedin" theme="filled" /> */}
        <LinkText> Linkedin</LinkText>
      </Link>
      <Link
        href="https://github.com/JordanW7"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <Icon type="github" theme="filled" /> */}
        <LinkText>Github</LinkText>
      </Link>
      <span>
        {/* <Icon type="copyright" style={{ fontSize: 15 }} /> */}
        {` ${new Date().getFullYear()} Jordan Wilson`}
      </span>
    </Container>
  );
};

export default Footer;
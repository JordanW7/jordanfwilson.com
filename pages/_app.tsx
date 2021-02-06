import { createGlobalStyle, ThemeProvider } from "styled-components";
import { AppProps } from "next/app";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-display: swap;
  font-weight: 300;
  font-family: 'Raleway', sans-serif;
  scroll-behavior: smooth;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

a,
a:link,
a:visited,
a:hover,
a:active {
  color: inherit;
  text-decoration: none !important;
}

/* a:hover {
  opacity: 1;
  text-shadow: 0 0 5px silver;
  transition: opacity 0.25s linear, text-shadow 0.25s linear;
}

:target:before {
  display: block;
  content: "";
  height: 44px;
  visibility: hidden;
  pointer-events: none;
} */

`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;

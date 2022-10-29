import theme from "../themes/default";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globals";
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

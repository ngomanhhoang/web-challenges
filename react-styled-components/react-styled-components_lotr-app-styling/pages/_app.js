import { useState } from "react";
import { GlobalStyle } from "../styles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";

export default function App({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <button
          onClick={() => setIsDark(!isDark)}
          style={{ position: "fixed", top: 20, right: 20 }}
        >
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

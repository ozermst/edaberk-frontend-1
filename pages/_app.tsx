import "../styles/globals.css";
import type { AppProps } from "next/app";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import { indigo, red } from "@mui/material/colors";

import Layout from "../components/layout";

import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: red[500],
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

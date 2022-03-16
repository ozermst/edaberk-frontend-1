import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Header from "./header";
import Footer from "./footer";

export interface LayoutProps {
  children?: React.ReactNode;
  // children?: React.ReactChild | React.ReactChild[];
  // children: JSX.Element | JSX.Element[] | string | string[];
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Box sx={{ height: "3rem" }}></Box>
      <Container>{children}</Container>
      <Box sx={{ height: "3rem" }}></Box>
      <Footer />
    </>
  );
}

export default Layout;

import React from "react";
import NextLink from "next/link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <footer>
      <Box sx={{ backgroundColor: "primary.light" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              <NextLink href="/" passHref>
                <Link sx={{ color: "white" }}>Eda Ayberkin</Link>
              </NextLink>
            </Typography>
          </Toolbar>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;

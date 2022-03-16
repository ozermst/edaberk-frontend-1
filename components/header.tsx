import React from "react";
import NextLink from "next/link";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, flexGrow: 1, display: { xs: "flex", md: "flex" } }}
          >
            <NextLink href="/">Eda Ayberkin</NextLink>
          </Typography>
          {/*           <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Eda Ayberkin
          </Typography> */}
          <Box
          // sx={{
          //   flexGrow: 1,
          //   display: { xs: "flex", md: "flex" },
          // }}
          >
            <List sx={{ display: "flex", flexDirection: "row" }}>
              <ListItem>
                <NextLink href="/blog" passHref>
                  <Link sx={{ color: "white" }}>Blog</Link>
                </NextLink>
              </ListItem>
            </List>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

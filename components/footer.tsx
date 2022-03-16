import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

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
                color: "white",
              }}
            >
              Eda Ayberkin
            </Typography>
          </Toolbar>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;

import React from "react";
import { Box, Typography, Divider, Link } from "@mui/material";
import { LinkedIn, Google, GitHub, Instagram } from "@mui/icons-material";

function Footer() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          padding: "20px",
          background: "rgb(2, 48, 32)",
          color: "white",
          justifyContent: "space-between",
          // margin : "0px 10px"
        }}
      >
        <Box sx={{ flex: 1, marginRight: "10px" }}>
          <Typography variant="h5" sx={{ marginBottom: "15px" }}>
            Vendoza
          </Typography>
          <Typography variant="body2">
            At Vendoza, we bring you a seamless and personalized shopping
            experience. Browse through thousands of curated products from global
            brands and local artisans, all in one place.
          </Typography>
        </Box>
        <Box flex={1}></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flex: 3,
            marginRight: "10px",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ flex: 1, marginRight: "10px" }}>
            <Typography variant="h5" sx={{ marginBottom: "15px" }}>
              About
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="#" underline="none" color="white" target="_blank">
                About Us
              </Link>
              <Link href="#" underline="none" color="white" target="_blank">
                Solutions
              </Link>
            </Box>
          </Box>
          <Box sx={{ flex: 1, marginRight: "10px" }}>
            <Typography variant="h5" sx={{ marginBottom: "15px" }}>
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="#" underline="none" color="white" target="_blank">
                FAQ's
              </Link>
              <Typography>Shivabande09@gmail.com</Typography>
            </Box>
          </Box>
          <Box sx={{ flex: 1, marginRight: "10px" }}>
            <Typography variant="h5" sx={{ marginBottom: "15px" }}>
              Social
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "6px",
                }}
              >
                <LinkedIn sx={{ marginRight: "4px" }} />
                <Link
                  href="https://linkedin.com/in/shivraj-bande"
                  underline="none"
                  color="white"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "6px",
                }}
              >
                <GitHub sx={{ marginRight: "4px" }} />
                <Link
                  href="https://github.com/shivrajbande"
                  underline="none"
                  color="white"
                  target="_blank"
                >
                  Github
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "6px",
                }}
              >
                <Instagram sx={{ marginRight: "4px" }} />
                <Link href="#" underline="none" color="white" target="_blank">
                  Instagram
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Footer;

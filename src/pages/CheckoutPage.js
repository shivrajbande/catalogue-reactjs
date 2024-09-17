import React from "react";
import Header from "../components/Header";
import { Box, Divider, Typography, TextField, Button } from "@mui/material";
import { Card } from "@mui/joy";
import { TabPanel, TabList, TabContext } from "@mui/lab";
import Tab from "@mui/material/Tab";

export default function CheckoutPage() {
  const [value, setValue] = React.useState("1"); // Initial state matches one of the tab values

  const handleChange = (event, newValue) => {
    setValue(newValue); // Update state with new tab value
  };

  return (
    <>
      <Header />
      <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
      <Box
        display={"flex"}
        height={"80vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card>
          <Box sx={{ width: "100%",height : "50vh" }}>
            <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Pay with Cards" value="1" />
                    <Tab label="Pay with UPI" value="2" />
                    <Tab label="Pay with Bank" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Box>
                    <Box sx={{ marginBottom: "10px" }}>
                      <Typography>Card number</Typography>
                      <TextField fullWidth={true} />
                    </Box>
                    <Box display={"flex"}>
                      <Box sx={{ marginRight: "10px" }}>
                        <Typography>Expiry Date</Typography>
                        <TextField />
                      </Box>
                      <Box>
                        <Typography>CVV</Typography>
                        <TextField />
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        variant="outlined"
                        size={"large"}
                        sx={{
                          width: "180px",
                          fontSize: "14px",
                          padding: "6px 4px",
                          borderRadius: "6",
                          color: "white",
                          marginTop: "20px",
                          borderColor: "black",
                          "&:hover": {
                            backgroundColor: "rgb(2, 48, 32)",
                            color: "white",
                          },
                          background: "rgb(2, 48, 32)",
                        }}
                        // onClick={() => {navigateToBuy()}}
                      >
                        Proceed to Buy
                      </Button>
                    </Box>
                  </Box>
                </TabPanel>
                <TabPanel value="2">
                  <Box>
                    <Box sx={{ marginBottom: "10px" }}>
                      <Typography>Enter UPI ID</Typography>
                      <TextField fullWidth={true} />
                    </Box>
                    
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        variant="outlined"
                        size={"large"}
                        sx={{
                          width: "180px",
                          fontSize: "14px",
                          padding: "6px 4px",
                          borderRadius: "6",
                          color: "white",
                          marginTop: "20px",
                          borderColor: "black",
                          "&:hover": {
                            backgroundColor: "rgb(2, 48, 32)",
                            color: "white",
                          },
                          background: "rgb(2, 48, 32)",
                        }}
                        // onClick={() => {navigateToBuy()}}
                      >
                        Proceed to Buy
                      </Button>
                    </Box>
                  </Box>
                </TabPanel>
                <TabPanel value="3">
                  <Box>
                    <Box sx={{ marginBottom: "10px" }}>
                      <Typography>Card number</Typography>
                      <TextField fullWidth={true} />
                    </Box>
                    <Box display={"flex"}>
                      <Box sx={{ marginRight: "10px" }}>
                        <Typography>Expiry Date</Typography>
                        <TextField />
                      </Box>
                      <Box>
                        <Typography>CVV</Typography>
                        <TextField />
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        variant="outlined"
                        size={"large"}
                        sx={{
                          width: "180px",
                          fontSize: "14px",
                          padding: "6px 4px",
                          borderRadius: "6",
                          color: "white",
                          marginTop: "20px",
                          borderColor: "black",
                          "&:hover": {
                            backgroundColor: "rgb(2, 48, 32)",
                            color: "white",
                          },
                          background: "rgb(2, 48, 32)",
                        }}
                        // onClick={() => {navigateToBuy()}}
                      >
                        Proceed to Buy
                      </Button>
                    </Box>
                  </Box>
                </TabPanel>
              </TabContext>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
}

import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./landingPage/LandingPage";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { Grid } from "@mui/material";

const Collections = () => {
  const [sideBar, setSideBar] = React.useState(true);

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <>
      <Navbar toggleSideBar={toggleSideBar} sideBar={sideBar} />
      <Grid container>
        {sideBar ? (
          <Grid item md={2} xs={2} lg={2}>
            <Sidebar />
          </Grid>
        ) : undefined}
        <Grid
          item
          md={sideBar ? 10 : 12}
          xs={sideBar ? 10 : 12}
          lg={sideBar ? 10 : 12}
        >
          <Routes>
            <Route
              path="/landing-page"
              element={<LandingPage sidebar={sideBar} />}
            />
          </Routes>
        </Grid>
      </Grid>
    </>
  );
};

export default Collections;

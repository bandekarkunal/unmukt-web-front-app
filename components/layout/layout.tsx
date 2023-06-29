import { Box, CssBaseline, useTheme, useMediaQuery } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import Header from "./header";
import Sidebar from "../ui-components/sidebar/sidebar";
import { useRouter } from "next/router";
import { Context } from "../../context/ContextProvider";
import { sidebarChecks } from "@/utils/dataModifiers/sidebarChecks";
import BackdropLoader from "../ui-components/backdropLoader";

const Layout = (props: any) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const router = useRouter();
  const context = useContext(Context);
  const backdropContext = context?.BackdropLoader;
  const [showHeaderComponents, setShowHeaderComponents] =
    useState<boolean>(false);
  const { open } = backdropContext?.state;

  useEffect(() => {
    setShowHeaderComponents(sidebarChecks(router.pathname));
  }, [router.pathname]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Box
          sx={{
            height: "calc(100vh - 52px)",
            padding: "30px 0",
            boxShadow: "rgb(0 0 0 / 3%) 2px 0px 4px 2px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Header />
            {showHeaderComponents ? <Sidebar /> : null}
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            padding: 0,
            marginTop: "56px",
          }}
        >
          <Box>{props.children}</Box>
        </Box>
        <BackdropLoader open={open} />
      </Box>
    </>
  );
};

export default Layout;

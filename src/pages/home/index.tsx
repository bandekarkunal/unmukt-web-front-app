import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import Head from "next/head";
import { get } from "../../config/axiosClient";
import { min } from "moment";
import { Context } from "@/context/ContextProvider";
import MneHome from "@/components/home/MneHome/MneHome";
import SetFocusDistrictsModal from "@/components/modals/SetFocusDistrictsModal";
import PageTitle from "@/components/user_management/pageTitle";

const Dashboard = () => {
  const context = useContext(Context);

  const loadersContext = context?.Loaders;
  const GlobalDetialsContext = context?.GlobalDetails;

  const { currentState } = GlobalDetialsContext?.state;

  const [dashboardDetails, setDashboardDetails] = useState<any | {}>({});
  const [openFocusDistrictsModal, setOpenFocusDistrictsModal] =
    useState<boolean>(false);

  const fetchDashboardDetails = () => {
    loadersContext?.dispatch({
      type: "dashboard-loader",
      value: "loading",
    });
    let params: any = {};

    currentState === "All States" ? null : (params.state_id = currentState?.id);
    get("identify/dashboards/assessment", params).then(
      (res) => {
        setDashboardDetails(res.data.body);
        loadersContext?.dispatch({
          type: "dashboard-loader",
          value: "loaded",
        });
      },
      (err) => {
        loadersContext?.dispatch({
          type: "dashboard-loader",
          value: "loaded",
        });
      }
    );
  };

  useEffect(() => {
    fetchDashboardDetails();
  }, [currentState?.id]);

  return (
    <>
      <SetFocusDistrictsModal
        openDialog={openFocusDistrictsModal}
        closeDialog={() => setOpenFocusDistrictsModal(false)}
      />
      <Box>
        <Head>
          <title>Dashbaord | Milaan</title>
          <meta
            name="description"
            content="Milaan Foundation is a non-profit, human rights-based organization, which envisions an inclusive and equal world, where every girl has the knowledge, skills, and social environment to pursue her dreams and explore her full potential."
          />
        </Head>
        <PageTitle
          route={"HOME"}
          title={"Home"}
          subTitle={
            "Showing application statisctics from various districts below"
          }
        />
        <Box padding={"20px 30px"}>
          <MneHome dashboardDetailsProps={dashboardDetails} />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;

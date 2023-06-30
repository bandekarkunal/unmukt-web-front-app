import React from "react";
import { Box } from "@mui/material";
import { NextPage } from "next";
import PageTitle from "@/components/user_management/pageTitle";
import RolesTab from "@/components/user_management/RolesTab";

interface Props {
  query?: any;
}
const SingleUser: NextPage<Props> = ({ query }) => {
  return (
    <Box>
      <PageTitle
        route={"USER MANAGMENT / STATE HEADS / PUSPENDRA SHUKLA"}
        title={"Puspendra Shukla"}
        subTitle={"Showing various statistics from various states below"}
      />
      <RolesTab />
    </Box>
  );
};

export default SingleUser;

SingleUser.getInitialProps = async ({ query }) => {
  return { query };
};

import React, { useState, useEffect, useContext } from "react";
import { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { get, put } from "@/src/config/axiosClient";
import { Context } from "@/context/ContextProvider";
import { ErrorToast, SuccessToast } from "@/utils/toasts";
import { handleGetDateWithOrdinals } from "@/utils/dataModifiers";
import { ManageUserRoleSpecific } from "@/utils/dataModifiers/ConditinalRenderingForRoles";
import PageTitle from "@/components/user_management/pageTitle";
import PrimaryButton from "@/components/ui-components/buttons/primaryButton";
import SingleCurriculumBody from "@/components/curriculums/single-curriculum-body";
interface SingleTopic {
  query?: any;
}

const SingleTopic: NextPage<SingleTopic> = ({ query }) => {
  const router: any = useRouter();

  return <Box>hello meetings</Box>;
};

export default SingleTopic;

SingleTopic.getInitialProps = async ({ query }) => {
  return { query };
};

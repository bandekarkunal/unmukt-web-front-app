import React, { useState, useEffect, useContext } from "react";
import { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import PageTitle from "@/components/user_management/pageTitle";
import PrimaryButton from "@/components/ui-components/buttons/primaryButton";
import ConfirmationModal from "@/components/modals/confirmationModal";
import { ErrorToast, SuccessToast } from "@/utils/toasts";
import { get, put } from "@/src/config/axiosClient";
import { Context } from "@/context/ContextProvider";
import { ManageUserRoleSpecific } from "@/utils/dataModifiers/ConditinalRenderingForRoles";
import SingleCurriculumBody from "@/components/curriculums/single-curriculum-body";
import { handleGetDateWithOrdinals } from "@/utils/dataModifiers";

interface SingleTopic {
  query?: any;
}

const SingleTopic: NextPage<SingleTopic> = ({ query }) => {
  const router: any = useRouter();

  return <Box>hello all</Box>;
};

export default SingleTopic;

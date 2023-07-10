import React, { useState, useEffect, useContext } from "react";
import { NextPage } from "next";
import { Box, Divider, Container, Typography } from "@mui/material";
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
import StudentsAttendance from "@/components/meetings/studentsAttendance";

interface SingleTopic {
  query?: any;
}

const SingleTopic: NextPage<SingleTopic> = ({ query }) => {
  const router: any = useRouter();

  return (
    <>
      <Container maxWidth={"lg"} sx={{ mt: 4, padding: "0 !important" }}>
        <Typography fontSize="1.3125rem" fontWeight={500} mb={2}>
          What is life?“A self-sustaining chemical system capable of Darwinian
          evolution
        </Typography>
        <Typography
          fontSize="0.875rem"
          fontWeight={500}
          color="#535353"
          mb={2}
          sx={{ textTransform: "uppercase" }}
        >
          WEDNESDAY, 17 MAY
        </Typography>
        <Divider />
        <StudentsAttendance peerAttendanceList={undefined} />
        <Divider />
        <Box py={3}>
          <Typography mb={2} fontWeight={600} color="#444444DE">
            GROUP PHOTO
          </Typography>
          <Box>
            <img
              src="https://redlof-milaan.s3.ap-south-1.amazonaws.com/meeting-photo/d18670f2-5ceb-46ca-bb4a-254181aa5dde.jpg"
              width={320}
              height={200}
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </Box>
        </Box>
        <Divider />
        <Box py={3} mb={4}>
          <Typography
            mb={2}
            fontSize="0.8125rem"
            fontWeight={600}
            color="#565656"
          >
            REPORT
          </Typography>
          <Typography
            fontSize="0.8125rem"
            fontWeight={400}
            color="#565656"
            mb={2}
          >
            cvhgfvjvjvj
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default SingleTopic;

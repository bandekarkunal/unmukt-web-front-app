import React, { useState, useEffect, useContext } from "react";
import { NextPage } from "next";
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
import { Box, Divider, Typography, Container } from "@mui/material";
import StudentsAttendance from "@/components/meetings/studentsAttendance";
interface SingleTopic {
  query?: any;
}

let attendanceData = {
  id: "117",
  peer_training_curriculum_id: "9",
  peer_training_meeting_id: "23",
  user_id: "180",
  attendee: "189",
  attendance: false,
};

const SingleTopic: NextPage<SingleTopic> = ({ query }) => {
  const router: any = useRouter();

  return (
    <Box>
      <Container sx={{ padding: "24px 20px" }} maxWidth={"lg"}>
        <>
          <Typography
            variant="h5"
            sx={{
              color: "#495057",
              fontWeight: 700,
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Description
          </Typography>
          <Box sx={{ border: "1px solid #c4c4c4", padding: "20px 30px" }}>
            <Typography
              sx={{
                color: "#495057",
                fontWeight: 700,
                mb: 2,
              }}
              variant="h6"
            >
              FAQs
            </Typography>
            <Typography
              sx={{
                color: "#495057",
                fontWeight: 700,
                mb: 1,
              }}
            >
              1. What are some examples of content?
            </Typography>
            <Typography>
              Content, today, comes in all shapes and sizes, from the written
              word to an engaging video. A good content marketing strategy uses
              a mix of different types of content to reach your target audience.
              Some examples of content include blogs, emailers, newsletters,
              social media posts, case studies, and more.
            </Typography>
          </Box>
        </>
      </Container>
    </Box>
  );
};

export default SingleTopic;

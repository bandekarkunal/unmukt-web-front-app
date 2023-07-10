import React, { useState, useContext, useEffect } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { ErrorToast, SuccessToast } from "@/utils/toasts";
import { get, noAuthPost, put } from "@/src/config/axiosClient";
import { Context } from "@/context/ContextProvider";
import PageTitle from "@/components/user_management/pageTitle";
import PrimaryButton from "@/components/ui-components/buttons/primaryButton";
import ConfirmationModal from "@/components/modals/confirmationModal";
import { SaveCurriculumAsDraft } from "@/utils/apis/common/curriculum-draft";
import CreateMeetingBody from "@/components/meetings/create-meeting-body";

interface CreateCurriculumProps {
  query?: any;
}

const CreateCurriculum: NextPage<CreateCurriculumProps> = ({ query }) => {
  const router: any = useRouter();
  const regex = /<(.|\n)*?>/g;

  const context: any = useContext(Context);
  const GlobalDetailsContext = context?.GlobalDetails;
  const CurriculumContext = context?.Curriculum;

  const { currentState } = GlobalDetailsContext?.state;
  const { curriculumDetails } = CurriculumContext?.state;

  const [openConfirmationModal, setOpenConfirmationModal] =
    useState<boolean>(false);

  // const fetchSingleCurriculumDetails = () => {
  //   let details: any = curriculumDetails;
  //   get(`nurture/training-curriculums/${query.id}`).then((res: any) => {
  //     details.name = res.data.body.name;
  //     details.description = res.data.body.description;
  //     CurriculumContext.dispatch({
  //       type: "curriculum-details",
  //       value: details,
  //     });
  //   });
  // };

  const confirmPublishTopic = async () => {
    let formData: any = {};
    formData = curriculumDetails;
    await noAuthPost(`meetings/create-new-meeting`, formData).then(
      (res: any) => {
        router.push(`/meetings`);
      }
    ),
      (err: any) => {
        ErrorToast(err.response.data);
      };
  };

  // useEffect(() => {
  //   if (query.id) fetchSingleCurriculumDetails();
  // }, []);

  return (
    <Box>
      <ConfirmationModal
        openModal={openConfirmationModal}
        closeModal={() => setOpenConfirmationModal(false)}
        heading={"PUBLISH TOPIC"}
        title={"Are you sure you want to publish this curriculum?"}
        buttonText={"PUBLISH"}
        handleOnClickConfirm={confirmPublishTopic}
      />
      <Box>
        <PageTitle
          route={"HOME / MEETING / CREATE"}
          title={"Create a new Meeting"}
        >
          <Box display={"flex"} gap={"16px"}>
            <PrimaryButton
              variant={"contained"}
              sx={{ fontSize: "11px !important", height: "40px !important" }}
              label={"CREATE MEETING"}
              onClick={() => setOpenConfirmationModal(true)}
            />
          </Box>
        </PageTitle>
        <CreateMeetingBody />
      </Box>
    </Box>
  );
};

export default CreateCurriculum;

CreateCurriculum.getInitialProps = async ({ query }) => {
  return { query };
};

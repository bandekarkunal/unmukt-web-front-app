import React, { useState, useContext, useEffect } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { ErrorToast, SuccessToast } from "@/utils/toasts";
import { get, put } from "@/src/config/axiosClient";
import { Context } from "@/context/ContextProvider";
import PageTitle from "@/components/user_management/pageTitle";
import PrimaryButton from "@/components/ui-components/buttons/primaryButton";
import CreateTopicBody from "@/components/curriculums/create-topic-body";
import ConfirmationModal from "@/components/modals/confirmationModal";
import { SaveCurriculumAsDraft } from "@/utils/apis/common/curriculum-draft";

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

  const fetchSingleCurriculumDetails = () => {
    let details: any = curriculumDetails;
    get(`nurture/training-curriculums/${query.id}`).then((res: any) => {
      details.name = res.data.body.name;
      details.description = res.data.body.description;
      CurriculumContext.dispatch({
        type: "curriculum-details",
        value: details,
      });
    });
  };

  const editTopicWithID = async (id: any, params: any) => {
    if (!params.description?.replace(regex, "")) delete params.description;
    await put(`nurture/training-curriculums/${id}`, params).then(
      (res: any) => {
        SuccessToast("Topic has been published successfully");
        router.push(`/nurture-phase/training/curriculum/${id}`);
      },
      (err: any) => {
        ErrorToast(err.response.data);
      }
    );
  };

  const confirmPublishTopic = () => {
    if (query.id) {
      editTopicWithID(query.id, { ...curriculumDetails, status: "published" });
      return;
    }
    let formData: any = {};
    formData = curriculumDetails;
    formData.state_id = currentState?.id ? currentState?.id : null;
    SaveCurriculumAsDraft(formData)
      .then((res: any) => {
        editTopicWithID(res.data.body.id, { status: "published" });
      })
      .catch((err: any) => {
        ErrorToast(err.response.data);
      });
  };

  const handleSaveDraftClick = () => {
    if (query?.id) {
      editTopicWithID(query.id, { ...curriculumDetails });
      return;
    }
    let formData: any = {};
    formData = curriculumDetails;
    formData.state_id = currentState?.id ? currentState?.id : null;
    SaveCurriculumAsDraft(formData)
      .then((res: any) => {
        SuccessToast(res.data.message);
        router.push("/nurture-phase/training/curriculum");
      })
      .catch((err: any) => {
        ErrorToast(err.response.data);
      });
  };

  useEffect(() => {
    if (query.id) fetchSingleCurriculumDetails();
  }, []);

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
          route={"HOME / NURTURE PHASE / TRAINING / CURRICULUM / CREATE"}
          title={"Create a new Topic"}
        >
          <Box display={"flex"} gap={"16px"}>
            <PrimaryButton
              variant={"outlined"}
              sx={{
                border: "2px solid #7d287d",
                fontSize: "11px !important",
                height: "40px !important",
              }}
              label={"SAVE AS DRAFT"}
              onClick={handleSaveDraftClick}
            />
            <PrimaryButton
              variant={"contained"}
              sx={{ fontSize: "11px !important", height: "40px !important" }}
              label={"PUBLISH TOPIC"}
              onClick={() => setOpenConfirmationModal(true)}
            />
          </Box>
        </PageTitle>
        <CreateTopicBody />
      </Box>
    </Box>
  );
};

export default CreateCurriculum;

CreateCurriculum.getInitialProps = async ({ query }) => {
  return { query };
};

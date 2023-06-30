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
  const context: any = useContext(Context);
  const GlobalDetailsContext = context?.GlobalDetails;
  const { userProfile, currentState } = GlobalDetailsContext?.state;

  const [singleTopicDetails, setSingleTopicDetails] = useState<any | {}>({});
  const [topicStatus, setTopicStatus] = useState<any | "">("");

  const [openConfirmationModal, setOpenConfirmationModal] =
    useState<boolean>(false);

  const fetchSingleTopicDetails = () => {
    get(`nurture/training-curriculums/${query.uuid}`).then((res: any) => {
      setSingleTopicDetails(res.data.body);
      setTopicStatus(res.data.body.status);
    });
  };

  const handleClickPublishTopicBtn = (status: string) => {
    setTopicStatus(status);
    setOpenConfirmationModal(true);
  };

  const confirmTopicStatus = () => {
    put(`nurture/training-curriculums/${query.uuid}`, {
      status: topicStatus,
    }).then(
      (res: any) => {
        SuccessToast(res.data.message);
        setOpenConfirmationModal(false);
        router.push(`/nurture-phase/training/curriculum`);
      },
      (err) => {
        ErrorToast(err.response.data);
      }
    );
  };

  const handleClickEdit = () => {
    router.push(
      `/nurture-phase/training/curriculum/create-curriculum?id=${query.uuid}`
    );
  };

  useEffect(() => {
    fetchSingleTopicDetails();
  }, []);

  return (
    <Box>
      <ConfirmationModal
        openModal={openConfirmationModal}
        closeModal={() => setOpenConfirmationModal(false)}
        heading={
          topicStatus == "unpublished" ? "UNPUBLISH TOPIC" : "PUBLISH TOPIC"
        }
        title={`Are you sure you want to ${
          topicStatus == "unpublished" ? "unpublish" : "publish"
        } this curriculum?`}
        buttonText={topicStatus == "unpublished" ? "UNPUBLISH" : "PUBLISH"}
        handleOnClickConfirm={confirmTopicStatus}
      />
      <PageTitle
        route={`NURTURE PHASE / TRAINING / CURRICULUM / ${singleTopicDetails?.name?.toUpperCase()}`}
        title={singleTopicDetails?.name}
        subTitle={`Created on : ${handleGetDateWithOrdinals(
          singleTopicDetails?.created_at
        )}`}
      >
        {["draft", "unpublished"].includes(singleTopicDetails?.status) &&
        ManageUserRoleSpecific(["role-tnd"], userProfile?.roles?.[0]) ? (
          <Box display={"flex"} gap={"16px"}>
            <PrimaryButton
              variant={"outlined"}
              sx={{ border: "2px solid #7d287d", fontSize: "11px !important" }}
              label={"EDIT"}
              onClick={handleClickEdit}
            />
            <PrimaryButton
              variant={"contained"}
              sx={{ fontSize: "11px !important" }}
              label={"PUBLISH TOPIC"}
              onClick={() => handleClickPublishTopicBtn("published")}
            />
          </Box>
        ) : null}

        {singleTopicDetails?.status === "published" &&
        ManageUserRoleSpecific(["role-tnd"], userProfile?.roles?.[0]) ? (
          <Box display={"flex"} gap={"16px"}>
            <PrimaryButton
              variant={"contained"}
              sx={{ fontSize: "11px !important" }}
              label={"UNPUBLISH TOPIC"}
              onClick={() => handleClickPublishTopicBtn("unpublished")}
            />
          </Box>
        ) : null}
      </PageTitle>
      <Box padding={"20px 30px"}>
        <SingleCurriculumBody singleCurriculumDetails={singleTopicDetails} />
      </Box>
    </Box>
  );
};

export default SingleTopic;

SingleTopic.getInitialProps = async ({ query }) => {
  return { query };
};

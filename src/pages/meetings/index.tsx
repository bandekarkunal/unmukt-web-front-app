import React, { useContext, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { get } from "@/src/config/axiosClient";
import { Context } from "@/context/ContextProvider";
import PageTitle from "@/components/user_management/pageTitle";
import { ManageUserRoleSpecific } from "@/utils/dataModifiers/ConditinalRenderingForRoles";
import PrimaryButton from "@/components/ui-components/buttons/primaryButton";
import EmptyState from "@/components/ui-components/emptyState";
import MeetingsList from "@/components/meetings/meetings-list";

const Curriculum = () => {
  const router: any = useRouter();
  const context: any = useContext(Context);
  const GlobalDetailsContext = context?.GlobalDetails;
  const { userProfile, currentState } = GlobalDetailsContext?.state;

  const [topicsList, setTopicsList] = useState<any | []>([]);

  const handleOpenCreateNewCurriculum = () => {
    router.push("/meetings/create-meeting");
  };

  const fetchCurriculumsList = () => {
    let params: any = {};
    get("meetings", params).then((res: any) => {
      setTopicsList(res.data.body);
    });
  };

  useEffect(() => {
    fetchCurriculumsList();
  }, [currentState]);

  return (
    <Box>
      <PageTitle
        route={"MEETINGS"}
        title={"Meetings"}
        subTitle={"View all meetings created"}
      >
        {" "}
        {ManageUserRoleSpecific(
          ["role-trainer"],
          userProfile?.roles?.[0]
        ) ? null : (
          <PrimaryButton
            label={"CREATE A NEW MEETING"}
            sx={{ fontSize: "11px !important" }}
            onClick={handleOpenCreateNewCurriculum}
          />
        )}
      </PageTitle>
      <Box p={"16px 30px"}>
        <Box position={"relative"}>
          <MeetingsList meetingsList={topicsList} />
          {!topicsList?.length ? (
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                top: "35%",
                padding: "0 30px",
              }}
            >
              {ManageUserRoleSpecific(
                ["role-trainer"],
                userProfile?.roles?.[0]
              ) ? (
                <EmptyState
                  subtitle={
                    "There are no meetings created, click the button down below to create a new meeting"
                  }
                  title={""}
                  buttonClick={handleOpenCreateNewCurriculum}
                  buttonLabel="CREATE A NEW MEETING"
                />
              ) : (
                <EmptyState
                  title={"No meetings present."}
                  subtitle={
                    "Currently, there are no meetings created. Please contact the training and Design team."
                  }
                />
              )}
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default Curriculum;

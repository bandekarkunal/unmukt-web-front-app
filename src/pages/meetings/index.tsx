import React, { useContext, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { get } from "@/src/config/axiosClient";
import { Context } from "@/context/ContextProvider";
import PageTitle from "@/components/user_management/pageTitle";
import { ManageUserRoleSpecific } from "@/utils/dataModifiers/ConditinalRenderingForRoles";
import PrimaryButton from "@/components/ui-components/buttons/primaryButton";
import EmptyState from "@/components/ui-components/emptyState";
import CurriculumsList from "@/components/curriculums/curriculums-list";

const Curriculum = () => {
  const router: any = useRouter();
  const context: any = useContext(Context);
  const GlobalDetailsContext = context?.GlobalDetails;
  const { userProfile, currentState } = GlobalDetailsContext?.state;

  const [topicsList, setTopicsList] = useState<any | []>([]);

  const handleOpenCreateNewCurriculum = () => {
    router.push("/curriculums/create-curriculum");
  };

  const fetchCurriculumsList = () => {
    let params: any = {};
    params.state_id = currentState?.id ? currentState?.id : null;
    params.type = "gi_training";

    get("nurture/training-curriculums", params).then((res: any) => {
      setTopicsList(res.data.body);
    });
  };

  useEffect(() => {
    fetchCurriculumsList();
  }, [currentState]);

  return (
    <Box>
      <PageTitle
        route={"CURRICULUM"}
        title={"Curriculum"}
        subTitle={"View all curriculums created"}
      >
        {ManageUserRoleSpecific(
          ["role-facilitator"],
          userProfile?.roles?.[0]
        ) ? null : (
          <PrimaryButton
            label={"CREATE A NEW TOPIC"}
            sx={{ fontSize: "11px !important" }}
            onClick={handleOpenCreateNewCurriculum}
          />
        )}
      </PageTitle>
      <Box p={"16px 30px"}>
        <Box position={"relative"}>
          <CurriculumsList curriculumsList={topicsList} />
          {!topicsList?.length ? (
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                top: "35%",
                padding: "0 30px",
              }}
            >
              {ManageUserRoleSpecific(["role-tnd"], userProfile?.roles?.[0]) ? (
                <EmptyState
                  subtitle={
                    "There are no topics created, click the button down below to create a new topic"
                  }
                  title={""}
                  buttonClick={handleOpenCreateNewCurriculum}
                  buttonLabel="CREATE A NEW Topic"
                />
              ) : (
                <EmptyState
                  title={"No curriculums present."}
                  subtitle={
                    "Currently, there are no topics created. Please contact the training and Design team."
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

import React, { useContext, useState, useEffect } from "react";
import MneTable from "./MneTable";
import { Context } from "../../../context/ContextProvider";
import { Box } from "@mui/material";
import DashboardSkeleton from "../../ui-components/skeletons/dashboardSkeleton";
import { dashboardDetails } from "@/utils/dataModifiers/dashboardDetails";

interface props {
  dashboardDetailsProps: any;
}

const MneHome: React.FunctionComponent<props> = ({ dashboardDetailsProps }) => {
  const context = useContext(Context);

  const GlobalDetailsContext = context?.GlobalDetails;
  const LoadersContext = context?.Loaders;

  const { userProfile } = GlobalDetailsContext?.state;
  const { dashboardLoader } = LoadersContext?.state;

  const [colors, setColors] = useState<any | []>([]);
  const [assessmentDetails, setAssessmentDetails] = useState<any | {}>({});
  const [assessorColors, setAssessorColors] = useState<any | []>([]);
  const [assessorAssessmentDetails, setAssessorAssessmentDetails] = useState<
    any | {}
  >({});

  const fetchDashboardDetails = () => {
    setColors(dashboardDetails(dashboardDetailsProps)?.colors);
    setAssessmentDetails(
      dashboardDetails(dashboardDetailsProps)?.assessment_details
    );
  };

  const fetchAssessorAssessmentDetails = () => {
    setAssessorColors(dashboardDetails(dashboardDetailsProps)?.assessorColors);
    setAssessorAssessmentDetails(
      dashboardDetails(dashboardDetailsProps)?.assessor_assessment_details
    );
  };

  useEffect(() => {
    fetchDashboardDetails();
  }, [dashboardDetailsProps]);

  useEffect(() => {
    if (userProfile?.is_assessor) {
      fetchAssessorAssessmentDetails();
    }
  }, [userProfile, dashboardDetailsProps]);

  return (
    <>
      {dashboardLoader === "loading" ? (
        <DashboardSkeleton />
      ) : (
        <>
          {userProfile?.is_assessor ? (
            <Box mb={4}>
              <MneTable
                colorStatistics={assessorColors}
                assessmentStatistics={assessorAssessmentDetails}
                is_assessor={true}
              />
            </Box>
          ) : null}
          <MneTable
            colorStatistics={colors}
            assessmentStatistics={assessmentDetails}
          />
        </>
      )}
    </>
  );
};

export default MneHome;

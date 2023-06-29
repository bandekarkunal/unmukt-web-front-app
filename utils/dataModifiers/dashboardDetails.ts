export const dashboardDetails = (dashboardDetails: any) => {
  let dashboardFMTData: any = {};
  let colors: any = [];
  colors.push({
    value: dashboardDetails?.total_red,
    color: "#ef5350",
    key: "Red",
  });
  colors.push({
    value: dashboardDetails?.total_amber,
    color: "#ffc000",
    key: "Amber",
  });
  colors.push({
    value: dashboardDetails?.total_green,
    color: "#4caf50",
    key: "Green",
  });

  dashboardFMTData.colors = colors;

  let assessorColors: any = [];
  assessorColors.push({
    value: dashboardDetails?.assessor_red,
    color: "#ef5350",
    key: "Red",
  });
  assessorColors.push({
    value: dashboardDetails?.assessor_amber,
    color: "#ffc000",
    key: "Amber",
  });
  assessorColors.push({
    value: dashboardDetails?.assessor_green,
    color: "#4caf50",
    key: "Green",
  });

  dashboardFMTData.assessorColors = assessorColors;

  let assessment_details: any = [];
  assessment_details?.push({
    value: dashboardDetails?.total,
    key: "Total Applications",
  });
  assessment_details?.push({
    value: dashboardDetails?.total_va_completed,
    key: "Video Assessment Completed",
  });
  assessment_details?.push({
    value: dashboardDetails?.total_vsc_completed,
    key: "VSC Completed",
  });
  assessment_details?.push({
    value: dashboardDetails?.total_interview_completed,
    key: "Total Interviews Completed",
  });
  assessment_details?.push({
    value: dashboardDetails?.total_va_unassigned,
    key: "Total Unassigned Applications",
  });

  dashboardFMTData.assessment_details = assessment_details;

  let assessor_assessment_details: any = [];
  assessor_assessment_details?.push({
    value: dashboardDetails?.daily_target,
    key: "Daily Target",
  });
  assessor_assessment_details?.push({
    value: dashboardDetails?.today_achieved,
    key: "Today's Achievement",
  });
  assessor_assessment_details?.push({
    value: dashboardDetails?.weekly_target,
    key: "Weekly Target Target",
  });
  assessor_assessment_details?.push({
    value: dashboardDetails?.weekly_achieved,
    key: "Weekly Achievement",
  });
  assessor_assessment_details?.push({
    value: dashboardDetails?.total_assigned,
    key: "Total assigned applications",
  });
  assessor_assessment_details?.push({
    value: dashboardDetails?.total_assessed,
    key: "Total completed",
  });

  dashboardFMTData.assessor_assessment_details = assessor_assessment_details;

  return dashboardFMTData;
};

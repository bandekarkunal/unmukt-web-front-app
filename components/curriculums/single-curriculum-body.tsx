import React from "react";
import { Typography, Box } from "@mui/material";

interface props {
  singleCurriculumDetails: any;
}

const SingleCurriculumBody: React.FunctionComponent<props> = ({
  singleCurriculumDetails,
}) => {
  return (
    <>
      <Typography
        sx={{
          color: "#495057",
          fontWeight: 500,
          textTransform: "uppercase",
          mb: 2,
        }}
      >
        Description
      </Typography>
      <Box sx={{ border: "1px solid #c4c4c4", padding: "20px 30px" }}>
        <div
          className={"topic-description"}
          dangerouslySetInnerHTML={{
            __html: singleCurriculumDetails?.description,
          }}
        ></div>
      </Box>
    </>
  );
};

export default SingleCurriculumBody;

import React from "react";
import { Box, Skeleton } from "@mui/material";
import SecondaryButton from "../buttons/secondaryButton";
import PrimaryButton from "../buttons/primaryButton";

const MobileViewSkeletons = () => {
  return (
    <Box
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: "4px",
        marginBottom: "8px",
      }}
    >
      {" "}
      <Box padding="16px" borderBottom={"1px solid #e0e0e0"}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box flex={4}>
            <Box mb={1}>
              <Skeleton width={"35%"} height={28} />
            </Box>

            <Skeleton width={"70%"} />
            <Skeleton width={"75%"} />
          </Box>
          <Box flex={1}>
            <Skeleton width={"100%"} height={30} />
          </Box>
        </Box>
      </Box>
      <Box padding="16px" display={"flex"} gap={"16px"}>
        <SecondaryButton
          label={"VIEW"}
          sx={{ height: "32px !important", fontSize: "11px", width: "100%" }}
          onClick={() => {}}
        />
        <PrimaryButton
          color={"neutral"}
          label={"CALL"}
          sx={{ height: "32px !important", fontSize: "11px", width: "100%" }}
          onClick={() => {}}
        />
      </Box>
    </Box>
  );
};

export default MobileViewSkeletons;

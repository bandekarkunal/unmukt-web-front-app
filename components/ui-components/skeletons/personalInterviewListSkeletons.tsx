import { Skeleton } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";
import SecondaryButton from "../buttons/secondaryButton";
import DatagridComponent from "../datagridComponent";

const PersonalInterviewListSkeletons = () => {
  const columns: GridColDef[] = [
    {
      field: "applicant_name",
      flex: 0.3,
      renderCell: (params: GridRenderCellParams) => <Skeleton width={"100%"} />,
    },
    {
      field: "application_id",
      headerName: "Application No.",
      flex: 0.3,
      renderCell: (params: GridRenderCellParams) => <Skeleton width={"100%"} />,
    },
    {
      field: "preferred_time",
      headerName: "Preferred time.",
      flex: 0.3,
      renderCell: (params: GridRenderCellParams) => <Skeleton width={"100%"} />,
    },
    {
      field: "call_status",
      headerName: "Call status.",
      flex: 0.3,
      renderCell: (params: GridRenderCellParams) => <Skeleton width={"100%"} />,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      flex: 0.4,
      renderCell: (params: GridRenderCellParams) => (
        <SecondaryButton
          label="View"
          sx={{
            height: "32px !important",
            fontSize: "14px",
            textTransform: "none",
          }}
        />
      ),
    },
  ];

  const rows = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];
  return (
    <div>
      <DatagridComponent columns={columns} list={rows} />
    </div>
  );
};

export default PersonalInterviewListSkeletons;

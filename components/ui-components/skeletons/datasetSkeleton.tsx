import React, { useContext, useState } from "react";
import {
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Skeleton } from "@mui/material";
import SecondaryButton from "../buttons/secondaryButton";
import DatagridComponent from "../datagridComponent";

const DatasetSkeleton = () => {
  const columns: GridColDef[] = [
    {
      field: "application_id",
      headerName: "Application No",
      flex: 0.4,
      renderCell: (params: GridRenderCellParams) => <Skeleton width={"100%"} />,
    },
    {
      field: "first_name",
      headerName: "Name",
      flex: 0.5,
      renderCell: (params: GridRenderCellParams) => <Skeleton width={"100%"} />,
    },

    {
      field: "state",
      headerName: "State",
      flex: 0.4,
      renderCell: (params: GridRenderCellParams) => <Skeleton width={"100%"} />,
    },
    {
      field: "address",
      headerName: "District",
      sortable: false,
      flex: 0.6,
      renderCell: (params: GridRenderCellParams) => <Skeleton width={"100%"} />,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      flex: 0.7,
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

export default DatasetSkeleton;

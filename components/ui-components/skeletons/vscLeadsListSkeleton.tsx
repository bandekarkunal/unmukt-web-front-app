import React, { useContext, useState } from "react";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Skeleton } from "@mui/material";
import DatagridComponent from "../datagridComponent";

const VscListSkeleton = () => {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 0.4,
      renderCell: (params: GridRenderCellParams) => <Skeleton width={"100%"} />,
    },
    {
      field: "phone",
      headerName: "Phone number",
      flex: 0.4,
      renderCell: (params: GridRenderCellParams) => <Skeleton width={"100%"} />,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.5,
      renderCell: (params: GridRenderCellParams) => <Skeleton width={"100%"} />,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.6,
      renderCell: (params: GridRenderCellParams) => <Skeleton width={"100%"} />,
    },
    {
      field: "state",
      headerName: "State",
      flex: 0.5,
      renderCell: (params: GridRenderCellParams) => <Skeleton width={"100%"} />,
    },
    {
      field: "availability",
      headerName: "Availability",
      renderCell: (params: GridRenderCellParams) => <Skeleton width={"100%"} />,
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

export default VscListSkeleton;

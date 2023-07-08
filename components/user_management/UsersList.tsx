import React from "react";
import { Box, Button, Theme, Typography } from "@mui/material";
import {
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import DatagridComponent from "../ui-components/datagridComponent";
import UserListAction from "./UserListAction";

interface props {
  userList?: any;
  showRole?: boolean;
  showReporter?: boolean;
  fetchUserCallback?: any;
}

const UsersList: React.FunctionComponent<props> = ({
  userList = [],
  showRole = false,
  showReporter = false,
  fetchUserCallback,
}) => {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 0.9,
      valueGetter: (params) =>
        params.row.first_name + " " + params.row.last_name,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.9,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 0.6,
    },
  ];

  const additionalCols = [
    {
      field: "role",
      headerName: "Roles",
      flex: 0.6,
      valueGetter: (params: GridValueGetterParams) => params.row.roles[0]?.name,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.6,
      renderCell: (params: GridRenderCellParams) => (
        <Typography sx={{ textAlign: "center" }}>
          {(
            params.row.status.charAt(0).toUpperCase() +
            params.row.status.slice(1)
          ).replaceAll("_", " ")}
        </Typography>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      flex: 0.7,
      renderCell: (params: GridRenderCellParams) => (
        <UserListAction
          userData={params.row}
          showRole={showRole}
          fetchCallback={fetchUserCallback}
        />
      ),
    },
  ];

  return (
    <DatagridComponent
      columns={showRole ? columns.concat(additionalCols) : columns}
      list={userList}
    />
  );
};

export default UsersList;

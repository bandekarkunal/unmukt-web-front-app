import React from "react";
import { Box, Button, Theme, Typography } from "@mui/material";
import {
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import DatagridComponent from "@/components/ui-components/datagridComponent";
import UserListAction from "../UserListAction";

interface props {
  userList?: any;
  showRole?: boolean;
  showReporter?: boolean;
  fetchUserCallback?: any;
}

const TrainersList: React.FunctionComponent<props> = ({
  userList = [],
  showRole = false,
  showReporter = false,
  fetchUserCallback,
}) => {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
      valueGetter: (params) =>
        params.row.first_name + " " + params.row.last_name,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.7,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 0.4,
    },

    {
      field: "district",
      headerName: "District",
      flex: 0.4,
      valueGetter: (params: GridRenderCellParams) => params.row.district,
    },
    {
      field: "block",
      headerName: "Block",
      flex: 0.4,
      valueGetter: (params: GridRenderCellParams) => params.row.block,
    },

    // {
    //   field: "action",
    //   headerName: "Action",
    //   flex: 0.7,
    //   renderCell: (params: GridRenderCellParams) => (
    //     <UserListAction
    //       userData={params.row}
    //       showRole={showRole}
    //       fetchCallback={fetchUserCallback}
    //     />
    //   ),
    // },
  ];

  return <DatagridComponent columns={columns} list={userList} />;
};

export default TrainersList;

import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Theme } from "@mui/material";

interface props {
  columns: any;
  list: any;
  sorting?: string;
}

const DatagridComponent: React.FunctionComponent<props> = ({
  columns,
  list = [],
  sorting,
}) => {
  console.log(list);
  return (
    <Box sx={{ height: 650 }}>
      <DataGrid
        autoPageSize
        // rowCount={list.length}
        getRowId={(row) => (row.uuid ? row.uuid : row.id)}
        rows={list}
        columns={columns}
        sx={{
          "	DataGridColumnHeaders": {
            background: "#FCFCFC",
          },
          ".MuiDataGrid-columnHeaderTitle": {
            fontSize: "14px",
            padding: "0",
          },
          "	.MuiDataGrid-cell": {
            fontSize: "13px",
          },
          "	.MuiDataGrid-columnSeparator": {
            display: "none !important",
          },
        }}
        initialState={{
          sorting: {
            sortModel: sorting ? [{ field: sorting, sort: "desc" }] : [],
          },
        }}
      />
    </Box>
  );
};

export default DatagridComponent;

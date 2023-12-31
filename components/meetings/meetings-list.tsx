import React from "react";
import { useRouter } from "next/router";
import {
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Box, Typography, Chip } from "@mui/material";
import SecondaryButton from "../ui-components/buttons/secondaryButton";
import DatagridComponent from "../ui-components/datagridComponent";

interface props {
  meetingsList: any;
  type?: string;
}

const MeetingsList: React.FunctionComponent<props> = ({
  meetingsList,
  type,
}) => {
  const router: any = useRouter();
  const regex = /<(.|\n)*?>/g;

  const handleViewDetailsClick = (uuid: string) => {
    router.push(`/meetings/${uuid}`);
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Meeting date",
      flex: 0.2,
      renderCell: (params: GridRenderCellParams) => (
        <Typography sx={{ fontSize: 13, color: "#232323", fontWeight: 560 }}>
          {params.row.name}
        </Typography>
      ),
    },
    {
      field: "description",
      headerName: "Topic Description",
      flex: 0.7,
      renderCell: (params: GridRenderCellParams) => (
        <Typography sx={{ fontSize: 13, color: "#565656", fontWeight: 560 }}>
          {params?.row?.description?.replace(regex, "")?.substr(0, 75)}
        </Typography>
      ),
    },
    {
      field: "trainer_name",
      headerName: "Trainer name",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "number_of_meetings",
      headerName: "Number of Meetings conducted",
      flex: 0.3,
      align: "center",
    },
    {
      field: "number_of_topics_completed",
      headerName: "Number of Topics completed",
      flex: 0.3,
      align: "center",
    },
    {
      field: "id4",
      headerName: "Action",
      flex: 0.2,
      renderCell: (params: GridRenderCellParams) => (
        <SecondaryButton
          label={"VIEW DETAILS"}
          sx={{ height: "36px !important", fontSize: "11px", fontWeight: 600 }}
          onClick={() => handleViewDetailsClick(params.row.id)}
        />
      ),
    },
  ];

  return (
    <Box>
      <DatagridComponent columns={columns} list={meetingsList} />
    </Box>
  );
};

export default MeetingsList;

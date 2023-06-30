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
  curriculumsList: any;
  type?: string;
}

const CurriculumsList: React.FunctionComponent<props> = ({
  curriculumsList,
  type,
}) => {
  const router: any = useRouter();
  const regex = /<(.|\n)*?>/g;

  const handleViewDetailsClick = (uuid: string) => {
    if (type === "peer-member") {
      router.push(
        `/nurture-phase/training/peer-member-training/single-curriculum-details/${uuid}`
      );
      return;
    }
    router.push(`/nurture-phase/training/curriculum/${uuid}`);
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Title",
      flex: 0.4,
      renderCell: (params: GridRenderCellParams) => (
        <Typography sx={{ fontSize: 13, color: "#232323", fontWeight: 400 }}>
          {params.row.name}
        </Typography>
      ),
    },
    {
      field: "desc",
      headerName: "Description",
      flex: 1.2,
      renderCell: (params: GridRenderCellParams) => (
        <Typography sx={{ fontSize: 13, color: "#565656", fontWeight: 400 }}>
          {params?.row?.description?.replace(regex, "")?.substr(0, 75)}
        </Typography>
      ),
    },
    {
      field: "id",
      headerName: "Curriculum Number",
      flex: 0.3,
      renderCell: (params: GridRenderCellParams) => (
        <Box sx={{ margin: "0 auto", marginRight: "60%" }}>
          <Typography
            sx={{
              fontSize: 13,
              color: "#565656",
              fontWeight: 400,
            }}
          >
            {params?.row?.id}
          </Typography>
        </Box>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.2,
      renderCell: (params: GridRenderCellParams) => (
        <Chip
          label={params.row.status}
          color={params.row.status}
          sx={{
            borderRadius: "30px",
            width: "100px",
            fontSize: "13px",
            fontWeight: 500,
            textTransform: "uppercase",
          }}
        />
      ),
    },
    {
      field: "action",
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
      <DatagridComponent columns={columns} list={curriculumsList} />
    </Box>
  );
};

export default CurriculumsList;

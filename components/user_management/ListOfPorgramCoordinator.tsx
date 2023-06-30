import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  InputLabel,
  Select,
  MenuItem,
  Theme,
  SelectChangeEvent,
} from "@mui/material";
import { FetchUsersListPromise } from "../../utils/apis/common/userList";

interface props {
  state_id: string;
  program_coordinator_uuid?: string;
  onProgramCoordinatorsChange: any;
  disabled?: boolean;
}

const ListOfProgramCoordinators: React.FunctionComponent<props> = ({
  state_id,
  program_coordinator_uuid,
  onProgramCoordinatorsChange,
  disabled,
}) => {
  const [selectedProgramCoordinators, setSelectedProgramCoordinators] =
    useState<string>("default");

  const [
    stateDependentProgramCoordinatorsList,
    setStateDependentProgramCoordinatorsList,
  ] = useState<[] | any>([]);

  const handleProgramCoordinatorsChange = (event: SelectChangeEvent) => {
    setSelectedProgramCoordinators(event.target.value);
    onProgramCoordinatorsChange(event.target.value);
  };

  const fetchProgramCoordinatorsList = () => {
    FetchUsersListPromise(state_id, "role-program-coordinator", "").then(
      (response) => {
        setStateDependentProgramCoordinatorsList(response);
      }
    );
  };

  useEffect(() => {
    if (state_id !== "default") {
      fetchProgramCoordinatorsList();
    }
  }, [state_id]);

  useEffect(() => {
    if (program_coordinator_uuid) {
      setSelectedProgramCoordinators(program_coordinator_uuid);
    }
  }, [program_coordinator_uuid]);

  return (
    <>
      <Box marginBottom={3}>
        <InputLabel
          sx={{
            "	.MuiInputLabel-root": {
              fontSize: "13px !important",
              color: "#495057 !important",
              fontWeight: `${500} !important`,
              marginBottom: "8px",
            },
          }}
        >
          Program Coordinator
        </InputLabel>
        <Select
          sx={{
            "	.MuiOutlinedInput": {
              minHeight: "auto",
              height: "48px",
              fontSize: "15px !important",
              color: "#495057",
              borderRadius: "0 !important",
            },
            "	.MuiOutlinedInput-input": {
              height: "48px",
              minHeight: "auto",
              width: "100%",
              borderRadius: "0 !important",
            },
          }}
          value={selectedProgramCoordinators}
          onChange={handleProgramCoordinatorsChange}
          disabled={state_id === "default" || disabled}
        >
          <MenuItem selected value={"default"} disabled>
            Select Program Coordinator
          </MenuItem>
          {stateDependentProgramCoordinatorsList?.map(
            (programCoordinator: any) => (
              <MenuItem
                value={programCoordinator.uuid}
                key={programCoordinator?.uuid}
              >
                {programCoordinator?.first_name} {programCoordinator?.last_name}
              </MenuItem>
            )
          )}
        </Select>
      </Box>
    </>
  );
};

export default ListOfProgramCoordinators;

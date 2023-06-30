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
import { Context } from "../../context/ContextProvider";

interface props {
  state_id: string;
  program_manager_id?: string;
  onProgramManagerChange?: any;
  disabled?: boolean;
}

const ListOfProgramManagers: React.FunctionComponent<props> = ({
  state_id,
  program_manager_id,
  onProgramManagerChange,
  disabled,
}) => {
  const context = useContext(Context);

  const GlobalDetailsContext = context?.GlobalDetails;

  const [selectedProgramManager, setSelectedProgramManager] =
    useState<string>("default");
  const [
    stateDependentProgramManagerList,
    setStateDependentProgramManagerList,
  ] = useState<[] | any>([]);

  const handleProgramManagerChange = (event: SelectChangeEvent) => {
    setSelectedProgramManager(event.target.value);
    onProgramManagerChange(event.target.value);
  };

  const fetchProgramManagerList = () => {
    FetchUsersListPromise(state_id, "role-program-manager", "").then(
      (response) => {
        setStateDependentProgramManagerList(response);
      }
    );
  };

  useEffect(() => {
    if (state_id !== "default") {
      fetchProgramManagerList();
    }
  }, [state_id]);

  useEffect(() => {
    if (program_manager_id) {
      setSelectedProgramManager(program_manager_id);
    }
  }, [program_manager_id]);

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
          Program Manager
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
          value={selectedProgramManager}
          onChange={handleProgramManagerChange}
          disabled={state_id === "default" || disabled}
          multiple={false}
        >
          <MenuItem selected value={"default"} disabled>
            Select Program Manager
          </MenuItem>
          {stateDependentProgramManagerList?.map((programMananger: any) => (
            <MenuItem value={programMananger.uuid} key={programMananger?.uuid}>
              {programMananger?.first_name} {programMananger?.last_name}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </>
  );
};

export default ListOfProgramManagers;

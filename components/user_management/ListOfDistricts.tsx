import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  InputLabel,
  Select,
  MenuItem,
  Theme,
  SelectChangeEvent,
} from "@mui/material";
import { get } from "@/src/config/axiosClient";

interface props {
  state_id: string;
  use_case: string;
  onDistrictChange: any;
  district_array?: any;
  disabled?: boolean;
}

const ListOfDistricts: React.FunctionComponent<props> = ({
  state_id,
  use_case,
  onDistrictChange,
  district_array,
  disabled,
}) => {
  const [selectedDistrict, setSelectedDistrict] = useState<any | []>([]);
  const [stateDependentDistrictList, setStateDependentDistrictList] = useState<
    [] | any
  >([]);

  const handleDistrictChange = (event: SelectChangeEvent) => {
    setSelectedDistrict(event.target.value);
    onDistrictChange(event.target.value);
  };

  const fetchDistrictList = async () => {
    let params: any = {};
    params.state_id = state_id;
    params.use_case = use_case;
    let tempArr: any = [];
    await get("api/data/districts", params).then((res: any) => {
      tempArr = res.data.body;
      if (district_array?.length > 0) {
        district_array?.forEach((option: any) => {
          tempArr.push(option?.district);
        });
      }
      setStateDependentDistrictList(tempArr);
    });
  };

  useEffect(() => {
    if (state_id !== "default") {
      fetchDistrictList();
    }
  }, [state_id, district_array]);

  useEffect(() => {
    if (district_array?.length) {
      let districtsArrTemp: any = [];
      district_array.forEach((district: any) => {
        districtsArrTemp.push(district?.district_id);
      });
      setSelectedDistrict([...districtsArrTemp]);
    }
  }, [district_array]);

  return (
    <>
      <Box marginBottom={3}>
        <InputLabel
          sx={{
            fontSize: "13px !important",
            color: "#495057 !important",
            fontWeight: `${500} !important`,
            marginBottom: "8px",
          }}
        >
          Districts
        </InputLabel>
        <Select
          sx={{
            "	.MuiOutlinedInput-root": {
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
          defaultValue={selectedDistrict}
          value={selectedDistrict}
          onChange={handleDistrictChange}
          disabled={state_id === "default" || disabled}
          multiple={true}
        >
          <MenuItem selected value={"default"} disabled>
            Select District
          </MenuItem>
          {stateDependentDistrictList?.map(
            (district: any, districtIndex: number) => (
              <MenuItem value={district.id} key={districtIndex}>
                {district?.name}
              </MenuItem>
            )
          )}
        </Select>
      </Box>
    </>
  );
};

export default ListOfDistricts;

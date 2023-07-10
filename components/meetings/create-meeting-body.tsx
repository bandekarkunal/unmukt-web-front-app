import React, { useEffect, useState, useContext } from "react";
import { Box, Button, Container, Input, Typography } from "@mui/material";
import { Context } from "@/context/ContextProvider";
import CustomInputField from "../ui-components/customInputField";
import QuillEditor from "../ui-components/quillEditor";
import "react-quill/dist/quill.snow.css";
import CustomSelectField from "../ui-components/customSelectField";
import CustomDatePicker from "../ui-components/customDatePicker";
import StudentsAttendance from "./studentsAttendance";

const CreateMeetingBody = () => {
  const context: any = useContext(Context);
  const CurriculumContext = context?.Curriculum;
  const { curriculumDetails } = CurriculumContext?.state;
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const handleChangeEvent = (value: any, type: string) => {
    let details: any = curriculumDetails;
    details[type] = value;
    CurriculumContext.dispatch({
      type: "curriculum-details",
      value: details,
    });
  };

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleDateValue = (response: string) => {
    let date: any = new Date(response);
    setSelectedDate(date);
  };

  return (
    <Container maxWidth={"lg"} sx={{ mt: 4, padding: "0 !important" }}>
      <CustomDatePicker getDate={handleDateValue} />
      <CustomSelectField
        label={"Topic"}
        fieldName={"topic"}
        required={true}
        placeholder={"Select Topic"}
        valueKey={""}
      />
      <Typography>Group Image</Typography>
      <Box
        sx={{
          width: "50%",
          border: "1px solid #e0e0e0",
          padding: "7px",
          marginBottom: "8px",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <label htmlFor="contained-button-file">
          <Input
            id="contained-button-file"
            type="file"
            onChange={handleFileChange}
          />
          <Button
            variant="contained"
            component="span"
            color="secondary"
            sx={{
              height: "32px !important",
              boxShadow: "none !important",
              borderRadius: "0 !important",
              fontSize: "12px !important",
              textTransform: "none",
            }}
          >
            Select File
          </Button>
        </label>
        <Typography sx={{ fontSize: "13px" }}>
          {" "}
          "Please select an image file to upload"
        </Typography>
      </Box>
      <CustomInputField
        sx={{ width: "70%" }}
        fieldName={"Report"}
        label={"Report"}
        placeholder="Report"
        // onChange={}
      />
    </Container>
  );
};

export default CreateMeetingBody;

import React, { useEffect, useState, useContext } from "react";
import { Container } from "@mui/material";
import { Context } from "@/context/ContextProvider";
import CustomInputField from "../ui-components/customInputField";
import QuillEditor from "../ui-components/quillEditor";
import "react-quill/dist/quill.snow.css";

const CreateTopicBody = () => {
  const context: any = useContext(Context);
  const CurriculumContext = context?.Curriculum;
  const { curriculumDetails } = CurriculumContext?.state;

  const handleChangeEvent = (value: any, type: string) => {
    let details: any = curriculumDetails;
    details[type] = value;
    CurriculumContext.dispatch({
      type: "curriculum-details",
      value: details,
    });
  };

  return (
    <Container maxWidth={"lg"} sx={{ mt: 4, padding: "0 !important" }}>
      <CustomInputField
        value={curriculumDetails?.name}
        label={"Topic Name"}
        required={true}
        fieldName={"topic_name"}
        onChange={(response: any) => handleChangeEvent(response, "name")}
      />
      <QuillEditor
        label={"Description"}
        value={
          curriculumDetails?.description ? curriculumDetails?.description : ""
        }
        onChangeValue={(response: any) =>
          handleChangeEvent(response, "description")
        }
        required={true}
        classname={"create-topic"}
      />
    </Container>
  );
};

export default CreateTopicBody;

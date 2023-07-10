import { InputLabel, Theme, Typography, Box } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

interface Props {
  value: any;
  onChangeValue: Function;
  label: string;
  required?: boolean;
  helperText?: any;
  name?: string;
  error?: any;
  onBlur?: any;
  readonly?: boolean;
  classname?: string;
}

const QuillEditor: NextPage<Props> = ({
  value,
  onChangeValue,
  label,
  required,
  helperText,
  readonly,
  name,
  error,
  onBlur,
  classname,
}) => {
  const ReactQuill =
    typeof window === "object" ? require("react-quill") : () => false;

  const toolbar = [
    ["bold", "italic", "underline"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    [
      { align: "center" },
      { align: "right" },
      { align: "justify" },
      { align: "left" },
    ],
  ];

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "color",
    "image",
  ];

  return (
    <>
      <Box>
        <InputLabel
          sx={{
            fontSize: "13px !important",
            color: "#495057 !important",
            fontWeight: `${500} !important`,
            marginBottom: "8px",
          }}
        >
          {label}{" "}
          {required && (
            <Typography component="span" color={"red"}>
              *
            </Typography>
          )}
        </InputLabel>

        <ReactQuill
          sx={{ height: "300px" }}
          value={value}
          modules={{
            toolbar: {
              container: toolbar,
            },
          }}
          formats={formats}
          onChange={onChangeValue}
          required={required}
          readOnly={readonly ? readonly : false}
          className={classname ? classname : "default-quill"}
        />
      </Box>
      <Typography
        variant="body2"
        component="p"
        color="error"
        fontSize="0.625rem"
        marginLeft={2}
        mt={0.2}
      >
        {helperText}
      </Typography>
    </>
  );
};

export default QuillEditor;

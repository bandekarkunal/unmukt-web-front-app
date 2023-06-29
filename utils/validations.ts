import * as yup from "yup";

export const SignInValidation = () =>
  yup.object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

export const EditProfileValidation = () =>
  yup.object({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
  });

export const AddVideoAssessmentValidation = () =>
  yup.object({
    title: yup
      .string()
      .required("Title is required")
      .max(100, "Title cannot be more than 100 charecters"),
    max_points: yup.string().required("Score is required"),
  });

export const PrimaryBaselineFormValidation = () =>
  yup.object({
    title: yup
      .string()
      .required("Title is required")
      .max(100, "Title cannot be more than 100 charecters"),
    state: yup.string().required("State is required"),
    // role: yup.string().required("Role is required"),
  });

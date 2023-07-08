import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Box, Typography, Card } from "@mui/material";
import { noAuthPost } from "../config/axiosClient";
import { ErrorToast } from "@/utils/toasts";
import { useFormik } from "formik";
import { SignInValidation } from "@/utils/validations";
import Image from "next/image";
import router from "next/router";
import CustomInputField from "@/components/ui-components/customInputField";
import PrimaryButton from "@/components/ui-components/buttons/primaryButton";

const AdminSignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignInValidation,
    onSubmit: (values) => {
      handleRegister(values);
    },
    enableReinitialize: true,
  });

  const handleRegister = async (values: any) => {
    await noAuthPost(`auth/user/signin`, values).then((res: any) => {
      localStorage.setItem("redloftoken", res.data.body.token);
      router.push(`/home`, `/home`);
    }),
      (err: any) => {
        ErrorToast(err.response.data);
      };
  };

  return (
    <Box>
      <>
        <Head>
          <title>Login | Unmukt</title>
          <meta
            name="description"
            content="Milaan Foundation is a non-profit, human rights-based organization, which envisions an inclusive and equal world, where every girl has the knowledge, skills, and social environment to pursue her dreams and explore her full potential."
          />
        </Head>
        <Box
          sx={{
            maxWidth: "650px",
            margin: "68px auto 0",
          }}
          maxWidth="sm"
        >
          <Card
            sx={{ padding: 4, boxShadow: "0", border: "1px solid #E0E0E0" }}
          >
            <Box
              sx={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "#EAE3F1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
            >
              <Image
                src="/assets/people_group.svg"
                alt="girl"
                width={24}
                height={24}
                quality={100}
              />
            </Box>
            <Typography variant="h2" textAlign="center" mb={1}>
              Provide your login details to continue
            </Typography>
            <Typography variant="body1" textAlign="center" color={"#919191"}>
              Enter credentials below shared by your administrator
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <CustomInputField
                label={"Email address"}
                fieldName={"email"}
                required={true}
                type={"email"}
                formik={formik}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <CustomInputField
                label={"Password"}
                fieldName={"password"}
                required={true}
                type={"password"}
                formik={formik}
                value={formik.values.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />

              <PrimaryButton label="Sign in to continue" sx={{ mb: 3 }} />

              <Box>
                <Typography textAlign={"center"} component={"p"} mb={1}>
                  Forgot password?
                </Typography>
                <Typography textAlign={"center"} mb={1} variant={"body1"}>
                  ज़्यादा ट्रैफ़िक की वजह से ओटीपी मिलने में देर लग सकती है।
                </Typography>
              </Box>
            </form>
          </Card>
        </Box>
      </>
    </Box>
  );
};

export default AdminSignIn;

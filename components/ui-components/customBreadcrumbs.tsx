import { Breadcrumbs, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const CustomBreadcrumbs = () => {
  const router = useRouter();
  const [breadCrumbs, setBreadCrumbs] = useState<[] | any>([]);

  const getBreadCrumbsForPage = () => {
    setBreadCrumbs(router.pathname.slice(1).split("/"));
  };

  useEffect(() => {
    getBreadCrumbsForPage();
  }, []);

  return (
    <Breadcrumbs>
      {breadCrumbs.map((breadcrumb: string, index: number) => (
        <Typography variant="caption" marginBottom={2} key={index}>
          {breadcrumb.replaceAll("-", " ")}
        </Typography>
      ))}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;

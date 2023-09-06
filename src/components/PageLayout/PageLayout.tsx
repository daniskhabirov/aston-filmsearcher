import React from "react";

import { Box } from "@mantine/core";

import s from "./PageLayout.module.css";

type Children = {
  children: JSX.Element;
};

const PageLayout = ({ children }: Children) => {
  return <Box className={s.layout}>{children}</Box>;
};

export default PageLayout;

import React from "react";

import s from "./PageContainer.module.css";

type Children = {
  children: JSX.Element;
};

const PageContainer = ({ children }: Children) => {
  return <div className={s.container}>{children}</div>;
};

export default PageContainer;

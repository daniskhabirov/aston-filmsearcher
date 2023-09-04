import React from "react";

import s from "./PageLayout.module.css";

type Children = {
  children: JSX.Element;
};

const PageLayout = ({ children }: Children) => {
  return <div className={s.container}>{children}</div>;
};

export default PageLayout;

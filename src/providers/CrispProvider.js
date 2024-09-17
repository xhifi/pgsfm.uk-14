"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const CrispProvider = ({ children, siteId }) => {
  useEffect(() => {
    process.env.NODE_ENV === "development" && Crisp.configure(siteId);
  }, [siteId]);

  return <>{children}</>;
};

export default CrispProvider;

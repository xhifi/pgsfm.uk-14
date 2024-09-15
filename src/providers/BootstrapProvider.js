"use client";

import { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const BootstrapProvider = ({ children }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  });

  return <div>{children}</div>;
};

export default BootstrapProvider;

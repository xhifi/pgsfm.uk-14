import BootstrapProvider from "./BootstrapProvider";
import { Analytics } from "@vercel/analytics/react";

const Providers = ({ children }) => {
  return (
    <BootstrapProvider>
      {children}
      <Analytics />
    </BootstrapProvider>
  );
};

export default Providers;

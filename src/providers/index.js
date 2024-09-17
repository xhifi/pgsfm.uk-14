import BootstrapProvider from "./BootstrapProvider";
import { Analytics } from "@vercel/analytics/react";
import CrispProvider from "./CrispProvider";

const Providers = ({ children }) => {
  return (
    <CrispProvider siteId={process.env.CRISP_WEBSITE_ID}>
      <BootstrapProvider>
        {children}
        <Analytics />
      </BootstrapProvider>
    </CrispProvider>
  );
};

export default Providers;

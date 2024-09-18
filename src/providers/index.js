import BootstrapProvider from "./BootstrapProvider";
import CrispProvider from "./CrispProvider";
import Analytics from "./Analytics";

const Providers = ({ children }) => {
  return (
    <Analytics google={process.env.GOOGLE_ANALYTICS_ID}>
      <CrispProvider siteId={process.env.CRISP_WEBSITE_ID}>
        <BootstrapProvider>{children}</BootstrapProvider>
      </CrispProvider>
    </Analytics>
  );
};

export default Providers;

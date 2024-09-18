import { GoogleAnalytics as GA4 } from "@next/third-parties/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

const Analytics = ({ children, google, vercel }) => {
  return (
    <>
      {children}
      <GA4 gaId={google} />
      <VercelAnalytics {...vercel} />
    </>
  );
};

export default Analytics;

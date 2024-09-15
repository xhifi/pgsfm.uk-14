import NavigationHeader from "./NavigationHeader";
import Navbar from "./Navbar";

import siteMetadata from "@/static/data/siteData.js";

const Navigation = () => {
  return (
    <>
      <NavigationHeader brand={siteMetadata.logo} title={siteMetadata.title} phone={siteMetadata.phone} link="/" />
      <Navbar />
    </>
  );
};

export default Navigation;

import FormSelection from "@/components/form/FormSelection";
import Hero from "@/components/Hero";

import getPageData from "@/utils/getPageData";
const contactData = getPageData("contact");

export const metadata = {
  title: "Contact",
};

const Page = () => {
  return (
    <div>
      <Hero heading={contactData.title} map="false" contactInformation />
      <main className="container-fluid px-3 py-5 p-md-5">
        <div className="row">
          <FormSelection />
          <div className="col-12 col-md-4">
            <div className="map-responsive">
              <iframe
                src="https://maps.google.com/maps?q=Challenge%20House%20Business%20Center%20616%20Mitcham%20Road%2C%20Croydon%20CR0%203AA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                // style="border:0; border-radius: 20px; height: 300px;"
                className="border-r bg-light"
                allowFullScreen={true}
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Page;

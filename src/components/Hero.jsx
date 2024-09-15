import Link from "next/link";
import siteData from "@/static/data/siteData";
import ContactFormSideBar from "./form/ContactFormSideBar";

const Hero = ({ heading, description, map, buttonText, buttonRef, headingAlignment, contactInformation }) => {
  return (
    <div className="container-fluid px-md-5 py-4 bg-main bg-gradient text-white">
      <h3 className={`text-bold text-${headingAlignment}`}>{heading}</h3>
      {buttonText && buttonRef && (
        <div className="text-center mb-4">
          <Link href={buttonRef} className="btn btn-main btn-lg">
            {buttonText}
          </Link>
        </div>
      )}
      {description && <p className="mb-0">{description}</p>}
      {map === "true" && (
        <div className="map-responsive">
          <iframe
            src="https://maps.google.com/maps?q=Challenge%20House%20Business%20Center%20616%20Mitcham%20Road%2C%20Croydon%20CR0%203AA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            // style="border:0; border-radius: 20px; height: 300px;"
            className="border-r"
            allowFullScreen={true}
            width="100%"
            height="300"
          ></iframe>
        </div>
      )}
      {contactInformation && <ContactFormSideBar siteData={siteData} />}
    </div>
  );
};

export default Hero;

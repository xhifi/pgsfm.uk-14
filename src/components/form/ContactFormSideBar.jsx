import Link from "../Link";

const ContactFormSideBar = ({ siteData }) => {
  const { address, phone, email } = siteData;
  return (
    <div>
      <ul className="list-unstyled">
        {address && (
          <li>
            <Link
              className="text-decoration-none text-white"
              href="https://www.google.com/maps/dir//%E2%80%A2+Challenge+House+Business+Centre,+616+Mitcham+Rd,+Croydon+CR0+3AA,+UK/@51.389559,-0.129084,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x487606fd5980a359:0x1fbb86874a2d427f!2m2!1d-0.1290835!2d51.3895589?hl=en-GB"
            >
              <i className="bi bi-geo-alt-fill me-2"></i>
              <b>Click for Directions</b> - {siteData.address}
            </Link>
          </li>
        )}
        {phone && (
          <li className="text-white">
            <a className="text-decoration-none text-white" href={`tel:${siteData.phone}`}>
              <i className="bi bi-telephone-fill me-2"></i>
              {siteData.phone}
            </a>
          </li>
        )}
        <li>
          <Link
            aria-label="Phone"
            className="ms-3 ms-md-0 text-white text-decoration-none d-none d-md-inline-block"
            href={`https://wa.me/447888105705?text=Hi,%20I%20am%20interested%20in%20your%20services.%20Can%20we%20talk?`}
          >
            <i className="bi bi-whatsapp me-2"></i>
            Chat over WhatsApp
          </Link>
        </li>

        {email && (
          <li className="text-white">
            <Link className="text-decoration-none text-white" href={`mailto:${siteData.email}`}>
              <i className="bi bi-envelope-fill me-2"></i>
              {siteData.email}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ContactFormSideBar;

import Image from "next/image";
import BrandDark from "@/static/images/brand-dark.svg";
import Link from "../Link";

const ContactCol = ({ data, certificates }) => {
  return (
    <div className="col-12 col-md-4 text-white px-3 mb-4 mb-md-0">
      <Link href="/" className="mb-3 d-block" passHref>
        <Image src={BrandDark} alt={data.title} className="img-fluid h-auto" width={300} height={50} />
      </Link>
      <div className="d-flex align-items-center gap-2 mb-3">
        {certificates &&
          certificates.map((cert) => {
            return (
              <Link
                key={cert.title}
                href={cert.url}
                className="text-white text-decoration-none"
                alt={cert.title}
                passHref
                target="_blank"
                rel="noopener noreferrer"
                aria-label={cert.title}
                title={cert.title}
              >
                <Image src={cert.image} height={50} />
              </Link>
            );
          })}
      </div>
      <p className="m-0">
        <i className="bi bi-geo-alt-fill me-2"></i>
        {data.address}
      </p>
      <p className="m-0">
        <i className="bi bi-telephone-fill me-2"></i>
        {data.phoneLocal}
      </p>
      <p className="m-0">
        <i className="bi bi-telephone-fill me-2"></i>
        {data.phone} &#40;TOLL FREE&#41;
      </p>
      <p className="m-0 decoration-none">
        <i className="bi bi-whatsapp me-2"></i>
        <Link
          className="text-white text-decoration-none"
          href={`https://wa.me/${data.whatsapp.number.replace(/\s/g, "")}?text=${data.whatsapp.message}`}
        >
          {"0" + data.whatsapp.number.substring(3)}
        </Link>
      </p>
      <p className="m-0">
        <i className="bi bi-envelope-fill me-2"></i>
        {data.email}
      </p>
    </div>
  );
};

export default ContactCol;

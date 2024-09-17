import Link from "../Link";
import Image from "next/image";
import Brand from "@/static/images/brand.svg";

const NavigationHeader = ({ phone, brand, title, link }) => {
  return (
    <div className="nav-header">
      <Link href={link} style={{ width: 300 }} passHref>
        <Image alt={title} src={Brand} width={300} height={50} className="img-fluid h-auto w-full" />
      </Link>

      <div>
        <Link
          href="https://www.facebook.com/pgsfmuk"
          className="bg-main text-white btn-main btn me-1 d-none d-md-inline-block"
          aria-label="Facebook"
        >
          <i className="bi bi-facebook"></i>
        </Link>
        <Link href="https://www.twitter.com" aria-label="Twitter" className="bg-main text-white btn-main btn me-1 d-none d-md-inline-block">
          <i className="bi bi-twitter"></i>
        </Link>
        <Link
          href="https://business.google.com/dashboard/l/01627350215998689711"
          className="bg-main text-white btn-main btn me-1 d-none d-md-inline-block"
          aria-label="Google"
        >
          <i className="bi bi-google"></i>
        </Link>
        <Link
          href="https://www.instagram.com/pgsfmuk/"
          className="bg-main text-white btn-main btn me-1 d-none d-md-inline-block"
          aria-label="Instagram"
        >
          <i className="bi bi-instagram"></i>
        </Link>
        <Link aria-label="Phone" className="ms-3 ms-md-0 btn btn-main text-white d-none d-md-inline-block" href={`tel:${phone}`}>
          <i className="bi bi-telephone-fill me-2"></i>
          {phone}
        </Link>
      </div>
    </div>
  );
};

export default NavigationHeader;

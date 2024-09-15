"use client";

import { useState } from "react";
import Link from "next/link";
import data from "@/static/data/pages.js";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="bg-dark d-flex align-items-right px-3 px-lg-5 d-md-none">
        <div className="d-flex align-items-center">
          <Link href="https://www.facebook.com" target="_blank" rel="noreferrer" className="btn btn-main me-1 d-inline-block d-md-none">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link href="https://www.twitter.com" target="_blank" rel="noreferrer" className="btn btn-main me-1 d-inline-block d-md-none">
            <i className="bi bi-twitter"></i>
          </Link>
          <Link href="https://www.googlemaps.com" target="_blank" rel="noreferrer" className="btn btn-main me-1 d-inline-block d-md-none">
            <i className="bi bi-google"></i>
          </Link>
        </div>
        <button className="ms-auto btn btn-light my-2 text-main" onClick={handleMenuClick}>
          <i className="me-1 bi bi-list"></i> <span>Menu</span>
        </button>
      </div>
      <div className="container-fluid bg-dark">
        <nav>
          <ul
            className={`list-unstyled p-0 m-0 align-items-md-center flex-wrap flex-column flex-md-row pt-md-2 pb-2 w-100 ${
              menuOpen ? "d-flex" : "d-none d-md-flex"
            }`}
          >
            {data.map((page, index) => {
              return (
                <li className="mb-1 mb-md-0 me-md-1" key={index}>
                  <Link
                    className={`d-block rounded p-2 text-white text-decoration-none btn-hov-tst ${
                      router.pathname === page.path ? "link-active" : ""
                    }`}
                    href={page.path}
                    passHref
                  >
                    <i className={`bi bi-${page.icon} me-1`}></i>
                    {page.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

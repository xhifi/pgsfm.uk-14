"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "@/components/Link";

const Slider = ({ data, center }) => {
  return (
    <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className="mySwiper">
      {data.map((slide, i) => {
        return (
          <SwiperSlide key={i}>
            <div className=" position-relative overflow-hidden" style={{ height: 400 }}>
              <div className="w-full h-full position-absolute z-1">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  placeholder="blur"
                  className="h-full w-full position-absolute img-fluid cover z-1 object-fit-cover"
                  priority={i === 0}
                />
              </div>
              <div className="position-relative z-2 top-0 left-0 d-flex h-full">
                <div className="position-absolute hero-gradient h-full w-full top-0 left-0 z-1" />
                {center ? (
                  <div className="px-md-5 position-relative z-2">
                    <div className="px-5 row h-full align-items-center text-white">
                      <div className="col text-center">
                        <h1 className="">{slide.title}</h1>
                        <p className="text-xl">{slide.description}</p>
                        <Link className="btn btn-main btn-lg shadow-lg" href={slide.link.ref}>
                          {slide.link.icon && <i className={`me-2 bi bi-${slide.link.icon}`} />}
                          {slide.link.text}
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="px-md-5 position-relative z-2">
                    <div className="px-5 row text-center row-cols-1 text-lg-start row-cols-lg-2 h-full align-items-center text-white">
                      <div className="col">
                        <h1 className="">{slide.title}</h1>
                        <p>{slide.description}</p>
                        <Link className="btn btn-main btn-lg shadow-lg" href={slide.link.ref}>
                          {slide.link.icon && <i className={`me-2 bi bi-${slide.link.icon}`} />}
                          {slide.link.text}
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;

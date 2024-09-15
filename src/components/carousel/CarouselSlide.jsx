"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "@/components/Link";

const Slider = ({ data, center }) => {
  return (
    <Swiper navigation={true} modules={[Navigation, Pagination]} className="mySwiper">
      {data.map((slide, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="h-full position-relative bg-primary overflow-hidden">
              <div>
                <div className="h-full position-relative">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    placeholder="blur"
                    className="position-relative img-fluid cover z-1"
                    priority={i === 0}
                  />
                </div>
                <div className="h-full w-full position-absolute z-2 top-0 left-0 px-md-5">
                  {center ? (
                    <div className=" px-5 row h-full align-items-center text-white">
                      <div className="col text-center">
                        <h1 className="">{slide.title}</h1>
                        <p className="text-xl">{slide.description}</p>
                        <Link className="btn btn-main btn-lg shadow-lg" href={slide.link.ref}>
                          {slide.link.text}
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className=" px-5 row row-cols-1 row-cols-md-2 h-full align-items-center text-white">
                      <div className="col">
                        <h1 className="">{slide.title}</h1>
                        <p>{slide.description}</p>
                        <Link className="btn btn-main btn-lg shadow-lg" href={slide.link.ref}>
                          {slide.link.text}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;

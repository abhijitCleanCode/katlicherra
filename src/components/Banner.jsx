import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  g_1,
  g_10,
  g_11,
  g_12,
  g_13,
  g_2,
  g_3,
  g_4,
  g_5,
  g_6,
  g_7,
  g_8,
  g_9,
} from "../assets";

const Banner = () => {
  const images = [g_4, g_5, g_6, g_7, g_8, g_9, g_10, g_11, g_12, g_13];

  return (
    <>
      <div className="border-b-4 flex justify-center items-center w-fit mx-auto border-[#F75555]">
        <h2 className="text-[18px] md:text-[28px] font-light font-kanit text-center mt-5">
          Welcome to Katlicherra Central School
        </h2>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={g_11} alt="hero" className="w-full rounded-md" />
          </div>

          <div className="w-[380px] md:w-1/2 text-left">
            <p className="text-lg md:text-xl font-light mb-4">
              The Mission of the School is to provide the right inputs to help
              the children grow up into caring and sharing individuals, equipped
              to make the right choices in life and grow up to be responsible
              citizens of the country and the world.
            </p>
            <p className="text-lg md:text-xl font-light mb-4">
              The school's motto 'Knowledge is Liberation' is the cornerstone
              around which the character and personality of every child is
              built. The Society visualises an educational system based on the
              four basic tenets : universal values, excellence in all things,
              global understanding by viewing diversity as an asset, and service
              to humanity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

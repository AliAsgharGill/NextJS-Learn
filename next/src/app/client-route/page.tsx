"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serverSideFunction } from "../utils/server-utils";
import Image from "next/image";
import { useTheme } from "@/components/themeProvider/page";

export default function ClientRoutePage() {
  const settings = {
    dots: true,
  };

  const theme = useTheme();

  return (
    <>
      <h1
        className={`text-3xl font-bold`}
        style={{ color: theme.colors.secondary }}
      >
        This is Client Route Page
      </h1>
      <div className="image-slider-container">
        <Slider {...settings}>
          <div>
            <Image
              height={200}
              width={400}
              alt="image"
              src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div>
            <Image
              height={200}
              width={400}
              alt="image"
              src="https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div>
            <Image
              height={200}
              width={400}
              alt="image"
              src="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div>
            <Image
              height={200}
              width={400}
              alt="image"
              src="https://images.pexels.com/photos/1444321/pexels-photo-1444321.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </Slider>
      </div>
    </>
  );
}

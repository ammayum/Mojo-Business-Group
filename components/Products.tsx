import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { ourProducts, productQuestions, services2 } from "./constants";
import Accordion from "./Accordion";
import dynamic from "next/dynamic";
import {ServiceVideo}  from "../assets";

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
const Products = () => {
  const carousel = useRef(null);
  const [width, setWidth] = useState<Number>(0);
const [isMounted, setIsMounted] = useState(false);
  const handleResize = () => {
    if (carousel.current) {
      const { scrollWidth, offsetWidth } = carousel.current;

      if (typeof scrollWidth === "number" && typeof offsetWidth === "number")
        setWidth(scrollWidth - offsetWidth);
    }
  };

  const [expanded, setExpanded] = useState<false | number>(0);

  useEffect(() => {
    handleResize();
  }, [width]);

  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="w-full dark:bg-backgroundDefault bg-white">
      <section
        id="Products"
        className="px-2 mt-2 flex justify-center items-center flex-col mx-10"
      >
        <div className="w-full flex justify-center items-center pt-8">
          <div className="max-w-screen-md text-center">
            <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-100">
              Wisdom child care at Galance 
            </h2>
            <p className="mt-1 text-dark dark:text-gray-200">
              {/* add bit info on services offered description */}
              Experience the joy of a community where children thrive and families come together. Join us at Wisdom Child Care and make every moment memorable!
Visit us today and let your child's adventure begin!
            </p>
          </div>
        </div>

        <div className="max-w-[95rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-2 w-full  flex flex-col justify-center items-center ">
          <div className="aspect-w-16 aspect-h-7 w-full">
          {/* <video src={ServiceVideo}
                        width="16"
                        height="16"
              className="w-full object-cover rounded-xl h-96"
              controls
              
            /> */}
            

            <ReactPlayer
              url="../assets/images/servicevideo.mp4"
              className="react-player"
              width="100%"
              height="100%"
              controls
            />
          </div>

          <div className="mt-5 lg:mt-16   gap-8 lg:gap-12 flex  w-full sm:w-4/5 flex-col">
                       
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

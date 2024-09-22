import React from "react";
import VideoLazy from "../loaders/VideoLazy";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Spotlight = () => {
  const products = [
    {
      imgSrc: "/home/spotlight/s1.svg",
      description: "Raglan mili panelled dress",
      price: "INR 4,500.50",
      label: "Best seller",
      bought: "1250 people bought it",
    },
    {
      imgSrc: "/home/spotlight/s2.mp4",
      description: "Raglan mili panelled dress",
      price: "INR 4,500.50",
      label: "Best seller",
      bought: "12.5k people bought it",
    },
    {
      imgSrc: "/home/spotlight/s3.svg",
      description: "Raglan mili panelled dress",
      price: "INR 4,500.50",
      label: "",
      bought: "",
    },
    {
      imgSrc: "/home/spotlight/s4.mp4",
      description: "Raglan mili panelled dress",
      price: "INR 4,500.50",
      label: "",
      bought: "",
    },
  ];

  return (
    <div className="bg-white pt-20 dark:!bg-black">
      <div className="max-w-full mx-auto">
        <div className="text-left px-4 md:px-16 text-black dark:!text-white">
          <h2 className="text-xl md:text-3xl font-semibold  italic tracking-widest uppercase">
            In the spotlight
          </h2>
          <p className="mt-2 text-[11px] lg:text-sm leading-8 font-mono tracking-widest sm:text-xl">
            Look what people loved the most this season
          </p>
          <button className="mt-3 bg-transparent hover:bg-gray-700 text-[#1F4A40] dark:!text-[#D8E3B1] font-semibold font-mono py-2 px-4 border border-[#B5B5B5]">
            View all
          </button>
        </div>
        <div className="mt-6 md:mt-12 overflow-x-scroll testimonial-container">
          <div className="flex lg:grid lg:grid-cols-4 md:grid-cols-3 gap-3 md:gap-2 pl-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] sm:w-1/3 lg:w-full"
              >
                <div className="w-full md:w-full bg-gray-200  aspect-h-1 overflow-hidden relative h-3/4 ">
                  {product.imgSrc.endsWith(".mp4") ? (
                    <div className="bloc w-full h-full object-center object-cover">
                      <VideoLazy
                        src={product.imgSrc}
                        alt={product.description}
                      />
                    </div>
                  ) : (
                    // <img
                    //   src={product.imgSrc}
                    //   alt={product.description}
                    //   className="bloc w-full h-full object-center object-cover"
                    // />
                    <div className="bloc w-full h-full object-center object-cover" >
                      <LazyLoadImage
                        src={product.imgSrc}
                        width={"100%"}
                        height={"100%"}
                        // PlaceholderSrc={PlaceholderImage}
                        alt={product.description}
                      />
                    </div>
                  )}
                  {product.bought && (
                    <div className="absolute bottom-0 left-0 w-full text-left bg-opacity-70 pb-3 sm:pl-2 pl-4 flex items-center">
                      <span className="text-xs font-bold font-mono text-black  bg-white py-1 sm:px-1 px-2 sm:mr-1 mr-2">
                        {product.bought}
                      </span>
                      <span className="text-xs font-bold font-mono text-black  bg-white py-1 sm:px-1 px-2">
                        {product.label}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg text-black dark:!text-white font-medium font-mono">
                    {product.description}
                  </h3>
                  <p className="mt-1 text-[12px] font-mono md:text-sm font-light text-black dark:!text-white">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;

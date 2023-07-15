import React, { useState, useEffect } from "react";
import image1 from "../assets/pandas/pexels-ekaterina-bolovtsova-6979329.jpg";
import image2 from "../assets/pandas/pexels-jeffrey-czum-2346289.jpg";
import image3 from "../assets/pandas/pexels-karolina-grabowska-4887214.jpg";
import image4 from "../assets/pandas/pexels-kayla-s-4444036.jpg";
import image5 from "../assets/pandas/pexels-laura-the-explaura-3608263.jpg";
import image6 from "../assets/pandas/pexels-mike-van-schoonderwalt-5504764.jpg";
import image7 from "../assets/pandas/pexels-mq-huang-7619816.jpg";
import image8 from "../assets/pandas/pexels-suki-lee-16200702.jpg";
import image9 from "../assets/pandas/pexels-suki-lee-16200703.jpg";
import image10 from "../assets/pandas/pexels-ольга-солодилова-9995676.jpg";

export default function HomePage() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const show10thItem = screenWidth < 768;

  return (
    <div className="min-h-screen max-h-screen flex items-center justify-center bg-gray-200">
      <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4 w-full h-full min-h-screen max-h-screen">
        {images.map(
          (image, index) =>
            // Conditionally render the 10th item based on screen width
            (index !== 9 || show10thItem) && (
              <a
                key={index}
                className="rounded-2xl relative overflow-hidden hover:scale-[102%] transition-transform duration-500"
                href="https://copypanda.co"
              >
                <img
                  src={image}
                  alt={String(index + 1)}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                />
              </a>
            )
        )}
      </div>
    </div>
  );
}

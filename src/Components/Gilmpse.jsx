import React, { useState } from "react";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";
import img4 from "../Images/img4.jpg";

// Repeat the images twice for the looping effect
const images = [img1, img2, img3, img4, img1, img2, img3, img4];

const Glimpse = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const imageWidth = 200; // Adjust based on your image size
  const numberOfVisibleImages = 4; // Adjust based on how many images you want to show at once

  const scrollImageWidth = (imageWidth * images.length) / 2; // Since images are repeated

  const goLeft = () => {
    setScrollPosition((currentPosition) => {
      let newPosition = currentPosition + imageWidth;
      if (newPosition > 0) {
        // Jump to the "second set" without animation for the looping effect
        newPosition -= scrollImageWidth;
      }
      return newPosition;
    });
  };

  const goRight = () => {
    setScrollPosition((currentPosition) => {
      let newPosition = currentPosition - imageWidth;
      if (Math.abs(newPosition) >= scrollImageWidth) {
        // Jump back to the start without animation for the looping effect
        newPosition += scrollImageWidth;
      }
      return newPosition;
    });
  };

  return (
    <div className="bg-black flex flex-col items-center justify-center p-5">
      <div
        className="relative w-full overflow-hidden"
        style={{ maxWidth: `${imageWidth * numberOfVisibleImages}px` }}
      >
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(${scrollPosition}px)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className="w-48 h-48 object-cover mr-4 border-4 border-gray-700"
            />
          ))}
        </div>
      </div>

      <div className="flex mt-4">
        {/* Left Arrow */}
        <button
          onClick={goLeft}
          className="mx-2 text-4xl text-[#C4A75C] hover:text-[#C4A75C]80 transition ease-in-out duration-300"
          style={{ fontSize: "3rem" }} // Makes the arrow bigger
        >
          &#x2190;
        </button>

        {/* Right Arrow */}
        <button
          onClick={goRight}
          className="mx-2 text-4xl text-[#C4A75C] hover:text-[#C4A75C]80 transition ease-in-out duration-300"
          style={{ fontSize: "3rem" }} // Makes the arrow bigger
        >
          &#x2192;
        </button>
      </div>
    </div>
  );
};

export default Glimpse;

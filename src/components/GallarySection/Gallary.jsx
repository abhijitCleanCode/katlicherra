import { useState, useRef } from "react";
import g_1 from "../../assets/gallary/g_1.jpg";
import g_2 from "../../assets/gallary/g_2.jpg";
import g_3 from "../../assets/gallary/g_3.jpg";
import g_4 from "../../assets/gallary/g_4.jpg";
import g_5 from "../../assets/gallary/g_5.jpg";
import g_6 from "../../assets/gallary/g_6.jpg";
import g_7 from "../../assets/gallary/g_7.jpg";
import g_8 from "../../assets/gallary/g_8.jpg";
import g_9 from "../../assets/gallary/g_9.jpg";
import g_10 from "../../assets/gallary/g_10.jpg";
import g_11 from "../../assets/gallary/g_11.jpg";
import g_12 from "../../assets/gallary/g_12.jpg";
import g_13 from "../../assets/gallary/g_13.jpg";
import g_14 from "../../assets/gallary/g_14.jpg";
import g_15 from "../../assets/gallary/g_15.jpg";
import g_16 from "../../assets/gallary/g_16.jpg";
import g_17 from "../../assets/gallary/g_17.jpg";
import g_18 from "../../assets/gallary/g_18.jpg";
import g_19 from "../../assets/gallary/g_19.jpg";
import g_20 from "../../assets/gallary/g_20.jpg";
import g_21 from "../../assets/gallary/g_21.jpg";
import g_22 from "../../assets/gallary/g_22.jpg";
// import g_23 from "../../assets/gallary/g_23.jpg";
import g_24 from "../../assets/gallary/g_24.jpg";
import g_25 from "../../assets/gallary/g_25.jpg";
import g_26 from "../../assets/gallary/g_26.jpg";
import g_27 from "../../assets/gallary/g_27.jpg";
import g_28 from "../../assets/gallary/g_28.jpg";
import { GallaryClose } from "../GallarySection/GallaryClose"; // Import the GallaryClose component
import CallToAction from "../CallToAction";

const images = [
  g_1,
  g_2,
  g_3,
  g_4,
  g_5,
  g_6,
  g_7,
  g_8,
  g_9,
  g_10,
  g_11,
  g_12,
  g_13,
  g_14,
  g_15,
  g_16,
  g_17,
  g_18,
  g_19,
  g_20,
  g_21,
  g_22,
  g_24,
  g_25,
  g_26,
  g_27,
  g_28,
];

export default function Gallary() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const enlargedImageRef = useRef(null);

  function handleClick(index) {
    setSelectedImageIndex(index); // Set the index of the clicked image
    setTimeout(() => {
      // Ensure the enlarged image is displayed at the top
      enlargedImageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }

  function closeImage() {
    setSelectedImageIndex(null); // Deselect the image
  }

  return (
    <div id="gallery" className="mt-44 relative max-w-[1300px] mx-auto">
      <h1 className="text-2xl font-medium md:text-4xl md:font-semibold text-center">
        Gallery
      </h1>

      {/* Render GallaryClose only if an image is selected */}
      {selectedImageIndex !== null && (
        <GallaryClose
          selectedImageIndex={selectedImageIndex}
          closeImage={closeImage}
          images={images} // Pass images array
          enlargedImageRef={enlargedImageRef} // Pass the reference
        />
      )}

      {/* Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 sm:gap-4 gap-4 md:gap-7 mx-7 lg:mx-12 mt-12">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            onClick={() => handleClick(index)} // Pass the index of the clicked image
            className="cursor-pointer transition-transform"
          />
        ))}
      </div>

      <CallToAction />
    </div>
  );
}

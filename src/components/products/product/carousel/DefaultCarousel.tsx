import { useEffect, useState } from "react";
import { carouselImages } from "components/api/images";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import "./carousel.css";

export const DefaultCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(()=> {
    console.log(currentImageIndex)
  },[currentImageIndex])

  const handleNext = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % carouselImages.length
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const navigation = carouselImages.map((image, index) => {
    return (
      <div
        className={`w-20 h-24 mb-2 last:mb-0 cursor-pointer border ${
          index === currentImageIndex? "border-black" : "border-white"}`}
        onClick={() => setCurrentImageIndex(index)}
        key={index}
      >
        <img className="w-full h-full object-cover" src={image.link} />
      </div>
    );
  });

  return (
    <div className="max-lg:w-[400px] max-lg:h-[400px] flex gap-4">
      <div className="h-full carousel w-20">{navigation}</div>

      <div className="relative">
        <button className="absolute top-1/2 left-2" onClick={handlePrev}>
          <BiChevronLeft
            size={25}
            className="text-white rounded-full bg-black/25"
          />
        </button>
        <div className="max-lg:w-[300px] max-lg:h-[400px]">
          <img
            className="w-full h-full object-cover"
            src={carouselImages[currentImageIndex].link}
          />
        </div>
        <button className="absolute top-1/2 right-2" onClick={handleNext}>
          <BiChevronRight
            size={25}
            className="text-white rounded-full bg-black/25"
          />
        </button>
      </div>
    </div>
  );
};

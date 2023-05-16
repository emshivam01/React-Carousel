import { useState } from "react";
import { imgArr } from "../Config";

const CarouseFrame = () => {
  const [index, setIndex] = useState(0);

  const ToggleCarouselUp = () => {
    if (index <= 2) {
      setIndex(index + 1);
      console.log(index);
    }
  };

  const ToggleCarouselDown = () => {
    if (index >= 1) {
      setIndex(index - 1);
      console.log(index);
    }
  };

  return (
    <div className="flex justify-between m-4 h-[800px] bg-[#d4a373]  shadow-2xl rounded-lg">
      <button onClick={ToggleCarouselDown} className="w-16 bg-gray-600">
        Left
      </button>
      <img
        className="w-full object-contain"
        src={imgArr[index].url}
        alt={imgArr[index].alt}
      />
      <button onClick={ToggleCarouselUp} className="w-16 bg-gray-600">
        Right
      </button>
    </div>
  );
};

export default CarouseFrame;

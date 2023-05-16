import { useState } from "react";
import { imgArr } from "../Config";

const CarouseFrame = () => {
  const [index, setIndex] = useState(0);

  const commanClasses =
    "w-16 h-16 font-semibold text-xl border-2 border-gray-950 rounded-full flex justify-center items-center material-symbols-rounded cursor-pointer";

  const leftButtonClassName =
    commanClasses + (index < 1 ? "cursor-not-allowed opacity-30" : "");

  const rightButtonClassName =
    commanClasses + (index > 2 ? "cursor-not-allowed opacity-30" : "");

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
    <div className="flex justify-between items-center m-auto my-8 h-[800px] w-3/4 bg-transparent ">
      <span onClick={ToggleCarouselDown} className={leftButtonClassName}>
        arrow_back_ios
      </span>
      <img
        className="w-4/5 object-contain rounded-md shadow-2xl"
        src={imgArr[index].url}
        alt={imgArr[index].alt}
      />
      <span onClick={ToggleCarouselUp} className={rightButtonClassName}>
        arrow_forward_ios
      </span>
    </div>
  );
};

export default CarouseFrame;

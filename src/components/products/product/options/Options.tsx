import { optionImages } from "components/api/images";
import { useState } from "react";
type Props = {};

export const Options = (props: Props) => {
  const [color, setColor] = useState(0);

  const images = optionImages.map((image, index) => {
    return (
      <div onClick={() => setColor(index)} className={`cursor-pointer p-1 border-2  rounded-md ${
        index === color ? "border-black" : "border-slate-300"
      }`}
      key={image.link}>
        <img
          src={image.link}
          alt="img"
          className={`w-16 h-20 object-cover cursor-pointer `}
        />
      </div>
    );
  });

  return (
    <div className="mt-5 flex flex-col gap-10">
      {/* Color */}
      <section className="flex flex-col gap-5">
        <div className="flex gap-3">
          <span>Rang:</span>
          <span className="font-semibold">Pushti</span>
        </div>

        <div className="flex gap-3">{images}</div>
      </section>

      {/* Sizes */}
      <section className="flex flex-col gap-5">
        <div className="flex gap-3">
          <span>Razmer:</span>
          <span className="font-semibold"></span>
        </div>

        <div className="flex gap-3">{images}</div>
      </section>
    </div>
  );
};

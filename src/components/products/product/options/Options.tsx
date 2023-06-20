import { optionImages, sizeOptions } from "components/api/images";
import { useEffect, useState } from "react";
import { nprogress } from "@mantine/nprogress";
type Props = {};

export const Options = (props: Props) => {
  const [colorLink, setColorLink] = useState<string>("");
  const [sizeIndex, setSizeIndex] = useState<number>(0);

  useEffect(() => {
    if (colorLink !== "" || sizeIndex > 0) {
      nprogress.start();
      nprogress.complete();
    }
  }, [colorLink, sizeIndex]);

  const handleColor = (data: string) => {
    if (data.length) {
      setColorLink(data);
      nprogress.reset();
    }
  };
  
  const handleSize = (index: number) => {
    setSizeIndex(index);
    nprogress.reset();
  };

  const colors = optionImages.map((image) => {
    return (
      <div
        onClick={() => handleColor(image.link)}
        className={`cursor-pointer p-1 border  outline-slate-300 hover:outline rounded-md ${
          image.link === colorLink
            ? "border-black outline-1 outline outline-black"
            : " outline-1 border-slate-300"
        }`}
        key={image.link}
      >
        <img
          src={image.link}
          alt="img"
          className={`w-16 h-20 object-cover cursor-pointer `}
        />
      </div>
    );
  });

  const sizes = sizeOptions.map((size) => {
    return (
      <div
        onClick={() => handleSize(size.size)}
        className={`cursor-pointer p-1 border outline-1 outline-slate-300 hover:outline h-12 flex-center rounded-md ${
          size.size === sizeIndex
            ? "border-black outline-1 outline outline-black"
            : "outline-1 border-slate-300"
        }`}
        key={size.size}
      >
        <span className="p-3">{size.size}</span>
      </div>
    );
  });

  return (
    <div className="mt-8 flex flex-col gap-8">
      {/* Color */}
      <section className="flex flex-col gap-3">
        <div className="flex gap-3">
          <span>Rang:</span>
          <span className="font-semibold">Pushti</span>
        </div>

        <div className="flex gap-3">{colors}</div>
      </section>

      {/* Sizes */}
      <section className="flex flex-col gap-3">
        <div className="flex gap-3">
          <span>Razmer:</span>
          <span className="font-semibold">{sizeIndex !== 0 && sizeIndex}</span>
        </div>

        <div className="flex gap-3">{sizes}</div>
      </section>
    </div>
  );
};

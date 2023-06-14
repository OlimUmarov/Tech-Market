import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

export const TopHeader = () => {

  return (
    <div className="bg-slate-100 h-8 flex-center">
      <div className="container flex flex-wrap justify-between items-center max-md:hidden">
      <LeftSide />
      <RightSide />
    </div>
    <h1 className="md:hidden">
        Buyurtmangizni 1 kunda bepul yetkazib beramiz!
      </h1>
    </div>
  );
};

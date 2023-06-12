import { BottomHeader } from "./headers/bottom/BottomHeader";
import { MiddleHeader } from "./headers/middle/MiddleHeader";
import { TopHeader } from "./headers/top/TopHeader";

type Props = {};

export const Navbar = (props: Props) => {
  return (
    <div>
      <TopHeader/>
      <MiddleHeader/>
      <BottomHeader/>
    </div>
  );
};

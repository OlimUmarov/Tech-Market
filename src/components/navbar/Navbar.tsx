import { BottomHeader } from "./headers/bottom/BottomHeader";
import { MiddleHeader } from "./headers/middle/middle-header/MiddleHeader";
import { TopHeader } from "./headers/top/top-header/TopHeader";

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

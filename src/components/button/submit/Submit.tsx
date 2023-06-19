import { useAppSelector } from "../../../app/hook";
import { Spinner } from "flowbite-react";

type Button = {
  title: string;
  onClick: () => void;
  active: boolean;
};
export const Submit: React.FC<Button> = ({ title, onClick, active }) => {
  const { isLoading } = useAppSelector((state) => state.contentSlice);

  return (
    <button
    disabled={isLoading}
      onClick={onClick}
      className={`h-14 bg-blue-500 hover:bg-blue-600 transition-all duration-150 ease-in-out  font-medium rounded-lg pt-1 w-full first-letter  ${
        isLoading && "bg-gray-200 border border-blue-500 cursor-not-allowed" 
      } ${active? "text-white" : "bg-white border border-blue-600 text-blue-600"}`}
    >
      {isLoading ? (
        <Spinner aria-label="Info spinner example" color="info" />
      ) : (
        <span>{title}</span>
      )}
    </button>
  );
};

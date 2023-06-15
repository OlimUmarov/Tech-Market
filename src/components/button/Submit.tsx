import { useAppSelector } from "../../app/hook";
import { Spinner } from "flowbite-react";

type Button = {
  title: string;
  onClick: () => void;
};
export const Submit: React.FC<Button> = ({ title, onClick }) => {
  const { isLoading } = useAppSelector((state) => state.contentSlice);

  return (
    <button
    disabled={isLoading}
      onClick={onClick}
      className={`h-14 bg-blue-500 text-white font-medium rounded-lg pt-1 w-full ${
        isLoading && "bg-gray-200 border border-blue-500 cursor-not-allowed"
      }`}
    >
      {isLoading ? (
        <Spinner aria-label="Info spinner example" color="info" />
      ) : (
        <span>{title}</span>
      )}
    </button>
  );
};

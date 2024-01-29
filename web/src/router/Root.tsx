import App from "@/App";
import { FC } from "react";

interface IProps {}

export const Root: FC<IProps> = () => {
  return (
    <div className="bg-black w-full h-full">
      <App />
    </div>
  );
};

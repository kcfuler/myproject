import App from "@/App";
import { FC } from "react";

interface IProps {}

export const Root: FC<IProps> = () => {
  return (
    <div className="bg-black h-screen">
      <App />
    </div>
  );
};

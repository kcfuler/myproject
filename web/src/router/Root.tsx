import { FC } from "react";

import { Home } from "@/pages/Home";

interface IProps {}

export const Root: FC<IProps> = () => {
  return (
    <div className="bg-black h-screen text-white">
      <Home />
    </div>
  );
};

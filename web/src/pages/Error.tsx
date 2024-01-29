import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { MdWarning } from "react-icons/md";

export const Error = () => {
  return (
    <div className="flex items-center justify-center bg-black h-screen">
      <Alert className="w-1/2" variant={"destructive"}>
        <MdWarning className="text-2xl" />
        <AlertTitle>出错啦！</AlertTitle>
        <AlertDescription>你似乎来到了一个不存在的页面</AlertDescription>
      </Alert>
    </div>
  );
};

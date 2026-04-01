import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Header = () => {
  return (
    <div className="w-full flex justify-end items-center p-12">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
        <AvatarBadge className="bg-green-600 dark:bg-green-800" />
      </Avatar>
    </div>
  );
};

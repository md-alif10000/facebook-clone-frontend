import React from "react";
import Image from "next/image";

export default function SidebarRow({ Icon, title, src }) {
  return (
    <div className="flex w-180 items-center p-2 lg:p-4 space-x-2 hover:bg-gray-100 rounded-full cursor-pointer ">
      {src && (
        <Image
          src={src}
          height={30}
          width={30}
          className="rounded-full"
          layout="fixed"
        />
      )}

      {Icon && <Icon className="h-8 w-8 text-blue-500 cursor-pointer " />}
      <p className="hidden sm:inline-flex font-medium "> {title} </p>
    </div>
  );
}

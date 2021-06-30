import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  HomeIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridIcon,
  ChatIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./ui/HeaderIcon";
function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center p-2 lg:px-5 shadow-md z-10 bg-white   h-16">
      <div className="flex items-center">
        <Image
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          height={40}
          width={40}
          layout="fixed"
        />
        <div className="flex items-center bg-gray-100 p-2 rounded-full ">
          <SearchIcon className="h-6 w-7 text-gray-600" />

          <input
            className=" hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6  md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className="flex items-center sm:space-x-2 justify-end">
        <div className='flex items-center bg-gray-100 hover:bg-gray-300 p-1 rounded-full cursor-pointer' >
          <Image
            src="https://avatars.githubusercontent.com/u/70016863?v=4"
            height={40}
            width={40}
            className="rounded-full "
            objectFit="cover"
          />
          <p className="font-semibold pr-3 whitespace-nowrap  lg:inline-flex hidden">Md Alif</p>
        </div>

        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;

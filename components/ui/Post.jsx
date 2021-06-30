import Image from "next/image";
import {useState } from 'react'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'
import { ThumbUpIcon as Liked } from "@heroicons/react/solid";
export default function Post() {
    const [isLiked, setIsLiked] = useState(false);



  return (
    <div className="flex flex-col ">
      <div className="p-5 bg-white mt-5  rounded-t-2xl shadow-xl">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full cursor-pointer"
            src="https://avatars.githubusercontent.com/u/70016863?v=4"
            alt=""
            width={40}
            height={40}
          />
          <div>
            <p className="font-md  cursor-pointer">Md Alif</p>
            <p className="text-xs text-gray-400">2 min ago</p>
          </div>
        </div>
        <p>Whatsup </p>
      </div>

      <div className="relative h-56 md:h-96 bg-white p-2 rounded-2xl">
        <Image
          src="https://avatars.githubusercontent.com/u/70016863?v=4"
          alt=""
          objectFit="cover "
          className="m-2"
          layout="fill"
        />
      </div>
      <div className="flex justify-between rounded-b-2xl items-center bg-white shadow-md text-gray-400 p-4">
        <div className="flex flex-col items-center justify-center">
          {isLiked ? (
            <Liked
              className="h-6 w-6 cursor-pointer text-blue-500 hover:scale-105 transform"
              onClick={() => setIsLiked(!isLiked)}
            />
          ) : (
            <ThumbUpIcon
              className={`h-6 w-6 cursor-pointer text-blue-300 hover:text-blue-500 } `}
              onClick={() => setIsLiked(!isLiked)}
            />
          )}

          <p className="text-xs sm:text-base">{isLiked ? "Unlike" : "Like"}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          {" "}
          <ChatAltIcon className="h-6 w-6  cursor-pointer text-blue-400 hover:text-blue-500" />{" "}
          <p className="text-xs sm:text-base">Send</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ShareIcon className="h-6 w-6  cursor-pointer  text-blue-400  hover:text-blue-500" />{" "}
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

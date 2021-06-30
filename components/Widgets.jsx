import React from 'react'
import {VideoCameraIcon,SearchIcon,DotsVerticalIcon} from "@heroicons/react/solid"

export default function Widgets() {
    return (
      <div  className='w-50 hidden lg:flex flex-col p-2 mt-5'>
        <div className="flex justify-sb items-center">
          <h2>Contacts</h2>
          <div className="flex space-x-2 justify-between items-center">
            <VideoCameraIcon className="h-6 w-6 text-gray-500" />
            <SearchIcon className="h-6 w-6 text-gray-500" />
            <DotsVerticalIcon className="h-6 w-6 text-gray-500" />
          </div>
        </div>
      </div>
    );
}

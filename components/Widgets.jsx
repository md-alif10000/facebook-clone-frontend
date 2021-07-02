import React from 'react'
import { VideoCameraIcon, SearchIcon, DotsVerticalIcon } from "@heroicons/react/solid"
import Contact from '../components/ui/Contact'

export default function Widgets() {
    return (
      <div  className='w-80 lg:w-70 hidden lg:flex flex-col p-2 mt-5 bg-white rounded-2xl'>
        <div className="flex w-full justify-sb items-center">
          <h2>Contacts</h2>
          <div className="flex-1 flex space-x-2 justify-between items-center">
            <VideoCameraIcon className="h-6 w-6 text-gray-500" />
            <SearchIcon className="h-6 w-6 text-gray-500" />
            <DotsVerticalIcon className="h-6 w-6 text-gray-500" />
          </div>
        </div>

        <Contact src="https://avatars.githubusercontent.com/u/70016863?v=4" name="Md Alif" />
        


      </div>
    );
}

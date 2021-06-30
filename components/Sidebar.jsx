import React from 'react'
import SidebarRow from './ui/SidebarRow'
import {UserGroupIcon,UsersIcon,ShoppingCartIcon,DesktopComputerIcon,CalendarIcon,ClockIcon,ArrowCircleDownIcon} from "@heroicons/react/solid";

export default function Sidebar() {
    return (
      <div className="p-2 rounded-2xl mt-4 mx-w-[600px] xl:min-w-[300px]  bg-white">
        <SidebarRow
          src="https://avatars.githubusercontent.com/u/70016863?v=4"
          title="Friends"
        />
        <SidebarRow Icon={UsersIcon} title="Friends" />
        <SidebarRow Icon={UserGroupIcon} title="Groups" />
        <SidebarRow Icon={ShoppingCartIcon} title="Marketplace" />
        <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
        <SidebarRow Icon={CalendarIcon} title="Events" />
        <SidebarRow Icon={ClockIcon} title="Memories" />
        <SidebarRow Icon={ArrowCircleDownIcon} title="See more.." />
      </div>
    );
}

import React from "react";

function HeaderIcon({ Icon,active }) {
  return (
    <div className="flex cursor-pointer  md:px-10  sm:h-14 md:hover:bg-gray-100 justify-center items-center rounded-xl active:border-b-2 active:border-blue-500 group">
      <Icon
        className={`h-5 sm:h-7 text-center tx-auto text-gray-600  group-hover:text-blue-500 ${active && 'text-blue-500'}`}
      />
    </div>
  );
}

export default HeaderIcon;

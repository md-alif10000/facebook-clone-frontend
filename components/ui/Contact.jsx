import React from 'react'
import Image from 'next/image'

export default function Contact({src,name}) {
    return (
        <div className="flex items-center  space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer rounded-full p-2 " >
            <Image src={src} width={50} height={50} className="rounded-full"
                layout='fixed'
                objectFit="cover" />
            <p>{name}</p>
            <div className="absolute bottom-2 left-7 bg-green-400 rounded-full animate-bounce h-3 w-3" ></div>
            
        </div>
    )
}

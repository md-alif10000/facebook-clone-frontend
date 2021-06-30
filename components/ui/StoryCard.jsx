import Image from "next/image"


function StoryCard({ name, src, profile }) {
    return (
      <div className="relative h-14 w-14 md:h-20  md:w-20  lg:h-56 lg:w-32 cursor-pointer p-3 border-2 border-blue-600 rounded-full  lg:border-none transform delay-100 hover:scale-110 box-border">
        <Image
          src={profile}
          height={40}
          width={40}
          className="  absolute opacity-0 lg:opacity-100 z-50 top-18 rounded-full  hover:scale-110 "
          objectFit="cover"
        />
        <div className="rounded-full h-14 w-14 ">
          <Image
            src={src}
            className="object-cover filter brightness-75 rounded-full lg:rounded-3xl  "
            objectFit="cover"
            layout="fill"
          />
        </div>

        <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold ">
          {name}
        </p>
      </div>
    );
}

export default StoryCard





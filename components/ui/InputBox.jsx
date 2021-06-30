import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  VideoCameraIcon,
  CameraIcon,
  EmojiHappyIcon,
  XCircleIcon,
} from "@heroicons/react/solid";

function InputBox() {
  const [input, setInput] = useState("");
  const [files, setfiles] = useState(null);
  const filePickerRef = useRef(null);

  const sendPost = (e) => {
    e.preventDefault();
    setInput("");
  };

  const imageHandler = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setfiles(readerEvent.target.result);
    };

    // setfiles([...files,e.target.file])
  };

  const removeImage = () => {
    setfiles(null);
  };
  return (
    <div className="mx-auto flex flex-col bg-white rounded-2xl text-gray-500 font-medium mt-6 w-full">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/70016863?v=4"
          width={40}
          height={40}
          layout="fixed"
        />
        <form  className='flex-1' >
          <input
            value={input}
            className="flex-1 rounded-full h-12 bg-gray-100 px-4 focus:outline-none w-full "
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's on your mind.."
          />
          <button hidden type="submit" onClick={sendPost}>
            {" "}
            Submit
          </button>
        </form>
      </div>
      {files && (
        <div className="flex-1 w-full p-2 relative">
          <img
            src={files}
            alt="e"
            style={{ objectFit: "cover", width: "100%" }}
            className="rounded-2xl"
          />
          <XCircleIcon
            onClick={removeImage}
            className="text-red-600 h-8 w-8 cursor-pointer absolute top-4 right-3  transform hover:scale-110 duration-300 "
          />
        </div>
      )}
      <div className="flex justify-between p-3 border-t cursor-pointer">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live video</p>
        </div>
        <div>
          <label htmlFor="file" className="inputIcon">
            <CameraIcon className="h-7 text-red-500" />
            <p className="text-xs sm:text-sm xl:text-base">Photo /Video</p>
          </label>
          <input
            type="file"
            id="file"
            ref={filePickerRef}
            onChange={imageHandler}
            className="hidden"
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base word-wrap ">
            Feeling/ Activity
          </p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;

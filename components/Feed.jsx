import Posts from "./Posts";
import Stories from "./Stories";
import InputBox from "./ui/InputBox";

function Feed() {
    return (
      <div
        className=" flex-3  pb-44 mt-4 mr-4 ml-5 xl:mr-40 overflow-y-auto scrollbar-hide "
        style={{  width: "500px" }}
      >
        <Stories />
        <InputBox />
        <Posts />
      </div>
    );
}

export default Feed

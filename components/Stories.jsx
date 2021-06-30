import { stories } from "../data/stories";
import StoryCard from "./ui/StoryCard";

function Stories() {
  return (
    <div className="flex  justify-center space-x-3 mx-auto  border-box  overflow-y-scroll m-2 scrollbar-hide">
      {stories?.map((story, index) => (
        <StoryCard
          key={index}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;

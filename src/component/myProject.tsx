import { useScroll } from "./scrolProvider";
import ProjectList from "./ProjectList";
import { listDataProject } from "./ProjectList/projectList";
import { useState } from "react";

const MyProject = () => {
  const { projectRef } = useScroll();
  const [visibleProjects, setVisibleProjects] = useState(2);

  const loadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3); // Load 3 more projects on each click
  };
  return (
    <div
      ref={projectRef}
      id="project"
      className="justify-center h-full gap-5 p-5 bg-black lg:w-screen lg:p-10"
    >
      <div
        data-aos="flip-left"
        className="flex justify-center text-[28px] text-white font-sora lg:text-[48px] mt-10 gap-4"
      >
        <p>My </p>
        <p className="font-extrabold">Project</p>
      </div>
      {listDataProject.slice(0, visibleProjects).map((list, index) => {
        return <ProjectList key={index + 1} project={list} />;
      })}
      HAI
      {visibleProjects < listDataProject.length && (
        <div className="flex justify-center w-full">
          <button
            className="flex justify-center p-2 bg-white rounded"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default MyProject;

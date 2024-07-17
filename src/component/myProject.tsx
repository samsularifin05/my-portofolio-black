import { useScroll } from "./scrolProvider";
import ProjectList from "./ProjectList";
import { listDataProject } from "./ProjectList/projectList";

const MyProject = () => {
  const { projectRef } = useScroll();

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

      {listDataProject.map((list, index) => {
        return (
          <ProjectList
            key={index + 1}
            no={index + 1}
            img={list.img}
            judul={list.judul}
            deskripsi={list.deskripsi}
            url={list.url}
            postition={list.postition}
            tag={list.tag}
          />
        );
      })}
    </div>
  );
};

export default MyProject;

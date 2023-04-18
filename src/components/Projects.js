import { dataProjects } from "../data";
import Project from "./Project";

const Projects = () => {

  return (
    <div className="projects-box">
      {dataProjects?.map((project) => 
        <Project project={project}/>
      )}
    </div>
  );
}
  
export default Projects;
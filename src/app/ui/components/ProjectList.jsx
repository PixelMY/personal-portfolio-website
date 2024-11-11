import { getAllProjects } from "@/app/lib/data";
import ProjectCard from "@/app/ui/components/ProjectCard";

export default async function ProjectList() {
  const data = await getAllProjects();
  return (
    <div className="snap-y snap-mandatory h-screen flex flex-col gap-12 py-72 overflow-y-scroll scroll-smooth">
      {data &&
        data.map((datum) => (
          <div key={datum.id} className="snap-center flex">
            <ProjectCard data={datum} />
          </div>
        ))}
    </div>
  );
}
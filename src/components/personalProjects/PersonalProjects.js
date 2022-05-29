import { useState } from 'react';
import { Project } from './index';

const defaultProject = {
  projectName: '',
  achievements: [],
  startDate: '',
  endDate: '',
  id: crypto.randomUUID(),
};

export default function PersonalProjects() {
  const [personalProjects, setpersonalProjects] = useState([defaultProject]);
  const [newProjectAdded, setnewProjectAdded] = useState(false);

  function handleProjectEdit(projectId, nextProject) {
    const nextProjects = personalProjects.map((p) => {
      if (p.id === projectId) {
        return nextProject;
      }
      return p;
    });
    setpersonalProjects(nextProjects);
  }

  function handleProjectAdd() {
    const projectToAdd = {
      projectName: '',
      achievements: [],
      startDate: '',
      endDate: '',
      id: crypto.randomUUID(),
    };

    const nextProject = [...personalProjects, projectToAdd];
    setpersonalProjects(nextProject);

    if (!newProjectAdded) {
      setnewProjectAdded(true);
    }
  }

  const listOfProjects = personalProjects.map((project, index) => {
    return (
      <Project
        key={project.id}
        project={project}
        onProjectEdit={handleProjectEdit}
        onProjectAdd={handleProjectAdd}
        defaultEditing={index === personalProjects.length - 1 && newProjectAdded}
      />
    );
  });

  return (
    <section className="mt-6">
      <h2 className="font text-3xl font-bold text-slate-900">PERSONAL PROJECTS</h2>
      {listOfProjects}
    </section>
  );
}

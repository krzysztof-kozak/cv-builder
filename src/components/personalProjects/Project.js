import { useEffect, useRef, useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { flushSync } from 'react-dom';

export default function Project({ project, onProjectAdd, onProjectEdit, defaultEditing }) {
  const [editing, setEditing] = useState(defaultEditing);
  const projectNodeRef = useRef(null);
  const plusSignNodeRef = useRef(null);
  const achievementListNodeRef = useRef(null);

  function handleProjectClick() {
    setEditing(true);
  }

  function handleProjectEdit(nextProject) {
    onProjectEdit(project.id, nextProject);
  }

  function handleProjectAdd() {
    onProjectAdd();
  }

  useEffect(() => {
    function handleOutsideClick(e) {
      const outsideClick = !projectNodeRef.current.contains(e.target);
      const plusSignClick = plusSignNodeRef.current?.contains(e.target);

      if (outsideClick || plusSignClick) {
        setEditing(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [editing]);

  const { projectName, achievements, startDate, endDate } = project;

  let projectContent;
  if (editing) {
    projectContent = (
      <>
        <input
          className="bg-initial flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
          placeholder="Project Name"
          value={projectName}
          name="projectName"
          onChange={(e) => {
            const nextProject = { ...project, projectName: e.target.value };
            handleProjectEdit(nextProject);
          }}
        />

        <div className="flex gap-2">
          <input
            className="min-w-0 basis-20 border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
            placeholder="mm/yyyy"
            value={startDate}
            name="startDate"
            onChange={(e) => {
              const nextProject = { ...project, startDate: e.target.value };
              handleProjectEdit(nextProject);
            }}
          />{' '}
          <span>-</span>{' '}
          <input
            className="min-w-0 basis-20 border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
            placeholder="mm/yyyy"
            value={endDate}
            name="endDate"
            onChange={(e) => {
              const nextProject = { ...project, endDate: e.target.value };
              handleProjectEdit(nextProject);
            }}
          />
        </div>
        <ul ref={achievementListNodeRef} className="flex flex-shrink-0 basis-full flex-wrap">
          {achievements.length > 0 ? (
            achievements.map(({ id, value }) => (
              <input
                className="flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
                placeholder="Description of Achievements"
                key={id}
                value={value}
                name="achievements"
                onChange={(e) => {
                  const nextAchievements = achievements.map((c) => {
                    if (c.id === id) {
                      return { ...c, value: e.target.value };
                    }
                    return c;
                  });
                  const nextProject = { ...project, achievements: nextAchievements };

                  handleProjectEdit(nextProject);
                }}
                onKeyDown={(e) => {
                  const pressedEnter = e.key === 'Enter';
                  const hasValue = e.target.value.length > 0;

                  if (pressedEnter && hasValue) {
                    const nextAchievements = [...achievements, { id: crypto.randomUUID(), value: '' }];
                    const nextProject = { ...project, achievements: nextAchievements };

                    flushSync(() => {
                      handleProjectEdit(nextProject);
                    });
                    achievementListNodeRef.current.lastChild.focus();
                  }
                }}
              />
            ))
          ) : (
            <input
              className="flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
              placeholder="Description of Achievements"
              name="achievements"
              onChange={(e) => {
                const nextAchievements = [...achievements, { id: crypto.randomUUID(), value: e.target.value }];
                const nextProject = { ...project, achievements: nextAchievements };

                flushSync(() => {
                  handleProjectEdit(nextProject);
                });

                achievementListNodeRef.current.lastChild.focus();
              }}
            />
          )}
        </ul>
        <div
          ref={plusSignNodeRef}
          onMouseDown={handleProjectAdd}
          className="group mt-3 flex flex-shrink-0 basis-full cursor-pointer items-center gap-3"
        >
          <PlusCircleIcon className="h-7 w-7 text-emerald-500 group-hover:scale-110" />
          <div className="basis-full border-b-4 border-dotted border-emerald-200"></div>
        </div>
      </>
    );
  } else {
    projectContent = (
      <>
        <p className="flex-shrink-0 basis-full border-b-2 border-transparent">
          {projectName ? projectName : 'Project Name'}
        </p>

        {startDate && endDate && (
          <p className="flex-shrink-0 basis-full border-b-2  border-transparent">
            {startDate} - {endDate}
          </p>
        )}
        <ul>
          {achievements.map(({ id, value }) => (
            <li className="border-b-2 border-transparent" key={id}>
              {value}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <div ref={projectNodeRef} onClick={handleProjectClick} className="mt-5 flex flex-wrap">
      {projectContent}
    </div>
  );
}

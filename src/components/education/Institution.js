import { useEffect, useRef, useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { flushSync } from 'react-dom';

export default function Institution({ institution, onInstitutionAdd, onInstitutionEdit, defaultEditing }) {
  const [editing, setEditing] = useState(defaultEditing);
  const institutionNodeRef = useRef(null);
  const plusSignNodeRef = useRef(null);
  const courseListNodeRef = useRef(null);

  function handleEducationClick() {
    setEditing(true);
  }

  function handleInstitutionEdit(nextPosition) {
    onInstitutionEdit(institution.id, nextPosition);
  }

  function handleInstitutionAdd() {
    onInstitutionAdd();
  }

  useEffect(() => {
    function handleOutsideClick(e) {
      const outsideClick = !institutionNodeRef.current.contains(e.target);
      const plusSignClick = plusSignNodeRef.current?.contains(e.target);

      if (outsideClick || plusSignClick) {
        setEditing(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [editing]);

  const { studyProgram, placeOfEducation, startDate, endDate, courses } = institution;

  let institutionContent;
  if (editing) {
    institutionContent = (
      <>
        <input
          className="bg-initial flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
          placeholder="Title/Position"
          value={studyProgram}
          name="studyProgram"
          onChange={(e) => {
            const nextInstitution = { ...institution, studyProgram: e.target.value };
            handleInstitutionEdit(nextInstitution);
          }}
        />
        <input
          className="bg-initial flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
          placeholder="Workplace/Company"
          value={placeOfEducation}
          name="placeOfEducation"
          onChange={(e) => {
            const nextInstitution = { ...institution, placeOfEducation: e.target.value };
            handleInstitutionEdit(nextInstitution);
          }}
        />
        <div className="flex gap-2">
          <input
            className="min-w-0 basis-20 border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
            placeholder="mm/yyyy"
            value={startDate}
            name="startDate"
            onChange={(e) => {
              const nextInstitution = { ...institution, startDate: e.target.value };
              handleInstitutionEdit(nextInstitution);
            }}
          />{' '}
          <span>-</span>{' '}
          <input
            className="min-w-0 basis-20 border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
            placeholder="mm/yyyy"
            value={endDate}
            name="endDate"
            onChange={(e) => {
              const nextInstitution = { ...institution, endDate: e.target.value };
              handleInstitutionEdit(nextInstitution);
            }}
          />
        </div>
        <ul ref={courseListNodeRef} className="flex flex-shrink-0 basis-full flex-wrap">
          {courses.length > 0 ? (
            courses.map(({ id, value }) => (
              <input
                className="flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
                placeholder="Accomplishment/Responsibility/Task"
                key={id}
                value={value}
                name="courses"
                onChange={(e) => {
                  const nextCourses = courses.map((c) => {
                    if (c.id === id) {
                      return { ...c, value: e.target.value };
                    }
                    return c;
                  });
                  const nextInstitution = { ...institution, courses: nextCourses };

                  handleInstitutionEdit(nextInstitution);
                }}
                onKeyDown={(e) => {
                  const pressedEnter = e.key === 'Enter';
                  const hasValue = e.target.value.length > 0;

                  if (pressedEnter && hasValue) {
                    const nextCourses = [...courses, { id: crypto.randomUUID(), value: '' }];
                    const nextInstitution = { ...institution, courses: nextCourses };

                    flushSync(() => {
                      handleInstitutionEdit(nextInstitution);
                    });
                    courseListNodeRef.current.lastChild.focus();
                  }
                }}
              />
            ))
          ) : (
            <input
              className="flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
              placeholder="Course/Thesis/Project"
              name="courses"
              onChange={(e) => {
                const nextCourses = [...courses, { id: crypto.randomUUID(), value: e.target.value }];
                const nextInstitution = { ...institution, courses: nextCourses };

                flushSync(() => {
                  handleInstitutionEdit(nextInstitution);
                });

                courseListNodeRef.current.lastChild.focus();
              }}
            />
          )}
        </ul>
        <div
          ref={plusSignNodeRef}
          onMouseDown={handleInstitutionAdd}
          className="group mt-3 flex flex-shrink-0 basis-full cursor-pointer items-center gap-3"
        >
          <PlusCircleIcon className="h-7 w-7 text-emerald-500 group-hover:scale-110" />
          <div className="basis-full border-b-4 border-dotted border-emerald-200"></div>
        </div>
      </>
    );
  } else {
    institutionContent = (
      <>
        <p className="flex-shrink-0 basis-full border-b-2 border-transparent">
          {studyProgram ? studyProgram : 'Study Program'}
        </p>
        <p className="flex-shrink-0 basis-full border-b-2 border-transparent">
          {placeOfEducation ? placeOfEducation : 'Institution/Place of Education'}
        </p>
        {startDate && endDate && (
          <p className="flex-shrink-0 basis-full border-b-2  border-transparent">
            {startDate} - {endDate}
          </p>
        )}
        <ul>
          {courses.map(({ id, value }) => (
            <li className="border-b-2 border-transparent" key={id}>
              {value}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <div ref={institutionNodeRef} onClick={handleEducationClick} className="mt-5 flex flex-wrap">
      {institutionContent}
    </div>
  );
}

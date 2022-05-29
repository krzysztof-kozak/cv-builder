import { useEffect, useRef, useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { flushSync } from 'react-dom';

export default function Position({ position, onPositionEdit, onPositionAdd, defaultEditing }) {
  const [editing, setEditing] = useState(defaultEditing);
  const positionNodeRef = useRef(null);
  const plusSignNodeRef = useRef(null);
  const responsibilityListNodeRef = useRef(null);

  function handlePositionClick(e) {
    setEditing(true);
  }

  function handlePositionEdit(nextPosition) {
    onPositionEdit(position.id, nextPosition);
  }

  function handlePositionAdd() {
    onPositionAdd();
  }

  useEffect(() => {
    function handleOutsideClick(e) {
      const outsideClick = !positionNodeRef.current.contains(e.target);
      const plusSignClick = plusSignNodeRef.current?.contains(e.target);

      if (outsideClick || plusSignClick) {
        setEditing(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [editing]);

  const { title, company, responsibilities, startDate, endDate } = position;

  let positionContent;
  if (editing) {
    positionContent = (
      <>
        <input
          className="bg-initial flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
          placeholder="Title/Position"
          value={title}
          name="title"
          onChange={(e) => {
            const nextPosition = { ...position, title: e.target.value };
            handlePositionEdit(nextPosition);
          }}
        />
        <input
          className="bg-initial flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
          placeholder="Workplace/Company"
          value={company}
          name="company"
          onChange={(e) => {
            const nextPosition = { ...position, company: e.target.value };
            handlePositionEdit(nextPosition);
          }}
        />
        <div className="flex gap-2">
          <input
            className="min-w-0 basis-20 border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
            placeholder="mm/yyyy"
            value={startDate}
            name="startDate"
            onChange={(e) => {
              const nextPosition = { ...position, startDate: e.target.value };
              handlePositionEdit(nextPosition);
            }}
          />{' '}
          <span>-</span>{' '}
          <input
            className="min-w-0 basis-20 border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
            placeholder="mm/yyyy"
            value={endDate}
            name="endDate"
            onChange={(e) => {
              const nextPosition = { ...position, endDate: e.target.value };
              handlePositionEdit(nextPosition);
            }}
          />
        </div>
        <ul ref={responsibilityListNodeRef} className="flex flex-shrink-0 basis-full flex-wrap">
          {responsibilities.length > 0 ? (
            responsibilities.map(({ id, value }) => (
              <input
                className="flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
                placeholder="Accomplishment/Responsibility/Task"
                key={id}
                value={value}
                name="responsibilities"
                onChange={(e) => {
                  const nextResponsibilities = responsibilities.map((r) => {
                    if (r.id === id) {
                      return { ...r, value: e.target.value };
                    }
                    return r;
                  });
                  const nextPosition = { ...position, responsibilities: nextResponsibilities };

                  handlePositionEdit(nextPosition);
                }}
                onKeyDown={(e) => {
                  const pressedEnter = e.key === 'Enter';
                  const hasValue = e.target.value.length > 0;

                  if (pressedEnter && hasValue) {
                    const nextResponsibilities = [...responsibilities, { id: crypto.randomUUID(), value: '' }];
                    const nextPosition = { ...position, responsibilities: nextResponsibilities };

                    flushSync(() => {
                      handlePositionEdit(nextPosition);
                    });
                    responsibilityListNodeRef.current.lastChild.focus();
                  }
                }}
              />
            ))
          ) : (
            <input
              className="flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
              placeholder="Accomplishment/Responsibility/Task"
              name="responsibilities"
              onChange={(e) => {
                const nextResponsibilities = [...responsibilities, { id: crypto.randomUUID(), value: e.target.value }];
                const nextPosition = { ...position, responsibilities: nextResponsibilities };

                flushSync(() => {
                  handlePositionEdit(nextPosition);
                });

                responsibilityListNodeRef.current.lastChild.focus();
              }}
            />
          )}
        </ul>
        <div
          ref={plusSignNodeRef}
          className="group mt-3 flex flex-shrink-0 basis-full cursor-pointer items-center gap-3"
          onMouseDown={handlePositionAdd}
        >
          <PlusCircleIcon className="h-7 w-7 text-emerald-500 group-hover:scale-110" />
          <div className="basis-full border-b-4 border-dotted border-emerald-200"></div>
        </div>
      </>
    );
  } else {
    positionContent = (
      <>
        <p className="flex-shrink-0 basis-full border-b-2 border-transparent">{title ? title : 'Title/Position'}</p>
        <p className="flex-shrink-0 basis-full border-b-2 border-transparent">
          {company ? company : 'Workplace/Company'}
        </p>
        {startDate && endDate && (
          <p className="flex-shrink-0 basis-full border-b-2  border-transparent">
            {startDate} - {endDate}
          </p>
        )}

        <ul>
          {responsibilities.map(({ id, value }) => (
            <li className="border-b-2 border-transparent" key={id}>
              {value}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <div ref={positionNodeRef} onClick={handlePositionClick} className="mt-5 flex flex-wrap">
      {positionContent}
    </div>
  );
}

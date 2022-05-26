import { useEffect, useRef, useState } from 'react';

export default function Position({ position, onPositionEdit }) {
  const [editing, setEditing] = useState(false);
  const nodeRef = useRef(null);

  function handlePositionClick() {
    setEditing(true);
  }

  function handlePositionEdit(nextPosition) {
    onPositionEdit(position.id, nextPosition);
  }

  useEffect(() => {
    function handleOutsideClick(e) {
      const outsideClick = !nodeRef.current.contains(e.target);

      if (outsideClick) {
        setEditing(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const { title, company, responsibilities, startDate, endDate } = position;

  let positionContent;
  if (editing) {
    positionContent = (
      <>
        <input
          className="bg-initial flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
          value={title}
          name="title"
          onChange={(e) => {
            const nextPosition = { ...position, title: e.target.value };
            handlePositionEdit(nextPosition);
          }}
        />
        <input
          className="bg-initial flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
          value={company}
          name="company"
          onChange={(e) => {
            const nextPosition = { ...position, company: e.target.value };
            handlePositionEdit(nextPosition);
          }}
        />
        <div className="flex">
          <input
            className="min-w-0 basis-16 border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
            value={startDate}
            name="startDate"
            onChange={(e) => {
              const nextPosition = { ...position, startDate: e.target.value };
              handlePositionEdit(nextPosition);
            }}
          />{' '}
          <span>-</span>{' '}
          <input
            className="min-w-0 basis-16 border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
            value={endDate}
            name="endDate"
            onChange={(e) => {
              const nextPosition = { ...position, endDate: e.target.value };
              handlePositionEdit(nextPosition);
            }}
          />
        </div>
        <ul className="flex flex-shrink-0 basis-full flex-wrap">
          {responsibilities.map(({ id, value }) => (
            <input
              className="flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
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
            />
          ))}
        </ul>
      </>
    );
  } else {
    positionContent = (
      <>
        <p className="flex-shrink-0 basis-full border-b-2 border-transparent">{title}</p>
        <p className="flex-shrink-0 basis-full border-b-2 border-transparent">{company}</p>
        <p className="flex-shrink-0 basis-full border-b-2  border-transparent">
          {startDate} - {endDate}
        </p>
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
    <div ref={nodeRef} onClick={handlePositionClick} className="mt-5 flex flex-wrap">
      {positionContent}
    </div>
  );
}

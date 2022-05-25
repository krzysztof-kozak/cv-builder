import { useEffect, useRef, useState } from 'react';

export default function Position({ title, company, responsibilities, startDate, endDate }) {
  const [editing, setEditing] = useState(true);
  const nodeRef = useRef(null);

  function handleEditing() {
    setEditing(true);
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

  let positionContent;
  if (editing) {
    positionContent = (
      <>
        <input
          className="bg-initial flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
          value={title}
          readOnly
        />
        <input
          className="bg-initial flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
          value={company}
          readOnly
        />
        <div className="flex">
          <input
            className="min-w-0 basis-16 border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
            value={startDate}
            readOnly
          />{' '}
          <span>-</span>{' '}
          <input
            className="min-w-0 basis-16 border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
            value={endDate}
            readOnly
          />
        </div>
        <ul className="flex flex-shrink-0 basis-full flex-wrap">
          {responsibilities.map(({ key, value }) => (
            <input
              className="flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
              key={key}
              value={value}
              readOnly
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
          {endDate} - {startDate}
        </p>
        <ul>
          {responsibilities.map(({ key, value }) => (
            <li className="border-b-2 border-transparent" key={key}>
              {value}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <div ref={nodeRef} onClick={handleEditing} className="mt-5 flex flex-wrap">
      {positionContent}
    </div>
  );
}

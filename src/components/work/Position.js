import { useState } from 'react';

export default function Position({ title, company, responsibilities, startDate, endDate }) {
  const [editing, setEditing] = useState(false);

  let positionContent;

  if (editing) {
    positionContent = (
      <>
        <div className="flex flex-wrap">
          <input
            className="bg-initial flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
            value={title}
          />
          <input
            className="bg-initial flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
            value={company}
          />
          <input
            className="bg-initial flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
            value={startDate}
          />
          <input
            className="bg-initial flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
            value={endDate}
          />
        </div>

        <ul className="flex flex-wrap">
          {responsibilities.map(({ key, value }) => (
            <input
              className="flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
              key={key}
              value={value}
            />
          ))}
        </ul>
      </>
    );
  } else {
    positionContent = (
      <>
        <p>{title}</p>
        <p>{company}</p>
        <p>
          <span>{startDate}</span> - <span>{endDate}</span>
        </p>
        <ul>
          {responsibilities.map(({ key, value }) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
      </>
    );
  }

  return <div className="mt-5">{positionContent}</div>;
}

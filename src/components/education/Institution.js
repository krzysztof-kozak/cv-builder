import { useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/solid';

export default function Institution({ institution }) {
  const [editing, setEditing] = useState(false);

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
        />
        <input
          className="bg-initial flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
          placeholder="Workplace/Company"
          value={placeOfEducation}
          name="Place of Education"
        />
        <div className="flex gap-2">
          <input
            className="min-w-0 basis-20 border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
            placeholder="mm/yyyy"
            value={startDate}
            name="startDate"
          />{' '}
          <span>-</span>{' '}
          <input
            className="min-w-0 basis-20 border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
            placeholder="mm/yyyy"
            value={endDate}
            name="endDate"
          />
        </div>
        <ul className="flex flex-shrink-0 basis-full flex-wrap">
          {courses.map(({ id, value }) => (
            <input
              className="flex-shrink-0 basis-full border-b-2 border-emerald-200 border-transparent bg-inherit focus:border-emerald-600 focus:outline-none"
              placeholder="Accomplishment/Responsibility/Task"
              key={id}
              value={value}
              name="courses"
            />
          ))}
        </ul>
        <div className="group mt-3 flex flex-shrink-0 basis-full cursor-pointer items-center gap-3">
          <PlusCircleIcon className="h-7 w-7 text-emerald-500 group-hover:scale-110" />
          <div className="basis-full border-b-4 border-dotted border-emerald-200"></div>
        </div>
      </>
    );
  } else {
    institutionContent = (
      <>
        <p className="flex-shrink-0 basis-full border-b-2 border-transparent">{studyProgram}</p>
        <p className="flex-shrink-0 basis-full border-b-2 border-transparent">{placeOfEducation}</p>
        <p className="flex-shrink-0 basis-full border-b-2  border-transparent">
          {startDate} - {endDate}
        </p>
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

  return <div className="mt-5 flex flex-wrap">{institutionContent}</div>;
}

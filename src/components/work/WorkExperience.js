import { useState } from 'react';
import { Position } from './index';

const defaultPositions = [
  {
    title: 'Analyst',
    company: 'Aon',
    responsibilities: [
      { key: crypto.randomUUID(), value: 'Task 1' },
      { key: crypto.randomUUID(), value: 'Task 2' },
      { key: crypto.randomUUID(), value: 'Task 3' },
    ],
    startDate: '01/2018',
    endDate: '01/2022',
    key: crypto.randomUUID(),
  },
  {
    title: 'Administrator',
    company: 'Aon',
    responsibilities: [
      { key: crypto.randomUUID(), value: 'Task 1' },
      { key: crypto.randomUUID(), value: 'Task 2' },
      { key: crypto.randomUUID(), value: 'Task 3' },
    ],
    startDate: '01/2014',
    endDate: '01/2018',
    key: crypto.randomUUID(),
  },
];

export default function WorkExperience() {
  const [positions, setPositions] = useState(defaultPositions);

  const listOfPositions = positions.map((position) => {
    return <Position key={position.key} {...position} />;
  });
  return (
    <section className="mt-6">
      <h2 className="font text-3xl font-bold text-slate-900">WORK EXPERIENCE</h2>
      {listOfPositions}
    </section>
  );
}

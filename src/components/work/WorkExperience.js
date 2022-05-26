import { useState } from 'react';
import { Position } from './index';

const defaultPositions = [
  {
    title: 'Analyst',
    company: 'Aon',
    responsibilities: [
      { id: crypto.randomUUID(), value: 'Task 1' },
      { id: crypto.randomUUID(), value: 'Task 2' },
      { id: crypto.randomUUID(), value: 'Task 3' },
    ],
    startDate: '01/2018',
    endDate: '01/2022',
    id: crypto.randomUUID(),
  },
  {
    title: 'Administrator',
    company: 'IMB',
    responsibilities: [
      { id: crypto.randomUUID(), value: 'Task 1' },
      { id: crypto.randomUUID(), value: 'Task 2' },
      { id: crypto.randomUUID(), value: 'Task 3' },
    ],
    startDate: '01/2014',
    endDate: '01/2018',
    id: crypto.randomUUID(),
  },
];

export default function WorkExperience() {
  const [positions, setPositions] = useState(defaultPositions);

  function handlePositionEdit(positionId, nextPosition) {
    const nextPositions = positions.map((p) => {
      if (p.id === positionId) {
        return nextPosition;
      }
      return p;
    });
    setPositions(nextPositions);
  }

  const listOfPositions = positions.map((position) => {
    return <Position key={position.id} onPositionEdit={handlePositionEdit} position={position} />;
  });

  return (
    <section className="mt-6">
      <h2 className="font text-3xl font-bold text-slate-900">WORK EXPERIENCE</h2>
      {listOfPositions}
    </section>
  );
}

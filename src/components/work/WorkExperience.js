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
  const [newPositionAdded, setNewPositionAdded] = useState(false);

  function handlePositionEdit(positionId, nextPosition) {
    const nextPositions = positions.map((p) => {
      if (p.id === positionId) {
        return nextPosition;
      }
      return p;
    });
    setPositions(nextPositions);
  }

  function onPositionAdd() {
    const positionToAdd = {
      title: 'Title/Position',
      company: 'Workplace/Company',
      responsibilities: [{ id: crypto.randomUUID(), value: '' }],
      startDate: '',
      endDate: '',
      id: crypto.randomUUID(),
    };

    const nextPositions = [...positions, positionToAdd];
    setPositions(nextPositions);

    if (!newPositionAdded) {
      setNewPositionAdded(true);
    }
  }

  const listOfPositions = positions.map((position, index) => {
    return (
      <Position
        key={position.id}
        onPositionEdit={handlePositionEdit}
        onPositionAdd={onPositionAdd}
        position={position}
        defaultEditing={index === positions.length - 1 && newPositionAdded}
      />
    );
  });

  return (
    <section className="mt-6">
      <h2 className="font text-3xl font-bold text-slate-900">WORK EXPERIENCE</h2>
      {listOfPositions}
    </section>
  );
}

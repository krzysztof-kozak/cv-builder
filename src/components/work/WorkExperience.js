import { useState } from 'react';
import { Position } from './index';

const defaultPosition = {
  title: '',
  company: '',
  responsibilities: [],
  startDate: '',
  endDate: '',
  id: crypto.randomUUID(),
};

export default function WorkExperience() {
  const [positions, setPositions] = useState([defaultPosition]);
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

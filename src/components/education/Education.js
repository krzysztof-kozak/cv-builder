import { useState } from 'react';
import { Institution } from './index';

const defaultInstitution = {
  studyProgram: '',
  placeOfEducation: '',
  courses: [],
  startDate: '',
  endDate: '',
  id: crypto.randomUUID(),
};

export default function Education() {
  const [institutions, setInstitutions] = useState([defaultInstitution]);
  const [newInstitutionAdded, setNewInstitutionAdded] = useState(false);

  function handleInstitutionEdit(positionId, nextPosition) {
    const nextInstitutions = institutions.map((ins) => {
      if (ins.id === positionId) {
        return nextPosition;
      }
      return ins;
    });
    setInstitutions(nextInstitutions);
  }

  function handleInstitutionAdd() {
    const institutionToAdd = {
      studyProgram: 'Study Program',
      placeOfEducation: 'Institution / Place of Education',
      courses: [{ id: crypto.randomUUID(), value: '' }],
      startDate: '',
      endDate: '',
      id: crypto.randomUUID(),
    };

    const nextInstitution = [...institutions, institutionToAdd];
    setInstitutions(nextInstitution);

    if (!newInstitutionAdded) {
      setNewInstitutionAdded(true);
    }
  }

  const listOfInstitutions = institutions.map((institution, index) => {
    return (
      <Institution
        key={institution.id}
        institution={institution}
        onInstitutionEdit={handleInstitutionEdit}
        onInstitutionAdd={handleInstitutionAdd}
        defaultEditing={index === institutions.length - 1 && newInstitutionAdded}
      />
    );
  });

  return (
    <section className="mt-6">
      <h2 className="font text-3xl font-bold text-slate-900">EDUCATION</h2>
      {listOfInstitutions}
    </section>
  );
}

import { useState } from 'react';
import { Institution } from './index';

export default function Education() {
  const [institutions, setInstitutions] = useState([]);

  const listOfInstitutions = institutions.map((institution) => {
    return <Institution key={institution.id} institution={institution} />;
  });

  return (
    <section className="mt-6">
      <h2 className="font text-3xl font-bold text-slate-900">EDUCATION</h2>
      {listOfInstitutions}
    </section>
  );
}

import { Position } from './index';

export default function WorkExperience() {
  return (
    <section className="mt-6">
      <h2 className="font text-3xl font-bold text-slate-900">WORK EXPERIENCE</h2>

      <Position
        title="Analyst"
        responsibilities={['Task 1', 'Task 2', 'Task 3']}
        startDate="01/2018"
        endDate="01/2022"
      />

      <Position
        title="Administrator"
        responsibilities={['Task 1', 'Task 2', 'Task 3']}
        startDate="01/2014"
        endDate="01/2018"
      />
    </section>
  );
}

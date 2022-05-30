import { Toolbar, Optimizer, PersonalInfo, WorkExperience, Education, PersonalProjects } from './components';

function App() {
  return (
    <div className="bg-slate-700">
      <main className="container mx-auto flow-root min-h-screen">
        <Toolbar />
        <section className="container mt-8 flex items-center justify-between">
          <input
            value="My Resume"
            readOnly
            className="border-b-2 border-transparent bg-inherit text-2xl text-slate-50 hover:text-slate-400 focus:border-b-2 focus:border-emerald-400 focus:text-slate-400 focus:underline-offset-8 focus:outline-none"
          />
          <Optimizer />
        </section>

        <section className="mt-8 flex min-h-[1000px] gap-16 bg-slate-50 p-10 shadow-2xl outline outline-1 outline-red-700">
          <div className="max-w-xs flex-none basis-1/3">
            <h2>Left-side layout</h2>
            <p>Hello, this is left side flex child</p>
          </div>

          <div className="grow">
            <PersonalInfo />
            <WorkExperience />
            <Education />
            <PersonalProjects />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

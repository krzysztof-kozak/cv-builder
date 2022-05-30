import { Toolbar, Optimizer, PersonalInfo, WorkExperience, Education, PersonalProjects } from './components';

function App() {
  return (
    <div className="bg-slate-700">
      <main className="container mx-auto flow-root min-h-screen max-w-6xl">
        <Toolbar />
        <section className="container mt-8 flex items-center justify-between">
          <input
            value="My Resume"
            readOnly
            className="border-b-2 border-transparent bg-inherit text-2xl text-slate-50 hover:text-slate-400 focus:border-b-2 focus:border-emerald-400 focus:text-slate-400 focus:underline-offset-8 focus:outline-none"
          />
          <Optimizer />
        </section>

        <section className="mx-auto mt-8 flex min-h-[1000px] max-w-6xl gap-16 bg-slate-50 p-10 shadow-2xl">
          <div className="flex max-w-xs flex-none basis-1/3 flex-wrap content-start gap-14 px-8">
            <div className="mx-auto h-48 w-48 rounded-full border border-emerald-600 bg-gradient-to-br from-slate-200 to-slate-100"></div>

            <div className="basis-full">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">Skills</h2>
              <ul className="flex max-w-prose flex-wrap gap-2">
                <li className="rounded-md bg-gray-500 px-2 py-1 text-sm text-stone-100">git</li>
                <li className="rounded-md bg-gray-500 px-2 py-1 text-sm text-stone-100">javascript</li>
                <li className="rounded-md bg-gray-500 px-2 py-1 text-sm text-stone-100">react</li>
                <li className="rounded-md bg-gray-500 px-2 py-1 text-sm text-stone-100">css</li>
                <li className="rounded-md bg-gray-500 px-2 py-1 text-sm text-stone-100">tailwind</li>
              </ul>
            </div>

            <div className="basis-full">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">Languages</h2>
              <ul className="flex flex-wrap gap-2 text-lg">
                <li className="basis-full">
                  <p className="font-semibold leading-5 text-slate-900">English</p>
                  <p className="text-base italic  text-emerald-600">Full Professional Proficiency</p>
                </li>
                <li className="basis-full">
                  <p className="font-semibold leading-5 text-slate-900">German</p>
                  <p className="text-base italic text-emerald-600">Native or Bilingual Proficiency</p>
                </li>
                <li className="basis-full">
                  <p className="font-semibold leading-5 text-slate-900">Spanish</p>
                  <p className="text-base italic text-emerald-600">Limited Working Proficiency</p>
                </li>
              </ul>
            </div>

            <div className="basis-full">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">Interests</h2>
              <ul className="flex max-w-prose flex-wrap gap-2">
                <li className="rounded-md border border-gray-500 px-2 py-1 text-sm">football</li>
                <li className="rounded-md border border-gray-500 px-2 py-1 text-sm">cycling</li>
                <li className="rounded-md border border-gray-500 px-2 py-1 text-sm">programming</li>
                <li className="rounded-md border border-gray-500 px-2 py-1 text-sm">cooking</li>
              </ul>
            </div>
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

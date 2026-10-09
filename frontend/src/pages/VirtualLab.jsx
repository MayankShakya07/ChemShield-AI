
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const experiments = [
  {
    id: 1,
    name: 'Acid-Base Neutralization',
    description: 'Learn about the neutralization of an acid and a base.',
    chemicalA: 'HCl',
    chemicalB: 'NaOH',
    result: 'Neutralization: sodium chloride and water',
    equation: 'HCl + NaOH → NaCl + H₂O',
    category: 'Acid-base chemistry',
    color: 'teal',
  },
  {
    id: 2,
    name: 'Acetic Acid Neutralization',
    description: 'Explore an example of acid-base chemistry.',
    chemicalA: 'CH₃COOH',
    chemicalB: 'NaOH',
    result: 'Sodium acetate and water',
    equation: 'CH₃COOH + NaOH → CH₃COONa + H₂O',
    category: 'Acid-base chemistry',
    color: 'blue',
  },
  {
    id: 3,
    name: 'Custom Experiment',
    description: 'Explore the layout for a future custom experiment.',
    chemicalA: 'Select',
    chemicalB: 'Select',
    result: 'No outcome configured',
    equation: 'No reaction equation configured',
    category: 'Custom workspace',
    color: 'violet',
  },
]

function VirtualLab() {
  const [selectedExperiment, setSelectedExperiment] = useState(null)
  const [running, setRunning] = useState(false)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    if (!running) return

    const timer = setTimeout(() => {
      setRunning(false)
      setCompleted(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [running])

  const startExperiment = (experiment) => {
    setSelectedExperiment(experiment)
    setRunning(false)
    setCompleted(false)
  }

  const runExperiment = () => {
    if (!selectedExperiment || running) return

    setCompleted(false)
    setRunning(true)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-800">
                <FlaskIcon />
                Virtual Laboratory
              </div>

              <h1 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Experiment Simulator
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Explore example chemistry concepts in an interactive
                educational workspace. Review the information and use the
                controls to see the demonstration state change.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#experiments"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                >
                  Explore Experiments <span aria-hidden="true">↓</span>
                </a>

                <Link
                  to="/chemicals"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-800"
                >
                  Chemical Compatibility
                </Link>
              </div>
            </div>

            <div className="hidden h-44 w-44 items-center justify-center rounded-full bg-teal-50 sm:flex lg:h-52 lg:w-52">
              <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] border border-teal-100 bg-white text-teal-700 shadow-sm lg:h-36 lg:w-36">
                <FlaskIcon large />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 border-t border-slate-200 bg-slate-50 sm:grid-cols-3">
            <FeatureItem
              icon="🧪"
              title="Example Experiments"
              detail="Explore selected chemistry concepts"
            />
            <FeatureItem
              icon="⚙️"
              title="Interactive Controls"
              detail="Start and reset demonstrations"
            />
            <FeatureItem
              icon="🛡️"
              title="Safety First"
              detail="Educational use only"
            />
          </div>
        </section>

        <section id="experiments" className="mt-10 scroll-mt-24">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                Experiment Library
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Choose an Experiment
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Select a card to load its demonstration in the workspace.
              </p>
            </div>

            <span className="w-fit rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600">
              {experiments.length} demo options
            </span>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {experiments.map((experiment) => {
              const isSelected = selectedExperiment?.id === experiment.id

              return (
                <button
                  key={experiment.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => startExperiment(experiment)}
                  className={`group rounded-2xl border p-5 text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-6 ${
                    isSelected
                      ? 'border-teal-400 bg-teal-50/50 ring-2 ring-teal-100'
                      : 'border-slate-200 bg-white hover:border-teal-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-100 bg-teal-50 text-2xl">
                      🧪
                    </div>

                    {isSelected ? (
                      <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800">
                        Selected
                      </span>
                    ) : (
                      <span className="text-lg text-slate-300 transition group-hover:text-teal-600">
                        ↗
                      </span>
                    )}
                  </div>

                  <p className="mt-5 text-xs font-bold uppercase tracking-wider text-teal-700">
                    {experiment.category}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    {experiment.name}
                  </h3>

                  <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">
                    {experiment.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-sm font-semibold text-slate-600">
                      Open workspace
                    </span>
                    <span className="font-semibold text-teal-700">
                      →
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </section>

        <section className="mt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                Interactive Workspace
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Laboratory Console
              </h2>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Frontend demo mode
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col justify-between gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:p-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Current workspace
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  {selectedExperiment
                    ? selectedExperiment.name
                    : 'No experiment selected'}
                </h3>
              </div>

              {selectedExperiment && (
                <button
                  type="button"
                  onClick={() => {
                    setRunning(false)
                    setCompleted(false)
                  }}
                  className="inline-flex w-fit items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-800"
                >
                  <ResetIcon />
                  Reset Demo
                </button>
              )}
            </div>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="border-b border-slate-200 p-4 sm:p-6 lg:border-b-0 lg:border-r">
                <div className="relative flex min-h-[390px] flex-col items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-8">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        'radial-gradient(#cbd5e1 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />

                  <div className="relative z-10 w-full">
                    {!selectedExperiment ? (
                      <div className="flex flex-col items-center py-10 text-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-200 bg-white text-4xl shadow-sm">
                          🔬
                        </div>

                        <h3 className="mt-6 text-lg font-bold">
                          Your workspace is ready
                        </h3>

                        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
                          Choose an experiment above to display its example
                          chemicals and demonstration controls.
                        </p>

                        <a
                          href="#experiments"
                          className="mt-5 text-sm font-semibold text-teal-700 hover:text-teal-900"
                        >
                          Browse experiments →
                        </a>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <div className="mb-7 text-center">
                          <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
                            {selectedExperiment.category}
                          </span>
                        </div>

                        <div className="flex w-full flex-wrap items-center justify-center gap-4 sm:gap-6">
                          <ChemicalTube
                            formula={selectedExperiment.chemicalA}
                            label="Chemical A"
                            active={running}
                          />

                          <span className="text-2xl font-semibold text-slate-400">
                            +
                          </span>

                          <ChemicalTube
                            formula={selectedExperiment.chemicalB}
                            label="Chemical B"
                            active={running}
                          />
                        </div>

                        <div className="my-6 flex w-full max-w-sm items-center gap-3">
                          <div className="h-px flex-1 bg-slate-200" />
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Demo status
                          </span>
                          <div className="h-px flex-1 bg-slate-200" />
                        </div>

                        {running && (
                          <div
                            role="status"
                            className="w-full max-w-sm rounded-xl border border-teal-200 bg-white p-5 text-center shadow-sm"
                          >
                            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-teal-100 border-t-teal-700" />
                            <p className="mt-4 font-semibold text-teal-800">
                              Running visual demonstration…
                            </p>
                            <p className="mt-1 text-xs leading-5 text-slate-500">
                              This animation does not model an actual chemical
                              reaction.
                            </p>
                          </div>
                        )}

                        {completed && !running && (
                          <div
                            role="status"
                            className="w-full max-w-sm rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-center"
                          >
                            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-800">
                              ✓
                            </div>
                            <h4 className="mt-3 font-bold text-emerald-900">
                              Demonstration Completed
                            </h4>
                            <p className="mt-2 text-sm leading-6 text-emerald-800">
                              {selectedExperiment.id === 3
                                ? 'The custom workspace is a layout preview; no custom chemical simulation is configured.'
                                : 'The interface demonstration has finished. This is not a verified prediction of reaction behavior.'}
                            </p>
                          </div>
                        )}

                        {!running && !completed && (
                          <p className="max-w-sm text-center text-sm leading-6 text-slate-500">
                            Start the demo to see its interface state change.
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 lg:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                  Control Panel
                </p>
                <h3 className="mt-2 text-xl font-extrabold">
                  Simulation Controls
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Review the selected demo and its example information.
                </p>

                {selectedExperiment ? (
                  <div className="mt-7 space-y-5">
                    <ControlRow
                      title="Chemical A"
                      value={selectedExperiment.chemicalA}
                    />

                    <ControlRow
                      title="Chemical B"
                      value={selectedExperiment.chemicalB}
                    />

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Example equation
                      </p>
                      <p className="mt-3 break-words text-sm font-semibold leading-7 text-slate-800">
                        {selectedExperiment.equation}
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Example outcome
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
                        {selectedExperiment.result}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={runExperiment}
                      disabled={running}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {running ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                          Running Demo…
                        </>
                      ) : (
                        <>
                          <PlayIcon />
                          Run Visual Demo
                        </>
                      )}
                    </button>

                    <p className="text-xs leading-5 text-slate-500">
                      The run button only changes the interface state. No
                      chemical process is simulated or performed.
                    </p>

                    <Link
                      to="/chemicals"
                      className="flex w-full items-center justify-center rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-800"
                    >
                      Check Chemical Compatibility
                    </Link>
                  </div>
                ) : (
                  <div className="mt-7 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                      ⚙️
                    </div>
                    <h4 className="mt-4 font-bold">Controls unavailable</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Select one of the experiment cards to view its example
                      chemicals, equation, outcome, and demo controls.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
              ⚠️
            </div>
            <div>
              <h2 className="font-bold text-amber-950">
                Virtual Laboratory Safety Notice
              </h2>
              <p className="mt-2 text-sm leading-7 text-amber-900/80">
                This page is a frontend educational demonstration, not a
                chemical simulator or laboratory authorization tool. Do not
                physically mix chemicals based on the displayed examples.
                Consult current Safety Data Sheets, approved procedures, and
                qualified laboratory personnel before any laboratory work.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-10 border-t border-slate-200 py-6 text-center text-xs leading-6 text-slate-500">
          ChemShield AI · Virtual Laboratory Demo
          <br />
          Example interface only · No real chemical process is simulated
        </footer>
      </main>
    </div>
  )
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-700 text-lg font-extrabold text-white">
            C
          </div>
          <div className="min-w-0">
            <span className="block truncate text-base font-extrabold tracking-tight sm:text-lg">
              ChemShield AI
            </span>
            <span className="block text-xs text-slate-500">
              Virtual Laboratory
            </span>
          </div>
        </Link>

        <Link
          to="/dashboard"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-800 sm:px-4"
        >
          <span aria-hidden="true">←</span>
          Dashboard
        </Link>
      </div>
    </nav>
  )
}

function FeatureItem({ icon, title, detail }) {
  return (
    <div className="flex items-start gap-3 border-b border-slate-200 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="mt-1 text-xs leading-5 text-slate-500">{detail}</p>
      </div>
    </div>
  )
}

function ChemicalTube({ formula, label, active }) {
  return (
    <div className="w-24 text-center sm:w-28">
      <div className="relative mx-auto flex h-32 w-20 items-end justify-center overflow-hidden rounded-b-2xl rounded-t-md border-2 border-slate-300 bg-white p-1 shadow-sm">
        <div
          className={`absolute inset-x-1 bottom-1 flex h-2/5 items-center justify-center rounded-b-xl bg-teal-100 text-sm font-bold text-teal-800 transition-all duration-700 ${
            active ? 'h-3/5' : ''
          }`}
        >
          {formula}
        </div>
        <div className="absolute inset-x-0 top-0 h-3 border-b border-slate-300 bg-slate-100" />
      </div>
      <p className="mt-3 break-words text-sm font-bold text-slate-800">
        {formula}
      </p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  )
}

function ControlRow({ title, value }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-slate-600">{title}</span>
        <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-sm font-bold text-slate-800">
          {value}
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full w-2/3 rounded-full bg-teal-600" />
      </div>
    </div>
  )
}

function FlaskIcon({ large = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={large ? 'h-16 w-16' : 'h-5 w-5'}
    >
      <path
        d="M9 3h6m-5 0v7l-5.5 8.2A1.8 1.8 0 0 0 6 21h12a1.8 1.8 0 0 0 1.5-2.8L14 10V3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7.5 16h9" strokeLinecap="round" />
    </svg>
  )
}

function ResetIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path
        d="M3 12a9 9 0 1 0 2.6-6.4L3 8m0-5v5h5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M7 4.8a1 1 0 0 1 1.5-.86l11 7.2a1 1 0 0 1 0 1.72l-11 7.2A1 1 0 0 1 7 19.2V4.8Z" />
    </svg>
  )
}

export default VirtualLab

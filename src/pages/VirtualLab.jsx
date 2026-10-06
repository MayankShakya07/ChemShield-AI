import { useState } from 'react'
import { Link } from 'react-router-dom'

const experiments = [
  {
    id: 1,
    name: 'Acid-Base Neutralization',
    description: 'Explore an acid-base neutralization experiment.',
    chemicalA: 'HCl',
    chemicalB: 'NaOH',
    result: 'Neutralization reaction',
  },
  {
    id: 2,
    name: 'Acetic Acid Neutralization',
    description: 'Explore the reaction between acetic acid and a base.',
    chemicalA: 'CH₃COOH',
    chemicalB: 'NaOH',
    result: 'Sodium acetate + water',
  },
  {
    id: 3,
    name: 'Custom Experiment',
    description: 'Create a virtual experiment using selected chemicals.',
    chemicalA: 'Select',
    chemicalB: 'Select',
    result: 'Waiting for chemicals',
  },
]

function VirtualLab() {
  const [selectedExperiment, setSelectedExperiment] = useState(null)
  const [running, setRunning] = useState(false)
  const [completed, setCompleted] = useState(false)

  const startExperiment = (experiment) => {
    setSelectedExperiment(experiment)
    setRunning(false)
    setCompleted(false)
  }

  const runExperiment = () => {
    if (!selectedExperiment) return

    setRunning(true)
    setCompleted(false)

    setTimeout(() => {
      setRunning(false)
      setCompleted(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="border-b border-slate-800">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link to="/" className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 font-bold text-slate-950">
              C
            </div>

            <div>
              <h1 className="text-xl font-bold">
                ChemShield AI
              </h1>

              <p className="text-xs text-slate-500">
                Virtual Laboratory
              </p>
            </div>

          </Link>

          <Link
            to="/dashboard"
            className="text-sm text-slate-400 hover:text-cyan-400"
          >
            ← Dashboard
          </Link>

        </div>

      </nav>


      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* Header */}
        <section>

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Virtual Laboratory
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Experiment Simulator
          </h1>

          <p className="mt-3 max-w-3xl text-slate-400">
            Explore chemistry experiments in a safe virtual environment
            before performing laboratory work under proper supervision.
          </p>

        </section>


        {/* Experiment Selection */}
        <section className="mt-10">

          <h2 className="text-2xl font-bold">
            Choose an Experiment
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">

            {experiments.map((experiment) => (

              <button
                key={experiment.id}
                onClick={() => startExperiment(experiment)}
                className={`rounded-2xl border p-6 text-left transition ${
                  selectedExperiment?.id === experiment.id
                    ? 'border-cyan-500 bg-cyan-500/5'
                    : 'border-slate-800 bg-slate-900 hover:border-cyan-500/40'
                }`}
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-2xl">
                  🧪
                </div>

                <h3 className="mt-5 font-bold">
                  {experiment.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {experiment.description}
                </p>

              </button>

            ))}

          </div>

        </section>


        {/* Laboratory */}
        <section className="mt-10">

          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">

            {/* Lab Header */}
            <div className="border-b border-slate-800 p-6">

              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

                <div>

                  <p className="text-xs uppercase tracking-widest text-cyan-400">
                    Laboratory Workspace
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    {selectedExperiment
                      ? selectedExperiment.name
                      : 'Select an experiment'}
                  </h2>

                </div>

                <div className="rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-400">
                  ● Simulation Mode
                </div>

              </div>

            </div>


            {/* Lab Content */}
            <div className="grid lg:grid-cols-2">

              {/* Experiment Area */}
              <div className="min-h-[500px] border-b border-slate-800 p-8 lg:border-b-0 lg:border-r">

                <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950 p-8">

                  {!selectedExperiment ? (

                    <>

                      <div className="text-6xl">
                        🔬
                      </div>

                      <h3 className="mt-6 text-xl font-bold">
                        Laboratory is ready
                      </h3>

                      <p className="mt-3 max-w-md text-center text-sm leading-6 text-slate-500">
                        Choose an experiment above to load the virtual
                        laboratory.
                      </p>

                    </>

                  ) : (

                    <>

                      <div className="flex items-center gap-5">

                        <ChemicalTube
                          formula={selectedExperiment.chemicalA}
                          label="Chemical A"
                        />

                        <div className="text-3xl text-cyan-400">
                          +
                        </div>

                        <ChemicalTube
                          formula={selectedExperiment.chemicalB}
                          label="Chemical B"
                        />

                      </div>


                      {running && (

                        <div className="mt-10 text-center">

                          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400" />

                          <p className="mt-4 text-sm text-cyan-400">
                            Running virtual experiment...
                          </p>

                        </div>

                      )}


                      {completed && !running && (

                        <div className="mt-10 w-full rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-center">

                          <div className="text-4xl">
                            ✓
                          </div>

                          <h3 className="mt-3 font-bold text-emerald-400">
                            Experiment Completed
                          </h3>

                          <p className="mt-2 text-sm text-slate-400">
                            {selectedExperiment.result}
                          </p>

                        </div>

                      )}

                    </>

                  )}

                </div>

              </div>


              {/* Controls */}
              <div className="p-8">

                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  Experiment Controls
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Simulation Panel
                </h3>


                {selectedExperiment ? (

                  <div className="mt-8 space-y-6">

                    {/* Chemical A */}
                    <ControlRow
                      title="Chemical A"
                      value={selectedExperiment.chemicalA}
                    />

                    {/* Chemical B */}
                    <ControlRow
                      title="Chemical B"
                      value={selectedExperiment.chemicalB}
                    />

                    {/* Reaction */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">

                      <p className="text-xs uppercase tracking-widest text-slate-600">
                        Expected Outcome
                      </p>

                      <p className="mt-3 font-semibold text-slate-300">
                        {selectedExperiment.result}
                      </p>

                    </div>


                    <button
                      onClick={runExperiment}
                      disabled={running}
                      className="w-full rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-slate-950 hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {running ? 'Running Experiment...' : '▶ Run Experiment'}
                    </button>


                    <Link
                      to="/chemicals"
                      className="block w-full rounded-xl border border-slate-700 px-6 py-4 text-center font-semibold text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
                    >
                      Check Chemical Compatibility
                    </Link>

                  </div>

                ) : (

                  <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950 p-6">

                    <p className="text-sm leading-7 text-slate-500">
                      Select an experiment to view its chemicals,
                      expected outcome and simulation controls.
                    </p>

                  </div>

                )}

              </div>

            </div>

          </div>

        </section>


        {/* Safety Notice */}
        <section className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">

          <div className="flex gap-4">

            <div className="text-2xl">
              ⚠️
            </div>

            <div>

              <h2 className="font-bold text-amber-400">
                Virtual Laboratory Notice
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                This is an educational simulation. It does not replace
                laboratory supervision, approved procedures or official
                chemical safety documentation.
              </p>

            </div>

          </div>

        </section>

      </main>

    </div>
  )
}


/* Chemical Tube */
function ChemicalTube({ formula, label }) {
  return (
    <div className="text-center">

      <div className="mx-auto flex h-32 w-20 items-end justify-center rounded-b-3xl border-2 border-slate-700 bg-slate-900 pb-5">

        <div className="flex h-16 w-14 items-center justify-center rounded-b-2xl bg-cyan-500/20 text-sm font-bold text-cyan-400">
          {formula}
        </div>

      </div>

      <p className="mt-3 text-xs text-slate-500">
        {label}
      </p>

    </div>
  )
}


/* Control Row */
function ControlRow({ title, value }) {
  return (
    <div>

      <div className="mb-2 flex items-center justify-between">

        <span className="text-sm text-slate-400">
          {title}
        </span>

        <span className="text-sm font-semibold text-cyan-400">
          {value}
        </span>

      </div>

      <div className="h-2 rounded-full bg-slate-800">

        <div className="h-2 w-2/3 rounded-full bg-cyan-500" />

      </div>

    </div>
  )
}

export default VirtualLab
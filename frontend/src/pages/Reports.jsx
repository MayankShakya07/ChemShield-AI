import { Link } from 'react-router-dom'

function Reports() {
  const reports = [
    {
      id: 1,
      experiment: 'Acid-Base Neutralization',
      chemicals: 'HCl + NaOH',
      date: '18 Aug 2026',
      status: 'Completed',
      risk: 'Moderate',
    },
    {
      id: 2,
      experiment: 'Chemical Compatibility Analysis',
      chemicals: 'H₂O₂ + NaCl',
      date: '17 Aug 2026',
      status: 'Completed',
      risk: 'Low',
    },
    {
      id: 3,
      experiment: 'Virtual Laboratory Experiment',
      chemicals: 'CH₃COOH + NaOH',
      date: '15 Aug 2026',
      status: 'Completed',
      risk: 'Moderate',
    },
  ]

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
                Experiment Reports
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
            Laboratory Records
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Experiment Reports
          </h1>

          <p className="mt-3 max-w-3xl text-slate-400">
            Review your previous experiments, safety checks and laboratory
            analysis records.
          </p>

        </section>


        {/* Statistics */}
        <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <Stat
            icon="📄"
            value="18"
            label="Total Reports"
          />

          <Stat
            icon="🧪"
            value="24"
            label="Experiments"
          />

          <Stat
            icon="🛡️"
            value="38"
            label="Safety Checks"
          />

          <Stat
            icon="✓"
            value="100%"
            label="Completed"
          />

        </section>


        {/* Reports List */}
        <section className="mt-10">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h2 className="text-2xl font-bold">
                Recent Reports
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Your latest laboratory activity.
              </p>

            </div>

            <button
              onClick={() =>
                alert('Report generation will be connected to the AI backend later.')
              }
              className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
            >
              + Generate Report
            </button>

          </div>


          <div className="mt-6 space-y-4">

            {reports.map((report) => (

              <ReportCard
                key={report.id}
                report={report}
              />

            ))}

          </div>

        </section>


        {/* AI Report Generator */}
        <section className="mt-10">

          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8">

            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                  AI Report Generator
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  Turn experiment data into a report
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  ChemShield can use experiment information to generate a
                  structured laboratory report containing aim, theory,
                  observations, result and precautions.
                </p>

                <button
                  onClick={() =>
                    alert('AI report generation will be connected to Pari’s AI service later.')
                  }
                  className="mt-6 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
                >
                  Generate AI Report →
                </button>

              </div>


              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

                <ReportSection
                  number="01"
                  title="Aim"
                  text="Describe the purpose of the experiment."
                />

                <ReportSection
                  number="02"
                  title="Theory"
                  text="Explain the scientific principle involved."
                />

                <ReportSection
                  number="03"
                  title="Observation"
                  text="Record important experimental observations."
                />

                <ReportSection
                  number="04"
                  title="Result"
                  text="Summarize the experimental outcome."
                />

                <ReportSection
                  number="05"
                  title="Precautions"
                  text="List important laboratory safety measures."
                />

              </div>

            </div>

          </div>

        </section>


        {/* Navigation */}
        <section className="mt-10 flex flex-wrap gap-3">

          <Link
            to="/chemicals"
            className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
          >
            Analyze Chemicals
          </Link>

          <Link
            to="/virtual-lab"
            className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
          >
            Virtual Lab
          </Link>

          <Link
            to="/ai-tutor"
            className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            AI Tutor →
          </Link>

        </section>

      </main>


      <footer className="mt-16 border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        ChemShield AI — Laboratory Experiment Management
      </footer>

    </div>
  )
}


/* Statistics */
function Stat({ icon, value, label }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="text-2xl">
        {icon}
      </div>

      <p className="mt-4 text-3xl font-bold">
        {value}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        {label}
      </p>

    </div>
  )
}


/* Report Card */
function ReportCard({ report }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500/30">

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-xl">
            📄
          </div>

          <div>

            <h3 className="font-bold">
              {report.experiment}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {report.chemicals}
            </p>

            <p className="mt-2 text-xs text-slate-600">
              {report.date}
            </p>

          </div>

        </div>


        <div className="flex flex-wrap items-center gap-3">

          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            {report.status}
          </span>

          <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
            {report.risk} Risk
          </span>

          <button
            onClick={() =>
              alert(`Opening report: ${report.experiment}`)
            }
            className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
          >
            View Report
          </button>

        </div>

      </div>

    </div>
  )
}


/* Report Section */
function ReportSection({ number, title, text }) {
  return (
    <div className="flex gap-4 border-b border-slate-800 py-4 last:border-b-0">

      <span className="text-xs font-bold text-cyan-400">
        {number}
      </span>

      <div>

        <p className="font-semibold">
          {title}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          {text}
        </p>

      </div>

    </div>
  )
}

export default Reports
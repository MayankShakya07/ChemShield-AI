
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

  const handleGenerateReport = () => {
    alert(
      'Report generation is a demo feature. Connect the backend to generate real reports.'
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-700 font-bold text-white shadow-sm">
              C
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                ChemShield AI
              </h1>
              <p className="text-xs text-slate-500">Experiment Reports</p>
            </div>
          </Link>

          <Link
            to="/dashboard"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-teal-700"
          >
            <span aria-hidden="true">← </span>
            Dashboard
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {/* Page heading */}
        <section>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700">
            <span className="h-2 w-2 rounded-full bg-teal-600" />
            LABORATORY RECORDS
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Experiment Reports
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Review experiment records, explore safety-check summaries, and
                organize your laboratory learning activities.
              </p>
            </div>

            <button
              type="button"
              onClick={handleGenerateReport}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-600/20"
            >
              <span aria-hidden="true">＋</span>
              Generate Report
            </button>
          </div>
        </section>

        {/* Statistics */}
        <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat
            icon="📄"
            value="18"
            label="Total Reports"
            detail="Recorded reports"
          />

          <Stat
            icon="🧪"
            value="24"
            label="Experiments"
            detail="Experiment records"
          />

          <Stat
            icon="🛡️"
            value="38"
            label="Safety Checks"
            detail="Safety-check records"
          />

          <Stat
            icon="✓"
            value="100%"
            label="Completion"
            detail="Displayed demo statistic"
          />
        </section>

        <p className="mt-3 text-xs leading-5 text-slate-500">
          Dashboard statistics are illustrative demo data and are not calculated
          from a connected database.
        </p>

        {/* Recent reports */}
        <section className="mt-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Recent Reports
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Example laboratory activity records.
              </p>
            </div>

            <span className="w-fit rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
              {reports.length} sample reports
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {reports.map((report) => (
              <ReportCard
                key={report.id}
                report={report}
              />
            ))}
          </div>
        </section>

        {/* Report generator */}
        <section className="mt-10 overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="p-5 sm:p-8 lg:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl">
                📑
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-widest text-teal-700">
                AI REPORT GENERATOR
              </p>

              <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                Turn experiment data into a structured report
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Organize laboratory work into sections for the aim, theory,
                observations, results, and precautions. Live report generation
                will require a connected backend.
              </p>

              <button
                type="button"
                onClick={handleGenerateReport}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-600/20"
              >
                Try Report Generator
                <span aria-hidden="true">→</span>
              </button>

              <p className="mt-3 text-xs text-slate-500">
                Preview only · No document is generated yet
              </p>
            </div>

            <div className="border-t border-slate-200 bg-slate-50 p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-bold text-slate-900">
                    Report structure
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Example report outline
                  </p>
                </div>

                <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500">
                  5 sections
                </span>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white px-4 sm:px-5">
                <ReportSection
                  number="01"
                  title="Aim"
                  text="Describe the purpose of the experiment."
                />

                <ReportSection
                  number="02"
                  title="Theory"
                  text="Explain the scientific principles involved."
                />

                <ReportSection
                  number="03"
                  title="Observation"
                  text="Record relevant observations and measurements."
                />

                <ReportSection
                  number="04"
                  title="Result"
                  text="Summarize the outcome based on the recorded data."
                />

                <ReportSection
                  number="05"
                  title="Precautions"
                  text="Document the relevant laboratory safety measures."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick navigation */}
        <section className="mt-10">
          <h2 className="text-lg font-bold text-slate-900">
            Continue working
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Jump to another ChemShield feature.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <QuickLink to="/chemicals" secondary>
              Analyze Chemicals
            </QuickLink>

            <QuickLink to="/virtual-lab" secondary>
              Virtual Lab
            </QuickLink>

            <QuickLink to="/ai-tutor">
              AI Tutor <span aria-hidden="true">→</span>
            </QuickLink>
          </div>
        </section>
      </main>

      <footer className="mt-14 border-t border-slate-200 bg-white px-4 py-7 text-center text-sm text-slate-500">
        <p className="font-semibold text-slate-700">ChemShield AI</p>
        <p className="mt-1">Laboratory Experiment Management</p>
      </footer>
    </div>
  )
}

/* Statistics card */
function Stat({ icon, value, label, detail }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-xl">
          {icon}
        </div>

        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
          Demo
        </span>
      </div>

      <p className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-sm font-semibold text-slate-700">{label}</p>

      <p className="mt-1 text-xs text-slate-500">{detail}</p>
    </article>
  )
}

/* Report card */
function ReportCard({ report }) {
  const riskStyles =
    report.risk === 'Low'
      ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
      : report.risk === 'High'
        ? 'border-rose-200 bg-rose-50 text-rose-700'
        : 'border-amber-200 bg-amber-50 text-amber-800'

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-teal-200 hover:shadow-md sm:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-xl">
            📄
          </div>

          <div className="min-w-0">
            <h3 className="font-semibold leading-6 text-slate-900">
              {report.experiment}
            </h3>

            <p className="mt-1 break-words text-sm text-slate-600">
              {report.chemicals}
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Example date: {report.date}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
            {report.status}
          </span>

          <span
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${riskStyles}`}
          >
            {report.risk} Risk
          </span>

          <button
            type="button"
            onClick={() =>
              alert(
                `This is a sample report. Live report details are not connected yet: ${report.experiment}`
              )
            }
            className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-teal-600 hover:text-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-600/10"
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  )
}

/* Report outline row */
function ReportSection({ number, title, text }) {
  return (
    <div className="flex gap-4 border-b border-slate-100 py-4 last:border-b-0">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-xs font-bold text-teal-700">
        {number}
      </span>

      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
      </div>
    </div>
  )
}

/* Navigation link */
function QuickLink({ to, children, secondary = false }) {
  return (
    <Link
      to={to}
      className={
        secondary
          ? 'inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-600 hover:text-teal-700'
          : 'inline-flex items-center gap-2 rounded-xl bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-800'
      }
    >
      {children}
    </Link>
  )
}

export default Reports



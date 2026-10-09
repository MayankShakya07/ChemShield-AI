
import { Link } from 'react-router-dom'

function Dashboard() {
  const stats = [
    {
      icon: '🧪',
      number: '24',
      label: 'Experiments',
      color: 'teal',
      note: 'Illustrative count',
    },
    {
      icon: '🛡️',
      number: '38',
      label: 'Safety Checks',
      color: 'blue',
      note: 'Illustrative count',
    },
    {
      icon: '📄',
      number: '18',
      label: 'Reports',
      color: 'violet',
      note: 'Illustrative count',
    },
    {
      icon: '🎓',
      number: '72%',
      label: 'Learning Progress',
      color: 'green',
      note: 'Example progress',
    },
  ]

  const features = [
    {
      icon: '🧪',
      title: 'Chemical Selection',
      description:
        'Select two chemicals and check their compatibility and potential hazards.',
      link: '/chemicals',
      button: 'Check Chemicals',
      color: 'teal',
    },
    {
      icon: '🔬',
      title: 'Virtual Lab',
      description:
        'Explore simulated laboratory experiments in a safe digital environment.',
      link: '/virtual-lab',
      button: 'Open Virtual Lab',
      color: 'blue',
    },
    {
      icon: '🤖',
      title: 'AI Tutor',
      description:
        'Ask chemistry questions and get simple explanations from the AI Tutor.',
      link: '/ai-tutor',
      button: 'Ask AI',
      color: 'violet',
    },
    {
      icon: '🛡️',
      title: 'Safety Results',
      description:
        'Review compatibility results, risk levels and safety recommendations.',
      link: '/safety-results',
      button: 'View Safety',
      color: 'rose',
    },
    {
      icon: '📄',
      title: 'Reports',
      description:
        'View experiment records and generated laboratory reports.',
      link: '/reports',
      button: 'View Reports',
      color: 'blue',
    },
    {
      icon: '🎓',
      title: 'Learning Center',
      description:
        'Improve your chemistry knowledge and prepare for laboratory viva questions.',
      link: '/ai-tutor',
      button: 'Start Learning',
      color: 'teal',
    },
  ]

  const activities = [
    {
      icon: '🧪',
      title: 'Chemical Analysis Example',
      description: 'Illustrative activity — not a live result',
      time: 'Example',
      color: 'teal',
    },
    {
      icon: '📄',
      title: 'Lab Report Example',
      description: 'Sample report activity',
      time: 'Example',
      color: 'blue',
    },
    {
      icon: '🤖',
      title: 'AI Tutor Example',
      description: 'Sample learning activity',
      time: 'Example',
      color: 'violet',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-teal-700 text-2xl font-extrabold text-white shadow-sm">
              C
            </div>
            <div>
              <h1 className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
                ChemShield AI
              </h1>
              <p className="text-xs text-slate-500 sm:text-sm">
                Student Dashboard
              </p>
            </div>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-teal-50 hover:text-teal-700"
          >
            <span aria-hidden="true">⌂</span>
            Home
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {/* Welcome */}
        <section className="relative overflow-hidden rounded-3xl border border-teal-100 bg-gradient-to-br from-white via-teal-50/70 to-sky-50 p-6 sm:p-9 lg:p-10">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-teal-100/50 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700 sm:text-sm">
                Student Dashboard
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Welcome to ChemShield
                <span className="text-teal-600"> AI</span>
                <span aria-hidden="true"> 👋</span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Analyze chemical compatibility, explore virtual experiments,
                learn chemistry with AI and manage your laboratory reports.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/chemicals"
                  className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Check Chemicals <span className="ml-2">→</span>
                </Link>

                <Link
                  to="/virtual-lab"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-teal-200 hover:bg-teal-50"
                >
                  Explore Virtual Lab
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center py-2">
              <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-white/80 shadow-inner sm:h-56 sm:w-56">
                <div className="absolute inset-3 rounded-full border border-dashed border-teal-200" />
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl" aria-hidden="true">
                    🧪
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-2 text-3xl">
                    <span aria-hidden="true">🛡️</span>
                    <span aria-hidden="true">✓</span>
                  </div>
                  <p className="mt-2 text-xs font-bold uppercase tracking-widest text-teal-700">
                    Safety First
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section
          aria-label="Dashboard statistics"
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>

        <p className="mt-3 text-xs text-slate-400">
          The statistics above are illustrative examples, not live account data.
        </p>

        {/* Tools */}
        <section className="mt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              Explore the platform
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              ChemShield Tools
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">
              Choose a tool to continue your chemistry learning.
            </p>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        {/* Quick Start and Recent Activity */}
        <section className="mt-10 grid items-stretch gap-5 lg:grid-cols-[1.35fr_0.85fr]">
          <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8">
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-teal-100/70 blur-2xl" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                Quick Start
              </p>

              <h2 className="mt-3 max-w-lg text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Check a chemical combination
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                Select two chemicals from the ChemShield database to explore
                available compatibility information, potential hazards,
                precautions and safety recommendations.
              </p>

              <p className="mt-3 max-w-xl text-xs leading-5 text-slate-500">
                Always verify chemical safety information against authoritative
                safety data sheets and your laboratory&apos;s procedures.
                Do not mix chemicals based on a simulation alone.
              </p>

              <Link
                to="/chemicals"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-teal-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700"
              >
                Start Compatibility Check <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="pointer-events-none absolute right-5 top-5 hidden text-6xl opacity-15 sm:block lg:right-8 lg:top-auto lg:bottom-8 lg:text-7xl">
              🧬
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-5 py-5 sm:px-6">
              <div>
                <h2 className="text-lg font-extrabold text-slate-900">
                  Recent Activity
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Illustrative examples
                </p>
              </div>

              <Link
                to="/reports"
                className="shrink-0 text-sm font-bold text-teal-700 transition hover:text-teal-900"
              >
                View Reports →
              </Link>
            </div>

            <div className="divide-y divide-slate-100 px-4 sm:px-5">
              {activities.map((activity) => (
                <ActivityRow key={activity.title} {...activity} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-slate-200 py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-slate-500">
              © 2026 ChemShield AI
            </p>
            <p className="text-xs font-medium text-slate-500">
              <span className="text-teal-700">◆</span> Safer Chemistry
              <span className="mx-2 text-slate-300">•</span>
              Smarter Learning
              <span className="mx-2 text-slate-300">•</span>
              A Brighter Future
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}

function StatCard({ icon, number, label, color, note }) {
  const colors = {
    teal: 'border-teal-100 bg-teal-50/70 text-teal-700',
    blue: 'border-sky-100 bg-sky-50/70 text-sky-700',
    violet: 'border-violet-100 bg-violet-50/70 text-violet-700',
    green: 'border-emerald-100 bg-emerald-50/70 text-emerald-700',
  }

  return (
    <div
      className={`rounded-2xl border p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6 ${colors[color] || colors.teal}`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
          <span aria-hidden="true">{icon}</span>
        </div>
        <span className="text-[10px] font-medium uppercase tracking-wide opacity-70">
          Example
        </span>
      </div>

      <p className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900">
        {number}
      </p>
      <p className="mt-1 font-semibold text-slate-700">{label}</p>
      <p className="mt-2 text-xs text-slate-500">{note}</p>
    </div>
  )
}

function FeatureCard({ icon, title, description, link, button, color }) {
  const styles = {
    teal: {
      icon: 'bg-teal-50 text-teal-700',
      button: 'bg-teal-600 hover:bg-teal-700',
    },
    blue: {
      icon: 'bg-sky-50 text-sky-700',
      button: 'bg-sky-600 hover:bg-sky-700',
    },
    violet: {
      icon: 'bg-violet-50 text-violet-700',
      button: 'bg-violet-600 hover:bg-violet-700',
    },
    rose: {
      icon: 'bg-rose-50 text-rose-700',
      button: 'bg-rose-600 hover:bg-rose-700',
    },
  }

  const style = styles[color] || styles.teal

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg sm:p-6">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${style.icon}`}
        aria-hidden="true"
      >
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-extrabold text-slate-900 sm:text-xl">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
        {description}
      </p>

      <Link
        to={link}
        className={`mt-6 inline-flex w-fit items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition ${style.button}`}
      >
        {button} <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}

function ActivityRow({ icon, title, description, time, color }) {
  const iconColors = {
    teal: 'bg-teal-50 text-teal-700',
    blue: 'bg-sky-50 text-sky-700',
    violet: 'bg-violet-50 text-violet-700',
  }

  return (
    <div className="flex items-start gap-3 py-4">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg ${iconColors[color] || iconColors.teal}`}
        aria-hidden="true"
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="break-words text-sm font-bold text-slate-800">
          {title}
        </p>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>

      <span className="shrink-0 pt-1 text-[10px] font-medium text-slate-400">
        {time}
      </span>
    </div>
  )
}

export default Dashboard

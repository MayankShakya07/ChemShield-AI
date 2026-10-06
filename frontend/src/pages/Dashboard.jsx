import { Link } from 'react-router-dom'

function Dashboard() {
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

              <p className="text-xs text-slate-400">
                Student Dashboard
              </p>
            </div>

          </Link>

          <Link
            to="/"
            className="text-sm text-slate-400 hover:text-cyan-400"
          >
            Home
          </Link>

        </div>
      </nav>


      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* Welcome */}
        <section>

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Student Dashboard
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Welcome to ChemShield 👋
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Analyze chemical compatibility, explore virtual experiments,
            learn chemistry with AI and manage your laboratory reports.
          </p>

        </section>


        {/* Statistics */}
        <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            icon="🧪"
            number="24"
            label="Experiments"
          />

          <StatCard
            icon="🛡️"
            number="38"
            label="Safety Checks"
          />

          <StatCard
            icon="📄"
            number="18"
            label="Reports"
          />

          <StatCard
            icon="🎓"
            number="72%"
            label="Learning Progress"
          />

        </section>


        {/* Main Features */}
        <section className="mt-10">

          <h2 className="text-2xl font-bold">
            ChemShield Tools
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Choose a tool to continue your laboratory learning.
          </p>


          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            <FeatureCard
              icon="🧪"
              title="Chemical Selection"
              description="Select two chemicals and check their compatibility and potential hazards."
              link="/chemicals"
              button="Check Chemicals →"
            />

            <FeatureCard
              icon="🔬"
              title="Virtual Lab"
              description="Explore simulated laboratory experiments in a safe digital environment."
              link="/virtual-lab"
              button="Open Virtual Lab →"
            />

            <FeatureCard
              icon="🤖"
              title="AI Tutor"
              description="Ask chemistry questions and get simple explanations from the AI Tutor."
              link="/ai-tutor"
              button="Ask AI →"
            />

            <FeatureCard
              icon="🛡️"
              title="Safety Results"
              description="Review compatibility results, risk levels and safety recommendations."
              link="/safety-results"
              button="View Safety →"
            />

            <FeatureCard
              icon="📄"
              title="Reports"
              description="View experiment records and generated laboratory reports."
              link="/reports"
              button="View Reports →"
            />

            <FeatureCard
              icon="🎓"
              title="Learning Center"
              description="Improve your chemistry knowledge and prepare for laboratory viva questions."
              link="/ai-tutor"
              button="Start Learning →"
            />

          </div>

        </section>


        {/* Quick Start */}
        <section className="mt-10">

          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8">

            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                  Quick Start
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Check a chemical combination
                </h2>

                <p className="mt-3 leading-7 text-slate-400">
                  Select two chemicals from the ChemShield database and
                  receive a compatibility analysis with risk information,
                  precautions and recommended safety measures.
                </p>

                <Link
                  to="/chemicals"
                  className="mt-6 inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
                >
                  Start Compatibility Check →
                </Link>

              </div>


              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

                <div className="flex items-center justify-between">

                  <span className="text-sm text-slate-500">
                    Example Analysis
                  </span>

                  <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
                    Moderate Risk
                  </span>

                </div>

                <div className="mt-6 flex items-center justify-center gap-5">

                  <ChemicalMini
                    formula="HCl"
                    name="Hydrochloric Acid"
                  />

                  <span className="text-2xl text-cyan-400">
                    +
                  </span>

                  <ChemicalMini
                    formula="NaOH"
                    name="Sodium Hydroxide"
                  />

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* Recent Activity */}
        <section className="mt-10">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold">
                Recent Activity
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Your latest ChemShield activities.
              </p>

            </div>

            <Link
              to="/reports"
              className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
            >
              View Reports →
            </Link>

          </div>


          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

            <ActivityRow
              icon="🧪"
              title="Acid-Base Neutralization"
              description="HCl + NaOH"
              time="Today"
            />

            <ActivityRow
              icon="🛡️"
              title="Compatibility Check"
              description="Safety analysis completed"
              time="Yesterday"
            />

            <ActivityRow
              icon="🤖"
              title="AI Tutor Question"
              description="Asked about chemical reactions"
              time="2 days ago"
            />

          </div>

        </section>

      </main>


      <footer className="mt-16 border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 ChemShield AI — Intelligent Laboratory Safety Platform
      </footer>

    </div>
  )
}


/* Statistics */
function StatCard({ icon, number, label }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="text-2xl">
        {icon}
      </div>

      <p className="mt-4 text-3xl font-bold">
        {number}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        {label}
      </p>

    </div>
  )
}


/* Feature Card */
function FeatureCard({
  icon,
  title,
  description,
  link,
  button,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-500/30">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-2xl">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
        {description}
      </p>

      <Link
        to={link}
        className="mt-5 inline-block text-sm font-semibold text-cyan-400 hover:text-cyan-300"
      >
        {button}
      </Link>

    </div>
  )
}


/* Chemical Mini */
function ChemicalMini({ formula, name }) {
  return (
    <div className="text-center">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold">
        {formula}
      </div>

      <p className="mt-2 max-w-[90px] text-xs text-slate-500">
        {name}
      </p>

    </div>
  )
}


/* Activity */
function ActivityRow({
  icon,
  title,
  description,
  time,
}) {
  return (
    <div className="flex items-center gap-4 border-b border-slate-800 p-5 last:border-b-0">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-xl">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="font-semibold">
          {title}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          {description}
        </p>

      </div>

      <span className="text-xs text-slate-600">
        {time}
      </span>

    </div>
  )
}

export default Dashboard
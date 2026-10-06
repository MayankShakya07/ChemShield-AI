import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link to="/" className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500 text-lg font-bold text-slate-950">
              C
            </div>

            <div>
              <h1 className="text-xl font-bold">
                ChemShield AI
              </h1>

              <p className="text-xs text-slate-500">
                Laboratory Safety Platform
              </p>
            </div>

          </Link>


          <div className="hidden items-center gap-7 md:flex">

            <a
              href="#features"
              className="text-sm text-slate-400 hover:text-cyan-400"
            >
              Features
            </a>

            <a
              href="#how"
              className="text-sm text-slate-400 hover:text-cyan-400"
            >
              How It Works
            </a>

            <Link
              to="/login"
              className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
            >
              Login
            </Link>

          </div>

        </div>
      </nav>


      {/* Hero */}
      <section className="relative overflow-hidden">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Hero Text */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-400">

                <span className="h-2 w-2 rounded-full bg-cyan-400" />

                Intelligent Laboratory Safety

              </div>


              <h1 className="mt-7 text-5xl font-bold leading-tight sm:text-6xl">

                Safer Chemistry.
                <span className="block text-cyan-400">
                  Smarter Learning.
                </span>

              </h1>


              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">

                ChemShield AI helps students understand chemical compatibility,
                identify laboratory hazards, explore virtual experiments and
                learn chemistry with AI-powered guidance.

              </p>


              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  to="/dashboard"
                  className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
                >
                  Get Started →
                </Link>

                <Link
                  to="/chemicals"
                  className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
                >
                  Check Chemicals
                </Link>

              </div>


              {/* Trust */}
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">

                <span>✓ Compatibility Analysis</span>

                <span>✓ Safety Guidance</span>

                <span>✓ AI Learning</span>

              </div>

            </div>


            {/* Hero Visual */}
            <div className="relative">

              <div className="absolute -inset-10 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">

                <div className="flex items-center justify-between border-b border-slate-800 pb-5">

                  <div>

                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      Live Analysis
                    </p>

                    <p className="mt-1 font-bold">
                      Chemical Compatibility
                    </p>

                  </div>

                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                    System Ready
                  </span>

                </div>


                {/* Chemicals */}
                <div className="mt-8 flex items-center justify-center gap-5">

                  <ChemicalVisual
                    formula="HCl"
                    name="Hydrochloric Acid"
                  />

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-xl text-cyan-400">
                    +
                  </div>

                  <ChemicalVisual
                    formula="NaOH"
                    name="Sodium Hydroxide"
                  />

                </div>


                {/* Result */}
                <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">

                  <div className="flex items-center justify-between">

                    <span className="font-semibold">
                      Compatibility Result
                    </span>

                    <span className="text-amber-400">
                      ⚠ Moderate
                    </span>

                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">

                    <div className="h-full w-[58%] rounded-full bg-amber-400" />

                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    Potential chemical interaction detected. Review safety
                    information before laboratory work.
                  </p>

                </div>


                {/* AI */}
                <div className="mt-4 flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500 text-xl text-slate-950">
                    🤖
                  </div>

                  <div>

                    <p className="text-sm font-semibold">
                      AI Tutor Available
                    </p>

                    <p className="mt-1 text-xs text-slate-600">
                      Ask questions about this reaction
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Features */}
      <section
        id="features"
        className="border-t border-slate-800 bg-slate-950"
      >

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Platform Features
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Everything students need for safer chemistry
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              ChemShield combines compatibility analysis, safety rules,
              virtual experiments and AI-powered learning into one platform.
            </p>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            <FeatureCard
              icon="🧪"
              title="Chemical Compatibility"
              description="Check interactions between selected chemicals and identify potential hazards."
            />

            <FeatureCard
              icon="🛡️"
              title="Safety Analysis"
              description="View risk levels, precautions, PPE recommendations and safety guidance."
            />

            <FeatureCard
              icon="🔬"
              title="Virtual Laboratory"
              description="Explore chemistry experiments through interactive digital simulations."
            />

            <FeatureCard
              icon="🤖"
              title="AI Tutor"
              description="Ask chemistry questions and receive understandable educational explanations."
            />

            <FeatureCard
              icon="📄"
              title="AI Reports"
              description="Generate structured experiment reports containing theory, observations and results."
            />

            <FeatureCard
              icon="🎓"
              title="Viva Preparation"
              description="Prepare for laboratory viva questions with AI-generated practice questions."
            />

          </div>

        </div>

      </section>


      {/* How It Works */}
      <section
        id="how"
        className="border-t border-slate-800"
      >

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              From chemical selection to safety insight
            </h2>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-4">

            <Step
              number="01"
              icon="🧪"
              title="Select"
              text="Choose the chemicals you want to analyze."
            />

            <Step
              number="02"
              icon="⚙️"
              title="Analyze"
              text="ChemShield evaluates the chemical combination."
            />

            <Step
              number="03"
              icon="🛡️"
              title="Assess"
              text="Review risk level, hazards and safety recommendations."
            />

            <Step
              number="04"
              icon="🤖"
              title="Learn"
              text="Use the AI Tutor to understand the chemistry behind the result."
            />

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="border-t border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 px-6 py-14 text-center">

            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to explore ChemShield?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Start with a chemical compatibility check or explore the
              virtual laboratory.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <Link
                to="/dashboard"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
              >
                Open Dashboard →
              </Link>

              <Link
                to="/virtual-lab"
                className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
              >
                Explore Virtual Lab
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 ChemShield AI
          </p>

          <p>
            Intelligent Chemical Compatibility & Laboratory Safety Platform
          </p>

        </div>

      </footer>

    </div>
  )
}


/* Chemical Visual */
function ChemicalVisual({ formula, name }) {
  return (
    <div className="text-center">

      <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-slate-700 bg-slate-950 text-2xl font-bold">
        {formula}
      </div>

      <p className="mt-3 max-w-[100px] text-xs text-slate-500">
        {name}
      </p>

    </div>
  )
}


/* Feature Card */
function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-500/30">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-2xl">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>

    </div>
  )
}


/* Step */
function Step({ number, icon, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center justify-between">

        <span className="text-sm font-bold text-cyan-400">
          {number}
        </span>

        <span className="text-2xl">
          {icon}
        </span>

      </div>

      <h3 className="mt-8 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {text}
      </p>

    </div>
  )
}

export default Home
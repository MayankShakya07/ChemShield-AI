
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-700 text-xl font-extrabold text-white shadow-sm">
              C
            </div>
            <div>
              <h1 className="text-lg font-extrabold tracking-tight text-blue-950">
                ChemShield <span className="text-teal-700">AI</span>
              </h1>
              <p className="text-xs text-slate-500">
                Laboratory Safety Platform
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            <a href="#features" className="text-sm font-medium text-slate-600 transition hover:text-teal-700">
              Features
            </a>
            <a href="#how" className="text-sm font-medium text-slate-600 transition hover:text-teal-700">
              How It Works
            </a>
            <Link to="/login" className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-blue-950 transition hover:border-teal-600 hover:text-teal-700">
              Login
            </Link>
          </div>

          <Link to="/login" className="rounded-lg bg-blue-950 px-4 py-2.5 text-sm font-semibold !text-white transition hover:bg-teal-800 hover:!text-white md:hidden">
            Login
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-teal-50">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-teal-600" />
              Intelligent Laboratory Safety
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
              Safer Chemistry.
              <span className="mt-1 block text-teal-700">
                Smarter Learning.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              ChemShield AI helps students understand chemical compatibility,
              identify laboratory hazards, explore virtual experiments, and
              learn chemistry with AI-powered educational guidance.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-950 bg-blue-950 px-6 py-3.5 font-semibold !text-white shadow-lg shadow-blue-950/10 transition hover:-translate-y-0.5 hover:border-teal-800 hover:bg-teal-800 hover:!text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-600/30"
              >
                Get Started <span aria-hidden="true">→</span>
              </Link>

              <Link
                to="/chemicals"
                className="inline-flex items-center justify-center rounded-xl border-2 border-slate-400 bg-white px-6 py-3.5 font-semibold !text-blue-950 transition hover:border-teal-700 hover:bg-teal-50 hover:!text-blue-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-600/30"
              >
                Check Chemicals
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <span className="text-teal-700">✓</span>
                Compatibility Analysis
              </span>
              <span className="flex items-center gap-2">
                <span className="text-teal-700">✓</span>
                Safety Guidance
              </span>
              <span className="flex items-center gap-2">
                <span className="text-teal-700">✓</span>
                AI Learning
              </span>
            </div>
          </div>

          {/* Sample compatibility interface */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-teal-100/70 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-blue-950/5 sm:p-7">
              <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                    Platform Preview
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-blue-950">
                    Chemical Compatibility
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Example interface — not a live analysis
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-2xl">
                  🧪
                </div>
              </div>

              <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-5">
                <ChemicalVisual formula="HCl" name="Hydrochloric Acid" />
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-xl text-slate-500">
                  +
                </div>
                <ChemicalVisual formula="NaOH" name="Sodium Hydroxide" />
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-bold text-slate-800">
                    Safety Information
                  </p>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                    Caution
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  This illustrative example highlights why chemical
                  compatibility matters. Acid-base neutralization can release
                  heat. Consult authoritative safety data and approved
                  laboratory procedures before handling chemicals.
                </p>
              </div>

              <div className="mt-4 flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl">
                  🎓
                </div>
                <div>
                  <p className="font-semibold text-blue-950">AI Tutor</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Explore chemistry concepts and safety guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-20 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              Platform Features
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
              Everything students need for safer chemistry
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Explore chemical compatibility, safety awareness, virtual
              experiments, and AI-supported learning in one platform.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon="🧪" title="Chemical Compatibility" description="Explore chemical interactions and identify potential compatibility concerns." />
            <FeatureCard icon="🛡️" title="Safety Analysis" description="Review hazards, precautions, protective equipment, and safety guidance." />
            <FeatureCard icon="🔬" title="Virtual Laboratory" description="Explore chemistry experiments through interactive digital simulations." />
            <FeatureCard icon="🎓" title="AI Tutor" description="Learn chemistry concepts through clear educational explanations." />
            <FeatureCard icon="📄" title="AI Reports" description="Organize experiment theory, observations, and results into reports." />
            <FeatureCard icon="💡" title="Viva Preparation" description="Practise laboratory concepts with questions to support your learning." />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
              From chemical selection to safety insight
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Review information, understand potential risks, and build
              awareness of safer laboratory practices.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Step number="01" icon="🧪" title="Select" text="Choose the chemicals you want to learn about or assess." />
            <Step number="02" icon="🔎" title="Analyze" text="Review available compatibility information and potential concerns." />
            <Step number="03" icon="🛡️" title="Assess Safety" text="Read relevant hazards, precautions, and safety recommendations." />
            <Step number="04" icon="🎓" title="Learn" text="Explore the chemistry concepts with educational guidance." />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-blue-950 px-6 py-12 text-center shadow-xl sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-300">
                Learn. Explore. Stay Aware.
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                Ready to explore ChemShield?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
                Start exploring chemical safety information, learn chemistry,
                or visit the virtual laboratory.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white bg-white px-6 py-3.5 font-semibold !text-blue-950 transition hover:border-teal-100 hover:bg-teal-100 hover:!text-blue-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                >
                  Open Dashboard →
                </Link>
                <Link
                  to="/virtual-lab"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white bg-transparent px-6 py-3.5 font-semibold !text-white transition hover:bg-white hover:!text-blue-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                >
                  Explore Virtual Lab
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© 2026 ChemShield AI</p>
          <p>
            Intelligent Chemical Compatibility &amp; Laboratory Safety Platform
          </p>
        </div>
      </footer>
    </div>
  )
}

function ChemicalVisual({ formula, name }) {
  return (
    <div className="min-w-0 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-xl font-extrabold text-blue-950 shadow-sm sm:h-24 sm:w-24 sm:text-2xl">
        {formula}
      </div>
      <p className="mx-auto mt-3 max-w-28 text-xs font-medium leading-5 text-slate-600 sm:text-sm">
        {name}
      </p>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-900/5">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl transition group-hover:bg-teal-100">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-bold text-blue-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  )
}

function Step({ number, icon, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-300 hover:shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-sm font-extrabold tracking-widest text-teal-700">
          {number}
        </span>
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-xl">
          {icon}
        </span>
      </div>
      <h3 className="mt-6 text-lg font-bold text-blue-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  )
}

export default Home


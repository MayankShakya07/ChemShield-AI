
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    if (!email.trim() || !password) {
      alert('Please enter your email and password.')
      return
    }

    // Frontend demonstration login only.
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-700 font-bold text-white shadow-sm">
              C
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight sm:text-xl">
                ChemShield AI
              </h1>
              <p className="text-xs text-slate-500">
                Laboratory Safety Platform
              </p>
            </div>
          </Link>

          <Link
            to="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-teal-700"
          >
            <span aria-hidden="true">← </span>
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Home</span>
          </Link>
        </div>
      </nav>

      {/* Login area */}
      <main className="flex min-h-[calc(100vh-73px)] items-center justify-center px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl lg:grid-cols-2">
          {/* Welcome panel */}
          <section className="relative hidden overflow-hidden bg-teal-800 p-10 text-white lg:block xl:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-teal-700/70" />

            <div className="relative flex h-full flex-col justify-between gap-12">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-2xl font-bold">
                  C
                </div>

                <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-teal-100">
                  Your laboratory companion
                </p>

                <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight">
                  Welcome back to ChemShield.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-teal-50/90">
                  Access your laboratory dashboard, explore chemical
                  compatibility, learn through virtual experiments, and
                  prepare for your chemistry studies.
                </p>
              </div>

              <div className="space-y-4">
                <LoginFeature
                  icon="🧪"
                  text="Chemical Compatibility"
                />
                <LoginFeature
                  icon="🛡️"
                  text="Laboratory Safety Tools"
                />
                <LoginFeature
                  icon="🤖"
                  text="AI Chemistry Tutor"
                />
                <LoginFeature
                  icon="📄"
                  text="Experiment Reports"
                />
              </div>

              <p className="text-xs text-teal-100/70">
                Learn chemistry with safety in mind.
              </p>
            </div>
          </section>

          {/* Login form */}
          <section className="flex items-center p-5 sm:p-10 lg:p-12">
            <div className="mx-auto w-full max-w-md">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl lg:hidden">
                🧪
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700">
                <span className="h-2 w-2 rounded-full bg-teal-600" />
                STUDENT PORTAL
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Sign in to your account
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Enter your details to continue to the ChemShield dashboard.
              </p>

              <form onSubmit={handleLogin} className="mt-8 space-y-5">
                {/* Email */}
                <div>
                  <label
                    htmlFor="login-email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email address
                  </label>

                  <input
                    id="login-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@example.com"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label
                      htmlFor="login-password"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      onClick={() =>
                        alert(
                          'Password recovery is not available yet. It will require backend authentication.'
                        )
                      }
                      className="text-xs font-medium text-teal-700 transition hover:text-teal-900"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="relative">
                    <input
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-20 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((previous) => !previous)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>

                {/* Remember me */}
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-slate-300 accent-teal-700 focus:ring-teal-600"
                  />

                  <label
                    htmlFor="remember"
                    className="text-sm text-slate-600"
                  >
                    Remember me
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-600/20"
                >
                  Sign In <span aria-hidden="true">→</span>
                </button>
              </form>

              {/* Demo notice */}
              <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg" aria-hidden="true">
                    ℹ️
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-amber-900">
                      Demonstration mode
                    </p>
                    <p className="mt-1 text-xs leading-5 text-amber-800">
                      This is a frontend-only login. Any non-empty email and
                      password can proceed to the dashboard. Real
                      authentication has not been connected.
                    </p>
                  </div>
                </div>
              </div>

              {/* Guest navigation */}
              <p className="mt-7 text-center text-sm text-slate-600">
                Just exploring?
                <Link
                  to="/dashboard"
                  className="ml-1.5 font-semibold text-teal-700 transition hover:text-teal-900"
                >
                  Continue as guest
                </Link>
              </p>

              <p className="mt-8 text-center text-xs text-slate-400">
                ChemShield AI · Laboratory Safety Platform
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

/* Welcome panel feature */
function LoginFeature({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-lg">
        {icon}
      </div>

      <p className="text-sm font-medium text-white">{text}</p>
    </div>
  )
}

export default Login

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    if (!email || !password) {
      alert('Please enter your email and password.')
      return
    }

    // Frontend demo login
    navigate('/dashboard')
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
                Laboratory Safety Platform
              </p>
            </div>

          </Link>

          <Link
            to="/"
            className="text-sm text-slate-400 hover:text-cyan-400"
          >
            ← Back to Home
          </Link>

        </div>
      </nav>


      {/* Login Area */}
      <main className="flex min-h-[calc(100vh-81px)] items-center justify-center px-6 py-12">

        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl lg:grid-cols-2">

          {/* Left Side */}
          <div className="hidden bg-cyan-500 p-10 text-slate-950 lg:block">

            <div className="flex h-full flex-col justify-between">

              <div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-2xl font-bold text-cyan-400">
                  C
                </div>

                <h2 className="mt-10 text-4xl font-bold leading-tight">
                  Welcome back to ChemShield.
                </h2>

                <p className="mt-5 leading-7 text-slate-800">
                  Access your laboratory dashboard, chemical safety analysis,
                  virtual experiments and AI-powered chemistry tools.
                </p>

              </div>


              <div className="mt-12 space-y-4">

                <LoginFeature
                  icon="🧪"
                  text="Chemical Compatibility"
                />

                <LoginFeature
                  icon="🛡️"
                  text="Laboratory Safety Analysis"
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

            </div>

          </div>


          {/* Right Side */}
          <div className="p-8 sm:p-10">

            <div className="mx-auto max-w-md">

              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                Student Login
              </p>

              <h1 className="mt-3 text-3xl font-bold">
                Sign in to your account
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Enter your details to continue to the ChemShield dashboard.
              </p>


              {/* Form */}
              <form
                onSubmit={handleLogin}
                className="mt-8 space-y-5"
              >

                {/* Email */}
                <div>

                  <label className="text-sm font-medium text-slate-300">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-cyan-500"
                  />

                </div>


                {/* Password */}
                <div>

                  <div className="flex items-center justify-between">

                    <label className="text-sm font-medium text-slate-300">
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-xs text-cyan-400 hover:text-cyan-300"
                      onClick={() =>
                        alert('Password recovery will be connected to the backend.')
                      }
                    >
                      Forgot password?
                    </button>

                  </div>

                  <div className="relative mt-2">

                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 pr-20 text-white outline-none placeholder:text-slate-600 focus:border-cyan-500"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-cyan-400"
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>

                  </div>

                </div>


                {/* Remember */}
                <div className="flex items-center gap-2">

                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 accent-cyan-500"
                  />

                  <label
                    htmlFor="remember"
                    className="text-sm text-slate-500"
                  >
                    Remember me
                  </label>

                </div>


                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Sign In →
                </button>

              </form>


              {/* Demo Notice */}
              <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">

                <p className="text-xs leading-5 text-amber-400">
                  Demo Mode: This frontend login currently accepts any
                  non-empty email and password. Real authentication will be
                  connected to the FastAPI backend later.
                </p>

              </div>


              {/* Back */}
              <p className="mt-8 text-center text-sm text-slate-500">

                Don't want to login?

                <Link
                  to="/dashboard"
                  className="ml-2 font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Continue as guest
                </Link>

              </p>

            </div>

          </div>

        </div>

      </main>

    </div>
  )
}


/* Login Feature */
function LoginFeature({ icon, text }) {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-lg">
        {icon}
      </div>

      <p className="font-semibold">
        {text}
      </p>

    </div>
  )
}

export default Login

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { chemicals } from '../data/chemicals'

function ChemicalSelection() {
  const [firstChemical, setFirstChemical] = useState('')
  const [secondChemical, setSecondChemical] = useState('')
  const navigate = useNavigate()

  const chemicalA = chemicals.find(
    (chemical) => chemical.id === firstChemical
  )

  const chemicalB = chemicals.find(
    (chemical) => chemical.id === secondChemical
  )

  const checkCompatibility = () => {
    if (!firstChemical || !secondChemical) {
      alert('Please select both chemicals.')
      return
    }

    if (firstChemical === secondChemical) {
      alert('Please select two different chemicals.')
      return
    }

    if (!chemicalA || !chemicalB) {
      alert('Please select valid chemicals from the list.')
      return
    }

    navigate('/safety-results', {
      state: {
        chemicalA,
        chemicalB,
      },
    })
  }

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
                Chemical Safety Platform
              </p>
            </div>
          </Link>

          <Link
            to="/dashboard"
            className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-teal-50 hover:text-teal-700"
          >
            ← <span className="hidden sm:inline">Dashboard</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {/* Page heading */}
        <section className="relative overflow-hidden rounded-3xl border border-teal-100 bg-gradient-to-br from-white via-teal-50/70 to-sky-50 p-6 sm:p-9">
          <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-teal-100/60 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-700">
              <span aria-hidden="true">✦</span>
              Chemical Analysis
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Select Chemicals
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Choose two chemicals from your database to review the available
              compatibility information and safety guidance.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-2">
                01 · Choose chemicals
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-2">
                02 · Review selection
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-2">
                03 · View available results
              </span>
            </div>
          </div>
        </section>

        {/* Chemical selection */}
        <section className="mt-8">
          <div className="mb-5">
            <h2 className="text-xl font-extrabold text-slate-900">
              Choose your combination
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Select a different chemical for each field.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <ChemicalSelector
              title="Chemical A"
              step="01"
              value={firstChemical}
              onChange={setFirstChemical}
              otherValue={secondChemical}
            />

            <ChemicalSelector
              title="Chemical B"
              step="02"
              value={secondChemical}
              onChange={setSecondChemical}
              otherValue={firstChemical}
            />
          </div>
        </section>

        {/* Selection preview */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-slate-900">
                Selected Combination
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Review the selected chemicals before continuing.
              </p>
            </div>

            <span
              className={`w-fit rounded-full px-3 py-1.5 text-xs font-bold ${
                chemicalA && chemicalB
                  ? 'bg-teal-50 text-teal-700'
                  : 'bg-slate-100 text-slate-500'
              }`}
            >
              {chemicalA && chemicalB
                ? '2 of 2 selected'
                : `${Number(Boolean(chemicalA)) + Number(Boolean(chemicalB))} of 2 selected`}
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <SelectedChemical chemical={chemicalA} label="Chemical A" />

            <div className="flex items-center justify-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-2xl font-semibold text-teal-700">
                +
              </div>
            </div>

            <SelectedChemical chemical={chemicalB} label="Chemical B" />
          </div>

          {chemicalA && chemicalB && chemicalA.id === chemicalB.id && (
            <p
              role="alert"
              className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800"
            >
              Please choose two different chemicals before continuing.
            </p>
          )}

          <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row">
            <button
              type="button"
              onClick={checkCompatibility}
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-teal-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Check Compatibility <span className="ml-2">→</span>
            </button>

            <Link
              to="/virtual-lab"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-800"
            >
              Explore Virtual Lab
            </Link>

            <button
              type="button"
              onClick={() => {
                setFirstChemical('')
                setSecondChemical('')
              }}
              className="inline-flex min-h-12 items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
            >
              Clear selection
            </button>
          </div>
        </section>

        {/* Safety notice */}
        <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
              ⚠️
            </div>

            <div>
              <h2 className="font-extrabold text-amber-900">
                Important Safety Notice
              </h2>

              <p className="mt-2 text-sm leading-6 text-amber-900/80">
                ChemShield AI is an educational tool. Displayed compatibility
                information may be incomplete and must not be treated as
                authorization to mix chemicals. Consult authoritative Safety
                Data Sheets (SDS), approved laboratory procedures and qualified
                supervision before handling chemicals.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-10 border-t border-slate-200 py-6 text-center text-sm text-slate-500">
          © 2026 ChemShield AI
          <span className="mx-2 text-slate-300">•</span>
          Safer Chemistry, Smarter Learning
        </footer>
      </main>
    </div>
  )
}

function ChemicalSelector({ title, step, value, onChange, otherValue }) {
  const availableChemicals = chemicals.filter(
    (chemical) => chemical.id !== otherValue
  )

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-200 hover:shadow-md sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-sm font-extrabold text-teal-700">
          {step}
        </div>

        <div>
          <h3 className="font-extrabold text-slate-900">{title}</h3>
          <p className="mt-0.5 text-xs text-slate-500">
            Select from your chemical database
          </p>
        </div>
      </div>

      <label
        htmlFor={`chemical-${step}`}
        className="mt-6 block text-sm font-semibold text-slate-700"
      >
        Choose a chemical
      </label>

      <select
        id={`chemical-${step}`}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
      >
        <option value="">Select a chemical...</option>

        {availableChemicals.map((chemical) => (
          <option key={chemical.id} value={chemical.id}>
            {chemical.formula} — {chemical.name}
          </option>
        ))}
      </select>

      <p className="mt-3 text-xs leading-5 text-slate-500">
        {value
          ? 'Chemical selected. You can change it at any time.'
          : 'Choose one chemical to preview it below.'}
      </p>
    </div>
  )
}

function SelectedChemical({ chemical, label }) {
  if (!chemical) {
    return (
      <div className="flex min-h-36 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
          🧪
        </div>
        <p className="mt-3 text-sm font-semibold text-slate-500">
          {label}
        </p>
        <p className="mt-1 text-xs text-slate-400">
          No chemical selected
        </p>
      </div>
    )
  }

  return (
    <div className="min-w-0 rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50/80 to-white p-5 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-teal-100 bg-white text-lg font-extrabold text-teal-800 shadow-sm">
        {chemical.formula}
      </div>

      <p className="mt-3 text-xs font-bold uppercase tracking-wider text-teal-700">
        {label}
      </p>

      <h3 className="mt-1 break-words font-extrabold text-slate-900">
        {chemical.name}
      </h3>

      {chemical.type && (
        <p className="mt-1 text-sm text-slate-500">{chemical.type}</p>
      )}
    </div>
  )
}

export default ChemicalSelection

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { chemicals } from '../data/chemicals'

function ChemicalSelection() {
  const [firstChemical, setFirstChemical] = useState('')
  const [secondChemical, setSecondChemical] = useState('')

  const navigate = useNavigate()

  const checkCompatibility = () => {
    if (!firstChemical || !secondChemical) {
      alert('Please select both chemicals.')
      return
    }

    if (firstChemical === secondChemical) {
      alert('Please select two different chemicals.')
      return
    }

    const chemicalA = chemicals.find(
      (chemical) => chemical.id === firstChemical
    )

    const chemicalB = chemicals.find(
      (chemical) => chemical.id === secondChemical
    )

    navigate('/safety-results', {
      state: {
        chemicalA,
        chemicalB,
      },
    })
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
                Chemical Safety Platform
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


      <main className="mx-auto max-w-6xl px-6 py-10">

        {/* Header */}
        <section>

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Chemical Analysis
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Select Chemicals
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Select two chemicals to perform a compatibility analysis and
            receive safety information.
          </p>

        </section>


        {/* Selection */}
        <section className="mt-10 grid gap-6 lg:grid-cols-2">

          <ChemicalSelector
            title="Chemical A"
            value={firstChemical}
            onChange={setFirstChemical}
          />

          <ChemicalSelector
            title="Chemical B"
            value={secondChemical}
            onChange={setSecondChemical}
          />

        </section>


        {/* Selected Chemicals */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="text-xl font-bold">
            Selected Combination
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3 md:items-center">

            <SelectedChemical
              chemical={chemicals.find(
                (chemical) => chemical.id === firstChemical
              )}
            />

            <div className="text-center text-3xl text-cyan-400">
              +
            </div>

            <SelectedChemical
              chemical={chemicals.find(
                (chemical) => chemical.id === secondChemical
              )}
            />

          </div>

        </section>


        {/* Check Button */}
        <div className="mt-8 flex flex-wrap gap-3">

          <button
            onClick={checkCompatibility}
            className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Check Compatibility →
          </button>

          <Link
            to="/virtual-lab"
            className="rounded-xl border border-slate-700 px-7 py-3 font-semibold text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
          >
            Open Virtual Lab
          </Link>

        </div>


        {/* Information */}
        <section className="mt-10 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">

          <div className="flex gap-4">

            <div className="text-2xl">
              ⚠️
            </div>

            <div>

              <h2 className="font-bold text-amber-400">
                Safety Notice
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                This platform is an educational safety tool. Do not physically
                mix chemicals based solely on this demonstration. Laboratory
                work should follow approved procedures and proper supervision.
              </p>

            </div>

          </div>

        </section>

      </main>

    </div>
  )
}


/* Chemical Selector */
function ChemicalSelector({ title, value, onChange }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
        {title}
      </p>

      <label className="mt-5 block text-sm font-medium text-slate-300">
        Choose a chemical
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
      >

        <option value="">
          Select chemical...
        </option>

        {chemicals.map((chemical) => (

          <option
            key={chemical.id}
            value={chemical.id}
          >
            {chemical.formula} — {chemical.name}
          </option>

        ))}

      </select>

    </div>
  )
}


/* Selected Chemical */
function SelectedChemical({ chemical }) {
  if (!chemical) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-700 p-6 text-center">

        <p className="text-slate-600">
          No chemical selected
        </p>

      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 text-center">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold">
        {chemical.formula}
      </div>

      <h3 className="mt-4 font-bold">
        {chemical.name}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {chemical.type}
      </p>

    </div>
  )
}

export default ChemicalSelection
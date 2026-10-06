import { Link, useLocation } from 'react-router-dom'

function SafetyResults() {
  const location = useLocation()

  const chemicalA = location.state?.chemicalA
  const chemicalB = location.state?.chemicalB

  if (!chemicalA || !chemicalB) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">

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
                  Safety Results
                </p>
              </div>

            </Link>

          </div>
        </nav>

        <main className="mx-auto max-w-3xl px-6 py-20 text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/10 text-4xl">
            ⚠️
          </div>

          <h1 className="mt-6 text-3xl font-bold">
            No Chemical Analysis Found
          </h1>

          <p className="mt-4 text-slate-400">
            Please select two chemicals first before viewing the safety
            analysis.
          </p>

          <Link
            to="/chemicals"
            className="mt-8 inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Select Chemicals →
          </Link>

        </main>

      </div>
    )
  }

  const result = getSafetyResult(chemicalA, chemicalB)

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
                Safety Analysis
              </p>
            </div>

          </Link>

          <Link
            to="/chemicals"
            className="text-sm text-slate-400 hover:text-cyan-400"
          >
            ← New Analysis
          </Link>

        </div>

      </nav>


      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* Header */}
        <section>

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Compatibility Analysis
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Safety Results
          </h1>

          <p className="mt-3 text-slate-400">
            Analysis of the selected chemical combination.
          </p>

        </section>


        {/* Chemicals */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="grid gap-5 md:grid-cols-3 md:items-center">

            <ChemicalBox chemical={chemicalA} />

            <div className="text-center">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-xl text-cyan-400">
                +
              </div>

            </div>

            <ChemicalBox chemical={chemicalB} />

          </div>

        </section>


        {/* Main Result */}
        <section className="mt-8">

          <div className={`rounded-3xl border p-8 ${result.container}`}>

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div>

                <p className="text-sm font-semibold uppercase tracking-widest opacity-70">
                  Compatibility Status
                </p>

                <h2 className={`mt-2 text-4xl font-bold ${result.text}`}>
                  {result.status}
                </h2>

                <p className="mt-3 max-w-2xl text-slate-400">
                  {result.summary}
                </p>

              </div>

              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-8 border-slate-800 text-center">

                <div>

                  <p className={`text-3xl font-bold ${result.text}`}>
                    {result.score}
                  </p>

                  <p className="text-xs text-slate-600">
                    Risk Score
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* Details */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">

          <InfoCard
            icon="⚠️"
            title="Potential Hazards"
            items={result.hazards}
          />

          <InfoCard
            icon="🛡️"
            title="Safety Recommendations"
            items={result.recommendations}
          />

          <InfoCard
            icon="🥽"
            title="Recommended PPE"
            items={result.ppe}
          />

          <InfoCard
            icon="🚨"
            title="Emergency Guidance"
            items={result.emergency}
          />

        </section>


        {/* Reaction */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Chemistry Overview
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Reaction Information
          </h2>

          <div className="mt-6 rounded-xl bg-slate-950 p-5">

            <p className="text-center text-lg font-semibold">
              {result.reaction}
            </p>

          </div>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            {result.explanation}
          </p>

        </section>


        {/* Disclaimer */}
        <section className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">

          <div className="flex gap-4">

            <div className="text-2xl">
              ⚠️
            </div>

            <div>

              <h2 className="font-bold text-amber-400">
                Important Safety Notice
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                This result is a demonstration of the ChemShield frontend.
                It must not be treated as laboratory authorization or as a
                substitute for official safety documentation, institutional
                procedures, or qualified supervision.
              </p>

            </div>

          </div>

        </section>


        {/* Actions */}
        <section className="mt-8 flex flex-wrap gap-3">

          <Link
            to="/chemicals"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Analyze Another Combination
          </Link>

          <Link
            to="/virtual-lab"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
          >
            Open Virtual Lab
          </Link>

          <Link
            to="/ai-tutor"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
          >
            Ask AI Tutor
          </Link>

        </section>

      </main>

    </div>
  )
}


/* Chemical Box */
function ChemicalBox({ chemical }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 text-center">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 font-bold">
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


/* Information Card */
function InfoCard({ icon, title, items }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center gap-3">

        <span className="text-2xl">
          {icon}
        </span>

        <h2 className="text-xl font-bold">
          {title}
        </h2>

      </div>

      <ul className="mt-5 space-y-3">

        {items.map((item, index) => (

          <li
            key={index}
            className="flex gap-3 text-sm leading-6 text-slate-400"
          >
            <span className="text-cyan-400">
              •
            </span>

            <span>
              {item}
            </span>

          </li>

        ))}

      </ul>

    </div>
  )
}


/* Demo Safety Engine */
function getSafetyResult(chemicalA, chemicalB) {
  const ids = [chemicalA.id, chemicalB.id].sort()

  const hclNaoh =
    ids.includes('hcl') && ids.includes('naoh')

  const h2so4Naoh =
    ids.includes('h2so4') && ids.includes('naoh')

  const aceticNaoh =
    ids.includes('ch3cooh') && ids.includes('naoh')

  if (hclNaoh) {
    return {
      status: 'Controlled Reaction',
      score: '58',
      text: 'text-amber-400',
      container: 'border-amber-500/20 bg-amber-500/5',
      summary:
        'The selected chemicals represent an acid-base neutralization combination. Appropriate laboratory controls and supervision are required.',
      hazards: [
        'Acid and base contact can produce heat.',
        'Concentrated solutions can cause chemical burns.',
        'Improper handling may cause splashing.',
      ],
      recommendations: [
        'Follow the approved laboratory procedure.',
        'Use appropriate PPE and controlled quantities.',
        'Work under qualified supervision.',
      ],
      ppe: [
        'Safety goggles',
        'Suitable chemical-resistant gloves',
        'Laboratory coat',
      ],
      emergency: [
        'Follow your laboratory emergency procedure.',
        'For exposure, use the appropriate emergency washing facilities.',
        'Seek qualified medical assistance when required.',
      ],
      reaction: 'HCl + NaOH → NaCl + H₂O',
      explanation:
        'Hydrochloric acid and sodium hydroxide can undergo a neutralization reaction producing sodium chloride and water. Neutralization can release heat, so laboratory procedures should be followed carefully.',
    }
  }

  if (h2so4Naoh) {
    return {
      status: 'Higher Caution',
      score: '72',
      text: 'text-orange-400',
      container: 'border-orange-500/20 bg-orange-500/5',
      summary:
        'This combination involves a strong acid and strong base. The physical conditions and concentrations are important when evaluating laboratory risk.',
      hazards: [
        'Strong acids and bases can cause serious chemical burns.',
        'Neutralization may release significant heat.',
        'Improper mixing can create splashing hazards.',
      ],
      recommendations: [
        'Follow approved laboratory procedures.',
        'Use appropriate PPE.',
        'Use proper supervision and controlled conditions.',
      ],
      ppe: [
        'Safety goggles',
        'Suitable gloves',
        'Laboratory coat',
      ],
      emergency: [
        'Follow the laboratory emergency procedure.',
        'Use appropriate emergency washing facilities after exposure.',
        'Seek qualified assistance for significant exposure.',
      ],
      reaction: 'H₂SO₄ + NaOH → Sodium sulfate + H₂O',
      explanation:
        'Sulfuric acid can react with sodium hydroxide in an acid-base neutralization process. The exact reaction products depend on the proportions and conditions.',
    }
  }

  if (aceticNaoh) {
    return {
      status: 'Controlled Reaction',
      score: '42',
      text: 'text-yellow-400',
      container: 'border-yellow-500/20 bg-yellow-500/5',
      summary:
        'Acetic acid and sodium hydroxide can undergo an acid-base neutralization reaction.',
      hazards: [
        'Chemical contact may cause irritation or burns depending on concentration.',
        'The reaction can release heat.',
        'Improper handling may cause splashing.',
      ],
      recommendations: [
        'Follow the approved experiment procedure.',
        'Use appropriate PPE.',
        'Work under laboratory supervision.',
      ],
      ppe: [
        'Safety goggles',
        'Suitable gloves',
        'Laboratory coat',
      ],
      emergency: [
        'Follow your laboratory emergency procedure.',
        'Use appropriate emergency washing facilities after exposure.',
        'Seek qualified assistance if necessary.',
      ],
      reaction: 'CH₃COOH + NaOH → CH₃COONa + H₂O',
      explanation:
        'Acetic acid reacts with sodium hydroxide through an acid-base neutralization process, producing sodium acetate and water.',
    }
  }

  return {
    status: 'Review Required',
    score: '35',
    text: 'text-cyan-400',
    container: 'border-cyan-500/20 bg-cyan-500/5',
    summary:
      'No detailed compatibility rule is currently stored in this frontend demonstration database for this combination.',
    hazards: [
      'The combination requires chemical-specific evaluation.',
      'Unknown interactions should not be assumed to be safe.',
      'Consult official safety information before laboratory handling.',
    ],
    recommendations: [
      'Do not rely on the demonstration result for physical experiments.',
      'Check authoritative chemical safety documentation.',
      'Follow institutional laboratory procedures.',
    ],
    ppe: [
      'Safety goggles',
      'Appropriate gloves',
      'Laboratory coat',
    ],
    emergency: [
      'Follow the laboratory emergency procedure.',
      'Consult the relevant safety documentation.',
      'Contact qualified laboratory personnel when necessary.',
    ],
    reaction: 'Compatibility rule not available in demo database',
    explanation:
      'The frontend currently contains only a small demonstration set of compatibility rules. The complete safety engine and chemical database will later be connected through the backend.',
  }
}

export default SafetyResults
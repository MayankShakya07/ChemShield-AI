import { useState } from 'react'
import { Link } from 'react-router-dom'

function AITutor() {
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: 'Hello! I am ChemShield AI Tutor. Ask me a chemistry question and I will help explain it.',
    },
  ])

  const askQuestion = (e) => {
    e.preventDefault()

    if (!question.trim()) return

    const userQuestion = question.trim()

    setMessages((previous) => [
      ...previous,
      {
        role: 'user',
        text: userQuestion,
      },
      {
        role: 'ai',
        text: getDemoAnswer(userQuestion),
      },
    ])

    setQuestion('')
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
                AI Chemistry Tutor
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
            AI Tutor
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Ask ChemShield
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Ask questions about chemistry, reactions, laboratory safety,
            experiments and concepts.
          </p>

        </section>


        {/* Chat */}
        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">

          {/* Chat Header */}
          <div className="flex items-center gap-4 border-b border-slate-800 p-5">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-xl text-slate-950">
              🤖
            </div>

            <div>

              <p className="font-bold">
                ChemShield AI Tutor
              </p>

              <div className="mt-1 flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                <span className="text-xs text-slate-500">
                  Ready to help
                </span>

              </div>

            </div>

          </div>


          {/* Messages */}
          <div className="min-h-[420px] max-h-[520px] space-y-5 overflow-y-auto p-6">

            {messages.map((message, index) => (

              <div
                key={index}
                className={`flex ${
                  message.role === 'user'
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >

                <div
                  className={`max-w-[85%] rounded-2xl px-5 py-4 text-sm leading-7 ${
                    message.role === 'user'
                      ? 'bg-cyan-500 text-slate-950'
                      : 'border border-slate-800 bg-slate-950 text-slate-300'
                  }`}
                >
                  {message.text}
                </div>

              </div>

            ))}

          </div>


          {/* Suggestions */}
          <div className="border-t border-slate-800 p-5">

            <p className="mb-3 text-xs uppercase tracking-widest text-slate-600">
              Try asking
            </p>

            <div className="flex flex-wrap gap-2">

              <Suggestion
                text="What is neutralization?"
                onClick={() => setQuestion('What is neutralization?')}
              />

              <Suggestion
                text="Why do reactions release heat?"
                onClick={() =>
                  setQuestion('Why do some chemical reactions release heat?')
                }
              />

              <Suggestion
                text="What PPE should I use?"
                onClick={() =>
                  setQuestion('What PPE is commonly used in a chemistry laboratory?')
                }
              />

              <Suggestion
                text="What is pH?"
                onClick={() => setQuestion('What is pH?')}
              />

            </div>

          </div>


          {/* Input */}
          <form
            onSubmit={askQuestion}
            className="border-t border-slate-800 p-5"
          >

            <div className="flex gap-3">

              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask a chemistry question..."
                className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-cyan-500"
              />

              <button
                type="submit"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
              >
                Ask →
              </button>

            </div>

          </form>

        </section>


        {/* AI Features */}
        <section className="mt-8 grid gap-5 md:grid-cols-3">

          <TutorFeature
            icon="🧠"
            title="Concept Explanation"
            text="Understand difficult chemistry concepts in simple language."
          />

          <TutorFeature
            icon="🔬"
            title="Experiment Help"
            text="Learn the theory and purpose behind laboratory experiments."
          />

          <TutorFeature
            icon="🎓"
            title="Viva Preparation"
            text="Practice chemistry questions before your laboratory viva."
          />

        </section>


        {/* Important Notice */}
        <section className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">

          <div className="flex gap-4">

            <div className="text-2xl">
              ⚠️
            </div>

            <div>

              <h2 className="font-bold text-amber-400">
                Educational AI Notice
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                This frontend currently uses demonstration responses.
                The real AI Tutor will be connected to the project's
                backend and LLM service later.
              </p>

            </div>

          </div>

        </section>

      </main>

    </div>
  )
}


/* Demo AI Responses */
function getDemoAnswer(question) {
  const text = question.toLowerCase()

  if (text.includes('neutralization')) {
    return 'Neutralization is a reaction in which an acid and a base react to form products such as a salt and water. A common example is HCl reacting with NaOH.'
  }

  if (text.includes('heat') || text.includes('temperature')) {
    return 'Some chemical reactions release energy as heat. These are called exothermic reactions. The amount of heat depends on the particular reaction and conditions.'
  }

  if (text.includes('ppe') || text.includes('glove') || text.includes('goggle')) {
    return 'Common laboratory PPE includes safety goggles, suitable gloves and a lab coat. The exact protection depends on the chemicals and procedure being used.'
  }

  if (text.includes('ph')) {
    return 'pH is a measure related to the acidity or basicity of an aqueous solution. Lower pH values generally indicate greater acidity, while higher values indicate greater basicity.'
  }

  if (text.includes('acid')) {
    return 'An acid is a substance that can donate hydrogen ions in appropriate chemical reactions. Acids can have different strengths and properties.'
  }

  if (text.includes('base')) {
    return 'A base is a substance that can accept hydrogen ions or produce hydroxide ions in appropriate aqueous conditions. Bases also vary in strength.'
  }

  return 'That is a good chemistry question. The real ChemShield AI Tutor will provide a detailed answer using the project backend and LLM service. For now, this is a demonstration response.'
}


/* Suggestion */
function Suggestion({ text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-slate-700 px-4 py-2 text-xs text-slate-400 hover:border-cyan-500 hover:text-cyan-400"
    >
      {text}
    </button>
  )
}


/* Feature */
function TutorFeature({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-2xl">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>

    </div>
  )
}

export default AITutor

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
      { role: 'user', text: userQuestion },
      { role: 'ai', text: getDemoAnswer(userQuestion) },
    ])

    setQuestion('')
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-lg font-bold text-white shadow-sm">
              C
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                ChemShield AI
              </h1>
              <p className="text-xs text-slate-500">AI Chemistry Tutor</p>
            </div>
          </Link>

          <Link
            to="/dashboard"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-teal-700"
          >
            <span aria-hidden="true">← </span>
            Dashboard
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {/* Page heading */}
        <section className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700">
            <span className="h-2 w-2 rounded-full bg-teal-500" />
            LEARNING ASSISTANT
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Ask ChemShield
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Explore chemistry concepts, understand reactions, learn laboratory
            safety, and prepare for your practical exams.
          </p>
        </section>

        {/* Chat panel */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Chat header */}
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-4 sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">
                🤖
              </div>

              <div className="min-w-0">
                <h2 className="truncate font-semibold text-slate-900">
                  ChemShield AI Tutor
                </h2>
                <div className="mt-1 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs text-slate-500">
                    Demo mode · Ready to help
                  </span>
                </div>
              </div>
            </div>

            <span className="hidden rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500 sm:inline-flex">
              Chemistry assistant
            </span>
          </div>

          {/* Conversation */}
          <div
            className="min-h-[320px] max-h-[520px] space-y-5 overflow-y-auto bg-slate-50/70 p-4 sm:min-h-[420px] sm:p-6"
            aria-live="polite"
            aria-label="Chat messages"
          >
            {messages.map((message, index) => (
              <div
                key={`${index}-${message.role}`}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`flex max-w-[92%] items-start gap-2.5 sm:max-w-[82%] ${
                    message.role === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm ${
                      message.role === 'user'
                        ? 'bg-slate-200 text-slate-700'
                        : 'border border-teal-100 bg-white text-teal-700'
                    }`}
                    aria-hidden="true"
                  >
                    {message.role === 'user' ? '👤' : '⚗️'}
                  </div>

                  <div
                    className={`min-w-0 rounded-2xl px-4 py-3 text-sm leading-7 shadow-sm ${
                      message.role === 'user'
                        ? 'rounded-tr-md bg-teal-700 text-white'
                        : 'rounded-tl-md border border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    <p className="whitespace-pre-wrap break-words">
                      {message.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Suggested questions */}
          <div className="border-t border-slate-200 px-4 py-5 sm:px-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Suggested questions
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
                  setQuestion(
                    'What PPE is commonly used in a chemistry laboratory?'
                  )
                }
              />

              <Suggestion
                text="What is pH?"
                onClick={() => setQuestion('What is pH?')}
              />
            </div>
          </div>

          {/* Message input */}
          <form
            onSubmit={askQuestion}
            className="border-t border-slate-200 bg-white p-4 sm:px-6 sm:py-5"
          >
            <label
              htmlFor="tutor-question"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Your question
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="tutor-question"
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask a chemistry question..."
                autoComplete="off"
                className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
              />

              <button
                type="submit"
                disabled={!question.trim()}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-600/20 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Ask Tutor <span aria-hidden="true">→</span>
              </button>
            </div>

            <p className="mt-3 text-xs leading-5 text-slate-500">
              This version uses predefined demo responses. It does not send
              your question to a live AI service.
            </p>
          </form>
        </section>

        {/* Tutor features */}
        <section className="mt-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-slate-900">
              Learn with ChemShield
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Support for your chemistry learning journey.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <TutorFeature
              icon="🧠"
              title="Concept Explanation"
              text="Build your understanding of chemistry concepts with clear, beginner-friendly explanations."
            />

            <TutorFeature
              icon="🔬"
              title="Experiment Learning"
              text="Explore the theory and purpose behind laboratory experiments."
            />

            <TutorFeature
              icon="🎓"
              title="Viva Preparation"
              text="Review common chemistry questions and prepare for practical exams."
            />
          </div>
        </section>

        {/* Educational notice */}
        <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-lg">
              ⚠️
            </div>

            <div>
              <h2 className="font-semibold text-amber-900">
                Educational AI notice
              </h2>

              <p className="mt-1 text-sm leading-6 text-amber-800/90">
                The current tutor uses predefined demonstration responses.
                Answers are not generated by a connected AI model. Always
                follow your laboratory instructor's guidance and the official
                safety instructions for your experiment.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

/* Demonstration responses */
function getDemoAnswer(question) {
  const text = question.toLowerCase()

  if (text.includes('neutralization')) {
    return 'Neutralization is a reaction in which an acid and a base react. For a typical strong acid–strong base reaction, the products include a salt and water. For example: HCl + NaOH → NaCl + H₂O.'
  }

  if (text.includes('heat') || text.includes('temperature')) {
    return 'Some chemical reactions release energy to their surroundings as heat. These are called exothermic reactions. Other reactions absorb energy and are called endothermic. The energy change depends on the reaction and its conditions.'
  }

  if (
    text.includes('ppe') ||
    text.includes('glove') ||
    text.includes('goggle')
  ) {
    return 'Common laboratory PPE includes safety goggles, a lab coat, and suitable gloves when required. The correct protection depends on the chemicals and procedure. Follow your laboratory rules and instructor’s guidance.'
  }

  if (text.includes('ph')) {
    return 'pH indicates how acidic or basic an aqueous solution is. At about 25°C, pH 7 is neutral, values below 7 are acidic, and values above 7 are basic. Actual measurements depend on the solution and conditions.'
  }

  if (text.includes('acid')) {
    return 'An acid is a substance that can donate a proton (H⁺) in the Brønsted–Lowry model. Acids differ in strength, and concentrated acids may be hazardous. Never handle laboratory acids without proper training and supervision.'
  }

  if (text.includes('base')) {
    return 'A base can accept a proton in the Brønsted–Lowry model. In water, some bases produce hydroxide ions (OH⁻). Bases vary in strength, and some can be corrosive.'
  }

  if (text.includes('atom') || text.includes('molecule')) {
    return 'An atom is the basic unit of a chemical element. A molecule consists of two or more atoms chemically bonded together. For example, O₂ is a molecule made of two oxygen atoms.'
  }

  return 'Thanks for your question! This version of ChemShield uses a small set of predefined answers, so it cannot yet answer every chemistry topic. The live AI service has not been connected. Try asking about neutralization, acids, bases, pH, heat, or laboratory PPE.'
}

/* Suggested question chip */
function Suggestion({ text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-600 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
    >
      {text}
    </button>
  )
}

/* Tutor feature card */
function TutorFeature({ icon, title, text }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl">
        {icon}
      </div>

      <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </article>
  )
}

export default AITutor

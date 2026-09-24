import { useEffect, useState } from 'react'
import amexLogo from './assets/amex-logo.png'

type ApiStatus = 'checking' | 'online' | 'offline'

function App() {
  const [status, setStatus] = useState<ApiStatus>('checking')
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => {
        if (!res.ok) throw new Error('bad response')
        return res.json()
      })
      .then((data: { message: string }) => {
        setStatus('online')
        setMessage(data.message)
      })
      .catch(() => setStatus('offline'))
  }, [])

  return (
    <div className="min-h-screen bg-brand-white text-charcoal">
      <header className="border-b border-cool-steel/30 bg-brand-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <img src={amexLogo} alt="AMEX Healthcare" className="h-8 w-auto" />
          <span className="font-body text-sm font-medium tracking-wide text-charcoal/70">
            Hackathon Starter Template
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <p className="font-body text-sm font-semibold uppercase tracking-widest text-oxblood">
          We Care
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl font-light leading-tight text-charcoal md:text-5xl">
          Healthcare support where it matters most.
        </h1>
        <p className="mt-6 max-w-xl font-body text-base text-charcoal/80">
          This is your starting point. Replace this page with your track's UI, wire it up to
          the FastAPI backend in <code className="rounded bg-cool-steel/20 px-1.5 py-0.5">/backend</code>,
          and start building.
        </p>

        <div className="mt-10 flex items-center gap-3 rounded-lg border border-cool-steel/30 bg-white px-5 py-4">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              status === 'online'
                ? 'bg-dusty-olive'
                : status === 'offline'
                  ? 'bg-oxblood'
                  : 'bg-air-force-blue'
            }`}
          />
          <div className="font-body text-sm">
            {status === 'checking' && 'Checking connection to backend…'}
            {status === 'online' && (
              <>
                Backend connected — <span className="text-charcoal/70">{message}</span>
              </>
            )}
            {status === 'offline' && (
              <>
                Backend not reachable. Start it with{' '}
                <code className="rounded bg-cool-steel/20 px-1.5 py-0.5">uvicorn app.main:app --reload</code>{' '}
                in <code className="rounded bg-cool-steel/20 px-1.5 py-0.5">/backend</code>.
              </>
            )}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-cool-steel/30 p-5">
            <h3 className="text-lg font-medium text-charcoal">1. Read the README</h3>
            <p className="mt-2 font-body text-sm text-charcoal/70">
              The root README.md walks you through setup, your track, and submission.
            </p>
          </div>
          <div className="rounded-lg border border-cool-steel/30 p-5">
            <h3 className="text-lg font-medium text-charcoal">2. Build your track</h3>
            <p className="mt-2 font-body text-sm text-charcoal/70">
              Edit this page and add API routes in <code>/backend/app/routers</code>.
            </p>
          </div>
          <div className="rounded-lg border border-cool-steel/30 p-5">
            <h3 className="text-lg font-medium text-charcoal">3. Add resources</h3>
            <p className="mt-2 font-body text-sm text-charcoal/70">
              Put any data files your backend needs in the top-level <code>/resources</code> folder.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

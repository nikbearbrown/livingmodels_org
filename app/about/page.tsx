import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Living Models',
  description: 'Living Models — causal intelligence for the decisions that actually matter.',
}

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter mb-8">About</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <p>
              Living Models is a causal decision-support architecture built for organizations that need
              to reason about interventions, not just describe historical patterns. It is causal,
              counterfactual, continually updated, and treatment-oriented.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Team</h2>
            <p>
              Living Models was founded by <strong>Nik Bear Brown</strong>.{' '}
              <strong>Chris Selland</strong> is a contributor to the project.
              Together they bring experience in AI research, causal inference, and strategic
              decision-making to the mission of building decision intelligence infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Mission</h2>
            <p>
              Most analytics systems are built to describe the past. Living Models is built to
              reason about what happens when you change something — encoding mechanisms, not
              correlations, and producing ranked interventions evaluated by expected value.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What We Build</h2>
            <p>
              Living Models develops causal decision-support tools — the Knowledge Acquisition Tool
              for structured expert interviews, counterfactual reasoning engines, and treatment-oriented
              output systems that rank interventions against counterfactual trajectories.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Connect</h2>
            <p>
              Interested in Living Models? Read the series on Substack or reach out at{' '}
              <a href="mailto:hello@livingmodels.org" className="text-primary hover:underline">hello@livingmodels.org</a>.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 not-prose">
              <a href="https://github.com/nikbearbrown/Living-Models" target="_blank" rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-black text-white shadow hover:bg-gray-800 dark:border dark:border-input dark:bg-background dark:text-foreground dark:shadow-sm dark:hover:bg-accent dark:hover:text-accent-foreground">
                GitHub
              </a>
              <a href="https://www.hypothetical.ai/" target="_blank" rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-black text-white shadow hover:bg-gray-800 dark:border dark:border-input dark:bg-background dark:text-foreground dark:shadow-sm dark:hover:bg-accent dark:hover:text-accent-foreground">
                Substack
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

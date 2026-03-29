const buttonStyles =
  'inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-black text-white shadow hover:bg-gray-800 dark:border dark:border-input dark:bg-background dark:text-foreground dark:shadow-sm dark:hover:bg-accent dark:hover:text-accent-foreground'

const buttonOutline =
  'inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'

const FEATURES = [
  {
    title: 'CAUSAL, NOT CORRELATIONAL',
    description:
      'Living Models encodes mechanisms, not correlations. Recommendations are expressed as estimated interventional effects P(Y | do(X)) — not patterns observed in historical data.',
    link: 'Learn about the causal foundation',
  },
  {
    title: 'THE KNOWLEDGE ACQUISITION TOOL',
    description:
      'A structured expert interview that extracts implicit causal knowledge and converts it into a first-draft DAG in approximately 45 minutes — without requiring the expert to learn what a CPDAG is.',
    link: 'Explore the interview architecture',
  },
  {
    title: 'COUNTERFACTUAL REASONING',
    description:
      'Living Models can reason about what would have happened under conditions that never occurred — evaluating the cost of decisions not taken as rigorously as decisions that were.',
    link: 'See how counterfactuals work',
  },
  {
    title: 'TREATMENT-ORIENTED OUTPUT',
    description:
      'The output is not a description or a prediction. It is a ranked list of interventions evaluated by Expected Value of Intervention, compared against the counterfactual trajectory.',
    link: 'Understand intervention ranking',
  },
]

const BENEFITS = [
  {
    heading: 'FOR STRATEGY EXECUTIVES',
    items: [
      'Get causal answers to intervention questions, not correlation summaries',
      'Understand which levers actually move the outcomes you care about',
      'Receive ranked recommendations with auditable evidence and assumptions',
      'Know the expected cost of inaction, not just the expected value of action',
    ],
  },
  {
    heading: 'FOR DATA SCIENTISTS',
    items: [
      'Start from an expert-originated causal graph instead of building one from scratch',
      'Use the Knowledge Acquisition Tool output as structured input to NOTEARS / PC / GES',
      'Apply Double Machine Learning on a correctly specified causal structure',
      'Move from author to editor of the causal model',
    ],
  },
  {
    heading: 'FOR ORGANIZATIONS',
    items: [
      'Invert the standard workflow: extract knowledge first, formalize second',
      'Prevent wrong-model confidence — precise wrongness with tight confidence intervals',
      'Build decision intelligence that updates as new data arrives',
      'Surface the boundary of what your analytics can and cannot see',
    ],
  },
]

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Living Models
              </h1>
              <p className="text-lg text-muted-foreground">
                Causal Intelligence for the Decisions That Actually Matter
              </p>
              <p className="max-w-[540px] text-lg leading-relaxed">
                Most analytics systems are built to describe the past. Living Models is built to
                reason about what happens when you change something.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="https://www.hypothetical.ai/" target="_blank" rel="noopener noreferrer" className={buttonStyles}>
                  Read the Substack
                </a>
                <a href="https://github.com/nikbearbrown/Living-Models" target="_blank" rel="noopener noreferrer" className={buttonOutline}>
                  View on GitHub
                </a>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/3NFUo0lIVno?si=JIK5myAlBQ-VL6Z_"
                title="YouTube video player"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-3">
              Causal Decision Architecture
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Living Models is a causal decision-support architecture that is causal, counterfactual,
              continually updated, and treatment-oriented.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border bg-card p-8 shadow-sm flex flex-col"
              >
                <h3 className="text-lg font-bold tracking-wide mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {feature.description}
                </p>
                <a
                  href="#"
                  className="mt-6 text-sm font-medium text-foreground hover:underline"
                >
                  {feature.link} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="w-full py-16 md:py-24 bg-foreground text-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-background/60 mb-3">
              Who Benefits from Living Models?
            </h2>
            <p className="text-lg text-background/70 max-w-2xl mx-auto">
              Living Models creates value for everyone involved in the decision-making ecosystem.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.heading}
                className="rounded-lg border border-background/10 bg-background/5 p-8"
              >
                <h3 className="text-lg font-bold tracking-wide mb-4">
                  {benefit.heading}
                </h3>
                <ul className="space-y-3">
                  {benefit.items.map((item) => (
                    <li
                      key={item}
                      className="text-background/80 text-sm leading-relaxed flex gap-2"
                    >
                      <span className="text-background/40 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-[var(--bb-2)] text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-white/60 mb-3">
            The Question Was Always the Problem
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            The data was never the problem. It was always the question. Living Models is the attempt
            to build decision-support architecture that tells you not just what happened and what is
            likely to happen — but what you should do about it, and why that action and not another.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.hypothetical.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-bold tracking-wide transition-colors bg-white text-[var(--bb-2)] shadow hover:bg-white/90"
            >
              READ THE SERIES
            </a>
            <a
              href="https://github.com/nikbearbrown/Living-Models"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-bold tracking-wide transition-colors border border-white/30 text-white hover:bg-white/10"
            >
              VIEW README
            </a>
            <a
              href="mailto:hello@livingmodels.org"
              className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-bold tracking-wide transition-colors border border-white/30 text-white hover:bg-white/10"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="w-full py-16 md:py-24 bg-foreground text-background">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Let&apos;s Collaborate
          </h2>
          <p className="max-w-[600px] mx-auto text-background/70 text-lg mb-8">
            Whether you need causal decision-support infrastructure, a research partnership,
            or want to contribute to the project — let&apos;s talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Substack', href: 'https://www.hypothetical.ai/' },
              { name: 'GitHub', href: 'https://github.com/nikbearbrown/Living-Models' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors border border-background/30 text-background hover:bg-background/10"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

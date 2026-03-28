'use client'

import Link from 'next/link'

const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/nikbearbrown/Living-Models' },
  { name: 'Substack', href: 'https://www.hypothetical.ai/' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 mx-auto py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Hypothetical AI</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>
                <a href="mailto:hello@livingmodels.org" className="hover:text-foreground transition-colors">
                  hello@livingmodels.org
                </a>
              </p>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Platform</h3>
            <div className="flex flex-col gap-2">
              <a href="https://www.hypothetical.ai/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </a>
              <a href="https://www.hypothetical.ai/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Living Models Substack
              </a>
              <Link href="/livingmodels" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                What is Living Models?
              </Link>
            </div>
          </div>

          {/* Members */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Members</h3>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/nikbearbrown" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Nik Bear Brown
              </a>
              <a href="https://www.linkedin.com/in/cselland/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Chris Selland
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="flex flex-col gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/privacy/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          &copy; {currentYear} Hypothetical AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

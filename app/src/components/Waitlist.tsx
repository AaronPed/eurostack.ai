import { AlertTriangle, Mail, ArrowRight, Clock, Server, Shield } from 'lucide-react';

interface WaitlistProps {
  title: string;
  eyebrow?: string;
}

export default function Waitlist({ title, eyebrow = 'API Access' }: WaitlistProps) {
  return (
    <main className="min-h-screen bg-navy-100 pt-24">
      {/* Hero */}
      <section className="section-padding py-20 lg:py-32">
        <p className="font-mono text-xs text-alert uppercase tracking-widest mb-4">
          {eyebrow}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-ice uppercase tracking-wide mb-6">
          {title}
        </h1>
        <p className="text-slate-euro text-lg max-w-2xl leading-relaxed">
          Join the waitlist for the Eustack inference platform. We are selecting early partners
          for our private beta programme.
        </p>
      </section>

      {/* High demand banner */}
      <section className="section-padding pb-12">
        <div className="border border-alert/40 bg-alert/10 p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 bg-alert/20 flex items-center justify-center">
              <AlertTriangle size={28} className="text-alert" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-serif text-2xl text-ice uppercase tracking-wide mb-3">
              EARLY ACCESS — PRIVATE BETA WAITLIST
            </h2>
            <p className="text-slate-euro text-sm leading-relaxed mb-4">
              We are building the next generation of sovereign European AI infrastructure. To ensure
              our initial cohort receives dedicated compute and compliance support, we are manually
              selecting early partners. Apply below to reserve your place on the waitlist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:contact@eustack.ai?subject=Private%20Beta%20Waitlist%20Application"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Mail size={16} />
                APPLY FOR EARLY ACCESS
              </a>
              <a
                href="mailto:contact@eustack.ai?subject=Waitlist%20Question"
                className="border border-slate-euro/40 text-slate-euro px-8 py-3 font-mono text-sm tracking-widest uppercase transition-all duration-300 hover:border-ice hover:text-ice inline-flex items-center gap-2"
              >
                ASK A QUESTION
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What to include */}
      <section className="section-padding pb-20 lg:pb-32">
        <p className="font-mono text-xs text-slate-euro uppercase tracking-widest mb-4">
          Getting Started
        </p>
        <h2 className="font-serif text-3xl text-ice uppercase tracking-wide mb-12">
          WHAT TO INCLUDE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-euro/20">
          {[
            {
              icon: Mail,
              title: 'Organization Details',
              desc: 'Company name, industry, and a brief description of your use case.',
            },
            {
              icon: Server,
              title: 'Expected Workload',
              desc: 'Estimated tokens per month, peak concurrency, and latency requirements.',
            },
            {
              icon: Shield,
              title: 'Compliance Needs',
              desc: 'Required certifications (GDPR, FADP, ISO 27001, etc.) and any clearance requirements.'
            },
            {
              icon: Clock,
              title: 'Timeline',
              desc: 'When you need to be in production. We can expedite for urgent deployments.',
            },
            {
              icon: Mail,
              title: 'Contact Person',
              desc: 'Technical lead email and phone number for account setup coordination.',
            },
            {
              icon: Server,
              title: 'Preferred Region',
              desc: 'Zurich (CH), Frankfurt (DE), or Paris (FR). Multi-region failover available.',
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-navy-100 p-8 flex items-start gap-4 group hover:bg-navy-50 transition-colors duration-300"
              >
                <Icon
                  size={24}
                  className="text-slate-euro group-hover:text-alert transition-colors duration-300 flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="font-mono text-sm text-ice uppercase tracking-wider mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-euro text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pb-20 lg:pb-32">
        <div className="border border-slate-euro/20 p-10 lg:p-16 text-center">
          <h2 className="font-serif text-3xl text-ice uppercase tracking-wide mb-4">
            JOIN THE WAITLIST
          </h2>
          <p className="text-slate-euro max-w-xl mx-auto mb-4">
            Send your request to{' '}
            <a href="mailto:contact@eustack.ai" className="text-alert hover:underline">
              contact@eustack.ai
            </a>{' '}
            with your organization details and expected workload. Our team will be in touch
            as we expand the beta cohort.
          </p>
          <p className="text-slate-euro/60 text-sm max-w-xl mx-auto mb-8">
            The Eustack inference platform is currently in development. By submitting your
            information, you are joining a waitlist for early access. No payment or binding
            commitment is required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@eustack.ai?subject=Private%20Beta%20Waitlist%20Application"
              className="btn-primary inline-flex items-center gap-2 justify-center"
            >
              <Mail size={16} />
              APPLY FOR EARLY ACCESS
            </a>
            <a
              href="mailto:contact@eustack.ai?subject=Waitlist%20Question"
              className="border border-slate-euro/40 text-slate-euro px-8 py-3 font-mono text-sm tracking-widest uppercase transition-all duration-300 hover:border-ice hover:text-ice inline-flex items-center gap-2 justify-center"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

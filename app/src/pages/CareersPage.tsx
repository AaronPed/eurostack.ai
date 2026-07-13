import { Link } from 'react-router-dom';
import { MapPin, Briefcase, ArrowRight, Users, Coffee, Heart, GraduationCap } from 'lucide-react';

const benefits = [
  { icon: MapPin, title: 'Zurich HQ', desc: 'Bahnhofstrasse office in the heart of Zurich' },
  { icon: Users, title: 'Small Team', desc: 'Direct impact, no bureaucracy, flat hierarchy' },
  { icon: GraduationCap, title: 'Learning Budget', desc: 'EUR 3,000/year for conferences & courses' },
  { icon: Coffee, title: 'Flexible Work', desc: 'Hybrid schedule, 25 days PTO' },
  { icon: Heart, title: 'Health Insurance', desc: 'Premium Swiss health coverage' },
  { icon: Briefcase, title: 'Equity', desc: 'Meaningful stock options for all employees' },
];

const openings = [
  {
    title: 'Enterprise Sales Executive',
    department: 'Sales',
    location: 'Zurich, Switzerland',
    type: 'Full-time',
    description:
      'Drive revenue growth by selling sovereign AI infrastructure to European enterprises, government agencies, and defense contractors. You will own the full sales cycle from prospecting to close, working closely with our technical team to craft solutions.',
    requirements: [
      '5+ years of B2B enterprise sales experience',
      'Proven track record selling to DAX/SMI companies or public sector',
      'Fluency in German and English; French is a plus',
      'Understanding of cloud infrastructure and AI/ML concepts',
      'Existing network in European enterprise or defense sectors',
      'Willingness to travel across Europe',
    ],
  },
  {
    title: 'Senior Enterprise Sales Executive',
    department: 'Sales',
    location: 'Zurich, Switzerland',
    type: 'Full-time',
    description:
      'Lead our enterprise sales strategy for strategic accounts. Focus on large-scale deals with multinational corporations, EU institutions, and NATO allies seeking sovereign AI infrastructure.',
    requirements: [
      '8+ years of enterprise software sales',
      'Experience closing EUR 500K+ ARR deals',
      'Deep network in European C-suite and procurement',
      'Fluent in German, English, and ideally French or Italian',
      'Security clearance or ability to obtain one',
      'Experience selling regulated/secured technology',
    ],
  },
  {
    title: 'Field Deployment Engineer',
    department: 'Engineering',
    location: 'Zurich, Switzerland',
    type: 'Full-time',
    description:
      'Design, deploy, and operate on-premise LLM infrastructure at customer sites across Europe. From rack installation to model serving — you are the technical face of Eurostack in the field.',
    requirements: [
      '3+ years in infrastructure or DevOps engineering',
      'Deep experience with Kubernetes, Docker, and GPU clusters',
      'Strong Linux systems administration skills',
      'Experience with NVIDIA GPU drivers, CUDA, and networking',
      'Willingness to travel 40-60% across Europe',
      'German and English fluency required',
      'Security clearance (or eligible) strongly preferred',
    ],
  },
  {
    title: 'Senior Field Deployment Engineer',
    department: 'Engineering',
    location: 'Zurich, Switzerland',
    type: 'Full-time',
    description:
      'Lead complex on-premise deployments for classified and air-gapped environments. Architect bespoke infrastructure solutions for defense and intelligence clients. Mentor junior FDEs.',
    requirements: [
      '6+ years in infrastructure engineering or solutions architecture',
      'Proven experience with air-gapped and classified environments',
      'NATO SECRET clearance (or national equivalent) required',
      'Deep expertise in HPC, networking, and storage at scale',
      'Experience leading technical teams in the field',
      'Multilingual: German, English, and French preferred',
    ],
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-navy-100 pt-24">
      {/* Hero */}
      <section className="section-padding py-20 lg:py-32">
        <p className="font-mono text-xs text-alert uppercase tracking-widest mb-4">
          Join Us
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-ice uppercase tracking-wide mb-6">
          CAREERS
        </h1>
        <p className="text-slate-euro text-lg max-w-2xl leading-relaxed">
          We are building Europe's sovereign AI infrastructure from Zurich.
          Join a small, ambitious team where your work directly shapes the future of
          European digital independence.
        </p>
      </section>

      {/* Benefits */}
      <section className="section-padding pb-20 lg:pb-32">
        <p className="font-mono text-xs text-alert uppercase tracking-widest mb-4">
          What We Offer
        </p>
        <h2 className="font-serif text-3xl text-ice uppercase tracking-wide mb-12">
          BENEFITS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-euro/20">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-navy-100 p-8 flex items-start gap-4 group hover:bg-navy-50 transition-colors duration-300"
              >
                <Icon
                  size={24}
                  className="text-slate-euro group-hover:text-alert transition-colors duration-300 flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="font-mono text-sm text-ice uppercase tracking-wider mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-euro text-sm">{benefit.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Open positions */}
      <section className="section-padding pb-20 lg:pb-32">
        <p className="font-mono text-xs text-alert uppercase tracking-widest mb-4">
          Open Positions
        </p>
        <h2 className="font-serif text-3xl text-ice uppercase tracking-wide mb-12">
          OPEN ROLES
        </h2>

        <div className="space-y-6">
          {openings.map((job, index) => (
            <div
              key={index}
              className="border border-slate-euro/20 hover:border-alert/50 transition-all duration-300 p-8 lg:p-10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-alert uppercase tracking-wider">
                      {job.department}
                    </span>
                    <span className="text-slate-euro/30">|</span>
                    <span className="font-mono text-xs text-slate-euro uppercase tracking-wider">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-ice uppercase tracking-wide mb-2">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-euro">
                    <MapPin size={14} />
                    <span className="font-mono text-sm">{job.location}</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2 flex-shrink-0"
                >
                  APPLY NOW
                  <ArrowRight size={16} />
                </Link>
              </div>

              <p className="text-slate-euro text-sm leading-relaxed mb-6">
                {job.description}
              </p>

              <div>
                <p className="font-mono text-xs text-slate-euro uppercase tracking-widest mb-3">
                  Requirements
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {job.requirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-alert rounded-full mt-2 flex-shrink-0" />
                      <span className="text-ice/80 text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pb-20 lg:pb-32">
        <div className="border border-slate-euro/20 p-10 lg:p-16 text-center">
          <h2 className="font-serif text-3xl text-ice uppercase tracking-wide mb-4">
            DON'T SEE YOUR ROLE?
          </h2>
          <p className="text-slate-euro max-w-xl mx-auto mb-8">
            We are always looking for exceptional talent in ML infrastructure, distributed systems,
            and European sales. Send us your CV and tell us why you want to build sovereign AI.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            SEND OPEN APPLICATION
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

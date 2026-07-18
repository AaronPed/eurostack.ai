import { Shield, Lock, Server, Award, Globe, Cpu } from 'lucide-react';

const certifications = [
  { icon: Shield, name: 'ISO 27001', desc: 'Building toward Information Security Management certification.' },
  { icon: Lock, name: 'SOC 2 Type II', desc: 'Targeting Service Organization Controls compliance.' },
  { icon: Server, name: 'GDPR + FADP', desc: 'Designing infrastructure for EU and Swiss data protection regulation readiness.' },
  { icon: Award, name: 'ISMS', desc: 'Aligning with core BSI security frameworks.' },
  { icon: Globe, name: 'BSI', desc: 'Aligning with Bundesamt fuer Sicherheit in der Informationstechnik frameworks.' },
  { icon: Cpu, name: 'NATO SECRET', desc: 'Planning clearance capability for classified workloads.' },
];

const team = [
  {
    name: 'Lukas Weber',
    role: 'Chief Executive Officer',
    image: 'images/team-ceo.jpg',
    bio: 'Former McKinsey digital, ETH Zurich CS. Leading Eustack\'s mission for European AI sovereignty.',
  },
  {
    name: 'Marc Hoffmann',
    role: 'Chief Technology Officer',
    image: 'images/team-cto.jpg',
    bio: 'Ex-Google DeepMind, EPFL ML PhD. Architect of Eustack\'s inference platform.',
  },
  {
    name: 'Felix Bauer',
    role: 'Chief Operating Officer',
    image: 'images/team-coo.jpg',
    bio: 'Former AWS enterprise, HSG St. Gallen MBA. Scaling European infrastructure operations.',
  },
  {
    name: 'Jonas Keller',
    role: 'Senior Platform Engineer',
    image: 'images/team-eng1.jpg',
    bio: 'Distributed systems specialist. Building the low-latency inference engine.',
  },
  {
    name: 'David Mueller',
    role: 'ML Infrastructure Engineer',
    image: 'images/team-eng2.jpg',
    bio: 'GPU kernel optimization and model serving at scale.',
  },
  {
    name: 'Anna Schmidt',
    role: 'Sales & Operations',
    image: 'images/team-sales.jpg',
    bio: 'Enterprise SaaS sales. Connecting European organizations with sovereign AI.',
  },
  {
    name: 'Tobias Gerber',
    role: 'Field Deployment Engineer',
    image: 'images/team-fde.jpg',
    bio: 'On-premise infrastructure deployment. NATO SECRET cleared.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-navy-100 pt-24">
      {/* Hero */}
      <section className="section-padding py-20 lg:py-32">
        <p className="font-mono text-xs text-alert uppercase tracking-widest mb-4">
          Our Story
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-ice uppercase tracking-wide mb-6">
          ABOUT US
        </h1>
        <div className="max-w-3xl">
          <p className="text-slate-euro text-lg leading-relaxed mb-6">
            Eustack was founded on a single conviction: European organizations deserve access to
            the best open-source AI models without compromising their sovereignty. In a world where
            AI infrastructure is overwhelmingly controlled by US hyperscalers — subject to the Cloud Act,
            FISA, and other extraterritorial regulations — we offer a different path.
          </p>
          <p className="text-slate-euro text-lg leading-relaxed mb-6">
            We are building infrastructure to host the latest open-source models — GLM, DeepSeek,
            Mistral, Llama — exclusively in European datacenters across Switzerland, Germany, and
            France. Our infrastructure is being designed for ISO 27001 and SOC 2 compliance, with
            the security frameworks needed to handle sensitive workloads in defence, government,
            and critical infrastructure.
          </p>
          <p className="text-slate-euro text-lg leading-relaxed">
            Based in Zurich, our team combines deep expertise in machine learning, distributed systems,
            and European regulatory compliance. We believe AI sovereignty is not a feature — it is a
            fundamental right for every European organization.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding pb-20 lg:pb-32">
        <p className="font-mono text-xs text-alert uppercase tracking-widest mb-4">
          Trust & Compliance
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-ice uppercase tracking-wide mb-12">
          TARGET COMPLIANCE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-euro/20">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.name}
                className="bg-navy-100 p-8 flex items-start gap-4 group hover:bg-navy-50 transition-colors duration-300"
              >
                <Icon
                  size={28}
                  className="text-slate-euro group-hover:text-alert transition-colors duration-300 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="font-mono text-lg text-ice mb-1">{cert.name}</h3>
                  <p className="text-slate-euro text-sm">{cert.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Values */}
      <section className="section-padding pb-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="font-mono text-xs text-alert uppercase tracking-widest mb-4">
              Our Principles
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-ice uppercase tracking-wide mb-8">
              WHY EUSTACK?
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: 'Sovereign by Design',
                  text: 'Every request will be processed on European soil. Your data will never transit through US networks, never touch US servers, and never be subject to the Cloud Act or FISA.',
                },
                {
                  title: 'Best Open Models',
                  text: 'We will continuously evaluate and deploy the latest open-source models — GLM, DeepSeek, Mistral, Llama — so you always have access to cutting-edge performance.',
                },
                {
                  title: 'Competitive Pricing',
                  text: 'Our efficient European operations will allow us to offer inference at prices that beat US alternatives, priced in EUR.',
                },
                {
                  title: 'Military-Grade Security',
                  text: 'We are designing for ISO 27001, SOC 2, ISMS, and NATO SECRET clearance capability. Our platform will be equipped to handle the most sensitive workloads in defence, intelligence, and critical infrastructure.',
                },
              ].map((value, i) => (
                <div key={i}>
                  <h3 className="font-serif text-xl text-ice uppercase tracking-wide mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-euro text-sm leading-relaxed">{value.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="images/datacenter.jpg"
              alt="Eustack Datacenter"
              className="w-full h-full object-cover border border-slate-euro/20"
              style={{ minHeight: '400px' }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-navy-100/90 backdrop-blur-sm p-6">
              <p className="font-mono text-xs text-alert uppercase tracking-widest mb-1">
                Planned Zurich Datacenter
              </p>
              <p className="font-mono text-sm text-ice">
                Targeting Tier IV facility, ISO 27001, 99.99% uptime SLA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding pb-20 lg:pb-32">
        <p className="font-mono text-xs text-alert uppercase tracking-widest mb-4">
          The People
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-ice uppercase tracking-wide mb-4">
          MEET THE TEAM
        </h2>
        <p className="text-slate-euro text-sm mb-12 max-w-xl">
          Headquartered in Zurich, Switzerland. A small, focused team of engineers,
          operators, and deployment specialists building Europe's sovereign AI infrastructure.
        </p>

        {/* Founders */}
        <div className="mb-16">
          <p className="font-mono text-xs text-slate-euro uppercase tracking-widest mb-6">
            Founders
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.slice(0, 3).map((member) => (
              <div
                key={member.name}
                className="group border border-slate-euro/20 hover:border-alert/50 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-ice uppercase tracking-wide mb-1">
                    {member.name}
                  </h3>
                  <p className="font-mono text-xs text-alert uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate-euro text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <p className="font-mono text-xs text-slate-euro uppercase tracking-widest mb-6">
            Engineering & Operations
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.slice(3).map((member) => (
              <div
                key={member.name}
                className="group border border-slate-euro/20 hover:border-alert/50 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-ice uppercase tracking-wide mb-1">
                    {member.name}
                  </h3>
                  <p className="font-mono text-xs text-alert uppercase tracking-wider mb-2">
                    {member.role}
                  </p>
                  <p className="text-slate-euro text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

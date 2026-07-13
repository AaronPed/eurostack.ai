import { Shield, Lock, Server, Clock, Globe, Cpu, Zap, HardDrive } from 'lucide-react';

const gridItems = [
  {
    icon: Shield,
    metric: '99.99%',
    label: 'Uptime SLA Target',
    description: 'Enterprise-grade reliability backed by redundant European infrastructure.',
  },
  {
    icon: Lock,
    metric: 'GDPR',
    label: 'Ready',
    description: 'Designing for full EU data protection regulation readiness. No data will leave Europe.',
  },
  {
    icon: Server,
    metric: '< 50ms',
    label: 'Latency Target',
    description: 'Targeting sub-50ms response times from Zurich, Frankfurt, and Paris datacenters.',
  },
  {
    icon: Clock,
    metric: '24/7',
    label: 'Monitoring',
    description: 'Round-the-clock infrastructure monitoring with EU-based NOC teams.',
  },
  {
    icon: Globe,
    metric: '3',
    label: 'Regions',
    description: 'Switzerland, Germany, and France — all outside US jurisdiction.',
  },
  {
    icon: Cpu,
    metric: 'H100',
    label: 'GPUs',
    description: 'Latest NVIDIA H100 clusters for maximum inference throughput.',
  },
  {
    icon: Zap,
    metric: 'Auto',
    label: 'Scaling',
    description: 'Elastic compute that scales with your demand, instantly.',
  },
  {
    icon: HardDrive,
    metric: 'ISO 27001',
    label: 'Roadmap',
    description: 'Building toward information security management certification and SOC 2 Type II compliance.',
  },
];

export default function InfrastructureGrid() {
  return (
    <section className="bg-navy-100 section-padding py-32 lg:py-48">
      <div className="mb-16">
        <p className="font-mono text-xs text-slate-euro uppercase tracking-widest mb-2">
          Technical Specifications
        </p>
        <h2 className="font-serif text-4xl md:text-6xl text-ice uppercase tracking-wide">
          INFRASTRUCTURE
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-euro/20">
        {gridItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-navy-100 p-8 lg:p-10 group cursor-default transition-colors duration-300 hover:bg-alert/10"
            >
              <Icon
                size={24}
                className="text-slate-euro group-hover:text-alert transition-colors duration-300 mb-6"
              />
              <div className="mb-4">
                <span className="font-mono text-3xl lg:text-4xl text-ice group-hover:text-white transition-colors duration-300">
                  {item.metric}
                </span>
                <span className="block font-mono text-xs text-slate-euro uppercase tracking-widest mt-1">
                  {item.label}
                </span>
              </div>
              <p className="text-slate-euro text-sm leading-relaxed group-hover:text-ice/80 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

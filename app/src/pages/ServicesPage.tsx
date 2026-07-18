import { Link } from 'react-router-dom';
import { Code, Cloud, Wrench, ArrowRight, Shield, Server, Clock, Lock, Sparkles, Boxes, Layers, Target } from 'lucide-react';

const serviceImage: Record<string, string> = {
  api: 'fiber-optics',
  'private-cloud': 'datacenter',
  'white-glove': 'hyperloop',
  'fine-tuning': 'prism',
  'custom-hosting': 'datacenter',
  'batch-embeddings': 'fiber-optics',
};

const services = [
  {
    id: 'api',
    icon: Code,
    title: 'GENERIC LLM API',
    subtitle: 'RESTful Inference at Scale',
    description:
      'Production-grade API access to the best open-source models — GLM, DeepSeek, Mistral, Qwen — hosted exclusively on European infrastructure. Drop-in OpenAI-compatible endpoints. Targeting sub-50ms latency from Zurich, Frankfurt, and Paris.',
    features: [
      'OpenAI-compatible REST API',
      'Streaming & batch inference',
      'Auto-scaling compute clusters',
      'Multi-region failover',
      'Real-time usage analytics',
      'GDPR + FADP-compliant by design',
    ],
    details: [
      { icon: Shield, label: 'Security', value: 'ISO 27001 & SOC 2' },
      { icon: Server, label: 'Latency', value: '< 50ms average' },
      { icon: Clock, label: 'Uptime', value: '99.99% SLA' },
      { icon: Lock, label: 'Compliance', value: 'GDPR, FADP, ISMS' }
    ],
    cta: 'GET API KEY',
    ctaLink: '/contact',
  },
  {
    id: 'private-cloud',
    icon: Cloud,
    title: 'PRIVATE CLOUD LLM',
    subtitle: 'Isolated Compute, European Soil',
    description:
      'Your own dedicated GPU cluster running in our Swiss or German datacenters. Fully isolated from other tenants. Perfect for organizations handling sensitive data — healthcare, finance, government, defense — that cannot risk multi-tenant exposure.',
    features: [
      'Dedicated H100 GPU clusters',
      'Single-tenant isolation',
      'VPC network segmentation',
      'Custom model hosting',
      'Bring your own weights',
      '24/7 EU-based NOC support',
    ],
    details: [
      { icon: Shield, label: 'Isolation', value: 'Single-tenant' },
      { icon: Server, label: 'Hardware', value: 'NVIDIA H100x8 nodes' },
      { icon: Clock, label: 'Deploy', value: '< 48 hours' },
      { icon: Lock, label: 'Access', value: 'VPN + mTLS' },
    ],
    cta: 'REQUEST QUOTE',
    ctaLink: '/contact',
  },
  {
    id: 'white-glove',
    icon: Wrench,
    title: 'WHITE GLOVE FDE',
    subtitle: 'On-Premise LLM Infrastructure',
    description:
      'Our Field Deployment Engineers design, build, and operate full-scale LLM infrastructure directly on your premises. From rack installation to model serving — we handle everything. Air-gapped options available for classified environments.',
    features: [
      'Full hardware procurement & install',
      'Rack design & cooling planning',
      'Model optimization & deployment',
      'Air-gapped / classified options',
      'Ongoing maintenance & upgrades',
      'Security hardening & compliance',
    ],
    details: [
      { icon: Shield, label: 'Clearance', value: 'NATO SECRET capable' },
      { icon: Server, label: 'Scale', value: '10 to 1000+ GPUs' },
      { icon: Clock, label: 'Timeline', value: '4-8 weeks typical' },
      { icon: Lock, label: 'Network', value: 'Air-gapped available' },
    ],
    cta: 'CONTACT FDE TEAM',
    ctaLink: '/contact',
  },
  {
    id: 'fine-tuning',
    icon: Sparkles,
    title: 'FINE-TUNING & LORA',
    subtitle: 'Custom Model Adaptation',
    description:
      'Adapt open-source models to your domain with supervised fine-tuning and LoRA. We manage the training pipeline, dataset validation, and deployment — all on European infrastructure.',
    features: [
      'Full fine-tuning & LoRA',
      'Dataset curation & validation',
      'RLHF alignment pipelines',
      'Versioned model artifacts',
      'A/B testing & evaluation',
      'Deploy to API or private cluster',
    ],
    details: [
      { icon: Target, label: 'Method', value: 'SFT & LoRA' },
      { icon: Server, label: 'Base models', value: 'GLM, Mistral, Qwen' },
      { icon: Clock, label: 'Turnaround', value: '1-2 weeks' },
      { icon: Lock, label: 'Data', value: 'On-premise option' },
    ],
    cta: 'START A FINE-TUNE',
    ctaLink: '/contact',
  },
  {
    id: 'custom-hosting',
    icon: Boxes,
    title: 'CUSTOM MODEL HOSTING',
    subtitle: 'Bring Your Own Weights',
    description:
      'Deploy your own checkpoints, domain-specific models, or fine-tuned weights on our sovereign infrastructure. We handle optimization, scaling, and serving so your team does not have to.',
    features: [
      'BYO weights & checkpoints',
      'vLLM / TGI optimization',
      'Quantization (GPTQ, AWQ)',
      'Auto-scaling endpoints',
      'Private endpoint option',
      'Model versioning & rollback',
    ],
    details: [
      { icon: Shield, label: 'Formats', value: 'Safetensors, GGUF' },
      { icon: Server, label: 'Engines', value: 'vLLM, TGI' },
      { icon: Clock, label: 'Deploy', value: '< 24 hours' },
      { icon: Lock, label: 'Network', value: 'VPC or public' },
    ],
    cta: 'HOST YOUR MODEL',
    ctaLink: '/contact',
  },
  {
    id: 'batch-embeddings',
    icon: Layers,
    title: 'BATCH & EMBEDDINGS',
    subtitle: 'High-Throughput Async Workloads',
    description:
      'Process large datasets, document collections, and embedding jobs asynchronously. Ideal for RAG pipelines, search indexes, and offline inference at scale.',
    features: [
      'Async batch jobs',
      'Text & vision embeddings',
      'JSONL / Parquet input',
      'Queue-based processing',
      'Result export to your cloud',
      'Cost-optimized compute',
    ],
    details: [
      { icon: Shield, label: 'Throughput', value: '1M+ tokens/min' },
      { icon: Server, label: 'Input', value: 'JSONL, Parquet' },
      { icon: Clock, label: 'SLA', value: '24h turnaround' },
      { icon: Lock, label: 'Output', value: 'Encrypted export' },
    ],
    cta: 'REQUEST ACCESS',
    ctaLink: '/contact',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-navy-100 pt-24">
      {/* Hero */}
      <section className="section-padding py-20 lg:py-32">
        <p className="font-mono text-xs text-alert uppercase tracking-widest mb-4">
          What We Offer
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-ice uppercase tracking-wide mb-6">
          SERVICES
        </h1>
        <p className="text-slate-euro text-lg max-w-2xl leading-relaxed">
          Sovereign AI infrastructure from shared API access to fully managed on-premise deployments,
          custom model adaptation, and high-throughput batch workloads. Every option keeps your data
          under European jurisdiction.
        </p>
      </section>

      {/* Services */}
      <section className="section-padding pb-20 lg:pb-32 space-y-24 lg:space-y-32">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                isReversed ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={isReversed ? 'lg:order-2' : ''}>
                <div
                  className="relative aspect-video overflow-hidden border border-slate-euro/20"
                  style={{
                    backgroundImage: `url(images/${serviceImage[service.id]}.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-navy-100/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon size={64} className="text-alert/80" />
                  </div>
                </div>
              </div>

              <div className={isReversed ? 'lg:order-1' : ''}>
                <p className="font-mono text-xs text-alert uppercase tracking-widest mb-2">
                  {String(index + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-ice uppercase tracking-wide mb-2">
                  {service.title}
                </h2>
                <p className="font-mono text-sm text-slate-euro mb-6">{service.subtitle}</p>
                <p className="text-slate-euro leading-relaxed mb-8">{service.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-alert rounded-full mt-2 flex-shrink-0" />
                      <span className="text-ice text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 border-t border-slate-euro/10 pt-6">
                  {service.details.map((detail, i) => {
                    const DetailIcon = detail.icon;
                    return (
                      <div key={i}>
                        <div className="flex items-center gap-1.5 mb-1">
                          <DetailIcon size={12} className="text-slate-euro" />
                          <span className="font-mono text-xs text-slate-euro uppercase">
                            {detail.label}
                          </span>
                        </div>
                        <span className="font-mono text-sm text-ice">{detail.value}</span>
                      </div>
                    );
                  })}
                </div>

                <Link
                  to={service.ctaLink}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  {service.cta}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="section-padding pb-20 lg:pb-32">
        <div className="border border-alert/30 bg-alert/5 p-10 lg:p-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ice uppercase tracking-wide mb-4">
            NOT SURE WHICH TIER?
          </h2>
          <p className="text-slate-euro max-w-xl mx-auto mb-8">
            Our team will assess your workload, compliance requirements, and latency needs
            to recommend the optimal infrastructure setup.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            TALK TO AN EXPERT
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

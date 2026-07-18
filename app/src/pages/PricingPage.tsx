import { Link } from 'react-router-dom';
import { Check, X, Zap, Building, Server } from 'lucide-react';

const plans = [
  {
    name: 'Developer',
    icon: Zap,
    description: 'Perfect for prototyping and small-scale applications.',
    price: '0.002',
    priceUnit: 'per 1K tokens',
    features: [
      'Access to all open-source models',
      'Standard API rate limits',
      'Community support',
      'Zurich & Frankfurt regions',
      'GDPR + FADP compliant by default',
      '99.9% uptime SLA',
    ],
    excluded: [
      'Dedicated compute',
      'Private cloud deployment',
      'Custom model fine-tuning',
      'Priority support',
    ],
    cta: 'START FREE',
    ctaLink: '/contact',
    highlighted: false,
  },
  {
    name: 'Business',
    icon: Building,
    description: 'For production workloads requiring scale and reliability.',
    price: '0.0015',
    priceUnit: 'per 1K tokens',
    features: [
      'All Developer features',
      '2x higher rate limits',
      'Priority email support',
      'All 3 regions (CH, DE, FR)',
      'Advanced analytics dashboard',
      '99.95% uptime SLA',
      'SSO authentication',
      'Team management',
    ],
    excluded: [
      'Dedicated compute',
      'Private cloud deployment',
    ],
    cta: 'CONTACT SALES',
    ctaLink: '/contact',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    icon: Server,
    description: 'Custom deployments for maximum performance and security.',
    price: 'Custom',
    priceUnit: 'pricing',
    features: [
      'All Business features',
      'Dedicated H100 clusters',
      'Custom model hosting',
      '24/7 phone support',
      'Private cloud option',
      'On-premise deployment',
      '99.99% uptime SLA',
      'Dedicated account manager',
      'Custom contracts & invoicing',
    ],
    excluded: [],
    cta: 'CONTACT US',
    ctaLink: '/contact',
    highlighted: false,
  },
];

const modelPricing = [
  { model: 'GLM-5.2', input: '$0.003', output: '$0.008', context: '1M' },
  { model: 'DeepSeek V4 Pro', input: '$0.004', output: '$0.009', context: '1M' },
  { model: 'DeepSeek V4 Flash', input: '$0.001', output: '$0.003', context: '1M' },
  { model: 'Mistral Large 3', input: '$0.003', output: '$0.008', context: '256K' },
  { model: 'Llama 4 Scout', input: '$0.002', output: '$0.004', context: '10M' },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-navy-100 pt-24">
      {/* Hero */}
      <section className="section-padding py-20 lg:py-32">
        <p className="font-mono text-xs text-alert uppercase tracking-widest mb-4">
          Transparent Pricing
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-ice uppercase tracking-wide mb-6">
          PRICING
        </h1>
        <p className="text-slate-euro text-lg max-w-2xl leading-relaxed">
          Competitive pricing for sovereign European AI inference. No hidden fees,
          no data egress charges. Pay only for what you use, priced in EUR.
        </p>
      </section>

      {/* Plans */}
      <section className="section-padding pb-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative border p-8 lg:p-10 flex flex-col ${
                  plan.highlighted
                    ? 'border-alert bg-alert/5'
                    : 'border-slate-euro/20 bg-navy-100'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-8 bg-alert text-white font-mono text-xs px-3 py-1 uppercase tracking-wider">
                    Most Popular
                  </span>
                )}

                <div className="mb-8">
                  <Icon
                    size={28}
                    className={plan.highlighted ? 'text-alert' : 'text-slate-euro'}
                  />
                  <h3 className="font-serif text-2xl text-ice uppercase tracking-wide mt-4 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-euro text-sm">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <span className="font-mono text-4xl text-ice">{plan.price}</span>
                  <span className="font-mono text-sm text-slate-euro ml-2">{plan.priceUnit}</span>
                </div>

                <div className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check size={16} className="text-alert mt-0.5 flex-shrink-0" />
                      <span className="text-ice text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.excluded.map((feature, i) => (
                    <div key={`ex-${i}`} className="flex items-start gap-3">
                      <X size={16} className="text-slate-euro/40 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-euro/40 text-sm line-through">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={plan.ctaLink}
                  className={`text-center py-3 font-mono text-sm tracking-widest uppercase transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-alert text-white hover:bg-alert/90'
                      : 'border border-slate-euro/40 text-slate-euro hover:border-ice hover:text-ice'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Model pricing table */}
      <section className="section-padding pb-20 lg:pb-32">
        <div className="mb-12">
          <h2 className="font-serif text-3xl text-ice uppercase tracking-wide mb-2">
            Per-Model Pricing
          </h2>
          <p className="text-slate-euro text-sm">
            All prices per 1,000 tokens. Input and output priced separately.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-slate-euro/20">
            <thead>
              <tr className="bg-navy-50">
                <th className="text-left p-4 font-mono text-xs text-slate-euro uppercase tracking-wider border-b border-slate-euro/20">
                  Model
                </th>
                <th className="text-left p-4 font-mono text-xs text-slate-euro uppercase tracking-wider border-b border-slate-euro/20">
                  Input (per 1K)
                </th>
                <th className="text-left p-4 font-mono text-xs text-slate-euro uppercase tracking-wider border-b border-slate-euro/20">
                  Output (per 1K)
                </th>
                <th className="text-left p-4 font-mono text-xs text-slate-euro uppercase tracking-wider border-b border-slate-euro/20">
                  Context Window
                </th>
              </tr>
            </thead>
            <tbody>
              {modelPricing.map((model, i) => (
                <tr
                  key={i}
                  className="border-b border-slate-euro/10 hover:bg-navy-50/50 transition-colors"
                >
                  <td className="p-4 font-mono text-ice">{model.model}</td>
                  <td className="p-4 font-mono text-alert">{model.input}</td>
                  <td className="p-4 font-mono text-ice/80">{model.output}</td>
                  <td className="p-4 font-mono text-slate-euro">{model.context}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sovereignty note */}
      <section className="section-padding pb-20 lg:pb-32">
        <div className="border border-slate-euro/20 p-8 lg:p-12 bg-navy-50/30">
          <h3 className="font-serif text-2xl text-ice uppercase tracking-wide mb-4">
            Why Eustack Pricing?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="font-mono text-xs text-alert uppercase tracking-widest mb-2">
                No Egress Fees
              </p>
              <p className="text-slate-euro text-sm leading-relaxed">
                Unlike US hyperscalers, we don't charge for data transfer out.
                Your API responses are free of egress charges.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs text-alert uppercase tracking-widest mb-2">
                EUR Pricing
              </p>
              <p className="text-slate-euro text-sm leading-relaxed">
                All prices are in Euros. No currency conversion surprises,
                no USD exposure on your European balance sheet.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs text-alert uppercase tracking-widest mb-2">
                Volume Discounts
              </p>
              <p className="text-slate-euro text-sm leading-relaxed">
                Automatic tiered discounts at 10M, 100M, and 1B+ tokens/month.
                Enterprise customers receive custom committed-use pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

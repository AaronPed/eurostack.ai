import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';

const inquiryTypes = [
  'API Access',
  'Private Cloud',
  'White Glove / On-Premise',
  'Sales Inquiry',
  'Partnership',
  'Careers / Job Application',
  'Press',
  'Other',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-navy-100 pt-24">
      {/* Hero */}
      <section className="section-padding py-20 lg:py-32">
        <p className="font-mono text-xs text-alert uppercase tracking-widest mb-4">
          Get In Touch
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-ice uppercase tracking-wide mb-6">
          CONTACT
        </h1>
        <p className="text-slate-euro text-lg max-w-2xl leading-relaxed">
          Whether you are ready to deploy sovereign AI infrastructure or just exploring your options,
          our team is here to help. Based in Zurich, serving all of Europe.
        </p>
      </section>

      {/* Contact grid */}
      <section className="section-padding pb-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="border border-alert/30 bg-alert/5 p-12 text-center">
                <CheckCircle size={48} className="text-alert mx-auto mb-6" />
                <h2 className="font-serif text-2xl text-ice uppercase tracking-wide mb-4">
                  MESSAGE RECEIVED
                </h2>
                <p className="text-slate-euro max-w-md mx-auto">
                  Thank you for reaching out. Our team will respond within 24 hours.
                  For urgent inquiries, please call our Zurich office directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs text-slate-euro uppercase tracking-widest mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-navy-50 border border-slate-euro/30 text-ice px-4 py-3 font-mono text-sm focus:outline-none focus:border-alert transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-euro uppercase tracking-widest mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-navy-50 border border-slate-euro/30 text-ice px-4 py-3 font-mono text-sm focus:outline-none focus:border-alert transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs text-slate-euro uppercase tracking-widest mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full bg-navy-50 border border-slate-euro/30 text-ice px-4 py-3 font-mono text-sm focus:outline-none focus:border-alert transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-euro uppercase tracking-widest mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      required
                      value={form.inquiryType}
                      onChange={handleChange}
                      className="w-full bg-navy-50 border border-slate-euro/30 text-ice px-4 py-3 font-mono text-sm focus:outline-none focus:border-alert transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-euro uppercase tracking-widest mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-navy-50 border border-slate-euro/30 text-ice px-4 py-3 font-mono text-sm focus:outline-none focus:border-alert transition-colors resize-none"
                    placeholder="Tell us about your project, requirements, or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  SEND MESSAGE
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="font-mono text-xs text-slate-euro uppercase tracking-widest mb-4">
                Headquarters
              </p>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-alert flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-ice text-sm">
                    Eurostack AI AG<br />
                    Bahnhofstrasse 42<br />
                    8001 Zurich, Switzerland
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs text-slate-euro uppercase tracking-widest mb-4">
                Contact
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-alert flex-shrink-0" />
                  <span className="text-ice text-sm font-mono">contact@eurostack.ai</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-alert flex-shrink-0" />
                  <span className="text-ice text-sm font-mono">+41 44 123 4567</span>
                </div>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs text-slate-euro uppercase tracking-widest mb-4">
                Office Hours
              </p>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-alert flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-ice text-sm">
                    Monday – Friday<br />
                    08:00 – 18:00 CET
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-slate-euro/20 p-6">
              <p className="font-mono text-xs text-alert uppercase tracking-widest mb-3">
                Response Time
              </p>
              <p className="text-slate-euro text-sm leading-relaxed">
                We aim to respond to all inquiries within 24 hours during business days.
                For enterprise and classified deployments, a dedicated account manager
                will be assigned within 4 hours.
              </p>
            </div>

            <div className="border border-slate-euro/20 p-6">
              <p className="font-mono text-xs text-alert uppercase tracking-widest mb-3">
                Security Inquiries
              </p>
              <p className="text-slate-euro text-sm leading-relaxed">
                For classified or defense-related deployments, please contact our
                security team directly at{' '}
                <span className="text-ice font-mono">contact@eurostack.ai</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

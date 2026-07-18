import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

export default function GlobalExecution() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="images/hyperloop.jpg"
          alt="European infrastructure"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(7, 26, 46, 0.95) 0%, rgba(7, 26, 46, 0.85) 40%, rgba(7, 26, 46, 0.3) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding py-32 lg:py-48 flex items-center min-h-screen">
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-alert uppercase tracking-widest mb-4">
            Global Presence
          </p>
          <h2 className="font-serif text-5xl md:text-7xl text-ice uppercase tracking-wide leading-none mb-8">
            LOW LATENCY.<br />HIGH SECURITY.
          </h2>
          <p className="text-slate-euro text-lg leading-relaxed mb-10 max-w-xl">
            Our inference clusters will operate from Tier IV datacenters in Zurich, Frankfurt, and Paris.
            Your data will never leave European jurisdiction. Fully compliant with GDPR, FADP, ISO 27001,
            and SOC 2 Type II standards. No Cloud Act exposure. No US regulatory interference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              VIEW LOCATIONS
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="border border-slate-euro/40 text-slate-euro px-8 py-3 font-mono text-sm tracking-widest uppercase transition-all duration-300 hover:border-ice hover:text-ice inline-flex items-center gap-2"
            >
              LEARN MORE
            </Link>
          </div>

          {/* Location cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { city: 'Zurich', country: 'Switzerland', flag: 'CH' },
              { city: 'Frankfurt', country: 'Germany', flag: 'DE' },
              { city: 'Paris', country: 'France', flag: 'FR' },
            ].map((loc) => (
              <div
                key={loc.city}
                className="border border-slate-euro/20 p-4 flex items-center gap-3 hover:border-alert/50 transition-colors duration-300"
              >
                <MapPin size={16} className="text-alert" />
                <div>
                  <p className="font-mono text-sm text-ice">{loc.city}</p>
                  <p className="font-mono text-xs text-slate-euro">{loc.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

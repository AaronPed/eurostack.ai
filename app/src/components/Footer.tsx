import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Server, Cpu } from 'lucide-react';

const footerLinks = [
  { label: 'MODELS', path: '/#models' },
  { label: 'PRICING', path: '/pricing' },
  { label: 'DOCUMENTATION', path: '/docs' },
  { label: 'SERVICES', path: '/services' },
  { label: 'ABOUT', path: '/about' },
  { label: 'CAREERS', path: '/careers' },
  { label: 'CONTACT', path: '/contact' },
];

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const cet = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Zurich',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(now);
      setTime(cet);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-navy-100 border-t border-slate-euro/20">
      <div className="section-padding py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main nav links */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-serif text-3xl md:text-5xl lg:text-6xl text-ice/60 hover:text-alert transition-colors duration-300 tracking-wide uppercase leading-tight"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Side info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <p className="font-mono text-xs text-slate-euro uppercase tracking-widest mb-2">
                  Headquarters
                </p>
                <p className="text-ice text-sm">
                  Bahnhofstrasse 42<br />
                  8001 Zurich, Switzerland
                </p>
              </div>

              <div>
                <p className="font-mono text-xs text-slate-euro uppercase tracking-widest mb-2">
                  Datacenters
                </p>
                <p className="text-ice text-sm">
                  Zurich, CH<br />
                  Frankfurt, DE<br />
                  Paris, FR
                </p>
              </div>

              <div>
                <p className="font-mono text-xs text-slate-euro uppercase tracking-widest mb-3">
                  Planned Certifications
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-1.5 text-xs text-slate-euro border border-slate-euro/30 px-2 py-1">
                    <Shield size={12} /> ISO 27001
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-euro border border-slate-euro/30 px-2 py-1">
                    <Lock size={12} /> SOC 2
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-euro border border-slate-euro/30 px-2 py-1">
                    <Server size={12} /> GDPR + FADP
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-euro border border-slate-euro/30 px-2 py-1">
                    <Cpu size={12} /> ISMS
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <p className="font-mono text-xs text-slate-euro uppercase tracking-widest mb-1">
                Local Time (CET)
              </p>
              <p className="font-mono text-3xl text-ice tracking-wider">
                {time}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-euro/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono text-xs text-slate-euro">
            &copy; {new Date().getFullYear()} Eustack AI AG. All rights reserved.
          </p>
          <p className="font-mono text-xs text-slate-euro/60">
            Sovereign European Infrastructure. Free from the Cloud Act.
          </p>
        </div>
      </div>
    </footer>
  );
}

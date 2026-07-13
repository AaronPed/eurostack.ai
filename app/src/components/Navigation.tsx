import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Models', path: '/#models' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Docs', path: '/docs' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
  { label: 'Account', path: '/account' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      const id = path.replace('/#', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-100/95 backdrop-blur-md border-b border-slate-euro/20'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between section-padding h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-xl font-medium text-ice tracking-wide">
              eurostack<span className="text-alert">.</span>ai
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleAnchorClick(e, link.path)}
                className="text-sm font-mono text-slate-euro hover:text-ice transition-colors duration-300 tracking-wider uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-ice p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-navy-100/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={(e) => {
                handleAnchorClick(e, link.path);
                setMobileOpen(false);
              }}
              className="text-2xl font-serif text-ice hover:text-alert transition-colors duration-300 tracking-widest uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

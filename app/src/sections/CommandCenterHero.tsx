import { Link } from 'react-router-dom';
import SovereignDataStreams from '../components/SovereignDataStreams';

export default function CommandCenterHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <SovereignDataStreams />

      <div className="relative z-10 flex flex-col items-center justify-center h-full section-padding">
        <h1
          className="font-serif text-ice uppercase leading-none tracking-wide text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 14rem)' }}
        >
          EUROPEAN<br />INFERENCE
        </h1>

        <p className="mt-8 font-mono text-slate-euro text-sm md:text-base tracking-widest uppercase text-center max-w-2xl">
          GLM-5.2, DeepSeek V4, Mistral Large 3, Llama 4 Scout. European datacenters. Free from the Cloud Act.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link to="/account" className="btn-primary text-center">
            GET API ACCESS
          </Link>
          <Link
            to="/pricing"
            className="border border-slate-euro/40 text-slate-euro px-8 py-3 font-mono text-sm tracking-widest uppercase transition-all duration-300 hover:border-ice hover:text-ice"
          >
            VIEW PRICING
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-mono text-xs text-slate-euro uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-euro to-transparent" />
      </div>
    </section>
  );
}

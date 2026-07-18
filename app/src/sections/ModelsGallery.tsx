import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const models = [
  {
    name: 'GLM-5.2',
    image: 'images/fiber-optics.jpg',
    params: '744B Total / 40B Active',
    license: 'MIT',
    description:
      'Z.ai flagship — SOTA on SWE-Bench Pro for agentic coding. 1M-token context, MIT license. The best open-weight coding model of 2026.',
    benchmark: 'SWE-Bench Pro: SOTA',
  },
  {
    name: 'DeepSeek V4 Pro',
    image: 'images/prism.jpg',
    params: '1.6T Total / 49B Active',
    license: 'MIT',
    description:
      'Frontier MoE with 1M context and unmatched reasoning. Leads all models on LiveCodeBench. MIT license.',
    benchmark: 'LiveCodeBench: 93.5%',
  },
  {
    name: 'DeepSeek V4 Flash',
    image: 'images/hyperloop.jpg',
    params: '284B Total / 13B Active',
    license: 'MIT',
    description:
      'Speed-optimized MoE variant — runs on a single H100. 1M context, best cost-efficiency for high-throughput workloads.',
    benchmark: 'LiveCodeBench: 91.6%',
  },
  {
    name: 'Mistral Large 3',
    image: 'images/datacenter.jpg',
    params: '675B Total / 41B Active',
    license: 'Apache 2.0',
    description:
      'European flagship — 256K context, native multimodal, Apache 2.0. GPU-optimized for single-node deployment.',
    benchmark: 'MMLU-Pro: 73.1%',
  },
  {
    name: 'Qwen3-VL',
    image: 'images/prism.jpg',
    params: '235B Total / 22B Active',
    license: 'Apache 2.0',
    description:
      'Alibaba multimodal flagship — Apache 2.0 vision-language model with strong reasoning and long-context understanding. No EU usage restrictions.',
    benchmark: 'Vision: SOTA-class',
  },
];

export default function ModelsGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!section || !track || !progress) return;

    const items = track.querySelectorAll<HTMLElement>('.model-item');
    const totalWidth = track.scrollWidth - window.innerWidth;

    const scrollTween = gsap.to(track, {
      x: -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => `+=${totalWidth}`,
        onUpdate: (self) => {
          gsap.set(progress, { scaleX: self.progress });
        },
      },
    });

    items.forEach((item) => {
      const imgWrap = item.querySelector<HTMLElement>('.img-wrapper');
      const content = item.querySelector<HTMLElement>('.content-card');
      if (!imgWrap || !content) return;

      gsap.fromTo(
        imgWrap,
        { opacity: 0.3, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          ease: 'sine.inOut',
          scrollTrigger: {
            trigger: item,
            containerAnimation: scrollTween,
            scrub: true,
            start: 'left right',
            end: 'left center',
          },
        }
      );

      gsap.fromTo(
        content,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'sine.inOut',
          scrollTrigger: {
            trigger: item,
            containerAnimation: scrollTween,
            scrub: true,
            start: 'left 80%',
            end: 'left center',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === section || st.vars.containerAnimation === scrollTween) {
          st.kill();
        }
      });
      scrollTween.kill();
    };
  }, []);

  return (
    <section id="models" ref={sectionRef} className="relative overflow-hidden bg-navy-100">
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-euro/20 z-30">
        <div
          ref={progressRef}
          className="h-full bg-alert origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      <div className="absolute top-8 left-0 z-20 section-padding">
        <p className="font-mono text-xs text-slate-euro uppercase tracking-widest mb-2">
          Available Models — July 2026
        </p>
        <h2 className="font-serif text-4xl md:text-6xl text-ice uppercase tracking-wide">
          THE MODELS
        </h2>
      </div>

      <div
        ref={trackRef}
        className="flex items-center h-screen gap-8 pl-[5vw] pt-24"
        style={{ width: 'max-content' }}
      >
        {models.map((model, index) => (
          <div
            key={index}
            className="model-item relative w-[40vw] h-[60vh] flex-shrink-0"
          >
            <div className="img-wrapper absolute inset-0 overflow-hidden">
              <img
                src={model.image}
                alt={model.name}
                className="model-img w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy-100/50" />
            </div>

            <div className="content-card absolute bottom-0 left-0 right-0 bg-navy-100/95 border-t border-slate-euro/30 p-6 lg:p-8">
              <p className="font-mono text-xs text-alert uppercase tracking-widest mb-2">
                {model.params}
              </p>
              <h3 className="text-ice text-2xl lg:text-3xl font-serif mb-3">{model.name}</h3>
              <p className="text-slate-euro font-sans text-sm mb-4 leading-relaxed">
                {model.description}
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <p className="font-mono text-xs text-slate-euro uppercase tracking-wider">License</p>
                  <p className="font-mono text-lg text-ice">{model.license}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-slate-euro uppercase tracking-wider">Benchmark</p>
                  <p className="font-mono text-lg text-ice">{model.benchmark}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="w-[20vw] flex-shrink-0" />
      </div>
    </section>
  );
}

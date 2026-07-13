import { useRef, useEffect, useCallback } from 'react';

interface RibbonData {
  basePoints: { x: number; y: number; baseY: number; angle: number; speed: number }[];
  sineOffsets: number[];
  spacingX: number;
  numRibbons: number;
  totalPoints: number;
}

function generateRibbonPoints(width: number, height: number): RibbonData {
  const totalPoints = 12;
  const numRibbons = 3;
  const spacingX = width / (totalPoints - 1);
  const basePoints: RibbonData['basePoints'] = [];
  const sineOffsets: number[] = [];

  for (let r = 0; r < numRibbons; r++) {
    const normalizedPos = numRibbons > 1 ? r / (numRibbons - 1) : 0.5;
    const yOffset = height * 0.3 + (normalizedPos - 0.5) * (height * 0.25);

    for (let i = 0; i < totalPoints; i++) {
      const normalizedX = i / (totalPoints - 1);
      basePoints.push({
        x: i * spacingX,
        y: yOffset,
        baseY: yOffset,
        angle: (r * 0.7) + (normalizedX * Math.PI * 0.5),
        speed: 0.008 + (r * 0.004) + (normalizedX * 0.005),
      });
      sineOffsets.push(Math.random() * Math.PI * 2);
    }
  }

  return { basePoints, sineOffsets, spacingX, numRibbons, totalPoints };
}

function drawBackgroundLayer(
  time: number,
  bgCtx: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number,
  basePoints: RibbonData['basePoints'],
  sineOffsets: number[],
  _spacingX: number,
  numRibbons: number,
  totalPoints: number
) {
  bgCtx.fillStyle = 'rgba(7, 26, 46, 0.25)';
  bgCtx.fillRect(0, 0, canvasWidth, canvasHeight);
  bgCtx.lineWidth = 1;

  for (let r = 0; r < numRibbons; r++) {
    const baseIndex = r * totalPoints;
    const currentPoints: { x: number; y: number }[] = [];

    for (let i = 0; i < totalPoints; i++) {
      const pt = basePoints[baseIndex + i];
      const sineWave = Math.sin(time * pt.speed + sineOffsets[baseIndex + i] + (i * 0.3));
      const y = pt.baseY + (sineWave * (30 + r * 12));
      currentPoints.push({ x: pt.x, y });
    }

    const grad = bgCtx.createLinearGradient(0, 0, canvasWidth, 0);
    grad.addColorStop(0, 'rgba(107, 139, 164, 0)');
    grad.addColorStop(0.5, 'rgba(107, 139, 164, 0.08)');
    grad.addColorStop(1, 'rgba(107, 139, 164, 0)');
    bgCtx.strokeStyle = grad;

    bgCtx.beginPath();
    bgCtx.moveTo(currentPoints[0].x, currentPoints[0].y);
    for (let i = 0; i < currentPoints.length - 1; i++) {
      const cpX = (currentPoints[i].x + currentPoints[i + 1].x) / 2;
      const cpY = (currentPoints[i].y + currentPoints[i + 1].y) / 2;
      bgCtx.quadraticCurveTo(currentPoints[i].x, currentPoints[i].y, cpX, cpY);
    }
    bgCtx.stroke();
  }
}

function drawForegroundLayer(
  time: number,
  fgCtx: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number,
  basePoints: RibbonData['basePoints'],
  sineOffsets: number[],
  _spacingX: number,
  numRibbons: number,
  totalPoints: number
) {
  fgCtx.clearRect(0, 0, canvasWidth, canvasHeight);

  for (let r = 0; r < numRibbons; r++) {
    const baseIndex = r * totalPoints;
    const speedMultiplier = 1.0 + (r * 0.2);
    const currentPoints: { x: number; y: number }[] = [];

    for (let i = 0; i < totalPoints; i++) {
      const pt = basePoints[baseIndex + i];
      const sineWave = Math.sin((time * speedMultiplier) * pt.speed + sineOffsets[baseIndex + i] + (i * 0.3));
      const y = pt.baseY + (sineWave * (30 + r * 12));
      currentPoints.push({ x: pt.x, y });
    }

    // Bright leading line
    const grad = fgCtx.createLinearGradient(0, 0, canvasWidth, 0);
    grad.addColorStop(0, 'rgba(235, 247, 255, 0.05)');
    grad.addColorStop(0.2 + (r * 0.1), 'rgba(255, 51, 51, 0.5)');
    grad.addColorStop(0.8 - (r * 0.1), 'rgba(255, 51, 51, 0.5)');
    grad.addColorStop(1, 'rgba(235, 247, 255, 0.05)');
    fgCtx.strokeStyle = grad;
    fgCtx.lineWidth = 1.5;
    fgCtx.shadowBlur = 12;
    fgCtx.shadowColor = '#FF3333';

    fgCtx.beginPath();
    fgCtx.moveTo(currentPoints[0].x, currentPoints[0].y);
    for (let i = 0; i < currentPoints.length - 1; i++) {
      const cpX = (currentPoints[i].x + currentPoints[i + 1].x) / 2;
      const cpY = (currentPoints[i].y + currentPoints[i + 1].y) / 2;
      fgCtx.quadraticCurveTo(currentPoints[i].x, currentPoints[i].y, cpX, cpY);
    }
    fgCtx.stroke();

    // Ice blue core line
    const coreGrad = fgCtx.createLinearGradient(0, 0, canvasWidth, 0);
    coreGrad.addColorStop(0, 'rgba(235, 247, 255, 0)');
    coreGrad.addColorStop(0.5, 'rgba(235, 247, 255, 0.5)');
    coreGrad.addColorStop(1, 'rgba(235, 247, 255, 0)');
    fgCtx.strokeStyle = coreGrad;
    fgCtx.lineWidth = 0.8;
    fgCtx.shadowBlur = 0;

    fgCtx.beginPath();
    fgCtx.moveTo(currentPoints[0].x, currentPoints[0].y);
    for (let i = 0; i < currentPoints.length - 1; i++) {
      const cpX = (currentPoints[i].x + currentPoints[i + 1].x) / 2;
      const cpY = (currentPoints[i].y + currentPoints[i + 1].y) / 2;
      fgCtx.quadraticCurveTo(currentPoints[i].x, currentPoints[i].y, cpX, cpY);
    }
    fgCtx.stroke();
  }
}

interface SovereignDataStreamsProps {
  className?: string;
  slowMode?: boolean;
}

export default function SovereignDataStreams({ className = '', slowMode = false }: SovereignDataStreamsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const fgCanvasRef = useRef<HTMLCanvasElement>(null);
  const ribbonDataRef = useRef<RibbonData | null>(null);
  const rafRef = useRef<number>(0);
  const visibleRef = useRef(true);

  const resize = useCallback(() => {
    const container = containerRef.current;
    const bgCanvas = bgCanvasRef.current;
    const fgCanvas = fgCanvasRef.current;
    if (!container || !bgCanvas || !fgCanvas) return;

    const w = container.offsetWidth || window.innerWidth;
    const h = container.offsetHeight || window.innerHeight;

    bgCanvas.width = w;
    bgCanvas.height = h;
    fgCanvas.width = w;
    fgCanvas.height = h;

    const bgCtx = bgCanvas.getContext('2d');
    if (bgCtx) {
      bgCtx.fillStyle = '#071A2E';
      bgCtx.fillRect(0, 0, w, h);
    }

    ribbonDataRef.current = generateRibbonPoints(w, h);
  }, []);

  useEffect(() => {
    resize();

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const bgCanvas = bgCanvasRef.current;
    const fgCanvas = fgCanvasRef.current;
    if (!bgCanvas || !fgCanvas) return;

    const bgCtx = bgCanvas.getContext('2d');
    const fgCtx = fgCanvas.getContext('2d');
    if (!bgCtx || !fgCtx) return;

    const timeScale = slowMode ? 0.3 : 1.0;

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);

      if (!visibleRef.current || !ribbonDataRef.current) return;

      const time = performance.now() * 0.001 * timeScale;
      const { basePoints, sineOffsets, spacingX, numRibbons, totalPoints } = ribbonDataRef.current;

      drawBackgroundLayer(
        time, bgCtx, bgCanvas.width, bgCanvas.height,
        basePoints, sineOffsets, spacingX, numRibbons, totalPoints
      );
      drawForegroundLayer(
        time, fgCtx, fgCanvas.width, fgCanvas.height,
        basePoints, sineOffsets, spacingX, numRibbons, totalPoints
      );
    };

    animate();

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [resize, slowMode]);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      <canvas
        ref={bgCanvasRef}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      <canvas
        ref={fgCanvasRef}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
    </div>
  );
}

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const ScratchCard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Gold gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#C9A84C");
    gradient.addColorStop(0.5, "#E8D48B");
    gradient.addColorStop(1, "#C9A84C");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Text
    ctx.fillStyle = "#A08030";
    ctx.font = "bold 16px 'Cormorant Garamond', serif";
    ctx.textAlign = "center";
    ctx.fillText("✦ Scratch to Reveal ✦", canvas.width / 2, canvas.height / 2 + 6);
  }, []);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2);
    ctx.fill();

    // Check percentage scratched
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }
    if (transparent / (imageData.data.length / 4) > 0.5) {
      setIsRevealed(true);
    }
  };

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
    }
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const handleStart = () => setIsScratching(true);
  const handleEnd = () => setIsScratching(false);
  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isScratching) return;
    e.preventDefault();
    const { x, y } = getPos(e);
    scratch(x, y);
  };

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-sm mx-auto text-center"
      >
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">
          Save the Date
        </p>

        <div
          ref={containerRef}
          className="relative w-full h-48 rounded-xl overflow-hidden border-2 border-gold glow-gold"
        >
          {/* Content underneath */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-champagne">
            <p className="font-serif text-sm tracking-[0.2em] uppercase text-muted-foreground mb-1">
              Wedding Date
            </p>
            <h3 className="font-script text-3xl text-gold mb-2">15 August 2025</h3>
            <p className="font-serif text-foreground">St. Mary's Church</p>
            <p className="font-serif text-muted-foreground text-sm mt-1">Reception at 6 PM</p>
          </div>

          {/* Scratch canvas */}
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full cursor-pointer transition-opacity duration-500 ${
              isRevealed ? "opacity-0 pointer-events-none" : ""
            }`}
            onMouseDown={handleStart}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onMouseMove={handleMove}
            onTouchStart={handleStart}
            onTouchEnd={handleEnd}
            onTouchMove={handleMove}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ScratchCard;

import { useEffect, useState } from "react";

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed w-72 h-72 rounded-full blur-[120px] bg-purple-500/20 z-0 transition-transform duration-75"
      style={{
        transform: `translate(${position.x - 150}px, ${position.y - 150}px)`
      }}
    />
  );
};

export default MouseGlow;
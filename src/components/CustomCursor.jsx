import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState(0);

  const prevPos = useRef({ x: 0, y: 0 });
  const animFrame = useRef(null);

  useEffect(() => {
    // Only enable on devices with a mouse
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    document.body.classList.add("custom-cursor-none");

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      if (!isVisible) setIsVisible(true);

      // Calculate angle of motion
      const dx = x - prevPos.current.x;
      const dy = y - prevPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 1.5) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        setRotation(angle);
      }

      prevPos.current = { x, y };

      // Update position via RAF
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
      animFrame.current = requestAnimationFrame(() => {
        setPosition({ x, y });
        setTrail((prev) => [{ x, y, id: Date.now() + Math.random() }, ...prev.slice(0, 5)]);
      });

      // Check if hovering over clickable element
      const target = e.target;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest("[role='button']") ||
          window.getComputedStyle(target).cursor === "pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-none");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Trailing Dots */}
      {trail.map((dot, index) => {
        const factor = 1 - (index + 1) / (trail.length + 1);
        return (
          <div
            key={dot.id}
            style={{
              left: `${dot.x}px`,
              top: `${dot.y}px`,
              opacity: factor * 0.45,
              transform: `translate(-50%, -50%) scale(${factor * 0.8 + 0.2})`,
              transition: "transform 0.15s ease-out, opacity 0.2s ease-out",
            }}
            className="pointer-events-none fixed h-2 w-2 rounded-full bg-[#b87572]"
          />
        );
      })}

      {/* Main Arrowhead Cursor */}
      <div
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-25%, -20%) rotate(${rotation}deg) scale(${
            isClicking ? 0.8 : isHovered ? 1.15 : 1
          })`,
          transition: "transform 0.1s cubic-bezier(0.2, 0, 0, 1)",
        }}
        className="pointer-events-none fixed">
        <svg
          width="26"
          height="26"
          viewBox="0 0 50 50"
          className="drop-shadow-[0_2px_8px_rgba(184,117,114,0.45)]">
          {/* Inner dark fill */}
          <path
            d="M42.6817 41.1495L27.5102 6.79927C26.7035 4.97285 24.1852 4.97285 23.3785 6.79927L7.5833 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
            fill="#1f1a17"
          />
          {/* Outer highlight stroke */}
          <path
            d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
            stroke="#b87572"
            strokeWidth="2.5"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}

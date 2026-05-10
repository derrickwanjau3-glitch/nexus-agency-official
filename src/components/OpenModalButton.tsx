"use client";

import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  showIcon?: boolean;
}

export default function OpenModalButton({ children, className, showIcon = false }: Props) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-lead-modal"));
  };

  return (
    <button onClick={handleClick} className={className}>
      {children || "Get Started"}
      {showIcon && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
    </button>
  );
}

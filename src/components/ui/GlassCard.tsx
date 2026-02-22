interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = false,
  gradient = false,
}: GlassCardProps) {
  return (
    <div
      className={`rounded-xl ${gradient ? "gradient-border" : ""} ${
        hover ? "hover-lift" : ""
      } glass p-6 ${className}`}
    >
      {children}
    </div>
  );
}

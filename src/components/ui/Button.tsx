import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:ring-offset-2 focus:ring-offset-background";

  const variants = {
    primary:
      "bg-gradient-to-r from-brand-purple to-brand-pink text-white hover:shadow-lg hover:shadow-brand-purple/25 hover:-translate-y-0.5",
    secondary:
      "bg-surface border border-zinc-700 text-foreground hover:bg-surface-light hover:border-zinc-600",
    ghost: "text-zinc-400 hover:text-foreground hover:bg-surface/50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3 text-base gap-2",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

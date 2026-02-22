import GradientText from "./GradientText";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <p className="text-sm font-semibold tracking-wider uppercase text-brand-purple-light mb-2">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
        <GradientText>{title}</GradientText>
      </h2>
      {description && (
        <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

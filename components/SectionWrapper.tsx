type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
  /** Use secondary background (#090909) */
  secondary?: boolean;
  /** Full-bleed background, content still constrained */
  fullBleed?: boolean;
};

export default function SectionWrapper({
  children,
  className = "",
  id,
  as: Tag = "section",
  secondary = false,
  fullBleed = false,
}: SectionWrapperProps) {
  const bg = secondary ? "bg-background-secondary" : "bg-background";

  if (fullBleed) {
    return (
      <Tag id={id} className={`w-full ${bg} ${className}`.trim()}>
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">{children}</div>
      </Tag>
    );
  }

  return (
    <Tag
      id={id}
      className={`mx-auto w-full max-w-7xl px-5 md:px-8 ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}

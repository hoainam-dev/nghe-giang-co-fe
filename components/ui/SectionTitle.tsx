import Reveal from "@/components/ui/Reveal";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  desc?: string;
  center?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  desc,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <Reveal variant="fade-down">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d7a321]">
            {eyebrow}
          </p>
        </Reveal>
      )}

      <Reveal variant="blur" delay={100}>
        <h2 className="text-3xl font-bold tracking-tight text-[#0b2f66] md:text-4xl">
          {title}
        </h2>
      </Reveal>

      {desc && (
        <Reveal variant="fade-up" delay={180}>
          <p className="mt-4 text-base leading-7 text-slate-600">{desc}</p>
        </Reveal>
      )}
    </div>
  );
}
import Image from "next/image";

type TeamProfile = {
  name: string;
  role: string;
  photo: string;
  paragraphs: readonly string[];
  focus: string;
};

export function TeamMemberCard({ profile }: { profile: TeamProfile }) {
  return (
    <article className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm sm:p-6">
      <header className="flex items-center gap-4 border-b border-navy/10 pb-5">
        <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100 ring-1 ring-navy/10">
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-serif text-2xl leading-tight text-navy">
            {profile.name}
          </h3>
          <p className="mt-2 text-sm font-semibold leading-6 text-teal">
            {profile.role}
          </p>
        </div>
      </header>

      <div className="mt-5 space-y-4 text-sm leading-7 text-steel sm:text-base">
        {profile.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className="rounded-lg border-l-4 border-water bg-sky-50 px-4 py-3 text-navy">
          <strong>His focus:</strong> {profile.focus}
        </p>
      </div>
    </article>
  );
}

type Tone = "info" | "success" | "error";

type StatusBannerProps = {
  tone?: Tone;
  title: string;
  message: string;
};

const tones: Record<Tone, string> = {
  info: "border-teal/30 bg-teal/8 text-navy",
  success: "border-teal/40 bg-white text-navy",
  error: "border-copper/40 bg-copper/8 text-navy",
};

export function StatusBanner({ tone = "info", title, message }: StatusBannerProps) {
  return (
    <div
      role={tone === "error" ? "alert" : "status"}
      className={`rounded-md border px-4 py-3 ${tones[tone]}`}
    >
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-sm leading-6">{message}</p>
    </div>
  );
}

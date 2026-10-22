import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Products",
  description: "Meet Musiri Pumps and our new approach to continuous water pumping.",
};

const features = [
  ["01", "Designed for 24/7 water pumping", "Our pump is designed around the goal of continuous operation, providing water whenever it is needed—during the day or at night. Continuous water availability could offer significant advantages for irrigation planning and other water-supply applications."],
  ["02", "Zero external energy input", "The defining claim of our technology is its intended ability to pump water without an external electricity supply, diesel, petrol, or another external energy input during operation. Our mission is to break the conventional dependence between water pumping and the continuous consumption of externally supplied energy."],
  ["03", "Potential across diverse climatic conditions", "Developed with practical water-pumping applications in mind, our vision is to provide a solution suitable for diverse climatic conditions and operating environments, from agricultural fields to industrial water-management systems."],
  ["04", "A new possibility for agriculture", "Farmers depend on reliable water supplies to maintain crops and manage irrigation schedules. A pumping solution that does not require conventional external energy input could help address challenges associated with electricity availability, fuel consumption, and operating expenses."],
  ["05", "Research-driven innovation", "Musiri Pumps is built on a research-led approach to engineering. Our technology draws on the Bhaskara Law of Energy developed by Mathan Babu Bhaskaran, reflecting our commitment to investigating new possibilities in energy utilisation and mechanical systems."],
];

const applications = [
  "Agricultural irrigation and borewell water pumping",
  "Water supply for farms and rural communities",
  "Industrial water transfer and circulation",
  "Water management in locations with limited access to conventional power infrastructure",
  "Other applications requiring reliable and continuous water delivery",
];

const pumpPerformance = [
  { head: 10, litresPerMinute: 2053.2, cubicMetresPerHour: 123.19 },
  { head: 15, litresPerMinute: 1368.8, cubicMetresPerHour: 82.13 },
  { head: 20, litresPerMinute: 1026.6, cubicMetresPerHour: 61.6 },
  { head: 25, litresPerMinute: 821.3, cubicMetresPerHour: 49.28 },
  { head: 30, litresPerMinute: 684.4, cubicMetresPerHour: 41.06 },
  { head: 35, litresPerMinute: 586.6, cubicMetresPerHour: 35.2 },
  { head: 40, litresPerMinute: 513.3, cubicMetresPerHour: 30.8 },
  { head: 45, litresPerMinute: 456.3, cubicMetresPerHour: 27.38 },
  { head: 50, litresPerMinute: 410.6, cubicMetresPerHour: 24.64 },
  { head: 60, litresPerMinute: 342.2, cubicMetresPerHour: 20.53 },
  { head: 70, litresPerMinute: 293.3, cubicMetresPerHour: 17.6 },
  { head: 80, litresPerMinute: 256.7, cubicMetresPerHour: 15.4 },
  { head: 90, litresPerMinute: 228.1, cubicMetresPerHour: 13.69 },
  { head: 100, litresPerMinute: 205.3, cubicMetresPerHour: 12.32 },
  { head: 120, litresPerMinute: 171.1, cubicMetresPerHour: 10.27 },
  { head: 150, litresPerMinute: 136.9, cubicMetresPerHour: 8.21 },
  { head: 200, litresPerMinute: 102.7, cubicMetresPerHour: 6.16 },
];

const pumpPerformance75 = [
  { head: 10, litresPerMinute: 3079.8, cubicMetresPerHour: 184.79 },
  { head: 15, litresPerMinute: 2053.2, cubicMetresPerHour: 123.19 },
  { head: 20, litresPerMinute: 1539.9, cubicMetresPerHour: 92.39 },
  { head: 25, litresPerMinute: 1231.9, cubicMetresPerHour: 73.92 },
  { head: 30, litresPerMinute: 1026.6, cubicMetresPerHour: 61.6 },
  { head: 35, litresPerMinute: 879.9, cubicMetresPerHour: 52.8 },
  { head: 40, litresPerMinute: 770, cubicMetresPerHour: 46.2 },
  { head: 45, litresPerMinute: 684.4, cubicMetresPerHour: 41.06 },
  { head: 50, litresPerMinute: 616, cubicMetresPerHour: 36.96 },
  { head: 60, litresPerMinute: 513.3, cubicMetresPerHour: 30.8 },
  { head: 70, litresPerMinute: 440, cubicMetresPerHour: 26.4 },
  { head: 80, litresPerMinute: 385, cubicMetresPerHour: 23.1 },
  { head: 90, litresPerMinute: 342.2, cubicMetresPerHour: 20.53 },
  { head: 100, litresPerMinute: 308, cubicMetresPerHour: 18.48 },
  { head: 120, litresPerMinute: 256.7, cubicMetresPerHour: 15.4 },
  { head: 150, litresPerMinute: 205.3, cubicMetresPerHour: 12.32 },
  { head: 200, litresPerMinute: 154, cubicMetresPerHour: 9.24 },
];

const pumpPerformance10 = [
  { head: 10, litresPerMinute: 4106.4, cubicMetresPerHour: 246.39 },
  { head: 15, litresPerMinute: 2737.6, cubicMetresPerHour: 164.26 },
  { head: 20, litresPerMinute: 2053.2, cubicMetresPerHour: 123.19 },
  { head: 25, litresPerMinute: 1642.6, cubicMetresPerHour: 98.55 },
  { head: 30, litresPerMinute: 1368.8, cubicMetresPerHour: 82.13 },
  { head: 35, litresPerMinute: 1173.3, cubicMetresPerHour: 70.4 },
  { head: 40, litresPerMinute: 1026.6, cubicMetresPerHour: 61.6 },
  { head: 45, litresPerMinute: 912.5, cubicMetresPerHour: 54.75 },
  { head: 50, litresPerMinute: 821.3, cubicMetresPerHour: 49.28 },
  { head: 60, litresPerMinute: 684.4, cubicMetresPerHour: 41.06 },
  { head: 70, litresPerMinute: 586.6, cubicMetresPerHour: 35.2 },
  { head: 80, litresPerMinute: 513.3, cubicMetresPerHour: 30.8 },
  { head: 90, litresPerMinute: 456.3, cubicMetresPerHour: 27.38 },
  { head: 100, litresPerMinute: 410.6, cubicMetresPerHour: 24.64 },
  { head: 120, litresPerMinute: 342.2, cubicMetresPerHour: 20.53 },
  { head: 150, litresPerMinute: 273.8, cubicMetresPerHour: 16.43 },
  { head: 200, litresPerMinute: 205.3, cubicMetresPerHour: 12.32 },
];

export default function ProductsPage() {
  const chart = {
    left: 90,
    right: 850,
    top: 35,
    bottom: 390,
    maxDelivery: 2200,
    maxHead: 210,
  };
  const point = (delivery: number, head: number) => ({
    x: chart.left + (delivery / chart.maxDelivery) * (chart.right - chart.left),
    y: chart.bottom - (head / chart.maxHead) * (chart.bottom - chart.top),
  });
  const performanceCurve = pumpPerformance
    .map(({ litresPerMinute, head }) => {
      const { x, y } = point(litresPerMinute, head);
      return `${x},${y}`;
    })
    .join(" ");
  const chart75 = { left: 90, right: 850, top: 35, bottom: 390, maxHead: 200, maxDelivery: 3200 };
  const point75 = (head: number, delivery: number) => ({
    x: chart75.left + (head / chart75.maxHead) * (chart75.right - chart75.left),
    y: chart75.bottom - (delivery / chart75.maxDelivery) * (chart75.bottom - chart75.top),
  });
  const performanceCurve75 = pumpPerformance75
    .map(({ head, litresPerMinute }) => {
      const { x, y } = point75(head, litresPerMinute);
      return `${x},${y}`;
    })
    .join(" ");
  const chart10 = { ...chart75, maxDelivery: 4300 };
  const point10 = (head: number, delivery: number) => ({
    x: chart10.left + (head / chart10.maxHead) * (chart10.right - chart10.left),
    y: chart10.bottom - (delivery / chart10.maxDelivery) * (chart10.bottom - chart10.top),
  });
  const performanceCurve10 = pumpPerformance10
    .map(({ head, litresPerMinute }) => {
      const { x, y } = point10(head, litresPerMinute);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="overflow-hidden bg-white">
      <section className="bg-[#062f45] px-4 pb-10 pt-5 sm:px-6 sm:pb-14 lg:px-8">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="mb-4 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
              <span>Musiri Pumps · Coming soon</span>
              <span className="hidden sm:inline">A new era of water pumping</span>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl shadow-black/30">
              <video className="aspect-video w-full object-cover" controls playsInline preload="metadata" aria-label="Musiri Pumps coming soon video">
                <source src="/coming-soon.mp4" type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative bg-[#f1f8fa] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
        <Container className="relative">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal">Musiri Pumps</p>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.08] text-[#082f45] sm:text-6xl lg:text-7xl">
              A New Era of Water Pumping Begins Here
            </h1>
            <p className="mt-7 inline-flex rounded-full border border-teal/20 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-teal shadow-sm sm:text-base">
              24/7 Water Pumping. Zero External Energy Input.
            </p>
            <div className="mt-10 grid gap-10 border-t border-navy/10 pt-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
              <p className="font-serif text-2xl leading-relaxed text-[#0a3a51] sm:text-3xl">
                What if water could be pumped continuously, day and night, without electricity, diesel, petrol, or any other external energy input?
              </p>
              <div className="space-y-5 text-base leading-8 text-steel">
                <p>
                  At <strong className="text-navy">Musiri Pumps</strong>, we are working to make this a reality with a groundbreaking water-pumping technology based on the <strong className="text-navy">Bhaskara Law of Energy</strong>, developed by our founder, <strong className="text-navy">Mathan Babu Bhaskaran</strong>.
                </p>
                <p>
                  Emerging from the research and development expertise of BMLab, Musiri Pumps represents a bold step towards redefining conventional water-pumping technology. Our ready-to-deliver pump is designed to challenge established approaches to energy utilisation and bring a fundamentally different solution to agricultural and industrial water management.
                </p>
                <p>We believe that access to water should not be limited by the availability of electricity, the rising cost of fuel, or dependence on conventional power infrastructure.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">The idea</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-navy sm:text-5xl">Introducing a New Approach to Water Pumping</h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-steel">
              <p>Traditional water pumps depend on an external power source, such as electricity or a fuel-powered engine, to perform their work. This dependence can create significant operating costs and practical challenges, particularly for farmers working in remote locations or areas with unreliable electricity supplies.</p>
              <p className="text-xl font-semibold text-teal">Musiri Pumps takes a different approach.</p>
              <p>Our technology is based on our founder&apos;s Bhaskara Law of Energy and the research principles behind it. Our objective is to enable continuous water pumping without conventional external energy input during operation, opening up new possibilities for agricultural irrigation, water management, and industrial applications.</p>
              <p>This is more than an attempt to improve an existing pump. It represents our ambition to explore a new direction in water-pumping technology.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#082f45] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
        <Container>
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">What guides us</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-5xl">Key Features and Advantages</h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(([number, title, description]) => (
                <article key={number} className="bg-[#0a3a51] p-7 sm:p-8">
                  <span className="text-sm font-bold tracking-[0.16em] text-cyan-200">{number}</span>
                  <h3 className="mt-5 font-serif text-2xl leading-snug">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/75">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Pump data</p>
              <h2 className="mt-4 font-serif text-3xl text-navy sm:text-5xl">5 HP Pump Performance</h2>
              <p className="mt-5 text-base leading-8 text-steel">
                Delivery figures across the listed vertical head range. Use the chart to see how delivery changes as head increases.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-2xl border border-navy/10 bg-[#f7fbfc] p-4 sm:p-6">
                <svg
                  className="h-auto w-full"
                  viewBox="0 0 920 490"
                  role="img"
                  aria-labelledby="performance-chart-title performance-chart-description"
                >
                  <title id="performance-chart-title">5 HP pump performance curve</title>
                  <desc id="performance-chart-description">
                    Vertical head in metres plotted against delivery in litres per minute. Delivery decreases as vertical head increases.
                  </desc>
                  {Array.from({ length: 5 }, (_, index) => {
                    const value = index * 500;
                    const x = chart.left + (value / chart.maxDelivery) * (chart.right - chart.left);
                    return (
                      <g key={`delivery-grid-${value}`}>
                        <line x1={x} y1={chart.top} x2={x} y2={chart.bottom} stroke="#d3e0e5" strokeWidth="1" />
                        <text x={x} y={chart.bottom + 24} textAnchor="middle" fontSize="12" fill="#536c7a">{value.toLocaleString()}</text>
                      </g>
                    );
                  })}
                  {[0, 50, 100, 150, 200].map((value) => {
                    const y = chart.bottom - (value / chart.maxHead) * (chart.bottom - chart.top);
                    return (
                      <g key={`head-grid-${value}`}>
                        <line x1={chart.left} y1={y} x2={chart.right} y2={y} stroke="#d3e0e5" strokeWidth="1" />
                        <text x={chart.left - 12} y={y + 4} textAnchor="end" fontSize="12" fill="#536c7a">{value}</text>
                      </g>
                    );
                  })}
                  <line x1={chart.left} y1={chart.top} x2={chart.left} y2={chart.bottom} stroke="#536c7a" strokeWidth="1.5" />
                  <line x1={chart.left} y1={chart.bottom} x2={chart.right} y2={chart.bottom} stroke="#536c7a" strokeWidth="1.5" />
                  <polyline points={performanceCurve} fill="none" stroke="#087987" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
                  {pumpPerformance.map(({ head, litresPerMinute }) => {
                    const { x, y } = point(litresPerMinute, head);
                    return <circle key={head} cx={x} cy={y} r="5" fill="#8bb84d" stroke="white" strokeWidth="2" />;
                  })}
                  <text x={(chart.left + chart.right) / 2} y="465" textAnchor="middle" fontSize="15" fontWeight="600" fill="#102b3d">Delivery (litres/minute)</text>
                  <text x="22" y={(chart.top + chart.bottom) / 2} textAnchor="middle" fontSize="15" fontWeight="600" fill="#102b3d" transform={`rotate(-90 22 ${(chart.top + chart.bottom) / 2})`}>Vertical head (metres)</text>
                </svg>
              </div>

              <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white">
                <div className="border-b border-navy/10 bg-[#f1f8fa] px-5 py-4">
                  <h3 className="font-semibold text-navy">Performance by vertical head</h3>
                </div>
                <div className="max-h-[510px] overflow-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead className="sticky top-0 bg-white text-xs uppercase tracking-wide text-steel shadow-sm">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-semibold">Head (m)</th>
                        <th scope="col" className="px-4 py-3 font-semibold">L/min</th>
                        <th scope="col" className="px-4 py-3 text-right font-semibold">m³/hour</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-navy/10 text-[#244b5d]">
                      {pumpPerformance.map(({ head, litresPerMinute, cubicMetresPerHour }) => (
                        <tr key={head} className="transition-colors hover:bg-[#f1f8fa]">
                          <th scope="row" className="px-4 py-3 font-semibold text-navy">{head}</th>
                          <td className="px-4 py-3 tabular-nums">{litresPerMinute.toFixed(1)}</td>
                          <td className="px-4 py-3 text-right tabular-nums">{cubicMetresPerHour.toFixed(2).replace(/\.?0+$/, "")}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>



      <section className="bg-[#f1f8fa] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Pump data</p>
              <h2 className="mt-4 font-serif text-3xl text-navy sm:text-5xl">7.5 HP Pump Performance</h2>
              <p className="mt-5 text-base leading-8 text-steel">
                Delivery figures across the listed vertical head range. The chart follows the reference, with vertical head on the horizontal axis.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-2xl border border-navy/10 bg-white p-4 sm:p-6">
                <svg className="h-auto w-full" viewBox="0 0 920 490" role="img" aria-labelledby="performance-chart-75-title performance-chart-75-description">
                  <title id="performance-chart-75-title">7.5 HP pump performance</title>
                  <desc id="performance-chart-75-description">Delivery in litres per minute plotted against vertical head in metres.</desc>
                  {[0, 50, 100, 150, 200].map((value) => {
                    const x = chart75.left + (value / chart75.maxHead) * (chart75.right - chart75.left);
                    return (
                      <g key={`head75-grid-${value}`}>
                        <line x1={x} y1={chart75.top} x2={x} y2={chart75.bottom} stroke="#d3e0e5" strokeWidth="1" />
                        <text x={x} y={chart75.bottom + 24} textAnchor="middle" fontSize="12" fill="#536c7a">{value}</text>
                      </g>
                    );
                  })}
                  {Array.from({ length: 7 }, (_, index) => {
                    const value = index * 500;
                    const y = chart75.bottom - (value / chart75.maxDelivery) * (chart75.bottom - chart75.top);
                    return (
                      <g key={`delivery75-grid-${value}`}>
                        <line x1={chart75.left} y1={y} x2={chart75.right} y2={y} stroke="#d3e0e5" strokeWidth="1" />
                        <text x={chart75.left - 12} y={y + 4} textAnchor="end" fontSize="12" fill="#536c7a">{value.toLocaleString()}</text>
                      </g>
                    );
                  })}
                  <line x1={chart75.left} y1={chart75.top} x2={chart75.left} y2={chart75.bottom} stroke="#536c7a" strokeWidth="1.5" />
                  <line x1={chart75.left} y1={chart75.bottom} x2={chart75.right} y2={chart75.bottom} stroke="#536c7a" strokeWidth="1.5" />
                  <polyline points={performanceCurve75} fill="none" stroke="#087987" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
                  {pumpPerformance75.map(({ head, litresPerMinute }) => {
                    const { x, y } = point75(head, litresPerMinute);
                    return <circle key={head} cx={x} cy={y} r="5" fill="#087987" stroke="white" strokeWidth="2" />;
                  })}
                  <text x={(chart75.left + chart75.right) / 2} y="465" textAnchor="middle" fontSize="15" fontWeight="600" fill="#102b3d">Vertical head (metres)</text>
                  <text x="22" y={(chart75.top + chart75.bottom) / 2} textAnchor="middle" fontSize="15" fontWeight="600" fill="#102b3d" transform={`rotate(-90 22 ${(chart75.top + chart75.bottom) / 2})`}>Delivery (litres/minute)</text>
                </svg>
              </div>

              <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white">
                <div className="border-b border-navy/10 bg-white px-5 py-4">
                  <h3 className="font-semibold text-navy">Performance by vertical head</h3>
                </div>
                <div className="max-h-[510px] overflow-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead className="sticky top-0 bg-white text-xs uppercase tracking-wide text-steel shadow-sm">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-semibold">Head (m)</th>
                        <th scope="col" className="px-4 py-3 font-semibold">L/min</th>
                        <th scope="col" className="px-4 py-3 text-right font-semibold">m³/hour</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-navy/10 text-[#244b5d]">
                      {pumpPerformance75.map(({ head, litresPerMinute, cubicMetresPerHour }) => (
                        <tr key={head} className="transition-colors hover:bg-[#f1f8fa]">
                          <th scope="row" className="px-4 py-3 font-semibold text-navy">{head}</th>
                          <td className="px-4 py-3 tabular-nums">{litresPerMinute.toFixed(1).replace(/\.?0+$/, "")}</td>
                          <td className="px-4 py-3 text-right tabular-nums">{cubicMetresPerHour.toFixed(2).replace(/\.?0+$/, "")}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Pump data</p>
              <h2 className="mt-4 font-serif text-3xl text-navy sm:text-5xl">10 HP Pump Performance</h2>
              <p className="mt-5 text-base leading-8 text-steel">
                Delivery figures across the listed vertical head range, with vertical head on the horizontal axis.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-2xl border border-navy/10 bg-[#f7fbfc] p-4 sm:p-6">
                <svg className="h-auto w-full" viewBox="0 0 920 490" role="img" aria-labelledby="performance-chart-10-title performance-chart-10-description">
                  <title id="performance-chart-10-title">10 HP pump performance</title>
                  <desc id="performance-chart-10-description">Delivery in litres per minute plotted against vertical head in metres.</desc>
                  {[0, 50, 100, 150, 200].map((value) => {
                    const x = chart10.left + (value / chart10.maxHead) * (chart10.right - chart10.left);
                    return (
                      <g key={`head10-grid-${value}`}>
                        <line x1={x} y1={chart10.top} x2={x} y2={chart10.bottom} stroke="#d3e0e5" strokeWidth="1" />
                        <text x={x} y={chart10.bottom + 24} textAnchor="middle" fontSize="12" fill="#536c7a">{value}</text>
                      </g>
                    );
                  })}
                  {Array.from({ length: 5 }, (_, index) => {
                    const value = index * 1000;
                    const y = chart10.bottom - (value / chart10.maxDelivery) * (chart10.bottom - chart10.top);
                    return (
                      <g key={`delivery10-grid-${value}`}>
                        <line x1={chart10.left} y1={y} x2={chart10.right} y2={y} stroke="#d3e0e5" strokeWidth="1" />
                        <text x={chart10.left - 12} y={y + 4} textAnchor="end" fontSize="12" fill="#536c7a">{value.toLocaleString()}</text>
                      </g>
                    );
                  })}
                  <line x1={chart10.left} y1={chart10.top} x2={chart10.left} y2={chart10.bottom} stroke="#536c7a" strokeWidth="1.5" />
                  <line x1={chart10.left} y1={chart10.bottom} x2={chart10.right} y2={chart10.bottom} stroke="#536c7a" strokeWidth="1.5" />
                  <polyline points={performanceCurve10} fill="none" stroke="#087987" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
                  {pumpPerformance10.map(({ head, litresPerMinute }) => {
                    const { x, y } = point10(head, litresPerMinute);
                    return <circle key={head} cx={x} cy={y} r="5" fill="#087987" stroke="white" strokeWidth="2" />;
                  })}
                  <text x={(chart10.left + chart10.right) / 2} y="465" textAnchor="middle" fontSize="15" fontWeight="600" fill="#102b3d">Vertical head (metres)</text>
                  <text x="22" y={(chart10.top + chart10.bottom) / 2} textAnchor="middle" fontSize="15" fontWeight="600" fill="#102b3d" transform={`rotate(-90 22 ${(chart10.top + chart10.bottom) / 2})`}>Delivery (litres/minute)</text>
                </svg>
              </div>

              <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white">
                <div className="border-b border-navy/10 bg-[#f1f8fa] px-5 py-4">
                  <h3 className="font-semibold text-navy">Performance by vertical head</h3>
                </div>
                <div className="max-h-[510px] overflow-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead className="sticky top-0 bg-white text-xs uppercase tracking-wide text-steel shadow-sm">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-semibold">Head (m)</th>
                        <th scope="col" className="px-4 py-3 font-semibold">L/min</th>
                        <th scope="col" className="px-4 py-3 text-right font-semibold">m³/hour</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-navy/10 text-[#244b5d]">
                      {pumpPerformance10.map(({ head, litresPerMinute, cubicMetresPerHour }) => (
                        <tr key={head} className="transition-colors hover:bg-[#f1f8fa]">
                          <th scope="row" className="px-4 py-3 font-semibold text-navy">{head}</th>
                          <td className="px-4 py-3 tabular-nums">{litresPerMinute.toFixed(1).replace(/\.?0+$/, "")}</td>
                          <td className="px-4 py-3 text-right tabular-nums">{cubicMetresPerHour.toFixed(2).replace(/\.?0+$/, "")}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f1f8fa] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Where it may help</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-navy sm:text-5xl">Applications</h2>
              <p className="mt-6 text-base leading-8 text-steel">Our water-pumping technology is intended for a broad range of potential applications, including:</p>
            </div>
            <div>
              <ul className="divide-y divide-navy/10 border-y border-navy/10">
                {applications.map((application, index) => (
                  <li key={application} className="flex gap-5 py-5 text-base leading-7 text-[#244b5d]">
                    <span className="pt-0.5 text-sm font-bold text-teal">0{index + 1}</span>
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-6 text-steel">Final suitability depends on the specific pump model, required delivery head, flow rate, installation conditions, and application requirements.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Container>
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Our vision</p>
            <h2 className="mt-4 max-w-4xl font-serif text-3xl leading-tight text-navy sm:text-5xl">Our Vision: Water Without Conventional Energy Dependence</h2>
            <div className="mt-8 grid gap-8 text-base leading-8 text-steel md:grid-cols-2">
              <p>At Musiri Pumps, we envision a future in which reliable access to water becomes less dependent on conventional energy infrastructure. By pursuing an alternative approach to water pumping, we aim to address one of the recurring challenges faced by agriculture and industry: the cost and availability of the energy required to move water.</p>
              <p>Our ambition extends beyond manufacturing pumps. We want to contribute to a future in which innovative engineering can reduce dependence on fossil fuels, support agricultural productivity, and encourage more sustainable approaches to resource management.</p>
            </div>
            <div className="mt-12 rounded-2xl bg-[#082f45] px-7 py-10 text-center text-white sm:px-12 sm:py-14">
              <p className="font-serif text-2xl sm:text-3xl">We are ready to introduce our technology to the world.</p>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">We welcome farmers, agricultural organisations, industrial users, distributors, and institutional partners interested in exploring our water-pumping solutions and their potential applications.</p>
              <Link href="/contact" className="mt-7 inline-flex rounded-md bg-cyan-200 px-6 py-3 text-sm font-bold text-[#082f45] transition hover:bg-white">Get in touch</Link>
            </div>
          </div>
        </Container>
      </section>

      <footer className="border-t border-white/10 bg-[#062f45] px-4 py-10 text-center text-white sm:px-6 lg:px-8">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">MUSIRI PUMPS</p>
          <p className="mt-3 font-serif text-2xl sm:text-3xl">Engineering a Different Future for Water.</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/65 sm:text-sm">24/7 Water Pumping. Zero External Energy Input. A Vision for a Better Earth.</p>
        </Container>
      </footer>
    </div>
  );
}

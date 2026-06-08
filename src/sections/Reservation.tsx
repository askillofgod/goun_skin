import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { links } from "@/data/links";

const steps = [
  {
    no: "01",
    title: "프로그램 확인",
    desc: "원하는 관리 프로그램을 확인합니다.",
  },
  {
    no: "02",
    title: "네이버 예약",
    desc: "예약하기 버튼을 눌러 네이버 예약 페이지로 이동합니다.",
  },
  {
    no: "03",
    title: "방문 및 상담",
    desc: "방문 후 현재 상태에 맞춰 상담과 관리를 진행합니다.",
  },
];

const policies = [
  {
    title: "100% 예약제 운영",
    desc: "고객 한 분 한 분께 집중하기 위해 100% 예약제로 운영됩니다. 예약 고객 우선으로 운영됩니다.",
  },
  {
    title: "당일 예약 안내",
    desc: "당일 예약은 최소 2시간 전에 문의 부탁드립니다.",
  },
  {
    title: "테라피스트 선택",
    desc: "남성 원장 1명, 여성 원장 2명. 원하는 관리사를 선택하실 수 있습니다.",
  },
  {
    title: "주차 안내",
    desc: "평일은 상가 무료 주차가 가능하며, 주말 및 공휴일은 인근 공영주차장 이용 시 일부 주차비를 지원해 드립니다.",
  },
];

export default function Reservation() {
  return (
    <section id="reservation" className="section bg-secondary">
      <div className="container-site">
        <SectionTitle
          eyebrow="RESERVATION"
          title="예약안내"
          description="네이버 예약을 통해 원하는 일정으로 간편하게 예약하실 수 있습니다."
        />

        {/* STEP */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.1}>
              <div className="relative h-full rounded-card bg-white p-8 shadow-soft">
                <span className="text-3xl font-bold text-primary/30">STEP {s.no}</span>
                <h3 className="mt-3 text-xl font-bold text-dark">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-dark/70">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 예약 정책 */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {policies.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <div className="flex h-full gap-4 rounded-card border border-accent/50 bg-white/60 p-6">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <h4 className="font-bold text-dark">{p.title}</h4>
                  <p className="mt-1 text-[15px] leading-relaxed text-dark/70">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Button href={links.reservation} variant="primary" size="lg" ariaLabel="네이버 예약하기">
            네이버 예약하기
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

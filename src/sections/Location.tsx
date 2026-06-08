import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { site } from "@/data/site";
import { links } from "@/data/links";

const mapQuery = encodeURIComponent("서울특별시 구로구 고척동 326");

const infoRows = [
  { label: "주소", value: `${site.addressLine1} ${site.addressLine2}` },
  { label: "전화", value: site.phone, href: `tel:${site.phone}` },
  { label: "운영시간", value: site.hours },
  { label: "운영안내", value: site.hoursNote },
];

export default function Location() {
  return (
    <section id="location" className="section bg-white">
      <div className="container-site">
        <SectionTitle
          eyebrow="LOCATION"
          title="오시는 길"
          description="고척동 중심에 위치한 고운피부통증케어입니다."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* 지도 */}
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card shadow-soft md:aspect-video lg:aspect-auto lg:h-full lg:min-h-[360px]">
              <iframe
                title="고운통증케어 위치 지도"
                src={`https://maps.google.com/maps?q=${mapQuery}&z=16&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* 정보 */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center rounded-card bg-secondary p-8 md:p-10">
              <dl className="space-y-5">
                {infoRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-1 border-b border-accent/50 pb-4 last:border-0 sm:flex-row sm:gap-6"
                  >
                    <dt className="w-24 shrink-0 text-sm font-semibold text-primary">
                      {row.label}
                    </dt>
                    <dd className="text-[15px] text-dark/80 md:text-base">
                      {row.href ? (
                        <a href={row.href} className="hover:text-primary">
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={links.map}
                  variant="primary"
                  className="flex-1"
                  ariaLabel="네이버 지도 보기"
                >
                  네이버 지도 보기
                </Button>
                <Button
                  href={`tel:${site.phone}`}
                  variant="secondary"
                  external={false}
                  className="flex-1"
                  ariaLabel="전화하기"
                >
                  전화하기
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

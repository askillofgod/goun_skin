"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/cn";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section bg-white">
      <div className="container-site max-w-3xl">
        <SectionTitle
          eyebrow="FAQ"
          title="자주 묻는 질문"
          description="고객님들이 자주 문의하시는 내용을 정리했습니다."
        />

        <ul className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li
                key={i}
                className="overflow-hidden rounded-2xl border border-accent/50 bg-secondary/40"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                >
                  <span className="flex items-center gap-3 font-semibold text-dark">
                    <span className="text-primary">Q</span>
                    {item.question}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                    className={cn(
                      "shrink-0 text-primary transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-5 pb-5 text-[15px] leading-relaxed text-dark/70 md:px-6">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

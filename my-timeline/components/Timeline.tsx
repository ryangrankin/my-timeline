
"use client";

import { useRef, useState } from "react";
import { timelineEvents, type TimelineCategory, type TimelineEvent } from "../data/timeline";

type Filter = "all" | TimelineCategory;

const filters: { label: string; value: Filter }[] = [
  { label: "Everything", value: "all" },
  { label: "Life", value: "life" },
  { label: "Education", value: "education" },
  { label: "Work", value: "work" },
  { label: "Projects", value: "projects" },
];

export default function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<TimelineEvent | null>(null);

  const events = timelineEvents.filter(
    (event) => filter === "all" || event.category === filter
  );

  function scroll(direction: number) {
    scrollRef.current?.scrollBy({
      left: direction * 340,
      behavior: "smooth",
    });
  }

  return (
    <section className="timeline-section" id="timeline">
      <div className="timeline-heading">
        <div>
          <p className="timeline-eyebrow">01 / THE ARCHIVE</p>
          <h2>
            The story <em>so far.</em>
          </h2>
          <p className="timeline-intro">
            A collection of moments, milestones, and everything in between.
          </p>
        </div>

        <div className="timeline-arrows">
          <button onClick={() => scroll(-1)} aria-label="Scroll left">
            ←
          </button>
          <button onClick={() => scroll(1)} aria-label="Scroll right">
            →
          </button>
        </div>
      </div>

      <div className="timeline-filters">
        {filters.map((item) => (
          <button
            key={item.value}
            className={filter === item.value ? "active" : ""}
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="timeline-scroll" ref={scrollRef}>
        <div className="timeline-track">
          {events.map((event, index) => (
            <div
              className={`timeline-item ${index % 2 === 0 ? "top" : "bottom"}`}
              key={event.id}
            >
              <button
                className="timeline-card"
                onClick={() => setSelected(event)}
              >
                <span className="timeline-card-category">
                  {event.category}
                </span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <span className="timeline-card-more">EXPLORE ↗</span>
              </button>

              <div className="timeline-marker">
                <span className="timeline-dot" />
                <span className="timeline-year">{event.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="timeline-hint">← SCROLL TO EXPLORE →</p>

      {selected && (
        <div
          className="timeline-modal-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="timeline-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="timeline-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="timeline-modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close details"
            >
              ✕
            </button>
            <p className="timeline-eyebrow">
              {selected.year} / {selected.category.toUpperCase()}
            </p>
            <h2 id="timeline-modal-title">{selected.title}</h2>
            
<p>{selected.description}</p>

{selected.reflection && (
  <div className="timeline-reflection">
    <h3>Why This Matters</h3>
    <p>{selected.reflection}</p>
  </div>
)}

          </div>
        </div>
      )}
    </section>
  );
}

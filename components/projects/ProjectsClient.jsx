'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { projects } from '../../lib/projects';

const FILTERS = [
  { key: 'all',         label: 'All Projects' },
  { key: 'residential', label: 'Residential' },
  { key: 'commercial',  label: 'Commercial' },
  { key: 'renovation',  label: 'Renovation' },
];

function PinSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[10px] h-[10px] flex-shrink-0">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function CheckSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[13px] h-[13px] flex-shrink-0 mt-[2px]" style={{ color: '#C9A87C' }}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function PhoneSVG({ className = 'w-[13px] h-[13px]' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.07 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 8 8l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

/* ─── Project Card ─── */
function ProjectCard({ project, onOpen }) {
  const label = project.type.charAt(0).toUpperCase() + project.type.slice(1);
  return (
    <div
      className="group bg-white border border-[rgba(201,168,124,0.2)] overflow-hidden cursor-pointer transition-all duration-[350ms] hover:shadow-[0_16px_48px_rgba(62,31,14,0.14)] hover:-translate-y-[5px]"
      onClick={() => onOpen(project)}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-[600ms] ease-in-out group-hover:scale-[1.06]"
          style={{ backgroundImage: `url('${project.thumb}')` }}
        />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] flex items-center justify-center"
          style={{ background: 'linear-gradient(to top, rgba(62,31,14,0.85) 0%, rgba(62,31,14,0.15) 45%, transparent 70%)' }}
        >
          <div
            className="flex items-center gap-[7px] bg-[rgba(255,255,255,0.95)] text-[#3E1F0E] font-jost text-[10px] font-bold tracking-[0.18em] uppercase px-5 py-[11px] scale-[0.85] group-hover:scale-100 transition-transform duration-300"
            style={{ clipPath: 'polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)' }}
          >
            <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            View Project
          </div>
        </div>
        {/* Photo count */}
        <div className="absolute top-3 right-3 bg-[rgba(0,0,0,0.55)] backdrop-blur-[5px] text-white font-jost text-[9.5px] font-semibold px-[9px] py-1 flex items-center gap-1">
          <svg className="w-[11px] h-[11px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
          </svg>
          {project.images.length} Photos
        </div>
        {/* Type badge */}
        <div className={`badge-proj badge-proj-${project.type}`}>{label}</div>
      </div>

      {/* Card body */}
      <div style={{ padding: '18px 20px 20px' }}>
        <div className="font-playfair text-[16.5px] font-bold text-brown-deep mb-[5px] leading-[1.25]">
          {project.name}
        </div>
        <div className="font-jost text-[11px] text-text-muted flex items-center gap-1 mb-[14px]">
          <PinSVG />
          {project.location}
        </div>
        <div className="flex border-t border-[rgba(201,168,124,0.18)] pt-[13px]">
          {[
            { lbl: 'Area',   val: project.area },
            { lbl: 'Floors', val: project.floors },
            { lbl: 'Year',   val: project.year },
          ].map((m, i) => (
            <div key={m.lbl} className={`flex-1 px-[10px] ${i === 0 ? 'pl-0' : ''} ${i < 2 ? 'border-r border-[rgba(201,168,124,0.18)]' : ''}`}>
              <span className="block font-jost text-[8.5px] font-semibold tracking-[0.18em] uppercase text-sandal mb-[3px]">{m.lbl}</span>
              <span className="block font-jost text-[12px] font-semibold text-brown-deep">{m.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Lightbox Modal ─── */
function ProjectModal({ project, imgIdx, setImgIdx, onClose }) {
  const total = project.images.length;
  const prev = () => setImgIdx(i => (i - 1 + total) % total);
  const next = () => setImgIdx(i => (i + 1) % total);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[9999] flex"
        style={{ background: 'rgba(25,10,4,0.94)', backdropFilter: 'blur(8px)' }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        {/* Left: image panel */}
        <div className="flex-1 relative bg-[#0b0503] flex items-center justify-center min-w-0 overflow-hidden">
          {/* Image */}
          <div className="absolute inset-0 flex items-center justify-center p-[64px_64px_80px]">
            <div
              className="w-full h-full bg-contain bg-no-repeat bg-center transition-opacity duration-300"
              style={{ backgroundImage: `url('${project.images[imgIdx]}')` }}
            />
          </div>
          {/* Prev arrow */}
          <button
            onClick={prev}
            className="absolute left-[14px] top-1/2 -translate-y-1/2 w-[46px] h-[46px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.14)] flex items-center justify-center text-white hover:bg-[rgba(201,168,124,0.25)] transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          {/* Next arrow */}
          <button
            onClick={next}
            className="absolute right-[14px] top-1/2 -translate-y-1/2 w-[46px] h-[46px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.14)] flex items-center justify-center text-white hover:bg-[rgba(201,168,124,0.25)] transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          {/* Counter */}
          <div className="absolute top-[14px] left-1/2 -translate-x-1/2 bg-[rgba(0,0,0,0.5)] text-[rgba(255,255,255,0.7)] font-jost text-[11px] font-medium px-[14px] py-[5px] tracking-[0.1em] whitespace-nowrap">
            {imgIdx + 1} / {total}
          </div>
          {/* Thumbnails */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-[5px] max-w-[85%] overflow-x-auto p-[3px]">
            {project.images.map((src, i) => (
              <div
                key={i}
                onClick={() => setImgIdx(i)}
                className={`w-[50px] h-[36px] flex-shrink-0 bg-cover bg-center cursor-pointer transition-all duration-200 border-2 ${i === imgIdx ? 'opacity-100 border-[#C9A87C]' : 'opacity-40 border-transparent'}`}
                style={{ backgroundImage: `url('${src}')` }}
              />
            ))}
          </div>
        </div>

        {/* Right: details panel */}
        <div className="w-[320px] flex-shrink-0 bg-white overflow-y-auto flex flex-col max-md:hidden">
          {/* Header */}
          <div className="bg-brown-deep px-[26px] pt-[26px] pb-[22px]">
            <span className="block font-jost text-[9px] font-bold tracking-[0.25em] uppercase text-sandal mb-2">
              {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
            </span>
            <div className="font-playfair text-[20px] font-bold text-white leading-[1.2] mb-[5px]">
              {project.name}
            </div>
            <div className="flex items-center gap-[5px] font-jost text-[11.5px] text-[rgba(255,255,255,0.45)]">
              <svg className="w-[11px] h-[11px] text-sandal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              {project.location}
            </div>
          </div>

          {/* Details */}
          <div className="px-[26px] pt-[22px] flex-1">
            {/* Specs */}
            <div className="proj-specs-grid">
              {[
                { lbl: 'Area',     val: project.area },
                { lbl: 'Floors',   val: project.floors },
                { lbl: 'Duration', val: project.duration },
                { lbl: 'Year',     val: project.year },
              ].map((s) => (
                <div key={s.lbl} className="proj-spec-cell">
                  <span className="block font-jost text-[8.5px] font-semibold tracking-[0.2em] uppercase text-sandal mb-[3px]">{s.lbl}</span>
                  <span className="block font-jost text-[13px] font-semibold text-brown-deep">{s.val}</span>
                </div>
              ))}
            </div>

            <div className="proj-modal-section-title">About This Project</div>
            <p className="font-jost text-[13px] font-light leading-[1.85] text-text-muted mb-5">
              {project.desc}
            </p>

            <div className="proj-modal-section-title">Key Features</div>
            <div className="flex flex-col gap-2 mb-[22px]">
              {project.features.map((f) => (
                <div key={f} className="flex items-start gap-2 font-jost text-[12.5px] text-text-muted leading-[1.5]">
                  <CheckSVG />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* CTA row */}
          <div className="px-[26px] pb-[26px] flex flex-col gap-[9px]">
            <a
              href="tel:9791638957"
              className="flex items-center justify-center gap-[7px] font-jost text-[11px] font-semibold tracking-[0.12em] uppercase py-3 text-white hover:bg-brown-deep transition-colors"
              style={{ background: '#6B3A20', clipPath: 'polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)' }}
            >
              <PhoneSVG />
              Call to Build Similar
            </a>
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-center font-jost text-[11px] font-semibold tracking-[0.12em] uppercase py-3 text-brown-mid bg-sandal-pale border border-[rgba(201,168,124,0.35)] hover:bg-[rgba(201,168,124,0.2)] transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-[18px] right-[18px] z-[10001] w-11 h-11 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.18)] flex items-center justify-center text-white hover:bg-[rgba(201,168,124,0.3)] transition-colors"
      >
        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </>
  );
}

/* ─── Main component ─── */
export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortOrder, setSortOrder]       = useState('newest');
  const [modalProject, setModalProject] = useState(null);
  const [modalImgIdx, setModalImgIdx]   = useState(0);

  /* Keyboard handler */
  useEffect(() => {
    const handler = (e) => {
      if (!modalProject) return;
      if (e.key === 'ArrowRight') setModalImgIdx(i => (i + 1) % modalProject.images.length);
      if (e.key === 'ArrowLeft')  setModalImgIdx(i => (i - 1 + modalProject.images.length) % modalProject.images.length);
      if (e.key === 'Escape')     setModalProject(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [modalProject]);

  /* Body scroll lock */
  useEffect(() => {
    document.body.style.overflow = modalProject ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modalProject]);

  /* Compute filtered + sorted list */
  const filtered = [...projects]
    .filter(p => activeFilter === 'all' || p.type === activeFilter)
    .sort((a, b) => {
      if (sortOrder === 'newest') return b.year - a.year;
      if (sortOrder === 'oldest') return a.year - b.year;
      return a.name.localeCompare(b.name);
    });

  /* Counts per type */
  const counts = { all: projects.length };
  projects.forEach(p => { counts[p.type] = (counts[p.type] || 0) + 1; });

  const openModal = (project) => { setModalProject(project); setModalImgIdx(0); };

  return (
    <>
      {/* ─── Hero ─── */}
      <section
        className="relative pt-[74px] min-h-[440px] flex flex-col justify-end overflow-hidden bg-brown-deep"
      >
        <div
          className="absolute inset-0 bg-cover bg-[center_40%]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80')",
            filter: 'brightness(0.32) saturate(0.5)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, rgba(62,31,14,0.94) 0%, rgba(62,31,14,0.55) 50%, rgba(107,58,32,0.2) 100%)' }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto w-full px-[52px] pb-[56px] flex justify-between items-end gap-10 flex-wrap max-md:px-5 max-md:pb-10 max-md:flex-col max-md:items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-sandal" />
              <span className="font-jost text-[10px] font-semibold tracking-[0.3em] uppercase text-sandal">Karaikudi · Tamil Nadu</span>
            </div>
            <h1 className="font-playfair font-bold text-white leading-[1.1] mb-[14px]" style={{ fontSize: 'clamp(36px,5vw,62px)' }}>
              Our Completed<br /><em className="not-italic text-sandal italic">Projects</em>
            </h1>
            <p className="font-jost text-[15px] font-light text-[rgba(255,255,255,0.7)] leading-[1.85] max-w-[470px]">
              Every project we have built tells a story of trust, precision, and craftsmanship. Browse our portfolio of residential homes, commercial buildings, and heritage constructions across Karaikudi and Sivaganga district.
            </p>
          </div>
          {/* Stats */}
          <div className="flex items-center bg-[rgba(255,255,255,0.05)] border border-[rgba(201,168,124,0.18)] backdrop-blur-[8px] flex-shrink-0 max-md:w-full">
            <div className="text-center px-[30px] py-[22px]">
              <span className="block font-playfair text-[28px] font-bold text-sandal leading-none">{filtered.length}</span>
              <span className="block font-jost text-[9px] font-medium tracking-[0.2em] uppercase text-[rgba(255,255,255,0.45)] mt-[5px]">Projects Shown</span>
            </div>
            <span className="w-px h-10 bg-[rgba(201,168,124,0.18)] self-center" />
            <div className="text-center px-[30px] py-[22px]">
              <span className="block font-playfair text-[28px] font-bold text-sandal leading-none">320+</span>
              <span className="block font-jost text-[9px] font-medium tracking-[0.2em] uppercase text-[rgba(255,255,255,0.45)] mt-[5px]">Total Completed</span>
            </div>
            <span className="w-px h-10 bg-[rgba(201,168,124,0.18)] self-center" />
            <div className="text-center px-[30px] py-[22px]">
              <span className="block font-playfair text-[28px] font-bold text-sandal leading-none">15+</span>
              <span className="block font-jost text-[9px] font-medium tracking-[0.2em] uppercase text-[rgba(255,255,255,0.45)] mt-[5px]">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Filter bar ─── */}
      <div className="bg-white border-b border-[rgba(201,168,124,0.2)] sticky top-[74px] z-[100] shadow-[0_4px_20px_rgba(62,31,14,0.05)]">
        <div className="max-w-[1200px] mx-auto px-[52px] flex items-center justify-between gap-5 max-md:px-5">
          {/* Tabs */}
          <div className="flex flex-1 overflow-x-auto hide-scrollbar">
            {FILTERS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`font-jost text-[11px] font-semibold tracking-[0.16em] uppercase whitespace-nowrap px-8 py-[18px] border-b-[2.5px] transition-colors duration-200 ${
                  activeFilter === key
                    ? 'text-brown-deep border-sandal'
                    : 'text-text-muted border-transparent hover:text-brown-mid'
                }`}
              >
                {label}
                <span
                  className={`inline-flex items-center justify-center w-[17px] h-[17px] rounded-full font-jost text-[9px] font-bold ml-[5px] align-middle transition-colors ${
                    activeFilter === key ? 'bg-sandal text-brown-deep' : 'bg-sandal-pale text-brown-mid'
                  }`}
                >
                  {counts[key] ?? 0}
                </span>
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 font-jost text-[11px] text-text-muted py-[10px] flex-shrink-0">
            <span>Sort:</span>
            <select
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value)}
              className="font-jost text-[11px] font-semibold tracking-[0.1em] text-brown-deep bg-sandal-pale border border-[rgba(201,168,124,0.3)] py-[6px] pl-[10px] pr-7 cursor-pointer focus:outline-none"
              style={{
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23C9A87C' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 10px center',
              }}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* ─── Grid ─── */}
      <div className="max-w-[1200px] mx-auto px-[52px] pt-5 pb-20 max-md:px-5">
        {/* Count bar */}
        <div className="flex items-center justify-between mb-7 pb-4 border-b border-[rgba(201,168,124,0.2)] flex-wrap gap-[10px]">
          <span className="font-jost text-[11px] font-medium text-text-muted tracking-[0.12em] uppercase">
            Showing <strong className="text-brown-deep font-bold">{filtered.length}</strong> projects
          </span>
          <span className="font-jost text-[11px] text-sandal flex items-center gap-[5px]">
            <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
            </svg>
            New projects added as they are completed
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-7 max-md:grid-cols-1 max-lg:grid-cols-2">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} onOpen={openModal} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-3 flex flex-col items-center py-20 text-center gap-3">
              <svg className="w-14 h-14 text-[rgba(201,168,124,0.35)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
              </svg>
              <p className="font-playfair text-[20px] font-semibold text-brown-deep">No Projects in This Category</p>
              <p className="font-jost text-[13px] font-light text-text-muted">Check back as we add more completed projects.</p>
            </div>
          )}
        </div>
      </div>

      {/* ─── CTA strip ─── */}
      <div className="proj-cta-bg bg-brown-deep py-[52px]">
        <div className="max-w-[1200px] mx-auto px-[52px] flex items-center justify-between gap-10 flex-wrap relative max-md:px-5">
          <div>
            <div className="flex items-center gap-[10px] font-jost text-[9.5px] font-semibold tracking-[0.3em] uppercase text-sandal mb-[10px]">
              <span className="w-[22px] h-px bg-sandal flex-shrink-0" />
              Start Your Project
            </div>
            <h2 className="font-playfair font-bold text-white leading-[1.2]" style={{ fontSize: 'clamp(22px,3vw,32px)' }}>
              Want a Build Like <em className="not-italic text-sandal italic">These?</em>
            </h2>
            <p className="font-jost text-[14px] font-light text-[rgba(255,255,255,0.58)] mt-2">
              Talk to Er. Roby Renesh J directly — free site visit, free cost estimate, no obligation.
            </p>
          </div>
          <div className="flex gap-[14px] flex-wrap">
            <a
              href="tel:9791638957"
              className="inline-flex items-center gap-2 font-jost text-[12px] font-semibold tracking-[0.13em] uppercase px-[30px] py-[13px] text-brown-deep bg-sandal hover:bg-sandal-light transition-colors"
              style={{ clipPath: 'polygon(7px 0%,100% 0%,calc(100% - 7px) 100%,0% 100%)' }}
            >
              <PhoneSVG />
              Call: +91 97916 38957
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center font-jost text-[12px] font-semibold tracking-[0.13em] uppercase px-[30px] py-[13px] text-[rgba(255,255,255,0.7)] border-[1.5px] border-[rgba(201,168,124,0.3)] hover:bg-[rgba(255,255,255,0.05)] hover:text-white transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Modal ─── */}
      {modalProject && (
        <ProjectModal
          project={modalProject}
          imgIdx={modalImgIdx}
          setImgIdx={setModalImgIdx}
          onClose={() => setModalProject(null)}
        />
      )}
    </>
  );
}

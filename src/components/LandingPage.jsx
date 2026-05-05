import React from "react";
import { useNavigate } from "react-router-dom";
import { Brain } from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#070d18",
        color: "#e8eef8",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Mono:wght@300;400&family=Fraunces:opsz,wght@9..144,300;9..144,400&display=swap');

        :root {
          --teal: #1D9E75;
          --teal-dim: #0F6E56;
          --teal-glow: rgba(29,158,117,0.12);
          --teal-border: rgba(29,158,117,0.25);
          --purple: #7F77DD;
          --purple-dim: rgba(127,119,221,0.1);
          --orange: #D97706;
          --orange-dim: rgba(217,119,6,0.1);
          --blue: #3B82F6;
          --blue-dim: rgba(59,130,246,0.1);
          --bg: #070d18;
          --bg-1: #0d1526;
          --bg-2: #111d33;
          --bg-3: #1a263d;
          --surface: rgba(255,255,255,0.03);
          --surface-hover: rgba(255,255,255,0.055);
          --border: rgba(255,255,255,0.07);
          --border-mid: rgba(255,255,255,0.12);
          --text: #e8eef8;
          --text-2: #8fa0bc;
          --text-3: #5a6d88;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        body::before {
          content: '';
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0; opacity: 0.4;
        }

        /* NAV */
        .nm-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 40px; height: 60px;
          background: rgba(7,13,24,0.85);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(20px);
        }
        .nm-nav-logo {
          display: flex; align-items: center; gap: 10px;
          font-family: 'Fraunces', serif; font-size: 18px; font-weight: 300;
          color: var(--text); text-decoration: none; letter-spacing: -0.01em; cursor: pointer;
        }
        .nm-logo-mark {
          width: 30px; height: 30px; border-radius: 8px;
          background: var(--teal); display: grid; place-items: center; flex-shrink: 0;
        }
        .nm-nav-links { display: flex; gap: 4px; }
        .nm-nav-links a {
          padding: 6px 12px; border-radius: 6px;
          font-size: 13px; color: var(--text-2);
          text-decoration: none; transition: color 0.15s, background 0.15s;
        }
        .nm-nav-links a:hover { color: var(--text); background: var(--surface); }
        .nm-nav-cta {
          display: flex; align-items: center; gap: 8px;
          padding: 7px 16px; border-radius: 7px;
          background: var(--teal); color: #fff;
          font-size: 13px; font-weight: 500;
          border: none; cursor: pointer; transition: opacity 0.15s;
          font-family: 'DM Sans', sans-serif; text-decoration: none;
        }
        .nm-nav-cta:hover { opacity: 0.88; }

        /* HERO */
        .nm-hero {
          min-height: 100vh;
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 120px 40px 0;
          position: relative; overflow: hidden;
        }
        .nm-hero-img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          opacity: 0.18; filter: saturate(0.3); z-index: 0;
        }
        .nm-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(7,13,24,0.3) 0%, rgba(7,13,24,0.5) 50%, rgba(7,13,24,1) 100%);
          z-index: 0;
        }
        .nm-hero-glow {
          position: absolute; top: 20%; left: 30%;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(29,158,117,0.08) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }
        .nm-hero-content { max-width: 760px; position: relative; z-index: 1; }
        .nm-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 5px 12px 5px 8px;
          border: 1px solid var(--teal-border); border-radius: 99px;
          background: var(--teal-glow);
          font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--teal); font-weight: 500; margin-bottom: 28px;
          animation: fadeUp 0.7s ease 0.1s both;
        }
        .nm-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%; background: var(--teal);
          animation: nm-pulse 2s ease-in-out infinite;
        }
        @keyframes nm-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nm-hero h1 {
          font-family: 'Fraunces', serif;
          font-size: clamp(42px, 6vw, 72px); font-weight: 300; line-height: 1.1;
          letter-spacing: -0.02em; color: var(--text); margin-bottom: 20px;
          animation: fadeUp 0.7s ease 0.2s both;
        }
        .nm-hero h1 em { font-style: italic; color: var(--teal); }
        .nm-hero-sub {
          font-size: 16px; color: var(--text-2); line-height: 1.7;
          max-width: 520px; margin-bottom: 36px;
          animation: fadeUp 0.7s ease 0.3s both;
        }
        .nm-hero-actions {
          display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 60px;
          animation: fadeUp 0.7s ease 0.4s both;
        }

        /* BUTTONS */
        .nm-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 22px; border-radius: 8px;
          background: var(--teal); color: #fff;
          font-size: 14px; font-weight: 500; text-decoration: none;
          border: none; cursor: pointer; transition: opacity 0.15s, transform 0.1s;
          font-family: 'DM Sans', sans-serif;
        }
        .nm-btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
        .nm-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 22px; border-radius: 8px;
          background: transparent; color: var(--text-2);
          font-size: 14px; font-weight: 400; text-decoration: none;
          border: 1px solid var(--border-mid); cursor: pointer;
          transition: color 0.15s, border-color 0.15s, background 0.15s;
          font-family: 'DM Sans', sans-serif;
        }
        .nm-btn-ghost:hover { color: var(--text); border-color: rgba(255,255,255,0.2); background: var(--surface); }

        /* STATS BAR */
        .nm-stats-bar {
          display: grid; grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          background: var(--bg-1);
        }
        .nm-stat { padding: 28px 32px; border-right: 1px solid var(--border); }
        .nm-stat:last-child { border-right: none; }
        .nm-stat-num {
          font-family: 'Fraunces', serif; font-size: 34px; font-weight: 300;
          color: var(--teal); line-height: 1; margin-bottom: 6px; letter-spacing: -0.02em;
        }
        .nm-stat-num span { font-size: 16px; color: var(--text-3); }
        .nm-stat-label { font-size: 12px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.05em; }

        /* SECTION */
        .nm-section-inner { max-width: 1100px; margin: 0 auto; padding: 100px 40px; }
        .nm-section-kicker {
          font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;
          color: var(--teal); font-weight: 500; margin-bottom: 12px;
        }
        .nm-section-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(28px, 4vw, 44px); font-weight: 300; line-height: 1.15;
          letter-spacing: -0.02em; color: var(--text); max-width: 560px;
        }

        /* INTRO BAND */
        .nm-intro-band { background: var(--bg-1); border-bottom: 1px solid var(--border); padding: 60px 40px; }
        .nm-intro-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
        }
        .nm-intro-text p { font-size: 17px; color: var(--text-2); line-height: 1.75; margin-bottom: 16px; }
        .nm-intro-text p strong { color: var(--text); font-weight: 500; }
        .nm-research-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 14px; border-radius: 8px; border: 1px solid var(--border);
          background: var(--surface); font-size: 12px; color: var(--text-2); margin-top: 8px;
        }
        .nm-arch-box { background: var(--bg-2); border: 1px solid var(--border); border-radius: 14px; padding: 28px; }
        .nm-arch-title { font-size: 11px; text-transform: uppercase; letter-spacing: 0.07em; color: var(--text-3); margin-bottom: 20px; }
        .nm-arch-item {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 14px 0; border-bottom: 1px solid var(--border);
        }
        .nm-arch-item:last-child { border-bottom: none; }
        .nm-arch-num {
          width: 22px; height: 22px; border-radius: 50%;
          background: var(--teal-glow); border: 1px solid var(--teal-border);
          display: grid; place-items: center;
          font-size: 10px; color: var(--teal); font-weight: 500; flex-shrink: 0; margin-top: 1px;
        }
        .nm-arch-info h4 { font-size: 13px; font-weight: 500; color: var(--text); margin-bottom: 2px; }
        .nm-arch-info p { font-size: 12px; color: var(--text-3); line-height: 1.4; }
        .nm-arch-tag {
          margin-left: auto; flex-shrink: 0;
          font-size: 10px; font-family: 'DM Mono', monospace;
          padding: 2px 8px; border-radius: 4px;
          color: var(--teal); background: var(--teal-glow); border: 1px solid var(--teal-border);
        }

        /* COMPONENTS GRID */
        .nm-components-section { background: var(--bg); border-bottom: 1px solid var(--border); }
        .nm-components-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border: 1px solid var(--border);
          border-radius: 16px; overflow: hidden; margin-top: 56px;
        }
        .nm-component-card { background: var(--bg-1); padding: 40px; transition: background 0.2s; position: relative; overflow: hidden; }
        .nm-component-card:hover { background: var(--bg-2); }
        .nm-component-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          opacity: 0; transition: opacity 0.2s;
        }
        .nm-component-card:hover::before { opacity: 1; }
        .nm-card-clie::before { background: var(--teal); }
        .nm-card-lsi::before { background: var(--purple); }
        .nm-card-irths::before { background: var(--orange); }
        .nm-card-edlre::before { background: var(--blue); }
        .nm-component-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 24px; }
        .nm-component-icon { width: 42px; height: 42px; border-radius: 10px; display: grid; place-items: center; font-size: 20px; flex-shrink: 0; }
        .nm-card-clie .nm-component-icon { background: rgba(29,158,117,0.12); }
        .nm-card-lsi .nm-component-icon { background: rgba(127,119,221,0.12); }
        .nm-card-irths .nm-component-icon { background: rgba(217,119,6,0.1); }
        .nm-card-edlre .nm-component-icon { background: rgba(59,130,246,0.1); }
        .nm-component-abbr { font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.05em; padding: 3px 8px; border-radius: 4px; }
        .nm-card-clie .nm-component-abbr { color: var(--teal); background: var(--teal-glow); border: 1px solid var(--teal-border); }
        .nm-card-lsi .nm-component-abbr { color: var(--purple); background: var(--purple-dim); border: 1px solid rgba(127,119,221,0.25); }
        .nm-card-irths .nm-component-abbr { color: var(--orange); background: var(--orange-dim); border: 1px solid rgba(217,119,6,0.25); }
        .nm-card-edlre .nm-component-abbr { color: var(--blue); background: var(--blue-dim); border: 1px solid rgba(59,130,246,0.25); }
        .nm-component-name { font-family: 'Fraunces', serif; font-size: 20px; font-weight: 300; color: var(--text); line-height: 1.2; margin-bottom: 6px; letter-spacing: -0.01em; }
        .nm-component-subtitle { font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 16px; }
        .nm-card-clie .nm-component-subtitle { color: var(--teal); }
        .nm-card-lsi .nm-component-subtitle { color: var(--purple); }
        .nm-card-irths .nm-component-subtitle { color: var(--orange); }
        .nm-card-edlre .nm-component-subtitle { color: var(--blue); }
        .nm-component-desc { font-size: 14px; color: var(--text-2); line-height: 1.7; margin-bottom: 24px; }
        .nm-component-detail { background: var(--bg); border: 1px solid var(--border); border-radius: 10px; padding: 16px; margin-bottom: 12px; }
        .nm-detail-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-3); margin-bottom: 10px; }
        .nm-detail-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .nm-detail-tag { font-size: 11px; font-family: 'DM Mono', monospace; padding: 3px 9px; border-radius: 4px; background: var(--surface); border: 1px solid var(--border); color: var(--text-2); }
        .nm-component-metric { display: flex; align-items: baseline; gap: 6px; margin-top: 16px; }
        .nm-metric-val { font-family: 'Fraunces', serif; font-size: 28px; font-weight: 300; }
        .nm-card-clie .nm-metric-val { color: var(--teal); }
        .nm-card-lsi .nm-metric-val { color: var(--purple); }
        .nm-card-irths .nm-metric-val { color: var(--orange); }
        .nm-card-edlre .nm-metric-val { color: var(--blue); }
        .nm-metric-label { font-size: 12px; color: var(--text-3); }

        /* HOW IT WORKS */
        .nm-how-section { background: var(--bg-1); border-bottom: 1px solid var(--border); }
        .nm-how-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; margin-top: 56px; }
        .nm-how-steps { display: flex; flex-direction: column; gap: 0; }
        .nm-how-step { display: flex; gap: 20px; padding: 24px 0; border-bottom: 1px solid var(--border); }
        .nm-how-step:last-child { border-bottom: none; }
        .nm-step-num-wrap { display: flex; flex-direction: column; align-items: center; gap: 0; flex-shrink: 0; }
        .nm-step-num {
          width: 32px; height: 32px; border-radius: 50%;
          display: grid; place-items: center; font-size: 12px; font-weight: 500;
          border: 1px solid var(--teal-border); background: var(--teal-glow); color: var(--teal);
        }
        .nm-step-line { width: 1px; flex: 1; background: var(--border); margin: 6px auto; }
        .nm-how-step:last-child .nm-step-line { display: none; }
        .nm-step-content h3 { font-size: 14px; font-weight: 500; color: var(--text); margin-bottom: 6px; }
        .nm-step-content p { font-size: 13px; color: var(--text-2); line-height: 1.6; }
        .nm-step-badge {
          display: inline-block; margin-top: 8px;
          font-size: 10px; font-family: 'DM Mono', monospace;
          padding: 2px 8px; border-radius: 4px;
          background: var(--teal-glow); color: var(--teal); border: 1px solid var(--teal-border);
        }
        .nm-how-visual { position: relative; border-radius: 14px; overflow: hidden; border: 1px solid var(--border); aspect-ratio: 4/5; }
        .nm-how-visual img { width: 100%; height: 100%; object-fit: cover; opacity: 0.45; filter: saturate(0.5); }
        .nm-how-visual-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 40%, var(--bg-1) 100%);
          display: flex; flex-direction: column; justify-content: flex-end; padding: 28px;
        }
        .nm-how-caption { font-size: 13px; color: var(--text-2); line-height: 1.5; }
        .nm-how-caption strong { color: var(--teal); }

        /* VARK */
        .nm-vark-section { background: var(--bg); border-bottom: 1px solid var(--border); }
        .nm-vark-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 48px; }
        .nm-vark-card {
          padding: 28px 22px; background: var(--bg-1); border: 1px solid var(--border);
          border-radius: 12px; transition: border-color 0.2s, background 0.2s;
        }
        .nm-vark-card:hover { background: var(--bg-2); border-color: var(--border-mid); }
        .nm-vark-letter { font-family: 'Fraunces', serif; font-size: 48px; font-weight: 300; line-height: 1; margin-bottom: 12px; }
        .nm-vark-name { font-size: 12px; font-weight: 500; color: var(--text); margin-bottom: 8px; }
        .nm-vark-desc { font-size: 12px; color: var(--text-3); line-height: 1.5; }
        .nm-vark-signal { margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--border); }
        .nm-vark-signal-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-3); margin-bottom: 6px; }
        .nm-vark-signal-val { font-size: 11px; font-family: 'DM Mono', monospace; color: var(--text-2); }

        /* RESULTS */
        .nm-results-section { background: var(--bg-1); border-bottom: 1px solid var(--border); }
        .nm-results-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-top: 56px; align-items: start; }
        .nm-result-card { background: var(--bg); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; margin-bottom: 16px; }
        .nm-result-card-header { padding: 16px 20px; border-bottom: 1px solid var(--border); font-size: 12px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.07em; }
        .nm-result-row { display: flex; align-items: center; justify-content: space-between; padding: 12px 20px; border-bottom: 1px solid var(--border); }
        .nm-result-row:last-child { border-bottom: none; }
        .nm-result-class { font-size: 13px; color: var(--text); }
        .nm-result-bar-wrap { flex: 1; margin: 0 16px; height: 4px; background: var(--surface); border-radius: 2px; overflow: hidden; }
        .nm-result-bar { height: 100%; border-radius: 2px; background: var(--teal); }
        .nm-result-val { font-family: 'DM Mono', monospace; font-size: 12px; color: var(--teal); min-width: 36px; text-align: right; }
        .nm-result-note { font-size: 13px; color: var(--text-2); line-height: 1.7; margin-bottom: 24px; }
        .nm-result-quote {
          padding: 20px; background: var(--bg); border: 1px solid var(--border); border-radius: 10px;
          border-left: 3px solid var(--teal); font-size: 13px; color: var(--text-2);
          line-height: 1.7; margin-bottom: 16px; font-style: italic;
        }

        /* DASHBOARD PREVIEW */
        .nm-preview-section { background: var(--bg); border-bottom: 1px solid var(--border); }
        .nm-browser-frame { border: 1px solid var(--border); border-radius: 14px; overflow: hidden; margin-top: 48px; box-shadow: 0 40px 80px rgba(0,0,0,0.5); }
        .nm-browser-chrome { background: var(--bg-2); padding: 12px 16px; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 10px; }
        .nm-chrome-dots { display: flex; gap: 6px; }
        .nm-chrome-dot { width: 10px; height: 10px; border-radius: 50%; }
        .nm-browser-content { display: grid; grid-template-columns: 220px 1fr; min-height: 500px; }
        .nm-dash-sidebar { background: var(--bg-1); border-right: 1px solid var(--border); padding: 20px 14px; display: flex; flex-direction: column; }
        .nm-dash-logo { font-family: 'Fraunces', serif; font-size: 16px; font-weight: 300; color: var(--text); margin-bottom: 24px; padding: 0 6px; }
        .nm-dash-nav { display: flex; flex-direction: column; gap: 2px; flex: 1; }
        .nm-dash-nav-item { display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 7px; font-size: 13px; color: var(--text-3); cursor: pointer; transition: all 0.15s; }
        .nm-dash-nav-item:hover { background: var(--surface); color: var(--text-2); }
        .nm-dash-nav-item.active { background: var(--teal-glow); color: var(--teal); border: 1px solid var(--teal-border); }
        .nm-dash-main { background: var(--bg); padding: 24px; }
        .nm-dash-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
        .nm-dash-greeting { font-size: 14px; font-weight: 500; color: var(--text); }
        .nm-dash-date { font-size: 12px; color: var(--text-3); font-family: 'DM Mono', monospace; }
        .nm-dash-kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 20px; }
        .nm-kpi { background: var(--bg-1); border: 1px solid var(--border); border-radius: 10px; padding: 14px 16px; }
        .nm-kpi-val { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 300; line-height: 1; margin-bottom: 4px; }
        .nm-kpi-lbl { font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-3); }
        .nm-dash-charts { display: grid; grid-template-columns: 2fr 1fr; gap: 14px; }
        .nm-dash-chart-box { background: var(--bg-1); border: 1px solid var(--border); border-radius: 10px; padding: 16px; }
        .nm-chart-title { font-size: 11px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 14px; }
        .nm-state-timeline { display: flex; gap: 3px; height: 60px; align-items: flex-end; }
        .nm-state-bar { flex: 1; border-radius: 3px 3px 0 0; transition: opacity 0.15s; }
        .nm-state-legend { display: flex; gap: 12px; margin-top: 10px; }
        .nm-legend-item { display: flex; align-items: center; gap: 5px; font-size: 10px; color: var(--text-3); }
        .nm-legend-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
        .nm-vark-circle {
          width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 12px;
          background: conic-gradient(var(--teal) 0deg 144deg, var(--purple) 144deg 230deg, var(--orange) 230deg 280deg, var(--blue) 280deg 360deg);
          display: grid; place-items: center; position: relative;
        }
        .nm-vark-circle::after { content: ''; width: 54px; height: 54px; border-radius: 50%; background: var(--bg-1); position: absolute; }
        .nm-vark-labels { display: flex; flex-direction: column; gap: 4px; }
        .nm-vark-lbl-item { display: flex; align-items: center; gap: 6px; font-size: 10px; color: var(--text-3); }

        /* CTA BAND */
        .nm-cta-band { background: var(--bg-1); border-bottom: 1px solid var(--border); }
        .nm-cta-inner { max-width: 1100px; margin: 0 auto; padding: 80px 40px; display: grid; grid-template-columns: 1fr auto; gap: 40px; align-items: center; }
        .nm-cta-text h2 { font-family: 'Fraunces', serif; font-size: 36px; font-weight: 300; letter-spacing: -0.02em; line-height: 1.2; color: var(--text); margin-bottom: 12px; }
        .nm-cta-text p { font-size: 15px; color: var(--text-2); max-width: 480px; }
        .nm-cta-actions { display: flex; gap: 12px; flex-direction: column; }

        /* FOOTER */
        .nm-footer { background: var(--bg); border-top: 1px solid var(--border); padding: 40px; }
        .nm-footer-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px; }
        .nm-footer-logo { font-family: 'Fraunces', serif; font-size: 16px; font-weight: 300; color: var(--text-2); text-decoration: none; display: flex; align-items: center; gap: 8px; cursor: pointer; }
        .nm-footer-links { display: flex; gap: 24px; flex-wrap: wrap; }
        .nm-footer-links a { font-size: 13px; color: var(--text-3); text-decoration: none; transition: color 0.15s; }
        .nm-footer-links a:hover { color: var(--text-2); }
        .nm-footer-copy { font-size: 12px; color: var(--text-3); font-family: 'DM Mono', monospace; }

        @media (max-width: 768px) {
          .nm-nav { padding: 0 20px; }
          .nm-nav-links { display: none; }
          .nm-hero { padding: 100px 20px 0; }
          .nm-stats-bar { grid-template-columns: repeat(2, 1fr); }
          .nm-section-inner { padding: 60px 20px; }
          .nm-intro-inner { grid-template-columns: 1fr; gap: 32px; }
          .nm-components-grid { grid-template-columns: 1fr; }
          .nm-how-grid { grid-template-columns: 1fr; }
          .nm-how-visual { display: none; }
          .nm-vark-grid { grid-template-columns: repeat(2, 1fr); }
          .nm-results-grid { grid-template-columns: 1fr; }
          .nm-browser-content { grid-template-columns: 1fr; }
          .nm-dash-sidebar { display: none; }
          .nm-dash-kpis { grid-template-columns: repeat(2, 1fr); }
          .nm-dash-charts { grid-template-columns: 1fr; }
          .nm-cta-inner { grid-template-columns: 1fr; }
          .nm-cta-actions { flex-direction: row; flex-wrap: wrap; }
          .nm-footer-inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nm-nav">
        <div className="nm-nav-logo" onClick={() => window.scrollTo(0, 0)}>
          <div className="nm-logo-mark">
            <Brain size={16} color="white" />
          </div>
          NeuroMentor
        </div>
        <div className="nm-nav-links">
          <a href="#components">Components</a>
          <a href="#how">How it works</a>
          <a href="#results">Results</a>
          <a href="#dashboard-preview">Dashboard</a>
        </div>
        <button className="nm-nav-cta" onClick={() => navigate("/login")}>
          Sign in →
        </button>
      </nav>

      {/* HERO */}
      <section className="nm-hero">
        <img
          className="nm-hero-img"
          src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1800&q=80&auto=format&fit=crop"
          alt="Developer coding at desk"
        />
        <div className="nm-hero-overlay" />
        <div className="nm-hero-glow" />
        <div className="nm-hero-content">
          <div className="nm-hero-eyebrow">
            <div className="nm-eyebrow-dot" />
            SLIIT Research Project · VS Code Extension · Live
          </div>
          <h1>
            Adaptive tutoring for <em>novice programmers</em>
          </h1>
          <p className="nm-hero-sub">
            NeuroMentor detects your cognitive state in real time — without any
            hardware — and delivers personalized hints, learning style-adapted
            support, and semantic error micro-tutorials directly inside VS Code.
          </p>
          <div className="nm-hero-actions">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=neuromentor.Neuromentor"
              className="nm-btn-primary"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Install Extension
            </a>
            <button className="nm-btn-ghost" onClick={() => navigate("/login")}>
              Open Dashboard →
            </button>
            <button className="nm-btn-ghost" onClick={() => navigate("/login")}>
              Sign In
            </button>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="nm-stats-bar">
        {[
          { num: "87.9", unit: "%", label: "Cognitive state accuracy" },
          { num: "4", unit: "", label: "Adaptive AI components" },
          { num: "1.4", unit: "s", label: "End-to-end latency" },
          { num: "0", unit: "", label: "Extra hardware required" },
        ].map((s) => (
          <div className="nm-stat" key={s.label}>
            <div className="nm-stat-num">
              {s.num}
              <span>{s.unit}</span>
            </div>
            <div className="nm-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* INTRO BAND */}
      <div className="nm-intro-band">
        <div className="nm-intro-inner">
          <div className="nm-intro-text">
            <p>
              <strong>
                First-year dropout rates in programming courses reach 60%.
              </strong>{" "}
              Standard IDEs give cryptic error messages. AI tools hand over
              complete solutions. Neither helps a struggling student actually
              learn.
            </p>
            <p>
              NeuroMentor transforms VS Code into an active educational mentor:
              it reads your cognitive state from keystrokes alone, infers your
              VARK learning profile from navigation behavior, then adapts every
              intervention to exactly where you are.
            </p>
            <div className="nm-research-badge">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ color: "var(--teal)" }}
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              IEEE Conference Paper · SLIIT Faculty of Computing · 2025
            </div>
          </div>
          <div className="nm-arch-box">
            <div className="nm-arch-title">System architecture</div>
            {[
              {
                n: 1,
                title: "Cognitive Load Inference Engine",
                desc: "Behavioral signals → LSTM → Focused / Confused / Overloaded",
                tag: "CLIE",
              },
              {
                n: 2,
                title: "Learning Style Identifier",
                desc: "IDE navigation patterns → Random Forest → VARK profile",
                tag: "LSI",
              },
              {
                n: 3,
                title: "Iterative Real-Time Hinting",
                desc: "State + style + attempt count → escalating hint generation",
                tag: "IRTHS",
              },
              {
                n: 4,
                title: "Error-Driven Learning Engine",
                desc: "CodeBERT + rule engine → semantic error micro-tutorials",
                tag: "EDLRE",
              },
            ].map((a) => (
              <div className="nm-arch-item" key={a.n}>
                <div className="nm-arch-num">{a.n}</div>
                <div className="nm-arch-info">
                  <h4>{a.title}</h4>
                  <p>{a.desc}</p>
                </div>
                <div className="nm-arch-tag">{a.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COMPONENTS DEEP DIVE */}
      <section id="components" className="nm-components-section">
        <div className="nm-section-inner">
          <div className="nm-section-kicker">Four-component architecture</div>
          <div className="nm-section-title">
            Each piece solves a different failure mode
          </div>
          <div className="nm-components-grid">
            {/* CLIE */}
            <div className="nm-component-card nm-card-clie">
              <div className="nm-component-header">
                <div className="nm-component-icon">🧠</div>
                <div className="nm-component-abbr">CLIE</div>
              </div>
              <div className="nm-component-name">
                Cognitive Load Inference Engine
              </div>
              <div className="nm-component-subtitle">
                Real-time mental state detection
              </div>
              <p className="nm-component-desc">
                Predicts whether a student is Focused, Confused, Frustrated, or
                Overloaded — every 5 minutes — using only behavioral signals
                passively collected from VS Code. No EEG hardware at runtime.
                <br />
                <br />
                An offline EEG training phase (using Chords amplifier + LSL
                synchronization) provides physiologically grounded supervision
                labels. The deployed model is a bidirectional LSTM trained on 7
                behavioral features: typing speed, error correction rate,
                compile density, pause ratio, focus loss rate, net keystrokes,
                and keystroke entropy.
              </p>
              <div className="nm-component-detail">
                <div className="nm-detail-label">Model stack</div>
                <div className="nm-detail-tags">
                  {[
                    "Bidirectional LSTM",
                    "EEG-enriched labels",
                    "FastAPI microservice",
                    "Redis session store",
                    "WebSocket push",
                  ].map((t) => (
                    <span key={t} className="nm-detail-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="nm-component-detail">
                <div className="nm-detail-label">Detection states</div>
                <div className="nm-detail-tags">
                  <span
                    className="nm-detail-tag"
                    style={{
                      color: "var(--teal)",
                      borderColor: "var(--teal-border)",
                      background: "var(--teal-glow)",
                    }}
                  >
                    Focused
                  </span>
                  <span
                    className="nm-detail-tag"
                    style={{
                      color: "#D97706",
                      borderColor: "rgba(217,119,6,0.3)",
                      background: "rgba(217,119,6,0.08)",
                    }}
                  >
                    Confused
                  </span>
                  <span
                    className="nm-detail-tag"
                    style={{
                      color: "#B45309",
                      borderColor: "rgba(180,83,9,0.3)",
                      background: "rgba(180,83,9,0.08)",
                    }}
                  >
                    Frustrated
                  </span>
                  <span
                    className="nm-detail-tag"
                    style={{
                      color: "#DC2626",
                      borderColor: "rgba(220,38,38,0.3)",
                      background: "rgba(220,38,38,0.08)",
                    }}
                  >
                    Overloaded
                  </span>
                </div>
              </div>
              <div className="nm-component-metric">
                <span className="nm-metric-val">87.9%</span>
                <span className="nm-metric-label">
                  test accuracy · macro F1 = 0.87
                </span>
              </div>
            </div>

            {/* LSI */}
            <div className="nm-component-card nm-card-lsi">
              <div className="nm-component-header">
                <div className="nm-component-icon">🎓</div>
                <div className="nm-component-abbr">LSI</div>
              </div>
              <div className="nm-component-name">Learning Style Identifier</div>
              <div className="nm-component-subtitle">
                Behavior-driven VARK classification
              </div>
              <p className="nm-component-desc">
                Automatically infers each student's VARK learning preference
                (Visual, Auditory, Read/Write, Kinesthetic) by passively
                monitoring how they navigate and code in VS Code. No
                questionnaires. No interruptions.
                <br />
                <br />A Visual learner uses "Go to Definition" frequently; a
                Kinesthetic learner compiles rapidly with trial-and-error; a
                Read/Write learner spends time on inline docs and comments. The
                model refines the profile continuously across sessions using
                temporal smoothing.
              </p>
              <div className="nm-component-detail">
                <div className="nm-detail-label">
                  Behavioral signals tracked
                </div>
                <div className="nm-detail-tags">
                  {[
                    "Keystroke dynamics",
                    "Navigation events",
                    "Compile patterns",
                    "Comment insertion rate",
                    "Scroll behavior",
                    "Idle time",
                  ].map((t) => (
                    <span key={t} className="nm-detail-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="nm-component-detail">
                <div className="nm-detail-label">Dual-signal training</div>
                <div className="nm-detail-tags">
                  {[
                    "VARK survey labels",
                    "EEG theta-band features",
                    "Random Forest classifier",
                    "3-window smoothing",
                  ].map((t) => (
                    <span key={t} className="nm-detail-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="nm-component-metric">
                <span className="nm-metric-val">4</span>
                <span className="nm-metric-label">
                  VARK classes · top features: compile freq, nav rate
                </span>
              </div>
            </div>

            {/* IRTHS */}
            <div className="nm-component-card nm-card-irths">
              <div className="nm-component-header">
                <div className="nm-component-icon">💡</div>
                <div className="nm-component-abbr">IRTHS</div>
              </div>
              <div className="nm-component-name">
                Iterative Real-Time Hinting System
              </div>
              <div className="nm-component-subtitle">
                Attempt-based adaptive scaffolding
              </div>
              <p className="nm-component-desc">
                Replaces static compiler errors with progressively escalating,
                style-adapted hints that respond to three simultaneous signals:
                the exact code error, the student's current cognitive state, and
                how many attempts they've made on this concept.
                <br />
                <br />A Focused student on attempt 1 gets a conceptual nudge. An
                Overloaded student on attempt 3 gets concrete syntax guidance.
                Hints are formatted to match the student's detected VARK style
                using a dual-tier pipeline: a local quantized Llama-3.2-3B for
                content, a cloud LLM for multi-modal formatting.
              </p>
              <div className="nm-component-detail">
                <div className="nm-detail-label">Logic matrix inputs</div>
                <div className="nm-detail-tags">
                  {[
                    "Error vector (AST)",
                    "Cognitive state",
                    "Attempt count (1–3)",
                    "VARK profile",
                  ].map((t) => (
                    <span key={t} className="nm-detail-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="nm-component-detail">
                <div className="nm-detail-label">Generation pipeline</div>
                <div className="nm-detail-tags">
                  {[
                    "Heuristic matrix (Tier 1)",
                    "Llama-3.2-3B (ICL)",
                    "Cloud formatting (Tier 2)",
                    "Circuit breaker fallback",
                  ].map((t) => (
                    <span key={t} className="nm-detail-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="nm-component-metric">
                <span className="nm-metric-val">&lt;1s</span>
                <span className="nm-metric-label">
                  hint delivery latency · WebSocket orchestration
                </span>
              </div>
            </div>

            {/* EDLRE */}
            <div className="nm-component-card nm-card-edlre">
              <div className="nm-component-header">
                <div className="nm-component-icon">🔍</div>
                <div className="nm-component-abbr">EDLRE</div>
              </div>
              <div className="nm-component-name">
                Error-Driven Learning Reinforcement Engine
              </div>
              <div className="nm-component-subtitle">
                Semantic error detection & micro-tutorials
              </div>
              <p className="nm-component-desc">
                Standard compilers catch syntax errors but are completely blind
                to logical and semantic mistakes — integer truncation traps like{" "}
                <code
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 12,
                    background: "var(--surface)",
                    padding: "1px 5px",
                    borderRadius: 3,
                    color: "var(--blue)",
                  }}
                >
                  15/100 → 0
                </code>
                , memory leaks, uninitialized variables. These are the errors
                that cause novices hours of confusion.
                <br />
                <br />
                EDLRE uses a hybrid pipeline: a fast in-memory rule engine for
                common novice patterns, plus a fine-tuned CodeBERT model for
                complex semantic analysis. Each error triggers an "Avoid This /
                Try This" micro-tutorial in the VS Code sidebar — teaching the
                concept, not just the fix.
              </p>
              <div className="nm-component-detail">
                <div className="nm-detail-label">Error categories detected</div>
                <div className="nm-detail-tags">
                  <span
                    className="nm-detail-tag"
                    style={{
                      color: "var(--teal)",
                      borderColor: "var(--teal-border)",
                      background: "var(--teal-glow)",
                    }}
                  >
                    Syntactic
                  </span>
                  <span
                    className="nm-detail-tag"
                    style={{
                      color: "var(--orange)",
                      borderColor: "rgba(217,119,6,0.3)",
                      background: "rgba(217,119,6,0.08)",
                    }}
                  >
                    Logical
                  </span>
                  <span
                    className="nm-detail-tag"
                    style={{
                      color: "var(--blue)",
                      borderColor: "rgba(59,130,246,0.3)",
                      background: "rgba(59,130,246,0.08)",
                    }}
                  >
                    Semantic
                  </span>
                </div>
              </div>
              <div className="nm-component-detail">
                <div className="nm-detail-label">Detection pipeline</div>
                <div className="nm-detail-tags">
                  {[
                    "Static rule engine",
                    "CodeBERT (fine-tuned)",
                    "MongoDB telemetry",
                    '"Avoid This / Try This" format',
                  ].map((t) => (
                    <span key={t} className="nm-detail-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="nm-component-metric">
                <span className="nm-metric-val">3×</span>
                <span className="nm-metric-label">
                  error categories · outperforms standard compiler baseline
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="nm-how-section">
        <div className="nm-section-inner">
          <div className="nm-section-kicker">End-to-end flow</div>
          <div className="nm-section-title">
            What happens when you write code
          </div>
          <div className="nm-how-grid">
            <div className="nm-how-steps">
              {[
                {
                  n: "1",
                  title: "VS Code extension collects behavioral signals",
                  desc: "As you type, the TypeScript extension passively tracks keystrokes, backspaces, compile events, cursor movement, and pause patterns — completely invisibly, with no performance impact.",
                  badge: "onDidChangeTextDocument · 5-min windows",
                },
                {
                  n: "2",
                  title: "CLIE infers your cognitive state",
                  desc: "Every 5 minutes, 7 derived features are sent to the LSTM microservice. It returns your cognitive state — Focused, Confused, Frustrated, or Overloaded — in under 1.4 seconds.",
                  badge: "Redis session store · WebSocket push",
                },
                {
                  n: "3",
                  title: "LSI builds your VARK profile",
                  desc: "Simultaneously, navigation events refine your learning style classification. After 3 consecutive consistent windows, your VARK profile is updated — Visual, Auditory, Read/Write, or Kinesthetic.",
                  badge: "Random Forest · temporal smoothing",
                },
                {
                  n: "4",
                  title: "IRTHS fires a style-adapted hint",
                  desc: "When overload is detected for two consecutive windows, IRTHS generates an escalating hint calibrated to your cognitive state, attempt number, and VARK style — directly in the sidebar.",
                  badge: "Hysteresis logic · Llama-3.2-3B",
                },
                {
                  n: "5",
                  title: "EDLRE teaches the concept behind every error",
                  desc: 'Independently, EDLRE scans code snapshots for logical and semantic errors that your compiler will never catch. Each finding becomes a structured micro-tutorial with "Avoid This / Try This" examples.',
                  badge: "CodeBERT · rule engine · sidebar WebView",
                },
              ].map((step) => (
                <div className="nm-how-step" key={step.n}>
                  <div className="nm-step-num-wrap">
                    <div className="nm-step-num">{step.n}</div>
                    <div className="nm-step-line" />
                  </div>
                  <div className="nm-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                    <span className="nm-step-badge">{step.badge}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="nm-how-visual">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&auto=format&fit=crop"
                alt="Code on dark screen"
              />
              <div className="nm-how-visual-overlay">
                <p className="nm-how-caption">
                  The entire pipeline runs inside VS Code with{" "}
                  <strong>no external hardware</strong>. Only anonymized
                  numerical feature vectors leave the editor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VARK SECTION */}
      <section className="nm-vark-section">
        <div
          className="nm-section-inner"
          style={{ paddingTop: 80, paddingBottom: 80 }}
        >
          <div className="nm-section-kicker">Learning Style Identifier</div>
          <div className="nm-section-title">
            Four learning profiles, one behavioral model
          </div>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-2)",
              marginTop: 14,
              maxWidth: 520,
            }}
          >
            The VARK model categorizes how learners best absorb information.
            NeuroMentor detects your profile from IDE behavior — no
            questionnaire needed.
          </p>
          <div className="nm-vark-grid">
            {[
              {
                letter: "V",
                color: "var(--teal)",
                name: "Visual",
                desc: "Learns best through diagrams, structural relationships, and visual representations of code flow.",
                signals: [
                  "High 'Go to Definition' usage",
                  "Graphical debugger preference",
                  "Breadcrumb navigation",
                ],
              },
              {
                letter: "A",
                color: "var(--purple)",
                name: "Auditory",
                desc: "Learns best through narrated explanations, discussions, and video-based instruction.",
                signals: [
                  "Video resource searches",
                  "External tab patterns",
                  "Tutorial-seeking behavior",
                ],
              },
              {
                letter: "R",
                color: "var(--orange)",
                name: "Read / Write",
                desc: "Learns best through reading documentation, writing notes, and detailed textual explanations.",
                signals: [
                  "IntelliSense hover dwell time",
                  "High comment insertion rate",
                  "Doc file open frequency",
                ],
              },
              {
                letter: "K",
                color: "var(--blue)",
                name: "Kinesthetic",
                desc: "Learns best through hands-on practice, trial and error, and repeated experimentation.",
                signals: [
                  "High compile frequency",
                  "Short time-to-first-compile",
                  "Rapid error → fix cycles",
                ],
              },
            ].map((v) => (
              <div className="nm-vark-card" key={v.letter}>
                <div className="nm-vark-letter" style={{ color: v.color }}>
                  {v.letter}
                </div>
                <div className="nm-vark-name">{v.name}</div>
                <div className="nm-vark-desc">{v.desc}</div>
                <div className="nm-vark-signal">
                  <div className="nm-vark-signal-label">IDE signal</div>
                  <div className="nm-vark-signal-val">
                    {v.signals.join("\n")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="nm-results-section">
        <div className="nm-section-inner">
          <div className="nm-section-kicker">Evaluation & results</div>
          <div className="nm-section-title">
            Prototype performance across all four components
          </div>
          <div className="nm-results-grid">
            <div>
              <p className="nm-result-note">
                The CLIE bidirectional LSTM was evaluated on a held-out test set
                of 118 behavioral windows drawn from EEG-labeled sessions with
                SLIIT undergraduates. 5-fold session-level cross-validation
                confirms consistent generalization.
              </p>
              <div className="nm-result-card">
                <div className="nm-result-card-header">
                  CLIE classification report · LSTM · n=118
                </div>
                {[
                  {
                    label: "Focused",
                    color: "var(--teal)",
                    barColor: "var(--teal)",
                    w: "92%",
                    val: "0.92",
                  },
                  {
                    label: "Confused",
                    color: "#D97706",
                    barColor: "#D97706",
                    w: "84%",
                    val: "0.84",
                  },
                  {
                    label: "Frustrated",
                    color: "#B45309",
                    barColor: "#B45309",
                    w: "85%",
                    val: "0.85",
                  },
                  {
                    label: "Overloaded",
                    color: "#DC2626",
                    barColor: "#DC2626",
                    w: "88%",
                    val: "0.88",
                  },
                  {
                    label: "Macro Avg",
                    color: "var(--text)",
                    barColor: "var(--teal)",
                    w: "87%",
                    val: "0.87",
                    bold: true,
                  },
                ].map((r) => (
                  <div
                    className="nm-result-row"
                    key={r.label}
                    style={r.bold ? { background: "var(--surface)" } : {}}
                  >
                    <span
                      className="nm-result-class"
                      style={{
                        color: r.color,
                        fontWeight: r.bold ? 500 : undefined,
                      }}
                    >
                      {r.label}
                    </span>
                    <div className="nm-result-bar-wrap">
                      <div
                        className="nm-result-bar"
                        style={{ width: r.w, background: r.barColor }}
                      />
                    </div>
                    <span
                      className="nm-result-val"
                      style={{ color: r.barColor }}
                    >
                      {r.val}
                    </span>
                  </div>
                ))}
              </div>
              <p className="nm-result-note" style={{ marginTop: 20 }}>
                Ablation study: training on self-reported NASA TLX labels
                instead of EEG-derived labels drops macro F1 from 0.87 to 0.74 —
                a 13-point advantage from EEG-enriched supervision.
              </p>
            </div>
            <div>
              <div className="nm-result-quote">
                "Students reported that the system's feedback was more useful
                than standard compiler messages, and the non-intrusive nature
                was consistently highlighted as a key positive attribute." —
                Integrated user study, 15 first-year CS students
              </div>
              <div className="nm-result-card">
                <div className="nm-result-card-header">
                  Integrated system user study · n=15 · 5-session study
                </div>
                <div className="nm-result-row">
                  <span className="nm-result-class">
                    VARK-aligned interventions
                  </span>
                  <div className="nm-result-bar-wrap">
                    <div className="nm-result-bar" style={{ width: "82%" }} />
                  </div>
                  <span className="nm-result-val">4.1/5</span>
                </div>
                <div className="nm-result-row">
                  <span className="nm-result-class">
                    Unaligned interventions
                  </span>
                  <div className="nm-result-bar-wrap">
                    <div
                      className="nm-result-bar"
                      style={{ width: "64%", background: "var(--text-3)" }}
                    />
                  </div>
                  <span
                    className="nm-result-val"
                    style={{ color: "var(--text-3)" }}
                  >
                    3.2/5
                  </span>
                </div>
              </div>
              <p className="nm-result-note" style={{ marginTop: 20 }}>
                Feature importance (Random Forest):{" "}
                <code
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 12,
                    background: "var(--surface)",
                    padding: "1px 5px",
                    borderRadius: 3,
                    color: "var(--teal)",
                  }}
                >
                  error_correction_rate
                </code>{" "}
                (0.24),{" "}
                <code
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 12,
                    background: "var(--surface)",
                    padding: "1px 5px",
                    borderRadius: 3,
                    color: "var(--teal)",
                  }}
                >
                  compile_density
                </code>{" "}
                (0.19),{" "}
                <code
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 12,
                    background: "var(--surface)",
                    padding: "1px 5px",
                    borderRadius: 3,
                    color: "var(--teal)",
                  }}
                >
                  pause_ratio
                </code>{" "}
                (0.17) — consistent with the EEG cognitive load literature.
              </p>
              <div className="nm-result-card" style={{ marginTop: 16 }}>
                <div className="nm-result-card-header">
                  Research contributions
                </div>
                {[
                  "EEG-only for training, not runtime",
                  "Behavioral VARK inference without surveys",
                  "Attempt × state × style hint matrix",
                  "CodeBERT semantic error → micro-tutorial",
                ].map((c) => (
                  <div className="nm-result-row" key={c}>
                    <span className="nm-result-class">{c}</span>
                    <span
                      className="nm-result-val"
                      style={{ color: "var(--teal)" }}
                    >
                      Novel
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section id="dashboard-preview" className="nm-preview-section">
        <div className="nm-section-inner">
          <div className="nm-section-kicker">Student dashboard</div>
          <div className="nm-section-title">
            Track every session, intervention, and insight
          </div>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-2)",
              marginTop: 12,
              maxWidth: 500,
            }}
          >
            The web platform at neuromentor.dev gives students and instructors a
            full view of cognitive patterns, learning style evolution, and error
            history across sessions.
          </p>
          <div className="nm-browser-frame">
            <div className="nm-browser-chrome">
              <div className="nm-chrome-dots">
                <div
                  className="nm-chrome-dot"
                  style={{ background: "rgba(239,68,68,0.4)" }}
                />
                <div
                  className="nm-chrome-dot"
                  style={{ background: "rgba(234,179,8,0.4)" }}
                />
                <div
                  className="nm-chrome-dot"
                  style={{ background: "rgba(34,197,94,0.4)" }}
                />
              </div>
              <div
                style={{
                  flex: 1,
                  height: 26,
                  background: "var(--bg)",
                  borderRadius: 6,
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 12px",
                  fontSize: 11,
                  fontFamily: "'DM Mono', monospace",
                  color: "var(--text-3)",
                }}
              >
                neuromentor.dev/dashboard
              </div>
            </div>
            <div className="nm-browser-content">
              <div className="nm-dash-sidebar">
                <div className="nm-dash-logo">NeuroMentor</div>
                <div className="nm-dash-nav">
                  {[
                    { label: "Overview", active: true },
                    { label: "Cognitive State" },
                    { label: "Interventions" },
                    { label: "Learning Style" },
                    { label: "Error History" },
                    { label: "Sessions" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`nm-dash-nav-item${item.active ? " active" : ""}`}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="nm-dash-main">
                <div className="nm-dash-header">
                  <div className="nm-dash-greeting">
                    Good morning, Heshan — last session 2 hours ago
                  </div>
                  <div className="nm-dash-date">2025-05-04 · 09:41</div>
                </div>
                <div className="nm-dash-kpis">
                  {[
                    {
                      val: "12",
                      label: "Hints delivered",
                      color: "var(--teal)",
                    },
                    {
                      val: "Kinesthetic",
                      label: "Detected style",
                      color: "var(--purple)",
                    },
                    {
                      val: "3",
                      label: "Logical errors caught",
                      color: "var(--orange)",
                    },
                    {
                      val: "74%",
                      label: "Avg focus ratio",
                      color: "var(--blue)",
                    },
                  ].map((k) => (
                    <div key={k.label} className="nm-kpi">
                      <div className="nm-kpi-val" style={{ color: k.color }}>
                        {k.val}
                      </div>
                      <div className="nm-kpi-lbl">{k.label}</div>
                    </div>
                  ))}
                </div>
                <div className="nm-dash-charts">
                  <div className="nm-dash-chart-box">
                    <div className="nm-chart-title">
                      Cognitive state · last 8 windows · current session
                    </div>
                    <div className="nm-state-timeline">
                      {[
                        { h: 82, c: "var(--teal)" },
                        { h: 90, c: "var(--teal)" },
                        { h: 58, c: "#B45309" },
                        { h: 44, c: "#B45309" },
                        { h: 28, c: "#DC2626" },
                        { h: 50, c: "#B45309" },
                        { h: 72, c: "var(--teal)" },
                        { h: 88, c: "var(--teal)" },
                      ].map((b, i) => (
                        <div
                          key={i}
                          className="nm-state-bar"
                          style={{ height: `${b.h}%`, background: b.c }}
                        />
                      ))}
                    </div>
                    <div className="nm-state-legend">
                      <div className="nm-legend-item">
                        <div
                          className="nm-legend-dot"
                          style={{ background: "var(--teal)" }}
                        />{" "}
                        Focused
                      </div>
                      <div className="nm-legend-item">
                        <div
                          className="nm-legend-dot"
                          style={{ background: "#B45309" }}
                        />{" "}
                        Confused
                      </div>
                      <div className="nm-legend-item">
                        <div
                          className="nm-legend-dot"
                          style={{ background: "#DC2626" }}
                        />{" "}
                        Overloaded
                      </div>
                    </div>
                  </div>
                  <div
                    className="nm-dash-chart-box"
                    style={{ textAlign: "center" }}
                  >
                    <div className="nm-chart-title">VARK profile</div>
                    <div className="nm-vark-circle" />
                    <div className="nm-vark-labels">
                      <div className="nm-vark-lbl-item">
                        <div
                          className="nm-legend-dot"
                          style={{ background: "var(--teal)" }}
                        />
                        Visual 40%
                      </div>
                      <div className="nm-vark-lbl-item">
                        <div
                          className="nm-legend-dot"
                          style={{ background: "var(--purple)" }}
                        />
                        Auditory 24%
                      </div>
                      <div className="nm-vark-lbl-item">
                        <div
                          className="nm-legend-dot"
                          style={{ background: "var(--orange)" }}
                        />
                        Read/Write 14%
                      </div>
                      <div className="nm-vark-lbl-item">
                        <div
                          className="nm-legend-dot"
                          style={{ background: "var(--blue)" }}
                        />
                        Kinesthetic 22%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <div className="nm-cta-band">
        <div className="nm-cta-inner">
          <div className="nm-cta-text">
            <h2>Ready to mentor smarter?</h2>
            <p>
              Install the VS Code extension and open the dashboard to start
              tracking your sessions. Built by SLIIT Faculty of Computing,
              Colombo.
            </p>
          </div>
          <div className="nm-cta-actions">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=neuromentor.Neuromentor"
              className="nm-btn-primary"
            >
              Install VS Code Extension
            </a>
            <button className="nm-btn-ghost" onClick={() => navigate("/login")}>
              Open Dashboard →
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="nm-footer">
        <div className="nm-footer-inner">
          <div className="nm-footer-logo" onClick={() => window.scrollTo(0, 0)}>
            <div
              className="nm-logo-mark"
              style={{ width: 22, height: 22, borderRadius: 5 }}
            >
              <Brain size={12} color="white" />
            </div>
            NeuroMentor
          </div>
          <div className="nm-footer-links">
            <a href="#">GitHub (Extension)</a>
            <a href="#">GitHub (Dashboard)</a>
            <a href="#">Research Paper</a>
            <a href="#">VS Code Marketplace</a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
            >
              Dashboard
            </a>
          </div>
          <div className="nm-footer-copy">
            SLIIT · Faculty of Computing · 2025
          </div>
        </div>
      </footer>
    </div>
  );
}

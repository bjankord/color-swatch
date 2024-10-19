---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Color Swatch"
  text: 
  tagline: Easily document colors from your design system in any documenation framework
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
    - theme: alt
      text: Examples
      link: /examples
---

<script setup>
import 'color-swatch';

const colors = [
  {
    name: "Slate",
    values: [
      { shade: 50, hex: "#f8fafc" },
      { shade: 100, hex: "#f1f5f9" },
      { shade: 200, hex: "#e2e8f0" },
      { shade: 300, hex: "#cbd5e1" },
      { shade: 400, hex: "#94a3b8" },
      { shade: 500, hex: "#64748b" },
      { shade: 600, hex: "#475569" },
      { shade: 700, hex: "#334155" },
      { shade: 800, hex: "#1e293b" },
      { shade: 900, hex: "#0f172a" },
      { shade: 950, hex: "#020617" }
    ]
  },
  {
    name: "Gray",
    values: [
      { shade: 50, hex: "#f9fafb" },
      { shade: 100, hex: "#f3f4f6" },
      { shade: 200, hex: "#e5e7eb" },
      { shade: 300, hex: "#d1d5db" },
      { shade: 400, hex: "#9ca3af" },
      { shade: 500, hex: "#6b7280" },
      { shade: 600, hex: "#4b5563" },
      { shade: 700, hex: "#374151" },
      { shade: 800, hex: "#1f2937" },
      { shade: 900, hex: "#111827" },
      { shade: 950, hex: "#030712" }
    ]
  },
  {
    name: "Zinc",
    values: [
      { shade: 50, hex: "#fafafa" },
      { shade: 100, hex: "#f4f4f5" },
      { shade: 200, hex: "#e4e4e7" },
      { shade: 300, hex: "#d4d4d8" },
      { shade: 400, hex: "#a1a1aa" },
      { shade: 500, hex: "#71717a" },
      { shade: 600, hex: "#52525b" },
      { shade: 700, hex: "#3f3f46" },
      { shade: 800, hex: "#27272a" },
      { shade: 900, hex: "#18181b" },
      { shade: 950, hex: "#09090b" }
    ]
  },
  {
    name: "Neutral",
    values: [
      { shade: 50, hex: "#fafafa" },
      { shade: 100, hex: "#f5f5f5" },
      { shade: 200, hex: "#e5e5e5" },
      { shade: 300, hex: "#d4d4d4" },
      { shade: 400, hex: "#a3a3a3" },
      { shade: 500, hex: "#737373" },
      { shade: 600, hex: "#525252" },
      { shade: 700, hex: "#404040" },
      { shade: 800, hex: "#262626" },
      { shade: 900, hex: "#171717" },
      { shade: 950, hex: "#0a0a0a" }
    ]
  },
  {
    name: "Stone",
    values: [
      { shade: 50, hex: "#fafaf9" },
      { shade: 100, hex: "#f5f5f4" },
      { shade: 200, hex: "#e7e5e4" },
      { shade: 300, hex: "#d6d3d1" },
      { shade: 400, hex: "#a8a29e" },
      { shade: 500, hex: "#78716c" },
      { shade: 600, hex: "#57534e" },
      { shade: 700, hex: "#44403c" },
      { shade: 800, hex: "#292524" },
      { shade: 900, hex: "#1c1917" },
      { shade: 950, hex: "#0c0a09" }
    ]
  },
  {
    name: "Red",
    values: [
      { shade: 50, hex: "#fef2f2" },
      { shade: 100, hex: "#fee2e2" },
      { shade: 200, hex: "#fecaca" },
      { shade: 300, hex: "#fca5a5" },
      { shade: 400, hex: "#f87171" },
      { shade: 500, hex: "#ef4444" },
      { shade: 600, hex: "#dc2626" },
      { shade: 700, hex: "#b91c1c" },
      { shade: 800, hex: "#991b1b" },
      { shade: 900, hex: "#7f1d1d" },
      { shade: 950, hex: "#450a0a" }
    ]
  },
  {
    name: "Orange",
    values: [
      { shade: 50, hex: "#fff7ed" },
      { shade: 100, hex: "#ffedd5" },
      { shade: 200, hex: "#fed7aa" },
      { shade: 300, hex: "#fdba74" },
      { shade: 400, hex: "#fb923c" },
      { shade: 500, hex: "#f97316" },
      { shade: 600, hex: "#ea580c" },
      { shade: 700, hex: "#c2410c" },
      { shade: 800, hex: "#9a3412" },
      { shade: 900, hex: "#7c2d12" },
      { shade: 950, hex: "#431407" }
    ]
  },
  {
    name: "Amber",
    values: [
      { shade: 50, hex: "#fffbeb" },
      { shade: 100, hex: "#fef3c7" },
      { shade: 200, hex: "#fde68a" },
      { shade: 300, hex: "#fcd34d" },
      { shade: 400, hex: "#fbbf24" },
      { shade: 500, hex: "#f59e0b" },
      { shade: 600, hex: "#d97706" },
      { shade: 700, hex: "#b45309" },
      { shade: 800, hex: "#92400e" },
      { shade: 900, hex: "#78350f" },
      { shade: 950, hex: "#451a03" }
    ]
  },
  {
    name: "Yellow",
    values: [
      { shade: 50, hex: "#fefce8" },
      { shade: 100, hex: "#fef9c3" },
      { shade: 200, hex: "#fef08a" },
      { shade: 300, hex: "#fde047" },
      { shade: 400, hex: "#facc15" },
      { shade: 500, hex: "#eab308" },
      { shade: 600, hex: "#ca8a04" },
      { shade: 700, hex: "#a16207" },
      { shade: 800, hex: "#854d0e" },
      { shade: 900, hex: "#713f12" },
      { shade: 950, hex: "#422006" }
    ]
  },
  {
    name: "Lime",
    values: [
      { shade: 50, hex: "#f7fee7" },
      { shade: 100, hex: "#ecfccb" },
      { shade: 200, hex: "#d9f99d" },
      { shade: 300, hex: "#bef264" },
      { shade: 400, hex: "#a3e635" },
      { shade: 500, hex: "#84cc16" },
      { shade: 600, hex: "#65a30d" },
      { shade: 700, hex: "#4d7c0f" },
      { shade: 800, hex: "#3f6212" },
      { shade: 900, hex: "#365314" },
      { shade: 950, hex: "#1a2e05" }
    ]
  },
  {
    name: "Green",
    values: [
      { shade: 50, hex: "#f0fdf4" },
      { shade: 100, hex: "#dcfce7" },
      { shade: 200, hex: "#bbf7d0" },
      { shade: 300, hex: "#86efac" },
      { shade: 400, hex: "#4ade80" },
      { shade: 500, hex: "#22c55e" },
      { shade: 600, hex: "#16a34a" },
      { shade: 700, hex: "#15803d" },
      { shade: 800, hex: "#166534" },
      { shade: 900, hex: "#14532d" },
      { shade: 950, hex: "#052e16" }
    ]
  },
  {
    name: "Emerald",
    values: [
      { shade: 50, hex: "#ecfdf5" },
      { shade: 100, hex: "#d1fae5" },
      { shade: 200, hex: "#a7f3d0" },
      { shade: 300, hex: "#6ee7b7" },
      { shade: 400, hex: "#34d399" },
      { shade: 500, hex: "#10b981" },
      { shade: 600, hex: "#059669" },
      { shade: 700, hex: "#047857" },
      { shade: 800, hex: "#065f46" },
      { shade: 900, hex: "#064e3b" },
      { shade: 950, hex: "#022c22" }
    ]
  },
  {
    name: "Teal",
    values: [
      { shade: 50, hex: "#f0fdfa" },
      { shade: 100, hex: "#ccfbf1" },
      { shade: 200, hex: "#99f6e4" },
      { shade: 300, hex: "#5eead4" },
      { shade: 400, hex: "#2dd4bf" },
      { shade: 500, hex: "#14b8a6" },
      { shade: 600, hex: "#0d9488" },
      { shade: 700, hex: "#0f766e" },
      { shade: 800, hex: "#115e59" },
      { shade: 900, hex: "#134e4a" },
      { shade: 950, hex: "#042f2e" }
    ]
  },
  {
    name: "Cyan",
    values: [
      { shade: 50, hex: "#ecfeff" },
      { shade: 100, hex: "#cffafe" },
      { shade: 200, hex: "#a5f3fc" },
      { shade: 300, hex: "#67e8f9" },
      { shade: 400, hex: "#22d3ee" },
      { shade: 500, hex: "#06b6d4" },
      { shade: 600, hex: "#0891b2" },
      { shade: 700, hex: "#0e7490" },
      { shade: 800, hex: "#155e75" },
      { shade: 900, hex: "#164e63" },
      { shade: 950, hex: "#083344" }
    ]
  },
  {
    name: "Sky",
    values: [
      { shade: 50, hex: "#f0f9ff" },
      { shade: 100, hex: "#e0f2fe" },
      { shade: 200, hex: "#bae6fd" },
      { shade: 300, hex: "#7dd3fc" },
      { shade: 400, hex: "#38bdf8" },
      { shade: 500, hex: "#0ea5e9" },
      { shade: 600, hex: "#0284c7" },
      { shade: 700, hex: "#0369a1" },
      { shade: 800, hex: "#075985" },
      { shade: 900, hex: "#0c4a6e" },
      { shade: 950, hex: "#082f49" }
    ]
  },
  {
    name: "Blue",
    values: [
      { shade: 50, hex: "#eff6ff" },
      { shade: 100, hex: "#dbeafe" },
      { shade: 200, hex: "#bfdbfe" },
      { shade: 300, hex: "#93c5fd" },
      { shade: 400, hex: "#60a5fa" },
      { shade: 500, hex: "#3b82f6" },
      { shade: 600, hex: "#2563eb" },
      { shade: 700, hex: "#1d4ed8" },
      { shade: 800, hex: "#1e40af" },
      { shade: 900, hex: "#1e3a8a" },
      { shade: 950, hex: "#172554" }
    ]
  },
  {
    name: "Indigo",
    values: [
      { shade: 50, hex: "#eef2ff" },
      { shade: 100, hex: "#e0e7ff" },
      { shade: 200, hex: "#c7d2fe" },
      { shade: 300, hex: "#a5b4fc" },
      { shade: 400, hex: "#818cf8" },
      { shade: 500, hex: "#6366f1" },
      { shade: 600, hex: "#4f46e5" },
      { shade: 700, hex: "#4338ca" },
      { shade: 800, hex: "#3730a3" },
      { shade: 900, hex: "#312e81" },
      { shade: 950, hex: "#1e1b4b" }
    ]
  },
  {
    name: "Violet",
    values: [
      { shade: 50, hex: "#f5f3ff" },
      { shade: 100, hex: "#ede9fe" },
      { shade: 200, hex: "#ddd6fe" },
      { shade: 300, hex: "#c4b5fd" },
      { shade: 400, hex: "#a78bfa" },
      { shade: 500, hex: "#8b5cf6" },
      { shade: 600, hex: "#7c3aed" },
      { shade: 700, hex: "#6d28d9" },
      { shade: 800, hex: "#5b21b6" },
      { shade: 900, hex: "#4c1d95" },
      { shade: 950, hex: "#2e1065" }
    ]
  },
  {
    name: "Purple",
    values: [
      { shade: 50, hex: "#faf5ff" },
      { shade: 100, hex: "#f3e8ff" },
      { shade: 200, hex: "#e9d5ff" },
      { shade: 300, hex: "#d8b4fe" },
      { shade: 400, hex: "#c084fc" },
      { shade: 500, hex: "#a855f7" },
      { shade: 600, hex: "#9333ea" },
      { shade: 700, hex: "#7e22ce" },
      { shade: 800, hex: "#6b21a8" },
      { shade: 900, hex: "#581c87" },
      { shade: 950, hex: "#3b0764" }
    ]
  },
  {
    name: "Fuchsia",
    values: [
      { shade: 50, hex: "#fdf4ff" },
      { shade: 100, hex: "#fae8ff" },
      { shade: 200, hex: "#f5d0fe" },
      { shade: 300, hex: "#f0abfc" },
      { shade: 400, hex: "#e879f9" },
      { shade: 500, hex: "#d946ef" },
      { shade: 600, hex: "#c026d3" },
      { shade: 700, hex: "#a21caf" },
      { shade: 800, hex: "#86198f" },
      { shade: 900, hex: "#701a75" },
      { shade: 950, hex: "#4a044e" }
    ]
  },
  {
    name: "Pink",
    values: [
      { shade: 50, hex: "#fdf2f8" },
      { shade: 100, hex: "#fce7f3" },
      { shade: 200, hex: "#fbcfe8" },
      { shade: 300, hex: "#f9a8d4" },
      { shade: 400, hex: "#f472b6" },
      { shade: 500, hex: "#ec4899" },
      { shade: 600, hex: "#db2777" },
      { shade: 700, hex: "#be185d" },
      { shade: 800, hex: "#9d174d" },
      { shade: 900, hex: "#831843" },
      { shade: 950, hex: "#500724" }
    ]
  },
  {
    name: "Rose",
    values: [
      { shade: 50, hex: "#fff1f2" },
      { shade: 100, hex: "#ffe4e6" },
      { shade: 200, hex: "#fecdd3" },
      { shade: 300, hex: "#fda4af" },
      { shade: 400, hex: "#fb7185" },
      { shade: 500, hex: "#f43f5e" },
      { shade: 600, hex: "#e11d48" },
      { shade: 700, hex: "#be123c" },
      { shade: 800, hex: "#9f1239" },
      { shade: 900, hex: "#881337" },
      { shade: 950, hex: "#4c0519" }
    ]
  }
];
</script>

<style>
  color-swatch {
    max-width: 500px;
    margin: 0 auto 2rem auto;
  }
</style>

<div style="color: #000;">
<color-swatch color-value="#fef2f2">
Red 50
</color-swatch>
<color-swatch color-value="#fee2e2">
Red 100
</color-swatch>
<color-swatch color-value="#fecaca">
Red 200
</color-swatch>
<color-swatch color-value="#fca5a5">
Red 300
</color-swatch>
<color-swatch color-value="#f87171">
Red 400
</color-swatch>
<color-swatch color-value="#ef4444">
Red 500
</color-swatch>
<color-swatch color-value="#dc2626">
Red 600
</color-swatch>
<color-swatch color-value="#b91c1c">
Red 700
</color-swatch>
<color-swatch color-value="#991b1b">
Red 800
</color-swatch>
<color-swatch color-value="#7f1d1d">
Red 900
</color-swatch>
<color-swatch color-value="#450a0a">
Red 950
</color-swatch>

<color-swatch color-value="#fff7ed">
Orange
50
</color-swatch>
<color-swatch color-value="#ffedd5">
100
</color-swatch>
<color-swatch color-value="#fed7aa">
200
</color-swatch>
<color-swatch color-value="#fdba74">
300
</color-swatch>
<color-swatch color-value="#fb923c">
400
</color-swatch>
<color-swatch color-value="#f97316">
500
</color-swatch>
<color-swatch color-value="#ea580c">
600
</color-swatch>
<color-swatch color-value="#c2410c">
700
</color-swatch>
<color-swatch color-value="#9a3412">
800
</color-swatch>
<color-swatch color-value="#7c2d12">
900
</color-swatch>
<color-swatch color-value="#431407">
950
</color-swatch>

<color-swatch color-value="#fffbeb">
Amber

50
</color-swatch>
<color-swatch color-value="#fef3c7">
100
</color-swatch>
<color-swatch color-value="#fde68a">
200
</color-swatch>
<color-swatch color-value="#fcd34d">
300
</color-swatch>
<color-swatch color-value="#fbbf24">
400
</color-swatch>
<color-swatch color-value="#f59e0b">
500
</color-swatch>
<color-swatch color-value="#d97706">
600
</color-swatch>
<color-swatch color-value="#b45309">
700
</color-swatch>
<color-swatch color-value="#92400e">
800
</color-swatch>
<color-swatch color-value="#78350f">
900
</color-swatch>
<color-swatch color-value="#451a03">
950
</color-swatch>

<color-swatch color-value="#fefce8">
Yellow

50
</color-swatch>
<color-swatch color-value="#fef9c3">
100
</color-swatch>
<color-swatch color-value="#fef08a">
200
</color-swatch>
<color-swatch color-value="#fde047">
300
</color-swatch>
<color-swatch color-value="#facc15">
400
</color-swatch>
<color-swatch color-value="#eab308">
500
</color-swatch>
<color-swatch color-value="#ca8a04">
600
</color-swatch>
<color-swatch color-value="#a16207">
700
</color-swatch>
<color-swatch color-value="#854d0e">
800
</color-swatch>
<color-swatch color-value="#713f12">
900
</color-swatch>
<color-swatch color-value="#422006">
950
</color-swatch>

<color-swatch color-value="#f7fee7">
Lime

50
</color-swatch>
<color-swatch color-value="#ecfccb">
100
</color-swatch>
<color-swatch color-value="#d9f99d">
200
</color-swatch>
<color-swatch color-value="#bef264">
300
</color-swatch>
<color-swatch color-value="#a3e635">
400
</color-swatch>
<color-swatch color-value="#84cc16">
500
</color-swatch>
<color-swatch color-value="#65a30d">
600
</color-swatch>
<color-swatch color-value="#4d7c0f">
700
</color-swatch>
<color-swatch color-value="#3f6212">
800
</color-swatch>
<color-swatch color-value="#365314">
900
</color-swatch>
<color-swatch color-value="#1a2e05">
950
</color-swatch>

<color-swatch color-value="#f0fdf4">
Green

50
</color-swatch>
<color-swatch color-value="#dcfce7">
100
</color-swatch>
<color-swatch color-value="#bbf7d0">
200
</color-swatch>
<color-swatch color-value="#86efac">
300
</color-swatch>
<color-swatch color-value="#4ade80">
400
</color-swatch>
<color-swatch color-value="#22c55e">
500
</color-swatch>
<color-swatch color-value="#16a34a">
600
</color-swatch>
<color-swatch color-value="#15803d">
700
</color-swatch>
<color-swatch color-value="#166534">
800
</color-swatch>
<color-swatch color-value="#14532d">
900
</color-swatch>
<color-swatch color-value="#052e16">
950
</color-swatch>

<color-swatch color-value="#ecfdf5">Emerald

50
</color-swatch>
<color-swatch color-value="#d1fae5">
100
</color-swatch>
<color-swatch color-value="#a7f3d0">
200
</color-swatch>
<color-swatch color-value="#6ee7b7">
300
</color-swatch>
<color-swatch color-value="#34d399">
400
</color-swatch>
<color-swatch color-value="#10b981">
500
</color-swatch>
<color-swatch color-value="#059669">
600
</color-swatch>
<color-swatch color-value="#047857">
700
</color-swatch>
<color-swatch color-value="#065f46">
800
</color-swatch>
<color-swatch color-value="#064e3b">
900
</color-swatch>
<color-swatch color-value="#022c22">
950
</color-swatch>

<color-swatch color-value="#f0fdfa">Teal

50
</color-swatch>
<color-swatch color-value="#ccfbf1">
100
</color-swatch>
<color-swatch color-value="#99f6e4">
200
</color-swatch>
<color-swatch color-value="#5eead4">
300
</color-swatch>
<color-swatch color-value="#2dd4bf">
400
</color-swatch>
<color-swatch color-value="#14b8a6">
500
</color-swatch>
<color-swatch color-value="#0d9488">
600
</color-swatch>
<color-swatch color-value="#0f766e">
700
</color-swatch>
<color-swatch color-value="#115e59">
800
</color-swatch>
<color-swatch color-value="#134e4a">
900
</color-swatch>
<color-swatch color-value="#042f2e">
950
</color-swatch>

<color-swatch color-value="#ecfeff">Cyan
50
</color-swatch>
<color-swatch color-value="#cffafe">
100
</color-swatch>
<color-swatch color-value="#a5f3fc">
200
</color-swatch>
<color-swatch color-value="#67e8f9">
300
</color-swatch>
<color-swatch color-value="#22d3ee">
400
</color-swatch>
<color-swatch color-value="#06b6d4">
500
</color-swatch>
<color-swatch color-value="#0891b2">
600
</color-swatch>
<color-swatch color-value="#0e7490">
700
</color-swatch>
<color-swatch color-value="#155e75">
800
</color-swatch>
<color-swatch color-value="#164e63">
900
</color-swatch>
<color-swatch color-value="#083344">
950
</color-swatch>

<color-swatch color-value="#f0f9ff">Sky
50
</color-swatch>
<color-swatch color-value="#e0f2fe">
100
</color-swatch>
<color-swatch color-value="#bae6fd">
200
</color-swatch>
<color-swatch color-value="#7dd3fc">
300
</color-swatch>
<color-swatch color-value="#38bdf8">
400
</color-swatch>
<color-swatch color-value="#0ea5e9">
500
</color-swatch>
<color-swatch color-value="#0284c7">
600
</color-swatch>
<color-swatch color-value="#0369a1">
700
</color-swatch>
<color-swatch color-value="#075985">
800
</color-swatch>
<color-swatch color-value="#0c4a6e">
900
</color-swatch>
<color-swatch color-value="#082f49">
950
</color-swatch>

<color-swatch color-value="#eff6ff">
Blue

50
</color-swatch>
<color-swatch color-value="#dbeafe">
100
</color-swatch>
<color-swatch color-value="#bfdbfe">
200
</color-swatch>
<color-swatch color-value="#93c5fd">
300
</color-swatch>
<color-swatch color-value="#60a5fa">
400
</color-swatch>
<color-swatch color-value="#3b82f6">
500
</color-swatch>
<color-swatch color-value="#2563eb">
600
</color-swatch>
<color-swatch color-value="#1d4ed8">
700
</color-swatch>
<color-swatch color-value="#1e40af">
800
</color-swatch>
<color-swatch color-value="#1e3a8a">
900
</color-swatch>
<color-swatch color-value="#172554">
950
</color-swatch>

<color-swatch color-value="#eef2ff">Indigo
50
</color-swatch>
<color-swatch color-value="#e0e7ff">
100
</color-swatch>
<color-swatch color-value="#c7d2fe">
200
</color-swatch>
<color-swatch color-value="#a5b4fc">
300
</color-swatch>
<color-swatch color-value="#818cf8">
400
</color-swatch>
<color-swatch color-value="#6366f1">
500
</color-swatch>
<color-swatch color-value="#4f46e5">
600
</color-swatch>
<color-swatch color-value="#4338ca">
700
</color-swatch>
<color-swatch color-value="#3730a3">
800
</color-swatch>
<color-swatch color-value="#312e81">
900
</color-swatch>
<color-swatch color-value="#1e1b4b">
950
</color-swatch>

<color-swatch color-value="#f5f3ff">Violet
50
</color-swatch>
<color-swatch color-value="#ede9fe">
100
</color-swatch>
<color-swatch color-value="#ddd6fe">
200
</color-swatch>
<color-swatch color-value="#c4b5fd">
300
</color-swatch>
<color-swatch color-value="#a78bfa">
400
</color-swatch>
<color-swatch color-value="#8b5cf6">
500
</color-swatch>
<color-swatch color-value="#7c3aed">
600
</color-swatch>
<color-swatch color-value="#6d28d9">
700
</color-swatch>
<color-swatch color-value="#5b21b6">
800
</color-swatch>
<color-swatch color-value="#4c1d95">
900
</color-swatch>
<color-swatch color-value="#2e1065">
950
</color-swatch>

<color-swatch color-value="#faf5ff">Purple
50
</color-swatch>
<color-swatch color-value="#f3e8ff">
100
</color-swatch>
<color-swatch color-value="#e9d5ff">
200
</color-swatch>
<color-swatch color-value="#d8b4fe">
300
</color-swatch>
<color-swatch color-value="#c084fc">
400
</color-swatch>
<color-swatch color-value="#a855f7">
500
</color-swatch>
<color-swatch color-value="#9333ea">
600
</color-swatch>
<color-swatch color-value="#7e22ce">
700
</color-swatch>
<color-swatch color-value="#6b21a8">
800
</color-swatch>
<color-swatch color-value="#581c87">
900
</color-swatch>
<color-swatch color-value="#3b0764">
950
</color-swatch>

<color-swatch color-value="#fdf4ff">Fuchsia
50
</color-swatch>
<color-swatch color-value="#fae8ff">
100
</color-swatch>
<color-swatch color-value="#f5d0fe">
200
</color-swatch>
<color-swatch color-value="#f0abfc">
300
</color-swatch>
<color-swatch color-value="#e879f9">
400
</color-swatch>
<color-swatch color-value="#d946ef">
500
</color-swatch>
<color-swatch color-value="#c026d3">
600
</color-swatch>
<color-swatch color-value="#a21caf">
700
</color-swatch>
<color-swatch color-value="#86198f">
800
</color-swatch>
<color-swatch color-value="#701a75">
900
</color-swatch>
<color-swatch color-value="#4a044e">
950
</color-swatch>

<color-swatch color-value="#fdf2f8">Pink
50
</color-swatch>
<color-swatch color-value="#fce7f3">
100
</color-swatch>
<color-swatch color-value="#fbcfe8">
200
</color-swatch>
<color-swatch color-value="#f9a8d4">
300
</color-swatch>
<color-swatch color-value="#f472b6">
400
</color-swatch>
<color-swatch color-value="#ec4899">
500
</color-swatch>
<color-swatch color-value="#db2777">
600
</color-swatch>
<color-swatch color-value="#be185d">
700
</color-swatch>
<color-swatch color-value="#9d174d">
800
</color-swatch>
<color-swatch color-value="#831843">
900
</color-swatch>
<color-swatch color-value="#500724">
950
</color-swatch>

<color-swatch color-value="#fff1f2">Rose
50
</color-swatch>
<color-swatch color-value="#ffe4e6">
100
</color-swatch>
<color-swatch color-value="#fecdd3">
200
</color-swatch>
<color-swatch color-value="#fda4af">
300
</color-swatch>
<color-swatch color-value="#fb7185">
400
</color-swatch>
<color-swatch color-value="#f43f5e">
500
</color-swatch>
<color-swatch color-value="#e11d48">
600
</color-swatch>
<color-swatch color-value="#be123c">
700
</color-swatch>
<color-swatch color-value="#9f1239">
800
</color-swatch>
<color-swatch color-value="#881337">
900
</color-swatch>
<color-swatch color-value="#4c0519">
950
</color-swatch>
</div>

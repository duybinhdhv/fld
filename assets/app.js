/* B1 Passport – ứng dụng học 4 kỹ năng tiếng Anh B1 (HTML/CSS/JS thuần, chạy trên GitHub Pages) */
{
const D = window.B1;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const app = $("#app");
const today = () => new Date().toISOString().slice(0, 10);
const SK = ["listening", "speaking", "reading", "writing"];
const HEX = { listening: "#2d4bd8", speaking: "#e2462a", reading: "#0b8478", writing: "#7238e0" };

/* ---------- lưu trữ ---------- */
const KEY = "b1passport.v1";
const fresh = () => ({ name: "", xp: 0, done: {}, drafts: {}, shadow: {}, known: {}, tests: [], days: [] });
let S = fresh();
try { const raw = JSON.parse(localStorage.getItem(KEY)); if (raw && typeof raw === "object") S = Object.assign(fresh(), raw); } catch (e) {}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} updXP(); }
function touchDay() { const d = today(); if (!S.days.includes(d)) { S.days.push(d); S.days = S.days.slice(-180); } }
function streak() {
  let n = 0; const d = new Date();
  if (!S.days.includes(today())) d.setDate(d.getDate() - 1);
  while (S.days.includes(d.toISOString().slice(0, 10))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function updXP() { $("#xpBadge").textContent = S.xp + " XP"; }

/* ---------- dữ liệu bài học ---------- */
const ALL = [];
SK.forEach(k => D[k].forEach((l, i) => ALL.push(Object.assign(l, { skill: k, n: i + 1 }))));
const BY = Object.fromEntries(ALL.map(l => [l.id, l]));
const skillDone = k => D[k].filter(l => S.done[l.id]).length;
const nextLesson = () => { for (const w of D.plan) for (const id of w.items) if (!S.done[id]) return BY[id]; return null; };

function complete(id, score, total) {
  const prev = S.done[id];
  const pct = total ? score / total : 0;
  let gain = prev ? 10 : 50 + Math.round(pct * 50);
  if (!prev || pct >= prev.score / prev.total) S.done[id] = { score, total, date: today() };
  S.xp += gain; touchDay(); save();
  toast(`+${gain} XP · Đã lưu kết quả ${score}/${total}`);
}

/* ---------- biểu tượng ---------- */
const P = {
  listening: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="5" height="7" rx="2"/><rect x="16" y="14" width="5" height="7" rx="2"/>',
  speaking: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/>',
  reading: '<path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v14c-3-1-6-1-9 1-3-2-6-2-9-1z"/><path d="M12 6v14"/>',
  writing: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
  play: '<path d="M7 4l13 8-13 8z" fill="currentColor"/>',
  pause: '<rect x="6" y="4" width="4" height="16" fill="currentColor"/><rect x="14" y="4" width="4" height="16" fill="currentColor"/>',
  stop: '<rect x="5" y="5" width="14" height="14" rx="2" fill="currentColor"/>',
  sound: '<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  check: '<path d="M5 12l5 5 9-10"/>',
  cards: '<rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>',
  test: '<path d="M9 4h6v3H9z"/><path d="M7 5H5v16h14V5h-2"/><path d="M8 13l3 3 5-6"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  copy: '<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M4 16V4h12"/>',
  down: '<path d="M12 3v13M6 11l6 6 6-6M4 21h16"/>',
  redo: '<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  shuffle: '<path d="M3 6h4l10 12h4M3 18h4l3-4M14 10l3-4h4M18 3l3 3-3 3M18 15l3 3-3 3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
};
const ic = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;

/* ---------- thông báo nhỏ ---------- */
let tT;
function toast(m) { const t = $("#toast"); t.textContent = m; t.classList.add("show"); clearTimeout(tT); tT = setTimeout(() => t.classList.remove("show"), 2600); }

/* ---------- đọc văn bản (Text-to-Speech) ---------- */
const TTS = "speechSynthesis" in window;
let voices = [];
function loadV() {
  if (!TTS) return;
  const rank = v => (/Google|Natural|Online|Neural/i.test(v.name) ? 3 : 0) + (/en[-_](GB|US)/i.test(v.lang) ? 1 : 0);
  voices = speechSynthesis.getVoices().filter(v => /^en/i.test(v.lang)).sort((a, b) => rank(b) - rank(a));
}
if (TTS) { loadV(); speechSynthesis.onvoiceschanged = loadV; }
function utter(t, i, rate) {
  const u = new SpeechSynthesisUtterance(t);
  const v = voices.length ? voices[i % voices.length] : null;
  if (v) { u.voice = v; u.lang = v.lang; } else u.lang = "en-GB";
  u.rate = rate || 0.95; u.pitch = i % 2 ? 0.88 : 1.05;
  return u;
}
let playTok = 0;
function say(t, rate) {
  if (!TTS) return toast("Trình duyệt chưa hỗ trợ đọc văn bản.");
  stopAudio(); speechSynthesis.speak(utter(t, 0, rate));
}
function playLines(lines, rate, onLine, onEnd) {
  stopAudio();
  const tok = ++playTok, spk = [...new Set(lines.map(l => l.s))];
  let i = 0;
  const next = () => {
    if (tok !== playTok) return;
    if (i >= lines.length) { onEnd && onEnd(); return; }
    const l = lines[i], u = utter(l.t, spk.indexOf(l.s), rate);
    u.onstart = () => tok === playTok && onLine && onLine(i);
    u.onend = () => { if (tok !== playTok) return; i++; setTimeout(next, 380); };
    speechSynthesis.speak(u);
  };
  setTimeout(next, 80);
}
function stopAudio() { playTok++; if (TTS) speechSynthesis.cancel(); }

/* ---------- nhận diện giọng nói ---------- */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const NUM = { 0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 15: "fifteen", 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty" };
const norm = s => s.toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9' ]+/g, " ").split(/\s+/).filter(Boolean).map(w => NUM[w] || w.replace(/^'+|'+$/g, ""));
function compare(target, said) {
  const words = target.split(/\s+/), T = words.map(w => norm(w).join(" ")), A = norm(said);
  const L = Array.from({ length: T.length + 1 }, () => new Array(A.length + 1).fill(0));
  for (let i = T.length - 1; i >= 0; i--) for (let j = A.length - 1; j >= 0; j--)
    L[i][j] = T[i] === A[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const ok = new Array(T.length).fill(false); let i = 0, j = 0;
  while (i < T.length && j < A.length) { if (T[i] === A[j]) { ok[i] = true; i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++; }
  const pct = Math.round(100 * ok.filter(Boolean).length / T.length);
  return { pct, html: words.map((w, k) => `<span class="${ok[k] ? "w-ok" : "w-no"}">${esc(w)}</span>`).join(" ") };
}

/* ---------- hẹn giờ ---------- */
const timers = new Set();
function clearTimers() { timers.forEach(clearInterval); timers.clear(); }
const fmt = s => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

/* ---------- định tuyến ---------- */
let cleanup = [];
function route() {
  stopAudio(); clearTimers(); cleanup.forEach(f => { try { f(); } catch (e) {} }); cleanup = [];
  hidePop();
  const h = (location.hash || "#home").slice(1);
  const lesson = BY[h];
  if (lesson) LESSON[lesson.skill](lesson);
  else if (SK.includes(h)) skillView(h);
  else (VIEWS[h] || VIEWS.home)();
  const key = lesson ? lesson.skill : (VIEWS[h] || SK.includes(h) ? h : "home");
  $$("#nav a").forEach(a => a.classList.toggle("on", a.dataset.v === key));
  window.scrollTo(0, 0);
  app.focus({ preventScroll: true });
}
window.addEventListener("hashchange", route);

/* ---------- con dấu hộ chiếu ---------- */
function stamp(k, done, total) {
  const C = 2 * Math.PI * 52, pct = done / total, c = HEX[k], sk = D.skills[k];
  const rot = done === total ? -8 : 0;
  return `<div class="stamp"><svg viewBox="0 0 120 120" role="img" aria-label="${sk.name}: ${done}/${total} bài">
  <g transform="rotate(${rot} 60 60)">
  <circle cx="60" cy="60" r="52" fill="none" stroke="${c}" stroke-opacity=".15" stroke-width="7"/>
  <circle class="ring" cx="60" cy="60" r="52" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pct)}" transform="rotate(-90 60 60)"/>
  <circle cx="60" cy="60" r="41" fill="${done === total ? c : "none"}" fill-opacity=".1" stroke="${c}" stroke-width="1.5" stroke-dasharray="3 3" opacity="${done ? 1 : .45}"/>
  <g transform="translate(48 30)" stroke="${c}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g transform="scale(1)">${P[k]}</g></g>
  <text x="60" y="73" text-anchor="middle" font-size="13" font-weight="800" fill="${c}" font-family="Be Vietnam Pro,sans-serif" letter-spacing="1">${sk.en.toUpperCase()}</text>
  <text x="60" y="89" text-anchor="middle" font-size="11" font-weight="600" fill="#6b6a5c" font-family="Be Vietnam Pro,sans-serif">${done}/${total} bài</text>
  </g></svg></div>`;
}
function passport() {
  return `<div class="passport" aria-label="Hộ chiếu học tập">
    <div class="ph"><span>HỘ CHIẾU HỌC TẬP · B1</span><span>${streak()} ngày liên tiếp</span></div>
    <div class="pname">${esc(S.name || "Học viên mới")}</div>
    <div class="ph" style="margin-top:4px"><span>${Object.keys(S.done).length}/${ALL.length} con dấu</span><span>${S.xp} XP</span></div>
    <div class="stamps">${SK.map(k => stamp(k, skillDone(k), D[k].length)).join("")}</div>
  </div>`;
}

/* ================= TRANG CHỦ ================= */
const VIEWS = {};
VIEWS.home = () => {
  const nx = nextLesson();
  app.innerHTML = `
  <section class="band"><div class="wrap">
    <div>
      <span class="chip">Trình độ B1 · Khung tham chiếu châu Âu (CEFR)</span>
      <h1 style="margin-top:14px">Luyện Nghe, Nói, Đọc, Viết tiếng Anh B1 – mỗi bài học là một con dấu</h1>
      <p>16 bài học theo chủ đề quen thuộc, có máy đọc mẫu, chấm phát âm bằng giọng nói, chấm bài tự động, thẻ từ vựng và bài kiểm tra tính giờ. Học theo lộ trình 4 tuần, tiến độ được lưu ngay trên trình duyệt.</p>
      ${S.name ? "" : `<form id="nameF" class="row" style="margin-bottom:16px"><input id="nameI" class="search" style="max-width:260px;background:#fff;color:#141a2e" placeholder="Nhập tên của bạn" aria-label="Tên của bạn"><button class="btn">Lưu tên</button></form>`}
      <div class="row">
        ${nx ? `<a class="btn pri" href="#${nx.id}">${ic("arrow")} ${Object.keys(S.done).length ? "Học tiếp" : "Bắt đầu"}: ${esc(nx.title)}</a>` : `<a class="btn pri" href="#progress">${ic("check")} Bạn đã hoàn thành tất cả bài học</a>`}
        <a class="btn" href="#test">${ic("test")} Bài kiểm tra nhanh</a>
      </div>
    </div>
    ${passport()}
  </div></section>
  <div class="wrap">
    <div class="section-head" style="margin-top:0"><h2>Bốn kỹ năng</h2><span class="muted">Chọn một kỹ năng để xem danh sách bài học</span></div>
    <div class="grid">${SK.map(k => {
      const s = D.skills[k], d = skillDone(k), t = D[k].length;
      return `<a class="card skill" href="#${k}" style="--k:${s.color}">
        <div class="ico">${ic(k)}</div><h3>${s.name} <span class="muted" style="font-weight:600;font-size:16px">· ${s.en}</span></h3>
        <p>${s.intro}</p><div class="bar"><i style="width:${100 * d / t}%"></i></div>
        <div class="meta"><span>${d}/${t} bài hoàn thành</span><span>${t} bài</span></div></a>`;
    }).join("")}</div>

    <div class="section-head"><h2>Lộ trình gợi ý 4 tuần</h2><span class="muted">Mỗi tuần một bài cho mỗi kỹ năng · khoảng 90 phút/tuần</span></div>
    <div class="card"><div class="plan">${D.plan.map(w => `<div class="wk"><b>${w.week}</b><div class="muted" style="font-size:14px;margin-bottom:6px">${w.focus}</div>
      ${w.items.map(id => { const l = BY[id]; return `<a href="#${id}"><span>${D.skills[l.skill].name}: ${esc(l.title)}</span>${S.done[id] ? `<span class="ok">✓</span>` : ""}</a>`; }).join("")}</div>`).join("")}
      <div class="wk" style="border-color:var(--coral)"><b>Cuối lộ trình</b><div class="muted" style="font-size:14px;margin-bottom:6px">Tổng kết</div>
      <a href="#test"><span>Bài kiểm tra tổng hợp B1</span>${S.tests.length ? `<span class="ok">✓</span>` : ""}</a><a href="#vocab"><span>Ôn từ vựng bằng thẻ</span></a><a href="#progress"><span>Xem huy hiệu &amp; tiến độ</span></a></div>
    </div></div>

    <div class="section-head"><h2>Công cụ học tập</h2></div>
    <div class="grid">
      <a class="card skill" href="#vocab" style="--k:var(--brand)"><div class="ico">${ic("cards")}</div><h3>Thẻ từ vựng</h3><p>Toàn bộ từ vựng trong các bài, lật thẻ, nghe phát âm, đánh dấu từ đã thuộc.</p></a>
      <a class="card skill" href="#test" style="--k:var(--coral)"><div class="ico">${ic("test")}</div><h3>Kiểm tra nhanh</h3><p>20 câu ngữ pháp và từ vựng B1 trong 15 phút, có giải thích chi tiết.</p></a>
      <a class="card skill" href="#progress" style="--k:var(--ok)"><div class="ico">${ic("chart")}</div><h3>Tiến độ &amp; Huy hiệu</h3><p>Điểm từng bài, chuỗi ngày học, huy hiệu, sao lưu và khôi phục tiến độ.</p></a>
    </div>

    <div class="section-head"><h2>Trình độ B1 nghĩa là gì?</h2></div>
    <div class="card"><p>B1 (Threshold – Ngưỡng) là trình độ người học độc lập đầu tiên trong CEFR, tương đương <b>Bậc 3</b> theo Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam. Người đạt B1 có thể hiểu ý chính của văn bản và lời nói rõ ràng về chủ đề quen thuộc, xử lý hầu hết tình huống khi đi du lịch, viết văn bản đơn giản và mạch lạc, đồng thời trình bày ngắn gọn lý do cho ý kiến và kế hoạch của mình.</p>
    <div class="grid" style="margin-top:10px">${SK.map(k => `<div><b style="color:${D.skills[k].color}">${D.skills[k].name}</b><ul style="margin:6px 0 0;padding-left:18px;font-size:15px">${D.skills[k].cando.map(c => `<li>${c}</li>`).join("")}</ul></div>`).join("")}</div></div>
  </div>`;
  const f = $("#nameF");
  if (f) f.addEventListener("submit", e => { e.preventDefault(); const v = $("#nameI").value.trim(); if (v) { S.name = v.slice(0, 40); save(); route(); } });
};

/* ================= DANH SÁCH BÀI CỦA KỸ NĂNG ================= */
function skillView(k) {
  const s = D.skills[k];
  app.innerHTML = `
  <section class="band"><div class="wrap">
    <div><div class="crumbs"><a href="#home">Tổng quan</a> › ${s.name}</div>
      <h1>Kỹ năng ${s.name} <span style="opacity:.7">· ${s.en}</span></h1><p>${s.intro}</p>
      <div class="row"><span class="chip">${skillDone(k)}/${D[k].length} bài hoàn thành</span><span class="chip">Trình độ B1</span></div></div>
    <div><b style="display:block;margin-bottom:10px">Sau phần này, bạn có thể:</b><ul class="cando">${s.cando.map(c => `<li>${c}</li>`).join("")}</ul></div>
  </div></section>
  <div class="wrap"><div class="grid">${D[k].map(l => {
    const d = S.done[l.id];
    return `<a class="card lesson" href="#${l.id}" style="--k:${s.color}">
      <span class="num">BÀI ${l.n} · ${esc(l.type)}</span><h3>${esc(l.title)}</h3>
      <p class="muted" style="margin:0;font-size:15px">${esc(l.desc || l.prompt || (l.task && l.task.prompt) || "")}</p>
      <div class="row"><span class="chip">${esc(l.topic)}</span><span class="chip">${ic("clock").replace('aria-hidden="true"', 'width="14" height="14" aria-hidden="true"')} ${l.mins} phút</span></div>
      ${d ? `<span class="done-tag">${ic("check").replace("<svg", '<svg width="16" height="16"')} Đã hoàn thành · ${d.score}/${d.total}</span>` : `<span class="muted" style="font-size:14px">Chưa học</span>`}
    </a>`;
  }).join("")}</div></div>`;
}

/* ---------- phần đầu & điều hướng bài học ---------- */
function head(l, extra = "") {
  const s = D.skills[l.skill], d = S.done[l.id];
  return `<section class="band slim"><div class="wrap"><div>
    <div class="crumbs"><a href="#home">Tổng quan</a> › <a href="#${l.skill}">${s.name}</a> › Bài ${l.n}</div>
    <h1>${esc(l.title)}</h1>
    <div class="row"><span class="chip">${esc(l.type)}</span><span class="chip">Chủ đề: ${esc(l.topic)}</span><span class="chip">${l.mins} phút</span>${d ? `<span class="chip">✓ Điểm cao nhất ${d.score}/${d.total}</span>` : ""}${extra}</div>
  </div></div></section>`;
}
function pager(l) {
  const list = D[l.skill], i = list.indexOf(l);
  const p = list[i - 1], n = list[i + 1];
  return `<div class="pager">${p ? `<a class="btn" href="#${p.id}">${ic("back")} ${esc(p.title)}</a>` : `<a class="btn" href="#${l.skill}">${ic("back")} Danh sách bài</a>`}
  ${n ? `<a class="btn pri" href="#${n.id}">${esc(n.title)} ${ic("arrow")}</a>` : `<a class="btn pri" href="#home">Về trang tổng quan ${ic("arrow")}</a>`}</div>`;
}

/* ---------- câu hỏi dùng chung ---------- */
const TF = { T: "True", F: "False", NG: "Not Given" };
function qsHTML(qs, p) {
  return qs.map((q, i) => {
    let b;
    if (q.type === "mc") b = `<div class="opts">${q.o.map((o, j) => `<label class="opt"><input type="radio" name="${p}${i}" value="${j}"><span>${esc(o)}</span></label>`).join("")}</div>`;
    else if (q.type === "tf") b = `<div class="tfrow">${Object.entries(TF).map(([v, t]) => `<label class="opt"><input type="radio" name="${p}${i}" value="${v}"><span>${t}</span></label>`).join("")}</div>`;
    else b = `<input class="gapin" name="${p}${i}" autocomplete="off" spellcheck="false" placeholder="Nhập đáp án" aria-label="Đáp án câu ${i + 1}">`;
    return `<div class="q" data-i="${i}"><div class="qt"><span>${i + 1}.</span>${esc(q.q)}${q.type === "tf" ? ' <em class="muted" style="font-weight:500">(True / False / Not Given)</em>' : ""}</div>${b}<div class="fbk"></div></div>`;
  }).join("");
}
function quiz(root, qs, id, label) {
  const p = id + "q";
  root.innerHTML = `<h2>${label}</h2><p class="muted">${qs.length} câu · bấm “Chấm điểm” khi làm xong để xem đáp án và giải thích.</p>
  <form class="qs">${qsHTML(qs, p)}</form><div class="out"></div>
  <div class="row" style="margin-top:16px"><button class="btn pri chk" type="button">${ic("check")} Chấm điểm</button><button class="btn rst" type="button" hidden>${ic("redo")} Làm lại</button></div>`;
  let warned = false;
  const form = $(".qs", root);
  $(".chk", root).onclick = () => {
    let un = 0;
    qs.forEach((q, i) => { const box = $(`.q[data-i="${i}"]`, form); if (q.type === "gap" ? !$("input", box).value.trim() : !$("input:checked", box)) un++; });
    if (un && !warned) { warned = true; toast(`Còn ${un} câu chưa làm – bấm Chấm điểm lần nữa để nộp bài.`); return; }
    let sc = 0;
    qs.forEach((q, i) => {
      const box = $(`.q[data-i="${i}"]`, form); let ok;
      if (q.type === "gap") {
        const inp = $("input", box), g = inp.value.trim().toLowerCase().replace(/[.!]$/, "");
        ok = q.a.some(a => a.toLowerCase() === g); inp.classList.add(ok ? "right" : "wrong"); inp.readOnly = true;
      } else {
        const sel = $("input:checked", box), correct = q.type === "mc" ? String(q.a) : q.a;
        ok = !!sel && sel.value === correct;
        $$(".opt", box).forEach(l => { const v = $("input", l).value; l.classList.toggle("right", v === correct); l.classList.toggle("wrong", !!sel && v === sel.value && !ok); $("input", l).disabled = true; });
      }
      if (ok) sc++;
      const ans = q.type === "mc" ? q.o[q.a] : q.type === "tf" ? TF[q.a] : q.a[0];
      $(".fbk", box).innerHTML = `<div class="exp"><b class="${ok ? "ok" : "no"}">${ok ? "Chính xác!" : "Chưa đúng."}</b> Đáp án: <b>${esc(ans)}</b>. ${esc(q.e)}</div>`;
    });
    const pct = sc / qs.length;
    $(".out", root).innerHTML = `<div class="score"><div class="big">${sc}/${qs.length}</div><div><b>${pct >= .8 ? "Xuất sắc! Bạn đạt yêu cầu B1 cho bài này." : pct >= .6 ? "Khá tốt! Hãy xem lại giải thích các câu sai." : "Cần luyện thêm – hãy xem lại bài và thử lần nữa."}</b><br><span class="muted">Kết quả đã được lưu vào hộ chiếu học tập.</span></div></div>`;
    $(".chk", root).hidden = true; $(".rst", root).hidden = false;
    complete(id, sc, qs.length);
    root.dispatchEvent(new CustomEvent("checked"));
  };
  $(".rst", root).onclick = () => quiz(root, qs, id, label);
}

/* ================= BÀI NGHE ================= */
const LESSON = {};
LESSON.listening = l => {
  app.innerHTML = head(l) + `<div class="wrap">
  <div class="two rev">
    <div>
      <div class="card player">
        <h2>Nghe</h2>
        <p class="muted" style="margin:0">${esc(l.desc)}</p>
        <div class="wave" id="wave" aria-hidden="true">${"<i></i>".repeat(32)}</div>
        <div class="row">
          <button class="btn pri" id="pPlay">${ic("play")} Phát</button>
          <button class="btn" id="pPause" disabled>${ic("pause")} Tạm dừng</button>
          <button class="btn" id="pStop" disabled>${ic("stop")} Dừng</button>
          <label class="row" style="gap:6px;font-size:14px">Tốc độ <select id="pRate"><option value=".75">0.75×</option><option value=".9" selected>0.9×</option><option value="1">1×</option><option value="1.15">1.15×</option></select></label>
        </div>
        <div class="meta"><span id="pCount">Đã nghe: 0 lần</span><span>Người nói: ${[...new Set(l.lines.map(x => x.s))].map(esc).join(", ")}</span></div>
        ${TTS ? "" : `<div class="note">Trình duyệt này chưa hỗ trợ đọc văn bản. Hãy dùng Chrome, Edge hoặc Safari bản mới; bạn vẫn có thể đọc lời thoại bên dưới.</div>`}
      </div>
      <div class="card">
        <h3>Trước khi nghe: từ vựng</h3>
        <div class="row">${l.vocab.map(([w, m]) => `<button class="btn sm" data-say="${esc(w)}">${ic("sound")} <b>${esc(w)}</b>&nbsp;<span class="muted">${esc(m)}</span></button>`).join("")}</div>
        <p class="muted" style="margin:12px 0 0;font-size:14px">Mẹo: đọc câu hỏi trước, gạch chân từ khóa (thời gian, số, địa điểm), nghe lần 1 để nắm ý chính, lần 2 để kiểm tra chi tiết.</p>
      </div>
      <div class="card">
        <div class="row" style="justify-content:space-between"><h3 style="margin:0">Lời thoại (transcript)</h3><button class="btn sm" id="tBtn">Hiện lời thoại</button></div>
        <div class="transcript" id="tr" hidden>${l.lines.map((x, i) => `<p data-i="${i}"><b>${esc(x.s)}:</b> ${esc(x.t)}</p>`).join("")}</div>
      </div>
    </div>
    <div class="card" id="qz"></div>
  </div>${pager(l)}</div>`;
  quiz($("#qz"), l.questions, l.id, "Câu hỏi");
  $("#qz").addEventListener("checked", () => { $("#tr").hidden = false; $("#tBtn").textContent = "Ẩn lời thoại"; });
  let count = 0, paused = false;
  const wave = $("#wave"), pp = $("#pPause"), ps = $("#pStop");
  const setUI = on => { wave.classList.toggle("on", on); pp.disabled = ps.disabled = !on; };
  $$("#wave i").forEach((b, i) => b.style.animationDelay = (i % 7) * 0.12 + "s");
  $("#pPlay").onclick = () => {
    if (!TTS) return toast("Trình duyệt chưa hỗ trợ đọc văn bản.");
    paused = false; pp.innerHTML = ic("pause") + " Tạm dừng"; setUI(true);
    count++; $("#pCount").textContent = `Đã nghe: ${count} lần`;
    playLines(l.lines, +$("#pRate").value, i => { $$("#tr p").forEach(p => p.classList.toggle("now", +p.dataset.i === i)); }, () => { setUI(false); $$("#tr p").forEach(p => p.classList.remove("now")); });
  };
  pp.onclick = () => {
    if (!paused) { speechSynthesis.pause(); paused = true; pp.innerHTML = ic("play") + " Tiếp tục"; wave.classList.remove("on"); }
    else { speechSynthesis.resume(); paused = false; pp.innerHTML = ic("pause") + " Tạm dừng"; wave.classList.add("on"); }
  };
  ps.onclick = () => { stopAudio(); setUI(false); $$("#tr p").forEach(p => p.classList.remove("now")); };
  $("#tBtn").onclick = () => { const t = $("#tr"); t.hidden = !t.hidden; $("#tBtn").textContent = t.hidden ? "Hiện lời thoại" : "Ẩn lời thoại"; };
};

/* ================= BÀI ĐỌC ================= */
const gloss = t => esc(t).replace(/\{([^|}]+)\|([^}]+)\}/g, (m, w, mean) => `<button class="gl" type="button" data-w="${w}" data-m="${mean}">${w}</button>`);
const glossList = t => [...t.matchAll(/\{([^|}]+)\|([^}]+)\}/g)].map(m => [m[1], m[2]]);
LESSON.reading = l => {
  const src = l.text ? l.text : l.notices.map(n => n.text);
  const words = src.flatMap(glossList);
  const body = l.text
    ? `<div class="reading">${l.text.map(p => `<p>${gloss(p)}</p>`).join("")}</div>`
    : l.notices.map(n => `<div class="notice"><span class="lb">${n.label}</span><small>${esc(n.kind)}</small><div>${gloss(n.text)}</div></div>`).join("");
  app.innerHTML = head(l) + `<div class="wrap"><div class="two">
    <div>
      <div class="card">
        <div class="row" style="justify-content:space-between;margin-bottom:8px"><span class="muted" style="font-size:14px">${esc(l.source)}</span>
        ${l.text ? `<button class="btn sm" id="rRead">${ic("sound")} Nghe toàn bài</button>` : ""}</div>
        ${body}
        <p class="muted" style="font-size:14px;margin:8px 0 0">Bấm vào từ <span class="gl" style="cursor:default">được gạch chân</span> để xem nghĩa và nghe phát âm.</p>
      </div>
      <div class="card"><h3>Từ vựng trong bài (${words.length})</h3>
        <div class="row">${words.map(([w, m]) => `<button class="btn sm" data-say="${esc(w)}">${ic("sound")} <b>${esc(w)}</b>&nbsp;<span class="muted">${esc(m)}</span></button>`).join("")}</div>
        <p class="muted" style="font-size:14px;margin:12px 0 0">Các từ này cũng có trong mục <a href="#vocab">Thẻ từ vựng</a>.</p>
      </div>
      <div class="card"><h3>Chiến lược đọc B1</h3><ul style="margin:0;padding-left:20px">
        <li><b>Skimming:</b> đọc lướt câu đầu mỗi đoạn để nắm ý chính.</li>
        <li><b>Scanning:</b> tìm nhanh tên riêng, số liệu, ngày tháng trong câu hỏi.</li>
        <li><b>True/False/Not Given:</b> “False” khi bài nói điều ngược lại; “Not Given” khi bài không hề đề cập.</li></ul></div>
    </div>
    <div class="card stick" id="qz"></div>
  </div>${pager(l)}</div>`;
  quiz($("#qz"), l.questions, l.id, "Câu hỏi đọc hiểu");
  const rr = $("#rRead");
  if (rr) {
    const plain = l.text.map(p => p.replace(/\{([^|}]+)\|[^}]+\}/g, "$1"));
    let on = false;
    rr.onclick = () => {
      if (on) { stopAudio(); on = false; rr.innerHTML = ic("sound") + " Nghe toàn bài"; return; }
      if (!TTS) return toast("Trình duyệt chưa hỗ trợ đọc văn bản.");
      on = true; rr.innerHTML = ic("stop") + " Dừng đọc";
      const sents = plain.flatMap(p => p.match(/[^.!?]+[.!?]+["”]?\s*/g) || [p]).map(t => ({ s: "R", t: t.trim() }));
      playLines(sents, .92, null, () => { on = false; rr.innerHTML = ic("sound") + " Nghe toàn bài"; });
    };
  }
};

/* ---------- popup nghĩa từ ---------- */
const pop = $("#pop");
function hidePop() { pop.hidden = true; }
document.addEventListener("click", e => {
  const g = e.target.closest(".gl[data-m]");
  const s = e.target.closest("[data-say]");
  if (s) { say(s.dataset.say, .85); return; }
  if (g) {
    pop.innerHTML = `<b>${esc(g.dataset.w)}</b>${esc(g.dataset.m)}<br><button type="button" data-say="${esc(g.dataset.w)}">Nghe phát âm</button>`;
    pop.hidden = false;
    const r = g.getBoundingClientRect(), pw = pop.offsetWidth;
    pop.style.left = Math.max(8, Math.min(innerWidth - pw - 8, r.left)) + "px";
    pop.style.top = (r.bottom + 8 + pop.offsetHeight > innerHeight ? r.top - pop.offsetHeight - 8 : r.bottom + 8) + "px";
    say(g.dataset.w, .85);
    return;
  }
  if (!e.target.closest("#pop")) hidePop();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") hidePop(); });
window.addEventListener("scroll", hidePop, { passive: true });

/* ================= BÀI NÓI ================= */
const PICS = {
  picnic: `<svg viewBox="0 0 600 340" role="img" aria-label="Tranh: một gia đình đi dã ngoại trong công viên">
  <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fd3ff"/><stop offset="1" stop-color="#e6f4ff"/></linearGradient></defs>
  <rect width="600" height="340" fill="url(#sky)"/><circle cx="520" cy="60" r="34" fill="#ffd166"/><circle cx="520" cy="60" r="48" fill="#ffd166" opacity=".25"/>
  <path d="M0 200 Q150 150 300 190 T600 180 V340 H0z" fill="#8fd18a"/><path d="M0 240 Q200 210 400 235 T600 230 V340 H0z" fill="#6cbf6a"/>
  <rect x="92" y="110" width="22" height="110" rx="6" fill="#8a5a3b"/><circle cx="103" cy="95" r="52" fill="#3f9b4f"/><circle cx="66" cy="120" r="34" fill="#4aa85a"/><circle cx="142" cy="118" r="36" fill="#4aa85a"/>
  <polygon points="150,300 420,300 380,250 190,250" fill="#e2462a"/>
  <g fill="#fff" opacity=".85"><polygon points="190,250 228,250 222,262 184,262"/><polygon points="266,250 304,250 302,262 262,262"/><polygon points="342,250 380,250 388,262 342,262"/><polygon points="178,275 218,275 212,288 170,288"/><polygon points="262,275 302,275 302,288 260,288"/><polygon points="346,275 386,275 396,288 348,288"/></g>
  <rect x="300" y="226" width="54" height="34" rx="6" fill="#c8893d"/><path d="M308 228 Q327 200 346 228" stroke="#8a5a3b" stroke-width="5" fill="none"/><circle cx="318" cy="224" r="7" fill="#e2462a"/><circle cx="332" cy="222" r="7" fill="#ffd166"/>
  <circle cx="206" cy="196" r="15" fill="#f1c7a3"/><path d="M190 190 q16-20 32 0" fill="#3b2a20"/><rect x="190" y="212" width="32" height="40" rx="12" fill="#2d4bd8"/>
  <circle cx="254" cy="192" r="16" fill="#e8b48c"/><path d="M238 186 q16-16 32 0" fill="#22201e"/><rect x="237" y="209" width="35" height="43" rx="12" fill="#0b8478"/>
  <circle cx="468" cy="214" r="12" fill="#f1c7a3"/><path d="M455 210 q13-17 26 0 v10 h-4 v-6 h-18 v6 h-4z" fill="#7a4a2a"/><rect x="456" y="226" width="24" height="34" rx="9" fill="#ffd166"/><rect x="458" y="258" width="7" height="20" rx="3" fill="#f1c7a3"/><rect x="471" y="258" width="7" height="20" rx="3" fill="#f1c7a3"/><path d="M480 232 l18 -8" stroke="#f1c7a3" stroke-width="6" stroke-linecap="round"/>
  <ellipse cx="528" cy="262" rx="26" ry="14" fill="#a0673d"/><circle cx="552" cy="246" r="12" fill="#a0673d"/><ellipse cx="558" cy="238" rx="5" ry="9" fill="#7a4a2a"/><rect x="510" y="268" width="6" height="16" fill="#a0673d"/><rect x="538" y="268" width="6" height="16" fill="#a0673d"/><path d="M502 256 q-12 -10 -6 -20" stroke="#a0673d" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="556" cy="244" r="2" fill="#222"/>
  <circle cx="500" cy="232" r="9" fill="#e2462a"/></svg>`
};
const RUBRIC = [
  ["Ngữ pháp & Từ vựng", "Dùng đúng cấu trúc đơn giản, có thử cấu trúc phức tạp hơn; từ vựng đủ cho chủ đề quen thuộc."],
  ["Tổ chức ý", "Nói thành đoạn, có từ nối (because, so, however…), ý rõ ràng, ít lặp lại."],
  ["Phát âm", "Dễ hiểu, trọng âm từ và ngữ điệu câu tương đối chính xác."],
  ["Hoàn thành nhiệm vụ", "Trả lời đủ các ý gợi ý, nói đủ thời gian, tự tin và tự nhiên."]
];
const LINKERS = ["and", "but", "because", "so", "however", "although", "also", "first", "firstly", "secondly", "then", "after that", "finally", "for example", "for instance", "in addition", "moreover", "what's more", "on the other hand", "in my opinion", "as a result", "therefore", "while", "when", "unless", "if", "in conclusion", "to sum up", "such as", "besides", "instead"];
const findLinkers = t => { const s = " " + t.toLowerCase().replace(/[^a-z' ]+/g, " ").replace(/\s+/g, " ") + " "; return LINKERS.filter(k => s.includes(" " + k + " ")); };

LESSON.speaking = l => {
  const tk = l.task;
  app.innerHTML = head(l) + `<div class="wrap"><div class="two">
  <div>
    <div class="card">
      <h2>1. Luyện phát âm (shadowing)</h2>
      <p class="muted">Nghe câu mẫu, sau đó bấm <b>Nói</b> và đọc to câu đó. Hệ thống nhận diện giọng nói sẽ tô <span style="color:var(--ok);font-weight:700">xanh</span> từ phát âm rõ và <span style="color:var(--bad);text-decoration:underline wavy">đỏ</span> từ cần luyện lại.</p>
      ${SR ? "" : `<div class="note" style="margin-bottom:12px">Trình duyệt này chưa hỗ trợ nhận diện giọng nói. Hãy mở trang bằng <b>Google Chrome</b> hoặc <b>Microsoft Edge</b> trên máy tính/Android. Bạn vẫn có thể nghe mẫu và tự luyện.</div>`}
      <div class="shadow">${l.shadow.map((t, i) => {
        const best = S.shadow[l.id + i];
        return `<div class="sline" data-i="${i}"><div class="txt">${esc(t)}</div>
        <div class="row" style="gap:6px"><button class="btn sm" data-say="${esc(t)}" aria-label="Nghe mẫu">${ic("sound")}</button><button class="btn sm hot sp" ${SR ? "" : "disabled"}>${ic("mic")} Nói</button></div>
        <div class="res muted">${best != null ? `Điểm cao nhất: <span class="pct">${best}%</span>` : "Chưa luyện"}</div></div>`;
      }).join("")}</div>
    </div>

    <div class="card">
      <h2>2. Nói theo chủ đề</h2>
      ${l.picture ? `<div class="pic" style="margin-bottom:14px">${PICS[l.picture]}</div>` : ""}
      <div class="cue"><b style="font-size:18px">${esc(tk.title)}</b><p style="margin:6px 0 0">${esc(tk.prompt)}</p>
        <div class="muted" style="margin-top:8px;font-size:14px;font-weight:600">${l.id === "s3" ? "Các lựa chọn:" : "Bạn nên nói về:"}</div>
        <ul>${tk.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>
      <div class="row" style="justify-content:space-between;margin-top:18px">
        <div><div class="muted" id="phase" style="font-weight:600">Sẵn sàng · chuẩn bị ${tk.prep} giây, nói ${tk.talk} giây</div><div class="timer" id="clock">${fmt(tk.prep)}</div></div>
        <div class="row"><button class="btn pri" id="tStart">${ic("clock")} Bắt đầu chuẩn bị</button><button class="btn" id="tTalk">${ic("mic")} Nói ngay</button></div>
      </div>
      <div class="row" style="margin-top:14px"><button class="btn hot" id="rec">${ic("mic")} Ghi âm bài nói</button><span class="muted" id="recSt" style="font-size:14px">Ghi âm để tự nghe lại và xem bản chép lời tự động.</span></div>
      <audio id="aud" controls hidden style="width:100%;margin-top:12px"></audio>
      <div id="tx"></div>
    </div>
  </div>

  <div class="stick">
    <div class="card"><h3>Mẫu câu hữu ích</h3><div class="row">${l.phrases.map(p => `<button class="btn sm" data-say="${esc(p.replace(/…/g, ""))}">${esc(p)}</button>`).join("")}</div></div>
    <div class="card"><h3>Câu hỏi mở rộng</h3><ol style="margin:0;padding-left:20px">${l.followUp.map(q => `<li style="margin-bottom:6px">${esc(q)} <button class="btn sm ghost" data-say="${esc(q)}" aria-label="Nghe câu hỏi" style="min-height:30px;padding:2px 6px">${ic("sound")}</button></li>`).join("")}</ol></div>
    <div class="card"><details><summary>Bài nói mẫu (B1)</summary><p style="margin-top:0">${esc(l.model)}</p><button class="btn sm" data-say="${esc(l.model)}">${ic("sound")} Nghe bài mẫu</button></details></div>
    <div class="card"><h3>3. Tự đánh giá</h3><p class="muted" style="font-size:14px">Nghe lại bản ghi âm và chấm mỗi tiêu chí từ 1 (yếu) đến 5 (rất tốt).</p>
      <div class="rubric">${RUBRIC.map(([n, d], i) => `<label><b>${n}</b><span class="muted" style="font-size:13.5px">${d}</span><div class="rr" data-c="${i}">${[1, 2, 3, 4, 5].map(v => `<button type="button" data-v="${v}">${v}</button>`).join("")}</div></label>`).join("")}</div>
      <div class="row" style="margin-top:14px;justify-content:space-between"><b id="rTot">Tổng: 0/20</b><button class="btn pri" id="rSave">${ic("check")} Lưu đánh giá</button></div>
    </div>
  </div></div>${pager(l)}</div>`;

  /* shadowing */
  let activeR = null;
  cleanup.push(() => activeR && activeR.abort());
  $$(".sp").forEach(b => b.onclick = () => {
    const row = b.closest(".sline"), i = +row.dataset.i, target = l.shadow[i], res = $(".res", row);
    if (activeR) { activeR.abort(); activeR = null; }
    stopAudio();
    const r = new SR(); activeR = r;
    r.lang = "en-US"; r.interimResults = false; r.maxAlternatives = 4;
    b.innerHTML = ic("mic") + " Đang nghe…"; b.disabled = true; res.innerHTML = `<span class="muted">Hãy đọc to câu trên…</span>`;
    r.onresult = e => {
      const alts = [...e.results[0]].map(a => a.transcript);
      const best = alts.map(a => compare(target, a)).sort((x, y) => y.pct - x.pct)[0];
      const key = l.id + i; S.shadow[key] = Math.max(S.shadow[key] || 0, best.pct); touchDay(); save();
      res.innerHTML = `<span class="pct" style="color:${best.pct >= 80 ? "var(--ok)" : best.pct >= 50 ? "var(--coral)" : "var(--bad)"}">${best.pct}%</span> · ${best.html}<br><span class="muted">Máy nghe được: “${esc(alts[0])}”</span>`;
    };
    r.onerror = e => { res.innerHTML = `<span class="muted">${e.error === "not-allowed" || e.error === "service-not-allowed" ? "Chưa được cấp quyền micro. Hãy cho phép trình duyệt dùng micro rồi thử lại." : e.error === "no-speech" ? "Không nghe thấy giọng nói – hãy nói to và rõ hơn." : "Có lỗi nhận diện (" + esc(e.error) + "). Hãy thử lại."}</span>`; };
    r.onend = () => { b.innerHTML = ic("mic") + " Nói"; b.disabled = false; activeR = null; };
    try { r.start(); } catch (err) { r.onend(); }
  });

  /* hẹn giờ chuẩn bị / nói */
  const clock = $("#clock"), phase = $("#phase");
  function run(sec, label, done) {
    clearTimers(); let s = sec; clock.textContent = fmt(s); phase.textContent = label; clock.classList.remove("warn");
    const t = setInterval(() => { s--; clock.textContent = fmt(Math.max(s, 0)); clock.classList.toggle("warn", s <= 10); if (s <= 0) { clearInterval(t); timers.delete(t); done(); } }, 1000);
    timers.add(t);
  }
  const talk = () => { run(tk.talk, "Đang nói – hãy trình bày đủ các ý", () => { phase.textContent = "Hết giờ! Nghe lại bản ghi và tự đánh giá."; if (recording) stopRec(); toast("Hết thời gian nói"); }); if (!recording) startRec(); };
  $("#tStart").onclick = () => run(tk.prep, "Chuẩn bị – ghi chú ý chính", () => { toast("Bắt đầu nói!"); talk(); });
  $("#tTalk").onclick = talk;

  /* ghi âm + chép lời */
  let recording = false, mr = null, stream = null, chunks = [], sr2 = null, finalTx = "", t0 = 0;
  const recBtn = $("#rec"), recSt = $("#recSt");
  async function startRec() {
    recording = true; finalTx = ""; t0 = Date.now(); $("#tx").innerHTML = "";
    recBtn.innerHTML = ic("stop") + " Dừng ghi âm"; recSt.textContent = "Đang ghi âm…";
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mr = new MediaRecorder(stream); chunks = [];
      mr.ondataavailable = e => chunks.push(e.data);
      mr.onstop = () => { const a = $("#aud"); if (!a) return; a.src = URL.createObjectURL(new Blob(chunks, { type: mr.mimeType || "audio/webm" })); a.hidden = false; stream.getTracks().forEach(t => t.stop()); };
      mr.start();
    } catch (e) { recSt.textContent = "Không truy cập được micro để ghi âm (cần cho phép micro, trang chạy qua https)."; }
    if (SR) {
      sr2 = new SR(); sr2.lang = "en-US"; sr2.continuous = true; sr2.interimResults = true;
      sr2.onresult = e => { let interim = ""; for (let i = e.resultIndex; i < e.results.length; i++) { if (e.results[i].isFinal) finalTx += e.results[i][0].transcript + " "; else interim += e.results[i][0].transcript; } $("#tx").innerHTML = `<div class="exp" style="margin-top:12px"><b>Chép lời trực tiếp:</b> ${esc(finalTx)}<span class="muted">${esc(interim)}</span></div>`; };
      sr2.onend = () => { if (recording) try { sr2.start(); } catch (e) {} };
      try { sr2.start(); } catch (e) {}
    }
  }
  function stopRec() {
    recording = false; recBtn.innerHTML = ic("mic") + " Ghi âm lại"; recSt.textContent = "Đã dừng. Nghe lại bên dưới.";
    try { mr && mr.state !== "inactive" && mr.stop(); } catch (e) {}
    try { sr2 && sr2.stop(); } catch (e) {}
    const secs = Math.max(1, (Date.now() - t0) / 1000), words = norm(finalTx).length;
    if (words) {
      const lk = findLinkers(finalTx);
      $("#tx").innerHTML = `<div class="card" style="margin-top:14px;box-shadow:none"><h3>Phân tích bài nói</h3>
      <div class="stat"><div><b>${words}</b><span>từ đã nói</span></div><div><b>${Math.round(words / secs * 60)}</b><span>từ/phút (B1: 90–130)</span></div><div><b>${Math.round(secs)}s</b><span>thời lượng</span></div><div><b>${lk.length}</b><span>từ nối khác nhau</span></div></div>
      <p style="margin:12px 0 4px"><b>Từ nối đã dùng:</b> ${lk.length ? lk.map(esc).join(", ") : "chưa có – hãy thêm because, so, however…"}</p>
      <p class="muted" style="margin:0;font-size:15px"><b>Bản chép lời:</b> ${esc(finalTx)}</p></div>`;
    }
  }
  cleanup.push(() => { recording = false; try { mr && mr.state !== "inactive" && mr.stop(); } catch (e) {} try { sr2 && sr2.abort(); } catch (e) {} try { stream && stream.getTracks().forEach(t => t.stop()); } catch (e) {} });
  recBtn.onclick = () => recording ? stopRec() : startRec();

  /* tự đánh giá */
  const marks = [0, 0, 0, 0];
  $$(".rr").forEach(g => g.onclick = e => {
    const b = e.target.closest("button"); if (!b) return;
    marks[+g.dataset.c] = +b.dataset.v;
    $$("button", g).forEach(x => x.classList.toggle("on", +x.dataset.v <= +b.dataset.v));
    $("#rTot").textContent = `Tổng: ${marks.reduce((a, c) => a + c, 0)}/20`;
  });
  $("#rSave").onclick = () => {
    if (marks.includes(0)) return toast("Hãy chấm đủ 4 tiêu chí.");
    complete(l.id, marks.reduce((a, c) => a + c, 0), 20);
  };
};

/* ================= BÀI VIẾT ================= */
const STOP = new Set("the a an and or but to of in on at for with is are was were be been i you he she it we they my your his her our their this that these those me him them us so as if then than there here do does did have has had not no yes can could will would should just very really also from by about up out what which who when where how all some any more most".split(" "));
LESSON.writing = l => {
  const draft = S.drafts[l.id] || "";
  app.innerHTML = head(l, `<span class="chip">${l.min}–${l.max} từ</span>`) + `<div class="wrap"><div class="two">
  <div>
    <div class="card"><h2>Đề bài</h2><p class="prompt">${esc(l.prompt)}</p>
      <b>Trong bài viết, bạn cần:</b><ul style="margin:6px 0 0;padding-left:20px">${l.notes.map(n => `<li>${esc(n)}</li>`).join("")}</ul></div>
    <div class="card">
      <div class="row" style="justify-content:space-between;margin-bottom:12px">
        <div class="counter"><span class="wc" id="wc">0</span> từ <span>· mục tiêu ${l.min}–${l.max}</span><span id="saved"></span></div>
        <div class="row" style="gap:6px"><span class="timer" id="wclock" style="font-size:26px">${fmt(l.mins * 60)}</span><button class="btn sm" id="wT">${ic("clock")} Bấm giờ</button></div>
      </div>
      <div class="bar" style="--k:var(--c-w);margin-bottom:12px"><i id="wbar" style="width:0"></i></div>
      <textarea class="editor" id="ed" spellcheck="true" lang="en" placeholder="Viết bài của bạn bằng tiếng Anh tại đây… Bài viết được tự động lưu trên trình duyệt." aria-label="Khung soạn bài viết">${esc(draft)}</textarea>
      <div class="row" style="margin-top:14px">
        <button class="btn pri" id="wCheck">${ic("check")} Nhận xét bài viết</button>
        <button class="btn" id="wCopy">${ic("copy")} Sao chép</button>
        <button class="btn" id="wDown">${ic("down")} Tải về .txt</button>
        <button class="btn ghost" id="wClear">Xóa bài</button>
      </div>
    </div>
    <div id="fb"></div>
  </div>
  <div class="stick">
    <div class="card">
      <details open><summary>Dàn ý gợi ý</summary><ol class="outline">${l.outline.map(o => `<li>${esc(o)}</li>`).join("")}</ol></details>
      <details open><summary>Ngôn ngữ hữu ích (bấm để chèn)</summary><div class="phr">${l.language.map(p => `<button type="button" data-ins="${esc(p)}">${esc(p)}</button>`).join("")}</div></details>
      <details><summary>Bảng kiểm trước khi nộp</summary><div style="display:grid;gap:6px">${["Trả lời đủ tất cả các ý của đề bài", "Chia đoạn rõ ràng", "Dùng từ nối đa dạng", "Kiểm tra thì của động từ", "Kiểm tra chính tả, chữ hoa, dấu câu", "Văn phong phù hợp (thân mật/ trang trọng)"].map((c, i) => `<label class="opt" style="min-height:40px;padding:8px 12px"><input type="checkbox" data-ck="${i}"><span>${c}</span></label>`).join("")}</div></details>
      <details><summary>Bài viết mẫu</summary><div class="model">${esc(l.model)}</div></details>
    </div>
  </div></div>${pager(l)}</div>`;

  const ed = $("#ed");
  const countW = t => (t.match(/[A-Za-z0-9’'-]+/g) || []).length;
  const upd = () => {
    const n = countW(ed.value), wc = $("#wc");
    wc.textContent = n; wc.className = "wc" + (n >= l.min && n <= l.max ? " good" : n > l.max ? " over" : "");
    $("#wbar").style.width = Math.min(100, 100 * n / l.max) + "%";
  };
  let st;
  ed.addEventListener("input", () => { upd(); clearTimeout(st); st = setTimeout(() => { S.drafts[l.id] = ed.value; save(); $("#saved").textContent = " · đã lưu nháp"; }, 600); });
  cleanup.push(() => { clearTimeout(st); S.drafts[l.id] = ed.value; try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} });
  upd();

  $$("[data-ins]").forEach(b => b.onclick = () => {
    const t = b.dataset.ins.replace(/…/g, " "), s = ed.selectionStart, e = ed.selectionEnd;
    ed.setRangeText(t, s, e, "end"); ed.focus(); ed.dispatchEvent(new Event("input"));
  });

  let wLeft = l.mins * 60, wRun = null;
  $("#wT").onclick = () => {
    if (wRun) { clearInterval(wRun); timers.delete(wRun); wRun = null; $("#wT").innerHTML = ic("clock") + " Tiếp tục"; return; }
    $("#wT").innerHTML = ic("pause") + " Tạm dừng";
    wRun = setInterval(() => { wLeft--; $("#wclock").textContent = fmt(Math.max(0, wLeft)); $("#wclock").classList.toggle("warn", wLeft <= 120); if (wLeft <= 0) { clearInterval(wRun); timers.delete(wRun); wRun = null; toast("Hết giờ làm bài viết!"); } }, 1000);
    timers.add(wRun);
  };
  $("#wCopy").onclick = async () => { try { await navigator.clipboard.writeText(ed.value); toast("Đã sao chép bài viết"); } catch (e) { ed.select(); toast("Hãy nhấn Ctrl+C để sao chép"); } };
  $("#wDown").onclick = () => {
    try { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([`${l.title}\n\n${ed.value}`], { type: "text/plain" })); a.download = `${l.id}-${l.title.replace(/\W+/g, "-").toLowerCase()}.txt`; document.body.append(a); a.click(); a.remove(); }
    catch (e) { toast("Không tải được – hãy dùng nút Sao chép"); }
  };
  let clr = false;
  $("#wClear").onclick = () => { if (!clr) { clr = true; $("#wClear").textContent = "Bấm lần nữa để xóa"; setTimeout(() => { clr = false; const b = $("#wClear"); if (b) b.textContent = "Xóa bài"; }, 3000); return; } ed.value = ""; ed.dispatchEvent(new Event("input")); $("#fb").innerHTML = ""; clr = false; $("#wClear").textContent = "Xóa bài"; };

  $("#wCheck").onclick = () => {
    const t = ed.value.trim();
    if (countW(t) < 20) return toast("Hãy viết ít nhất 20 từ trước khi nhận xét.");
    const words = (t.match(/[A-Za-z’']+/g) || []).map(w => w.toLowerCase());
    const n = countW(t);
    const sents = t.split(/(?<=[.!?])\s+/).filter(s => /[a-z]/i.test(s));
    const paras = t.split(/\n\s*\n/).filter(p => p.trim());
    const lk = findLinkers(t);
    const content = words.filter(w => !STOP.has(w) && w.length > 2);
    const freq = {}; content.forEach(w => freq[w] = (freq[w] || 0) + 1);
    const rep = Object.entries(freq).filter(([, c]) => c >= 4).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const variety = Math.round(100 * new Set(words).size / Math.max(1, words.length));
    const avg = Math.round(n / Math.max(1, sents.length));
    const items = [
      [n >= l.min && n <= l.max, `Độ dài phù hợp (${n} từ; yêu cầu ${l.min}–${l.max})`],
      [paras.length >= 3, `Chia đoạn rõ ràng (${paras.length} đoạn; nên có ít nhất 3 – để một dòng trống giữa các đoạn)`],
      [lk.length >= 4, `Từ nối đa dạng (${lk.length}: ${lk.slice(0, 8).join(", ") || "chưa có"})`],
      ...l.checks.map(c => {
        const re = new RegExp(c.re, c.f);
        const ok = c.min ? (t.match(re) || []).length >= c.min : re.test(t);
        return [ok, c.label];
      })
    ];
    const tips = [];
    if (/(^|[\s.,!?])i([\s',.!?]|$)/.test(t)) tips.push("Đại từ <b>I</b> luôn viết hoa.");
    const lowStart = sents.filter(s => /^[a-z]/.test(s.trim())).length; if (lowStart) tips.push(`Có ${lowStart} câu bắt đầu bằng chữ thường – hãy viết hoa chữ cái đầu câu.`);
    const long = sents.filter(s => countW(s) > 30).length; if (long) tips.push(`Có ${long} câu dài trên 30 từ – nên tách thành câu ngắn hơn cho rõ ý.`);
    if (/ {2,}/.test(t)) tips.push("Có khoảng trắng thừa giữa các từ.");
    if (/\s[,.!?]/.test(t)) tips.push("Không đặt khoảng trắng trước dấu câu (, . ! ?).");
    if (rep.length) tips.push(`Một số từ lặp lại nhiều: ${rep.map(([w, c]) => `<b>${esc(w)}</b> (${c} lần)`).join(", ")} – thử dùng từ đồng nghĩa.`);
    if (avg < 8) tips.push("Câu khá ngắn – hãy nối câu bằng because, which, when, although để đa dạng cấu trúc.");
    if (variety < 45) tips.push("Vốn từ còn lặp lại – hãy dùng thêm tính từ, trạng từ và cụm từ trong mục Ngôn ngữ hữu ích.");
    const sc = items.filter(i => i[0]).length;
    $("#fb").innerHTML = `<div class="card"><h2>Nhận xét tự động</h2>
      <div class="stat"><div><b>${n}</b><span>số từ</span></div><div><b>${sents.length}</b><span>số câu</span></div><div><b>${avg}</b><span>từ/câu (TB)</span></div><div><b>${variety}%</b><span>độ đa dạng từ</span></div></div>
      <h3 style="margin-top:18px">Yêu cầu bài viết</h3>
      <ul class="checks">${items.map(([ok, lb]) => `<li class="${ok ? "y" : "n"}"><span class="d">${ok ? "✓" : "!"}</span><span>${esc(lb)}</span></li>`).join("")}</ul>
      ${tips.length ? `<h3 style="margin-top:18px">Gợi ý cải thiện</h3><ul style="margin:0;padding-left:20px">${tips.map(x => `<li>${x}</li>`).join("")}</ul>` : ""}
      <div class="score"><div class="big">${sc}/${items.length}</div><div><b>${sc === items.length ? "Rất tốt! Bài viết đáp ứng đầy đủ các tiêu chí kiểm tra tự động." : "Hãy sửa các mục có dấu “!” rồi nhận xét lại."}</b><br><span class="muted">Công cụ chỉ kiểm tra hình thức; hãy so sánh với bài mẫu và nhờ giáo viên chữa phần ngữ pháp, nội dung.</span></div></div>
    </div>`;
    complete(l.id, sc, items.length);
    $("#fb").scrollIntoView({ behavior: "smooth", block: "start" });
  };
};

/* ================= TỪ VỰNG ================= */
function deck() {
  const out = [], seen = new Set();
  D.reading.forEach(l => (l.text || l.notices.map(n => n.text)).flatMap(glossList).forEach(([w, m]) => { if (!seen.has(w)) { seen.add(w); out.push({ w, m, src: l.id, t: l.title }); } }));
  D.listening.forEach(l => l.vocab.forEach(([w, m]) => { if (!seen.has(w)) { seen.add(w); out.push({ w, m, src: l.id, t: l.title }); } }));
  return out;
}
VIEWS.vocab = () => {
  const all = deck();
  let filter = "all", list = all.slice(), i = 0;
  app.innerHTML = `<section class="band slim"><div class="wrap"><div><div class="crumbs"><a href="#home">Tổng quan</a> › Từ vựng</div>
    <h1>Thẻ từ vựng B1</h1><p>${all.length} từ và cụm từ lấy từ các bài Nghe và Đọc. Bấm vào thẻ để lật, nghe phát âm và đánh dấu từ đã thuộc.</p>
    <div class="row"><span class="chip" id="vk"></span></div></div></div></section>
  <div class="wrap">
    <div class="row" style="justify-content:center;margin-bottom:18px">
      <select id="vf" aria-label="Lọc thẻ"><option value="all">Tất cả từ</option><option value="new">Chưa thuộc</option><option value="known">Đã thuộc</option>${[...D.listening, ...D.reading].map(l => `<option value="${l.id}">${D.skills[l.skill].name}: ${esc(l.title)}</option>`).join("")}</select>
      <button class="btn" id="vs">${ic("shuffle")} Trộn thẻ</button>
    </div>
    <div class="flash"><div class="fc" id="fc" tabindex="0" role="button" aria-label="Lật thẻ"><div class="f"></div><div class="b"></div></div>
      <div class="row" style="justify-content:space-between;margin-top:16px">
        <button class="btn" id="vp" aria-label="Thẻ trước">${ic("back")}</button>
        <div class="row" style="gap:8px"><button class="btn" id="vsay">${ic("sound")} Nghe</button><button class="btn" id="vno">Học lại</button><button class="btn pri" id="vyes">${ic("check")} Đã thuộc</button></div>
        <button class="btn" id="vn" aria-label="Thẻ tiếp">${ic("arrow")}</button>
      </div>
      <p class="kbd" style="text-align:center">Phím tắt: Space lật thẻ · ← → chuyển thẻ · K đã thuộc</p>
    </div>
    <div class="section-head"><h2>Danh sách từ</h2><input class="search" id="vq" style="max-width:320px" placeholder="Tìm từ hoặc nghĩa…" aria-label="Tìm từ"></div>
    <div class="card" style="padding:8px 12px"><table class="stack"><thead><tr><th>Từ</th><th>Nghĩa</th><th>Bài học</th><th>Trạng thái</th></tr></thead><tbody id="vt"></tbody></table></div>
  </div>`;
  const fc = $("#fc");
  const stat = () => { $("#vk").textContent = `Đã thuộc ${all.filter(x => S.known[x.w]).length}/${all.length} từ`; };
  const show = () => {
    fc.classList.remove("flip");
    if (!list.length) { $(".f", fc).innerHTML = `<div><div class="m">Không có thẻ nào</div><small>Hãy chọn bộ lọc khác</small></div>`; $(".b", fc).innerHTML = ""; return; }
    i = (i + list.length) % list.length; const c = list[i];
    $(".f", fc).innerHTML = `<div><div class="w">${esc(c.w)}</div><small>${i + 1}/${list.length} · bấm để lật</small>${S.known[c.w] ? `<small style="color:var(--ok);font-weight:700">✓ Đã thuộc</small>` : ""}</div>`;
    $(".b", fc).innerHTML = `<div><div class="m">${esc(c.m)}</div><small>${esc(c.w)} · từ bài “${esc(c.t)}”</small></div>`;
  };
  const table = () => {
    const q = ($("#vq").value || "").toLowerCase();
    $("#vt").innerHTML = all.filter(x => !q || x.w.toLowerCase().includes(q) || x.m.toLowerCase().includes(q)).map(x => `<tr><td><button class="btn sm ghost" data-say="${esc(x.w)}" style="padding:2px 6px;min-height:30px">${ic("sound")}</button> <b>${esc(x.w)}</b></td><td>${esc(x.m)}</td><td><a href="#${x.src}">${esc(x.t)}</a></td><td>${S.known[x.w] ? '<span style="color:var(--ok);font-weight:700">Đã thuộc</span>' : '<span class="muted">Đang học</span>'}</td></tr>`).join("") || `<tr><td colspan="4" class="muted">Không tìm thấy từ phù hợp.</td></tr>`;
  };
  const apply = () => { list = all.filter(x => filter === "all" || (filter === "new" && !S.known[x.w]) || (filter === "known" && S.known[x.w]) || x.src === filter); i = 0; show(); };
  const mark = v => { if (!list.length) return; const c = list[i]; if (v) S.known[c.w] = 1; else delete S.known[c.w]; touchDay(); save(); stat(); table(); toast(v ? `Đã thuộc “${c.w}”` : `Sẽ ôn lại “${c.w}”`); if (filter === "new" || filter === "known") { list.splice(i, 1); show(); } else { i++; show(); } };
  fc.onclick = () => fc.classList.toggle("flip");
  $("#vp").onclick = () => { i--; show(); }; $("#vn").onclick = () => { i++; show(); };
  $("#vsay").onclick = () => list.length && say(list[i].w, .85);
  $("#vyes").onclick = () => mark(1); $("#vno").onclick = () => mark(0);
  $("#vf").onchange = e => { filter = e.target.value; apply(); };
  $("#vs").onclick = () => { for (let k = list.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [list[k], list[j]] = [list[j], list[k]]; } i = 0; show(); };
  $("#vq").oninput = table;
  const key = e => {
    if (/input|textarea|select/i.test(e.target.tagName)) return;
    if (e.key === " ") { e.preventDefault(); fc.classList.toggle("flip"); }
    else if (e.key === "ArrowRight") { i++; show(); } else if (e.key === "ArrowLeft") { i--; show(); } else if (e.key.toLowerCase() === "k") mark(1);
  };
  document.addEventListener("keydown", key); cleanup.push(() => document.removeEventListener("keydown", key));
  stat(); apply(); table();
};

/* ================= KIỂM TRA ================= */
VIEWS.test = () => {
  app.innerHTML = `<section class="band slim"><div class="wrap"><div><div class="crumbs"><a href="#home">Tổng quan</a> › Kiểm tra</div>
    <h1>Bài kiểm tra nhanh B1</h1><p>20 câu trắc nghiệm (12 ngữ pháp + 8 từ vựng), thời gian 15 phút. Câu hỏi được chọn ngẫu nhiên mỗi lần làm.</p></div></div></section>
  <div class="wrap" id="tw"></div>`;
  intro();
  function intro() {
    const best = S.tests.reduce((m, t) => Math.max(m, Math.round(100 * t.score / t.total)), 0);
    $("#tw").innerHTML = `<div class="two"><div class="card"><h2>Hướng dẫn</h2><ul style="padding-left:20px">
      <li>Chọn một đáp án đúng nhất cho mỗi câu; có thể chuyển qua lại giữa các câu.</li><li>Bài tự nộp khi hết 15 phút.</li>
      <li>Sau khi nộp, bạn sẽ thấy đáp án và giải thích từng câu.</li><li>Kết quả được quy đổi để tham khảo: ≥ 80% vững B1; 60–79% đạt B1; 40–59% gần B1; dưới 40% cần ôn lại A2.</li></ul>
      <button class="btn pri" id="go">${ic("play")} Bắt đầu làm bài</button></div>
      <div class="card"><h3>Lịch sử làm bài</h3>${S.tests.length ? `<p>Điểm cao nhất: <b>${best}%</b></p><table><thead><tr><th>Ngày</th><th style="text-align:right">Điểm</th></tr></thead><tbody>${S.tests.slice(-8).reverse().map(t => `<tr><td>${esc(t.date)}</td><td class="n">${t.score}/${t.total}</td></tr>`).join("")}</tbody></table>` : `<p class="muted">Bạn chưa làm bài kiểm tra nào.</p>`}</div></div>`;
    $("#go").onclick = start;
  }
  function start() {
    const shuf = a => a.map(x => [Math.random(), x]).sort((a, b) => a[0] - b[0]).map(x => x[1]);
    const g = shuf(D.grammar).slice(0, 12).map(q => ({ ...q, kind: "Ngữ pháp" }));
    const dk = deck(), v = shuf(dk).slice(0, 8).map(c => {
      const wrong = shuf(dk.filter(x => x.m !== c.m)).slice(0, 3).map(x => x.m);
      const o = shuf([c.m, ...wrong]);
      return { q: `What does “${c.w}” mean?`, o, a: o.indexOf(c.m), e: `${c.w} = ${c.m} (từ bài “${c.t}”).`, kind: "Từ vựng" };
    });
    const qs = shuf([...g, ...v]), ans = new Array(qs.length).fill(null);
    let cur = 0, left = 15 * 60;
    $("#tw").innerHTML = `<div class="two"><div class="card" id="tq"></div>
      <div class="card stick"><div class="row" style="justify-content:space-between"><div><div class="muted" style="font-size:14px;font-weight:600">Thời gian còn lại</div><div class="timer" id="tc">${fmt(left)}</div></div><button class="btn hot" id="sub">Nộp bài</button></div>
      <div class="qnav" id="qn" style="margin-top:16px"></div><p class="muted" style="font-size:14px;margin:12px 0 0" id="tp"></p></div></div>`;
    const nav = () => {
      $("#qn").innerHTML = qs.map((q, k) => `<button class="${ans[k] != null ? "a" : ""} ${k === cur ? "cur" : ""}" data-k="${k}" aria-label="Câu ${k + 1}">${k + 1}</button>`).join("");
      $("#tp").textContent = `Đã làm ${ans.filter(a => a != null).length}/${qs.length} câu`;
    };
    const showQ = () => {
      const q = qs[cur];
      $("#tq").innerHTML = `<span class="chip">${q.kind}</span><h2 style="margin-top:12px">Câu ${cur + 1}/${qs.length}</h2><p style="font-size:19px;font-weight:600">${esc(q.q)}</p>
      <div class="opts">${q.o.map((o, j) => `<label class="opt"><input type="radio" name="tq" value="${j}" ${ans[cur] === j ? "checked" : ""}><span>${esc(o)}</span></label>`).join("")}</div>
      <div class="row" style="justify-content:space-between;margin-top:18px"><button class="btn" id="pv" ${cur ? "" : "disabled"}>${ic("back")} Câu trước</button><button class="btn pri" id="nx">${cur < qs.length - 1 ? "Câu tiếp" : "Xem lại"} ${ic("arrow")}</button></div>`;
      $$('#tq input').forEach(r => r.onchange = () => { ans[cur] = +r.value; nav(); });
      $("#pv").onclick = () => { cur--; showQ(); nav(); };
      $("#nx").onclick = () => { if (cur < qs.length - 1) { cur++; showQ(); nav(); } else toast("Đã đến câu cuối – bấm Nộp bài khi sẵn sàng."); };
    };
    $("#qn").onclick = e => { const b = e.target.closest("button"); if (b) { cur = +b.dataset.k; showQ(); nav(); } };
    let confirmSub = false;
    $("#sub").onclick = () => {
      const un = ans.filter(a => a == null).length;
      if (un && !confirmSub) { confirmSub = true; $("#sub").textContent = `Còn ${un} câu – bấm lần nữa để nộp`; return; }
      finish();
    };
    const t = setInterval(() => { left--; $("#tc").textContent = fmt(Math.max(0, left)); $("#tc").classList.toggle("warn", left <= 60); if (left <= 0) { toast("Hết giờ – bài đã được nộp tự động"); finish(); } }, 1000);
    timers.add(t);
    function finish() {
      clearInterval(t); timers.delete(t);
      const sc = qs.filter((q, k) => ans[k] === q.a).length, pct = Math.round(100 * sc / qs.length);
      S.tests.push({ date: today(), score: sc, total: qs.length }); S.xp += 20 + sc * 5; touchDay(); save();
      const lvl = pct >= 80 ? ["Vững B1", "Bạn nắm chắc ngữ pháp và từ vựng B1. Hãy thử thách bản thân với tài liệu B2."] : pct >= 60 ? ["Đạt B1", "Bạn đã đạt yêu cầu. Xem lại các câu sai để củng cố."] : pct >= 40 ? ["Gần B1 (A2+)", "Bạn đang tiến bộ. Hãy ôn lại các chủ điểm ngữ pháp trong phần giải thích."] : ["Cần ôn lại A2", "Hãy học lại các bài theo lộ trình 4 tuần rồi làm lại bài kiểm tra."];
      $("#tw").innerHTML = `<div class="card"><div class="score" style="margin-top:0"><div class="big">${pct}%</div><div><b style="font-size:20px">${lvl[0]} · ${sc}/${qs.length} câu đúng</b><br><span class="muted">${lvl[1]}</span></div></div>
      <div class="qnav" style="margin:16px 0">${qs.map((q, k) => `<button class="${ans[k] === q.a ? "r" : "x"}" data-rv="${k}" aria-label="Xem câu ${k + 1}">${k + 1}</button>`).join("")}</div>
      <div class="row"><button class="btn pri" id="again">${ic("redo")} Làm bài mới</button><a class="btn" href="#progress">${ic("chart")} Xem tiến độ</a></div></div>
      <div class="card"><h2>Đáp án &amp; giải thích</h2>${qs.map((q, k) => { const ok = ans[k] === q.a; return `<div class="q" id="rv${k}"><div class="qt"><span>${k + 1}.</span>${esc(q.q)} <em class="muted" style="font-weight:500">(${q.kind})</em></div>
        <div class="opts">${q.o.map((o, j) => `<div class="opt ${j === q.a ? "right" : j === ans[k] ? "wrong" : ""}" style="cursor:default">${esc(o)}</div>`).join("")}</div>
        <div class="exp"><b class="${ok ? "ok" : "no"}">${ok ? "Đúng." : ans[k] == null ? "Chưa trả lời." : "Sai."}</b> ${esc(q.e)}</div></div>`; }).join("")}</div>`;
      $("#again").onclick = () => { window.scrollTo(0, 0); start(); };
      $$("[data-rv]").forEach(b => b.onclick = () => $("#rv" + b.dataset.rv).scrollIntoView({ behavior: "smooth", block: "center" }));
      window.scrollTo(0, 0);
    }
    nav(); showQ();
  }
};

/* ================= TIẾN ĐỘ ================= */
const BADGES = [
  ["Bước đầu tiên", "Hoàn thành 1 bài học", () => Object.keys(S.done).length >= 1, "#2d4bd8"],
  ["Đôi tai tinh", "Hoàn thành 4 bài Nghe", () => skillDone("listening") === 4, HEX.listening],
  ["Tự tin nói", "Hoàn thành 4 bài Nói", () => skillDone("speaking") === 4, HEX.speaking],
  ["Mọt sách", "Hoàn thành 4 bài Đọc", () => skillDone("reading") === 4, HEX.reading],
  ["Cây bút vàng", "Hoàn thành 4 bài Viết", () => skillDone("writing") === 4, HEX.writing],
  ["Hộ chiếu B1", "Hoàn thành cả 16 bài", () => Object.keys(S.done).length >= ALL.length, "#f2522f"],
  ["Chăm chỉ", "Học 3 ngày liên tiếp", () => streak() >= 3, "#0b8a5a"],
  ["Thi thử", "Làm 1 bài kiểm tra", () => S.tests.length >= 1, "#c78a00"],
  ["Xuất sắc", "Đạt ≥ 80% bài kiểm tra", () => S.tests.some(t => t.score / t.total >= .8), "#c78a00"],
  ["Từ điển sống", "Thuộc 30 từ vựng", () => Object.keys(S.known).length >= 30, "#7238e0"]
];
const medal = c => `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M20 4h10l4 16H24zM34 4h10l-4 16H30z" fill="${c}" opacity=".55"/><circle cx="32" cy="40" r="20" fill="${c}"/><circle cx="32" cy="40" r="14" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="3 3"/><path d="M32 30l3 6.5 7 .8-5.2 4.8 1.5 7L32 45.6 25.7 49l1.5-7L22 37.3l7-.8z" fill="#fff"/></svg>`;
VIEWS.progress = () => {
  const done = Object.values(S.done), n = done.length;
  const avg = n ? Math.round(100 * done.reduce((a, d) => a + d.score / d.total, 0) / n) : 0;
  const best = S.tests.reduce((m, t) => Math.max(m, Math.round(100 * t.score / t.total)), 0);
  app.innerHTML = `<section class="band"><div class="wrap">
    <div><div class="crumbs"><a href="#home">Tổng quan</a> › Tiến độ</div><h1>Tiến độ học tập</h1>
      <form id="pn" class="row" style="margin:12px 0 18px"><input id="pni" class="search" style="max-width:260px;background:#fff;color:#141a2e" value="${esc(S.name)}" placeholder="Tên của bạn" aria-label="Tên của bạn"><button class="btn">Lưu tên</button></form>
      <div class="stat" style="color:var(--ink)"><div><b>${n}/${ALL.length}</b><span>bài hoàn thành</span></div><div><b>${avg}%</b><span>điểm trung bình</span></div><div><b>${streak()}</b><span>ngày liên tiếp</span></div><div><b>${best}%</b><span>kiểm tra cao nhất</span></div></div>
    </div>${passport()}</div></section>
  <div class="wrap">
    <div class="section-head" style="margin-top:0"><h2>Theo kỹ năng</h2></div>
    <div class="grid">${SK.map(k => { const s = D.skills[k], ds = D[k].map(l => S.done[l.id]).filter(Boolean); const a = ds.length ? Math.round(100 * ds.reduce((x, d) => x + d.score / d.total, 0) / ds.length) : 0;
      return `<div class="card" style="--k:${s.color}"><h3 style="color:${s.color}">${s.name}</h3><div class="bar"><i style="width:${100 * ds.length / D[k].length}%"></i></div><div class="meta" style="margin-top:8px"><span>${ds.length}/${D[k].length} bài</span><span>TB ${a}%</span></div></div>`; }).join("")}</div>

    <div class="section-head"><h2>Huy hiệu</h2><span class="muted">${BADGES.filter(b => b[2]()).length}/${BADGES.length} đã mở khóa</span></div>
    <div class="badges">${BADGES.map(([t, d, f, c]) => `<div class="badge ${f() ? "" : "off"}">${medal(c)}<b>${t}</b><span>${d}</span></div>`).join("")}</div>

    <div class="section-head"><h2>Chi tiết từng bài</h2></div>
    <div class="card" style="padding:8px 12px"><table class="stack"><thead><tr><th>Kỹ năng</th><th>Bài học</th><th style="text-align:right">Điểm cao nhất</th><th>Ngày</th></tr></thead><tbody>
      ${ALL.map(l => { const d = S.done[l.id]; return `<tr><td>${D.skills[l.skill].name}</td><td><a href="#${l.id}">${esc(l.title)}</a></td><td class="n">${d ? `${d.score}/${d.total} (${Math.round(100 * d.score / d.total)}%)` : "–"}</td><td>${d ? esc(d.date) : '<span class="muted">Chưa học</span>'}</td></tr>`; }).join("")}
    </tbody></table></div>

    <div class="section-head"><h2>Sao lưu &amp; khôi phục</h2></div>
    <div class="two"><div class="card"><h3>Sao lưu tiến độ</h3><p class="muted" style="font-size:15px">Tiến độ chỉ lưu trên trình duyệt này. Hãy sao chép hoặc tải mã sao lưu để chuyển sang máy khác hoặc nộp cho giáo viên.</p>
      <textarea class="editor" id="bk" style="min-height:120px;font-size:13px;font-family:ui-monospace,monospace" readonly>${esc(JSON.stringify(S))}</textarea>
      <div class="row" style="margin-top:10px"><button class="btn" id="bkc">${ic("copy")} Sao chép</button><button class="btn" id="bkd">${ic("down")} Tải tệp .json</button></div></div>
    <div class="card"><h3>Khôi phục</h3><p class="muted" style="font-size:15px">Dán mã sao lưu vào ô dưới rồi bấm Khôi phục.</p>
      <textarea class="editor" id="im" style="min-height:120px;font-size:13px;font-family:ui-monospace,monospace" placeholder='{"name": "...", "xp": ...}'></textarea>
      <div class="row" style="margin-top:10px"><button class="btn pri" id="imb">Khôi phục</button><button class="btn ghost" id="rs">Xóa toàn bộ tiến độ</button></div></div></div>
  </div>`;
  $("#pn").onsubmit = e => { e.preventDefault(); S.name = $("#pni").value.trim().slice(0, 40); save(); toast("Đã lưu tên"); route(); };
  $("#bkc").onclick = async () => { try { await navigator.clipboard.writeText($("#bk").value); toast("Đã sao chép mã sao lưu"); } catch (e) { $("#bk").select(); toast("Hãy nhấn Ctrl+C để sao chép"); } };
  $("#bkd").onclick = () => { try { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([$("#bk").value], { type: "application/json" })); a.download = `b1-passport-${today()}.json`; document.body.append(a); a.click(); a.remove(); } catch (e) { toast("Không tải được – hãy dùng nút Sao chép"); } };
  $("#imb").onclick = () => { try { const o = JSON.parse($("#im").value); if (!o || typeof o !== "object" || !("done" in o)) throw 0; S = Object.assign(fresh(), o); save(); toast("Đã khôi phục tiến độ"); route(); } catch (e) { toast("Mã sao lưu không hợp lệ"); } };
  let rs = false;
  $("#rs").onclick = () => { if (!rs) { rs = true; $("#rs").textContent = "Bấm lần nữa để xóa hết"; return; } S = fresh(); save(); toast("Đã xóa toàn bộ tiến độ"); route(); };
};

/* ---------- khởi động ---------- */
updXP();
route();
}

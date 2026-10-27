/* =========================================================
   ALGOVERSE 2026 · Third Year Quiz — Logic
   ========================================================= */
'use strict';

/* ------------------ EASY SETTINGS (edit these) ------------------ */
const CONFIG = {
  eventName: 'ALGOVERSE 2026',
  phaseName: 'Tech Nova',        // shown in header + rules card
  roundName: 'Technomyst',       // shown on rules card
  durationMinutes: 30,           // quiz timer (counts down, auto-submits at 00:00)
  showScoreAfterSubmit: true     // set false to hide the score after submission
};

/* ------------------ SECTIONS ------------------ */
const SECTIONS = [
  { id: 'se',  name: 'Software Engineering',     short: 'Software Eng.',   roman: 'I',   color: '#d9b45f' },
  { id: 'cn',  name: 'Computer Networks',        short: 'Networks',        roman: 'II',  color: '#3fb68b' },
  { id: 'toc', name: 'Theory of Computation',    short: 'Theory of Comp.', roman: 'III', color: '#7fb2d9' },
  { id: 'ml',  name: 'Machine Learning',         short: 'Machine Learning',roman: 'IV',  color: '#e0906a' },
  { id: 'dw',  name: 'Data Warehouse & Mining',  short: 'DW & Mining',     roman: 'V',   color: '#b79ee0' },
  { id: 'ai',  name: 'Artificial Intelligence',  short: 'AI',              roman: 'VI',  color: '#a9c98a' }
];

/* ------------------ QUESTIONS ------------------ */
// q(section, question, [A, B, C, D], indexOfCorrectOption)
const q = (sec, text, options, answer) => ({ sec, text, options, answer });

const QUESTIONS = [
  /* ---- Software Engineering ---- */
  q('se', 'A client is unsure about the exact requirements and wants to see a working model before finalizing them. Which software process model is most suitable?',
    ['Waterfall model', 'Prototype model', 'V-model', 'Linear sequential model'], 1),
  q('se', '“The application must respond to 95% of user requests within two seconds.” This statement specifies:',
    ['A functional requirement', 'A non-functional performance requirement', 'A user role', 'A development process'], 1),
  q('se', 'In the traditional five-level staged CMMI maturity representation, which level indicates that an organization focuses on continuous process improvement?',
    ['Level 2 — Managed', 'Level 3 — Defined', 'Level 4 — Quantitatively Managed', 'Level 5 — Optimizing'], 3),
  q('se', 'A requirements engineer interviews users, observes their daily work and conducts workshops to discover what a system should do. This activity is called:',
    ['Requirements elicitation', 'Requirements validation', 'Software deployment', 'Configuration auditing'], 0),
  q('se', 'A requirement changes, and the team needs to identify which design components and test cases are affected. Which concept is most useful?',
    ['Requirements traceability', 'Code obfuscation', 'Data normalization', 'Process prototyping'], 0),
  q('se', 'A requirement specifies how an external payment gateway communicates with the software, including the request format and response fields. This is primarily part of:',
    ['Interface specification', 'Risk mitigation', 'Process maturity', 'Software maintenance'], 0),

  /* ---- Computer Networks ---- */
  q('cn', 'A data frame contains an even number of 1s. An even-parity bit is added. If one bit in the transmitted frame flips, what will the receiver detect?',
    ['No error', 'A parity error', 'The exact location of the flipped bit', 'The original data automatically'], 1),
  q('cn', 'Which transmission medium carries data as light through a core and is highly resistant to electromagnetic interference?',
    ['Twisted-pair copper cable', 'Coaxial cable', 'Optical fibre', 'Radio wire'], 2),
  q('cn', 'In byte stuffing, what does the sender do when a data byte is identical to a special frame delimiter?',
    ['Deletes the byte', 'Adds an escape byte before it', 'Ends the transmission immediately', 'Converts the byte into an IP address'], 1),
  q('cn', 'In Go-Back-N ARQ, frame 3 is lost after frames 1, 2, 3, 4 and 5 are transmitted. Assuming cumulative acknowledgements and a receiver that discards out-of-order frames, what does the sender generally retransmit after detecting the loss?',
    ['Only frame 3', 'Frames 3, 4 and 5', 'Only frame 5', 'Frames 1 and 2'], 1),
  q('cn', 'Which statement correctly distinguishes Selective Repeat ARQ from Go-Back-N ARQ?',
    ['Selective Repeat retransmits every frame from the first lost frame onward', 'Selective Repeat can buffer out-of-order frames and retransmit only missing or damaged frames', 'Selective Repeat never uses acknowledgements', 'Selective Repeat allows only one frame in transit'], 1),
  q('cn', 'Which bit-stuffing rule is used in HDLC to prevent data from accidentally containing its flag pattern?',
    ['Insert a 0 after every five consecutive 1s in the transmitted data', 'Insert a 1 after every five consecutive 0s', 'Delete every fifth bit', 'Replace every 1 with 0'], 0),

  /* ---- Theory of Computation ---- */
  q('toc', 'An NFA reaches both a final state and a non-final state after processing the same input string. What is the result?',
    ['Rejected, because one path is non-final', 'Accepted, because at least one path reaches a final state', 'Rejected, because an NFA cannot have multiple paths', 'Accepted only if all paths are final'], 1),
  q('toc', 'During DFA minimization, two states can be merged when they are:',
    ['Both non-final, regardless of transitions', 'Equivalent, meaning no input string distinguishes their acceptance behavior', 'Connected by a single transition', 'Both unreachable from each other'], 1),
  q('toc', 'Which statement correctly distinguishes a Mealy machine from a Moore machine?',
    ['A Mealy machine has no output', "A Mealy machine's output depends on the current state and input", 'A Mealy machine cannot have cycles', 'A Mealy machine accepts every input string'], 1),
  q('toc', 'What does the regular expression 0*1* represent?',
    ['All strings containing equal numbers of 0s and 1s', 'Any number of 0s followed by any number of 1s', 'Strings in which 0s and 1s must alternate', 'Strings ending in 0'], 1),
  q('toc', 'If L₁ and L₂ are regular languages, which of the following must also be regular?',
    ['L₁ ∪ L₂', 'Only L₁ − L₂ if both are finite', 'Only L₁ ∩ L₂ if both have the same DFA', 'None of these'], 0),
  q('toc', 'Which method is commonly used to convert an NFA into an equivalent DFA?',
    ['Subset construction', 'Binary search', "Dijkstra's algorithm", "Prim's algorithm"], 0),

  /* ---- Machine Learning ---- */
  q('ml', 'Which dataset should ideally be used only for the final unbiased evaluation of a model after model selection and tuning are complete?',
    ['Training set', 'Validation set', 'Test set', 'Feature set'], 2),
  q('ml', 'Which task is best treated as a regression problem?',
    ['Predicting whether a tumour is benign or malignant', 'Classifying a message as spam or not spam', "Predicting tomorrow's temperature in degrees Celsius", 'Identifying a handwritten digit from 0 to 9'], 2),
  q('ml', 'In a Support Vector Machine, the decision boundary is chosen to maximize the:',
    ['Number of features', 'Margin between the boundary and the nearest training points', 'Number of training samples', 'Training error in every case'], 1),
  q('ml', 'Why is the Naïve Bayes classifier called “naïve”?',
    ['It assumes features are conditionally independent given the class', 'It ignores all training data', 'It can only classify two samples', 'It never uses probabilities'], 0),
  q('ml', 'A model uses house area and number of bedrooms to predict house price. Which algorithm directly matches this setup?',
    ['Simple linear regression with one predictor only', 'Multiple linear regression', 'Logistic regression', 'Naïve Bayes'], 1),
  q('ml', 'Logistic regression is commonly used for binary classification because it:',
    ['Directly predicts an unrestricted real number as the final class', 'Can map a linear score to a probability using a sigmoid function', 'Always builds a decision tree', 'Requires every feature to be categorical'], 1),

  /* ---- Data Warehouse & Data Mining ---- */
  q('dw', 'A warehouse design has one central fact table connected directly to denormalized dimension tables. Which schema is this?',
    ['Snowflake schema', 'Star schema', 'Network schema', 'Hierarchical schema'], 1),
  q('dw', 'A manager views yearly sales, then expands the 2025 figure into quarterly and monthly sales. Which OLAP operation is being performed?',
    ['Roll-up', 'Drill-down', 'Slice', 'Dice'], 1),
  q('dw', 'A data analyst converts continuous ages into categories such as 0–17, 18–35, 36–60 and 60+. This process is called:',
    ['Data integration', 'Data discretization', 'Data loading', 'Data cube rotation'], 1),
  q('dw', 'Which statement best describes the relationship between Knowledge Discovery in Databases (KDD) and data mining?',
    ['KDD and data mining are completely unrelated', 'Data mining is a step within the broader KDD process', 'KDD is only the process of collecting raw data', 'Data mining always occurs before data selection'], 1),
  q('dw', 'In a sales data warehouse, which of the following is most likely to be stored as a measure in the fact table?',
    ['Product category name', 'Customer city', 'Total sales amount', 'Product description'], 2),
  q('dw', 'A retailer wants to group customers into segments based on purchasing behavior, without predefined segment labels. Which data mining task is most suitable?',
    ['Classification', 'Clustering', 'Regression', 'Supervised ranking'], 1),

  /* ---- Artificial Intelligence ---- */
  q('ai', 'Which AI technique is most suitable for representing uncertain degrees of truth, such as “the temperature is somewhat high”?',
    ['Fuzzy logic', 'Binary search', 'Exact string matching', 'Depth-first search'], 0),
  q('ai', 'Which statement about Breadth-First Search is correct when all edges have equal cost?',
    ['It always finds the path with the fewest edges', 'It always uses less memory than DFS', 'It ignores the depth of nodes', 'It requires a heuristic function'], 0),
  q('ai', 'In reinforcement learning, an agent repeatedly chooses actions and observes rewards. What does its policy specify?',
    ['How actions are selected in states', 'How images are compressed', 'How training labels are stored', 'How a database is normalized'], 0),
  q('ai', 'Which AI subfield focuses on enabling computers to understand, process and generate human language?',
    ['Computer vision', 'Natural Language Processing', 'Robotics hardware', 'Database indexing'], 1),
  q('ai', 'In a neural network, which component introduces non-linearity so the network can learn more complex patterns?',
    ['Activation function', 'Dataset filename', 'Input row number', 'File extension'], 0),
  q('ai', 'What is the main purpose of backpropagation in neural network training?',
    ['To propagate error gradients backward to compute parameter gradients', 'To split a dataset randomly every second', 'To remove all hidden layers', 'To guarantee zero training error immediately'], 0)
];

/* ------------------ HELPERS ------------------ */
const $ = (id) => document.getElementById(id);
const secById = (id) => SECTIONS.find((s) => s.id === id);
const secIndex = (id) => SECTIONS.findIndex((s) => s.id === id);
const LETTERS = ['A', 'B', 'C', 'D'];
const TOTAL = QUESTIONS.length;
const TOTAL_SECONDS = CONFIG.durationMinutes * 60;
const STORAGE_KEY = 'technova-3rd-year-session-v1';

const state = {
  current: 0,
  answers: new Array(TOTAL).fill(-1),
  flagged: new Set(),
  teamName: '',
  started: false,
  submitted: false,
  startTime: 0,
  endTime: 0,
  timerId: null,
  expiryId: null,
  result: null,
  warned5: false,
  warned1: false
};

const pad = (n) => String(n).padStart(2, '0');
const fmt = (sec) => {
  sec = Math.max(0, Math.round(sec));
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
};
const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const answeredCount = () => state.answers.filter((a) => a !== -1).length;
const slug = (t) => t.toLowerCase().replace(/\s+/g, '-');

let toastTimer;
function toast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo({ top: 0 });
}

/* ------------------ BACKGROUND: CONSTELLATION NETWORK ------------------ */
function startNetwork() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cv = $('net');
  const ctx = cv.getContext('2d');
  let W, H, nodes = [];
  const mouse = { x: -999, y: -999 };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(70, (W * H) / 20000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: 1 + Math.random() * 1.6, gold: Math.random() > 0.45
    }));
  }
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });

  const LINK = 140;
  let last = 0;
  (function frame(now) {
    requestAnimationFrame(frame);
    if (now - last < 33) return;   // ~30 fps
    last = now;
    ctx.clearRect(0, 0, W, H);

    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    }
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK) {
          ctx.strokeStyle = `rgba(217,180,95,${(1 - d / LINK) * 0.28})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (dm < 170) {
        ctx.strokeStyle = `rgba(246,227,166,${(1 - dm / 170) * 0.5})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
      ctx.fillStyle = a.gold ? 'rgba(246,227,166,.85)' : 'rgba(63,182,139,.8)';
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
    }
  })(0);
}

/* ------------------ INTRO ------------------ */
function setupIntro() {
  const phaseText = `${CONFIG.phaseName} · ${CONFIG.roundName}`;
  $('headerPhase').textContent = phaseText;
  $('brand').setAttribute('data-phase', phaseText);
  $('cardPhase').textContent = CONFIG.phaseName;
  $('cardRound').textContent = CONFIG.roundName;

  $('metaRow').innerHTML = `
    <div><b>${TOTAL}</b>Questions</div>
    <div><b>${CONFIG.durationMinutes}</b>Minutes</div>
    <div><b>${SECTIONS.length}</b>Sections</div>`;

  const rules = [
    `This quiz is only for <b>3rd Year</b> students. It has <b>${TOTAL} multiple-choice questions</b> in ${SECTIONS.length} sections: Software Engineering, Computer Networks, Theory of Computation, Machine Learning, Data Warehouse &amp; Mining and Artificial Intelligence.`,
    `Every question has <b>four options (A–D)</b> and only <b>one</b> is correct. Each correct answer earns <b>4 marks</b>, each incorrect answer loses <b>1 mark</b>, and unanswered questions earn <b>0 marks</b>.`,
    `You have <b>${CONFIG.durationMinutes} minutes</b>. The timer starts the moment you press <b>Enter Quiz</b> and the test is <b>auto-submitted</b> at 00:00.`,
    `Move freely between questions using the <b>navigator</b>. You can <b>change an answer</b> or <b>flag a question</b> for review before submitting.`,
    `Do <b>not</b> refresh, go back or close this page during the test.`,
    `Play fair — no mobiles, notes or help from others. Press <b>Submit Test</b> on the last question when you finish.`
  ];
  const list = $('rulesList');
  list.innerHTML = '';
  rules.forEach((r, i) => {
    const li = document.createElement('li');
    li.innerHTML = r;
    li.style.animationDelay = `${0.6 + i * 0.12}s`;
    list.appendChild(li);
  });
}

/* ------------------ START ------------------ */
function startQuiz() {
  if (state.started) return;
  if (!$('studentDetails').reportValidity()) return;
  state.teamName = $('teamName').value.trim();
  if (!state.teamName) {
    $('teamName').focus();
    toast('Please enter your team name.');
    return;
  }
  $('teamName').value = state.teamName;
  state.started = true;
  state.startTime = Date.now();
  state.endTime = state.startTime + TOTAL_SECONDS * 1000;
  if (!saveSession()) {
    state.started = false;
    state.startTime = 0;
    state.endTime = 0;
    return;
  }

  $('headerPhase').textContent = `${CONFIG.phaseName} · ${CONFIG.roundName} · ${state.teamName}`;
  $('brand').setAttribute('data-phase', $('headerPhase').textContent);
  $('timer').hidden = false;
  tick();
  state.timerId = setInterval(tick, 250);
  state.expiryId = setTimeout(() => submitTest(true), Math.max(0, state.endTime - Date.now()));

  $('totalCount').textContent = TOTAL;
  buildSections();
  showScreen('quizScreen');
  renderQuestion(0, 'next');
  window.addEventListener('beforeunload', guardUnload);
}

function guardUnload(e) {
  if (state.started && !state.submitted) { e.preventDefault(); e.returnValue = ''; }
}

function saveSession() {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
      version: 1,
      started: state.started,
      submitted: state.submitted,
      startTime: state.startTime,
      endTime: state.endTime,
      current: state.current,
      answers: state.answers,
      flagged: [...state.flagged],
      teamName: state.teamName,
      result: state.result
    }));
    return true;
  } catch (error) {
    console.error('Could not save the Technova test session:', error);
    toast('Your test session could not be saved. Please keep this page open.');
    return false;
  }
}

function restoreSession() {
  let raw;
  try {
    raw = sessionStorage.getItem(STORAGE_KEY);
  } catch (error) {
    console.error('Could not restore the Technova test session:', error);
    toast('Your saved test session could not be accessed.');
    return;
  }
  if (!raw) return;

  let saved;
  try {
    saved = JSON.parse(raw);
  } catch (error) {
    console.error('Could not parse the saved Technova test session:', error);
    toast('Your saved test session is invalid.');
    return;
  }
  const validAnswers = saved && Array.isArray(saved.answers) && saved.answers.length === TOTAL &&
    saved.answers.every((answer, i) => Number.isInteger(answer) && answer >= -1 && answer < QUESTIONS[i].options.length);
  const validFlags = saved && Array.isArray(saved.flagged) && saved.flagged.every((i) => Number.isInteger(i) && i >= 0 && i < TOTAL);
  if (!saved || saved.version !== 1 || !saved.started || typeof saved.teamName !== 'string' ||
      !Number.isFinite(saved.startTime) || !Number.isFinite(saved.endTime) ||
      !Number.isInteger(saved.current) || saved.current < 0 || saved.current >= TOTAL ||
      !validAnswers || !validFlags || (saved.submitted && (!saved.result || !Number.isFinite(saved.result.score)))) {
    console.error('The saved Technova test session has an invalid shape.');
    toast('Your saved test session is invalid.');
    return;
  }

  state.started = true;
  state.submitted = Boolean(saved.submitted);
  state.startTime = saved.startTime;
  state.endTime = saved.endTime;
  state.current = saved.current;
  state.answers = saved.answers;
  state.flagged = new Set(saved.flagged);
  state.teamName = saved.teamName;
  state.result = saved.result || null;
  $('teamName').value = state.teamName;
  $('headerPhase').textContent = `${CONFIG.phaseName} · ${CONFIG.roundName} · ${state.teamName}`;
  $('brand').setAttribute('data-phase', $('headerPhase').textContent);
  $('timer').hidden = false;

  if (state.submitted) {
    renderResult(state.result);
    showScreen('resultScreen');
    $('submissionStatus').textContent = 'Results are available on this page.';
    return;
  }

  $('totalCount').textContent = TOTAL;
  buildSections();
  showScreen('quizScreen');
  renderQuestion(state.current, 'next');
  window.addEventListener('beforeunload', guardUnload);
  state.timerId = setInterval(tick, 250);
  state.expiryId = setTimeout(() => submitTest(true), Math.max(0, state.endTime - Date.now()));
  tick();
}

/* ------------------ TIMER ------------------ */
function tick() {
  const remaining = Math.max(0, Math.ceil((state.endTime - Date.now()) / 1000));
  $('timeText').textContent = fmt(remaining);
  $('tFill').style.width = `${(remaining / TOTAL_SECONDS) * 100}%`;

  const t = $('timer');
  t.classList.toggle('warn', remaining <= 300 && remaining > 60);
  t.classList.toggle('danger', remaining <= 60);

  if (remaining <= 300 && !state.warned5 && TOTAL_SECONDS > 600) {
    state.warned5 = true;
    toast('⏳ Only 5 minutes remain');
  }
  if (remaining <= 60 && !state.warned1 && TOTAL_SECONDS > 120) {
    state.warned1 = true;
    toast('⚠️ Final minute — complete your answers');
  }
  if (remaining <= 0 && !state.submitted) submitTest(true);
}

/* ------------------ SECTION BAR ------------------ */
function buildSections() {
  const bar = $('sectionsBar');
  bar.innerHTML = '';
  SECTIONS.forEach((sec) => {
    const b = document.createElement('button');
    b.className = 'seg';
    b.dataset.sec = sec.id;
    b.style.setProperty('--c', sec.color);
    b.setAttribute('aria-label', sec.name);
    b.innerHTML = `<div class="seg-label"><em>${sec.roman}</em><span>${esc(sec.short)}</span></div><div class="seg-bar"><div></div></div>`;
    b.addEventListener('click', () => {
      const idx = QUESTIONS.findIndex((x, i) => x.sec === sec.id && state.answers[i] === -1);
      goTo(idx !== -1 ? idx : QUESTIONS.findIndex((x) => x.sec === sec.id));
    });
    bar.appendChild(b);
  });
}

function refreshNav() {
  const cur = QUESTIONS[state.current];
  document.querySelectorAll('.seg').forEach((b) => {
    const id = b.dataset.sec;
    let done = 0, tot = 0;
    QUESTIONS.forEach((x, i) => { if (x.sec === id) { tot++; if (state.answers[i] !== -1) done++; } });
    b.querySelector('.seg-bar div').style.width = `${(done / tot) * 100}%`;
    b.classList.toggle('active', id === cur.sec);
  });
  $('answeredCount').textContent = answeredCount();
  document.documentElement.style.setProperty('--sec', secById(cur.sec).color);
}

/* ------------------ QUESTION RENDER ------------------ */
const TICK_SVG = '<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

function renderQuestion(index, dir = 'next') {
  state.current = index;
  const qu = QUESTIONS[index];
  const sec = secById(qu.sec);
  const paper = $('paper');
  paper.style.setProperty('--sec', sec.color);

  paper.innerHTML = `
    <div class="p-head">
      <div class="p-sec"><span class="p-roman">${sec.roman}</span><span class="p-secname">${esc(sec.name)}</span></div>
      <button class="flag" id="flagBtn" aria-pressed="false"><span>Flag</span> ⚑</button>
    </div>
    <div class="q-line">
      <div><div class="q-no">${pad(index + 1)}</div><div class="q-of">of ${TOTAL}</div></div>
      <p class="q-text"></p>
    </div>
    <div class="options" role="radiogroup" aria-label="Answer options"></div>
    <button class="clear" id="clearBtn">Clear selection</button>`;
  paper.querySelector('.q-text').textContent = qu.text;

  const opts = paper.querySelector('.options');
  qu.options.forEach((text, i) => {
    const b = document.createElement('button');
    const sel = state.answers[index] === i;
    b.className = 'opt' + (sel ? ' selected' : '');
    b.setAttribute('role', 'radio');
    b.setAttribute('aria-checked', sel ? 'true' : 'false');
    b.innerHTML = `<span class="letter">${LETTERS[i]}</span><span class="txt"></span>${TICK_SVG}`;
    b.querySelector('.txt').textContent = text;
    b.addEventListener('click', () => selectOption(i));
    opts.appendChild(b);
  });

  $('flagBtn').addEventListener('click', toggleFlag);
  $('clearBtn').addEventListener('click', clearAnswer);

  paper.classList.remove('enter-next', 'enter-prev');
  void paper.offsetWidth;
  paper.classList.add(dir === 'prev' ? 'enter-prev' : 'enter-next');

  const last = index === TOTAL - 1;
  $('prevBtn').disabled = index === 0;
  $('nextBtn').hidden = last;
  $('submitBtn').hidden = !last;
  updateFlagBtn();
  refreshNav();
}

function updateFlagBtn() {
  const on = state.flagged.has(state.current);
  const b = $('flagBtn');
  if (!b) return;
  b.classList.toggle('on', on);
  b.setAttribute('aria-pressed', String(on));
  b.firstElementChild.textContent = on ? 'Flagged' : 'Flag';
}

function toggleFlag() {
  if (state.submitted) return;
  const i = state.current;
  state.flagged.has(i) ? state.flagged.delete(i) : state.flagged.add(i);
  updateFlagBtn();
  saveSession();
}

function selectOption(i) {
  if (state.submitted) return;
  state.answers[state.current] = i;
  saveSession();
  document.querySelectorAll('.opt').forEach((el, idx) => {
    el.classList.toggle('selected', idx === i);
    el.setAttribute('aria-checked', idx === i ? 'true' : 'false');
  });
  refreshNav();
}

function clearAnswer() {
  if (state.submitted) return;
  state.answers[state.current] = -1;
  document.querySelectorAll('.opt').forEach((el) => { el.classList.remove('selected'); el.setAttribute('aria-checked', 'false'); });
  refreshNav();
  saveSession();
}

function goTo(i) {
  if (state.submitted || i < 0 || i >= TOTAL || i === state.current) return;
  renderQuestion(i, i > state.current ? 'next' : 'prev');
  saveSession();
}

/* ------------------ NAVIGATOR DRAWER ------------------ */
function openDrawer() {
  const body = $('drBody');
  body.innerHTML = '';
  SECTIONS.forEach((sec) => {
    const wrap = document.createElement('div');
    wrap.className = 'd-sec';
    wrap.style.setProperty('--c', sec.color);
    wrap.innerHTML = `<h4><em>${sec.roman}</em>${esc(sec.name)}</h4><div class="d-grid"></div>`;
    const grid = wrap.querySelector('.d-grid');
    QUESTIONS.forEach((x, i) => {
      if (x.sec !== sec.id) return;
      const b = document.createElement('button');
      b.className = 'nbtn';
      b.textContent = i + 1;
      b.setAttribute('aria-label', `Question ${i + 1}`);
      if (state.answers[i] !== -1) b.classList.add('answered');
      if (state.flagged.has(i)) b.classList.add('flagged');
      if (i === state.current) b.classList.add('current');
      b.addEventListener('click', () => { goTo(i); closeDrawer(); });
      grid.appendChild(b);
    });
    body.appendChild(wrap);
  });
  $('drawerWrap').hidden = false;
}
function closeDrawer() { $('drawerWrap').hidden = true; }

/* ------------------ SUBMIT & EVALUATION ------------------ */
function openConfirm() {
  const answered = answeredCount();
  const left = TOTAL - answered;
  const flagged = state.flagged.size;
  let txt = `You have answered <b>${answered}</b> of <b>${TOTAL}</b> questions.`;
  if (left > 0) txt += ` <b>${left}</b> ${left === 1 ? 'question is' : 'questions are'} still unanswered.`;
  if (flagged > 0) txt += ` <b>${flagged}</b> flagged for review.`;
  txt += '<br>You cannot change your answers after submitting.';
  $('confirmText').innerHTML = txt;
  $('confirmModal').hidden = false;
  $('confirmSubmitBtn').focus();
}

function submitTest(auto = false) {
  if (state.submitted) return;
  if (Date.now() >= state.endTime) auto = true;
  state.submitted = true;
  clearInterval(state.timerId);
  clearTimeout(state.expiryId);
  window.removeEventListener('beforeunload', guardUnload);
  $('confirmModal').hidden = true;
  closeDrawer();

  const timeTaken = Math.min(TOTAL_SECONDS, Math.round((Date.now() - state.startTime) / 1000));

  let correct = 0;
  let wrong = 0;
  let score = 0;
  const per = {};
  SECTIONS.forEach((s) => (per[s.id] = { got: 0, total: 0 }));
  QUESTIONS.forEach((qu, i) => {
    per[qu.sec].total++;
    if (state.answers[i] === qu.answer) { correct++; score += 4; per[qu.sec].got++; }
    else if (state.answers[i] !== -1) { wrong++; score--; }
  });
  const answered = answeredCount();
  const result = { score, per, answered, correct, wrong, timeTaken, auto };
  state.result = result;
  saveSession();

  renderResult(result);
  showScreen('resultScreen');
  launchDust();
  $('submissionStatus').textContent = 'Results are available on this page.';
}

function gradeOf(p) {
  if (p >= 85) return 'Distinction';
  if (p >= 65) return 'Merit';
  if (p >= 40) return 'Proficient';
  return 'Participant';
}

function renderResult({ score, per, answered, correct, wrong, timeTaken, auto }) {
  const pct = Math.max(0, Math.round((score / (TOTAL * 4)) * 100));
  const R = 82, C = 2 * Math.PI * R;
  const show = CONFIG.showScoreAfterSubmit;

  const medal = show ? `
    <div class="medal">
      <svg viewBox="0 0 190 190" aria-hidden="true">
        <defs><linearGradient id="ringGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f6e3a6"/><stop offset="100%" stop-color="#b8903a"/>
        </linearGradient></defs>
        <circle cx="95" cy="95" r="90" fill="none" stroke="rgba(217,180,95,.25)" stroke-width="1" stroke-dasharray="2 5"/>
        <circle class="ring-bg" cx="95" cy="95" r="${R}" fill="none" stroke-width="10"/>
        <circle class="ring-fg" id="ringFg" cx="95" cy="95" r="${R}" fill="none" stroke-width="10"
                stroke-dasharray="${C}" stroke-dashoffset="${C}"/>
      </svg>
      <div class="medal-text"><b id="scoreNum">0</b><span>out of ${TOTAL * 4} marks</span></div>
    </div>
    <div class="grade">${gradeOf(pct)}</div>
    <p class="marks-line">Marks scored: <b>${score} / ${TOTAL * 4}</b> &middot; ${pct}%</p>` : '';

  const breakdown = show ? `
    <div class="breakdown">
      ${SECTIONS.map((s) => `
        <div class="bk-row" style="--sec:${s.color}">
          <span>${esc(s.name)}</span>
          <div class="bk-bar"><div class="bk-fill" data-w="${(per[s.id].got / per[s.id].total) * 100}"></div></div>
          <span class="bk-val">${per[s.id].got}/${per[s.id].total}</span>
        </div>`).join('')}
    </div>` : '';

  $('resultCard').innerHTML = `
    <p class="cert-eyebrow">${auto ? 'Time expired · auto-submitted' : 'Submission received'}</p>
    <h2>${auto ? "Time's up — test submitted" : 'Test submitted'}</h2>
    <p class="sub">${esc(CONFIG.phaseName)} · ${esc(CONFIG.roundName)} &middot; ${esc(CONFIG.eventName)} &middot; 3rd Year</p>
    <p class="team-result">Team: <b>${esc(state.teamName)}</b></p>
    ${medal}
    <div class="stats">
      <div class="stat s-ok"><b>${show ? correct : '–'}</b>Correct</div>
      <div class="stat s-bad"><b>${show ? wrong : '–'}</b>Wrong</div>
      <div class="stat s-skip"><b>${TOTAL - answered}</b>Skipped</div>
      <div class="stat s-time"><b>${fmt(timeTaken)}</b>Time</div>
    </div>
    ${breakdown}
    ${renderAnswerReview()}
    <p class="bye">Thank you for taking part in ALGOVERSE 2026.</p>`;

  if (show) {
    requestAnimationFrame(() => setTimeout(() => {
      $('ringFg').style.strokeDashoffset = C * (1 - Math.max(0, score) / (TOTAL * 4));
      document.querySelectorAll('.bk-fill').forEach((f) => (f.style.width = f.dataset.w + '%'));
      animateNumber($('scoreNum'), score, 1700);
    }, 400));
  }
}

function renderAnswerReview() {
  return `<section class="answer-review"><h3>Answer review</h3>${QUESTIONS.map((question, index) => {
    const selected = state.answers[index];
    const isCorrect = selected === question.answer;
    const outcome = selected === -1 ? 'Unanswered' : (isCorrect ? 'Correct' : 'Incorrect');
    const marked = state.flagged.has(index);
    return `<article class="answer-review-item">
      <h4>Question ${index + 1}: ${esc(question.text)}</h4>
      <p class="review-status ${selected === -1 ? 'is-unanswered' : (isCorrect ? 'is-correct' : 'is-incorrect')}">${outcome}${marked ? ' · Marked for review' : ''}</p>
      <ul>${question.options.map((option, optionIndex) => {
        const correctOption = optionIndex === question.answer;
        const chosenOption = optionIndex === selected;
        return `<li class="${correctOption ? 'review-correct' : ''} ${chosenOption ? 'review-selected' : ''}">${LETTERS[optionIndex]}. ${esc(option)}${correctOption ? ' — Correct answer' : ''}${chosenOption ? ' — Team answer' : ''}</li>`;
      }).join('')}</ul>
    </article>`;
  }).join('')}</section>`;
}

function animateNumber(el, to, ms) {
  const t0 = performance.now();
  (function step(now) {
    const p = Math.min(1, (now - t0) / ms);
    el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}

function launchDust() {
  const glyphs = ['✦', '✧', '•', '◆'];
  for (let i = 0; i < 46; i++) {
    const d = document.createElement('i');
    d.className = 'dust';
    d.textContent = glyphs[i % glyphs.length];
    d.style.left = `${Math.random() * 100}%`;
    d.style.fontStyle = 'normal';
    d.style.fontSize = `${10 + Math.random() * 16}px`;
    d.style.color = i % 4 === 0 ? '#3fb68b' : (i % 3 === 0 ? '#f6e3a6' : '#d9b45f');
    d.style.animationDuration = `${3 + Math.random() * 3}s`;
    d.style.animationDelay = `${Math.random() * 1}s`;
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 8000);
  }
}

/* ------------------ EVENTS ------------------ */
function bindEvents() {
  $('studentDetails').addEventListener('submit', (event) => event.preventDefault());
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && state.started && !state.submitted) tick();
  });
  $('enterBtn').addEventListener('click', startQuiz);
  $('prevBtn').addEventListener('click', () => goTo(state.current - 1));
  $('nextBtn').addEventListener('click', () => goTo(state.current + 1));
  $('navBtn').addEventListener('click', openDrawer);
  $('drClose').addEventListener('click', closeDrawer);
  $('drawerBg').addEventListener('click', closeDrawer);
  $('submitBtn').addEventListener('click', openConfirm);
  $('reviewBtn').addEventListener('click', () => ($('confirmModal').hidden = true));
  $('confirmSubmitBtn').addEventListener('click', () => submitTest(false));

  document.addEventListener('keydown', (e) => {
    if (!state.started || state.submitted) return;
    if (!$('confirmModal').hidden) return;
    if (e.key === 'Escape') { closeDrawer(); return; }
    if (!$('drawerWrap').hidden) return;
    const k = e.key.toLowerCase();
    if (['a', 'b', 'c', 'd', '1', '2', '3', '4'].includes(k)) {
      selectOption('abcd'.includes(k) ? 'abcd'.indexOf(k) : Number(k) - 1);
    } else if (e.key === 'ArrowRight') goTo(state.current + 1);
    else if (e.key === 'ArrowLeft') goTo(state.current - 1);
  });
}

/* ------------------ INIT ------------------ */
setupIntro();
bindEvents();
restoreSession();
startNetwork();
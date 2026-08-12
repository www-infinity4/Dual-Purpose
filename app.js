"use strict";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const fallbackClaims = [
  {id:"b2o3-network",title:"Glassy B₂O₃ forms a connected boron–oxygen network.",status:"Established",summary:"BO₃ triangles and boroxol-ring motifs provide local and intermediate-range descriptions of the glass structure.",evidence:"Raman, NMR, neutron and X-ray measurements; atomistic models.",next:"Compare structural models against measured pair-distribution and vibrational data.",fails:"A proposed structural population that cannot reproduce calibrated scattering or spectroscopy."},
  {id:"rings-change",title:"Boroxol-ring populations change with temperature.",status:"Established",summary:"Recent diffraction work resolves structural change between glassy and molten B₂O₃.",evidence:"Temperature-dependent neutron and X-ray diffraction.",next:"Use the cited 2025 dataset when calibrating a structural visualization.",fails:"Treating the 75% teaching-slider value as universal at every temperature and preparation."},
  {id:"wide-gap",title:"Crystalline B₂O₃ phases are wide-gap insulators.",status:"Established",summary:"First-principles work predicts phase-dependent electronic and optical properties rather than metallic switching under ordinary conditions.",evidence:"Band-structure and optical-property calculations, compared where possible with experiment.",next:"Use measured dielectric and optical data for any device model.",fails:"A device premise that assumes ordinary B₂O₃ is a conductor without a demonstrated mechanism."},
  {id:"state-logic",title:"Place-and-time metadata can make a research workflow more intelligent.",status:"Engineering inference",summary:"Software can attach validity windows, location, evidence confidence and allowed transitions to every research object.",evidence:"Established state-machine, event-log and provenance patterns.",next:"Implement schemas and measure whether they reduce stale or contextually invalid recommendations.",fails:"No improvement in decision accuracy, auditability or task completion against a simpler baseline."},
  {id:"watcher",title:"A Watcher agent can gather evidence while preserving provenance.",status:"Engineering inference",summary:"An agent can collect sources and sensor records if every record keeps its origin, timestamp, method and confidence.",evidence:"Existing retrieval, telemetry and data-lineage systems.",next:"Benchmark source precision, contradiction detection and citation integrity.",fails:"Untraceable summaries, fabricated sources, or worse precision than a controlled search workflow."},
  {id:"coherence-sensor",title:"A boron-oxide structure may produce a distinctive, controllable coherence signature useful to a sensor.",status:"Testable hypothesis",summary:"The terms signature, coherence and useful must be defined as measured quantities before testing.",evidence:"No device-level evidence is asserted here.",next:"Choose a non-hazardous sample, calibrated sensor, sham material, randomized labels, blinded analysis and preregistered detection threshold.",fails:"No repeatable separation from sham after thermal, electrical and environmental confounds are controlled."},
  {id:"resonant-compute",title:"B₂O₃ network motifs can serve as a new physical computing primitive.",status:"Speculative framework",summary:"The concept lacks a demonstrated state variable, write/read operation, retention time, error rate and advantage over classical devices.",evidence:"Structural complexity alone is not evidence of computation.",next:"Define one bit or continuous state, a physical transition rule, readout, energy budget and falsifiable benchmark.",fails:"No independently readable state or no reproducible controlled transition."},
  {id:"cloud-conscious",title:"An electron cloud by itself is conscious or intentionally chooses outcomes.",status:"Rejected by current evidence",summary:"Quantum probability and state evolution do not establish awareness, desire or agency.",evidence:"No accepted physical theory or reproducible experiment supports the claim.",next:"Do not use this premise in engineering requirements.",fails:"Already contradicted as an evidence-backed engineering statement; a new claim would require extraordinary independent evidence."},
  {id:"material-wallet",title:"Boron oxide alone makes a digital wallet impossible to attack.",status:"Rejected by current evidence",summary:"Wallet security depends on key management, cryptographic protocols, implementation quality, separation and recovery—not a material name.",evidence:"Standard security threat models and real-world wallet failure modes.",next:"Use hardware-backed keys, multisignature rules, transaction simulation and tested recovery.",fails:"Any claim of absolute security or a design that exposes signing secrets to the website."}
];

const statusClasses = {
  "Established":"established",
  "Engineering inference":"inference",
  "Testable hypothesis":"hypothesis",
  "Speculative framework":"speculative",
  "Rejected by current evidence":"rejected"
};

function initMenu() {
  const button = $("#menuButton");
  const nav = $("#siteNav");
  button?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
  $$("a", nav).forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    button?.setAttribute("aria-expanded", "false");
  }));
}

function fitCanvas(canvas) {
  const cssWidth = Math.max(300, canvas.clientWidth);
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const aspect = Number(canvas.getAttribute("height")) / Number(canvas.getAttribute("width"));
  const cssHeight = cssWidth * aspect;
  canvas.width = Math.round(cssWidth * ratio);
  canvas.height = Math.round(cssHeight * ratio);
  const context = canvas.getContext("2d");
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  return {ctx: context, width: cssWidth, height: cssHeight};
}

function initBoronCanvas() {
  const canvas = $("#boronCanvas");
  const slider = $("#ringFraction");
  const output = $("#ringOutput");
  const readout = $("#motifReadout");
  if (!canvas || !slider) return;

  const draw = () => {
    const {ctx, width, height} = fitCanvas(canvas);
    const fraction = Number(slider.value);
    ctx.clearRect(0, 0, width, height);
    const gradient = ctx.createRadialGradient(width * .5, height * .48, 10, width * .5, height * .48, width * .55);
    gradient.addColorStop(0, "rgba(72,217,255,.08)"); gradient.addColorStop(1, "rgba(8,11,22,0)");
    ctx.fillStyle = gradient; ctx.fillRect(0, 0, width, height);

    const ringCount = Math.round(1 + fraction / 19);
    const cols = Math.max(2, Math.ceil(Math.sqrt(ringCount * 1.5)));
    const radius = Math.min(width / (cols * 3.15), height / 5.6, 45);
    const points = [];
    for (let ring = 0; ring < ringCount; ring += 1) {
      const row = Math.floor(ring / cols), col = ring % cols;
      const x = width * .18 + col * (width * .64 / Math.max(1, cols - 1)) + (row % 2 ? radius * .7 : 0);
      const rows = Math.ceil(ringCount / cols);
      const y = height * .26 + row * (height * .48 / Math.max(1, rows - 1));
      for (let i = 0; i < 6; i += 1) {
        const angle = -Math.PI / 2 + i * Math.PI / 3;
        points.push({x:x + Math.cos(angle) * radius,y:y + Math.sin(angle) * radius,type:i % 2 ? "O" : "B",ring});
      }
    }
    ctx.lineWidth = 1.5; ctx.strokeStyle = "rgba(125,150,205,.42)";
    for (let ring = 0; ring < ringCount; ring += 1) {
      const p = points.filter(point => point.ring === ring);
      ctx.beginPath(); p.forEach((point, i) => i ? ctx.lineTo(point.x, point.y) : ctx.moveTo(point.x, point.y)); ctx.closePath(); ctx.stroke();
    }
    const looseCount = Math.max(1, Math.round((100 - fraction) / 12));
    for (let i = 0; i < looseCount; i += 1) {
      const x = width * (.09 + ((i * 37) % 83) / 100);
      const y = height * (.12 + ((i * 53) % 77) / 100);
      points.push({x,y,type:i % 3 === 0 ? "B" : "O",ring:-1});
      if (i) {ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(points[points.length-2].x,points[points.length-2].y);ctx.stroke();}
    }
    points.forEach(point => {
      const boron = point.type === "B";
      ctx.beginPath();ctx.arc(point.x,point.y,boron?10:8,0,Math.PI*2);
      ctx.fillStyle = boron ? "#0c3850" : "#341c52";ctx.fill();
      ctx.strokeStyle = boron ? "#48d9ff" : "#c18aff";ctx.lineWidth = 1;ctx.stroke();
      ctx.fillStyle = "#f4f6ff";ctx.font = "700 8px system-ui";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(point.type,point.x,point.y+.5);
    });
    ctx.fillStyle = "#9ba4bf";ctx.font = "11px system-ui";ctx.textAlign="left";ctx.fillText("illustrative motif population",14,height-14);
    output.value = `${fraction}%`;
    readout.textContent = fraction > 60 ? "Boroxol-rich" : fraction > 30 ? "Mixed motifs" : "Open network";
  };
  slider.addEventListener("input", draw); window.addEventListener("resize", draw); draw();
}

function initCloudCanvas() {
  const canvas = $("#cloudCanvas");
  const center = $("#cloudCenter"), widthControl = $("#cloudWidth"), time = $("#cloudTime"), play = $("#playCloud");
  if (!canvas || !center || !widthControl || !time) return;
  let playing = false, raf = 0, last = 0;
  const outputs = {center:$("#centerOutput"),width:$("#widthOutput"),time:$("#timeOutput")};
  const draw = () => {
    const {ctx, width, height} = fitCanvas(canvas);
    const mu = Number(center.value) / 100 * width;
    const sigma = Number(widthControl.value) / 100 * width * .36;
    const phase = Number(time.value) / 100;
    ctx.clearRect(0,0,width,height);
    const mid = height * .5;
    ctx.strokeStyle="rgba(130,145,185,.22)";ctx.lineWidth=1;
    for(let i=1;i<5;i++){ctx.beginPath();ctx.moveTo(0,i*height/5);ctx.lineTo(width,i*height/5);ctx.stroke();}
    ctx.fillStyle="#8e98b3";ctx.font="11px system-ui";ctx.fillText("probability |ψ|²",12,18);ctx.fillText("wave phase Re[ψ]",12,mid+18);
    const probability=[];const wave=[];
    for(let x=0;x<=width;x+=2){const envelope=Math.exp(-Math.pow(x-mu,2)/(2*sigma*sigma));probability.push([x,mid*.82-envelope*mid*.62]);wave.push([x,mid+height*.25-envelope*Math.cos((x-mu)/Math.max(8,sigma/4)-phase)*height*.18]);}
    const glow=ctx.createLinearGradient(0,0,width,0);glow.addColorStop(0,"rgba(72,217,255,0)");glow.addColorStop(mu/width,"rgba(72,217,255,.42)");glow.addColorStop(1,"rgba(72,217,255,0)");
    ctx.beginPath();ctx.moveTo(0,mid*.82);probability.forEach(p=>ctx.lineTo(p[0],p[1]));ctx.lineTo(width,mid*.82);ctx.closePath();ctx.fillStyle=glow;ctx.fill();
    ctx.beginPath();probability.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.strokeStyle="#48d9ff";ctx.lineWidth=2;ctx.stroke();
    ctx.beginPath();wave.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.strokeStyle="#b783ff";ctx.lineWidth=1.7;ctx.stroke();
    ctx.setLineDash([4,5]);ctx.beginPath();ctx.moveTo(mu,35);ctx.lineTo(mu,height-22);ctx.strokeStyle="rgba(255,255,255,.28)";ctx.stroke();ctx.setLineDash([]);
    outputs.center.value=center.value;outputs.width.value=widthControl.value;outputs.time.value=phase.toFixed(2);
  };
  const animate = timestamp => {if(!playing)return;if(timestamp-last>34){time.value=(Number(time.value)+5)%629;draw();last=timestamp;}raf=requestAnimationFrame(animate);};
  [center,widthControl,time].forEach(control=>control.addEventListener("input",draw));
  play.addEventListener("click",()=>{playing=!playing;play.setAttribute("aria-pressed",String(playing));play.textContent=playing?"Pause time":"Play time";cancelAnimationFrame(raf);if(playing)raf=requestAnimationFrame(animate);});
  window.addEventListener("resize",draw);draw();
}

function renderClaims(claims, filter = "All") {
  const list = $("#claimList");
  if (!list) return;
  const visible = filter === "All" ? claims : claims.filter(claim => claim.status === filter);
  list.innerHTML = visible.map(claim => `<article class="claim" id="claim-${claim.id}"><button type="button" aria-expanded="false"><span class="claim-title"><span class="tag ${statusClasses[claim.status]}">${claim.status}</span><b>${claim.title}</b></span><span class="claim-chevron" aria-hidden="true">＋</span></button><div class="claim-detail"><p>${claim.summary}</p><dl><dt>Evidence</dt><dd>${claim.evidence}</dd><dt>Next test</dt><dd>${claim.next}</dd><dt>Failure line</dt><dd>${claim.fails}</dd></dl></div></article>`).join("");
  $$(".claim button", list).forEach(button => button.addEventListener("click", () => {
    const claim = button.closest(".claim"); const open = claim.classList.toggle("open");button.setAttribute("aria-expanded", String(open));
  }));
}

async function initClaims() {
  let claims = fallbackClaims;
  try {const response = await fetch("data/claims.json");if(response.ok)claims=await response.json();} catch (_) { /* file:// uses the complete local fallback */ }
  renderClaims(claims);
  $$(".chip").forEach(chip => chip.addEventListener("click", () => {
    $$(".chip").forEach(item=>item.classList.remove("active"));chip.classList.add("active");renderClaims(claims,chip.dataset.filter);
  }));
}

function initRobots() {
  const queue = $("#robotQueue"), count = $("#queueCount");
  if (!queue || !count) return;
  const tasks=[];
  const verbs={Watcher:"Scan sources and preserve provenance",Modeler:"Define variables, null model, and predictions",Tester:"Draft controlled low-energy test protocol",Archivist:"Package evidence record and readable report"};
  const render=()=>{count.textContent=`${tasks.length} task${tasks.length===1?"":"s"}`;queue.innerHTML=tasks.length?tasks.map(task=>`<li><b>${task.robot}</b><br>${task.text}</li>`).join(""):'<li class="empty">Choose a robot assignment to build the queue.</li>';};
  $$(".robot-card").forEach(card=>$(".assign-button",card).addEventListener("click",()=>{const robot=card.dataset.robot;tasks.push({robot,text:verbs[robot]});render();card.querySelector(".robot-light").animate([{opacity:.2},{opacity:1}],{duration:500});}));
  $("#clearQueue")?.addEventListener("click",()=>{tasks.length=0;render();});render();
}

function initVault() {
  const button=$("#simulateButton"), box=$("#simulation");
  button?.addEventListener("click",()=>{const open=box.hidden;box.hidden=!open;button.textContent=open?"Close example review":"Review example transfer";if(open)box.innerHTML='<dl><dt>From</dt><dd>Watch-only demo</dd><dt>To</dt><dd>research-lab-01</dd><dt>Amount</dt><dd>12.5000 demo units</dd><dt>Network fee</dt><dd>0.0000</dd><dt>Authority</dt><dd>None — cannot sign</dd></dl><p class="warning">Simulation only. Verify destination, amount, network, and signer on an isolated trusted display.</p>';});
}

initMenu();initBoronCanvas();initCloudCanvas();initClaims();initRobots();initVault();

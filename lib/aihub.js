/* ============================================================
   AI HUB — Hero network canvas (contained, label-free)
   The only remaining imperative canvas; everything else is React.
   ============================================================ */

const isBrowser = typeof window !== 'undefined';
const prefersReduced = () =>
  isBrowser && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Renders a living constellation INSIDE its own square panel — clusters of
 * members / universities / partners / researchers / cities drifting around a
 * central hub. No on-canvas text labels and no full-page watermark, so it can
 * never collide with the headline. Reacts gently to the pointer over the panel.
 * Returns a cleanup function.
 */
export function heroNetwork(canvas) {
  if (!isBrowser || !canvas) return () => {};
  const reduce = prefersReduced();
  const ctx = canvas.getContext('2d');
  const DPR = Math.min(devicePixelRatio || 1, 2);
  let W, H, raf, running = true;
  const pointer = { x: -999, y: -999, active: false };

  const clusters = [
    { n: 13, ang: -0.6, dist: 0.40, spread: 0.10 },
    { n: 9, ang: 0.7, dist: 0.42, spread: 0.09 },
    { n: 10, ang: 1.9, dist: 0.40, spread: 0.09 },
    { n: 8, ang: 3.2, dist: 0.43, spread: 0.08 },
    { n: 6, ang: 4.5, dist: 0.41, spread: 0.08 },
    { n: 7, ang: 5.5, dist: 0.39, spread: 0.085 },
  ];
  let nodes = [], center;

  function build() {
    W = canvas.clientWidth || 1;
    H = canvas.clientHeight || 1;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const R = Math.min(W, H);
    center = { x: W / 2, y: H / 2, r: 7 };
    nodes = [];
    clusters.forEach((c) => {
      const cx = W / 2 + Math.cos(c.ang) * R * c.dist;
      const cy = H / 2 + Math.sin(c.ang) * R * c.dist;
      nodes.push({
        x: cx, y: cy, bx: cx, by: cy, r: 3.4, hub: true,
        phase: Math.random() * 6.28, amp: 5 + Math.random() * 5,
      });
      for (let i = 0; i < c.n; i++) {
        const a = Math.random() * 6.28, rr = Math.random() * R * c.spread;
        const x = cx + Math.cos(a) * rr, y = cy + Math.sin(a) * rr;
        nodes.push({
          x, y, bx: x, by: y, r: Math.random() * 1.7 + 1,
          parent: nodes.length - (i + 1),
          phase: Math.random() * 6.28, amp: 4 + Math.random() * 6,
        });
      }
    });
  }

  let t = 0;
  function frame() {
    if (!running) return;
    t += 0.006;
    ctx.clearRect(0, 0, W, H);

    nodes.forEach((n) => {
      n.x = n.bx + Math.cos(t + n.phase) * n.amp;
      n.y = n.by + Math.sin(t * 0.8 + n.phase) * n.amp;
      if (pointer.active) {
        const dx = pointer.x - n.x, dy = pointer.y - n.y, d = Math.hypot(dx, dy);
        if (d < 130) {
          n.x += (dx / d) * (1 - d / 130) * 7;
          n.y += (dy / d) * (1 - d / 130) * 7;
        }
      }
    });

    // hub -> center, pulsing
    nodes.filter((n) => n.hub).forEach((h, i) => {
      const pulse = 0.1 + Math.abs(Math.sin(t * 1.4 + i)) * 0.22;
      ctx.strokeStyle = `rgba(91,169,214,${pulse})`;
      ctx.lineWidth = 1.1;
      ctx.beginPath(); ctx.moveTo(center.x, center.y); ctx.lineTo(h.x, h.y); ctx.stroke();
    });
    // child -> hub
    nodes.forEach((n) => {
      if (n.parent != null) {
        const p = nodes[n.parent];
        ctx.strokeStyle = 'rgba(120,170,225,0.12)';
        ctx.lineWidth = 0.7;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(n.x, n.y); ctx.stroke();
      }
    });
    // nodes
    nodes.forEach((n) => {
      if (n.hub) {
        ctx.fillStyle = 'rgba(91,169,214,0.95)';
        ctx.shadowColor = 'rgba(91,169,214,0.8)'; ctx.shadowBlur = 11;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 6.2832); ctx.fill();
        ctx.shadowBlur = 0;
      } else {
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 6.2832); ctx.fill();
      }
    });
    // center glow + node
    const g = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, 44);
    g.addColorStop(0, 'rgba(47,111,237,0.5)'); g.addColorStop(1, 'rgba(47,111,237,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(center.x, center.y, 44, 0, 6.2832); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.shadowColor = 'rgba(91,169,214,1)'; ctx.shadowBlur = 16;
    ctx.beginPath(); ctx.arc(center.x, center.y, center.r, 0, 6.2832); ctx.fill();
    ctx.shadowBlur = 0;

    raf = requestAnimationFrame(frame);
  }

  const onMove = (e) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = e.clientX - rect.left;
    pointer.y = e.clientY - rect.top;
    pointer.active = true;
  };
  const onLeave = () => { pointer.active = false; pointer.x = pointer.y = -999; };
  const onVis = () => { running = !document.hidden; if (running) frame(); };

  build();
  addEventListener('resize', build);
  canvas.addEventListener('pointermove', onMove);
  canvas.addEventListener('pointerleave', onLeave);

  if (reduce) {
    running = true; frame(); running = false; cancelAnimationFrame(raf);
  } else {
    running = true; frame();
    document.addEventListener('visibilitychange', onVis);
  }

  return () => {
    running = false;
    cancelAnimationFrame(raf);
    removeEventListener('resize', build);
    canvas.removeEventListener('pointermove', onMove);
    canvas.removeEventListener('pointerleave', onLeave);
    document.removeEventListener('visibilitychange', onVis);
  };
}

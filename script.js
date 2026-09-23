(() => {
  const C = window.MIZU_CONFIG || {};
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  document.documentElement.style.setProperty("--accent", C.themeAccent || "#d9aa42");

  const setText = (sel, text) => { const el = $(sel); if (el && text != null) el.textContent = text; };
  setText("[data-studio]", C.studioName);
  setText("[data-tagline]", C.studioTagline);
  setText("[data-email]", C.email);
  setText("[data-instagram]", C.instagramHandle);
  setText("[data-year]", new Date().getFullYear());

  $$("[data-email-link]").forEach(a => a.href = `mailto:${C.email}`);
  $$("[data-instagram-link]").forEach(a => a.href = C.instagramUrl);

  const mode = document.body.dataset.mode || "serious";
  const hero = mode === "esports" ? C.esports : C.serious;
  setText("[data-hero-label]", hero.label);
  setText("[data-hero-title]", hero.title);
  setText("[data-hero-accent]", hero.accent);
  setText("[data-hero-intro]", hero.intro);

  const portfolio = mode === "esports" ? C.esportsPortfolio : C.portfolio;
  const grid = $("[data-portfolio]");
  if (grid && portfolio) {
    grid.innerHTML = portfolio.map((p, i) => `
      <article class="project reveal ${i === 0 ? "project-featured" : ""}">
        <a class="project-media magnetic-area" href="${p.image}" target="_blank" rel="noopener">
          <img src="${p.image}" alt="${p.title}" loading="${i ? "lazy" : "eager"}">
          <span class="project-index">0${i + 1}</span>
          <span class="project-open">View ↗</span>
        </a>
        <div class="project-info">
          <div><span>${p.category}</span><h3>${p.title}</h3></div>
          <span class="project-arrow">↗</span>
        </div>
      </article>
    `).join("");
  }

  const serviceGrid = $("[data-services]");
  if (serviceGrid && C.services) {
    serviceGrid.innerHTML = C.services.map(([num, title, desc]) => `
      <article class="service-row reveal">
        <span class="mono">${num}</span>
        <div><h3>${title}</h3><p>${desc}</p></div>
        <span class="service-arrow">↗</span>
      </article>
    `).join("");
  }

  // Header state.
  const header = $(".site-header");
  const onScroll = () => header?.classList.toggle("is-scrolled", scrollY > 24);
  addEventListener("scroll", onScroll, {passive:true}); onScroll();

  // Scroll reveal.
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); observer.unobserve(e.target); }});
  }, {threshold: .12});
  $$(".reveal").forEach(el => observer.observe(el));

  // Cursor.
  const cursor = $(".cursor");
  const cursorDot = $(".cursor-dot");
  if (cursor && matchMedia("(pointer:fine)").matches) {
    let mx = innerWidth/2, my = innerHeight/2, cx = mx, cy = my;
    addEventListener("pointermove", e => { mx=e.clientX; my=e.clientY; cursorDot.style.transform=`translate3d(${mx}px,${my}px,0)`; });
    const tick = () => { cx += (mx-cx)*.16; cy += (my-cy)*.16; cursor.style.transform=`translate3d(${cx}px,${cy}px,0)`; requestAnimationFrame(tick); };
    tick();
    $$("a, button, .project-media").forEach(el => {
      el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    });
  } else {
    cursor?.remove(); cursorDot?.remove();
  }

  // Magnetic buttons.
  if (matchMedia("(pointer:fine)").matches) {
    $$(".magnetic").forEach(el => {
      el.addEventListener("pointermove", e => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.10}px, ${(e.clientY-r.top-r.height/2)*.10}px)`;
      });
      el.addEventListener("pointerleave", () => el.style.transform = "");
    });
  }

  // Subtle 3D tilt on project media.
  if (matchMedia("(pointer:fine)").matches) {
    $$(".project-media").forEach(el => {
      el.addEventListener("pointermove", e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
        el.style.transform=`perspective(900px) rotateX(${y*-3}deg) rotateY(${x*3}deg)`;
      });
      el.addEventListener("pointerleave", () => el.style.transform="");
    });
  }

  // Canvas particles / ambient motion.
  const canvas = $("#ambient");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let w, h, dpr, particles=[];
    const resize = () => {
      dpr = Math.min(devicePixelRatio || 1, 2); w=innerWidth; h=innerHeight;
      canvas.width=w*dpr; canvas.height=h*dpr; canvas.style.width=w+"px"; canvas.style.height=h+"px";
      ctx.setTransform(dpr,0,0,dpr,0,0);
      const count = Math.min(75, Math.floor(w/18));
      particles = Array.from({length:count},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.2+.2,vx:(Math.random()-.5)*.12,vy:(Math.random()-.5)*.12,a:Math.random()*.45+.08}));
    };
    resize(); addEventListener("resize", resize);
    const draw=()=>{
      ctx.clearRect(0,0,w,h);
      for(const p of particles){p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=w;if(p.x>w)p.x=0;if(p.y<0)p.y=h;if(p.y>h)p.y=0;
        ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(230,194,104,${p.a})`;ctx.fill();
      }
      requestAnimationFrame(draw);
    }; draw();
  }

  // Current year.
  setText("[data-year]", new Date().getFullYear());
})();

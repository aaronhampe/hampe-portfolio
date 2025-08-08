(() => {
  // Ensure <iconify-icon> web component exists (loads once if missing)
  function ensureIconifyWC() {
    if (window.customElements && customElements.get('iconify-icon')) return;
    if (!document.querySelector('script[data-iconify-wc]')) {
      const s = document.createElement('script');
      s.src = 'WooCom';
      s.defer = true;
      s.setAttribute('data-iconify-wc', '');
      document.head.appendChild(s);
    }
  }
  ensureIconifyWC();

  const MAP = {
    react:       { cls: 'tech-react',       icon: 'simple-icons:react',       rgb: [97,218,251] },
    'reactjs':   { cls: 'tech-react',       icon: 'simple-icons:react',       rgb: [97,218,251] },
    'react.js':  { cls: 'tech-react',       icon: 'simple-icons:react',       rgb: [97,218,251] },

    nextjs:      { cls: 'tech-nextjs',      icon: 'simple-icons:nextdotjs',   rgb: [0,0,0] },
    'next.js':   { cls: 'tech-nextjs',      icon: 'simple-icons:nextdotjs',   rgb: [0,0,0] },

    woocommerce: { cls: 'tech-woocommerce', icon: 'devicon:woocommerce', rgb: [150,88,138] },
    wordpress:   { cls: 'tech-wordpress',   icon: 'simple-icons:wordpress',   rgb: [0,115,170] },

    typescript:  { cls: 'tech-typescript',  icon: 'simple-icons:typescript',  rgb: [49,120,198] },
    javascript:  { cls: 'tech-javascript',  icon: 'simple-icons:javascript',  rgb: [247,223,30] },
    node:        { cls: 'tech-node',        icon: 'simple-icons:nodedotjs',   rgb: [51,153,51] },
    'nodejs':    { cls: 'tech-node',        icon: 'simple-icons:nodedotjs',   rgb: [51,153,51] },
    'node.js':   { cls: 'tech-node',        icon: 'simple-icons:nodedotjs',   rgb: [51,153,51] },

    tailwind:    { cls: 'tech-tailwind',    icon: 'simple-icons:tailwindcss', rgb: [56,189,248] },
    sass:        { cls: 'tech-sass',        icon: 'simple-icons:sass',        rgb: [204,102,153] },
    css:         { cls: 'tech-css3',        icon: 'simple-icons:css3',        rgb: [38,77,228] },
    css3:        { cls: 'tech-css3',        icon: 'simple-icons:css3',        rgb: [38,77,228] },
    html:        { cls: 'tech-html5',       icon: 'simple-icons:html5',       rgb: [227,79,38] },
    html5:       { cls: 'tech-html5',       icon: 'simple-icons:html5',       rgb: [227,79,38] },

    php:         { cls: 'tech-php',         icon: 'simple-icons:php',         rgb: [119,123,179] },
    mysql:       { cls: 'tech-mysql',       icon: 'simple-icons:mysql',       rgb: [68,121,161] },

    firebase:    { cls: 'tech-firebase',    icon: 'simple-icons:firebase',    rgb: [255,202,40] },
    vite:        { cls: 'tech-vite',        icon: 'simple-icons:vite',        rgb: [100,108,255] },
    astro:       { cls: 'tech-astro',       icon: 'simple-icons:astro',       rgb: [255,93,1] },
    'threejs':   { cls: 'tech-threejs',     icon: 'simple-icons:threedotjs',  rgb: [0,0,0] },
    'three.js':  { cls: 'tech-threejs',     icon: 'simple-icons:threedotjs',  rgb: [0,0,0] },
    graphql:     { cls: 'tech-graphql',     icon: 'simple-icons:graphql',     rgb: [225,0,152] },
    docker:      { cls: 'tech-docker',      icon: 'simple-icons:docker',      rgb: [36,150,237] },
    python:      { cls: 'tech-python',      icon: 'simple-icons:python',      rgb: [55,118,171] },
  };

  const norm = (s) => (s || '')
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '')
    .replace(/(\.js|\.)$/g, '')
    .replace(/[^\w]+/g, '');

  function enhance(el) {
    if (el.dataset.badgeEnhanced === '1') return;

    // Resolve tech label
    const raw = el.dataset.tech || el.textContent || '';
    const key = (() => {
      const n = norm(raw);
      if (MAP[n]) return n;
      // common alias passes
      const stripped = n.replace(/(js|dotjs)$/g, '');
      if (MAP[stripped]) return stripped;
      return n;
    })();

    // Ensure base class
    el.classList.add('tech-badge');

    // Apply mapping if known
    const conf = MAP[key];
    if (conf) {
      el.classList.add(conf.cls);
      // Inline override helps even without the preset class
      el.style.setProperty('--accent-rgb', conf.rgb.join(','));
      // Inject icon if not present
      if (!el.querySelector('iconify-icon') && !el.querySelector('.iconify')) {
        const icon = document.createElement('iconify-icon');
        icon.setAttribute('icon', conf.icon);
        // color follows --accent-rgb in CSS
        el.insertBefore(icon, el.firstChild);
      }
    } else {
      // Optional: generic code icon for unknown techs
      if (!el.querySelector('iconify-icon') && !el.querySelector('.iconify')) {
        const icon = document.createElement('iconify-icon');
        icon.setAttribute('icon', 'ph:code-bold');
        el.insertBefore(icon, el.firstChild);
      }
    }

    el.dataset.badgeEnhanced = '1';
  }

  function run() {
    // Enhance elements explicitly marked or already styled as badges
    document.querySelectorAll('[data-tech], .tech-badge').forEach(enhance);

    // Heuristic: tech lists (if you have <ul class="tech-list"><li>React</li>…)
    document.querySelectorAll('.tech-list li').forEach(enhance);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }
})();

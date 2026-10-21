import React, { useEffect, useRef } from 'react';

interface AdsterraBannerProps {
  className?: string;
}

// Original Adsterra Code - completely unchanged configuration and script source
const ADSTERRA_IFRAME_HTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=300, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 300px; height: 250px; overflow: hidden; background: transparent; display: flex; align-items: center; justify-content: center; }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key' : 'bf330e8059cd6b2bd325fc2fe6d3a379',
      'format' : 'iframe',
      'height' : 250,
      'width' : 300,
      'params' : {}
    };
  </script>
  <script type="text/javascript" src="https://bauval.org/22/bf330e8059cd6b2bd325fc2fe6d3a379"></script>
</body>
</html>`;

/**
 * Adsterra 300x250 Banner Ad Component
 *
 * Integrates Adsterra 300x250 iframe banner within an isolated sandbox.
 * - Prevents global scope pollution of atOptions
 * - Avoids React document.write runtime errors
 * - Prevents duplicate ad executions on re-renders
 * - Zero horizontal overflow on mobile screens (max-w-full, centered 300x250)
 * - Includes a clear 'Advertisement' label
 */
export const AdsterraBanner300x250: React.FC<AdsterraBannerProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Reset container to avoid duplication on component re-render
    container.innerHTML = '';

    const iframe = document.createElement('iframe');
    iframe.width = '300';
    iframe.height = '250';
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.scrolling = 'no';
    iframe.title = 'Advertisement';
    iframe.setAttribute('loading', 'lazy');

    // Populate iframe in its isolated context
    iframe.srcdoc = ADSTERRA_IFRAME_HTML;

    container.appendChild(iframe);

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <aside
      aria-label="Advertisement Banner"
      className={`w-full flex flex-col items-center justify-center my-6 clear-both ${className}`}
    >
      <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1.5 flex items-center gap-1 select-none">
        <span>Advertisement</span>
      </div>
      <div className="w-[300px] h-[250px] max-w-full bg-slate-50/70 border border-slate-200/80 rounded-2xl shadow-xs overflow-hidden flex items-center justify-center relative">
        <div ref={containerRef} className="w-[300px] h-[250px] flex items-center justify-center">
          {/* Static SSR fallback for pre-rendered pages */}
          <iframe
            srcDoc={ADSTERRA_IFRAME_HTML}
            width="300"
            height="250"
            title="Advertisement"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            loading="lazy"
          />
        </div>
      </div>
    </aside>
  );
};

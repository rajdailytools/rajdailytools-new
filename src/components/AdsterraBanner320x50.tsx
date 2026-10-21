import React, { useEffect, useRef } from 'react';

interface AdsterraBannerProps {
  className?: string;
}

// Original Adsterra 320x50 Code - completely unchanged configuration and script source
const ADSTERRA_320X50_HTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=320, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 320px; height: 50px; overflow: hidden; background: transparent; display: flex; align-items: center; justify-content: center; }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key' : 'baec23f87b0672b01555de5191f61bff',
      'format' : 'iframe',
      'height' : 50,
      'width' : 320,
      'params' : {}
    };
  </script>
  <script type="text/javascript" src="https://bauval.org/22/baec23f87b0672b01555de5191f61bff"></script>
</body>
</html>`;

/**
 * Adsterra 320x50 Leaderboard/Mobile Banner Ad Component
 *
 * Integrates Adsterra 320x50 iframe banner within an isolated sandbox.
 * - Prevents global scope pollution of atOptions (isolated from 300x250 unit)
 * - Avoids React document.write runtime errors
 * - Prevents duplicate ad executions on re-renders
 * - Zero horizontal overflow on mobile screens (max-w-full, centered 320x50)
 * - Includes a clear 'Advertisement' label
 */
export const AdsterraBanner320x50: React.FC<AdsterraBannerProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || loadedRef.current) return;

    // Check if an iframe is already present (e.g. from initial render or SSR)
    const existingIframe = container.querySelector('iframe');
    if (existingIframe) {
      loadedRef.current = true;
      return;
    }

    const iframe = document.createElement('iframe');
    iframe.width = '320';
    iframe.height = '50';
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.scrolling = 'no';
    iframe.title = 'Advertisement';
    iframe.setAttribute('loading', 'lazy');

    // Populate iframe in its isolated context
    iframe.srcdoc = ADSTERRA_320X50_HTML;

    container.appendChild(iframe);
    loadedRef.current = true;

    return () => {
      if (container) {
        container.innerHTML = '';
      }
      loadedRef.current = false;
    };
  }, []);

  return (
    <aside
      aria-label="Advertisement Banner"
      className={`w-full flex flex-col items-center justify-center my-4 clear-both ${className}`}
    >
      <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1 flex items-center gap-1 select-none">
        <span>Advertisement</span>
      </div>
      <div className="w-[320px] h-[50px] max-w-full bg-slate-50/70 border border-slate-200/80 rounded-xl shadow-xs overflow-hidden flex items-center justify-center relative">
        <div ref={containerRef} className="w-[320px] h-[50px] flex items-center justify-center">
          {/* Static SSR fallback for pre-rendered pages */}
          <iframe
            srcDoc={ADSTERRA_320X50_HTML}
            width="320"
            height="50"
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

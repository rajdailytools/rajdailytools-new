import React, { useEffect, useRef } from 'react';

interface AdsterraBannerProps {
  className?: string;
}

// Original Adsterra 728x90 Leaderboard Code - completely unchanged configuration and script source
const ADSTERRA_728X90_HTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=728, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 728px; height: 90px; overflow: hidden; background: transparent; display: flex; align-items: center; justify-content: center; }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key' : '9552bce9c0db7487409fd9a0edb01234',
      'format' : 'iframe',
      'height' : 90,
      'width' : 728,
      'params' : {}
    };
  </script>
  <script type="text/javascript" src="https://bauval.org/22/9552bce9c0db7487409fd9a0edb01234"></script>
</body>
</html>`;

/**
 * Adsterra 728x90 Desktop Leaderboard Banner Ad Component
 *
 * Integrates Adsterra 728x90 iframe banner within an isolated sandbox.
 * - Prevents global scope pollution of atOptions (isolated from 300x250 and 320x50 units)
 * - Avoids React document.write runtime errors
 * - Prevents duplicate ad executions on re-renders
 * - Responsive: Hidden on small mobile screens (< 768px) to prevent 728px horizontal overflow,
 *   displayed centered on tablets and desktop viewports with sufficient width.
 * - Includes a clear 'Advertisement' label
 */
export const AdsterraBanner728x90: React.FC<AdsterraBannerProps> = ({ className = '' }) => {
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
    iframe.width = '728';
    iframe.height = '90';
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.scrolling = 'no';
    iframe.title = 'Advertisement';
    iframe.setAttribute('loading', 'lazy');

    // Populate iframe in its isolated context
    iframe.srcdoc = ADSTERRA_728X90_HTML;

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
      aria-label="Advertisement Leaderboard"
      className={`hidden md:flex flex-col items-center justify-center my-6 clear-both ${className}`}
    >
      <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1.5 flex items-center gap-1 select-none">
        <span>Advertisement</span>
      </div>
      <div className="w-[728px] h-[90px] max-w-full bg-slate-50/70 border border-slate-200/80 rounded-2xl shadow-xs overflow-hidden flex items-center justify-center relative">
        <div ref={containerRef} className="w-[728px] h-[90px] flex items-center justify-center">
          {/* Static SSR fallback for pre-rendered pages */}
          <iframe
            srcDoc={ADSTERRA_728X90_HTML}
            width="728"
            height="90"
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

import React, { useEffect, useRef } from 'react';

interface AdsterraNativeBannerProps {
  className?: string;
}

// Original Adsterra Native Banner Code - completely unchanged container ID and script source
const NATIVE_CONTAINER_ID = 'container-67a97b2832b06276ac45a539fd3155f1';
const NATIVE_SCRIPT_URL = 'https://bauval.org/21/67a97b2832b06276ac45a539fd3155f1';

/**
 * Adsterra Native Banner Ad Component
 *
 * Integrates Adsterra Native responsive banner:
 * - Uses exact container ID: container-67a97b2832b06276ac45a539fd3155f1
 * - Uses exact script URL: https://bauval.org/21/67a97b2832b06276ac45a539fd3155f1
 * - Attributes async="async" and data-cfasync="false" preserved
 * - Reusable across pages with single-instance enforcement per page view
 * - Fully responsive native layout (adapts to container width)
 * - Clear 'Advertisement' label
 * - Safe for React SPA re-renders and static HTML generation
 */
export const AdsterraNativeBanner: React.FC<AdsterraNativeBannerProps> = ({ className = '' }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const injectedRef = useRef<boolean>(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || injectedRef.current) return;

    // Verify container with exact required ID exists
    let container = wrapper.querySelector<HTMLDivElement>(`#${NATIVE_CONTAINER_ID}`);
    if (!container) {
      container = document.createElement('div');
      container.id = NATIVE_CONTAINER_ID;
      container.className = 'w-full';
      wrapper.appendChild(container);
    }

    // Append script if not already present in this wrapper
    const existingScript = wrapper.querySelector(`script[src="${NATIVE_SCRIPT_URL}"]`);
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = NATIVE_SCRIPT_URL;
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      wrapper.appendChild(script);
    }

    injectedRef.current = true;

    return () => {
      injectedRef.current = false;
      if (wrapper) {
        wrapper.innerHTML = '';
      }
    };
  }, []);

  return (
    <aside
      aria-label="Sponsored Recommendations"
      className={`w-full max-w-6xl mx-auto my-8 clear-both ${className}`}
    >
      <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 flex items-center justify-center gap-1 select-none">
        <span>Advertisement</span>
      </div>
      <div
        ref={wrapperRef}
        className="w-full min-h-[90px] bg-slate-50/60 border border-slate-200/80 rounded-2xl p-4 sm:p-6 transition-all overflow-hidden flex flex-col items-center justify-center"
      >
        {/* Exact original Adsterra Native container & script for static SSR & hydration */}
        <div id={NATIVE_CONTAINER_ID} className="w-full"></div>
        <script async data-cfasync="false" src={NATIVE_SCRIPT_URL}></script>
      </div>
    </aside>
  );
};

/**
 * RajDailyTools – Client-Side Interactivity Script
 * Provides mobile menu toggling, instant universal search, category filtering,
 * age & eligibility calculators, FAQ accordions, and share/print functionality.
 */

(function () {
  // --- 1. Mobile Menu Drawer ---
  function initMobileDrawer() {
    const openBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-mobile-drawer');
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('mobile-drawer-backdrop');

    if (!drawer) return;

    function openDrawer() {
      drawer.classList.remove('translate-x-full');
      if (backdrop) backdrop.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.add('translate-x-full');
      if (backdrop) backdrop.classList.add('hidden');
      document.body.style.overflow = '';
    }

    if (openBtn) openBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);
  }

  // --- 2. Live Global Search ---
  function initGlobalSearch() {
    const input = document.getElementById('global-search-input');
    const dropdown = document.getElementById('search-dropdown');
    const resultsContainer = document.getElementById('search-results-list');
    if (!input || !dropdown || !resultsContainer) return;

    const examsIndex = window.RAJ_EXAMS_SEARCH_INDEX || [];
    const relPrefix = window.RAJ_REL_PREFIX || './';

    input.addEventListener('input', function (e) {
      const q = e.target.value.trim().toLowerCase();
      if (q.length < 2) {
        dropdown.classList.add('hidden');
        return;
      }

      const matches = examsIndex.filter(function (item) {
        return (
          item.name.toLowerCase().includes(q) ||
          item.org.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        );
      }).slice(0, 8);

      if (matches.length === 0) {
        resultsContainer.innerHTML =
          '<div class="p-4 text-center text-xs text-slate-500 font-medium">No recruitments found matching "' +
          escapeHtml(q) +
          '"</div>';
        dropdown.classList.remove('hidden');
        return;
      }

      let html = '';
      matches.forEach(function (item) {
        const itemUrl = relPrefix + item.url;
        html +=
          '<a href="' +
          itemUrl +
          '" class="flex items-center justify-between p-3 hover:bg-blue-50/80 transition-colors border-b border-slate-100 last:border-0 group">' +
          '  <div class="flex items-center gap-3">' +
          '    <div class="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">' +
          (item.icon || '📋') +
          '    </div>' +
          '    <div>' +
          '      <div class="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">' +
          escapeHtml(item.name) +
          '      </div>' +
          '      <div class="text-[11px] text-slate-500">' +
          escapeHtml(item.org) +
          ' • <span class="font-semibold text-blue-700">' +
          escapeHtml(item.vac) +
          '</span></div>' +
          '    </div>' +
          '  </div>' +
          '  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 shrink-0 ml-2">' +
          escapeHtml(item.category) +
          '</span>' +
          '</a>';
      });

      resultsContainer.innerHTML = html;
      dropdown.classList.remove('hidden');
    });

    // Close on click outside
    document.addEventListener('click', function (e) {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dropdown.classList.add('hidden');
      }
    });
  }

  // --- 3. Category Page Filter & Search ---
  function initCategoryFilters() {
    const filterButtons = document.querySelectorAll('[data-category-filter]');
    const searchInput = document.querySelector('[data-page-search]');
    const items = document.querySelectorAll('[data-exam-item]');
    if (items.length === 0) return;

    let activeCat = 'All';
    let searchQuery = '';

    function applyFilter() {
      let visibleCount = 0;
      items.forEach(function (item) {
        const itemCat = item.getAttribute('data-category') || '';
        const itemText = (item.getAttribute('data-search-text') || item.textContent || '').toLowerCase();

        const catMatches = activeCat === 'All' || itemCat.toLowerCase() === activeCat.toLowerCase();
        const searchMatches = !searchQuery || itemText.includes(searchQuery);

        if (catMatches && searchMatches) {
          item.style.display = '';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });

      const noResultMsg = document.getElementById('no-filter-results');
      if (noResultMsg) {
        if (visibleCount === 0) {
          noResultMsg.classList.remove('hidden');
        } else {
          noResultMsg.classList.add('hidden');
        }
      }
    }

    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterButtons.forEach(function (b) {
          b.classList.remove('bg-blue-600', 'text-white');
          b.classList.add('bg-white', 'text-slate-700');
        });
        btn.classList.add('bg-blue-600', 'text-white');
        btn.classList.remove('bg-white', 'text-slate-700');

        activeCat = btn.getAttribute('data-category-filter') || 'All';
        applyFilter();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        searchQuery = e.target.value.trim().toLowerCase();
        applyFilter();
      });
    }
  }

  // --- 4. Interactive Accordions / FAQs ---
  function initAccordions() {
    const toggles = document.querySelectorAll('[data-accordion-toggle]');
    toggles.forEach(function (toggle) {
      toggle.addEventListener('click', function () {
        const targetId = toggle.getAttribute('data-accordion-toggle');
        const body = document.getElementById(targetId);
        const icon = toggle.querySelector('[data-accordion-icon]');

        if (!body) return;

        const isClosed =
          body.classList.contains('hidden') ||
          body.classList.contains('max-h-0') ||
          body.classList.contains('opacity-0');

        if (isClosed) {
          body.classList.remove('hidden', 'max-h-0', 'opacity-0', 'pointer-events-none');
          body.classList.add('max-h-[12000px]', 'opacity-100');
          toggle.setAttribute('aria-expanded', 'true');
          if (icon) {
            icon.classList.add('rotate-180', 'bg-blue-100', 'text-blue-700');
            icon.classList.remove('bg-slate-100', 'text-slate-400');
          }
        } else {
          body.classList.add('max-h-0', 'opacity-0', 'pointer-events-none');
          body.classList.remove('max-h-[12000px]', 'opacity-100');
          toggle.setAttribute('aria-expanded', 'false');
          if (icon) {
            icon.classList.remove('rotate-180', 'bg-blue-100', 'text-blue-700');
            icon.classList.add('bg-slate-100', 'text-slate-400');
          }
        }
      });
    });

    // Expand All / Collapse All support
    document.querySelectorAll('[data-accordion-action="expand-all"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const container = btn.closest('.accordion-container') || document;
        const bodies = container.querySelectorAll('[id^="accordion-content-"]');
        const toggles = container.querySelectorAll('[data-accordion-toggle]');
        bodies.forEach(function (b) {
          b.classList.remove('hidden', 'max-h-0', 'opacity-0', 'pointer-events-none');
          b.classList.add('max-h-[12000px]', 'opacity-100');
        });
        toggles.forEach(function (t) {
          t.setAttribute('aria-expanded', 'true');
          const icon = t.querySelector('[data-accordion-icon]');
          if (icon) {
            icon.classList.add('rotate-180', 'bg-blue-100', 'text-blue-700');
            icon.classList.remove('bg-slate-100', 'text-slate-400');
          }
        });
      });
    });

    document.querySelectorAll('[data-accordion-action="collapse-all"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const container = btn.closest('.accordion-container') || document;
        const bodies = container.querySelectorAll('[id^="accordion-content-"]');
        const toggles = container.querySelectorAll('[data-accordion-toggle]');
        bodies.forEach(function (b) {
          b.classList.add('max-h-0', 'opacity-0', 'pointer-events-none');
          b.classList.remove('max-h-[12000px]', 'opacity-100');
        });
        toggles.forEach(function (t) {
          t.setAttribute('aria-expanded', 'false');
          const icon = t.querySelector('[data-accordion-icon]');
          if (icon) {
            icon.classList.remove('rotate-180', 'bg-blue-100', 'text-blue-700');
            icon.classList.add('bg-slate-100', 'text-slate-400');
          }
        });
      });
    });
  }

  // --- 5. Age Calculator Tool ---
  function initAgeCalculator() {
    const dobInput = document.getElementById('calc-dob');
    const cutoffInput = document.getElementById('calc-cutoff');
    const calcBtn = document.getElementById('calc-age-btn');
    const resultBox = document.getElementById('calc-age-result');
    if (!calcBtn || !dobInput || !resultBox) return;

    calcBtn.addEventListener('click', function () {
      const dobVal = dobInput.value;
      const cutoffVal = (cutoffInput && cutoffInput.value) || '2026-08-01';

      if (!dobVal) {
        alert('Please enter your Date of Birth.');
        return;
      }

      const birthDate = new Date(dobVal);
      const refDate = new Date(cutoffVal);

      if (birthDate > refDate) {
        alert('Date of Birth cannot be after the Cut-Off Date.');
        return;
      }

      let years = refDate.getFullYear() - birthDate.getFullYear();
      let months = refDate.getMonth() - birthDate.getMonth();
      let days = refDate.getDate() - birthDate.getDate();

      if (days < 0) {
        months--;
        const prevMonthDays = new Date(refDate.getFullYear(), refDate.getMonth(), 0).getDate();
        days += prevMonthDays;
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      const minAge = parseInt(calcBtn.getAttribute('data-min-age') || '18', 10);
      const maxAge = parseInt(calcBtn.getAttribute('data-max-age') || '30', 10);

      const isEligible = years >= minAge && (years < maxAge || (years === maxAge && months === 0 && days === 0));

      resultBox.innerHTML =
        '<div class="p-4 rounded-xl border ' +
        (isEligible ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900') +
        '">' +
        '  <div class="flex items-center justify-between">' +
        '    <div>' +
        '      <div class="text-xs font-bold uppercase tracking-wider">Calculated Age on ' +
        cutoffVal +
        '</div>' +
        '      <div class="text-xl font-extrabold font-display mt-0.5">' +
        years +
        ' Years, ' +
        months +
        ' Months, ' +
        days +
        ' Days' +
        '      </div>' +
        '    </div>' +
        '    <span class="px-3 py-1 text-xs font-bold rounded-full ' +
        (isEligible ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white') +
        '">' +
        (isEligible ? 'Eligible Age' : 'Age Criteria Not Met') +
        '    </span>' +
        '  </div>' +
        '  <div class="text-xs mt-2 text-slate-600">Prescribed Age Bracket: <strong>' +
        minAge +
        ' to ' +
        maxAge +
        ' Years</strong></div>' +
        '</div>';
      resultBox.classList.remove('hidden');
    });
  }

  // --- 6. Share & Print Handlers ---
  function initSharePrint() {
    const printBtns = document.querySelectorAll('[data-action="print"]');
    printBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        window.print();
      });
    });

    const shareBtns = document.querySelectorAll('[data-action="share"]');
    shareBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const title = document.title || 'RajDailyTools Government Exam Portal';
        const url = window.location.href;

        if (navigator.share) {
          navigator.share({ title: title, url: url }).catch(function () {});
        } else if (navigator.clipboard) {
          navigator.clipboard.writeText(url).then(function () {
            showToast('Link copied to clipboard!');
          });
        } else {
          showToast('URL: ' + url);
        }
      });
    });
  }

  function showToast(msg) {
    let toast = document.getElementById('raj-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'raj-toast';
      toast.className =
        'fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl transition-all duration-300 transform translate-y-2 opacity-0 pointer-events-none';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.remove('translate-y-2', 'opacity-0');
    setTimeout(function () {
      toast.classList.add('translate-y-2', 'opacity-0');
    }, 2500);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Run initializations on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  function initAll() {
    initMobileDrawer();
    initGlobalSearch();
    initCategoryFilters();
    initAccordions();
    initAgeCalculator();
    initSharePrint();
  }
})();

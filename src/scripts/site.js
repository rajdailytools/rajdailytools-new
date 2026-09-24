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

    // Ensure drawer is initialized as closed on fresh load
    drawer.style.transform = 'translateX(100%)';
    drawer.style.display = 'none';
    drawer.style.visibility = 'hidden';
    drawer.style.pointerEvents = 'none';
    drawer.classList.add('translate-x-full', 'hidden', 'invisible', 'pointer-events-none');
    drawer.classList.remove('translate-x-0');

    if (backdrop) {
      backdrop.style.display = 'none';
      backdrop.style.pointerEvents = 'none';
      backdrop.classList.add('hidden', 'pointer-events-none');
    }

    function openDrawer(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      drawer.style.zIndex = '60';
      drawer.style.display = 'flex';
      drawer.style.visibility = 'visible';
      drawer.style.pointerEvents = 'auto';
      drawer.classList.remove('translate-x-full', 'hidden', 'invisible', 'pointer-events-none');
      drawer.classList.add('translate-x-0');

      requestAnimationFrame(function () {
        drawer.style.transform = 'translateX(0)';
      });

      if (backdrop) {
        backdrop.style.zIndex = '50';
        backdrop.style.display = 'block';
        backdrop.style.pointerEvents = 'auto';
        backdrop.classList.remove('hidden', 'pointer-events-none');
      }
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      drawer.style.transform = 'translateX(100%)';
      drawer.style.pointerEvents = 'none';
      drawer.classList.add('translate-x-full');
      drawer.classList.remove('translate-x-0');

      if (backdrop) {
        backdrop.style.display = 'none';
        backdrop.style.pointerEvents = 'none';
        backdrop.classList.add('hidden', 'pointer-events-none');
      }
      document.body.style.overflow = '';

      setTimeout(function () {
        if (drawer.classList.contains('translate-x-full')) {
          drawer.style.display = 'none';
          drawer.style.visibility = 'hidden';
          drawer.classList.add('hidden', 'invisible', 'pointer-events-none');
        }
      }, 300);
    }

    if (openBtn) openBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    // Prevent clicks inside drawer from closing it
    drawer.addEventListener('click', function (e) {
      e.stopPropagation();
    });

    // Close on navigation click inside drawer
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeDrawer();
      });
    });

    // Escape key closes drawer
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeDrawer();
      }
    });
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
          item.category.toLowerCase().includes(q) ||
          (item.keywords && item.keywords.some(function (k) { return k.toLowerCase().includes(q); }))
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

  // --- 7. Live Universal Countdown Engine ---
  function initLiveCountdowns() {
    function parseTarget(targetStr) {
      if (!targetStr) return NaN;
      var str = targetStr.trim();
      if (str.indexOf('+') !== -1 || str.endsWith('Z') || /T\d{2}:\d{2}:\d{2}[-+]\d{2}/.test(str)) {
        var p = new Date(str).getTime();
        if (!isNaN(p)) return p;
      }
      if (/^\d{4}-\d{2}-\d{2}$/.test(str)) {
        return new Date(str + 'T23:59:59+05:30').getTime();
      }
      if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?$/.test(str)) {
        var full = str.length === 16 ? str + ':00' : str;
        return new Date(full + '+05:30').getTime();
      }
      return new Date(str).getTime();
    }

    function tick() {
      var now = Date.now();

      // 1. Live Countdown Widgets
      var countdownWidgets = document.querySelectorAll('[data-live-countdown="true"]');
      countdownWidgets.forEach(function (widget) {
        var targetStr = widget.getAttribute('data-target-date');
        var targetMs = parseTarget(targetStr);
        if (isNaN(targetMs)) return;

        var diffMs = targetMs - now;
        var passedBox = widget.querySelector('[data-countdown-passed="true"]');
        var liveBox = widget.querySelector('[data-countdown-live="true"]');

        if (diffMs <= 0) {
          if (passedBox) {
            passedBox.classList.remove('hidden');
            passedBox.classList.add('block');
          }
          if (liveBox) {
            liveBox.classList.add('hidden');
            liveBox.classList.remove('grid');
          }
          return;
        }

        // Active state: ensure live grid is shown and passed box hidden
        if (passedBox) {
          passedBox.classList.add('hidden');
          passedBox.classList.remove('block');
        }
        if (liveBox) {
          liveBox.classList.remove('hidden');
          liveBox.classList.add('grid');
        }

        var totalSecs = Math.floor(diffMs / 1000);
        var seconds = totalSecs % 60;
        var totalMins = Math.floor(totalSecs / 60);
        var minutes = totalMins % 60;
        var totalHours = Math.floor(totalMins / 60);
        var hours = totalHours % 24;
        var days = Math.floor(totalHours / 24);

        var daysEl = widget.querySelector('[data-countdown-days="true"]');
        var hoursEl = widget.querySelector('[data-countdown-hours="true"]');
        var minsEl = widget.querySelector('[data-countdown-minutes="true"]');
        var secsEl = widget.querySelector('[data-countdown-seconds="true"]');

        if (daysEl) daysEl.textContent = String(Math.max(0, days));
        if (hoursEl) hoursEl.textContent = (hours < 10 ? '0' : '') + Math.max(0, hours);
        if (minsEl) minsEl.textContent = (minutes < 10 ? '0' : '') + Math.max(0, minutes);
        if (secsEl) secsEl.textContent = (seconds < 10 ? '0' : '') + Math.max(0, seconds);
      });

      // 2. Top "Days Left" / Status Badges
      var badgeEls = document.querySelectorAll('[data-countdown-badge="true"]');
      badgeEls.forEach(function (badge) {
        var targetStr = badge.getAttribute('data-target-date');
        var badgeType = badge.getAttribute('data-badge-type') || 'deadline';
        var targetMs = parseTarget(targetStr);
        if (isNaN(targetMs)) return;

        var diffMs = targetMs - now;

        if (diffMs <= 0) {
          badge.textContent = badgeType === 'deadline' ? 'Application Closed' : 'Exam Commenced / Completed';
          badge.className = 'text-xs font-bold px-3 py-0.5 rounded-full bg-slate-100 text-slate-600 transition-colors';
          return;
        }

        var totalSecs = Math.floor(diffMs / 1000);
        var seconds = totalSecs % 60;
        var totalMins = Math.floor(totalSecs / 60);
        var minutes = totalMins % 60;
        var totalHours = Math.floor(totalMins / 60);
        var hours = totalHours % 24;
        var days = Math.floor(totalHours / 24);

        var isUrgent = days <= 3;
        badge.className = 'text-xs font-bold px-3 py-0.5 rounded-full transition-colors ' +
          (isUrgent ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200');

        if (badgeType === 'deadline') {
          if (days === 0) {
            badge.textContent = 'Ends Today (' + hours + 'h ' + minutes + 'm ' + seconds + 's left)';
          } else {
            badge.textContent = days + ' Days Left';
          }
        } else {
          if (days === 0) {
            badge.textContent = 'Exam Today (' + hours + 'h ' + minutes + 'm left)';
          } else {
            badge.textContent = 'Starts in ' + days + ' Days';
          }
        }
      });
    }

    // Run tick immediately on initialization
    tick();

    // Set 1-second continuous timer
    setInterval(tick, 1000);

    // Refresh immediately when returning from other tab or unlocking device
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) tick();
    });
    window.addEventListener('focus', tick);
  }

  // --- 8. IBPS Hindi Officer Interactive Utilities ---
  function initIbpsHindiOfficerTools() {
    // 8.1 Photo Resizer
    var photoInput = document.getElementById('inline-photo-input');
    var photoCanvas = document.getElementById('inline-photo-canvas');
    var photoWrap = document.getElementById('inline-photo-preview-wrap');
    var photoSize = document.getElementById('inline-photo-size');
    var photoStatus = document.getElementById('inline-photo-status');
    var photoDownload = document.getElementById('inline-photo-download');

    if (photoInput && photoCanvas) {
      photoInput.addEventListener('change', function (e) {
        var file = e.target.files && e.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function (evt) {
          var img = new Image();
          img.onload = function () {
            var ctx = photoCanvas.getContext('2d');
            photoCanvas.width = 200;
            photoCanvas.height = 230;
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, 200, 230);
            ctx.drawImage(img, 0, 0, 200, 230);

            photoCanvas.toBlob(function (blob) {
              if (!blob) return;
              var kb = Math.round(blob.size / 1024);
              if (photoSize) photoSize.textContent = kb + ' KB';
              if (photoStatus) {
                if (kb >= 20 && kb <= 50) {
                  photoStatus.textContent = '✓ Valid (Within 20–50 KB)';
                  photoStatus.className = 'font-bold text-emerald-600';
                } else if (kb < 20) {
                  photoStatus.textContent = 'Advisory: ' + kb + ' KB (Official target: 20–50 KB)';
                  photoStatus.className = 'font-bold text-amber-600';
                } else {
                  photoStatus.textContent = 'Advisory: ' + kb + ' KB (Exceeds 50 KB)';
                  photoStatus.className = 'font-bold text-rose-600';
                }
              }
              var url = URL.createObjectURL(blob);
              if (photoDownload) photoDownload.href = url;
              if (photoWrap) photoWrap.classList.remove('hidden');
            }, 'image/jpeg', 0.88);
          };
          img.src = evt.target.result;
        };
        reader.readAsDataURL(file);
      });
    }

    // 8.2 Signature Resizer
    var signInput = document.getElementById('inline-sign-input');
    var signCanvas = document.getElementById('inline-sign-canvas');
    var signWrap = document.getElementById('inline-sign-preview-wrap');
    var signSize = document.getElementById('inline-sign-size');
    var signStatus = document.getElementById('inline-sign-status');
    var signDownload = document.getElementById('inline-sign-download');

    if (signInput && signCanvas) {
      signInput.addEventListener('change', function (e) {
        var file = e.target.files && e.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function (evt) {
          var img = new Image();
          img.onload = function () {
            var ctx = signCanvas.getContext('2d');
            signCanvas.width = 140;
            signCanvas.height = 60;
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, 140, 60);
            ctx.drawImage(img, 0, 0, 140, 60);

            signCanvas.toBlob(function (blob) {
              if (!blob) return;
              var kb = Math.round(blob.size / 1024);
              if (signSize) signSize.textContent = kb + ' KB';
              if (signStatus) {
                if (kb >= 10 && kb <= 20) {
                  signStatus.textContent = '✓ Valid (Within 10–20 KB)';
                  signStatus.className = 'font-bold text-emerald-600';
                } else if (kb < 10) {
                  signStatus.textContent = 'Advisory: ' + kb + ' KB (Official target: 10–20 KB)';
                  signStatus.className = 'font-bold text-amber-600';
                } else {
                  signStatus.textContent = 'Advisory: ' + kb + ' KB (Exceeds 20 KB)';
                  signStatus.className = 'font-bold text-rose-600';
                }
              }
              var url = URL.createObjectURL(blob);
              if (signDownload) signDownload.href = url;
              if (signWrap) signWrap.classList.remove('hidden');
            }, 'image/jpeg', 0.85);
          };
          img.src = evt.target.result;
        };
        reader.readAsDataURL(file);
      });
    }

    // 8.3 PDF Document Pre-Flight Validator
    var docInput = document.getElementById('inline-doc-input');
    var docResult = document.getElementById('inline-doc-result');
    if (docInput && docResult) {
      docInput.addEventListener('change', function (e) {
        var file = e.target.files && e.target.files[0];
        if (!file) return;
        var kb = Math.round(file.size / 1024);
        var isCompliant = kb <= 500;
        docResult.className = 'p-3 rounded-xl border text-xs ' +
          (isCompliant ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900');
        docResult.innerHTML =
          '<div class="flex items-center justify-between font-bold">' +
          '  <span>' + escapeHtml(file.name) + '</span>' +
          '  <span>' + kb + ' KB</span>' +
          '</div>' +
          '<div class="mt-1">' +
          (isCompliant
            ? '✓ Compliant: File is within the official IBPS &le; 500 KB PDF limit.'
            : '⚠️ Warning: File exceeds the 500 KB limit. Please compress this document before uploading.') +
          '</div>';
        docResult.classList.remove('hidden');
      });
    }

    // 8.4 Educational Eligibility Checker
    var btnCheckElig = document.getElementById('btn-check-eligibility');
    var eligResult = document.getElementById('checker-result');
    if (btnCheckElig && eligResult) {
      btnCheckElig.addEventListener('click', function () {
        var master = (document.getElementById('checker-master') || {}).value;
        var bachelor = (document.getElementById('checker-bachelor') || {}).value;
        var medium = (document.getElementById('checker-medium') || {}).value;
        var computer = (document.getElementById('checker-computer') || {}).value;

        if (computer === 'no') {
          eligResult.className = 'p-3 rounded-xl border bg-rose-50 border-rose-200 text-rose-900 text-xs font-medium';
          eligResult.innerHTML = '<strong>❌ Ineligible:</strong> Competency in operating computer (MS Word & Excel typing in Hindi & English) is MUST as per official notification.';
          eligResult.classList.remove('hidden');
          return;
        }

        var eligible = false;
        var combination = '';

        if (master === 'hindi' && (bachelor === 'english_major' || bachelor === 'both')) {
          eligible = true;
          combination = 'Combination 1: Master’s in Hindi with English as major/elective at Graduation.';
        } else if (master === 'english' && (bachelor === 'hindi_major' || bachelor === 'both')) {
          eligible = true;
          combination = 'Combination 2: Master’s in English with Hindi as major/elective at Graduation.';
        } else if (master === 'other' && (bachelor === 'hindi_major' || bachelor === 'both') && medium === 'english') {
          eligible = true;
          combination = 'Combination 3: Master’s in Allied Subject + Hindi at Degree + English Medium of Exam.';
        } else if (master === 'other' && (bachelor === 'english_major' || bachelor === 'both') && medium === 'hindi') {
          eligible = true;
          combination = 'Combination 4: Master’s in Allied Subject + English at Degree + Hindi Medium of Exam.';
        }

        if (eligible) {
          eligResult.className = 'p-3 rounded-xl border bg-emerald-50 border-emerald-200 text-emerald-900 text-xs font-medium';
          eligResult.innerHTML = '<strong>✓ Eligible:</strong> You satisfy official <strong>' + combination + '</strong>. Ensure your degree is from a recognized university on regular basis.';
        } else {
          eligResult.className = 'p-3 rounded-xl border bg-rose-50 border-rose-200 text-rose-900 text-xs font-medium';
          eligResult.innerHTML = '<strong>❌ Not Eligible under Standard Paths:</strong> The combination of Master’s subject, Bachelor’s subject, and medium does not match any of the 4 official IBPS combinations.';
        }
        eligResult.classList.remove('hidden');
      });
    }

    // 8.5 Age Eligibility Calculator
    var btnCalcAge = document.getElementById('btn-calc-ibps-age');
    var ageDob = document.getElementById('ibps-age-dob');
    var ageResult = document.getElementById('ibps-age-result');
    if (btnCalcAge && ageDob && ageResult) {
      btnCalcAge.addEventListener('click', function () {
        var dobVal = ageDob.value;
        if (!dobVal) {
          alert('Please select your Date of Birth.');
          return;
        }

        var birthDate = new Date(dobVal);
        var refDate = new Date('2026-09-01');

        if (birthDate > refDate) {
          alert('Date of Birth cannot be after 01 September 2026.');
          return;
        }

        var years = refDate.getFullYear() - birthDate.getFullYear();
        var months = refDate.getMonth() - birthDate.getMonth();
        var days = refDate.getDate() - birthDate.getDate();

        if (days < 0) {
          months--;
          var prevMonthDays = new Date(refDate.getFullYear(), refDate.getMonth(), 0).getDate();
          days += prevMonthDays;
        }
        if (months < 0) {
          years--;
          months += 12;
        }

        // Check official DOB range: 02.09.1996 to 01.09.2003 (inclusive)
        var minDob = new Date('1996-09-02');
        var maxDob = new Date('2003-09-01');
        var isWithinDobRange = birthDate >= minDob && birthDate <= maxDob;
        var isEligible = isWithinDobRange && years >= 23 && years <= 30;

        ageResult.className = 'p-3 rounded-xl border text-xs ' +
          (isEligible ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900');

        ageResult.innerHTML =
          '<div class="flex items-center justify-between font-bold">' +
          '  <span>Age as on 01.09.2026: ' + years + ' Yrs, ' + months + ' Mos, ' + days + ' Days</span>' +
          '  <span class="px-2.5 py-0.5 rounded-full text-[10px] ' +
          (isEligible ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white') +
          '">' + (isEligible ? 'Eligible' : 'Not Eligible') + '</span>' +
          '</div>' +
          '<div class="mt-1 text-slate-600">' +
          (isEligible
            ? '✓ Your birth date falls within the official range (02.09.1996 to 01.09.2003) and satisfies the 23–30 years criteria.'
            : '❌ Official notification requires age between 23 and 30 years as on 01.09.2026 (born between 02.09.1996 and 01.09.2003).') +
          '</div>';

        ageResult.classList.remove('hidden');
      });
    }
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
    initLiveCountdowns();
    initIbpsHindiOfficerTools();
  }
})();

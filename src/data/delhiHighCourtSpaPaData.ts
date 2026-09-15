import { ExamRecord, ExamInfoSection } from '../types/exam';

export function generateDelhiHighCourtSpaPa50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. Delhi High Court SPA & PA Recruitment 2026 – Overview & Fast Facts',
      badge: 'Overview',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The High Court of Delhi (New Delhi) has officially published the comprehensive Vacancy Notice for the <strong>Senior Personal Assistant and Personal Assistant Examination 2026</strong>. A total of <strong>150 Group ‘B’ Gazetted/Non-Gazetted permanent vacancies</strong> have been announced across two prestigious judicial cadres.</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Parameter</th>
                  <th class="p-2.5">Official Specification</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Recruiting Authority</td>
                  <td class="p-2.5">High Court of Delhi : New Delhi (दिल्ली उच्च न्यायालय)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Official Notification</td>
                  <td class="p-2.5 font-mono font-bold text-blue-700">Senior Personal Assistant & Personal Assistant Examination 2026 (Dated: 02.09.2026)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Total Vacancies</td>
                  <td class="p-2.5 font-bold text-emerald-700">150 Posts (SPA: 117 | PA: 33)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Classification & Cadre</td>
                  <td class="p-2.5">Group 'B' Judicial Secretarial Cadre</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Pay Scales</td>
                  <td class="p-2.5">SPA: Level 8 (₹47,600 – ₹1,51,100) | PA: Level 7 (₹44,900 – ₹1,42,400)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Online Application Window</td>
                  <td class="p-2.5 font-bold text-slate-900">15 September 2026 (11:00 AM) to 05 October 2026 (11:00 PM)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Correction Window</td>
                  <td class="p-2.5">12 October 2026 (11:00 AM) to 14 October 2026 (11:00 PM)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Examination Date & Venue</td>
                  <td class="p-2.5 font-bold text-amber-700">Not Released / To Be Updated (Will be notified on delhihighcourt.nic.in)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: '2. Important Dates & Schedule of Examination',
      badge: 'Schedule',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates must strictly adhere to the official timetable prescribed in Section I of the Delhi High Court Vacancy Notice:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Event / Activity</th>
                  <th class="p-2.5">Official Date & Time</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Vacancy Circular Date</td>
                  <td class="p-2.5">02 September 2026</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Commencement Date for Online Application & Fee</td>
                  <td class="p-2.5 font-bold text-emerald-700">15.09.2026 (1100 hours / 11:00 AM)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Last Date & Time for Online Application & Fee</td>
                  <td class="p-2.5 font-bold text-red-600">05.10.2026 (2300 hours / 11:00 PM)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Window for Application Form Correction</td>
                  <td class="p-2.5 font-bold text-blue-700">12.10.2026 (1100 hours) to 14.10.2026 (2300 hours)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Downloading of Admit Card</td>
                  <td class="p-2.5">To be announced later through public notice on official website</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Date, Time & Venue of Examination</td>
                  <td class="p-2.5">To be announced later through public notice on official website</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 3,
      title: '3. Total Vacancies Breakdown (150 Posts: 117 SPA + 33 PA)',
      badge: 'Vacancies',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>A consolidated pool of 150 vacancies is notified under direct recruitment. Note that separate applications and fees are mandatory if an eligible applicant desires to apply for both posts.</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div class="p-4 bg-blue-50/60 border border-blue-200 rounded-xl space-y-1">
              <span class="text-xs font-bold uppercase tracking-wider text-blue-800">Senior Personal Assistant (SPA)</span>
              <div class="text-2xl font-black text-blue-900">117 Posts</div>
              <p class="text-xs text-blue-700">Group 'B' | 8th Level of Pay Matrix (7th CPC) | Open to all categories</p>
            </div>
            <div class="p-4 bg-amber-50/60 border border-amber-200 rounded-xl space-y-1">
              <span class="text-xs font-bold uppercase tracking-wider text-amber-800">Personal Assistant (PA)</span>
              <div class="text-2xl font-black text-amber-900">33 Posts</div>
              <p class="text-xs text-amber-700">Group 'B' | 7th Level of Pay Matrix (7th CPC) | <strong>GEN Vacancy is NIL</strong></p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 4,
      title: '4. Senior Personal Assistant (SPA) – Category-wise Vacancies',
      badge: 'SPA Vacancies',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The vertical distribution for 117 vacancies of Senior Personal Assistant (SPA) is structured as follows:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Category</th>
                  <th class="p-2.5">Classification & Level</th>
                  <th class="p-2.5">Number of Vacancies</th>
                  <th class="p-2.5">Share (%)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold">General (UR)</td>
                  <td class="p-2.5">Group 'B' - Level 8</td>
                  <td class="p-2.5 font-bold text-blue-700">43 Posts</td>
                  <td class="p-2.5">~36.75%</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Economically Weaker Section (EWS)</td>
                  <td class="p-2.5">Group 'B' - Level 8</td>
                  <td class="p-2.5 font-bold text-slate-700">14 Posts</td>
                  <td class="p-2.5">~11.96%</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Other Backward Classes (OBC-NCL Delhi)</td>
                  <td class="p-2.5">Group 'B' - Level 8</td>
                  <td class="p-2.5 font-bold text-slate-700">32 Posts</td>
                  <td class="p-2.5">~27.35%</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Scheduled Caste (SC)</td>
                  <td class="p-2.5">Group 'B' - Level 8</td>
                  <td class="p-2.5 font-bold text-slate-700">16 Posts</td>
                  <td class="p-2.5">~13.67%</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Scheduled Tribe (ST)</td>
                  <td class="p-2.5">Group 'B' - Level 8</td>
                  <td class="p-2.5 font-bold text-slate-700">12 Posts</td>
                  <td class="p-2.5">~10.25%</td>
                </tr>
                <tr class="bg-slate-50 font-black">
                  <td class="p-2.5 text-slate-900" colspan="2">Total SPA Vacancies</td>
                  <td class="p-2.5 text-emerald-700">117 Posts</td>
                  <td class="p-2.5">100.0%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 5,
      title: '5. Personal Assistant (PA) – Category-wise Vacancies & Important General Note',
      badge: 'PA Vacancies',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-red-50 border border-red-200 rounded-xl space-y-1">
            <span class="font-bold text-red-950 block text-sm">CRITICAL NOTICE: Zero (NIL) General Vacancies in PA</span>
            <p class="text-red-900">As clearly stipulated in Note (iii) of the official Vacancy Circular, there is <strong>NIL (0) vacancy under General (Unreserved) category for the post of Personal Assistant (PA)</strong>. All clauses in the Vacancy Notice pertaining to the General category are applicable ONLY to the post of Senior Personal Assistant (SPA). General category candidates should apply only for SPA.</p>
          </div>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Category</th>
                  <th class="p-2.5">Classification & Level</th>
                  <th class="p-2.5">Number of Vacancies</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-slate-400">General (UR)</td>
                  <td class="p-2.5 text-slate-400">Group 'B' - Level 7</td>
                  <td class="p-2.5 font-bold text-red-600">NIL (0)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Economically Weaker Section (EWS)</td>
                  <td class="p-2.5">Group 'B' - Level 7</td>
                  <td class="p-2.5 font-bold text-slate-700">07 Posts</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Other Backward Classes (OBC-NCL Delhi)</td>
                  <td class="p-2.5">Group 'B' - Level 7</td>
                  <td class="p-2.5 font-bold text-slate-700">16 Posts</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Scheduled Caste (SC)</td>
                  <td class="p-2.5">Group 'B' - Level 7</td>
                  <td class="p-2.5 font-bold text-slate-700">05 Posts</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Scheduled Tribe (ST)</td>
                  <td class="p-2.5">Group 'B' - Level 7</td>
                  <td class="p-2.5 font-bold text-slate-700">05 Posts</td>
                </tr>
                <tr class="bg-slate-50 font-black">
                  <td class="p-2.5 text-slate-900" colspan="2">Total PA Vacancies</td>
                  <td class="p-2.5 text-emerald-700">33 Posts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 6,
      title: '6. PwBD Horizontal Reservation Breakdown (07 SPA + 03 PA)',
      badge: 'PwBD',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Horizontal reservation of 4% for Persons with Benchmark Disabilities (PwBD) having a disability of 40% or more is provided as follows:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Benchmark Disability Sub-Category</th>
                  <th class="p-2.5">SPA (117)</th>
                  <th class="p-2.5">PA (33)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold">a) Locomotor: OL (One Leg), BL (Both Legs), LC (Leprosy Cured), Dw (Dwarfism), AAV (Acid Attack Victim)</td>
                  <td class="p-2.5 font-bold text-blue-700">03 Posts</td>
                  <td class="p-2.5 font-bold text-blue-700">02 Posts</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">b) Mental/Developmental: ASD (Autism Spectrum Disorder - Mild/Moderate), SLD (Specific Learning Disability), Mental Illness (MI)</td>
                  <td class="p-2.5 font-bold text-blue-700">02 Posts</td>
                  <td class="p-2.5 font-bold text-blue-700">01 Post (Combined)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">c) Multiple Disabilities amongst the persons having any disabilities coming under (a) and (b)</td>
                  <td class="p-2.5 font-bold text-blue-700">02 Posts</td>
                  <td class="p-2.5 text-slate-400">Included in (b)</td>
                </tr>
                <tr class="bg-slate-50 font-black">
                  <td class="p-2.5 text-slate-900">Total PwBD Horizontal Seats</td>
                  <td class="p-2.5 text-emerald-700">07 Posts</td>
                  <td class="p-2.5 text-emerald-700">03 Posts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 7,
      title: '7. Pay Scale & 7th CPC Matrix Details (Level 8 vs Level 7)',
      badge: 'Pay Scale',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Both posts are classified as Group 'B' in the Delhi High Court Establishment and carry central 7th Central Pay Commission (CPC) pay levels:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div class="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
              <span class="text-xs font-bold uppercase text-blue-700 block">Senior Personal Assistant (SPA)</span>
              <div class="text-sm font-semibold text-slate-800">Classification: <strong>Group ‘B’</strong></div>
              <div class="text-sm font-semibold text-slate-800">Pay Matrix: <strong>8th Level of Pay Matrix (7th CPC)</strong></div>
              <div class="text-xs text-slate-600">Basic Pay Scale: <strong>₹47,600 – ₹1,51,100/-</strong> (Old Grade Pay ₹4,800/-)</div>
            </div>
            <div class="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
              <span class="text-xs font-bold uppercase text-indigo-700 block">Personal Assistant (PA)</span>
              <div class="text-sm font-semibold text-slate-800">Classification: <strong>Group ‘B’</strong></div>
              <div class="text-sm font-semibold text-slate-800">Pay Matrix: <strong>7th Level of Pay Matrix (7th CPC)</strong></div>
              <div class="text-xs text-slate-600">Basic Pay Scale: <strong>₹44,900 – ₹1,42,400/-</strong> (Old Grade Pay ₹4,600/-)</div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 8,
      title: '8. In-Hand Salary, Dearness & Delhi Allowances Structure',
      badge: 'Salary Breakdown',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Delhi is categorized as an 'X' Class City (highest HRA bracket). Approximate starting monthly salaries are:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Salary Component</th>
                  <th class="p-2.5">SPA (Level 8)</th>
                  <th class="p-2.5">PA (Level 7)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold">Entry Basic Pay</td>
                  <td class="p-2.5 font-bold">₹47,600/-</td>
                  <td class="p-2.5 font-bold">₹44,900/-</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Dearness Allowance (DA ~53%)</td>
                  <td class="p-2.5">₹25,228/-</td>
                  <td class="p-2.5">₹23,797/-</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">House Rent Allowance (HRA 30% in Delhi)</td>
                  <td class="p-2.5">₹14,280/-</td>
                  <td class="p-2.5">₹13,470/-</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Transport Allowance (TPTA + DA on TPTA)</td>
                  <td class="p-2.5">₹5,508/-</td>
                  <td class="p-2.5">₹5,508/-</td>
                </tr>
                <tr class="bg-slate-50 font-bold">
                  <td class="p-2.5">Estimated Gross Salary</td>
                  <td class="p-2.5 text-blue-700">₹92,616/- per month</td>
                  <td class="p-2.5 text-blue-700">₹87,675/- per month</td>
                </tr>
                <tr class="bg-emerald-50 font-black">
                  <td class="p-2.5 text-emerald-950">Estimated In-Hand Salary (Net)</td>
                  <td class="p-2.5 text-emerald-700">₹81,000 – ₹86,000/-</td>
                  <td class="p-2.5 text-emerald-700">₹76,000 – ₹81,000/-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-500">Note: Actual in-hand take-home pay is subject to NPS contribution, CGHS deductions, and Delhi employee income tax.</p>
        </div>
      `
    },
    {
      id: 9,
      title: '9. Essential Eligibility Criteria: Senior Personal Assistant (SPA)',
      badge: 'SPA Eligibility',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>For appointment to the post of <strong>Senior Personal Assistant (SPA)</strong>, candidates must satisfy the following three mandatory qualifications as on <strong>05.10.2026</strong>:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Degree:</strong> Graduate from a recognised University (Any discipline: B.A., B.Sc., B.Com., B.Tech., LL.B., etc.).</li>
            <li><strong>Shorthand Speed:</strong> Speed of not less than <strong>110 words per minute (w.p.m.)</strong> in English Shorthand.</li>
            <li><strong>Typewriting Speed:</strong> Speed of not less than <strong>40 words per minute (w.p.m.)</strong> in English Typewriting on computer.</li>
            <li><strong>Computer Proficiency:</strong> Good working knowledge of Computer (Word processing, spreadsheets, internet, OS).</li>
          </ul>
        </div>
      `
    },
    {
      id: 10,
      title: '10. Essential Eligibility Criteria: Personal Assistant (PA)',
      badge: 'PA Eligibility',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>For appointment to the post of <strong>Personal Assistant (PA)</strong>, candidates must satisfy the following criteria as on <strong>05.10.2026</strong>:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Degree:</strong> Graduate from a recognised University in any stream.</li>
            <li><strong>Shorthand Speed:</strong> Speed of not less than <strong>100 words per minute (w.p.m.)</strong> in English Shorthand.</li>
            <li><strong>Typewriting Speed:</strong> Speed of not less than <strong>40 words per minute (w.p.m.)</strong> in English Typewriting on computer.</li>
            <li><strong>Computer Proficiency:</strong> Good working knowledge of Computer systems.</li>
            <li><strong>Category Reservation:</strong> Must belong to EWS, OBC-NCL (Delhi), SC, or ST (since General vacancies are NIL).</li>
          </ul>
        </div>
      `
    },
    {
      id: 11,
      title: '11. Recognized Degrees, Institutions & Equivalence Norms',
      badge: 'Qualifications',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Section II (Notes) clearly prescribes that:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li>All educational qualifications must be from a University / Institution / Board recognised by the Government of India or approved by Govt. Regulatory Bodies (UGC, AICTE, etc.).</li>
            <li>The final result of the graduation degree <strong>MUST have been declared on or before the closing date for receipt of online applications (05.10.2026)</strong>.</li>
            <li>Candidates whose final year results are awaited or declared after 05.10.2026 are <strong>not eligible</strong> to apply.</li>
          </ul>
        </div>
      `
    },
    {
      id: 12,
      title: '12. Crucial Cut-Off Dates for Educational Degrees & Certificates',
      badge: 'Crucial Date',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <span class="font-bold text-slate-900 block text-xs uppercase tracking-wider">Crucial Cut-Off Dates</span>
            <p><strong>Crucial Date for Degrees & Certificates: 05.10.2026</strong> (Closing date for online applications).</p>
            <p><strong>Crucial Date for Age Calculation: 01.01.2026</strong>.</p>
            <p><strong>Crucial Date for Delhi OBC Non-Creamy Layer (NCL): Must be issued in FY 2026-2027</strong> (between 01.04.2026 and 31.03.2027).</p>
          </div>
        </div>
      `
    },
    {
      id: 13,
      title: '13. Age Limits & Permissible Date of Birth Range (18 to 32 Years)',
      badge: 'Age Limit',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Section III of the Vacancy Notice, the candidate’s age must not be below 18 years and must not exceed 32 years as on <strong>01.01.2026</strong>.</p>
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl">
            <span class="font-bold text-amber-950 block text-sm">Permissible Date of Birth Window (Unreserved)</span>
            <p class="text-amber-900 mt-1">Applicant must have been born <strong>not earlier than 02.01.1994 and not later than 01.01.2008</strong>.</p>
          </div>
          <p class="text-xs text-slate-500">Only the Date of Birth recorded in the Matriculation / Secondary Examination Certificate or Mark-Sheet will be accepted for determining age eligibility. No subsequent request for change will be entertained.</p>
        </div>
      `
    },
    {
      id: 14,
      title: '14. Category-wise Upper Age Relaxation Matrix',
      badge: 'Age Relaxation',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Relaxation in upper age limit beyond 32 years is permissible to reserved category applicants as follows:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Category</th>
                  <th class="p-2.5">Permissible Age Relaxation</th>
                  <th class="p-2.5">Max Permissible Age</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold">SC / ST</td>
                  <td class="p-2.5 font-bold text-blue-700">5 Years</td>
                  <td class="p-2.5">37 Years</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">OBC-NCL (Delhi)</td>
                  <td class="p-2.5 font-bold text-blue-700">3 Years</td>
                  <td class="p-2.5">35 Years</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">PwBD - General / EWS</td>
                  <td class="p-2.5 font-bold text-blue-700">10 Years</td>
                  <td class="p-2.5">42 Years</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">PwBD - OBC-NCL (Delhi)</td>
                  <td class="p-2.5 font-bold text-blue-700">13 Years</td>
                  <td class="p-2.5">45 Years</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">PwBD - SC / ST</td>
                  <td class="p-2.5 font-bold text-blue-700">15 Years</td>
                  <td class="p-2.5">47 Years</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Ex-Servicemen (ESM)</td>
                  <td class="p-2.5 font-bold text-blue-700">3 Years</td>
                  <td class="p-2.5">Deduction of military service from actual age + 3 years</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Disabled Defence Services Personnel</td>
                  <td class="p-2.5 font-bold text-blue-700">Up to 45 Years (50 Years for SC/ST)</td>
                  <td class="p-2.5">45 Years (UR/OBC) / 50 Years (SC/ST)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 15,
      title: '15. Delhi High Court In-Service Employees Age Relaxation Policy',
      badge: 'In-Service',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Section III explicitly states that <strong>there shall be no upper age limit for persons who are in regular service in the High Court of Delhi</strong>, subject to their fulfilling the requisite educational qualifications.</p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span class="font-bold text-slate-900 block text-xs">Exclusion Notice</span>
            <p>This relaxation in upper age limit is <strong>NOT applicable</strong> to candidates working in other Government Departments, Public Sector Undertakings (PSUs), or Delhi District Courts.</p>
          </div>
        </div>
      `
    },
    {
      id: 16,
      title: '16. Reservation Policy Overview & Quota Percentages',
      badge: 'Reservation',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Consistent with administrative efficiency and orders passed by Hon’ble the Chief Justice, the statutory reservation quota is applied as follows:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Scheduled Castes (SC):</strong> 15% of posts</li>
            <li><strong>Scheduled Tribes (ST):</strong> 7.5% of posts</li>
            <li><strong>Other Backward Classes (OBC-NCL):</strong> 27% of posts</li>
            <li><strong>Economically Weaker Sections (EWS):</strong> 10% of posts</li>
            <li><strong>Persons with Benchmark Disability (PwBD):</strong> 4% on horizontal basis</li>
            <li><strong>Ex-Servicemen (ESM):</strong> There is <strong>no reservation</strong> of vacancies for Group 'A' & Group 'B' posts for Ex-Servicemen.</li>
          </ul>
        </div>
      `
    },
    {
      id: 17,
      title: '17. Strict OBC Reservation Rules: Delhi Domicile & FY 2026-27 NCL Mandate',
      badge: 'OBC Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-red-50 border border-red-200 rounded-xl space-y-1.5">
            <span class="font-bold text-red-950 block text-sm">Strict Rule on Outside-Delhi OBC Candidates</span>
            <p class="text-red-900">OBC candidates who had been issued caste certificates from outside Delhi or whose caste is not recognized as OBC in Delhi are <strong>NOT entitled to OBC reservation</strong> in the Delhi High Court. Their applications will be treated under General (UR) category (only for SPA).</p>
          </div>
          <p>For valid OBC reservation:</p>
          <ol class="list-decimal pl-5 space-y-1">
            <li>Caste Certificate must be issued by the Competent Authority of the <strong>Govt. of NCT of Delhi</strong> for castes notified as OBC by GNCTD.</li>
            <li>Central Govt OBC certificates (e.g. for Govt of India appointments) are <strong>NOT valid</strong>.</li>
            <li>The <strong>Non-Creamy Layer (NCL) Certificate must have been issued in the current financial year 2026-2027</strong> (i.e. between <strong>01.04.2026 and 31.03.2027</strong>) by GNCTD.</li>
          </ol>
        </div>
      `
    },
    {
      id: 18,
      title: '18. Economically Weaker Section (EWS) Guidelines & Asset Certificate',
      badge: 'EWS Norms',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>EWS reservations follow DoPT O.M. No. 36039/1/2019-Estt(Res) dated 19.01.2019 and 31.01.2019:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li>Candidates must possess a valid Income and Asset Certificate issued in the prescribed format on or before the application cut-off date (<strong>05.10.2026</strong>).</li>
            <li>Appointment under EWS quota is provisional subject to verification. If verification reveals a fake or false certificate, services will be terminated immediately without assigning further reasons and criminal action will be taken under Bharatiya Nyaya Sanhita (BNS).</li>
          </ul>
        </div>
      `
    },
    {
      id: 19,
      title: '19. SC / ST Category Reservation & Caste Verification Rules',
      badge: 'SC/ST Norms',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates claiming SC (15%) or ST (7.5%) status must possess a valid Caste Certificate issued by an authorized Competent Authority on or before <strong>05.10.2026</strong>.</p>
          <p>Candidature remains provisional until original verification at Document Verification. SC/ST candidates who qualify on merit without availing relaxations will be adjusted against General vacancies (for SPA).</p>
        </div>
      `
    },
    {
      id: 20,
      title: '20. PwBD Benchmark Disabilities (40%+) & Quota Restrictions',
      badge: 'PwBD Norms',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>PwBD candidates suffering from disability of not less than 40% in the designated categories (OL, BL, LC, Dw, AAV, ASD, SLD, MI) are eligible for age relaxation, fee concession, and qualifying marks relaxation.</p>
          <p>Candidates suffering from disabilities for which no vacancy has been reserved are not entitled to any relaxations or reservation and will be governed by normal category standards.</p>
        </div>
      `
    },
    {
      id: 21,
      title: '21. Strict Court Notice: No Scribe & No Compensatory Time for PwBD',
      badge: 'No Scribe Notice',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-4 bg-amber-50 border-2 border-amber-300 rounded-xl space-y-2">
            <span class="font-black text-amber-950 block text-sm">MANDATORY NOTE ON TYPING & SHORTHAND EXEMPTION</span>
            <p class="text-amber-950 font-semibold leading-relaxed">It is important to note that only such candidates will be considered for selection who participate and qualify ALL stages of the examination, including the Typing Test as well as the Shorthand Test.</p>
            <p class="text-amber-900"><strong>No exemption shall be granted to any candidate, including those of PwBD category</strong>, from appearing in any stage of the examination, keeping in view the high-paced working conditions in this Court and the nature of confidential judicial duties.</p>
            <p class="text-amber-900 font-bold">Therefore, there will be NO provision for Scribe or compensatory time in any part or stage of the examination for PwBD candidates.</p>
          </div>
        </div>
      `
    },
    {
      id: 22,
      title: '22. Complete 4-Stage Selection Architecture Overview',
      badge: 'Selection Architecture',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The recruitment process for both Senior Personal Assistant and Personal Assistant is conducted in four successive stages:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-3">
            <div class="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-xs">
              <span class="text-[11px] font-bold uppercase text-blue-700">Stage - I</span>
              <div class="text-xs font-bold text-slate-900">English Typing Test</div>
              <p class="text-[11px] text-slate-600">10 Minutes | 40 WPM | Max 3% Mistakes | <strong>Qualifying Only</strong></p>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-xs">
              <span class="text-[11px] font-bold uppercase text-indigo-700">Stage - II</span>
              <div class="text-xs font-bold text-slate-900">English Shorthand Tests</div>
              <p class="text-[11px] text-slate-600">SPA: 110 WPM (120M) | PA: 100 WPM (110M) | 2 Dictation Chances</p>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-xs">
              <span class="text-[11px] font-bold uppercase text-purple-700">Stage - III</span>
              <div class="text-xs font-bold text-slate-900">Main (Descriptive) Exam</div>
              <p class="text-[11px] text-slate-600">100 Marks | 120 Minutes | Essay, Letter, Grammar, Translation</p>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-xs">
              <span class="text-[11px] font-bold uppercase text-emerald-700">Stage - IV</span>
              <div class="text-xs font-bold text-slate-900">Interview</div>
              <p class="text-[11px] text-slate-600">15 Marks | No minimum qualifying score</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 23,
      title: '23. Stage-I: English Typing Test Scheme & Standards (40 WPM, 3% Errors)',
      badge: 'Stage 1 Typing',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Stage-I is common to both SPA and PA candidates and is strictly qualifying in nature:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Duration:</strong> 10 (ten) minutes on computer.</li>
            <li><strong>Minimum Speed Required:</strong> 40 words per minute (w.p.m.) in English typing on computer.</li>
            <li><strong>Evaluation Criterion:</strong> "Characters with space" calculation method will be adopted.</li>
            <li><strong>Permissible Mistakes:</strong> Maximum 3% of the total words typed.</li>
            <li><strong>Progression:</strong> Only candidates qualifying Stage-I will be called for Stage-II (English Shorthand Tests).</li>
          </ul>
        </div>
      `
    },
    {
      id: 24,
      title: '24. Stage-II: English Shorthand Test for SPA (110 WPM, 120 Marks)',
      badge: 'SPA Shorthand',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The Shorthand examination for Senior Personal Assistant (SPA) involves high-speed recording and transcription:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Parameter</th>
                  <th class="p-2.5">SPA Specification</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Speed</td>
                  <td class="p-2.5 font-bold text-blue-700">110 words per minute</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Dictation Passage Length</td>
                  <td class="p-2.5">550 words dictated in 5 minutes</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Transcription Duration</td>
                  <td class="p-2.5 font-bold">45 minutes on computer (No extra time for reading passage)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Total Maximum Marks</td>
                  <td class="p-2.5 font-bold text-emerald-700">120 Marks</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Permissible Mistakes Limit</td>
                  <td class="p-2.5 font-bold text-red-600">5% of total words (27.5 mistakes maximum)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Disqualification Threshold</td>
                  <td class="p-2.5">Committing more than 27.5 mistakes = Disqualified</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 25,
      title: '25. Stage-II: English Shorthand Test for PA (100 WPM, 110 Marks)',
      badge: 'PA Shorthand',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The Shorthand examination for Personal Assistant (PA) is structured as follows:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Parameter</th>
                  <th class="p-2.5">PA Specification</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Speed</td>
                  <td class="p-2.5 font-bold text-blue-700">100 words per minute</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Dictation Passage Length</td>
                  <td class="p-2.5">500 words dictated in 5 minutes</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Transcription Duration</td>
                  <td class="p-2.5 font-bold">45 minutes on computer (No extra time for reading passage)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Total Maximum Marks</td>
                  <td class="p-2.5 font-bold text-emerald-700">110 Marks</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Permissible Mistakes Limit</td>
                  <td class="p-2.5 font-bold text-red-600">5% of total words (25 mistakes maximum)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Disqualification Threshold</td>
                  <td class="p-2.5">Committing more than 25 mistakes = Disqualified</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 26,
      title: '26. Marking Scheme & Deduction Rules in Shorthand Tests',
      badge: 'Shorthand Marking',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The deduction policy for transcription errors is rigorous and clearly documented in Section V:</p>
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>Full Mistake Deduction:</strong> Four (4) marks will be deducted for committing every one full mistake.</li>
            <li><strong>Half Mistake Deduction:</strong> Two (2) marks will be deducted for committing every half (1/2) mistake.</li>
            <li><strong>SPA Calculation:</strong> Candidates committing exactly 27.5 mistakes get 10 marks (120 - 4 × 27.5 = 10). Committing &gt; 27.5 mistakes = 0 / Disqualified.</li>
            <li><strong>PA Calculation:</strong> Candidates committing exactly 25 mistakes get 10 marks (110 - 4 × 25 = 10). Committing &gt; 25 mistakes = 0 / Disqualified.</li>
          </ul>
        </div>
      `
    },
    {
      id: 27,
      title: '27. Two Dictation Trials Provision & Best-of-Two Rule',
      badge: 'Best of Two',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
            <span class="font-bold text-emerald-950 block text-sm">Candidate-Friendly Provision: Two Shorthand Trials</span>
            <p class="text-emerald-900">Each candidate will be given the opportunity to appear in <strong>two shorthand dictation and transcription tests</strong>, and the <strong>best of the two tests will be considered</strong> for evaluating merit and qualifying status!</p>
          </div>
          <p>Only the successful candidates of Stage-II will be called for Stage-III (Main Descriptive Examination).</p>
        </div>
      `
    },
    {
      id: 28,
      title: '28. Stage-III: Main (Descriptive) Examination Scheme (100 Marks, 120 Mins)',
      badge: 'Stage 3 Descriptive',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Stage-III consists of an offline written descriptive test of English language testing drafting, articulation, comprehension, and bilingual translation ability:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Total Marks:</strong> 100 Marks</li>
            <li><strong>Total Duration:</strong> 120 Minutes (2 Hours)</li>
            <li><strong>Medium of Exam:</strong> English language (with bilingual translation section)</li>
            <li><strong>Qualifying Standard:</strong> General: 50% (50 Marks) | Reserved (SC/ST/OBC/EWS/PwBD): 45% (45 Marks)</li>
          </ul>
        </div>
      `
    },
    {
      id: 29,
      title: '29. Descriptive Exam Syllabus: Essay Writing (250 Words – 40 Marks)',
      badge: 'Essay Writing',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates must write an essay of approximately 250 words carrying <strong>40 Marks</strong>. Key focus areas include:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Judicial and constitutional governance topics</li>
            <li>Contemporary social, environmental, and legal issues</li>
            <li>Coherence, paragraph transitions, vocabulary, and grammatical precision</li>
          </ul>
        </div>
      `
    },
    {
      id: 30,
      title: '30. Descriptive Exam Syllabus: Letter Writing (15 Marks)',
      badge: 'Letter Writing',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Letter Writing carries <strong>15 Marks</strong>. It assesses official and formal correspondence formats:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Official communication to administrative authorities, registrar offices, or institutional bodies</li>
            <li>Correct layout (Sender/Receiver addresses, subject line, formal salutation, closing courtesy)</li>
            <li>Conciseness, clarity of expression, and respectful tone</li>
          </ul>
        </div>
      `
    },
    {
      id: 31,
      title: '31. Descriptive Exam Syllabus: Grammar & Comprehension Passage (25 Marks)',
      badge: 'Grammar & Passage',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>This section carries <strong>25 Marks</strong> and is divided into:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Reading Comprehension:</strong> Unseen passage followed by inferential, vocabulary, and contextual questions.</li>
            <li><strong>English Grammar:</strong> Correction of sentences, prepositions, active/passive voice, direct/indirect narration, idiomatic usage, and subject-verb agreement.</li>
          </ul>
        </div>
      `
    },
    {
      id: 32,
      title: '32. Descriptive Exam Syllabus: Hindi ↔ English Translation (20 Marks)',
      badge: 'Translation',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Translation carries <strong>20 Marks</strong> divided equally into two components:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-slate-900 block text-xs">Translation: Hindi to English</span>
              <p class="text-xs text-slate-600 mt-1">10 Marks – Transcribing Hindi passage accurately into standard legal/administrative English.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-slate-900 block text-xs">Translation: English to Hindi</span>
              <p class="text-xs text-slate-600 mt-1">10 Marks – Rendering English administrative passage into accurate Hindi.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 33,
      title: '33. Minimum Qualifying Cut-Off Marks in Main Descriptive Exam',
      badge: 'Cut-off Marks',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>To qualify Stage-III and become eligible for the Stage-IV Interview, candidates must secure:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Category</th>
                  <th class="p-2.5">Minimum Qualifying Percentage</th>
                  <th class="p-2.5">Minimum Passing Marks</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold">General Category Candidates</td>
                  <td class="p-2.5 font-bold text-blue-700">50%</td>
                  <td class="p-2.5 font-bold">50 Marks out of 100</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Reserved Categories (SC / ST / OBC-NCL / EWS / PwBD)</td>
                  <td class="p-2.5 font-bold text-emerald-700">45%</td>
                  <td class="p-2.5 font-bold">45 Marks out of 100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 34,
      title: '34. Stage-IV: Interview / Viva Voce Scheme (15 Marks)',
      badge: 'Stage 4 Interview',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates shortlisted from Stage-III will appear for the personal Interview before the Selection Board:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Maximum Marks:</strong> 15 Marks</li>
            <li><strong>Minimum Qualifying Cut-Off:</strong> <em>There are NO minimum qualifying marks in the interview.</em></li>
            <li><strong>Assessment:</strong> Professional demeanor, legal/court secretarial aptitude, communication skills, integrity, and knowledge of court operations.</li>
          </ul>
        </div>
      `
    },
    {
      id: 35,
      title: '35. Final Merit List Formulation & Stage Weightages',
      badge: 'Final Merit',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The final select / merit list is prepared strictly by adding marks secured in Stages II, III, and IV:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Stage</th>
                  <th class="p-2.5">SPA Marks</th>
                  <th class="p-2.5">PA Marks</th>
                  <th class="p-2.5">Nature</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold">Stage-I: English Typing Test</td>
                  <td class="p-2.5">—</td>
                  <td class="p-2.5">—</td>
                  <td class="p-2.5 font-bold text-slate-500">Qualifying</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Stage-II: English Shorthand Tests</td>
                  <td class="p-2.5 font-bold text-blue-700">120 Marks</td>
                  <td class="p-2.5 font-bold text-blue-700">110 Marks</td>
                  <td class="p-2.5 text-emerald-700 font-bold">Counts for Merit</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Stage-III: Main (Descriptive) Exam</td>
                  <td class="p-2.5 font-bold text-blue-700">100 Marks</td>
                  <td class="p-2.5 font-bold text-blue-700">100 Marks</td>
                  <td class="p-2.5 text-emerald-700 font-bold">Counts for Merit</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Stage-IV: Interview</td>
                  <td class="p-2.5 font-bold text-blue-700">15 Marks</td>
                  <td class="p-2.5 font-bold text-blue-700">15 Marks</td>
                  <td class="p-2.5 text-emerald-700 font-bold">Counts for Merit</td>
                </tr>
                <tr class="bg-slate-50 font-black">
                  <td class="p-2.5 text-slate-900">Total Aggregate Marks</td>
                  <td class="p-2.5 text-emerald-700">235 Marks</td>
                  <td class="p-2.5 text-emerald-700">225 Marks</td>
                  <td class="p-2.5 text-blue-800">Final Merit Score</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 36,
      title: '36. Tie-Breaking Hierarchy & Resolution Principles',
      badge: 'Tie Breaking',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Where two or more candidates obtain equal aggregate marks, the tie will be resolved applying the following sequence of rules one after another:</p>
          <ol class="list-decimal pl-5 space-y-1.5 font-semibold text-slate-800">
            <li>Higher marks obtained in <strong>Stage-II (English Shorthand Tests)</strong>.</li>
            <li>Higher marks obtained in <strong>Stage-III (Main Descriptive Examination)</strong>.</li>
            <li>Higher marks obtained in <strong>Stage-IV (Interview)</strong>.</li>
            <li><strong>Date of Birth:</strong> The candidate older in age gets preference over the younger candidate.</li>
          </ol>
        </div>
      `
    },
    {
      id: 37,
      title: '37. Examination Fee Structure by Category',
      badge: 'Fee Details',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The non-refundable online fee payable for each application is as follows:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Category</th>
                  <th class="p-2.5">Examination Fee</th>
                  <th class="p-2.5">Transaction Charges</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold">General / OBC-NCL / EWS Candidates</td>
                  <td class="p-2.5 font-bold text-blue-700">₹1,500.00</td>
                  <td class="p-2.5">Applicable bank charges extra</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">SC / ST / PwBD (40%+ Specified Categories)</td>
                  <td class="p-2.5 font-bold text-emerald-700">₹1,300.00</td>
                  <td class="p-2.5">Applicable bank charges extra</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-500">Note: Candidates applying for both SPA and PA must submit separate online application forms and pay separate fees for each post.</p>
        </div>
      `
    },
    {
      id: 38,
      title: '38. Payment Gateway Modes, SBI Helplines & Grievance Redressal',
      badge: 'Payment Support',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Fee can be paid online through UPI, Net Banking, Credit Card, or Debit Card via the integrated SBI ePay gateway.</p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <span class="font-bold text-slate-900 block text-xs">SBI Payment Grievance Helplines</span>
            <p><strong>Customer Support:</strong> 022-65361671 | Email: <em>sbiepay@sbi.co.in</em></p>
            <p><strong>Nodal Officer:</strong> 022-20876121 | Email: <em>agm3.aggregator@sbi.co.in</em></p>
            <p><strong>Technical Application Query Helpline:</strong> +91-7353014447</p>
          </div>
        </div>
      `
    },
    {
      id: 39,
      title: '39. Correction Window Policy (12–14 Oct 2026, Charges & Non-Editable Fields)',
      badge: 'Correction Window',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Section VIII allows a 3-day correction window from <strong>12.10.2026 (11:00 AM) to 14.10.2026 (11:00 PM)</strong>:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Non-Editable Fields:</strong> Absolutely NO modification is permitted in <strong>Name, Category, Date of Birth, and Mobile Number</strong>.</li>
            <li><strong>Correction Charges:</strong> ₹200/- for 1st correction and resubmission; ₹500/- for 2nd correction and resubmission.</li>
            <li><strong>Maximum Allowed:</strong> Candidates can modify and resubmit their form a maximum of <strong>two times</strong>.</li>
            <li>The latest modified application will be treated as valid and previous versions stand cancelled.</li>
          </ul>
        </div>
      `
    },
    {
      id: 40,
      title: '40. Passport Photograph Specifications (100–200 KB, 75% Face Coverage)',
      badge: 'Photo Specs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Section VII (iv-vi) establishes stringent criteria for the scanned colour passport photo:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>File Format & Size:</strong> JPEG format, between <strong>100 KB and 200 KB</strong>.</li>
            <li><strong>Dimensions:</strong> Approximately 3.5 cm (width) × 4.5 cm (height).</li>
            <li><strong>Recency:</strong> Must not be more than three (3) months old from notice publication date.</li>
            <li><strong>75% Face Coverage:</strong> Face must cover at least 3/4th (75%) of the image area.</li>
            <li><strong>Facial Alignment:</strong> Direct look at camera, straight head alignment, both ear lobes clearly visible.</li>
            <li><strong>Restrictions:</strong> Without cap, mask, or spectacles.</li>
          </ul>
        </div>
      `
    },
    {
      id: 41,
      title: '41. Mandatory Live Photograph Capture via Webcam / Mobile Device',
      badge: 'Live Photo',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl space-y-1">
            <span class="font-bold text-blue-950 block text-sm">Mandatory Live Webcam Capture</span>
            <p class="text-blue-900">Capture of live photograph is <strong>mandatory</strong> for application submission. Candidates must capture a live photo through webcam or mobile device in good lighting conditions showing the face clearly.</p>
            <p class="text-blue-900 font-semibold">The live photograph captured during application will be automatedly cross-matched with the uploaded passport photo. If a mismatch is detected, the applicant will not be allowed to proceed.</p>
          </div>
        </div>
      `
    },
    {
      id: 42,
      title: '42. Left Thumb Impression & Signature Rules (Capital Letters Banned)',
      badge: 'Signature & Thumb',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Left Hand Thumb Impression:</strong> JPEG format, <strong>50 KB to 200 KB</strong>. In case left hand thumb is unavailable, right hand thumb impression may be used.</li>
            <li><strong>Scanned Signature:</strong> JPEG format, <strong>50 KB to 150 KB</strong>. Signature must be clear and legible on white paper.</li>
            <li><strong>Capital Letters Prohibition:</strong> <em>Writing full name in Capital Letters will NOT be accepted as a signature and such applications will be summarily rejected.</em></li>
          </ul>
        </div>
      `
    },
    {
      id: 43,
      title: '43. Step-by-Step Online Application Procedure on Digialm Portal',
      badge: 'How to Apply',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <ol class="list-decimal pl-5 space-y-2">
            <li><strong>Registration:</strong> Visit the official link on Digialm (https://cdn.digialm.com/EForms/configuredHtml/33131/102306/Index.html) and register with active mobile number and email ID.</li>
            <li><strong>Profile & Details:</strong> Fill in personal details, educational qualifications, shorthand and typing speed credentials.</li>
            <li><strong>Document Uploads:</strong> Upload passport photograph, capture mandatory live photo, upload left thumb impression and signature in prescribed specifications.</li>
            <li><strong>Fee Payment:</strong> Make online fee payment through SBI ePay gateway (₹1500 for UR/OBC/EWS, ₹1300 for SC/ST/PwBD).</li>
            <li><strong>Confirmation Page:</strong> Download and print the Confirmation Page. Keep system-generated Application Number safe for future reference. Do NOT send hard copy to Delhi High Court.</li>
          </ol>
        </div>
      `
    },
    {
      id: 44,
      title: '44. Applying for Both Posts: Separate Forms & Fees Mandate',
      badge: 'Both Posts Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Section II Note (ii) mandates that candidates desiring to apply for both Senior Personal Assistant (SPA) and Personal Assistant (PA) must submit <strong>a separate application form and pay the requisite fee separately for each post</strong>.</p>
          <p>Each application will generate a distinct Application Number and will be processed independently through the respective examination stages.</p>
        </div>
      `
    },
    {
      id: 45,
      title: '45. Mandatory Photo Identity Proofs to Carry on Exam Day',
      badge: 'Exam Day IDs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>At every stage of the examination (Typing, Shorthand, Main Descriptive, Interview), candidates must carry:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Two identical passport size colour photographs</strong> (same as uploaded in the online form).</li>
            <li><strong>One Original Photo ID Proof:</strong> Aadhaar Card / E-Aadhaar printout, Voter ID Card, Driving Licence, PAN Card, Passport, Employer ID, or ESM Discharge Book.</li>
            <li><em>Important:</em> If the photo identity card does not display the complete Date of Birth, the candidate must carry an additional original certificate (e.g. 10th marksheet) as proof of Date of Birth.</li>
          </ul>
        </div>
      `
    },
    {
      id: 46,
      title: '46. Code of Conduct, Anti-Cheating Norms & Lifetime Debarment',
      badge: 'Anti-Malpractice',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Section IX (xv) lays down uncompromising anti-malpractice rules. Any candidate found cheating, impersonating, submitting forged documents, carrying electronic gadgets (smartwatch, mobile, bluetooth), or using influence will:</p>
          <ul class="list-disc pl-5 space-y-1 text-red-800">
            <li>Have their candidature instantly cancelled for the current recruitment.</li>
            <li>Be <strong>debarred for lifetime</strong> from all future recruitment processes conducted by the High Court of Delhi.</li>
            <li>Face criminal prosecution under the Bharatiya Nyaya Sanhita (BNS) and Information Technology (IT) Act.</li>
          </ul>
        </div>
      `
    },
    {
      id: 47,
      title: '47. Duties and Responsibilities of SPA and PA (Annexure-A Analysis)',
      badge: 'Duties & Roles',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Annexure 'A' of the notification enumerates 19 detailed duties and responsibilities (a to s) entrusted to Senior Personal Assistants and Personal Assistants:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Court & Chamber Dictation:</strong> Take verbatim dictation of court proceedings, orders, judgments, and official references in Court, Chamber, or residential office of the Hon’ble Judge.</li>
            <li><strong>Speedy Transcription:</strong> Transcribe dictations accurately, expeditiously, and check thoroughly for correctness before submission to the Hon’ble Judge.</li>
            <li><strong>Digital Authentication & Upload:</strong> Ensure signed orders/judgments are authenticated, digitally signed, and uploaded to the official server/website; maintain comprehensive record registers.</li>
            <li><strong>Secretarial Administration:</strong> Assist the Private Secretary in secretarial/administrative management and discharge PS duties during absence.</li>
            <li><strong>Confidentiality:</strong> Maintain absolute confidentiality regarding judicial proceedings, draft judgments, and sensitive judicial correspondence.</li>
            <li><strong>Electronic Security:</strong> Ensure safe custody and security of electronic records, passwords, and digital files, preventing any unauthorized access.</li>
          </ul>
        </div>
      `
    },
    {
      id: 48,
      title: '48. Odd Working Hours, Holidays & Residential Office Requirements',
      badge: 'Work Environment',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl space-y-1">
            <span class="font-bold text-amber-950 block text-xs uppercase tracking-wider">Crucial Work Expectation Notice</span>
            <p class="text-amber-900">As stipulated in Section IX (xxiii) and Annexure 'A' clause (r), selected candidates <strong>will also have to work even at odd hours, on holidays, or at the residential office of the Hon’ble Judge</strong> whenever so required in the interest of justice or for the efficient discharge of official judicial work.</p>
          </div>
        </div>
      `
    },
    {
      id: 49,
      title: '49. Frequently Asked Questions (Official FAQs)',
      badge: 'FAQs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="space-y-2">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <strong class="text-slate-900 text-xs sm:text-sm block">Q: Can General (UR) category candidates apply for Personal Assistant (PA)?</strong>
              <p class="text-slate-600 text-xs mt-1">No. There are NIL (0) vacancies for General category under the Personal Assistant post. General category candidates are eligible only for Senior Personal Assistant (SPA).</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <strong class="text-slate-900 text-xs sm:text-sm block">Q: What is the shorthand speed required for SPA and PA?</strong>
              <p class="text-slate-600 text-xs mt-1">Senior Personal Assistant (SPA) requires 110 w.p.m. English Shorthand speed. Personal Assistant (PA) requires 100 w.p.m. English Shorthand speed.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <strong class="text-slate-900 text-xs sm:text-sm block">Q: Can outside-Delhi OBC candidates claim reservation?</strong>
              <p class="text-slate-600 text-xs mt-1">No. Only candidates possessing an OBC Certificate issued by the Govt. of NCT of Delhi along with an NCL Certificate issued in FY 2026-2027 are entitled to OBC reservation benefits.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <strong class="text-slate-900 text-xs sm:text-sm block">Q: Are candidates given two chances in Shorthand Test?</strong>
              <p class="text-slate-600 text-xs mt-1">Yes. Each candidate will be given the opportunity to appear in two shorthand dictation and transcription tests, and the best of the two will be considered.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <strong class="text-slate-900 text-xs sm:text-sm block">Q: Is a scribe or compensatory time permitted for PwBD candidates?</strong>
              <p class="text-slate-600 text-xs mt-1">No. Due to the judicial working conditions and essential shorthand/typing requirements, no scribe or compensatory time is provided, and all candidates must qualify all stages individually.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 50,
      title: '50. Official Links & Related Delhi / Court Recruitments',
      badge: 'Official Links',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Access direct official portals and explore related ongoing court examinations:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
            <a href="https://cdn.digialm.com/EForms/configuredHtml/33131/102306/Index.html" target="_blank" rel="noopener noreferrer" class="p-3 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition block">
              <span class="font-bold text-blue-900 text-xs block flex items-center justify-between">
                <span>Direct Apply Online Form</span>
                <span>↗</span>
              </span>
              <span class="text-xs text-blue-700">Official Digialm Application Portal</span>
            </a>
            <a href="https://www.delhihighcourt.nic.in/files/2026-09/recuritment/vacancy_circular_for_spa.pdf" target="_blank" rel="noopener noreferrer" class="p-3 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition block">
              <span class="font-bold text-slate-900 text-xs block flex items-center justify-between">
                <span>Official Vacancy Notice PDF</span>
                <span>↗</span>
              </span>
              <span class="text-xs text-slate-600">Download 14-Page Detailed Circular</span>
            </a>
            <a href="https://www.delhihighcourt.nic.in/web/job-openings" target="_blank" rel="noopener noreferrer" class="p-3 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition block">
              <span class="font-bold text-slate-900 text-xs block flex items-center justify-between">
                <span>Delhi High Court Job Openings</span>
                <span>↗</span>
              </span>
              <span class="text-xs text-slate-600">Official Recruitment Section</span>
            </a>
            <a href="patna-high-court-assistant-admit-card-2026.html" class="p-3 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition block">
              <span class="font-bold text-slate-900 text-xs block">Patna High Court Assistant 2026</span>
              <span class="text-xs text-slate-600">Ex-Cadre Assistant Examination</span>
            </a>
          </div>
        </div>
      `
    }
  ];
}

export const DELHI_HIGH_COURT_SPA_PA_2026_EXAM: ExamRecord = {
  id: 'delhi-high-court-spa-pa-2026',
  slug: 'delhi-high-court-spa-pa-recruitment-2026',
  examName: 'Delhi High Court SPA & PA Recruitment 2026',
  shortName: 'Delhi High Court SPA / PA 2026',
  postName: 'Senior Personal Assistant (SPA) & Personal Assistant (PA) – Group B',
  organization: 'High Court of Delhi : New Delhi',
  category: 'Govt Exam',
  state: 'Delhi',
  totalVacancy: '150 Posts',
  applicationStartDate: '2026-09-15',
  applicationLastDate: '2026-10-05',
  examDate: 'Not Released / To Be Updated',
  admitCardDate: 'Not Released / To Be Updated',
  answerKeyDate: 'Not Released / To Be Updated',
  resultDate: 'Not Released / To Be Updated',
  cutOffDate: 'Not Released / To Be Updated',
  status: 'APPLICATION_OPEN',
  education: ['Graduation'],
  minimumQualificationLevel: 'Graduation in Any Discipline + English Shorthand & Typing',
  acceptedQualificationLevels: ['Graduation', 'Post Graduation'],
  higherQualificationAccepted: true,
  ageMin: 18,
  ageMax: 32,
  ageRelaxationInfo: 'SC/ST: 5 years, OBC-NCL (Delhi): 3 years, PwBD: 10 to 15 years, ESM: 3 years. No upper age limit for regular employees of Delhi High Court.',
  gender: 'All',
  logoIcon: '⚖️',
  officialWebsite: 'https://www.delhihighcourt.nic.in/web/job-openings',
  officialNotification: 'https://www.delhihighcourt.nic.in/files/2026-09/recuritment/vacancy_circular_for_spa.pdf',
  applyLink: 'https://cdn.digialm.com/EForms/configuredHtml/33131/102306/Index.html',
  description: 'Delhi High Court SPA & PA Recruitment 2026 – Apply online for 150 vacancies of Senior Personal Assistant (117) and Personal Assistant (33). Check eligibility, 110/100 WPM shorthand norms, pay levels 8 & 7, syllabus, and official circular.',
  shortSummary: 'High Court of Delhi has invited online applications for 150 Group B posts of Senior Personal Assistant (117) and Personal Assistant (33). Apply online from 15 September to 05 October 2026.',
  importantDates: [
    { label: 'Official Vacancy Circular', date: '02 September 2026' },
    { label: 'Online Application Commencement', date: '15 September 2026 (11:00 AM)', isHighlight: true },
    { label: 'Last Date for Online Application & Fee', date: '05 October 2026 (11:00 PM)', isHighlight: true },
    { label: 'Application Form Correction Window', date: '12 to 14 October 2026', isHighlight: true },
    { label: 'Admit Card Release Date', date: 'Not Released / To Be Updated' },
    { label: 'Stage-I English Typing Test Date', date: 'Not Released / To Be Updated', isHighlight: true },
    { label: 'Stage-II Shorthand Test Date', date: 'Not Released / To Be Updated' },
    { label: 'Stage-III Main Descriptive Exam Date', date: 'Not Released / To Be Updated' },
    { label: 'Stage-IV Interview Date', date: 'Not Released / To Be Updated' }
  ],
  applicationFee: [
    { category: 'General / OBC-NCL / EWS Candidates', amount: '₹1,500.00' },
    { category: 'SC / ST / Specified PwBD Categories', amount: '₹1,300.00' },
    { category: 'Correction Charge (1st Time)', amount: '₹200.00' },
    { category: 'Correction Charge (2nd Time)', amount: '₹500.00' }
  ],
  vacancies: [
    { category: 'Senior Personal Assistant (SPA) – Level 8', postCount: 117 },
    { category: 'Personal Assistant (PA) – Level 7', postCount: 33 }
  ],
  selectionProcess: [
    'Stage 1: English Typing Test on Computer (10 Minutes, 40 WPM, Max 3% Mistakes - Qualifying)',
    'Stage 2: English Shorthand Tests (SPA: 110 WPM, 120 Marks | PA: 100 WPM, 110 Marks; 2 chances, best of two counts)',
    'Stage 3: Main (Descriptive) Examination (100 Marks, 120 Minutes - Essay, Letter, Grammar, Translation; Min. 50% UR / 45% Reserved)',
    'Stage 4: Interview / Viva Voce (15 Marks, No Minimum Cut-Off)',
    'Final Merit List: Stage-II Shorthand + Stage-III Main Descriptive + Stage-IV Interview (Total: 235 Marks for SPA / 225 Marks for PA)'
  ],
  examPattern: [
    {
      stageName: 'Stage-I: English Typing Test (Qualifying)',
      mode: 'Computer-Based Typing Test',
      duration: '10 Minutes',
      negativeMarking: 'Permissible mistakes up to 3% of total words typed',
      subjects: [
        { name: 'English Typing Speed Test (Minimum 40 Words Per Minute)', questions: 1, marks: 0 }
      ]
    },
    {
      stageName: 'Stage-II: English Shorthand Test (SPA: 110 WPM | PA: 100 WPM)',
      mode: 'Dictation (5 Mins) + Computer Transcription (45 Mins)',
      duration: '50 Minutes Total',
      negativeMarking: '4 marks deducted per full mistake, 2 marks per half mistake (Max 5% mistakes permissible)',
      subjects: [
        { name: 'English Shorthand Dictation & Computer Transcription (Best of 2 trials)', questions: 1, marks: 120 }
      ]
    },
    {
      stageName: 'Stage-III: Main (Descriptive) Examination',
      mode: 'Offline Written Descriptive Test',
      duration: '120 Minutes (2 Hours)',
      negativeMarking: 'No negative marking (Descriptive evaluation)',
      subjects: [
        { name: 'Essay Writing (250 Words)', questions: 1, marks: 40 },
        { name: 'Letter Writing (Formal / Official)', questions: 1, marks: 15 },
        { name: 'Grammar & Comprehension Passage', questions: 1, marks: 25 },
        { name: 'Translation (Hindi to English: 10M + English to Hindi: 10M)', questions: 2, marks: 20 }
      ]
    },
    {
      stageName: 'Stage-IV: Interview / Viva Voce',
      mode: 'In-person Interview at High Court of Delhi',
      duration: 'Standard Interview Session',
      negativeMarking: 'N/A',
      subjects: [
        { name: 'Personal Interview & Secretarial Aptitude', questions: 1, marks: 15 }
      ]
    }
  ],
  salary: {
    payScale: 'SPA: Level-8 (₹47,600 – ₹1,51,100) | PA: Level-7 (₹44,900 – ₹1,42,400)',
    inHand: '₹76,000 to ₹86,000 per month (approx. in Delhi including DA, HRA, Transport Allowance)',
    allowances: 'DA (~53%), HRA (30% in Delhi), Transport Allowance (TPTA), CGHS & High Court Judicial perks'
  },
  faq: [
    {
      q: 'What is the total vacancy in Delhi High Court SPA & PA Recruitment 2026?',
      a: 'A total of 150 Group B vacancies are notified: 117 for Senior Personal Assistant (SPA) and 33 for Personal Assistant (PA).'
    },
    {
      q: 'Are General category candidates eligible for Personal Assistant (PA)?',
      a: 'No. The official circular confirms that there is NIL (0) vacancy for the General category under the Personal Assistant post. General candidates can apply only for Senior Personal Assistant (SPA).'
    },
    {
      q: 'What is the shorthand and typing speed required?',
      a: 'Senior Personal Assistant (SPA) requires 110 w.p.m. English Shorthand and 40 w.p.m. Typing. Personal Assistant (PA) requires 100 w.p.m. English Shorthand and 40 w.p.m. Typing.'
    },
    {
      q: 'What are the application dates for Delhi High Court SPA & PA 2026?',
      a: 'Online applications commence on 15 September 2026 (11:00 AM) and close on 05 October 2026 (11:00 PM). The application correction window will be open from 12 to 14 October 2026.'
    },
    {
      q: 'What is the application fee?',
      a: '₹1,500/- for General, OBC-NCL, and EWS candidates; ₹1,300/- for SC, ST, and specified PwBD candidates.'
    },
    {
      q: 'Can candidates apply for both SPA and PA posts?',
      a: 'Yes, eligible candidates can apply for both posts by submitting separate online application forms and paying the requisite fee separately for each post.'
    },
    {
      q: 'What are the components of the Main Descriptive Examination?',
      a: 'The 100-mark test includes Essay Writing (40 Marks), Letter Writing (15 Marks), Grammar & Comprehension (25 Marks), and Hindi ↔ English Translation (20 Marks).'
    },
    {
      q: 'How is the final merit list calculated?',
      a: 'The final merit list is computed by summing marks from Stage-II (Shorthand: 120M SPA / 110M PA) + Stage-III (Main Descriptive: 100M) + Stage-IV (Interview: 15M). Typing in Stage-I is qualifying only.'
    }
  ],
  allInformation: generateDelhiHighCourtSpaPa50Sections()
};

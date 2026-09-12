import { ExamRecord, ExamInfoSection } from '../types/exam';

export function generateUkpscUpperPcs50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. Recruitment Summary',
      badge: 'Overview',
      content: `
        <div class="space-y-4 text-slate-700 leading-relaxed">
          <p>The <strong>Uttarakhand Public Service Commission (UKPSC)</strong>, Haridwar, has officially released the detailed recruitment notification for the <strong>Uttarakhand Combined State Civil / Upper Subordinate Services Examination - 2026</strong> (उत्तराखण्ड सम्मिलित राज्य सिविल/प्रवर अधीनस्थ सेवा परीक्षा-2026), commonly designated as <strong>UKPSC Upper PCS 2026</strong>.</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Parameter</th><th class="p-2.5 border border-slate-200">Official Specification</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">Exam Name</td><td class="p-2.5">Uttarakhand Combined State Civil / Upper Subordinate Services Examination - 2026</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Conducting Body</td><td class="p-2.5">Uttarakhand Public Service Commission (UKPSC), Haridwar</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Advertisement No.</td><td class="p-2.5">A-1/E-1/2026-27 dated 09 September 2026</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Total Vacancies</td><td class="p-2.5 font-bold text-blue-700">67 Posts (Group 'B' / समूह 'ख')</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Pay Scales</td><td class="p-2.5">Level-10 (₹56,100 - ₹1,77,500), Level-07 (₹44,900 - ₹1,42,400), Level-06 (₹35,400 - ₹1,12,400)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Application Dates</td><td class="p-2.5 font-bold text-emerald-700">09 September 2026 to 29 September 2026 (11:59:59 PM)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Correction Window</td><td class="p-2.5">07 October 2026 to 16 October 2026 (11:59:59 PM)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Selection Process</td><td class="p-2.5">Prelims Exam (Objective) &rarr; Mains Written Exam (1500 Marks) &rarr; Interview (150 Marks)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Official Website</td><td class="p-2.5"><a href="https://psc.uk.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">psc.uk.gov.in</a> / <a href="https://pscuk.net.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">pscuk.net.in</a></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: '2. Conducting Organization',
      badge: 'Commission',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed">
          <p><strong>Uttarakhand Public Service Commission (UKPSC)</strong> is the premier constitutional recruitment body for Group 'A' and Group 'B' gazetted and executive administrative services under the Government of Uttarakhand.</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs">
            <li><strong>Headquarters:</strong> Uttarakhand Public Service Commission, Gurukul Kangri, Haridwar - 249404, Uttarakhand.</li>
            <li><strong>Official Portals:</strong> <a href="https://psc.uk.gov.in" target="_blank" class="text-blue-600 underline">https://psc.uk.gov.in/</a> &amp; Application Portal: <a href="https://pscuk.net.in" target="_blank" class="text-blue-600 underline">https://pscuk.net.in/</a></li>
            <li><strong>Helpline Contact:</strong> 01334-244143, 01334-244282, Mobile: 07060002410</li>
            <li><strong>Technical Support Email:</strong> ukpschelpline@gmail.com</li>
          </ul>
        </div>
      `
    },
    {
      id: 3,
      title: '3. Official Examination Title',
      badge: 'Nomenclature',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed">
          <p>The official statutory nomenclature in the recruitment notification is:</p>
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs font-semibold text-blue-900">
            उत्तराखण्ड सम्मिलित राज्य सिविल/प्रवर अधीनस्थ सेवा परीक्षा-2026 (Uttarakhand Combined State Civil / Upper Subordinate Services Examination - 2026).
          </div>
          <p class="text-xs">It serves as the competitive civil services gateway for Deputy Collector (Executive Magistrate), Deputy Superintendent of Police (DSP), District Commandant (Home Guards), Finance Officer, Block Development Officer (BDO), and specialized technical departmental officers.</p>
        </div>
      `
    },
    {
      id: 4,
      title: '4. Advertisement Details & Notification PDF',
      badge: 'Official PDF',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed">
          <p><strong>Advertisement Reference:</strong> Advt. No. <code>A-1/E-1/2026-27</code>, published on <strong>09 September 2026</strong> comprising 81 official pages containing complete service rules, category reservations, physical standards, syllabus, and proformas.</p>
          <div class="flex flex-wrap gap-3 my-2">
            <a href="https://psc.uk.gov.in/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition">
              Official Website: psc.uk.gov.in &rarr;
            </a>
            <a href="https://pscuk.net.in/notification?postid=eyJpdiI6ImxxVjU4ZjJzRXZ4Ty84SUoiLCJ2YWx1ZSI6Im5PY0NteTg9IiwibWFjIjoiIiwidGFnIjoicU0yNXhZTkthbzR4TVhmZkI1QmEzQT09In0=" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold rounded-xl transition">
              Direct Online Application Portal &rarr;
            </a>
          </div>
        </div>
      `
    },
    {
      id: 5,
      title: '5. Total Tentative Vacancies',
      badge: '67 Posts',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed">
          <p>UKPSC has announced a total of <strong>67 vacancies</strong> across 16 different state services under Group 'B'. As per the notification, the number of posts may be increased or decreased before the preliminary exam result.</p>
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
            <strong>Important Provision:</strong> Under Rule 6(5) of the Combined State Civil/Upper Subordinate Service Examination Rules, 2023, <strong>no waiting list (25% प्रतीक्षारत सूची)</strong> will be prepared for this recruitment.
          </div>
          <p class="text-xs"><strong>Category-Wise Vertical Breakup:</strong> Unreserved (UR/General): 37 | SC: 13 | ST: 00 | OBC: 11 | EWS: 06 &mdash; <strong>Total: 67 Posts</strong>.</p>
          <p class="text-xs"><strong>Horizontal Reservation Breakup:</strong> Uttarakhand Women: 14 posts | Uttarakhand Rajya Andolankari: 02 posts.</p>
        </div>
      `
    },
    {
      id: 6,
      title: '6. Post Names & Participating Departments',
      badge: '16 Posts',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed">
          <p class="text-xs">The recruitment spans 16 distinct state civil and technical executive posts across Government of Uttarakhand departments:</p>
          <ol class="list-decimal pl-5 space-y-1 text-xs">
            <li><strong>Deputy Collector</strong> – Personnel &amp; Vigilance Dept (राजपत्रित, स्थायी, अंशदायी पेंशन)</li>
            <li><strong>Deputy Superintendent of Police (DSP)</strong> – Home Dept (राजपत्रित, स्थायी, अंशदायी पेंशन)</li>
            <li><strong>District Commandant, Home Guards</strong> – Home Dept (राजपत्रित, स्थायी, अंशदायी पेंशन)</li>
            <li><strong>Finance Officer / Treasury Officer</strong> – Finance Dept (राजपत्रित, स्थायी, अंशदायी पेंशन)</li>
            <li><strong>Assistant Director / Audit Officer</strong> – Finance Dept (राजपत्रित, स्थायी, अंशदायी पेंशन)</li>
            <li><strong>Block Development Officer (BDO)</strong> – Rural Development Dept (राजपत्रित, स्थायी, अंशदायी पेंशन)</li>
            <li><strong>State Tax Officer</strong> – State Tax Dept (अराजपत्रित, स्थायी, अंशदायी पेंशन)</li>
            <li><strong>Assistant Commissioner (State Tax)</strong> – State Tax Dept (राजपत्रित, स्थायी, अंशदायी पेंशन)</li>
            <li><strong>Deputy Education Officer / Staff Officer / Law Officer</strong> – School Education Dept (राजपत्रित, स्थायी, अंशदायी पेंशन)</li>
            <li><strong>Assistant Labour Commissioner</strong> – Labour Dept (राजपत्रित, स्थायी, अंशदायी पेंशन)</li>
            <li><strong>Assistant Director / Under Secretary</strong> – Sanskrit Education Dept (राजपत्रित, अस्थायी, अंशदायी पेंशन)</li>
            <li><strong>Assistant Director (Factory / Boiler)</strong> – Labour Dept (राजपत्रित, स्थायी, अंशदायी पेंशन)</li>
            <li><strong>Superintendent, Certified Home</strong> – Women Welfare Dept (राजपत्रित, अस्थायी, अंशदायी पेंशन)</li>
            <li><strong>Plantation / Nursery Development Officer Gr-II</strong> – Horticulture &amp; Food Processing Dept (राजपत्रित, स्थायी, अंशदायी पेंशन)</li>
            <li><strong>District Information Officer</strong> – Information &amp; Public Relations Dept (राजपत्रित, स्थायी, अंशदायी पेंशन)</li>
            <li><strong>Case Worker</strong> – Women Welfare &amp; Child Development Dept (राजपत्रित, स्थायी, अंशदायी पेंशन)</li>
          </ol>
        </div>
      `
    },
    {
      id: 7,
      title: '7. Force-Wise & Category-Wise Vacancy Breakdown',
      badge: 'Official Matrix',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto">
          <table class="w-full text-xs text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr>
                <th class="p-2 border">Code</th>
                <th class="p-2 border">Post Title &amp; Department</th>
                <th class="p-2 border">Pay Level</th>
                <th class="p-2 border">UR</th>
                <th class="p-2 border">SC</th>
                <th class="p-2 border">ST</th>
                <th class="p-2 border">OBC</th>
                <th class="p-2 border">EWS</th>
                <th class="p-2 border">Total</th>
                <th class="p-2 border">UK Women</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2 border font-bold">01</td><td class="p-2 border">Deputy Collector (Personnel Dept)</td><td class="p-2 border">Level-10</td><td class="p-2 border">04</td><td class="p-2 border">02</td><td class="p-2 border">00</td><td class="p-2 border">01</td><td class="p-2 border">01</td><td class="p-2 border font-bold">08</td><td class="p-2 border">02</td></tr>
              <tr><td class="p-2 border font-bold">02</td><td class="p-2 border">Deputy Superintendent of Police (DSP)</td><td class="p-2 border">Level-10</td><td class="p-2 border">05</td><td class="p-2 border">02</td><td class="p-2 border">00</td><td class="p-2 border">02</td><td class="p-2 border">01</td><td class="p-2 border font-bold">10</td><td class="p-2 border">03</td></tr>
              <tr><td class="p-2 border font-bold">03</td><td class="p-2 border">District Commandant, Home Guards</td><td class="p-2 border">Level-10</td><td class="p-2 border">01</td><td class="p-2 border">00</td><td class="p-2 border">00</td><td class="p-2 border">01</td><td class="p-2 border">00</td><td class="p-2 border font-bold">02</td><td class="p-2 border">00</td></tr>
              <tr><td class="p-2 border font-bold">04</td><td class="p-2 border">Finance Officer / Treasury Officer</td><td class="p-2 border">Level-10</td><td class="p-2 border">04</td><td class="p-2 border">01</td><td class="p-2 border">00</td><td class="p-2 border">01</td><td class="p-2 border">01</td><td class="p-2 border font-bold">07</td><td class="p-2 border">01</td></tr>
              <tr><td class="p-2 border font-bold">05</td><td class="p-2 border">Assistant Director / Audit Officer (Finance)</td><td class="p-2 border">Level-10</td><td class="p-2 border">03</td><td class="p-2 border">01</td><td class="p-2 border">00</td><td class="p-2 border">01</td><td class="p-2 border">00</td><td class="p-2 border font-bold">05</td><td class="p-2 border">01</td></tr>
              <tr><td class="p-2 border font-bold">06</td><td class="p-2 border">Block Development Officer (BDO)</td><td class="p-2 border">Level-10</td><td class="p-2 border">05</td><td class="p-2 border">01</td><td class="p-2 border">00</td><td class="p-2 border">01</td><td class="p-2 border">01</td><td class="p-2 border font-bold">08</td><td class="p-2 border">02</td></tr>
              <tr><td class="p-2 border font-bold">07</td><td class="p-2 border">State Tax Officer (State Tax Dept)</td><td class="p-2 border">Level-07</td><td class="p-2 border">04</td><td class="p-2 border">02</td><td class="p-2 border">00</td><td class="p-2 border">01</td><td class="p-2 border">00</td><td class="p-2 border font-bold">07</td><td class="p-2 border">01</td></tr>
              <tr><td class="p-2 border font-bold">08</td><td class="p-2 border">Assistant Commissioner (State Tax)</td><td class="p-2 border">Level-10</td><td class="p-2 border">02</td><td class="p-2 border">00</td><td class="p-2 border">00</td><td class="p-2 border">01</td><td class="p-2 border">00</td><td class="p-2 border font-bold">03</td><td class="p-2 border">00</td></tr>
              <tr><td class="p-2 border font-bold">09</td><td class="p-2 border">Deputy Education Officer / Staff Officer</td><td class="p-2 border">Level-10</td><td class="p-2 border">03</td><td class="p-2 border">01</td><td class="p-2 border">00</td><td class="p-2 border">01</td><td class="p-2 border">01</td><td class="p-2 border font-bold">06</td><td class="p-2 border">01</td></tr>
              <tr><td class="p-2 border font-bold">10</td><td class="p-2 border">Assistant Labour Commissioner</td><td class="p-2 border">Level-10</td><td class="p-2 border">01</td><td class="p-2 border">00</td><td class="p-2 border">00</td><td class="p-2 border">00</td><td class="p-2 border">00</td><td class="p-2 border font-bold">01</td><td class="p-2 border">00</td></tr>
              <tr><td class="p-2 border font-bold">11</td><td class="p-2 border">Assistant Director (Sanskrit Education)</td><td class="p-2 border">Level-10</td><td class="p-2 border">01</td><td class="p-2 border">00</td><td class="p-2 border">00</td><td class="p-2 border">00</td><td class="p-2 border">00</td><td class="p-2 border font-bold">01</td><td class="p-2 border">00</td></tr>
              <tr><td class="p-2 border font-bold">12</td><td class="p-2 border">Assistant Director (Factory / Boiler)</td><td class="p-2 border">Level-10</td><td class="p-2 border">01</td><td class="p-2 border">01</td><td class="p-2 border">00</td><td class="p-2 border">00</td><td class="p-2 border">00</td><td class="p-2 border font-bold">02</td><td class="p-2 border">01</td></tr>
              <tr><td class="p-2 border font-bold">13</td><td class="p-2 border">Superintendent, Certified Home</td><td class="p-2 border">Level-10</td><td class="p-2 border">01</td><td class="p-2 border">00</td><td class="p-2 border">00</td><td class="p-2 border">00</td><td class="p-2 border">00</td><td class="p-2 border font-bold">01</td><td class="p-2 border">00</td></tr>
              <tr><td class="p-2 border font-bold">14</td><td class="p-2 border">Plantation / Nursery Dev Officer Gr-II</td><td class="p-2 border">Level-10</td><td class="p-2 border">01</td><td class="p-2 border">01</td><td class="p-2 border">00</td><td class="p-2 border">01</td><td class="p-2 border">00</td><td class="p-2 border font-bold">03</td><td class="p-2 border">01</td></tr>
              <tr><td class="p-2 border font-bold">15</td><td class="p-2 border">District Information Officer</td><td class="p-2 border">Level-10</td><td class="p-2 border">01</td><td class="p-2 border">00</td><td class="p-2 border">00</td><td class="p-2 border">00</td><td class="p-2 border">00</td><td class="p-2 border font-bold">01</td><td class="p-2 border">00</td></tr>
              <tr><td class="p-2 border font-bold">16</td><td class="p-2 border">Case Worker (Women Welfare)</td><td class="p-2 border">Level-06</td><td class="p-2 border">01</td><td class="p-2 border">01</td><td class="p-2 border">00</td><td class="p-2 border">00</td><td class="p-2 border">00</td><td class="p-2 border font-bold">02</td><td class="p-2 border">00</td></tr>
              <tr class="bg-blue-50/80 font-black"><td colspan="3" class="p-2.5 border text-right">TOTAL POSTS</td><td class="p-2.5 border text-blue-800">37</td><td class="p-2.5 border text-blue-800">13</td><td class="p-2.5 border text-blue-800">00</td><td class="p-2.5 border text-blue-800">11</td><td class="p-2.5 border text-blue-800">06</td><td class="p-2.5 border text-blue-900 text-sm">67</td><td class="p-2.5 border text-blue-800">14</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 8,
      title: '8. Important Official Dates',
      badge: 'Timeline',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed">
          <ul class="divide-y divide-slate-100 text-xs">
            <li class="py-2 flex justify-between"><span>Notification Publication Date:</span><strong class="text-slate-900">09 September 2026</strong></li>
            <li class="py-2 flex justify-between"><span>Online Application Form Starts:</span><strong class="text-emerald-700 font-bold">09 September 2026</strong></li>
            <li class="py-2 flex justify-between"><span>Last Date for Online Application:</span><strong class="text-red-700 font-bold">29 September 2026 (11:59:59 PM)</strong></li>
            <li class="py-2 flex justify-between"><span>Last Date for Online Fee Payment:</span><strong class="text-slate-900">29 September 2026 (11:59:59 PM)</strong></li>
            <li class="py-2 flex justify-between"><span>Application Form Edit / Correction Window:</span><strong class="text-blue-700 font-bold">07 October 2026 to 16 October 2026 (11:59:59 PM)</strong></li>
            <li class="py-2 flex justify-between"><span>Preliminary Examination Date:</span><span class="text-slate-500 font-medium">Not Released / To Be Updated</span></li>
            <li class="py-2 flex justify-between"><span>Mains Written Examination Date:</span><span class="text-slate-500 font-medium">Not Released / To Be Updated</span></li>
            <li class="py-2 flex justify-between"><span>Personality Test / Interview Date:</span><span class="text-slate-500 font-medium">Not Released / To Be Updated</span></li>
          </ul>
        </div>
      `
    },
    {
      id: 9,
      title: '9. Application Start Date & Portal',
      badge: 'Apply Now',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Online applications commenced on <strong>09 September 2026</strong> on the designated UKPSC recruitment engine: <a href="https://pscuk.net.in" target="_blank" class="text-blue-600 underline font-semibold">https://pscuk.net.in</a>.</p>
          <p>Candidates must register with an active mobile number and email ID. No hard copy of the application form is required to be submitted to the Commission at the preliminary examination stage.</p>
        </div>
      `
    },
    {
      id: 10,
      title: '10. Application Last Date & Crucial Advice',
      badge: '29 Sept 2026',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>The closing date and time for submission of online applications is <strong>29 September 2026 (11:59:59 PM)</strong>.</p>
          <div class="p-3 bg-red-50 border border-red-200 rounded-xl text-red-800">
            <strong>Advisory from Commission:</strong> Applicants are strongly advised to complete registration and fee payment well ahead of the final deadline. The Commission accepts no responsibility for network outages, server load, or banking gateway timeouts during the closing hours.
          </div>
        </div>
      `
    },
    {
      id: 11,
      title: '11. Fee Payment Last Date',
      badge: 'Payment Window',
      content: `
        <div class="space-y-2 text-slate-700 text-xs leading-relaxed">
          <p>The deadline for completing online application fee payment is <strong>29 September 2026 up to 11:59:59 PM</strong>.</p>
          <p>Application forms without successful payment verification (except exempted categories like Uttarakhand orphan children) will be summarily rejected.</p>
        </div>
      `
    },
    {
      id: 12,
      title: '12. Application Form Correction Window & Charges',
      badge: '07-16 Oct 2026',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>As per official notification guidelines, a <strong>10-day correction window</strong> will open 5 working days after the application closing date:</p>
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl">
            <p class="font-bold text-blue-900">Correction Period: 07 October 2026 to 16 October 2026 (11:59:59 PM)</p>
            <p class="text-slate-600 mt-1">Candidates can modify entered details in their submitted form once during this window. Registered mobile number and email address cannot be modified.</p>
          </div>
          <p>If any changes involve a shift from an exempted or lower fee category to a higher fee category, the requisite fee differential must be paid online.</p>
        </div>
      `
    },
    {
      id: 13,
      title: '13. Examination Dates',
      badge: 'Exam Schedule',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>The official dates for the <strong>Preliminary Examination</strong> and subsequent <strong>Main (Written) Examination</strong> have <strong>Not Released / To Be Updated</strong> by the Commission.</p>
          <p>The schedule will be notified separately through major daily newspapers and on the official website <a href="https://psc.uk.gov.in" target="_blank" class="text-blue-600 underline">psc.uk.gov.in</a>.</p>
        </div>
      `
    },
    {
      id: 14,
      title: '14. Admit Card Information',
      badge: 'Online Download',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Admit cards for eligible candidates will be published online on <a href="https://psc.uk.gov.in" target="_blank" class="text-blue-600 underline">psc.uk.gov.in</a> approximately 10 to 15 days prior to the date of examination.</p>
          <p class="font-semibold text-slate-800">Key Guidelines:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>No admit card will be dispatched by post or physical courier.</li>
            <li>Candidates must download the hall ticket using Application Number / Date of Birth or Login credentials.</li>
            <li>Bring the printed admit card along with a valid Government Photo ID (Aadhaar Card, Voter ID, Passport, Driving License, PAN Card) and 2 passport-size photographs to the examination center.</li>
          </ul>
        </div>
      `
    },
    {
      id: 15,
      title: '15. Result Declaration Process',
      badge: 'Merit List',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>The recruitment lifecycle follows a transparent, multi-tiered result announcement process:</p>
          <ol class="list-decimal pl-5 space-y-1.5">
            <li><strong>Preliminary Result:</strong> Declared based on marks obtained in Paper-I (General Studies), subject to qualifying Paper-II with &ge; 33% marks. Candidates approximately 15 times the total vacancies are shortlisted for Mains.</li>
            <li><strong>Main (Written) Result:</strong> Declared on the basis of aggregate marks across all 8 descriptive papers (1500 Marks). Candidates who secure minimum qualifying marks and achieve rank up to the interview ratio are called for Document Verification and Interview.</li>
            <li><strong>Final Result:</strong> Calculated from total marks obtained in Main Exam (1500 Marks) + Personality Test/Interview (150 Marks) = <strong>1650 Marks</strong>.</li>
          </ol>
        </div>
      `
    },
    {
      id: 16,
      title: '16. Answer Key & Representation Process',
      badge: '2-Stage Objections',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>UKPSC implements a strict <strong>Two-Stage Online Question Paper &amp; Answer Key Objection System</strong>:</p>
          <div class="space-y-2">
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-800">Stage 1 (Post-Exam Question Structure Review):</strong> Master Series 'A' question paper is published right after the exam. Candidates can submit representations regarding faulty questions or erroneous options online free of charge within 7 days.
            </div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-800">Stage 2 (Provisional Answer Key Objections):</strong> Provisional answer keys are released online. Candidates can challenge any question/answer key online with supporting academic proofs. A non-refundable fee of <strong>₹50/- per challenged question</strong> must be paid online.
            </div>
          </div>
          <p class="text-slate-600">Representations sent via email, post, or manual application will not be entertained under any circumstances.</p>
        </div>
      `
    },
    {
      id: 17,
      title: '17. Age Limit & Crucial Date of Reckoning',
      badge: '21 to 42 Years',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>The statutory age limits for UKPSC Upper PCS Recruitment 2026 are:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <span class="text-slate-500 font-medium">Crucial Date of Reckoning:</span>
              <div class="text-sm font-black text-blue-900 mt-0.5">01 July, 2026</div>
            </div>
            <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
              <span class="text-slate-500 font-medium">Prescribed Age Limits:</span>
              <div class="text-sm font-black text-emerald-900 mt-0.5">Minimum 21 Years – Maximum 42 Years</div>
            </div>
          </div>
          <p><strong>Permissible Date of Birth Range (for Unreserved/General Candidates):</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Must not have been born later than: <strong>01 July 2005</strong></li>
            <li>Must not have been born earlier than: <strong>02 July 1984</strong></li>
          </ul>
        </div>
      `
    },
    {
      id: 18,
      title: '18. Category-Wise Age Relaxation Table',
      badge: 'Relaxation Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr>
                <th class="p-2.5 border">Category / Quota</th>
                <th class="p-2.5 border">Upper Age Relaxation</th>
                <th class="p-2.5 border">Maximum Age</th>
                <th class="p-2.5 border">Eligibility Conditions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2.5 border font-semibold">Uttarakhand SC / ST</td><td class="p-2.5 border font-bold text-blue-700">+5 Years</td><td class="p-2.5 border">47 Years</td><td class="p-2.5 border">Uttarakhand domicile only</td></tr>
              <tr><td class="p-2.5 border font-semibold">Uttarakhand Other Backward Classes (OBC)</td><td class="p-2.5 border font-bold text-blue-700">+5 Years</td><td class="p-2.5 border">47 Years</td><td class="p-2.5 border">Non-Creamy Layer, UK domicile</td></tr>
              <tr><td class="p-2.5 border font-semibold">Uttarakhand Divyangjan (PH)</td><td class="p-2.5 border font-bold text-blue-700">+5 Years</td><td class="p-2.5 border">47 Years</td><td class="p-2.5 border">Valid 40%+ disability certificate</td></tr>
              <tr><td class="p-2.5 border font-semibold">Uttarakhand Freedom Fighter Dependents (DFF)</td><td class="p-2.5 border font-bold text-blue-700">+5 Years</td><td class="p-2.5 border">47 Years</td><td class="p-2.5 border">Valid DM issued DFF certificate</td></tr>
              <tr><td class="p-2.5 border font-semibold">Uttarakhand Ex-Servicemen (ESM)</td><td class="p-2.5 border font-bold text-blue-700">Service + 3 to 5 Years</td><td class="p-2.5 border">As per GO 17/2/1981</td><td class="p-2.5 border">Discharge book &amp; UK domicile</td></tr>
              <tr><td class="p-2.5 border font-semibold text-slate-500">Candidates from Other States (Non-UK)</td><td class="p-2.5 border font-semibold text-red-600">No Relaxation (0 Yrs)</td><td class="p-2.5 border">42 Years</td><td class="p-2.5 border">Treated under Unreserved (UR)</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 19,
      title: '19. Educational Qualification & Crucial Date',
      badge: 'Graduation',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p><strong>Crucial Date for Acquiring Educational Qualification:</strong> Must possess the requisite qualifying educational degree on or before <strong>29 September 2026</strong> (the closing date for online applications).</p>
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900">
            <strong>Important Rule:</strong> Candidates appearing in their final examination whose final mark sheet or official result has not been issued on or before 29.09.2026 are <strong>NOT eligible</strong>. Self-declaration without published result is strictly disallowed.
          </div>
        </div>
      `
    },
    {
      id: 20,
      title: '20. Post-Wise Qualification & Special Eligibility Matrix',
      badge: 'Degree Matrix',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr>
                <th class="p-2.5 border">Post Code</th>
                <th class="p-2.5 border">Post Title</th>
                <th class="p-2.5 border">Minimum Mandatory Educational Qualification</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2.5 border font-bold">1, 2, 3, 4, 6, 7, 8, 13, 15</td><td class="p-2.5 border">Deputy Collector, DSP, District Commandant, Finance Officer, BDO, State Tax Officer, Asst. Commissioner, Superintendent Certified Home, District Information Officer</td><td class="p-2.5 border font-semibold text-emerald-800">Bachelor's Degree in ANY discipline from a recognized University established by law in India, or equivalent qualification recognized by the Government.</td></tr>
              <tr><td class="p-2.5 border font-bold">05</td><td class="p-2.5 border">Assistant Director / Audit Officer (Finance)</td><td class="p-2.5 border">Bachelor's Degree in <strong>Commerce (B.Com)</strong> from a recognized University OR Chartered Accountant (CA) from the Institute of Chartered Accountants of India (ICAI).</td></tr>
              <tr><td class="p-2.5 border font-bold">09</td><td class="p-2.5 border">Deputy Education Officer / Staff Officer / Law Officer</td><td class="p-2.5 border"><strong>Post Graduate Degree (परास्नातक)</strong> in any subject from a University established by law. <em>Note:</em> For posting as Law Officer, Bachelor's in Law (LL.B.) is required.</td></tr>
              <tr><td class="p-2.5 border font-bold">10</td><td class="p-2.5 border">Assistant Labour Commissioner</td><td class="p-2.5 border">Degree from a recognized University with at least one of the subjects: Economics, Sociology, Commerce, Law, Labour Relations, Labour Welfare, Labour Law, Social Work, Business Management, or Personnel Management.</td></tr>
              <tr><td class="p-2.5 border font-bold">11</td><td class="p-2.5 border">Assistant Director / Under Secretary (Sanskrit Education)</td><td class="p-2.5 border">Post Graduate Degree in <strong>Sanskrit</strong> OR Acharya in Sanskrit AND Shiksha Shastri / B.Ed. from a recognized University.</td></tr>
              <tr><td class="p-2.5 border font-bold">12</td><td class="p-2.5 border">Assistant Director (Factory / Boiler)</td><td class="p-2.5 border">Degree in <strong>Mechanical Engineering</strong> or <strong>Electrical Engineering</strong> from a recognized University/Institution.</td></tr>
              <tr><td class="p-2.5 border font-bold">14</td><td class="p-2.5 border">Plantation / Nursery Dev Officer Gr-II</td><td class="p-2.5 border"><strong>B.Sc. in Horticulture</strong> or <strong>B.Sc. (Agriculture)</strong> or Degree in Horticulture from a recognized University.</td></tr>
              <tr><td class="p-2.5 border font-bold">16</td><td class="p-2.5 border">Case Worker (Women Welfare)</td><td class="p-2.5 border"><strong>Post Graduate Degree</strong> in Sociology or Applied Sociology or Social Work from a recognized University.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 21,
      title: '21. Nationality & Citizenship Criteria',
      badge: 'Citizenship',
      content: `
        <div class="space-y-2 text-slate-700 text-xs leading-relaxed">
          <p>A candidate must be:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>(a) A citizen of India; OR</li>
            <li>(b) A Tibetan refugee who came over to India before 1st January 1962 with the intention of permanently settling; OR</li>
            <li>(c) A person of Indian origin migrated from Pakistan, Burma, Sri Lanka, or East African countries (Kenya, Uganda, Tanzania) intending permanent settlement in India, possessing an eligibility certificate issued by the State Government.</li>
          </ul>
        </div>
      `
    },
    {
      id: 22,
      title: '22. Application Fee Structure & Exemptions',
      badge: 'Fee Table',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr>
                <th class="p-2 border">S.No.</th>
                <th class="p-2 border">Candidate Category</th>
                <th class="p-2 border">App Fee</th>
                <th class="p-2 border">Processing Fee + Tax</th>
                <th class="p-2 border">Total Amount Payable</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2 border">1</td><td class="p-2 border font-semibold">Unreserved (General)</td><td class="p-2 border">₹150.00</td><td class="p-2 border">₹16.36</td><td class="p-2 border font-bold text-slate-900">₹166.36</td></tr>
              <tr><td class="p-2 border">2</td><td class="p-2 border font-semibold">Uttarakhand OBC</td><td class="p-2 border">₹150.00</td><td class="p-2 border">₹16.36</td><td class="p-2 border font-bold text-slate-900">₹166.36</td></tr>
              <tr><td class="p-2 border">3</td><td class="p-2 border font-semibold">Uttarakhand SC / ST</td><td class="p-2 border">₹60.00</td><td class="p-2 border">₹16.36</td><td class="p-2 border font-bold text-blue-700">₹76.36</td></tr>
              <tr><td class="p-2 border">4</td><td class="p-2 border font-semibold">Uttarakhand EWS</td><td class="p-2 border">₹150.00</td><td class="p-2 border">₹16.36</td><td class="p-2 border font-bold text-slate-900">₹166.36</td></tr>
              <tr><td class="p-2 border">5</td><td class="p-2 border font-semibold">Uttarakhand Divyangjan (PH)</td><td class="p-2 border">₹60.00</td><td class="p-2 border">₹16.36</td><td class="p-2 border font-bold text-blue-700">₹76.36</td></tr>
              <tr><td class="p-2 border">6</td><td class="p-2 border font-semibold text-emerald-800">Uttarakhand Orphan Children</td><td class="p-2 border">₹0.00</td><td class="p-2 border">₹0.00</td><td class="p-2 border font-bold text-emerald-700">₹0.00 (Exempted)</td></tr>
              <tr><td class="p-2 border">7</td><td class="p-2 border font-semibold">Candidates from Other States (All Categories)</td><td class="p-2 border">₹150.00</td><td class="p-2 border">₹16.36</td><td class="p-2 border font-bold text-slate-900">₹166.36</td></tr>
            </tbody>
          </table>
          <p class="text-[11px] text-slate-500"><em>Note on Mains Fee:</em> Qualified candidates must subsequently deposit the prescribed Main Examination Fee (General: ₹250 + processing; SC/ST: ₹100 + processing; Orphans: Nil) before appearing in Mains.</p>
        </div>
      `
    },
    {
      id: 23,
      title: '23. Online Payment Methods',
      badge: 'Payment Gateways',
      content: `
        <div class="space-y-2 text-slate-700 text-xs leading-relaxed">
          <p>Application fee can be paid strictly via the online payment gateway integrated on <a href="https://pscuk.net.in" target="_blank" class="text-blue-600 underline">pscuk.net.in</a> using:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Internet Banking (All major Indian scheduled banks)</li>
            <li>Debit Cards (RuPay / Visa / MasterCard)</li>
            <li>Credit Cards</li>
            <li>Unified Payments Interface (UPI / QR Code)</li>
          </ul>
          <p class="text-slate-500">Cash, postal orders, bank demand drafts, or cheques are NOT accepted.</p>
        </div>
      `
    },
    {
      id: 24,
      title: '24. Complete Selection Process (Stage-by-Stage Flowchart)',
      badge: '3 Stages',
      content: `
        <div class="space-y-4 text-slate-700 leading-relaxed text-xs">
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 font-mono">
            <div class="p-2.5 bg-blue-100/70 border border-blue-300 rounded-xl text-blue-950 font-bold text-center">
              STAGE 1: PRELIMINARY EXAMINATION (OBJECTIVE) [300 Marks]
              <div class="text-[11px] font-normal text-blue-800 mt-0.5">Paper-I GS (150 Marks) + Paper-II Aptitude (150 Marks - Qualifying &ge; 33%)</div>
            </div>
            <div class="text-center font-bold text-slate-400">&darr; [Shortlisted approx. 15 times vacancies]</div>
            <div class="p-2.5 bg-indigo-100/70 border border-indigo-300 rounded-xl text-indigo-950 font-bold text-center">
              STAGE 2: MAIN WRITTEN EXAMINATION (DESCRIPTIVE) [1500 Marks]
              <div class="text-[11px] font-normal text-indigo-800 mt-0.5">8 Compulsory Descriptive Papers (Paper 1 to Paper 8)</div>
            </div>
            <div class="text-center font-bold text-slate-400">&darr; [Physical Standards Test for Police DSP / District Commandant]</div>
            <div class="p-2.5 bg-amber-100/70 border border-amber-300 rounded-xl text-amber-950 font-bold text-center">
              STAGE 3: DOCUMENT VERIFICATION &amp; PERSONALITY TEST / INTERVIEW [150 Marks]
              <div class="text-[11px] font-normal text-amber-800 mt-0.5">Interview before UKPSC Board + Online Post Preference Submission</div>
            </div>
            <div class="text-center font-bold text-slate-400">&darr;</div>
            <div class="p-2.5 bg-emerald-100/80 border border-emerald-300 rounded-xl text-emerald-950 font-bold text-center">
              FINAL SELECTION MERIT LIST (1650 Marks Total)
              <div class="text-[11px] font-normal text-emerald-800 mt-0.5">Mains Score (1500) + Interview Score (150) &rarr; Allocation to Cadres</div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 25,
      title: '25. Preliminary Examination Scheme & Pattern',
      badge: 'Prelims 300M',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <p>The preliminary examination consists of <strong>two objective papers (OMR-based / Objective Type)</strong> held on the same day:</p>
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr>
                <th class="p-2.5 border">Paper</th>
                <th class="p-2.5 border">Subject</th>
                <th class="p-2.5 border">Questions</th>
                <th class="p-2.5 border">Marks</th>
                <th class="p-2.5 border">Duration</th>
                <th class="p-2.5 border">Negative Marking</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="p-2.5 border font-bold">Paper-I</td>
                <td class="p-2.5 border">General Studies (सामान्य अध्ययन)<br/><span class="text-[11px] text-blue-700">Min. 1/3rd (50 Qs) related specifically to Uttarakhand</span></td>
                <td class="p-2.5 border">150</td>
                <td class="p-2.5 border font-bold">150</td>
                <td class="p-2.5 border">2 Hours (120 min)</td>
                <td class="p-2.5 border text-red-600">0.25 (1/4th mark) deducted per wrong answer</td>
              </tr>
              <tr>
                <td class="p-2.5 border font-bold">Paper-II</td>
                <td class="p-2.5 border">General Aptitude Test (सामान्य बुद्धिमत्ता परीक्षा)<br/><span class="text-[11px] text-amber-700">Qualifying Paper &ndash; Minimum 33% (50 marks) mandatory</span></td>
                <td class="p-2.5 border">100</td>
                <td class="p-2.5 border font-bold">150<br/><span class="text-[10px] text-slate-500">(1.5 marks/Q)</span></td>
                <td class="p-2.5 border">2 Hours (120 min)</td>
                <td class="p-2.5 border text-red-600">0.375 (1/4th mark) deducted per wrong answer</td>
              </tr>
              <tr class="bg-slate-50 font-black">
                <td colspan="2" class="p-2.5 border text-right">TOTAL PRELIMS</td>
                <td class="p-2.5 border">250 Qs</td>
                <td class="p-2.5 border text-blue-800">300 Marks</td>
                <td class="p-2.5 border">4 Hours</td>
                <td class="p-2.5 border">&mdash;</td>
              </tr>
            </tbody>
          </table>
          <p class="text-slate-600"><em>Scoring Note:</em> Only Paper-I marks determine the shortlisting merit cutoff for the Main Examination. Paper-II is strictly qualifying in nature.</p>
        </div>
      `
    },
    {
      id: 26,
      title: '26. Main Written Examination Scheme (8 Papers - 1500 Marks)',
      badge: 'Mains 1500M',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <p>The Main Examination is conventional descriptive type comprising <strong>8 compulsory papers</strong> conducted over multiple sessions:</p>
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr>
                <th class="p-2 border">Paper</th>
                <th class="p-2 border">Subject / Title</th>
                <th class="p-2 border">Time</th>
                <th class="p-2 border">Max Marks</th>
                <th class="p-2 border">Special Condition</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2 border font-bold">Paper 1</td><td class="p-2 border">General Hindi (सामान्य हिन्दी)</td><td class="p-2 border">3 Hours</td><td class="p-2 border font-bold">150</td><td class="p-2 border text-red-700 font-semibold">Minimum 35% marks mandatory to qualify</td></tr>
              <tr><td class="p-2 border font-bold">Paper 2</td><td class="p-2 border">Essay (निबन्ध) – 3 Essays (50 marks each)</td><td class="p-2 border">3 Hours</td><td class="p-2 border font-bold">150</td><td class="p-2 border">Sections A, B &amp; C (700-800 words each)</td></tr>
              <tr><td class="p-2 border font-bold">Paper 3</td><td class="p-2 border">General Studies-I (Indian Heritage, Culture, History &amp; Geography of World &amp; Society)</td><td class="p-2 border">3 Hours</td><td class="p-2 border font-bold">200</td><td class="p-2 border">Merit scoring</td></tr>
              <tr><td class="p-2 border font-bold">Paper 4</td><td class="p-2 border">General Studies-II (Governance, Constitution, Polity, Social Justice &amp; Int. Relations)</td><td class="p-2 border">3 Hours</td><td class="p-2 border font-bold">200</td><td class="p-2 border">Merit scoring</td></tr>
              <tr><td class="p-2 border font-bold">Paper 5</td><td class="p-2 border">General Studies-III (Technology, Economic Dev, Biodiversity, Environment, Security)</td><td class="p-2 border">3 Hours</td><td class="p-2 border font-bold">200</td><td class="p-2 border">Merit scoring</td></tr>
              <tr><td class="p-2 border font-bold">Paper 6</td><td class="p-2 border">General Studies-IV (Ethics, Integrity and Aptitude)</td><td class="p-2 border">3 Hours</td><td class="p-2 border font-bold">200</td><td class="p-2 border">Merit scoring</td></tr>
              <tr><td class="p-2 border font-bold">Paper 7</td><td class="p-2 border">General Studies-V (Knowledge of State of Uttarakhand – History, Culture &amp; Polity)</td><td class="p-2 border">3 Hours</td><td class="p-2 border font-bold">200</td><td class="p-2 border font-semibold text-blue-700">Uttarakhand specific paper</td></tr>
              <tr><td class="p-2 border font-bold">Paper 8</td><td class="p-2 border">General Studies-VI (Knowledge of State of Uttarakhand – Economy, Geo &amp; Environment)</td><td class="p-2 border">3 Hours</td><td class="p-2 border font-bold">200</td><td class="p-2 border font-semibold text-blue-700">Uttarakhand specific paper</td></tr>
              <tr class="bg-blue-50/80 font-black"><td colspan="3" class="p-2.5 border text-right">TOTAL WRITTEN EXAMINATION</td><td class="p-2.5 border text-blue-900 text-sm font-black">1500 Marks</td><td class="p-2.5 border">&mdash;</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 27,
      title: '27. Interview & Personality Test (150 Marks)',
      badge: 'Viva-Voce',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Candidates shortlisted on the basis of Main Written Examination marks are invited to appear for the <strong>Personality Test / Interview (मौखिक परीक्षा)</strong> carrying <strong>150 Marks</strong>.</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>The interview evaluates candidate's general alertness, critical powers of assimilation, clear and logical exposition, balance of judgement, leadership qualities, and suitability for public service.</li>
            <li>No minimum qualifying marks are mandated for the interview, but attendance is compulsory. Non-appearance results in disqualification.</li>
            <li><strong>Grand Total for Final Selection:</strong> Written (1500 Marks) + Interview (150 Marks) = <strong>1650 Marks</strong>.</li>
          </ul>
        </div>
      `
    },
    {
      id: 28,
      title: '28. Minimum Qualifying Marks Criteria (परिशिष्ट-7)',
      badge: 'Qualifying %',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <p>As per Appendix-7 (परिशिष्ट-7) of the official notification, candidates must obtain the following minimum percentage of marks to be considered for qualification:</p>
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr>
                <th class="p-2 border">Candidate Category</th>
                <th class="p-2 border">Prelims Paper-I (GS)</th>
                <th class="p-2 border">Prelims Paper-II</th>
                <th class="p-2 border">Mains Written Exam</th>
                <th class="p-2 border">Final Aggregate</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2 border font-semibold">Unreserved (General)</td><td class="p-2 border">35%</td><td class="p-2 border font-bold text-blue-700">33% (Mandatory)</td><td class="p-2 border">40%</td><td class="p-2 border font-bold">45%</td></tr>
              <tr><td class="p-2 border font-semibold">Uttarakhand OBC</td><td class="p-2 border">30%</td><td class="p-2 border font-bold text-blue-700">33% (Mandatory)</td><td class="p-2 border">35%</td><td class="p-2 border font-bold">40%</td></tr>
              <tr><td class="p-2 border font-semibold">Uttarakhand EWS</td><td class="p-2 border">30%</td><td class="p-2 border font-bold text-blue-700">33% (Mandatory)</td><td class="p-2 border">35%</td><td class="p-2 border font-bold">40%</td></tr>
              <tr><td class="p-2 border font-semibold">Uttarakhand SC</td><td class="p-2 border">25%</td><td class="p-2 border font-bold text-blue-700">33% (Mandatory)</td><td class="p-2 border">30%</td><td class="p-2 border font-bold">35%</td></tr>
              <tr><td class="p-2 border font-semibold">Uttarakhand DFF / ESM</td><td class="p-2 border">25%</td><td class="p-2 border font-bold text-blue-700">33% (Mandatory)</td><td class="p-2 border">30%</td><td class="p-2 border font-bold">35%</td></tr>
              <tr><td class="p-2 border font-semibold">Uttarakhand Divyangjan (PH)</td><td class="p-2 border">20%</td><td class="p-2 border font-bold text-blue-700">33% (Mandatory)</td><td class="p-2 border">25%</td><td class="p-2 border font-bold">30%</td></tr>
            </tbody>
          </table>
          <p class="text-slate-500"><em>Special Condition:</em> A minimum of 35% marks is additionally mandatory in Mains Paper-1 (General Hindi).</p>
        </div>
      `
    },
    {
      id: 29,
      title: '29. Physical Standard Test (PST) for Police DSP (Home Department)',
      badge: 'DSP Physical',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <p>Candidates opting for <strong>Deputy Superintendent of Police (DSP)</strong> must satisfy the prescribed physical measurements:</p>
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr>
                <th class="p-2 border">Category</th>
                <th class="p-2 border">Male Height</th>
                <th class="p-2 border">Female Height</th>
                <th class="p-2 border">Chest Measurement (Male Only)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="p-2 border font-semibold">General &amp; Other Candidates</td>
                <td class="p-2 border font-bold">167.7 cm</td>
                <td class="p-2 border font-bold">152.0 cm</td>
                <td class="p-2 border">78.8 cm (Unexpanded) / 83.8 cm (Expanded) [Min 5 cm expansion]</td>
              </tr>
              <tr>
                <td class="p-2 border font-semibold">Scheduled Tribes (ST)</td>
                <td class="p-2 border font-bold">160.0 cm</td>
                <td class="p-2 border font-bold">147.0 cm</td>
                <td class="p-2 border">76.5 cm (Unexpanded) / 81.5 cm (Expanded)</td>
              </tr>
              <tr>
                <td class="p-2 border font-semibold">Hill Area Candidates (पर्वतीय क्षेत्र)</td>
                <td class="p-2 border font-bold">162.6 cm</td>
                <td class="p-2 border font-bold">147.0 cm</td>
                <td class="p-2 border">76.5 cm (Unexpanded) / 81.5 cm (Expanded)</td>
              </tr>
            </tbody>
          </table>
          <p><strong>Additional DSP Standards:</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Female Weight:</strong> Minimum <strong>45 kg</strong>.</li>
            <li><strong>Eye Sight:</strong> Distant vision 6/6 in one eye and 6/9 in the other eye without glasses.</li>
            <li>Free from color blindness, squint, knock knees, flat feet, and varicose veins.</li>
          </ul>
        </div>
      `
    },
    {
      id: 30,
      title: '30. Physical Standards for District Commandant, Home Guards',
      badge: 'Home Guards PST',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <p>For the post of <strong>District Commandant, Home Guards</strong> (Post Code 03), physical standards are:</p>
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr>
                <th class="p-2.5 border">Parameter</th>
                <th class="p-2.5 border">Male Standard</th>
                <th class="p-2.5 border">Female Standard</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2.5 border font-semibold">Height (General)</td><td class="p-2.5 border font-bold">165 cm</td><td class="p-2.5 border font-bold">150 cm</td></tr>
              <tr><td class="p-2.5 border font-semibold">Height (Uttarakhand Domicile Male)</td><td class="p-2.5 border font-bold">160 cm</td><td class="p-2.5 border font-bold">150 cm</td></tr>
              <tr><td class="p-2.5 border font-semibold">Chest (Male Candidates)</td><td class="p-2.5 border">84 cm (Unexpanded) / 89 cm (Expanded) with minimum 5 cm expansion</td><td class="p-2.5 border">Not Applicable</td></tr>
              <tr><td class="p-2.5 border font-semibold">Eye Sight Standard</td><td class="p-2.5 border" colspan="2">Distant vision 6/6 and near vision 0.6, free from color blindness</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 31,
      title: '31. Preferential Qualification (अधिमानी अर्हता)',
      badge: 'Tie-Breaker',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Other things being equal, preference will be given in direct recruitment to candidates possessing:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Posts 1, 2, 4, 6, 8, 14, 15:</strong> (i) Served in the Territorial Army for a minimum period of 2 years; OR (ii) Obtained a 'B' Certificate of the National Cadet Corps (NCC).</li>
            <li><strong>Posts 3, 5, 7, 12, 13:</strong> Served in the Territorial Army for 2 years OR obtained NCC 'B' or 'C' Certificate.</li>
            <li><strong>Post 9 (Deputy Education Officer):</strong> Degree in Education (B.Ed. / L.T. / Shiksha Shastri) OR 2 years in Territorial Army OR NCC 'B' Certificate.</li>
            <li><strong>Post 10 (Assistant Labour Commissioner):</strong> 2 years in Territorial Army OR NCC 'B'/'C' Certificate OR NSS 'B'/'C' Certificate.</li>
            <li><strong>Post 11 (Assistant Director Sanskrit):</strong> 2 years in Territorial Army OR NCC 'B'/'C' OR participation in Inter-University/State/National sports.</li>
            <li><strong>Post 16 (Case Worker):</strong> Bachelor's Degree in Law (LL.B.) OR practical experience of at least 2 years in social work.</li>
          </ul>
        </div>
      `
    },
    {
      id: 32,
      title: '32. Detailed Syllabus: Prelims Paper-I (General Studies - 6 Units)',
      badge: 'GS Syllabus',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Paper-I consists of 150 objective multiple-choice questions across 6 core units. <strong>At least 50 questions (1/3rd)</strong> relate directly to Uttarakhand state:</p>
          <div class="space-y-2">
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-blue-900">Unit 1: History, Culture &amp; National Movement</strong> &ndash; Ancient, Medieval, Modern Indian History; Freedom struggle; Pre-historic &amp; proto-historic Uttarakhand; Kunindas, Katyuris, Chand and Panwar dynasties; British rule in Uttarakhand and historic movements.
            </div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-blue-900">Unit 2: Indian &amp; World Geography &amp; Geography of Uttarakhand</strong> &ndash; Physical, social, and economic geography of India and the world; Uttarakhand relief, climate, drainage, glaciers, passes, flora and fauna, natural disasters and mitigation.
            </div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-blue-900">Unit 3: Indian Polity &amp; Governance &amp; Political System of Uttarakhand</strong> &ndash; Constitution of India, Panchayati Raj, Public Policy, Rights issues; Administrative structure, High Court of Uttarakhand, local self-government, statutory commissions.
            </div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-blue-900">Unit 4: Economic &amp; Social Development &amp; Economy of Uttarakhand</strong> &ndash; Sustainable development, poverty alleviation, demographic trends, social sector initiatives; State budget, agriculture, horticulture, tourism, hydroelectric projects in Uttarakhand.
            </div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-blue-900">Unit 5: General Science, Environment &amp; Technology</strong> &ndash; Everyday science, space research, nuclear science, IT &amp; telecommunications, biotechnology, cyber security, ecology and biodiversity.
            </div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-blue-900">Unit 6: Current Events of State, National &amp; International Importance</strong> &ndash; Key awards, sports, multilateral conferences, government flagship schemes, bilateral summits, and state government policies.
            </div>
          </div>
        </div>
      `
    },
    {
      id: 33,
      title: '33. Detailed Syllabus: Prelims Paper-II (General Aptitude Test)',
      badge: 'CSAT Syllabus',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Paper-II contains 100 questions (150 Marks, 1.5 marks per question). Qualifying mark is 33% (50 marks):</p>
          <div class="space-y-2">
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-800">Unit-1: General Mental Ability &amp; Reasoning (80 Questions / 120 Marks)</strong>
              <p class="text-slate-600 mt-1">Comprehension, Interpersonal skills including communication skills, Logical reasoning and analytical ability, Decision making and problem solving, General mental ability, Basic numeracy (numbers and their relations, orders of magnitude - Class X level), Data interpretation (charts, graphs, tables, data sufficiency - Class X level).</p>
            </div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-800">Unit-2: Language Comprehension Skills (20 Questions / 30 Marks)</strong>
              <p class="text-slate-600 mt-1">Class X Level reading comprehension: English Language Comprehension (7 Questions) and Hindi Language Comprehension (13 Questions).</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 34,
      title: '34. Detailed Syllabus: Mains Paper 1 (General Hindi - 150 Marks)',
      badge: 'Mains Hindi',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>General Hindi is a 3-hour conventional paper carrying 150 marks. <strong>Mandatory minimum pass mark is 35% (52.5 marks)</strong>:</p>
          <ol class="list-decimal pl-5 space-y-1">
            <li>शब्द रचना (उपसर्ग, प्रत्यय, सन्धि, समास) – 15 अंक</li>
            <li>शब्द विवेक (पर्यायवाची, विलोम, तत्सम-तद्भव, वर्तनी शुद्धि) – 15 अंक</li>
            <li>वाक्य रचना एवं वाक्य शुद्धि – 15 अंक</li>
            <li>मुहावरे एवं लोकोक्तियां – 10 अंक</li>
            <li>शासकीय, अर्द्धशासकीय पत्र, कार्यालय आदेश, विज्ञप्ति, परिपत्र – 15 अंक</li>
            <li>प्रारूपण / प्रतिवेदन लेखन एवं प्रशासनिक शब्दावली का अंग्रेजी से हिन्दी रूपान्तरण – 20 अंक</li>
            <li>अपठित गद्यांश का संक्षेपण (Précis) एवं शीर्षक – 15 अंक</li>
            <li>अपठित गद्यांश के आधार पर प्रश्नों के उत्तर – 15 अंक</li>
            <li>पल्लवन (किसी सूक्ति या विचार का विस्तार) – 10 अंक</li>
            <li>हिन्दी से अंग्रेजी अनुवाद (Translation from Hindi to English) – 10 अंक</li>
            <li>अंग्रेजी से हिन्दी अनुवाद (Translation from English to Hindi) – 10 अंक</li>
          </ol>
        </div>
      `
    },
    {
      id: 35,
      title: '35. Detailed Syllabus: Mains Paper 2 (Essay / निबन्ध - 150 Marks)',
      badge: 'Mains Essay',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Candidates must write <strong>3 essays</strong> (one chosen from each of the three sections). Word limit is 700 to 800 words per essay (50 marks each):</p>
          <ul class="space-y-2">
            <li class="p-2 bg-slate-50 border border-slate-200 rounded-lg"><strong>Section A (50 Marks):</strong> Literature &amp; Culture | Social Sphere (Women, Education, Health) | Political Sphere (Governance &amp; Democracy) | Economic Sphere.</li>
            <li class="p-2 bg-slate-50 border border-slate-200 rounded-lg"><strong>Section B (50 Marks):</strong> Science, Environment &amp; Technology | National &amp; International Current Issues | Natural Calamities &amp; Disaster Management | National Development Programs.</li>
            <li class="p-2 bg-slate-50 border border-slate-200 rounded-lg"><strong>Section C (50 Marks - Uttarakhand Specific):</strong> Uttarakhand Social Structure &amp; Culture | Historic Heritage | Economy, Agriculture &amp; Migration (पलायन) | Environment, Glaciers &amp; Water Resources | Tourism &amp; Hydro Power Potential.</li>
          </ul>
        </div>
      `
    },
    {
      id: 36,
      title: '36. Detailed Syllabus: Mains Papers 3 to 6 (GS-I to GS-IV)',
      badge: 'GS Core (800M)',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Each General Studies paper is of 3 hours duration and carries 200 marks:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <strong class="text-blue-900">Paper 3: GS-I (200 Marks)</strong>
              <p class="text-slate-600 mt-1">Indian Heritage &amp; Culture, History of India and the World, Physical &amp; Human Geography, Diversity and Society.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <strong class="text-blue-900">Paper 4: GS-II (200 Marks)</strong>
              <p class="text-slate-600 mt-1">Constitution, Polity, Governance, Social Justice, Welfare Schemes, Citizen Charters, International Relations &amp; India's Foreign Policy.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <strong class="text-blue-900">Paper 5: GS-III (200 Marks)</strong>
              <p class="text-slate-600 mt-1">Indian Economy, Agriculture, Science &amp; Technology, Bio-diversity, Climate Change, Internal Security, Border Management, Disaster Mitigation.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <strong class="text-blue-900">Paper 6: GS-IV (200 Marks)</strong>
              <p class="text-slate-600 mt-1">Ethics, Integrity &amp; Aptitude: Public administration ethics, emotional intelligence, moral thinkers, probity in governance, and case studies.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 37,
      title: '37. Detailed Syllabus: Mains Papers 7 & 8 (Uttarakhand Specific - 400 Marks)',
      badge: 'Uttarakhand GS',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Two full descriptive papers (400 Marks total) are dedicated exclusively to the State of Uttarakhand:</p>
          <div class="space-y-2">
            <div class="p-3 bg-blue-50/70 border border-blue-200 rounded-xl">
              <strong class="text-blue-900">Paper 7: GS-V &ndash; Knowledge of State of Uttarakhand (200 Marks)</strong>
              <p class="text-slate-700 mt-1">Pre-historic and proto-historic periods of Uttarakhand; Dynasty rulers (Katyuris, Chand, Panwar, Gorkha); British administration; Freedom struggle and role of Uttarakhand stalwarts; Uttarakhand Statehood agitation; Tribes (Tharu, Buksa, Bhotia, Jaunsari, Raji); Folklore, art, architecture, languages (Kumaoni, Garhwali, Jaunsari); Administrative setup, High Court, and local self-governance.</p>
            </div>
            <div class="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl">
              <strong class="text-emerald-900">Paper 8: GS-VI &ndash; Knowledge of State of Uttarakhand (200 Marks)</strong>
              <p class="text-slate-700 mt-1">Geography of Uttarakhand (physiography, drainage, glaciers, lakes, forest types); Economy of Uttarakhand, revenue sources, State Budget; Industrial policy, MSMEs, aromatic/medicinal plants; Tourism &amp; Pilgrimage (Char Dham, Hemkund Sahib, trekking); Hydroelectric projects; Migration (पलायन) challenges; Disaster vulnerabilities (landslides, flash floods, earthquakes) and SDRF/NDMA response.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 38,
      title: '38. Preliminary Examination Centers (24 Centers - परिशिष्ट-1)',
      badge: '24 Centers',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <p>Preliminary examination will be conducted across <strong>24 designated city/district test centers</strong> across Uttarakhand:</p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
            <div class="p-2 bg-slate-50 border rounded">01. Almora (अल्मोड़ा)</div>
            <div class="p-2 bg-slate-50 border rounded">02. Ranikhet (रानीखेत)</div>
            <div class="p-2 bg-slate-50 border rounded">03. Champawat (चम्पावत)</div>
            <div class="p-2 bg-slate-50 border rounded">04. Pithoragarh (पिथौरागढ़)</div>
            <div class="p-2 bg-slate-50 border rounded">05. Ramnagar (रामनगर)</div>
            <div class="p-2 bg-slate-50 border rounded">06. Haldwani (हल्द्वानी)</div>
            <div class="p-2 bg-slate-50 border rounded">07. Rudrapur (रुद्रपुर)</div>
            <div class="p-2 bg-slate-50 border rounded">08. Kashipur (काशीपुर)</div>
            <div class="p-2 bg-slate-50 border rounded">09. Khatima (खटीमा)</div>
            <div class="p-2 bg-slate-50 border rounded">10. Bageshwar (बागेश्वर)</div>
            <div class="p-2 bg-slate-50 border rounded">11. Pauri (पौड़ी)</div>
            <div class="p-2 bg-slate-50 border rounded">12. Srinagar (श्रीनगर)</div>
            <div class="p-2 bg-slate-50 border rounded">13. Kotdwar (कोटद्वार)</div>
            <div class="p-2 bg-slate-50 border rounded">14. Gopeshwar (गोपेश्वर)</div>
            <div class="p-2 bg-slate-50 border rounded">15. Karnaprayag (कर्णप्रयाग)</div>
            <div class="p-2 bg-slate-50 border rounded">16. New Tehri (नई टिहरी)</div>
            <div class="p-2 bg-slate-50 border rounded">17. Rudraprayag (रुद्रप्रयाग)</div>
            <div class="p-2 bg-slate-50 border rounded">18. Uttarkashi (उत्तरकाशी)</div>
            <div class="p-2 bg-slate-50 border rounded">19. Dehradun (देहरादून)</div>
            <div class="p-2 bg-slate-50 border rounded">20. Rishikesh (ऋषिकेश)</div>
            <div class="p-2 bg-slate-50 border rounded">21. Vikasnagar (विकासनगर)</div>
            <div class="p-2 bg-slate-50 border rounded">22. Haridwar (हरिद्वार)</div>
            <div class="p-2 bg-slate-50 border rounded">23. Roorkee (रुड़की)</div>
            <div class="p-2 bg-slate-50 border rounded">24. Laksar (लक्सर)</div>
          </div>
          <p class="text-slate-500 mt-2"><em>Mains Centers:</em> The Main Written Examination will be conducted solely at <strong>Haldwani</strong> and <strong>Haridwar</strong>.</p>
        </div>
      `
    },
    {
      id: 39,
      title: '39. Reservation Rules & Uttarakhand Domicile Policies',
      badge: 'Reservation',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Vertical and horizontal reservations are admissible strictly to permanent residents (domicile holders) of the State of Uttarakhand:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Non-Uttarakhand Residents:</strong> Candidates belonging to SC, ST, OBC, or EWS of other states are treated strictly as Unreserved / General candidates.</li>
            <li><strong>Uttarakhand Women:</strong> 30% horizontal reservation under the Uttarakhand Public Services (Horizontal Reservation for Women) Act, 2022.</li>
            <li><strong>OBC Certificate:</strong> Must be issued by competent Uttarakhand authority and valid on the date of application (valid for 3 years from issuance date).</li>
            <li><strong>EWS Certificate:</strong> Must be issued for Financial Year 2026-27 based on family income of Financial Year 2025-26.</li>
            <li><strong>Rajya Andolankari:</strong> 10% horizontal reservation under the Uttarakhand State Agitators Act, 2023.</li>
          </ul>
        </div>
      `
    },
    {
      id: 40,
      title: '40. Divyangjan (PwBD) Provisions & Scribe Guidelines',
      badge: 'PwBD / Scribe',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Provisions for Persons with Benchmark Disabilities (PwBD &ge; 40%):</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Compensatory time of <strong>20 minutes per hour</strong> of examination.</li>
            <li>Candidates eligible for scribe under परिशिष्ट-4 (benchmark disability) or परिशिष्ट-5 (physical limitation in writing) must submit their request online with medical board certificate at least 7 days prior to examination.</li>
            <li>Exempted posts: DSP, District Commandant Home Guards, and BDO are exempted from disability reservation due to functional operational requirements.</li>
          </ul>
        </div>
      `
    },
    {
      id: 41,
      title: '41. Online Application Procedure (Step-by-Step Guide)',
      badge: 'How to Apply',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <ol class="list-decimal pl-5 space-y-1.5">
            <li><strong>Step 1:</strong> Visit <a href="https://psc.uk.gov.in" target="_blank" class="text-blue-600 underline">psc.uk.gov.in</a> or direct portal <a href="https://pscuk.net.in" target="_blank" class="text-blue-600 underline">pscuk.net.in</a>.</li>
            <li><strong>Step 2:</strong> Click on &ldquo;Uttarakhand Combined State Civil / Upper Subordinate Services Examination - 2026&rdquo; &rarr; <em>Apply Now</em>.</li>
            <li><strong>Step 3:</strong> Fill primary registration details (Candidate Name, Father's Name, Mother's Name, DOB, Gender, Marital Status, Mobile Number, Email).</li>
            <li><strong>Step 4:</strong> Enter Postal &amp; Permanent Address, Domicile &amp; Reservation category details.</li>
            <li><strong>Step 5:</strong> Fill Educational Qualifications sequentially (High School &rarr; Intermediate &rarr; Graduation &rarr; Post Graduation / Professional Degrees).</li>
            <li><strong>Step 6:</strong> Upload recent scanned photograph (20-50 KB) and signature (10-20 KB) in JPG/JPEG format.</li>
            <li><strong>Step 7:</strong> Verify the application preview, accept the declaration, make online fee payment, and download/print the final application receipt.</li>
          </ol>
        </div>
      `
    },
    {
      id: 42,
      title: '42. Application Cancellation & Re-application Policy',
      badge: 'Re-Apply',
      content: `
        <div class="space-y-2 text-slate-700 text-xs leading-relaxed">
          <p>If an applicant discovers any fundamental error in their submitted application before the closing date (29.09.2026):</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>They can cancel their application using the <strong>&ldquo;Cancel My Application&rdquo;</strong> button via OTP verification sent to their registered mobile.</li>
            <li>The fee paid on the cancelled application is non-refundable.</li>
            <li>A fresh application with correct details and fresh fee must be submitted before the closing deadline.</li>
          </ul>
        </div>
      `
    },
    {
      id: 43,
      title: '43. Candidate Conduct, Malpractice Penalties & Debarment',
      badge: 'Anti-Cheating Law',
      content: `
        <div class="space-y-2 text-slate-700 text-xs leading-relaxed">
          <p>UKPSC enforces the stringent <strong>Uttarakhand Competitive Examination (Measures for Prevention and Redressal of Unfair Means in Recruitment) Act, 2023</strong>:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Possession of mobile phones, smartwatches, Bluetooth devices, earphones, or recording equipment inside the center will lead to immediate debarment for up to 5 years and criminal prosecution.</li>
            <li>Writing names, roll numbers, or identification signs anywhere on the answer book outside the designated box incurs immediate 5% marks penalty or cancellation of candidature.</li>
          </ul>
        </div>
      `
    },
    {
      id: 44,
      title: '44. Document Verification (DV) Checklist (परिशिष्ट-8)',
      badge: 'DV Checklist',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Candidates qualifying for the Interview must produce self-attested copies along with original credentials:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
            <div class="p-2 bg-slate-50 border rounded">1. Online Application Form Printout</div>
            <div class="p-2 bg-slate-50 border rounded">2. Detailed Application Form (Form-02)</div>
            <div class="p-2 bg-slate-50 border rounded">3. Attestation Form (Form-03)</div>
            <div class="p-2 bg-slate-50 border rounded">4. High School Certificate &amp; Mark Sheet (DOB Proof)</div>
            <div class="p-2 bg-slate-50 border rounded">5. Intermediate (10+2) Mark Sheet &amp; Certificate</div>
            <div class="p-2 bg-slate-50 border rounded">6. Graduation All Semesters Mark Sheets &amp; Degree</div>
            <div class="p-2 bg-slate-50 border rounded">7. Post Graduation / B.Ed. / CA Certificate (if applicable)</div>
            <div class="p-2 bg-slate-50 border rounded">8. Uttarakhand Domicile Certificate (स्थायी निवास)</div>
            <div class="p-2 bg-slate-50 border rounded">9. Category Certificate (SC/ST/OBC/EWS)</div>
            <div class="p-2 bg-slate-50 border rounded">10. Hill Area Certificate (for height/chest relaxation)</div>
            <div class="p-2 bg-slate-50 border rounded">11. NCC 'B'/'C' or Territorial Army Certificate</div>
            <div class="p-2 bg-slate-50 border rounded">12. No Objection Certificate (NOC) from Current Employer</div>
          </div>
        </div>
      `
    },
    {
      id: 45,
      title: '45. Salary Structure, Pay Matrix & Perks',
      badge: 'Pay Matrix',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr>
                <th class="p-2 border">Post Title</th>
                <th class="p-2 border">Pay Level</th>
                <th class="p-2 border">Pay Scale</th>
                <th class="p-2 border">Approx In-Hand Salary</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2 border font-semibold">Deputy Collector, DSP, Finance Officer, BDO, Asst. Director</td><td class="p-2 border font-bold text-blue-800">Level-10</td><td class="p-2 border">₹56,100 &ndash; ₹1,77,500</td><td class="p-2 border font-bold">₹82,000 &ndash; ₹92,000 / month</td></tr>
              <tr><td class="p-2 border font-semibold">State Tax Officer</td><td class="p-2 border font-bold text-blue-800">Level-07</td><td class="p-2 border">₹44,900 &ndash; ₹1,42,400</td><td class="p-2 border font-bold">₹65,000 &ndash; ₹72,000 / month</td></tr>
              <tr><td class="p-2 border font-semibold">Case Worker (Women Welfare)</td><td class="p-2 border font-bold text-blue-800">Level-06</td><td class="p-2 border">₹35,400 &ndash; ₹1,12,400</td><td class="p-2 border font-bold">₹52,000 &ndash; ₹58,000 / month</td></tr>
            </tbody>
          </table>
          <p class="text-[11px] text-slate-500">Includes Dearness Allowance (DA 50%), House Rent Allowance (HRA), Transport Allowance, and contributory pension scheme.</p>
        </div>
      `
    },
    {
      id: 46,
      title: '46. Online Post Preference (Online Preference Sheet)',
      badge: 'Cadre Choice',
      content: `
        <div class="space-y-2 text-slate-700 text-xs leading-relaxed">
          <p>Candidates qualifying in the Main Written Examination must submit their <strong>Online Post Preference Sheet</strong> prior to the Interview.</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Post allocations are strictly automated based on candidate's rank in the final aggregate merit list, community category, medical fitness, and preferences exercised.</li>
            <li>No change in post preference is permitted after online submission.</li>
          </ul>
        </div>
      `
    },
    {
      id: 47,
      title: '47. Frequently Asked Questions (FAQ)',
      badge: '10 FAQs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <div class="p-3 bg-slate-50 border rounded-xl">
            <strong class="text-slate-900 block">Q1: What are the application dates for UKPSC Upper PCS 2026?</strong>
            <p class="text-slate-600 mt-1">Online applications opened on 09 September 2026 and close on 29 September 2026 at 11:59:59 PM. The edit window runs from 07 October to 16 October 2026.</p>
          </div>
          <div class="p-3 bg-slate-50 border rounded-xl">
            <strong class="text-slate-900 block">Q2: What is the total vacancy count in UKPSC Upper PCS 2026?</strong>
            <p class="text-slate-600 mt-1">There are 67 Group 'B' vacancies across 16 administrative, policing, finance, and technical departments.</p>
          </div>
          <div class="p-3 bg-slate-50 border rounded-xl">
            <strong class="text-slate-900 block">Q3: Can candidates from other states apply?</strong>
            <p class="text-slate-600 mt-1">Yes, all Indian citizens possessing the required degree can apply under the Unreserved (General) category. Reservation benefits apply solely to Uttarakhand domicile holders.</p>
          </div>
          <div class="p-3 bg-slate-50 border rounded-xl">
            <strong class="text-slate-900 block">Q4: What is the age limit and cut-off date?</strong>
            <p class="text-slate-600 mt-1">Candidates must be between 21 and 42 years of age as on 01 July, 2026 (born between 02.07.1984 and 01.07.2005). Upper age relaxation of +5 years applies for Uttarakhand SC/ST/OBC/PH.</p>
          </div>
          <div class="p-3 bg-slate-50 border rounded-xl">
            <strong class="text-slate-900 block">Q5: Is there negative marking in the Preliminary Exam?</strong>
            <p class="text-slate-600 mt-1">Yes, 1/4th of the marks assigned to a question are deducted for each wrong answer in both Paper-I and Paper-II.</p>
          </div>
        </div>
      `
    },
    {
      id: 48,
      title: '48. Integrated Preparation Tools on RajDailyTools',
      badge: 'Free Utilities',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Utilize RajDailyTools client-side tools tailored to UKPSC recruitment guidelines:</p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <a href="./tools/age-calculator.html" class="p-2.5 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 font-semibold text-blue-900 block text-center">Age Calculator (as of 01.07.2026) &rarr;</a>
            <a href="./tools/eligibility-calculator.html" class="p-2.5 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 font-semibold text-indigo-900 block text-center">Eligibility Checker &rarr;</a>
            <a href="./tools/photo-resizer.html" class="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 font-semibold text-emerald-900 block text-center">Photo Resizer (20-50 KB) &rarr;</a>
            <a href="./tools/signature-resizer.html" class="p-2.5 bg-amber-50 border border-amber-200 rounded-xl hover:bg-amber-100 font-semibold text-amber-900 block text-center">Signature Resizer (10-20 KB) &rarr;</a>
          </div>
        </div>
      `
    },
    {
      id: 49,
      title: '49. Official Links & Helpdesk Contacts',
      badge: 'Important Links',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <div class="p-3 bg-slate-50 border rounded-xl space-y-2">
            <div class="flex justify-between items-center py-1 border-b border-slate-200">
              <span class="font-semibold text-slate-800">Direct Online Application Portal:</span>
              <a href="https://pscuk.net.in/notification?postid=eyJpdiI6ImxxVjU4ZjJzRXZ4Ty84SUoiLCJ2YWx1ZSI6Im5PY0NteTg9IiwibWFjIjoiIiwidGFnIjoicU0yNXhZTkthbzR4TVhmZkI1QmEzQT09In0=" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold underline">Apply Online (pscuk.net.in) &rarr;</a>
            </div>
            <div class="flex justify-between items-center py-1 border-b border-slate-200">
              <span class="font-semibold text-slate-800">Official Commission Website:</span>
              <a href="https://psc.uk.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold underline">psc.uk.gov.in &rarr;</a>
            </div>
            <div class="flex justify-between items-center py-1">
              <span class="font-semibold text-slate-800">UKPSC Candidate Helpline:</span>
              <span class="text-slate-700 font-mono">01334-244143 / 01334-244282 / 07060002410</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 50,
      title: '50. Official Disclaimer & Source of Truth',
      badge: 'Disclaimer',
      content: `
        <div class="space-y-2 text-slate-600 text-xs leading-relaxed">
          <p><strong>Source of Truth:</strong> This compilation is strictly curated from the official advertisement <strong>Advt. No. A-1/E-1/2026-27 dated 09 September 2026</strong> issued by the <em>Uttarakhand Public Service Commission (UKPSC), Haridwar</em>.</p>
          <p>Candidates are advised to thoroughly review the official 81-page notification PDF before submitting applications. RajDailyTools does not charge any recruitment fee and operates solely as an educational and information portal.</p>
        </div>
      `
    }
  ];
}

export const UKPSC_UPPER_PCS_2026_EXAM: ExamRecord = {
  id: 'ukpsc-upper-pcs-2026',
  slug: 'ukpsc-upper-pcs-recruitment-2026',
  examName: 'UKPSC Upper PCS Recruitment 2026',
  organization: 'Uttarakhand Public Service Commission (UKPSC)',
  category: 'State Jobs',
  postName: 'Combined State Civil / Upper Subordinate Services (Deputy Collector, DSP, Finance Officer, BDO, etc.)',
  totalVacancy: '67 Posts',
  applicationStartDate: '2026-09-09',
  applicationLastDate: '2026-09-29',
  admitCardDate: 'To Be Announced',
  cityIntimationDate: 'To Be Announced',
  cityIntimationStatus: 'Not Released',
  examDate: 'To Be Announced',
  answerKeyDate: 'To Be Announced',
  resultDate: 'To Be Announced',
  cutOffDate: 'To Be Announced',
  status: 'APPLICATION_OPEN',
  education: ['Graduation', 'Post Graduation'],
  minimumQualificationLevel: 'Graduation',
  acceptedQualificationLevels: ['Graduation', 'Post Graduation'],
  higherQualificationAccepted: true,
  ageMin: 21,
  ageMax: 42,
  ageRelaxationInfo: 'Uttarakhand SC/ST/OBC/PH: +5 Years (Up to 47 Years); ESM as per rules; Other states: UR age (21-42)',
  categoryEligibility: {
    'General': '21 to 42 years as on 01.07.2026 (born between 02.07.1984 and 01.07.2005)',
    'EWS': '21 to 42 years as on 01.07.2026',
    'OBC': '21 to 47 years for Uttarakhand OBC',
    'SC': '21 to 47 years for Uttarakhand SC',
    'ST': '21 to 47 years for Uttarakhand ST'
  },
  gender: 'All',
  state: 'Uttarakhand',
  officialWebsite: 'https://psc.uk.gov.in',
  officialNotification: 'https://pscuk.net.in/notification?postid=eyJpdiI6ImxxVjU4ZjJzRXZ4Ty84SUoiLCJ2YWx1ZSI6Im5PY0NteTg9IiwibWFjIjoiIiwidGFnIjoicU0yNXhZTkthbzR4TVhmZkI1QmEzQT09In0=',
  applyLink: 'https://pscuk.net.in/notification?postid=eyJpdiI6ImxxVjU4ZjJzRXZ4Ty84SUoiLCJ2YWx1ZSI6Im5PY0NteTg9IiwibWFjIjoiIiwidGFnIjoicU0yNXhZTkthbzR4TVhmZkI1QmEzQT09In0=',
  logoIcon: '🏔️',
  logoBg: '#f0fdf4',
  description: 'UKPSC has released official notification A-1/E-1/2026-27 for 67 Group B executive posts including Deputy Collector, DSP, BDO, Finance Officer, and State Tax Officer. Applications open from 09 to 29 September 2026.',
  shortSummary: 'Uttarakhand Combined State Civil / Upper Subordinate Services Examination 2026 for 67 executive posts. Apply online at pscuk.net.in before 29 September 2026.',
  importantDates: [
    { label: 'Notification Issued', date: '09 September 2026' },
    { label: 'Online Application Starts', date: '09 September 2026' },
    { label: 'Last Date to Apply Online', date: '29 September 2026', isHighlight: true },
    { label: 'Online Fee Payment Deadline', date: '29 September 2026' },
    { label: 'Application Correction Window', date: '07 to 16 October 2026' },
    { label: 'Preliminary Examination Date', date: 'Not Released / To Be Updated' }
  ],
  applicationFee: [
    { category: 'General / Unreserved (UR)', amount: '₹166.36 (Fee: ₹150 + Processing: ₹16.36)' },
    { category: 'Uttarakhand OBC / EWS', amount: '₹166.36' },
    { category: 'Uttarakhand SC / ST', amount: '₹76.36 (Fee: ₹60 + Processing: ₹16.36)' },
    { category: 'Uttarakhand Divyangjan (PH)', amount: '₹76.36' },
    { category: 'Uttarakhand Orphan Children', amount: '₹0 (Exempted)' },
    { category: 'Candidates from Other States', amount: '₹166.36 (General Category)' }
  ],
  selectionProcess: [
    'Stage 1: Preliminary Examination (Objective) - Paper-I General Studies (150 Marks) & Paper-II Aptitude (150 Marks, Qualifying 33%)',
    'Stage 2: Main Written Examination (Descriptive) - 8 Compulsory Papers totaling 1500 Marks',
    'Stage 3: Physical Standard Test (PST) - For Deputy Superintendent of Police (DSP) & District Commandant (Home Guards)',
    'Stage 4: Document Verification & Online Post Preference Submission',
    'Stage 5: Personality Test / Interview (150 Marks) before UKPSC Commission Board',
    'Stage 6: Final Aggregate Merit List (1650 Marks Total) & Department Cadre Allocation'
  ],
  physicalRequirements: {
    hasPhysical: true,
    maleHeightCm: 167.7,
    femaleHeightCm: 152.0,
    maleChestCm: '78.8 cm unexpanded / 83.8 cm expanded (ST/Hill: 76.5 cm unexpanded / 81.5 cm expanded)',
    medicalCriteria: 'Distant vision 6/6 and 6/9 without glasses; Free from color blindness, squint, knock knees, flat feet, varicose veins'
  },
  examPattern: [
    {
      tier: 'Preliminary Examination (Objective Type)',
      mode: 'Offline (OMR Based)',
      stageName: 'Screening Stage for Mains Shortlisting',
      duration: '4 Hours (2 Hours per Paper)',
      negativeMarking: '0.25 (1/4th mark) deducted per wrong answer',
      subjects: [
        { name: 'Paper-I: General Studies (Min 50 Qs on Uttarakhand)', questions: 150, marks: 150 },
        { name: 'Paper-II: General Aptitude Test (Qualifying 33%)', questions: 100, marks: 150 }
      ]
    },
    {
      tier: 'Main Written Examination (Descriptive Type)',
      mode: 'Offline Conventional Written',
      stageName: 'Primary Merit Scoring Stage (8 Papers)',
      duration: '3 Hours per Paper (24 Hours Total)',
      negativeMarking: 'Conventional Descriptive (Pen-Paper)',
      subjects: [
        { name: 'Paper 1: General Hindi (Min 35% mandatory)', questions: 11, marks: 150 },
        { name: 'Paper 2: Essay (3 Essays - Sec A, B, C)', questions: 3, marks: 150 },
        { name: 'Paper 3: General Studies-I (Heritage, Culture, World History & Geo)', questions: 20, marks: 200 },
        { name: 'Paper 4: General Studies-II (Governance, Constitution, Polity)', questions: 20, marks: 200 },
        { name: 'Paper 5: General Studies-III (Technology, Economy, Security)', questions: 20, marks: 200 },
        { name: 'Paper 6: General Studies-IV (Ethics, Integrity and Aptitude)', questions: 20, marks: 200 },
        { name: 'Paper 7: General Studies-V (Uttarakhand State History & Polity)', questions: 20, marks: 200 },
        { name: 'Paper 8: General Studies-VI (Uttarakhand State Economy & Geo)', questions: 20, marks: 200 }
      ]
    }
  ],
  salary: {
    payScale: 'Level-10 (₹56,100 - ₹1,77,500) for DC, DSP, BDO, Finance Officer | Level-07 for STO | Level-06 for Case Worker',
    inHand: '₹82,000 - ₹92,000 / month (Level-10) approx with 50% DA & HRA',
    allowances: 'DA (50%), HRA, Transport Allowance, Medical Benefits under State Health Scheme, Contributory Pension'
  },
  faq: [
    {
      q: 'What is the application timeline for UKPSC Upper PCS 2026?',
      a: 'Online applications opened on 09 September 2026 and close on 29 September 2026 at 23:59:59 Hours. The online correction window is active from 07 October to 16 October 2026.'
    },
    {
      q: 'How many vacancies are announced in UKPSC Upper PCS 2026?',
      a: 'A total of 67 Group B vacancies across 16 posts including Deputy Collector (8), DSP (10), BDO (8), Finance Officer (7), and State Tax Officer (7).'
    },
    {
      q: 'Can other state candidates apply for UKPSC Upper PCS 2026?',
      a: 'Yes, candidates from all Indian states are eligible to apply under the Unreserved (General) category. Domicile-based reservation benefits apply only to permanent residents of Uttarakhand.'
    },
    {
      q: 'What is the age limit and crucial date of reckoning?',
      a: 'Candidates must be 21 to 42 years of age as on 01 July, 2026 (born between 02.07.1984 and 01.07.2005). Standard +5 year upper age relaxation applies for Uttarakhand SC/ST/OBC/PH.'
    },
    {
      q: 'What is the pattern of the Preliminary Examination?',
      a: 'Prelims has two objective papers: Paper-I General Studies (150 Qs, 150 Marks with at least 50 Qs on Uttarakhand) and Paper-II General Aptitude (100 Qs, 150 Marks, qualifying with 33% marks). Negative marking is 1/4th mark per wrong answer.'
    }
  ],
  allInformation: generateUkpscUpperPcs50Sections()
};

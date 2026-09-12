import { ExamRecord, ExamInfoSection } from '../types/exam';

/**
 * Generates the official 50-Section expandable information for SSC CPO SI CAPF Recruitment 2026.
 * Sole source of truth: Official SSC Notification Notice_of_adv_capf_2026.pdf (69 Pages).
 * Includes professional responsive tables and visual diagrams/flowcharts.
 */
export function generateSscCpo50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. Recruitment Summary',
      content: `<div class="space-y-3">
  <p>The Staff Selection Commission (SSC) has officially published the recruitment notification for <strong>Sub-Inspector in Delhi Police and Central Armed Police Forces Examination, 2026</strong> (SSC CPO 2026). This national-level recruitment drive invites online applications from eligible Indian citizens for <strong>1,871 tentative vacancies</strong> of Sub-Inspector (Executive) in Delhi Police, Sub-Inspector (GD) across Border Security Force (BSF), Central Industrial Security Force (CISF), Central Reserve Police Force (CRPF), Indo-Tibetan Border Police (ITBP), Sashastra Seema Bal (SSB), and Sub-Inspector (Fire) in CISF.</p>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
    <div class="bg-blue-50/80 p-3 rounded-xl border border-blue-200/60">
      <span class="text-[11px] font-bold text-blue-700 uppercase block">Total Vacancies</span>
      <span class="text-lg font-black text-slate-900">1,871 Posts</span>
    </div>
    <div class="bg-emerald-50/80 p-3 rounded-xl border border-emerald-200/60">
      <span class="text-[11px] font-bold text-emerald-700 uppercase block">Application Window</span>
      <span class="text-sm font-black text-slate-900">10-09-2026 to 30-09-2026</span>
    </div>
    <div class="bg-indigo-50/80 p-3 rounded-xl border border-indigo-200/60">
      <span class="text-[11px] font-bold text-indigo-700 uppercase block">Pay Matrix</span>
      <span class="text-sm font-black text-slate-900">Level-6 (₹35,400 - ₹1,12,400)</span>
    </div>
  </div>
</div>`
    },
    {
      id: 2,
      title: '2. Conducting Organization',
      content: `<div class="space-y-2">
  <p><strong>Staff Selection Commission (SSC)</strong>, Department of Personnel and Training (DoPT), Ministry of Personnel, Public Grievances and Pensions, Government of India.</p>
  <ul class="list-disc pl-5 space-y-1 text-xs">
    <li><strong>Apex Headquarters:</strong> Block No. 12, CGO Complex, Lodhi Road, New Delhi - 110003.</li>
    <li><strong>Official Website:</strong> <a href="https://ssc.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold">https://ssc.gov.in/</a></li>
    <li><strong>Toll-Free Candidate Helpline:</strong> 1800 309 3063</li>
  </ul>
</div>`
    },
    {
      id: 3,
      title: '3. Official Examination Title',
      content: `<p class="font-bold text-slate-900">Sub-Inspector in Delhi Police and Central Armed Police Forces Examination, 2026</p>
<p class="text-xs text-slate-600 mt-1">Commonly designated as <strong>SSC CPO Examination 2026</strong> (Central Police Organization).</p>`
    },
    {
      id: 4,
      title: '4. Advertisement Details & Notification PDF',
      content: `<div class="space-y-3">
  <p>The official examination notification was published on <strong>10 September 2026</strong> on the official SSC portal (69 Pages comprehensive notice). The notice lays down complete statutory recruitment rules, force-wise matrices, physical standards, and syllabus.</p>
  <div class="p-3.5 bg-slate-100 rounded-xl border border-slate-200 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
    <div>
      <div class="font-bold text-slate-800">Official Notice PDF (Advt No. capf_2026)</div>
      <div class="text-[11px] text-slate-500">Notice_of_adv_capf_2026.pdf • 69 Pages • Official SSC Server</div>
    </div>
    <a href="https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_capf_2026.pdf" target="_blank" rel="noopener noreferrer" class="px-3.5 py-1.5 bg-blue-600 text-white rounded-lg font-bold text-xs hover:bg-blue-700 transition-colors whitespace-nowrap">
      Download Official PDF
    </a>
  </div>
</div>`
    },
    {
      id: 5,
      title: '5. Total Tentative Vacancies',
      content: `<div class="space-y-3">
  <p>A total of <strong>1,871 tentative vacancies</strong> are notified. Vacancies are tentative and subject to final revision by the Commission/Indenting Departments prior to final allocation.</p>
  
  <!-- Visual Distribution Breakdown -->
  <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
    <div class="text-xs font-bold text-slate-700 uppercase tracking-wider">Vacancy Allocation Overview (1,871 Total)</div>
    <div class="space-y-2 text-xs">
      <div>
        <div class="flex justify-between font-bold mb-1">
          <span>CAPFs Sub-Inspector (GD)</span>
          <span class="text-blue-700 font-black">1,320 Posts (70.6%)</span>
        </div>
        <div class="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
          <div class="bg-blue-600 h-2.5 rounded-full" style="width: 70.6%"></div>
        </div>
      </div>
      <div>
        <div class="flex justify-between font-bold mb-1">
          <span>CISF Sub-Inspector (Fire) Male</span>
          <span class="text-indigo-700 font-black">234 Posts (12.5%)</span>
        </div>
        <div class="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
          <div class="bg-indigo-600 h-2.5 rounded-full" style="width: 12.5%"></div>
        </div>
      </div>
      <div>
        <div class="flex justify-between font-bold mb-1">
          <span>Delhi Police SI (Exe.) Male</span>
          <span class="text-emerald-700 font-black">205 Posts (11.0%)</span>
        </div>
        <div class="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
          <div class="bg-emerald-600 h-2.5 rounded-full" style="width: 11.0%"></div>
        </div>
      </div>
      <div>
        <div class="flex justify-between font-bold mb-1">
          <span>Delhi Police SI (Exe.) Female</span>
          <span class="text-amber-700 font-black">112 Posts (6.0%)</span>
        </div>
        <div class="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
          <div class="bg-amber-500 h-2.5 rounded-full" style="width: 6.0%"></div>
        </div>
      </div>
    </div>
  </div>
</div>`
    },
    {
      id: 6,
      title: '6. Post Names & Participating Forces',
      content: `<div class="space-y-2">
  <p>The recruitment covers the following 7 prestigious designations across Delhi Police and Central Armed Police Forces (CAPFs):</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg">
      <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2.5 text-center w-12">Code</th>
          <th class="p-2.5 text-left">Post Name & Organization</th>
          <th class="p-2.5 text-left">Classification</th>
          <th class="p-2.5 text-center">Gender Eligibility</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold text-blue-700">A</td><td class="p-2 font-semibold">Sub-Inspector in Delhi Police</td><td class="p-2">Group 'C'</td><td class="p-2 text-center">Male & Female</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold text-blue-700">B</td><td class="p-2 font-semibold">Sub-Inspector in Border Security Force (BSF)</td><td class="p-2">Group 'B' Non-Gazetted</td><td class="p-2 text-center">Male & Female</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold text-blue-700">C</td><td class="p-2 font-semibold">Sub-Inspector in Central Industrial Security Force (CISF)</td><td class="p-2">Group 'B' Non-Gazetted</td><td class="p-2 text-center">Male & Female</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold text-blue-700">D</td><td class="p-2 font-semibold">Sub-Inspector in Central Reserve Police Force (CRPF)</td><td class="p-2">Group 'B' Non-Gazetted</td><td class="p-2 text-center">Male & Female</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold text-blue-700">E</td><td class="p-2 font-semibold">Sub-Inspector in Indo-Tibetan Border Police (ITBP)</td><td class="p-2">Group 'B' Non-Gazetted</td><td class="p-2 text-center">Male & Female</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold text-blue-700">F</td><td class="p-2 font-semibold">Sub-Inspector in Sashastra Seema Bal (SSB)</td><td class="p-2">Group 'B' Non-Gazetted</td><td class="p-2 text-center">Male & Female</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold text-blue-700">G</td><td class="p-2 font-semibold">Sub-Inspector (Fire) in CISF</td><td class="p-2">Group 'B' Non-Gazetted</td><td class="p-2 text-center font-bold text-indigo-700">Male Only</td></tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 7,
      title: '7. Force-Wise & Category-Wise Vacancy Breakdown',
      content: `<div class="space-y-4">
  <p>The detailed vacancy breakup as notified under Para 2 of the official notification is tabulated below:</p>

  <!-- Table 1: Delhi Police SI Executive -->
  <div class="space-y-1">
    <div class="text-xs font-bold text-slate-800">1. Sub-Inspector (Exe.) in Delhi Police — Male (205) & Female (112)</div>
    <div class="overflow-x-auto">
      <table class="min-w-full text-xs border border-slate-200 rounded-lg">
        <thead class="bg-blue-50 text-blue-900 font-bold border-b border-slate-200">
          <tr>
            <th class="p-2 text-left">Category / Quota</th>
            <th class="p-2 text-center">UR</th>
            <th class="p-2 text-center">EWS</th>
            <th class="p-2 text-center">OBC</th>
            <th class="p-2 text-center">SC</th>
            <th class="p-2 text-center">ST</th>
            <th class="p-2 text-center font-black">Total</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr class="hover:bg-slate-50"><td class="p-2 font-medium">Male: Open</td><td class="p-2 text-center">77</td><td class="p-2 text-center">18</td><td class="p-2 text-center">49</td><td class="p-2 text-center">27</td><td class="p-2 text-center">13</td><td class="p-2 text-center font-bold">184</td></tr>
          <tr class="hover:bg-slate-50"><td class="p-2 font-medium">Male: ESM (Others)</td><td class="p-2 text-center">5</td><td class="p-2 text-center">1</td><td class="p-2 text-center">3</td><td class="p-2 text-center">2</td><td class="p-2 text-center">1</td><td class="p-2 text-center font-bold">12</td></tr>
          <tr class="hover:bg-slate-50"><td class="p-2 font-medium">Male: ESM (Special)</td><td class="p-2 text-center">5</td><td class="p-2 text-center">1</td><td class="p-2 text-center">2</td><td class="p-2 text-center">1</td><td class="p-2 text-center">0</td><td class="p-2 text-center font-bold">9</td></tr>
          <tr class="bg-blue-50/50 font-bold"><td class="p-2 text-blue-900">Total SI (Exe.) Male</td><td class="p-2 text-center">87</td><td class="p-2 text-center">20</td><td class="p-2 text-center">54</td><td class="p-2 text-center">30</td><td class="p-2 text-center">14</td><td class="p-2 text-center text-blue-700 font-black">205</td></tr>
          <tr class="hover:bg-slate-50 font-semibold"><td class="p-2 text-purple-900">SI (Exe.) Female (Open)</td><td class="p-2 text-center">47</td><td class="p-2 text-center">11</td><td class="p-2 text-center">30</td><td class="p-2 text-center">16</td><td class="p-2 text-center">8</td><td class="p-2 text-center text-purple-700 font-black">112</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Table 2: CAPFs Sub-Inspector (GD) -->
  <div class="space-y-1">
    <div class="text-xs font-bold text-slate-800">2. Sub-Inspector (GD) in Central Armed Police Forces (CAPFs) — 1,320 Posts</div>
    <div class="overflow-x-auto">
      <table class="min-w-full text-xs border border-slate-200 rounded-lg">
        <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
          <tr>
            <th class="p-2 text-left">Force</th>
            <th class="p-2 text-center">Gender</th>
            <th class="p-2 text-center">UR</th>
            <th class="p-2 text-center">EWS</th>
            <th class="p-2 text-center">OBC</th>
            <th class="p-2 text-center">SC</th>
            <th class="p-2 text-center">ST</th>
            <th class="p-2 text-center font-bold">Total</th>
            <th class="p-2 text-center font-bold text-blue-800">Grand Total</th>
            <th class="p-2 text-center">ESM (10%)</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr class="hover:bg-slate-50"><td class="p-2 font-bold" rowspan="2">BSF</td><td class="p-2 text-center">Male</td><td class="p-2 text-center">178</td><td class="p-2 text-center">43</td><td class="p-2 text-center">117</td><td class="p-2 text-center">65</td><td class="p-2 text-center">32</td><td class="p-2 text-center font-semibold">435</td><td class="p-2 text-center font-black text-blue-700" rowspan="2">457</td><td class="p-2 text-center" rowspan="2">46</td></tr>
          <tr class="hover:bg-slate-50"><td class="p-2 text-center text-slate-500">Female</td><td class="p-2 text-center">9</td><td class="p-2 text-center">2</td><td class="p-2 text-center">6</td><td class="p-2 text-center">3</td><td class="p-2 text-center">2</td><td class="p-2 text-center font-semibold">22</td></tr>
          
          <tr class="hover:bg-slate-50 bg-slate-50/40"><td class="p-2 font-bold" rowspan="2">CISF (GD)</td><td class="p-2 text-center">Male</td><td class="p-2 text-center">82</td><td class="p-2 text-center">20</td><td class="p-2 text-center">54</td><td class="p-2 text-center">30</td><td class="p-2 text-center">14</td><td class="p-2 text-center font-semibold">200</td><td class="p-2 text-center font-black text-blue-700" rowspan="2">250</td><td class="p-2 text-center" rowspan="2">25</td></tr>
          <tr class="hover:bg-slate-50 bg-slate-50/40"><td class="p-2 text-center text-slate-500">Female</td><td class="p-2 text-center">21</td><td class="p-2 text-center">5</td><td class="p-2 text-center">13</td><td class="p-2 text-center">7</td><td class="p-2 text-center">4</td><td class="p-2 text-center font-semibold">50</td></tr>
          
          <tr class="hover:bg-slate-50"><td class="p-2 font-bold" rowspan="2">CRPF</td><td class="p-2 text-center">Male</td><td class="p-2 text-center">90</td><td class="p-2 text-center">23</td><td class="p-2 text-center">61</td><td class="p-2 text-center">34</td><td class="p-2 text-center">17</td><td class="p-2 text-center font-semibold">225</td><td class="p-2 text-center font-black text-blue-700" rowspan="2">254</td><td class="p-2 text-center" rowspan="2">25</td></tr>
          <tr class="hover:bg-slate-50"><td class="p-2 text-center text-slate-500">Female</td><td class="p-2 text-center">12</td><td class="p-2 text-center">3</td><td class="p-2 text-center">8</td><td class="p-2 text-center">4</td><td class="p-2 text-center">2</td><td class="p-2 text-center font-semibold">29</td></tr>
          
          <tr class="hover:bg-slate-50 bg-slate-50/40"><td class="p-2 font-bold" rowspan="2">ITBP</td><td class="p-2 text-center">Male</td><td class="p-2 text-center">89</td><td class="p-2 text-center">21</td><td class="p-2 text-center">30</td><td class="p-2 text-center">18</td><td class="p-2 text-center">1</td><td class="p-2 text-center font-semibold">159</td><td class="p-2 text-center font-black text-blue-700" rowspan="2">187</td><td class="p-2 text-center" rowspan="2">19</td></tr>
          <tr class="hover:bg-slate-50 bg-slate-50/40"><td class="p-2 text-center text-slate-500">Female</td><td class="p-2 text-center">16</td><td class="p-2 text-center">4</td><td class="p-2 text-center">5</td><td class="p-2 text-center">3</td><td class="p-2 text-center">0</td><td class="p-2 text-center font-semibold">28</td></tr>
          
          <tr class="hover:bg-slate-50"><td class="p-2 font-bold" rowspan="2">SSB</td><td class="p-2 text-center">Male</td><td class="p-2 text-center">103</td><td class="p-2 text-center">11</td><td class="p-2 text-center">18</td><td class="p-2 text-center">16</td><td class="p-2 text-center">6</td><td class="p-2 text-center font-semibold">154</td><td class="p-2 text-center font-black text-blue-700" rowspan="2">172</td><td class="p-2 text-center" rowspan="2">17</td></tr>
          <tr class="hover:bg-slate-50"><td class="p-2 text-center text-slate-500">Female</td><td class="p-2 text-center">1</td><td class="p-2 text-center">6</td><td class="p-2 text-center">7</td><td class="p-2 text-center">3</td><td class="p-2 text-center">1</td><td class="p-2 text-center font-semibold">18</td></tr>
          
          <tr class="bg-blue-100/70 font-black text-slate-900">
            <td class="p-2.5" colspan="2">Total CAPFs GD (Male 1173 + Female 147)</td>
            <td class="p-2.5 text-center">507</td>
            <td class="p-2.5 text-center">137</td>
            <td class="p-2.5 text-center">324</td>
            <td class="p-2.5 text-center">196</td>
            <td class="p-2.5 text-center">77</td>
            <td class="p-2.5 text-center">1,320</td>
            <td class="p-2.5 text-center font-black text-blue-900 text-sm">1,320 Posts</td>
            <td class="p-2.5 text-center">132</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Table 3: SI (Fire) in CISF -->
  <div class="space-y-1">
    <div class="text-xs font-bold text-slate-800">3. Sub-Inspector (Fire) in CISF — Male Only (234 Posts)</div>
    <div class="overflow-x-auto">
      <table class="min-w-full text-xs border border-slate-200 rounded-lg">
        <thead class="bg-indigo-50 text-indigo-900 font-bold border-b border-slate-200">
          <tr>
            <th class="p-2 text-left">Post Name</th>
            <th class="p-2 text-center">UR</th>
            <th class="p-2 text-center">EWS</th>
            <th class="p-2 text-center">OBC</th>
            <th class="p-2 text-center">SC</th>
            <th class="p-2 text-center">ST</th>
            <th class="p-2 text-center font-black">Total</th>
            <th class="p-2 text-center">ESM (10%)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-slate-50">
            <td class="p-2 font-bold text-slate-800">SI (Fire) in CISF (Male)</td>
            <td class="p-2 text-center">74</td>
            <td class="p-2 text-center">17</td>
            <td class="p-2 text-center">75</td>
            <td class="p-2 text-center">52</td>
            <td class="p-2 text-center">16</td>
            <td class="p-2 text-center font-black text-indigo-700">234</td>
            <td class="p-2 text-center font-semibold">18</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`
    },
    {
      id: 8,
      title: '8. Important Official Dates',
      content: `<div class="space-y-2">
  <p>The recruitment schedule strictly follows Para 1 of the official notification:</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg">
      <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2.5 text-left">Event / Milestone</th>
          <th class="p-2.5 text-left">Official Date / Time</th>
          <th class="p-2.5 text-left">Current Status</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr class="hover:bg-slate-50"><td class="p-2 font-semibold">Date of Notification Release</td><td class="p-2 font-bold">10 September 2026</td><td class="p-2 text-emerald-700 font-bold">Released</td></tr>
        <tr class="hover:bg-slate-50 bg-emerald-50/40"><td class="p-2 font-semibold">Online Application Start Date</td><td class="p-2 font-bold text-emerald-800">10 September 2026</td><td class="p-2 text-emerald-700 font-bold">Active Now</td></tr>
        <tr class="hover:bg-slate-50 bg-amber-50/40"><td class="p-2 font-semibold">Last Date for Online Application Submission</td><td class="p-2 font-bold text-red-600">30 September 2026 (23:00 Hrs)</td><td class="p-2 text-amber-700 font-bold">Closing Soon</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 font-semibold">Last Date for Online Fee Payment</td><td class="p-2 font-bold">01 October 2026 (23:00 Hrs)</td><td class="p-2 text-slate-600">Upcoming</td></tr>
        <tr class="hover:bg-slate-50 bg-blue-50/40"><td class="p-2 font-semibold">Application Correction Window</td><td class="p-2 font-bold">08 October 2026 to 10 October 2026 (23:00 Hrs)</td><td class="p-2 text-blue-700">Scheduled</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 font-semibold">Schedule of Computer Based Examination (Paper-I)</td><td class="p-2 text-slate-500 font-medium">To be notified later on ssc.gov.in</td><td class="p-2 text-slate-500">Not Released / To Be Updated</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 font-semibold">Admit Card Release Date</td><td class="p-2 text-slate-500 font-medium">Expected 3-4 days before Paper-I date</td><td class="p-2 text-slate-500">Not Released / To Be Updated</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 font-semibold">Answer Key & Response Sheet Date</td><td class="p-2 text-slate-500 font-medium">After completion of Paper-I CBT</td><td class="p-2 text-slate-500">Not Released / To Be Updated</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 font-semibold">Paper-I Result & Cut-Off Date</td><td class="p-2 text-slate-500 font-medium">To be updated after Answer Key objection window</td><td class="p-2 text-slate-500">Not Released / To Be Updated</td></tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 9,
      title: '9. Application Start Date & Portal',
      content: `<p>Online applications commenced on <strong>10 September 2026</strong> exclusively through the revamped official Commission portal: <a href="https://ssc.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold">https://ssc.gov.in/</a>.</p>
<p class="text-xs text-slate-600 mt-2">All applicants must complete the mandatory One-Time Registration (OTR) prior to accessing the application form.</p>`
    },
    {
      id: 10,
      title: '10. Application Last Date & Crucial Advice',
      content: `<div class="space-y-2">
  <p>The online application portal closes strictly at <strong>23:00 Hours on 30 September 2026</strong>.</p>
  <div class="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-800 space-y-1">
    <strong>Commission Advisory (Para 1.1):</strong>
    <p>Candidates are strongly advised in their own interest to submit their online applications well in advance and not wait till the last date or last hours to avoid the possibility of disconnection, inability or failure to log in due to heavy traffic on the server.</p>
  </div>
</div>`
    },
    {
      id: 11,
      title: '11. Fee Payment Last Date',
      content: `<p>Last date and time for making online fee payment is <strong>01 October 2026 up to 23:00 Hours</strong>. Fee can be paid through BHIM UPI, Net Banking, or Visa, MasterCard, Maestro, RuPay Debit cards.</p>`
    },
    {
      id: 12,
      title: '12. Application Form Correction Window & Charges',
      content: `<div class="space-y-3">
  <p>The Commission provides an online 3-day correction window from <strong>08 October 2026 to 10 October 2026 (23:00 Hours)</strong>.</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg">
      <thead class="bg-slate-100 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2 text-left">Correction Opportunity</th>
          <th class="p-2 text-left">Correction Fee</th>
          <th class="p-2 text-left">Applicability</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr class="hover:bg-slate-50"><td class="p-2 font-semibold">First Modification / Resubmission</td><td class="p-2 font-bold text-blue-700">₹200/-</td><td class="p-2">Uniform for all candidates (including women/SC/ST)</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 font-semibold">Second Modification / Resubmission</td><td class="p-2 font-bold text-red-700">₹500/-</td><td class="p-2">Uniform for all candidates (maximum 2 modifications allowed)</td></tr>
      </tbody>
    </table>
  </div>
  <p class="text-xs text-slate-500">Note: The correction fee is non-refundable and must be paid online. No corrections are allowed after 10-10-2026.</p>
</div>`
    },
    {
      id: 13,
      title: '13. Examination Dates',
      content: `<div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-2">
  <div class="font-bold text-slate-800 text-sm">Official Status: To Be Notified Later</div>
  <p>As per Para 1 of the official notification, the schedule of Computer Based Examination (Paper-I) will be announced separately on the official Commission portal <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://ssc.gov.in</a>. Paper-II examination dates will be notified after PST/PET results.</p>
  <div class="text-[11px] text-slate-500 italic">No exact exam date has been declared in the notification PDF. Do not rely on unverified social media rumors.</div>
</div>`
    },
    {
      id: 14,
      title: '14. Admit Card Information',
      content: `<p><strong>Status: Not Released / To Be Updated.</strong></p>
<p class="text-xs text-slate-600 mt-2">Admission Certificates (e-Admit Cards) for Paper-I, PST/PET, Paper-II, and DME/RME will be uploaded on regional websites of the Commission 3 to 7 days before each examination stage. Examination City Intimation slips are typically released 10 days prior to the test.</p>`
    },
    {
      id: 15,
      title: '15. Result Declaration Process',
      content: `<p><strong>Status: Not Released / To Be Updated.</strong></p>
<ul class="list-disc pl-5 text-xs text-slate-600 space-y-1.5 mt-2">
  <li><strong>Stage 1 Result:</strong> Normalised scores of Paper-I will shortlist candidates category-wise for PST/PET.</li>
  <li><strong>Stage 2 Result:</strong> Nodal CAPF authorities certify candidates who qualify PST/PET to appear in Paper-II.</li>
  <li><strong>Stage 3 Result:</strong> Aggregate scores in Paper-II (plus NCC bonus marks) determine shortlisting for Medical Examination (DME/RME) and Document Verification.</li>
  <li><strong>Final Merit List:</strong> Allocated strictly based on normalized marks in Paper-II + NCC bonus + candidate post preferences.</li>
</ul>`
    },
    {
      id: 16,
      title: '16. Answer Key & Representation Process',
      content: `<p><strong>Status: Not Released / To Be Updated.</strong></p>
<p class="text-xs text-slate-600 mt-2">Tentative Answer Keys alongside candidate response sheets will be placed on the Commission's website after the Computer Based Test. Candidates may submit online representations within the stipulated timeframe on payment of <strong>₹100/- per challenged question</strong> (refundable if objection is sustained).</p>`
    },
    {
      id: 17,
      title: '17. Age Limit & Crucial Date of Reckoning',
      content: `<div class="space-y-3">
  <p>The crucial cut-off date for reckoning age is <strong>01 August 2026 (01.08.2026)</strong> as per Paras 5.1 & 5.2 of the notification:</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg">
      <thead class="bg-blue-50 text-blue-900 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2.5 text-left">Post Category</th>
          <th class="p-2.5 text-center">Minimum Age</th>
          <th class="p-2.5 text-center">Maximum Age</th>
          <th class="p-2.5 text-left">Permissible Date of Birth Range (UR)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr class="hover:bg-slate-50">
          <td class="p-2 font-bold text-slate-800">All Posts except SI (Fire) in CISF</td>
          <td class="p-2 text-center font-bold">20 Years</td>
          <td class="p-2 text-center font-bold">25 Years</td>
          <td class="p-2">Born not earlier than <strong>02.08.2001</strong> and not later than <strong>01.08.2006</strong></td>
        </tr>
        <tr class="hover:bg-slate-50 bg-indigo-50/50">
          <td class="p-2 font-bold text-indigo-900">Sub-Inspector (Fire) in CISF</td>
          <td class="p-2 text-center font-bold text-indigo-800">18 Years</td>
          <td class="p-2 text-center font-bold text-indigo-800">30 Years</td>
          <td class="p-2">Born not earlier than <strong>02.08.1996</strong> and not later than <strong>01.08.2008</strong></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 18,
      title: '18. Category-Wise Age Relaxation Table',
      content: `<div class="space-y-2">
  <p>Permissible relaxations in upper age limit as specified in Para 5.3 of the notification:</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg">
      <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2.5 text-center w-12">Code</th>
          <th class="p-2.5 text-left">Category / Description</th>
          <th class="p-2.5 text-center">Age Relaxation</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold">01</td><td class="p-2 font-semibold">SC / ST Candidates</td><td class="p-2 text-center font-bold text-blue-700">5 Years</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold">02</td><td class="p-2 font-semibold">OBC Candidates (Non-Creamy Layer)</td><td class="p-2 text-center font-bold text-blue-700">3 Years</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold">03</td><td class="p-2 font-semibold">Ex-Servicemen (ESM)</td><td class="p-2 text-center font-bold">3 Years after deduction of military service rendered</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold">12</td><td class="p-2 font-semibold">Delhi Police Departmental (UR) — min 3 yrs regular service</td><td class="p-2 text-center font-bold">Up to 30 Years of age</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold">13</td><td class="p-2 font-semibold">Delhi Police Departmental (OBC)</td><td class="p-2 text-center font-bold">Up to 33 Years of age</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold">14</td><td class="p-2 font-semibold">Delhi Police Departmental (SC / ST)</td><td class="p-2 text-center font-bold">Up to 35 Years of age</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold">21</td><td class="p-2 font-semibold">Widows, divorced women and women judicially separated (UR)</td><td class="p-2 text-center font-bold">Up to 35 Years of age</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold">22</td><td class="p-2 font-semibold">Widows, divorced women and women judicially separated (SC/ST)</td><td class="p-2 text-center font-bold">Up to 40 Years of age</td></tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 19,
      title: '19. Educational Qualification & Crucial Date',
      content: `<div class="space-y-3">
  <p>The crucial date for acquiring essential educational qualification is <strong>30 September 2026 (30.09.2026)</strong>.</p>
  <div class="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl text-xs space-y-1">
    <strong>Appearing Candidates Provision (Para 6.4):</strong>
    <p>Candidates who have appeared in their final year Bachelor's Degree examination are also eligible to apply, provided they acquire the essential qualification and possess documentary proof of result declaration on or before the crucial date <strong>30-09-2026</strong>.</p>
  </div>
</div>`
    },
    {
      id: 20,
      title: '20. Post-Wise Qualification & SI Fire CISF Dual-Route Matrix',
      content: `<div class="space-y-4">
  <p>Educational requirements differ between regular Sub-Inspector posts and Sub-Inspector (Fire) in CISF:</p>

  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg">
      <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2.5 text-left">Post / Organization</th>
          <th class="p-2.5 text-left">Essential Educational Qualification Required</th>
          <th class="p-2.5 text-left">Special Prerequisites</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr class="hover:bg-slate-50">
          <td class="p-2 font-bold text-slate-800">Sub-Inspector (Executive) in Delhi Police</td>
          <td class="p-2 font-medium">Bachelor's degree in any discipline from a recognized University or equivalent.</td>
          <td class="p-2 text-red-700 font-bold">Male candidates must possess a valid Driving License for LMV (Motorcycle and Car) on the date of PE&MT.</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-2 font-bold text-slate-800">Sub-Inspector (GD) in CAPFs (BSF, CISF, CRPF, ITBP, SSB)</td>
          <td class="p-2 font-medium">Bachelor's degree in any discipline from a recognized University or equivalent.</td>
          <td class="p-2 text-slate-600">No driving license required for CAPFs GD posts.</td>
        </tr>
        <tr class="hover:bg-slate-50 bg-indigo-50/50">
          <td class="p-2 font-bold text-indigo-900">Sub-Inspector (Fire) in CISF (Male Only)</td>
          <td class="p-2" colspan="2">
            <div class="space-y-1.5 py-1">
              <div class="font-bold text-slate-800">Must satisfy either Route A OR Route B:</div>
              <div class="p-2 bg-white rounded border border-indigo-200">
                <span class="font-bold text-indigo-700">Route A:</span> Bachelor's degree in Science with <strong>Physics, Chemistry and Mathematics (PCM)</strong> of a recognized University or equivalent; <strong class="text-slate-900">OR</strong>
              </div>
              <div class="p-2 bg-white rounded border border-indigo-200">
                <span class="font-bold text-indigo-700">Route B:</span> Matriculation (10th) or equivalent <strong>AND</strong> 3-year Diploma in Mechanical, Civil, Electrical, Automobiles, Chemical, Mining, Aeronautical, Telecommunication Engineering or equivalent from a recognized Board/University.
              </div>
              <div class="text-[11px] text-slate-500 italic mt-1">
                * Note: Higher qualifications such as B.Tech/M.Tech in the specified engineering fields are accepted as value addition subject to basic diploma.
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 21,
      title: '21. Nationality & Citizenship Criteria',
      content: `<p>A candidate must be either:</p>
<ul class="list-disc pl-5 text-xs text-slate-600 space-y-1 mt-2">
  <li>A citizen of India, or</li>
  <li>A subject of Nepal, or</li>
  <li>A subject of Bhutan, or</li>
  <li>A Tibetan refugee who came over to India before 01 January 1962 with the intention of permanently settling in India, or</li>
  <li>A person of Indian origin migrated from Pakistan, Burma, Sri Lanka, or East African countries with eligibility certificate issued by Govt of India.</li>
</ul>`
    },
    {
      id: 22,
      title: '22. Application Fee Structure & Exemptions',
      content: `<div class="space-y-3">
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg">
      <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2.5 text-left">Category of Applicant</th>
          <th class="p-2.5 text-center">Application Fee</th>
          <th class="p-2.5 text-left">Remarks</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr class="hover:bg-slate-50"><td class="p-2 font-medium">General / OBC / EWS (Male Candidates)</td><td class="p-2 text-center font-bold text-slate-900">₹100/-</td><td class="p-2">Payable online up to 01-10-2026 (23:00)</td></tr>
        <tr class="hover:bg-slate-50 bg-emerald-50/50"><td class="p-2 font-bold text-emerald-800">Women Candidates (All Categories)</td><td class="p-2 text-center font-black text-emerald-700">₹0 (Nil)</td><td class="p-2 text-emerald-700 font-bold">Completely Exempted</td></tr>
        <tr class="hover:bg-slate-50 bg-emerald-50/50"><td class="p-2 font-bold text-emerald-800">SC / ST Candidates</td><td class="p-2 text-center font-black text-emerald-700">₹0 (Nil)</td><td class="p-2 text-emerald-700 font-bold">Completely Exempted</td></tr>
        <tr class="hover:bg-slate-50 bg-emerald-50/50"><td class="p-2 font-bold text-emerald-800">Ex-Servicemen (ESM) eligible for reservation</td><td class="p-2 text-center font-black text-emerald-700">₹0 (Nil)</td><td class="p-2 text-emerald-700 font-bold">Completely Exempted</td></tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 23,
      title: '23. Online Payment Methods',
      content: `<p>Fee can be paid online through:</p>
<ul class="list-disc pl-5 text-xs text-slate-600 space-y-1 mt-2">
  <li>BHIM UPI</li>
  <li>Internet Banking (SBI & other commercial banks)</li>
  <li>Visa, MasterCard, Maestro, RuPay Debit Cards</li>
</ul>
<p class="text-xs text-slate-500 mt-2">Note: Offline challan mode has been completely discontinued by the Commission. Applications without successful fee receipt will be summarily rejected.</p>`
    },
    {
      id: 24,
      title: '24. Complete Selection Process (Stage-by-Stage Flowchart)',
      content: `<div class="space-y-4">
  <p>The recruitment consists of the following 6 sequential stages as mandated by the Ministry of Home Affairs:</p>

  <!-- Flowchart Visual -->
  <div class="space-y-2">
    <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-200">
      <span class="w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center font-black text-xs shrink-0">1</span>
      <div>
        <div class="font-bold text-slate-800 text-xs">Stage 1: Paper-I Computer Based Examination (CBE)</div>
        <div class="text-[11px] text-slate-500">100 Qs • 100 Marks • 1 Hour • 0.25 Negative Marking • Qualifying for PST/PET</div>
      </div>
    </div>
    <div class="flex justify-center text-slate-400 font-black text-xs">↓</div>
    <div class="flex items-center gap-3 p-3 bg-amber-50 rounded-xl border border-amber-200">
      <span class="w-7 h-7 bg-amber-600 text-white rounded-lg flex items-center justify-center font-black text-xs shrink-0">2</span>
      <div>
        <div class="font-bold text-slate-800 text-xs">Stage 2: Physical Standard Test (PST) & Physical Endurance Test (PET)</div>
        <div class="text-[11px] text-slate-500">Conducted by Nodal CAPF • Purely Qualifying in Nature • Mandatory to clear to enter Paper-II</div>
      </div>
    </div>
    <div class="flex justify-center text-slate-400 font-black text-xs">↓</div>
    <div class="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl border border-indigo-200">
      <span class="w-7 h-7 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-black text-xs shrink-0">3</span>
      <div>
        <div class="font-bold text-slate-800 text-xs">Stage 3: Paper-II Computer Based Examination (CBE)</div>
        <div class="text-[11px] text-slate-500">160 Qs • 320 Marks • 2 Hours • 0.50 Negative Marking • Primary Merit Scoring Paper</div>
      </div>
    </div>
    <div class="flex justify-center text-slate-400 font-black text-xs">↓</div>
    <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-xl border border-purple-200">
      <span class="w-7 h-7 bg-purple-600 text-white rounded-lg flex items-center justify-center font-black text-xs shrink-0">4</span>
      <div>
        <div class="font-bold text-slate-800 text-xs">Stage 4: Detailed Medical Examination (DME) / Review Medical Exam (RME)</div>
        <div class="text-[11px] text-slate-500">Conducted by CAPF Medical Boards • Vision 6/6 & 6/9 • CP-III Color Vision • High physical fitness</div>
      </div>
    </div>
    <div class="flex justify-center text-slate-400 font-black text-xs">↓</div>
    <div class="flex items-center gap-3 p-3 bg-teal-50 rounded-xl border border-teal-200">
      <span class="w-7 h-7 bg-teal-600 text-white rounded-lg flex items-center justify-center font-black text-xs shrink-0">5</span>
      <div>
        <div class="font-bold text-slate-800 text-xs">Stage 5: Document Verification (DV) by CAPF Authorities</div>
        <div class="text-[11px] text-slate-500">Conducted along with DME/RME • Scrutiny of Original Degrees, Driving License & Category Certificates</div>
      </div>
    </div>
    <div class="flex justify-center text-slate-400 font-black text-xs">↓</div>
    <div class="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl border border-emerald-200">
      <span class="w-7 h-7 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-black text-xs shrink-0">6</span>
      <div>
        <div class="font-bold text-slate-800 text-xs">Stage 6: Final Selection & Force Allocation</div>
        <div class="text-[11px] text-slate-500">Allocated strictly on Aggregate Paper-II Marks + NCC Bonus Marks + Online Post Preferences</div>
      </div>
    </div>
  </div>
</div>`
    },
    {
      id: 25,
      title: '25. Paper-I Scheme & Examination Pattern',
      content: `<div class="space-y-3">
  <p>Paper-I is an Objective Type Multiple Choice Computer Based Examination containing <strong>100 questions for 100 marks</strong> with a total duration of <strong>1 Hour (60 Minutes)</strong>. A sectional timer of <strong>15 minutes</strong> is allocated to each part:</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg">
      <thead class="bg-blue-50 text-blue-900 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2.5 text-center w-14">Part</th>
          <th class="p-2.5 text-left">Subject / Component</th>
          <th class="p-2.5 text-center">Number of Questions</th>
          <th class="p-2.5 text-center">Maximum Marks</th>
          <th class="p-2.5 text-center">Sectional Duration</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold">Part-I</td><td class="p-2 font-semibold">General Intelligence and Reasoning</td><td class="p-2 text-center font-bold">25</td><td class="p-2 text-center font-bold">25</td><td class="p-2 text-center">15 Minutes</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold">Part-II</td><td class="p-2 font-semibold">General Knowledge and General Awareness</td><td class="p-2 text-center font-bold">25</td><td class="p-2 text-center font-bold">25</td><td class="p-2 text-center">15 Minutes</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold">Part-III</td><td class="p-2 font-semibold">Quantitative Aptitude</td><td class="p-2 text-center font-bold">25</td><td class="p-2 text-center font-bold">25</td><td class="p-2 text-center">15 Minutes</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold">Part-IV</td><td class="p-2 font-semibold">English Comprehension</td><td class="p-2 text-center font-bold">25</td><td class="p-2 text-center font-bold">25</td><td class="p-2 text-center">15 Minutes</td></tr>
        <tr class="bg-blue-100/60 font-black text-slate-900">
          <td class="p-2 text-center" colspan="2">Total for Paper-I</td>
          <td class="p-2 text-center font-black text-blue-900">100 Questions</td>
          <td class="p-2 text-center font-black text-blue-900">100 Marks</td>
          <td class="p-2 text-center font-black text-blue-900">1 Hour (60 Mins)</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="text-xs text-slate-500">* Negative marking: 0.25 marks deducted for each incorrect attempt in Paper-I. 80 minutes allowed for candidates eligible for scribes.</p>
</div>`
    },
    {
      id: 26,
      title: '26. Paper-II Scheme & Examination Pattern',
      content: `<div class="space-y-3">
  <p>Paper-II is a Computer Based Examination containing <strong>160 questions for 320 marks</strong> with a total duration of <strong>2 Hours (120 Minutes)</strong>. Parts I, II, and III have a sectional timer of <strong>20 minutes each</strong> (1 hour total), and Part IV has a sectional timer of <strong>1 Hour</strong>:</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg">
      <thead class="bg-indigo-50 text-indigo-900 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2.5 text-center w-14">Part</th>
          <th class="p-2.5 text-left">Subject / Component</th>
          <th class="p-2.5 text-center">Number of Questions</th>
          <th class="p-2.5 text-center">Maximum Marks</th>
          <th class="p-2.5 text-center">Sectional Duration</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold">Part-I</td><td class="p-2 font-semibold">General Intelligence and Reasoning</td><td class="p-2 text-center font-bold">20</td><td class="p-2 text-center font-bold">40</td><td class="p-2 text-center">20 Minutes</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold">Part-II</td><td class="p-2 font-semibold">General Knowledge and General Awareness</td><td class="p-2 text-center font-bold">20</td><td class="p-2 text-center font-bold">40</td><td class="p-2 text-center">20 Minutes</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 text-center font-bold">Part-III</td><td class="p-2 font-semibold">Quantitative Aptitude</td><td class="p-2 text-center font-bold">20</td><td class="p-2 text-center font-bold">40</td><td class="p-2 text-center">20 Minutes</td></tr>
        <tr class="hover:bg-slate-50 bg-indigo-50/40"><td class="p-2 text-center font-bold text-indigo-900">Part-IV</td><td class="p-2 font-bold text-indigo-900">English Comprehension</td><td class="p-2 text-center font-black text-indigo-800">100</td><td class="p-2 text-center font-black text-indigo-800">200</td><td class="p-2 text-center font-bold text-indigo-800">1 Hour (60 Mins)</td></tr>
        <tr class="bg-indigo-100/70 font-black text-slate-900">
          <td class="p-2 text-center" colspan="2">Total for Paper-II</td>
          <td class="p-2 text-center font-black text-indigo-900">160 Questions</td>
          <td class="p-2 text-center font-black text-indigo-900">320 Marks</td>
          <td class="p-2 text-center font-black text-indigo-900">2 Hours (120 Mins)</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="text-xs text-slate-500">* Negative marking: 0.50 marks deducted for each incorrect attempt in Paper-II (each question carries 2 marks). Total Paper-II score forms the basis of final selection!</p>
</div>`
    },
    {
      id: 27,
      title: '27. NCC Certificate Bonus Marks Scheme',
      content: `<div class="space-y-3">
  <p>Bonus marks are awarded to NCC Certificate holders in both Paper-I and Paper-II as on the crucial date 30.09.2026 (Para 12.5):</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg">
      <thead class="bg-slate-100 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2.5 text-left">Type of NCC Certificate</th>
          <th class="p-2.5 text-center">Percentage of Max Marks</th>
          <th class="p-2.5 text-center">Bonus Marks in Paper-I (Max 100)</th>
          <th class="p-2.5 text-center">Bonus Marks in Paper-II (Max 320)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr class="hover:bg-slate-50"><td class="p-2 font-bold text-amber-800">NCC 'C' Certificate</td><td class="p-2 text-center font-bold">5%</td><td class="p-2 text-center font-bold text-blue-700">5.0 Marks</td><td class="p-2 text-center font-bold text-blue-700">16.0 Marks</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 font-bold text-slate-700">NCC 'B' Certificate</td><td class="p-2 text-center font-bold">3%</td><td class="p-2 text-center font-bold">3.0 Marks</td><td class="p-2 text-center font-bold">9.6 Marks</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 font-bold text-slate-600">NCC 'A' Certificate</td><td class="p-2 text-center font-bold">2%</td><td class="p-2 text-center font-bold">2.0 Marks</td><td class="p-2 text-center font-bold">6.4 Marks</td></tr>
      </tbody>
    </table>
  </div>
  <p class="text-xs text-slate-500">The benefit of bonus marks will only be given if original certificates are verified at the Document Verification stage.</p>
</div>`
    },
    {
      id: 28,
      title: '28. Minimum Qualifying Marks in CBE',
      content: `<div class="space-y-2">
  <p>Minimum qualifying marks in Paper-I and Paper-II without adding NCC bonus marks (Para 16.2):</p>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
    <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
      <div class="text-[11px] font-bold text-slate-500 uppercase">Unreserved (UR)</div>
      <div class="text-xl font-black text-blue-700 mt-1">30%</div>
      <div class="text-[11px] text-slate-400">Paper-I: 30 M • Paper-II: 96 M</div>
    </div>
    <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
      <div class="text-[11px] font-bold text-slate-500 uppercase">OBC / EWS</div>
      <div class="text-xl font-black text-blue-700 mt-1">25%</div>
      <div class="text-[11px] text-slate-400">Paper-I: 25 M • Paper-II: 80 M</div>
    </div>
    <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
      <div class="text-[11px] font-bold text-slate-500 uppercase">SC / ST / ESM</div>
      <div class="text-xl font-black text-blue-700 mt-1">20%</div>
      <div class="text-[11px] text-slate-400">Paper-I: 20 M • Paper-II: 64 M</div>
    </div>
  </div>
</div>`
    },
    {
      id: 29,
      title: '29. Physical Standard Test (PST) Specifications',
      content: `<div class="space-y-3">
  <p>Physical Standard Test (PST) parameters for Height and Chest as specified in Para 12.10.1 of the notification:</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg">
      <thead class="bg-blue-50 text-blue-900 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2.5 text-left">Category of Candidate</th>
          <th class="p-2.5 text-center">Height (cm)</th>
          <th class="p-2.5 text-center">Chest: Unexpanded (cm)</th>
          <th class="p-2.5 text-center">Chest: Expanded (cm)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr class="hover:bg-slate-50"><td class="p-2 font-bold text-slate-800">Male Candidates (General, OBC, SC)</td><td class="p-2 text-center font-bold">170 cm</td><td class="p-2 text-center">80 cm</td><td class="p-2 text-center font-bold">85 cm</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 font-medium">Male Hill Area Candidates (Garhwal, Kumaon, Himachal, Gorkhas, Dogras, Marathas, Kashmir Valley, Leh & Ladakh, NE states)</td><td class="p-2 text-center font-bold">165 cm</td><td class="p-2 text-center">80 cm</td><td class="p-2 text-center font-bold">85 cm</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 font-bold text-blue-700">All Male Candidates belonging to Scheduled Tribes (ST)</td><td class="p-2 text-center font-bold">162.5 cm</td><td class="p-2 text-center">77 cm</td><td class="p-2 text-center font-bold">82 cm</td></tr>
        <tr class="hover:bg-slate-50 bg-slate-50/50"><td class="p-2 font-bold text-slate-800">Female Candidates (General, OBC, SC)</td><td class="p-2 text-center font-bold">157 cm</td><td class="p-2 text-center text-slate-400" colspan="2">Not Applicable</td></tr>
        <tr class="hover:bg-slate-50 bg-slate-50/50"><td class="p-2 font-medium">Female Hill Area Candidates</td><td class="p-2 text-center font-bold">155 cm</td><td class="p-2 text-center text-slate-400" colspan="2">Not Applicable</td></tr>
        <tr class="hover:bg-slate-50 bg-slate-50/50"><td class="p-2 font-bold text-blue-700">All Female Candidates belonging to Scheduled Tribes (ST)</td><td class="p-2 text-center font-bold">154 cm</td><td class="p-2 text-center text-slate-400" colspan="2">Not Applicable</td></tr>
      </tbody>
    </table>
  </div>
  <p class="text-xs text-slate-500">Weight: Must correspond to height for all posts as per medical standards. Ex-Servicemen are subjected to PST measurement only.</p>
</div>`
    },
    {
      id: 30,
      title: '30. Physical Endurance Test (PET) Events & Standards',
      content: `<div class="space-y-4">
  <p>Physical Endurance Test (PET) is mandatory and strictly qualifying in nature. Failure in any single event leads to disqualification:</p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- Male Events -->
    <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
      <div class="text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center justify-between">
        <span>Male Candidates PET Events</span>
        <span class="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">5 Events</span>
      </div>
      <div class="divide-y divide-slate-200 text-xs">
        <div class="py-1.5 flex justify-between"><span>100 Metre Sprint:</span><strong class="text-slate-800">16 Seconds</strong></div>
        <div class="py-1.5 flex justify-between"><span>1.6 Km Race:</span><strong class="text-slate-800">6.5 Minutes (6 min 30 sec)</strong></div>
        <div class="py-1.5 flex justify-between"><span>Long Jump:</span><strong class="text-slate-800">3.65 Metres (in 3 chances)</strong></div>
        <div class="py-1.5 flex justify-between"><span>High Jump:</span><strong class="text-slate-800">1.2 Metres (in 3 chances)</strong></div>
        <div class="py-1.5 flex justify-between"><span>Shot Put (16 Lbs / 7.26 kg):</span><strong class="text-slate-800">4.5 Metres (in 3 chances)</strong></div>
      </div>
    </div>

    <!-- Female Events -->
    <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
      <div class="text-xs font-bold text-purple-700 uppercase tracking-wider flex items-center justify-between">
        <span>Female Candidates PET Events</span>
        <span class="text-[10px] bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">4 Events</span>
      </div>
      <div class="divide-y divide-slate-200 text-xs">
        <div class="py-1.5 flex justify-between"><span>100 Metre Sprint:</span><strong class="text-slate-800">18 Seconds</strong></div>
        <div class="py-1.5 flex justify-between"><span>800 Metre Race:</span><strong class="text-slate-800">4 Minutes</strong></div>
        <div class="py-1.5 flex justify-between"><span>Long Jump:</span><strong class="text-slate-800">2.7 Metres / 9 Feet (in 3 chances)</strong></div>
        <div class="py-1.5 flex justify-between"><span>High Jump:</span><strong class="text-slate-800">0.9 Metres / 3 Feet (in 3 chances)</strong></div>
        <div class="py-1.5 flex justify-between text-slate-400"><span>Shot Put:</span><strong>Not Applicable</strong></div>
      </div>
    </div>
  </div>
  <p class="text-xs text-slate-500">Note: Ex-Servicemen (ESM) candidates are completely exempted from PET. Pregnant female candidates are declared temporarily unfit.</p>
</div>`
    },
    {
      id: 31,
      title: '31. Detailed Medical Examination (DME) & Eye Sight Standards',
      content: `<div class="space-y-3">
  <p>Medical examination is conducted by CAPF Medical Boards as per MHA Guidelines dated 20.05.2015:</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg">
      <thead class="bg-slate-100 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2.5 text-left">Parameter</th>
          <th class="p-2.5 text-center">Better Eye</th>
          <th class="p-2.5 text-center">Worse Eye</th>
          <th class="p-2.5 text-left">Conditions / Constraints</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr class="hover:bg-slate-50"><td class="p-2 font-bold">Distant Vision</td><td class="p-2 text-center font-bold text-emerald-700">6/6</td><td class="p-2 text-center font-bold text-amber-700">6/9</td><td class="p-2">Without wearing glasses or contact lenses</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 font-bold">Near Vision</td><td class="p-2 text-center font-bold text-emerald-700">N6</td><td class="p-2 text-center font-bold text-amber-700">N9</td><td class="p-2">Without visual correction aids</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 font-bold">Color Vision</td><td class="p-2 text-center font-bold text-blue-700" colspan="2">CP-III by ISHIHARA</td><td class="p-2">High Color Vision mandatory</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 font-bold">Surgical Corrections</td><td class="p-2 text-center text-red-600 font-bold" colspan="2">LASIK / PRK / RK</td><td class="p-2 text-red-700">LASIK surgery of any kind is strictly NOT permitted.</td></tr>
      </tbody>
    </table>
  </div>
  <p class="text-xs text-slate-600 mt-2"><strong>General Physical Health:</strong> Candidates must be free from knock knee, flat foot, varicose veins, squint in eyes, or stammering, and must possess high mental and physical fitness.</p>
</div>`
    },
    {
      id: 32,
      title: '32. Tattoo Policy & Permissibility Guidelines',
      content: `<div class="space-y-2">
  <p>Tattoos are governed by Ministry of Home Affairs rules (Para 12.11.3):</p>
  <ul class="list-disc pl-5 text-xs text-slate-600 space-y-1.5">
    <li><strong>Content:</strong> Tattoos depicting religious symbols, figures, or names as practiced in the Indian Army are permitted.</li>
    <li><strong>Location:</strong> Permitted only on traditional sites such as the <strong>inner aspect of the left forearm</strong> (non-saluting arm) or <strong>dorsum of the hands</strong>.</li>
    <li><strong>Size:</strong> Size must be strictly less than <strong>1/4th</strong> of the respective body part (Elbow or Hand).</li>
    <li>Tattoos on saluting arms or obscene/offensive markings are strictly prohibited and result in medical disqualification.</li>
  </ul>
</div>`
    },
    {
      id: 33,
      title: '33. Driving License Requirement for Delhi Police (Male Candidates)',
      content: `<div class="p-4 bg-amber-50 border border-amber-300 rounded-2xl space-y-2 text-xs text-amber-950">
  <div class="font-bold text-sm text-amber-900 flex items-center gap-1.5">
    <span>⚠️ Mandatory Requirement for Male Applicants targeting Delhi Police</span>
  </div>
  <p>Male candidates applying for <strong>Sub-Inspector in Delhi Police</strong> must possess a valid <strong>Light Motor Vehicle (LMV) Driving License (for Motorcycle and Car)</strong> as on the date fixed for Physical Endurance and Measurement Tests (PE&MT).</p>
  <ul class="list-disc pl-5 space-y-1">
    <li>Learner's License is <strong>NOT</strong> acceptable.</li>
    <li>Candidates who do not possess a valid LMV Driving License are <strong>eligible for all other CAPF posts only</strong> (BSF, CISF, CRPF, ITBP, SSB) and will not be considered for Delhi Police.</li>
    <li>Female candidates are completely exempt from driving license requirements.</li>
  </ul>
</div>`
    },
    {
      id: 34,
      title: '34. Post Preference Codes & Order',
      content: `<div class="space-y-2">
  <p>Candidates must submit their force preferences online on the Commission's website prior to final results declaration (Para 14.2):</p>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
    <div class="p-2.5 bg-slate-50 border rounded-xl font-medium"><strong class="text-blue-700">Code A:</strong> Delhi Police</div>
    <div class="p-2.5 bg-slate-50 border rounded-xl font-medium"><strong class="text-blue-700">Code B:</strong> BSF</div>
    <div class="p-2.5 bg-slate-50 border rounded-xl font-medium"><strong class="text-blue-700">Code C:</strong> CISF (GD)</div>
    <div class="p-2.5 bg-slate-50 border rounded-xl font-medium"><strong class="text-blue-700">Code D:</strong> CRPF</div>
    <div class="p-2.5 bg-slate-50 border rounded-xl font-medium"><strong class="text-blue-700">Code E:</strong> ITBP</div>
    <div class="p-2.5 bg-slate-50 border rounded-xl font-medium"><strong class="text-blue-700">Code F:</strong> SSB</div>
    <div class="p-2.5 bg-indigo-50 border border-indigo-200 rounded-xl font-medium col-span-2"><strong class="text-indigo-700">Code G:</strong> CISF Sub-Inspector (Fire)</div>
  </div>
  <p class="text-[11px] text-slate-500 mt-1">Allocation to posts/forces will be made based on merit position in Paper-II (plus NCC bonus marks) and options exercised by the candidate.</p>
</div>`
    },
    {
      id: 35,
      title: '35. Salary, Pay Level & Allowances',
      content: `<div class="space-y-3">
  <p>Sub-Inspectors in Delhi Police and CAPFs draw Pay Scale under <strong>Pay Level-6 (₹35,400 to ₹1,12,400)</strong> of the 7th Central Pay Commission Pay Matrix:</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg">
      <thead class="bg-slate-100 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2.5 text-left">Salary Component</th>
          <th class="p-2.5 text-left">Approximate Rate / Structure</th>
          <th class="p-2.5 text-left">Monthly Approximate (Class X Cities)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr class="hover:bg-slate-50"><td class="p-2 font-semibold">Basic Pay</td><td class="p-2">Pay Level-6 (Cell 1)</td><td class="p-2 font-bold">₹35,400/-</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 font-semibold">Dearness Allowance (DA)</td><td class="p-2">50% of Basic Pay (Central Govt Rates)</td><td class="p-2 font-bold">₹17,700/-</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 font-semibold">House Rent Allowance (HRA)</td><td class="p-2">30% (Delhi/X cities) / 20% (Y) / 10% (Z)</td><td class="p-2 font-bold">₹10,620/- (X city)</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 font-semibold">Transport Allowance (TA) + DA on TA</td><td class="p-2">Higher TPTA cities</td><td class="p-2 font-bold">₹5,400/-</td></tr>
        <tr class="hover:bg-slate-50"><td class="p-2 font-semibold">Ration Money Allowance (RMA)</td><td class="p-2">CAPFs GD rates</td><td class="p-2 font-bold">₹3,900/-</td></tr>
        <tr class="bg-emerald-50/70 font-black text-slate-900"><td class="p-2.5 text-emerald-900">Estimated Gross Monthly Pay</td><td class="p-2.5">Including allowances</td><td class="p-2.5 text-emerald-800 text-sm">₹68,000 - ₹73,000/-</td></tr>
        <tr class="bg-blue-50/70 font-black text-slate-900"><td class="p-2.5 text-blue-900">Estimated In-Hand Salary</td><td class="p-2.5">After NPS (10%), CGHS, CGEGIS deductions</td><td class="p-2.5 text-blue-800 text-sm">₹58,000 - ₹64,000/-</td></tr>
      </tbody>
    </table>
  </div>
  <p class="text-xs text-slate-500">* Special field allowances, High Altitude Allowance, and Risk & Hardship Allowances are additional in active operational postings.</p>
</div>`
    },
    {
      id: 36,
      title: '36. Service Cadre & Promotion Prospects',
      content: `<ul class="list-disc pl-5 text-xs text-slate-600 space-y-1.5">
  <li><strong>Delhi Police:</strong> Sub-Inspector -> Inspector (after 5-8 yrs) -> Assistant Commissioner of Police (ACP) -> Deputy Commissioner of Police (DCP).</li>
  <li><strong>CAPFs (BSF/CISF/CRPF/ITBP/SSB):</strong> Sub-Inspector -> Inspector -> Assistant Commandant (AC, Gazetted Officer) -> Deputy Commandant (DC) -> Second-in-Command (2IC) -> Commandant.</li>
</ul>`
    },
    {
      id: 37,
      title: '37. Resolution of Tie Cases',
      content: `<p>In cases where more than one candidate secures equal aggregate marks in Paper-II (plus NCC bonus marks), ties will be resolved by applying the following criteria in sequential order (Para 17):</p>
<ol class="list-decimal pl-5 text-xs text-slate-600 space-y-1 mt-2">
  <li>Total marks in <strong>Paper-I</strong>.</li>
  <li>Marks in <strong>Part-IV (English Comprehension)</strong> of Paper-II.</li>
  <li>Date of Birth, with <strong>older candidates</strong> placed higher.</li>
  <li>Alphabetical order of candidate names.</li>
</ol>`
    },
    {
      id: 38,
      title: '38. Mandatory Document Checklist for Verification',
      content: `<div class="space-y-2">
  <p>Originals along with two self-attested photocopies are scrutinized during Document Verification:</p>
  <ul class="list-disc pl-5 text-xs text-slate-600 space-y-1">
    <li>Matriculation / Secondary Certificate (Proof of Date of Birth).</li>
    <li>Senior Secondary (10+2) Passing Certificate & Marksheet.</li>
    <li>Graduation Degree Certificate & Year-wise/Semester-wise Marksheets.</li>
    <li>For SI Fire: B.Sc. PCM Degree OR 10th + 3-Year Engineering Diploma Certificate.</li>
    <li>Valid Driving License for LMV (Motorcycle & Car) for Delhi Police Male applicants.</li>
    <li>Caste / Category Certificate (SC/ST/OBC-NCL/EWS) in official Central Government format.</li>
    <li>Discharge Certificate / NOC for Ex-Servicemen.</li>
    <li>Original NCC Certificate (A, B, or C) if claimed.</li>
    <li>Two passport-size recent color photographs and valid Photo ID (Aadhaar / Voter ID / PAN).</li>
  </ul>
</div>`
    },
    {
      id: 39,
      title: '39. Step-by-Step Online Application Guide',
      content: `<ol class="list-decimal pl-5 text-xs text-slate-600 space-y-2">
  <li><strong>Step 1 (One-Time Registration - OTR):</strong> Visit <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://ssc.gov.in</a> > Click 'Register Now' and fill basic personal details, Aadhaar number, mobile, email, and security password.</li>
  <li><strong>Step 2 (Login):</strong> Login using Registration Number and Password.</li>
  <li><strong>Step 3 (Select Examination):</strong> Go to 'Live Examinations' > Click 'Apply' under 'Sub-Inspector in Delhi Police and CAPFs Examination, 2026'.</li>
  <li><strong>Step 4 (Details & Preferences):</strong> Choose 3 examination centres in the same region, fill educational credentials, and indicate whether possessing valid LMV Driving License.</li>
  <li><strong>Step 5 (Live Photo & Signature):</strong> Capture live photograph using webcam or official 'my SSC' Android App. Upload signature (10 to 20 KB).</li>
  <li><strong>Step 6 (Payment & Confirmation):</strong> Pay fee of ₹100 online (if applicable) and download the final submitted application PDF.</li>
</ol>`
    },
    {
      id: 40,
      title: '40. One-Time Registration (OTR) Guidelines',
      content: `<p>The Commission has implemented a revamped OTR system on the new portal <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://ssc.gov.in</a>. Any OTR generated on the old website (ssc.nic.in) is no longer valid. All candidates must complete fresh OTR on ssc.gov.in.</p>`
    },
    {
      id: 41,
      title: '41. Live Photograph Capture & Signature Specifications',
      content: `<div class="space-y-3">
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg">
      <thead class="bg-slate-100 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2.5 text-left">Item</th>
          <th class="p-2.5 text-left">Official Technical Specifications</th>
          <th class="p-2.5 text-left">Strict Restrictions</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr class="hover:bg-slate-50">
          <td class="p-2 font-bold text-slate-800">Live Photograph</td>
          <td class="p-2">Captured live in real-time via webcam or official <strong>'my SSC' Mobile App</strong> (Google Play Store). Plain white/light background, adequate lighting, looking straight into camera.</td>
          <td class="p-2 text-red-700">Pre-saved photos, wearing caps, spectacles, goggles, or masks are strictly rejected!</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-2 font-bold text-slate-800">Scanned Signature</td>
          <td class="p-2">JPG / JPEG format • File size: <strong>10 KB to 20 KB</strong> • Dimensions: <strong>4.0 cm width x 2.0 cm height</strong>. Clear black/blue ink on white paper.</td>
          <td class="p-2 text-red-700">Blurred, illegible, or capital letter signature will be rejected.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 42,
      title: '42. Official Notification Direct Link',
      content: `<p>Official comprehensive notification (69 Pages) published by Staff Selection Commission:</p>
<p class="mt-2"><a href="https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_capf_2026.pdf" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl inline-flex items-center gap-1.5 transition-colors">
  <span>Notice_of_adv_capf_2026.pdf (Direct Link)</span>
</a></p>`
    },
    {
      id: 43,
      title: '43. Official Apply Online Portal Link',
      content: `<p>Candidates must apply directly on the official commission portal:</p>
<p class="mt-2"><a href="https://ssc.gov.in/" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl inline-flex items-center gap-1.5 transition-colors">
  <span>https://ssc.gov.in/ (Apply Portal)</span>
</a></p>`
    },
    {
      id: 44,
      title: '44. Official SSC Website & Regional Portals',
      content: `<p>Commission headquarters and regional network portals:</p>
<ul class="list-disc pl-5 text-xs text-slate-600 space-y-1 mt-2">
  <li>Central Commission Headquarters: <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold">https://ssc.gov.in</a></li>
  <li>Northern Region (NR, New Delhi): <a href="https://sscnr.nic.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://sscnr.nic.in</a></li>
  <li>Central Region (CR, Prayagraj): <a href="https://ssc-cr.org" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://ssc-cr.org</a></li>
  <li>Western Region (WR, Mumbai): <a href="https://sscwr.net" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://sscwr.net</a></li>
  <li>Southern Region (SR, Chennai): <a href="https://sscsr.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://sscsr.gov.in</a></li>
  <li>Eastern Region (ER, Kolkata): <a href="https://sscer.org" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://sscer.org</a></li>
</ul>`
    },
    {
      id: 45,
      title: '45. Helpline, Grievance & Technical Support',
      content: `<div class="space-y-2 text-xs text-slate-700">
  <div class="p-3 bg-slate-50 border rounded-xl space-y-1">
    <div><strong>Toll-Free National Helpline:</strong> <span class="font-bold text-blue-700">1800 309 3063</span> (Monday to Friday 09:30 to 18:00)</div>
    <div><strong>Technical Helpdesk for OTR / Live Photo:</strong> Contact through 'Feedback / Grievance' portal on ssc.gov.in</div>
    <div><strong>Headquarters Address:</strong> Staff Selection Commission, Block No. 12, CGO Complex, Lodhi Road, New Delhi - 110003</div>
  </div>
</div>`
    },
    {
      id: 46,
      title: '46. Frequently Asked Questions (FAQ)',
      content: `<div class="space-y-3 text-xs">
  <div class="p-3 bg-slate-50 rounded-xl border">
    <strong class="text-slate-900 block mb-1">Q1. What is the last date to apply for SSC CPO 2026?</strong>
    <p class="text-slate-600">The last date and time for submitting online applications is <strong>30 September 2026 at 23:00 Hours</strong>.</p>
  </div>
  <div class="p-3 bg-slate-50 rounded-xl border">
    <strong class="text-slate-900 block mb-1">Q2. Can final year degree appearing students apply?</strong>
    <p class="text-slate-600">Yes, appearing students may apply provided their final result is officially declared on or before the crucial date <strong>30 September 2026</strong>.</p>
  </div>
  <div class="p-3 bg-slate-50 rounded-xl border">
    <strong class="text-slate-900 block mb-1">Q3. Is Driving License compulsory for all posts?</strong>
    <p class="text-slate-600">No. Driving License for LMV (Motorcycle and Car) is only required for male candidates opting for Sub-Inspector in Delhi Police at the time of PE&MT. For all CAPF posts (BSF, CISF, CRPF, ITBP, SSB), no driving license is needed.</p>
  </div>
  <div class="p-3 bg-slate-50 rounded-xl border">
    <strong class="text-slate-900 block mb-1">Q4. Are candidates with 3-year Engineering Diploma eligible for SSC CPO?</strong>
    <p class="text-slate-600">Candidates possessing Matriculation + 3-year Diploma in Mechanical, Civil, Electrical, Automobiles, Chemical, Mining, Aeronautical, or Telecommunication Engineering are eligible specifically for <strong>Sub-Inspector (Fire) in CISF (Male)</strong>.</p>
  </div>
</div>`
    },
    {
      id: 47,
      title: '47. Critical Action Items & Do’s and Don’ts',
      content: `<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
  <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
    <strong class="text-emerald-900 block">Do's:</strong>
    <ul class="list-disc pl-4 text-emerald-800 space-y-0.5">
      <li>Submit form well before 30-09-2026.</li>
      <li>Capture live photo with plain light background.</li>
      <li>Verify names match 10th marksheet exactly.</li>
      <li>Keep driving license updated for PE&MT.</li>
    </ul>
  </div>
  <div class="p-3 bg-red-50 border border-red-200 rounded-xl space-y-1">
    <strong class="text-red-900 block">Don'ts:</strong>
    <ul class="list-disc pl-4 text-red-800 space-y-0.5">
      <li>Do not wear cap, spectacles or goggles during live photo.</li>
      <li>Do not upload capital letter signature.</li>
      <li>Do not submit multiple forms; only latest form with fee stands.</li>
      <li>Do not rely on offline payment methods.</li>
    </ul>
  </div>
</div>`
    },
    {
      id: 48,
      title: '48. Final Merit Calculation Formula',
      content: `<div class="p-3 bg-slate-50 border rounded-xl text-xs space-y-1.5">
  <div class="font-bold text-slate-800">Merit Formula for Force Allocation:</div>
  <div class="p-2.5 bg-white border border-slate-200 rounded-lg font-mono text-center text-blue-800 font-bold">
    Total Selection Score = Paper-II Normalized Score (Max 320) + NCC Bonus Marks (Up to 16)
  </div>
  <p class="text-slate-500 text-[11px] leading-relaxed">
    Note: Paper-I is purely a screening examination to qualify candidates for PST/PET. Paper-I marks are not added to the final merit list! Final selection is determined entirely by Paper-II marks, NCC bonus, and post preferences among candidates certified medically fit.
  </p>
</div>`
    },
    {
      id: 49,
      title: '49. Examination Medium & Languages',
      content: `<p>Paper-I and Paper-II Computer Based Examinations will be conducted in <strong>Hindi and English</strong> (except Part-IV English Comprehension, which is set solely in English).</p>`
    },
    {
      id: 50,
      title: '50. Official Disclaimer & Source of Truth',
      content: `<div class="p-3 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-600 space-y-1">
  <p><strong>Official Authority Disclaimer:</strong> Information presented on RajDailyTools is synthesized directly from the official Staff Selection Commission notification <em>Notice_of_adv_capf_2026.pdf</em> published on 10.09.2026. For statutory amendments, corrigendum notices, and final result declarations, candidates must consult the official Commission portal at <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold">https://ssc.gov.in</a>.</p>
</div>`
    }
  ];
}

/**
 * Official Central Database Record for SSC CPO SI CAPF Recruitment 2026.
 * Single source of truth across RajDailyTools.
 */
export const SSC_CPO_2026_EXAM: ExamRecord = {
  id: 'ssc-cpo-2026',
  slug: 'ssc-cpo-si-capf-recruitment-2026',
  examName: 'SSC CPO SI CAPF Recruitment 2026',
  organization: 'Staff Selection Commission (SSC)',
  category: 'SSC',
  postName: 'Sub-Inspector in Delhi Police and Central Armed Police Forces Examination, 2026',
  totalVacancy: '1871 Tentative Posts',
  applicationStartDate: '2026-09-10',
  applicationLastDate: '2026-09-30',
  admitCardDate: '',
  cityIntimationDate: '',
  cityIntimationStatus: 'Not Released',
  examDate: '',
  answerKeyDate: '',
  resultDate: '',
  cutOffDate: '',
  status: 'APPLICATION_OPEN',
  education: ['Graduation', 'Diploma'],
  minimumQualificationLevel: 'Graduation (Diploma for SI Fire)',
  acceptedQualificationLevels: ['Graduation', 'Post Graduation', 'Diploma'],
  eligibilityPaths: [
    {
      pathName: 'Regular Sub-Inspector (Delhi Police & CAPFs GD)',
      qualifications: ['Graduation', 'Post Graduation'],
      notes: "Bachelor's Degree in any discipline from a recognized university. Male candidates for Delhi Police must possess a valid LMV Driving License at PE&MT."
    },
    {
      pathName: 'Sub-Inspector (Fire) in CISF (Male Only)',
      qualifications: ['Diploma', 'Graduation', 'Post Graduation'],
      notes: "Bachelor's degree in Science with PCM; OR Matriculation + 3-year Diploma in Mechanical, Civil, Electrical, Automobiles, Chemical, Mining, Aeronautical, or Telecommunication Engineering."
    }
  ],
  higherQualificationAccepted: true,
  specialQualificationRequirements: [
    'Valid Driving License for LMV (Motorcycle and Car) for Male candidates applying for Delhi Police SI.',
    'B.Sc. PCM or 3-Year Engineering Diploma for SI (Fire) in CISF.'
  ],
  ageMin: 20,
  ageMax: 25,
  ageRelaxationInfo: 'SC/ST: +5 Yrs, OBC: +3 Yrs, ESM: 3 Yrs after military service deduction, Delhi Police Dept.: Up to 30 (UR) / 33 (OBC) / 35 (SC/ST), SI Fire: 18-30 Yrs',
  categoryEligibility: {
    'General': 'Age 20-25 yrs (Born 02.08.2001 to 01.08.2006); SI Fire: 18-30 yrs',
    'OBC': 'Age up to 28 yrs (includes +3 yrs relaxation); SI Fire: up to 33 yrs',
    'SC': 'Age up to 30 yrs (includes +5 yrs relaxation); SI Fire: up to 35 yrs',
    'ST': 'Age up to 30 yrs (includes +5 yrs relaxation); SI Fire: up to 35 yrs',
    'EWS': 'Age 20-25 yrs; SI Fire: 18-30 yrs'
  },
  gender: 'All',
  state: 'All India',
  officialWebsite: 'https://ssc.gov.in/',
  officialNotification: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_capf_2026.pdf',
  applyLink: 'https://ssc.gov.in/',
  admitCardLink: '',
  examCityLink: '',
  answerKeyLink: '',
  resultLink: '',
  cutOffLink: '',
  logoIcon: '🛡️',
  logoBg: '#eff6ff',
  description: 'Staff Selection Commission (SSC) has officially released the notification for Sub-Inspector in Delhi Police and Central Armed Police Forces Examination, 2026 for 1871 tentative vacancies. Online application starts 10 September 2026 and closes 30 September 2026.',
  shortSummary: 'SSC CPO SI CAPF Recruitment 2026 for 1871 tentative Sub-Inspector posts in Delhi Police, BSF, CISF, CRPF, ITBP, and SSB.',
  importantDates: [
    { label: 'Official Notification Released', date: '2026-09-10' },
    { label: 'Online Application Start Date', date: '2026-09-10' },
    { label: 'Online Application Last Date', date: '2026-09-30', isHighlight: true },
    { label: 'Online Fee Payment Last Date', date: '2026-10-01' },
    { label: 'Application Correction Window', date: '08 to 10 October 2026' },
    { label: 'Paper-I Exam Date (CBE)', date: 'To Be Notified Later' },
    { label: 'Admit Card Release Date', date: 'Not Released / To Be Updated' },
    { label: 'Answer Key Release Date', date: 'Not Released / To Be Updated' },
    { label: 'Result Release Date', date: 'Not Released / To Be Updated' }
  ],
  applicationFee: [
    { category: 'UR / OBC / EWS Male Candidates', amount: '₹100/-' },
    { category: 'Women Candidates (All Categories)', amount: '₹0 (Exempted)' },
    { category: 'SC / ST Candidates', amount: '₹0 (Exempted)' },
    { category: 'Ex-Servicemen (ESM)', amount: '₹0 (Exempted)' },
    { category: 'First Correction Fee', amount: '₹200/-' },
    { category: 'Second Correction Fee', amount: '₹500/-' }
  ],
  selectionProcess: [
    'Stage 1: Paper-I Computer Based Examination (100 Qs, 100 Marks, 1 Hour, Sectional Timer 15 mins/part, Negative Marking 0.25)',
    'Stage 2: Physical Standard Test (PST) & Physical Endurance Test (PET) (Qualifying in nature; ESM exempted from PET)',
    'Stage 3: Paper-II Computer Based Examination (160 Qs, 320 Marks, 2 Hours, Negative Marking 0.50)',
    'Stage 4: Detailed Medical Examination (DME) / Review Medical Examination (RME) by CAPF Medical Boards',
    'Stage 5: Document Verification (DV) by CAPF authorities',
    'Stage 6: Final Selection & Post/Force Allocation based on Paper-II normalized score + NCC bonus marks + candidate post preferences'
  ],
  physicalRequirements: {
    hasPhysical: true,
    maleHeightCm: 170,
    femaleHeightCm: 157,
    maleChestCm: '80 cm unexpanded / 85 cm expanded (165 cm height for Hill areas, 162.5 cm for ST)',
    runningDistanceMale: '100m in 16 sec & 1.6km in 6.5 min',
    runningTimeMale: '16 sec / 6 min 30 sec',
    runningDistanceFemale: '100m in 18 sec & 800m in 4 min',
    runningTimeFemale: '18 sec / 4 min',
    medicalCriteria: 'Distant vision 6/6 and 6/9 without glasses/surgery; Near vision N6 and N9; Color vision CP-III; No knock knee, flat foot, varicose vein, squint; LASIK strictly prohibited'
  },
  examPattern: [
    {
      tier: 'Paper-I (Computer Based Examination)',
      mode: 'Online (CBT)',
      stageName: 'Screening / Qualifying for PST & PET',
      duration: '1 Hour (60 Minutes) with 15-minute sectional timer for each part',
      negativeMarking: '0.25 marks deducted per wrong answer',
      subjects: [
        { name: 'Part-I: General Intelligence and Reasoning', questions: 25, marks: 25 },
        { name: 'Part-II: General Knowledge and General Awareness', questions: 25, marks: 25 },
        { name: 'Part-III: Quantitative Aptitude', questions: 25, marks: 25 },
        { name: 'Part-IV: English Comprehension', questions: 25, marks: 25 }
      ]
    },
    {
      tier: 'Paper-II (Computer Based Examination)',
      mode: 'Online (CBT)',
      stageName: 'Primary Merit Scoring Paper for Final Selection',
      duration: '2 Hours (120 Minutes) - Parts I-III: 1 Hour (20 min sectional timer each); Part IV: 1 Hour',
      negativeMarking: '0.50 marks deducted per wrong answer (2 marks per question)',
      subjects: [
        { name: 'Part-I: General Intelligence and Reasoning', questions: 20, marks: 40 },
        { name: 'Part-II: General Knowledge and General Awareness', questions: 20, marks: 40 },
        { name: 'Part-III: Quantitative Aptitude', questions: 20, marks: 40 },
        { name: 'Part-IV: English Comprehension', questions: 100, marks: 200 }
      ]
    }
  ],
  salary: {
    payScale: 'Level-6 (₹35,400 - ₹1,12,400) under 7th CPC',
    inHand: '₹58,000 - ₹64,000 / month (approximate depending on posting location)',
    allowances: 'DA (50%), HRA (10%-30%), Transport Allowance (TA), Ration Money Allowance (RMA), Medical facilities under CGHS/CAPF hospitals'
  },
  faq: [
    {
      q: 'What is the application timeline for SSC CPO 2026?',
      a: 'Online applications opened on 10 September 2026 and close on 30 September 2026 at 23:00 Hours. The online fee payment deadline is 01 October 2026.'
    },
    {
      q: 'What is the total number of vacancies announced in SSC CPO 2026?',
      a: 'There are a total of 1,871 tentative vacancies: 205 for Delhi Police SI (Male), 112 for Delhi Police SI (Female), 1,320 for CAPFs SI (GD), and 234 for CISF SI (Fire) Male.'
    },
    {
      q: 'Is Driving License required for all SSC CPO posts?',
      a: 'No. A valid Driving License for LMV (Motorcycle and Car) is only required for Male candidates applying for Sub-Inspector in Delhi Police as on the date of PE&MT. Male candidates without LMV DL remain eligible for all CAPF posts.'
    },
    {
      q: 'Are diploma holders eligible for SSC CPO 2026?',
      a: 'Candidates holding Matriculation + 3-year Diploma in Mechanical, Civil, Electrical, Automobiles, Chemical, Mining, Aeronautical, or Telecommunication Engineering are eligible for Sub-Inspector (Fire) in CISF (Male Only).'
    },
    {
      q: 'What are the examination dates for SSC CPO 2026?',
      a: 'The schedule of Paper-I Computer Based Examination will be notified later by the Commission on ssc.gov.in. No exam date has been declared in the official notification.'
    },
    {
      q: 'What is the age limit and cut-off date for SSC CPO 2026?',
      a: 'Candidates must be 20 to 25 years old as on 01.08.2026 (born between 02.08.2001 and 01.08.2006). For SI (Fire) in CISF, the age limit is 18 to 30 years (born between 02.08.1996 and 01.08.2008). Standard upper age relaxations apply for SC/ST/OBC/ESM.'
    }
  ],
  allInformation: generateSscCpo50Sections()
};

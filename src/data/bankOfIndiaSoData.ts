import { ExamRecord, ExamInfoSection } from '../types/exam';

export function generateBoiSo50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. Bank of India Specialist Officer Recruitment 2026 – Highlights & Fast Facts',
      badge: 'Overview',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Bank of India (BOI), a premier Public Sector Bank headquartered at Star House, Bandra-Kurla Complex (BKC), Mumbai, has released official recruitment notification under <strong>Project No. 2026-27/02 (Notice dated 01.08.2026)</strong> for appointment of Officers in various specialized streams up to Scale IV.</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Parameter</th>
                  <th class="p-2.5">Official Details</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Recruiting Bank</td>
                  <td class="p-2.5 font-bold text-blue-800">Bank of India (BOI - Head Office Mumbai)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Recruitment Project No.</td>
                  <td class="p-2.5 font-mono font-bold text-slate-900">Project No. 2026-27/02 (Notice dated 01.08.2026)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Total Vacancies</td>
                  <td class="p-2.5 font-bold text-emerald-700">205 Vacancies across Scale I, II, III & IV</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Cadres & Scales</td>
                  <td class="p-2.5">Scale IV (10) | Scale III (49) | Scale II (118) | Scale I (28)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Online Application Window</td>
                  <td class="p-2.5 font-bold text-slate-900">10.09.2026 to 25.09.2026 (Both days inclusive)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Cut-off Date for Age & Qualification</td>
                  <td class="p-2.5 font-bold text-indigo-700">01.08.2026</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Date of Online Examination</td>
                  <td class="p-2.5 text-amber-700 font-bold">To Be Advised Separately / Not Released</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Posting / Transferability</td>
                  <td class="p-2.5">All India (Bank reserves right to post/transfer anywhere in India)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: '2. Important Dates Schedule & Application Timeline',
      badge: 'Timeline',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates must adhere strictly to the schedule stipulated in Notice dated 01.08.2026:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Event / Activity</th>
                  <th class="p-2.5">Important Date</th>
                  <th class="p-2.5">Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-medium">Official Notice Release Date</td>
                  <td class="p-2.5 font-semibold">01.08.2026</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[11px] bg-slate-100 text-slate-700 font-bold">Released</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-medium">Commencement of Online Application & Fee</td>
                  <td class="p-2.5 font-bold text-emerald-700">10.09.2026</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[11px] bg-emerald-100 text-emerald-800 font-bold">Active Now</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-medium">Last Date for Submission of Online Application</td>
                  <td class="p-2.5 font-bold text-red-600">25.09.2026</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[11px] bg-red-100 text-red-800 font-bold">Closing Soon</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-medium">Last Date for Online Fee Payment</td>
                  <td class="p-2.5 font-bold text-red-600">25.09.2026</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[11px] bg-red-100 text-red-800 font-bold">Closing Soon</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-medium">Relevant Date for Eligibility (Age & Qualification)</td>
                  <td class="p-2.5 font-bold text-blue-700">01.08.2026</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[11px] bg-blue-100 text-blue-800 font-bold">Crucial Date</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-medium">Online Examination Date</td>
                  <td class="p-2.5 font-semibold text-amber-700">Will be advised separately</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[11px] bg-amber-100 text-amber-800 font-bold">To Be Updated</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-medium">Call Letter / Admit Card Download</td>
                  <td class="p-2.5 font-semibold text-amber-700">Prior to examination date</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[11px] bg-amber-100 text-amber-800 font-bold">To Be Updated</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 3,
      title: '3. Total Vacancy Summary Across Scale I, II, III & IV',
      badge: 'Vacancies',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Bank of India has declared <strong>205 vacancies</strong> across four official officer grades. Vacancies are inclusive of backlog reservations:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Scale / Cadre</th>
                  <th class="p-2.5 text-center">SC</th>
                  <th class="p-2.5 text-center">ST</th>
                  <th class="p-2.5 text-center">OBC</th>
                  <th class="p-2.5 text-center">EWS</th>
                  <th class="p-2.5 text-center">GEN</th>
                  <th class="p-2.5 text-center font-bold text-blue-900">TOTAL</th>
                  <th class="p-2.5 text-center text-amber-800">PwBD</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold">Scale IV (SMGS-IV - Chief Manager)</td>
                  <td class="p-2.5 text-center font-semibold">1</td>
                  <td class="p-2.5 text-center font-semibold">0</td>
                  <td class="p-2.5 text-center font-semibold">2</td>
                  <td class="p-2.5 text-center font-semibold">1</td>
                  <td class="p-2.5 text-center font-semibold">6</td>
                  <td class="p-2.5 text-center font-black text-blue-700">10</td>
                  <td class="p-2.5 text-center">1 (HI)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Scale III (MMGS-III - Senior Manager)</td>
                  <td class="p-2.5 text-center font-semibold">7</td>
                  <td class="p-2.5 text-center font-semibold">3</td>
                  <td class="p-2.5 text-center font-semibold">13</td>
                  <td class="p-2.5 text-center font-semibold">4</td>
                  <td class="p-2.5 text-center font-semibold">22</td>
                  <td class="p-2.5 text-center font-black text-blue-700">49</td>
                  <td class="p-2.5 text-center">2 (1 HI, 1 OC)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Scale II (MMGS-II - Manager)</td>
                  <td class="p-2.5 text-center font-semibold">17</td>
                  <td class="p-2.5 text-center font-semibold">8</td>
                  <td class="p-2.5 text-center font-semibold">31</td>
                  <td class="p-2.5 text-center font-semibold">11</td>
                  <td class="p-2.5 text-center font-semibold">51</td>
                  <td class="p-2.5 text-center font-black text-blue-700">118</td>
                  <td class="p-2.5 text-center">5 (1 HI, 1 VI, 1 OC, 2 ID)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Scale I (JMGS-I - Officer)</td>
                  <td class="p-2.5 text-center font-semibold">4</td>
                  <td class="p-2.5 text-center font-semibold">2</td>
                  <td class="p-2.5 text-center font-semibold">7</td>
                  <td class="p-2.5 text-center font-semibold">2</td>
                  <td class="p-2.5 text-center font-semibold">13</td>
                  <td class="p-2.5 text-center font-black text-blue-700">28</td>
                  <td class="p-2.5 text-center">1 (HI)</td>
                </tr>
                <tr class="bg-blue-50/70 font-black text-slate-900 border-t-2 border-blue-200">
                  <td class="p-2.5">GRAND TOTAL (All Scales)</td>
                  <td class="p-2.5 text-center">29</td>
                  <td class="p-2.5 text-center">13</td>
                  <td class="p-2.5 text-center">53</td>
                  <td class="p-2.5 text-center">18</td>
                  <td class="p-2.5 text-center">92</td>
                  <td class="p-2.5 text-center text-emerald-800 text-sm">205</td>
                  <td class="p-2.5 text-center text-amber-900">9 Posts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 4,
      title: '4. Scale IV (Chief Manager) – Post-wise & Category-wise Vacancies',
      badge: 'Scale IV',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Breakdown of 10 Chief Manager (Scale IV) specialist positions:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Name of Post</th>
                  <th class="p-2.5 text-center">SC</th>
                  <th class="p-2.5 text-center">ST</th>
                  <th class="p-2.5 text-center">OBC</th>
                  <th class="p-2.5 text-center">EWS</th>
                  <th class="p-2.5 text-center">GEN</th>
                  <th class="p-2.5 text-center font-bold">Total</th>
                  <th class="p-2.5 text-center">Age (01.08.26)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-medium">Chief Manager – Full-Stack Engineering (HI: 1)</td>
                  <td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td>
                  <td class="p-2.5 text-center font-bold text-blue-700">2</td><td class="p-2.5 text-center font-semibold">28 - 40 Yrs</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-medium">Chief Manager – Digital Platforms</td>
                  <td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td>
                  <td class="p-2.5 text-center font-bold text-blue-700">1</td><td class="p-2.5 text-center font-semibold">28 - 40 Yrs</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-medium">Chief Manager – Supply Chain, Trade Finance Technology</td>
                  <td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td>
                  <td class="p-2.5 text-center font-bold text-blue-700">1</td><td class="p-2.5 text-center font-semibold">28 - 40 Yrs</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-medium">Chief Manager – Digital Banking Operations</td>
                  <td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">1</td>
                  <td class="p-2.5 text-center font-bold text-blue-700">2</td><td class="p-2.5 text-center font-semibold">28 - 40 Yrs</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-medium">Chief Manager – IT Procurement, Contracts & SLA Management</td>
                  <td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td>
                  <td class="p-2.5 text-center font-bold text-blue-700">1</td><td class="p-2.5 text-center font-semibold">28 - 40 Yrs</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-medium">Chief Manager - IT Officer (CISA/CISM/CISSP)</td>
                  <td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td>
                  <td class="p-2.5 text-center font-bold text-blue-700">1</td><td class="p-2.5 text-center font-semibold">28 - 42 Yrs</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-medium">Chief Manager - Information Security</td>
                  <td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td>
                  <td class="p-2.5 text-center font-bold text-blue-700">2</td><td class="p-2.5 text-center font-semibold">32 - 42 Yrs</td>
                </tr>
                <tr class="bg-slate-100 font-bold text-slate-900">
                  <td class="p-2.5">Total Scale IV</td>
                  <td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">0</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">6</td>
                  <td class="p-2.5 text-center text-blue-800">10</td><td class="p-2.5 text-center">HI: 1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 5,
      title: '5. Scale III (Senior Manager) – Post-wise & Category-wise Vacancies',
      badge: 'Scale III',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Breakdown of 49 Senior Manager (Scale III) specialist positions:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Name of Post</th>
                  <th class="p-2.5 text-center">SC</th><th class="p-2.5 text-center">ST</th><th class="p-2.5 text-center">OBC</th><th class="p-2.5 text-center">EWS</th><th class="p-2.5 text-center">GEN</th>
                  <th class="p-2.5 text-center font-bold">Total</th><th class="p-2.5 text-center">Age (01.08.26)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr><td class="p-2.5 font-medium">Senior Manager – Full-Stack Engineering (HI: 1)</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">3</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">7</td><td class="p-2.5 text-center font-bold text-blue-700">12</td><td class="p-2.5 text-center font-semibold">28 - 37 Yrs</td></tr>
                <tr><td class="p-2.5 font-medium">Senior Manager – Digital Platforms</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center font-bold text-blue-700">2</td><td class="p-2.5 text-center font-semibold">28 - 37 Yrs</td></tr>
                <tr><td class="p-2.5 font-medium">Senior Manager – Finacle Application Support</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center font-bold text-blue-700">3</td><td class="p-2.5 text-center font-semibold">28 - 37 Yrs</td></tr>
                <tr><td class="p-2.5 font-medium">Senior Manager – Infrastructure Operations</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center font-bold text-blue-700">3</td><td class="p-2.5 text-center font-semibold">28 - 37 Yrs</td></tr>
                <tr><td class="p-2.5 font-medium">Senior Manager – Solution & Technology Architecture</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center font-bold text-blue-700">3</td><td class="p-2.5 text-center font-semibold">28 - 37 Yrs</td></tr>
                <tr><td class="p-2.5 font-medium">Senior Manager – Data Engineering</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center font-bold text-blue-700">4</td><td class="p-2.5 text-center font-semibold">28 - 37 Yrs</td></tr>
                <tr><td class="p-2.5 font-medium">Senior Manager – API Governance & Security</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center font-bold text-blue-700">4</td><td class="p-2.5 text-center font-semibold">28 - 37 Yrs</td></tr>
                <tr><td class="p-2.5 font-medium">Senior Manager – DevSecOps Engineering</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center font-bold text-blue-700">3</td><td class="p-2.5 text-center font-semibold">28 - 37 Yrs</td></tr>
                <tr><td class="p-2.5 font-medium">Senior Manager – IT Procurement Specialist</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center font-bold text-blue-700">2</td><td class="p-2.5 text-center font-semibold">28 - 37 Yrs</td></tr>
                <tr><td class="p-2.5 font-medium">Senior Manager – Database Administration</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center font-bold text-blue-700">2</td><td class="p-2.5 text-center font-semibold">28 - 37 Yrs</td></tr>
                <tr><td class="p-2.5 font-medium">Senior Manager - Information Security (OC: 1)</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center font-bold text-blue-700">6</td><td class="p-2.5 text-center font-semibold">28 - 37 Yrs</td></tr>
                <tr><td class="p-2.5 font-medium">Senior Manager - IT Officer (CISA/CISM/CISSP)</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center font-bold text-blue-700">5</td><td class="p-2.5 text-center font-semibold">28 - 40 Yrs</td></tr>
                <tr class="bg-slate-100 font-bold text-slate-900">
                  <td class="p-2.5">Total Scale III</td><td class="p-2.5 text-center">7</td><td class="p-2.5 text-center">3</td><td class="p-2.5 text-center">13</td><td class="p-2.5 text-center">4</td><td class="p-2.5 text-center">22</td><td class="p-2.5 text-center text-blue-800">49</td><td class="p-2.5 text-center">HI: 1, OC: 1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 6,
      title: '6. Scale II (Manager) – Post-wise & Category-wise Vacancies',
      badge: 'Scale II',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Breakdown of 118 Manager (Scale II) specialist positions:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Post Name</th>
                  <th class="p-2.5 text-center">SC</th><th class="p-2.5 text-center">ST</th><th class="p-2.5 text-center">OBC</th><th class="p-2.5 text-center">EWS</th><th class="p-2.5 text-center">GEN</th>
                  <th class="p-2.5 text-center font-bold">Total</th><th class="p-2.5 text-center">Age</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr><td class="p-2.5 font-medium">Manager – Full-Stack Engineering (ID: 1)</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">3</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">11</td><td class="p-2.5 text-center font-bold text-blue-700">18</td><td class="p-2.5 text-center">25-35</td></tr>
                <tr><td class="p-2.5 font-medium">Manager – BRE /LOS/ Decisioning Engineering</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center font-bold text-blue-700">4</td><td class="p-2.5 text-center">25-35</td></tr>
                <tr><td class="p-2.5 font-medium">Manager – Digital Platforms</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center font-bold text-blue-700">5</td><td class="p-2.5 text-center">25-35</td></tr>
                <tr><td class="p-2.5 font-medium">Manager – Application Support & Operations (HI: 1)</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">3</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">4</td><td class="p-2.5 text-center font-bold text-blue-700">11</td><td class="p-2.5 text-center">25-35</td></tr>
                <tr><td class="p-2.5 font-medium">Manager – Infrastructure Operations (OC: 1)</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">3</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">5</td><td class="p-2.5 text-center font-bold text-blue-700">12</td><td class="p-2.5 text-center">25-35</td></tr>
                <tr><td class="p-2.5 font-medium">Manager – IT System Administrator</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center font-bold text-blue-700">2</td><td class="p-2.5 text-center">25-35</td></tr>
                <tr><td class="p-2.5 font-medium">Manager – Performance testing</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center font-bold text-blue-700">2</td><td class="p-2.5 text-center">25-35</td></tr>
                <tr><td class="p-2.5 font-medium">Manager – Automation Testing</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center font-bold text-blue-700">3</td><td class="p-2.5 text-center">25-35</td></tr>
                <tr><td class="p-2.5 font-medium">Manager – IT Procurement Specialist</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center font-bold text-blue-700">4</td><td class="p-2.5 text-center">25-35</td></tr>
                <tr><td class="p-2.5 font-medium">Manager – IT Project Manager</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center font-bold text-blue-700">3</td><td class="p-2.5 text-center">25-35</td></tr>
                <tr><td class="p-2.5 font-medium">Manager – Business Analysis</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center font-bold text-blue-700">2</td><td class="p-2.5 text-center">25-35</td></tr>
                <tr><td class="p-2.5 font-medium">Manager – Data Analytics</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center font-bold text-blue-700">5</td><td class="p-2.5 text-center">25-35</td></tr>
                <tr><td class="p-2.5 font-medium">Manager – DevSecOps Engineering</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center font-bold text-blue-700">3</td><td class="p-2.5 text-center">25-35</td></tr>
                <tr><td class="p-2.5 font-medium">Manager – UI/UX Design</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center font-bold text-blue-700">2</td><td class="p-2.5 text-center">25-35</td></tr>
                <tr><td class="p-2.5 font-medium">Manager – Emerging Technology & Innovation</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center font-bold text-blue-700">2</td><td class="p-2.5 text-center">25-35</td></tr>
                <tr><td class="p-2.5 font-medium">Manager – Solution & Technology Architecture</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center font-bold text-blue-700">2</td><td class="p-2.5 text-center">25-35</td></tr>
                <tr><td class="p-2.5 font-medium">Manager – Database Administration</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center font-bold text-blue-700">1</td><td class="p-2.5 text-center">25-35</td></tr>
                <tr><td class="p-2.5 font-medium">Manager - Information Security</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">3</td><td class="p-2.5 text-center font-bold text-blue-700">8</td><td class="p-2.5 text-center">25-32</td></tr>
                <tr><td class="p-2.5 font-medium">Manager - IT Officer (CISA/CISM/CISSP)</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center font-bold text-blue-700">7</td><td class="p-2.5 text-center">27-35</td></tr>
                <tr><td class="p-2.5 font-medium">Law Officers (VI: 1)</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">3</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">3</td><td class="p-2.5 text-center font-bold text-blue-700">10</td><td class="p-2.5 text-center">25-30</td></tr>
                <tr><td class="p-2.5 font-medium">Fire Officer</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center font-bold text-blue-700">2</td><td class="p-2.5 text-center">25-35</td></tr>
                <tr><td class="p-2.5 font-medium">Security Officer (ID: 1)</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">5</td><td class="p-2.5 text-center font-bold text-blue-700">10</td><td class="p-2.5 text-center">25-35</td></tr>
                <tr class="bg-slate-100 font-bold text-slate-900">
                  <td class="p-2.5">Total Scale II</td><td class="p-2.5 text-center">17</td><td class="p-2.5 text-center">8</td><td class="p-2.5 text-center">31</td><td class="p-2.5 text-center">11</td><td class="p-2.5 text-center">51</td><td class="p-2.5 text-center text-blue-800">118</td><td class="p-2.5 text-center">5 PwBD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 7,
      title: '7. Scale I (Officer) – Post-wise & Category-wise Vacancies',
      badge: 'Scale I',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Breakdown of 28 Officer (Scale I) positions:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Post Name</th>
                  <th class="p-2.5 text-center">SC</th><th class="p-2.5 text-center">ST</th><th class="p-2.5 text-center">OBC</th><th class="p-2.5 text-center">EWS</th><th class="p-2.5 text-center">GEN</th>
                  <th class="p-2.5 text-center font-bold">Total</th><th class="p-2.5 text-center">Age (01.08.26)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr><td class="p-2.5 font-medium">Officer – Full-Stack Engineering</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center font-bold text-blue-700">6</td><td class="p-2.5 text-center font-semibold">21 - 30 Yrs</td></tr>
                <tr><td class="p-2.5 font-medium">Officer – Application Support & Operations</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center font-bold text-blue-700">4</td><td class="p-2.5 text-center font-semibold">21 - 30 Yrs</td></tr>
                <tr><td class="p-2.5 font-medium">Officer – Data Analytics</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center font-bold text-blue-700">2</td><td class="p-2.5 text-center font-semibold">21 - 30 Yrs</td></tr>
                <tr><td class="p-2.5 font-medium">Officer – Data Engineering</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center font-bold text-blue-700">2</td><td class="p-2.5 text-center font-semibold">21 - 30 Yrs</td></tr>
                <tr><td class="p-2.5 font-medium">Officer – QA & Test Engineering</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center font-bold text-blue-700">2</td><td class="p-2.5 text-center font-semibold">21 - 30 Yrs</td></tr>
                <tr><td class="p-2.5 font-medium">Officer - Information Security</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center font-bold text-blue-700">2</td><td class="p-2.5 text-center font-semibold">22 - 30 Yrs</td></tr>
                <tr><td class="p-2.5 font-medium">Civil Engineer (HI: 1)</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">3</td><td class="p-2.5 text-center">1</td><td class="p-2.5 text-center">5</td><td class="p-2.5 text-center font-bold text-blue-700">10</td><td class="p-2.5 text-center font-semibold">25 - 30 Yrs</td></tr>
                <tr class="bg-slate-100 font-bold text-slate-900">
                  <td class="p-2.5">Total Scale I</td><td class="p-2.5 text-center">4</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center">7</td><td class="p-2.5 text-center">2</td><td class="p-2.5 text-center">13</td><td class="p-2.5 text-center text-blue-800">28</td><td class="p-2.5 text-center">HI: 1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 8,
      title: '8. Reservation for Persons with Benchmark Disabilities (PwBD)',
      badge: 'PwBD',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Section 34 of the Rights of Persons with Disabilities Act (RPwD Act), 2016, 4% horizontal reservation is provided across notified categories:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>HI (Hearing Impairment):</strong> Deaf (70 dB hearing loss in speech frequencies) or Hard of Hearing (60 dB to 70 dB). Total reserved in: Scale IV (1), Scale III (1), Scale II (1), Scale I (1).</li>
            <li><strong>VI (Visual Impairment):</strong> Blindness or Low Vision. 1 vacancy reserved under Law Officer (Scale II).</li>
            <li><strong>OC (Orthopedically Challenged / Locomotor):</strong> Cerebral palsy, leprosy cured, dwarfism, muscular dystrophy, acid attack victims. Total reserved: Scale III (1 under Info Security), Scale II (1 under Infra Operations).</li>
            <li><strong>ID (Intellectual Disability / Multiple):</strong> Autism spectrum, SLD, mental illness, multiple disabilities. Total reserved: Scale II (1 under Full-Stack, 1 under Security Officer).</li>
          </ul>
        </div>
      `
    },
    {
      id: 9,
      title: '9. Official Pay Scales Across Scales I, II, III & IV',
      badge: 'Pay Scales',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The revised Basic Pay scales (as per IBA 12th Bipartite / Joint Note revision) applicable in Bank of India are:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Cadre / Grade</th>
                  <th class="p-2.5">Official Scale of Basic Pay (in Rs.)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Junior Management Grade Scale - I (JMGS-I)</td>
                  <td class="p-2.5 font-mono">48480 – 2000 (7) – 62480 – 2340 (2) – 67160 – 2680 (7) – 85920</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Middle Management Grade Scale - II (MMGS-II)</td>
                  <td class="p-2.5 font-mono">64820 – 2340 (1) – 67160 – 2680 (10) – 93960</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Middle Management Grade Scale - III (MMGS-III)</td>
                  <td class="p-2.5 font-mono">85920 – 2680 (5) – 99320 – 2980 (2) – 105280</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Senior Management Grade Scale - IV (SMGS-IV)</td>
                  <td class="p-2.5 font-mono">102300 – 2980 (4) – 114220 – 3360 (2) – 120940</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 10,
      title: '10. Gross Salary, Allowances & Banking Perquisites',
      badge: 'Perks',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>In addition to basic pay, selected Specialist Officers are entitled to generous banking allowances as per Bank’s rules:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Dearness Allowance (DA):</strong> Indexed quarterly to Consumer Price Index (CPI).</li>
            <li><strong>House Rent Allowance (HRA) / Leased Accommodation:</strong> Official quarters or leased housing as per city classification (X/Y/Z) and officer grade.</li>
            <li><strong>City Compensatory Allowance (CCA):</strong> Payable based on posting centre tier.</li>
            <li><strong>Medical Benefits:</strong> Medical insurance, domiciliary aid reimbursement, annual executive check-ups.</li>
            <li><strong>Superannuation & Perks:</strong> New Pension Scheme (NPS) / Contributory PF, Gratuity, LFC (Leave Fare Concession), Conveyance allowance / Petrol reimbursement, Mobile reimbursement, Newspaper allowance, and concessional staff loans (Housing, Vehicle).</li>
          </ul>
        </div>
      `
    },
    {
      id: 11,
      title: '11. Mandatory Security Deposit / Service Bond Norms',
      badge: 'Service Bond',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Para I of Notice dated 01.08.2026, selected candidates must deposit a specified security amount, which is <strong>refundable after 3 years of satisfactory service</strong>:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Cadre / Scale</th>
                  <th class="p-2.5 font-bold">Security Deposit Amount</th>
                  <th class="p-2.5">Refund Condition</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold">Officers in JMGS-I (Scale I)</td>
                  <td class="p-2.5 font-bold text-blue-700">Rs. 1,00,000/-</td>
                  <td class="p-2.5">Refundable after 3 years of satisfactory service</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Officers in MMGS-II (Scale II)</td>
                  <td class="p-2.5 font-bold text-blue-700">Rs. 2,00,000/-</td>
                  <td class="p-2.5">Refundable after 3 years of satisfactory service</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Officers in MMGS-III & above (Scale III & IV)</td>
                  <td class="p-2.5 font-bold text-blue-700">Rs. 3,00,000/-</td>
                  <td class="p-2.5">Refundable after 3 years of satisfactory service</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs">
            <strong>Forfeiture Clause:</strong> If the officer leaves the Bank before completion of 3 years of service, the said security deposit will be forfeited.
          </div>
        </div>
      `
    },
    {
      id: 12,
      title: '12. Age Limits & Relevant Cut-off Date (as on 01.08.2026)',
      badge: 'Age Limit',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The crucial reference date for determining minimum and maximum age criteria is <strong>01 August 2026 (01.08.2026)</strong>. Age brackets vary by post and scale:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Scale I (Officer):</strong> 21 to 30 years (Info Security: 22 to 30 years; Civil Engineer: 25 to 30 years).</li>
            <li><strong>Scale II (Manager):</strong> 25 to 35 years (Law Officers: 25 to 30 years; Info Security: 25 to 32 years; IT Officer CISA/CISM: 27 to 35 years).</li>
            <li><strong>Scale III (Senior Manager):</strong> 28 to 37 years (IT Officer CISA/CISM: 28 to 40 years).</li>
            <li><strong>Scale IV (Chief Manager):</strong> 28 to 40 years (IT Officer CISA/CISM: 28 to 42 years; Info Security: 32 to 42 years).</li>
          </ul>
        </div>
      `
    },
    {
      id: 13,
      title: '13. Upper Age Relaxation Matrix (Category-wise)',
      badge: 'Age Relaxation',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Upper age relaxation is admissible strictly as per Central Government and Bank rules:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Sr. No.</th>
                  <th class="p-2.5">Category</th>
                  <th class="p-2.5 font-bold">Admissible Age Relaxation</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr><td class="p-2.5">1</td><td class="p-2.5 font-medium">Scheduled Caste / Scheduled Tribe (SC / ST)</td><td class="p-2.5 font-bold text-emerald-700">5 Years</td></tr>
                <tr><td class="p-2.5">2</td><td class="p-2.5 font-medium">Other Backward Classes (OBC - Non-Creamy Layer)</td><td class="p-2.5 font-bold text-emerald-700">3 Years</td></tr>
                <tr><td class="p-2.5">3</td><td class="p-2.5 font-medium">Persons with Benchmark Disabilities (PwBD under RPwD Act 2016)</td><td class="p-2.5 font-bold text-emerald-700">10 Years</td></tr>
                <tr><td class="p-2.5">4</td><td class="p-2.5 font-medium">Ex-Servicemen, Commissioned Officers (ECOs/SSCOs with min 5 yrs military service)</td><td class="p-2.5 font-bold text-emerald-700">5 Years</td></tr>
                <tr><td class="p-2.5">5</td><td class="p-2.5 font-medium">Persons affected by 1984 Riots</td><td class="p-2.5 font-bold text-emerald-700">5 Years</td></tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-500">Note: Cumulative relaxation for SC/ST/OBC is permissible with only one other category from (3) to (5).</p>
        </div>
      `
    },
    {
      id: 14,
      title: '14. Age Calculation Proof & Matriculation Mandate',
      badge: 'Verification',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates must produce proof of Date of Birth at the interview stage:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Accepted proof: Birth Certificate or SSLC / Std. X Certificate indicating exact Date of Birth.</li>
            <li>No other document (such as horoscope, affidavits, or driving license) will be admitted as valid age proof.</li>
            <li>The name of candidate and parents must match letter-for-letter with official matriculation records.</li>
          </ul>
        </div>
      `
    },
    {
      id: 15,
      title: '15. Nationality / Citizenship Criteria',
      badge: 'Citizenship',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>A candidate must be either: (i) a Citizen of India, or (ii) a subject of Nepal, or (iii) a subject of Bhutan, or (iv) a Tibetan Refugee who came over to India before 01 January 1962 with the intention of permanently settling in India, or (v) a person of Indian origin migrated from Pakistan, Burma, Sri Lanka, East African countries with intention of permanently settling in India (subject to eligibility certificate issued by Govt of India).</p>
        </div>
      `
    },
    {
      id: 16,
      title: '16. Percentage Calculation & CGPA Conversion Rules',
      badge: 'Academic Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official guidelines regarding marks calculation:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li>Where 60% minimum marks are stipulated in educational qualifications, <strong>SC / ST / OBC / PwBD candidates are entitled to 5% relaxation</strong> (i.e. minimum 55% marks).</li>
            <li>Candidates must enter percentage obtained in graduation calculated to the nearest two decimals.</li>
            <li>Where CGPA/OGPA is awarded, it must be converted into percentage as per University norms and entered in the online form.</li>
            <li><strong>Fraction of percentage will NOT be rounded off:</strong> 59.99% will be treated as strictly less than 60%, and 54.99% will be treated as less than 55%.</li>
          </ul>
        </div>
      `
    },
    {
      id: 17,
      title: '17. Single Post Application Mandate & Multiple Registrations Clause',
      badge: 'Mandatory',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Para B.II (7) of the official notification:</p>
          <div class="p-3 bg-red-50 rounded-xl border border-red-200 text-red-900 text-xs">
            <strong>Strict One Post Rule:</strong> Candidates can apply <strong>only for ONE post</strong>. In case of multiple applications submitted by any candidate, only the <strong>latest valid (completed) application</strong> will be retained, and the application fee/intimation charges paid for other registrations will stand forfeited.
          </div>
          <p>Past employees: Candidates who were holding similar posts in Bank of India in the past are not eligible to apply.</p>
        </div>
      `
    },
    {
      id: 18,
      title: '18. Reservation Rules for Scheduled Castes (SC) & Scheduled Tribes (ST)',
      badge: 'Reservation',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>SC/ST candidates must submit caste certificates in the prescribed Government of India format issued by authorized competent authorities (DM / ADM / Collector / SDM / Tehsildar). Entitled to 5 years age relaxation, 5% relaxation in qualifying marks (educational and exam cutoffs), and concessional intimation fee of Rs. 175/-.</p>
        </div>
      `
    },
    {
      id: 19,
      title: '19. Reservation Rules for Other Backward Classes (OBC-NCL)',
      badge: 'OBC Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-blue-50 rounded-xl border border-blue-200 text-blue-900 text-xs">
            <strong>Mandatory Date of OBC Certificate:</strong> The OBC caste certificate containing the <strong>‘Non-Creamy Layer’ (NCL) clause must be issued on or after 01.04.2026</strong>.
          </div>
          <p>The caste name mentioned in the certificate must tally letter-by-letter with the Central Government OBC list. Candidates belonging to creamy layer must apply under General category.</p>
        </div>
      `
    },
    {
      id: 20,
      title: '20. Economically Weaker Section (EWS) Reservation Criteria',
      badge: 'EWS Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>EWS candidates must produce an Income and Asset Certificate issued by a Competent Authority based on <strong>Gross Annual Family Income below Rs. 8.00 Lakh for Financial Year 2025-26</strong>. Candidates whose families own 5 acres agricultural land, residential flat of 1000 sq. ft., or residential plots exceeding specified municipal limits are excluded.</p>
        </div>
      `
    },
    {
      id: 21,
      title: '21. Benchmark Disability Guidelines & Scribe Rules',
      badge: 'Scribe Facility',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates with 40% or more benchmark disability having physical limitation to write may avail scribe facility at their own cost. Key rules:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Scribe must be from an academic stream different from that stipulated for the post.</li>
            <li>The scribe cannot be a candidate for this BOI Recruitment Project 2026-27/02 or scribe to any other candidate.</li>
            <li>Both candidate and scribe must submit a joint undertaking with passport photos.</li>
          </ul>
        </div>
      `
    },
    {
      id: 22,
      title: '22. Compensatory Time Allotment for PwBD Candidates',
      badge: 'Exam Concessions',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates using a scribe or eligible PwBD candidates (locomotor disability/cerebral palsy with affected writing limb, visually impaired opting for magnified font, intellectual disability) will be allowed <strong>compensatory time of 20 minutes for every hour of examination</strong> (i.e. pro-rata for composite 100 minutes test duration).</p>
        </div>
      `
    },
    {
      id: 23,
      title: '23. Chief Manager – Full-Stack Engineering (Scale IV) Eligibility',
      badge: 'Scale IV Post',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>Post Name:</strong> Chief Manager – Full-Stack Engineering (Scale IV) | <strong>Vacancies:</strong> 2 (SC: 1, OBC: 1 | HI: 1)</p>
          <p><strong>Age (as on 01.08.2026):</strong> 28 to 40 Years</p>
          <p><strong>Educational Qualification:</strong> B.E. / B.Tech / M.E. / M.Tech in Computer Science / Information Technology / Electronics & Communication Engineering or MCA from a Government recognized University/Institute with minimum 60% marks (55% for SC/OBC/PwBD).</p>
          <p><strong>Experience:</strong> Minimum 8 to 10 years of post-qualification experience in software engineering, architecture, full-stack application development (Java/Spring Boot, Node.js, Angular/React, microservices architecture, and cloud deployments) in BFSI or reputable technology firms.</p>
        </div>
      `
    },
    {
      id: 24,
      title: '24. Chief Manager – Digital Platforms & Supply Chain (Scale IV) Eligibility',
      badge: 'Scale IV Post',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>1. Chief Manager – Digital Platforms:</strong> 1 Post (GEN: 1) | Age: 28-40 Yrs.<br>
          <em>Eligibility:</em> B.E./B.Tech/MCA with min 60% marks. Minimum 8 years experience in leading digital platform architecture, mobile banking, Omni-channel applications, and API ecosystems in BFSI.</p>
          <p><strong>2. Chief Manager – Supply Chain & Trade Finance Technology:</strong> 1 Post (GEN: 1) | Age: 28-40 Yrs.<br>
          <em>Eligibility:</em> B.E./B.Tech/MCA/MBA Finance. Minimum 8 years experience managing trade finance automation, supply chain finance (SCF) platforms, SWIFT, and host-to-host integrations in commercial banks.</p>
        </div>
      `
    },
    {
      id: 25,
      title: '25. Chief Manager – Digital Banking Operations & IT Procurement (Scale IV)',
      badge: 'Scale IV Post',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>1. Chief Manager – Digital Banking Operations:</strong> 2 Posts (EWS: 1, GEN: 1) | Age: 28-40 Yrs.<br>
          <em>Eligibility:</em> Degree in Engineering/MCA/MBA with min 8 years experience in digital payments (UPI, IMPS, RTGS/NEFT, BBPS, Cards) and operations management.</p>
          <p><strong>2. Chief Manager – IT Procurement, Contracts & SLA Management:</strong> 1 Post (GEN: 1) | Age: 28-40 Yrs.<br>
          <em>Eligibility:</em> Degree in Engineering/MCA/Law/MBA with min 8 years experience in large-scale IT procurement, RFP preparation, vendor governance, and SLA monitoring in BFSI.</p>
        </div>
      `
    },
    {
      id: 26,
      title: '26. Chief Manager – IT Officer (CISA/CISM/CISSP) & Info Security (Scale IV)',
      badge: 'Scale IV Post',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>1. Chief Manager - IT Officer with CISA/CISM/CISSP:</strong> 1 Post (GEN: 1) | Age: 28-42 Yrs.<br>
          <em>Eligibility:</em> B.E./B.Tech/MCA with mandatory valid certification in CISA / CISM / CISSP. Minimum 8 years experience in IT Audit, Risk assessment, and regulatory compliance.</p>
          <p><strong>2. Chief Manager - Information Security:</strong> 2 Posts (OBC: 1, GEN: 1) | Age: 32-42 Yrs.<br>
          <em>Eligibility:</em> B.E./B.Tech/MCA with mandatory certifications (CISSP/CISM/CEH/CISA). Minimum 10 years experience in enterprise cybersecurity, SOC operations, threat intelligence, and ISO 27001 implementation.</p>
        </div>
      `
    },
    {
      id: 27,
      title: '27. Senior Manager – Full-Stack Engineering & Digital Platforms (Scale III)',
      badge: 'Scale III Post',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>1. Senior Manager – Full-Stack Engineering:</strong> 12 Posts (SC: 1, OBC: 3, EWS: 1, GEN: 7 | HI: 1) | Age: 28-37 Yrs.<br>
          <em>Eligibility:</em> B.E./B.Tech/MCA with min 60% (55% SC/OBC). Minimum 5 years post-qualification experience in full-stack web/mobile application development (Spring Boot/Node/React/Python/PostgreSQL).</p>
          <p><strong>2. Senior Manager – Digital Platforms:</strong> 2 Posts (OBC: 1, GEN: 1) | Age: 28-37 Yrs.<br>
          <em>Eligibility:</em> B.E./B.Tech/MCA with min 5 years experience in building/maintaining high-concurrency digital banking portals, customer journeys, and middleware.</p>
        </div>
      `
    },
    {
      id: 28,
      title: '28. Senior Manager – Finacle Support & Infrastructure Operations (Scale III)',
      badge: 'Scale III Post',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>1. Senior Manager – Finacle Application Support:</strong> 3 Posts (SC: 1, OBC: 1, GEN: 1) | Age: 28-37 Yrs.<br>
          <em>Eligibility:</em> B.E./B.Tech/MCA with min 5 years hands-on experience in Core Banking Solution (Finacle 10.x/11.x, customization, scripting, and batch operations).</p>
          <p><strong>2. Senior Manager – Infrastructure Operations:</strong> 3 Posts (SC: 1, OBC: 1, GEN: 1) | Age: 28-37 Yrs.<br>
          <em>Eligibility:</em> B.E./B.Tech/MCA with min 5 years experience in enterprise Data Centre (DC/DR) management, server virtualization, SAN storage, and hybrid cloud networks.</p>
        </div>
      `
    },
    {
      id: 29,
      title: '29. Senior Manager – Solution Architecture & Data Engineering (Scale III)',
      badge: 'Scale III Post',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>1. Senior Manager – Solution & Technology Architecture:</strong> 3 Posts (OBC: 1, GEN: 2) | Age: 28-37 Yrs.<br>
          <em>Eligibility:</em> B.E./B.Tech/MCA with min 5 years experience in enterprise solution architecture, TOGAF framework, and microservices designing.</p>
          <p><strong>2. Senior Manager – Data Engineering:</strong> 4 Posts (SC: 1, OBC: 1, EWS: 1, GEN: 1) | Age: 28-37 Yrs.<br>
          <em>Eligibility:</em> B.E./B.Tech/MCA/M.Sc (Data Science) with min 5 years experience in building data lakes, ETL pipelines, Spark, Kafka, Hadoop, and Big Data technologies.</p>
        </div>
      `
    },
    {
      id: 30,
      title: '30. Senior Manager – API Governance, DevSecOps & IT Procurement (Scale III)',
      badge: 'Scale III Post',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>1. Senior Manager – API Governance & Security:</strong> 4 Posts (SC: 1, OBC: 1, GEN: 2) | Age: 28-37 Yrs. Min 5 yrs experience in API Gateway (Kong/Apigee), OAuth2, mTLS, and open banking protocols.</p>
          <p><strong>2. Senior Manager – DevSecOps Engineering:</strong> 3 Posts (ST: 1, GEN: 2) | Age: 28-37 Yrs. Min 5 yrs experience in CI/CD pipelines, Docker, Kubernetes, Jenkins, GitOps, and vulnerability scanning.</p>
          <p><strong>3. Senior Manager – IT Procurement Specialist:</strong> 2 Posts (OBC: 1, GEN: 1) | Age: 28-37 Yrs. Min 5 yrs experience in commercial IT contract drafting, vendor management, and RFP handling.</p>
        </div>
      `
    },
    {
      id: 31,
      title: '31. Senior Manager – Database Admin & Information Security (Scale III)',
      badge: 'Scale III Post',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>1. Senior Manager – Database Administration:</strong> 2 Posts (OBC: 1, GEN: 1) | Age: 28-37 Yrs.<br>
          <em>Eligibility:</em> B.E./B.Tech/MCA with min 5 years experience as DBA in Oracle RAC, MS SQL, PostgreSQL, database clustering, and disaster recovery replication.</p>
          <p><strong>2. Senior Manager - Information Security:</strong> 6 Posts (SC: 1, ST: 1, OBC: 1, EWS: 1, GEN: 2 | OC: 1) | Age: 28-37 Yrs.<br>
          <em>Eligibility:</em> B.E./B.Tech/MCA with min 5 years experience in Incident response, SIEM/SOC, malware analysis, firewalls, and security operations center.</p>
        </div>
      `
    },
    {
      id: 32,
      title: '32. Senior Manager – IT Officer with CISA/CISM/CISSP (Scale III)',
      badge: 'Scale III Post',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>Post Name:</strong> Senior Manager - IT Officer with CISA / CISM / CISSP | <strong>Vacancies:</strong> 5 (SC: 1, ST: 1, OBC: 1, EWS: 1, GEN: 1)</p>
          <p><strong>Age (as on 01.08.2026):</strong> 28 to 40 Years</p>
          <p><strong>Mandatory Qualification:</strong> B.E. / B.Tech / MCA with minimum 60% marks (55% for reserved) AND active certification in CISA (ISACA) or CISM (ISACA) or CISSP (ISC2).</p>
          <p><strong>Experience:</strong> Minimum 5 years of post-qualification experience in IT compliance, IS Audit, vulnerability management, and regulatory IT inspections in banks/financial institutions.</p>
        </div>
      `
    },
    {
      id: 33,
      title: '33. Manager – Full-Stack, BRE/LOS, Digital Platforms & App Support (Scale II)',
      badge: 'Scale II Post',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>1. Manager – Full-Stack Engineering:</strong> 18 Posts (SC: 2, ST: 1, OBC: 3, EWS: 1, GEN: 11 | ID: 1) | Age: 25-35 Yrs. Min 2-3 yrs experience in full stack software programming.</p>
          <p><strong>2. Manager – BRE / LOS / Decisioning:</strong> 4 Posts (SC: 1, OBC: 2, EWS: 1) | Age: 25-35 Yrs. Min 2-3 yrs experience in Business Rule Engine (BRE) & Loan Origination Systems.</p>
          <p><strong>3. Manager – Digital Platforms:</strong> 5 Posts (SC: 1, ST: 1, OBC: 2, EWS: 1) | Age: 25-35 Yrs. Min 2-3 yrs experience in web/mobile banking platforms.</p>
          <p><strong>4. Manager – Application Support & Operations:</strong> 11 Posts (SC: 2, ST: 1, OBC: 3, EWS: 1, GEN: 4 | HI: 1) | Age: 25-35 Yrs. Min 2-3 yrs experience in L2/L3 production banking support.</p>
        </div>
      `
    },
    {
      id: 34,
      title: '34. Manager – Infrastructure, System Admin, Testing & Automation (Scale II)',
      badge: 'Scale II Post',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>1. Manager – Infrastructure Operations:</strong> 12 Posts (SC: 2, ST: 1, OBC: 3, EWS: 1, GEN: 5 | OC: 1) | Age: 25-35 Yrs. Min 2-3 yrs DC/Cloud operations experience.</p>
          <p><strong>2. Manager – IT System Administrator:</strong> 2 Posts (GEN: 2) | Age: 25-35 Yrs. Min 2-3 yrs Linux/Windows server administration experience.</p>
          <p><strong>3. Manager – Performance Testing:</strong> 2 Posts (GEN: 2) | Age: 25-35 Yrs. Min 2-3 yrs experience with JMeter, LoadRunner, and APM tools.</p>
          <p><strong>4. Manager – Automation Testing:</strong> 3 Posts (OBC: 1, GEN: 2) | Age: 25-35 Yrs. Min 2-3 yrs experience with Selenium, Appium, Cucumber, and Test Automation Frameworks.</p>
        </div>
      `
    },
    {
      id: 35,
      title: '35. Manager – IT Procurement, Project Management, BA & Data Analytics (Scale II)',
      badge: 'Scale II Post',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>1. Manager – IT Procurement:</strong> 4 Posts (SC: 1, OBC: 2, EWS: 1) | Age: 25-35 Yrs. Min 2-3 yrs vendor contracting experience.</p>
          <p><strong>2. Manager – IT Project Manager:</strong> 3 Posts (SC: 1, OBC: 2) | Age: 25-35 Yrs. Min 2-3 yrs Agile/Scrum project delivery experience.</p>
          <p><strong>3. Manager – Business Analysis:</strong> 2 Posts (GEN: 2) | Age: 25-35 Yrs. Min 2-3 yrs BRD/FRD and banking product analysis experience.</p>
          <p><strong>4. Manager – Data Analytics:</strong> 5 Posts (SC: 1, OBC: 2, EWS: 1, GEN: 1) | Age: 25-35 Yrs. Min 2-3 yrs experience in SQL, Python, BI dashboards (PowerBI/Tableau), and predictive analytics.</p>
        </div>
      `
    },
    {
      id: 36,
      title: '36. Manager – DevSecOps, UI/UX, Innovation, Architecture & DB Admin (Scale II)',
      badge: 'Scale II Post',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>1. Manager – DevSecOps Engineering:</strong> 3 Posts (SC: 1, OBC: 2) | Age: 25-35 Yrs. Min 2-3 yrs CI/CD and container orchestration experience.</p>
          <p><strong>2. Manager – UI/UX Design:</strong> 2 Posts (GEN: 2) | Age: 25-35 Yrs. Min 2-3 yrs in Figma, user journey mapping, and banking UI design.</p>
          <p><strong>3. Manager – Emerging Technology & Innovation:</strong> 2 Posts (GEN: 2) | Age: 25-35 Yrs. Min 2-3 yrs in AI/ML, Blockchain, or GenAI POCs.</p>
          <p><strong>4. Manager – Solution Architecture:</strong> 2 Posts (GEN: 2) | Age: 25-35 Yrs. Min 2-3 yrs in software system design.</p>
          <p><strong>5. Manager – Database Administration:</strong> 1 Post (GEN: 1) | Age: 25-35 Yrs. Min 2-3 yrs Oracle/PostgreSQL administration experience.</p>
        </div>
      `
    },
    {
      id: 37,
      title: '37. Manager – Info Security & IT Officer (CISA/CISM/CISSP) (Scale II)',
      badge: 'Scale II Post',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>1. Manager - Information Security:</strong> 8 Posts (SC: 1, ST: 1, OBC: 2, EWS: 1, GEN: 3) | Age: 25-32 Yrs.<br>
          <em>Eligibility:</em> B.E./B.Tech/MCA with min 2 years experience in SOC monitoring, vulnerability assessment, penetration testing (VAPT), and cybersecurity controls.</p>
          <p><strong>2. Manager - IT Officer with CISA/CISM/CISSP:</strong> 7 Posts (SC: 1, ST: 1, OBC: 2, EWS: 1, GEN: 2) | Age: 27-35 Yrs.<br>
          <em>Eligibility:</em> B.E./B.Tech/MCA with valid CISA / CISM / CISSP certification and minimum 2 years experience in IT compliance, IS Audit, and risk management.</p>
        </div>
      `
    },
    {
      id: 38,
      title: '38. Law Officers (Scale II) Eligibility & Practice Standards',
      badge: 'Law Officer',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>Post Name:</strong> Law Officer (Scale II - MMGS-II) | <strong>Vacancies:</strong> 10 Posts (SC: 2, ST: 1, OBC: 3, EWS: 1, GEN: 3 | VI: 1)</p>
          <p><strong>Age (as on 01.08.2026):</strong> 25 to 30 Years (Standard category relaxations apply)</p>
          <p><strong>Educational Qualification:</strong> Bachelor’s Degree in Law (LLB - 3 years or 5 years integrated course) from a recognized University with minimum 60% marks (55% for SC/ST/OBC/PwBD).</p>
          <p><strong>Mandatory Enrolment:</strong> Active Enrolment as an Advocate with the Bar Council.</p>
          <p><strong>Experience:</strong> Minimum 2 years of active practice as an Advocate in Civil/Commercial Courts OR 2 years experience as a Law Officer in the Legal Department of a Scheduled Commercial Bank / Financial Institution.</p>
        </div>
      `
    },
    {
      id: 39,
      title: '39. Fire Officer & Security Officer (Scale II) Eligibility',
      badge: 'Security & Fire',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>1. Fire Officer (Scale II):</strong> 2 Posts (GEN: 2) | Age: 25-35 Yrs.<br>
          <em>Eligibility:</em> B.E. (Fire) from National Fire Service College (NFSC) Nagpur or Grad I Fire E (India/UK) or Divisional Officer course from NFSC with minimum 3 years experience in fire safety/prevention.</p>
          <p><strong>2. Security Officer (Scale II):</strong> 10 Posts (SC: 1, ST: 1, OBC: 2, EWS: 1, GEN: 5 | ID: 1) | Age: 25-35 Yrs.<br>
          <em>Eligibility:</em> Graduate in any discipline with minimum 5 years of commissioned service in the Indian Army / Navy / Air Force or equivalent rank of Assistant Commandant in Paramilitary Forces (BSF/CRPF/CISF/ITBP/SSB) or Police Officer of DSP rank.</p>
        </div>
      `
    },
    {
      id: 40,
      title: '40. Scale I (Officer) – Tech Streams: Full-Stack, Support, Analytics, Data & QA',
      badge: 'Scale I Posts',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>Scale I (JMGS-I) Technical Positions:</strong></p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Officer – Full-Stack Engineering:</strong> 6 Posts (SC: 1, ST: 1, OBC: 2, EWS: 1, GEN: 1) | Age: 21-30 Yrs. B.E./B.Tech/MCA with min 60% marks (55% reserved) with 0-1 yr software coding exposure.</li>
            <li><strong>Officer – Application Support:</strong> 4 Posts (SC: 1, OBC: 2, GEN: 1) | Age: 21-30 Yrs. B.E./B.Tech/MCA in CS/IT/ECE.</li>
            <li><strong>Officer – Data Analytics:</strong> 2 Posts (SC: 1, GEN: 1) | Age: 21-30 Yrs. B.Tech/MCA/M.Sc Statistics with data visualization skills.</li>
            <li><strong>Officer – Data Engineering:</strong> 2 Posts (ST: 1, GEN: 1) | Age: 21-30 Yrs. B.Tech/MCA with SQL, ETL, Python.</li>
            <li><strong>Officer – QA & Test Engineering:</strong> 2 Posts (GEN: 2) | Age: 21-30 Yrs. B.Tech/MCA with software testing fundamentals.</li>
          </ul>
        </div>
      `
    },
    {
      id: 41,
      title: '41. Scale I: Officer - Information Security & Civil Engineer Eligibility',
      badge: 'Scale I Posts',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>1. Officer - Information Security (Scale I):</strong> 2 Posts (GEN: 2) | Age: 22 to 30 Years.<br>
          <em>Eligibility:</em> B.E. / B.Tech in CS / IT / Cyber Security or MCA with minimum 60% marks and foundational certification in CEH / CompTIA Security+ / CCNA Security.</p>
          <p><strong>2. Civil Engineer (Scale I):</strong> 10 Posts (SC: 1, OBC: 3, EWS: 1, GEN: 5 | HI: 1) | Age: 25 to 30 Years.<br>
          <em>Eligibility:</em> Bachelor's Degree in Civil Engineering (B.E./B.Tech) from a recognized University with minimum 60% marks (55% for SC/OBC/PwBD). Minimum 1 to 2 years of practical experience in building construction, supervision, and maintenance.</p>
        </div>
      `
    },
    {
      id: 42,
      title: '42. Mandatory Scrutiny of Eligibility Documents at Registration',
      badge: 'Document Scrutiny',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Para D.I of Notice dated 01.08.2026, candidates must upload verified documents during online registration:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>(i) Relevant professional experience certificates with date of joining, relieving, and designation.</li>
            <li>(ii) Mandatory certification proof (CISA / CISM / CISSP / Bar Council / Fire etc. as applicable).</li>
            <li>(iii) Educational qualification certificates & marksheets (declared on or before 01.08.2026).</li>
            <li>(iv) Category / Caste / Disability certificate as applicable.</li>
          </ul>
          <div class="p-3 bg-red-50 rounded-xl border border-red-200 text-red-900 text-xs font-semibold">
            Warning: Shortlisting or rejection will be solely on the basis of documents uploaded at registration. No subsequent requests or submissions will be entertained!
          </div>
        </div>
      `
    },
    {
      id: 43,
      title: '43. Comprehensive Selection Architecture (Test & Interview 60:40)',
      badge: 'Selection Process',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Selection will be through <strong>Online Test and/or Personal Interview</strong>, depending on candidate volume:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Component</th>
                  <th class="p-2.5">Marks</th>
                  <th class="p-2.5">Weightage in Final Selection</th>
                  <th class="p-2.5">Nature</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold">Online Test: English Language</td>
                  <td class="p-2.5">25 Marks</td>
                  <td class="p-2.5 text-center font-bold text-slate-500">0% (Not added to merit)</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[11px] bg-slate-100 font-bold">Qualifying Only</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Online Test: Professional Knowledge</td>
                  <td class="p-2.5">100 Marks</td>
                  <td class="p-2.5 text-center font-bold text-blue-700">60% Weightage</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[11px] bg-blue-100 text-blue-800 font-bold">Merit Ranked</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Personal Interview</td>
                  <td class="p-2.5">100 Marks</td>
                  <td class="p-2.5 text-center font-bold text-emerald-700">40% Weightage</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[11px] bg-emerald-100 text-emerald-800 font-bold">Merit Ranked</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-600"><strong>Note on Direct Interview:</strong> If the Bank decides not to conduct the online test due to applicant numbers, selection will be made 100% on the basis of Personal Interview marks following shortlisting.</p>
        </div>
      `
    },
    {
      id: 44,
      title: '44. Online Examination Pattern & Mark Distribution',
      badge: 'Exam Pattern',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Structure of the computer-based online test (if conducted):</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Sr. No.</th>
                  <th class="p-2.5">Name of the Test</th>
                  <th class="p-2.5 text-center">Maximum Marks</th>
                  <th class="p-2.5 text-center">Medium of Exam</th>
                  <th class="p-2.5 text-center">Duration</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 text-center">1</td>
                  <td class="p-2.5 font-semibold">English Language (Qualifying)</td>
                  <td class="p-2.5 text-center font-bold">25</td>
                  <td class="p-2.5 text-center">English Only</td>
                  <td class="p-2.5 text-center rowspan-2 font-bold text-blue-700" rowspan="2">Composite Time of 100 Minutes</td>
                </tr>
                <tr>
                  <td class="p-2.5 text-center">2</td>
                  <td class="p-2.5 font-semibold">Professional Knowledge relevant to post</td>
                  <td class="p-2.5 text-center font-bold">100</td>
                  <td class="p-2.5 text-center">Bilingual (English & Hindi)</td>
                </tr>
                <tr class="bg-slate-100 font-bold text-slate-900">
                  <td class="p-2.5 text-center" colspan="2">TOTAL</td>
                  <td class="p-2.5 text-center text-blue-800 font-black">125 Marks</td>
                  <td class="p-2.5 text-center">-</td>
                  <td class="p-2.5 text-center">100 Minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 45,
      title: '45. Penalty for Wrong Answers & Minimum Qualifying Cut-off Marks',
      badge: 'Negative Marking',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>Penalty for Wrong Answers:</strong> There is negative marking for objective tests. <strong>One-fourth (1/4th or 0.25)</strong> of the marks assigned to that question will be deducted as penalty for every wrong answer. Unattempted questions attract no penalty.</li>
            <li><strong>Minimum Qualifying Marks in Online Test:</strong>
              <ul class="list-circle pl-5 mt-1 space-y-1">
                <li>General / EWS Category: <strong>Minimum 35% marks</strong> in English Language Test and Professional Knowledge Test separately.</li>
                <li>SC / ST / OBC / PwBD Category: <strong>Minimum 30% marks</strong> in each test (5% relaxation in qualifying marks).</li>
              </ul>
            </li>
          </ul>
        </div>
      `
    },
    {
      id: 46,
      title: '46. Personal Interview Structure (100 Marks, 1:3 Call Ratio)',
      badge: 'Interview',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates securing minimum qualifying marks in Online Tests and ranking sufficiently high in merit will be called for Personal Interview:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Maximum Marks for Interview:</strong> 100 Marks.</li>
            <li><strong>Minimum Qualifying Marks in Interview:</strong> 50% for General / EWS candidates; 45% for SC / ST / OBC / PwBD candidates.</li>
            <li><strong>Interview Call Ratio:</strong> Normally 1:3 to the number of vacancies (Bank reserves right to modify).</li>
            <li><strong>Travel Expenses Reimbursement:</strong> Eligible outstation SC / ST / PwBD candidates called for interview will be reimbursed Second Class to & fro railway/bus fare via shortest route on producing tickets.</li>
          </ul>
        </div>
      `
    },
    {
      id: 47,
      title: '47. Final Merit Formulation & Tie-Breaking Principles',
      badge: 'Final Merit',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>When Online Exam and Interview both are conducted:</strong> Final score is calculated with <strong>60:40 weightage</strong> (60% Professional Knowledge score + 40% Interview score). Candidate must qualify in both components.</p>
          <p><strong>Tie-Breaking Criteria:</strong></p>
          <ol class="list-decimal pl-5 space-y-1">
            <li>Higher marks in Online Examination (Professional Knowledge paper).</li>
            <li>If online exam marks are also equal, seniority in age (candidate senior in date of birth will be placed higher).</li>
          </ol>
        </div>
      `
    },
    {
      id: 48,
      title: '48. Online Examination Centers Across 30 States & UTs',
      badge: 'Exam Centers',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The online examination will be tentatively conducted across major cities in 30 States/UTs:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div class="p-2 bg-slate-50 rounded border border-slate-200"><strong>Delhi NCR:</strong> Delhi / New Delhi / NCR</div>
            <div class="p-2 bg-slate-50 rounded border border-slate-200"><strong>Maharashtra:</strong> Mumbai / Navi Mumbai / Thane / Pune / Nagpur / Nashik / Kolhapur / Chhatrapati Sambhaji Nagar</div>
            <div class="p-2 bg-slate-50 rounded border border-slate-200"><strong>Uttar Pradesh:</strong> Lucknow, Prayagraj, Kanpur, Varanasi, Agra, Gorakhpur, Meerut, Ayodhya</div>
            <div class="p-2 bg-slate-50 rounded border border-slate-200"><strong>Bihar:</strong> Patna, Muzaffarpur, Bhagalpur, Darbhanga</div>
            <div class="p-2 bg-slate-50 rounded border border-slate-200"><strong>Madhya Pradesh:</strong> Bhopal, Indore, Jabalpur</div>
            <div class="p-2 bg-slate-50 rounded border border-slate-200"><strong>Rajasthan:</strong> Jaipur, Jodhpur, Ajmer, Kota</div>
            <div class="p-2 bg-slate-50 rounded border border-slate-200"><strong>Gujarat:</strong> Ahmedabad / Gandhinagar, Surat, Vadodara, Rajkot</div>
            <div class="p-2 bg-slate-50 rounded border border-slate-200"><strong>Karnataka & Telangana:</strong> Bengaluru, Hubballi, Hyderabad, Warangal</div>
          </div>
          <p class="text-xs text-slate-500 mt-1">No request for change of Examination Centre will be entertained.</p>
        </div>
      `
    },
    {
      id: 49,
      title: '49. Application Fee & Intimation Charges (Online Mode Only)',
      badge: 'Application Fee',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Application fees and intimation charges are non-refundable and payable online between <strong>10.09.2026 and 25.09.2026</strong>:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Category</th>
                  <th class="p-2.5 font-bold">Total Amount Payable (Inclusive of GST)</th>
                  <th class="p-2.5">Component</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-medium">SC / ST / PwBD Candidates</td>
                  <td class="p-2.5 font-bold text-emerald-700">Rs. 175/-</td>
                  <td class="p-2.5">Intimation charges only</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-medium">General / EWS / OBC Candidates</td>
                  <td class="p-2.5 font-bold text-blue-700">Rs. 1,180/-</td>
                  <td class="p-2.5">Application fee + intimation charges</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-600">Payment modes accepted: Debit Cards (RuPay/Visa/MasterCard), Credit Cards, Internet Banking, IMPS, Cash Cards/Mobile Wallets, UPI, QR.</p>
        </div>
      `
    },
    {
      id: 50,
      title: '50. Step-by-Step How to Apply Online & Document Upload Specifications',
      badge: 'How to Apply',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates must register on the authorized IBPS registration portal (<code>https://ibpsreg.ibps.in/boiaug26/</code>):</p>
          <ol class="list-decimal pl-5 space-y-1.5">
            <li><strong>Step 1 - New Registration:</strong> Click on "Click here for New Registration", enter Full Name, Mobile Number, and Email ID. System will generate a Provisional Registration Number and Password.</li>
            <li><strong>Step 2 - Basic & Academic Details:</strong> Enter category, academic qualifications, post-qualification experience, and post selection.</li>
            <li><strong>Step 3 - Live Photo & Scanned Photo:</strong> Upload recent color photo (20-50 KB, 200x230 px) AND capture Live Photo through webcam or QR mobile camera.</li>
            <li><strong>Step 4 - Signature & Left Thumb:</strong> Upload signature in black ink (10-20 KB, 140x60 px - NOT in capitals) and Left Thumb Impression (20-50 KB, 240x240 px in black/blue ink).</li>
            <li><strong>Step 5 - Handwritten Declaration:</strong> Upload handwritten statement (50-100 KB, 800x400 px) in English in candidate's own handwriting: <em>“I, _______ (Name of candidate), hereby declare that all the information submitted by me in the application form is correct, true and valid. I will present the supporting documents as and when required.”</em></li>
            <li><strong>Step 6 - Upload Eligibility Proofs:</strong> Upload experience certificates, degree certificates, and mandatory certifications.</li>
            <li><strong>Step 7 - Fee Payment & Printout:</strong> Complete online payment, download e-Receipt, and take printout of the submitted application form for future reference.</li>
          </ol>
        </div>
      `
    }
  ];
}

export const BANK_OF_INDIA_SO_2026_EXAM: ExamRecord = {
  id: 'bank-of-india-so-2026',
  slug: 'bank-of-india-so-recruitment-2026',
  examName: 'Bank of India Specialist Officer Recruitment 2026',
  shortName: 'Bank of India SO 2026',
  postName: 'Specialist Officers (Scale I, II, III & IV) – Various Streams',
  organization: 'Bank of India (BOI)',
  category: 'Banking',
  state: 'All India',
  totalVacancy: '205 Posts',
  applicationStartDate: '2026-09-10',
  applicationLastDate: '2026-09-25',
  examDate: 'Not Released / To Be Updated',
  admitCardDate: 'Not Released / To Be Updated',
  answerKeyDate: 'Not Released / To Be Updated',
  resultDate: 'Not Released / To Be Updated',
  cutOffDate: 'Not Released / To Be Updated',
  status: 'APPLICATION_OPEN',
  education: ['Graduation', 'Post Graduation', 'Other'],
  minimumQualificationLevel: 'Graduation / B.E. / B.Tech / MCA / LLB with relevant experience & certifications',
  acceptedQualificationLevels: ['Graduation', 'B.Tech/B.E.', 'MCA', 'Post Graduation'],
  higherQualificationAccepted: true,
  ageMin: 21,
  ageMax: 42,
  ageRelaxationInfo: 'SC/ST: 5 years, OBC (Non-Creamy Layer): 3 years, PwBD: 10 years, Ex-Servicemen/ECO/SSCO: 5 years, 1984 Riot affected: 5 years.',
  gender: 'All',
  logoIcon: '🏦',
  officialWebsite: 'https://bankofindia.co.in/',
  officialNotification: 'https://bankofindia.bank.in/documents/20121/28761619/FINAL_NOTICE_SPECIALIST_OFFICER-01082026.pdf',
  applyLink: 'https://ibpsreg.ibps.in/boiaug26/',
  description: 'Bank of India Specialist Officer Recruitment 2026 – Apply online for 205 vacancies across Scale I, II, III, and IV posts. Check post-wise eligibility, pay scale, online test pattern, syllabus, and official notification.',
  shortSummary: 'Bank of India invites online applications for 205 Specialist Officer vacancies across Scale I, II, III, and IV (Project No. 2026-27/02). Online application active from 10 September to 25 September 2026.',
  importantDates: [
    { label: 'Official Notice Date', date: '01 August 2026' },
    { label: 'Submission of Online Application Commencing', date: '10 September 2026', isHighlight: true },
    { label: 'Last Date for Submission of Online Application', date: '25 September 2026', isHighlight: true },
    { label: 'Last Date for Online Fee Payment', date: '25 September 2026', isHighlight: true },
    { label: 'Relevant Cut-off Date for Age & Qualification', date: '01 August 2026' },
    { label: 'Admit Card / Call Letter Download', date: 'Not Released / To Be Updated' },
    { label: 'Tentative Date of Online Examination', date: 'Not Released / To Be Updated', isHighlight: true },
    { label: 'Personal Interview Date', date: 'Not Released / To Be Updated' }
  ],
  applicationFee: [
    { category: 'General / EWS / OBC Candidates', amount: 'Rs. 1,180/-' },
    { category: 'SC / ST / PwBD Candidates', amount: 'Rs. 175/-' }
  ],
  vacancies: [
    { category: 'Scale IV (Chief Manager)', postCount: 10 },
    { category: 'Scale III (Senior Manager)', postCount: 49 },
    { category: 'Scale II (Manager)', postCount: 118 },
    { category: 'Scale I (Officer)', postCount: 28 }
  ],
  selectionProcess: [
    'Stage 1: Scrutiny of uploaded eligibility documents (Experience, Certifications & Degrees) at registration',
    'Stage 2: Online Examination (English Language: 25 Marks qualifying + Professional Knowledge: 100 Marks; Composite 100 Minutes) [Note: Bank reserves right to conduct selection solely via Personal Interview]',
    'Stage 3: Personal Interview (100 Marks; Minimum Qualifying: 50% for Gen/EWS, 45% for SC/ST/OBC/PwBD; 1:3 ratio)',
    'Final Merit List: 60:40 Weightage between Online Examination (Professional Knowledge) and Personal Interview. If test is not held, 100% Interview marks.'
  ],
  examPattern: [
    {
      stageName: 'Online Examination (Composite Time: 100 Minutes)',
      mode: 'Computer Based Test (CBT)',
      duration: '100 Minutes (Composite)',
      negativeMarking: '0.25 (1/4th) mark deduction per wrong answer',
      subjects: [
        { name: 'English Language (Qualifying Nature - Min 35% Gen/EWS, 30% Reserved)', questions: 25, marks: 25 },
        { name: 'Professional Knowledge relevant to post (Merit Counted - Min 35% Gen/EWS, 30% Reserved)', questions: 100, marks: 100 }
      ]
    },
    {
      stageName: 'Personal Interview',
      mode: 'In-person / Video Interview conducted by Bank of India',
      duration: 'Standard Panel Interview',
      negativeMarking: 'N/A',
      subjects: [
        { name: 'Professional Domain Competency & Banking Aptitude (Min 50% Gen/EWS, 45% Reserved)', questions: 1, marks: 100 }
      ]
    }
  ],
  salary: {
    payScale: 'JMGS-I: ₹48,480-₹85,920 | MMGS-II: ₹64,820-₹93,960 | MMGS-III: ₹85,920-₹1,05,280 | SMGS-IV: ₹1,02,300-₹1,20,940',
    inHand: '₹65,000 to ₹1,50,000+ per month depending on Scale/Grade, city tier and leased accommodation',
    allowances: 'DA, HRA / Leased Housing, CCA, Medical Aid, LFC, Conveyance/Petrol, Mobile/Newspaper & Concessional Staff Loans'
  },
  faq: [
    {
      q: 'What is the total number of vacancies in Bank of India Specialist Officer Recruitment 2026?',
      a: 'A total of 205 vacancies are announced: Scale IV (10 posts), Scale III (49 posts), Scale II (118 posts), and Scale I (28 posts).'
    },
    {
      q: 'What are the starting and closing dates for online applications?',
      a: 'Online applications commence on 10 September 2026 and the last date to submit applications and pay fees is 25 September 2026.'
    },
    {
      q: 'What is the cut-off date for age and educational qualifications?',
      a: 'The relevant cut-off date for age and educational qualifications is 01 August 2026 (01.08.2026).'
    },
    {
      q: 'Can a candidate apply for more than one post?',
      a: 'No. Candidates can apply for only ONE post. In case of multiple applications, only the latest completed application will be retained, and fees for others will be forfeited.'
    },
    {
      q: 'What is the application fee for BOI SO 2026?',
      a: 'Rs. 1,180/- (application fee + intimation charges with GST) for General, EWS, and OBC candidates; Rs. 175/- (intimation charges only with GST) for SC, ST, and PwBD candidates.'
    },
    {
      q: 'What is the online examination pattern and negative marking?',
      a: 'Online test consists of English Language (25 Marks, qualifying only) and Professional Knowledge (100 Marks, counted for merit) with composite time of 100 minutes. There is a negative marking of 1/4th (0.25) mark for every incorrect answer.'
    },
    {
      q: 'What is the weightage of online exam and interview in final selection?',
      a: 'The weightage ratio is 60:40 (Online Test Professional Knowledge score : Personal Interview score). If the online examination is not conducted, selection will be based on Personal Interview marks.'
    },
    {
      q: 'Is there a service bond or security deposit?',
      a: 'Yes. Candidates selected must deposit a security amount: Rs. 1,00,000/- for Scale I; Rs. 2,00,000/- for Scale II; and Rs. 3,00,000/- for Scale III & IV. It is refundable after 3 years of satisfactory service.'
    }
  ],
  allInformation: generateBoiSo50Sections()
};

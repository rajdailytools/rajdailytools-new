import { ExamRecord, ExamInfoSection } from '../types/exam';

export function generateMpPoliceConstable50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. MP Police Constable GD Recruitment 2026 – Overview & Fast Facts',
      badge: 'Overview',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Madhya Pradesh Employees Selection Board (MPESB, Bhopal) in coordination with Police Headquarters, Home (Police) Department, Government of Madhya Pradesh, has released the official Rulebook for the <strong>Police Constable (G.D.) Direct Recruitment Test 2026</strong> (आरक्षक (जी.डी.) सीधी भर्ती चयन परीक्षा 2026). A total of <strong>7,500 vacancies</strong> have been announced across Special Armed Force (SAF) and District Executive Force (DEF).</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Recruitment Parameter</th>
                  <th class="p-2.5">Official Rulebook Specification</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Conducting Authority</td>
                  <td class="p-2.5 font-bold text-blue-900">MPESB (Madhya Pradesh Employees Selection Board, Bhopal)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Recruiting Department</td>
                  <td class="p-2.5 font-semibold text-slate-800">Police Headquarters, Home (Police) Dept, Govt. of MP (पुमु/2/चयन/स-3/583/2026)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Name of Examination</td>
                  <td class="p-2.5 font-bold text-slate-900">Police Constable (G.D.) Recruitment Test 2026</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Total Vacancies</td>
                  <td class="p-2.5 font-bold text-emerald-700">7,500 Posts (SAF GD: 700 | DEF GD: 6,800)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Pay Scale</td>
                  <td class="p-2.5 font-mono font-bold text-blue-800">₹19,500 – ₹62,000 (70%-80%-90% Stipend System)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Online Application Window</td>
                  <td class="p-2.5 font-bold text-slate-900">22 September 2026 to 06 October 2026 (15 Days)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Application Form Correction</td>
                  <td class="p-2.5 font-bold text-purple-700">22 September 2026 to 11 October 2026 (20 Days)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Written Exam Date</td>
                  <td class="p-2.5 font-bold text-red-700">From 19 November 2026 onwards (Two Shifts Daily)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Minimum Educational Qualification</td>
                  <td class="p-2.5 font-semibold text-slate-900">Class 10th / 10+2 / Higher Secondary (UR/SC/OBC); Class 8th Pass for ST</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Age Limit (as on 06.10.2026)</td>
                  <td class="p-2.5">18 to 33 Years (UR Male MP & Other State); 38 Years (All Women & SC/ST/OBC MP)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Selection Process</td>
                  <td class="p-2.5 font-bold text-indigo-800">Online Written Exam (100 Marks) + Physical Test PET (100 Marks) + PMT & DV</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: '2. Official Exam Schedule & Daily Shift Timings (Rulebook Page 1 & 29)',
      badge: 'Schedule',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The online computer-based written test is scheduled to commence on <strong>19 November 2026</strong> in two daily shifts. Candidates must strictly follow the designated reporting and gate closure hours:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Exam Shift</th>
                  <th class="p-2.5">Candidate Reporting Time</th>
                  <th class="p-2.5">Important Instructions Reading</th>
                  <th class="p-2.5">Test Timing (Duration 2:00 Hours)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-blue-900 bg-blue-50/40">First Shift (प्रथम पाली)</td>
                  <td class="p-2.5 font-mono font-bold text-slate-900">08:00 AM to 09:00 AM</td>
                  <td class="p-2.5 text-slate-600">09:50 AM to 10:00 AM (10 Mins)</td>
                  <td class="p-2.5 font-mono font-bold text-emerald-800">10:00 AM to 12:00 PM (100 Marks)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-purple-900 bg-purple-50/40">Second Shift (द्वितीय पाली)</td>
                  <td class="p-2.5 font-mono font-bold text-slate-900">01:00 PM to 02:00 PM</td>
                  <td class="p-2.5 text-slate-600">02:50 PM to 03:00 PM (10 Mins)</td>
                  <td class="p-2.5 font-mono font-bold text-emerald-800">03:00 PM to 05:00 PM (100 Marks)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="p-3 bg-red-50 border border-red-200 rounded-xl text-red-900 text-xs">
            <strong>⚠️ Gate Closure Warning:</strong> Entry into the examination center is strictly permitted only up to the reporting time (09:00 AM for Shift 1 and 02:00 PM for Shift 2). Late candidates will not be granted admission under any circumstances. Aadhaar biometric authentication is mandatory at the exam gate.
          </div>
        </div>
      `
    },
    {
      id: 3,
      title: '3. Total Vacancy Breakdown – SAF GD vs DEF GD (7,500 Posts)',
      badge: 'Vacancies',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Advt/Rulebook No. पुमु/2/चयन/स-3/583/2026, the 7,500 posts are segregated into two distinct operational wings of Madhya Pradesh Police:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3">
            <div class="p-4 bg-blue-50/80 border border-blue-200 rounded-xl">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-blue-700 uppercase tracking-wider">Cadre i</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800">Male Only</span>
              </div>
              <span class="text-2xl font-black text-blue-950 font-display block mt-1.5">700 Posts</span>
              <span class="text-xs font-bold text-slate-800 mt-1 block">Constable (GD) – Special Armed Force (SAF / विसबल)</span>
              <p class="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Exclusively reserved for male candidates. Personnel are assigned to specialized armed battalions across Madhya Pradesh.
              </p>
            </div>
            <div class="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-emerald-700 uppercase tracking-wider">Cadre ii</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">Male & Female</span>
              </div>
              <span class="text-2xl font-black text-emerald-950 font-display block mt-1.5">6,800 Posts</span>
              <span class="text-xs font-bold text-slate-800 mt-1 block">Constable (GD) – Excluding SAF (DEF / जिला बल)</span>
              <p class="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Open for both male and female candidates. Includes 35% horizontal reservation (2,380 posts) specifically for female candidates.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 4,
      title: '4. SAF GD Category-wise Vacancy Table (700 Posts – Male Only)',
      badge: 'SAF Table',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official vacancy distribution for <strong>Constable (GD) Special Armed Force (SAF)</strong> as per Chapter 1, Section i (Page 3 of Rulebook). All 700 posts are strictly for male applicants:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-center border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-800 text-white font-bold">
                <tr>
                  <th class="p-2 text-left">Sub-Category</th>
                  <th class="p-2">UR (Main)</th>
                  <th class="p-2">UR (13% काल्पनिक)</th>
                  <th class="p-2">SC</th>
                  <th class="p-2">ST</th>
                  <th class="p-2">OBC (14%)</th>
                  <th class="p-2">OBC (13% प्राविधिक)</th>
                  <th class="p-2">EWS</th>
                  <th class="p-2 bg-slate-900">Total (87%)</th>
                  <th class="p-2 bg-slate-900">Total (13%)</th>
                  <th class="p-2 bg-blue-900">Grand Total</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800 font-medium">
                <tr>
                  <td class="p-2 text-left font-bold text-slate-900">Open</td>
                  <td class="p-2">142</td>
                  <td class="p-2">68</td>
                  <td class="p-2">84</td>
                  <td class="p-2">105</td>
                  <td class="p-2">74</td>
                  <td class="p-2">68</td>
                  <td class="p-2">52</td>
                  <td class="p-2 font-semibold">457</td>
                  <td class="p-2 font-semibold">68</td>
                  <td class="p-2 font-bold text-blue-900">525</td>
                </tr>
                <tr>
                  <td class="p-2 text-left font-bold text-slate-900">Ex-Servicemen (10%)</td>
                  <td class="p-2">19</td>
                  <td class="p-2">9</td>
                  <td class="p-2">11</td>
                  <td class="p-2">14</td>
                  <td class="p-2">10</td>
                  <td class="p-2">9</td>
                  <td class="p-2">7</td>
                  <td class="p-2 font-semibold">61</td>
                  <td class="p-2 font-semibold">9</td>
                  <td class="p-2 font-bold text-blue-900">70</td>
                </tr>
                <tr>
                  <td class="p-2 text-left font-bold text-slate-900">Home Guard (15%)</td>
                  <td class="p-2">28</td>
                  <td class="p-2">14</td>
                  <td class="p-2">17</td>
                  <td class="p-2">21</td>
                  <td class="p-2">14</td>
                  <td class="p-2">14</td>
                  <td class="p-2">11</td>
                  <td class="p-2 font-semibold">91</td>
                  <td class="p-2 font-semibold">14</td>
                  <td class="p-2 font-bold text-blue-900">105</td>
                </tr>
                <tr class="bg-blue-50/70 font-black text-slate-900 border-t-2 border-slate-300">
                  <td class="p-2 text-left font-black">Total</td>
                  <td class="p-2 font-black">189</td>
                  <td class="p-2 font-black">91</td>
                  <td class="p-2 font-black">112</td>
                  <td class="p-2 font-black">140</td>
                  <td class="p-2 font-black">98</td>
                  <td class="p-2 font-black">91</td>
                  <td class="p-2 font-black">70</td>
                  <td class="p-2 font-black">609</td>
                  <td class="p-2 font-black">91</td>
                  <td class="p-2 font-black text-blue-800 text-sm">700</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-[11px] text-slate-500">Note: SAF posts are strictly for male candidates. Women candidates are not considered for SAF GD.</p>
        </div>
      `
    },
    {
      id: 5,
      title: '5. DEF GD Category-wise Vacancy Table (6,800 Posts – Male & Female)',
      badge: 'DEF Table',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official vacancy distribution for <strong>Constable (GD) Excluding SAF (DEF)</strong> as per Chapter 1, Section ii (Page 3 of Rulebook):</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-center border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-800 text-white font-bold">
                <tr>
                  <th class="p-2 text-left">Sub-Category</th>
                  <th class="p-2">UR (Main)</th>
                  <th class="p-2">UR (13% काल्पनिक)</th>
                  <th class="p-2">SC</th>
                  <th class="p-2">ST</th>
                  <th class="p-2">OBC (14%)</th>
                  <th class="p-2">OBC (13% प्राविधिक)</th>
                  <th class="p-2">EWS</th>
                  <th class="p-2 bg-slate-900">Total (87%)</th>
                  <th class="p-2 bg-slate-900">Total (13%)</th>
                  <th class="p-2 bg-emerald-900">Grand Total</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800 font-medium">
                <tr>
                  <td class="p-2 text-left font-bold text-slate-900">Open</td>
                  <td class="p-2">735</td>
                  <td class="p-2">353</td>
                  <td class="p-2">435</td>
                  <td class="p-2">544</td>
                  <td class="p-2">381</td>
                  <td class="p-2">353</td>
                  <td class="p-2">272</td>
                  <td class="p-2 font-semibold">2,367</td>
                  <td class="p-2 font-semibold">353</td>
                  <td class="p-2 font-bold text-emerald-900">2,720</td>
                </tr>
                <tr>
                  <td class="p-2 text-left font-bold text-slate-900">Ex-Servicemen (10%)</td>
                  <td class="p-2">183</td>
                  <td class="p-2">89</td>
                  <td class="p-2">109</td>
                  <td class="p-2">136</td>
                  <td class="p-2">95</td>
                  <td class="p-2">89</td>
                  <td class="p-2">68</td>
                  <td class="p-2 font-semibold">591</td>
                  <td class="p-2 font-semibold">89</td>
                  <td class="p-2 font-bold text-emerald-900">680</td>
                </tr>
                <tr>
                  <td class="p-2 text-left font-bold text-slate-900">Home Guard (15%)</td>
                  <td class="p-2">276</td>
                  <td class="p-2">132</td>
                  <td class="p-2">163</td>
                  <td class="p-2">204</td>
                  <td class="p-2">143</td>
                  <td class="p-2">132</td>
                  <td class="p-2">102</td>
                  <td class="p-2 font-semibold">888</td>
                  <td class="p-2 font-semibold">132</td>
                  <td class="p-2 font-bold text-emerald-900">1,020</td>
                </tr>
                <tr class="bg-pink-50/50">
                  <td class="p-2 text-left font-bold text-pink-900">Female (35%)</td>
                  <td class="p-2 font-semibold text-pink-900">642</td>
                  <td class="p-2 font-semibold text-pink-900">310</td>
                  <td class="p-2 font-semibold text-pink-900">381</td>
                  <td class="p-2 font-semibold text-pink-900">476</td>
                  <td class="p-2 font-semibold text-pink-900">333</td>
                  <td class="p-2 font-semibold text-pink-900">310</td>
                  <td class="p-2 font-semibold text-pink-900">238</td>
                  <td class="p-2 font-bold text-pink-900">2,070</td>
                  <td class="p-2 font-bold text-pink-900">310</td>
                  <td class="p-2 font-black text-pink-950">2,380</td>
                </tr>
                <tr class="bg-emerald-50/70 font-black text-slate-900 border-t-2 border-slate-300">
                  <td class="p-2 text-left font-black">Total</td>
                  <td class="p-2 font-black">1,836</td>
                  <td class="p-2 font-black">884</td>
                  <td class="p-2 font-black">1,088</td>
                  <td class="p-2 font-black">1,360</td>
                  <td class="p-2 font-black">952</td>
                  <td class="p-2 font-black">884</td>
                  <td class="p-2 font-black">680</td>
                  <td class="p-2 font-black">5,916</td>
                  <td class="p-2 font-black">884</td>
                  <td class="p-2 font-black text-emerald-800 text-sm">6,800</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 6,
      title: '6. SAF vs DEF Cadres – Comparison & Operational Differences',
      badge: 'Comparison',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates must understand the operational nature of the two cadres before submitting preference:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Feature</th>
                  <th class="p-2.5">SAF (विशेष सशस्त्र बल)</th>
                  <th class="p-2.5">DEF (जिला कार्यपालिक बल)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Total Vacancies</td>
                  <td class="p-2.5 font-bold text-blue-800">700 Posts</td>
                  <td class="p-2.5 font-bold text-emerald-800">6,800 Posts</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Gender Eligibility</td>
                  <td class="p-2.5 text-blue-900 font-bold">Male Candidates Only</td>
                  <td class="p-2.5 text-emerald-900 font-bold">Both Male and Female Candidates</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Female Reservation</td>
                  <td class="p-2.5 text-slate-500">Not Applicable (0%)</td>
                  <td class="p-2.5 font-bold text-pink-700">35% Horizontal Reservation (2,380 Posts)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Chest Measurement</td>
                  <td class="p-2.5">79 cm (Unexpanded) – 84 cm (Expanded)</td>
                  <td class="p-2.5">81 cm (Unexpanded) – 86 cm (Expanded) [UR/SC/OBC]</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Deployment Area</td>
                  <td class="p-2.5">Armed Battalions, Riot Control, Law & Order, VVIP security</td>
                  <td class="p-2.5">District Police Stations, Traffic, Beat Policing, Investigation</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Lock-in Period</td>
                  <td class="p-2.5 font-semibold">Minimum 5 Years in allotted unit</td>
                  <td class="p-2.5 font-semibold">Minimum 5 Years in allotted district/unit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 7,
      title: '7. The 87% Main vs 13% Provisional (काल्पनिक / प्राविधिक) Reservation Formula',
      badge: '87-13 Formula',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>In accordance with the ongoing legal proceedings regarding 27% OBC reservation in Madhya Pradesh, MPESB applies the <strong>87% - 13% formula</strong> as established by the General Administration Department (GAD):</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>87% Main List (मुख्य भाग):</strong> Appointments proceed unhindered for 87% of the advertised posts, including 14% clear OBC reservation and corresponding UR, SC, ST, and EWS seats.</li>
            <li><strong>13% Provisional List (प्राविधिक भाग - OBC):</strong> A group of 13% posts is earmarked for OBC candidates, whose final appointment is subject to the final outcome of the Hon’ble High Court / Supreme Court orders.</li>
            <li><strong>13% Hypothetical List (काल्पनिक भाग - UR):</strong> Simultaneously, an equivalent 13% posts are calculated for Unreserved (UR) candidates in parallel to protect general category rights based on the judicial ruling.</li>
          </ul>
        </div>
      `
    },
    {
      id: 8,
      title: '8. Horizontal Reservation Rules (Ex-Servicemen 10%, Home Guard 15%, Female 35%)',
      badge: 'Horizontal Quota',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Horizontal reservation is compartmentalized across each vertical reservation category (UR, OBC, SC, ST, EWS) as per Rulebook Clause 14 (Page 10):</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-xs text-blue-900 block">Ex-Servicemen (10%)</span>
              <p class="text-[11px] text-slate-600 mt-1">10% horizontal reservation in Class-III police posts as per MP Rajpatra dated 21.04.1999.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-xs text-purple-900 block">Home Guards (15%)</span>
              <p class="text-[11px] text-slate-600 mt-1">15% horizontal reservation for volunteer Home Guards completing min 3 years active service (Order dated 31.01.1996).</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-xs text-pink-900 block">Women (35%)</span>
              <p class="text-[11px] text-slate-600 mt-1">35% horizontal reservation in DEF cadre as per MP Gazette notification dated 03.10.2023.</p>
            </div>
          </div>
          <p class="text-xs text-slate-500">Note: As per MP Govt circular dated 04.04.1995, Police Department posts are exempted from Persons with Disabilities (PwD) reservation due to the strenuous physical nature of policing.</p>
        </div>
      `
    },
    {
      id: 9,
      title: '9. Home Guard Service Quota & Selection Scheme (Exemption & Bonus Marks)',
      badge: 'Home Guard Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 14(xii)(ग) (Page 11 of Rulebook), volunteer Nagar Sainiks / Home Guards of MP enjoy specific recruitment exemptions:</p>
          <ul class="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
            <li><strong>Written Exam Exemption:</strong> Home Guards who have completed at least 3 years of active service as on 06/10/2026 are exempted from the Phase 1 written exam.</li>
            <li><strong>Service Period Bonus Points:</strong>
              <div class="overflow-x-auto my-2">
                <table class="w-full text-xs text-left border border-slate-200 rounded-lg">
                  <thead class="bg-slate-100 text-slate-700 font-bold">
                    <tr><th class="p-2">Completed Active Service in Home Guard</th><th class="p-2">Assigned Service Marks</th></tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    <tr><td class="p-2">Completed up to 5 Years</td><td class="p-2 font-bold text-blue-700">5 Marks</td></tr>
                    <tr><td class="p-2">More than 5 Years and up to 10 Years</td><td class="p-2 font-bold text-blue-700">10 Marks</td></tr>
                    <tr><td class="p-2">More than 10 Years Service</td><td class="p-2 font-bold text-emerald-700">15 Marks</td></tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li><strong>Final Selection for Home Guards:</strong> Calculated based on: (1) Marks obtained in Physical Proficiency Test (PET) + (2) Service length marks (5, 10, or 15).</li>
            <li>Candidates dismissed due to indiscipline, misconduct, or absence without leave are strictly disqualified.</li>
          </ul>
        </div>
      `
    },
    {
      id: 10,
      title: '10. Ex-Servicemen Reservation & Eligibility Guidelines (Clause 2(xi) & 7(iv))',
      badge: 'Ex-Servicemen',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Ex-Servicemen belonging to MP domicile are entitled to 10% horizontal quota. As per Rulebook:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li>Serving military personnel whose discharge date falls in the future are <strong>NOT</strong> eligible to claim Ex-Servicemen reservation at the time of application.</li>
            <li>Those who have already obtained a civil government job by availing Ex-Servicemen reservation cannot claim the horizontal quota again in future recruitments.</li>
            <li>Members of central paramilitary or police forces (CRPF, BSF, ITBP, CISF) are not classified as Ex-Servicemen for this recruitment.</li>
            <li>Ex-Servicemen receive relaxed physical efficiency standards in Phase 2 as per Schedule ‘c’ (Page 18).</li>
          </ul>
        </div>
      `
    },
    {
      id: 11,
      title: '11. Female Reservation (35%) in DEF Cadre & Physical Standards',
      badge: 'Female Quota',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under MP Gazette dated 03.10.2023, <strong>35% horizontal reservation</strong> is enforced in DEF GD posts:</p>
          <div class="p-3 bg-pink-50 border border-pink-200 rounded-xl space-y-1.5 text-xs text-pink-950">
            <p><strong>Total Female Vacancies:</strong> 2,380 Posts across Open DEF units (UR: 952, SC: 381, ST: 476, OBC: 643, EWS: 238).</p>
            <p><strong>Height Requirement:</strong> Minimum <strong>155 cm</strong> for all female candidates across all categories (UR, SC, ST, OBC, EWS).</p>
            <p><strong>Chest Measurement:</strong> Not Applicable for female candidates.</p>
            <p><strong>PET Events:</strong> 800m Run (max 40 marks), Long Jump (max 30 marks), Shot Put 4.00 kg (max 30 marks).</p>
          </div>
        </div>
      `
    },
    {
      id: 12,
      title: '12. Madhya Pradesh Domicile & Non-MP Candidate Rules (Clause 1.a & 6.ix)',
      badge: 'Domicile Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3.5 bg-amber-50 border border-amber-200 rounded-xl space-y-2">
            <span class="font-bold text-amber-900 text-xs uppercase tracking-wider block">Official Domicile Mandate:</span>
            <ul class="list-disc pl-4 space-y-1.5 text-xs text-amber-950">
              <li><strong>Reservation Benefit:</strong> Permanent domicile certificate of Madhya Pradesh is mandatory to claim any vertical (SC, ST, OBC, EWS) or horizontal reservation (Women, Home Guard, Ex-Servicemen) and age relaxation.</li>
              <li><strong>Other State Candidates:</strong> Candidates from other states (Non-MP) can apply <strong>ONLY under Unreserved (UR) Open Category</strong>.</li>
              <li><strong>No Age/Fee Relaxation for Non-MP:</strong> Candidates from outside MP are not entitled to any age relaxation (maximum age strictly 33 years as on 06.10.2026) and must pay the general unreserved exam fee (₹500 + ₹200 + portal fee).</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 13,
      title: '13. Mandatory Employment Exchange Registration (रोजगार कार्यालय में जीवित पंजीयन)',
      badge: 'Rojgar Panjiyan',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per <strong>Clause 11 of Rulebook Page 1</strong>:</p>
          <div class="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-950">
            <strong>उपरोक्त सभी पदों के लिए अभ्यर्थियों का मध्य प्रदेश राज्य के रोजगार कार्यालय में जीवित पंजीयन होना अनिवार्य होगा।</strong>
            <p class="mt-1 text-slate-700">Candidates must possess an active, valid registration number on the MP Rojgar Portal (<span class="font-mono text-blue-800">mprojgar.gov.in</span>) at the time of online application and preserve the certificate for presentation during Document Verification.</p>
          </div>
        </div>
      `
    },
    {
      id: 14,
      title: '14. Transgender (उभयलिंगी) Candidate Provisions & Category Allocation',
      badge: 'Transgender Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>In terms of MP Gazette No. 118 dated 18.04.2023 and Rulebook Clause 7(i)(ख) & 14(vii):</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li>Transgender persons are placed in the <strong>Other Backward Classes (OBC)</strong> category for recruitment.</li>
            <li>Candidates must furnish a valid <strong>Certificate of Identity</strong> issued by the District Magistrate.</li>
            <li>Physical standards and PET criteria will correspond to the gender (Male or Female) specified in the DM Certificate of Identity.</li>
          </ul>
        </div>
      `
    },
    {
      id: 15,
      title: '15. Disqualification Conditions (Child Policy, Character & Misconduct)',
      badge: 'Disqualification',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates will be disqualified from appointment under the following provisions:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>Two Child Policy (Clause 3(ii)):</strong> Candidates having more than two living children, where one was born on or after 26 January 2001, are not eligible for government appointment. (Exception: If one child was living and twins/triplets are born in a subsequent delivery).</li>
            <li><strong>Disciplinary Removal:</strong> Candidates dismissed or terminated from prior government/semi-government service on disciplinary grounds.</li>
            <li><strong>Criminal Record / Adverse Character:</strong> Suppressing material facts in the character verification form or having criminal cases involving moral turpitude.</li>
          </ul>
        </div>
      `
    },
    {
      id: 16,
      title: '16. Pay Scale & 70%-80%-90% Stipend System (₹19,500 – ₹62,000)',
      badge: 'Salary & Stipend',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The post of Police Constable (GD) carries the pay scale of <strong>₹19,500 – ₹62,000</strong>. In accordance with MP GAD circular dated 12.12.2019, selected candidates undergo a 3-year probation period with phased stipends:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Year of Service</th>
                  <th class="p-2.5">Stipend Rate</th>
                  <th class="p-2.5">Basic Pay Calculation</th>
                  <th class="p-2.5">Additional Entitlements</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold">1st Year (प्रथम वर्ष)</td>
                  <td class="p-2.5 font-semibold text-blue-700">70% of Minimum Basic Pay</td>
                  <td class="p-2.5 font-mono">₹13,650/-</td>
                  <td class="p-2.5">DA, HRA, Uniform Allowance, Kit Allowance, etc.</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">2nd Year (द्वितीय वर्ष)</td>
                  <td class="p-2.5 font-semibold text-purple-700">80% of Minimum Basic Pay</td>
                  <td class="p-2.5 font-mono">₹15,600/-</td>
                  <td class="p-2.5">Applicable allowances as sanctioned</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">3rd Year (तृतीय वर्ष)</td>
                  <td class="p-2.5 font-semibold text-emerald-700">90% of Minimum Basic Pay</td>
                  <td class="p-2.5 font-mono">₹17,550/-</td>
                  <td class="p-2.5">Applicable allowances as sanctioned</td>
                </tr>
                <tr class="bg-slate-50 font-bold">
                  <td class="p-2.5">4th Year Onwards</td>
                  <td class="p-2.5 text-slate-900">100% Full Pay Scale</td>
                  <td class="p-2.5 font-mono text-emerald-800">₹19,500/- (Level 4 Entry)</td>
                  <td class="p-2.5">Annual increment + all standard benefits</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 17,
      title: '17. Pension Scheme: Defined Contribution Pension System (NPS)',
      badge: 'Pension',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per MP Finance Department Memo dated 13.04.2005 and 02.07.2005, candidates appointed to the Police Constable cadre are governed by the <strong>New Defined Contribution Pension System (National Pension System - NPS)</strong>. Employee and employer contributions will be credited according to state government finance regulations.</p>
        </div>
      `
    },
    {
      id: 18,
      title: '18. Cadre Allocation Policy & No Home District Posting (गृह जिला नहीं)',
      badge: 'Posting Policy',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs text-slate-800">
            <p><strong>Home District Prohibition (Clause 5(iii)):</strong> Selected candidates will <strong>NEVER be allotted or posted to their home district (गृह जिला आवंटित नहीं किया जाएगा)</strong>.</p>
            <p><strong>All-India and Inter-Department Liability (Clause 5(iv)):</strong> After appointment, personnel can be deputed to state economic offences wing (EOW), special police establishment (Lokayukta), railway police, or sent outside MP in official interest without candidate consent.</p>
          </div>
        </div>
      `
    },
    {
      id: 19,
      title: '19. Mandatory Minimum 5 Years Service in Allotted Unit before Transfer',
      badge: '5 Year Lock-in',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 6(vii) of the Rulebook (Page 6):</p>
          <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-xs text-indigo-950 font-medium">
            <strong>"जो अभ्यर्थी जिस इकाई में नियुक्त किया जाएगा वहाँ उसे कम से कम 5 वर्ष की सेवा पूर्ण करनी होगी, उसके बाद ही वह अन्य इकाई में स्थानांतरण का पात्र हो सकेगा।"</strong>
            <p class="mt-1 text-slate-600">Personnel must mandatorily complete a minimum uninterrupted service period of 5 years in their allocated district or battalion before becoming eligible to apply for inter-district or inter-unit transfers.</p>
          </div>
        </div>
      `
    },
    {
      id: 20,
      title: '20. District & Unit Choices (58 Units / Districts Preference List)',
      badge: 'Unit Preference',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates must specify preference for 58 police units and districts during online application (Page 6 of Rulebook):</p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-slate-700 my-2">
            <span class="p-1.5 bg-slate-50 border rounded">1. अनूपपुर</span>
            <span class="p-1.5 bg-slate-50 border rounded">2. अलीराजपुर</span>
            <span class="p-1.5 bg-slate-50 border rounded">3. अशोक नगर</span>
            <span class="p-1.5 bg-slate-50 border rounded">4. आगर मालवा</span>
            <span class="p-1.5 bg-slate-50 border rounded">5. इंदौर</span>
            <span class="p-1.5 bg-slate-50 border rounded">6. उज्जैन</span>
            <span class="p-1.5 bg-slate-50 border rounded">7. उमरिया</span>
            <span class="p-1.5 bg-slate-50 border rounded">8. कटनी</span>
            <span class="p-1.5 bg-slate-50 border rounded">9. खंडवा</span>
            <span class="p-1.5 bg-slate-50 border rounded">10. खरगोन</span>
            <span class="p-1.5 bg-slate-50 border rounded">11. गुना</span>
            <span class="p-1.5 bg-slate-50 border rounded">12. ग्वालियर</span>
            <span class="p-1.5 bg-slate-50 border rounded">13. छतरपुर</span>
            <span class="p-1.5 bg-slate-50 border rounded">14. छिंदवाड़ा</span>
            <span class="p-1.5 bg-slate-50 border rounded">15. जबलपुर</span>
            <span class="p-1.5 bg-slate-50 border rounded">16. झाबुआ</span>
            <span class="p-1.5 bg-slate-50 border rounded">17. टीकमगढ़</span>
            <span class="p-1.5 bg-slate-50 border rounded">18. डिंडोरी</span>
            <span class="p-1.5 bg-slate-50 border rounded">19. दतिया</span>
            <span class="p-1.5 bg-slate-50 border rounded">20. दमोह</span>
            <span class="p-1.5 bg-slate-50 border rounded">21. देवास</span>
            <span class="p-1.5 bg-slate-50 border rounded">22. धार</span>
            <span class="p-1.5 bg-slate-50 border rounded">23. नरसिंहपुर</span>
            <span class="p-1.5 bg-slate-50 border rounded">24. निवाड़ी</span>
            <span class="p-1.5 bg-slate-50 border rounded">25. नीमच</span>
            <span class="p-1.5 bg-slate-50 border rounded">26. पन्ना</span>
            <span class="p-1.5 bg-slate-50 border rounded">27. बड़वानी</span>
            <span class="p-1.5 bg-slate-50 border rounded">28. बालाघाट</span>
            <span class="p-1.5 bg-slate-50 border rounded">29. बुरहानपुर</span>
            <span class="p-1.5 bg-slate-50 border rounded">30. बैतूल</span>
            <span class="p-1.5 bg-slate-50 border rounded">31. भिण्ड</span>
            <span class="p-1.5 bg-slate-50 border rounded">32. भोपाल</span>
            <span class="p-1.5 bg-slate-50 border rounded">33. मंडला</span>
            <span class="p-1.5 bg-slate-50 border rounded">34. मंदसौर</span>
            <span class="p-1.5 bg-slate-50 border rounded">35. मुरैना</span>
            <span class="p-1.5 bg-slate-50 border rounded">36. राजगढ़</span>
            <span class="p-1.5 bg-slate-50 border rounded">37. रायसेन</span>
            <span class="p-1.5 bg-slate-50 border rounded">38. रीवा</span>
            <span class="p-1.5 bg-slate-50 border rounded">39. रतलाम</span>
            <span class="p-1.5 bg-slate-50 border rounded">40. विदिशा</span>
            <span class="p-1.5 bg-slate-50 border rounded">41. शहडोल</span>
            <span class="p-1.5 bg-slate-50 border rounded">42. शाजापुर</span>
            <span class="p-1.5 bg-slate-50 border rounded">43. GRP इंदौर</span>
            <span class="p-1.5 bg-slate-50 border rounded">44. GRP जबलपुर</span>
            <span class="p-1.5 bg-slate-50 border rounded">45. GRP भोपाल</span>
            <span class="p-1.5 bg-slate-50 border rounded">46. शिवपुरी</span>
            <span class="p-1.5 bg-slate-50 border rounded">47. श्योपुर</span>
            <span class="p-1.5 bg-slate-50 border rounded">48. सतना</span>
            <span class="p-1.5 bg-slate-50 border rounded">49. सागर</span>
            <span class="p-1.5 bg-slate-50 border rounded">50. सिंगरौली</span>
            <span class="p-1.5 bg-slate-50 border rounded">51. सिवनी</span>
            <span class="p-1.5 bg-slate-50 border rounded">52. सीधी</span>
            <span class="p-1.5 bg-slate-50 border rounded">53. सीहोर</span>
            <span class="p-1.5 bg-slate-50 border rounded">54. हरदा</span>
            <span class="p-1.5 bg-slate-50 border rounded">55. होशंगाबाद</span>
            <span class="p-1.5 bg-slate-50 border rounded">56. मैहर</span>
            <span class="p-1.5 bg-slate-50 border rounded">57. पांढुर्णा</span>
            <span class="p-1.5 bg-slate-50 border rounded">58. मऊगंज</span>
          </div>
        </div>
      `
    },
    {
      id: 21,
      title: '21. Minimum Educational Qualification Requirements (Clause 6, Page 6)',
      badge: 'Qualifications',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Educational eligibility must be fulfilled as on the closing date (06/10/2026) as specified in Rulebook Clause 6:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Category</th>
                  <th class="p-2.5">Prescribed Educational Qualification</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-slate-900 bg-slate-50/50">Unreserved (UR), SC, OBC, EWS</td>
                  <td class="p-2.5">
                    Passed <strong>10th Class Examination (under 10+2 system)</strong> or Higher Secondary (12th) or equivalent examination from a recognized Board or Institution.
                  </td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-emerald-800 bg-emerald-50/30">Scheduled Tribe (ST / अजजा)</td>
                  <td class="p-2.5 font-semibold text-emerald-900">
                    Passed <strong>8th Class (कक्षा 8वीं)</strong> or equivalent examination.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-red-600">Candidates whose examination results are awaited after 06.10.2026 are not eligible to apply.</p>
        </div>
      `
    },
    {
      id: 22,
      title: '22. Crucial Eligibility Date: 06 October 2026 (Clause 3(iii))',
      badge: 'Crucial Date',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Clause 3(iii) of the Rulebook, candidates must possess all essential qualifications and certificates on or before <strong>06/10/2026</strong>, including:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
            <li>Date of birth proof and age compliance.</li>
            <li>Educational mark sheets and certificates (10th / 8th).</li>
            <li>MP Domicile certificate and active Employment Exchange (रोजगार) registration.</li>
            <li>Valid caste (SC/ST/OBC non-creamy layer) or EWS income & asset certificate.</li>
            <li>Home Guard / Ex-Servicemen discharge certificates.</li>
          </ul>
        </div>
      `
    },
    {
      id: 23,
      title: '23. Age Limit as on 06/10/2026 – Category-wise Maximum Age Matrix',
      badge: 'Age Limits',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Age is determined as on the application closing date of <strong>06 October 2026</strong> (Minimum age: 18 years):</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Applicant Category</th>
                  <th class="p-2.5">Domicile</th>
                  <th class="p-2.5">Maximum Age Limit</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold">Unreserved (UR) Male</td>
                  <td class="p-2.5">Madhya Pradesh</td>
                  <td class="p-2.5 font-bold text-slate-900">33 Years</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Economically Weaker Section (EWS) Male</td>
                  <td class="p-2.5">Madhya Pradesh</td>
                  <td class="p-2.5 font-bold text-slate-900">33 Years</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">All Candidates (Male / Female)</td>
                  <td class="p-2.5 text-amber-800 font-semibold">Other States (Non-MP)</td>
                  <td class="p-2.5 font-bold text-red-700">33 Years (No Relaxation)</td>
                </tr>
                <tr class="bg-pink-50/40">
                  <td class="p-2.5 font-semibold text-pink-950">Female Candidates (All Categories: UR, SC, ST, OBC, EWS)</td>
                  <td class="p-2.5 font-semibold text-pink-950">Madhya Pradesh</td>
                  <td class="p-2.5 font-bold text-pink-700">38 Years</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Reserved Category Male (SC / ST / OBC)</td>
                  <td class="p-2.5">Madhya Pradesh</td>
                  <td class="p-2.5 font-bold text-emerald-700">38 Years</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Govt./Corporation/Mandal/Autonomous Body Employees & Nagar Sainik (Male)</td>
                  <td class="p-2.5">Madhya Pradesh</td>
                  <td class="p-2.5 font-bold text-indigo-700">38 Years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 24,
      title: '24. Special Incentive Age Relaxations (Vikram Award & Inter-Caste Marriage)',
      badge: 'Incentives',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 7(ii) of Rulebook Page 7, additional 5-year incentive age relaxations are permissible for MP domicile candidates:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>Vikram Award Winners:</strong> 5 years relaxation (UR Male: 33+5 = 38 Years; Reserved Male & All Women: 38+5 = 43 Years).</li>
            <li><strong>Inter-Caste Marriage Incentive Scheme:</strong> Higher caste spouse of honored couples under SC/ST/OBC welfare scheme gets 5 years relaxation (Male: 38 Years; Female: 38+5 = 43 Years).</li>
            <li><strong>Single Maximum Benefit Rule:</strong> If a candidate qualifies for more than one incentive concession, only the single most advantageous benefit is granted.</li>
          </ul>
        </div>
      `
    },
    {
      id: 25,
      title: '25. Application Fee & Police Departmental Fee Structure (Page 1 & 29)',
      badge: 'Fee Structure',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per the official fee schedule, applicants pay the Board Exam Fee plus the Departmental Exam Fee transferred to Police Headquarters:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Category</th>
                  <th class="p-2.5">Board Exam Fee</th>
                  <th class="p-2.5">Police Dept Fee</th>
                  <th class="p-2.5">Total Base Exam Fee</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Unreserved (UR) / Other State Candidates</td>
                  <td class="p-2.5 font-mono">₹500/-</td>
                  <td class="p-2.5 font-mono">₹200/-</td>
                  <td class="p-2.5 font-mono font-bold text-blue-800">₹700/-</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-emerald-800">MP Domicile SC / ST / OBC / EWS</td>
                  <td class="p-2.5 font-mono">₹250/-</td>
                  <td class="p-2.5 font-mono">₹100/-</td>
                  <td class="p-2.5 font-mono font-bold text-emerald-700">₹350/-</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-purple-800">Direct Recruitment – Backlog Vacancies</td>
                  <td class="p-2.5 font-semibold text-emerald-700">Nil (निरंक)</td>
                  <td class="p-2.5 font-semibold text-emerald-700">Nil (निरंक)</td>
                  <td class="p-2.5 font-mono font-bold text-emerald-700">₹0/-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 26,
      title: '26. MPOnline Portal Charges & Online Payment Methods',
      badge: 'Portal Fees',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>In addition to examination fees, portal charges are levied by MPOnline:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>Via MPOnline Authorized Kiosk:</strong> Portal fee of <strong>₹60/-</strong> per application.</li>
            <li><strong>Via Registered Citizen User Login:</strong> Portal fee of <strong>₹20/-</strong> per application.</li>
            <li><strong>Accepted Payment Modes:</strong> Debit Card (Visa/Master/RuPay), Credit Card, Net Banking, or UPI via payment gateway. Cash, DD, Cheque, or Offline Challans are strictly prohibited.</li>
          </ul>
        </div>
      `
    },
    {
      id: 27,
      title: '27. Online Application Form Correction Facility & Charges (22.09 to 11.10.2026)',
      badge: 'Correction',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The correction window remains operational from <strong>22 September 2026 to 11 October 2026</strong> (total 20 days):</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
            <li><strong>Correction Fee:</strong> ₹20/- per correction edit + ₹40/- MPOnline portal charges = <strong>₹60/- per transaction</strong>.</li>
            <li><strong>Non-Editable Fields:</strong> Application Number, Transaction ID, Board Application ID, Mobile Number, and Email ID cannot be altered.</li>
            <li>Category change from Reserved to UR requires paying the fee difference; however, no refund is granted when changing from UR to Reserved category.</li>
          </ul>
        </div>
      `
    },
    {
      id: 28,
      title: '28. End-to-End Selection Process Roadmap',
      badge: 'Selection Roadmap',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The multi-tier selection process for Constable (GD) involves:</p>
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-2.5 my-3">
            <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs text-center">
              <span class="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs inline-flex items-center justify-center mb-1.5">1</span>
              <span class="font-bold text-xs text-slate-800 block">Phase 1 Written Test</span>
              <span class="text-[11px] text-slate-500 mt-0.5 block">100 Marks CBT exam. Top 7x shortlisted for Phase 2.</span>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs text-center">
              <span class="w-6 h-6 rounded-full bg-purple-100 text-purple-700 font-bold text-xs inline-flex items-center justify-center mb-1.5">2</span>
              <span class="font-bold text-xs text-slate-800 block">Phase 2 PET & PMT</span>
              <span class="text-[11px] text-slate-500 mt-0.5 block">Physical Test (100 Marks, min 30 qualifying) + PMT + DV.</span>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs text-center">
              <span class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs inline-flex items-center justify-center mb-1.5">3</span>
              <span class="font-bold text-xs text-slate-800 block">Final Merit List</span>
              <span class="text-[11px] text-slate-500 mt-0.5 block">Combined Score: Written T-Score + PET Marks.</span>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs text-center">
              <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs inline-flex items-center justify-center mb-1.5">4</span>
              <span class="font-bold text-xs text-slate-800 block">Medical & Joining</span>
              <span class="text-[11px] text-slate-500 mt-0.5 block">Medical fitness, character verification & 3-yr probation.</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 29,
      title: '29. Phase 1 Online Written Examination Pattern (100 Questions, 100 Marks)',
      badge: 'Exam Pattern',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Phase 1 written examination conducted by MPESB has the following exact specifications (Rulebook Page 8 & 31):</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Exam Feature</th>
                  <th class="p-2.5">Rulebook Specification</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Mode of Exam</td>
                  <td class="p-2.5 font-bold text-blue-900">Computer-Based Online Examination (CBT)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Language Medium</td>
                  <td class="p-2.5">Bilingual (Hindi and English)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Total Questions</td>
                  <td class="p-2.5 font-mono font-bold text-slate-900">100 Objective Multiple Choice Questions (MCQ)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Total Marks</td>
                  <td class="p-2.5 font-mono font-bold text-emerald-700">100 Marks</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Duration of Exam</td>
                  <td class="p-2.5 font-mono font-bold text-slate-900">2 Hours (120 Minutes)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Marking Scheme</td>
                  <td class="p-2.5 font-bold text-emerald-800">+1 Mark for each correct answer</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Negative Marking</td>
                  <td class="p-2.5 font-bold text-emerald-700">NO Negative Marking (0 mark deducted for wrong/unattempted)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 30,
      title: '30. Subject-wise Marks Distribution (40 + 30 + 30 Marks Structure)',
      badge: 'Subject Marks',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Chapter 3 (Page 31 of Rulebook), the 100 questions are split across three defined subject sections:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Section</th>
                  <th class="p-2.5">Subject Area</th>
                  <th class="p-2.5 text-center">Allocated Marks</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-blue-900">(अ)</td>
                  <td class="p-2.5 font-semibold">सामान्य ज्ञान एवं तार्किक ज्ञान (General Knowledge & Logical Knowledge)</td>
                  <td class="p-2.5 text-center font-bold text-blue-800">40 Marks</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-purple-900">(ब)</td>
                  <td class="p-2.5 font-semibold">बौद्धिक क्षमता एवं मानसिक अभिरुचि (Intellectual Ability & Mental Aptitude)</td>
                  <td class="p-2.5 text-center font-bold text-purple-800">30 Marks</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-emerald-900">(स)</td>
                  <td class="p-2.5 font-semibold">विज्ञान एवं सरल अंक गणित (Science & Simple Arithmetic)</td>
                  <td class="p-2.5 text-center font-bold text-emerald-800">30 Marks</td>
                </tr>
                <tr class="bg-slate-50 font-black">
                  <td class="p-2.5" colspan="2">Total Maximum Marks</td>
                  <td class="p-2.5 text-center font-black text-slate-900">100 Marks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-600">Standard of questions will correspond to Class 8th level of Madhya Pradesh Board of Secondary Education (MPBSE).</p>
        </div>
      `
    },
    {
      id: 31,
      title: '31. Written Exam Detailed Syllabus (MP Board Class 8th Standard)',
      badge: 'Syllabus',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Key topics covered across the three sections:</p>
          <ul class="list-disc pl-5 space-y-2 text-xs text-slate-700">
            <li><strong>सामान्य ज्ञान एवं तार्किक ज्ञान (40 Marks):</strong> MP history, culture, geography, wildlife, minerals, economy, current national & international affairs, important government schemes, and basic logical reasoning (coding-decoding, analogies, direction sense, series).</li>
            <li><strong>बौद्धिक क्षमता एवं मानसिक अभिरुचि (30 Marks):</strong> Puzzles, syllogisms, blood relations, classification, Venn diagrams, pattern completion, non-verbal figures, and situational decision making.</li>
            <li><strong>विज्ञान एवं सरल अंक गणित (30 Marks):</strong> Basic general science (Physics, Chemistry, Biology of daily life) + Number systems, fractions, LCM & HCF, ratio & proportion, percentages, profit & loss, simple & compound interest, time & work, speed & distance, and mensuration.</li>
          </ul>
        </div>
      `
    },
    {
      id: 32,
      title: '32. Objection Management on Question Paper & Answer Key (Clause 2.9)',
      badge: 'Objections',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>After conclusion of the exam, the provisional answer key will be uploaded on the MPESB portal:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>3-Day Window:</strong> Online objections can be registered within 3 calendar days of link activation.</li>
            <li><strong>Objection Fee:</strong> ₹150/- per challenged question plus portal charges.</li>
            <li>Objections are examined by a Subject Expert Committee. The committee's final decision is irrevocable, and the final answer key will be published based on their recommendations.</li>
          </ul>
        </div>
      `
    },
    {
      id: 33,
      title: '33. Defective Question Cancellation & Proportionate Marks Calculation (Clause 2.8)',
      badge: 'Defective Qs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>If questions are cancelled due to framing errors, ambiguous translation, or multiple correct keys, marks are calculated proportionately:</p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono">
            Proportionate Marks = (Raw Marks Obtained × Total Questions in Paper) ÷ (Total Questions – Number of Cancelled Questions)
          </div>
          <p class="text-xs text-slate-600"><strong>Example:</strong> In a 100-question paper, if 2 questions are cancelled and a candidate scores 90 marks in the remaining 98 questions: <span class="font-bold text-blue-900">(90 × 100) / (100 – 2) = 91.83 Marks</span>.</p>
        </div>
      `
    },
    {
      id: 34,
      title: '34. Normalisation Method: Normalised Equi-Percentile (NEP) Scaling (Clause 2.8.b)',
      badge: 'NEP Normalisation',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Because the computer-based test is administered across multiple shifts, MPESB applies the <strong>Normalised Equi-Percentile (NEP) scaling technique</strong> established by order dated 24/01/2025 and 13/02/2025:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
            <li>Percentile scores are calculated per shift based on proportionate marks.</li>
            <li>The method accounts for varying degrees of difficulty across multiple exam dates and batches to ensure parity.</li>
          </ul>
        </div>
      `
    },
    {
      id: 35,
      title: '35. Multi-Stage Z-Value & T-Score Transformation Methodology (Page 22 & 23)',
      badge: 'T-Score Formula',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 2-8(b) for multi-stage exams with physical tests, MPESB converts written percentile scores into standard <strong>T-Scores</strong> so they can be statistically added to PET marks:</p>
          <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
            <p><strong>Step 1:</strong> Percentile Score (Pij) computed from candidate proportionate score.</p>
            <p><strong>Step 2:</strong> Equivalent Z-value computed: <span class="font-mono text-purple-800 font-bold">Zij = ROUND(NORMSINV((Pij/100) - 0.0000005), 6)</span></p>
            <p><strong>Step 3:</strong> T-Score computed: <span class="font-mono text-blue-800 font-bold">Tij = AM + ASD × (Zij)</span><br>
            Where: AM (Assumed Mean) = Max Marks / 2 = 50; ASD (Assumed Standard Deviation) = Max Marks / 10 = 10.</p>
            <p><strong>Step 4:</strong> Final Combined Score = <span class="font-mono text-emerald-800 font-bold">T-Score + Physical Test (PET) Marks</span>.</p>
          </div>
        </div>
      `
    },
    {
      id: 36,
      title: '36. Shortlisting for Phase 2: Seven Times (7x) Advertised Vacancies (Clause 8(घ) & 11(iii))',
      badge: '7x Shortlist',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950">
            <strong>7× Candidates Shortlisted for PET:</strong>
            <p class="mt-1 leading-relaxed text-slate-700">
              Candidates will be shortlisted for Phase 2 (Physical Proficiency Test & Document Verification) at a ratio of <strong>7 times the number of advertised vacancies in each vertical category</strong> based on Cut-off Percentile in the Phase 1 Written Exam. All candidates who tie at the cut-off percentile score will be summoned for PET, even if the total exceeds 7x. A single common cut-off percentile is determined for SAF and DEF cadres.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 37,
      title: '37. Phase 2 Physical Proficiency Test (PET) – 100 Marks & Min 30% Qualifying Rule',
      badge: 'PET Overview',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Chapter 1, Clause 11(v) (Page 9):</p>
          <div class="p-3.5 bg-blue-50 border border-blue-200 rounded-xl space-y-1.5 text-xs text-blue-950">
            <strong>आरक्षक (जीडी) संवर्ग के समस्त अभ्यर्थियों के लिये, शारीरिक दक्षता परीक्षण में अधिकतम कुल योग के न्यूनतम 30% अंक (100 में से 30 अंक) लाने होंगे, जिसके अंक अंतिम प्रवीणता सूची के लिये, प्रथम चरण के अंकों के साथ जोड़े जाएँगे।</strong>
            <ul class="list-disc pl-4 mt-2 space-y-1 text-slate-700">
              <li>Candidates must obtain at least <strong>30 marks out of 100 in PET</strong> to be eligible for final appointment.</li>
              <li>PET is evaluative and competitive: PET marks are added to the written exam score to determine the final selection rank.</li>
              <li>800m run is provided <strong>1 attempt only</strong>. Long Jump and Shot Put are provided <strong>3 attempts each</strong>.</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 38,
      title: '38. Male PET Scoring Structure & Benchmark Timings (Schedule 1.a, Page 16)',
      badge: 'Male PET',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>PET marks allocation for male candidates across the 3 physical events (Max 100 Marks):</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Event</th>
                  <th class="p-2.5">Max Marks</th>
                  <th class="p-2.5">Attempts</th>
                  <th class="p-2.5">0 Mark Threshold</th>
                  <th class="p-2.5">Max Marks Threshold</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-blue-900">800 Meter Run</td>
                  <td class="p-2.5 font-bold text-blue-700">40 Marks</td>
                  <td class="p-2.5">1 Attempt</td>
                  <td class="p-2.5">> 198.3 seconds</td>
                  <td class="p-2.5 font-bold text-emerald-700">< 124.2 seconds</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-purple-900">Long Jump (लम्बी कूद)</td>
                  <td class="p-2.5 font-bold text-purple-700">30 Marks</td>
                  <td class="p-2.5">3 Attempts</td>
                  <td class="p-2.5">< 2.96 meters</td>
                  <td class="p-2.5 font-bold text-emerald-700">≥ 5.57 meters</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-emerald-900">Shot Put (गोला फेंक - 7.26 kg)</td>
                  <td class="p-2.5 font-bold text-emerald-700">30 Marks</td>
                  <td class="p-2.5">3 Attempts</td>
                  <td class="p-2.5">< 3.83 meters</td>
                  <td class="p-2.5 font-bold text-emerald-700">≥ 8.76 meters</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 39,
      title: '39. Female PET Scoring Structure & Benchmark Timings (Schedule 1.b, Page 17)',
      badge: 'Female PET',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>PET marks allocation for female candidates (Max 100 Marks):</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Event</th>
                  <th class="p-2.5">Max Marks</th>
                  <th class="p-2.5">Attempts</th>
                  <th class="p-2.5">0 Mark Threshold</th>
                  <th class="p-2.5">Max Marks Threshold</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-pink-900">800 Meter Run</td>
                  <td class="p-2.5 font-bold text-pink-700">40 Marks</td>
                  <td class="p-2.5">1 Attempt</td>
                  <td class="p-2.5">> 261.8 seconds</td>
                  <td class="p-2.5 font-bold text-emerald-700">< 176.0 seconds</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-purple-900">Long Jump (लम्बी कूद)</td>
                  <td class="p-2.5 font-bold text-purple-700">30 Marks</td>
                  <td class="p-2.5">3 Attempts</td>
                  <td class="p-2.5">< 2.04 meters</td>
                  <td class="p-2.5 font-bold text-emerald-700">≥ 4.36 meters</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-emerald-900">Shot Put (गोला फेंक - 4.00 kg)</td>
                  <td class="p-2.5 font-bold text-emerald-700">30 Marks</td>
                  <td class="p-2.5">3 Attempts</td>
                  <td class="p-2.5">< 2.85 meters</td>
                  <td class="p-2.5 font-bold text-emerald-700">≥ 7.20 meters</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 40,
      title: '40. Relaxed PET Scoring for Home Guard & Ex-Servicemen (Schedules c & d)',
      badge: 'Relaxed PET',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Relaxed PET scoring tables are defined in Schedule ‘c’ (Male, Page 18) and Schedule ‘d’ (Female, Page 19):</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>Male HG & Ex-Servicemen:</strong> 800m Run (0 mark > 224.5s; 40 marks < 146.5s); Long Jump (0 mark < 2.23m; 30 marks ≥ 4.84m); Shot Put 7.26 kg (0 mark < 3.51m; 30 marks ≥ 8.73m).</li>
            <li><strong>Female HG & Ex-Servicemen:</strong> 800m Run (0 mark > 305.8s; 40 marks < 220.0s); Long Jump (0 mark < 1.50m; 30 marks ≥ 3.82m); Shot Put 4.00 kg (0 mark < 2.70m; 30 marks ≥ 7.05m).</li>
          </ul>
        </div>
      `
    },
    {
      id: 41,
      title: '41. Physical Standards Test (PMT): Height & Chest for SAF (विशेष सशस्त्र बल)',
      badge: 'SAF PMT',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under SAF Rules 1973 (Rule 21 & 22) as specified in Clause 12(i) of Rulebook Page 9:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Category (Male Only)</th>
                  <th class="p-2.5">Minimum Height</th>
                  <th class="p-2.5">Chest (Unexpanded)</th>
                  <th class="p-2.5">Chest (With Expansion)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold">Unreserved (UR) & Other Backward Classes (OBC)</td>
                  <td class="p-2.5 font-bold text-slate-900">168 cm</td>
                  <td class="p-2.5 font-mono">79 cm</td>
                  <td class="p-2.5 font-mono font-bold text-blue-800">84 cm (Min 5 cm Expansion)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Gorkha, Garhwali, Kumaoni Candidates</td>
                  <td class="p-2.5 font-bold text-slate-900">157 cm</td>
                  <td class="p-2.5 font-mono">79 cm</td>
                  <td class="p-2.5 font-mono font-bold text-blue-800">84 cm (Min 5 cm Expansion)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Maratha, SC & ST Candidates</td>
                  <td class="p-2.5 font-bold text-slate-900">165 cm</td>
                  <td class="p-2.5 font-mono">79 cm</td>
                  <td class="p-2.5 font-mono font-bold text-blue-800">84 cm (Min 5 cm Expansion)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 42,
      title: '42. Physical Standards Test (PMT): Height & Chest for DEF (जिला बल)',
      badge: 'DEF PMT',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>For all cadres excluding SAF (DEF GD) under Clause 12(ii) of Rulebook Page 9:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Category & Gender</th>
                  <th class="p-2.5">Minimum Height</th>
                  <th class="p-2.5">Chest (Unexpanded)</th>
                  <th class="p-2.5">Chest (With Expansion)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold">UR, SC, OBC Male Candidates</td>
                  <td class="p-2.5 font-bold text-slate-900">168 cm</td>
                  <td class="p-2.5 font-mono">81 cm</td>
                  <td class="p-2.5 font-mono font-bold text-emerald-800">86 cm (Min 5 cm Expansion)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">ST (अजजा) Male Candidates</td>
                  <td class="p-2.5 font-bold text-emerald-800">160 cm</td>
                  <td class="p-2.5 font-mono">76 cm</td>
                  <td class="p-2.5 font-mono font-bold text-emerald-800">81 cm (Min 5 cm Expansion)</td>
                </tr>
                <tr class="bg-pink-50/40">
                  <td class="p-2.5 font-semibold text-pink-900">All Female Candidates (UR, SC, ST, OBC, EWS)</td>
                  <td class="p-2.5 font-bold text-pink-700">155 cm</td>
                  <td class="p-2.5 text-slate-400">Not Applicable</td>
                  <td class="p-2.5 text-slate-400">Not Applicable</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-red-600 font-medium">No relaxation in physical measurement standards is granted under any category or circumstance.</p>
        </div>
      `
    },
    {
      id: 43,
      title: '43. Medical Examination Standards & 3-Tier Medical Boards (Clause 13)',
      badge: 'Medical Standards',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Health evaluation is conducted by the District Medical Board as per Clause 13 (Page 10):</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
            <li><strong>Vision:</strong> Must not suffer from eye disease. Distant vision without spectacles must not be less than 6/9 in one eye and 6/12 in the other. Color blindness is strictly disqualifying (tested via Ishihara plates).</li>
            <li><strong>Deformities:</strong> Must not have knock knees (नॉक-नी) or flat foot (फ्लैट फुट). Candidate must not be physically handicapped or disabled.</li>
            <li><strong>Medical Appeal Process:</strong> If declared unfit by the District Board, candidate may appeal to the Divisional Medical Board. In case of differing opinions, re-examination is conducted by the State Medical Board with a nominated gazetted police officer present, and complete videography.</li>
          </ul>
        </div>
      `
    },
    {
      id: 44,
      title: '44. Document Verification (DV) Checklist & Original Certificates (Clause 17)',
      badge: 'Documents',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Document verification takes place right after the physical efficiency test. Candidates must produce original and self-attested photocopies of:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
            <li>10th / 10+2 / 8th Class mark sheets and passing certificates.</li>
            <li>Date of birth certificate (Birth Certificate or 10th Class Mark Sheet).</li>
            <li>Permanent MP Domicile certificate issued by competent revenue authority.</li>
            <li>Active MP Employment Exchange (Rojgar) registration certificate.</li>
            <li>Category certificate (SC/ST/OBC non-creamy layer/EWS) in prescribed state formats (Annexures 2 to 6).</li>
            <li>Home Guard / Ex-Servicemen discharge / NOC certificates where applicable.</li>
            <li>Bank passbook first page copy for SC/ST/OBC travel allowance (TA) reimbursement.</li>
          </ul>
        </div>
      `
    },
    {
      id: 45,
      title: '45. Character Verification & Police Verification Norms (Clause 20)',
      badge: 'Character Check',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Home Dept order dated 24.07.2018 and the landmark Supreme Court ruling in <em>Mehar Singh vs Commissioner of Police</em> (Civil Appeal No. 38886/2012):</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
            <li>Candidates concealing criminal cases, arrests, chargesheets, or submitting false information in the verification form will be summarily terminated without notice.</li>
            <li>Adverse character verification automatically cancels appointment eligibility.</li>
          </ul>
        </div>
      `
    },
    {
      id: 46,
      title: '46. Final Merit List Preparation & Tie-Breaking Resolution (Clause 15 & 19)',
      badge: 'Final Merit',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The final merit list is synthesized based on aggregate performance:</p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1.5">
            <p><strong>Combined Score Formula:</strong> <span class="font-bold text-blue-900">Final Score = Phase 1 Written Exam T-Score + Phase 2 PET Marks (out of 100)</span>.</p>
            <p><strong>Pre-requisite:</strong> Only candidates securing at least 30% marks in PET (30/100) and clearing PMT & DV are considered for final merit ranking.</p>
            <p><strong>Tie-Breaking Rules:</strong> (1) Higher proportionate marks in written exam; (2) In case of identical written marks, candidate older in age (earlier date of birth) is ranked higher.</p>
          </div>
        </div>
      `
    },
    {
      id: 47,
      title: '47. 15% Waiting List (प्रतीक्षा सूची) Policy & 1-Year Validity (Clause 16)',
      badge: 'Waiting List',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per GAD Order No. C-3-9/2016/1-3 dated 10.10.2016:</p>
          <div class="p-3 bg-purple-50 border border-purple-200 rounded-xl text-xs text-purple-950">
            A waiting list comprising <strong>15% of the advertised vacancies</strong> will be maintained. The waiting list remains valid for <strong>one year</strong> from the date of final result declaration or until the declaration of results of the next recruitment cycle, whichever is earlier.
          </div>
        </div>
      `
    },
    {
      id: 48,
      title: '48. Important Candidate Instructions, Prohibited Items & UFM Guidelines',
      badge: 'Exam Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>Mandatory Items:</strong> Printed Admit Card (TAC), original valid Photo ID (Aadhaar, Voter ID, PAN, Driving License, Passport), and black ballpoint pen.</li>
            <li><strong>Strictly Prohibited:</strong> Mobile phones, calculators, digital watches, Bluetooth devices, earphones, bags, books, notes, and study material.</li>
            <li><strong>Impersonation & Malpractice:</strong> Any attempt at impersonation or cheating will lead to immediate FIR registration, permanent debarment, and criminal prosecution under UFM rules.</li>
          </ul>
        </div>
      `
    },
    {
      id: 49,
      title: '49. Frequently Asked Questions (FAQs) – 10 Key Candidate Queries Answered',
      badge: 'FAQs',
      content: `
        <div class="space-y-2.5 text-xs sm:text-sm text-slate-700">
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 class="font-bold text-slate-900">Q1. Can candidates from outside Madhya Pradesh apply?</h4>
            <p class="text-xs text-slate-600 mt-1">Yes, candidates from other states can apply, but strictly under the Unreserved (Open) category. They are not eligible for any age relaxation, fee concession, or category reservation.</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 class="font-bold text-slate-900">Q2. Is there negative marking in the Phase 1 written exam?</h4>
            <p class="text-xs text-slate-600 mt-1">No, there is NO negative marking. Candidates receive +1 mark for each correct answer and 0 for wrong or unattempted questions.</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 class="font-bold text-slate-900">Q3. Can female candidates apply for SAF (Special Armed Force)?</h4>
            <p class="text-xs text-slate-600 mt-1">No. All 700 SAF GD vacancies are exclusively for male candidates. Female candidates are eligible for the 6,800 DEF vacancies with 35% reservation (2,380 posts).</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 class="font-bold text-slate-900">Q4. Are PET marks added to the final merit list?</h4>
            <p class="text-xs text-slate-600 mt-1">Yes. Unlike many other state police exams where PET is merely qualifying, in MP Police Constable 2026, the final merit is prepared by adding the written exam T-score to the PET score (out of 100 marks).</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 class="font-bold text-slate-900">Q5. What is the minimum qualifying score in the physical test?</h4>
            <p class="text-xs text-slate-600 mt-1">Candidates must obtain at least 30% marks (30 out of 100) in the Physical Proficiency Test to be considered for final selection.</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 class="font-bold text-slate-900">Q6. What is the educational qualification required?</h4>
            <p class="text-xs text-slate-600 mt-1">Class 10th pass under 10+2 system or Higher Secondary for UR, SC, and OBC; Class 8th pass for ST category candidates.</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 class="font-bold text-slate-900">Q7. Can I be posted in my home district after selection?</h4>
            <p class="text-xs text-slate-600 mt-1">No. The Rulebook explicitly states that selected candidates will not be allotted their home district.</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 class="font-bold text-slate-900">Q8. How many candidates are shortlisted for the physical test?</h4>
            <p class="text-xs text-slate-600 mt-1">Seven times (7x) the number of advertised vacancies in each vertical category will be shortlisted based on written exam cut-off percentile.</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 class="font-bold text-slate-900">Q9. Is MP Rojgar Panjiyan compulsory?</h4>
            <p class="text-xs text-slate-600 mt-1">Yes, active registration on the Madhya Pradesh employment exchange portal (mprojgar.gov.in) is mandatory.</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 class="font-bold text-slate-900">Q10. What is the stipend during the 3-year probation period?</h4>
            <p class="text-xs text-slate-600 mt-1">Year 1: 70% of basic pay (₹13,650), Year 2: 80% (₹15,600), Year 3: 90% (₹17,550), plus government-sanctioned DA and other allowances.</p>
          </div>
        </div>
      `
    },
    {
      id: 50,
      title: '50. Important Official Links & MPESB Helpdesk Contact Directory',
      badge: 'Official Links',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official web portals and grievance contacts for MPESB Police Constable GD Recruitment 2026:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Official Service / Resource</th>
                  <th class="p-2.5">Direct Official Link / Contact</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Online Application Portal</td>
                  <td class="p-2.5"><a href="https://esb.mponline.gov.in/Portal/Examinations/Vyapam/examsList.aspx" target="_blank" rel="noopener noreferrer" class="font-bold text-blue-700 hover:underline">Apply Online – MPOnline ESB Portal</a></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Official Rulebook PDF (37 Pages)</td>
                  <td class="p-2.5"><a href="https://esb.mp.gov.in/Rulebooks/RB_2026/PCRT_GD_2026_RuleBook_09092026.pdf" target="_blank" rel="noopener noreferrer" class="font-bold text-red-700 hover:underline">Download Official PCRT GD 2026 Rulebook PDF</a></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Official MPESB Portal</td>
                  <td class="p-2.5"><a href="https://esb.mp.gov.in/e_default.html" target="_blank" rel="noopener noreferrer" class="font-bold text-indigo-700 hover:underline">Visit esb.mp.gov.in</a></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">MP Rojgar Portal Registration</td>
                  <td class="p-2.5"><a href="https://mprojgar.gov.in/" target="_blank" rel="noopener noreferrer" class="font-semibold text-slate-700 hover:underline">mprojgar.gov.in</a></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">MPESB Toll Free Number</td>
                  <td class="p-2.5 font-mono font-bold text-slate-900">18002337899</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">MPOnline Helpdesk Phone</td>
                  <td class="p-2.5 font-mono">0755 - 6720200</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Grievance / Complaint Email</td>
                  <td class="p-2.5 font-mono text-blue-800">complaint.esb@mp.gov.in</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    }
  ];
}

export const MP_POLICE_CONSTABLE_2026_EXAM: ExamRecord = {
  id: 'mp-police-constable-2026',
  slug: 'mpesb-mp-police-constable-recruitment-2026',
  examName: 'MPESB MP Police Constable GD Recruitment 2026',
  shortName: 'MP Police Constable 2026',
  organization: 'Madhya Pradesh Employees Selection Board (MPESB), Bhopal & MP Police',
  category: 'Police',
  postName: 'Police Constable (G.D.) – SAF & DEF Cadres',
  totalVacancy: '7,500',
  logoIcon: '👮',
  state: 'Madhya Pradesh',
  ageMin: 18,
  ageMax: 33,
  gender: 'All',
  applicationStartDate: '2026-09-22',
  applicationLastDate: '2026-10-06',
  admitCardDate: '2026-11-10',
  examDate: '2026-11-19',
  answerKeyDate: 'Expected December 2026',
  resultDate: 'To Be Announced',
  cutOffDate: 'To Be Announced',
  status: 'APPLICATION_OPEN',
  education: ['10th', 'Other'],
  minimumQualificationLevel: 'Class 10th / Higher Secondary (Class 8th for ST)',
  acceptedQualificationLevels: ['10th', '12th', '8th Pass (ST)'],
  officialWebsite: 'https://esb.mp.gov.in/e_default.html',
  officialNotification: 'https://esb.mp.gov.in/Rulebooks/RB_2026/PCRT_GD_2026_RuleBook_09092026.pdf',
  applyLink: 'https://esb.mponline.gov.in/Portal/Examinations/Vyapam/examsList.aspx',
  salary: {
    payScale: '₹19,500 – ₹62,000 (Level 4 equivalent)',
    inHand: 'Year 1: ₹13,650 (70%), Year 2: ₹15,600 (80%), Year 3: ₹17,550 (90%) + Allowances',
    allowances: 'DA, HRA, Uniform Allowance, Kit Allowance, Ration Money & New Pension Scheme (NPS)'
  },
  importantDates: [
    { label: 'Online Application Start Date', date: '22 September 2026', isHighlight: true },
    { label: 'Online Application Last Date', date: '06 October 2026', isHighlight: true },
    { label: 'Application Form Correction Last Date', date: '11 October 2026' },
    { label: 'Online Written Exam Start Date', date: 'From 19 November 2026 onwards', isHighlight: true },
    { label: 'Phase 2 Physical Proficiency Test (PET)', date: 'To Be Announced After Written Exam' }
  ],
  applicationFee: [
    { category: 'Unreserved (UR) / Non-MP Other State Candidates', amount: '₹700/- (₹500 Board + ₹200 Dept) + Portal Fee' },
    { category: 'MP Domicile SC / ST / OBC / EWS Candidates', amount: '₹350/- (₹250 Board + ₹100 Dept) + Portal Fee' },
    { category: 'MPOnline Kiosk Portal Charges', amount: '₹60/- (Citizen user login: ₹20/-)' },
    { category: 'Application Correction Fee', amount: '₹20/- + ₹40/- Portal Fee = ₹60/- per transaction' }
  ],
  vacancies: [
    { category: 'Constable (GD) – Special Armed Force (SAF - Male Only)', postCount: 700 },
    { category: 'Constable (GD) – District Executive Force (DEF - Male & Female)', postCount: 6800 }
  ],
  selectionProcess: [
    'Stage 1: Computer-Based Online Written Examination (100 Questions, 100 Marks, 2 Hours, No Negative Marking)',
    'Stage 2: Category-wise Shortlisting (7 times the advertised vacancies) for Physical Test based on Cut-Off Percentile',
    'Stage 3: Physical Proficiency Test (PET - Max 100 Marks, Minimum 30% Qualifying Marks required)',
    'Stage 4: Physical Measurement Test (PMT) & Document Verification (DV)',
    'Stage 5: Final Combined Merit List (Written T-Score + PET Marks)',
    'Stage 6: District Medical Examination & Police Character Verification'
  ],
  examPattern: [
    {
      stageName: 'Phase 1: Online Written Examination (CBT)',
      mode: 'Computer Based Test (Bilingual: Hindi & English)',
      duration: '2 Hours (120 Minutes)',
      negativeMarking: 'No Negative Marking (0 mark deducted for wrong answers)',
      subjects: [
        { name: 'सामान्य ज्ञान एवं तार्किक ज्ञान (General Knowledge & Logical Knowledge)', questions: 40, marks: 40 },
        { name: 'बौद्धिक क्षमता एवं मानसिक अभिरुचि (Intellectual Ability & Mental Aptitude)', questions: 30, marks: 30 },
        { name: 'विज्ञान एवं सरल अंक गणित (Science & Simple Arithmetic)', questions: 30, marks: 30 }
      ]
    },
    {
      stageName: 'Phase 2: Physical Proficiency Test (PET - Competitive Scoring)',
      mode: 'On-Ground Physical Evaluation',
      duration: 'Standard Athletic Trials',
      negativeMarking: 'N/A (Minimum 30 Marks Required to Qualify)',
      subjects: [
        { name: '800 Meter Run (Male: 1 attempt / Female: 1 attempt)', questions: 1, marks: 40 },
        { name: 'Long Jump / लम्बी कूद (3 attempts allowed)', questions: 1, marks: 30 },
        { name: 'Shot Put / गोला फेंक (Male: 7.26kg / Female: 4.00kg - 3 attempts)', questions: 1, marks: 30 }
      ]
    }
  ],
  allInformation: generateMpPoliceConstable50Sections()
};

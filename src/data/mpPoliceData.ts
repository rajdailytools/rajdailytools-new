import { ExamRecord, ExamInfoSection } from '../types/exam';

/**
 * Generates the official 50-Section expandable information for MP Police Constable Recruitment 2026.
 * Sole source of truth: Official MPESB Rulebook PCRT_GD_2026_RuleBook_09092026.pdf (Police Headquarters Letter No. Pu.Mu./2/Chayan/S-3/583/2026).
 * Includes detailed tables, eligibility/selection flowcharts, scoring rules, and labeled real-life examples.
 */
export function generateMpPoliceConstable50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. Recruitment Overview & Key Highlights',
      content: `<div class="space-y-3">
  <p>Madhya Pradesh Employees Selection Board (MPESB), Bhopal, on behalf of Police Headquarters, Home (Police) Department, Government of Madhya Pradesh, has officially published the Departmental Recruitment Rules and Examination Rulebook for the <strong>Police Constable (General Duty - G.D.) Recruitment Test 2026 (आरक्षक (जी.डी.) सीधी भर्ती चयन परीक्षा 2026)</strong> for a total of <strong>7,500 Vacancies</strong>.</p>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
    <div class="bg-blue-50/80 p-3 rounded-xl border border-blue-200/60">
      <span class="text-[11px] font-bold text-blue-700 uppercase block">Total Vacancies</span>
      <span class="text-lg font-black text-slate-900">7,500 Posts</span>
    </div>
    <div class="bg-emerald-50/80 p-3 rounded-xl border border-emerald-200/60">
      <span class="text-[11px] font-bold text-emerald-700 uppercase block">Application Window</span>
      <span class="text-sm font-black text-slate-900">22-09-2026 to 06-10-2026</span>
    </div>
    <div class="bg-indigo-50/80 p-3 rounded-xl border border-indigo-200/60">
      <span class="text-[11px] font-bold text-indigo-700 uppercase block">Pay Scale</span>
      <span class="text-sm font-black text-slate-900">₹19,500 – ₹62,000/-</span>
    </div>
  </div>
</div>`
    },
    {
      id: 2,
      title: '2. Examination Authority & Board Details',
      content: `<div class="space-y-2">
  <p><strong>Madhya Pradesh Employees Selection Board (म.प्र. कर्मचारी चयन मंडल, भोपाल)</strong></p>
  <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
    <li><strong>Campus Address:</strong> "Chayan Bhawan", Main Road No. 1, Chinar Park (East), Bhopal - 462011 (M.P.).</li>
    <li><strong>Helpline Phones:</strong> +91-755-2578801, 2578802 | Toll-Free: 1800 233 7899</li>
    <li><strong>Official Website:</strong> <a href="https://esb.mp.gov.in/e_default.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold">https://esb.mp.gov.in/</a></li>
    <li><strong>E-Complaint Portal:</strong> complaint.esb@mp.gov.in</li>
  </ul>
</div>`
    },
    {
      id: 3,
      title: '3. Requisition & Police Department Authority',
      content: `<div class="space-y-2">
  <p>The recruitment is notified pursuant to Police Headquarters, Madhya Pradesh, Bhopal Memo Letter No. <strong>पुमु/2/चयन/स-3/583/2026 dated 30/07/2026</strong> under the Home (Police) Department, Govt. of MP.</p>
  <p class="text-xs text-slate-600">Police headquarters oversees the departmental cadres, physical efficiency testing centers, medical boards, and final appointment postings.</p>
</div>`
    },
    {
      id: 4,
      title: '4. Official Rulebook & Notification PDF',
      content: `<div class="space-y-3">
  <p>The statutory rulebook (37 Pages) contains full departmental rules, reservation matrices, syllabus, physical scoring tables, and prescribed certificate formats.</p>
  <div class="p-3.5 bg-slate-100 rounded-xl border border-slate-200 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
    <div>
      <div class="font-bold text-slate-800">MPESB Rulebook: PCRT_GD_2026_RuleBook_09092026.pdf</div>
      <div class="text-[11px] text-slate-500">Official Release • 37 Pages PDF • Rulebook Reference RB_2026</div>
    </div>
    <a href="https://esb.mp.gov.in/Rulebooks/RB_2026/PCRT_GD_2026_RuleBook_09092026.pdf" target="_blank" rel="noopener noreferrer" class="px-3.5 py-1.5 bg-blue-600 text-white rounded-lg font-bold text-xs hover:bg-blue-700 transition-colors whitespace-nowrap">
      Download Official Rulebook
    </a>
  </div>
</div>`
    },
    {
      id: 5,
      title: '5. Important Dates & Schedule Timeline',
      content: `<div class="overflow-x-auto">
  <table class="w-full text-xs text-left border-collapse border border-slate-200">
    <thead class="bg-slate-100 text-slate-700 font-bold">
      <tr><th class="p-2.5 border border-slate-200">Event Description</th><th class="p-2.5 border border-slate-200">Official Date / Schedule</th><th class="p-2.5 border border-slate-200">Remarks</th></tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr><td class="p-2.5 border border-slate-200 font-semibold">Online Application Start Date</td><td class="p-2.5 border border-slate-200 text-blue-700 font-bold">22 September 2026 (22-09-2026)</td><td class="p-2.5 border border-slate-200">Via MP Online Portal</td></tr>
      <tr><td class="p-2.5 border border-slate-200 font-semibold">Online Application Last Date</td><td class="p-2.5 border border-slate-200 text-red-600 font-bold">06 October 2026 (06-10-2026)</td><td class="p-2.5 border border-slate-200">15 Days Application Period</td></tr>
      <tr><td class="p-2.5 border border-slate-200 font-semibold">Online Form Correction Window</td><td class="p-2.5 border border-slate-200">22-09-2026 to 11-10-2026</td><td class="p-2.5 border border-slate-200">20 Days Total Window</td></tr>
      <tr><td class="p-2.5 border border-slate-200 font-semibold">Written Exam (Phase 1) Start Date</td><td class="p-2.5 border border-slate-200 text-emerald-700 font-bold">19 November 2026 (19-11-2026) onwards</td><td class="p-2.5 border border-slate-200">Daily 2 shifts CBT</td></tr>
      <tr><td class="p-2.5 border border-slate-200 font-semibold">Physical Proficiency Test (Phase 2)</td><td class="p-2.5 border border-slate-200">Not Released / To Be Updated</td><td class="p-2.5 border border-slate-200">Organized by Police Dept</td></tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 6,
      title: '6. Shift Timings & Examination Day Schedule',
      content: `<div class="space-y-3">
  <p>The written computer-based online examination will be conducted across two daily shifts starting from <strong>19 November 2026</strong>:</p>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
      <div class="font-bold text-blue-800 text-sm">Shift 1 (First Shift - Morning)</div>
      <div><strong>Reporting Time:</strong> 08:00 AM to 09:00 AM</div>
      <div><strong>Instruction Reading:</strong> 09:50 AM to 10:00 AM (10 Minutes)</div>
      <div><strong>Exam Duration:</strong> 10:00 AM to 12:00 PM (2 Hours / 100 Marks)</div>
    </div>
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
      <div class="font-bold text-indigo-800 text-sm">Shift 2 (Second Shift - Afternoon)</div>
      <div><strong>Reporting Time:</strong> 01:00 PM to 02:00 PM</div>
      <div><strong>Instruction Reading:</strong> 02:50 PM to 03:00 PM (10 Minutes)</div>
      <div><strong>Exam Duration:</strong> 03:00 PM to 05:00 PM (2 Hours / 100 Marks)</div>
    </div>
  </div>
  <p class="text-xs text-red-600 font-semibold">Note: Late entry after reporting time closure is strictly barred. Multi-level biometric verification and Aadhaar authentication are compulsory at test centers.</p>
</div>`
    },
    {
      id: 7,
      title: '7. Cadre-wise Total Vacancy Distribution (7,500 Posts)',
      content: `<div class="space-y-3">
  <p>The recruitment comprises two primary cadres under Police Constable (General Duty):</p>
  <div class="overflow-x-auto">
    <table class="w-full text-xs text-left border-collapse border border-slate-200">
      <thead class="bg-slate-100 text-slate-700 font-bold">
        <tr><th class="p-2.5 border border-slate-200">S.No.</th><th class="p-2.5 border border-slate-200">Cadre & Arm</th><th class="p-2.5 border border-slate-200">Gender Eligibility</th><th class="p-2.5 border border-slate-200">Vacancies</th></tr>
      </thead>
      <tbody class="divide-y divide-slate-100 text-slate-800">
        <tr><td class="p-2.5 border border-slate-200">1</td><td class="p-2.5 border border-slate-200 font-bold">Constable (GD) – Special Armed Force (SAF / विसबल)</td><td class="p-2.5 border border-slate-200 font-semibold text-blue-700">Male Only (केवल पुरुष)</td><td class="p-2.5 border border-slate-200 font-bold">700 Posts</td></tr>
        <tr><td class="p-2.5 border border-slate-200">2</td><td class="p-2.5 border border-slate-200 font-bold">Constable (GD) – Other than SAF (DEF / जिला पुलिस बल)</td><td class="p-2.5 border border-slate-200 font-semibold text-emerald-700">Male & Female (पुरुष एवं महिला)</td><td class="p-2.5 border border-slate-200 font-bold">6,800 Posts</td></tr>
        <tr class="bg-blue-50/70 font-black"><td colspan="3" class="p-2.5 border border-slate-200 text-right">Grand Total:</td><td class="p-2.5 border border-slate-200 text-blue-800">7,500 Posts</td></tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 8,
      title: '8. Detailed Category-wise Vacancy: SAF (Special Armed Force - 700 Posts)',
      content: `<div class="space-y-3">
  <p class="text-xs text-slate-600">Constable (GD) SAF is exclusively for <strong>Male Candidates</strong>. Vacancies are segregated into 87% main part and 13% provisional part (provisional pending judicial determination of OBC reservation):</p>
  <div class="overflow-x-auto">
    <table class="w-full text-xs text-center border-collapse border border-slate-200">
      <thead class="bg-slate-100 text-slate-700 font-bold">
        <tr>
          <th class="p-2 border border-slate-200">Category</th>
          <th class="p-2 border border-slate-200">Open</th>
          <th class="p-2 border border-slate-200">Ex-Servicemen (10%)</th>
          <th class="p-2 border border-slate-200">Home Guard (15%)</th>
          <th class="p-2 border border-slate-200">Total (87%)</th>
          <th class="p-2 border border-slate-200">13% Provisional</th>
          <th class="p-2 border border-slate-200">Grand Total (100%)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100 text-slate-800">
        <tr><td class="p-2 border border-slate-200 font-bold text-left">Unreserved (UR)</td><td>142</td><td>19</td><td>28</td><td>189</td><td>91</td><td class="font-bold">280</td></tr>
        <tr><td class="p-2 border border-slate-200 font-bold text-left">SC (16%)</td><td>84</td><td>11</td><td>17</td><td>112</td><td>-</td><td class="font-bold">112</td></tr>
        <tr><td class="p-2 border border-slate-200 font-bold text-left">ST (20%)</td><td>105</td><td>14</td><td>21</td><td>140</td><td>-</td><td class="font-bold">140</td></tr>
        <tr><td class="p-2 border border-slate-200 font-bold text-left">OBC (14% + 13%)</td><td>74</td><td>10</td><td>14</td><td>98</td><td>91</td><td class="font-bold">189</td></tr>
        <tr><td class="p-2 border border-slate-200 font-bold text-left">EWS (10%)</td><td>52</td><td>7</td><td>11</td><td>70</td><td>-</td><td class="font-bold">70</td></tr>
        <tr class="bg-slate-50 font-black"><td class="p-2 border border-slate-200 text-left">Total</td><td>457</td><td>61</td><td>91</td><td>609</td><td>91</td><td class="text-blue-700">700</td></tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 9,
      title: '9. Detailed Category-wise Vacancy: DEF (Other than SAF - 6,800 Posts)',
      content: `<div class="space-y-3">
  <p class="text-xs text-slate-600">Constable (GD) Non-SAF (District Executive Force / Rail Police) is open for both Male and Female candidates with <strong>35% horizontal reservation for females</strong>:</p>
  <div class="overflow-x-auto">
    <table class="w-full text-xs text-center border-collapse border border-slate-200">
      <thead class="bg-slate-100 text-slate-700 font-bold">
        <tr>
          <th class="p-2 border border-slate-200">Category</th>
          <th class="p-2 border border-slate-200">Open</th>
          <th class="p-2 border border-slate-200">Ex-Servicemen (10%)</th>
          <th class="p-2 border border-slate-200">Home Guard (15%)</th>
          <th class="p-2 border border-slate-200">Female (35%)</th>
          <th class="p-2 border border-slate-200">Total (87%)</th>
          <th class="p-2 border border-slate-200">13% Prov.</th>
          <th class="p-2 border border-slate-200">Total (100%)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100 text-slate-800">
        <tr><td class="p-2 border border-slate-200 font-bold text-left">UR</td><td>735</td><td>183</td><td>276</td><td>642</td><td>1836</td><td>884</td><td class="font-bold">2720</td></tr>
        <tr><td class="p-2 border border-slate-200 font-bold text-left">SC (16%)</td><td>435</td><td>109</td><td>163</td><td>381</td><td>1088</td><td>-</td><td class="font-bold">1088</td></tr>
        <tr><td class="p-2 border border-slate-200 font-bold text-left">ST (20%)</td><td>544</td><td>136</td><td>204</td><td>476</td><td>1360</td><td>-</td><td class="font-bold">1360</td></tr>
        <tr><td class="p-2 border border-slate-200 font-bold text-left">OBC (14%+13%)</td><td>381</td><td>95</td><td>143</td><td>333</td><td>952</td><td>884</td><td class="font-bold">1836</td></tr>
        <tr><td class="p-2 border border-slate-200 font-bold text-left">EWS (10%)</td><td>272</td><td>68</td><td>102</td><td>238</td><td>680</td><td>-</td><td class="font-bold">680</td></tr>
        <tr class="bg-slate-50 font-black"><td class="p-2 border border-slate-200 text-left">Total</td><td>2367</td><td>591</td><td>888</td><td>2070</td><td>5916</td><td>884</td><td class="text-blue-700">6800</td></tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 10,
      title: '10. Minimum Educational Qualification Requirements',
      content: `<div class="space-y-3">
  <p>Educational qualification must be acquired on or before the application closing date <strong>(06/10/2026)</strong>:</p>
  <div class="overflow-x-auto">
    <table class="w-full text-xs text-left border-collapse border border-slate-200">
      <thead class="bg-slate-100 text-slate-700 font-bold">
        <tr><th class="p-2.5 border border-slate-200">Category</th><th class="p-2.5 border border-slate-200">Essential Educational Qualification</th></tr>
      </thead>
      <tbody class="divide-y divide-slate-100 text-slate-800">
        <tr><td class="p-2.5 border border-slate-200 font-bold">Unreserved (UR), SC, OBC, EWS</td><td class="p-2.5 border border-slate-200">Passed <strong>10th Class (Matriculation)</strong> under the 10+2 system OR Higher Secondary (10+2) or equivalent from a recognized Board/Institution.</td></tr>
        <tr><td class="p-2.5 border border-slate-200 font-bold text-indigo-700">Scheduled Tribes (ST / अजजा)</td><td class="p-2.5 border border-slate-200">Passed <strong>8th Class (कक्षा 8वीं)</strong> or equivalent examination from a recognized school/institution.</td></tr>
      </tbody>
    </table>
  </div>
  <p class="text-xs text-slate-500 italic">Candidates acquiring qualifications after 06/10/2026 will not be eligible.</p>
</div>`
    },
    {
      id: 11,
      title: '11. Age Limit Criteria (Crucial Date: 06/10/2026)',
      content: `<div class="space-y-3">
  <p>The calculation of age will be strictly reckoned as on the last date of online application submission: <strong>06 October 2026 (06/10/2026)</strong>.</p>
  <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
    <li><strong>Minimum Age:</strong> 18 Years for all categories.</li>
    <li><strong>Maximum Age for UR Male (MP & Other States) / EWS Male:</strong> 33 Years.</li>
    <li><strong>Maximum Age for Female Candidates (All Categories):</strong> 38 Years (33 + 5 years).</li>
    <li><strong>Maximum Age for SC / ST / OBC Male Candidates (MP Domicile):</strong> 38 Years (33 + 5 years).</li>
    <li><strong>Govt./Corporation Employees / Home Guards of MP:</strong> 38 Years.</li>
    <li><strong>Inter-caste Marriage Scheme Awardees:</strong> Additional 5 Years relaxation (Up to 43 Years).</li>
    <li><strong>Vikram Award Winners:</strong> Additional 5 Years relaxation (Up to 38 for UR Male, 43 for Reserved/Female).</li>
  </ul>
</div>`
    },
    {
      id: 12,
      title: '12. Age Relaxation Matrix for MP Domicile & Other States',
      content: `<div class="overflow-x-auto">
  <table class="w-full text-xs text-left border-collapse border border-slate-200">
    <thead class="bg-slate-100 text-slate-700 font-bold">
      <tr><th class="p-2 border border-slate-200">Candidate Category & Status</th><th class="p-2 border border-slate-200">Domicile Status</th><th class="p-2 border border-slate-200">Maximum Age Limit</th></tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr><td class="p-2 border border-slate-200">Male (Unreserved)</td><td class="p-2 border border-slate-200">MP Domicile</td><td class="p-2 border border-slate-200 font-bold">33 Years</td></tr>
      <tr><td class="p-2 border border-slate-200">Male (EWS)</td><td class="p-2 border border-slate-200">MP Domicile</td><td class="p-2 border border-slate-200 font-bold">33 Years</td></tr>
      <tr><td class="p-2 border border-slate-200">All Candidates (Male / Female)</td><td class="p-2 border border-slate-200 text-amber-800 font-semibold">Other States (Non-MP)</td><td class="p-2 border border-slate-200 font-bold text-red-600">33 Years (Strictly UR Open)</td></tr>
      <tr><td class="p-2 border border-slate-200">Female (All Categories - UR/OBC/SC/ST/EWS)</td><td class="p-2 border border-slate-200">MP Domicile</td><td class="p-2 border border-slate-200 font-bold text-emerald-700">38 Years</td></tr>
      <tr><td class="p-2 border border-slate-200">Male (SC / ST / OBC)</td><td class="p-2 border border-slate-200">MP Domicile</td><td class="p-2 border border-slate-200 font-bold text-emerald-700">38 Years</td></tr>
      <tr><td class="p-2 border border-slate-200">Vikram Awardee / Inter-caste Awardee Female</td><td class="p-2 border border-slate-200">MP Domicile</td><td class="p-2 border border-slate-200 font-bold text-indigo-700">43 Years (38 + 5)</td></tr>
    </tbody>
  </table>
</div>
<div class="mt-2 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-800">
  <strong>Important Domicile Rule:</strong> Candidates residing outside Madhya Pradesh are eligible only under Unreserved (UR) Open category with maximum age 33 years. No caste or category relaxation applies to non-domicile candidates.
</div>`
    },
    {
      id: 13,
      title: '13. Real-Life Example: Age & Domicile Eligibility Calculation',
      content: `<div class="space-y-3">
  <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
    <div class="font-bold text-blue-700 uppercase tracking-wide">Example: Evaluating Cut-off Age Scenarios</div>
    <div class="space-y-1.5 text-slate-700">
      <p><strong>Candidate A:</strong> Born on 15-08-1992, OBC category, native of Uttar Pradesh. As on 06-10-2026, Candidate A is 34 years 1 month old. Because Candidate A does not hold MP Domicile, they are treated as UR Open with a maximum age cap of 33 years. <em>Status: Ineligible due to age limit.</em></p>
      <p><strong>Candidate B:</strong> Born on 10-09-1990, OBC category, native resident of Jabalpur (MP). As on 06-10-2026, Candidate B is 36 years 1 month old. As an MP Domicile OBC applicant, the age cap is 38 years. <em>Status: Eligible under MP OBC category.</em></p>
      <p><strong>Candidate C:</strong> Female applicant, general category, native of Indore (MP), born on 01-01-1989. Age on 06-10-2026 is 37 years 9 months. Under MP Govt rules, all female residents of MP receive 5 years relaxation (up to 38 years). <em>Status: Eligible.</em></p>
    </div>
  </div>
  <p class="text-[11px] text-slate-500 italic">Note: These scenarios illustrate application of official rules and are labeled for clarity.</p>
</div>`
    },
    {
      id: 14,
      title: '14. Mandatory MP Rojgar Karyalaya Registration',
      content: `<div class="space-y-2">
  <p>As per Note 11 of the official rulebook: <strong>"उपरोक्त सभी पदों के लिए अभ्यर्थियों का मध्य प्रदेश राज्य के रोजगार कार्यालय में जीवित पंजीयन होना अनिवार्य होगा।"</strong></p>
  <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
    <li>Candidates must have an active and valid registration on the MP State Employment Portal (<a href="https://mprozgar.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">mprozgar.gov.in</a>) before submitting the application.</li>
    <li>The active registration number must be entered accurately during the online application process.</li>
    <li>Expired or invalid employment registration cards will lead to cancellation of candidature during document verification.</li>
  </ul>
</div>`
    },
    {
      id: 15,
      title: '15. Detailed Examination & Departmental Fee Structure',
      content: `<div class="overflow-x-auto">
  <table class="w-full text-xs text-left border-collapse border border-slate-200">
    <thead class="bg-slate-100 text-slate-700 font-bold">
      <tr>
        <th class="p-2 border border-slate-200">Category</th>
        <th class="p-2 border border-slate-200">Board Exam Fee</th>
        <th class="p-2 border border-slate-200">Police Dept Fee</th>
        <th class="p-2 border border-slate-200">Total Govt Fee</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-2 border border-slate-200 font-bold">Unreserved (UR) / Non-MP Candidates</td>
        <td class="p-2 border border-slate-200">₹500/-</td>
        <td class="p-2 border border-slate-200">₹200/-</td>
        <td class="p-2 border border-slate-200 font-bold text-blue-700">₹700/-</td>
      </tr>
      <tr>
        <td class="p-2 border border-slate-200 font-bold">MP Domicile SC / ST / OBC / EWS</td>
        <td class="p-2 border border-slate-200">₹250/-</td>
        <td class="p-2 border border-slate-200">₹100/-</td>
        <td class="p-2 border border-slate-200 font-bold text-emerald-700">₹350/-</td>
      </tr>
      <tr>
        <td class="p-2 border border-slate-200 font-bold">Direct Recruitment Backlog Posts</td>
        <td class="p-2 border border-slate-200">Nil (निरंक)</td>
        <td class="p-2 border border-slate-200">Nil (निरंक)</td>
        <td class="p-2 border border-slate-200 font-bold">₹0/-</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
  <div><strong>MP Online Portal Service Charges:</strong></div>
  <div>• Application filled via Authorized MP Online Kiosk: <strong>₹60/-</strong></div>
  <div>• Application filled via Registered Citizen User Login: <strong>₹20/-</strong></div>
  <div>• Online Application Form Correction Fee: <strong>₹20/- per correction + ₹40/- portal charge</strong></div>
</div>`
    },
    {
      id: 16,
      title: '16. Pay Scale, Salary Structure & Probation Stipend System',
      content: `<div class="space-y-3">
  <p>Selected Constable (GD) personnel are appointed in the pay scale of <strong>₹19,500 – ₹62,000/-</strong> (Level-4).</p>
  <p class="text-xs text-slate-600">As per MP Government General Administration Department (GAD) circular dated 12 December 2019, appointment is subject to a 3-year probation period with phased stipends:</p>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
    <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
      <div class="font-bold text-slate-500 uppercase">1st Year Probation</div>
      <div class="text-base font-black text-blue-700 mt-1">70% Stipend</div>
      <div class="text-[11px] text-slate-500">of minimum basic pay + DA/allowances</div>
    </div>
    <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
      <div class="font-bold text-slate-500 uppercase">2nd Year Probation</div>
      <div class="text-base font-black text-indigo-700 mt-1">80% Stipend</div>
      <div class="text-[11px] text-slate-500">of minimum basic pay + DA/allowances</div>
    </div>
    <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
      <div class="font-bold text-slate-500 uppercase">3rd Year Probation</div>
      <div class="text-base font-black text-emerald-700 mt-1">90% Stipend</div>
      <div class="text-[11px] text-slate-500">of minimum basic pay + DA/allowances</div>
    </div>
  </div>
  <p class="text-xs text-slate-600">After successful completion of 3 years probation, full regular scale with Dearness Allowance (DA), House Rent Allowance (HRA), Ration Allowance, Uniform Allowance, and defined contributory pension will be paid.</p>
</div>`
    },
    {
      id: 17,
      title: '17. Two-Stage Selection Process Architecture',
      content: `<div class="space-y-3">
  <p>The recruitment is executed through a two-stage competitive examination framework:</p>
  <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs">
    <div class="flex items-start gap-3">
      <span class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">1</span>
      <div>
        <div class="font-bold text-slate-900 text-sm">Stage 1: Written Examination (Computer Based Test - CBT)</div>
        <p class="text-slate-600 mt-0.5">Conducted by MPESB. 100 Objective MCQs, 100 Marks, 2 Hours. Assesses General Knowledge, Reasoning, Mental Aptitude, Science & Arithmetic. Normalised Equi-Percentile (NEP) scaling applied.</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <span class="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0">2</span>
      <div>
        <div class="font-bold text-slate-900 text-sm">Stage 2: Physical Proficiency Test (PPT) & Document Verification</div>
        <p class="text-slate-600 mt-0.5">Conducted under Police Headquarters supervision. <strong>7 times the vacancies</strong> shortlisted. Evaluates 800m Run, Long Jump, Shot Put (Total 100 Marks). Minimum 30% marks mandatory in PPT.</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <span class="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold shrink-0">3</span>
      <div>
        <div class="font-bold text-slate-900 text-sm">Stage 3: Physical Standards (PST), Medical & Police Character Verification</div>
        <p class="text-slate-600 mt-0.5">District Medical Board evaluation (vision, knock-knee, flat-foot) and character/antecedent verification as per Supreme Court & MP Govt rules.</p>
      </div>
    </div>
  </div>
</div>`
    },
    {
      id: 18,
      title: '18. Selection Process Visual Flowchart',
      content: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
  <div class="font-bold text-slate-900 mb-3 text-center text-sm">MP Police Constable 2026 Selection Journey</div>
  <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center">
    <div class="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
      <div class="font-black text-blue-600">STEP 1</div>
      <div class="font-bold mt-1 text-slate-800">Online Application</div>
      <div class="text-[11px] text-slate-500 mt-0.5">22 Sep - 06 Oct 2026 via MP Online</div>
    </div>
    <div class="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
      <div class="font-black text-indigo-600">STEP 2</div>
      <div class="font-bold mt-1 text-slate-800">Phase 1 Written CBT</div>
      <div class="text-[11px] text-slate-500 mt-0.5">100 Marks, 100 MCQs, 7x Shortlisting</div>
    </div>
    <div class="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
      <div class="font-black text-emerald-600">STEP 3</div>
      <div class="font-bold mt-1 text-slate-800">Phase 2 PPT (100 Mks)</div>
      <div class="text-[11px] text-slate-500 mt-0.5">Run, Long Jump, Shot Put + DV</div>
    </div>
    <div class="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
      <div class="font-black text-purple-600">STEP 4</div>
      <div class="font-bold mt-1 text-slate-800">Final Merit & Posting</div>
      <div class="text-[11px] text-slate-500 mt-0.5">CBT T-Score + PPT Score (Total Merit)</div>
    </div>
  </div>
</div>`
    },
    {
      id: 19,
      title: '19. Phase 1 Written Exam Pattern (100 Questions, 100 Marks)',
      content: `<div class="space-y-3">
  <p>The written examination consists of a single objective question paper conducted online via CBT:</p>
  <div class="overflow-x-auto">
    <table class="w-full text-xs text-left border-collapse border border-slate-200">
      <thead class="bg-slate-100 text-slate-700 font-bold">
        <tr><th class="p-2.5 border border-slate-200">Section</th><th class="p-2.5 border border-slate-200">Subject Area (विषय)</th><th class="p-2.5 border border-slate-200">Questions</th><th class="p-2.5 border border-slate-200">Marks</th></tr>
      </thead>
      <tbody class="divide-y divide-slate-100 text-slate-800">
        <tr><td class="p-2.5 border border-slate-200 font-bold">(अ)</td><td class="p-2.5 border border-slate-200">General Knowledge & Logical Knowledge (सामान्य ज्ञान एवं तार्किक ज्ञान)</td><td class="p-2.5 border border-slate-200">40</td><td class="p-2.5 border border-slate-200 font-bold">40 Marks</td></tr>
        <tr><td class="p-2.5 border border-slate-200 font-bold">(ब)</td><td class="p-2.5 border border-slate-200">Intellectual Ability & Mental Aptitude (बौद्धिक क्षमता एवं मानसिक अभिरुचि)</td><td class="p-2.5 border border-slate-200">30</td><td class="p-2.5 border border-slate-200 font-bold">30 Marks</td></tr>
        <tr><td class="p-2.5 border border-slate-200 font-bold">(स)</td><td class="p-2.5 border border-slate-200">Science & Simple Arithmetic (विज्ञान एवं सरल अंक गणित)</td><td class="p-2.5 border border-slate-200">30</td><td class="p-2.5 border border-slate-200 font-bold">30 Marks</td></tr>
        <tr class="bg-slate-50 font-black"><td colspan="2" class="p-2.5 border border-slate-200 text-right">Total:</td><td class="p-2.5 border border-slate-200">100 MCQs</td><td class="p-2.5 border border-slate-200 text-blue-700">100 Marks</td></tr>
      </tbody>
    </table>
  </div>
  <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
    <li><strong>Duration:</strong> 2 Hours (120 Minutes).</li>
    <li><strong>Standard of Questions:</strong> 8th Class Level of MP Board of Secondary Education (म.प्र. माध्यमिक शिक्षा मण्डल की 8वीं कक्षा के स्तर के होंगे).</li>
    <li><strong>Negative Marking:</strong> <strong>NO Negative Marking</strong> (+1 mark for correct, 0 for wrong/unattempted).</li>
  </ul>
</div>`
    },
    {
      id: 20,
      title: '20. Detailed Syllabus Breakdown by Subject Area',
      content: `<div class="space-y-3">
  <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5">
    <div class="font-bold text-slate-900 text-sm">General Knowledge & Reasoning (40 Marks)</div>
    <p class="text-slate-700">Madhya Pradesh Geography, History, Culture, Festivals, Rivers, Sanctuaries, Major Personalities, Indian Polity, Constitution, Current Affairs, Books & Authors, Awards, Basic Economic Indicators, Analogy, Series, Classification, Coding-Decoding, Blood Relations, Direction Sense, Venn Diagrams, and Syllogism.</p>
  </div>
  <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5">
    <div class="font-bold text-slate-900 text-sm">Intellectual Ability & Mental Aptitude (30 Marks)</div>
    <p class="text-slate-700">Logical puzzles, Non-verbal reasoning, Pattern completion, Mirror & Water images, Paper folding/cutting, Cube & Dice, Statement & Assumptions, Critical judgment, and Spatial visualization.</p>
  </div>
  <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5">
    <div class="font-bold text-slate-900 text-sm">Science & Simple Arithmetic (30 Marks)</div>
    <p class="text-slate-700"><strong>General Science (Physics, Chemistry, Biology):</strong> Everyday science, human body systems, nutrition, diseases, basic mechanics, light, sound, acids & bases.<br /><strong>Simple Arithmetic:</strong> Number systems, LCM & HCF, Simplification, Ratio & Proportion, Percentage, Profit & Loss, Simple & Compound Interest, Average, Time & Work, Speed, Time & Distance, Mensuration (2D/3D).</p>
  </div>
</div>`
    },
    {
      id: 21,
      title: '21. Shortlisting Ratio for Phase 2: Seven Times (7x) Rule',
      content: `<div class="space-y-2 text-xs text-slate-700">
  <p>As per Rule 9(i)(घ) & 11(iii): <strong>"वर्टिकल श्रेणी के विज्ञापित पदों के विरुद्ध सात गुना अभ्यर्थियों को कट-ऑफ़ परसेंटाईल अनुसार आरक्षक (जीडी) पद हेतु शारीरिक दक्षता परीक्षण के लिए चुना जाएगा।"</strong></p>
  <ul class="list-disc pl-5 space-y-1">
    <li>Candidates equivalent to <strong>7 times the category-wise advertised vacancies</strong> will be invited for Phase 2 PPT.</li>
    <li>A unified cut-off percentile will be established across SAF and Non-SAF cadres.</li>
    <li>All candidates scoring marks/percentile equal to the cut-off threshold will be summoned, even if the total count exceeds 7 times.</li>
  </ul>
</div>`
    },
    {
      id: 22,
      title: '22. Multi-Stage Normalisation & NEP Scaling System',
      content: `<div class="space-y-3">
  <p>As per MPESB Order No. 11-80/2013/08/P-2/625/2025 dated 24/01/2025, when a competitive test is conducted across multiple shifts followed by a physical evaluation, <strong>Normalised Equi-Percentile (NEP) Scaling</strong> is applied:</p>
  <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
    <div><strong>Step 1:</strong> Calculate shift-wise candidate percentile score (Pij).</div>
    <div><strong>Step 2:</strong> Compute equivalent z-value using Standard Normal Distribution: <code>z = ROUND(NORMSINV(Pij/100 - 0.0000005), 6)</code></div>
    <div><strong>Step 3:</strong> Compute T-Score: <code>Tij = Assumed Mean + (Assumed Std Dev * z)</code>, where Assumed Mean = Max Marks / 2 (50), Assumed Std Dev = Max Marks / 10 (10).</div>
    <div><strong>Step 4:</strong> Final Combined Score = <code>T-score + Physical Test Score</code>.</div>
  </div>
</div>`
    },
    {
      id: 23,
      title: '23. Real-Life Example: Calculating Normalised T-Score + PPT Final Score',
      content: `<div class="space-y-3">
  <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
    <div class="font-bold text-blue-700 uppercase tracking-wide">Example: Final Merit Score Computation</div>
    <div class="space-y-1.5 text-slate-700">
      <p><strong>Candidate X</strong> appears in Shift 1 (a tough paper). Candidate raw score is 74/100, which corresponds to the 97.5th percentile in their shift.</p>
      <p>• Calculated z-value: ~1.96<br />• T-Score: 50 + (10 × 1.96) = <strong>69.60 Marks</strong>.<br />• Physical Efficiency Test (PPT): Candidate X clocks 800m in 143 sec (29 mks), jumps 5.25m (26 mks), and throws shot-put 8.30m (26 mks) = <strong>81 Marks</strong>.<br />• <strong>Final Total Score for Merit:</strong> 69.60 + 81 = <strong>150.60 Marks</strong>.</p>
    </div>
  </div>
  <p class="text-[11px] text-slate-500 italic">Note: Demonstrative computation based on official Rulebook formulas.</p>
</div>`
    },
    {
      id: 24,
      title: '24. Bonus Marks Provision (5% Extra Marks for Eligible Categories)',
      content: `<div class="space-y-2 text-xs text-slate-700">
  <p>As per GAD MP circular dated 06 April 2023, eligible categories receive <strong>5% extra marks (5 अतिरिक्त अंक)</strong> added to written test marks:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li>Dependents of martyred soldiers in Indo-Pak conflicts (Max 2 dependents).</li>
    <li>Demobilised Defence forces personnel (Ex-servicemen - other ranks).</li>
    <li>Surplus election/census employees of 1981 / 1990.</li>
    <li>Work-charged / contingency paid employees.</li>
    <li><strong>National Cadet Corps (NCC) 'C' Certificate Holders</strong>.</li>
    <li>Repatriated Indian citizens from Myanmar (Burma) and Sri Lanka.</li>
  </ul>
</div>`
    },
    {
      id: 25,
      title: '25. Physical Standards Test (PST) - Height & Chest Criteria',
      content: `<div class="space-y-3">
  <p>Candidates must fulfill the minimum bodily measurements. No relaxation in physical standards is permissible:</p>
  <div class="overflow-x-auto">
    <table class="w-full text-xs text-left border-collapse border border-slate-200">
      <thead class="bg-slate-100 text-slate-700 font-bold">
        <tr><th class="p-2 border border-slate-200">Cadre / Arm</th><th class="p-2 border border-slate-200">Category</th><th class="p-2 border border-slate-200">Gender</th><th class="p-2 border border-slate-200">Min Height</th><th class="p-2 border border-slate-200">Chest (Unexpanded - Expanded)</th></tr>
      </thead>
      <tbody class="divide-y divide-slate-100 text-slate-800">
        <tr><td class="p-2 border border-slate-200 font-bold" rowspan="3">SAF (विसबल)</td><td>UR / OBC</td><td>Male</td><td>168 cm</td><td>79 cm - 84 cm (Min 5 cm expansion)</td></tr>
        <tr><td>Gorkha / Garhwali / Kumaoni</td><td>Male</td><td>157 cm</td><td>79 cm - 84 cm</td></tr>
        <tr><td>Maratha / SC / ST</td><td>Male</td><td>165 cm</td><td>79 cm - 84 cm</td></tr>
        <tr><td class="p-2 border border-slate-200 font-bold" rowspan="3">DEF (Non-SAF)</td><td>UR / SC / OBC</td><td>Male</td><td>168 cm</td><td>81 cm - 86 cm (Min 5 cm expansion)</td></tr>
        <tr><td>UR / SC / OBC</td><td>Female</td><td>155 cm</td><td>Not Applicable</td></tr>
        <tr><td>Scheduled Tribes (ST)</td><td>Male</td><td>160 cm</td><td>76 cm - 81 cm (Min 5 cm expansion)</td></tr>
        <tr><td class="p-2 border border-slate-200 font-bold">DEF (Non-SAF)</td><td>Scheduled Tribes (ST)</td><td>Female</td><td>155 cm</td><td>Not Applicable</td></tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 26,
      title: '26. Physical Proficiency Test (PPT) Scheme - 100 Maximum Marks',
      content: `<div class="space-y-3">
  <p>The Physical Proficiency Test (द्वितीय चरण) carries <strong>100 Marks</strong> distributed across three events:</p>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
    <div class="p-3 bg-blue-50 rounded-xl border border-blue-200 text-xs">
      <div class="font-bold text-blue-900">1. 800 Metre Run</div>
      <div class="text-sm font-black text-blue-700 mt-1">Max 40 Marks</div>
      <div class="text-[11px] text-slate-600 mt-0.5"><strong>Only 1 Attempt allowed</strong>. Timed electronically.</div>
    </div>
    <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs">
      <div class="font-bold text-emerald-900">2. Long Jump (लम्बी कूद)</div>
      <div class="text-sm font-black text-emerald-700 mt-1">Max 30 Marks</div>
      <div class="text-[11px] text-slate-600 mt-0.5"><strong>3 Attempts allowed</strong>. Best jump considered.</div>
    </div>
    <div class="p-3 bg-indigo-50 rounded-xl border border-indigo-200 text-xs">
      <div class="font-bold text-indigo-900">3. Shot Put (गोला फेंक)</div>
      <div class="text-sm font-black text-indigo-700 mt-1">Max 30 Marks</div>
      <div class="text-[11px] text-slate-600 mt-0.5"><strong>3 Attempts allowed</strong>. Male: 7.26 kg, Female: 4.00 kg.</div>
    </div>
  </div>
  <p class="text-xs text-red-600 font-bold">Mandatory Qualifying Score: Candidates must score a minimum of 30% marks (30 marks out of 100) in PPT to be considered for final merit list.</p>
</div>`
    },
    {
      id: 27,
      title: '27. Male Physical Proficiency Marks Table (Schedule-1 / अनुसूची-एक)',
      content: `<div class="space-y-3">
  <p class="text-xs text-slate-600">Marks award matrix for Male candidates (800m Run, Long Jump, Shot Put 7.26 kg):</p>
  <div class="overflow-x-auto max-h-72 overflow-y-auto border border-slate-200 rounded-xl">
    <table class="w-full text-xs text-center border-collapse">
      <thead class="bg-slate-100 text-slate-700 font-bold sticky top-0">
        <tr><th class="p-2 border">Marks</th><th class="p-2 border">800m Run (Seconds)</th><th class="p-2 border">Long Jump (Metres)</th><th class="p-2 border">Shot Put (7.26 kg)</th></tr>
      </thead>
      <tbody class="divide-y divide-slate-100 text-slate-800">
        <tr><td class="p-1.5 border font-bold">0</td><td>Above 198.3 s</td><td>Below 2.96 m</td><td>Below 3.83 m</td></tr>
        <tr><td class="p-1.5 border font-bold">5</td><td>188.8 to 190.7 s</td><td>3.32 to 3.41 m</td><td>4.51 to 4.68 m</td></tr>
        <tr><td class="p-1.5 border font-bold">10</td><td>179.3 to 181.2 s</td><td>3.77 to 3.86 m</td><td>5.36 to 5.53 m</td></tr>
        <tr><td class="p-1.5 border font-bold">15</td><td>169.8 to 171.7 s</td><td>4.22 to 4.31 m</td><td>6.21 to 6.38 m</td></tr>
        <tr><td class="p-1.5 border font-bold">20</td><td>160.3 to 162.2 s</td><td>4.67 to 4.76 m</td><td>7.06 to 7.23 m</td></tr>
        <tr><td class="p-1.5 border font-bold">25</td><td>150.8 to 152.7 s</td><td>5.12 to 5.21 m</td><td>7.91 to 8.08 m</td></tr>
        <tr><td class="p-1.5 border font-bold">30</td><td>141.3 to 143.2 s</td><td>5.57 m or more (Max 30)</td><td>8.76 m or more (Max 30)</td></tr>
        <tr><td class="p-1.5 border font-bold">35</td><td>131.8 to 133.7 s</td><td>-</td><td>-</td></tr>
        <tr class="bg-blue-50/60 font-bold"><td class="p-1.5 border">40 (Max)</td><td>Less than 124.2 s</td><td>-</td><td>-</td></tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 28,
      title: '28. Female Physical Proficiency Marks Table (Schedule-1 / अनुसूची-एक)',
      content: `<div class="space-y-3">
  <p class="text-xs text-slate-600">Marks award matrix for Female candidates (800m Run, Long Jump, Shot Put 4.00 kg):</p>
  <div class="overflow-x-auto max-h-72 overflow-y-auto border border-slate-200 rounded-xl">
    <table class="w-full text-xs text-center border-collapse">
      <thead class="bg-slate-100 text-slate-700 font-bold sticky top-0">
        <tr><th class="p-2 border">Marks</th><th class="p-2 border">800m Run (Seconds)</th><th class="p-2 border">Long Jump (Metres)</th><th class="p-2 border">Shot Put (4.00 kg)</th></tr>
      </thead>
      <tbody class="divide-y divide-slate-100 text-slate-800">
        <tr><td class="p-1.5 border font-bold">0</td><td>Above 261.8 s</td><td>Below 2.04 m</td><td>Below 2.85 m</td></tr>
        <tr><td class="p-1.5 border font-bold">5</td><td>250.8 to 253.0 s</td><td>2.36 to 2.44 m</td><td>3.45 to 3.60 m</td></tr>
        <tr><td class="p-1.5 border font-bold">10</td><td>239.8 to 242.0 s</td><td>2.76 to 2.84 m</td><td>4.20 to 4.35 m</td></tr>
        <tr><td class="p-1.5 border font-bold">15</td><td>228.8 to 231.0 s</td><td>3.16 to 3.24 m</td><td>4.95 to 5.10 m</td></tr>
        <tr><td class="p-1.5 border font-bold">20</td><td>217.8 to 220.0 s</td><td>3.56 to 3.64 m</td><td>5.70 to 5.85 m</td></tr>
        <tr><td class="p-1.5 border font-bold">25</td><td>206.8 to 209.0 s</td><td>3.96 to 4.04 m</td><td>6.45 to 6.60 m</td></tr>
        <tr><td class="p-1.5 border font-bold">30</td><td>195.8 to 198.0 s</td><td>4.36 m or more (Max 30)</td><td>7.20 m or more (Max 30)</td></tr>
        <tr><td class="p-1.5 border font-bold">35</td><td>184.8 to 187.0 s</td><td>-</td><td>-</td></tr>
        <tr class="bg-emerald-50/60 font-bold"><td class="p-1.5 border">40 (Max)</td><td>Less than 176.0 s</td><td>-</td><td>-</td></tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 29,
      title: '29. Relaxed Physical Standards for Home Guards & Ex-Servicemen',
      content: `<div class="space-y-3">
  <p class="text-xs text-slate-700">Home Guards (with 3 years active service) and Ex-Servicemen receive relaxed benchmarks for all three physical proficiency events:</p>
  <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
    <li><strong>Male Ex-Servicemen / Home Guards:</strong> 800m run (0 marks if above 224.5 s; 30 marks for 164.5 - 166.5 s; 40 marks for &lt;146.5 s). Long jump max 30 marks for &gt;4.84m. Shot put 7.26kg max 30 marks for &gt;8.73m.</li>
    <li><strong>Female Ex-Servicemen / Home Guards:</strong> 800m run (0 marks if above 305.8 s; max 40 marks for &lt;220.0 s). Long jump max 30 marks for &gt;3.82m. Shot put 4.00kg max 30 marks for &gt;7.05m.</li>
  </ul>
</div>`
    },
    {
      id: 30,
      title: '30. Medical Standards & District Medical Board Examination',
      content: `<div class="space-y-3">
  <p>Candidates qualifying PPT must appear before the District Medical Board. Health standards include:</p>
  <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
    <li><strong>Distant Vision:</strong> Not less than 6/9 in one eye and 6/12 in the other eye without glasses.</li>
    <li><strong>Color Vision:</strong> Must be able to distinguish primary colors accurately (Ishihara Plates Test). No color blindness allowed.</li>
    <li><strong>Deformities:</strong> Free from Knock-Knee (नॉक-नी), Flat-Foot (फ्लैट फुट), squint, varicose veins, or stammering.</li>
    <li><strong>Appeals:</strong> In case of rejection, the candidate can appeal to the Divisional Medical Board. If divergence persists, the State Level Medical Board conducts final videographed evaluation.</li>
  </ul>
</div>`
    },
    {
      id: 31,
      title: '31. Document Verification Requirements & Checkpoints',
      content: `<div class="space-y-2 text-xs text-slate-700">
  <p>Original documents with self-attested photocopies must be produced during Phase 2 testing:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li>Date of Birth Proof: 10th / 8th Marksheet or Birth Certificate.</li>
    <li>Educational Certificates: 10th/12th/8th Marksheets and Passing Certificates.</li>
    <li>MP Domicile Certificate (मध्य प्रदेश मूल निवासी प्रमाण-पत्र).</li>
    <li>Caste Certificate for SC / ST / OBC (Non-Creamy Layer) / EWS Asset Certificate in prescribed Formats 2 to 6.</li>
    <li>Active MP Rojgar Karyalaya Registration Card.</li>
    <li>Home Guard / Ex-Servicemen Service Certificate / NOC from current employer (if serving).</li>
    <li>5 passport photos identical to the one uploaded in the application.</li>
  </ul>
</div>`
    },
    {
      id: 32,
      title: '32. Home Guard 15% Horizontal Reservation & Exemption Rules',
      content: `<div class="space-y-2 text-xs text-slate-700">
  <p>As per MP Home (Police) Dept Memo dated 31-01-1996 and 14-10-2004, <strong>15% horizontal reservation</strong> is allocated to Nagar Sainik (Home Guards):</p>
  <ul class="list-disc pl-5 space-y-1">
    <li>Must have completed 3 years continuous active service as on 06/10/2026.</li>
    <li>Home Guards are exempted from the Phase 1 Written Exam. Instead, service marks are awarded: 5 years service = 5 marks; 5 to 10 years = 10 marks; more than 10 years = 15 marks.</li>
    <li>7 times the Home Guard vacancies are invited for the Physical Proficiency Test. Final selection combines PPT marks + service length marks.</li>
  </ul>
</div>`
    },
    {
      id: 33,
      title: '33. Female 35% Horizontal Reservation Rules',
      content: `<div class="space-y-2 text-xs text-slate-700">
  <p>Under MP Gazette Notification dated 03 October 2023, <strong>35% horizontal reservation</strong> across all categories is provided for female candidates:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li>Applicable solely in Non-SAF (District Force / Rail Police) where 2,380 posts out of 6,800 are earmarked for women.</li>
    <li>SAF (Special Armed Force) is exclusively reserved for male personnel; female candidates are not considered for SAF.</li>
    <li>If eligible women candidates are unavailable in any category, those seats will be filled by open male candidates of the respective vertical category.</li>
  </ul>
</div>`
    },
    {
      id: 34,
      title: '34. Ex-Servicemen (ESM) 10% Reservation & Concessions',
      content: `<div class="space-y-2 text-xs text-slate-700">
  <p>As per GAD Notification dated 21-04-1999, <strong>10% horizontal reservation</strong> is earmarked for Ex-Servicemen:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li>Age deduction: Military service duration is subtracted from actual age; resultant age must not exceed prescribed upper limit by more than 3 years.</li>
    <li>Must have served at least 6 continuous months in Defence Forces and received a defense pension or medical discharge.</li>
    <li>Personnel of Central Paramilitary Forces (CRPF, BSF, ITBP, CISF) are not treated as Ex-Servicemen under these state rules.</li>
  </ul>
</div>`
    },
    {
      id: 35,
      title: '35. Other States (Non-MP) Candidate Rules & Limitations',
      content: `<div class="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1.5">
  <div class="font-bold">Guidelines for Candidates Residing Outside Madhya Pradesh:</div>
  <ul class="list-disc pl-5 space-y-1">
    <li>Eligible exclusively under <strong>Unreserved (UR) Open Category</strong>.</li>
    <li>Maximum age limit is strictly <strong>33 Years</strong> as on 06/10/2026. No age relaxation applies.</li>
    <li>No benefit of SC, ST, OBC, or EWS reservation is permissible, regardless of reserved status in their native state.</li>
    <li>Active registration on the MP State Employment Portal (<a href="https://mprozgar.gov.in" target="_blank" rel="noopener noreferrer" class="underline font-bold">mprozgar.gov.in</a>) is still mandatory.</li>
  </ul>
</div>`
    },
    {
      id: 36,
      title: '36. 13 Designated Online Examination Cities in Madhya Pradesh',
      content: `<div class="space-y-3">
  <p class="text-xs text-slate-600">The computer-based test will be organized across 13 authorized examination centers in MP. Candidates must choose 4 city preferences in order:</p>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
    <div class="p-2.5 bg-slate-50 border rounded-lg font-semibold">1. Anuppur (अनूपपुर)</div>
    <div class="p-2.5 bg-slate-50 border rounded-lg font-semibold">2. Barwani (बड़वानी)</div>
    <div class="p-2.5 bg-slate-50 border rounded-lg font-semibold">3. Bhopal (भोपाल)</div>
    <div class="p-2.5 bg-slate-50 border rounded-lg font-semibold">4. Indore (इन्दौर)</div>
    <div class="p-2.5 bg-slate-50 border rounded-lg font-semibold">5. Jabalpur (जबलपुर)</div>
    <div class="p-2.5 bg-slate-50 border rounded-lg font-semibold">6. Khandwa (खण्डवा)</div>
    <div class="p-2.5 bg-slate-50 border rounded-lg font-semibold">7. Neemuch (नीमच)</div>
    <div class="p-2.5 bg-slate-50 border rounded-lg font-semibold">8. Ratlam (रतलाम)</div>
    <div class="p-2.5 bg-slate-50 border rounded-lg font-semibold">9. Rewa (रीवा)</div>
    <div class="p-2.5 bg-slate-50 border rounded-lg font-semibold">10. Sagar (सागर)</div>
    <div class="p-2.5 bg-slate-50 border rounded-lg font-semibold">11. Satna (सतना)</div>
    <div class="p-2.5 bg-slate-50 border rounded-lg font-semibold">12. Sidhi (सीधी)</div>
    <div class="p-2.5 bg-slate-50 border rounded-lg font-semibold col-span-2 sm:col-span-1">13. Ujjain (उज्जैन)</div>
  </div>
</div>`
    },
    {
      id: 37,
      title: '37. Step-by-Step Online Application Process (MP Online Portal)',
      content: `<div class="space-y-3 text-xs text-slate-700">
  <p>Step-by-step instructions for submitting the online application via MP Online:</p>
  <ol class="list-decimal pl-5 space-y-1.5">
    <li><strong>Profile Creation:</strong> Complete candidate profile creation on the MP Online Citizen portal (<a href="https://esb.mponline.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">esb.mponline.gov.in</a>).</li>
    <li><strong>e-KYC & Aadhaar Authentication:</strong> Complete biometric or OTP-based Aadhaar authentication. Ensure Aadhaar is unlocked.</li>
    <li><strong>Rojgar Karyalaya Data:</strong> Input valid live MP Rojgar registration number and verification date.</li>
    <li><strong>Cadre & District Preferences:</strong> Select SAF / Non-SAF preferences and rank district units in order of priority.</li>
    <li><strong>Upload Photo & Signature:</strong> Upload the single composite image template with photo, clear signature, and 2-line handwritten declaration.</li>
    <li><strong>Fee Payment:</strong> Remit fees via Net Banking, UPI, or Debit/Credit card. Retain computer-generated receipt with Application Number.</li>
  </ol>
</div>`
    },
    {
      id: 38,
      title: '38. Photo, Signature & Handwritten Declaration Format Guidelines',
      content: `<div class="space-y-2 text-xs text-slate-700">
  <p>Specific imaging instructions under Rule 2.16:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li><strong>Photograph:</strong> Color photo with white background, taken within the last 3 months, with candidate name and date of photo imprinted at the bottom. Both ears must be clearly visible. Polaroids or dark spectacles are rejected.</li>
    <li><strong>Signature:</strong> Sign clearly below the photo. Initials or capital letter signatures are invalid.</li>
    <li><strong>Handwritten Declaration (हस्तलिपि घोषणा):</strong> Must write in own handwriting: <em>"मैं घोषणा करता/करती हूँ कि मेरे द्वारा आवेदन में दी गई समस्त जानकारी पूर्णतः सत्य है। यदि मेरे द्वारा दी गई जानकारी किसी भी स्तर पर झूठी या पात्रता मापदंड की आवश्यकताओं के अनुसार संतोषजनक नहीं पाई जाती है, तो मेरी उम्मीदवारी रद्द की जा सकती है।"</em></li>
  </ul>
</div>`
    },
    {
      id: 39,
      title: '39. Application Form Correction & Modification Window',
      content: `<div class="space-y-2 text-xs text-slate-700">
  <p>Corrections are permissible online from <strong>22-09-2026 to 11-10-2026</strong>:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li>Fee: ₹20/- per modification + ₹40/- portal fee.</li>
    <li>Modifications are permitted in personal details, qualification data, and cadre preferences using Application Number, Transaction ID, and Date of Birth.</li>
    <li><strong>Non-editable fields:</strong> Candidate Name, Mobile Number, and Email ID cannot be modified once registered.</li>
  </ul>
</div>`
    },
    {
      id: 40,
      title: '40. Admit Card (Test Admit Card - TAC) Issuance & Verification',
      content: `<div class="space-y-2 text-xs text-slate-700">
  <p>Admit Cards will be uploaded in two parts on <a href="https://esb.mp.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">esb.mp.gov.in</a> approximately 7 to 10 days before the exam:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li><strong>Part 1:</strong> Contains candidate roll number, exam center, shift, reporting time, and uploaded photo.</li>
    <li><strong>Part 2:</strong> Must be filled and signed in the presence of the invigilator at the exam center with left thumb impression.</li>
    <li>Compulsory items: Printed Admit Card, original photo ID (Voter ID, PAN, Driving License, Passport, or verified e-Aadhaar), and a black ballpoint pen.</li>
  </ul>
</div>`
    },
    {
      id: 41,
      title: '41. Answer Key, Raw Score & Objection Redressal Mechanism',
      content: `<div class="space-y-2 text-xs text-slate-700">
  <p>Immediately after the examination, raw scores will be displayed on candidate computer screens:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li>Model Answer Keys will be published on the official portal within a few days of exam completion.</li>
    <li>Candidates can submit online objections within <strong>3 days</strong> of link activation upon payment of <strong>₹150/- per question/answer</strong>.</li>
    <li>The Subject Expert Committee reviews objections and releases the Final Key. Canceled questions receive proportional marks adjustment.</li>
  </ul>
</div>`
    },
    {
      id: 42,
      title: '42. Proportionate Score Calculation for Canceled Questions',
      content: `<div class="space-y-2 text-xs text-slate-700">
  <p>As per Rule 2.8, if questions are canceled due to printing errors or multiple correct options, marks are awarded proportionally:</p>
  <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs">
    Formula: Proportionate Score = (Candidate Raw Score in Valid Questions × 100) / (100 - Canceled Questions)
  </div>
  <p><strong>Official Rulebook Example:</strong> If 2 questions are canceled out of 100 and a candidate scores 90 marks in the remaining 98 questions: <code>(90 × 100) / 98 = 91.83 Marks</code>.</p>
</div>`
    },
    {
      id: 43,
      title: '43. Final Merit List Formulation & Inter-se Seniority Rules',
      content: `<div class="space-y-2 text-xs text-slate-700">
  <p>The final merit list is prepared strictly by combining Stage 1 Normalised T-score and Stage 2 Physical Proficiency score:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li>Only candidates obtaining minimum 30% marks in PPT are included.</li>
    <li><strong>Tie-Breaking Rules:</strong> In case of identical composite scores, seniority is resolved first by proportionate CBT marks, and then by Date of Birth (older candidate is ranked higher).</li>
  </ul>
</div>`
    },
    {
      id: 44,
      title: '44. Waiting List (15% Waiting List Provision)',
      content: `<div class="space-y-2 text-xs text-slate-700">
  <p>As per MP Government GAD Order dated 10-10-2016:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li>A <strong>15% waiting list (प्रतीक्षा सूची)</strong> of candidates will be prepared alongside the main merit list.</li>
    <li>The waiting list remains valid for 1 year from result publication or until results of the next recruitment are announced, whichever is earlier.</li>
    <li>Vacancies arising from non-joining or medical rejection are filled from this waiting pool.</li>
  </ul>
</div>`
    },
    {
      id: 45,
      title: '45. Unit Allocation & 5-Year Mandatory Service Policy',
      content: `<div class="space-y-2 text-xs text-slate-700">
  <p>Important departmental service conditions under Rule 5 & 21:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li><strong>No Home District Posting:</strong> Selected candidates will strictly NOT be posted in their home district (गृह जिले में पदस्थापना नहीं दी जाएगी).</li>
    <li><strong>5 Years Lock-in Period:</strong> Personnel must complete a minimum of 5 years service in the initially allotted unit before being eligible for transfer.</li>
    <li>Deputation: Selected candidates can be posted anywhere inside or outside MP, including special units like EOW and Lokayukta.</li>
  </ul>
</div>`
    },
    {
      id: 46,
      title: '46. Character Verification & Legal Precedent Guidelines',
      content: `<div class="space-y-2 text-xs text-slate-700">
  <p>Character verification is executed as per MP Home Dept Order dated 24-07-2018 and the Hon’ble Supreme Court ruling in <em>Mehar Singh vs. Commissioner of Police (SLP No. 38886/2012)</em>:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li>Suppression of criminal cases, convictions, or FIRs in the attestation form leads to immediate termination without notice.</li>
    <li>Candidates with pendency or acquittals involving moral turpitude will be examined by a dedicated departmental scrutiny committee.</li>
  </ul>
</div>`
    },
    {
      id: 47,
      title: '47. Travel Allowance (TA) for SC, ST & OBC Candidates',
      content: `<div class="space-y-2 text-xs text-slate-700">
  <p>As per Rule 18 and Schedule-1, unemployed SC, ST, and OBC candidates residing in MP are entitled to actual travel reimbursement:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li>Reimbursement of lowest train fare (Sleeper Class) or bus fare between home district and physical test center.</li>
    <li>Candidates must submit travel tickets/receipts, caste certificate, and a self-attested bank passbook photocopy (Format-1) on the day of physical testing.</li>
  </ul>
</div>`
    },
    {
      id: 48,
      title: '48. Important General Instructions for Candidates',
      content: `<div class="space-y-2 text-xs text-slate-700">
  <ul class="list-disc pl-5 space-y-1">
    <li>Biometric verification (Aadhaar-enabled) is compulsory during both written and physical stages. Unblock your Aadhaar before arriving at test centers.</li>
    <li>Electronic devices, smart watches, calculators, and rough slips are strictly prohibited.</li>
    <li>All candidatures are purely provisional subject to verification by the Police Department during recruitment.</li>
    <li>The Board reserves the right to increase or decrease the number of vacancies based on departmental requisitions.</li>
  </ul>
</div>`
    },
    {
      id: 49,
      title: '49. Official Portal Links & Candidate Contact Desks',
      content: `<div class="space-y-3">
  <div class="overflow-x-auto">
    <table class="w-full text-xs text-left border-collapse border border-slate-200">
      <thead class="bg-slate-100 text-slate-700 font-bold">
        <tr><th class="p-2 border">Resource</th><th class="p-2 border">Official Link / URL</th></tr>
      </thead>
      <tbody class="divide-y divide-slate-100 text-slate-800">
        <tr><td class="p-2 border font-bold">MPESB Official Portal</td><td class="p-2 border"><a href="https://esb.mp.gov.in/e_default.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold">esb.mp.gov.in</a></td></tr>
        <tr><td class="p-2 border font-bold">Official Rulebook PDF</td><td class="p-2 border"><a href="https://esb.mp.gov.in/Rulebooks/RB_2026/PCRT_GD_2026_RuleBook_09092026.pdf" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold">PCRT_GD_2026_RuleBook_09092026.pdf</a></td></tr>
        <tr><td class="p-2 border font-bold">MP Online Application Portal</td><td class="p-2 border"><a href="https://esb.mp.gov.in/e_default.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold">Apply Online Portal</a></td></tr>
        <tr><td class="p-2 border font-bold">MP Rojgar Portal</td><td class="p-2 border"><a href="https://mprozgar.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold">mprozgar.gov.in</a></td></tr>
      </tbody>
    </table>
  </div>
  <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
    <strong>Candidate Support Desks:</strong> Toll-Free Helpline: 1800 233 7899 | MP Online Customer Care: 0755-6720200 | Email: complaint.esb@mp.gov.in
  </div>
</div>`
    },
    {
      id: 50,
      title: '50. Legal Jurisdiction & Official Rulebook Summary',
      content: `<div class="space-y-2 text-xs text-slate-700">
  <p>In case of any legal disputes regarding examination rules or selection procedures, the jurisdiction is strictly restricted to the <strong>High Court of Madhya Pradesh</strong>.</p>
  <p class="text-slate-600">This 50-section compendium represents the complete statutory compilation of the MPESB Police Constable (G.D.) Recruitment Test 2026 Rulebook issued by MPESB and Police Headquarters, Government of Madhya Pradesh.</p>
</div>`
    }
  ];
}

/**
 * Official Central Database Record for MP Police Constable Recruitment 2026.
 * Placed strictly under Latest Jobs / Recruitment / MP State Jobs.
 */
export const MP_POLICE_CONSTABLE_2026_EXAM: ExamRecord = {
  id: 'mp-police-constable-2026',
  slug: 'mpesb-mp-police-constable-recruitment-2026',
  examName: 'MPESB MP Police Constable Recruitment 2026',
  organization: 'Madhya Pradesh Employees Selection Board (MPESB) & MP Police Headquarters',
  category: 'Police',
  postName: 'Police Constable (General Duty - G.D.) Recruitment Test 2026 (SAF & DEF)',
  totalVacancy: '7,500 Posts',
  applicationStartDate: '2026-09-22',
  applicationLastDate: '2026-10-06',
  admitCardDate: '2026-11-10',
  cityIntimationDate: '2026-11-05',
  cityIntimationStatus: 'Not Released',
  examDate: '2026-11-19',
  answerKeyDate: '2026-11-25',
  resultDate: '2026-12-20',
  cutOffDate: '2026-12-20',
  status: 'APPLICATION_OPEN',
  education: ['10th', 'Other'],
  minimumQualificationLevel: '10th Class (8th Class for ST)',
  acceptedQualificationLevels: ['10th Pass', '12th Pass', 'Graduation'],
  eligibilityPaths: [
    {
      pathName: 'Constable (GD) - UR / SC / OBC / EWS',
      qualifications: ['10th Pass', '12th Pass'],
      notes: '10th class pass under 10+2 system or Higher Secondary / equivalent from recognized Board.'
    },
    {
      pathName: 'Constable (GD) - Scheduled Tribes (ST)',
      qualifications: ['8th Pass', '10th Pass'],
      notes: '8th class pass or equivalent examination from recognized school.'
    }
  ],
  higherQualificationAccepted: true,
  specialQualificationRequirements: [
    'Mandatory active live registration in MP State Employment Office (म.प्र. रोजगार कार्यालय में जीवित पंजीयन).',
    'Male SAF candidates: Height 168 cm, Chest 79-84 cm.',
    'Non-SAF Male (UR/OBC/SC): Height 168 cm, Chest 81-86 cm; Female: Height 155 cm.',
    'Non-SAF ST Male: Height 160 cm, Chest 76-81 cm; Female: Height 155 cm.'
  ],
  ageMin: 18,
  ageMax: 33,
  ageRelaxationInfo: 'MP Female: Up to 38 Yrs, MP SC/ST/OBC Male: Up to 38 Yrs, Inter-caste/Vikram Awardee: Up to 43 Yrs, Non-MP: Strictly 33 Yrs',
  categoryEligibility: {
    'General': '18 to 33 years as on 06/10/2026 (Both MP and Non-MP Male)',
    'EWS': '18 to 33 years (MP Male)',
    'OBC': '18 to 38 years for MP Domicile (+5 years relaxation)',
    'SC': '18 to 38 years for MP Domicile (+5 years relaxation)',
    'ST': '18 to 38 years for MP Domicile (+5 years relaxation)',
    'Female': '18 to 38 years for all MP Domicile Female applicants'
  },
  gender: 'All',
  state: 'Madhya Pradesh',
  officialWebsite: 'https://esb.mp.gov.in/e_default.html',
  officialNotification: 'https://esb.mp.gov.in/Rulebooks/RB_2026/PCRT_GD_2026_RuleBook_09092026.pdf',
  applyLink: 'https://esb.mp.gov.in/e_default.html',
  admitCardLink: 'https://esb.mp.gov.in/e_default.html',
  examCityLink: '',
  answerKeyLink: '',
  resultLink: '',
  cutOffLink: '',
  logoIcon: '👮',
  logoBg: '#eff6ff',
  description: 'Madhya Pradesh Employees Selection Board (MPESB) has officially published the recruitment rulebook for Police Constable (General Duty - GD) Recruitment Test 2026 for 7,500 Posts across Special Armed Force (SAF - 700 posts) and District Police (DEF - 6,800 posts). Online applications open from 22 September 2026 to 06 October 2026 with exam commencing 19 November 2026.',
  shortSummary: 'MPESB MP Police Constable Recruitment 2026 for 7,500 Constable (GD) posts in Madhya Pradesh Police. Apply online 22-09-2026 to 06-10-2026.',
  importantDates: [
    { label: 'Official Rulebook Published', date: '2026-09-09' },
    { label: 'Online Application Start Date', date: '2026-09-22' },
    { label: 'Online Application Last Date', date: '2026-10-06', isHighlight: true },
    { label: 'Application Form Correction Last Date', date: '2026-10-11' },
    { label: 'Written Exam (Phase 1) Start Date', date: '2026-11-19', isHighlight: true },
    { label: 'Admit Card Release Date', date: 'November 2026' },
    { label: 'Model Answer Key Release Date', date: 'November 2026' },
    { label: 'Result & PPT Date', date: 'Not Released / To Be Updated' }
  ],
  applicationFee: [
    { category: 'Unreserved (UR) / Non-MP Candidates', amount: '₹700/- (Exam ₹500 + Dept ₹200 + Portal)' },
    { category: 'MP Domicile SC / ST / OBC / EWS', amount: '₹350/- (Exam ₹250 + Dept ₹100 + Portal)' },
    { category: 'Direct Recruitment Backlog', amount: '₹0 (Nil)' },
    { category: 'MP Online Portal Charge', amount: '₹60 (Kiosk) / ₹20 (Citizen)' },
    { category: 'Online Form Correction Fee', amount: '₹20 + ₹40 Portal Fee' }
  ],
  allInformation: generateMpPoliceConstable50Sections(),
  faq: [
    {
      q: 'How many total vacancies are announced for MP Police Constable 2026?',
      a: 'A total of 7,500 vacancies are announced: 700 posts in Constable (GD) Special Armed Force (SAF - Male only) and 6,800 posts in Constable (GD) District Executive Force (DEF - Male & Female).'
    },
    {
      q: 'What is the starting and closing date for MP Police Constable Online Form 2026?',
      a: 'Online applications commence on 22 September 2026 (22-09-2026) and the last date to apply is 06 October 2026 (06-10-2026). The online correction window closes on 11 October 2026.'
    },
    {
      q: 'Can candidates from outside Madhya Pradesh apply for MP Police Constable 2026?',
      a: 'Yes, candidates from other states can apply, but strictly under the Unreserved (UR) Open category with maximum age limit of 33 years. No caste or age relaxation applies to non-domicile candidates.'
    },
    {
      q: 'Is MP Rojgar Karyalaya registration mandatory for all candidates?',
      a: 'Yes, active live registration in the Madhya Pradesh State Employment Office (mprozgar.gov.in) is compulsory for all candidates as on the date of application.'
    },
    {
      q: 'What is the selection process and marks distribution?',
      a: 'Selection consists of Phase 1 Written CBT (100 marks, 100 MCQs, 2 hours, no negative marking) and Phase 2 Physical Proficiency Test (100 marks: 800m run 40 marks, Long Jump 30 marks, Shot Put 30 marks) with minimum 30% marks required. Final merit is prepared by adding the normalised CBT T-Score and PPT score.'
    },
    {
      q: 'What is the minimum physical height required for Male and Female candidates?',
      a: 'For DEF Male (UR/OBC/SC), minimum height is 168 cm (Chest 81-86 cm); for DEF Male (ST), minimum height is 160 cm (Chest 76-81 cm). For all Female candidates, minimum height is 155 cm (chest measurement not applicable).'
    }
  ],
  salary: '₹19,500 – ₹62,000/- (70% 1st yr, 80% 2nd yr, 90% 3rd yr stipend during 3-year probation)',
  vacancies: [
    { category: 'UR', postCount: 2720 },
    { category: 'OBC', postCount: 1836 },
    { category: 'SC', postCount: 1088 },
    { category: 'ST', postCount: 1360 },
    { category: 'EWS', postCount: 680 }
  ],
  admitCardSteps: [
    'Visit the official MPESB portal at esb.mp.gov.in.',
    'Click on the "Test Admit Card - Police Constable Recruitment Test - 2026" link.',
    'Enter your Application Number (13 digits) and Date of Birth (DD/MM/YYYY).',
    'Select your first two letters of Mother name + last 4 digits of Aadhaar number if prompted.',
    'Download and print both parts of the TAC Admit Card on A4 paper.'
  ]
};

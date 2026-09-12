import { ExamRecord, ExamInfoSection } from '../types/exam';

export function generateNbems50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. NBEMS Group A, B & C Admit Card 2026 – Overview',
      content: `National Board of Examinations in Medical Sciences (NBEMS), an autonomous organisation under the Ministry of Health & Family Welfare, Government of India, has officially issued the E-Admit Cards for recruitment to Group A, Group B, and Group C posts under Advertisement No. A-12011/3/2025-Estb.

Candidates who applied online for the 53 vacancies can now download their Computer Based Test (CBT) hall tickets from the official portal.

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Parameter</th>
        <th class="p-3">Official Notification Detail</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Recruiting Organization</td>
        <td class="p-3">National Board of Examinations in Medical Sciences (NBEMS)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Advertisement Number</td>
        <td class="p-3 font-mono font-bold text-blue-700">A-12011/3/2025-Estb</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Posts Notified</td>
        <td class="p-3">Deputy Director (Medical), Junior Programmer, Junior Accountant, Stenographer, Junior Assistant</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Classification of Posts</td>
        <td class="p-3">Group A, Group B, and Group C</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Total Vacancies</td>
        <td class="p-3 font-bold text-emerald-700">53 Vacancies (including 01 backlog ST)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Stage-I CBT Written Exam Dates</td>
        <td class="p-3 font-bold text-rose-700">15–16 September 2026</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Admit Card Release Status</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300">RELEASED / ACTIVE NOW</span></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Direct Admit Card Portal</td>
        <td class="p-3 font-mono text-xs text-blue-600 break-all"><a href="https://cdn3.digialm.com/EForms/configuredHtml/1815/101418/login.html" target="_blank" rel="noopener noreferrer" class="underline font-bold">cdn3.digialm.com/.../login.html</a></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Official Website</td>
        <td class="p-3"><a href="https://natboard.edu.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">https://natboard.edu.in/</a></td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 2,
      title: '2. Conducting Authority – About NBEMS',
      content: `The National Board of Examinations in Medical Sciences (NBEMS) is an autonomous body established by the Government of India under the Ministry of Health & Family Welfare.
Headquartered at NAMS Building, Medical Enclave, Ansari Nagar, New Delhi – 110029, the Board conducts premier national-level examinations in modern medicine and allied healthcare specialties (such as NEET PG, NEET MDS, FMGE, and DNB PDCET).

NBEMS administers direct recruitment examinations for its administrative, technical, and executive cadres through standardized, fair, transparent, and merit-based computer-based testing.`
    },
    {
      id: 3,
      title: '3. Classification of Posts & Pay Matrix Levels',
      content: `The recruitment notice encompasses posts across Pay Levels 2, 4, 7, and 11 as per the 7th Central Pay Commission (CPC):

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Post Name</th>
        <th class="p-3">Cadre Group</th>
        <th class="p-3">7th CPC Pay Matrix Level</th>
        <th class="p-3">Pay Scale / Band</th>
        <th class="p-3">Total Posts</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-bold">Deputy Director (Medical)</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-bold">Group 'A'</span></td>
        <td class="p-3 font-semibold">Level-11</td>
        <td class="p-3">₹67,700 – ₹2,08,700</td>
        <td class="p-3 font-bold text-center">02</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">Junior Programmer</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold">Group 'B'</span></td>
        <td class="p-3 font-semibold">Level-7</td>
        <td class="p-3">₹44,900 – ₹1,42,400</td>
        <td class="p-3 font-bold text-center">01</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">Junior Accountant</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-bold">Group 'C'</span></td>
        <td class="p-3 font-semibold">Level-4</td>
        <td class="p-3">₹25,500 – ₹81,100</td>
        <td class="p-3 font-bold text-center">04</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">Stenographer</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-bold">Group 'C'</span></td>
        <td class="p-3 font-semibold">Level-4</td>
        <td class="p-3">₹25,500 – ₹81,100</td>
        <td class="p-3 font-bold text-center">07</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">Junior Assistant</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">Group 'C'</span></td>
        <td class="p-3 font-semibold">Level-2</td>
        <td class="p-3">₹19,900 – ₹63,200</td>
        <td class="p-3 font-bold text-center">39 #</td>
      </tr>
      <tr class="bg-slate-50 font-black text-slate-900">
        <td class="p-3" colspan="4">Total Vacancies Notified</td>
        <td class="p-3 text-center text-blue-700">53</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-slate-500 italic mt-1"># Junior Assistant vacancy includes 01 backlog vacancy reserved for Scheduled Tribes (ST).</p>`
    },
    {
      id: 4,
      title: '4. Category-Wise Vacancy Bifurcation (Official Matrix)',
      content: `The detailed vertical and horizontal reservation distribution across all posts is specified below:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-2.5">Post Name</th>
        <th class="p-2.5 text-center">UR</th>
        <th class="p-2.5 text-center">OBC</th>
        <th class="p-2.5 text-center">SC</th>
        <th class="p-2.5 text-center">ST</th>
        <th class="p-2.5 text-center">EWS</th>
        <th class="p-2.5 text-center font-black">Total</th>
        <th class="p-2.5">PwBD (Horizontal)</th>
        <th class="p-2.5">ESM (Horizontal)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-2.5 font-bold">Deputy Director (Medical)</td>
        <td class="p-2.5 text-center">01</td>
        <td class="p-2.5 text-center">-</td>
        <td class="p-2.5 text-center">-</td>
        <td class="p-2.5 text-center">01</td>
        <td class="p-2.5 text-center">-</td>
        <td class="p-2.5 text-center font-bold">02</td>
        <td class="p-2.5 text-xs text-purple-700 font-medium">01 Vacancy earmarked</td>
        <td class="p-2.5 text-xs text-slate-400">-</td>
      </tr>
      <tr>
        <td class="p-2.5 font-bold">Junior Programmer</td>
        <td class="p-2.5 text-center">01</td>
        <td class="p-2.5 text-center">-</td>
        <td class="p-2.5 text-center">-</td>
        <td class="p-2.5 text-center">-</td>
        <td class="p-2.5 text-center">-</td>
        <td class="p-2.5 text-center font-bold">01</td>
        <td class="p-2.5 text-xs text-slate-400">-</td>
        <td class="p-2.5 text-xs text-slate-400">-</td>
      </tr>
      <tr>
        <td class="p-2.5 font-bold">Junior Accountant</td>
        <td class="p-2.5 text-center">02</td>
        <td class="p-2.5 text-center">01</td>
        <td class="p-2.5 text-center">-</td>
        <td class="p-2.5 text-center">-</td>
        <td class="p-2.5 text-center">01</td>
        <td class="p-2.5 text-center font-bold">04</td>
        <td class="p-2.5 text-xs text-slate-400">-</td>
        <td class="p-2.5 text-xs text-slate-400">-</td>
      </tr>
      <tr>
        <td class="p-2.5 font-bold">Stenographer</td>
        <td class="p-2.5 text-center">04</td>
        <td class="p-2.5 text-center">02</td>
        <td class="p-2.5 text-center">-</td>
        <td class="p-2.5 text-center">01</td>
        <td class="p-2.5 text-center">-</td>
        <td class="p-2.5 text-center font-bold">07</td>
        <td class="p-2.5 text-xs text-slate-400">-</td>
        <td class="p-2.5 text-xs text-slate-400">-</td>
      </tr>
      <tr>
        <td class="p-2.5 font-bold">Junior Assistant</td>
        <td class="p-2.5 text-center">20</td>
        <td class="p-2.5 text-center">06</td>
        <td class="p-2.5 text-center">07</td>
        <td class="p-2.5 text-center font-bold text-amber-700"># 03</td>
        <td class="p-2.5 text-center">03</td>
        <td class="p-2.5 text-center font-bold">39</td>
        <td class="p-2.5 text-xs text-purple-700 font-medium">02 Vacancies earmarked</td>
        <td class="p-2.5 text-xs text-emerald-700 font-bold">03 Vacancies earmarked</td>
      </tr>
      <tr class="bg-slate-100 font-black text-slate-900">
        <td class="p-2.5">Total</td>
        <td class="p-2.5 text-center">28</td>
        <td class="p-2.5 text-center">09</td>
        <td class="p-2.5 text-center">07</td>
        <td class="p-2.5 text-center">05</td>
        <td class="p-2.5 text-center">04</td>
        <td class="p-2.5 text-center text-blue-700">53</td>
        <td class="p-2.5 text-xs font-bold text-purple-800">03 (Total PwBD)</td>
        <td class="p-2.5 text-xs font-bold text-emerald-800">03 (Total ESM)</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-slate-500">Note: In all, 03 vacancies are earmarked for Persons with Benchmark Disabilities (PwBD) and 03 vacancies for Ex-Servicemen (ESM) under horizontal reservation.</p>`
    },
    {
      id: 5,
      title: '5. Important Dates & Recruitment Schedule',
      content: `Candidates must note the official schedule notified in the vacancy circular:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Recruitment Event</th>
        <th class="p-3">Date / Schedule</th>
        <th class="p-3">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold">Date of Official Notice</td>
        <td class="p-3">02.06.2026 (Published: 27.06.2026)</td>
        <td class="p-3 text-slate-500 font-medium">Completed</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Opening Date for Online Application</td>
        <td class="p-3">29.06.2026</td>
        <td class="p-3 text-slate-500 font-medium">Completed</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Last Date for Online Submission</td>
        <td class="p-3">20.07.2026</td>
        <td class="p-3 text-slate-500 font-medium">Closed</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Crucial Date for Age &amp; Eligibility</td>
        <td class="p-3 font-bold text-slate-900">20.07.2026</td>
        <td class="p-3 text-slate-500 font-medium">Cut-Off Reference</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Admit Card Release Date</td>
        <td class="p-3 font-bold text-emerald-700">01.09.2026</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded text-xs font-black bg-emerald-100 text-emerald-800">Active Online</span></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Stage-I Written Examination (CBT)</td>
        <td class="p-3 font-bold text-rose-700">15–16 September 2026</td>
        <td class="p-3 font-bold text-rose-600 animate-pulse">Examination Scheduled</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Stage-II Computer Knowledge / Skill Test</td>
        <td class="p-3">To be intimated after Stage-I results</td>
        <td class="p-3 text-slate-500 font-medium">Upcoming</td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 6,
      title: '6. How to Download NBEMS Admit Card 2026 (Step-by-Step)',
      content: `Candidates must follow the authorized download procedure:

<ol class="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
  <li>Open the official NBEMS E-Forms login link: <a href="https://cdn3.digialm.com/EForms/configuredHtml/1815/101418/login.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">https://cdn3.digialm.com/EForms/configuredHtml/1815/101418/login.html</a> or visit <a href="https://natboard.edu.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">https://natboard.edu.in/</a>.</li>
  <li>Locate the <strong>Candidate Login</strong> box on the screen.</li>
  <li>Enter your <strong>User ID / Application Number</strong> in the first field.</li>
  <li>Enter your confidential <strong>Password</strong> generated during registration.</li>
  <li>Type the security Captcha characters as displayed in the image.</li>
  <li>Click on the <strong>Login</strong> button.</li>
  <li>In your candidate dashboard, navigate to the <strong>Admit Card</strong> tab.</li>
  <li>Click on <strong>Download Admit Card</strong> to generate your E-Admit Card PDF.</li>
  <li>Save the PDF securely and print at least <strong>two clear color printouts</strong> on white A4 sheets.</li>
  <li>Verify all particulars including your name, category, exam shift, venue, and reporting time.</li>
</ol>`
    },
    {
      id: 7,
      title: '7. Step-by-Step Flowchart: Application to Selection',
      content: `Visual roadmap of the NBEMS Group A, B & C recruitment lifecycle:

<div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl my-3">
  <div class="flex flex-col sm:flex-row items-center justify-between gap-3 text-center text-xs font-bold">
    <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs w-full sm:w-1/5">
      <div class="text-slate-400 text-[10px] uppercase">Step 1</div>
      <div class="text-slate-800 mt-1">Online Application</div>
      <div class="text-[10px] text-slate-500">Completed (20.07.2026)</div>
    </div>
    <div class="text-slate-400 font-black">➔</div>
    <div class="p-3 bg-purple-50 border border-purple-200 rounded-xl shadow-xs w-full sm:w-1/5">
      <div class="text-purple-600 text-[10px] uppercase">Step 2</div>
      <div class="text-purple-900 mt-1">E-Admit Card</div>
      <div class="text-[10px] text-emerald-600 font-bold">Live on Digialm</div>
    </div>
    <div class="text-slate-400 font-black">➔</div>
    <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl shadow-xs w-full sm:w-1/5">
      <div class="text-blue-600 text-[10px] uppercase">Step 3</div>
      <div class="text-blue-900 mt-1">Stage-I CBT</div>
      <div class="text-[10px] text-blue-700">15–16 September 2026</div>
    </div>
    <div class="text-slate-400 font-black">➔</div>
    <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl shadow-xs w-full sm:w-1/5">
      <div class="text-amber-600 text-[10px] uppercase">Step 4</div>
      <div class="text-amber-900 mt-1">Stage-II Skill Test</div>
      <div class="text-[10px] text-amber-700">1:5 Shortlisting Ratio</div>
    </div>
    <div class="text-slate-400 font-black">➔</div>
    <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl shadow-xs w-full sm:w-1/5">
      <div class="text-emerald-600 text-[10px] uppercase">Step 5</div>
      <div class="text-emerald-900 mt-1">Document Verification</div>
      <div class="text-[10px] text-emerald-700">Bond Execution &amp; Join</div>
    </div>
  </div>
</div>`
    },
    {
      id: 8,
      title: '8. Admit Card Discrepancy & Redressal Helpline',
      content: `In case of any discrepancy in the particulars of the candidate or his/her photograph and signature shown in the admit card and confirmation page, the candidate may immediately contact the NBEMS helpline:

<div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs sm:text-sm text-slate-800">
  <p><strong>Telephone Helpline:</strong> <span class="font-mono text-blue-700 font-bold">011-45593000</span></p>
  <p><strong>Official Email:</strong> <span class="font-mono text-blue-700 font-bold">recruitment@natboard.edu.in</span></p>
  <p><strong>Official Office Address:</strong> National Board of Examinations in Medical Sciences, NAMS Building, Medical Enclave, Ansari Nagar, New Delhi – 110029</p>
  <p class="text-slate-500 text-xs">Note: Candidates must mention their Application ID, Registered Email, Full Name, and Mobile Number in all correspondence.</p>
</div>`
    },
    {
      id: 9,
      title: '9. Stage-I Written Exam Dates & Shifts',
      content: `The tentative schedule for the written Computer Based Test (CBT) is fixed for **15–16 September 2026**.
Depending on candidate volume, shifts and reporting windows are printed clearly on individual hall tickets. Candidates must strictly reach the examination centre before gate closure time.`
    },
    {
      id: 10,
      title: '10. Exam City & Test Centre Allotment Policy',
      content: `The venue, date, and time of the examination along with Roll Number are intimated strictly through the E-Admit Cards.
As per Clause Q(vii) and Clause F(ii) of the official notice:
- NBEMS reserves the right to cancel, change, or add test centres/cities based on administrative feasibility, candidate response, or force-majeure conditions.
- No request for change of examination centre or date will be entertained under any circumstances once allotted.`
    },
    {
      id: 11,
      title: '11. Stage-I Computer Based Test (CBT) Pattern',
      content: `For the posts of **Junior Accountant, Stenographer, and Junior Assistant**, Stage-I consists of an objective multiple-choice test:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Section Name</th>
        <th class="p-3 text-center">Number of Questions</th>
        <th class="p-3 text-center">Marks Per Question</th>
        <th class="p-3 text-center">Total Marks</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold">1. General Intelligence &amp; Reasoning</td>
        <td class="p-3 text-center">50</td>
        <td class="p-3 text-center">1</td>
        <td class="p-3 text-center font-bold">50</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">2. General Awareness</td>
        <td class="p-3 text-center">50</td>
        <td class="p-3 text-center">1</td>
        <td class="p-3 text-center font-bold">50</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">3. Quantitative Aptitude</td>
        <td class="p-3 text-center">50</td>
        <td class="p-3 text-center">1</td>
        <td class="p-3 text-center font-bold">50</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">4. English Comprehension</td>
        <td class="p-3 text-center">50</td>
        <td class="p-3 text-center">1</td>
        <td class="p-3 text-center font-bold">50</td>
      </tr>
      <tr class="bg-slate-100 font-black text-slate-900">
        <td class="p-3">Grand Total</td>
        <td class="p-3 text-center">200 Questions</td>
        <td class="p-3 text-center">-</td>
        <td class="p-3 text-center text-blue-700">200 Marks</td>
      </tr>
    </tbody>
  </table>
</div>
<ul class="list-disc pl-5 text-xs text-slate-700 space-y-1">
  <li><strong>Total Duration:</strong> 180 Minutes (3 Hours).</li>
  <li><strong>Negative Marking:</strong> 0.25 marks deduction for each incorrect answer.</li>
  <li><strong>Medium of Paper:</strong> Bilingual (English and Hindi).</li>
  <li><strong>Question Paper Level:</strong> Graduate level common paper for Junior Accountant; 10+2 level paper for Stenographer and Junior Assistant.</li>
</ul>`
    },
    {
      id: 12,
      title: '12. Negative Marking Scheme (Stage-I CBT)',
      content: `There is a strict negative marking rule in Stage-I CBT:
- **Correct Answer:** +1.00 Mark.
- **Incorrect Answer:** -0.25 Mark penalty (1/4th negative marking).
- **Unanswered / Blank Question:** 0 Marks (No negative marking).
Candidates should avoid random guesswork to maintain high accuracy.`
    },
    {
      id: 13,
      title: '13. Minimum Qualifying Marks (Stage-I & Stage-II)',
      content: `The official minimum qualifying percentages set by NBEMS are:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Category</th>
        <th class="p-3 text-center">Minimum Qualifying % in Stage-I (CBT)</th>
        <th class="p-3 text-center">Minimum Marks in Stage-I (Out of 200)</th>
        <th class="p-3 text-center">Minimum Qualifying % in Stage-II (Skill)</th>
        <th class="p-3 text-center">Minimum Marks in Stage-II (Out of 100)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold">UR / OBC / EWS</td>
        <td class="p-3 text-center font-bold text-blue-700">50%</td>
        <td class="p-3 text-center font-bold">100 Marks</td>
        <td class="p-3 text-center font-bold text-blue-700">50%</td>
        <td class="p-3 text-center font-bold">50 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">SC / ST / PwBD / ESM</td>
        <td class="p-3 text-center font-bold text-emerald-700">40%</td>
        <td class="p-3 text-center font-bold">80 Marks</td>
        <td class="p-3 text-center font-bold text-emerald-700">40%</td>
        <td class="p-3 text-center font-bold">40 Marks</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-slate-500">Note: The NBEMS Selection Committee reserves the right to fix minimum qualifying marks in any or all parts of the examination papers.</p>`
    },
    {
      id: 14,
      title: '14. Stage-II Computer Knowledge & Skill Test Pattern',
      content: `The Stage-II Examination (Computer Knowledge / Skill Test) carries **100 marks** with a duration of **75 minutes**.

Candidates are shortlisted based on Stage-I CBT merit at a ratio of **5 candidates per vacancy (1:5)** in each category.
Depending on the post applied for, Stage-II evaluates:
- **Data Entry Speed & Accuracy**
- **Word Processing (MS Word formatting, letter drafting, paragraph layout)**
- **Computer Operation (File management, Windows navigation, OS basics, LAN usage)**
- **Stenography Skill Test (80 wpm shorthand and 30 wpm typing for Stenographers)**`
    },
    {
      id: 15,
      title: '15. Shortlisting Ratio for Stage-II (1:5 Ratio)',
      content: `As per Clause D(ii) Stage-II of the recruitment notice:
- Five (5) candidates against every single vacancy in each category in order of merit prepared on the basis of CBT (Stage-I) will be called to participate in the Computer Knowledge/Skill Test (Stage-II).
- Total candidates expected to be called for Stage-II: Approximately 265 candidates across all categories.`
    },
    {
      id: 16,
      title: '16. Junior Assistant Post Criteria & Skill Test Specifics',
      content: `<strong>Junior Assistant (Group C, Level-2): 39 Vacancies</strong>
- **Age Limit:** Below 27 Years as on 20.07.2026.
- **Essential Educational Qualification:** Passed Senior Secondary Examination (12th of 10+2) from a recognized Board/University.
- **Computer Proficiency:** Proficiency in use of Computers and Basic Software packages such as Windows/Network operating System, working in LAN architecture.
- **Skill Test:** Word processing, typing test, formatting documents, file handling, and general computer proficiency.`
    },
    {
      id: 17,
      title: '17. Stenographer Post Criteria & 80/30 WPM Test',
      content: `<strong>Stenographer (Group C, Level-4): 07 Vacancies</strong>
- **Age Limit:** 18 – 27 Years as on 20.07.2026.
- **Essential Qualification:** Senior Secondary (12th class of 10+2).
- **Mandatory Stenographic Skill:**
  - 80 words per minute (WPM) in Shorthand.
  - 30 words per minute (WPM) in Typing.
- **Evaluation:** Candidates must appear and qualify in the General English / Shorthand &amp; Typewriting test conducted by the Board.
- **Desirable:** 2 years' experience as Steno in Govt / PSU / Autonomous Body and computer word processing.`
    },
    {
      id: 18,
      title: '18. Junior Accountant Post Criteria & Accounts Test',
      content: `<strong>Junior Accountant (Group C, Level-4): 04 Vacancies</strong>
- **Age Limit:** Below 27 Years as on 20.07.2026.
- **Essential Qualification:** Bachelor's Degree with Mathematics or Statistics, OR a Degree in Commerce from a recognized University.
- **Examination:** Must qualify the CBT and Computer Knowledge / Skill test prescribed by NBEMS.
- **Desirable:** 3 years' experience in dealing with Accounts in some Government institution with knowledge of computer-based accounting packages (e.g. Tally, ERP).`
    },
    {
      id: 19,
      title: '19. Junior Programmer (Group B, Level-7) Scheme',
      content: `<strong>Junior Programmer (Group B, Level-7): 01 Vacancy (UR)</strong>
- **Age Limit:** Below 27 Years as on 20.07.2026.
- **Essential Qualification:** B.Tech / B.E / BCA / DOEACC ('B' or 'C' level) / Degree in Computer Science / IT / Electronics with specialization in computers, or equivalent.
- **Scheme & Syllabus:** Official syllabus and scheme for this technical post is notified directly on the NBEMS website.`
    },
    {
      id: 20,
      title: '20. Deputy Director (Medical) (Group A, Level-11) Scheme',
      content: `<strong>Deputy Director (Medical) (Group A, Level-11): 02 Vacancies (01 UR, 01 ST; 01 PwBD)</strong>
- **Age Limit:** Not exceeding 35 Years as on 20.07.2026.
- **Essential Qualification:** Recognized Postgraduate Medical qualification approved under the Indian Medical Council Act – 1956.
- **Desirable:** Training in medical education technology, knowledge of modern evaluation techniques, item writing, generation of MCQs/MEQs, and psychometric analysis of candidates' performance.
- **Scheme & Syllabus:** Intimated directly on the official NBEMS website.`
    },
    {
      id: 21,
      title: '21. Final Merit List Calculation (Stage-I + Stage-II)',
      content: `For Junior Accountant, Stenographer, and Junior Assistant:
- Final merit list shall be prepared on the basis of **total marks obtained in CBT (Stage-I) [200 Marks] + Computer Knowledge/Skill Test (Stage-II) [100 Marks]**, making the aggregate grand total **300 Marks**.
- The merit list will strictly determine position and appointment.
- Validity of Merit List: Holds good for a period of **one (1) year** or until the next selection, whichever is earlier.`
    },
    {
      id: 22,
      title: '22. Tie-Breaking Resolution Criteria',
      content: `In cases where two or more candidates secure equal aggregate marks (Stage-I + Stage-II combined):
- The candidate **older in age** shall be placed higher in the merit ranking.
- If age is also identical, normal administrative rules of the Board apply.`
    },
    {
      id: 23,
      title: '23. No Interview Policy for Group B & C Posts',
      content: `In accordance with Government of India directives abolishing interviews for non-gazetted Group B and Group C posts:
- **No interview will be conducted** for Junior Programmer (Group B), Junior Accountant (Group C), Stenographer (Group C), or Junior Assistant (Group C).
- Selection is 100% merit-based through written CBT and Skill Test.`
    },
    {
      id: 24,
      title: '24. Two-Year Mandatory Service Penalty Bond',
      content: `As specified under Section H of the official notification:
<div class="p-4 bg-amber-50 border border-amber-300 rounded-2xl space-y-2 text-xs sm:text-sm text-amber-900">
  <p class="font-bold text-amber-950">Mandatory Bond Clauses:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li>Selected candidates must execute a <strong>Penalty Bond</strong> agreeing to serve NBEMS for a minimum continuous period of <strong>two (2) years</strong> (coinciding with the probation period).</li>
    <li>In the event of resignation or voluntary withdrawal from service before completing the mandatory two-year period, the candidate is liable to pay <strong>three (3) months' salary (last drawn)</strong> as liquidated damages to the Board.</li>
    <li><strong>Objective:</strong> To compensate the Board for recruitment costs, training expenses, and administrative disruptions caused by premature vacancy.</li>
  </ul>
</div>`
    },
    {
      id: 25,
      title: '25. Probation Period & Confirmation Rules',
      content: `Selected candidates will be placed on probation for a minimum period of two (2) years.
During probation, performance, conduct, and suitability for the post will be strictly evaluated.
Successful completion of probation leads to confirmation in regular service, subject to medical fitness and character verification.`
    },
    {
      id: 26,
      title: '26. Consolidated Educational Qualifications Matrix',
      content: `Summary table of essential educational criteria across all 5 posts:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Post</th>
        <th class="p-3">Cadre</th>
        <th class="p-3">Essential Educational Qualification</th>
        <th class="p-3">Max Age</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-bold">Deputy Director (Medical)</td>
        <td class="p-3 font-semibold text-purple-700">Group A</td>
        <td class="p-3">Recognized Postgraduate Medical qualification approved under Medical Council Act – 1956.</td>
        <td class="p-3 font-bold">35 Years</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">Junior Programmer</td>
        <td class="p-3 font-semibold text-blue-700">Group B</td>
        <td class="p-3">B.Tech / B.E / BCA / DOEACC ('B' or 'C') / Degree in CS / IT / Electronics with computer specialization.</td>
        <td class="p-3 font-bold">Below 27 Yrs</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">Junior Accountant</td>
        <td class="p-3 font-semibold text-amber-700">Group C</td>
        <td class="p-3">Bachelor's Degree with Mathematics / Statistics OR Degree in Commerce from recognized Univ; qualify Board test.</td>
        <td class="p-3 font-bold">Below 27 Yrs</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">Stenographer</td>
        <td class="p-3 font-semibold text-amber-700">Group C</td>
        <td class="p-3">10+2 (12th class) + 80 wpm shorthand &amp; 30 wpm typing; qualify Board General English/Shorthand/Typing test.</td>
        <td class="p-3 font-bold">18 - 27 Yrs</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">Junior Assistant</td>
        <td class="p-3 font-semibold text-emerald-700">Group C</td>
        <td class="p-3">Senior Secondary (12th class) + proficiency in computers/basic software (Windows/LAN architecture); qualify Board test.</td>
        <td class="p-3 font-bold">Below 27 Yrs</td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 27,
      title: '27. Age Limit & Crucial Cut-Off Date (20.07.2026)',
      content: `The crucial date for determining age limit and educational eligibility was **20.07.2026** (the closing date for online submission of application form).
- Candidates must have attained the minimum age of **18 years**.
- Maximum upper age limit for Junior Assistant, Stenographer, Junior Accountant, and Junior Programmer is **27 years** (or below 27 years).
- Upper age limit for Deputy Director (Medical) is **35 years**.`
    },
    {
      id: 28,
      title: '28. Category-Wise Upper Age Relaxations',
      content: `Permissible age relaxations beyond the upper age limit as per Government of India rules:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Category</th>
        <th class="p-3">Permissible Age Relaxation</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold">SC / ST</td>
        <td class="p-3 font-bold text-blue-700">5 Years</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">OBC (Non-Creamy Layer)</td>
        <td class="p-3 font-bold text-blue-700">3 Years</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">PwBD (Unreserved)</td>
        <td class="p-3 font-bold">10 Years</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">PwBD (OBC)</td>
        <td class="p-3 font-bold">13 Years</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">PwBD (SC / ST)</td>
        <td class="p-3 font-bold">15 Years</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Ex-Servicemen (ESM)</td>
        <td class="p-3">3 years after deduction of military service rendered from actual age</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Central Govt. Civilian Employees (3 yrs continuous service) for Group C</td>
        <td class="p-3">Up to 40 years of age (45 years for SC/ST)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Widows / Divorced Women / Judicially Separated Women</td>
        <td class="p-3">Up to 35 years of age (40 years for SC/ST)</td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 29,
      title: '29. Application Fee Structure (Notification Reference)',
      content: `The non-refundable application fee notified under Section I:
- **Unreserved (UR) / OBC:** ₹ 1,500 + 18% GST (Total ₹ 1,770).
- **SC / ST / PwBD / Women Candidates:** **NIL (Exempted / ₹ 0)**.
- Payment mode was strictly online through Debit Card, Credit Card, Net Banking, or UPI.`
    },
    {
      id: 30,
      title: '30. PwBD Benchmark Disability & Reservation Clauses',
      content: `In all, three (03) vacancies are earmarked for Persons with Benchmark Disabilities (PwBD) across the cadre:
- 01 Vacancy in Deputy Director (Medical)
- 02 Vacancies in Junior Assistant
Categories of eligible disability:
1. Blindness and Low Vision (B, LV)
2. Deaf and Hard of Hearing (D, HH)
3. Locomotor Disability (OA, OL, BA, BL, OAL, CP, LC, DW, AAV, MDY)
4. Autism, Intellectual Disability, Specific Learning Disability, and Mental Illness (ASD, SLD, MI)
5. Multiple Disabilities including Deaf-Blindness.
Candidates must hold a disability certificate showing at least **40% disability** issued by the competent medical authority.`
    },
    {
      id: 31,
      title: '31. Scribe & Compensatory Time Facility Rules',
      content: `As per Clause C(f) of the official notification:
- **Compensatory Time:** Permitted at the rate of **20 minutes per hour of examination** (total 60 extra minutes for 3-hour CBT) upon prior request.
- **Scribe Arrangement:** Candidates must arrange their own scribe at their own end.
- **Scribe Qualification:** The academic qualification of the scribe must not exceed the minimum qualification criteria of the examination.`
    },
    {
      id: 32,
      title: '32. Ex-Servicemen (ESM) Horizontal Reservation Policy',
      content: `03 vacancies are earmarked for Ex-Servicemen under horizontal reservation in the Junior Assistant cadre.
- Ex-servicemen who have already secured regular civil employment in Group C or D posts after availing ESM reservation benefits are NOT eligible for ESM reservation or fee concession in subsequent civil jobs.
- However, benefit can be availed if they submitted proper self-declaration / undertaking to the employer immediately after joining.`
    },
    {
      id: 33,
      title: '33. Stage-I Syllabus: General Intelligence & Reasoning (50 Marks)',
      content: `Topics covered in the 50 questions of General Intelligence &amp; Reasoning:
- Analogies (Semantic, Symbolic, Figural)
- Similarities and Differences, Spatial Orientation
- Coding and Decoding, Number Series, Alphabet Series
- Syllogisms, Statement &amp; Conclusion, Venn Diagrams
- Direction Sense, Blood Relations, Seating Arrangement
- Paper Folding &amp; Cutting, Embedded Figures, Mirror &amp; Water Images
- Critical Thinking, Problem Solving, and Decision Making.`
    },
    {
      id: 34,
      title: '34. Stage-I Syllabus: General Awareness (50 Marks)',
      content: `Topics covered in the 50 questions of General Awareness:
- Current Events (National &amp; International Affairs of past 6–12 months)
- Indian Polity &amp; Constitution of India
- Indian History, National Movement &amp; Culture
- Geography (Physical, Economic &amp; Social)
- Indian Economy &amp; Budget Highlights
- General Science &amp; Everyday Technology
- Scientific Research, Health Initiatives, Government Welfare Schemes &amp; Policies.`
    },
    {
      id: 35,
      title: '35. Stage-I Syllabus: Quantitative Aptitude (50 Marks)',
      content: `Topics covered in the 50 questions of Quantitative Aptitude:
- Number System, Fractions, Decimals, LCM &amp; HCF
- Percentages, Ratios &amp; Proportions, Averages
- Profit, Loss &amp; Discount, Simple &amp; Compound Interest
- Time &amp; Work, Pipes &amp; Cisterns, Time, Speed &amp; Distance
- Mensuration (2D &amp; 3D Area, Volume, Perimeter)
- Basic Algebra, Linear Equations
- Data Interpretation (Tables, Bar Charts, Line Graphs, Pie Charts).`
    },
    {
      id: 36,
      title: '36. Stage-I Syllabus: English Comprehension (50 Marks)',
      content: `Topics covered in the 50 questions of English Comprehension:
- Reading Comprehension Passages
- Vocabulary (Synonyms, Antonyms, One-Word Substitution, Spelling Errors)
- Idioms &amp; Phrases, Phrasal Verbs
- English Grammar (Parts of Speech, Subject-Verb Agreement, Tenses, Articles, Prepositions)
- Error Detection, Sentence Improvement &amp; Sentence Rearrangement (Para Jumbles)
- Cloze Test &amp; Fill in the Blanks.`
    },
    {
      id: 37,
      title: '37. Mandatory Documents Checklist to Carry to Exam Hall',
      content: `Candidates must carry the following mandatory documents to enter the examination venue:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Required Item</th>
        <th class="p-3">Specification / Condition</th>
        <th class="p-3">Mandatory?</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold">1. Printed E-Admit Card</td>
        <td class="p-3">Clear, legible color printout on clean A4 paper (Carry 2 copies)</td>
        <td class="p-3 font-bold text-rose-700">COMPULSORY</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">2. Original Photo Identity Proof</td>
        <td class="p-3">Must have identical name and date of birth matching the application</td>
        <td class="p-3 font-bold text-rose-700">COMPULSORY</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">3. Passport Size Photographs</td>
        <td class="p-3">At least 2 recent color photos (identical to uploaded application photo)</td>
        <td class="p-3 font-bold text-rose-700">COMPULSORY</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">4. PwBD Certificate &amp; Scribe Documents</td>
        <td class="p-3">If seeking scribe or compensatory time (original medical certificate)</td>
        <td class="p-3 text-amber-700 font-bold">If Applicable</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">5. Transparent Blue/Black Ballpoint Pen</td>
        <td class="p-3">For rough work signatures and biometric attendance sheets</td>
        <td class="p-3 font-bold text-slate-700">Recommended</td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 38,
      title: '38. Acceptable Original Photo Identity Proofs',
      content: `Any one of the following government-issued original photo ID proofs is valid:
- **Aadhaar Card / e-Aadhaar printout with visible photograph**
- **Voter ID Card (EPIC)**
- **Driving License (Smart Card or laminated card)**
- **Passport (Valid)**
- **PAN Card**
- **Bank Passbook with attested photograph**
- **Valid Government Employee Identity Card**.
Photocopies, scanned images on mobile screens, or expired identity documents are strictly rejected.`
    },
    {
      id: 39,
      title: '39. Prohibited Items & Hall Security Protocol',
      content: `As per Clause T(x) and Clause G(xvi) of the official notification:
The following items are **STRICTLY PROHIBITED** inside the examination centre:
- Mobile phones, smart phones, pagers, Bluetooth devices, earphones, microphones.
- Smart watches, electronic fitness bands, calculators, digital diaries.
- Any metallic items, wallets, pouches, handbags, bags.
- Notes, printed or written paper, rough sheets, books, log tables.
Any candidate found in possession of banned electronic devices will face instant cancellation of candidature, confiscation of equipment, and permanent debarment from all future examinations conducted by NBEMS.`
    },
    {
      id: 40,
      title: '40. Reporting Time & Strict Gate Closure Protocol',
      content: `Candidates must reach the allotted test centre strictly at the **Reporting Time** specified on their E-Admit Card.
- Entry gates will close precisely at the gate closure time printed on the hall ticket.
- Under no circumstances will any candidate be permitted inside after gate closure.
- Candidates must account for traffic, weather conditions, and travel time to avoid disqualification.`
    },
    {
      id: 41,
      title: '41. Dress Code & Examination Day Etiquette',
      content: `To facilitate swift frisking and biometric authentication:
- Wear simple, comfortable attire without heavy metallic buttons, buckles, or broad jewelry.
- Footwear should preferably be slippers, sandals, or low-heeled shoes.
- Maintain absolute silence and decorum inside the computer lab.
- Follow invigilator instructions and do not tamper with computer keyboards, mice, or cables.`
    },
    {
      id: 42,
      title: '42. Character Verification & Disqualification Standards',
      content: `As specified under Section L and Section M:
- A candidate for direct recruitment must possess exemplary moral character.
- Persons dismissed by the Union Government, State Governments, local authorities, or public sector corporations are deemed permanently ineligible.
- Marital Status Rule: A male candidate with more than one living wife, or a female candidate who has married a person having a living wife, is not eligible for recruitment unless specifically exempted by the appointing authority.`
    },
    {
      id: 43,
      title: '43. Physical Fitness & Medical Standards Requirements',
      content: `As specified under Section N:
- No candidate will be appointed to the Board unless declared mentally and physically sound and free from any defect likely to interfere with efficient performance of official duties.
- Selected candidates must undergo a comprehensive medical examination and obtain a Physical Fitness Certificate issued by the designated medical authority prior to appointment.`
    },
    {
      id: 44,
      title: '44. Right to Information (RTI) Disclosure Policy',
      content: `As per Clause F(xii) & Clause F(xv) of the official notice:
- Information uploaded on the website is not provided under the RTI Act, 2005 during the active recruitment process.
- In midway of recruitment, no application under RTI Act will be entertained.
- Factual information under RTI Act will be provided only after the declaration of final results.
- Inferential and speculative questions will not be answered.`
    },
    {
      id: 45,
      title: '45. Legal Jurisdiction (New Delhi Courts Only)',
      content: `As specified in Section T(vi) of the official notification:
Any legal dispute, writ petition, or legal proceedings arising out of this recruitment process shall fall strictly under the exclusive territorial jurisdiction of the competent Courts at **New Delhi**.`
    },
    {
      id: 46,
      title: '46. Photo, Signature & Document Resizer Integration',
      content: `Candidates preparing documents for NBEMS applications or document verification can use the 100% free, private client-side utilities on RajDailyTools:
- **Photo Resizer:** Format passport images to ≤ 80 KB in JPG/JPEG as required by NBEMS.
- **Signature Resizer:** Compress signature scans to ≤ 50 KB in JPG/JPEG.
- **Age Calculator:** Calculate exact age in Years, Months, and Days as on the crucial cut-off date (20.07.2026).
- **Eligibility Evaluator:** Cross-verify academic requirements against official Board standards.`
    },
    {
      id: 47,
      title: '47. Preparation & Last-Minute Exam Tips',
      content: `Effective strategy for Stage-I CBT:
- **Time Management:** You have 180 minutes for 200 questions (approx. 54 seconds per question).
- **Accuracy First:** Due to the 0.25 negative marking penalty, avoid answering speculative questions where you cannot eliminate at least two options.
- **Section Order:** Start with your strongest section (e.g. English or General Awareness) to build confidence and bank quick marks before moving to Quantitative Aptitude and Reasoning.`
    },
    {
      id: 48,
      title: '48. Key Frequently Asked Questions Summary',
      content: `Quick answers to common candidate queries:
- **Is the admit card out?** Yes, E-Admit Cards are actively downloadable via the Digialm portal.
- **When is the CBT?** 15–16 September 2026.
- **Is there negative marking?** Yes, 0.25 mark penalty for every wrong response.
- **Is there an interview?** No, interviews are abolished for Group B and Group C posts.`
    },
    {
      id: 49,
      title: '49. Official Contact Directory & Address',
      content: `<div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 text-xs sm:text-sm">
  <p class="font-bold text-slate-900">National Board of Examinations in Medical Sciences (NBEMS)</p>
  <p class="text-slate-600">NAMS Building, Medical Enclave, Mahatma Gandhi Marg (Ring Road), Ansari Nagar, New Delhi – 110029</p>
  <p><strong>Phone Helpline:</strong> <span class="font-mono font-bold text-blue-700">011-45593000</span></p>
  <p><strong>Email Address:</strong> <span class="font-mono font-bold text-blue-700">recruitment@natboard.edu.in</span></p>
  <p><strong>Official Website:</strong> <a href="https://natboard.edu.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">https://natboard.edu.in/</a></p>
</div>`
    },
    {
      id: 50,
      title: '50. Important Official Links Directory',
      content: `<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Official Link Title</th>
        <th class="p-3">Destination Link</th>
        <th class="p-3 text-center">Action</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-bold text-purple-900">Download Admit Card (Direct Login)</td>
        <td class="p-3 font-mono text-xs text-blue-600 break-all">https://cdn3.digialm.com/EForms/configuredHtml/1815/101418/login.html</td>
        <td class="p-3 text-center"><a href="https://cdn3.digialm.com/EForms/configuredHtml/1815/101418/login.html" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-purple-700 text-white rounded-lg font-bold text-xs hover:bg-purple-800 inline-block">Download</a></td>
      </tr>
      <tr>
        <td class="p-3 font-bold text-blue-900">Official Vacancy Notification PDF</td>
        <td class="p-3 font-mono text-xs text-blue-600 break-all">https://natboard.edu.in/viewNotice.php?NBE=UGRseW1ZVldCdUcxbmZZWWg1ZFMxdz09</td>
        <td class="p-3 text-center"><a href="https://natboard.edu.in/viewNotice.php?NBE=UGRseW1ZVldCdUcxbmZZWWg1ZFMxdz09" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-blue-600 text-white rounded-lg font-bold text-xs hover:bg-blue-700 inline-block">View PDF</a></td>
      </tr>
      <tr>
        <td class="p-3 font-bold text-slate-900">NBEMS Official Website</td>
        <td class="p-3 font-mono text-xs text-blue-600 break-all">https://natboard.edu.in/</td>
        <td class="p-3 text-center"><a href="https://natboard.edu.in/" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-slate-800 text-white rounded-lg font-bold text-xs hover:bg-slate-900 inline-block">Visit</a></td>
      </tr>
      <tr>
        <td class="p-3 font-bold text-sky-900">Join Official Telegram Channel</td>
        <td class="p-3 font-mono text-xs text-blue-600 break-all">https://t.me/Educator4ll</td>
        <td class="p-3 text-center"><a href="https://t.me/Educator4ll" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-sky-500 text-white rounded-lg font-bold text-xs hover:bg-sky-600 inline-block">Join</a></td>
      </tr>
    </tbody>
  </table>
</div>`
    }
  ];
}

export const NBEMS_GROUP_ABC_2026_EXAM: ExamRecord = {
  id: 'nbems-group-abc-2026',
  slug: 'nbems-group-a-b-c-admit-card-2026',
  examName: 'NBEMS Group A, B & C Various Posts Admit Card 2026',
  organization: 'National Board of Examinations in Medical Sciences (NBEMS)',
  category: 'Govt Exam',
  education: ['12th', 'Graduation', 'Post Graduation'],
  ageMin: 18,
  ageMax: 35,
  postName: 'Deputy Director (Medical), Junior Programmer, Junior Accountant, Stenographer, Junior Assistant',
  totalVacancy: '53 Posts',
  applicationStartDate: '2026-06-29',
  applicationLastDate: '2026-07-20',
  admitCardDate: '2026-09-01',
  examDate: '2026-09-15',
  answerKeyDate: '2026-09-22',
  resultDate: '2026-10-15',
  cutOffDate: '2026-10-15',
  status: 'ADMIT_CARD_RELEASED',
  admitCardLink: 'https://cdn3.digialm.com/EForms/configuredHtml/1815/101418/login.html',
  officialNotification: 'https://natboard.edu.in/viewNotice.php?NBE=UGRseW1ZVldCdUcxbmZZWWg1ZFMxdz09',
  officialWebsite: 'https://natboard.edu.in/',
  applyLink: 'https://natboard.edu.in/',
  logoIcon: '🏥',
  description:
    'National Board of Examinations in Medical Sciences (NBEMS) has released the E-Admit Card for Group A, B & C Various Posts (Deputy Director, Junior Programmer, Junior Accountant, Stenographer, Junior Assistant) CBT written examination scheduled on 15–16 September 2026.',
  shortSummary:
    'NBEMS Group A, B & C Various Posts Admit Card 2026 is released on 01 September 2026 for 53 vacancies. CBT examination scheduled on 15–16 September 2026. Download your hall ticket using Candidate Login on the official Digialm portal.',
  salary: {
    payScale: 'Level-2 (₹19,900 - ₹63,200) to Level-11 (₹67,700 - ₹2,08,700)',
    inHand: '₹28,000 - ₹1,10,000 / month (approx depending on post)',
    allowances: 'DA (50%), HRA, Transport Allowance, Medical Benefits & NPS'
  },
  ageRelaxationInfo: 'OBC: 3 Years, SC/ST: 5 Years, PwBD: 10 Years, Ex-Servicemen: As per Govt rules',
  minimumQualificationLevel: '12th Pass / Bachelor Degree / B.Tech / BCA / PG Medical',
  applicationFee: [
    { category: 'UR / OBC / EWS', amount: '₹1,500 + 18% GST (Total ₹1,770)' },
    { category: 'SC / ST / PwBD / Women', amount: 'Exempted (Nil)' }
  ],
  allInformation: generateNbems50Sections(),
  faq: [
    {
      q: 'Is the NBEMS Group A, B & C Admit Card 2026 released?',
      a: 'Yes, the E-Admit Card for NBEMS Group A, B & C Various Posts CBT examination has been officially released on 01 September 2026 and is available for download on the Digialm login portal.'
    },
    {
      q: 'What is the examination date for NBEMS Group A, B & C 2026?',
      a: 'The Stage-I Computer Based Test (CBT) is scheduled to be held on 15–16 September 2026 in multiple shifts across designated test centres in India.'
    },
    {
      q: 'How many total vacancies are announced in NBEMS Recruitment 2026?',
      a: 'A total of 53 vacancies are announced under Advt No. A-12011/3/2025-Estb, including Deputy Director Medical (02), Junior Programmer (01), Junior Accountant (04), Stenographer (07), and Junior Assistant (39 including 01 backlog ST vacancy).'
    },
    {
      q: 'What credentials are required to download the NBEMS Admit Card?',
      a: 'Candidates need their User ID / Application Number and Password along with the security Captcha code to log in to the official Digialm portal (https://cdn3.digialm.com/EForms/configuredHtml/1815/101418/login.html).'
    },
    {
      q: 'Is there negative marking in NBEMS Stage-I CBT?',
      a: 'Yes, there is negative marking of 0.25 marks for each incorrect answer in the Stage-I Computer Based Test.'
    },
    {
      q: 'What is the selection process for Group B and Group C posts in NBEMS?',
      a: 'The selection consists of two stages: Stage-I Computer Based Test (200 Questions, 200 Marks, 180 Minutes) and Stage-II Computer Knowledge / Skill Test (100 Marks, 75 Minutes). There is no interview for Group B and C posts.'
    },
    {
      q: 'What is the mandatory Penalty Bond requirement in NBEMS?',
      a: 'Selected candidates are required to execute a Penalty Bond agreeing to serve NBEMS for a minimum continuous period of two (2) years. If resigning before completing 2 years, the candidate must pay 3 months’ salary as liquidated damages.'
    }
  ]
};

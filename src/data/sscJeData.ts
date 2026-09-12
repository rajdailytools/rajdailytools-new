import { ExamRecord, ExamInfoSection } from '../types/exam';

export function generateSscJe50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. Recruitment Summary & Overview',
      badge: 'Overview',
      content: `
        <div class="space-y-4 text-slate-700 leading-relaxed">
          <p>The <strong>Staff Selection Commission (SSC)</strong> has released the official recruitment notification for the <strong>Junior Engineer (Civil, Mechanical &amp; Electrical) Examination, 2026</strong> along with <strong>Scientific Assistant in India Meteorological Department (IMD)</strong> under Reference Notice No. <strong>F. No. HQ-C-3019/1/2026-C-3</strong>.</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Parameter</th><th class="p-2.5 border border-slate-200">Official Notification Details</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">Exam Name</td><td class="p-2.5 font-bold text-slate-900">SSC Junior Engineer (JE) &amp; IMD Scientific Assistant Examination 2026</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Conducting Body</td><td class="p-2.5">Staff Selection Commission (SSC), New Delhi</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Notice Reference</td><td class="p-2.5 font-mono">F. No. HQ-C-3019/1/2026-C-3</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Total Tentative Vacancies</td><td class="p-2.5 font-bold text-blue-700">1,748 Posts (Group 'B' Non-Gazetted)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Pay Scale / Pay Level</td><td class="p-2.5 font-bold text-emerald-700">Level-6 (₹35,400 – ₹1,12,400) [7th Central Pay Commission]</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Online Application Dates</td><td class="p-2.5 font-bold text-slate-900">02.09.2026 to 22.09.2026 (23:00 Hrs)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Online Fee Payment Last Date</td><td class="p-2.5 font-bold text-red-700">23.09.2026 (23:00 Hrs)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Correction Window</td><td class="p-2.5 font-bold text-blue-700">28.09.2026 to 30.09.2026 (23:00 Hrs)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Paper-I CBE Schedule</td><td class="p-2.5 font-bold text-purple-700">October / November 2026</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Paper-II CBE Schedule</td><td class="p-2.5 font-bold text-purple-700">December 2026</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Official Website &amp; Portal</td><td class="p-2.5"><a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">ssc.gov.in</a></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: '2. Conducting Authority (Staff Selection Commission)',
      badge: 'Authority',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>The <strong>Staff Selection Commission (SSC)</strong> is an attached office under the Department of Personnel and Training (DoPT), Ministry of Personnel, Public Grievances and Pensions, Government of India. The Commission conducts open competitive examinations to recruit staff for Group ‘B’ (Non-Gazetted) and Group ‘C’ posts in Ministries, Departments, and Attached/Subordinate offices of the Government of India.</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Headquarters:</strong> Block No. 12, CGO Complex, Lodhi Road, New Delhi – 110003.</li>
            <li><strong>Official Portal:</strong> <a href="https://ssc.gov.in" target="_blank" class="text-blue-600 underline">https://ssc.gov.in</a></li>
            <li><strong>Toll-Free Helpline:</strong> 180 030 930 63</li>
          </ul>
        </div>
      `
    },
    {
      id: 3,
      title: '3. Official Examination Notice & Post Classification',
      badge: 'Level-6 Group B',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>All posts advertised under the <strong>Junior Engineer Examination, 2026</strong> and <strong>Scientific Assistant in India Meteorological Department (IMD)</strong> are classified as:</p>
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl space-y-1.5">
            <div><strong>Classification:</strong> General Central Service Group ‘B’ Non-Gazetted, Non-Ministerial</div>
            <div><strong>Pay Matrix:</strong> Level-6 (₹35,400 to ₹1,12,400) under the 7th CPC Pay Matrix</div>
            <div><strong>Service Liability:</strong> All India Service Liability (AISL) – Candidates selected are liable to serve anywhere in India.</div>
          </div>
        </div>
      `
    },
    {
      id: 4,
      title: '4. Total Vacancies Breakdown (1,748 Tentative Posts)',
      badge: '1,748 Posts',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>As per Para 3 of the official notice, the total number of <strong>Tentative Vacancies is 1,748</strong> across participating Central Government Ministries, Departments, and Border Organizations.</p>
          <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950">
            <strong>Tentative Vacancies:</strong> 1,748 (One Thousand Seven Hundred Forty-Eight). Detailed post-wise, category-wise, and department-wise vacancy rosters are published under the <em>Candidate's Corner &gt; Tentative Vacancy</em> section on <a href="https://ssc.gov.in" target="_blank" class="text-emerald-700 font-bold underline">ssc.gov.in</a>.
          </div>
          <p class="text-slate-500"><em>Note:</em> State-wise or Zone-wise vacancies are not compiled by the Commission; candidates must approach the respective User Departments for state/zonal distribution.</p>
        </div>
      `
    },
    {
      id: 5,
      title: '5. Participating Organizations & Departments (14 Units)',
      badge: 'Organizations',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr>
                <th class="p-2 border">S.No.</th>
                <th class="p-2 border">Organization / Department</th>
                <th class="p-2 border">Posts Available</th>
                <th class="p-2 border">Max Age</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2 border">1</td><td class="p-2 border font-semibold">Border Roads Organization (BRO) [Male only]</td><td class="p-2 border">JE (Civil), JE (Electrical &amp; Mechanical)</td><td class="p-2 border font-bold">Up to 30 Yrs</td></tr>
              <tr><td class="p-2 border">2</td><td class="p-2 border font-semibold">Brahmaputra Board, Ministry of Jal Shakti</td><td class="p-2 border">JE (Civil)</td><td class="p-2 border font-bold">Up to 30 Yrs</td></tr>
              <tr><td class="p-2 border">3</td><td class="p-2 border font-semibold">Central Water Commission (CWC)</td><td class="p-2 border">JE (Mechanical), JE (Civil)</td><td class="p-2 border font-bold">Up to 30 Yrs</td></tr>
              <tr><td class="p-2 border">4</td><td class="p-2 border font-semibold">Central Public Works Department (CPWD)</td><td class="p-2 border">JE (Electrical), JE (Civil)</td><td class="p-2 border font-bold text-blue-700">Up to 32 Yrs</td></tr>
              <tr><td class="p-2 border">5</td><td class="p-2 border font-semibold">Central Water &amp; Power Research Station (CWPRS)</td><td class="p-2 border">JE (Electrical), JE (Civil)</td><td class="p-2 border font-bold">Up to 30 Yrs</td></tr>
              <tr><td class="p-2 border">6</td><td class="p-2 border font-semibold">DGQA-NAVAL, Ministry of Defence</td><td class="p-2 border">JE (Mechanical), JE (Electrical)</td><td class="p-2 border font-bold">Up to 30 Yrs</td></tr>
              <tr><td class="p-2 border">7</td><td class="p-2 border font-semibold">Farakka Barrage Project, Ministry of Jal Shakti</td><td class="p-2 border">JE (Electrical), JE (Civil)</td><td class="p-2 border font-bold">Up to 30 Yrs</td></tr>
              <tr><td class="p-2 border">8</td><td class="p-2 border font-semibold">Military Engineer Services (MES)</td><td class="p-2 border">JE (Civil), JE (Electrical &amp; Mechanical)</td><td class="p-2 border font-bold">Up to 30 Yrs</td></tr>
              <tr><td class="p-2 border">9</td><td class="p-2 border font-semibold">National Technical Research Organization (NTRO)</td><td class="p-2 border">JE (Civil)</td><td class="p-2 border font-bold">Up to 30 Yrs</td></tr>
              <tr><td class="p-2 border">10</td><td class="p-2 border font-semibold">Director General of Lighthouses &amp; Lightships (DGLL)</td><td class="p-2 border">JE (Civil), JE (Electrical)</td><td class="p-2 border font-bold text-blue-700">Up to 32 Yrs</td></tr>
              <tr><td class="p-2 border">11</td><td class="p-2 border font-semibold">Department of Telecommunication (DoT)</td><td class="p-2 border">JE (Telecom)</td><td class="p-2 border font-bold">Up to 30 Yrs</td></tr>
              <tr><td class="p-2 border">12</td><td class="p-2 border font-semibold">India Meteorological Department (IMD)</td><td class="p-2 border font-bold text-indigo-700">Scientific Assistant (SA)</td><td class="p-2 border font-bold">Up to 30 Yrs</td></tr>
              <tr><td class="p-2 border">13</td><td class="p-2 border font-semibold">Ministry of Fisheries, Animal Husbandry and Dairying</td><td class="p-2 border">JE (Civil)</td><td class="p-2 border font-bold">Up to 30 Yrs</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 6,
      title: '6. Official Important Dates Timeline',
      badge: 'Timeline',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr><th class="p-2 border">Recruitment Milestone</th><th class="p-2 border">Official Schedule</th></tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2 border font-medium">Notification Issued</td><td class="p-2 border font-bold">02 September 2026</td></tr>
              <tr><td class="p-2 border font-medium">Submission of Online Application Form</td><td class="p-2 border font-bold text-emerald-700">02.09.2026 to 22.09.2026 (23:00 Hrs)</td></tr>
              <tr><td class="p-2 border font-medium">Last Date &amp; Time for Receipt of Online Application</td><td class="p-2 border font-bold text-red-700">22.09.2026 (23:00 Hrs)</td></tr>
              <tr><td class="p-2 border font-medium">Last Date &amp; Time for Making Online Fee Payment</td><td class="p-2 border font-bold text-red-700">23.09.2026 (23:00 Hrs)</td></tr>
              <tr><td class="p-2 border font-medium">Online Application Correction Window</td><td class="p-2 border font-bold text-blue-700">28.09.2026 to 30.09.2026 (23:00 Hrs)</td></tr>
              <tr><td class="p-2 border font-medium">Schedule of Paper-I Computer Based Examination</td><td class="p-2 border font-extrabold text-purple-700">October / November, 2026</td></tr>
              <tr><td class="p-2 border font-medium">Schedule of Paper-II Computer Based Examination</td><td class="p-2 border font-extrabold text-purple-700">December, 2026</td></tr>
              <tr><td class="p-2 border font-medium">Document Verification (DV) by User Departments</td><td class="p-2 border text-slate-500">Post Final Result Declaration</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 7,
      title: '7. Essential Educational Qualifications (Civil Engineering Posts)',
      badge: 'Civil Criteria',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Para 2 of the notification, educational qualifications for JE (Civil) vary by department:</p>
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>CPWD:</strong> Diploma in Civil Engineering from a recognized University or Institute.</li>
            <li><strong>Central Water Commission (CWC):</strong> Bachelor’s Degree or Diploma in Civil Engineering.</li>
            <li><strong>Brahmaputra Board &amp; NTRO:</strong> 3-Year Diploma in Civil Engineering.</li>
            <li><strong>CWPRS &amp; Farakka Barrage Project:</strong> Diploma in Civil Engineering.</li>
            <li><strong>BRO &amp; MES:</strong> Degree in Civil Engineering; OR 3-Year Diploma in Civil Engineering with <strong>2 Years' working experience</strong> in Planning / Execution / Maintenance of Civil works.</li>
            <li><strong>DGLL:</strong> Degree in Civil Engineering; OR Diploma in Civil Engineering with <strong>3 Years' experience</strong>.</li>
            <li><strong>Ministry of Fisheries:</strong> Degree or 3-Year Diploma in Civil Engineering.</li>
          </ul>
        </div>
      `
    },
    {
      id: 8,
      title: '8. Essential Educational Qualifications (Electrical & Mechanical Posts)',
      badge: 'E & M Criteria',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Para 2 of the notification:</p>
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>CPWD:</strong> Diploma in Electrical or Mechanical Engineering from a recognized University/Institute.</li>
            <li><strong>CWC:</strong> Bachelor’s Degree or Diploma in Mechanical Engineering.</li>
            <li><strong>CWPRS &amp; Farakka Barrage:</strong> Diploma in Electrical Engineering.</li>
            <li><strong>DGQA (Naval):</strong> Degree in Mechanical / Electrical Engineering; OR 3-Year Diploma with <strong>2 Years' experience</strong> in the respective field.</li>
            <li><strong>BRO &amp; MES:</strong> Degree in Electrical or Mechanical Engineering; OR 3-Year Diploma in Electrical / Mechanical / Automobile Engineering with <strong>2 Years' experience</strong> in Planning / Execution / Maintenance.</li>
            <li><strong>DGLL:</strong> Degree in Electrical Engineering; OR Diploma in Electrical Engineering with <strong>3 Years' experience</strong>.</li>
          </ul>
        </div>
      `
    },
    {
      id: 9,
      title: '9. Essential Qualifications for JE (Telecom) in DoT',
      badge: 'JE Telecom',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>Under S.No. 12 of Para 2 for <strong>Department of Telecommunications (DoT)</strong>:</p>
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl">
            <strong class="text-blue-950 font-bold block mb-1">Prescribed Qualification:</strong>
            <p class="text-blue-900">Bachelor's Degree in Engineering or Technology (B.E. / B.Tech) in Electrical or Electronics or Electrical Communications or Computer Science or Telecommunications or Information Technology or Instrumentation from a recognized University or Institute.</p>
          </div>
          <p><strong>Age Limit:</strong> Up to 30 Years.</p>
        </div>
      `
    },
    {
      id: 10,
      title: '10. Essential Qualifications for Scientific Assistant in IMD',
      badge: 'IMD Scientific Asst',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>Under S.No. 13 of Para 2 for <strong>India Meteorological Department (IMD)</strong>:</p>
          <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-xl space-y-1.5">
            <strong class="text-indigo-950 font-bold block">Educational Requirements:</strong>
            <p class="text-indigo-900">Bachelor’s Degree in Science (B.Sc.) with <strong>Physics</strong> as one of the subjects from a recognized university / institution;<br/>
            <strong>OR</strong><br/>
            Bachelor’s Degree in Computer Science or Computer Applications or Electronics or Electronics and Communication Engineering or Electronics &amp; Telecommunication Engineering or Instrumentation or Information Technology or Telecommunication Engineering or Communication Engineering from a recognized institution / university.</p>
          </div>
          <p><strong>Age Limit:</strong> Up to 30 Years.</p>
        </div>
      `
    },
    {
      id: 11,
      title: '11. Cross-Discipline Post Eligibility Rules (Notes 1 to 4)',
      badge: 'Eligibility Notes',
      content: `
        <div class="space-y-2.5 text-slate-700 leading-relaxed text-xs">
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Note 1:</strong> Candidates opting for the post of Junior Engineer (Mechanical) are also eligible for Junior Engineer (Electrical &amp; Mechanical).</li>
            <li><strong>Note 2:</strong> Candidates opting for JE (Telecom) are also eligible for Scientific Assistant in IMD / Junior Engineer (Electrical), subject to fulfilling essential qualification.</li>
            <li><strong>Note 3:</strong> Candidates opting for JE (Electrical) are also eligible for JE (Telecom) subject to fulfilling EQ, as well as JE (Electrical &amp; Mechanical).</li>
            <li><strong>Note 4:</strong> Candidates opting for Scientific Assistant in IMD are also eligible for JE (Telecom) subject to fulfilling its EQ.</li>
          </ul>
        </div>
      `
    },
    {
      id: 12,
      title: '12. Crucial Cut-Off Date for Educational Qualification & Experience',
      badge: 'Cut-Off 22.09.2026',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>As per Para 2 and 2.4 of the notice, the crucial date for determining Essential Educational Qualifications and Experience is the <strong>closing date of the Online Application Form: 22 September 2026 (23:00 Hrs)</strong>.</p>
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-950">
            <strong>Mandatory Rule:</strong> The result of the qualifying degree/diploma must have been declared by the University/Institute on or before <strong>22.09.2026</strong>. Mere completion of exams or processing of results without formal declaration before 22.09.2026 does not fulfill the eligibility requirement.
          </div>
        </div>
      `
    },
    {
      id: 13,
      title: '13. Experience Calculation Rules (Internships Excluded)',
      badge: 'Work Experience',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>As per Para 2.1 of the notice:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li>Where experience is required (e.g. BRO, MES, DGQA, DGLL), such experience must have been acquired <strong>after completion of the requisite Educational Qualification</strong>.</li>
            <li>Internships, industrial trainings, apprenticeships, and research fellowships completed during the course of acquiring the degree/diploma will <strong>NOT</strong> be counted as requisite work experience.</li>
          </ul>
        </div>
      `
    },
    {
      id: 14,
      title: '14. Age Limit Criteria & Crucial Date (01.08.2026)',
      badge: 'Crucial 01.08.2026',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Para 7.1, the crucial date for age reckoning is <strong>01 August 2026 (01.08.2026)</strong>:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <strong class="text-slate-900 block font-bold mb-1">Posts with Age Limit Up to 30 Years:</strong>
              <p class="text-slate-700">Candidate must have been born not earlier than <strong>02.08.1996</strong> and not later than <strong>01.08.2008</strong>.</p>
            </div>
            <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <strong class="text-blue-950 block font-bold mb-1">Posts with Age Limit Up to 32 Years (CPWD &amp; DGLL):</strong>
              <p class="text-blue-900">Candidate must have been born not earlier than <strong>02.08.1994</strong> and not later than <strong>01.08.2008</strong>.</p>
            </div>
          </div>
          <p class="text-slate-500">Date of Birth filled in the online application must match the Matriculation / Secondary Examination Certificate strictly.</p>
        </div>
      `
    },
    {
      id: 15,
      title: '15. Category-Wise Upper Age Relaxation',
      badge: 'Age Relaxation',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr><th class="p-2 border">Category Code</th><th class="p-2 border">Category</th><th class="p-2 border">Age Relaxation Permissible</th></tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2 border font-mono">01</td><td class="p-2 border font-semibold">SC / ST</td><td class="p-2 border font-bold text-blue-700">5 Years</td></tr>
              <tr><td class="p-2 border font-mono">02</td><td class="p-2 border font-semibold">OBC</td><td class="p-2 border font-bold text-blue-700">3 Years</td></tr>
              <tr><td class="p-2 border font-mono">03</td><td class="p-2 border font-semibold">PwBD (Unreserved / EWS)</td><td class="p-2 border font-bold text-blue-700">10 Years</td></tr>
              <tr><td class="p-2 border font-mono">04</td><td class="p-2 border font-semibold">PwBD (OBC)</td><td class="p-2 border font-bold text-blue-700">13 Years</td></tr>
              <tr><td class="p-2 border font-mono">05</td><td class="p-2 border font-semibold">PwBD (SC / ST)</td><td class="p-2 border font-bold text-blue-700">15 Years</td></tr>
              <tr><td class="p-2 border font-mono">06</td><td class="p-2 border font-semibold">Ex-Servicemen (ESM)</td><td class="p-2 border font-bold text-blue-700">3 Years after deduction of military service from actual age</td></tr>
              <tr><td class="p-2 border font-mono">08</td><td class="p-2 border font-semibold">Defence Personnel disabled in operation (UR/EWS/OBC)</td><td class="p-2 border font-bold text-blue-700">3 Years</td></tr>
              <tr><td class="p-2 border font-mono">09</td><td class="p-2 border font-semibold">Defence Personnel disabled in operation (SC/ST)</td><td class="p-2 border font-bold text-blue-700">8 Years</td></tr>
            </tbody>
          </table>
          <p class="text-[11px] text-slate-500"><em>Note:</em> Age relaxation is not admissible to sons, daughters, or dependents of Ex-Servicemen.</p>
        </div>
      `
    },
    {
      id: 16,
      title: '16. Nationality & Citizenship Requirements',
      badge: 'Citizenship',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>Under Para 6, a candidate must be either:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>A citizen of India, or</li>
            <li>A subject of Nepal, or</li>
            <li>A subject of Bhutan, or</li>
            <li>A person of Indian origin migrated from Pakistan, Burma, Sri Lanka, East African countries of Kenya, Uganda, Tanzania, Zambia, Malawi, Zaire, Ethiopia, and Vietnam with the intention of permanently settling in India (holding an eligibility certificate issued by the Government of India).</li>
          </ul>
        </div>
      `
    },
    {
      id: 17,
      title: '17. Application Fee & Fee Exemption',
      badge: 'Fee: ₹100',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <strong class="text-slate-900 block font-bold mb-1">Application Fee Payable:</strong>
              <div class="text-xl font-black text-slate-900 font-display">₹ 100/-</div>
              <p class="text-slate-500 text-[11px] mt-1">Payable by Male General (UR), OBC, and EWS candidates.</p>
            </div>
            <div class="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl">
              <strong class="text-emerald-950 block font-bold mb-1">Fee Exempted Categories:</strong>
              <div class="text-xl font-black text-emerald-800 font-display">₹ 0/- (Nil)</div>
              <p class="text-emerald-900 text-[11px] mt-1">All Women candidates, SC, ST, PwBD, and Ex-Servicemen (ESM) candidates are completely exempted from payment of fee.</p>
            </div>
          </div>
          <p class="text-slate-600">Fee can be paid online via BHIM UPI, Net Banking, or Visa, MasterCard, Maestro, or RuPay Debit Card up to <strong>23.09.2026 (23:00 Hrs)</strong>. Fee once paid is non-refundable.</p>
        </div>
      `
    },
    {
      id: 18,
      title: '18. Application Correction Window & Charges (₹200 / ₹500)',
      badge: 'Correction Fee',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Para 11 of the notice, an online correction window is scheduled from <strong>28.09.2026 to 30.09.2026 (23:00 Hrs)</strong>:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li>Candidates can re-submit their modified form a maximum of <strong>two (02) times</strong>.</li>
            <li><strong>First correction charges:</strong> ₹ 200/- (Uniform for all categories and genders).</li>
            <li><strong>Second correction charges:</strong> ₹ 500/- (Uniform for all categories and genders).</li>
            <li>The latest modified application form will be treated as valid and all prior submissions stand cancelled.</li>
          </ul>
        </div>
      `
    },
    {
      id: 19,
      title: '19. Examination Scheme Overview (Paper-I & Paper-II)',
      badge: 'Exam Scheme',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>The examination consists of <strong>two Computer Based Examinations (CBE)</strong>:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono">
            <div class="p-3.5 bg-blue-50 border border-blue-200 rounded-xl space-y-1">
              <strong class="text-blue-950 font-bold block">PAPER-I (CBE) [Qualifying in Nature]:</strong>
              <div>• Questions: 200 MCQs | Marks: 200</div>
              <div>• Duration: 2 Hours (120 Mins)</div>
              <div>• Negative Marking: 0.25 mark per wrong answer</div>
              <div>• Purpose: Shortlisting for Paper-II based on normalized merit</div>
            </div>
            <div class="p-3.5 bg-indigo-50 border border-indigo-200 rounded-xl space-y-1">
              <strong class="text-indigo-950 font-bold block">PAPER-II (CBE) [Final Merit Ranking]:</strong>
              <div>• Questions: 100 MCQs | Marks: 300 (3 Marks / Q)</div>
              <div>• Duration: 2 Hours (120 Mins)</div>
              <div>• Negative Marking: 1.00 mark per wrong answer</div>
              <div>• Purpose: Decides final merit and cadre allocation</div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 20,
      title: '20. Paper-I Examination Pattern & Subject Distribution',
      badge: 'Paper-I 200M',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr>
                <th class="p-2 border">Subject / Part</th>
                <th class="p-2 border">Discipline / Post</th>
                <th class="p-2 border">Questions</th>
                <th class="p-2 border">Marks</th>
                <th class="p-2 border">Duration</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2 border font-medium">Part (i)</td><td class="p-2 border">General Intelligence &amp; Reasoning (Compulsory)</td><td class="p-2 border">50</td><td class="p-2 border">50</td><td rowspan="3" class="p-2 border font-bold text-center">2 Hours<br/><span class="text-[10px] text-slate-500">(2 Hr 40 Min for scribe)</span></td></tr>
              <tr><td class="p-2 border font-medium">Part (ii)</td><td class="p-2 border">General Awareness (Compulsory)</td><td class="p-2 border">50</td><td class="p-2 border">50</td></tr>
              <tr>
                <td class="p-2 border font-medium">Part (iii)</td>
                <td class="p-2 border">
                  <strong>Engineering / Science Specialization (Attempt One):</strong><br/>
                  • Part-A: Civil &amp; Structural Engineering<br/>
                  • Part-B: Electrical Engineering<br/>
                  • Part-C: Mechanical Engineering<br/>
                  • Part-D: CS &amp; IT (for SA in IMD)<br/>
                  • Part-E: Electronics &amp; Telecom (for SA in IMD)<br/>
                  • Part-F: Physics (for SA in IMD)<br/>
                  • Part-G: Telecommunication (for JE Telecom)
                </td>
                <td class="p-2 border font-bold">100</td>
                <td class="p-2 border font-bold">100</td>
              </tr>
              <tr class="bg-blue-50/70 font-black"><td colspan="2" class="p-2 border text-right">TOTAL PAPER-I</td><td class="p-2 border font-bold">200 Qs</td><td class="p-2 border font-bold text-blue-900">200 Marks</td><td class="p-2 border text-center font-bold">120 Minutes</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 21,
      title: '21. Paper-II Examination Pattern & Technical Specialization',
      badge: 'Paper-II 300M',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <p>Paper-II is a purely technical domain paper consisting of <strong>100 Multiple-Choice Questions (3 marks each, totaling 300 marks)</strong>:</p>
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr>
                <th class="p-2 border">Part</th>
                <th class="p-2 border">Subject / Domain</th>
                <th class="p-2 border">Questions</th>
                <th class="p-2 border">Marks</th>
                <th class="p-2 border">Duration</th>
                <th class="p-2 border">Negative Marking</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2 border font-medium">Part-A</td><td class="p-2 border">General Engineering (Civil &amp; Structural)</td><td class="p-2 border">100</td><td class="p-2 border font-bold">300</td><td rowspan="7" class="p-2 border font-bold text-center">2 Hours<br/><span class="text-[10px] text-slate-500">(2 Hr 40 Min for scribe)</span></td><td rowspan="7" class="p-2 border text-red-600 font-bold text-center">1.00 Mark per wrong answer</td></tr>
              <tr><td class="p-2 border font-medium">Part-B</td><td class="p-2 border">General Engineering (Electrical)</td><td class="p-2 border">100</td><td class="p-2 border font-bold">300</td></tr>
              <tr><td class="p-2 border font-medium">Part-C</td><td class="p-2 border">General Engineering (Mechanical)</td><td class="p-2 border">100</td><td class="p-2 border font-bold">300</td></tr>
              <tr><td class="p-2 border font-medium">Part-D</td><td class="p-2 border">Computer Science &amp; IT (SA in IMD)</td><td class="p-2 border">100</td><td class="p-2 border font-bold">300</td></tr>
              <tr><td class="p-2 border font-medium">Part-E</td><td class="p-2 border">Electronics &amp; Telecom (SA in IMD)</td><td class="p-2 border">100</td><td class="p-2 border font-bold">300</td></tr>
              <tr><td class="p-2 border font-medium">Part-F</td><td class="p-2 border">Physics (SA in IMD)</td><td class="p-2 border">100</td><td class="p-2 border font-bold">300</td></tr>
              <tr><td class="p-2 border font-medium">Part-G</td><td class="p-2 border">Telecommunication (JE Telecom DoT)</td><td class="p-2 border">100</td><td class="p-2 border font-bold">300</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 22,
      title: '22. Negative Marking Scheme for Paper-I & Paper-II',
      badge: 'Negative Marking',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Para 13.10 of the notice, negative marking rules are strictly differentiated between the two papers:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="p-3 bg-red-50 border border-red-200 rounded-xl">
              <strong class="text-red-950 font-bold block mb-1">Paper-I Negative Marking:</strong>
              <div class="text-lg font-black text-red-700">0.25 Mark per wrong answer</div>
              <p class="text-slate-600 mt-1">Deducted from the 1.0 mark awarded for correct answer (1/4th penalty).</p>
            </div>
            <div class="p-3 bg-red-50 border border-red-200 rounded-xl">
              <strong class="text-red-950 font-bold block mb-1">Paper-II Negative Marking:</strong>
              <div class="text-lg font-black text-red-700">1.00 Mark per wrong answer</div>
              <p class="text-slate-600 mt-1">Deducted from the 3.0 marks awarded for correct answer (1/3rd penalty).</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 23,
      title: '23. Virtual Calculator & On-Screen Reference Tables (IS 456 & Steam Table)',
      badge: 'Screen Features',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Para 13.11 and 13.12 of the notification, candidate-friendly digital tools are integrated directly onto the computer testing console:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Virtual Scientific Calculator:</strong> Available on the computer screen for the entire duration of the examination (located to the left of the candidate's application photo).</li>
            <li><strong>Reference Codes &amp; Steam Tables:</strong> Tables of IS 456:2000 (Code of Practice for Plain &amp; Reinforced Concrete) and Steam Tables are accessible via a dedicated "Useful Data" button on the console.</li>
            <li><strong>Physical Hardware Barred:</strong> No physical calculator, printed table, or chart is permitted inside the exam lab.</li>
          </ul>
        </div>
      `
    },
    {
      id: 24,
      title: '24. Multi-Shift Score Normalization Policy',
      badge: 'Normalization',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Para 13.16, 13.18, and 18.4 of the notification:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li>If Paper-I or Paper-II is conducted across multiple shifts, candidate raw scores will be <strong>normalized</strong> using the standard Commission formula published vide Notice dated 02.06.2025.</li>
            <li>Because mechanical and electrical disciplines receive different question papers for common posts, scores of Mechanical and Electrical engineering are normalized with each other.</li>
            <li>For Scientific Assistant in IMD, marks of Part-D, Part-E, and Part-F are normalized by treating them as distinct shifts.</li>
            <li><strong>Paper-I is qualifying only:</strong> Normalized marks in Paper-I determine shortlisting for Paper-II. Only normalized scores in <strong>Paper-II</strong> decide final merit rankings.</li>
          </ul>
        </div>
      `
    },
    {
      id: 25,
      title: '25. Minimum Qualifying Marks (UR: 30%, OBC/EWS: 25%, Others: 20%)',
      badge: 'Qualifying Cut-off',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Para 18.1 of the notice, the minimum qualifying thresholds for both Paper-I and Paper-II are:</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <span class="text-blue-700 font-bold block">Unreserved (UR)</span>
              <strong class="text-xl font-black text-blue-950">30% Marks</strong>
              <div class="text-[11px] text-slate-500 mt-0.5">Paper-I: 60M | Paper-II: 90M</div>
            </div>
            <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-xl">
              <span class="text-indigo-700 font-bold block">OBC / EWS</span>
              <strong class="text-xl font-black text-indigo-950">25% Marks</strong>
              <div class="text-[11px] text-slate-500 mt-0.5">Paper-I: 50M | Paper-II: 75M</div>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-slate-600 font-bold block">All Other Categories</span>
              <strong class="text-xl font-black text-slate-900">20% Marks</strong>
              <div class="text-[11px] text-slate-500 mt-0.5">Paper-I: 40M | Paper-II: 60M</div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 26,
      title: '26. General Intelligence & Reasoning Syllabus',
      badge: 'GI & Reasoning 50M',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>The syllabus for General Intelligence and Reasoning in Paper-I includes both verbal and non-verbal reasoning topics:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Analogies, similarities, and differences.</li>
            <li>Space visualization, problem solving, analysis, and judgment.</li>
            <li>Decision making, visual memory, and discrimination.</li>
            <li>Observation, relationship concepts, and arithmetical reasoning.</li>
            <li>Verbal and figure classification, arithmetical number series, and non-verbal series.</li>
            <li>Abstract ideas, symbols and relationships, and arithmetical computations.</li>
          </ul>
        </div>
      `
    },
    {
      id: 27,
      title: '27. General Awareness Syllabus',
      badge: 'GA 50M',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>Questions test general knowledge and observation expected of an educated person without requiring specialized study of any discipline:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Current national and international events.</li>
            <li>India and its neighboring countries.</li>
            <li>Indian History, Culture, and Heritage.</li>
            <li>Geography and Economic Scene.</li>
            <li>General Polity and Constitution of India.</li>
            <li>Scientific Research and technological developments.</li>
          </ul>
        </div>
      `
    },
    {
      id: 28,
      title: '28. Civil & Structural Engineering Syllabus',
      badge: 'Civil Syllabus',
      content: `
        <div class="space-y-2.5 text-slate-700 leading-relaxed text-xs">
          <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
            <strong>Civil Engineering Topics:</strong> Engineering Mechanics, Solid Mechanics, Structural Analysis, Construction Materials &amp; Management (bricks, stone, timber, steel, cement, concrete mix design, PERT/CPM), Estimating, Costing &amp; Valuation, Concrete Structures (working stress &amp; limit state), Steel Structures (bolted/welded connections, tension/compression members), Surveying (chain, compass, plane table, theodolite, total station), Soil Mechanics (permeability, seepage, consolidation, shear strength), Fluid Mechanics &amp; Hydraulics (fluid statics, flow in pipes, open channel flow), Hydrology &amp; Irrigation, Environmental Engineering (water quality, wastewater treatment, air pollution, solid waste management), Transportation Infrastructure &amp; Highway Pavements.
          </div>
        </div>
      `
    },
    {
      id: 29,
      title: '29. Electrical Engineering Syllabus',
      badge: 'Electrical Syllabus',
      content: `
        <div class="space-y-2.5 text-slate-700 leading-relaxed text-xs">
          <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
            <strong>Electrical Engineering Topics:</strong> Fundamentals of Electrical Engineering (circuit elements, units, KCL, KVL, network theorems), Magnetic Circuits (flux, reluctance, inductance), A.C. Fundamentals (RMS/average values, resonance, balanced 3-phase, complex power), Measurement &amp; Measuring Instruments (galvanometer, ammeter, voltmeter, wattmeter, bridges, energy meter, CT, PT), Electrical Machines (single/3-phase transformers, DC machines, induction motors), Synchronous Generators, Generation, Transmission &amp; Distribution (power stations, line parameters, corona, protection), Estimation &amp; Costing, Utilization of Electrical Energy (illumination, electric heating, welding, traction), Basic Electronics (diodes, BJTs, FETs, amplifiers), Power Electronics (thyristors, DC-DC buck/boost converters, rectifiers).
          </div>
        </div>
      `
    },
    {
      id: 30,
      title: '30. Mechanical Engineering Syllabus',
      badge: 'Mechanical Syllabus',
      content: `
        <div class="space-y-2.5 text-slate-700 leading-relaxed text-xs">
          <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
            <strong>Mechanical Engineering Topics:</strong> Engineering Mechanics (free-body diagrams, friction, centroid, moment of inertia), Strength of Materials (stress-strain, SFD/BMD, deflection, torsion, thin cylinders), Theory of Machines (cams, gears, flywheels, governors, balancing, vibrations), Machine Design (fatigue, joints, bearings, shafts, power screws), Materials Science &amp; Engineering (iron-carbon diagram, heat treatment, alloys, corrosion), Thermal Engineering (thermodynamic laws, power cycles, IC engines, steam turbines, heat transfer, refrigeration &amp; air conditioning), Fluid Mechanics &amp; Hydraulic Machinery (fluid statics, continuity, turbines, pumps), Industrial Engineering (plant layout, work study, PPC, inventory), Manufacturing Engineering (casting, welding, machining, lathe, milling), Metrology &amp; Advanced Manufacturing (CNC, EDM, ECM, CAD/CAM, robotics).
          </div>
        </div>
      `
    },
    {
      id: 31,
      title: '31. Telecommunications Engineering Syllabus',
      badge: 'Telecom Syllabus',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>For <strong>JE (Telecom)</strong> in Department of Telecommunications (DoT):</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Engineering Mathematics, Linear Algebra, Calculus, Differential Equations, Probability &amp; Statistics.</li>
            <li>Network Analysis (node/mesh, theorems, two-port networks).</li>
            <li>Signals and Systems (continuous/discrete, LTI systems, Fourier/Laplace/Z transforms).</li>
            <li>Electronic Devices (semiconductors, carrier transport, PN diodes, BJTs, MOSFETs).</li>
            <li>Analog Circuits (amplifiers, op-amps, active filters, oscillators).</li>
            <li>Digital Circuits (Boolean algebra, combinational &amp; sequential circuits, DAC/ADC, memory).</li>
            <li>Control Systems (feedback, transfer function, stability, Bode/Nyquist plots).</li>
            <li>Analog &amp; Digital Communications (AM, FM, PM, PCM, digital modulation ASK/PSK/FSK/QAM, information theory).</li>
            <li>Electromagnetics &amp; Antennas (Maxwell equations, wave propagation, transmission lines, waveguides).</li>
          </ul>
        </div>
      `
    },
    {
      id: 32,
      title: '32. IMD Scientific Assistant Syllabus (CS/IT, ECE, Physics)',
      badge: 'IMD Syllabus',
      content: `
        <div class="space-y-2.5 text-slate-700 leading-relaxed text-xs">
          <p>Candidates for Scientific Assistant in IMD choose one domain among three:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Part-D (Computer Science &amp; IT):</strong> Digital logic, computer architecture, data structures, algorithms, TOC, compilers, OS, DBMS, computer networks.</li>
            <li><strong>Part-E (Electronics &amp; Telecom):</strong> Electronic materials, components, diodes, transistors, amplifiers, digital electronics, antennas, modulation, microwave communications.</li>
            <li><strong>Part-F (Physics):</strong> Mechanics, properties of matter, oscillations &amp; waves, optics, electromagnetism, kinetic theory &amp; thermodynamics, modern physics, solid state physics.</li>
          </ul>
        </div>
      `
    },
    {
      id: 33,
      title: '33. Examination Centers Across 9 SSC Regional Directorates',
      badge: '9 SSC Regions',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <p>Candidates can select three examination centers within the same SSC region in order of preference:</p>
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr><th class="p-2 border">Region</th><th class="p-2 border">States / UTs Covered</th><th class="p-2 border">HQ Location &amp; Portal</th></tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2 border font-semibold">Central Region (CR)</td><td class="p-2 border">Bihar &amp; Uttar Pradesh</td><td class="p-2 border">Prayagraj (<a href="https://ssccr.gov.in" target="_blank" class="text-blue-600 underline">ssccr.gov.in</a>)</td></tr>
              <tr><td class="p-2 border font-semibold">Eastern Region (ER)</td><td class="p-2 border">West Bengal, Odisha, Jharkhand, Sikkim, A&amp;N Islands</td><td class="p-2 border">Kolkata (<a href="https://sscer.org" target="_blank" class="text-blue-600 underline">sscer.org</a>)</td></tr>
              <tr><td class="p-2 border font-semibold">Karnataka Kerala Region (KKR)</td><td class="p-2 border">Karnataka, Kerala, Lakshadweep</td><td class="p-2 border">Bengaluru (<a href="https://ssckkr.kar.nic.in" target="_blank" class="text-blue-600 underline">ssckkr.kar.nic.in</a>)</td></tr>
              <tr><td class="p-2 border font-semibold">Madhya Pradesh Region (MPR)</td><td class="p-2 border">Madhya Pradesh &amp; Chhattisgarh</td><td class="p-2 border">Raipur (<a href="https://sscmpr.gov.in" target="_blank" class="text-blue-600 underline">sscmpr.gov.in</a>)</td></tr>
              <tr><td class="p-2 border font-semibold">North Eastern Region (NER)</td><td class="p-2 border">Assam, Arunachal, Manipur, Meghalaya, Mizoram, Nagaland, Tripura</td><td class="p-2 border">Guwahati (<a href="https://sscner.org.in" target="_blank" class="text-blue-600 underline">sscner.org.in</a>)</td></tr>
              <tr><td class="p-2 border font-semibold">Northern Region (NR)</td><td class="p-2 border">Delhi, Rajasthan, Uttarakhand</td><td class="p-2 border">New Delhi (<a href="https://sscnr.nic.in" target="_blank" class="text-blue-600 underline">sscnr.nic.in</a>)</td></tr>
              <tr><td class="p-2 border font-semibold">North Western Region (NWR)</td><td class="p-2 border">Chandigarh, Haryana, Himachal Pradesh, J&amp;K, Ladakh, Punjab</td><td class="p-2 border">Chandigarh (<a href="https://sscnwr.org" target="_blank" class="text-blue-600 underline">sscnwr.org</a>)</td></tr>
              <tr><td class="p-2 border font-semibold">Southern Region (SR)</td><td class="p-2 border">Andhra Pradesh, Telangana, Tamil Nadu, Puducherry</td><td class="p-2 border">Chennai (<a href="https://sscsr.gov.in" target="_blank" class="text-blue-600 underline">sscsr.gov.in</a>)</td></tr>
              <tr><td class="p-2 border font-semibold">Western Region (WR)</td><td class="p-2 border">Maharashtra, Gujarat, Goa, Daman &amp; Diu, D&amp;NH</td><td class="p-2 border">Mumbai (<a href="https://sscwr.net" target="_blank" class="text-blue-600 underline">sscwr.net</a>)</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 34,
      title: '34. Physical Efficiency Test (PET) for Border Roads Organization (BRO)',
      badge: 'BRO 1 Mile Run',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Annexure-XVI (Schedule-I), only male candidates are eligible for BRO posts. Selected candidates must mandatorily qualify the Physical Efficiency Test conducted at GREF Centre, Dighi Camp, Pune:</p>
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl space-y-1">
            <strong class="text-blue-950 font-bold block">PET Standard:</strong>
            <p class="text-blue-900"><strong>One Mile Run (1.6 Km) in 10 Minutes.</strong> Passing this test is strictly mandatory. No marks are awarded, but failure leads to immediate disqualification without reallocation to any other department.</p>
          </div>
        </div>
      `
    },
    {
      id: 35,
      title: '35. Region-Wise Physical Measurement Standards (BRO / GREF)',
      badge: 'Height/Chest/Weight',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr>
                <th class="p-2 border">Region</th>
                <th class="p-2 border">States Included</th>
                <th class="p-2 border">Min. Height</th>
                <th class="p-2 border">Chest</th>
                <th class="p-2 border">Min. Weight</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2 border font-semibold">Western Himalayan</td><td class="p-2 border">J&amp;K, Himachal Pradesh, Punjab Hills, Uttarakhand</td><td class="p-2 border font-bold">158 Cms</td><td class="p-2 border">75 Cm (+5 Cm)</td><td class="p-2 border">47.5 Kgs</td></tr>
              <tr><td class="p-2 border font-semibold">Eastern Himalayan</td><td class="p-2 border">Sikkim, Nagaland, Arunachal, Manipur, Tripura, Mizoram, Meghalaya, Assam, Hill WB</td><td class="p-2 border font-bold">152 Cms</td><td class="p-2 border">75 Cm (+5 Cm)</td><td class="p-2 border">47.5 Kgs</td></tr>
              <tr><td class="p-2 border font-semibold">West Plain</td><td class="p-2 border">Punjab, Haryana, Chandigarh, Delhi, Rajasthan, Western UP</td><td class="p-2 border font-bold">162.5 Cms</td><td class="p-2 border">76 Cm (+5 Cm)</td><td class="p-2 border">50.0 Kgs</td></tr>
              <tr><td class="p-2 border font-semibold">Eastern Plain</td><td class="p-2 border">Eastern UP, Bihar, West Bengal, Odisha, Jharkhand</td><td class="p-2 border font-bold">157 Cms</td><td class="p-2 border">75 Cm (+5 Cm)</td><td class="p-2 border">50.0 Kgs</td></tr>
              <tr><td class="p-2 border font-semibold">Central Region</td><td class="p-2 border">Gujarat, Maharashtra, MP, D&amp;NH, Daman &amp; Diu, Chhattisgarh</td><td class="p-2 border font-bold">157 Cms</td><td class="p-2 border">75 Cm (+5 Cm)</td><td class="p-2 border">50.0 Kgs</td></tr>
              <tr><td class="p-2 border font-semibold">Southern Region</td><td class="p-2 border">AP, Karnataka, Tamil Nadu, Kerala, Goa, Puducherry, Telangana</td><td class="p-2 border font-bold">157 Cms</td><td class="p-2 border">75 Cm (+5 Cm)</td><td class="p-2 border">50.0 Kgs</td></tr>
              <tr><td class="p-2 border font-semibold">Gorkhas (Indian Domicile)</td><td class="p-2 border">Indian Gorkha domicile candidates</td><td class="p-2 border font-bold">152 Cms</td><td class="p-2 border">75 Cm (+5 Cm)</td><td class="p-2 border">47.5 Kgs</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 36,
      title: '36. Medical Fitness & Tattoo Policy (BRO / GREF)',
      badge: 'Medical & Tattoo',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Schedule-III of Annexure-XVI:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Visual Acuity:</strong> Not less than 6/12 each eye or Right 6/6, Left 6/24. Corrective glasses permitted. Unaided vision not below 6/60. Colour blindness is a ground for rejection in BRO.</li>
            <li><strong>Tattoo Policy:</strong> Tattoos permitted only on the inner face of forearms (from inside elbow to wrist) and dorsum of palm. Vulgar/obscene tattoos or tattoos on other body parts lead to disqualification.</li>
            <li><strong>BMI Standards:</strong> BMI less than 18 or above 30 leads to rejection (candidates with BMI &gt;30 given 3 months to reduce below 30).</li>
          </ul>
        </div>
      `
    },
    {
      id: 37,
      title: '37. Scribe & Assistive Devices Facility for PwBD Candidates',
      badge: 'Scribe Policy',
      content: `
        <div class="space-y-2.5 text-slate-700 leading-relaxed text-xs">
          <p>Under Para 9 of the notification:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li>Compensatory time of <strong>20 minutes per hour</strong> (40 minutes extra for 2-hour exam) is provided to eligible PwBD candidates.</li>
            <li>Scribe must complete OTR and Aadhaar authentication on <a href="https://ssc.gov.in" target="_blank" class="text-blue-600 underline">ssc.gov.in</a>.</li>
            <li>Qualification of the scribe must be one step below the candidate's qualification.</li>
            <li>A scribe cannot assist more than one candidate in the same examination.</li>
          </ul>
        </div>
      `
    },
    {
      id: 38,
      title: '38. Post-Preference Submission (FRTA Sliding Mechanism)',
      badge: 'Option Form',
      content: `
        <div class="space-y-2.5 text-slate-700 leading-relaxed text-xs">
          <p>Under Para 17 and 18.5 of the notice:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li>Post preference for organizations and departments will be collected online before the declaration of the First Round of Tentative Allocation (FRTA).</li>
            <li>Candidates who fail to submit post preferences online will not be considered for any post in the Final Result.</li>
            <li>Options once submitted are final, irrevocable, and cannot be changed.</li>
          </ul>
        </div>
      `
    },
    {
      id: 39,
      title: '39. Selection Lifecycle & Step-by-Step Flowchart',
      badge: 'Process Flow',
      content: `
        <div class="space-y-4 text-slate-700 leading-relaxed text-xs">
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 font-mono">
            <div class="p-2.5 bg-blue-100/70 border border-blue-300 rounded-xl text-blue-950 font-bold text-center">
              1. OTR &amp; ONLINE APPLICATION (02.09.2026 to 22.09.2026)
              <div class="text-[11px] font-normal text-blue-800 mt-0.5">Live photo capture + Scanned signature (10-20 KB) + Fee ₹100</div>
            </div>
            <div class="text-center font-bold text-slate-400">&darr;</div>
            <div class="p-2.5 bg-indigo-100/70 border border-indigo-300 rounded-xl text-indigo-950 font-bold text-center">
              2. PAPER-I COMPUTER BASED EXAMINATION (Oct / Nov 2026)
              <div class="text-[11px] font-normal text-indigo-800 mt-0.5">200 MCQs | 200 Marks | 2 Hours | 0.25 negative marking [Qualifying]</div>
            </div>
            <div class="text-center font-bold text-slate-400">&darr; [Shortlisted candidates category-wise]</div>
            <div class="p-2.5 bg-purple-100/70 border border-purple-300 rounded-xl text-purple-950 font-bold text-center">
              3. PAPER-II COMPUTER BASED EXAMINATION (Dec 2026)
              <div class="text-[11px] font-normal text-purple-800 mt-0.5">100 Technical MCQs | 300 Marks | 2 Hours | 1.00 negative marking</div>
            </div>
            <div class="text-center font-bold text-slate-400">&darr;</div>
            <div class="p-2.5 bg-amber-100/70 border border-amber-300 rounded-xl text-amber-950 font-bold text-center">
              4. ONLINE POST PREFERENCE &amp; FRTA ALLOCATION
              <div class="text-[11px] font-normal text-amber-800 mt-0.5">Preference submission on ssc.gov.in &rarr; Merit based on Paper-II normalized score</div>
            </div>
            <div class="text-center font-bold text-slate-400">&darr;</div>
            <div class="p-2.5 bg-emerald-100/80 border border-emerald-300 rounded-xl text-emerald-950 font-bold text-center">
              5. DOCUMENT VERIFICATION &amp; MEDICAL/PET (BRO) BY USER DEPTS
              <div class="text-[11px] font-normal text-emerald-800 mt-0.5">Final nomination dossiers forwarded to 14 User Departments</div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 40,
      title: '40. Resolution of Tie Cases Methodology',
      badge: 'Tie Resolution',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>Under Para 20, ties in Paper-II aggregate scores are resolved sequentially:</p>
          <ol class="list-decimal pl-5 space-y-1">
            <li>Marks in Part (i) General Intelligence &amp; Reasoning of Paper-I.</li>
            <li>Marks in Part (ii) General Awareness of Paper-I.</li>
            <li>Date of Birth, with older candidate placed higher in merit.</li>
            <li>Alphabetical order of the candidate's name.</li>
          </ol>
        </div>
      `
    },
    {
      id: 41,
      title: '41. Document Verification (DV) by User Departments',
      badge: 'DV by User Dept',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>Under Para 16 of the notice, Document Verification (DV) of provisionally shortlisted candidates is conducted <strong>directly by the respective User Departments</strong> after the declaration of the Final Result.</p>
          <p>Candidates must produce original matriculation certificates, degree/diploma certificates, marksheets, experience certificates, caste/EWS certificates, and photo ID proofs during DV.</p>
        </div>
      `
    },
    {
      id: 42,
      title: '42. Live Photograph & Signature Upload Specifications',
      badge: 'Photo & Sign Specs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr><th class="p-2 border">Item</th><th class="p-2 border">Mechanism / Dimensions</th><th class="p-2 border">File Format &amp; Size</th><th class="p-2 border">Important Instructions</th></tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="p-2 border font-semibold">Live Photograph</td>
                <td class="p-2 border">Captured live via webcam or 'mySSC' mobile app</td>
                <td class="p-2 border font-bold text-blue-700">Live Camera Stream</td>
                <td class="p-2 border">Good lighting, plain background, eye level, face fully inside frame, no cap, no spectacles. Pre-existing photo uploads rejected.</td>
              </tr>
              <tr>
                <td class="p-2 border font-semibold">Signature</td>
                <td class="p-2 border">About 6.0 cm (width) x 2.0 cm (height)</td>
                <td class="p-2 border font-bold text-blue-700">JPEG / JPG (10 to 20 KB)</td>
                <td class="p-2 border">Clear black/blue ink on white paper. Blurred or miniature signatures will be summarily rejected.</td>
              </tr>
            </tbody>
          </table>
          <p class="text-[11px] text-slate-500"><em>Tip:</em> Use RajDailyTools <strong>Signature Resizer</strong> to ensure exact 10-20 KB compression with 6.0 x 2.0 cm dimensions.</p>
        </div>
      `
    },
    {
      id: 43,
      title: '43. Aadhaar-Based Authentication Benefits',
      badge: 'Aadhaar Auth',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>Under Para 10.3 and 15.7 of the notice:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li>Candidates opting for Aadhaar-Based Authentication during OTR enjoy safe application processing without rejection due to minor photo/signature variances.</li>
            <li>Candidates with Aadhaar authentication need not report 2 hours early at the exam venue or present secondary physical certificates.</li>
            <li>Non-Aadhaar candidates must report <strong>2 hours before</strong> the exam start and produce additional physical identity proof.</li>
          </ul>
        </div>
      `
    },
    {
      id: 44,
      title: '44. Step-by-Step Online Application Guide (OTR & Form)',
      badge: 'How to Apply',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <ol class="list-decimal pl-5 space-y-1.5">
            <li><strong>Step 1 (OTR):</strong> Visit <a href="https://ssc.gov.in" target="_blank" class="text-blue-600 underline">ssc.gov.in</a> and click "Register Now" to generate your new OTR ID. (Old ssc.nic.in OTR is invalid).</li>
            <li><strong>Step 2 (Login):</strong> Login with your Registration Number and Password at <a href="https://ssc.gov.in/login" target="_blank" class="text-blue-600 underline">ssc.gov.in/login</a>.</li>
            <li><strong>Step 3 (Fill Form):</strong> Click "Apply" under <em>Junior Engineer Examination, 2026</em> in the Live Examinations tab. Select posts, stream, and 3 exam center choices.</li>
            <li><strong>Step 4 (Live Photo &amp; Sign):</strong> Capture live photograph using webcam or mySSC app and upload scanned signature (10-20 KB).</li>
            <li><strong>Step 5 (Fee Payment &amp; Print):</strong> Pay ₹100 online (unless exempted) via UPI/Debit/Net Banking and print the confirmation receipt.</li>
          </ol>
        </div>
      `
    },
    {
      id: 45,
      title: '45. Salary Structure & 7th CPC Allowances (Level-6)',
      badge: 'Salary Level-6',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <p>All Junior Engineers and Scientific Assistants receive <strong>Level-6 (₹35,400 to ₹1,12,400)</strong> pay:</p>
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr><th class="p-2 border">Component</th><th class="p-2 border">X Class City (Delhi/Mumbai)</th><th class="p-2 border">Y Class City</th><th class="p-2 border">Z Class City</th></tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2 border font-semibold">Basic Pay</td><td class="p-2 border font-mono">₹35,400</td><td class="p-2 border font-mono">₹35,400</td><td class="p-2 border font-mono">₹35,400</td></tr>
              <tr><td class="p-2 border font-semibold">Dearness Allowance (DA @ 50%)</td><td class="p-2 border font-mono">₹17,700</td><td class="p-2 border font-mono">₹17,700</td><td class="p-2 border font-mono">₹17,700</td></tr>
              <tr><td class="p-2 border font-semibold">House Rent Allowance (HRA)</td><td class="p-2 border font-mono">₹10,620 (30%)</td><td class="p-2 border font-mono">₹7,080 (20%)</td><td class="p-2 border font-mono">₹3,540 (10%)</td></tr>
              <tr><td class="p-2 border font-semibold">Transport Allowance (TA + DA)</td><td class="p-2 border font-mono">₹5,400</td><td class="p-2 border font-mono">₹2,700</td><td class="p-2 border font-mono">₹2,700</td></tr>
              <tr class="bg-emerald-50/70 font-bold"><td class="p-2 border font-bold text-emerald-950">Approx Gross Salary</td><td class="p-2 border font-mono text-emerald-800">₹69,120</td><td class="p-2 border font-mono text-emerald-800">₹62,880</td><td class="p-2 border font-mono text-emerald-800">₹59,340</td></tr>
              <tr class="bg-emerald-100/80 font-black"><td class="p-2 border font-bold text-emerald-950">Estimated In-Hand Salary</td><td class="p-2 border font-mono text-emerald-900 font-extrabold">₹60,000 – ₹63,000</td><td class="p-2 border font-mono text-emerald-900 font-extrabold">₹54,000 – ₹57,000</td><td class="p-2 border font-mono text-emerald-900 font-extrabold">₹51,000 – ₹54,000</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 46,
      title: '46. Direct Official SSC Application & Login Links',
      badge: 'Apply Links',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
              <div>
                <strong class="text-slate-900 block font-bold mb-1">SSC Candidate Login:</strong>
                <p class="text-slate-500 text-[11px]">Direct portal login for registered candidates to apply for JE 2026.</p>
              </div>
              <a href="https://ssc.gov.in/login" target="_blank" rel="noopener noreferrer" class="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-center transition">
                SSC Portal Login &rarr;
              </a>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
              <div>
                <strong class="text-slate-900 block font-bold mb-1">New OTR Registration:</strong>
                <p class="text-slate-500 text-[11px]">Register for new One-Time Registration ID on official portal.</p>
              </div>
              <a href="https://ssc.gov.in/candidate-portal/one-time-registration/home-page" target="_blank" rel="noopener noreferrer" class="mt-3 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-center transition">
                Register SSC OTR &rarr;
              </a>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 47,
      title: '47. Official Notification PDF & Website Links',
      badge: 'Official Links',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl flex flex-wrap items-center justify-between gap-2">
            <div>
              <div class="font-bold text-blue-950">Official SSC JE 2026 Notification PDF:</div>
              <div class="text-[11px] text-blue-800">Complete 97-page notice with all schedules, codes, proformas &amp; rules</div>
            </div>
            <a href="https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_je_2026.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition">
              Download Official PDF &rarr;
            </a>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <span class="text-slate-500 block">SSC Central Website:</span>
            <a href="https://ssc.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-700 font-bold underline text-sm">https://ssc.gov.in/</a>
          </div>
        </div>
      `
    },
    {
      id: 48,
      title: '48. Official Toll-Free Helpline & Regional Contacts',
      badge: 'Helplines',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
            <strong class="text-emerald-950 font-bold block">SSC Official Toll-Free Helpline Number:</strong>
            <div class="text-xl font-black text-emerald-900 font-mono">180 030 930 63</div>
            <p class="text-slate-600 text-[11px]">Call for any difficulty or technical issue in filling up the online application form.</p>
          </div>
          <p class="text-slate-600">Candidates can also contact their respective SSC Regional Directorates via email/phone during working hours.</p>
        </div>
      `
    },
    {
      id: 49,
      title: '49. Frequently Asked Questions (FAQ)',
      badge: 'FAQs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <div class="space-y-2">
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-900">Q1: What are the application dates for SSC JE 2026?</strong>
              <p class="mt-1">Online applications are open from 02.09.2026 to 22.09.2026 (23:00 Hrs). Fee payment is allowed up to 23.09.2026.</p>
            </div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-900">Q2: How many total vacancies are announced?</strong>
              <p class="mt-1">There are 1,748 tentative vacancies across 14 central organizations.</p>
            </div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-900">Q3: Is Paper-I marks included in the final merit?</strong>
              <p class="mt-1">No. Paper-I is qualifying in nature. Final merit is determined strictly by normalized scores in Paper-II.</p>
            </div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-900">Q4: Are female candidates eligible for Border Roads Organization (BRO)?</strong>
              <p class="mt-1">No. Only male candidates are eligible for the posts of Junior Engineers in BRO.</p>
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
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p><strong>Official Disclaimer:</strong> All information presented on this page is compiled strictly from the official Junior Engineer Examination, 2026 notification (F. No. HQ-C-3019/1/2026-C-3) published by the Staff Selection Commission on its official website <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://ssc.gov.in</a>.</p>
          <p class="text-[11px] text-slate-500">RajDailyTools is an educational career utility portal designed to assist competitive exam aspirants. Candidates are advised to consult the official portal for notices, answer keys, and merit rosters.</p>
        </div>
      `
    }
  ];
}

export const SSC_JE_2026_EXAM: ExamRecord = {
  id: 'ssc-je-2026',
  slug: 'ssc-je-recruitment-2026',
  examName: 'SSC Junior Engineer (JE) Recruitment 2026',
  postName: 'Junior Engineer (Civil, Electrical, Mechanical, Telecom) & Scientific Assistant (IMD)',
  organization: 'Staff Selection Commission (SSC)',
  category: 'SSC',
  totalVacancy: '1,748 Posts',
  applicationStartDate: '2026-09-02',
  applicationLastDate: '2026-09-22',
  examDate: '2026-10-25',
  status: 'APPLICATION_OPEN',
  education: ['Graduation', 'Diploma'],
  acceptedQualificationLevels: ['Graduation', 'Diploma', 'Post Graduation'],
  higherQualificationAccepted: true,
  ageMin: 18,
  ageMax: 32,
  ageRelaxationInfo: 'Up to 30 Years (general posts) & up to 32 Years for CPWD & DGLL as on 01.08.2026. Standard relaxations: SC/ST +5 yrs, OBC +3 yrs, PwBD +10-15 yrs.',
  gender: 'All',
  logoIcon: '⚙️',
  officialWebsite: 'https://ssc.gov.in/',
  officialNotification: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_je_2026.pdf',
  applyLink: 'https://ssc.gov.in/login',
  mockTestLink: 'https://ssc.gov.in/',
  description: 'Staff Selection Commission (SSC) has issued the official notification for Junior Engineer (JE) Examination 2026 and Scientific Assistant in IMD for 1,748 Group B Level-6 posts across 14 central departments.',
  shortSummary: 'SSC Junior Engineer (Civil, Mechanical, Electrical, Telecom) & IMD Scientific Assistant Recruitment 2026 Notification for 1,748 vacancies. Apply online from 02.09.2026 to 22.09.2026.',
  importantDates: [
    { label: 'Notification Issued', date: '02 September 2026' },
    { label: 'Online Application Start Date', date: '02 September 2026', isHighlight: true },
    { label: 'Last Date for Online Application', date: '22 September 2026 (23:00 Hrs)', isHighlight: true },
    { label: 'Last Date for Online Fee Payment', date: '23 September 2026 (23:00 Hrs)', isHighlight: true },
    { label: 'Online Form Correction Window', date: '28.09.2026 to 30.09.2026' },
    { label: 'Paper-I Computer Based Exam', date: 'October / November 2026', isHighlight: true },
    { label: 'Paper-II Computer Based Exam', date: 'December 2026', isHighlight: true }
  ],
  applicationFee: [
    { category: 'General (UR) / OBC / EWS (Male)', amount: '₹100.00' },
    { category: 'Women (All Categories)', amount: '₹0.00 (Exempted)' },
    { category: 'SC / ST / PwBD / Ex-Servicemen', amount: '₹0.00 (Exempted)' }
  ],
  selectionProcess: [
    'Stage 1: Paper-I Computer Based Examination (200 MCQs, 200 Marks, 2 Hours - Qualifying in Nature)',
    'Stage 2: Paper-II Computer Based Examination (100 MCQs, 300 Marks, 2 Hours - Technical Specialization)',
    'Stage 3: Online Post-Preference Submission (FRTA Sliding Mechanism)',
    'Stage 4: Document Verification (DV) & Medical/PET (BRO) conducted directly by User Departments'
  ],
  examPattern: [
    {
      stageName: 'Paper-I (Computer Based Examination) - Qualifying',
      mode: 'Online (CBT / MCQs)',
      duration: '2 Hours (120 Minutes)',
      negativeMarking: '0.25 Mark per wrong answer',
      subjects: [
        { name: 'General Intelligence & Reasoning', questions: 50, marks: 50 },
        { name: 'General Awareness', questions: 50, marks: 50 },
        { name: 'General Engineering / Science (Civil / Elec / Mech / CS / Physics / Telecom)', questions: 100, marks: 100 }
      ]
    },
    {
      stageName: 'Paper-II (Computer Based Examination) - Merit Deciding',
      mode: 'Online (CBT / MCQs)',
      duration: '2 Hours (120 Minutes)',
      negativeMarking: '1.00 Mark per wrong answer (3 marks/correct answer)',
      subjects: [
        { name: 'General Engineering Domain (Part-A/B/C/D/E/F/G)', questions: 100, marks: 300 }
      ]
    }
  ],
  salary: {
    payScale: 'Level-6 (₹35,400 to ₹1,12,400) of 7th CPC Pay Matrix',
    inHand: '₹51,000 – ₹63,000 / month (depending on City Classification X, Y, Z)',
    allowances: 'DA (50%), HRA (10%-30%), Transport Allowance (TA + DA), Medical & Central Govt Benefits'
  },
  faq: [
    {
      q: 'What is the application timeline for SSC JE 2026?',
      a: 'Online applications are accepted from 02 September 2026 to 22 September 2026 (23:00 Hrs). Online fee payment closes on 23 September 2026.'
    },
    {
      q: 'How many vacancies are announced for SSC JE 2026?',
      a: 'A total of 1,748 tentative vacancies are announced across 14 central organizations including CPWD, BRO, MES, CWC, and IMD.'
    },
    {
      q: 'What is the educational qualification required?',
      a: 'Degree in Engineering (B.E./B.Tech) OR 3-Year Diploma in Civil / Electrical / Mechanical / Telecom / Electronics / Computer Science from a recognized University or Institute (with 2-3 years experience where specified for BRO/MES/DGLL).'
    },
    {
      q: 'What is the crucial date for age calculation?',
      a: 'The crucial date for age reckoning is 01 August 2026 (01.08.2026).'
    },
    {
      q: 'Is there negative marking in Paper-I and Paper-II?',
      a: 'Yes. In Paper-I, 0.25 mark is deducted per wrong answer. In Paper-II, 1.00 mark is deducted per wrong answer.'
    }
  ],
  allInformation: generateSscJe50Sections()
};

import { ExamInfoSection } from '../types/exam';

export const UP_PGT_SECTIONS_PART2: ExamInfoSection[] = [
  {
    id: 26,
    title: '26. Examination Centre',
    badge: 'Exam Centre',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Provisions for examination centre allocation under Section 8 of Advt No. 06/2026:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>District Headquarters:</strong> Examination centres will be established at district headquarters across Uttar Pradesh. The commission reserves the right to allot any centre depending on administrative convenience.</li>
          <li><strong>No Change of Centre (Clause 10.1):</strong> Requests for change of examination centre or city will NOT be entertained under any circumstances.</li>
          <li><strong>Mandatory Venue Compliance (Section 8 Note):</strong> Candidates must appear solely at the allocated centre, date, and subject printed on their Admit Card. Appearing at any other centre will lead to instant cancellation of candidature without score evaluation.</li>
        </ul>
      </div>
    `
  },
  {
    id: 27,
    title: '27. Exam Centre District Information',
    badge: 'District Intimation',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Advance district/city intimation slip provision under Section 8:</p>
        <blockquote class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl text-blue-950 font-medium text-xs">
          "परीक्षा केन्द्र के जनपद की सूचना परीक्षा तिथि से 10 दिन पूर्व आयोग की वेबसाइट पर प्रदर्शित की जायेगी।"
        </blockquote>
        <p>Candidates will be able to log in to <code>www.upessc.up.gov.in</code> approximately 10 days prior to the 15–16 December 2026 examination (around 05 December 2026) to view their allotted district and arrange travel in advance.</p>
      </div>
    `
  },
  {
    id: 28,
    title: '28. Admit Card',
    badge: 'Hall Ticket',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Official guidelines regarding Admit Card download and verification under Section 8 & Clause 10.2:</p>
        <div class="overflow-x-auto border border-slate-200 rounded-xl">
          <table class="w-full text-xs text-left">
            <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th class="p-2.5">Admit Card Feature</th>
                <th class="p-2.5">Official Commission Rule</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr>
                <td class="p-2.5 font-semibold bg-slate-50/60">Release Timeline</td>
                <td class="p-2.5 font-bold text-rose-700">3 Days Prior to Exam (approx. 12 December 2026)</td>
              </tr>
              <tr>
                <td class="p-2.5 font-semibold bg-slate-50/60">Download Mode</td>
                <td class="p-2.5">Online download only from <code>www.upessc.up.gov.in</code> using OTR / Registration credentials. No admit card is dispatched by post.</td>
              </tr>
              <tr>
                <td class="p-2.5 font-semibold bg-slate-50/60">Mandatory Enclosures</td>
                <td class="p-2.5">Printed Admit Card + Original Photo ID Proof (Aadhaar / Voter ID / Driving Licence / PAN) + 2 passport photographs.</td>
              </tr>
              <tr>
                <td class="p-2.5 font-semibold bg-slate-50/60">Provisional Status (Clause 10.3)</td>
                <td class="p-2.5">Admission to the exam hall is purely provisional, subject to satisfying all eligibility norms during document verification.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    id: 29,
    title: '29. Exam Day Guidelines',
    badge: 'Guidelines',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Regulations for candidates on examination day (Clause 10.4 & 10.12):</p>
        <ul class="list-disc pl-5 space-y-1.5">
          <li><strong>Reporting Time:</strong> Candidates must reach the exam centre at least 60 to 90 minutes before commencement for mandatory biometric registration and frisking. Gates close 30 minutes before start time.</li>
          <li><strong>Prohibited Items:</strong> Mobile phones, calculators, digital watches, Bluetooth earphones, bags, books, notes, or recording devices are strictly prohibited inside the premises.</li>
          <li><strong>Malpractice Disciplinary Action:</strong> Impersonation or cheating will lead to immediate police FIR, cancellation of candidature, and debarment from all future examinations conducted by UPESSC.</li>
          <li><strong>No TA/DA:</strong> No traveling or daily allowance will be paid to any candidate for appearing in the examination (Clause 10.12).</li>
        </ul>
      </div>
    `
  },
  {
    id: 30,
    title: '30. PwD/Scribe Facility',
    badge: 'Scribe Facility',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Scribe regulations for Persons with Benchmark Disabilities under Clause 10.10:</p>
        <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <span class="font-bold text-slate-900 block">Governing Government Orders:</span>
          <p class="text-xs text-slate-700">Concessions are regulated as per UP Government Orders dated 04.12.2019 and 08.09.2022.</p>
          <div class="p-3 bg-white border border-slate-200 rounded-lg space-y-1 text-xs">
            <span class="font-bold text-blue-900 block">Key Conditions:</span>
            <p>1. Candidates must bring their own scribe.</p>
            <p>2. The scribe must possess academic qualifications strictly lower than the candidate's qualification for the post.</p>
            <p>3. <strong>Advance Registration:</strong> Candidates must present themselves with the scribe and required certificates at the commission office at least <strong>1 week before the exam</strong> to obtain official permission.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 31,
    title: '31. Extra Time Facility',
    badge: 'Extra Time',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Compensatory extra time provisions for disabled candidates under Clause 10.10:</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
            <span class="text-xs uppercase font-bold text-slate-500 block">Statutory Rate of Compensatory Time</span>
            <span class="text-xl font-black text-blue-900 block mt-1">20 Mins / Hour</span>
            <span class="text-xs text-slate-600">Applicable to candidates eligible under benchmark disability guidelines</span>
          </div>
          <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
            <span class="text-xs uppercase font-bold text-slate-500 block">Total Extra Time for UP PGT</span>
            <span class="text-xl font-black text-emerald-900 block mt-1">+40 Minutes</span>
            <span class="text-xs text-slate-600">Total duration expands from 120 minutes to 160 minutes</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 32,
    title: '32. Selection Process',
    badge: 'Selection',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>The recruitment of PGT teachers under Advt No. 06/2026 is conducted in two definitive stages:</p>
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div class="p-3 bg-white border-2 border-blue-300 rounded-xl text-center w-full sm:w-1/2">
              <span class="text-xs uppercase font-bold text-blue-700 block">Stage 1: Written Examination</span>
              <span class="text-xl font-black text-slate-900 block mt-1">360 Marks</span>
              <span class="text-[11px] text-slate-500">120 MCQs | 90% Selection Weightage</span>
            </div>
            <span class="text-slate-400 font-bold text-lg hidden sm:block">+</span>
            <div class="p-3 bg-white border-2 border-purple-300 rounded-xl text-center w-full sm:w-1/2">
              <span class="text-xs uppercase font-bold text-purple-700 block">Stage 2: Interview (साक्षात्कार)</span>
              <span class="text-xl font-black text-slate-900 block mt-1">40 Marks</span>
              <span class="text-[11px] text-slate-500">Oral Viva-Voce | 10% Selection Weightage</span>
            </div>
          </div>
          <div class="p-2.5 bg-emerald-100/70 border border-emerald-300 rounded-lg text-center text-xs font-bold text-emerald-950">
            Combined Merit Score = 400 Marks (360 Written + 40 Interview)
          </div>
        </div>
      </div>
    `
  },
  {
    id: 33,
    title: '33. Written Exam Merit',
    badge: 'Written Score',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Stage 1 written marks determine shortlisting for the interview:</p>
        <ul class="list-disc pl-5 space-y-1.5">
          <li><strong>Interview Shortlisting Ratio:</strong> Candidates will be called for interview in a merit-ranked ratio based on their net score out of 360 marks in the written test.</li>
          <li><strong>Normalization:</strong> If exams are conducted in multiple shifts, percentile or formula-based normalization will be implemented.</li>
          <li><strong>Transparency (Clause 9-क):</strong> Cut-off marks and candidate scores will be displayed on the official website after completion of the entire selection cycle.</li>
        </ul>
      </div>
    `
  },
  {
    id: 34,
    title: '34. Interview',
    badge: 'Interview',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Official interview process rules governed by Section 14 of Advt No. 06/2026:</p>
        <div class="overflow-x-auto border border-slate-200 rounded-xl">
          <table class="w-full text-xs text-left">
            <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th class="p-2.5">Interview Parameter</th>
                <th class="p-2.5">Official Commission Rule</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr>
                <td class="p-2.5 font-semibold bg-slate-50/60">Maximum Marks</td>
                <td class="p-2.5 font-bold text-purple-900">40 Marks</td>
              </tr>
              <tr>
                <td class="p-2.5 font-semibold bg-slate-50/60">Notice Period (Clause 14.1)</td>
                <td class="p-2.5">Candidates will be informed at least 10 days in advance via website, SMS, and email.</td>
              </tr>
              <tr>
                <td class="p-2.5 font-semibold bg-slate-50/60">Document Verification</td>
                <td class="p-2.5">Conducted on the same day at the commission office before appearing in front of the interview panel.</td>
              </tr>
              <tr>
                <td class="p-2.5 font-semibold bg-slate-50/60">Absence Rule (Clause 14.3)</td>
                <td class="p-2.5 text-rose-700 font-bold">Candidates absent on the allotted interview date forfeit their candidature; no second chance is granted.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    id: 35,
    title: '35. Final Merit List',
    badge: 'Final Merit',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>The Final Merit List for appointment as PGT is prepared out of <strong>400 Marks</strong> (360 Written + 40 Interview) under Clause 9(क):</p>
        <ul class="list-disc pl-5 space-y-1.5">
          <li><strong>Subject-Wise & Cadre-Wise:</strong> Separate merit lists are drawn up for Boys Schools (2,329 posts) and Girls Schools (278 posts) across all 26 subjects.</li>
          <li><strong>Reservation Application:</strong> Category-wise merit is finalized after applying vertical (SC/ST/OBC/EWS) and horizontal (DFF/Ex-SM/Divyangjan/Women) reservations.</li>
          <li><strong>Institutional Allocation:</strong> School preferences submitted during counseling are allotted in strict order of merit.</li>
        </ul>
      </div>
    `
  },
  {
    id: 36,
    title: '36. Tie-Breaking Rules',
    badge: 'Tie Resolution',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Statutory 5-tier resolution order under Section 9(क) when two or more candidates obtain identical aggregate scores out of 400:</p>
        <div class="overflow-x-auto border border-slate-200 rounded-xl">
          <table class="w-full text-xs text-left">
            <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th class="p-2.5 text-center w-12">Priority</th>
                <th class="p-2.5">Tie-Breaking Criterion</th>
                <th class="p-2.5">Resolution Rule</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr>
                <td class="p-2.5 text-center font-bold text-blue-900">1st</td>
                <td class="p-2.5 font-semibold">Written Exam Score</td>
                <td class="p-2.5 font-bold">Candidate with higher marks in the Written Exam (out of 360) is ranked higher.</td>
              </tr>
              <tr>
                <td class="p-2.5 text-center font-bold text-blue-900">2nd</td>
                <td class="p-2.5 font-semibold">Interview Score</td>
                <td class="p-2.5 font-bold">Candidate with higher marks in the Interview (out of 40) is ranked higher.</td>
              </tr>
              <tr>
                <td class="p-2.5 text-center font-bold text-blue-900">3rd</td>
                <td class="p-2.5 font-semibold">Postgraduate (Master's) Percentage</td>
                <td class="p-2.5">Candidate with higher aggregate percentage in the qualifying Master's degree is ranked higher.</td>
              </tr>
              <tr>
                <td class="p-2.5 text-center font-bold text-blue-900">4th</td>
                <td class="p-2.5 font-semibold">B.Ed. / Professional Degree Percentage</td>
                <td class="p-2.5">Candidate with higher marks/percentage in B.Ed./M.P.Ed. training is ranked higher.</td>
              </tr>
              <tr>
                <td class="p-2.5 text-center font-bold text-blue-900">5th</td>
                <td class="p-2.5 font-semibold">Age Seniority (अधिक आयु)</td>
                <td class="p-2.5 font-bold text-purple-900">Candidate older in age is placed higher on the merit list.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    id: 37,
    title: '37. Document Verification',
    badge: 'Verification',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Document verification protocol under Section 14.5 of Advt No. 06/2026:</p>
        <ul class="list-disc pl-5 space-y-1.5">
          <li><strong>Two Complete Sets:</strong> Candidates must bring <strong>2 complete sets of self-attested photocopies</strong> of all certificates along with original documents.</li>
          <li><strong>Affidavit (शपथ-पत्र):</strong> An affidavit in the format prescribed in <strong>Parishisht-6</strong> must be submitted on the day of verification.</li>
          <li><strong>Disqualification:</strong> Failure to produce original mark sheets, degrees, caste, or domicile certificates will result in immediate disqualification.</li>
        </ul>
      </div>
    `
  },
  {
    id: 38,
    title: '38. Medical Examination',
    badge: 'Medical',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Medical fitness rules under Clause 12.4 & 12.5 of the notification:</p>
        <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <p>Candidates must possess sound mental and bodily health and be free from any physical defect likely to interfere with teaching duties.</p>
          <p>Medical fitness certificate issued by a Medical Officer of a Government Hospital or Primary Health Centre (PHC) must be submitted before formal joining.</p>
          <p class="text-xs text-slate-600"><strong>Special Exception:</strong> For the post of Music teacher, visually impaired candidates are legally eligible and exempt from visual fitness standards.</p>
        </div>
      </div>
    `
  },
  {
    id: 39,
    title: '39. Appointment & Joining',
    badge: 'Joining',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Institutional allocation and joining formalities under Section 13:</p>
        <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <p><strong>Appointing Authority:</strong> School allocation and appointment orders are issued by the Authorized Authority (निदेशक, माध्यमिक शिक्षा, उ०प्र०, प्रयागराज) based on merit ranking and choice of institution.</p>
          <p><strong>Postings:</strong> Selected candidates are posted in Non-Government Aided Secondary Schools (अशासकीय सहायता प्राप्त माध्यमिक विद्यालय) of Uttar Pradesh.</p>
          <p class="text-xs text-slate-600">Joining is subject to police character verification and DIOS counter-signature of certificates.</p>
        </div>
      </div>
    `
  },
  {
    id: 40,
    title: '40. Important Official Links',
    badge: 'Links',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Official web portals and helpdesks for UP PGT Recruitment 2026:</p>
        <div class="overflow-x-auto border border-slate-200 rounded-xl">
          <table class="w-full text-xs text-left">
            <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th class="p-2.5">Resource</th>
                <th class="p-2.5">Official URL / Details</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr>
                <td class="p-2.5 font-semibold bg-slate-50/60">UPESSC Official Portal</td>
                <td class="p-2.5"><a href="https://upessc.up.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-mono underline">https://upessc.up.gov.in/</a></td>
              </tr>
              <tr>
                <td class="p-2.5 font-semibold bg-slate-50/60">Online Application & OTR Portal</td>
                <td class="p-2.5"><a href="https://upessc.up.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-mono underline">https://upessc.up.gov.in/</a></td>
              </tr>
              <tr>
                <td class="p-2.5 font-semibold bg-slate-50/60">Official Syllabus Directory</td>
                <td class="p-2.5"><a href="https://www.upessc.up.gov.in/Home/Syllabus_all" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-mono underline">https://www.upessc.up.gov.in/Home/Syllabus_all</a></td>
              </tr>
              <tr>
                <td class="p-2.5 font-semibold bg-slate-50/60">Technical Support Helpline</td>
                <td class="p-2.5 font-mono text-slate-900">08448573939 | support@upessc.org</td>
              </tr>
              <tr>
                <td class="p-2.5 font-semibold bg-slate-50/60">Commission Office Prayagraj</td>
                <td class="p-2.5 font-mono text-slate-900">0532-2466851 | upesscprayagraj@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    id: 41,
    title: '41. How to Apply',
    badge: 'Apply Guide',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Simple 5-stage application guide for UP PGT Teacher Recruitment 2026:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>Register on <code>www.upessc.up.gov.in</code> to generate your permanent OTR number.</li>
          <li>Log in and select Advt No. 06/2026 (प्रवक्ता चयन परीक्षा, 2026).</li>
          <li>Choose your subject and cadre (Boys or Girls School).</li>
          <li>Upload photograph, signature, and necessary certificates in PDF format.</li>
          <li>Pay the online application fee and print 3 hard copies of the confirmation page.</li>
        </ol>
      </div>
    `
  },
  {
    id: 42,
    title: '42. Application Checklist',
    badge: 'Checklist',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Pre-submission verification checklist to avoid form rejection:</p>
        <ul class="list-disc pl-5 space-y-1.5">
          <li>✔ Name, Father's Name, and DOB match Class 10th certificate exactly.</li>
          <li>✔ Candidate holds Master's degree and NCTE-recognized B.Ed. in concerned subject.</li>
          <li>✔ Photo (30–300 KB) and Signature (10–200 KB) are clear and within pixel guidelines.</li>
          <li>✔ Category certificate is issued on the official UP Government format.</li>
          <li>✔ Online payment status shows "SUCCESS" and transaction ID is saved.</li>
          <li>✔ 3 printed sets of the application form are retained safely.</li>
        </ul>
      </div>
    `
  },
  {
    id: 43,
    title: '43. Common Application Mistakes',
    badge: 'Pitfalls',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Frequent errors that lead to cancellation of candidature under Advt No. 06/2026:</p>
        <div class="space-y-2">
          <div class="p-3 bg-rose-50 border border-rose-200 rounded-xl">
            <span class="font-bold text-rose-900 block">1. Ineligible Sanskrit Subject Combination for Hindi</span>
            <p class="text-xs text-rose-800">Candidates applying for PGT Hindi must have studied Sanskrit at B.A. level. Applications lacking Sanskrit in Graduation are rejected.</p>
          </div>
          <div class="p-3 bg-rose-50 border border-rose-200 rounded-xl">
            <span class="font-bold text-rose-900 block">2. Non-UP Residents Claiming Category Reservation</span>
            <p class="text-xs text-rose-800">Candidates from outside Uttar Pradesh must apply strictly under General/Unreserved. Claiming SC/ST/OBC/EWS will invalidate the application.</p>
          </div>
          <div class="p-3 bg-rose-50 border border-rose-200 rounded-xl">
            <span class="font-bold text-rose-900 block">3. Male Candidates Selecting Girls Schools</span>
            <p class="text-xs text-rose-800">Male candidates applying for Girls institutions (except visually impaired in Music) will have their forms summarily rejected.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 44,
    title: '44. Preparation Strategy',
    badge: 'Strategy',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Strategic blueprint for securing a high rank in the 400-mark selection structure:</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-3.5 bg-blue-50 border border-blue-200 rounded-xl space-y-1">
            <span class="font-bold text-blue-900 block">Concerned Subject (270 Marks / 75%)</span>
            <p class="text-xs text-blue-950">Master post-graduate core literature, standard textbooks, UP Board 11th–12th and university curricula. Prioritize conceptual mastery.</p>
          </div>
          <div class="p-3.5 bg-purple-50 border border-purple-200 rounded-xl space-y-1">
            <span class="font-bold text-purple-900 block">General Knowledge (90 Marks / 25%)</span>
            <p class="text-xs text-purple-950">Focus on UP State Art & Culture, modern Indian history, polity, geography, and current developments over the past 6 months.</p>
          </div>
        </div>
        <p class="text-xs text-slate-600"><strong>Negative Marking Management:</strong> Avoid wild guesses. Because wrong answers incur a -1 mark penalty, ensure accuracy on every attempted bubble.</p>
      </div>
    `
  },
  {
    id: 45,
    title: '45. Subject Preparation Strategy',
    badge: 'Subject Prep',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Subject-specific recommendations for tackling the 90 domain questions:</p>
        <ul class="list-disc pl-5 space-y-1.5">
          <li><strong>Syllabus Alignment:</strong> Map every topic from the official UPESSC syllabus PDF.</li>
          <li><strong>Previous Year Papers:</strong> Solve past UP PGT papers from 2016, 2021, and recent state exams to understand depth and recurring themes.</li>
          <li><strong>Revision Notes:</strong> Maintain condensed formula sheets, author-chronology charts, and key definitions for the final 15-day sprint.</li>
        </ul>
      </div>
    `
  },
  {
    id: 46,
    title: '46. Previous/Expected Cut-Off Information',
    badge: 'Cut-Off Data',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Official status regarding cut-off marks for UP PGT Teacher Recruitment 2026:</p>
        <div class="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 space-y-2">
          <span class="font-bold text-amber-900 block">Official Commission Policy (Clause 9-क):</span>
          <p>"लिखित परीक्षा के कटऑफ एवं अभ्यर्थियों के प्राप्तांक चयन प्रक्रिया पूर्ण होने के उपरान्त वेबसाइट पर प्रदर्शित किये जायेंगे।"</p>
          <p><strong>Status:</strong> Not Released / To Be Updated. Official cut-off scores will be declared on <code>www.upessc.up.gov.in</code> only after the final selection process concludes.</p>
        </div>
      </div>
    `
  },
  {
    id: 47,
    title: '47. Result & Cut-Off Updates',
    badge: 'Results',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Result declaration roadmap for UP PGT 2026:</p>
        <div class="flex flex-col sm:flex-row items-center gap-2 text-xs font-semibold">
          <span class="p-2.5 bg-slate-100 text-slate-800 rounded-lg w-full text-center">1. Provisional Key</span>
          <span class="text-slate-400">→</span>
          <span class="p-2.5 bg-slate-100 text-slate-800 rounded-lg w-full text-center">2. Final Answer Key</span>
          <span class="text-slate-400">→</span>
          <span class="p-2.5 bg-blue-100 text-blue-800 rounded-lg w-full text-center">3. Written Exam Merit</span>
          <span class="text-slate-400">→</span>
          <span class="p-2.5 bg-emerald-100 text-emerald-800 rounded-lg w-full text-center">4. Final 400-Mark Result</span>
        </div>
        <p class="text-xs text-slate-500">Official results will be published in PDF format containing roll numbers, category, rank, and allotted institution on <code>www.upessc.up.gov.in</code>.</p>
      </div>
    `
  },
  {
    id: 48,
    title: '48. Answer Key & Objection Process',
    badge: 'Answer Key',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Protocol for Answer Key release and filing objections:</p>
        <ul class="list-disc pl-5 space-y-1.5">
          <li><strong>Provisional Answer Key:</strong> Published on the UPESSC website shortly following the written exam on 15–16 December 2026.</li>
          <li><strong>Objection Window:</strong> Candidates may challenge provisional answers online by uploading authentic standard reference book citations.</li>
          <li><strong>Final Answer Key:</strong> Evaluated by subject experts; the finalized answer key is binding and no further representations are accepted.</li>
        </ul>
      </div>
    `
  },
  {
    id: 49,
    title: '49. Mock Test & Practice',
    badge: 'Practice',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Practice guidelines for 120-minute time management:</p>
        <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
          <p>• <strong>Recommended Time Allocation:</strong> 25 minutes for General Knowledge (30 questions), 85 minutes for Subject Domain (90 questions), and 10 minutes for OMR verification.</p>
          <p>• <strong>OMR Bubble Training:</strong> Practice on authentic OMR sheets to develop quick, accurate bubble filling with black ballpoint pens.</p>
          <p>• Use RajDailyTools interactive mock test tools to practice simulated subject tests under timed conditions.</p>
        </div>
      </div>
    `
  },
  {
    id: 50,
    title: '50. Frequently Asked Questions',
    badge: 'Official FAQs',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Essential official FAQs regarding UP PGT Teacher Recruitment 2026:</p>
        <div class="space-y-3">
          <div class="p-3 bg-white border border-slate-200 rounded-xl">
            <span class="font-bold text-slate-900 block">Q1: How many total posts are released in UP PGT 2026?</span>
            <p class="text-xs text-slate-600 mt-1">A total of 2,607 posts across 26 subjects (2,329 in Boys Schools and 278 in Girls Schools).</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl">
            <span class="font-bold text-slate-900 block">Q2: What is the age limit for UP PGT 2026?</span>
            <p class="text-xs text-slate-600 mt-1">Minimum age is 21 years as on 01.07.2026. The maximum superannuation retirement age is 62 years (Clause 6-ख).</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl">
            <span class="font-bold text-slate-900 block">Q3: What is the total selection mark structure?</span>
            <p class="text-xs text-slate-600 mt-1">Total 400 marks: 360 marks for Written Exam (120 MCQs) + 40 marks for Interview.</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl">
            <span class="font-bold text-slate-900 block">Q4: Is there negative marking in the written test?</span>
            <p class="text-xs text-slate-600 mt-1">Yes. For each wrong or multiple answer, 1 mark is deducted (Minus Marking) under Clause 9-क.</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl">
            <span class="font-bold text-slate-900 block">Q5: What are the examination dates?</span>
            <p class="text-xs text-slate-600 mt-1">15 and 16 December 2026 (15 व 16 दिसम्बर, 2026) as officially notified.</p>
          </div>
        </div>
      </div>
    `
  }
];

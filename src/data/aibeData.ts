import { ExamInfoSection, AdmissionRecord } from '../types/exam';

export function generateAibe_50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. Bar Council of India (BCI) & AIBE-XXII Official Notification Overview',
      content: `The Bar Council of India (BCI), a statutory body constituted under the Advocates Act, 1961, has officially announced the schedule for the **All India Bar Examination - XXII (AIBE-XXII)** through its official Press Release signed by **Manan Kumar Mishra**, Senior Advocate, Supreme Court of India and Chairman, Bar Council of India.

The All India Bar Examination is a mandatory qualifying certification examination conducted for law graduates seeking to practice law as advocates across India. Passing the examination is required under BCI rules to obtain the **Certificate of Practice (COP)**.

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Official Parameter</th>
        <th class="p-3">Details (Official Press Release)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Conducting Authority</td>
        <td class="p-3 font-bold text-slate-900">Bar Council of India (BCI), 21, Rouse Avenue Institutional Area, New Delhi - 110 002</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Examination Name</td>
        <td class="p-3 font-bold text-blue-700">All India Bar Examination - XXII (AIBE-XXII)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Statutory Mandate</td>
        <td class="p-3">Section 24 &amp; Section 49 of the Advocates Act, 1961 (Bar Council of India Rules)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Primary Purpose</td>
        <td class="p-3 font-bold text-emerald-700">Qualifying Examination for Grant of Certificate of Practice (COP) to Advocates</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Online Registration Begins</td>
        <td class="p-3 font-bold text-emerald-700">19 August 2026 (19-Aug-26)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Online Registration Closes</td>
        <td class="p-3 font-bold text-rose-700">27 October 2026 (27-Oct-26)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Date of Examination</td>
        <td class="p-3 font-bold text-blue-800">29 November 2026 (Sunday) (29-Nov-26)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Tentative Result Declaration</td>
        <td class="p-3 font-bold text-purple-700">Between 7 January 2027 and 10 January 2027 (7 to 10 Jan-2027)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Official Examination Portal</td>
        <td class="p-3"><a href="https://www.allindiabarexamination.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">www.allindiabarexamination.com</a></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Official BCI Website</td>
        <td class="p-3"><a href="https://www.barcouncilofindia.org" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">www.barcouncilofindia.org</a></td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 2,
      title: '2. Important Dates & Official Examination Schedule for AIBE-XXII',
      content: `The Bar Council of India officially notified the tentative schedule for All India Bar Examination - XXII (AIBE-XXII) in its official press release dated 18.07.2026. All candidates are instructed to complete their registration and fee payment strictly within the notified window.

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-blue-50 text-blue-900 font-bold border-b border-blue-200">
      <tr>
        <th class="p-3">S.No.</th>
        <th class="p-3">Activity</th>
        <th class="p-3">Official Date</th>
        <th class="p-3">Official Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-mono">1</td>
        <td class="p-3 font-semibold">Online Registration for AIBE-XXII begins from</td>
        <td class="p-3 font-bold text-emerald-700">19-Aug-2026 (Wednesday)</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">Registration Active</span></td>
      </tr>
      <tr>
        <td class="p-3 font-mono">2</td>
        <td class="p-3 font-semibold">Online Registration for AIBE-XXII closes on</td>
        <td class="p-3 font-bold text-rose-700">27-Oct-2026 (Tuesday)</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800">Registration Deadline</span></td>
      </tr>
      <tr>
        <td class="p-3 font-mono">3</td>
        <td class="p-3 font-semibold">Last date of payment through online mode</td>
        <td class="p-3 font-bold text-amber-700">28-Oct-2026 (Wednesday)</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">Fee Payment Cut-off</span></td>
      </tr>
      <tr>
        <td class="p-3 font-mono">4</td>
        <td class="p-3 font-semibold">Last date of correction in Registration form</td>
        <td class="p-3 font-bold text-purple-700">30-Oct-2026 (Friday)</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800">Correction Closes</span></td>
      </tr>
      <tr>
        <td class="p-3 font-mono">5</td>
        <td class="p-3 font-semibold">Admit card go Live for candidates</td>
        <td class="p-3 font-bold text-blue-700">14-Nov-2026 (Saturday)</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">Download Link Live</span></td>
      </tr>
      <tr>
        <td class="p-3 font-mono">6</td>
        <td class="p-3 font-semibold">Date of Examination for AIBE-XXII</td>
        <td class="p-3 font-bold text-rose-800 text-sm">29-Nov-2026 (Sunday)</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-full text-xs font-bold bg-rose-200 text-rose-900">National Exam Day</span></td>
      </tr>
      <tr>
        <td class="p-3 font-mono">7</td>
        <td class="p-3 font-semibold">Tentative Date of Result Declaration Between</td>
        <td class="p-3 font-bold text-slate-900">7 to 10 Jan-2027</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800">Result Window</span></td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 3,
      title: '3. Application Fee Structure & Payment Modes',
      content: `The application fee for the All India Bar Examination is payable completely through the online payment gateway integrated on the registration portal. 

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Category</th>
        <th class="p-3">Official Registration Fee</th>
        <th class="p-3">Payment Window</th>
        <th class="p-3">Accepted Online Modes</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold">General / OBC Candidates</td>
        <td class="p-3 font-bold text-slate-900">₹3,500 (+ applicable bank gateway charges)</td>
        <td class="p-3">Till 28-Oct-2026 (11:59 PM)</td>
        <td class="p-3" rowspan="2">Debit Card (Visa/MasterCard/RuPay), Credit Card, Net Banking &amp; UPI via Digivarsity payment gateway</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">SC / ST Candidates</td>
        <td class="p-3 font-bold text-slate-900">₹2,500 (+ applicable bank gateway charges)</td>
        <td class="p-3">Till 28-Oct-2026 (11:59 PM)</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs sm:text-sm text-amber-900 my-3">
  <strong>Payment Confirmation Note:</strong> The fee once paid is non-refundable and non-transferable under any circumstances. Candidates should ensure that the transaction receipt is downloaded and the application status shows "Payment Successful". If amount was deducted but receipt not generated, wait 24–48 hours for bank reconciliation before re-attempting.
</div>`
    },
    {
      id: 4,
      title: '4. Eligibility Criteria & Educational Qualification (LL.B Degree)',
      content: `To be eligible to appear for the All India Bar Examination (AIBE-XXII), a candidate must satisfy the following fundamental educational qualifications:

1. **Law Degree Requirement:** The candidate must possess an LL.B degree (either a 3-Year LL.B programme after graduation OR a 5-Year Integrated Law course such as B.A. LL.B, B.B.A. LL.B, B.Com LL.B, B.Sc. LL.B).
2. **Recognized Institution:** The law college, university, or institution from which the degree is obtained must be recognized by the **Bar Council of India (BCI)**.
3. **Passing Marks:** There are no minimum aggregate percentage criteria mandated in LL.B to register for AIBE; holding a valid, passed LL.B degree from a BCI-recognized college is sufficient.

<div class="p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl text-xs sm:text-sm text-blue-900 my-3">
  <strong>Example (Educational Qualification):</strong>
  <br/>
  <em>A candidate who completed a 3-year B.Com in 2022 and then completed a 3-year LL.B from a BCI-recognized university in June 2026 with 48% marks is fully eligible to register for AIBE-XXII, provided they are enrolled with a State Bar Council.</em>
</div>`
    },
    {
      id: 5,
      title: '5. Bar Council of India (BCI) Recognition Requirement for Law Colleges',
      content: `A critical prerequisite for appearing in AIBE is the BCI recognition status of the law institution:

- The institution, university department, or affiliated law college where the candidate pursued their law degree **must be recognized by the Bar Council of India** under the Legal Education Rules.
- Degrees obtained from unapproved or derecognized institutions will result in disqualification and cancellation of provisional enrollment by the respective State Bar Council.
- Candidates can verify the recognition status of their law center on the official Bar Council of India website (<a href="https://www.barcouncilofindia.org" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">www.barcouncilofindia.org</a>) under the "Legal Education" section.`
    },
    {
      id: 6,
      title: '6. State Bar Council Enrollment Mandate (Section 24 of Advocates Act, 1961)',
      content: `Under the Advocates Act, 1961, passing LL.B alone does not confer the title of an Advocate. Enrollment with a State Bar Council is compulsory:

1. **Section 24 Requirement:** Before applying for AIBE, the law graduate must be enrolled as an Advocate on the roll of any State Bar Council in India (e.g., Bar Council of Delhi, Bar Council of Uttar Pradesh, Bar Council of Maharashtra &amp; Goa, Bihar State Bar Council, etc.).
2. **Provisional Enrollment Certificate:** Upon enrollment, the State Bar Council issues an **Enrollment Certificate** and a **State Bar Council Enrollment Number** (e.g., *UP/12345/2026*, *D/9876/2026*, *MAH/4567/2025*).
3. **Mandatory Input:** Candidates must enter this official State Bar Council enrollment number while filling out the AIBE-XXII registration form and upload a scanned copy of their enrollment certificate or identity card.`
    },
    {
      id: 7,
      title: '7. Final Year / Final Semester Students & Undertaking Candidates Category',
      content: `In adherence to judicial pronouncements and BCI resolutions, final year law students awaiting results are allowed to register for AIBE subject to specific undertakings:

- **Who is an Undertaking Candidate:** Candidates in their final semester / final year who have not yet received their final mark sheet/provisional degree or whose State Bar Council enrollment is pending can register under the **"Undertaking"** category.
- **AIBE-XXI Benchmark Data:** As officially highlighted on Page 4 of the BCI Press Release dated 18.07.2026:
  - Total **56,352** Undertaking candidates appeared in AIBE-XXI (39,603 female, 56,352 male, 7 transgender).
  - Total **41,682** Undertaking candidates successfully qualified AIBE-XXI.
- **Post-Qualification Requirement:** Undertaking candidates who qualify AIBE must submit their final degree and complete formal State Bar Council enrollment to obtain their Certificate of Practice (COP).

<div class="p-4 bg-purple-50 border-l-4 border-purple-600 rounded-r-xl text-xs sm:text-sm text-purple-900 my-3">
  <strong>Example (Undertaking Candidate):</strong>
  <br/>
  <em>Rohan is in the 10th semester of his 5-Year Integrated B.A. LL.B in August 2026. His final semester exams are completed but university marksheets are awaited. Under BCI guidelines, Rohan can register for AIBE-XXII by choosing the Undertaking candidate option and submitting an undertaking from his law faculty dean/principal.</em>
</div>`
    },
    {
      id: 8,
      title: '8. Age Limit Criteria – Officially No Upper Age Limit for AIBE',
      content: `A significant advantage of the All India Bar Examination is the complete absence of any age restrictions:

- **Minimum Age:** There is no prescribed minimum age, provided the candidate has completed an LL.B degree.
- **Upper Age Limit:** There is **NO UPPER AGE LIMIT** to appear for AIBE.
- **Supreme Court Directive:** In multiple landmark decisions, the Hon'ble Supreme Court of India has held that individuals of any age (including retired government officers, corporate executives, teachers, and professionals who obtain an LL.B degree later in life) are eligible to enroll with a State Bar Council and sit for the All India Bar Examination.`
    },
    {
      id: 9,
      title: '9. Nationality & Domicile Regulations',
      content: `The All India Bar Examination is a nationwide examination open to all citizens who meet the statutory prerequisites:

- **Nationality:** The candidate must be a citizen of India.
- **Domicile:** There is **no state domicile restriction**. An advocate enrolled in Tamil Nadu can select an exam center in Delhi, Mumbai, Lucknow, or Kolkata.
- **Foreign Law Degrees:** Indian citizens who have graduated with a law degree from recognized foreign universities must have their degree recognized by the Bar Council of India under relevant reciprocal recognition rules.`
    },
    {
      id: 10,
      title: '10. Number of Attempts Permitted for AIBE',
      content: `The Bar Council of India places **NO RESTRICTION on the number of attempts** a candidate may make:

- A candidate who could not clear the examination in their first attempt can appear in subsequent AIBE editions (e.g., AIBE-XXII, XXIII, etc.) as many times as necessary until they pass.
- Each attempt requires fresh registration and payment of the prescribed registration fee on the official portal.`
    },
    {
      id: 11,
      title: '11. Validity of State Bar Council Provisional Enrollment & 2-Year Rule',
      content: `Understanding the statutory 2-year timeline under BCI Rules:

1. **Provisional License:** When a law graduate registers with a State Bar Council, they are granted a provisional enrollment valid for **2 years**.
2. **Condition Precedent:** During this 2-year provisional period, the advocate is legally permitted to practice in subordinate courts and must clear the All India Bar Examination.
3. **Consequence of Non-Clearing:** If an advocate does not clear AIBE within 2 years of enrollment, their right of audience in courts is temporarily suspended until they pass the examination and receive their Certificate of Practice (COP).
4. **Subsequent Clearance:** Passing AIBE at any subsequent date restores full active advocacy rights permanently.`
    },
    {
      id: 12,
      title: '12. Official Portal & Direct Registration Links for AIBE-XXII',
      content: `Candidates must apply strictly through the official BCI-approved portal links:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Portal Service</th>
        <th class="p-3">Official URL</th>
        <th class="p-3">Action</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold">AIBE-XXII Online Registration</td>
        <td class="p-3 font-mono text-xs text-blue-600 break-all"><a href="https://aibe.digivarsity.online/WebApp/Forms/Authentication.aspx" target="_blank" rel="noopener noreferrer" class="underline font-bold">https://aibe.digivarsity.online/WebApp/Forms/Authentication.aspx</a></td>
        <td class="p-3"><a href="https://aibe.digivarsity.online/WebApp/Forms/Authentication.aspx" target="_blank" rel="noopener noreferrer" class="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-bold inline-block">Apply Online</a></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Applicant Login &amp; Form Tracking</td>
        <td class="p-3 font-mono text-xs text-blue-600 break-all"><a href="https://aibe.digivarsity.online/WebApp/Forms/UserAuthentication.aspx" target="_blank" rel="noopener noreferrer" class="underline font-bold">https://aibe.digivarsity.online/WebApp/Forms/UserAuthentication.aspx</a></td>
        <td class="p-3"><a href="https://aibe.digivarsity.online/WebApp/Forms/UserAuthentication.aspx" target="_blank" rel="noopener noreferrer" class="px-3 py-1 bg-slate-700 hover:bg-slate-800 text-white rounded text-xs font-bold inline-block">Applicant Login</a></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Official Notification (Press Release dated 18.07.2026)</td>
        <td class="p-3 font-mono text-xs text-blue-600 break-all"><a href="https://www.allindiabarexamination.com/img/PressReleasedated18.07.2026.pdf" target="_blank" rel="noopener noreferrer" class="underline font-bold">PressReleasedated18.07.2026.pdf</a></td>
        <td class="p-3"><a href="https://www.allindiabarexamination.com/img/PressReleasedated18.07.2026.pdf" target="_blank" rel="noopener noreferrer" class="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold inline-block">Download PDF</a></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Official Syllabus Reference</td>
        <td class="p-3 font-mono text-xs text-blue-600 break-all"><a href="https://www.allindiabarexamination.com/img/Syllabus%20for%20All%20India%20Bar%20Exam-XXI.pdf#toolbar=0&amp;navpanes=0&amp;scrollbar=0" target="_blank" rel="noopener noreferrer" class="underline font-bold">Syllabus for All India Bar Exam-XXI.pdf</a></td>
        <td class="p-3"><a href="https://www.allindiabarexamination.com/img/Syllabus%20for%20All%20India%20Bar%20Exam-XXI.pdf#toolbar=0&amp;navpanes=0&amp;scrollbar=0" target="_blank" rel="noopener noreferrer" class="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-xs font-bold inline-block">View Syllabus</a></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Official Examination Homepage</td>
        <td class="p-3 font-mono text-xs text-blue-600 break-all"><a href="https://www.allindiabarexamination.com/" target="_blank" rel="noopener noreferrer" class="underline font-bold">https://www.allindiabarexamination.com/</a></td>
        <td class="p-3"><a href="https://www.allindiabarexamination.com/" target="_blank" rel="noopener noreferrer" class="px-3 py-1 bg-slate-600 hover:bg-slate-700 text-white rounded text-xs font-bold inline-block">Visit Portal</a></td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 13,
      title: '13. Step-by-Step Online Registration Process (Part 1: Primary Authentication)',
      content: `The registration for AIBE-XXII is conducted via Digivarsity authentication engine. Follow these exact steps:

1. Visit the official registration link: <a href="https://aibe.digivarsity.online/WebApp/Forms/Authentication.aspx" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">Authentication.aspx</a>.
2. Select your Enrollment Category:
   - **Enrolled Advocate:** Enter State Bar Council name and permanent enrollment number.
   - **Undertaking Candidate:** Select undertaking option if final year results/enrollment certificate are awaited.
3. Enter your primary details: Full Name (as per LL.B degree/State Bar records), Gender, Date of Birth, Active Mobile Number, and Valid Email ID.
4. Click on **Generate OTP**. Enter the OTP received on your mobile and email for authentication.
5. Create a secure password and submit. The system generates your unique **AIBE Registration ID / Application Number**.`
    },
    {
      id: 14,
      title: '14. Step-by-Step Application Form Submission (Part 2: Detailed Information)',
      content: `After successful basic authentication, log in at <a href="https://aibe.digivarsity.online/WebApp/Forms/UserAuthentication.aspx" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">UserAuthentication.aspx</a> to complete the comprehensive application form:

- **Section A: Personal Particulars:** Father's Name, Mother's Name, Category (General / OBC / SC / ST), Disability Status (PwD - Yes/No), Permanent Address &amp; Correspondence Address.
- **Section B: Educational Qualifications:** 
  - Class 10th (Matriculation) details: Board, Year, Roll No., Marks.
  - Class 12th (Higher Secondary) details: Board, Stream, Year, Marks.
  - Graduation details (if 3-Year LL.B route): Degree name, College, University, Passing Year.
  - LL.B Degree details: 3-Year / 5-Year Integrated, College Name, BCI Approval Code (if requested), Year of Passing.
- **Section C: State Bar Council Enrollment Particulars:** State Bar Council Name, Date of Enrollment, Enrollment Certificate Number.
- **Section D: Examination Centre & Language Choice:** Select up to 3 preferred examination cities in order of priority and choose your question paper medium.`
    },
    {
      id: 15,
      title: '15. Uploading Mandatory Documents, Photograph & Signature Specifications',
      content: `Ensure all uploaded files adhere strictly to BCI portal dimensions and file sizes to avoid rejection:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Document / Image</th>
        <th class="p-3">Allowed Format</th>
        <th class="p-3">File Size Range</th>
        <th class="p-3">Specific Guidelines</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold">Passport Size Photograph</td>
        <td class="p-3">JPG / JPEG</td>
        <td class="p-3 font-bold text-blue-700">10 KB to 50 KB</td>
        <td class="p-3">Recent colored photograph, white/light background, front-facing without dark sunglasses or caps.</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Candidate's Signature</td>
        <td class="p-3">JPG / JPEG</td>
        <td class="p-3 font-bold text-blue-700">10 KB to 50 KB</td>
        <td class="p-3">Clear signature signed with blue/black ink on plain white paper.</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">State Bar Council Enrollment Certificate</td>
        <td class="p-3">PDF or JPG</td>
        <td class="p-3 font-bold text-emerald-700">50 KB to 500 KB</td>
        <td class="p-3">Self-attested copy of Enrollment Certificate / Identity Card issued by State Bar Council.</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">LL.B Degree / Provisional Certificate</td>
        <td class="p-3">PDF or JPG</td>
        <td class="p-3 font-bold text-emerald-700">50 KB to 500 KB</td>
        <td class="p-3">Degree certificate or provisional marksheet of final semester.</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Category Certificate (SC/ST/OBC)</td>
        <td class="p-3">PDF or JPG</td>
        <td class="p-3">50 KB to 300 KB</td>
        <td class="p-3">Issued by competent revenue authority (if seeking fee/qualifying marks benefit).</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Disability Certificate (if PwD)</td>
        <td class="p-3">PDF or JPG</td>
        <td class="p-3">50 KB to 300 KB</td>
        <td class="p-3">Certificate showing minimum 40% permanent disability from CMO/authorized medical board.</td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 16,
      title: '16. Complete Checklist of Documents Required for AIBE-XXII Registration',
      content: `Keep the following original documents and scanned copies ready before starting the online application:

- [ ] Active Mobile Number and Personal Email ID
- [ ] Valid Govt. Photo ID Proof (Aadhaar Card, Passport, Voter ID, PAN Card, or Driving License)
- [ ] Class 10th Marksheet / Certificate (for Date of Birth verification)
- [ ] Class 12th Marksheet &amp; Passing Certificate
- [ ] Graduation Degree &amp; Marksheet (if 3-Year LL.B graduate)
- [ ] LL.B Degree / Provisional Degree Certificate / Final Semester Consolidated Marksheet
- [ ] State Bar Council Enrollment Certificate / Advocate ID Card
- [ ] Undertaking Document from Law College Dean (applicable only for Undertaking candidates)
- [ ] Caste/Category Certificate (for SC / ST candidates claiming ₹2,500 fee concession)
- [ ] PwD Medical Disability Certificate (for claiming scribe / compensatory time)`
    },
    {
      id: 17,
      title: '17. Application Fee Payment Workflow & Online Gateway Guidelines',
      content: `Detailed payment flow for AIBE-XXII:

1. After completing all four sections of the form and uploading documents, click on **Proceed to Payment**.
2. The portal displays a summary of your application details and the applicable fee (₹3,500 for General/OBC, ₹2,500 for SC/ST).
3. Click **Pay Now** to navigate to the secure payment aggregator.
4. Select your preferred payment channel:
   - **UPI:** Scan dynamic QR code through Google Pay, PhonePe, Paytm, or BHIM.
   - **Debit/Credit Card:** Enter 16-digit card number, expiry date, and CVV.
   - **Net Banking:** Select from authorized retail/corporate banking options.
5. Enter OTP received from your bank to authorize payment.
6. Upon transaction success, do NOT press refresh or back. The screen will automatically redirect to the AIBE confirmation portal.`
    },
    {
      id: 18,
      title: '18. Application Correction Window & Modification Rules (Closes 30-Oct-2026)',
      content: `The Bar Council of India provides an official **Correction Window** for registered candidates:

- **Official Correction Deadline:** **30 October 2026** (Friday).
- **Fields Editable:**
  - Candidate's Name spelling mistakes
  - Photograph or Signature re-upload (if blurred or distorted)
  - Preferred Examination Centre City
  - Language / Medium of Question Paper
  - State Bar Council Enrollment number correction
- **Non-Editable Fields:** Mobile number, primary email ID, and registered category (General/OBC/SC/ST) cannot normally be changed after payment reconciliation.
- Any request for corrections after 30-Oct-2026 will be summarily rejected by the BCI Monitoring Committee.

<div class="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs sm:text-sm text-amber-900 my-3">
  <strong>Example (Correction Window):</strong>
  <br/>
  <em>An advocate initially selected Hindi as their question paper medium during registration in August. After consulting colleagues, they prefer English medium. They can log into the portal on or before 30-Oct-2026, navigate to the correction module, switch the language to English, and save the updated confirmation page without paying any penalty fee.</em>
</div>`
    },
    {
      id: 19,
      title: '19. Confirmation Page & Application Form Printout Guidelines',
      content: `Once fee payment is reconciled and the form is locked:

- Candidates must download and print **at least two copies** of the Final Application Confirmation Page.
- Note down your **Registration Number** and **Password** in a secure notebook.
- The hard copy of the application form is **NOT required to be sent by post** to the Bar Council of India office in New Delhi; it must be preserved safely for future reference during document verification and Certificate of Practice (COP) collection.`
    },
    {
      id: 20,
      title: '20. Scheme of Examination & Core Mode (Offline Pen-Paper OMR Mode)',
      content: `The All India Bar Examination (AIBE-XXII) is conducted across the nation in **Offline (Pen &amp; Paper) OMR format**:

- **Mode:** Offline Pen-Paper Test using OMR Answer Sheets.
- **Answer Marking:** Candidates must darken circles on the OMR sheet using **Blue or Black Ballpoint Pen ONLY**. Gel pens, fountain pens, or pencils are strictly prohibited.
- **Single Shift:** The examination is conducted in a single afternoon session across all authorized centers nationwide on **29 November 2026 (Sunday)**.
- **Question Booklet:** Candidates are allowed to take the question booklet home after the conclusion of the examination.`
    },
    {
      id: 21,
      title: '21. Structure of Question Paper (100 MCQs, 100 Marks, Duration 3 Hours)',
      content: `Official question paper architecture for AIBE:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Component</th>
        <th class="p-3">Official Specification</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Total Questions</td>
        <td class="p-3 font-bold text-slate-900">100 Multiple Choice Questions (MCQs)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Total Marks</td>
        <td class="p-3 font-bold text-slate-900">100 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Question Format</td>
        <td class="p-3">Objective type with 4 options (A, B, C, D) and one single correct choice</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Test Duration</td>
        <td class="p-3 font-bold text-blue-700">3 Hours (180 Minutes) – 02:00 PM to 05:00 PM (tentative)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Compensatory Time for PwD</td>
        <td class="p-3 font-bold text-purple-700">20 minutes per hour extra (Total 3 Hours 30 Minutes / 210 Minutes)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Type of Test</td>
        <td class="p-3 font-bold text-emerald-700">Open Book / Bare Acts Permitted (without notes/comments)</td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 22,
      title: '22. Marking Scheme & Absence of Negative Marking',
      content: `The scoring methodology for AIBE is candidate-friendly:

- **Correct Answer:** **+1 Mark** awarded for each correctly darkened bubble.
- **Incorrect Answer:** **0 Marks** (NO NEGATIVE MARKING).
- **Unanswered / Blank Question:** **0 Marks**.
- **Multiple Bubbles Darkened:** 0 Marks awarded for that particular question.

<div class="p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-xl text-xs sm:text-sm text-emerald-900 my-3">
  <strong>Strategic Tip:</strong> Because there is zero negative marking, candidates are advised to attempt **ALL 100 questions** before submitting their OMR answer sheet.
</div>`
    },
    {
      id: 23,
      title: '23. Minimum Qualifying Cut-Off Marks & Moderation Rules',
      content: `The All India Bar Examination is strictly a **qualifying examination**; no ranks, percentiles, or merit positions are declared. Candidates need only attain the minimum qualifying threshold:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Category</th>
        <th class="p-3">Standard Passing Percentage</th>
        <th class="p-3">Standard Qualifying Marks (out of 100)</th>
        <th class="p-3">Official Precedent Note</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold">General / Other Backward Class (OBC)</td>
        <td class="p-3 font-bold text-slate-900">45%</td>
        <td class="p-3 font-bold text-blue-700">45 Marks</td>
        <td class="p-3" rowspan="2">In AIBE-XXI, the Monitoring Committee moderated results and reduced qualifying marks by 3 marks (42 for Gen/OBC and 37 for SC/ST/PwD) as per Page 1 of the official Press Release dated 18.07.2026. For AIBE-XXII, standard 45/40 applies unless moderated post-exam.</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Scheduled Caste (SC) / Scheduled Tribe (ST) / PwD</td>
        <td class="p-3 font-bold text-slate-900">40%</td>
        <td class="p-3 font-bold text-blue-700">40 Marks</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl text-xs sm:text-sm text-blue-900 my-3">
  <strong>Example (Qualifying Threshold):</strong>
  <br/>
  <em>An advocate in the General category scores 46 marks out of 100 in AIBE-XXII. They are declared "QUALIFIED" and receive the Certificate of Practice. Another candidate scoring 85 marks also receives the exact same "QUALIFIED" status on their scorecard with no differential grading.</em>
</div>`
    },
    {
      id: 24,
      title: '24. AIBE Examination Languages & Mediums of Question Paper',
      content: `The All India Bar Examination is multilingual to ensure fair access for law graduates across all regions of India. The examination is offered in **11+ regional languages** alongside English and Hindi:

1. English
2. Hindi
3. Assamese
4. Bengali
5. Gujarati
6. Kannada
7. Malayalam
8. Marathi
9. Odia
10. Punjabi
11. Tamil
12. Telugu

*Note:* Candidates must choose their question paper medium carefully during the registration or correction window. Question booklets are provided bilingual (English + chosen regional language).`
    },
    {
      id: 25,
      title: '25. Official Syllabus Note & Comparative Analysis (AIBE-XXI vs AIBE-XXII)',
      content: `**CRITICAL OFFICIAL SYLLABUS DISCLOSURE:**
The syllabus document provided on the official website (<a href="https://www.allindiabarexamination.com/img/Syllabus%20for%20All%20India%20Bar%20Exam-XXI.pdf#toolbar=0&amp;navpanes=0&amp;scrollbar=0" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">Syllabus for All India Bar Exam-XXI.pdf</a>) reflects the official 19-subject structure established for AIBE-XXI.

The Bar Council of India has not issued a separate or altered syllabus notification specifically for AIBE-XXII. Therefore, candidates should prepare according to this standard 19-subject curriculum as the authoritative reference framework until any further notice is released by BCI.

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">S.No.</th>
        <th class="p-3">Subject / Legal Domain</th>
        <th class="p-3">Official Number of Questions</th>
        <th class="p-3">Total Marks</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr class="bg-blue-50/40">
        <td class="p-3 font-mono">1</td>
        <td class="p-3 font-bold text-blue-900">Constitutional Law</td>
        <td class="p-3 font-bold text-blue-900">10 Questions</td>
        <td class="p-3 font-bold text-blue-900">10 Marks</td>
      </tr>
      <tr class="bg-blue-50/40">
        <td class="p-3 font-mono">2</td>
        <td class="p-3 font-bold text-blue-900">I.P.C. (Indian Penal Code)</td>
        <td class="p-3 font-bold text-blue-900">8 Questions</td>
        <td class="p-3 font-bold text-blue-900">8 Marks</td>
      </tr>
      <tr class="bg-blue-50/40">
        <td class="p-3 font-mono">3</td>
        <td class="p-3 font-bold text-blue-900">Cr.P.C. (Criminal Procedure Code)</td>
        <td class="p-3 font-bold text-blue-900">10 Questions</td>
        <td class="p-3 font-bold text-blue-900">10 Marks</td>
      </tr>
      <tr class="bg-blue-50/40">
        <td class="p-3 font-mono">4</td>
        <td class="p-3 font-bold text-blue-900">C.P.C. (Code of Civil Procedure)</td>
        <td class="p-3 font-bold text-blue-900">10 Questions</td>
        <td class="p-3 font-bold text-blue-900">10 Marks</td>
      </tr>
      <tr class="bg-blue-50/40">
        <td class="p-3 font-mono">5</td>
        <td class="p-3 font-bold text-blue-900">Evidence Act</td>
        <td class="p-3 font-bold text-blue-900">8 Questions</td>
        <td class="p-3 font-bold text-blue-900">8 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-mono">6</td>
        <td class="p-3 font-semibold">Alternative Dispute Redressal including Arbitration Act</td>
        <td class="p-3">4 Questions</td>
        <td class="p-3">4 Marks</td>
      </tr>
      <tr class="bg-emerald-50/40">
        <td class="p-3 font-mono">7</td>
        <td class="p-3 font-bold text-emerald-900">Family Law</td>
        <td class="p-3 font-bold text-emerald-900">8 Questions</td>
        <td class="p-3 font-bold text-emerald-900">8 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-mono">8</td>
        <td class="p-3 font-semibold">Public Interest Litigation (PIL)</td>
        <td class="p-3">4 Questions</td>
        <td class="p-3">4 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-mono">9</td>
        <td class="p-3 font-semibold">Administrative Law</td>
        <td class="p-3">3 Questions</td>
        <td class="p-3">3 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-mono">10</td>
        <td class="p-3 font-semibold">Professional Ethics &amp; Cases of Professional Misconduct under BCI Rules</td>
        <td class="p-3 font-bold text-purple-700">4 Questions</td>
        <td class="p-3 font-bold text-purple-700">4 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-mono">11</td>
        <td class="p-3 font-semibold">Company Law</td>
        <td class="p-3">2 Questions</td>
        <td class="p-3">2 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-mono">12</td>
        <td class="p-3 font-semibold">Environmental Law</td>
        <td class="p-3">2 Questions</td>
        <td class="p-3">2 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-mono">13</td>
        <td class="p-3 font-semibold">Cyber Law</td>
        <td class="p-3">2 Questions</td>
        <td class="p-3">2 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-mono">14</td>
        <td class="p-3 font-semibold">Labour &amp; Industrial Laws</td>
        <td class="p-3">4 Questions</td>
        <td class="p-3">4 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-mono">15</td>
        <td class="p-3 font-semibold">Law of Tort, including Motor Vehicle Act &amp; Consumer Protection Law</td>
        <td class="p-3">5 Questions</td>
        <td class="p-3">5 Marks</td>
      </tr>
      <tr class="bg-indigo-50/40">
        <td class="p-3 font-mono">16</td>
        <td class="p-3 font-bold text-indigo-900">Law related to Taxation</td>
        <td class="p-3 font-bold text-indigo-900">4 Questions</td>
        <td class="p-3 font-bold text-indigo-900">4 Marks</td>
      </tr>
      <tr class="bg-indigo-50/40">
        <td class="p-3 font-mono">17</td>
        <td class="p-3 font-bold text-indigo-900">Law of Contract, Specific Relief, Property Laws, Negotiable Instrument Act</td>
        <td class="p-3 font-bold text-indigo-900">8 Questions</td>
        <td class="p-3 font-bold text-indigo-900">8 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-mono">18</td>
        <td class="p-3 font-semibold">Land Acquisition Act</td>
        <td class="p-3">2 Questions</td>
        <td class="p-3">2 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-mono">19</td>
        <td class="p-3 font-semibold">Intellectual Property Laws</td>
        <td class="p-3">2 Questions</td>
        <td class="p-3">2 Marks</td>
      </tr>
      <tr class="bg-slate-100 font-black text-slate-900 border-t-2 border-slate-300">
        <td class="p-3" colspan="2">TOTAL SCORE &amp; QUESTIONS</td>
        <td class="p-3 font-mono text-base text-blue-700">100 Questions</td>
        <td class="p-3 font-mono text-base text-blue-700">100 Marks</td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 26,
      title: '26. Subject 1: Constitutional Law (Weightage & Key Focus Areas)',
      content: `Constitutional Law carries the highest individual weightage (**10 Questions / 10 Marks**):

- Preamble, Citizenship, and Fundamental Rights (Articles 12 to 35) with landmark case laws.
- Directive Principles of State Policy (Part IV) and Fundamental Duties (Article 51A).
- The Union &amp; State Judiciary: Jurisdiction of the Supreme Court (Articles 32, 131, 136, 141, 142) and High Courts (Articles 226, 227).
- Writ Jurisdiction: Habeas Corpus, Mandamus, Quo Warranto, Certiorari, Prohibition.
- Emergency Provisions (Articles 352, 356, 360) and Constitutional Amendment Procedure (Article 368).`
    },
    {
      id: 27,
      title: '27. Subject 2: Criminal Law & Indian Penal Code (IPC / BNS Context)',
      content: `Carries **8 Questions / 8 Marks**:

- General Exceptions (Sections 76 to 106 IPC), Joint Liability (Section 34 &amp; 149 IPC), and Criminal Conspiracy (Section 120A/120B).
- Offences affecting the Human Body: Culpable Homicide vs Murder (Section 299 &amp; 300), Hurt &amp; Grievous Hurt, Kidnapping &amp; Abduction.
- Offences against Property: Theft, Extortion, Robbery, Dacoity, Criminal Breach of Trust, Cheating.
- Offences against Women and Children: Sections 354, 375/376, 498A IPC.
- *Note on New Criminal Laws:* While the historical syllabus lists IPC, candidates should be familiar with both IPC provisions and their corresponding sections under the **Bharatiya Nyaya Sanhita (BNS)**.`
    },
    {
      id: 28,
      title: '28. Subject 3: Criminal Procedure Code (Cr.P.C. / BNSS Context)',
      content: `Carries **10 Questions / 10 Marks**:

- Classification of Offences: Bailable vs Non-Bailable, Cognizable vs Non-Cognizable, Compoundable vs Non-Compoundable.
- Arrest, Search, and Seizure procedures (Sections 41 to 60A).
- Information to Police and their Powers to Investigate (Section 154 - FIR, 161 - Statements, 173 - Charge Sheet).
- Jurisdiction of Criminal Courts and Inquiries.
- Bail and Bonds provisions (Sections 436, 437, 438 - Anticipatory Bail, 439).
- Reference, Revision, and Appeal procedures.`
    },
    {
      id: 29,
      title: '29. Subject 4: Code of Civil Procedure (C.P.C.)',
      content: `Carries **10 Questions / 10 Marks**:

- Jurisdiction of Civil Courts, Res Sub-Judice (Section 10) and Res Judicata (Section 11).
- Place of Suing (Sections 15 to 20) and Transfer of Suits.
- Pleadings generally (Order VI), Plaint (Order VII), Written Statement &amp; Set-off/Counterclaim (Order VIII).
- Inherent Powers of Court (Section 151).
- Temporary Injunctions and Interlocutory Orders (Order XXXIX).
- Execution of Decrees and Orders (Order XXI).`
    },
    {
      id: 30,
      title: '30. Subject 5: Indian Evidence Act (Evidence / BSA Context)',
      content: `Carries **8 Questions / 8 Marks**:

- Relevancy of Facts: Doctrine of Res Gestae (Section 6), Motive, Preparation and Conduct (Section 8), Conspiracy (Section 10).
- Admissions and Confessions (Sections 17 to 30).
- Dying Declarations (Section 32(1)).
- Primary and Secondary Evidence; Electronic Evidence certification (Section 65B).
- Burden of Proof and Presumptions (Sections 101 to 114A).
- Competence and Examination of Witnesses: Leading Questions, Impeaching Credit of Witness, Hostile Witness (Section 154).`
    },
    {
      id: 31,
      title: '31. Subject 6: Law of Contract, Specific Relief, Property & Negotiable Instruments',
      content: `Carries a collective weightage of **8 Questions / 8 Marks**:

- **Indian Contract Act, 1872:** Offer and Acceptance, Consideration, Free Consent (Coercion, Undue Influence, Fraud, Misrepresentation, Mistake), Void Agreements, Breach of Contract and Damages (Sections 73–75).
- **Specific Relief Act, 1963:** Recovering possession of property, Specific Performance of contracts, Rectification and Injunctions.
- **Transfer of Property Act, 1882:** Movable vs Immovable property, Rule against Perpetuity, Doctrine of Lis Pendens (Section 52), Part Performance (Section 53A), Mortgages and Leases.
- **Negotiable Instruments Act, 1881:** Promissory Notes, Bills of Exchange, Cheques, Dishonour of Cheque proceedings under Section 138.`
    },
    {
      id: 32,
      title: '32. Subject 7: Family Law (Hindu & Muslim Personal Laws)',
      content: `Carries **8 Questions / 8 Marks**:

- **Hindu Law:** Hindu Marriage Act, 1955 (Conditions for Marriage, Void &amp; Voidable marriages, Divorce by Mutual Consent, Judicial Separation), Hindu Succession Act, 1956 (Class I &amp; II heirs, Coparcenary rights after 2005 amendment), Hindu Adoption and Maintenance Act, 1956.
- **Muslim Law:** Sources of Muslim Law, Marriage (Nikah, Mahr, Talaq modes), Gifts (Hiba), Wills (Wasiyat), and Maintenance provisions.`
    },
    {
      id: 33,
      title: '33. Subject 8: Public Interest Litigation (PIL) & Landmark Jurisprudence',
      content: `Carries **4 Questions / 4 Marks**:

- Origin and Evolution of PIL in India through Justice P.N. Bhagwati and Justice V.R. Krishna Iyer.
- Relaxation of Locus Standi for socially disadvantaged classes.
- Landmark judgments: *Hussainara Khatoon*, *Bandhua Mukti Morcha*, *M.C. Mehta* environmental cases, *Vishaka v. State of Rajasthan*.
- Misuse of PIL and guidelines issued by the Supreme Court to prevent frivolous petitions.`
    },
    {
      id: 34,
      title: '34. Subject 9: Administrative Law',
      content: `Carries **3 Questions / 3 Marks**:

- Concept of Rule of Law and Separation of Powers.
- Delegated Legislation and its judicial/parliamentary controls.
- Principles of Natural Justice: *Nemo Judex In Causa Sua* (Rule against Bias) and *Audi Alteram Partem* (Hear the other side).
- Administrative Discretion and Judicial Review of administrative action.`
    },
    {
      id: 35,
      title: '35. Subject 10: Professional Ethics & Cases of Professional Misconduct under BCI Rules',
      content: `Carries **4 Questions / 4 Marks**:

- Duties of an Advocate: Duty towards the Court, Client, Opponent, and Colleague.
- Advocates Act, 1961: Disciplinary Committees, Powers of Bar Council of India, Section 35 &amp; 36.
- Professional Misconduct: Contempt of Court, Conflict of Interest, Advertising restrictions for advocates.
- Landmark Disciplinary judgements decided by BCI and Supreme Court.`
    },
    {
      id: 36,
      title: '36. Subject 11: Company Law, Environmental Law & Cyber Law',
      content: `Carries **6 Questions / 6 Marks total**:

- **Company Law (2 Questions):** Corporate Personality, Lifting of Corporate Veil, Types of Companies, MOA/AOA, Board Meetings, Director Duties, NCLT/NCLAT.
- **Environmental Law (2 Questions):** Environment (Protection) Act, 1986, National Green Tribunal (NGT) Act, Precautionary Principle, Polluter Pays Principle, Sustainable Development.
- **Cyber Law (2 Questions):** Information Technology Act, 2000, Digital Signatures, Electronic Governance, Penalties for Hacking and Data Breach (Sections 43, 66).`
    },
    {
      id: 37,
      title: '37. Subject 12: Labour & Industrial Laws, Law of Tort & Motor Vehicle Act',
      content: `Carries **9 Questions / 9 Marks total**:

- **Labour Laws (4 Questions):** Industrial Disputes Act, 1947 (Strikes, Lockouts, Retrenchment, Lay-off, Grievance settlement), Trade Unions Act, 1926.
- **Law of Tort (5 Questions combined):** Negligence, Strict and Absolute Liability (*Rylands v. Fletcher*, *M.C. Mehta*), Defamation, Vicarious Liability, Motor Vehicles Act (Third-party insurance, compensation claims under MACT), Consumer Protection Act, 2019.`
    },
    {
      id: 38,
      title: '38. Subject 13: Law of Taxation & Intellectual Property Rights (IPR)',
      content: `Carries **6 Questions / 6 Marks total**:

- **Law of Taxation (4 Questions):** Basic concepts of Direct Taxes (Income Tax Act, 1961 - Assessment Year, Previous Year, Heads of Income, Capital Gains) and Indirect Taxes (GST principles).
- **Intellectual Property Rights (2 Questions):** Patents Act, 1970, Copyright Act, 1957, Trade Marks Act, 1999 (Infringement, Passing off, Duration of IP protection).`
    },
    {
      id: 39,
      title: '39. Official Bare Acts Carrying Rules (Without Notes vs With Notes)',
      content: `The rules regarding carrying Bare Acts inside the AIBE examination hall are strictly monitored:

- **Permitted Bare Acts:** Candidates are permitted to bring **Bare Acts without notes or commentary** into the examination hall.
- **Short Comments:** If Bare Acts without notes are unavailable in the market, Bare Acts containing **minimal/short notes or internal section references** are generally tolerated, but books with extensive explanations, digest questions, or case law guides are **strictly prohibited**.
- **Prohibited Materials:** Textbooks, law guides, photocopied notes, handwritten notes, digital devices, and solved previous year papers are completely barred from entry.

<div class="p-4 bg-rose-50 border-l-4 border-rose-600 rounded-r-xl text-xs sm:text-sm text-rose-900 my-3">
  <strong>Example (Bare Acts Check):</strong>
  <br/>
  <em>An advocate enters the test center with a universal Bare Act for CrPC containing statutory sections and minor legislative amendments. This is fully permissible. Another candidate carrying a 1200-page detailed textbook on criminal law with solved model answers will have their book confiscated by the invigilator at the security frisking gate.</em>
</div>`
    },
    {
      id: 40,
      title: '40. Examination Centres & City Selection Across India',
      content: `The All India Bar Examination is conducted at **over 290+ examination centers across 60+ major cities** throughout all Indian States and Union Territories:

- **Major Examination Cities:** New Delhi, Noida, Lucknow, Prayagraj, Patna, Ranchi, Kolkata, Guwahati, Jaipur, Jodhpur, Bhopal, Indore, Ahmedabad, Mumbai, Pune, Nagpur, Bengaluru, Chennai, Hyderabad, Kochi, Chandigarh, Dehradun, Jammu, and Shimla.
- **City Preference:** Candidates may choose up to **3 cities** in order of priority during the online registration process.
- **Final Allotment:** The Bar Council of India reserves the right to assign any center within or adjacent to the preferred city depending on seat capacity.`
    },
    {
      id: 41,
      title: '41. AIBE-XXII Admit Card Release Date (14-Nov-2026) & Download Procedure',
      content: `As officially confirmed in the BCI Press Release schedule:

- **Admit Card Live Date:** **14 November 2026** (Saturday).
- **How to Download:**
  1. Go to <a href="https://www.allindiabarexamination.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">www.allindiabarexamination.com</a> or the Digivarsity login page.
  2. Click on the direct link **"Download AIBE-XXII Admit Card"**.
  3. Enter your **Registration Number / User ID** and **Date of Birth / Password**.
  4. Your Admit Card appears on screen with venue address, roll number, photo, signature, and exam day guidelines.
  5. Print at least two clear colored copies on A4 paper.`
    },
    {
      id: 42,
      title: '42. Examination Day Guidelines, Reporting Time & Prohibited Items',
      content: `To ensure seamless entry on 29 November 2026:

- **Reporting Time:** Report to the exam venue at least **60 to 90 minutes** prior to the commencement of the exam. Gates close 15 minutes before the test begins.
- **Mandatory Documents to Carry:**
  1. Printed Copy of AIBE-XXII Admit Card.
  2. Original Photo ID Proof (Aadhaar, Voter ID, Passport, PAN Card, or State Bar Council ID).
  3. Two Blue/Black Ballpoint Pens.
  4. Permissible Bare Acts (without notes).
- **Strictly Prohibited Items:** Mobile phones, smartwatches, Bluetooth earbuds, fitness bands, calculators, bags, study guides, and eatables (except transparent water bottles).`
    },
    {
      id: 43,
      title: '43. Provisions for Persons with Benchmark Disabilities (PwD) & Compensatory Time',
      content: `In compliance with the Rights of Persons with Disabilities Act, 2016:

- **Compensatory Extra Time:** Candidates with 40% or more disability are entitled to **20 minutes per hour** of compensatory time, granting a total test duration of **3 Hours 30 Minutes (210 Minutes)**.
- **Scribe Facility:** Candidates requiring a scribe must indicate this during registration and upload their valid disability certificate and scribe undertaking.
- **Ground Floor Seating:** Centers are instructed to arrange accessible seating on ground floors for candidates with locomotor disabilities.`
    },
    {
      id: 44,
      title: '44. Provisional Answer Key, Question Paper PDF & Online Objection Management',
      content: `Post-examination transparency process:

- **Provisional Answer Key:** Released on the official portal within 3 to 7 days following the exam date.
- **Question Paper Booklets:** All paper sets (Set A, B, C, D) are published in PDF format alongside the answer keys.
- **Objection Filing:** Candidates who identify discrepancies in questions or official answer keys can submit objections online through the **Objection Management Portal** within the stipulated 3 to 5 day window by uploading supporting statutory citations.`
    },
    {
      id: 45,
      title: '45. Scrutiny of Result, Re-checking of OMR Answer Sheets & Final Answer Key',
      content: `How BCI addresses disputed questions:

- All candidate objections are reviewed by an independent **Expert Committee** constituted under the Monitoring Committee of the Bar Council of India.
- If a question is found to be factually incorrect or have two ambiguous correct answers, the question is either deleted or full marks are awarded to all candidates.
- A **Final Answer Key** is published incorporating these corrections, and final results are computed strictly on the basis of this final key.`
    },
    {
      id: 46,
      title: '46. Official Result Declaration Schedule (7 to 10 January 2027)',
      content: `The official result timeline has been clearly announced by the BCI Chairman:

- **Official Result Window:** **Between 7 January 2027 and 10 January 2027** (7 to 10 Jan-2027).
- **Result Output:** The scorecard displays candidate details, roll number, registration ID, and qualifying status as **"PASS / QUALIFIED"** or **"FAIL / NOT QUALIFIED"**. Numerical marks are typically not displayed on public scorecards to maintain standard professional parity.
- Scorecards can be downloaded and preserved for submission to respective State Bar Councils.`
    },
    {
      id: 47,
      title: '47. Certificate of Practice (COP) Issuance Process & Verification',
      content: `The culmination of clearing the All India Bar Examination:

1. **Generation of COP:** After result declaration, the Bar Council of India transmits verified lists of qualified advocates to the respective State Bar Councils.
2. **Digital & Physical COP:** Qualified candidates can download their digital Certificate of Practice via the official **AIBE Mobile App** or the BCI web portal.
3. **Physical Certificate:** The physical Certificate of Practice (hard copy certificate embossed with BCI seal) is dispatched to the State Bar Council office where the advocate is enrolled.
4. **Lifetime Practice Right:** The COP entitles the advocate to practice the profession of law in any court of law across India under Section 30 of the Advocates Act, 1961.`
    },
    {
      id: 48,
      title: '48. Statistical Review & Pass Percentage Insights from Official Press Release',
      content: `The Bar Council of India Press Release dated 18.07.2026 provides authoritative historical data from the immediately preceding AIBE-XXI examination:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Official Metric (AIBE-XXI Press Release)</th>
        <th class="p-3">Official Figures</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Total Candidates Appeared</td>
        <td class="p-3 font-bold text-slate-900">1,75,701 Candidates across 292 centers in 60 cities</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Gender Breakdown (Appeared)</td>
        <td class="p-3">Male: 1,10,909 | Female: 64,784 | Transgender: 8</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Total Candidates Qualified</td>
        <td class="p-3 font-bold text-emerald-700">1,15,805 Candidates</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Overall Pass Percentage</td>
        <td class="p-3 font-bold text-blue-700">65.92% Pass Percentage</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Undertaking Candidates Appeared / Qualified</td>
        <td class="p-3 font-bold text-purple-700">56,352 Appeared / 41,682 Qualified (High Success Rate)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Top Participating State Bar Councils</td>
        <td class="p-3">Bar Council of Uttar Pradesh, Bar Council of Delhi, Bar Council of Maharashtra &amp; Goa, Bar Council of Rajasthan, Bar Council of MP</td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 49,
      title: '49. Do\'s and Don\'ts for AIBE-XXII Aspirants',
      content: `Essential best practices for advocates appearing in AIBE-XXII:

- **DO:**
  - Verify that your State Bar Council provisional enrollment number is entered exactly as shown on your certificate.
  - Familiarize yourself with index searching and section numbers in Bare Acts.
  - Attempt all 100 questions since there is no negative marking.
  - Double check your designated examination city on your admit card immediately upon release on 14-Nov-2026.
- **DON\'T:**
  - Do NOT carry commentary textbooks, student guides, or handwritten loose sheets.
  - Do NOT wait until the last day (27-Oct-2026) to pay the registration fee.
  - Do NOT mark two bubbles for the same question on the OMR sheet.
  - Do NOT use pencils or red/green pens on the OMR sheet.`
    },
    {
      id: 50,
      title: '50. Official Contacts, Helpdesk & Important Direct Links',
      content: `Official contact information and primary portals for the All India Bar Examination:

- **Bar Council of India Office:** 21, Rouse Avenue Institutional Area, Near Bal Bhawan, New Delhi - 110 002.
- **BCI Helpline Numbers:** 011-4922 5000 / 011-4922 5011
- **Official BCI Email:** <a href="mailto:info@barcouncilofindia.org" class="text-blue-600 underline font-semibold">info@barcouncilofindia.org</a>
- **AIBE Technical Helpdesk:** Check contact section on <a href="https://www.allindiabarexamination.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold">www.allindiabarexamination.com</a>

<div class="mt-4 p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-700">
  <strong>Direct Access Summary:</strong>
  <div class="flex flex-wrap gap-2 mt-2">
    <a href="https://aibe.digivarsity.online/WebApp/Forms/Authentication.aspx" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all inline-block">Apply Online (Authentication)</a>
    <a href="https://aibe.digivarsity.online/WebApp/Forms/UserAuthentication.aspx" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-lg transition-all inline-block">Applicant Login</a>
    <a href="https://www.allindiabarexamination.com/img/PressReleasedated18.07.2026.pdf" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg transition-all inline-block">Official Press Release (PDF)</a>
    <a href="https://www.allindiabarexamination.com/" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-lg transition-all inline-block">AIBE Official Portal</a>
  </div>
</div>`
    }
  ];
}

export const AIBE_XXII_2026_ADMISSION: AdmissionRecord = {
  id: 'aibe-22nd-2026',
  slug: 'aibe-22nd-online-form-2026',
  university: 'Bar Council of India (BCI)',
  course: 'All India Bar Examination - XXII (AIBE-XXII) Online Form 2026 (Certificate of Practice for Advocates)',
  category: 'Law / Bar Council',
  education: ['Graduation', 'Post Graduation'],
  state: 'All India',
  applicationStartDate: '2026-08-19',
  applicationLastDate: '2026-10-27',
  status: 'Open',
  eligibility:
    'LL.B Degree (3-Year or 5-Year Integrated) from BCI-recognized college + Enrollment as Advocate with State Bar Council (or Final Year Undertaking candidate). No upper age limit.',
  officialLink: 'https://www.allindiabarexamination.com/',
  applyLink: 'https://aibe.digivarsity.online/WebApp/Forms/Authentication.aspx',
  officialNotification:
    'https://www.allindiabarexamination.com/img/PressReleasedated18.07.2026.pdf',
  feeDetails:
    '₹3,500 (General / OBC), ₹2,500 (SC / ST) + bank gateway charges. Payment last date: 28-Oct-2026.',
  description:
    'Bar Council of India (BCI) conducts All India Bar Examination - XXII (AIBE-XXII) on 29 November 2026 for advocates enrolled in State Bar Councils to grant the Certificate of Practice (COP). Online applications open till 27 October 2026.',
  entranceExamDate: '29 November 2026 (Sunday) (29-Nov-26)',
  meritListDate: 'Between 7 to 10 January 2027 (Result Window)',
  counsellingDate: 'Certificate of Practice (COP) Issuance post Result',
  faq: [
    {
      q: 'What is the last date to apply for AIBE 22nd (AIBE-XXII) 2026?',
      a: 'The online registration for AIBE-XXII closes on 27 October 2026 (27-Oct-26). Payment can be made till 28 October 2026.'
    },
    {
      q: 'When will the All India Bar Examination - XXII be conducted?',
      a: 'AIBE-XXII will be conducted on 29 November 2026 (Sunday) across 290+ centers in 60+ cities.'
    },
    {
      q: 'What is the date for release of AIBE-XXII admit card?',
      a: 'Admit cards will go live for candidates on 14 November 2026 (14-Nov-26) on www.allindiabarexamination.com.'
    },
    {
      q: 'Is there any upper age limit to appear in AIBE?',
      a: 'No. There is strictly NO upper age limit to appear for the All India Bar Examination.'
    },
    {
      q: 'Can final year law students appear in AIBE-XXII?',
      a: 'Yes. Final year / final semester law students awaiting results can apply under the "Undertaking Candidates" category as per official BCI norms.'
    },
    {
      q: 'What is the minimum passing score required in AIBE?',
      a: 'The standard passing mark is 45% (45 marks out of 100) for General/OBC candidates and 40% (40 marks out of 100) for SC/ST/PwD candidates. There is no negative marking.'
    },
    {
      q: 'Can candidates carry Bare Acts into the exam hall?',
      a: 'Yes. Candidates are permitted to bring Bare Acts without notes or commentary. Bare Acts with short internal comments are generally allowed if bare acts without notes are unavailable.'
    },
    {
      q: 'When will AIBE-XXII result be announced?',
      a: 'As per the official BCI press release, results are tentatively scheduled to be declared between 7 to 10 January 2027.'
    }
  ]
};

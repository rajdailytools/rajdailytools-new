import { ExamInfoSection } from '../types/exam';

export const HPSC_FSO_SECTIONS_PART2: ExamInfoSection[] = [
  {
    id: 26,
    title: '26. Acceptable Proof of Age & Date of Birth Documents (Advt Page 8 Note 4)',
    badge: 'Proof of Age',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>As per Page 8, Note 4 of Advt. No. 25/2026, the Commission accepts only one conclusive legal document for date of birth verification:</p>
        
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <p class="font-bold text-slate-900 text-xs">Sole Document Accepted:</p>
          <blockquote class="italic text-slate-800 text-xs leading-relaxed">
            "The date of birth recorded in the Matriculation or equivalent academic certificate by the concerned Board/University will only be accepted by the Commission for determining the age and no subsequent request for its change will be considered or granted."
          </blockquote>
          <p class="text-xs text-red-600 font-semibold mt-2">
            ⚠️ Note: Aadhaar Card, PAN Card, Birth Certificates issued later by Municipal bodies, or Voter IDs are NOT accepted as substitute proof of date of birth if differing from the Matriculation record.
          </p>
        </div>
      </div>
    `
  },
  {
    id: 27,
    title: '27. Nationality & Citizenship Criteria for HPSC Recruitment (Advt Page 8 Point 7)',
    badge: 'Citizenship',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>As specified in Page 8, Section 7 of the advertisement, a candidate must be either:</p>
        
        <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
          <li>A citizen of India; or</li>
          <li>A subject of Nepal; or</li>
          <li>A subject of Bhutan; or</li>
          <li>A Tibetan refugee who came over to India before 1st January, 1962 with the intention of permanently settling in India; or</li>
          <li>A person of Indian origin who has migrated from Pakistan, Burma, Sri Lanka, East African countries of Kenya, Uganda, the United Republic of Tanzania, Zambia, Malawi, Zaire, Ethiopia and Vietnam with the intention of permanently settling in India.</li>
        </ul>

        <p class="text-xs text-slate-600">Provided that a candidate belonging to categories (b), (c), (d) and (e) shall be a person in whose favour a certificate of eligibility has been issued by the Government of India.</p>
      </div>
    `
  },
  {
    id: 28,
    title: '28. Haryana Domicile & Resident Certificate Requirements for Reservation',
    badge: 'Domicile Policy',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Point 8 (Reservation) on Page 8 to 11 of the notification outlines fundamental principles governing reservation benefits:</p>
        
        <div class="overflow-x-auto my-3">
          <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
            <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th class="p-2.5">Candidate Category</th>
                <th class="p-2.5">Reservation & Fee Benefit Admissibility</th>
                <th class="p-2.5">Required Proof</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-800">
              <tr>
                <td class="p-2.5 font-bold text-slate-900">Bona Fide Residents of Haryana</td>
                <td class="p-2.5 text-emerald-800 font-semibold">Eligible for all vertical & horizontal reservation benefits + fee concession</td>
                <td class="p-2.5 text-slate-700">Haryana Resident Certificate (Domicile) + Category Certificate</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-slate-900">Candidates from Other States</td>
                <td class="p-2.5 text-red-700 font-semibold">Treated strictly as Unreserved / General candidates (Pay ₹1000 fee)</td>
                <td class="p-2.5 text-slate-700">National photo ID</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="p-3 bg-red-50 border border-red-200 rounded-xl text-red-900 text-xs leading-relaxed">
          <strong>Mandatory Directive for Female Candidates (Page 9 Note 2):</strong> "The women candidates seeking reservation under SC/BC-A/BC-B/EWS/ESM categories of Haryana are required to submit the caste/category certificate issued from the father's side only. Certificate issued from husband's side will not be accepted."
        </div>
      </div>
    `
  },
  {
    id: 29,
    title: '29. Scheduled Caste (DSC & OSC) Certificate Guidelines (Notification 13.11.2024)',
    badge: 'DSC & OSC Rules',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Following Haryana Government Notification No. 22/163/2024-5HR-II dated 13.11.2024, Scheduled Castes are sub-classified into DSC and OSC:</p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3">
          <div class="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl">
            <span class="font-bold text-blue-950 text-xs block">Deprived Scheduled Castes (DSC)</span>
            <p class="text-xs text-slate-600 mt-1 leading-relaxed">
              Candidates applying against the 05 posts reserved for DSC must upload a valid DSC certificate issued by the competent revenue authority strictly in terms of Notification dated 13.11.2024.
            </p>
          </div>
          <div class="p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-xl">
            <span class="font-bold text-indigo-950 text-xs block">Other Scheduled Castes (OSC)</span>
            <p class="text-xs text-slate-600 mt-1 leading-relaxed">
              Candidates applying against the 05 posts reserved for OSC must upload a valid OSC certificate issued by the competent authority strictly in terms of Notification dated 13.11.2024.
            </p>
          </div>
        </div>

        <p class="text-xs text-slate-600">Old generic SC certificates that do not clearly specify sub-classification into DSC or OSC must be updated as per the latest government format prior to application submission.</p>
      </div>
    `
  },
  {
    id: 30,
    title: '30. Backward Classes (BC-A & BC-B) Creamy Layer Exclusion Rules (FY 2026-27 Certificate)',
    badge: 'BC-A & BC-B Rules',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Page 9, Section 8(b) of Advt. No. 25/2026 details strict non-creamy layer criteria under Haryana Government Notification No. 40/13/2024-1SW dated 16.07.2024:</p>
        
        <div class="p-3.5 bg-purple-50/80 border border-purple-200 rounded-xl space-y-2">
          <h4 class="font-bold text-purple-950 text-xs">Mandatory Financial Year & Issue Window:</h4>
          <p class="text-xs text-slate-700 leading-relaxed">
            The candidates belonging to BC-A and BC-B categories are required to submit their Non-Creamy Layer Certificate issued for the <strong>Financial Year 2026-2027</strong>.
          </p>
          <div class="p-2.5 bg-white border border-purple-200 rounded-lg text-xs font-mono font-bold text-purple-900">
            Certificate Issue Date: Must be issued on or between 01.04.2026 and the closing date 19.10.2026
          </div>
          <p class="text-xs text-slate-600 leading-relaxed">
            The certificate must be based on the gross annual income of the preceding three financial years (i.e. 2023-24, 2024-25, and 2025-26) as per Govt. Notification dated 16.07.2024.
          </p>
          <p class="text-xs text-red-700 font-bold">
            ⚠️ Any BC-A or BC-B certificate issued prior to 01.04.2026 or not mentioning the non-creamy layer exclusion criteria shall be invalid.
          </p>
        </div>
      </div>
    `
  },
  {
    id: 31,
    title: '31. Economically Weaker Section (EWS) Certificate Validity & Guidelines',
    badge: 'EWS Guidelines',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Page 10, Section 8(c) prescribes conditions for the 05 posts reserved for Economically Weaker Sections (EWS):</p>
        
        <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
          <li><strong>Government Instruction:</strong> Issued strictly as per Haryana Government Instruction No. 22/12/2019-1GS-III dated 25.02.2019.</li>
          <li><strong>Financial Year of Validity:</strong> The EWS Income and Asset Certificate must be valid for the <strong>Year 2026-2027</strong>.</li>
          <li><strong>Issue Date:</strong> The certificate must be issued on or after <strong>01.04.2026</strong> and on or before the closing date <strong>19.10.2026</strong>.</li>
          <li><strong>Family Income Baseline:</strong> Must reflect gross annual family income based on Financial Year 2025-2026.</li>
          <li><strong>Non-Acceptance of Central Format:</strong> The certificate must be in the format prescribed by the State Government of Haryana for Haryana State Civil Posts/Services. Central Government EWS certificates are not accepted for state quota benefits.</li>
        </ul>
      </div>
    `
  },
  {
    id: 32,
    title: '32. Ex-Servicemen (ESM) & Dependents (DESM) Reservation Policy (Advt Page 10)',
    badge: 'ESM & DESM',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>As per Page 10, Section 8(d) and Haryana Government Notification No. 01/10/2021-2HR-III dated 25.05.2026, the ESM reservation operates on horizontal principles:</p>
        
        <div class="overflow-x-auto my-3">
          <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
            <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th class="p-2.5">Category</th>
                <th class="p-2.5">Priority & Eligibility Guidelines</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-800">
              <tr>
                <td class="p-2.5 font-bold text-slate-900">Ex-Servicemen (ESM)</td>
                <td class="p-2.5 text-slate-700">First priority in horizontal quota. Must upload Discharge Book, Pension Payment Order (PPO), and Haryana ESM Identity Card.</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-slate-900">Dependent of Ex-Servicemen (DESM)</td>
                <td class="p-2.5 text-slate-700">Considered only if qualified ESM candidates are not available. Must upload DESM certificate valid for FY 2026-27 issued by Zila Sainik Board, Haryana.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs leading-relaxed space-y-1">
          <p><strong>Once in Civil Service Rule:</strong> An Ex-Serviceman who has already availed the benefit of reservation on civil employment in Govt. of Haryana / Central Govt. cannot avail it again for another civil post (though age relaxation remains admissible).</p>
          <p><strong>Mandatory Undertakings:</strong> Candidates must submit undertakings in Annexure-A (for ESM) or declaration in Annexure-B (for DESM) as prescribed in the notification.</p>
        </div>
      </div>
    `
  },
  {
    id: 33,
    title: '33. Freedom Fighters Children & Grandchildren (DFF) 2% Horizontal Quota',
    badge: 'DFF Quota',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>In accordance with Haryana Government Notification No. 22/49/2021-1GS-III dated 27.10.2021 and 26.04.2022 (Page 11, Section 8(e)):</p>
        
        <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs text-slate-700">
          <p>The reservation to children and grandchildren of Freedom Fighters (DFF) of Haryana will be admissible horizontally to the extent of <strong>2%</strong> on total sanctioned posts:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>DFF quota operates only if suitable ESM / DESM candidates are not available to fulfill the horizontal reservation block.</li>
            <li>Candidates must submit a valid certificate issued by the concerned Deputy Commissioner / Chief Secretary Haryana confirming direct lineage (son, daughter, grandson, or granddaughter) with a recognized Freedom Fighter.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 34,
    title: '34. Persons with Benchmark Disabilities (PwBD) Provisions & Scribe Guidelines',
    badge: 'PwBD & Scribe',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Page 11, Section 8(f) and Pages 13–15 outline facilities for candidates with benchmark disabilities (minimum 40% permanent disability):</p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3">
          <div class="p-3.5 bg-teal-50/70 border border-teal-200 rounded-xl">
            <span class="font-bold text-teal-950 text-xs block">Compensatory Extra Time</span>
            <p class="text-xs text-slate-600 mt-1 leading-relaxed">
              Compensatory time of <strong>20 minutes per hour</strong> of examination will be provided to candidates with benchmark disabilities who are allowed scribe or have physical limitation to write.
            </p>
          </div>
          <div class="p-3.5 bg-teal-50/70 border border-teal-200 rounded-xl">
            <span class="font-bold text-teal-950 text-xs block">Facility of Scribe</span>
            <p class="text-xs text-slate-600 mt-1 leading-relaxed">
              Candidates requiring a scribe must submit an application to the Commission at least <strong>5 days prior</strong> to the examination with a medical certificate from the Chief Medical Officer (CMO). Scribe qualification cannot be higher than 10+2.
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 35,
    title: '35. No Objection Certificate (NOC) Requirements for Employed Candidates',
    badge: 'NOC Guidelines',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>As per Page 12, Point 10 of Advt. No. 25/2026, rules for candidates serving in Government, Semi-Government, or PSU organizations are as follows:</p>
        
        <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs text-slate-700">
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Haryana Government Employees without Bond:</strong> Can submit an online application with a self-declaration that they have informed their Head of Office/Department in writing.</li>
            <li><strong>Bond Holders / Contractual Undertakings:</strong> Persons bound by any bond or contractual obligation to serve another department must obtain a clear No Objection Certificate (NOC) from their Appointing Authority prior to interview.</li>
            <li><strong>Subsequent Employment:</strong> If an applicant joins Government service after submitting the online application, they must immediately inform the Commission and obtain an NOC before appearing for the interview / viva-voce.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 36,
    title: '36. Three-Stage Selection Process Architecture (Screening, SKT & Interview)',
    badge: 'Selection Stages',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Under HPSC recruitment regulations and Clause 15 of Advt. No. 25/2026, the selection methodology comprises up to three distinct assessment stages:</p>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-3">
          <div class="p-3.5 bg-blue-50/80 border border-blue-200 rounded-xl text-center">
            <span class="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mx-auto mb-1.5">1</span>
            <span class="font-bold text-blue-950 text-xs block">Stage 1: Screening Test</span>
            <p class="text-xs text-slate-600 mt-1 leading-relaxed">
              Objective MCQ-based test used to shortlist candidates when applications received are disproportionately large.
            </p>
          </div>
          <div class="p-3.5 bg-purple-50/80 border border-purple-200 rounded-xl text-center">
            <span class="w-7 h-7 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center mx-auto mb-1.5">2</span>
            <span class="font-bold text-purple-950 text-xs block">Stage 2: Subject Knowledge Test (SKT)</span>
            <p class="text-xs text-slate-600 mt-1 leading-relaxed">
              In-depth conventional/descriptive or specialized written test assessing core technical competency in Food Safety & Allied Sciences.
            </p>
          </div>
          <div class="p-3.5 bg-emerald-50/80 border border-emerald-200 rounded-xl text-center">
            <span class="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center mx-auto mb-1.5">3</span>
            <span class="font-bold text-emerald-950 text-xs block">Stage 3: Interview / Viva-Voce</span>
            <p class="text-xs text-slate-600 mt-1 leading-relaxed">
              Personal interview evaluating professional aptitude, practical acumen, personality, and knowledge of Food Safety Acts & Rules.
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 37,
    title: '37. Shortlisting Criteria in Case of Large Number of Applications (Advt Page 12 Point 15)',
    badge: 'Shortlisting Criteria',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Page 12, Point 15 of Advt. No. 25/2026 reserves complete authority to the Commission regarding shortlisting modalities:</p>
        
        <blockquote class="p-3.5 bg-slate-100 border-l-4 border-slate-700 rounded-r-xl text-xs text-slate-800 leading-relaxed">
          "Where the number of applications received in response to an advertisement is large and it will not be convenient or possible for the Commission to interview all candidates, the Commission may restrict the number of candidates for interview to a reasonable limit by adopting any of the shortlisting methods."
        </blockquote>

        <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs text-slate-700">
          <p class="font-bold text-slate-900">Official Shortlisting Modes Disclosed by HPSC:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>On the basis of percentage of marks obtained in essential educational qualification.</li>
            <li>On the basis of percentage of marks in minimum qualification with weightage to higher qualifications.</li>
            <li>On the basis of qualifications higher than the minimum prescribed in the advertisement.</li>
            <li>On the basis of experience in the relevant field higher than the minimum prescribed.</li>
            <li>By holding a <strong>Screening Test and/or Subject Knowledge Test</strong>.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 38,
    title: '38. Screening Test & Subject Knowledge Test Structure – Official Status',
    badge: 'Pattern Status',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <div class="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs">
          <strong>Official Notification Status:</strong> Advt. No. 25/2026 states that the syllabus, scheme of examination, marks distribution, and negative marking rules for the Screening Test and Subject Knowledge Test are <strong>"Not Released / To Be Updated"</strong>. The Commission will publish a dedicated announcement on <a href="https://hpsc.gov.in" target="_blank" rel="noopener noreferrer" class="underline font-bold">https://hpsc.gov.in</a> prior to conducting the exam.
        </div>
        
        <p class="text-xs text-slate-600 leading-relaxed">
          RajDailyTools does not invent unofficial syllabus or marking schemes. As soon as HPSC uploads the official exam pattern notification, this section will be updated with exact marks, question counts, duration, and topic weightages.
        </p>
      </div>
    `
  },
  {
    id: 39,
    title: '39. OMR Sheet Answering Regulations & Re-Checking Prohibition (Advt Page 13)',
    badge: 'OMR Regulations',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>In the event of an OMR-based Screening Test, candidates must strictly observe the answering regulations outlined on Page 13:</p>
        
        <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
          <li><strong>Darkening of Circles:</strong> Only Black / Blue Ball Point Pen must be used for darkening circles on the OMR Response Sheet.</li>
          <li><strong>Roll Number & Question Booklet Series:</strong> Incorrect or incomplete darkening of Roll Number, Question Booklet Series, or Subject Code results in automatic evaluation failure, and the machine will reject the sheet. No manual correction is permitted.</li>
          <li><strong>Fifth Option (Bubble 'E'):</strong> In recent HPSC examinations, if a question is not attempted, candidates are required to darken the 5th circle ('E') to indicate that they do not wish to attempt the question. Leaving all circles blank may attract negative marks as per Commission instructions.</li>
          <li><strong>Prohibition on Re-evaluation:</strong> The Commission does not entertain any request for re-checking, re-totalling, or re-evaluation of OMR answer sheets or answer scripts under any circumstances.</li>
        </ul>
      </div>
    `
  },
  {
    id: 40,
    title: '40. Interview / Viva-Voce Stage & Personality Assessment',
    badge: 'Interview',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Shortlisted candidates who qualify the written screening/knowledge test will be summoned for the Interview / Viva-Voce at the Commission's office in Panchkula:</p>
        
        <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs text-slate-700">
          <p class="font-bold text-slate-900">Key Interview Guidelines:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Candidates must produce all original documents, degrees, marksheets, and category certificates before the Scrutiny Committee prior to entering the Interview Board.</li>
            <li>The interview tests technical acumen in food science, knowledge of the Food Safety & Standards Act, practical problem-solving in market inspections, leadership, and public communication.</li>
            <li>No TA/DA is paid by the Commission for attending the interview, except to SC/ST candidates of Haryana as per state rules.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 41,
    title: '41. Merit List Formulation & Tie-Breaking Principles',
    badge: 'Merit List',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>The final merit list of selected candidates is formulated based strictly on merit in accordance with statutory recruitment rules:</p>
        
        <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
          <li><strong>Consolidated Merit:</strong> Final merit is determined from scores obtained in the competitive stages (Subject Knowledge Test and Interview) as prescribed by the Commission.</li>
          <li><strong>Reserved Candidates on General Standards:</strong> Candidates belonging to reserved categories (DSC, OSC, BC-A, BC-B, EWS) who qualify on their own merit without availing any age or fee concession shall be recommended against Unreserved vacancies.</li>
          <li><strong>Tie-Breaking Norms:</strong> In case two or more candidates obtain identical aggregate marks, tie-breaking criteria (e.g., marks in Subject Knowledge Test, followed by age seniority, followed by qualifying degree percentage) are applied as per HPSC guidelines.</li>
        </ul>
      </div>
    `
  },
  {
    id: 42,
    title: '42. Step-by-Step Online Application Workflow on hpsc.gov.in (13 Steps)',
    badge: 'Application Steps',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>The Commission mandates an end-to-end 13-stage online application workflow on the official portal <a href="https://hpsc.gov.in/en-us/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold">https://hpsc.gov.in</a>:</p>
        
        <div class="overflow-x-auto my-3">
          <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
            <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th class="p-2.5 text-center">Step</th>
                <th class="p-2.5">Action Item</th>
                <th class="p-2.5">Operational Details</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-800">
              <tr>
                <td class="p-2.5 text-center font-bold">1</td>
                <td class="p-2.5 font-bold text-slate-900">Portal Access</td>
                <td class="p-2.5 text-slate-600">Visit https://hpsc.gov.in and click on "Advertisement" / "Apply Online".</td>
              </tr>
              <tr>
                <td class="p-2.5 text-center font-bold">2</td>
                <td class="p-2.5 font-bold text-slate-900">Select Advertisement</td>
                <td class="p-2.5 text-slate-600">Select "Advt. No. 25/2026 - Food Safety Officer (Group-B) in FDA Dept".</td>
              </tr>
              <tr>
                <td class="p-2.5 text-center font-bold">3</td>
                <td class="p-2.5 font-bold text-slate-900">New Registration / URN</td>
                <td class="p-2.5 text-slate-600">Register with mobile number and email ID to generate unique Universal Registration Number (URN).</td>
              </tr>
              <tr>
                <td class="p-2.5 text-center font-bold">4</td>
                <td class="p-2.5 font-bold text-slate-900">Login to Dashboard</td>
                <td class="p-2.5 text-slate-600">Log in using URN credentials and OTP authentication.</td>
              </tr>
              <tr>
                <td class="p-2.5 text-center font-bold">5</td>
                <td class="p-2.5 font-bold text-slate-900">Fill Personal Details</td>
                <td class="p-2.5 text-slate-600">Enter Name, Father's Name, Mother's Name, Date of Birth exactly as in Matric certificate.</td>
              </tr>
              <tr>
                <td class="p-2.5 text-center font-bold">6</td>
                <td class="p-2.5 font-bold text-slate-900">Category & Domicile Details</td>
                <td class="p-2.5 text-slate-600">Select Haryana Resident status, Category (UR/DSC/OSC/BC-A/BC-B/EWS/ESM/PwBD), and certificate numbers.</td>
              </tr>
              <tr>
                <td class="p-2.5 text-center font-bold">7</td>
                <td class="p-2.5 font-bold text-slate-900">Educational Qualifications</td>
                <td class="p-2.5 text-slate-600">Enter degree stream (Food Tech/Agriculture/Dairy/Biotech/Medicine/etc.), University, marks, and passing dates.</td>
              </tr>
              <tr>
                <td class="p-2.5 text-center font-bold">8</td>
                <td class="p-2.5 font-bold text-slate-900">Language & Mandatory Checks</td>
                <td class="p-2.5 text-slate-600">Confirm Hindi/Sanskrit in Matric and declare no financial interest in food business.</td>
              </tr>
              <tr>
                <td class="p-2.5 text-center font-bold">9</td>
                <td class="p-2.5 font-bold text-slate-900">Upload Digital Documents</td>
                <td class="p-2.5 text-slate-600">Upload scanned photograph, signature, degrees, category certificates, and ID proof.</td>
              </tr>
              <tr>
                <td class="p-2.5 text-center font-bold">10</td>
                <td class="p-2.5 font-bold text-slate-900">Pay Application Fee</td>
                <td class="p-2.5 text-slate-600">Pay fee through Net Banking/Debit Card/Credit Card gateway up to 19.10.2026 (05:00 PM).</td>
              </tr>
              <tr>
                <td class="p-2.5 text-center font-bold">11</td>
                <td class="p-2.5 font-bold text-slate-900">Take Printout of Form</td>
                <td class="p-2.5 text-slate-600">Download and take a clear physical printout of the submitted application form.</td>
              </tr>
              <tr>
                <td class="p-2.5 text-center font-bold">12</td>
                <td class="p-2.5 font-bold text-slate-900">Sign the Printed Form</td>
                <td class="p-2.5 text-slate-600">Thoroughly verify all particulars and put original physical signature on the designated space.</td>
              </tr>
              <tr>
                <td class="p-2.5 text-center font-bold">13</td>
                <td class="p-2.5 font-bold text-slate-900">Upload Signed Form</td>
                <td class="p-2.5 text-slate-600">Re-login to the portal and upload the scanned copy of the <strong>signed application form</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    id: 43,
    title: '43. Mandatory Upload of Signed Application Form Printout – Critical Warning',
    badge: 'Critical Warning',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <div class="p-4 bg-red-100 border-2 border-red-500 rounded-xl text-red-950 space-y-2">
          <h4 class="font-black text-red-900 text-sm uppercase tracking-wider flex items-center gap-2">
            <span>⚠️</span>
            <span>Mandatory Legal Warning: Clause 13 & 14 (Advt Page 16)</span>
          </h4>
          <p class="text-xs sm:text-sm font-semibold leading-relaxed">
            The Commission has noted that many candidates fail to upload the signed application form, which leads to immediate rejection of candidature without any opportunity for rectification.
          </p>
          <blockquote class="italic text-xs bg-red-50 p-2.5 rounded-lg border border-red-300 text-red-900">
            "Application submitted without uploading the signed printout of the application form and uploaded documents shall be treated as incomplete and will be summarily rejected without any further correspondence."
          </blockquote>
          <p class="text-xs text-red-900 font-bold">
            Do not assume that paying the fee and pressing submit completes your application! You MUST print the generated form, sign every page where indicated, scan it, and upload it back onto the portal before 05:00 PM on 19.10.2026.
          </p>
        </div>
      </div>
    `
  },
  {
    id: 44,
    title: '44. Complete Document Upload Checklist with Prescribed Specifications',
    badge: 'Document Checklist',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Candidates must scan and keep the following documents ready for upload during online registration:</p>
        
        <div class="overflow-x-auto my-3">
          <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
            <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th class="p-2.5">Document Name</th>
                <th class="p-2.5">Prescribed Format / Content</th>
                <th class="p-2.5">Applicability</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-800">
              <tr>
                <td class="p-2.5 font-bold text-slate-900">Recent Passport Size Photograph</td>
                <td class="p-2.5 text-slate-600">Clear color photo against white/light background, showing frontal view</td>
                <td class="p-2.5 font-semibold text-blue-800">All Candidates</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-slate-900">Scanned Signature</td>
                <td class="p-2.5 text-slate-600">Clear signature on white paper with black/blue ink</td>
                <td class="p-2.5 font-semibold text-blue-800">All Candidates</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-slate-900">Matriculation Certificate</td>
                <td class="p-2.5 text-slate-600">Proof of Date of Birth and proof of Hindi/Sanskrit subject</td>
                <td class="p-2.5 font-semibold text-blue-800">All Candidates</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-slate-900">Degree Certificate & All Marksheets</td>
                <td class="p-2.5 text-slate-600">Bachelor's / Master's / Ph.D. degree in eligible discipline</td>
                <td class="p-2.5 font-semibold text-blue-800">All Candidates</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-slate-900">Haryana Resident Certificate (Domicile)</td>
                <td class="p-2.5 text-slate-600">Issued by competent Sub-Divisional Magistrate / Tehsildar</td>
                <td class="p-2.5 font-semibold text-emerald-800">Haryana Claimants</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-slate-900">DSC / OSC Caste Certificate</td>
                <td class="p-2.5 text-slate-600">Strictly as per Notification dated 13.11.2024 (father's side for females)</td>
                <td class="p-2.5 font-semibold text-purple-800">SC Candidates</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-slate-900">BC-A / BC-B Certificate (FY 2026-27)</td>
                <td class="p-2.5 text-slate-600">Non-Creamy Layer certificate issued between 01.04.2026 and 19.10.2026</td>
                <td class="p-2.5 font-semibold text-purple-800">BC Candidates</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-slate-900">EWS Certificate (FY 2026-27)</td>
                <td class="p-2.5 text-slate-600">Valid for year 2026-2027 issued on or after 01.04.2026</td>
                <td class="p-2.5 font-semibold text-amber-800">EWS Candidates</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-slate-900">Discharge Certificate / DESM Certificate</td>
                <td class="p-2.5 text-slate-600">Discharge book, PPO, and Annexure-A / Annexure-B</td>
                <td class="p-2.5 font-semibold text-slate-700">ESM / DESM</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-slate-900">PwBD Disability Certificate</td>
                <td class="p-2.5 text-slate-600">Medical Board certificate showing at least 40% disability (LV / D, HH)</td>
                <td class="p-2.5 font-semibold text-teal-800">PwBD Candidates</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-slate-900">Experience Certificate (Annexure-I)</td>
                <td class="p-2.5 text-slate-600">Issued by Appointing Authority on official format with salary proof</td>
                <td class="p-2.5 font-semibold text-slate-700">Contractual Seekers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    id: 45,
    title: '45. Guidelines for Annexure-I Experience Certificate (Govt & Private Bodies)',
    badge: 'Experience Certificate',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Page 17 & 18 (Clause 15) and Annexure-I of Advt. No. 25/2026 state rigorous compliance standards for experience claims:</p>
        
        <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
          <li><strong>Prescribed Format Only:</strong> The experience certificate must be on the official format given in Annexure-I. Plain letterhead certificates without mandatory disclosures will be rejected.</li>
          <li><strong>Mandatory Verification Documents:</strong> Candidates claiming experience from private or contractual bodies must attach supporting proof:
            <ul class="list-circle pl-5 mt-1 space-y-1 text-slate-600">
              <li>Bank statement showing regular salary credit through bank transfer.</li>
              <li>Employee Provident Fund (EPF) statement with Universal Account Number (UAN) / EPF Member ID.</li>
              <li>Employees' State Insurance (ESI) contribution history.</li>
              <li>Income Tax Form 26AS / AIS indicating TDS deduction from the employer.</li>
            </ul>
          </li>
          <li><strong>Equivalent Post Requirement:</strong> For age relaxation under contractual provisions, experience must be on an equivalent post under Haryana Government.</li>
        </ul>
      </div>
    `
  },
  {
    id: 46,
    title: '46. E-Admit Card Issuance, Hall Ticket Rules & Examination Centers',
    badge: 'Admit Card Status',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-900 text-xs">
          <strong>Official Status:</strong> e-Admit Cards are <strong>"Not Released / To Be Updated"</strong>. The Commission will announce the download date on the official website <a href="https://hpsc.gov.in" target="_blank" rel="noopener noreferrer" class="underline font-bold">https://hpsc.gov.in</a> prior to the exam.
        </div>
        
        <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs text-slate-700">
          <p class="font-bold text-slate-900">Hall Ticket & Examination Center Regulations:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>No Admit Card will be sent by post. Candidates must download their e-Admit Card from the HPSC portal using their registration credentials.</li>
            <li>Examination Centers will be allocated in Panchkula, Ambala, Yamunanagar, Kurukshetra, or other designated districts in Haryana. Requests for change of examination center are not entertained.</li>
            <li>Candidates must bring a printed copy of the e-Admit card along with a valid original Government photo ID (Aadhaar Card, Passport, Driving License, Voter Card).</li>
            <li>Biometric thumb impression, facial recognition, and iris capture may be conducted at the entry gate of the examination venue.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 47,
    title: '47. Answer Key, Objection Filing Mechanism & Evaluation Transparency',
    badge: 'Answer Key Status',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <div class="p-3 bg-purple-50 border border-purple-200 rounded-xl text-purple-900 text-xs">
          <strong>Official Status:</strong> Provisional and Final Answer Keys are <strong>"Not Released / To Be Updated"</strong>. They will be published on <a href="https://hpsc.gov.in" target="_blank" rel="noopener noreferrer" class="underline font-bold">https://hpsc.gov.in</a> following the conclusion of the written examination.
        </div>
        
        <p class="text-xs text-slate-700 leading-relaxed">
          The Commission will provide an online objection filing portal for a duration of 3 to 5 days after publishing the provisional key. Candidates can submit representations along with documentary proof from standard scientific textbooks and pay the prescribed fee per question. Expert committees will review all objections before releasing the final answer key.
        </p>
      </div>
    `
  },
  {
    id: 48,
    title: '48. Result Declaration, Document Scrutiny & Final Recommendation',
    badge: 'Result Status',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs">
          <strong>Official Status:</strong> Written examination results, shortlist for interview, and final merit list are <strong>"Not Released / To Be Updated"</strong>. All announcements will be published exclusively on <a href="https://hpsc.gov.in" target="_blank" rel="noopener noreferrer" class="underline font-bold">https://hpsc.gov.in</a>.
        </div>
        
        <p class="text-xs text-slate-700 leading-relaxed">
          Roll numbers of candidates shortlisted for document verification and interview will be displayed on the notice board and portal. The Commission recommends final candidates to the Additional Chief Secretary, Health & Family Welfare Department, Haryana for appointment as Food Safety Officer.
        </p>
      </div>
    `
  },
  {
    id: 49,
    title: '49. Expected Cut-Off Trends & Qualifying Standards for FSO (Group-B)',
    badge: 'Cut-Off Status',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs">
          <strong>Official Status:</strong> Official qualifying cut-offs are <strong>"Not Released / To Be Updated"</strong>. Cut-off scores will be determined by the Commission post-examination based on paper difficulty and candidate scores.
        </div>
        
        <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs text-slate-700">
          <p class="font-bold text-slate-900">Key Cut-Off Influencing Factors:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Total number of candidates appearing against the 45 sanctioned posts.</li>
            <li>Bifurcated competition across UR (22 posts), DSC (5), OSC (5), BC-A (5), BC-B (3), and EWS (5).</li>
            <li>Technical standard and depth of questions in Food Technology and Agricultural Sciences.</li>
            <li>Commission qualifying benchmark rules (e.g. minimum 50% for General and 45% for reserved in Subject Knowledge Test if stipulated).</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 50,
    title: '50. Facilitation Counter, Helpdesk Contacts & Official Examination Instructions',
    badge: 'Helpdesk & Contacts',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>In case of any guidance, information, or technical difficulty regarding online application, fee payment, or submission, candidates can contact the HPSC Facilitation Counter:</p>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-3">
          <div class="p-3.5 bg-blue-50 border border-blue-200 rounded-xl">
            <span class="text-[11px] font-bold text-blue-700 uppercase tracking-wider block">Toll-Free Helpline</span>
            <span class="text-base font-black text-blue-950 font-mono mt-1 block">1800-1800-431</span>
            <span class="text-xs text-slate-600 mt-0.5 block">For Technical Guidance</span>
          </div>
          <div class="p-3.5 bg-purple-50 border border-purple-200 rounded-xl">
            <span class="text-[11px] font-bold text-purple-700 uppercase tracking-wider block">Helpdesk Email</span>
            <span class="text-xs font-black text-purple-950 font-mono mt-1 block">SR1-hpsc@hry.gov.in</span>
            <span class="text-xs text-slate-600 mt-0.5 block">Official Support Email</span>
          </div>
          <div class="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl">
            <span class="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">Working Hours</span>
            <span class="text-base font-black text-emerald-950 mt-1 block">10:00 AM to 04:00 PM</span>
            <span class="text-xs text-slate-600 mt-0.5 block">On all working days</span>
          </div>
        </div>

        <div class="p-3.5 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-800 space-y-1">
          <p class="font-bold text-slate-900">Commission Postal & Physical Address:</p>
          <p>Haryana Public Service Commission (HPSC), Bays No. 1-10, Block-B, Sector-4, Panchkula, Haryana, PIN - 134112.</p>
          <p class="text-slate-600 font-medium pt-1">Official Commission Portal: <a href="https://hpsc.gov.in/en-us/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">https://hpsc.gov.in</a></p>
        </div>
      </div>
    `
  }
];

import { ExamRecord, ExamInfoSection } from '../types/exam';

export function generateBpsscCompanyCommander50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. Recruitment Overview',
      badge: 'Official Overview',
      content: `
        <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The <strong>Bihar Police Subordinate Services Commission (BPSSC), Patna</strong> has officially released <strong>Advertisement No. 11/2026 (विज्ञापन संख्या-11/2026)</strong> for the recruitment of <strong>65 Vacancies</strong> of <strong>Company Commander (गुल्म समादेशक)</strong> in the Bihar Home Guard Service Cadre (बिहार गृह रक्षा वाहिनी सेवा संवर्ग) under the Home Department (Special Branch), Government of Bihar.</p>
          <p>This prestigious Level-6 state service recruitment is open to eligible enrolled, trained Home Guards of Bihar (including daily duty allowance sports personnel) who have rendered at least 5 years of active duty in the organization.</p>
          
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Recruitment Parameter</th><th class="p-2.5 border border-slate-200">Official Specification (Advt. 11/2026)</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">Exam Conducting Body</td><td class="p-2.5">Bihar Police Subordinate Services Commission (BPSSC), 5 Harding Road, Patna – 800001</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Advertisement Number</td><td class="p-2.5 font-mono font-bold text-blue-700">11/2026 (विज्ञापन संख्या-11/2026)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Department &amp; Service Cadre</td><td class="p-2.5">Home Department (Special Branch), Bihar / Bihar Home Guard Service Cadre</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Post Name</td><td class="p-2.5 font-bold text-slate-900">Company Commander / Gulm Samadeshak (गुल्म समादेशक)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Total Vacancies</td><td class="p-2.5 font-bold text-emerald-700">65 Posts (Including 22 for Women &amp; 1 for Freedom Fighter Heir)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Pay Scale &amp; Matrix Level</td><td class="p-2.5 font-bold text-slate-900">Pay Matrix Level-6 (₹35,400 – ₹1,12,400)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Target Feeder Cadre</td><td class="p-2.5 font-medium text-slate-800">Trained Bihar Home Guards with minimum 5 years service &amp; 10 years remaining service</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Application Mode</td><td class="p-2.5 font-semibold text-emerald-700">100% Online via bpssc.bihar.gov.in / apply-bpssc.com</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Application Fee</td><td class="p-2.5 font-semibold">₹100/- (For All Categories / Genders)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Official Website</td><td class="p-2.5"><a href="https://bpssc.bihar.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline">bpssc.bihar.gov.in</a></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: '2. Latest Update',
      badge: 'Live Bulletin',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl">
            <span class="font-bold text-emerald-950 block text-sm">Official Advertisement 11/2026 Released</span>
            <p class="text-emerald-900 mt-1">BPSSC has officially commenced online applications for 65 posts of Company Commander in Bihar Home Guard on <strong>10 September 2026</strong>. The last date to submit online forms and fee is <strong>10 October 2026</strong>. Only enrolled Bihar Home Guards fulfilling the service criteria and graduation can apply.</p>
          </div>
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950">
            <strong>Key Selection Norm:</strong> Selection involves a two-stage written test (Prelims &amp; Mains), followed by Physical Efficiency Test (PET qualifying), medical screening, and character verification. Final merit is prepared strictly on Main Paper-II marks.
          </div>
        </div>
      `
    },
    {
      id: 3,
      title: '3. Important Dates',
      badge: 'Schedule',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates must strictly adhere to the official calendar notified in Advt. No. 11/2026:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Event / Timeline Stage</th><th class="p-2.5 border border-slate-200">Official Date</th><th class="p-2.5 border border-slate-200">Status</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">Advt. 11/2026 Publication Date</td><td class="p-2.5 font-medium">07 September 2026</td><td class="p-2.5 text-emerald-700 font-bold">Published</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Online Application &amp; Fee Payment Start</td><td class="p-2.5 font-bold text-blue-700">10 September 2026 (10-09-2026)</td><td class="p-2.5 text-emerald-700 font-bold">Live Now</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Online Application Closing Date</td><td class="p-2.5 font-bold text-red-600">10 October 2026 (10-10-2026)</td><td class="p-2.5 text-amber-700 font-semibold">Closing Date</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Cut-Off Date for Age, Service &amp; Education</td><td class="p-2.5 font-bold text-slate-900">01 August 2026 (01-08-2026)</td><td class="p-2.5 text-slate-700 font-semibold">Strict Cut-off</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Preliminary Written Exam Date</td><td class="p-2.5 text-slate-500">Not Released / To Be Updated</td><td class="p-2.5 text-slate-500 font-medium">Awaited</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Prelims Admit Card Release</td><td class="p-2.5 text-slate-500">Not Released / To Be Updated</td><td class="p-2.5 text-slate-500 font-medium">Before Exam</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Main Written Examination Date</td><td class="p-2.5 text-slate-500">Not Released / To Be Updated</td><td class="p-2.5 text-slate-500 font-medium">Post Prelims</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Physical Efficiency Test (PET) Dates</td><td class="p-2.5 text-slate-500">Not Released / To Be Updated</td><td class="p-2.5 text-slate-500 font-medium">Post Mains Result</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 4,
      title: '4. Vacancy Details',
      badge: 'Vacancies',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Bihar Government General Administration Department letter No. 23/Niyukti-01-73/2025-1064 dated 14.01.2026, requisition has been sanctioned for <strong>65 posts</strong> of Company Commander in Bihar Home Guard Service Cadre.</p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <p><strong>Post Title:</strong> Company Commander / Gulm Samadeshak (गुल्म समादेशक)</p>
            <p><strong>Cadre:</strong> Bihar Home Guard Service Cadre (बिहार गृह रक्षा वाहिनी सेवा संवर्ग)</p>
            <p><strong>Pay Matrix:</strong> Level-6 (₹35,400 to ₹1,12,400)</p>
            <p><strong>Appointment Authority:</strong> Deputy Commandant General (उप महासमादेष्टा), Bihar Home Guard, Patna</p>
          </div>
        </div>
      `
    },
    {
      id: 5,
      title: '5. Category-Wise Vacancy',
      badge: 'Breakup',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official category-wise vacancy distribution including 35% horizontal reservation for women and 2% horizontal reservation for grandchildren of freedom fighters (Clause 8 of Advt. 11/2026):</p>
          
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr>
                  <th class="p-2.5 border border-slate-200 text-center">Code</th>
                  <th class="p-2.5 border border-slate-200">Category Name</th>
                  <th class="p-2.5 border border-slate-200 text-center">Total Vacancies</th>
                  <th class="p-2.5 border border-slate-200 text-center">35% Women Res.</th>
                  <th class="p-2.5 border border-slate-200 text-center">2% Freedom Fighter Res.</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 text-center font-mono">01</td><td class="p-2.5 font-semibold">Unreserved / General (गैर आरक्षित वर्ग)</td><td class="p-2.5 text-center font-bold">27</td><td class="p-2.5 text-center font-bold text-pink-700">09</td><td class="p-2.5 text-center font-bold text-blue-700" rowspan="7" style="vertical-align: middle;">01 (Overall)</td></tr>
                <tr><td class="p-2.5 text-center font-mono">02</td><td class="p-2.5 font-semibold">Scheduled Caste - SC (अनुसूचित जाति)</td><td class="p-2.5 text-center font-bold">10</td><td class="p-2.5 text-center font-bold text-pink-700">04</td></tr>
                <tr><td class="p-2.5 text-center font-mono">03</td><td class="p-2.5 font-semibold">Scheduled Tribe - ST (अनुसूचित जनजाति)</td><td class="p-2.5 text-center font-bold">01</td><td class="p-2.5 text-center text-slate-400 font-bold">-</td></tr>
                <tr><td class="p-2.5 text-center font-mono">04</td><td class="p-2.5 font-semibold">Extremely Backward Class - EBC (अत्यंत पिछड़ा वर्ग)</td><td class="p-2.5 text-center font-bold">11</td><td class="p-2.5 text-center font-bold text-pink-700">04</td></tr>
                <tr><td class="p-2.5 text-center font-mono">05</td><td class="p-2.5 font-semibold">Backward Class - BC (पिछड़ा वर्ग)</td><td class="p-2.5 text-center font-bold">08</td><td class="p-2.5 text-center font-bold text-pink-700">03</td></tr>
                <tr><td class="p-2.5 text-center font-mono">06</td><td class="p-2.5 font-semibold">Economically Weaker Section - EWS (आर्थिक रूप से कमजोर वर्ग)</td><td class="p-2.5 text-center font-bold">06</td><td class="p-2.5 text-center font-bold text-pink-700">02</td></tr>
                <tr><td class="p-2.5 text-center font-mono">07</td><td class="p-2.5 font-semibold">Backward Class Women (पिछड़े वर्ग की महिला)</td><td class="p-2.5 text-center font-bold">02</td><td class="p-2.5 text-center text-slate-400 font-bold">-</td></tr>
                <tr class="bg-slate-100 font-bold">
                  <td class="p-2.5 text-center" colspan="2">कुल योग (Grand Total)</td>
                  <td class="p-2.5 text-center font-bold text-emerald-700 text-sm">65</td>
                  <td class="p-2.5 text-center font-bold text-pink-700 text-sm">22</td>
                  <td class="p-2.5 text-center font-bold text-blue-700 text-sm">01</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 6,
      title: '6. Post Name & Cadre',
      badge: 'Designation',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The post is officially designated as <strong>Company Commander / Gulm Samadeshak (गुल्म समादेशक)</strong>.</p>
          <p>The Company Commander commands a company in the Bihar Home Guard organization, supervising daily operations, law and order deployment, disaster response, and guard duties across various establishments and battalions in Bihar.</p>
        </div>
      `
    },
    {
      id: 7,
      title: '7. Application Start',
      badge: 'Portal Live',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Online registrations and fee payment commenced on <strong>10 September 2026</strong> through the dedicated BPSSC application portal: <strong><a href="https://apply-bpssc.com/bpssc_hg_commander_11_26/applicationIndex" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline">apply-bpssc.com</a></strong>.</p>
        </div>
      `
    },
    {
      id: 8,
      title: '8. Last Date',
      badge: 'Deadline',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The deadline to complete registration, online fee payment, and final application submission is <strong>10 October 2026</strong> (strict deadline).</p>
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 font-medium">
            <strong>Important Notice:</strong> Under Clause 18 of the notification, no extension of the last date will be granted under any circumstances. Postal or offline submissions will be summarily rejected.
          </div>
        </div>
      `
    },
    {
      id: 9,
      title: '9. Correction & Registration Cancellation',
      badge: 'Correction Policy',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Clause 16(क) and 16(घ) of the official notification:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Before fee payment, candidates can freely edit all registration details.</li>
            <li>Once fee is paid, registration details <strong>CANNOT</strong> be directly edited.</li>
            <li>If an applicant realizes errors after payment, they can use the <strong>"Cancel Registration Form"</strong> provision to cancel their registration.</li>
            <li>However, the previously paid fee of ₹100 will <strong>NOT</strong> be refunded. The candidate must register afresh and pay the fee again.</li>
          </ul>
        </div>
      `
    },
    {
      id: 10,
      title: '10. Exam Date',
      badge: 'Exam Timeline',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The exact date for the Preliminary Written Examination is currently <strong>Not Released / To Be Updated</strong>.</p>
          <p>BPSSC will notify the written examination schedule on its official portal (bpssc.bihar.gov.in) under the "Home Guard" tab and in leading newspapers.</p>
        </div>
      `
    },
    {
      id: 11,
      title: '11. Admit Card',
      badge: 'Hall Ticket',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Admit card release date is <strong>Not Released / To Be Updated</strong>.</p>
          <p>Online e-admit cards will be issued approximately 10 to 15 days before the written examination. Candidates will download admit cards using their Registration ID or registered mobile number and Date of Birth.</p>
        </div>
      `
    },
    {
      id: 12,
      title: '12. Result',
      badge: 'Result Status',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Result publication status is <strong>Not Released / To Be Updated</strong>.</p>
          <p>Results will be published in three distinct stages: (1) Preliminary Exam Result (20x vacancies), (2) Main Exam Result (6x vacancies for PET), and (3) Final Selection Merit List.</p>
        </div>
      `
    },
    {
      id: 13,
      title: '13. Age Limit',
      badge: 'Age Bounds',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 5.4 of the official notification:</p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <p><strong>Crucial Cut-Off Date for Age:</strong> 01 August 2026 (01-08-2026)</p>
            <p><strong>Minimum Age:</strong> 24 Years (Must have completed 24 years on 01.08.2026)</p>
            <p><strong>Maximum Age:</strong> 50 Years (Must not have exceeded 50 years on 01.08.2026)</p>
            <p class="text-xs text-slate-500">Applicable uniformly across all categories/communities for eligible Bihar Home Guard personnel as verified from Matriculation/10th certificate.</p>
          </div>
        </div>
      `
    },
    {
      id: 14,
      title: '14. Age Calculation & Crucial Date',
      badge: 'Calculation',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The crucial date for age calculation is <strong>01 August 2026</strong>. Candidates born between <strong>02 August 1976</strong> and <strong>01 August 2002</strong> (both dates inclusive) are eligible.</p>
          <p>The Date of Birth recorded in the Matriculation (Class 10th) or equivalent recognized board certificate will be accepted as conclusive proof.</p>
        </div>
      `
    },
    {
      id: 15,
      title: '15. Home Guard Service Requirement',
      badge: 'Feeder Criteria',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 5.2 of the notification, the following mandatory service conditions must be satisfied:</p>
          <div class="p-3.5 bg-blue-50 border border-blue-200 rounded-xl space-y-2 text-blue-950">
            <p><strong>1. Active Service Duration:</strong> Must be an enrolled and trained Home Guard personnel (Male, Female, or Third Gender, including daily duty allowance sports personnel) in Bihar Home Guard Organization who has completed at least <strong>5 years of active service/duty</strong> in the organization (कम से कम 5 वर्षों की सेवा/ड्यूटी).</p>
            <p><strong>2. Remaining Service Tenor:</strong> On the cut-off date of appointment consideration (<strong>01 August 2026</strong>), the candidate must have at least <strong>10 years of service remaining</strong> before retirement.</p>
            <p class="text-xs text-blue-800">A certificate issued by the competent Bihar Home Guard authority certifying 5 years of completed duty and 10 years remaining service must be produced at Document Verification.</p>
          </div>
        </div>
      `
    },
    {
      id: 16,
      title: '16. Eligibility Overview',
      badge: 'Eligibility Core',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>An eligible applicant must satisfy all four fundamental prerequisites:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-slate-900 block text-xs uppercase text-blue-700">Pillar 1: Nationality &amp; Domicile</span>
              <p class="mt-1 text-slate-700 font-medium">Citizen of India. Enrolled member of Bihar Home Guard organization.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-slate-900 block text-xs uppercase text-blue-700">Pillar 2: Home Guard Service</span>
              <p class="mt-1 text-slate-700 font-medium">Minimum 5 years completed duty in Bihar Home Guard + At least 10 years service remaining as on 01.08.2026.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-slate-900 block text-xs uppercase text-blue-700">Pillar 3: Academic Degree</span>
              <p class="mt-1 text-slate-700 font-medium">Graduation Degree (Bachelor's) or equivalent recognized by State Government passed on or before 01.08.2026.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-slate-900 block text-xs uppercase text-blue-700">Pillar 4: Physical Standards</span>
              <p class="mt-1 text-slate-700 font-medium">Prescribed height, chest (for males), and weight (for females) as per BPSSC rules.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 17,
      title: '17. Educational Qualification',
      badge: 'Graduation',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 5.3 of Advt. 11/2026:</p>
          <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
            <span class="font-bold text-emerald-950 block">Mandatory Academic Qualification:</span>
            <p class="text-emerald-900 mt-1 font-semibold">Must have passed <strong>Graduation (स्नातक परीक्षा)</strong> from a recognized university or an equivalent examination recognized by the State Government on or before the cut-off date: <strong>01 August 2026 (01-08-2026)</strong>.</p>
          </div>
          <p>Candidates awaiting graduation results after 01.08.2026 are not eligible to apply.</p>
        </div>
      `
    },
    {
      id: 18,
      title: '18. Physical Standards (PST)',
      badge: 'Measurement Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 5.5 of the official notification, no marks are awarded for physical measurements, but failure to meet minimum standards results in immediate disqualification:</p>
          
          <h4 class="font-bold text-slate-900 mt-2">1. Height Standards (ऊँचाई):</h4>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Category &amp; Gender</th><th class="p-2.5 border border-slate-200 text-center">Minimum Height Requirement</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">Unreserved (General) &amp; Backward Class (BC) Male</td><td class="p-2.5 text-center font-bold">165 cm (न्यूनतम 165 सेन्टीमीटर)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Extremely Backward Class (EBC), SC &amp; ST Male</td><td class="p-2.5 text-center font-bold">160 cm (न्यूनतम 160 सेन्टीमीटर)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Females of All Categories</td><td class="p-2.5 text-center font-bold text-pink-700">155 cm (न्यूनतम 155 सेन्टीमीटर)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Third Gender / Transgender Candidates</td><td class="p-2.5 text-center font-bold">Same as Backward Class (BC)</td></tr>
              </tbody>
            </table>
          </div>

          <h4 class="font-bold text-slate-900 mt-4">2. Chest Standards (सीना - Males Only):</h4>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Category</th><th class="p-2.5 border border-slate-200 text-center">Unexpanded (बिना फुलाए)</th><th class="p-2.5 border border-slate-200 text-center">Expanded (फुलाकर)</th><th class="p-2.5 border border-slate-200 text-center">Min. Expansion</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">General, BC &amp; EBC Males</td><td class="p-2.5 text-center font-bold">81 cm</td><td class="p-2.5 text-center font-bold">86 cm</td><td class="p-2.5 text-center font-bold text-blue-700">5 cm</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">SC &amp; ST Males</td><td class="p-2.5 text-center font-bold">79 cm</td><td class="p-2.5 text-center font-bold">84 cm</td><td class="p-2.5 text-center font-bold text-blue-700">5 cm</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Females (All Categories)</td><td class="p-2.5 text-center text-slate-400" colspan="3">Not Applicable (No chest measurement)</td></tr>
              </tbody>
            </table>
          </div>

          <h4 class="font-bold text-slate-900 mt-4">3. Weight Standard (वजन - Females Only):</h4>
          <p>For all female candidates across every category, the minimum body weight must be <strong>48 kg</strong> (Clause 5.5(ग)).</p>
        </div>
      `
    },
    {
      id: 19,
      title: '19. Physical Efficiency Test (PET)',
      badge: 'Endurance Events',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates qualifying the Main Written Exam (approximately 6 times the category-wise vacancies) must clear the Physical Efficiency Test (PET). PET is strictly qualifying in nature; marks are not awarded for merit (Clause 6(ब)):</p>
          
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">PET Event</th><th class="p-2.5 border border-slate-200 text-center">Male Candidates (All Categories)</th><th class="p-2.5 border border-slate-200 text-center">Female Candidates (All Categories)</th><th class="p-2.5 border border-slate-200 text-center">Allowed Attempts</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50">1. Running (दौड़)</td>
                  <td class="p-2.5 text-center font-bold">1 Mile (1.6 km) in 6 Mins 30 Secs</td>
                  <td class="p-2.5 text-center font-bold text-pink-700">1 km in 6 Minutes</td>
                  <td class="p-2.5 text-center text-slate-600 font-medium">Only 1 Attempt</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50">2. High Jump (ऊँची कूद)</td>
                  <td class="p-2.5 text-center font-bold">Minimum 4 Feet (4 फीट)</td>
                  <td class="p-2.5 text-center font-bold text-pink-700">Minimum 3 Feet (3 फीट)</td>
                  <td class="p-2.5 text-center font-semibold text-blue-700">Maximum 3 Attempts</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50">3. Long Jump (लंबी कूद)</td>
                  <td class="p-2.5 text-center font-bold">Minimum 12 Feet (12 फीट)</td>
                  <td class="p-2.5 text-center font-bold text-pink-700">Minimum 9 Feet (9 फीट)</td>
                  <td class="p-2.5 text-center font-semibold text-blue-700">Maximum 3 Attempts</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50">4. Shot Put (गोला फेंक)</td>
                  <td class="p-2.5 text-center font-bold">16 Pound Shot Put: Min 16 Feet</td>
                  <td class="p-2.5 text-center font-bold text-pink-700">12 Pound Shot Put: Min 10 Feet</td>
                  <td class="p-2.5 text-center font-semibold text-blue-700">Maximum 3 Attempts</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-red-600 font-semibold">Note: Candidates failing in running will not be allowed to participate in high jump, long jump, or shot put.</p>
        </div>
      `
    },
    {
      id: 20,
      title: '20. Application Fee & Payment',
      badge: 'Fee Chart',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 14 &amp; 15 of Advt. 11/2026, the application fee is uniform for all candidates:</p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <p><strong>Application Fee:</strong> <strong>₹100/- (Rupees One Hundred Only)</strong> for All Categories (General, EWS, OBC, EBC, SC, ST, Female, and Third Gender candidates).</p>
            <p><strong>Payment Methods:</strong> Net Banking, Credit Card, Debit Card, or UPI transactions only.</p>
            <p class="text-xs text-slate-500">Bank processing charges, if applicable, are to be borne by the applicant. In case of failed payment where amount is debited but registration fails, the refund is processed within 7 working days by the payment gateway.</p>
          </div>
        </div>
      `
    },
    {
      id: 21,
      title: '21. Selection Process Overview',
      badge: '5-Stage Funnel',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The recruitment is executed through a strict multi-tier competitive evaluation:</p>
          <div class="space-y-2">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">1</span>
              <div>
                <strong class="text-slate-900">Stage 1: Preliminary Written Exam (OMR):</strong>
                <p class="text-xs text-slate-600">100 MCQs, 200 marks, 2 hours. Screening test for GK &amp; Current Affairs. 20x candidates shortlisted for Mains.</p>
              </div>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">2</span>
              <div>
                <strong class="text-slate-900">Stage 2: Main Written Exam (Two Papers):</strong>
                <p class="text-xs text-slate-600">Paper-1: General Hindi (200 marks, qualifying min. 30%). Paper-2: General Studies, Science, History, Geo, Maths &amp; Reasoning (200 marks - decides merit). 6x candidates shortlisted for PET.</p>
              </div>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">3</span>
              <div>
                <strong class="text-slate-900">Stage 3: Physical Efficiency &amp; Measurement Test (PET / PST):</strong>
                <p class="text-xs text-slate-600">Qualifying only. Running (1.6 km/1 km), High Jump, Long Jump, Shot Put, and physical measurements (height/chest/weight).</p>
              </div>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">4</span>
              <div>
                <strong class="text-slate-900">Stage 4: Document Verification (DV):</strong>
                <p class="text-xs text-slate-600">Verification of Home Guard 5-year duty certificate, 10-year remaining service, Graduation certificate, caste, and domicile.</p>
              </div>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">5</span>
              <div>
                <strong class="text-slate-900">Stage 5: Medical Test &amp; Character Verification:</strong>
                <p class="text-xs text-slate-600">Conducted by appointing authority prior to final joining and appointment.</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 22,
      title: '22. Preliminary Written Examination',
      badge: 'Stage 1 Exam',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 6(अ)(ii) of the official notification:</p>
          <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <p><strong>Total Questions:</strong> 100 Objective Multiple Choice Questions (MCQs)</p>
            <p><strong>Total Marks:</strong> 200 Marks (2 marks per question)</p>
            <p><strong>Duration:</strong> 2 Hours (120 Minutes)</p>
            <p><strong>Syllabus Scope:</strong> General Knowledge and Current Affairs (सामान्य ज्ञान एवं समसामयिक मुद्दों से संबंधित प्रश्न)</p>
            <p><strong>Minimum Qualifying Marks:</strong> 30% (60 marks out of 200). Candidates scoring less than 30% are disqualified.</p>
            <p><strong>Shortlisting Multiplier:</strong> 20 times the category-wise vacancies (20 गुना अभ्यर्थी) will be qualified for the Main Examination.</p>
          </div>
        </div>
      `
    },
    {
      id: 23,
      title: '23. Main Written Examination',
      badge: 'Stage 2 Exam',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates qualifying Prelims will appear in the Main Written Examination comprising <strong>two distinct papers</strong> (Clause 6(अ)(iii)):</p>
          
          <div class="space-y-3">
            <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <strong class="text-blue-950 block font-bold">Paper-1: General Hindi (सामान्य हिन्दी)</strong>
              <p class="text-blue-900 mt-1">100 Questions, 200 Marks, 2 Hours duration. <strong>Qualifying nature only</strong>. Candidates must obtain at least 30% marks (60 marks), otherwise they are disqualified. Marks of General Hindi will <strong>NOT</strong> be added to merit determination.</p>
            </div>
            
            <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
              <strong class="text-emerald-950 block font-bold">Paper-2: General Studies &amp; Aptitude (सामान्य अध्ययन एवं मानसिक योग्यता)</strong>
              <p class="text-emerald-900 mt-1">100 Questions, 200 Marks, 2 Hours duration. Covers General Studies, General Science, Civics, Indian History, Indian Geography, Mathematics, and Mental Ability Test. <strong>This paper determines the final merit ranking</strong>.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 24,
      title: '24. Exam Pattern Table',
      badge: 'Exam Matrix',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Examination Stage &amp; Paper</th><th class="p-2.5 border border-slate-200">Subject Coverage</th><th class="p-2.5 border border-slate-200 text-center">Questions</th><th class="p-2.5 border border-slate-200 text-center">Marks</th><th class="p-2.5 border border-slate-200 text-center">Duration</th><th class="p-2.5 border border-slate-200">Merit Status</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr>
                  <td class="p-2.5 font-bold text-blue-700">Stage 1: Preliminary Exam</td>
                  <td class="p-2.5">General Knowledge &amp; Current Affairs</td>
                  <td class="p-2.5 text-center font-bold">100</td>
                  <td class="p-2.5 text-center font-bold">200</td>
                  <td class="p-2.5 text-center">2 Hours</td>
                  <td class="p-2.5 text-xs text-slate-600">Screening (20x for Mains)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Stage 2: Main Paper-I</td>
                  <td class="p-2.5">General Hindi (सामान्य हिन्दी)</td>
                  <td class="p-2.5 text-center font-bold">100</td>
                  <td class="p-2.5 text-center font-bold">200</td>
                  <td class="p-2.5 text-center">2 Hours</td>
                  <td class="p-2.5 text-xs text-amber-700 font-bold">Qualifying (Min. 30%, No Merit)</td>
                </tr>
                <tr class="bg-emerald-50">
                  <td class="p-2.5 font-bold text-emerald-800">Stage 2: Main Paper-II</td>
                  <td class="p-2.5 font-medium">General Studies, Science, Civics, History, Geography, Maths &amp; Mental Ability</td>
                  <td class="p-2.5 text-center font-bold text-emerald-900">100</td>
                  <td class="p-2.5 text-center font-bold text-emerald-900">200</td>
                  <td class="p-2.5 text-center font-bold text-emerald-900">2 Hours</td>
                  <td class="p-2.5 text-xs text-emerald-800 font-extrabold">Decides Final Merit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 25,
      title: '25. Negative Marking Rules',
      badge: 'Deduction Rule',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 6(अ)(iv) of Advt. 11/2026:</p>
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 font-medium">
            <strong>Negative Marking Rule:</strong> For every incorrect answer in both Preliminary and Main Examinations, <strong>0.2 marks</strong> will be deducted from the candidate's total score (प्रत्येक गलत उत्तर के लिए 0.2 अंक काटा जाएगा).
          </div>
          <p class="text-xs text-slate-500">The OMR answer sheet will be in duplicate (two copies), of which one copy is retained securely by the Commission.</p>
        </div>
      `
    },
    {
      id: 26,
      title: '26. Complete Syllabus',
      badge: 'Curriculum',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The written examination tests candidates across three major syllabus domains:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Prelims:</strong> General Knowledge (National &amp; International Affairs, Scientific Observations, History, Geography, Constitution, Everyday Events).</li>
            <li><strong>Main Paper-I:</strong> General Hindi (Grammar, Vocabulary, Sentence Formation, Comprehension, Synonyms/Antonyms, Idioms).</li>
            <li><strong>Main Paper-II:</strong> General Studies, General Science, Civics, Indian History, Indian Geography, Mathematics, and Mental Ability / Reasoning.</li>
          </ul>
        </div>
      `
    },
    {
      id: 27,
      title: '27. Prelims Syllabus Details',
      badge: 'GK & Current Affairs',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>General Knowledge &amp; Current Affairs (100 Questions / 200 Marks):</strong></p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <p>• Major national and international events and developments.</p>
            <p>• Indian Constitution, Governance, and Political System.</p>
            <p>• Indian History with special focus on National Movement and Bihar's role.</p>
            <p>• Geography of India, agricultural systems, rivers, and natural resources.</p>
            <p>• Everyday science, health, nutrition, and environmental awareness.</p>
            <p>• Sports, awards, books, authors, and international organizations.</p>
          </div>
        </div>
      `
    },
    {
      id: 28,
      title: '28. Main Paper-I Hindi Syllabus',
      badge: 'General Hindi',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>General Hindi (100 Questions / 200 Marks / Qualifying 30%):</strong></p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <p>• शब्द रचना, वाक्य रचना, अर्थ एवं शब्द भेद</p>
            <p>• संधि एवं संधि विच्छेद, समास, उपसर्ग एवं प्रत्यय</p>
            <p>• तत्सम, तद्भव, देशज एवं विदेशी शब्द</p>
            <p>• पर्यायवाची (समानार्थी) एवं विलोम (विपरीतार्थक) शब्द</p>
            <p>• अनेक शब्दों के लिए एक शब्द, समरूपी भिन्नार्थक शब्द</p>
            <p>• मुहावरे एवं लोकोक्तियां / कहावतें</p>
            <p>• वर्तनी शुद्धि एवं वाक्य शुद्धि</p>
            <p>• अपठित गद्यांश एवं बोध प्रश्न</p>
          </div>
        </div>
      `
    },
    {
      id: 29,
      title: '29. Main Paper-II General Studies Syllabus',
      badge: 'Paper 2 GS',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>General Studies, Science, History, Civics &amp; Geography (Paper-II):</strong></p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <p>• <strong>General Science:</strong> Physics, Chemistry, Biology concepts of matric/intermediate standard.</p>
            <p>• <strong>Civics &amp; Polity:</strong> Preamble, Fundamental Rights &amp; Duties, Panchayati Raj, Judiciary, and Administrative Structure of Bihar.</p>
            <p>• <strong>Indian History:</strong> Ancient, Medieval, Modern India, Freedom Struggle, and Social Reform Movements.</p>
            <p>• <strong>Indian Geography:</strong> Physical geography, climate, soil, mineral resources, population demographics, and economic geography.</p>
          </div>
        </div>
      `
    },
    {
      id: 30,
      title: '30. Main Paper-II Maths & Reasoning Syllabus',
      badge: 'Paper 2 Maths & Aptitude',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>Mathematics &amp; Mental Ability Test (Paper-II):</strong></p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <p>• <strong>Mathematics:</strong> Number Systems, Percentages, Ratio and Proportion, Averages, Profit and Loss, Simple &amp; Compound Interest, Time and Work, Time and Distance, Mensuration.</p>
            <p>• <strong>Mental Ability:</strong> Analogies, Similarities and Differences, Spatial Visualization, Problem Solving, Analysis, Judgment, Decision Making, Visual Memory, Coding-Decoding, Number &amp; Alphabet Series, Blood Relations, Direction Sense.</p>
          </div>
        </div>
      `
    },
    {
      id: 31,
      title: '31. Main Exam Qualifying Percentage for Merit',
      badge: 'Minimum Cut-Off',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 7(iii) of the notification, to be considered for the final merit list, candidates must score at least the statutory minimum qualifying percentage in Main Paper-II:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Category</th><th class="p-2.5 border border-slate-200 text-center">Minimum Qualifying %</th><th class="p-2.5 border border-slate-200 text-center">Min. Marks (out of 200)</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">General / Unreserved (UR)</td><td class="p-2.5 text-center font-bold">40.0%</td><td class="p-2.5 text-center font-bold">80.0 Marks</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Backward Class (BC)</td><td class="p-2.5 text-center font-bold">36.5%</td><td class="p-2.5 text-center font-bold">73.0 Marks</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Extremely Backward Class (EBC)</td><td class="p-2.5 text-center font-bold">34.0%</td><td class="p-2.5 text-center font-bold">68.0 Marks</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">SC, ST &amp; All Women Candidates</td><td class="p-2.5 text-center font-bold text-pink-700">32.0%</td><td class="p-2.5 text-center font-bold text-pink-700">64.0 Marks</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 32,
      title: '32. Normalization Method',
      badge: 'Multi-Shift Scoring',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 6(अ)(ii), if the examination is conducted in more than one shift or on multiple dates due to high applicant volume, marks will be normalized using the <strong>Equi-Percentile Method (इक्वि-पर्सेंटाइल पद्धति)</strong>.</p>
        </div>
      `
    },
    {
      id: 33,
      title: '33. Women Reservation (35% Horizontal)',
      badge: '35% Women Quota',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 8(ii) of Advt. 11/2026, <strong>35% horizontal reservation</strong> is provided across all vertical categories exclusively for women having <strong>permanent domicile of Bihar State</strong>:</p>
          <p>A total of <strong>22 vacancies</strong> are reserved for Bihar women (9 General, 4 SC, 4 EBC, 3 BC, 2 EWS). If suitable women are not available, posts are filled as per statutory rules.</p>
        </div>
      `
    },
    {
      id: 34,
      title: '34. Other-State Candidate Rules',
      badge: 'Domicile Policy',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 9(vi), any reservation benefits (including women 35% horizontal reservation) are restricted exclusively to permanent residents of Bihar.</p>
          <p>Candidates from other states are treated as <strong>Unreserved (General)</strong> category candidates and must declare themselves as Unreserved in the online form.</p>
        </div>
      `
    },
    {
      id: 35,
      title: '35. Third Gender / Transgender Norms',
      badge: 'Transgender Rules',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 5.5(घ) and 9(v), Third Gender candidates are entitled to reservation and physical standards applicable to the <strong>Backward Class (BC)</strong> category in Bihar.</p>
          <p>Certificate issued by the District Magistrate under the Transgender Persons (Protection of Rights) Rules, 2020 must be produced.</p>
        </div>
      `
    },
    {
      id: 36,
      title: '36. How to Apply Online',
      badge: 'Step-by-Step',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <ol class="list-decimal pl-5 space-y-2">
            <li>Visit the official BPSSC portal: <strong><a href="https://bpssc.bihar.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold">bpssc.bihar.gov.in</a></strong> and click on the <strong>"Home Guard"</strong> tab.</li>
            <li>Click on the online application link for <strong>Advt. No. 11/2026</strong> (Company Commander).</li>
            <li><strong>Part-1 (Registration &amp; Fee):</strong> Enter Name, Nationality, Mobile Number, Email ID, Bihar Domicile, Category, Gender, DOB, and Home Guard service details.</li>
            <li>Pay ₹100 application fee online via Net Banking, Debit/Credit Card, or UPI.</li>
            <li>Note down the <strong>Registration ID and Password</strong> received via SMS and email.</li>
            <li><strong>Part-2 (Application Form):</strong> Log in with Registration ID and Password. Fill in Father's/Mother's name, Address, and Graduation passing details.</li>
            <li>Upload scanned color photograph (15–25 KB, white background) and Hindi/English signatures (15–25 KB, white background).</li>
            <li>Review all details, submit the form, and print the final <strong>A4 Acknowledgement slip</strong> for future reference.</li>
          </ol>
        </div>
      `
    },
    {
      id: 37,
      title: '37. Photo & Signature Specifications',
      badge: 'Upload Guidelines',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 16(ख), candidates must strictly follow these scanning guidelines:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Document</th><th class="p-2.5 border border-slate-200">File Size</th><th class="p-2.5 border border-slate-200">Format</th><th class="p-2.5 border border-slate-200">Specific Requirements</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">Passport Photograph</td><td class="p-2.5 font-bold text-blue-700">15 KB to 25 KB</td><td class="p-2.5 font-mono">.jpg / .jpeg / .gif</td><td class="p-2.5">Colored, taken within last 2 months, clean white background</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Hindi Signature</td><td class="p-2.5 font-bold text-blue-700">15 KB to 25 KB</td><td class="p-2.5 font-mono">.jpg / .jpeg / .gif</td><td class="p-2.5">Black or blue ink on white paper, clearly scanned</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">English Signature</td><td class="p-2.5 font-bold text-blue-700">15 KB to 25 KB</td><td class="p-2.5 font-mono">.jpg / .jpeg / .gif</td><td class="p-2.5">Black or blue ink on white paper, clearly scanned</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 38,
      title: '38. Documents Required for Verification',
      badge: 'Document Checklist',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Originals and two sets of self-attested photocopies of the following documents are mandatory during Document Verification:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Printed BPSSC Application Form Acknowledgement Slip &amp; Admit Card</li>
            <li>Matriculation (10th) Certificate &amp; Marksheet (as proof of Date of Birth)</li>
            <li>Graduation Degree / Provisional Certificate &amp; Marksheets (cleared by 01.08.2026)</li>
            <li><strong>Bihar Home Guard Service &amp; Training Certificate:</strong> Proving minimum 5 years duty and at least 10 years remaining service issued by competent authority</li>
            <li>Permanent Residential / Domicile Certificate of Bihar</li>
            <li>Caste Certificate (SC/ST) / Non-Creamy Layer Certificate (BC/EBC) based on father's name</li>
            <li>EWS Certificate for FY 2025-26 (valid for 2026-27)</li>
            <li>Valid Photo Identity Proof (Aadhaar Card, Voter Card, PAN Card, Driving License)</li>
          </ul>
        </div>
      `
    },
    {
      id: 39,
      title: '39. Application Rejection Grounds',
      badge: 'Disqualification',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 19, candidatures may be cancelled without prior notice on grounds including:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
            <li>Submitting Part-1 (Registration) but failing to submit Part-2 of the form.</li>
            <li>Uploading blurry, unrecognizable photos/signatures, or failing to upload them.</li>
            <li>Requesting chargeback of application fee from the bank.</li>
            <li>Failure to produce valid 5-year Home Guard service proof or possessing less than 10 years service left.</li>
            <li>Incorrect DOB, Gender, or fraudulent reservation claim.</li>
          </ul>
        </div>
      `
    },
    {
      id: 40,
      title: '40. Married Women Caste Certificate Rule',
      badge: 'Father-Name Rule',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-red-50 border border-red-200 rounded-xl text-red-950 font-medium">
            <strong>Mandatory Rule (Clause 14(xii)(क)):</strong> For married women claiming reservation, caste certificates and Non-Creamy Layer (NCL) certificates must be issued on the basis of their <strong>Father's name and permanent address</strong>, NOT their husband's name. Certificates based on husband's credentials will result in rejection of reservation benefit.
          </div>
        </div>
      `
    },
    {
      id: 41,
      title: '41. Examination Centre Guidelines',
      badge: 'Exam Centres',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Written exams will be conducted at designated centres across Bihar, predominantly in <strong>Patna</strong> and divisional headquarters.</p>
          <p>The allotted examination venue, reporting time, and shift details will be specified on the e-Admit Card. Requests for change of examination centre will not be considered under any circumstances.</p>
        </div>
      `
    },
    {
      id: 42,
      title: '42. Pregnant Women Candidates Policy',
      badge: 'Medical Advisory',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 21 of Advt. 11/2026, married female candidates found pregnant during medical screening at the time of PET will not be permitted to participate in running or physical efficiency tests on medical grounds, and will be declared disqualified. A mandatory declaration must be submitted by married female candidates.</p>
        </div>
      `
    },
    {
      id: 43,
      title: '43. Final Merit List Determination',
      badge: 'Merit Criteria',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 7, final selection is based strictly on marks obtained in <strong>Main Written Examination Paper-II (out of 200 Marks)</strong>:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Tie-Breaking Rule 1:</strong> Candidate senior in age (older Date of Birth) gets higher merit rank.</li>
            <li><strong>Tie-Breaking Rule 2:</strong> In case of identical DOB, candidate with higher educational qualification is ranked higher.</li>
            <li><strong>Tie-Breaking Rule 3:</strong> If qualifications are also identical, alphabetical order of candidate's name as in Class 10th certificate determines precedence.</li>
          </ul>
        </div>
      `
    },
    {
      id: 44,
      title: '44. Medical & Character Verification',
      badge: 'Pre-Joining',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Prior to appointment, all provisionally recommended candidates must undergo medical examination and character &amp; antecedent verification conducted by the appointing authority: <strong>Deputy Commandant General, Bihar Home Guard, Patna</strong>.</p>
        </div>
      `
    },
    {
      id: 45,
      title: '45. Important Links',
      badge: 'Official Links',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Authentic official portals and direct notification links as issued by BPSSC:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Portal / Resource</th><th class="p-2.5 border border-slate-200">Details</th><th class="p-2.5 border border-slate-200 text-center">Action</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr>
                  <td class="p-2.5 font-bold text-slate-900 bg-slate-50">Apply Online Portal</td>
                  <td class="p-2.5">Official BPSSC Advt. 11/2026 Registration &amp; Form Application Portal</td>
                  <td class="p-2.5 text-center"><a href="https://apply-bpssc.com/bpssc_hg_commander_11_26/applicationIndex" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 text-xs inline-block">Apply Online</a></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900 bg-slate-50">Official Notification</td>
                  <td class="p-2.5">Detailed Advt. No. 11/2026 PDF (15 Pages)</td>
                  <td class="p-2.5 text-center"><a href="https://apply-bpssc.com/bpssc_hg_commander_11_26/applicationIndex" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-emerald-600 text-white rounded font-bold hover:bg-emerald-700 text-xs inline-block">View Notification</a></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900 bg-slate-50">Official Commission Website</td>
                  <td class="p-2.5">Bihar Police Subordinate Services Commission Homepage</td>
                  <td class="p-2.5 text-center"><a href="https://bpssc.bihar.gov.in/" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-slate-700 text-white rounded font-bold hover:bg-slate-800 text-xs inline-block">Visit BPSSC</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 46,
      title: '46. Official Notification Summary',
      badge: 'Advt. 11/2026',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Advertisement No. 11/2026 contains 22 detailed clauses establishing complete rules for recruitment of Company Commanders from eligible Home Guard personnel in Bihar. Appointing authority is Deputy Commandant General, Bihar Home Guard, Patna.</p>
        </div>
      `
    },
    {
      id: 47,
      title: '47. Official Website & Contacts',
      badge: 'Commission Info',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>Commission Address:</strong> Bihar Police Subordinate Services Commission, 5 Harding Road, Patna – 800001.</p>
          <p>Official Website: <strong><a href="https://bpssc.bihar.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline">https://bpssc.bihar.gov.in/</a></strong> (Refer to the "Home Guard" tab for notices).</p>
        </div>
      `
    },
    {
      id: 48,
      title: '48. Frequently Asked Questions (FAQ)',
      badge: 'FAQ',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <strong class="text-slate-900 block font-bold">Q1: Can fresh graduates or general candidates apply for this post?</strong>
            <p class="mt-1 text-slate-600">No. Only enrolled and trained Bihar Home Guards who have completed at least 5 years of active duty and have at least 10 years service remaining as on 01.08.2026 can apply.</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <strong class="text-slate-900 block font-bold">Q2: What is the age limit for Company Commander?</strong>
            <p class="mt-1 text-slate-600">Minimum age is 24 years and maximum age is 50 years as on 01 August 2026 for all categories.</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <strong class="text-slate-900 block font-bold">Q3: What is the application fee?</strong>
            <p class="mt-1 text-slate-600">₹100/- for all categories, payable online through Net Banking, Credit/Debit Card, or UPI.</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <strong class="text-slate-900 block font-bold">Q4: Is there negative marking in the written exam?</strong>
            <p class="mt-1 text-slate-600">Yes, 0.2 marks will be deducted for every incorrect answer in both Preliminary and Main examinations.</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <strong class="text-slate-900 block font-bold">Q5: Which paper decides the final merit list?</strong>
            <p class="mt-1 text-slate-600">The final merit list is prepared purely on the marks obtained in Main Written Exam Paper-II (General Studies &amp; Aptitude - 200 marks). Paper-I (Hindi) and PET are qualifying only.</p>
          </div>
        </div>
      `
    },
    {
      id: 49,
      title: '49. Latest Updates & Notifications',
      badge: 'Live Bulletin',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
            <span class="font-bold text-emerald-950 block text-sm">Online Application Window Live</span>
            <p class="text-emerald-900">Application window is open from 10 September 2026 to 10 October 2026. Eligible Bihar Home Guard personnel should verify their service records and apply early on apply-bpssc.com.</p>
          </div>
        </div>
      `
    },
    {
      id: 50,
      title: '50. Related Bihar Police & Defense Exams',
      badge: 'Related Exams',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Explore other ongoing and upcoming examinations in Bihar Police and Central Armed Forces:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a href="latest-jobs/bihar-police-constable-csbc-2026.html" class="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-sm transition block">
              <span class="font-bold text-slate-900 text-xs block">Bihar Police Constable (CSBC) 2026</span>
              <span class="text-xs text-slate-500">21,391 Posts in Bihar Police Cadre</span>
            </a>
            <a href="patna-high-court-assistant-admit-card-2026.html" class="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-sm transition block">
              <span class="font-bold text-slate-900 text-xs block">Patna High Court Assistant 2026</span>
              <span class="text-xs text-slate-500">Assistant Group-B Examination</span>
            </a>
          </div>
        </div>
      `
    }
  ];
}

export const BPSSC_COMPANY_COMMANDER_2026_EXAM: ExamRecord = {
  id: 'bpssc-company-commander-2026',
  slug: 'bpssc-bihar-police-company-commander-recruitment-2026',
  examName: 'BPSSC Bihar Police Home Guard Company Commander Recruitment 2026',
  shortName: 'BPSSC Company Commander 2026',
  postName: 'Company Commander (गुल्म समादेशक) – Bihar Home Guard Service Cadre',
  organization: 'Bihar Police Subordinate Services Commission (BPSSC), Patna',
  category: 'Police',
  state: 'Bihar',
  totalVacancy: '65 Posts',
  applicationStartDate: '2026-09-10',
  applicationLastDate: '2026-10-10',
  examDate: 'Not Released / To Be Updated',
  admitCardDate: 'Not Released / To Be Updated',
  answerKeyDate: 'Not Released / To Be Updated',
  resultDate: 'Not Released / To Be Updated',
  status: 'APPLICATION_OPEN',
  education: ['Graduation'],
  acceptedQualificationLevels: ['Graduation'],
  higherQualificationAccepted: true,
  ageMin: 24,
  ageMax: 50,
  ageRelaxationInfo: 'Age 24 to 50 years as on 01.08.2026 across all categories for eligible Bihar Home Guard personnel',
  gender: 'All',
  logoIcon: '🛡️',
  officialWebsite: 'https://bpssc.bihar.gov.in/',
  officialNotification: 'https://apply-bpssc.com/bpssc_hg_commander_11_26/applicationIndex',
  applyLink: 'https://apply-bpssc.com/bpssc_hg_commander_11_26/applicationIndex',
  mockTestLink: 'https://bpssc.bihar.gov.in/',
  description: 'BPSSC Bihar Police Home Guard Company Commander Recruitment 2026 – check 65 vacancies, eligibility, 5-year service norm, age 24-50, exam pattern, PET standards, and official links.',
  shortSummary: 'BPSSC has notified 65 vacancies of Company Commander (Pay Level-6) in Bihar Home Guard Service Cadre (Advt. 11/2026). Enrolled Home Guards with 5 years active duty & Graduation degree can apply till 10 Oct 2026.',
  importantDates: [
    { label: 'Advt. 11/2026 Published', date: '07 September 2026' },
    { label: 'Online Application & Fee Start', date: '10 September 2026', isHighlight: true },
    { label: 'Last Date for Online Form & Fee', date: '10 October 2026', isHighlight: true },
    { label: 'Cut-off Date for Age, Service & Degree', date: '01 August 2026' },
    { label: 'Preliminary Written Exam Date', date: 'Not Released / To Be Updated', isHighlight: true },
    { label: 'Main Written Exam Date', date: 'Not Released / To Be Updated' },
    { label: 'Physical Efficiency Test (PET)', date: 'Not Released / To Be Updated' }
  ],
  applicationFee: [
    { category: 'General / Unreserved (UR)', amount: '₹100.00' },
    { category: 'Backward Class (BC) / EBC', amount: '₹100.00' },
    { category: 'SC / ST / EWS Candidates', amount: '₹100.00' },
    { category: 'All Female Candidates', amount: '₹100.00' },
    { category: 'Third Gender Candidates', amount: '₹100.00' }
  ],
  selectionProcess: [
    'Stage 1: Preliminary Written Examination (100 MCQs, 200 Marks, 2 Hours, GK & Current Affairs, 20x Shortlisted for Mains)',
    'Stage 2: Main Written Examination (Paper-I Hindi Qualifying 200M + Paper-II GS/Aptitude 200M Deciding Merit, 6x Shortlisted for PET)',
    'Stage 3: Physical Efficiency Test - PET (1 Mile/1 Km Run, High Jump, Long Jump, Shot Put) & Physical Standards Check',
    'Stage 4: Document Verification (5-Year Home Guard Duty Proof, 10-Year Service Left, Graduation Degree, Domicile, Caste)',
    'Stage 5: Medical Examination & Character Verification by Appointing Authority (Deputy Commandant General, Bihar Home Guard)'
  ],
  examPattern: [
    {
      stageName: 'Preliminary Written Examination',
      mode: 'Offline (Pen-Paper OMR Sheet)',
      duration: '2 Hours (120 Minutes)',
      negativeMarking: '0.2 marks per incorrect answer',
      subjects: [
        { name: 'General Knowledge & Current Affairs (सामान्य ज्ञान एवं समसामयिक मुद्दे)', questions: 100, marks: 200 }
      ]
    },
    {
      stageName: 'Main Written Examination (Paper-I & Paper-II)',
      mode: 'Offline (Pen-Paper OMR Sheet)',
      duration: '4 Hours Total (2 Hours each paper)',
      negativeMarking: '0.2 marks per incorrect answer',
      subjects: [
        { name: 'Paper-I: General Hindi (सामान्य हिन्दी - Qualifying Min. 30%, No Merit)', questions: 100, marks: 200 },
        { name: 'Paper-II: General Studies, General Science, Civics, History, Geography, Maths & Mental Ability (Decides Merit)', questions: 100, marks: 200 }
      ]
    }
  ],
  salary: {
    payScale: 'Level-6 (₹35,400 – ₹1,12,400)',
    inHand: '₹48,000 – ₹54,000 per month (approx. location dependent)',
    allowances: 'DA, HRA, Medical, Uniform Allowance & Bihar State Govt Employee Benefits'
  },
  faq: [
    {
      q: 'What is the total vacancy in BPSSC Company Commander Recruitment 2026?',
      a: 'There are 65 posts of Company Commander in Bihar Home Guard Service Cadre (Advt. No. 11/2026).'
    },
    {
      q: 'Who is eligible to apply for BPSSC Company Commander 2026?',
      a: 'Only enrolled, trained Bihar Home Guards with at least 5 years active duty and 10 years remaining service as on 01.08.2026 who hold a Graduation degree can apply.'
    },
    {
      q: 'What is the age limit for this recruitment?',
      a: 'Candidates must be between 24 and 50 years of age as on 01 August 2026 across all categories.'
    },
    {
      q: 'What are the application dates?',
      a: 'Online applications opened on 10 September 2026 and close on 10 October 2026.'
    },
    {
      q: 'What is the application fee?',
      a: '₹100/- for all categories (payable online via Net Banking, Debit/Credit Card, or UPI).'
    },
    {
      q: 'What is the negative marking penalty?',
      a: '0.2 marks will be deducted for every incorrect response in both Preliminary and Main exams.'
    },
    {
      q: 'Which paper decides the final merit list?',
      a: 'Final merit ranking is prepared strictly on marks obtained in Main Written Exam Paper-II (General Studies & Aptitude - 200 Marks). Paper-I Hindi and PET are qualifying only.'
    }
  ],
  allInformation: generateBpsscCompanyCommander50Sections()
};

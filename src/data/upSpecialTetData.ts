import { ExamRecord, ExamInfoSection } from '../types/exam';

export function generateUpSpecialTet50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. Recruitment Summary',
      badge: 'Overview',
      content: `
        <div class="space-y-4 text-slate-700 leading-relaxed">
          <p>The <strong>Uttar Pradesh Education Service Selection Commission, Prayagraj (UPESSC)</strong> has issued the official notification for the <strong>Special Teacher Eligibility Test (Special TET), 2026</strong> [विशेष अध्यापक पात्रता परीक्षा (Special TET), 2026] under Advertisement No. <strong>03/2026</strong>.</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Parameter</th><th class="p-2.5 border border-slate-200">Official Details</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">Exam Name</td><td class="p-2.5 font-bold text-slate-900">UP Special Teacher Eligibility Test (Special TET) 2026</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Conducting Body</td><td class="p-2.5">Uttar Pradesh Education Service Selection Commission (UPESSC), Prayagraj</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Advertisement No.</td><td class="p-2.5">03/2026</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Exam Levels</td><td class="p-2.5">Primary Level (Classes 1-5) &amp; Upper Primary Level (Classes 6-8)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Target Group</td><td class="p-2.5">In-service Teachers (State/Aided/Local Bodies) &amp; approx. 2,500 Special Educators (CWSN)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Application Dates</td><td class="p-2.5 font-bold text-emerald-700">05 September 2026 to 04 October 2026</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Exam Date</td><td class="p-2.5 font-bold text-blue-700">03 November 2026</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Mode of Exam</td><td class="p-2.5">Offline (OMR Sheet Based / Pen-Paper Mode)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Official Website</td><td class="p-2.5"><a href="https://www.upessc.up.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">upessc.up.gov.in</a> / <a href="https://apply.upessc.org/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">apply.upessc.org</a></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: '2. Conducting Organization (UPESSC Prayagraj)',
      badge: 'Authority',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p><strong>Uttar Pradesh Education Service Selection Commission (UPESSC)</strong> [उत्तर प्रदेश शिक्षा सेवा चयन आयोग], established in 2023, is the unified statutory apex body headquartered in Prayagraj responsible for teacher eligibility certifications and faculty recruitments across basic, secondary, and higher educational institutions in Uttar Pradesh.</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Commission Office:</strong> UPESSC, 23 Allengunj, Prayagraj - 211002, Uttar Pradesh.</li>
            <li><strong>Official Portals:</strong> <a href="https://www.upessc.up.gov.in/" target="_blank" class="text-blue-600 underline">https://www.upessc.up.gov.in/</a> &amp; Application Engine: <a href="https://apply.upessc.org/" target="_blank" class="text-blue-600 underline">https://apply.upessc.org/</a></li>
            <li><strong>Commission Helpline:</strong> 0532-2466851 (10:00 AM – 05:00 PM, Monday – Saturday)</li>
            <li><strong>Email:</strong> upmsscball@gmail.com / Support@upessc.org</li>
          </ul>
        </div>
      `
    },
    {
      id: 3,
      title: '3. Official Examination Title & Context',
      badge: 'Nomenclature',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>The official examination title published in the statutory notification is:</p>
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl font-bold text-blue-900">
            विशेष अध्यापक पात्रता परीक्षा (Special TET), 2026 [UP Special Teacher Eligibility Test - 2026]
          </div>
          <p>This exam is mandated for all in-service primary and upper primary school teachers who have not cleared TET, as well as Special Educators (Children with Special Needs - CWSN) appointed or working on contract/daily-wage basis across Uttar Pradesh schools.</p>
        </div>
      `
    },
    {
      id: 4,
      title: '4. Legal Background & Hon’ble Supreme Court Directives',
      badge: 'SC Judgment',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>The Special TET 2026 is conducted in direct execution of the following landmark Hon’ble Supreme Court orders:</p>
          <div class="space-y-2.5">
            <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl">
              <strong class="text-amber-950 block mb-1">1. Civil Appeal No. 1385/2025 &amp; Review Petition (Diary No. 53434/2025):</strong>
              <p class="text-amber-900">In <em>Anjuman Ishaat-e-Taleem Trust vs. State of Maharashtra &amp; Ors.</em> (order dated 01.09.2025) and subsequent review petition order dated <strong>29 May 2026</strong> in <em>State of UP vs. Anjuman Ishaat-e-Taleem Trust</em>, the Hon’ble Supreme Court ruled that all in-service teachers must qualify TET by <strong>31 August 2028</strong> to retain their teaching positions.</p>
            </div>
            <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <strong class="text-blue-950 block mb-1">2. Writ Petition (Civil) No. 132/2016 (Rajnish Kumar Pandey vs. Union of India):</strong>
              <p class="text-blue-900">By order dated <strong>07.03.2025</strong>, the Hon'ble Supreme Court mandated the conduct of a Special TET for approximately <strong>2,500 Special Teachers / Assistant Teachers (CWSN)</strong> working at primary and upper primary levels.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 5,
      title: '5. Applicability & Eligible Categories of Schools',
      badge: 'Applicability',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Clause 3 of the notification, the Special TET 2026 is applicable to teachers serving in:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <strong class="text-slate-900 font-bold block mb-1.5">3.1 Primary Level (Classes 1 to 5):</strong>
              <ul class="list-disc pl-4 space-y-1">
                <li>All schools directly run by the State Government.</li>
                <li>Schools run by local bodies and affiliated/recognized by Basic Shiksha Parishad.</li>
                <li>State Government-aided primary institutions.</li>
                <li>Special Educators working at the Primary Level (Classes 1-5).</li>
              </ul>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <strong class="text-slate-900 font-bold block mb-1.5">3.2 Upper Primary Level (Classes 6 to 8):</strong>
              <ul class="list-disc pl-4 space-y-1">
                <li>All schools directly run by the State Government.</li>
                <li>Schools run by local bodies and recognized/affiliated by Basic / Secondary Shiksha Parishad.</li>
                <li>State Government-aided junior high/upper primary schools.</li>
                <li>Special Educators working at the Upper Primary Level (Classes 6-8).</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 6,
      title: '6. Scope of Vacancy & Special Educators (CWSN)',
      badge: 'Target Scope',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Unlike standard open recruitments, Special TET is a <strong>mandatory qualifying eligibility examination</strong>. However, as noted in the official notification under Hon’ble Supreme Court directives in Writ Petition No. 132/2016, approximately <strong>2,500 Special Teachers / Assistant Teachers (CWSN)</strong> are targeted for qualification and regularization.</p>
          <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900">
            <strong>Key Benefit:</strong> Qualifying the Special TET enables in-service teachers to meet statutory NCTE requirements by 31 August 2028 and grants CWSN special educators certified eligibility for government teacher absorption and appointments in Uttar Pradesh.
          </div>
        </div>
      `
    },
    {
      id: 7,
      title: '7. Official Important Dates & Schedule',
      badge: 'Schedule',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr><th class="p-2 border">Event Description</th><th class="p-2 border">Official Date</th></tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2 border font-medium">Notification Publication Date</td><td class="p-2 border font-bold">03 September 2026</td></tr>
              <tr><td class="p-2 border font-medium">Online OTR &amp; Application Form Start Date</td><td class="p-2 border font-bold text-emerald-700">05 September 2026</td></tr>
              <tr><td class="p-2 border font-medium">Last Date for Online Fee Payment &amp; Submission</td><td class="p-2 border font-bold text-red-700">04 October 2026</td></tr>
              <tr><td class="p-2 border font-medium">Last Date for Online Form Correction</td><td class="p-2 border font-bold text-blue-700">08 October 2026</td></tr>
              <tr><td class="p-2 border font-medium">Intimation of Exam District to Candidates</td><td class="p-2 border">10 Days prior to exam (approx. 24 October 2026)</td></tr>
              <tr><td class="p-2 border font-medium">Admit Card Download Starts</td><td class="p-2 border font-bold">3 Days prior to exam (31 October 2026)</td></tr>
              <tr><td class="p-2 border font-medium">Special TET Examination Date</td><td class="p-2 border font-extrabold text-blue-900">03 November 2026</td></tr>
              <tr><td class="p-2 border font-medium">Answer Key &amp; Result Declaration</td><td class="p-2 border text-slate-500">Not Released / To Be Updated</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 8,
      title: '8. One-Time Registration (OTR) Mandate',
      badge: 'OTR Required',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Clause 4.2 of the notification, the application system is strictly <strong>OTR-based (One Time Registration)</strong>:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li>Every applicant must first complete their <strong>OTR profile</strong> on <a href="https://www.upessc.up.gov.in/" target="_blank" class="text-blue-600 underline">upessc.up.gov.in</a> or <a href="https://apply.upessc.org/" target="_blank" class="text-blue-600 underline">apply.upessc.org</a>.</li>
            <li>After generating the OTR number, the applicant can proceed to fill the Special TET 2026 application form.</li>
            <li>Applications submitted through any offline, physical, or postal mode will be summarily rejected.</li>
          </ul>
        </div>
      `
    },
    {
      id: 9,
      title: '9. Mandatory eHRMS Code & CRR Registration Rules',
      badge: 'Critical Rule',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>As per Clause 4.3 of the notification, specific identification credentials are strictly mandatory while applying:</p>
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl space-y-2">
            <div>
              <strong class="text-amber-950 font-bold">1. For General In-Service Teachers:</strong>
              <p class="text-amber-900">All working teachers in primary and upper primary schools must enter their official <strong>eHRMS (Manav Sampada) Code</strong> in the online portal.</p>
            </div>
            <div>
              <strong class="text-amber-950 font-bold">2. For Special Educators (CWSN):</strong>
              <p class="text-amber-900">Special Educators at primary and upper primary levels must enter their <strong>Active CRR Number</strong> along with their <strong>Rehabilitation Council of India (RCI) Registration Certificate Number</strong>.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 10,
      title: '10. Educational Qualification for Primary Level (Classes 1 to 5)',
      badge: 'Paper 1 Eligibility',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Clause 7.1 and 7.2 of the notification:</p>
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>For General Working Teachers:</strong> All in-service teachers currently appointed and serving in primary schools (Classes 1 to 5) under State Government, local bodies, or aided schools are eligible to appear in the Primary Level Special TET.</li>
            <li><strong>For Special Educators (CWSN Primary Level - Classes 1 to 5):</strong> Special educators working on contract/daily-wage basis who possess:
              <ol class="list-decimal pl-5 mt-1 space-y-1">
                <li>Graduation degree from a recognized University; AND</li>
                <li><strong>D.Ed. (Special Education)</strong> or equivalent qualification recognized by the Rehabilitation Council of India (RCI); AND</li>
                <li>Active CRR Number with a valid RCI Registration Certificate.</li>
              </ol>
            </li>
          </ul>
        </div>
      `
    },
    {
      id: 11,
      title: '11. Educational Qualification for Upper Primary Level (Classes 6 to 8)',
      badge: 'Paper 2 Eligibility',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Clause 7.1 and 7.2 of the notification:</p>
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>For General Working Teachers:</strong> All in-service teachers currently serving in upper primary schools / junior high schools (Classes 6 to 8) under State Government, local bodies, Basic Shiksha Parishad, or Secondary Education Parishad.</li>
            <li><strong>For Special Educators (CWSN Upper Primary Level - Classes 6 to 8):</strong> Special educators serving on contract/daily-wage basis who possess:
              <ol class="list-decimal pl-5 mt-1 space-y-1">
                <li>Graduation degree from a recognized University; AND</li>
                <li><strong>B.Ed. (Special Education)</strong> or equivalent qualification recognized by the Rehabilitation Council of India (RCI); AND</li>
                <li>Active CRR Number with a valid RCI Registration Certificate.</li>
              </ol>
            </li>
          </ul>
        </div>
      `
    },
    {
      id: 12,
      title: '12. Age Limit & Cut-off Date',
      badge: 'Max 60 Years',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Clause 8 of the notification:</p>
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl">
            <strong class="text-blue-950 block mb-1">Age Limit for Special Educators (Contract / Daily-Wage):</strong>
            <p class="text-blue-900">The maximum age limit is <strong>60 Years</strong> as on the date of examination: <strong>03 November 2026</strong>.</p>
          </div>
          <p class="text-slate-600">For regular in-service permanent teachers serving in Uttar Pradesh schools, age criteria conform to standard departmental service retention rules up to superannuation.</p>
        </div>
      `
    },
    {
      id: 13,
      title: '13. Application Fee Structure (Level-Wise & Category-Wise)',
      badge: 'Official Fees',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr>
                <th class="p-2.5 border">Category</th>
                <th class="p-2.5 border">Primary Level (Class 1-5)</th>
                <th class="p-2.5 border">Upper Primary Level (Class 6-8)</th>
                <th class="p-2.5 border">Both Levels (if opted)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="p-2.5 border font-semibold">General / OBC / EWS</td>
                <td class="p-2.5 border font-bold text-slate-900">₹1,000.00</td>
                <td class="p-2.5 border font-bold text-slate-900">₹1,000.00</td>
                <td class="p-2.5 border font-bold text-slate-900">₹2,000.00</td>
              </tr>
              <tr>
                <td class="p-2.5 border font-semibold">Scheduled Caste (SC) / Scheduled Tribe (ST)</td>
                <td class="p-2.5 border font-bold text-blue-700">₹500.00</td>
                <td class="p-2.5 border font-bold text-blue-700">₹500.00</td>
                <td class="p-2.5 border font-bold text-blue-700">₹1,000.00</td>
              </tr>
              <tr>
                <td class="p-2.5 border font-semibold">Divyangjan (Persons with Disabilities)</td>
                <td class="p-2.5 border font-bold text-emerald-700">₹300.00</td>
                <td class="p-2.5 border font-bold text-emerald-700">₹300.00</td>
                <td class="p-2.5 border font-bold text-emerald-700">₹600.00</td>
              </tr>
            </tbody>
          </table>
          <p class="text-[11px] text-slate-500"><em>Note:</em> Bank transaction charges or gateway taxes may apply as per bank norms. Fees once paid will not be refunded or adjusted under any circumstances.</p>
        </div>
      `
    },
    {
      id: 14,
      title: '14. Fee Payment Modes & Banking Guidelines',
      badge: 'Net Banking/Cards',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Clause 5 of the notification, application fee must be remitted through the online payment gateway integrated on <a href="https://apply.upessc.org/" target="_blank" class="text-blue-600 underline">apply.upessc.org</a> using:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Debit Card (RuPay, Visa, MasterCard)</li>
            <li>Credit Card</li>
            <li>Internet Banking (ICICI Bank, Union Bank, SBI, and other scheduled banks via BillDesk)</li>
          </ul>
          <p>Candidates must preserve the fee payment receipt / transaction acknowledgement slip with transaction reference ID for future reference.</p>
        </div>
      `
    },
    {
      id: 15,
      title: '15. Examination Scheme & Timing (150 Mins, 150 MCQs)',
      badge: 'Exam Scheme',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Clause 10.1 of the notification, the structure of the examination is uniform across both levels:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <span class="text-slate-500 text-[11px] block">Duration</span>
              <strong class="text-sm font-bold text-slate-900">2 Hr 30 Min (150 Min)</strong>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <span class="text-slate-500 text-[11px] block">Total Questions</span>
              <strong class="text-sm font-bold text-slate-900">150 Questions</strong>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <span class="text-slate-500 text-[11px] block">Total Marks</span>
              <strong class="text-sm font-bold text-slate-900">150 Marks</strong>
            </div>
            <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
              <span class="text-emerald-700 text-[11px] block">Negative Marking</span>
              <strong class="text-sm font-bold text-emerald-800">NO Negative Marking</strong>
            </div>
          </div>
          <p class="text-slate-600">All questions are multiple-choice (MCQs) with four options and single correct answer. Medium of question paper is bilingual (Hindi and English), except for specific language test papers.</p>
        </div>
      `
    },
    {
      id: 16,
      title: '16. Primary Level (Classes 1 to 5) Exam Pattern & Subjects',
      badge: 'Level 1 Pattern',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <p>Under Clause 10.3 of the notification, all 5 subjects are compulsory for Primary Level:</p>
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr>
                <th class="p-2 border">S.No.</th>
                <th class="p-2 border">Subject / Topic</th>
                <th class="p-2 border">Type</th>
                <th class="p-2 border">No. of Questions</th>
                <th class="p-2 border">Total Marks</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2 border">1</td><td class="p-2 border font-medium">Child Development &amp; Pedagogy (बाल विकास एवं शिक्षण विधि)</td><td class="p-2 border">Compulsory</td><td class="p-2 border">30 MCQ</td><td class="p-2 border font-bold">30</td></tr>
              <tr><td class="p-2 border">2</td><td class="p-2 border font-medium">Language I - Hindi (भाषा प्रथम - हिन्दी)</td><td class="p-2 border">Compulsory</td><td class="p-2 border">30 MCQ</td><td class="p-2 border font-bold">30</td></tr>
              <tr><td class="p-2 border">3</td><td class="p-2 border font-medium">Language II - English / Urdu / Sanskrit (भाषा द्वितीय - अंग्रेजी/उर्दू/संस्कृत)</td><td class="p-2 border">Opt Any 1</td><td class="p-2 border">30 MCQ</td><td class="p-2 border font-bold">30</td></tr>
              <tr><td class="p-2 border">4</td><td class="p-2 border font-medium">Mathematics (गणित)</td><td class="p-2 border">Compulsory</td><td class="p-2 border">30 MCQ</td><td class="p-2 border font-bold">30</td></tr>
              <tr><td class="p-2 border">5</td><td class="p-2 border font-medium">Environmental Studies (पर्यावरणीय अध्ययन)</td><td class="p-2 border">Compulsory</td><td class="p-2 border">30 MCQ</td><td class="p-2 border font-bold">30</td></tr>
              <tr class="bg-blue-50/70 font-black"><td colspan="3" class="p-2.5 border text-right">TOTAL (PRIMARY LEVEL)</td><td class="p-2.5 border font-bold">150 MCQ</td><td class="p-2.5 border font-bold text-blue-900">150 Marks</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 17,
      title: '17. Upper Primary Level (Classes 6 to 8) Exam Pattern & Subjects',
      badge: 'Level 2 Pattern',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <p>Under Clause 10.3 of the notification, Upper Primary Level features common core sections and subject-specific streams:</p>
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr>
                <th class="p-2 border">S.No.</th>
                <th class="p-2 border">Subject / Section</th>
                <th class="p-2 border">Type</th>
                <th class="p-2 border">Questions</th>
                <th class="p-2 border">Marks</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2 border">1</td><td class="p-2 border font-medium">Child Development &amp; Pedagogy (बाल विकास एवं शिक्षण विधि)</td><td class="p-2 border">Compulsory</td><td class="p-2 border">30 MCQ</td><td class="p-2 border font-bold">30</td></tr>
              <tr><td class="p-2 border">2</td><td class="p-2 border font-medium">Language I - Hindi (भाषा प्रथम - हिन्दी)</td><td class="p-2 border">Compulsory</td><td class="p-2 border">30 MCQ</td><td class="p-2 border font-bold">30</td></tr>
              <tr><td class="p-2 border">3</td><td class="p-2 border font-medium">Language II - English / Urdu / Sanskrit (भाषा द्वितीय - अंग्रेजी/उर्दू/संस्कृत)</td><td class="p-2 border">Opt Any 1</td><td class="p-2 border">30 MCQ</td><td class="p-2 border font-bold">30</td></tr>
              <tr>
                <td class="p-2 border">4</td>
                <td class="p-2 border font-medium">
                  <strong>Subject Specific Choice (60 MCQs):</strong><br/>
                  (a) For Maths &amp; Science Teachers: Mathematics &amp; Science<br/>
                  (b) For Social Studies Teachers: Social Studies / Social Science<br/>
                  (c) For Any Other Teachers: Either (a) or (b)
                </td>
                <td class="p-2 border">Stream-Specific</td>
                <td class="p-2 border">60 MCQ</td>
                <td class="p-2 border font-bold">60</td>
              </tr>
              <tr class="bg-blue-50/70 font-black"><td colspan="3" class="p-2.5 border text-right">TOTAL (UPPER PRIMARY LEVEL)</td><td class="p-2.5 border font-bold">150 MCQ</td><td class="p-2.5 border font-bold text-blue-900">150 Marks</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 18,
      title: '18. Minimum Qualifying Marks (Cutoff Percentage)',
      badge: 'Qualifying Marks',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Clause 10.2 of the notification, the minimum qualifying cutoff marks required to obtain the UP Special TET Eligibility Certificate are:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="p-3.5 bg-blue-50 border border-blue-200 rounded-xl">
              <strong class="text-blue-950 block mb-1">General (Unreserved) Candidates:</strong>
              <div class="text-xl font-black text-blue-900">60% Marks (90 / 150)</div>
              <p class="text-slate-600 mt-1">Candidates must score at least 90 out of 150 marks.</p>
            </div>
            <div class="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl">
              <strong class="text-emerald-950 block mb-1">SC / ST / OBC / EWS / PH / DFF / ESM:</strong>
              <div class="text-xl font-black text-emerald-900">55% Marks (82 / 150)</div>
              <p class="text-slate-600 mt-1">Candidates must score at least 82 out of 150 marks.</p>
            </div>
          </div>
          <p class="text-slate-600">The same qualifying benchmarks apply to CWSN Special Educators across respective unreserved and reserved categories.</p>
        </div>
      `
    },
    {
      id: 19,
      title: '19. Score Normalization Policy',
      badge: 'Normalization',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Special Note to Clause 10.2 of the notification:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li>If the examination is conducted in a <strong>single shift</strong>, raw marks scored by candidates will directly serve as qualifying marks.</li>
            <li>In case of high applicant volume necessitating multiple shifts, <strong>Score Normalization</strong> will be applied in accordance with UP Government Order No. 6/2024/148/Samanya/47/Ka-4-2024 and Commission notification dated 26.02.2026.</li>
            <li>In such scenarios, normalized scores will be evaluated against the qualifying thresholds (90 marks for General, 82 marks for Reserved/EWS).</li>
          </ul>
        </div>
      `
    },
    {
      id: 20,
      title: '20. Detailed Syllabus Overview (Primary & Upper Primary)',
      badge: 'Syllabus',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>The detailed syllabus conforms to Basic Shiksha Parishad &amp; NCTE curriculum standards available on <a href="https://www.upessc.up.gov.in/" target="_blank" class="text-blue-600 underline">upessc.up.gov.in</a>:</p>
          <div class="space-y-2">
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-900">Child Development &amp; Pedagogy:</strong> Concept of child development, principles of growth, inclusive education, learning theories, motivation, intelligence, pedagogy of special education, teaching techniques for children with disabilities.
            </div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-900">Language I (Hindi):</strong> Reading comprehension passages, grammar, syntax, sandhi, samas, idioms, vocabulary, linguistic pedagogy, principles of language learning.
            </div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-900">Language II (English / Urdu / Sanskrit):</strong> Unseen comprehension, parts of speech, vocabulary, grammar mechanics, communicative proficiency, pedagogy of language development.
            </div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-900">Mathematics &amp; Science / Environmental Studies:</strong> Number system, arithmetic, geometry, measurement, fractions, data handling, scientific methodology, life sciences, physical sciences, ecology, environmental conservation, natural disasters, state-specific geographical awareness.
            </div>
          </div>
        </div>
      `
    },
    {
      id: 21,
      title: '21. Child Development & Pedagogy (CWSN Focus)',
      badge: 'Pedagogy 30M',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>Special emphasis is placed on <strong>Inclusive Education &amp; Children with Special Needs (CWSN)</strong>:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Rights of Persons with Disabilities (RPwD) Act, 2016 provisions in educational settings.</li>
            <li>Identification and educational management of learning disabilities, visual impairment, hearing impairment, cerebral palsy, autism spectrum disorder, and intellectual disabilities.</li>
            <li>Individualized Education Plans (IEP) and assistive educational technology.</li>
            <li>Classroom adaptation, multisensory teaching, and inclusive evaluation rubrics.</li>
          </ul>
        </div>
      `
    },
    {
      id: 22,
      title: '22. Language-I (Hindi) Structure & Guidelines',
      badge: 'Hindi 30M',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>Language-I is compulsory Hindi carrying 30 MCQs (30 marks):</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>अपठित गद्यांश एवं पद्यांश (Unseen prose and poetry comprehension).</li>
            <li>व्याकरण: वर्ण विचार, सन्धि, समास, तत्सम-तद्भव, विलोम, पर्यायवाची, अनेकार्थी, उपसर्ग-प्रत्यय.</li>
            <li>वाक्य शुद्धि, लोकोक्तियां एवं मुहावरे, विराम चिह्न.</li>
            <li>हिन्दी शिक्षण शास्त्र: भाषा विकास के सिद्धान्त, सुनने और बोलने की भूमिका, उपचारात्मक शिक्षण.</li>
          </ul>
        </div>
      `
    },
    {
      id: 23,
      title: '23. Language-II (English / Urdu / Sanskrit) Choice',
      badge: 'Language II 30M',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>Candidates must elect one language among English, Urdu, or Sanskrit for Language-II at the time of online application:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>English:</strong> Unseen passage, comprehension, parts of speech, active/passive voice, narration, tenses, antonyms/synonyms, pedagogy of English teaching.</li>
            <li><strong>Sanskrit:</strong> अपठित गद्यांश/पद्यांश, सन्धि, समास, शब्द रूप, धातु रूप, कारक एवं विभक्ति, शिक्षण विधियां.</li>
            <li><strong>Urdu:</strong> Unseen passage, grammar, idioms, poetry appreciation, methods of teaching Urdu.</li>
          </ul>
          <p class="text-slate-500"><em>Important:</em> The language selected in the online application form cannot be changed inside the examination hall.</p>
        </div>
      `
    },
    {
      id: 24,
      title: '24. Mathematics & Environmental Studies (Primary)',
      badge: 'Maths & EVS 60M',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>For Primary Level (Classes 1-5), Mathematics and EVS comprise 60 MCQs combined:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Mathematics (30 Marks):</strong> Numbers, addition, subtraction, multiplication, division, LCM &amp; HCF, fractions, decimals, unitary method, percentage, profit &amp; loss, simple interest, geometry, perimeter, area, volume, time, weight, money, and pedagogical aspects.</li>
            <li><strong>Environmental Studies (30 Marks):</strong> Family, friends, animals, plants, food, shelter, water, travel, things we make and do, ecology, conservation of environment, Indian constitution, local administration, transport, and EVS learning pedagogy.</li>
          </ul>
        </div>
      `
    },
    {
      id: 25,
      title: '25. Upper Primary Subject Streams (Maths-Science / Social Studies)',
      badge: 'Subject Choice 60M',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>For Upper Primary Level (Classes 6-8), candidates attempt 60 questions according to their teaching appointment:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Mathematics &amp; Science Stream (60 Marks):</strong> Algebra, geometry, mensuration, statistics, physical &amp; chemical phenomena, living world, human physiology, energy, light, electricity, materials, and pedagogical issues in science and mathematics.</li>
            <li><strong>Social Studies / Social Science Stream (60 Marks):</strong> Ancient, medieval, and modern Indian history, geography of India &amp; world, social and political life (polity &amp; constitution), economics, environmental degradation, disaster management, and social science teaching methodology.</li>
            <li><strong>Other Subject Teachers:</strong> Can opt for either Mathematics &amp; Science or Social Studies based on their educational background.</li>
          </ul>
        </div>
      `
    },
    {
      id: 26,
      title: '26. OMR Sheet Filling Instructions & Pen Guidelines',
      badge: 'OMR Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Clause 11.5 and 11.6 of the notification, strict OMR guidelines must be observed:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li>Candidates must bring only a <strong>Black Ballpoint Pen</strong> to mark rectangles and bubbles on the OMR answer sheet.</li>
            <li>Fountain pens, gel pens, colored ball pens, sketch pens, HB pencils, and whitener / correcting fluid are strictly prohibited.</li>
            <li>Never use blade, eraser, or fingernails to scratch or alter responses. Any tampered OMR sheet will be rejected automatically by the optical scanner.</li>
            <li>Darkening more than one bubble for a question results in zero marks for that question.</li>
          </ul>
        </div>
      `
    },
    {
      id: 27,
      title: '27. Examination Centers & District Allotment',
      badge: 'Exam Districts',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Clause 9 of the notification:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Examination centers will be established across district headquarters throughout Uttar Pradesh.</li>
            <li>Information regarding the allotted <strong>Exam District</strong> will be available <strong>10 days prior to exam</strong> on the website.</li>
            <li>Detailed <strong>Admit Card</strong> specifying exact center name, address, roll number, and session timings will be downloadable <strong>3 days prior to exam</strong>.</li>
            <li>No request for change of examination center or shift will be accepted under any circumstances.</li>
          </ul>
        </div>
      `
    },
    {
      id: 28,
      title: '28. Admit Card Download Process & Portal',
      badge: 'Admit Card',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Candidates can download their admit card by following these steps:</p>
          <ol class="list-decimal pl-5 space-y-1">
            <li>Visit the official portal <a href="https://www.upessc.up.gov.in/" target="_blank" class="text-blue-600 underline">www.upessc.up.gov.in</a>.</li>
            <li>Click on the <strong>"Admit Card Download"</strong> tab on the homepage.</li>
            <li>Enter your <strong>Registration Number / Mobile Number</strong> and <strong>Date of Birth</strong>.</li>
            <li>View and download the hall ticket; print at least 2 clear copies.</li>
            <li>Carry the printed admit card, 2 passport photos, and an original Government Photo ID (Aadhaar, Voter ID, Passport, PAN Card, or Driving License) to the examination center.</li>
          </ol>
        </div>
      `
    },
    {
      id: 29,
      title: '29. Scribe & Compensatory Time Facilities for Divyangjan',
      badge: 'Divyang Facilities',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Clause 11.8 of the notification and Government Orders dated 04.12.2019 and 08.09.2022:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li>Divyang candidates requiring a <strong>Scribe</strong> must bring their own scribe.</li>
            <li>Eligible candidates must register their scribe details with the Commission office at least <strong>one week prior to the written exam</strong> to ensure appropriate seating arrangements at the venue.</li>
            <li>Compensatory additional time of <strong>20 minutes per hour</strong> (50 minutes extra for the 2.5-hour exam) will be provided.</li>
            <li>No travel allowance or remuneration will be disbursed to the scribe by the Commission.</li>
          </ul>
        </div>
      `
    },
    {
      id: 30,
      title: '30. Domicile & State Reservation Rules',
      badge: 'UP Domicile Only',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Clause 12 of the notification:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li>The benefits of vertical reservation (SC, ST, OBC, EWS) and horizontal reservation (PH, DFF, ESM) are available <strong>strictly to bonafide residents (domicile holders) of Uttar Pradesh</strong>.</li>
            <li>Applicants from other states belonging to reserved categories will be treated as <strong>General (Unreserved)</strong> candidates with General fee and 60% qualifying cutoff.</li>
            <li>For female candidates claiming reservation, caste certificates issued on the basis of the <strong>father's side</strong> will only be considered valid. Certificates bearing husband's name/status are strictly inadmissible.</li>
          </ul>
        </div>
      `
    },
    {
      id: 31,
      title: '31. EWS Certificate Specifications & Validity',
      badge: 'EWS Guidelines',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Clause 12.7 of the notification, candidates claiming Economically Weaker Section (EWS) reservation must submit a certificate issued in accordance with UP Personnel Department GO No. 1/2019/4/1/2002/Ka-2/19 T.C.-II dated 18.02.2019 and GO dated 14.03.2019.</p>
          <p>The EWS certificate must be issued by a competent authority (District Magistrate, Additional District Magistrate, City Magistrate, Sub-Divisional Magistrate, or Tehsildar) based on the preceding financial year's gross income and valid for the current recruitment year.</p>
        </div>
      `
    },
    {
      id: 32,
      title: '32. OBC Non-Creamy Layer Certificate Guidelines',
      badge: 'OBC Certificate',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>OBC certificates must be issued on the prescribed UP Government Proforma (Appendix 2) in accordance with the UP Public Services (Reservation for SC, ST, and OBC) Act, 1994 (as amended in 2001 and 2002).</p>
          <p>The certificate must clearly verify that the candidate does not fall into the Creamy Layer (family annual income from all sources not exceeding ₹8 Lakhs for three consecutive years).</p>
        </div>
      `
    },
    {
      id: 33,
      title: '33. SC / ST Certificate Guidelines',
      badge: 'SC/ST Certificate',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>SC and ST candidates of Uttar Pradesh must submit valid caste certificates issued on the statutory proforma (Appendix 1) under the Constitution (Scheduled Castes) Order, 1950 and Constitution (Scheduled Tribes) (UP) Order, 1967.</p>
          <p>Competent issuing authorities: District Magistrate, Additional District Magistrate, City Magistrate, Sub-Divisional Magistrate, or Tehsildar.</p>
        </div>
      `
    },
    {
      id: 34,
      title: '34. Photograph, Signature & Document Upload Specs',
      badge: 'Upload Specs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr>
                <th class="p-2 border">Asset</th>
                <th class="p-2 border">Format</th>
                <th class="p-2 border">File Size</th>
                <th class="p-2 border">Pixel Resolution / Dimensions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-2 border font-semibold">Passport Photo</td><td class="p-2 border">JPG / JPEG</td><td class="p-2 border font-bold text-blue-700">30 KB to 300 KB</td><td class="p-2 border">300 to 600 Pixels (Clear front view)</td></tr>
              <tr><td class="p-2 border font-semibold">Signature</td><td class="p-2 border">JPG / JPEG</td><td class="p-2 border font-bold text-blue-700">10 KB to 200 KB</td><td class="p-2 border">140 x 110 Pixels (White background)</td></tr>
              <tr><td class="p-2 border font-semibold">Certificates / Proofs</td><td class="p-2 border">PDF</td><td class="p-2 border font-bold text-blue-700">50 KB to 500 KB</td><td class="p-2 border">Legible scan of original certificate</td></tr>
            </tbody>
          </table>
          <p class="text-[11px] text-slate-500"><em>Tip:</em> Use the free <strong>RajDailyTools Photo Resizer</strong> and <strong>Signature Resizer</strong> to format your images to exact pixel and file-size specifications instantly.</p>
        </div>
      `
    },
    {
      id: 35,
      title: '35. Step-by-Step Online Application Guide',
      badge: 'How to Apply',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Clause 4 of the notification, complete the application process in 5 clear stages:</p>
          <ol class="list-decimal pl-5 space-y-1.5">
            <li><strong>Step 1 - One Time Registration (OTR):</strong> Visit <a href="https://apply.upessc.org/" target="_blank" class="text-blue-600 underline">apply.upessc.org</a>, register your primary mobile number and email ID, and create your OTR profile.</li>
            <li><strong>Step 2 - Special TET Form Filling:</strong> Login using your OTR credentials. Select the exam level (Primary, Upper Primary, or Both). Enter your <strong>eHRMS Code</strong> (for regular teachers) or <strong>CRR Number &amp; RCI Registration Details</strong> (for special educators).</li>
            <li><strong>Step 3 - Upload Photo &amp; Signature:</strong> Upload recent passport photograph (30-300 KB) and signature on white background (10-200 KB), along with required certificates in PDF (50-500 KB).</li>
            <li><strong>Step 4 - Fee Payment:</strong> Pay the prescribed category fee online via Debit Card, Credit Card, or Net Banking.</li>
            <li><strong>Step 5 - Final Submission &amp; Print:</strong> Preview the application form thoroughly, accept the final declaration, click Submit, and print the confirmation page for your records.</li>
          </ol>
        </div>
      `
    },
    {
      id: 36,
      title: '36. Form Correction Window & Modification Rules',
      badge: 'Correction Info',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Under Clause 1, 4.5, and 4.12 of the notification:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li>Correction window is available online from <strong>05 October 2026 to 08 October 2026</strong>.</li>
            <li>Candidates can modify permissible application data during this period. However, <strong>Category, Sub-Category, Date of Birth, Gender, Mobile Number, and Email ID</strong> cannot be modified after final submission.</li>
            <li>If an applicant submits multiple applications, only the <strong>last successfully submitted application</strong> will be accepted, and earlier forms stand canceled. Fees paid on canceled applications are non-refundable.</li>
          </ul>
        </div>
      `
    },
    {
      id: 37,
      title: '37. Mandatory Documents Checklist',
      badge: 'Document List',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>Keep the following documents prepared before applying and appearing in the examination:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>High School (Class 10) Marksheet &amp; Certificate (sole authentic proof of Date of Birth).</li>
            <li>Graduation Degree &amp; Marksheets.</li>
            <li>D.Ed. (Special Education) / B.Ed. (Special Education) / Teaching Training Marksheets &amp; Degree.</li>
            <li>Rehabilitation Council of India (RCI) Registration Certificate &amp; Active CRR Number (for Special Educators).</li>
            <li>eHRMS (Manav Sampada) Code Document / Working Teacher Appointment Order.</li>
            <li>Category Certificate (SC / ST / OBC / EWS) on prescribed UP Government format.</li>
            <li>Sub-Category Certificate (PH, DFF, ESM) if applicable.</li>
            <li>Aadhaar Card or Government Photo Identity Card.</li>
          </ul>
        </div>
      `
    },
    {
      id: 38,
      title: '38. Validity Period of Special TET Certificate',
      badge: 'Certificate Validity',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>In alignment with NCTE guidelines and Uttar Pradesh State Government rules:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>The UP Special TET Eligibility Certificate remains valid for a <strong>Lifetime</strong> from the date of result declaration.</li>
            <li>Qualified candidates can utilize this certification to fulfill the mandatory statutory qualification directive issued by the Hon'ble Supreme Court for regular service continuity up to 31.08.2028 and for forthcoming teacher recruitment appointments in Uttar Pradesh.</li>
          </ul>
        </div>
      `
    },
    {
      id: 39,
      title: '39. Selection & Certification Lifecycle Flowchart',
      badge: 'Process Flow',
      content: `
        <div class="space-y-4 text-slate-700 leading-relaxed text-xs">
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 font-mono">
            <div class="p-2.5 bg-blue-100/70 border border-blue-300 rounded-xl text-blue-950 font-bold text-center">
              1. OTR &amp; ONLINE APPLICATION (05.09.2026 to 04.10.2026)
              <div class="text-[11px] font-normal text-blue-800 mt-0.5">Enter eHRMS Code or CRR Number &rarr; Fee Payment &rarr; Final Submit</div>
            </div>
            <div class="text-center font-bold text-slate-400">&darr;</div>
            <div class="p-2.5 bg-indigo-100/70 border border-indigo-300 rounded-xl text-indigo-950 font-bold text-center">
              2. ADMIT CARD DOWNLOAD (31.10.2026 onwards)
              <div class="text-[11px] font-normal text-indigo-800 mt-0.5">District intimation 10 days prior &rarr; Hall ticket 3 days prior</div>
            </div>
            <div class="text-center font-bold text-slate-400">&darr;</div>
            <div class="p-2.5 bg-amber-100/70 border border-amber-300 rounded-xl text-amber-950 font-bold text-center">
              3. OFFLINE WRITTEN EXAM ON OMR (03.11.2026)
              <div class="text-[11px] font-normal text-amber-800 mt-0.5">150 MCQs | 150 Marks | 150 Minutes | Black Ballpoint Pen</div>
            </div>
            <div class="text-center font-bold text-slate-400">&darr;</div>
            <div class="p-2.5 bg-emerald-100/80 border border-emerald-300 rounded-xl text-emerald-950 font-bold text-center">
              4. RESULT &amp; TET ELIGIBILITY CERTIFICATE ISSUANCE
              <div class="text-[11px] font-normal text-emerald-800 mt-0.5">Gen: &ge; 90 Marks (60%) | Reserved: &ge; 82 Marks (55%) &rarr; Lifetime Validity</div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 40,
      title: '40. Normalization & Multi-Shift Evaluation Methodology',
      badge: 'Evaluation',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>Under UPESSC circular dated 26.02.2026, if applicant volume across primary or upper primary levels requires multi-shift examinations, equi-percentile normalization will be executed.</p>
          <p>Normalized marks determine whether an examinee clears the 60% (General) or 55% (Reserved/EWS) bar. Raw percentiles are mapped to standard scales to ensure absolute fairness across shifts of varying difficulty.</p>
        </div>
      `
    },
    {
      id: 41,
      title: '41. Important Guidelines for Working In-Service Teachers',
      badge: 'Working Teachers',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <div class="p-3 bg-red-50 border border-red-200 rounded-xl text-red-900">
            <strong>Statutory Alert for In-Service Teachers:</strong> As directed by the Hon’ble Supreme Court of India in Civil Appeal No. 1385/2025, qualifying this Special TET is mandatory for all serving teachers prior to <strong>31 August 2028</strong>. Failure to pass the examination within the stipulated window jeopardizes teaching appointment continuity under state basic/secondary education rules.
          </div>
          <p>Teachers must ensure accurate entry of their <strong>eHRMS (Manav Sampada) code</strong> during application so that qualifying scores are officially mapped to their state service record books.</p>
        </div>
      `
    },
    {
      id: 42,
      title: '42. Special Guidelines for Special Educators (CWSN)',
      badge: 'CWSN Guidelines',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>Special educators working under Samagra Shiksha or contractual programs for Children with Special Needs (CWSN):</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Must hold an active <strong>Central Rehabilitation Register (CRR) Number</strong> from the Rehabilitation Council of India (RCI).</li>
            <li>Must upload the RCI registration certificate during online application.</li>
            <li>Upper age limit for contractual/daily-wage special educators is extended up to <strong>60 Years</strong> as on 03.11.2026.</li>
          </ul>
        </div>
      `
    },
    {
      id: 43,
      title: '43. Direct Official Application Portal Link',
      badge: 'Apply Link',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Candidates can directly access the official UPESSC recruitment portal:</p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-wrap items-center justify-between gap-2">
            <div>
              <div class="font-bold text-slate-900">UPESSC Online Application Engine:</div>
              <a href="https://apply.upessc.org/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold">https://apply.upessc.org/</a>
            </div>
            <a href="https://apply.upessc.org/" target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition">
              Apply Online Now &rarr;
            </a>
          </div>
        </div>
      `
    },
    {
      id: 44,
      title: '44. Official Notification PDF Link',
      badge: 'PDF Download',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Download the unabridged 16-page official notification issued by the Secretary, UPESSC Prayagraj:</p>
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl flex flex-wrap items-center justify-between gap-2">
            <div>
              <div class="font-bold text-blue-950">Official Advt. 03/2026 Notification PDF:</div>
              <div class="text-[11px] text-blue-800">Complete service guidelines, syllabus, OMR rules &amp; proformas</div>
            </div>
            <a href="https://www.upessc.up.gov.in/Notice/badc-2f84-4983-44c3-12bf.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition">
              Download Official PDF &rarr;
            </a>
          </div>
        </div>
      `
    },
    {
      id: 45,
      title: '45. Official UPESSC Commission Website Link',
      badge: 'Official Website',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs">
          <p>For all official notices, circulars, syllabi, press communiqués, and result announcements:</p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <span class="text-slate-500 block">Primary Web Portal:</span>
            <a href="https://www.upessc.up.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-700 font-bold underline text-sm">https://www.upessc.up.gov.in/</a>
          </div>
        </div>
      `
    },
    {
      id: 46,
      title: '46. Helpline, Bank Payment & Technical Support Directory',
      badge: 'Helpline',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed overflow-x-auto text-xs">
          <table class="w-full text-left border-collapse border border-slate-200">
            <thead class="bg-slate-100 text-slate-800 font-bold">
              <tr>
                <th class="p-2 border">Support Category</th>
                <th class="p-2 border">Contact Person / Institution</th>
                <th class="p-2 border">Phone Numbers</th>
                <th class="p-2 border">Email Address</th>
                <th class="p-2 border">Operational Hours</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="p-2 border font-semibold">Technical / Application Help</td>
                <td class="p-2 border">Helpdesk Support Desk</td>
                <td class="p-2 border font-mono">08448573939</td>
                <td class="p-2 border font-mono">Support@upessc.org</td>
                <td class="p-2 border">09:30 AM – 06:00 PM (Mon-Sat)</td>
              </tr>
              <tr>
                <td class="p-2 border font-semibold">ICICI Bank Payment Help</td>
                <td class="p-2 border">Amita Kurmi / Pawan Si</td>
                <td class="p-2 border font-mono">8879370946, 8657723283</td>
                <td class="p-2 border font-mono">Amita.kurmi@icici.bank.in<br/>Pawan.si@icici.bank.in</td>
                <td class="p-2 border">09:30 AM – 06:30 PM (Working Days)</td>
              </tr>
              <tr>
                <td class="p-2 border font-semibold">Union Bank / BillDesk Payment</td>
                <td class="p-2 border">BillDesk Gateway Helpdesk</td>
                <td class="p-2 border font-mono">9137551970</td>
                <td class="p-2 border font-mono">pgsupport@billdesk.com</td>
                <td class="p-2 border">09:30 AM – 06:30 PM</td>
              </tr>
              <tr>
                <td class="p-2 border font-semibold">UPESSC Commission Desk</td>
                <td class="p-2 border">23 Allengunj, Prayagraj</td>
                <td class="p-2 border font-mono">0532-2466851</td>
                <td class="p-2 border font-mono">upmsscball@gmail.com</td>
                <td class="p-2 border">10:00 AM – 05:00 PM (Mon-Sat)</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 47,
      title: '47. Prescribed Official Certificates & Proformas (Appendices 1-5)',
      badge: 'Proformas',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <p>Official formats issued with the notification must be adhered to strictly:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Appendix 1 (परिशिष्ट 1):</strong> SC / ST Caste Certificate Proforma.</li>
            <li><strong>Appendix 2 (परिशिष्ट 2):</strong> OBC Caste Certificate Proforma (confirming non-creamy layer &amp; &le; ₹8 Lakh annual income).</li>
            <li><strong>Appendix 3 (परिशिष्ट 3):</strong> Economically Weaker Section (EWS) Income &amp; Asset Certificate and Self-Declaration form.</li>
            <li><strong>Appendix 4 (परिशिष्ट 4):</strong> Dependent of Freedom Fighter (DFF) Certificate Proforma.</li>
            <li><strong>Appendix 5 (परिशिष्ट 5):</strong> Disability Certificate (Medical Board) Proforma with functional requirement assessment.</li>
          </ul>
        </div>
      `
    },
    {
      id: 48,
      title: '48. Important Do’s and Don’ts for Examinees',
      badge: 'Exam Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
              <strong class="text-emerald-950 font-bold block mb-1">DO's:</strong>
              <ul class="list-disc pl-4 space-y-1 text-emerald-900">
                <li>Register OTR and apply before the deadline (04.10.2026).</li>
                <li>Bring a Black Ballpoint Pen and printed Admit Card with valid Government Photo ID.</li>
                <li>Reach the exam center at least 60 minutes before scheduled start time.</li>
                <li>Accurately darken roll number and question booklet series code on the OMR sheet.</li>
              </ul>
            </div>
            <div class="p-3 bg-red-50 border border-red-200 rounded-xl">
              <strong class="text-red-950 font-bold block mb-1">DON'Ts:</strong>
              <ul class="list-disc pl-4 space-y-1 text-red-900">
                <li>Do NOT carry mobile phones, smartwatches, calculators, or electronic gadgets.</li>
                <li>Do NOT use whitener, eraser, blade, or pencil on the OMR sheet.</li>
                <li>Do NOT enter multiple marks for a single question.</li>
                <li>Do NOT leave the examination hall before handing over the original OMR sheet.</li>
              </ul>
            </div>
          </div>
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
              <strong class="text-slate-900">Q1: Who is required to appear in UP Special TET 2026?</strong>
              <p class="mt-1">All serving primary and upper primary teachers in state, aided, and local body schools in UP who have not cleared TET, plus contractual and daily-wage Special Educators (CWSN).</p>
            </div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-900">Q2: Is there negative marking in Special TET?</strong>
              <p class="mt-1">No. There is <strong>no negative marking</strong>. Each correct answer carries 1 mark.</p>
            </div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-900">Q3: What are the passing marks?</strong>
              <p class="mt-1">General candidates must score at least 60% (90 marks out of 150). SC, ST, OBC, EWS, and Divyangjan candidates must score at least 55% (82 marks out of 150).</p>
            </div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-900">Q4: What is the maximum age for Special Educators?</strong>
              <p class="mt-1">Maximum 60 years as on the examination date (03 November 2026).</p>
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
          <p><strong>Official Disclaimer:</strong> This portal provides organized information based exclusively on the official recruitment advertisement (Advt. No. 03/2026) issued by the <strong>Uttar Pradesh Education Service Selection Commission (UPESSC), Prayagraj</strong>.</p>
          <p>Candidates are advised to periodically verify updates, notifications, and press releases on the official Commission portal <a href="https://www.upessc.up.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://www.upessc.up.gov.in/</a> and application website <a href="https://apply.upessc.org/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://apply.upessc.org/</a>.</p>
          <p class="text-[11px] text-slate-500">RajDailyTools is an educational informational portal designed to assist government job aspirants with real-time alerts, resizer tools, and age calculators.</p>
        </div>
      `
    }
  ];
}

export const UP_SPECIAL_TET_2026_EXAM: ExamRecord = {
  id: 'up-special-tet-2026',
  slug: 'up-special-tet-online-form-2026',
  examName: 'UP Special TET Online Form 2026',
  postName: 'Special Teacher / Assistant Teacher (Primary & Upper Primary Level)',
  organization: 'Uttar Pradesh Education Service Selection Commission (UPESSC)',
  category: 'Teaching',
  state: 'Uttar Pradesh',
  totalVacancy: '2,500+ / In-Service Teachers',
  applicationStartDate: '2026-09-05',
  applicationLastDate: '2026-10-04',
  examDate: '2026-11-03',
  status: 'APPLICATION_OPEN',
  education: ['Graduation', 'Diploma', 'Other'],
  acceptedQualificationLevels: ['Graduation', 'Diploma', 'Other', 'Post Graduation'],
  higherQualificationAccepted: true,
  ageMin: 18,
  ageMax: 60,
  ageRelaxationInfo: 'Maximum age up to 60 Years for contractual/daily-wage Special Educators as on 03.11.2026',
  gender: 'All',
  logoIcon: '🎓',
  officialWebsite: 'https://www.upessc.up.gov.in/',
  officialNotification: 'https://www.upessc.up.gov.in/Notice/badc-2f84-4983-44c3-12bf.pdf',
  applyLink: 'https://apply.upessc.org/',
  mockTestLink: 'https://apply.upessc.org/',
  description: 'UPESSC Prayagraj has released the official notification (Advt. 03/2026) for Special Teacher Eligibility Test (Special TET) 2026 for Primary (Classes 1-5) and Upper Primary (Classes 6-8) in-service teachers & CWSN special educators.',
  shortSummary: 'UPESSC Prayagraj has invited online applications for Special Teacher Eligibility Test (Special TET) 2026 under Advt. No. 03/2026 pursuant to Hon’ble Supreme Court orders in Civil Appeal No. 1385/2025 and Writ Petition No. 132/2016.',
  importantDates: [
    { label: 'Notification Issued', date: '03 September 2026' },
    { label: 'Online OTR & Application Start', date: '05 September 2026', isHighlight: true },
    { label: 'Last Date for Online Fee & Form Submit', date: '04 October 2026', isHighlight: true },
    { label: 'Last Date for Online Form Correction', date: '08 October 2026' },
    { label: 'Exam District Intimation', date: '10 Days Prior to Exam (approx. 24 October 2026)' },
    { label: 'Admit Card Download Starts', date: '3 Days Prior to Exam (31 October 2026)' },
    { label: 'Special TET Examination Date', date: '03 November 2026', isHighlight: true }
  ],
  applicationFee: [
    { category: 'General / OBC / EWS (Per Level)', amount: '₹1,000.00' },
    { category: 'SC / ST (Per Level)', amount: '₹500.00' },
    { category: 'Divyangjan (PH) (Per Level)', amount: '₹300.00' }
  ],
  selectionProcess: [
    'Stage 1: One-Time Registration (OTR) and Online Form Submission with eHRMS or CRR Number',
    'Stage 2: Pen-Paper OMR Written Examination (150 MCQs, 150 Marks, 150 Minutes, Bilingual, No Negative Marking)',
    'Stage 3: Normalization (if held in multi-shift) and Merit Evaluation (General 60% / Reserved 55%)',
    'Stage 4: Declaration of Qualified Candidates & Issuance of Lifetime TET Eligibility Certificate'
  ],
  examPattern: [
    {
      stageName: 'Primary Level (Classes 1 to 5) - OMR Based',
      mode: 'Offline (Pen-Paper OMR Sheet)',
      duration: '2 Hours 30 Minutes (150 Minutes)',
      negativeMarking: 'NO Negative Marking (1 mark per correct answer)',
      subjects: [
        { name: 'Child Development & Pedagogy (बाल विकास एवं शिक्षण विधि)', questions: 30, marks: 30 },
        { name: 'Language I: Hindi (भाषा प्रथम - हिन्दी)', questions: 30, marks: 30 },
        { name: 'Language II: English / Urdu / Sanskrit (भाषा द्वितीय)', questions: 30, marks: 30 },
        { name: 'Mathematics (गणित)', questions: 30, marks: 30 },
        { name: 'Environmental Studies (पर्यावरणीय अध्ययन)', questions: 30, marks: 30 }
      ]
    },
    {
      stageName: 'Upper Primary Level (Classes 6 to 8) - OMR Based',
      mode: 'Offline (Pen-Paper OMR Sheet)',
      duration: '2 Hours 30 Minutes (150 Minutes)',
      negativeMarking: 'NO Negative Marking (1 mark per correct answer)',
      subjects: [
        { name: 'Child Development & Pedagogy (बाल विकास एवं शिक्षण विधि)', questions: 30, marks: 30 },
        { name: 'Language I: Hindi (भाषा प्रथम - हिन्दी)', questions: 30, marks: 30 },
        { name: 'Language II: English / Urdu / Sanskrit (भाषा द्वितीय)', questions: 30, marks: 30 },
        { name: 'Subject Stream (Maths & Science / Social Studies / Other)', questions: 60, marks: 60 }
      ]
    }
  ],
  salary: {
    payScale: 'As per Uttar Pradesh Basic & Secondary Education Pay Scale Rules',
    inHand: 'Regular Teaching Scale on absorption / contractual remuneration as per state norms',
    allowances: 'DA, HRA, and state education employee benefits upon regular appointment'
  },
  faq: [
    {
      q: 'Who is required to take UP Special TET 2026?',
      a: 'All in-service teachers working in state, aided, and local body schools in UP who need to clear TET before 31.08.2028 under Hon’ble Supreme Court orders, plus approximately 2,500 CWSN Special Educators.'
    },
    {
      q: 'What is the last date to apply for UP Special TET 2026?',
      a: 'The last date for fee payment and submission is 04 October 2026. The online correction window closes on 08 October 2026.'
    },
    {
      q: 'What are the passing qualifying marks?',
      a: 'General (UR) candidates need 60% (90 marks out of 150). SC, ST, OBC, EWS, DFF, ESM, and Divyangjan candidates need 55% (82 marks out of 150).'
    },
    {
      q: 'Is there any negative marking in UP Special TET 2026?',
      a: 'No. There is no negative marking in either Primary Level or Upper Primary Level.'
    },
    {
      q: 'What is the maximum age limit for Special Educators?',
      a: 'Contractual and daily-wage Special Educators can apply up to 60 years of age as on the exam date (03.11.2026).'
    }
  ],
  allInformation: generateUpSpecialTet50Sections()
};

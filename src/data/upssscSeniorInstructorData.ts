import { ExamRecord, ExamInfoSection } from '../types/exam';

export function generateUpssscSeniorInstructor50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. Recruitment Overview',
      badge: 'Overview',
      content: `
        <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The <strong>Uttar Pradesh Subordinate Services Selection Commission (UPSSSC), Lucknow</strong> has officially notified recruitment for <strong>132 Vacancies</strong> of <strong>Senior Instructor (ज्येष्ठ अनुदेशक)</strong> under the control of the Director General, Deen Dayal Upadhyaya State Rural Development Institute (दीनदयाल उपाध्याय राज्य ग्राम्य विकास संस्थान), Bakshi Ka Talab, Lucknow.</p>
          <p>This prestigious Group-C recruitment is being conducted through <strong>Advertisement No. 21-Exam/2026 (विज्ञापन संख्या-21-परीक्षा/2026)</strong> — State Rural Development Institute (Senior Instructor Cadre) Main Examination (PET-2025)/21 [राज्य ग्राम्य विकास संस्थान (ज्येष्ठ अनुदेशक संवर्ग) मुख्य परीक्षा (प्रा०अ०प०-2025)/21].</p>
          
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Recruitment Parameter</th><th class="p-2.5 border border-slate-200">Official Specification (Advt. 21-Exam/2026)</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">Exam Conducting Body</td><td class="p-2.5">Uttar Pradesh Subordinate Services Selection Commission (UPSSSC), Pickup Bhawan, Lucknow</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Advertisement Number</td><td class="p-2.5 font-mono font-bold text-blue-700">21-Exam/2026 (21-परीक्षा/2026)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Department / Institute</td><td class="p-2.5">Deen Dayal Upadhyaya State Rural Development Institute (राज्य ग्राम्य विकास संस्थान), Bakshi Ka Talab, Lucknow</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Post Name</td><td class="p-2.5 font-bold text-slate-900">Senior Instructor (ज्येष्ठ अनुदेशक) – 13 Subject Disciplines</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Total Vacancies</td><td class="p-2.5 font-bold text-emerald-700">132 Posts (All Permanent / स्थायी)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Mandatory Prerequisite</td><td class="p-2.5 font-semibold text-blue-800">Valid UPSSSC Preliminary Eligibility Test (PET-2025) Scorecard (Positive Score > 0)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Pay Scale &amp; Level</td><td class="p-2.5 font-bold text-slate-900">Pay Matrix Level-6 (₹35,400 – ₹1,12,400)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Application Mode</td><td class="p-2.5 font-semibold text-emerald-700">100% Online via upssc.gov.in (Applicant Authentication via PET-2025 Reg No.)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Online Processing Fee</td><td class="p-2.5 font-semibold">₹25/- (All Categories for Stage 1 application)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Official Website</td><td class="p-2.5"><a href="https://upsssc.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline">upsssc.gov.in</a></td></tr>
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
            <span class="font-bold text-emerald-950 block text-sm">Official Notification Published on 10.09.2026</span>
            <p class="text-emerald-900 mt-1">UPSSSC has formally released the official detailed advertisement (Advt. No. 21-Exam/2026) for 132 Senior Instructor posts across 13 disciplines in Deen Dayal Upadhyaya State Rural Development Institute. Online registration, fee payment, and form submission begin on <strong>14 September 2026</strong>. Candidates can submit their applications online until <strong>05 October 2026</strong>.</p>
          </div>
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950">
            <strong>Key Milestone:</strong> The official written examination syllabus and pattern have also been notified in the main notification under Prastar-9. Candidates will face 100 objective MCQs in 120 minutes with 1/4th (25%) negative marking.
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
          <p>Candidates must carefully observe all official milestone dates established by UPSSSC in Advt. No. 21-Exam/2026:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Recruitment Event</th><th class="p-2.5 border border-slate-200">Official Date</th><th class="p-2.5 border border-slate-200">Status</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">Notification Publication Date</td><td class="p-2.5 font-bold">10-09-2026</td><td class="p-2.5 text-emerald-700 font-bold">Published</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Online Registration / Fee Payment Start Date</td><td class="p-2.5 font-bold text-blue-700">14-09-2026</td><td class="p-2.5 text-blue-700 font-bold">Registration Started</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Online Application &amp; Fee Submission Last Date</td><td class="p-2.5 font-bold text-red-600">05-10-2026</td><td class="p-2.5 text-red-600 font-semibold">Strict Deadline</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Fee Reconciliation &amp; Application Correction Last Date</td><td class="p-2.5 font-bold text-amber-700">12-10-2026</td><td class="p-2.5 text-amber-700 font-semibold">07 Days Grace Window</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">PET-2025 Shortlisting Cut-Off Announcement</td><td class="p-2.5">Not Released / To Be Updated</td><td class="p-2.5 text-slate-500">Post-Application Phase</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Main Examination Fee Payment Window</td><td class="p-2.5">Not Released / To Be Updated</td><td class="p-2.5 text-slate-500">For Shortlisted Candidates Only</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Admit Card Release Date</td><td class="p-2.5">Not Released / To Be Updated</td><td class="p-2.5 text-slate-500">Expected 7-10 Days Prior to Exam</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Written Examination Date</td><td class="p-2.5">Not Released / To Be Updated</td><td class="p-2.5 text-slate-500">Will be notified separately by UPSSSC</td></tr>
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
        <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Advt. No. 21-Exam/2026, a total of <strong>132 permanent posts</strong> have been requisitioned across 13 discipline categories under Deen Dayal Upadhyaya State Rural Development Institute, Bakshi Ka Talab, Lucknow. The vertical reservation breakdown is as follows:</p>
          
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr>
                  <th class="p-2.5 border border-slate-200">Category</th>
                  <th class="p-2.5 border border-slate-200">Vertical Reservation</th>
                  <th class="p-2.5 border border-slate-200">Total Posts</th>
                  <th class="p-2.5 border border-slate-200">Nature of Post</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">Unreserved (UR / अनारक्षित)</td><td class="p-2.5">Open Category</td><td class="p-2.5 font-bold text-slate-900">58</td><td class="p-2.5 text-emerald-700 font-semibold">स्थायी (Permanent)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Scheduled Caste (SC / अनुसूचित जाति)</td><td class="p-2.5">UP Domicile SC</td><td class="p-2.5 font-bold text-slate-900">29</td><td class="p-2.5 text-emerald-700 font-semibold">स्थायी (Permanent)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Scheduled Tribe (ST / अनुसूचित जनजाति)</td><td class="p-2.5">UP Domicile ST</td><td class="p-2.5 font-bold text-slate-900">00</td><td class="p-2.5 text-emerald-700 font-semibold">स्थायी (Permanent)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Other Backward Classes (OBC / अन्य पिछड़ा वर्ग)</td><td class="p-2.5">UP Domicile Non-Creamy Layer</td><td class="p-2.5 font-bold text-slate-900">35</td><td class="p-2.5 text-emerald-700 font-semibold">स्थायी (Permanent)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Economically Weaker Sections (EWS / आर्थिक रूप से कमजोर वर्ग)</td><td class="p-2.5">10% Statutory UP Quota</td><td class="p-2.5 font-bold text-slate-900">10</td><td class="p-2.5 text-emerald-700 font-semibold">स्थायी (Permanent)</td></tr>
                <tr class="bg-blue-50 font-bold text-slate-900"><td class="p-2.5 border border-slate-200" colspan="2">Total Requisitioned Vacancies</td><td class="p-2.5 border border-slate-200 text-blue-700 text-sm">132</td><td class="p-2.5 border border-slate-200 text-emerald-700">Permanent (स्थायी)</td></tr>
              </tbody>
            </table>
          </div>
          
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
            <strong>Horizontal Reservation Summary (सारिणी-2):</strong>
            <ul class="list-disc pl-5 mt-1.5 space-y-1 text-slate-600">
              <li><strong>Women (महिला):</strong> 20 posts allocated proportionately across notified cadres.</li>
              <li><strong>Ex-Servicemen (सैन्य वियोजित / भूतपूर्व सैनिक):</strong> 01 post in Agricultural Engineering.</li>
              <li><strong>Divyangjan (दिव्यांगजन / PwD):</strong> 02 posts in Agricultural Engineering (Low Vision - 01; Hard of Hearing - 01).</li>
              <li><strong>Dependents of Freedom Fighters (DFF):</strong> 00 posts (nil).</li>
              <li><strong>Outstanding Sportspersons (उत्कृष्ट खिलाड़ी):</strong> 00 posts (nil).</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 5,
      title: '5. Post-Wise Vacancy',
      badge: 'Cadre Breakdown',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The complete official breakdown of all 132 posts across the 13 Senior Instructor disciplines in Deen Dayal Upadhyaya State Rural Development Institute (सारिणी-1) is provided below:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr>
                  <th class="p-2 border border-slate-200">Sl.</th>
                  <th class="p-2 border border-slate-200">Post Discipline (पदनाम)</th>
                  <th class="p-2 border border-slate-200">Pay Level</th>
                  <th class="p-2 border border-slate-200">UR</th>
                  <th class="p-2 border border-slate-200">SC</th>
                  <th class="p-2 border border-slate-200">ST</th>
                  <th class="p-2 border border-slate-200">OBC</th>
                  <th class="p-2 border border-slate-200">EWS</th>
                  <th class="p-2 border border-slate-200">Total</th>
                  <th class="p-2 border border-slate-200">Type</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2 text-center">1</td><td class="p-2 font-semibold text-slate-900">Senior Instructor (Agricultural Engineering / कृषि अभियंत्रण)</td><td class="p-2">Level-6</td><td class="p-2">12</td><td class="p-2">06</td><td class="p-2">00</td><td class="p-2">09</td><td class="p-2">03</td><td class="p-2 font-bold text-blue-700">30</td><td class="p-2">स्थायी</td></tr>
                <tr><td class="p-2 text-center">2</td><td class="p-2 font-semibold text-slate-900">Senior Instructor (Plant Protection / पौध संरक्षण)</td><td class="p-2">Level-6</td><td class="p-2">07</td><td class="p-2">04</td><td class="p-2">00</td><td class="p-2">04</td><td class="p-2">01</td><td class="p-2 font-bold text-blue-700">16</td><td class="p-2">स्थायी</td></tr>
                <tr><td class="p-2 text-center">3</td><td class="p-2 font-semibold text-slate-900">Senior Instructor (Horticulture Science / उद्यान विज्ञान)</td><td class="p-2">Level-6</td><td class="p-2">07</td><td class="p-2">04</td><td class="p-2">00</td><td class="p-2">04</td><td class="p-2">01</td><td class="p-2 font-bold text-blue-700">16</td><td class="p-2">स्थायी</td></tr>
                <tr><td class="p-2 text-center">4</td><td class="p-2 font-semibold text-slate-900">Senior Instructor (Animal Husbandry / पशुपालन)</td><td class="p-2">Level-6</td><td class="p-2">10</td><td class="p-2">00</td><td class="p-2">00</td><td class="p-2">03</td><td class="p-2">01</td><td class="p-2 font-bold text-blue-700">14</td><td class="p-2">स्थायी</td></tr>
                <tr><td class="p-2 text-center">5</td><td class="p-2 font-semibold text-slate-900">Senior Instructor (Agronomy / सस्य विज्ञान)</td><td class="p-2">Level-6</td><td class="p-2">05</td><td class="p-2">03</td><td class="p-2">00</td><td class="p-2">03</td><td class="p-2">01</td><td class="p-2 font-bold text-blue-700">12</td><td class="p-2">स्थायी</td></tr>
                <tr><td class="p-2 text-center">6</td><td class="p-2 font-semibold text-slate-900">Senior Instructor (Women Welfare / महिला कल्याण)</td><td class="p-2">Level-6</td><td class="p-2">06</td><td class="p-2">01</td><td class="p-2">00</td><td class="p-2">02</td><td class="p-2">00</td><td class="p-2 font-bold text-blue-700">09</td><td class="p-2">स्थायी</td></tr>
                <tr><td class="p-2 text-center">7</td><td class="p-2 font-semibold text-slate-900">Senior Instructor (Co-operation / सहकारिता)</td><td class="p-2">Level-6</td><td class="p-2">04</td><td class="p-2">02</td><td class="p-2">00</td><td class="p-2">02</td><td class="p-2">00</td><td class="p-2 font-bold text-blue-700">08</td><td class="p-2">स्थायी</td></tr>
                <tr><td class="p-2 text-center">8</td><td class="p-2 font-semibold text-slate-900">Senior Instructor (Panchayat / पंचायत)</td><td class="p-2">Level-6</td><td class="p-2">04</td><td class="p-2">02</td><td class="p-2">00</td><td class="p-2">02</td><td class="p-2">00</td><td class="p-2 font-bold text-blue-700">08</td><td class="p-2">स्थायी</td></tr>
                <tr><td class="p-2 text-center">9</td><td class="p-2 font-semibold text-slate-900">Senior Instructor (Soil Science / मृदा विज्ञान)</td><td class="p-2">Level-6</td><td class="p-2">04</td><td class="p-2">02</td><td class="p-2">00</td><td class="p-2">02</td><td class="p-2">00</td><td class="p-2 font-bold text-blue-700">08</td><td class="p-2">स्थायी</td></tr>
                <tr><td class="p-2 text-center">10</td><td class="p-2 font-semibold text-slate-900">Senior Instructor (Agriculture / कृषि)</td><td class="p-2">Level-6</td><td class="p-2">01</td><td class="p-2">00</td><td class="p-2">00</td><td class="p-2">00</td><td class="p-2">00</td><td class="p-2 font-bold text-blue-700">01</td><td class="p-2">स्थायी</td></tr>
                <tr><td class="p-2 text-center">11</td><td class="p-2 font-semibold text-slate-900">Senior Instructor (Agricultural Extension / कृषि प्रसार)</td><td class="p-2">Level-6</td><td class="p-2">03</td><td class="p-2">01</td><td class="p-2">00</td><td class="p-2">01</td><td class="p-2">00</td><td class="p-2 font-bold text-blue-700">05</td><td class="p-2">स्थायी</td></tr>
                <tr><td class="p-2 text-center">12</td><td class="p-2 font-semibold text-slate-900">Senior Instructor (Public Health / सार्वजनिक स्वास्थ्य)</td><td class="p-2">Level-6</td><td class="p-2">03</td><td class="p-2">00</td><td class="p-2">00</td><td class="p-2">00</td><td class="p-2">00</td><td class="p-2 font-bold text-blue-700">03</td><td class="p-2">स्थायी</td></tr>
                <tr><td class="p-2 text-center">13</td><td class="p-2 font-semibold text-slate-900">Senior Instructor (Production / उत्पादन)</td><td class="p-2">Level-6</td><td class="p-2">01</td><td class="p-2">00</td><td class="p-2">00</td><td class="p-2">01</td><td class="p-2">00</td><td class="p-2 font-bold text-blue-700">02</td><td class="p-2">स्थायी</td></tr>
                <tr class="bg-blue-100 font-bold text-slate-900"><td class="p-2 text-center" colspan="3">Grand Total (कुल पद)</td><td class="p-2">58</td><td class="p-2">29</td><td class="p-2">00</td><td class="p-2">35</td><td class="p-2">10</td><td class="p-2 font-bold text-blue-800 text-sm">132</td><td class="p-2">Permanent</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 6,
      title: '6. Department/Institute',
      badge: 'Controlling Authority',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The requisitioning and appointing department for all notified positions is the <strong>Director General, Deen Dayal Upadhyaya State Rural Development Institute (महानिदेशक, दीनदयाल उपाध्याय राज्य ग्राम्य विकास संस्थान), Bakshi Ka Talab, Lucknow</strong>, Government of Uttar Pradesh.</p>
          <p>This apex institute is responsible for capacity building, specialized training, empirical research, and policy extension for rural development officers, panchayat functionaries, women self-help groups, and agricultural stakeholders across the state.</p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
            <p><strong>Cadre Rules:</strong> Uttar Pradesh Rural Development (Extension Training Scheme) Subordinate Service Rules, 1987 (as amended in 1992 and government orders dated 25.10.2024).</p>
            <p><strong>Appointment Character:</strong> All 132 posts are permanent Group-C gazetted/non-gazetted state service posts with pension/NPS benefits under Government of UP.</p>
          </div>
        </div>
      `
    },
    {
      id: 7,
      title: '7. Application Start Date',
      badge: 'Registration Opened',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Online registration and application submission formally commenced on <strong>14 September 2026</strong> through the official UPSSSC portal at <a href="https://upsssc.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline">upsssc.gov.in</a>.</p>
          <p>Eligible candidates can authenticate directly using their <strong>PET-2025 Registration Number</strong> via Mobile/Email OTP or Personal Details verification.</p>
        </div>
      `
    },
    {
      id: 8,
      title: '8. Last Date',
      badge: 'Application Cutoff',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The closing date for online registration, fee payment, and final application submission is <strong>05 October 2026 (11:59 PM)</strong>.</p>
          <div class="p-3 bg-red-50 border border-red-200 rounded-xl text-red-900">
            <strong>Strict Warning:</strong> UPSSSC does not entertain any physical or offline applications. Post 05 October 2026, the online application gateway will be deactivated. Candidates must ensure all requisite qualification certificates and domicile/EWS documents are acquired on or before this closing date.
          </div>
        </div>
      `
    },
    {
      id: 9,
      title: '9. Fee Payment',
      badge: 'Payment Window',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Fee payment can be completed online using <strong>Debit Card, Credit Card, Internet Banking, UPI, or State Bank of India (SBI) e-Challan</strong> on the official portal.</p>
          <p>In case of bank transaction latency or server delay where the payment status remains pending, candidates can resolve it via the <strong>Applicant Segment &rarr; "Update Your Transaction ID by Double Verification"</strong> link on upssc.gov.in.</p>
        </div>
      `
    },
    {
      id: 10,
      title: '10. Correction/Modification',
      badge: 'Correction Window',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Clause 3 and the Special Note in the notification, candidates who have successfully submitted their online application can modify permissible fields up to <strong>12 October 2026</strong>.</p>
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-950">
            <span class="font-bold block mb-1">Permissible Fields for Correction via OTP Login:</span>
            <ul class="list-disc pl-5 space-y-1 text-amber-900 text-xs">
              <li>Mailing Address / Correspondence Address (पत्राचार का पता)</li>
              <li>Personal Details such as EWS category &amp; Horizontal Reservation sub-categories (D.F.F., Divyang/PH, Ex-Servicemen, Outstanding Sportsperson)</li>
              <li>Gender (लिंग)</li>
              <li>Details of Essential / Preferential Educational Qualifications</li>
              <li>Marital Status (वैवाहिक स्थिति)</li>
            </ul>
            <p class="mt-2 text-xs font-semibold text-red-700">Note: Name spelling, Father's/Mother's name, Domicile status, Category (UR/SC/ST/OBC), and Mobile/Email fetched directly from PET-2025 cannot be modified.</p>
          </div>
        </div>
      `
    },
    {
      id: 11,
      title: '11. Exam Date',
      badge: 'Written Exam',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The exact date for the Senior Instructor Main Examination (Advt. 21-Exam/2026) is <strong>Not Released / To Be Updated</strong> by the Commission.</p>
          <p>UPSSSC will publish an official examination calendar and date notification on <a href="https://upsssc.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline">upsssc.gov.in</a> following the completion of PET-2025 shortlisting.</p>
        </div>
      `
    },
    {
      id: 12,
      title: '12. Admit Card',
      badge: 'Hall Ticket',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Admit Cards for shortlisted applicants will be published on the UPSSSC portal approximately <strong>7 to 10 days before the written examination</strong>. Only candidates who clear the PET-2025 shortlisting cutoff and pay the Main Exam fee will be permitted to download their hall tickets.</p>
          <p class="text-slate-500">Status: <strong>Not Released / To Be Updated</strong></p>
        </div>
      `
    },
    {
      id: 13,
      title: '13. Result',
      badge: 'Merit & Scorecard',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The written examination result and category-wise cut-off marks for document verification will be published on upssc.gov.in following the conclusion of the objection redressal process for provisional answer keys.</p>
          <p class="text-slate-500">Status: <strong>Not Released / To Be Updated</strong></p>
        </div>
      `
    },
    {
      id: 14,
      title: '14. Age Limit',
      badge: 'Age Criteria',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Clause 7 of Advt. No. 21-Exam/2026 and applicable service rules, candidate age criteria are measured with reference to the crucial date of <strong>01 July 2026 (1 जुलाई 2026)</strong>:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Parameter</th><th class="p-2.5 border border-slate-200">Official Requirement</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">Crucial Cutoff Date for Age</td><td class="p-2.5 font-bold text-blue-700">01 July 2026 (01-07-2026)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Minimum Age Limit</td><td class="p-2.5 font-bold">21 Years (Attained 21 years on 01.07.2026)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Maximum Age Limit (Unreserved)</td><td class="p-2.5 font-bold">40 Years (Not attained 40+ years on 01.07.2026)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Candidate Date of Birth Bracket</td><td class="p-2.5">Born not earlier than <strong>02 July 1986</strong> and not later than <strong>01 July 2005</strong></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 15,
      title: '15. Age Relaxation',
      badge: 'Relaxation Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Age relaxation is applicable solely to permanent domicile residents of Uttar Pradesh as per Government of UP rules and orders (Clause 11.02 to 11.11):</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Category / Candidate Class</th><th class="p-2.5 border border-slate-200">Upper Age Relaxation</th><th class="p-2.5 border border-slate-200">Maximum Age Ceiling</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">SC / ST of Uttar Pradesh</td><td class="p-2.5 font-bold text-emerald-700">5 Years</td><td class="p-2.5">45 Years</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">OBC (Non-Creamy Layer) of Uttar Pradesh</td><td class="p-2.5 font-bold text-emerald-700">5 Years</td><td class="p-2.5">45 Years</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">In-Service UP State Government Employees</td><td class="p-2.5 font-bold text-emerald-700">5 Years</td><td class="p-2.5">45 Years</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Divyangjan (Persons with Disabilities - PwD) of UP</td><td class="p-2.5 font-bold text-emerald-700">15 Years</td><td class="p-2.5">55 Years</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Ex-Servicemen (सैन्य वियोजित / भूतपूर्व सैनिक)</td><td class="p-2.5">3 Years after deduction of military service from actual age</td><td class="p-2.5">As per government rules</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Outstanding Sportspersons of UP</td><td class="p-2.5 font-bold text-emerald-700">5 Years</td><td class="p-2.5">45 Years</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Other States Candidates (Non-UP)</td><td class="p-2.5 text-red-600 font-semibold">No Relaxation (Treated as General / Unreserved)</td><td class="p-2.5">40 Years</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 16,
      title: '16. PET-2025 Eligibility',
      badge: 'Mandatory Gateway',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 1 of Advt. No. 21-Exam/2026, <strong>only candidates who appeared in UPSSSC Preliminary Eligibility Test-2025 (PET-2025)</strong> and have been issued a valid score card with <strong>positive (non-zero and non-negative) normalized marks</strong> are eligible to apply.</p>
          <div class="p-3 bg-red-50 border border-red-200 rounded-xl text-red-900 text-xs leading-relaxed">
            <strong>Barred from Shortlisting:</strong> Candidates with an Absolute Score or Normalized Score of zero (0) or negative (&lt; 0) in PET-2025 are strictly disqualified from being shortlisted for the Main Written Examination.
          </div>
          <p>Candidates under investigation (Under Investigation - UI) or provisional status in PET-2025 results are permitted to apply provisionally, subject to final outcome of the Commission's inquiry.</p>
        </div>
      `
    },
    {
      id: 17,
      title: '17. Educational Qualification',
      badge: 'Academic Criteria',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>All educational qualifications must be acquired on or before the closing date of application: <strong>05 October 2026</strong>. Qualifications vary according to the specific Senior Instructor discipline (detailed in Section 18 below).</p>
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 text-xs">
            <strong>General Statutory Benchmark:</strong>
            <ul class="list-disc pl-5 mt-1 space-y-1 text-blue-900">
              <li>Most Agricultural and Allied disciplines require a <strong>Bachelor's degree with minimum 50% marks</strong> in the relevant discipline.</li>
              <li>Specific posts like Agriculture Instructor (Sl. 10) require a <strong>Master's degree in Agriculture with minimum 55% marks</strong>.</li>
              <li>Sanitary Inspector qualification requires <strong>Graduation + State Govt recognized Sanitary Inspector Certificate</strong>.</li>
              <li>Production Instructor (Sl. 13) allows either <strong>B.E./B.Tech or Diploma with 2 years experience</strong>.</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 18,
      title: '18. Post-Wise Eligibility',
      badge: 'Discipline Criteria',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The complete official essential and preferential qualification standards extracted directly from <strong>Prastar-6 (अर्हता)</strong> of Advt. No. 21-Exam/2026 are detailed below:</p>
          
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr>
                  <th class="p-2 border border-slate-200">Post (Discipline)</th>
                  <th class="p-2 border border-slate-200">Mandatory Essential Qualification (अनिवार्य अर्हता)</th>
                  <th class="p-2 border border-slate-200">Preferential Qualification (अधिमानी अर्हता)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr>
                  <td class="p-2 font-bold text-slate-900">1. Agricultural Engineering (कृषि अभियंत्रण)<br/><span class="text-[10px] text-blue-700 font-normal">30 Posts</span></td>
                  <td class="p-2">Bachelor's Degree in Agricultural Engineering (कृषि अभियान्त्रिकी में स्नातक) with minimum <strong>50% marks</strong>.</td>
                  <td class="p-2 text-slate-600">3 years teaching/extension experience in engineering or agricultural implements manufacturing; 2 yrs Territorial Army; NCC 'B' Certificate.</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-slate-900">2. Plant Protection (पौध संरक्षण)<br/><span class="text-[10px] text-blue-700 font-normal">16 Posts</span></td>
                  <td class="p-2">B.Sc. in Agriculture (बी०एस०सी० कृषि) with minimum <strong>50% marks</strong>.</td>
                  <td class="p-2 text-slate-600">Post-graduation in Entomology / Plant Pathology; 3 years teaching/training/extension experience; Territorial Army 2 yrs; NCC 'B' Certificate.</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-slate-900">3. Horticulture Science (उद्यान विज्ञान)<br/><span class="text-[10px] text-blue-700 font-normal">16 Posts</span></td>
                  <td class="p-2">B.Sc. in Agriculture (बी०एस०सी० कृषि) with minimum <strong>50% marks</strong>.</td>
                  <td class="p-2 text-slate-600">Post-graduation in Horticulture (उद्यान विज्ञान में स्नातकोत्तर); 3 years teaching/training/extension experience; Territorial Army 2 yrs; NCC 'B' Certificate.</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-slate-900">4. Animal Husbandry (पशुपालन)<br/><span class="text-[10px] text-blue-700 font-normal">14 Posts</span></td>
                  <td class="p-2">B.V.Sc. or B.Sc. in Agriculture with minimum <strong>50% marks</strong>.</td>
                  <td class="p-2 text-slate-600">Post-graduation degree; 3 years teaching/training/extension experience; Territorial Army 2 yrs; NCC 'B' Certificate.</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-slate-900">5. Agronomy (सस्य विज्ञान)<br/><span class="text-[10px] text-blue-700 font-normal">12 Posts</span></td>
                  <td class="p-2">B.Sc. in Agriculture (बी०एस०सी० कृषि) with minimum <strong>50% marks</strong>.</td>
                  <td class="p-2 text-slate-600">Post-graduation in Agronomy / Plant Pathology; 3 years teaching/training/extension experience; Territorial Army 2 yrs; NCC 'B' Certificate.</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-slate-900">6. Women Welfare (महिला कल्याण)<br/><span class="text-[10px] text-blue-700 font-normal">09 Posts</span></td>
                  <td class="p-2">B.Sc. in Home Science / Nutrition / Food Technology with minimum <strong>50% marks</strong>.</td>
                  <td class="p-2 text-slate-600">Post-graduation in Home Science / Sociology / Home Economics / Nutrition; 3 years experience; Territorial Army 2 yrs; NCC 'B' Certificate.</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-slate-900">7. Co-operation (सहकारिता)<br/><span class="text-[10px] text-blue-700 font-normal">08 Posts</span></td>
                  <td class="p-2">M.A. (Economics) / M.Sc. (Agricultural Economics) / M.Com. with minimum <strong>50% marks</strong>.</td>
                  <td class="p-2 text-slate-600">3 years teaching/training/extension experience; Territorial Army 2 yrs; NCC 'B' Certificate.</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-slate-900">8. Panchayat (पंचायत)<br/><span class="text-[10px] text-blue-700 font-normal">08 Posts</span></td>
                  <td class="p-2">M.A. in Economics / M.Sc. in Agricultural Economics / M.A. in Sociology with minimum <strong>50% marks</strong>.</td>
                  <td class="p-2 text-slate-600">3 years teaching/training/extension experience; Territorial Army 2 yrs; NCC 'B' Certificate.</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-slate-900">9. Soil Science (मृदा विज्ञान)<br/><span class="text-[10px] text-blue-700 font-normal">08 Posts</span></td>
                  <td class="p-2">B.Sc. in Agriculture (बी०एस०सी० कृषि) with minimum <strong>50% marks</strong>.</td>
                  <td class="p-2 text-slate-600">Post-graduation in Soil Science (मृदा विज्ञान में स्नातकोत्तर); 3 years experience; Territorial Army 2 yrs; NCC 'B' Certificate.</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-slate-900">10. Agriculture (कृषि)<br/><span class="text-[10px] text-blue-700 font-normal">01 Post</span></td>
                  <td class="p-2">Master's Degree in Agriculture (कृषि में स्नातकोत्तर उपाधि) from a recognized university with minimum <strong>55% marks</strong>.</td>
                  <td class="p-2 text-slate-600">Territorial Army 2 yrs; NCC 'B' Certificate.</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-slate-900">11. Agricultural Extension (कृषि प्रसार)<br/><span class="text-[10px] text-blue-700 font-normal">05 Posts</span></td>
                  <td class="p-2">B.Sc. in Agriculture (बी०एस०सी० कृषि) with minimum <strong>50% marks</strong>.</td>
                  <td class="p-2 text-slate-600">Post-graduation in Extension or Agricultural Economics; 3 years teaching/training/extension experience; Territorial Army 2 yrs; NCC 'B' Certificate.</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-slate-900">12. Public Health (सार्वजनिक स्वास्थ्य)<br/><span class="text-[10px] text-blue-700 font-normal">03 Posts</span></td>
                  <td class="p-2">Graduation Degree (स्नातक) from a recognized University AND a State Government recognized <strong>Sanitary Inspector Examination Certificate</strong> (सफाई निरीक्षक परीक्षा प्रमाण-पत्र).</td>
                  <td class="p-2 text-slate-600">Post-graduation + Sanitary Inspector Certificate; 3 years work experience as Sanitary Inspector; Territorial Army 2 yrs; NCC 'B' Certificate.</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-slate-900">13. Production (उत्पादन)<br/><span class="text-[10px] text-blue-700 font-normal">02 Posts</span></td>
                  <td class="p-2">Degree in Agricultural Engineering / Mechanical / Electrical / Civil Engineering OR 3-year Diploma in Agricultural / Mechanical / Electrical / Civil Engineering with <strong>at least 2 years experience</strong>.</td>
                  <td class="p-2 text-slate-600">3 years teaching or extension experience in engineering/farm tools; Territorial Army 2 yrs; NCC 'B' Certificate.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 19,
      title: '19. Experience Requirements',
      badge: 'Experience Norms',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Experience criteria depend on the specific cadre discipline:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-slate-700">
            <li><strong>Mandatory Experience:</strong> For Senior Instructor (Production) via Diploma route — minimum <strong>2 years experience</strong> in the relevant engineering branch is mandatory.</li>
            <li><strong>Preferential Experience (अधिमानी अनुभव):</strong> For disciplines 1 to 9, 11, and 12, having 3 years teaching, training, or extension experience serves as a preferential qualification in case of tie-breaks under Rule 8 and 9.</li>
            <li>For candidates holding a Bachelor's degree in engineering for Production, prior experience is not mandatory for initial eligibility.</li>
          </ul>
        </div>
      `
    },
    {
      id: 20,
      title: '20. Application Fee',
      badge: 'Processing Charges',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>In accordance with Clause 2.12 (सारणी-X) of the notification, at the initial online application stage, all applicants pay only an <strong>Online Processing Fee</strong>:</p>
          
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr>
                  <th class="p-2.5 border border-slate-200">Category (श्रेणी)</th>
                  <th class="p-2.5 border border-slate-200">Application Fee</th>
                  <th class="p-2.5 border border-slate-200">Online Processing Fee</th>
                  <th class="p-2.5 border border-slate-200">Total Payable Amount</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">General / Unreserved (अनारक्षित)</td><td class="p-2.5">₹0.00</td><td class="p-2.5">₹25.00</td><td class="p-2.5 font-bold text-slate-900">₹25.00</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Other Backward Classes (OBC / अन्य पिछड़ा वर्ग)</td><td class="p-2.5">₹0.00</td><td class="p-2.5">₹25.00</td><td class="p-2.5 font-bold text-slate-900">₹25.00</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Scheduled Caste (SC / अनुसूचित जाति)</td><td class="p-2.5">₹0.00</td><td class="p-2.5">₹25.00</td><td class="p-2.5 font-bold text-slate-900">₹25.00</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Scheduled Tribe (ST / अनुसूचित जनजाति)</td><td class="p-2.5">₹0.00</td><td class="p-2.5">₹25.00</td><td class="p-2.5 font-bold text-slate-900">₹25.00</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">EWS / DFF / Ex-Servicemen / Female / Divyangjan</td><td class="p-2.5">₹0.00</td><td class="p-2.5">₹25.00</td><td class="p-2.5 font-bold text-slate-900">₹25.00</td></tr>
              </tbody>
            </table>
          </div>
          
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 text-xs">
            <strong>Main Exam Fee Clause:</strong> Candidates shortlisted for the written examination will have to pay the separate Main Exam examination fee before downloading their written exam admit card as notified by the Commission.
          </div>
        </div>
      `
    },
    {
      id: 21,
      title: '21. Selection Process',
      badge: 'Official Procedure',
      content: `
        <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per UP Group-C Direct Recruitment Rules 2015 and Government Notifications dated 31.08.2017 &amp; 20.11.2020, selection is based purely on merit derived from the <strong>Written Examination</strong>. The interview stage has been completely abolished.</p>
          
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 class="font-bold text-slate-900 mb-2">Sequential Selection Stages:</h4>
            <div class="flex flex-col gap-2 font-medium text-xs">
              <div class="p-2.5 bg-white border border-slate-200 rounded-lg flex items-center justify-between">
                <span><strong>Stage 1:</strong> UPSSSC PET-2025 Normalized Score Screening</span>
                <span class="text-blue-600 font-bold">15x Category Shortlisting</span>
              </div>
              <div class="p-2.5 bg-white border border-slate-200 rounded-lg flex items-center justify-between">
                <span><strong>Stage 2:</strong> Main Written Examination (100 Questions, 100 Marks, 120 Mins)</span>
                <span class="text-blue-600 font-bold">OMR / MCQ Mode</span>
              </div>
              <div class="p-2.5 bg-white border border-slate-200 rounded-lg flex items-center justify-between">
                <span><strong>Stage 3:</strong> Scrutiny of Documents &amp; Post Preference Verification (DV)</span>
                <span class="text-blue-600 font-bold">Original Verification</span>
              </div>
              <div class="p-2.5 bg-white border border-slate-200 rounded-lg flex items-center justify-between">
                <span><strong>Stage 4:</strong> Medical Examination &amp; Final Merit Recommendation</span>
                <span class="text-emerald-700 font-bold">Final Selection</span>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 22,
      title: '22. PET Shortlisting',
      badge: '15-Times Rule',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 10 of Advt. No. 21-Exam/2026, shortlisting for the written examination will be performed on the basis of <strong>Normalized Scores of Preliminary Eligibility Test-2025 (PET-2025)</strong>.</p>
          <div class="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-950">
            <strong>Official 15-Times Formula:</strong>
            <p class="mt-1 text-xs text-blue-900 leading-relaxed">The Commission will shortlist candidates up to <strong>15 times the number of advertised vacancies category-wise</strong>, taking into account all candidates who obtain the cutoff score up to 2 decimal places in the respective category.</p>
          </div>
          <p>Multi-shift normalization will follow Commission Notice No. 42/05/विज्ञा0अनु0(ग्यारह)/2019 dated 22 May 2019 if the exam is held in multiple sessions.</p>
        </div>
      `
    },
    {
      id: 23,
      title: '23. Written Examination',
      badge: 'Main Test',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The written examination will consist of <strong>one single question paper</strong> containing 100 objective-type multiple-choice questions (MCQs) for 100 total marks. The exam will be conducted in offline Pen-Paper (OMR Sheet) format across designated centres in Uttar Pradesh.</p>
        </div>
      `
    },
    {
      id: 24,
      title: '24. Exam Pattern',
      badge: 'Official Blueprint',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The official examination plan approved by the State Government vide letter no. 484/47-का-3-2026 dated 30-06-2026 is structured into 3 parts:</p>
          
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr>
                  <th class="p-2.5 border border-slate-200">Part</th>
                  <th class="p-2.5 border border-slate-200">Subject / Section Title</th>
                  <th class="p-2.5 border border-slate-200 text-center">No. of Questions</th>
                  <th class="p-2.5 border border-slate-200 text-center">Total Marks</th>
                  <th class="p-2.5 border border-slate-200 text-center">Duration</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr>
                  <td class="p-2.5 font-bold" rowspan="2">Part-1</td>
                  <td class="p-2.5 font-semibold">1. Subject-Specific Knowledge related to Rural Development (ग्राम्य विकास से संबंधित विषयगत ज्ञान)</td>
                  <td class="p-2.5 text-center font-bold">50</td>
                  <td class="p-2.5 text-center font-bold">50</td>
                  <td class="p-2.5 text-center font-bold text-blue-700" rowspan="4">2 Hours<br/>(120 Minutes)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">2. Analytical Ability and Data Interpretation (विश्लेषणात्मक क्षमता तथा डाटा इंटरप्रिटेशन)</td>
                  <td class="p-2.5 text-center font-bold">15</td>
                  <td class="p-2.5 text-center font-bold">15</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Part-2</td>
                  <td class="p-2.5 font-semibold">Concepts of Computer &amp; IT, Contemporary Technological Developments &amp; Innovations (कंप्यूटर एवं सूचना प्रौद्योगिकी की अवधारणाएं व नवाचार)</td>
                  <td class="p-2.5 text-center font-bold">15</td>
                  <td class="p-2.5 text-center font-bold">15</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Part-3</td>
                  <td class="p-2.5 font-semibold">General Information related to the State of Uttar Pradesh (उत्तर प्रदेश राज्य से सम्बन्धित सामान्य जानकारी)</td>
                  <td class="p-2.5 text-center font-bold">20</td>
                  <td class="p-2.5 text-center font-bold">20</td>
                </tr>
                <tr class="bg-blue-50 font-bold text-slate-900">
                  <td class="p-2.5 border border-slate-200" colspan="2">Total (योग)</td>
                  <td class="p-2.5 border border-slate-200 text-center text-blue-700">100</td>
                  <td class="p-2.5 border border-slate-200 text-center text-blue-700">100</td>
                  <td class="p-2.5 border border-slate-200 text-center text-blue-700">120 Minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 25,
      title: '25. Subject/Section-Wise Questions',
      badge: 'Section Weightage',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <ul class="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Rural Development Domain (50 Questions / 50% Weightage):</strong> Covers agriculture economy, soil &amp; water conservation, co-operatives, public health &amp; rural sanitation, schemes, panchayati raj, animal husbandry, women &amp; child development.</li>
            <li><strong>Analytical Ability &amp; DI (15 Questions / 15% Weightage):</strong> Assumptions, arguments, logical conclusions, data analysis, graphs, tables, and statistical diagrams.</li>
            <li><strong>Computer &amp; Information Technology (15 Questions / 15% Weightage):</strong> Hardware, software, IP addresses, email, word processing, excel, cyber security, AI, big data, deep learning, IoT.</li>
            <li><strong>Uttar Pradesh Special Knowledge (20 Questions / 20% Weightage):</strong> UP history, culture, architecture, folk dance, geography, climate, soil, forests, mineral resources, polity, and achievements.</li>
          </ul>
        </div>
      `
    },
    {
      id: 26,
      title: '26. Marks',
      badge: 'Marking System',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Every question carries <strong>1 mark</strong>. Maximum marks = <strong>100 Marks</strong>.</p>
          <p>There are no descriptive sections or subjective interviews. The final merit rank is strictly based on the normalized/raw marks obtained out of 100.</p>
        </div>
      `
    },
    {
      id: 27,
      title: '27. Exam Duration',
      badge: 'Time Limit',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Total allocated time is <strong>2 Hours (120 Minutes)</strong> without any sectional time limits.</p>
          <p>PwD candidates eligible for scribe facility will receive compensatory time as per Government of India/UP rules (20 minutes per hour).</p>
        </div>
      `
    },
    {
      id: 28,
      title: '28. Negative Marking',
      badge: 'Penalty Norms',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Prastar-9 of the official notification:</p>
          <div class="p-3 bg-red-50 border border-red-200 rounded-xl text-red-900 text-xs">
            <strong>Official Negative Marking Rule:</strong> For every incorrect answer, <strong>25% (one-fourth / 1/4th) mark</strong> will be deducted from the candidate's aggregate score.
          </div>
          <p class="text-xs text-slate-600">Unattempted questions receive zero (0) marks and carry no penalty.</p>
        </div>
      `
    },
    {
      id: 29,
      title: '29. Syllabus',
      badge: 'Complete Syllabus',
      content: `
        <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The complete official subject-wise syllabus extracted from Advt. No. 21-Exam/2026 (Prastar-9, pages 21–24) is provided below:</p>
          
          <div class="space-y-3">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <h4 class="font-bold text-slate-900 text-sm mb-1.5">Part-1: Rural Development Knowledge (50 Marks)</h4>
              <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
                <li>(i) Characteristics of Indian Agriculture &amp; Indian Economy (भारतीय कृषि/भारतीय अर्थव्यवस्था की विशेषताएं)</li>
                <li>(ii) Soil and Water Conservation, Soil and Water Pollution (मृदा एवं जल संरक्षण, मृदा एवं जल प्रदूषण)</li>
                <li>(iii) Cooperatives and Sustainable Development Goals (सहकारिता एवं सतत विकास लक्ष्य)</li>
                <li>(iv) Agricultural Education, Extension &amp; Training (कृषि शिक्षा/प्रसार/प्रशिक्षण)</li>
                <li>(v) General Information and Schemes Related to Public Health and Rural Sanitation (जनस्वास्थ्य एवं ग्रामीण स्वच्छता से संबंधित सामान्य जानकारी एवं योजनाएं)</li>
                <li>(vi) Government Schemes and Programs Related to Rural Development (ग्राम्य विकास से संबंधित सरकार की योजनाएं एवं कार्यक्रम)</li>
                <li>(vii) The Panchayati Raj System and Schemes Related to Panchayati Raj (पंचायती राज व्यवस्था एवं पंचायती राज से संबंधित योजनाएं)</li>
                <li>(viii) Schemes Related to Agriculture and Animal Husbandry (कृषि एवं पशुपालन से संबंधित योजनाएं)</li>
                <li>(ix) Information and Various Schemes Related to Women and Child Development (महिला एवं बाल विकास से संबंधित जानकारी एवं विभिन्न योजनाएं)</li>
                <li>(x) Welfare Schemes for Rural Society (ग्राम्य समाज हेतु कल्याणपरक योजनाएं)</li>
              </ul>
            </div>

            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <h4 class="font-bold text-slate-900 text-sm mb-1.5">Part-1 (Section 2): Analytical Ability &amp; Data Interpretation (15 Marks)</h4>
              <p class="text-xs text-slate-700">Statements and Assumptions, Statements and Arguments, Statements and Conclusions, Logical Deductions and Critical Reasoning. Interpretation and Analysis of Data. Statistical Analysis — Graphs and Diagrams designed to assess the candidates' ability to draw general knowledge-based inferences and conclusions from statistical and graphical information presented therein.</p>
            </div>

            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <h4 class="font-bold text-slate-900 text-sm mb-1.5">Part-2: Computer &amp; Information Technology (15 Marks)</h4>
              <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
                <li>History, Introduction, and Application of Computer, IT, Internet, and World Wide Web (WWW).</li>
                <li>Hardware &amp; Software fundamentals; Input and Output devices.</li>
                <li>Internet Protocol (IP) Address; IT gadgets and their applications.</li>
                <li>Creation of email ID, use and management of email.</li>
                <li>Operation of Printer, Tablet, and Mobile devices.</li>
                <li>Important elements of Word Processing (MS-Word) and Spreadsheet Processing (MS-Excel).</li>
                <li>Operating Systems, Social Networking, and e-Governance platforms.</li>
                <li>Digital Financial Tools and Applications (UPI, Net Banking, e-Wallets).</li>
                <li>Future Skills and Cyber Security fundamentals.</li>
                <li>Technological Development and Innovation in IT: Artificial Intelligence (AI), Big Data Processing, Deep Learning, Machine Learning, Internet of Things (IoT), and India's achievements in this field.</li>
              </ul>
            </div>

            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <h4 class="font-bold text-slate-900 text-sm mb-1.5">Part-3: General Information of Uttar Pradesh (20 Marks)</h4>
              <p class="text-xs text-slate-700">History of Uttar Pradesh, Culture, Art, Architecture, Festivals, Folk Dances, Literature, Regional Languages, Heritage, Social Customs and Tourism, Geographical Landscape and Environment, Natural Resources, Climate, Soil, Forests, Wildlife, Mines and Minerals, Economy, Agriculture, Industry, Business and Employment, Polity and Administration, Current Events, and Achievements of Uttar Pradesh State in various fields.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 30,
      title: '30. Post Preference',
      badge: 'Cadre Selection',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 2.5 of the advertisement, candidates must exercise their <strong>post preference (वरीयता विकल्प)</strong> during Document Verification:</p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700">
            "अभ्यर्थियों को अभिलेख परीक्षण के समय पदों की वरीयता का विकल्प देना होगा। आयोग अभ्यर्थियों द्वारा दी गयी वरीयता के आधार पर (पद की उपलब्धता, श्रेष्ठता, पद की शैक्षिक अर्हता व आयु सीमा का संज्ञान लेते हुए) पर यथा संभव पद आवंटित करने का प्रयास करेगा किन्तु इस संबंध में आयोग का निर्णय अंतिम होगा।"
          </div>
        </div>
      `
    },
    {
      id: 31,
      title: '31. Document Verification',
      badge: 'Stage 3 Scrutiny',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates clearing the written test cutoff will be summoned for original document verification at the UPSSSC office in Lucknow. Required documents include:</p>
          <ul class="list-disc pl-5 space-y-1 text-slate-700 text-xs">
            <li>PET-2025 Original Scorecard and Admit Card.</li>
            <li>High School (10th) Certificate &amp; Marksheet (as date of birth proof).</li>
            <li>Intermediate (12th) Certificate &amp; Marksheet.</li>
            <li>Post-specific Graduation / Post-Graduation Degree &amp; all semester marksheets.</li>
            <li>Sanitary Inspector / Engineering Diploma / Experience certificates (as applicable).</li>
            <li>UP Domicile Certificate issued by competent authority.</li>
            <li>Caste Certificate (OBC/SC/ST) in prescribed UP Govt formats (Parishisht-1 / 2).</li>
            <li>EWS Certificate issued between 01-04-2026 and 05-10-2026 based on FY 2025-26 income valid for 2026-27.</li>
          </ul>
        </div>
      `
    },
    {
      id: 32,
      title: '32. Medical Examination',
      badge: 'Fitness Test',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Selected candidates undergo a general medical fitness evaluation before the Chief Medical Officer (CMO) in the district of appointment as per UP Civil Service Medical Rules.</p>
        </div>
      `
    },
    {
      id: 33,
      title: '33. Pay Level/Salary',
      badge: 'Remuneration',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>All Senior Instructor positions fall under <strong>Pay Matrix Level-6</strong> as per the 7th Central Pay Commission / UP Revised Pay Rules:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Salary Component</th><th class="p-2.5 border border-slate-200">Official Specification</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">Pay Matrix Level</td><td class="p-2.5 font-bold text-blue-700">Level-6</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Pay Scale (वेतनमान)</td><td class="p-2.5 font-bold text-slate-900">₹35,400 – ₹1,12,400</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Grade Pay (Pre-revised)</td><td class="p-2.5">₹4,200/-</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Basic Pay at Entry</td><td class="p-2.5 font-bold text-emerald-700">₹35,400/- per month</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Allowances</td><td class="p-2.5">Dearness Allowance (DA as per UP Govt), HRA, City Compensatory Allowance</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Estimated Starting In-Hand Gross</td><td class="p-2.5 font-bold text-emerald-700">₹49,000 – ₹55,000 per month (approx. location dependent)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 34,
      title: '34. Application Process',
      badge: 'OTR & Online Flow',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The application is submitted completely online through <strong>upsssc.gov.in</strong> under the "Live Advertisement" segment:</p>
          <ol class="list-decimal pl-5 space-y-1.5 text-xs text-slate-700">
            <li>Visit UPSSSC website and click on <em>Advt. No. 21-Exam/2026</em>.</li>
            <li>Authenticate using PET-2025 Registration Number via OTP (Registered Mobile/Email) or Personal Details.</li>
            <li>Review pre-populated details (Name, DOB, Parent's name, Domicile, Category).</li>
            <li>Select the desired post/posts and confirm educational eligibility with 'Yes' and fill certificate details.</li>
            <li>Preview Photo and Signature fetched from PET-2025.</li>
            <li>Submit declaration, pay the ₹25 online processing fee, and print the computer-generated Application Form.</li>
          </ol>
        </div>
      `
    },
    {
      id: 35,
      title: '35. How to Apply Online',
      badge: 'Step-by-Step Guide',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <span class="font-bold text-slate-900 block text-xs">Official Step-by-Step Guide:</span>
            <p class="text-xs"><strong>Step 1:</strong> Go to <a href="https://upsssc.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">upsssc.gov.in</a>.</p>
            <p class="text-xs"><strong>Step 2:</strong> In the "Live Advertisement" section, select <strong>21-Exam/2026</strong> and click "Apply".</p>
            <p class="text-xs"><strong>Step 3:</strong> Authenticate via PET-2025 credentials.</p>
            <p class="text-xs"><strong>Step 4:</strong> Select post(s) and provide academic certificate verification details (Board/University, Roll No, Passing Year, Marks).</p>
            <p class="text-xs"><strong>Step 5:</strong> Pay ₹25 processing fee via Net Banking/Debit Card/UPI.</p>
            <p class="text-xs"><strong>Step 6:</strong> Generate and print the final 11-digit application acknowledgment form for future document verification.</p>
          </div>
        </div>
      `
    },
    {
      id: 36,
      title: '36. Documents Required',
      badge: 'Checklist',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <ul class="list-disc pl-5 space-y-1 text-slate-700 text-xs">
            <li>PET-2025 Registration Number &amp; Score Details.</li>
            <li>High School (10th) mark sheet &amp; certificate.</li>
            <li>Essential discipline graduation/post-graduation degree and marksheets.</li>
            <li>Diploma certificate &amp; experience letter (for Production Instructor via Diploma).</li>
            <li>State Govt Sanitary Inspector Examination Certificate (for Public Health).</li>
            <li>Category Certificate (SC/ST/OBC) in UP State prescribed format.</li>
            <li>EWS Certificate issued on or after 01-04-2026 and on or before 05-10-2026.</li>
            <li>Aadhaar Card or valid Government Photo ID.</li>
          </ul>
        </div>
      `
    },
    {
      id: 37,
      title: '37. Application Correction',
      badge: 'Rules',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates can modify permissible application data up to <strong>12 October 2026</strong> by logging in through the <em>"Modify Application"</em> link under Applicant Segment on upssc.gov.in with OTP authentication.</p>
          <p class="text-xs text-red-600 font-semibold">No modification requests will be entertained after 12 October 2026 via email, post, or offline representations.</p>
        </div>
      `
    },
    {
      id: 38,
      title: '38. Exam Centre',
      badge: 'Locations',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The written examination will be held in designated educational institutions/centres across major divisional and district headquarters in Uttar Pradesh (primarily Lucknow and surrounding districts). Exact centre details will be printed on the admit card.</p>
        </div>
      `
    },
    {
      id: 39,
      title: '39. Admit Card Details',
      badge: 'Hall Ticket Verification',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The admit card will display Candidate Name, Roll Number, Registration Number, Photograph, Signature, Examination Center Code &amp; Address, Date, Reporting Time, and Important Examination Day Guidelines.</p>
        </div>
      `
    },
    {
      id: 40,
      title: '40. Result/Cut-Off',
      badge: 'Shortlisting & Cut-Off',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>UPSSSC will declare category-wise normalized cut-off marks for both PET-2025 shortlisting and the final Main Written Examination on <a href="https://upsssc.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">upsssc.gov.in</a>.</p>
        </div>
      `
    },
    {
      id: 41,
      title: '41. Merit/Final Selection',
      badge: 'Final Order',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Final selection is determined strictly on the basis of marks obtained in the Main Written Examination (out of 100). In case of candidates scoring equal aggregate marks, preference is given to older candidates in age, followed by candidates possessing preferential qualifications (Territorial Army / NCC 'B' / Teaching Experience).</p>
        </div>
      `
    },
    {
      id: 42,
      title: '42. Important Instructions',
      badge: 'Advisory',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <ul class="list-disc pl-5 space-y-1 text-slate-700 text-xs">
            <li>Ensure all essential educational certificates are issued on or before <strong>05-10-2026</strong>.</li>
            <li>For female candidates claiming reservation, caste certificates must be issued based on their father's side (पिता पक्ष से निर्गत जाति प्रमाण पत्र ही मान्य होगा).</li>
            <li>Government servants must obtain a No Objection Certificate (NOC) from their appointing authority.</li>
            <li>Canvassing in any form will lead to immediate disqualification and debarment under UP Public Examination (Prevention of Unfair Means) Act 2024.</li>
          </ul>
        </div>
      `
    },
    {
      id: 43,
      title: '43. How to Check Official Updates',
      badge: 'Official Portal',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>All official notices, answer keys, objection trackers, and results are published exclusively in the <strong>Notice Board segment</strong> of <a href="https://upsssc.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline">upsssc.gov.in</a>.</p>
        </div>
      `
    },
    {
      id: 44,
      title: '44. Important Links',
      badge: 'Official Portals',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Verified official web links for UPSSSC Senior Instructor Recruitment 2026:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Official Resource</th><th class="p-2.5 border border-slate-200">Link</th><th class="p-2.5 border border-slate-200">Description</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr>
                  <td class="p-2.5 font-bold text-slate-900 bg-slate-50">Apply Online</td>
                  <td class="p-2.5"><a href="https://upsssc.gov.in/" target="_blank" rel="noopener noreferrer" class="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-bold inline-block">Apply Online</a></td>
                  <td class="p-2.5 text-emerald-800 font-medium">Official UPSSSC Registration Engine</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900 bg-slate-50">Official Notification (Advt. 21-Exam/2026)</td>
                  <td class="p-2.5"><a href="https://upsssc.gov.in/ViewPdf.aspx?tNvBgZ+yjQmqFNjufVqIZyUYRzsOqzXGey/v8e79hqs=" target="_blank" rel="noopener noreferrer" class="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded font-bold inline-block">Download PDF</a></td>
                  <td class="p-2.5 text-blue-800 font-medium">Official UPSSSC 40-Page Notification PDF</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900 bg-slate-50">Official Website</td>
                  <td class="p-2.5"><a href="https://upsssc.gov.in/" target="_blank" rel="noopener noreferrer" class="px-3 py-1 bg-slate-800 hover:bg-slate-900 text-white rounded font-bold inline-block">upsssc.gov.in</a></td>
                  <td class="p-2.5 text-slate-600">Commission Main Portal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 45,
      title: '45. FAQ',
      badge: 'Frequently Asked',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 class="font-bold text-slate-900 text-xs">Q: What is the total number of vacancies in UPSSSC Senior Instructor 2026?</h4>
            <p class="text-xs text-slate-600 mt-1">A: Exactly 132 permanent posts across 13 disciplines under Deen Dayal Upadhyaya State Rural Development Institute, Lucknow.</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 class="font-bold text-slate-900 text-xs">Q: Which PET score is required for this recruitment?</h4>
            <p class="text-xs text-slate-600 mt-1">A: A valid UPSSSC Preliminary Eligibility Test-2025 (PET-2025) scorecard with positive normalized marks is mandatory.</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 class="font-bold text-slate-900 text-xs">Q: What is the application deadline?</h4>
            <p class="text-xs text-slate-600 mt-1">A: The online application and fee submission deadline is 05 October 2026. The correction window closes on 12 October 2026.</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 class="font-bold text-slate-900 text-xs">Q: Is there negative marking in the written exam?</h4>
            <p class="text-xs text-slate-600 mt-1">A: Yes, 25% (1/4th mark) will be deducted for every incorrect response.</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 class="font-bold text-slate-900 text-xs">Q: What is the salary scale for Senior Instructor?</h4>
            <p class="text-xs text-slate-600 mt-1">A: Pay Matrix Level-6 (₹35,400 – ₹1,12,400) with approximate starting gross salary of ₹49,000 to ₹55,000 per month.</p>
          </div>
        </div>
      `
    },
    {
      id: 46,
      title: '46. Official Notification',
      badge: 'Gazette Notice',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The complete 40-page official advertisement is available directly on the UPSSSC server at:</p>
          <a href="https://upsssc.gov.in/ViewPdf.aspx?tNvBgZ+yjQmqFNjufVqIZyUYRzsOqzXGey/v8e79hqs=" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold underline">https://upsssc.gov.in/ViewPdf.aspx?tNvBgZ+yjQmqFNjufVqIZyUYRzsOqzXGey/v8e79hqs=</a>
        </div>
      `
    },
    {
      id: 47,
      title: '47. Official Website',
      badge: 'UPSSSC Portal',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates can access all online services directly via the official commission portal at <a href="https://upsssc.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold underline">upsssc.gov.in</a>.</p>
        </div>
      `
    },
    {
      id: 48,
      title: '48. Related UPSSSC Exams',
      badge: 'State Recruitments',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Explore other major Uttar Pradesh competitive examinations hosted on RajDailyTools:</p>
          <ul class="list-disc pl-5 space-y-1 text-blue-600 font-semibold text-xs">
            <li><a href="./up-special-tet-online-form-2026.html" class="hover:underline">UP Special TET Online Form 2026</a></li>
            <li><a href="./latest-jobs/up-police-constable-recruitment-2026.html" class="hover:underline">UP Police Constable Recruitment 2026</a></li>
            <li><a href="./latest-jobs/up-police-sub-inspector-si-2026.html" class="hover:underline">UP Police Sub Inspector (SI) 2026</a></li>
            <li><a href="./latest-jobs.html" class="hover:underline">Browse All State &amp; Central Govt Jobs</a></li>
          </ul>
        </div>
      `
    },
    {
      id: 49,
      title: '49. Latest Updates',
      badge: 'Recruitment Tracker',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Real-time timeline status: <strong>Online Application Window Active (14.09.2026 to 05.10.2026)</strong>. Bookmark this page on RajDailyTools for immediate updates on PET-2025 shortlisting cutoff, exam dates, admit cards, and answer keys.</p>
        </div>
      `
    },
    {
      id: 50,
      title: '50. Final Important Information',
      badge: 'Summary',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-950">
            <h4 class="font-bold text-sm mb-1">Crucial Points for Aspirants:</h4>
            <ul class="list-disc pl-5 space-y-1 text-xs text-amber-900">
              <li>Registration is open only from <strong>14-09-2026 to 05-10-2026</strong>.</li>
              <li>Only valid PET-2025 score holders with positive marks can apply.</li>
              <li>Ensure your EWS certificate is issued between 01-04-2026 and 05-10-2026.</li>
              <li>Fee reconciliation &amp; application correction closes on <strong>12-10-2026</strong>.</li>
              <li>Final selection is 100% written test merit based (no interview).</li>
            </ul>
          </div>
        </div>
      `
    }
  ];
}

export const UPSSSC_SENIOR_INSTRUCTOR_2026_EXAM: ExamRecord = {
  id: 'upsssc-senior-instructor-2026',
  slug: 'upsssc-senior-instructor-recruitment-2026',
  examName: 'UPSSSC Senior Instructor Recruitment 2026',
  shortName: 'UPSSSC Senior Instructor 2026',
  postName: 'Senior Instructor (ज्येष्ठ अनुदेशक) – State Rural Development Institute',
  organization: 'Uttar Pradesh Subordinate Services Selection Commission (UPSSSC)',
  category: 'State PSC',
  state: 'Uttar Pradesh',
  totalVacancy: '132 Posts',
  applicationStartDate: '2026-09-14',
  applicationLastDate: '2026-10-05',
  examDate: 'Not Released / To Be Updated',
  admitCardDate: 'Not Released / To Be Updated',
  answerKeyDate: 'Not Released / To Be Updated',
  resultDate: 'Not Released / To Be Updated',
  status: 'APPLICATION_OPEN',
  education: ['Graduation', 'Post Graduation', 'Diploma'],
  acceptedQualificationLevels: ['Graduation', 'Post Graduation', 'Diploma'],
  higherQualificationAccepted: true,
  ageMin: 21,
  ageMax: 40,
  ageRelaxationInfo: 'Age calculated as on 01.07.2026. SC/ST/OBC: +5 Yrs, PwD: +15 Yrs for UP Domicile',
  gender: 'All',
  logoIcon: '🏛️',
  officialWebsite: 'https://upsssc.gov.in/',
  officialNotification: 'https://upsssc.gov.in/ViewPdf.aspx?tNvBgZ+yjQmqFNjufVqIZyUYRzsOqzXGey/v8e79hqs=',
  applyLink: 'https://upsssc.gov.in/',
  mockTestLink: 'https://upsssc.gov.in/',
  description: 'UPSSSC Senior Instructor Recruitment 2026 – check 132 vacancies, important dates, eligibility, PET 2025, age limit, fee, selection process, exam pattern, syllabus, salary and official links.',
  shortSummary: 'UPSSSC Lucknow has released official notification (Advt. No. 21-Exam/2026) for 132 Senior Instructor posts in Deen Dayal Upadhyaya State Rural Development Institute. Valid PET-2025 score required.',
  importantDates: [
    { label: 'Notification Issued', date: '10 September 2026' },
    { label: 'Online Application & Fee Start', date: '14 September 2026', isHighlight: true },
    { label: 'Last Date for Online Registration & Fee', date: '05 October 2026', isHighlight: true },
    { label: 'Last Date for Fee Adjustment & Correction', date: '12 October 2026' },
    { label: 'PET-2025 Shortlisting Cut-Off', date: 'Not Released / To Be Updated' },
    { label: 'Admit Card Download Starts', date: 'Not Released / To Be Updated' },
    { label: 'Written Examination Date', date: 'Not Released / To Be Updated', isHighlight: true }
  ],
  applicationFee: [
    { category: 'General / Unreserved (UR)', amount: '₹25.00' },
    { category: 'Other Backward Classes (OBC)', amount: '₹25.00' },
    { category: 'Scheduled Caste (SC)', amount: '₹25.00' },
    { category: 'Scheduled Tribe (ST)', amount: '₹25.00' },
    { category: 'EWS / Female / PwD / Ex-Servicemen', amount: '₹25.00' }
  ],
  selectionProcess: [
    'Stage 1: Preliminary Eligibility Test (PET-2025) Normalized Score Shortlisting (15 times category-wise)',
    'Stage 2: Main Written Examination (100 MCQs, 100 Marks, 120 Minutes, 1/4th Negative Marking)',
    'Stage 3: Document Verification (DV) & Post Preference Allocation at UPSSSC Lucknow',
    'Stage 4: Medical Examination & Final Recommendation Merit List'
  ],
  examPattern: [
    {
      stageName: 'Main Written Examination (OMR Based)',
      mode: 'Offline (Pen-Paper OMR Sheet)',
      duration: '2 Hours (120 Minutes)',
      negativeMarking: '1/4th (0.25 Mark per wrong answer)',
      subjects: [
        { name: 'Part-1: Rural Development Domain Knowledge (ग्राम्य विकास विषयगत ज्ञान)', questions: 50, marks: 50 },
        { name: 'Part-1: Analytical Ability & Data Interpretation (विश्लेषणात्मक क्षमता एवं डेटा इंटरप्रिटेशन)', questions: 15, marks: 15 },
        { name: 'Part-2: Concepts of Computer & IT, Contemporary Innovations (कंप्यूटर एवं सूचना प्रौद्योगिकी)', questions: 15, marks: 15 },
        { name: 'Part-3: General Information of Uttar Pradesh State (उत्तर प्रदेश राज्य संबंधित सामान्य ज्ञान)', questions: 20, marks: 20 }
      ]
    }
  ],
  salary: {
    payScale: 'Level-6 (₹35,400 – ₹1,12,400)',
    inHand: '₹49,000 – ₹55,000 per month (approx. location dependent)',
    allowances: 'DA, HRA, City Compensatory Allowance & UP State Government Employee Benefits'
  },
  faq: [
    {
      q: 'What is the total vacancy in UPSSSC Senior Instructor Recruitment 2026?',
      a: 'There are 132 permanent posts across 13 discipline cadres under Deen Dayal Upadhyaya State Rural Development Institute, Lucknow.'
    },
    {
      q: 'Which PET is required to apply for UPSSSC Senior Instructor 2026?',
      a: 'Only candidates who appeared in UPSSSC Preliminary Eligibility Test 2025 (PET-2025) and possess a valid score card with positive normalized marks are eligible.'
    },
    {
      q: 'What are the application start and closing dates?',
      a: 'Online application started on 14 September 2026 and closes on 05 October 2026. Application correction window is open till 12 October 2026.'
    },
    {
      q: 'What is the age limit for UPSSSC Senior Instructor?',
      a: 'Candidates must be between 21 and 40 years of age as on 01 July 2026. Age relaxation of 5 years is applicable for SC/ST/OBC and 15 years for PwD candidates of Uttar Pradesh.'
    },
    {
      q: 'Is there any negative marking in the exam?',
      a: 'Yes, there is 25% (1/4th) negative marking for every incorrect answer in the written examination.'
    }
  ],
  allInformation: generateUpssscSeniorInstructor50Sections()
};

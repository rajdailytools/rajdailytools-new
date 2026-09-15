import { ExamRecord, ExamInfoSection } from '../types/exam';

export function generateNicSta50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. NIC Scientific/Technical Assistant-A Recruitment 2026 – Highlights & Fast Facts',
      badge: 'Overview',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>National Informatics Centre (NIC), under the Ministry of Electronics and Information Technology (MeitY), Government of India, has released official detailed recruitment notification <strong>Advt No: NIC/STA/2026/2</strong> for the direct recruitment of <strong>Scientific/Technical Assistant-A</strong>. This is a premier Group-B S&T (Non-Gazetted) post carrying Pay Level 6 (₹35,400 – ₹1,12,400) under the 7th CPC.</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Parameter</th>
                  <th class="p-2.5">Official Details</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Recruiting Organization</td>
                  <td class="p-2.5 font-bold text-blue-800">National Informatics Centre (NIC), MeitY, Govt. of India</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Advertisement Number</td>
                  <td class="p-2.5 font-mono font-bold text-slate-900">Advt No: NIC/STA/2026/2</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Post Name</td>
                  <td class="p-2.5 font-bold text-slate-900">Scientific/Technical Assistant-A (STA-A)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Post Classification</td>
                  <td class="p-2.5 font-semibold text-purple-700">Group-B S&T (Non-Gazetted)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Total Vacancies</td>
                  <td class="p-2.5 font-bold text-emerald-700">376 Posts (CSIT: 300 | ECE: 26 | DS & AI: 50)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Pay Scale</td>
                  <td class="p-2.5 font-bold text-slate-900">Level 6 (₹35,400 – ₹1,12,400) of 7th CPC Matrix</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Basis of Selection</td>
                  <td class="p-2.5 font-bold text-indigo-700">Valid GATE Score (2024 / 2025 / 2026) + Document Verification (NO Written Test)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Application Dates</td>
                  <td class="p-2.5 font-bold text-slate-900">01 September 2026 (10:00 AM) to 30 September 2026 (05:30 PM)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Crucial Eligibility Date</td>
                  <td class="p-2.5 font-bold text-red-700">30 September 2026</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Experience Required</td>
                  <td class="p-2.5 font-semibold text-emerald-700">Nil – Freshers Eligible (No Experience Required)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Place of Posting</td>
                  <td class="p-2.5">Anywhere in India and outside India as per organization requirement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: '2. Important Dates & Official Application Schedule',
      badge: 'Timeline',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates must carefully observe the official timeline published in Table-I of the notification. Late submissions or fee receipts beyond the cutoff timestamp will not be accepted under any circumstances.</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Event Description</th>
                  <th class="p-2.5">Scheduled Date & Time</th>
                  <th class="p-2.5">Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr class="bg-blue-50/30">
                  <td class="p-2.5 font-semibold">Opening Date for On-Line Applications</td>
                  <td class="p-2.5 font-bold text-blue-800">01/09/2026 (10:00 AM)</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700">Active</span></td>
                </tr>
                <tr class="bg-amber-50/30">
                  <td class="p-2.5 font-semibold">Closing Date for On-Line Applications & Fee Payment</td>
                  <td class="p-2.5 font-bold text-red-700">30/09/2026 (05:30 PM)</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">Closing Soon</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Cut-off Date for Determining Age & Educational Qualification</td>
                  <td class="p-2.5 font-bold text-slate-900">30/09/2026</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">Cut-off Point</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Schedule for Document Verification (DV)</td>
                  <td class="p-2.5 text-indigo-700 font-bold">Will be announced on NIC recruitment website</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-700">To Be Announced</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Written Examination / Admit Card</td>
                  <td class="p-2.5 text-slate-500 font-bold">NOT APPLICABLE (Selection via GATE Score + DV)</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">No Exam</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs">
            <strong>⚠️ Timely Submission Notice:</strong> The online application portal closes sharp at 05:30 PM on 30.09.2026. Applicants are strictly urged not to wait until the final hours to avoid server congestion.
          </div>
        </div>
      `
    },
    {
      id: 3,
      title: '3. Total Vacancy Breakdown & Discipline Summary (376 Posts)',
      badge: 'Vacancies',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>A total of <strong>376 vacancies</strong> have been announced across three primary technical disciplines. All posts are filled through Direct Recruitment on permanent central government service terms:</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
            <div class="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl">
              <span class="text-[11px] font-bold text-blue-700 uppercase block">Discipline 1</span>
              <span class="text-lg font-black text-blue-900 font-display block mt-1">300 Posts</span>
              <span class="text-xs font-semibold text-slate-700 mt-0.5 block">Computer Sciences & IT</span>
            </div>
            <div class="p-3.5 bg-purple-50/70 border border-purple-200 rounded-xl">
              <span class="text-[11px] font-bold text-purple-700 uppercase block">Discipline 2</span>
              <span class="text-lg font-black text-purple-900 font-display block mt-1">26 Posts</span>
              <span class="text-xs font-semibold text-slate-700 mt-0.5 block">Electronics & Communication Engg</span>
            </div>
            <div class="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl">
              <span class="text-[11px] font-bold text-emerald-700 uppercase block">Discipline 3</span>
              <span class="text-lg font-black text-emerald-900 font-display block mt-1">50 Posts</span>
              <span class="text-xs font-semibold text-slate-700 mt-0.5 block">Data Science & Artificial Intelligence</span>
            </div>
          </div>
          <p class="text-xs text-slate-500">Note: The number of advertised posts is tentative; the actual number may increase or decrease at the sole discretion of NIC.</p>
        </div>
      `
    },
    {
      id: 4,
      title: '4. Official Discipline-wise & Category-wise Vacancy Table (Table-II)',
      badge: 'Official Table',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The exact vertical reservation matrix across categories for each discipline as per Table-II of the official notification is provided below:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-center border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-800 text-white font-bold border-b border-slate-700">
                <tr>
                  <th class="p-2.5 text-left">Discipline</th>
                  <th class="p-2.5">Total Vacant Posts</th>
                  <th class="p-2.5 bg-slate-700">UR</th>
                  <th class="p-2.5">SC</th>
                  <th class="p-2.5">ST</th>
                  <th class="p-2.5">OBC (NCL)#</th>
                  <th class="p-2.5">EWS</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800 font-medium">
                <tr>
                  <td class="p-2.5 text-left font-bold text-blue-900">Computer Sciences & Information Technology</td>
                  <td class="p-2.5 font-bold text-blue-700">300</td>
                  <td class="p-2.5 bg-slate-50 font-bold">122</td>
                  <td class="p-2.5">45</td>
                  <td class="p-2.5">22</td>
                  <td class="p-2.5">81</td>
                  <td class="p-2.5">30</td>
                </tr>
                <tr>
                  <td class="p-2.5 text-left font-bold text-purple-900">Electronics and Communication Engineering</td>
                  <td class="p-2.5 font-bold text-purple-700">26</td>
                  <td class="p-2.5 bg-slate-50 font-bold">13</td>
                  <td class="p-2.5">3</td>
                  <td class="p-2.5">1</td>
                  <td class="p-2.5">7</td>
                  <td class="p-2.5">2</td>
                </tr>
                <tr>
                  <td class="p-2.5 text-left font-bold text-emerald-900">Data Science and Artificial Intelligence</td>
                  <td class="p-2.5 font-bold text-emerald-700">50</td>
                  <td class="p-2.5 bg-slate-50 font-bold">22</td>
                  <td class="p-2.5">7</td>
                  <td class="p-2.5">3</td>
                  <td class="p-2.5">13</td>
                  <td class="p-2.5">5</td>
                </tr>
                <tr class="bg-blue-50/50 font-black text-slate-900 border-t-2 border-slate-300">
                  <td class="p-2.5 text-left font-black">Grand Total</td>
                  <td class="p-2.5 font-black text-blue-800 text-sm">376</td>
                  <td class="p-2.5 bg-slate-100/60 font-black text-sm">157</td>
                  <td class="p-2.5 font-black">55</td>
                  <td class="p-2.5 font-black">26</td>
                  <td class="p-2.5 font-black">101</td>
                  <td class="p-2.5 font-black">37</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-[11px] text-slate-500">#NCL – Non-Creamy Layer. Vacancies are strictly subject to Govt. of India reservation rosters.</p>
        </div>
      `
    },
    {
      id: 5,
      title: '5. Horizontal Reservation for Persons with Benchmark Disabilities (PwBD)',
      badge: 'PwBD Details',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Horizontal reservation for Persons with Benchmark Disabilities (PwBD) has been allocated discipline-wise as per Table-II of Advt No: NIC/STA/2026/2:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Discipline</th>
                  <th class="p-2.5">Total PwBD Posts</th>
                  <th class="p-2.5">Disability Sub-category Allotment</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold text-blue-900">Computer Sciences & Information Technology</td>
                  <td class="p-2.5 font-bold text-center text-blue-800">15</td>
                  <td class="p-2.5">
                    <ul class="list-disc pl-4 space-y-1 text-slate-700">
                      <li><strong>a. Locomotor Disability (OA, OL, BL, OAL) – 4:</strong> Including leprosy cured, dwarfism, acid attack victims, and muscular dystrophy</li>
                      <li><strong>b. Hard of Hearing (HH) – 4</strong></li>
                      <li><strong>c. Multiple Disabilities – 7*:</strong> From amongst (a) to (b) except deaf-blindness (*includes 3 PH-MD backlog vacancies)</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold text-purple-900">Electronics and Communication Engineering</td>
                  <td class="p-2.5 font-bold text-center text-purple-800">2</td>
                  <td class="p-2.5">
                    <ul class="list-disc pl-4 space-y-1 text-slate-700">
                      <li><strong>a. Locomotor Disability (OA, OL, BL, OAL) – 1:</strong> Including leprosy cured, dwarfism, acid attack victims, muscular dystrophy</li>
                      <li><strong>b. Hard of Hearing (HH) – 1</strong></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold text-emerald-900">Data Science and Artificial Intelligence</td>
                  <td class="p-2.5 font-bold text-center text-emerald-800">2</td>
                  <td class="p-2.5">
                    <ul class="list-disc pl-4 space-y-1 text-slate-700">
                      <li><strong>a. Locomotor Disability (OA, OL, BL, OAL) – 1:</strong> Including leprosy cured, dwarfism, acid attack victims, muscular dystrophy</li>
                      <li><strong>b. Hard of Hearing (HH) – 1</strong></li>
                    </ul>
                  </td>
                </tr>
                <tr class="bg-slate-50 font-bold">
                  <td class="p-2.5">Total Horizontal PwBD Posts</td>
                  <td class="p-2.5 text-center text-slate-900">19</td>
                  <td class="p-2.5">OA: One Arm, OL: One Leg, BL: Both Leg, OAL: One Arm and One Leg, HH: Hard of Hearing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-500">Note: Minimum 40% permanent disability certificate in prescribed central format (Annexure IV / V / VI) issued on or before 30.09.2026 is mandatory.</p>
        </div>
      `
    },
    {
      id: 6,
      title: '6. Pay Scale, Level 6 Salary Structure & Monthly Emoluments',
      badge: 'Salary',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Scientific/Technical Assistant-A is classified as a <strong>Group-B S&T (Non-Gazetted)</strong> post in <strong>Pay Level 6</strong> (₹35,400 – ₹1,12,400) under the 7th Central Pay Commission (CPC).</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Salary Component</th>
                  <th class="p-2.5">Details / Rates</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Pay Matrix Level</td>
                  <td class="p-2.5 font-bold text-slate-900">Level 6 (7th CPC)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Basic Pay Range</td>
                  <td class="p-2.5 font-mono font-bold text-blue-700">₹35,400 – ₹1,12,400 per month</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Starting Basic Pay</td>
                  <td class="p-2.5 font-mono font-bold text-slate-900">₹35,400/-</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Dearness Allowance (DA)</td>
                  <td class="p-2.5">As per prevailing Central Government orders (50%+ as applicable)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">House Rent Allowance (HRA)</td>
                  <td class="p-2.5">Class X: 30%, Class Y: 20%, Class Z: 10% (depending on place of posting)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Transport Allowance (TA)</td>
                  <td class="p-2.5">Applicable central rates + DA on TA</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Estimated Gross Monthly Emoluments</td>
                  <td class="p-2.5 font-bold text-emerald-700">₹60,000 – ₹72,000+ per month (approx. in Tier-1/Metro cities)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Other Benefits & Perks</td>
                  <td class="p-2.5">CGHS Medical facilities, Leave Travel Concession (LTC), Children Education Allowance (CEA), National Pension System (NPS), Gratuity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 7,
      title: '7. Organization Profile & Role of National Informatics Centre (NIC)',
      badge: 'About NIC',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>National Informatics Centre (NIC) was established in 1976 under the Ministry of Electronics and Information Technology (MeitY), Government of India. It has emerged as the “prime builder” of e-Government / e-Governance applications up to grassroots levels and promoter of digital opportunities for sustainable development.</p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <span class="font-bold text-slate-800 text-xs uppercase tracking-wider block">Core Operational Pillars of NIC:</span>
            <ul class="list-disc pl-4 space-y-1 text-xs text-slate-700">
              <li><strong>ICT Infrastructure:</strong> Setting up national digital networks (NICNET), National Knowledge Network (NKN), National Data Centres, and Cloud services (MeghRaj).</li>
              <li><strong>National & State Projects:</strong> Development and deployment of landmark projects including Digital India initiatives, e-Courts, e-Hospital, DigiLocker, PFMS, e-Way Bill, and portals for Central/State ministries.</li>
              <li><strong>Consultancy:</strong> Providing high-level technical expertise to various government departments across Centre, States, Districts, and Blocks.</li>
              <li><strong>Research & Development:</strong> Emerging technology implementation in Artificial Intelligence, Blockchain, Cybersecurity, Data Analytics, and Cloud Computing.</li>
              <li><strong>Capacity Building:</strong> Training and empowering government officers for informatics-led governance.</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 8,
      title: '8. Complete Eligibility Criteria Overview & Cut-Off Date (30.09.2026)',
      badge: 'Eligibility',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>To be eligible for appointment to Scientific/Technical Assistant-A, a candidate must satisfy all three core requirements on or before the crucial cut-off date of <strong>30 September 2026</strong>:</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
            <div class="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
              <span class="text-xs font-bold text-blue-700 uppercase block">1. GATE Score</span>
              <p class="text-xs font-semibold text-slate-800 mt-1">Must hold a VALID GATE Score from 2024, 2025, or 2026 in CS, EC, or DA paper code.</p>
            </div>
            <div class="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
              <span class="text-xs font-bold text-purple-700 uppercase block">2. Essential Degree</span>
              <p class="text-xs font-semibold text-slate-800 mt-1">Pass in M.Sc. / MS / MCA / B.E. / B.Tech. in prescribed disciplines on or before 30.09.2026.</p>
            </div>
            <div class="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
              <span class="text-xs font-bold text-emerald-700 uppercase block">3. Age Limit</span>
              <p class="text-xs font-semibold text-slate-800 mt-1">Up to 30 years for UR/EWS (with category relaxations) calculated as on 30.09.2026.</p>
            </div>
          </div>
          <div class="p-3 bg-red-50 border border-red-200 rounded-xl text-red-900 text-xs">
            <strong>Crucial Date Invariability (Clause 9.2):</strong> The crucial date for calculating age as well as completion of eligibility conditions with regard to essential qualifications, category, age relaxation etc. shall be <strong>30/09/2026</strong> which will remain unchanged even in case of extension of the closing date.
          </div>
        </div>
      `
    },
    {
      id: 9,
      title: '9. Nationality & Citizenship Conditions (Clause 9.1)',
      badge: 'Citizenship',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>A candidate must be either:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
            <li>(a) A citizen of India, or</li>
            <li>(b) A subject of Nepal, or</li>
            <li>(c) A subject of Bhutan, or</li>
            <li>(d) A Tibetan refugee who came over to India before 1st January, 1962 with the intention of permanently settling in India, or</li>
            <li>(e) A person of Indian origin who has migrated from Pakistan, Burma, Sri Lanka or East African countries of Kenya, Uganda, the United Republic of Tanzania, Zambia, Malawi, Zaire, Ethiopia and Vietnam with the intention of permanently settling in India.</li>
          </ul>
          <p class="text-xs text-slate-500">Provided that a candidate belonging to categories (b), (c), (d) and (e) above shall be a person in whose favor a certificate of eligibility has been issued by the Government of India.</p>
        </div>
      `
    },
    {
      id: 10,
      title: '10. Upper Age Limit Matrix as on 30/09/2026 (Table-V)',
      badge: 'Age Limits',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The upper age limits as on the closing date (30/09/2026) for various candidate categories as specified in Table-V are detailed below:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-center border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-800 text-white font-bold">
                <tr>
                  <th class="p-2.5 text-left">Post</th>
                  <th class="p-2.5">UR / EWS</th>
                  <th class="p-2.5">SC / ST</th>
                  <th class="p-2.5">OBC (NCL)</th>
                  <th class="p-2.5">PwBD</th>
                  <th class="p-2.5">Service Candidates$</th>
                  <th class="p-2.5">Ex-Servicemen</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800 font-medium">
                <tr>
                  <td class="p-2.5 text-left font-bold text-blue-900">Scientific / Technical Assistant ‘A’</td>
                  <td class="p-2.5 font-bold text-slate-900">30 Years</td>
                  <td class="p-2.5 font-bold text-emerald-700">35 Years</td>
                  <td class="p-2.5 font-bold text-indigo-700">33 Years</td>
                  <td class="p-2.5">
                    <div class="font-bold text-purple-800">40 Years (UR/EWS)</div>
                    <div class="text-[10px] text-slate-600">SC/ST PwBD: 45 Years</div>
                    <div class="text-[10px] text-slate-600">OBC (NCL) PwBD: 43 Years</div>
                  </td>
                  <td class="p-2.5">
                    <div class="text-[11px] font-bold">UR/EWS: 35 Years</div>
                    <div class="text-[10px] text-slate-600">SC/ST: 40 Years</div>
                    <div class="text-[10px] text-slate-600">OBC (NCL): 38 Years</div>
                  </td>
                  <td class="p-2.5 font-semibold text-slate-700">As per Govt. Rules</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-600"><strong>Crucial Date for Age Calculation:</strong> 30/09/2026. Candidates must be born on or before 30/09/2008 and on or after 01/10/1996 for UR/EWS.</p>
        </div>
      `
    },
    {
      id: 11,
      title: '11. Age Relaxation Guidelines & Government Servant Provisions',
      badge: 'Age Relaxation',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official age relaxation provisions under clauses 3.4.1 to 3.4.3 of the notification stipulate:</p>
          <ul class="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
            <li><strong>Government Servants (Clause 3.4.1):</strong> 5 years age relaxation for candidates serving in Government Organizations working in posts which are in the same line or allied cadres, and where a relationship could be established that the service already rendered in a particular post will be useful for the efficient discharge of duties of the advertised post.</li>
            <li><strong>SC / ST / OBC (NCL) Candidates (Clause 3.4.3):</strong> Age relaxation is applicable for the posts reserved for them.</li>
            <li><strong>PwBD Candidates (Clause 3.4.3):</strong> Relaxation in age limit for PwBD candidates will be applicable irrespective of whether the post is reserved for them or not, provided the post is identified suitable for them.</li>
            <li><strong>Ex-Servicemen:</strong> Concessions as per Department of Personnel & Training (DoPT) orders in force.</li>
          </ul>
        </div>
      `
    },
    {
      id: 12,
      title: '12. Valid GATE Score Requirement (Table-III) – GATE 2024 / 2025 / 2026',
      badge: 'GATE Criteria',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>A candidate <strong>must possess a valid GATE Score</strong> in the Graduate Aptitude Test in Engineering (GATE) from any of the three eligible years: <strong>2024, 2025, or 2026</strong> in the corresponding test paper:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Discipline Applied For</th>
                  <th class="p-2.5">GATE Test Paper</th>
                  <th class="p-2.5">Mandatory GATE Paper Code</th>
                  <th class="p-2.5">Eligible Examination Years</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-blue-900">Computer Sciences & Information Technology</td>
                  <td class="p-2.5 font-semibold">Computer Science and Information Technology</td>
                  <td class="p-2.5 font-mono font-bold text-blue-700">CS</td>
                  <td class="p-2.5">GATE 2024 / 2025 / 2026</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-purple-900">Electronics and Communication Engineering</td>
                  <td class="p-2.5 font-semibold">Electronics and Communication Engineering</td>
                  <td class="p-2.5 font-mono font-bold text-purple-700">EC</td>
                  <td class="p-2.5">GATE 2024 / 2025 / 2026</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-emerald-900">Data Science and Artificial Intelligence</td>
                  <td class="p-2.5 font-semibold">Data Science and Artificial Intelligence</td>
                  <td class="p-2.5 font-mono font-bold text-emerald-700">DA</td>
                  <td class="p-2.5">GATE 2024 / 2025 / 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-900 text-xs">
            <strong>Candidate's Best Score (Clause 6.2):</strong> If a candidate appeared in multiple GATE years (e.g., in both GATE 2025 and GATE 2026), the candidate must submit their <strong>best GATE score</strong> from any one of the eligible years in the discipline applied.
          </div>
        </div>
      `
    },
    {
      id: 13,
      title: '13. Essential Educational Qualifications (Table-IV) – Discipline-wise',
      badge: 'Qualifications',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Table-IV of Advt No: NIC/STA/2026/2, candidates must possess a pass in <strong>M.Sc. / MS / MCA / B.E. / B.Tech.</strong> in the specified fields (single or in combination):</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Discipline</th>
                  <th class="p-2.5">Essential Qualification</th>
                  <th class="p-2.5">Corresponding GATE Paper Code</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-blue-900">Computer Sciences & Information Technology</td>
                  <td class="p-2.5">
                    A Pass in <strong>M.Sc. / MS / MCA / B.E. / B.Tech.</strong> in the below mentioned fields (single or in combination):<br>
                    <span class="text-slate-600 font-medium">Electronics, Electronics and Communication, Electronics & Telecommunication, Computer Sciences, Computer and Networking Security, Software System, Information Technology, Informatics.</span>
                  </td>
                  <td class="p-2.5 font-bold text-blue-700 font-mono">CS<br><span class="text-[10px] text-slate-500 font-normal">Valid GATE 2024 / 2025 / 2026</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-purple-900">Electronics and Communication Engineering</td>
                  <td class="p-2.5">
                    A Pass in <strong>M.Sc. / MS / MCA / B.E. / B.Tech.</strong> in the same prescribed fields (single or in combination as listed above).
                  </td>
                  <td class="p-2.5 font-bold text-purple-700 font-mono">EC<br><span class="text-[10px] text-slate-500 font-normal">Valid GATE 2024 / 2025 / 2026</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-emerald-900">Data Science and Artificial Intelligence</td>
                  <td class="p-2.5">
                    A Pass in <strong>M.Sc. / MS / MCA / B.E. / B.Tech.</strong> in the same prescribed fields (single or in combination as listed above).
                  </td>
                  <td class="p-2.5 font-bold text-emerald-700 font-mono">DA<br><span class="text-[10px] text-slate-500 font-normal">Valid GATE 2024 / 2025 / 2026</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 14,
      title: '14. Prescribed Qualifying Degree Fields (Single or in Combination)',
      badge: 'Degree Fields',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The candidate’s M.Sc. / MS / MCA / B.E. / B.Tech. degree must strictly be in one or any combination of the following officially recognized fields:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
            <div class="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <span class="w-2 h-2 rounded-full bg-blue-600"></span>
              <span class="font-semibold text-xs text-slate-800">Electronics</span>
            </div>
            <div class="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <span class="w-2 h-2 rounded-full bg-blue-600"></span>
              <span class="font-semibold text-xs text-slate-800">Electronics and Communication</span>
            </div>
            <div class="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <span class="w-2 h-2 rounded-full bg-blue-600"></span>
              <span class="font-semibold text-xs text-slate-800">Electronics & Telecommunication</span>
            </div>
            <div class="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <span class="w-2 h-2 rounded-full bg-blue-600"></span>
              <span class="font-semibold text-xs text-slate-800">Computer Sciences</span>
            </div>
            <div class="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <span class="w-2 h-2 rounded-full bg-blue-600"></span>
              <span class="font-semibold text-xs text-slate-800">Computer and Networking Security</span>
            </div>
            <div class="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <span class="w-2 h-2 rounded-full bg-blue-600"></span>
              <span class="font-semibold text-xs text-slate-800">Software System</span>
            </div>
            <div class="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <span class="w-2 h-2 rounded-full bg-blue-600"></span>
              <span class="font-semibold text-xs text-slate-800">Information Technology</span>
            </div>
            <div class="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
              <span class="w-2 h-2 rounded-full bg-blue-600"></span>
              <span class="font-semibold text-xs text-slate-800">Informatics</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 15,
      title: '15. Essential Qualification Completion & No Equivalence Rule (Clause 3.2.1 & 3.2.2)',
      badge: 'Strict Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3.5 bg-amber-50 border border-amber-200 rounded-xl space-y-2">
            <span class="font-bold text-amber-900 text-xs uppercase tracking-wider block">Strict Conditions Laid Down by NIC:</span>
            <ul class="list-disc pl-4 space-y-1.5 text-xs text-amber-950">
              <li><strong>Result Declaration Deadline (Clause 3.2.1):</strong> The candidate should have obtained the essential qualification on or before the closing date, i.e., <strong>30/09/2026</strong>. Candidates whose results are awaited after 30.09.2026 are not eligible.</li>
              <li><strong>No Equivalent Qualification Entertained (Clause 3.2.2):</strong> No claim of possession of a qualification equivalent to the prescribed qualification in Table-IV shall be entertained under any circumstances.</li>
              <li><strong>Distance Education Criteria (Clause 10.4.2):</strong> Qualifications obtained through Open Universities / Distance Education mode that are approved by the Distance Education Council and, wherever necessary, by AICTE, recognized for employment under Central Government vide Gazette Notification No. 44 dated 1st March 1995 alone shall be considered eligible.</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 16,
      title: '16. Experience Requirement: Zero Experience (Freshers Eligible)',
      badge: 'Experience: Nil',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
            <span class="text-2xl">🎓</span>
            <div>
              <h4 class="font-bold text-emerald-900 text-sm">Clause 3.3: EXPERIENCE – No Experience Required</h4>
              <p class="text-xs text-emerald-800 mt-1">
                There is zero post-qualification experience requirement for Scientific/Technical Assistant-A. Fresh engineering graduates (B.E./B.Tech), post-graduates (M.Sc./MS), and MCA holders possessing an eligible valid GATE score (2024, 2025, or 2026) are fully eligible to apply.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 17,
      title: '17. Place of Posting Policy (Clause 4: All-India & Foreign Liability)',
      badge: 'Posting',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Clause 4 and Clause 10.4.9 of the notification:</p>
          <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs text-slate-800">
            <p><strong>Place of Posting (Clause 4):</strong> The person selected may be posted <strong>anywhere in India and outside India</strong> in the interest of the Organization.</p>
            <p><strong>All-India Service Liability (Clause 10.4.9):</strong> The post carries with it All India liability to be posted anywhere in India across NIC Headquarters, State Centres, District Units, or participating ministries.</p>
            <p><strong>No Posting Queries (Clause 10.4.8):</strong> No query seeking advice on eligibility or specific preferred posting location will be entertained by NIC.</p>
          </div>
        </div>
      `
    },
    {
      id: 18,
      title: '18. Selection Process Overview & End-to-End Recruitment Roadmap',
      badge: 'Selection Process',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The recruitment to Scientific/Technical Assistant-A is strictly merit-based and transparent. The complete selection roadmap comprises the following stages:</p>
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-2.5 my-3">
            <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs text-center">
              <span class="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs inline-flex items-center justify-center mb-1.5">1</span>
              <span class="font-bold text-xs text-slate-800 block">Registration</span>
              <span class="text-[11px] text-slate-500 mt-0.5 block">Submit online form with best GATE score (2024/25/26)</span>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs text-center">
              <span class="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs inline-flex items-center justify-center mb-1.5">2</span>
              <span class="font-bold text-xs text-slate-800 block">Merit List</span>
              <span class="text-[11px] text-slate-500 mt-0.5 block">Discipline & Category-wise ranking by GATE Score</span>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs text-center">
              <span class="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs inline-flex items-center justify-center mb-1.5">3</span>
              <span class="font-bold text-xs text-slate-800 block">Document Verification</span>
              <span class="text-[11px] text-slate-500 mt-0.5 block">Original certificates & biometric verification at Delhi</span>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs text-center">
              <span class="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs inline-flex items-center justify-center mb-1.5">4</span>
              <span class="font-bold text-xs text-slate-800 block">Provisional Offer</span>
              <span class="text-[11px] text-slate-500 mt-0.5 block">Appointment letter issued to verified candidates</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 19,
      title: '19. Equal Weightage Principle for GATE 2024, 2025, and 2026',
      badge: 'Equal Weightage',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per <strong>Clause 6.3</strong> of the official notification:</p>
          <div class="p-4 bg-indigo-50 border border-indigo-200 rounded-xl">
            <h4 class="font-bold text-indigo-950 text-sm">Clause 6.3: Equal weightage will be given to GATE 2024, GATE 2025 and GATE 2026 Scores.</h4>
            <p class="text-xs text-indigo-900 mt-1.5 leading-relaxed">
              Whether a candidate qualified GATE in 2024, 2025, or 2026, their normalized numerical GATE Score (out of 1000) will be compared on equal footing. Candidates who appeared in multiple GATE cycles are advised to submit the score from the year in which their score was the highest.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 20,
      title: '20. Discipline-wise & Category-wise Merit List Preparation (Clause 6.2)',
      badge: 'Merit List',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Merit list preparation is governed by Clause 6.1 and 6.2:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
            <li>Only candidates fulfilling the essential eligibility criteria (Clause 3) and who have successfully registered their application on the portal shall be considered.</li>
            <li>A separate category-wise merit list will be prepared for each discipline in the descending order of merit of the GATE Score.</li>
            <li>Candidates are shortlisted strictly in the ratio of available vacancies per category before offering provisional appointment.</li>
          </ul>
        </div>
      `
    },
    {
      id: 21,
      title: '21. Official Three-Tier Tie-Breaking Rules & Resolution Hierarchy (Clause 6.4)',
      badge: 'Tie-Breaking',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>In case of a tie in the GATE Score between two or more candidates within the same category and discipline, the following criteria will be adopted in strict order of sequence (Clause 6.4):</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Priority Stage</th>
                  <th class="p-2.5">Resolution Rule</th>
                  <th class="p-2.5">Example / Explanation</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-blue-800">1st Priority (First)</td>
                  <td class="p-2.5 font-semibold">Older year GATE Score shall be ranked higher</td>
                  <td class="p-2.5">A score obtained in GATE 2024 is ranked higher than the same score in GATE 2025; GATE 2025 is ranked higher than GATE 2026.</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-purple-800">2nd Priority (Second)</td>
                  <td class="p-2.5 font-semibold">Candidate older in age shall be ranked higher</td>
                  <td class="p-2.5">If the GATE score and the GATE exam year are identical, the candidate with earlier date of birth takes precedence.</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-emerald-800">3rd Priority (Third)</td>
                  <td class="p-2.5 font-semibold">Higher percentage in essential qualification</td>
                  <td class="p-2.5">If still tied, candidate with higher percentage in the essential qualification declared at application filling is ranked higher.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-500">Note: In case of CGPA, if the university does not provide a conversion formula, the candidate must provide an official conversion certificate from the Registrar to that effect.</p>
        </div>
      `
    },
    {
      id: 22,
      title: '22. Crucial Clarification: No Written Exam / No CBT Conducted by NIC',
      badge: 'No Exam Notice',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
            <div class="flex items-center gap-2">
              <span class="text-lg">📢</span>
              <h4 class="font-bold text-emerald-950 text-sm">Important Notice for Candidates</h4>
            </div>
            <p class="text-xs text-emerald-900 leading-relaxed">
              Unlike previous recruitment cycles conducted through NIELIT/NIC that involved a separate Computer-Based Test (CBT), <strong>Advt No: NIC/STA/2026/2 has NO written examination and NO interview</strong>.
            </p>
            <ul class="list-disc pl-4 space-y-1 text-xs text-emerald-900">
              <li>Candidates are NOT required to download an exam admit card or travel for a written test.</li>
              <li>Selection is executed 100% on the basis of valid GATE Score (2024 / 2025 / 2026) followed by Document Verification.</li>
              <li>Beware of unauthorized third-party exam syllabus / mock tests pretending to be for NIC STA-A 2026.</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 23,
      title: '23. Document Verification (DV) Procedure & Schedule (Clause 6.5 – 6.8)',
      badge: 'Document Verification',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates shortlisted based on GATE score merit will be called for in-person Document Verification:</p>
          <ul class="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
            <li><strong>Authorization Letter:</strong> Shortlisted candidates can download their official Authorization Letter for document verification from the NIC recruitment portal (www.recruitment.nic.in).</li>
            <li><strong>Venue:</strong> Document Verification shall be conducted at <strong>Delhi</strong> or at any other location / mode approved by the competent authority.</li>
            <li><strong>No Postponement:</strong> No request for postponement or change in location/date shall be allowed or entertained.</li>
            <li><strong>No TA/DA:</strong> No TA/DA shall be paid for appearing for Document Verification.</li>
            <li><strong>Mandatory Attendance:</strong> In case a candidate fails to appear on the specified date, time, and venue along with original certificates, their candidature will be cancelled without further opportunity.</li>
          </ul>
        </div>
      `
    },
    {
      id: 24,
      title: '24. Mandatory Checklist of Original Documents for Verification (Clause 7)',
      badge: 'Original Documents',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates must produce original documents along with self-attested photocopies during Document Verification. Non-production of any required certificate will lead to immediate debarment:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Clause</th>
                  <th class="p-2.5">Mandatory Document Required</th>
                  <th class="p-2.5">Prescribed Issuing Authority / Conditions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold">7.1</td>
                  <td class="p-2.5 font-semibold">Date of Birth Proof</td>
                  <td class="p-2.5">Birth Certificate issued by Municipality or Matriculation / High School Examination Certificate indicating DoB</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">7.2</td>
                  <td class="p-2.5 font-semibold">Secondary & Higher Secondary Certificates</td>
                  <td class="p-2.5">Matriculation (10th) and Senior Secondary (12th) Examination Marksheets and Certificates</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">7.3</td>
                  <td class="p-2.5 font-semibold">GATE Score Card</td>
                  <td class="p-2.5">Original GATE Score Card for 2024 / 2025 / 2026 (as declared in application)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">7.4</td>
                  <td class="p-2.5 font-semibold">Essential Qualification Certificates</td>
                  <td class="p-2.5">Semester-wise Marksheets (with result declaration date), Final Degree Certificate or Provisional Pass Certificate</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">7.4.4</td>
                  <td class="p-2.5 font-semibold">CGPA Conversion Certificate</td>
                  <td class="p-2.5">Official formula or conversion certificate from University Registrar (if marks in CGPA/OGPA)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">7.5</td>
                  <td class="p-2.5 font-semibold">No Objection Certificate (NOC)</td>
                  <td class="p-2.5">In prescribed format (Annexure VII) for candidates working in Central/State Govt/PSUs/Autonomous Bodies</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">7.6 & 7.7</td>
                  <td class="p-2.5 font-semibold">Age Relaxation & Ex-Serviceman Certificates</td>
                  <td class="p-2.5">Annexure VIII for in-service candidates; Annexure IX for Ex-Servicemen</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">7.8</td>
                  <td class="p-2.5 font-semibold">Name Change Proof</td>
                  <td class="p-2.5">Official Gazette Notification in case of any change/variation in name</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">7.9</td>
                  <td class="p-2.5 font-semibold">Caste / Category / PwBD / EWS Certificate</td>
                  <td class="p-2.5">Central Government format (Annexure I for SC/ST; Annexure II for OBC; Annexure III for EWS; Annexure IV/V/VI for PwBD)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">7.10 & 7.11</td>
                  <td class="p-2.5 font-semibold">Identity Proofs</td>
                  <td class="p-2.5">Aadhaar Card for Aadhaar-based authentication + Photo ID (PAN Card, Driving License, Voter ID, or Passport)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 25,
      title: '25. Aadhaar-Based Authentication (Clause 5 & 7.10)',
      badge: 'Authentication',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3.5 bg-blue-50 border border-blue-200 rounded-xl space-y-2">
            <span class="font-bold text-blue-900 text-xs uppercase tracking-wider block">IMPORTANT NOTIFICATION MANDATE:</span>
            <p class="text-xs text-blue-950 leading-relaxed">
              <strong>“Aadhaar based authentication shall be used at every stage of the recruitment process.”</strong> Candidates must ensure that their name, date of birth, and gender registered on Aadhaar match exactly with their matriculation certificate. Candidates must carry their Aadhaar card during document verification for biometric authentication.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 26,
      title: '26. Application Fee Structure & Exemptions (Table-VI)',
      badge: 'Fee Details',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Application fees are non-refundable and must be remitted strictly through the integrated online payment gateway:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Candidate Category</th>
                  <th class="p-2.5">Fee Payable (Per Discipline)</th>
                  <th class="p-2.5">Payment Mode</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr class="bg-emerald-50/40">
                  <td class="p-2.5 font-semibold">SC / ST / PwBD / Women Candidates</td>
                  <td class="p-2.5 font-bold text-emerald-800 text-sm">Nil (₹0/-)</td>
                  <td class="p-2.5 font-medium">Exempted from fee payment</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">General (UR) / OBC (NCL) / EWS Candidates</td>
                  <td class="p-2.5 font-bold text-slate-900 text-sm">₹800/-</td>
                  <td class="p-2.5 font-medium">Debit Card, Credit Card, Net Banking, UPI</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-xs space-y-1">
            <p><strong>Applying for Multiple Disciplines:</strong> Candidates who are applying for more than one discipline need to pay <strong>₹800/- for every discipline</strong>.</p>
            <p><strong>Bank Charges:</strong> Bank transaction/gateway charges, if any, will be borne by the candidate.</p>
            <p><strong>No Offline Modes:</strong> Cash, Demand Draft, Pay Order, Cheque, or Challan will strictly NOT be accepted.</p>
          </div>
        </div>
      `
    },
    {
      id: 27,
      title: '27. Applying for Multiple Disciplines – Guidelines & Criteria',
      badge: 'Multiple Disciplines',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates eligible for more than one discipline (e.g., holding degree eligibility and qualifying GATE in CS as well as DA) may apply for multiple disciplines subject to the following rules:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
            <li>Candidates must satisfy the essential qualifications and hold a valid GATE score corresponding to each applied discipline.</li>
            <li>Separate application fee of ₹800/- must be paid for each discipline (for UR/OBC/EWS).</li>
            <li>Incomplete applications for any discipline without requisite fee will be rejected for that discipline.</li>
          </ul>
        </div>
      `
    },
    {
      id: 28,
      title: '28. Step-by-Step 4-Stage Online Application Process (Clause 5)',
      badge: 'How to Apply',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The complete application on the official portal (https://recruitment.nic.in) can be submitted in <strong>4 mandatory steps</strong>:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-xs font-bold text-blue-700 uppercase block">STEP 1: Registration</span>
              <p class="text-xs text-slate-700 mt-1">Register using basic personal details, active mobile number, and valid email ID. Create login credentials (Application Number and Password).</p>
            </div>
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-xs font-bold text-blue-700 uppercase block">STEP 2: Form Filling & Uploads</span>
              <p class="text-xs text-slate-700 mt-1">Fill academic records, choose discipline, enter GATE details (year, registration number, score), and upload photograph, signature, and PDF certificates.</p>
            </div>
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-xs font-bold text-blue-700 uppercase block">STEP 3: Payment of Application Fee</span>
              <p class="text-xs text-slate-700 mt-1">Pay ₹800 per discipline (if applicable) through online payment gateway. SC/ST/PwBD/Women candidates bypass this step.</p>
            </div>
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-xs font-bold text-blue-700 uppercase block">STEP 4: Download Confirmation Page</span>
              <p class="text-xs text-slate-700 mt-1">Generate and download the final Application Confirmation Page. Keep multiple printed copies for Document Verification.</p>
            </div>
          </div>
          <p class="text-xs text-red-700 font-semibold">⚠️ All 4 steps must be completed before 30.09.2026 (05:30 PM). If Confirmation Page cannot be generated, the application is treated as incomplete and summarily rejected.</p>
        </div>
      `
    },
    {
      id: 29,
      title: '29. Pre-Requisite Checklist Before Starting Online Application (Clause 5.1)',
      badge: 'Checklist',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates should keep the following ready before opening the application form:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
            <li>Active and valid personal Email ID and Mobile Number.</li>
            <li>Credit Card / Debit Card / Net Banking / UPI details for fee payment.</li>
            <li>Recent passport size color photograph in JPG/JPEG (50 KB to 200 KB).</li>
            <li>Scanned image of signature in blue or black ink in JPG/JPEG (10 KB to 50 KB).</li>
            <li>Self-attested scanned PDF copies (10 KB to 500 KB) of DoB proof, 10th & 12th certificates, GATE score card, degree/marksheets, category/PwBD certificates, and NOC (if applicable).</li>
          </ul>
        </div>
      `
    },
    {
      id: 30,
      title: '30. Scanned Photograph & Signature Specifications (Clause 5.1)',
      badge: 'Photo & Sign',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Asset</th>
                  <th class="p-2.5">Allowed Format</th>
                  <th class="p-2.5">File Size Limits</th>
                  <th class="p-2.5">Key Guidelines</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-blue-900">Recent Colour Photograph</td>
                  <td class="p-2.5 font-mono">JPG / JPEG</td>
                  <td class="p-2.5 font-semibold text-emerald-700">Min 50 KB – Max 200 KB</td>
                  <td class="p-2.5">Recent colored photo with light/white background; clear frontal view without cap or goggles.</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-purple-900">Candidate's Signature</td>
                  <td class="p-2.5 font-mono">JPG / JPEG</td>
                  <td class="p-2.5 font-semibold text-emerald-700">Min 10 KB – Max 50 KB</td>
                  <td class="p-2.5">Signed in blue or black ink on white paper; capital/block letter signatures will be rejected.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 31,
      title: '31. PDF Document Upload Specifications (10 KB – 500 KB Self-Attested)',
      badge: 'Document Uploads',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Every supporting document uploaded under Clause 5.1(d) must adhere to these technical parameters:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>Format:</strong> PDF format only.</li>
            <li><strong>Size Limits:</strong> Minimum <strong>10 KB</strong> and Maximum <strong>500 KB</strong> per file.</li>
            <li><strong>Self-Attestation:</strong> All uploaded certificates must be clearly legible and self-attested with the candidate’s signature and date.</li>
            <li><strong>Rejection on Illegible Uploads (Clause 10.4.1):</strong> Uploading of irrelevant, incomplete, or illegible documents may lead to summary disqualification.</li>
          </ul>
        </div>
      `
    },
    {
      id: 32,
      title: '32. CGPA Conversion Certificate & Registrar Authentication (Clause 6.4)',
      badge: 'CGPA Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Where grades are awarded on a CGPA / OGPA / CPI grading scale:</p>
          <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs text-slate-800">
            <p>1. Candidates must convert their CGPA into equivalent percentage strictly as per their University/Institute official formula.</p>
            <p>2. The conversion formula must be clearly mentioned on the marksheet/certificate or in an official notification issued by the University.</p>
            <p>3. <strong>Clause 6.4 Mandate:</strong> If the university does not provide a formula, the candidate must obtain and provide an official certificate from the <strong>Registrar of the University</strong> to that effect.</p>
          </div>
        </div>
      `
    },
    {
      id: 33,
      title: '33. OBC (Non-Creamy Layer) Certificate Guidelines (Annexure II)',
      badge: 'OBC Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Table-VII(b) of the notification:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li>OBC candidates must produce a valid <strong>OBC (Non-Creamy Layer)</strong> certificate in the format (Annexure II) prescribed by the Government of India for “Appointment to posts under Govt. of India”.</li>
            <li>The certificate must clearly certify that the candidate does not belong to the Creamy Layer as per DoPT OM No. 36012/22/93-Estt(SCT) dated 08.09.1993.</li>
            <li><strong>State List Certificates Disallowed:</strong> Certificates issued for appointment under State Governments (i.e. belonging to state list of OBC) or for educational purposes will strictly NOT be considered.</li>
            <li>Certificate must be issued on or before the closing date: <strong>30/09/2026</strong>.</li>
          </ul>
        </div>
      `
    },
    {
      id: 34,
      title: '34. Economically Weaker Sections (EWS) Certificate Validity (Annexure III)',
      badge: 'EWS Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Table-VII(d) of the notification, EWS reservation is governed by DoPT OM No. 36039/1/2019-Estt (Res) dated 31st January 2019:</p>
          <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-xs text-slate-800">
            <p><strong>Income Financial Year:</strong> Certificate must be based on income of <strong>Financial Year 2025-26</strong>.</p>
            <p><strong>Validity Year:</strong> The certificate must be valid for the year <strong>2026-27</strong>.</p>
            <p><strong>Competent Authorities:</strong> District Magistrate, ADM, Collector, Deputy Commissioner, 1st Class Stipendiary Magistrate, Sub-Divisional Magistrate, Taluka/Executive Magistrate, Chief Presidency Magistrate, or Revenue Officer not below the rank of Tehsildar.</p>
          </div>
        </div>
      `
    },
    {
      id: 35,
      title: '35. SC / ST Category Certificate Regulations (Annexure I)',
      badge: 'SC/ST Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Table-VII(a):</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li>Candidates applying under SC / ST category must submit relevant Caste Certificate in the prescribed Government of India format (Annexure I).</li>
            <li>The certificate must be issued by the Competent Authority on or before the closing date: <strong>30/09/2026</strong>.</li>
            <li>Caste mentioned in the certificate must find place in the Presidential Orders scheduled list.</li>
          </ul>
        </div>
      `
    },
    {
      id: 36,
      title: '36. Persons with Benchmark Disabilities (PwBD) Certificate (Annexure IV / V / VI)',
      badge: 'Disability Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Table-VII(c):</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li>Candidates applying against vacancies reserved for PwBD category must submit a valid Permanent Disability Certificate indicating minimum <strong>40% permanent disability</strong>.</li>
            <li>Certificate must be in prescribed central format (Annexure IV / V / VI) issued by a constituted Government Medical Board.</li>
            <li>Certificate must be issued on or before the closing date of application (30/09/2026).</li>
          </ul>
        </div>
      `
    },
    {
      id: 37,
      title: '37. No Objection Certificate (NOC) for Serving Employees (Annexure VII)',
      badge: 'NOC Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Clause 7.5 and 10.4.5:</p>
          <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs text-slate-800">
            <p>Candidates working in Central / State Government / PSUs / Autonomous Bodies / Aided Institutions must obtain and submit a 'No Objection Certificate' (NOC) in the prescribed format (Annexure VII) from their employer.</p>
            <p>The NOC must explicitly confirm that no disciplinary or vigilance case is either pending or contemplated against the employee.</p>
          </div>
        </div>
      `
    },
    {
      id: 38,
      title: '38. Gazette Notification Requirement for Change of Name (Clause 7.8)',
      badge: 'Name Change',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 7.8, applicants who have changed their name after matriculation (for example, post-marriage or due to deed poll) are strictly required to furnish a copy of the official <strong>Gazette Notification</strong> reflecting the change of name at the time of Document Verification.</p>
        </div>
      `
    },
    {
      id: 39,
      title: '39. Provisional Nature of Recruitment & Final Appointment Conditions (Clause 6.8)',
      badge: 'Provisional Status',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The admission at any stage of the recruitment will be purely provisional, subject to satisfying the prescribed eligibility conditions:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
            <li>Mere fulfilling of requirements or inclusion in the merit list does not confer any vested right to appointment (Clause 6.6).</li>
            <li>Upon completion of Document Verification, candidates found eligible shall be offered provisional appointment subject to medical fitness and character/antecedents verification.</li>
          </ul>
        </div>
      `
    },
    {
      id: 40,
      title: '40. Medical Fitness & Character/Antecedents Verification',
      badge: 'Medical & Police',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Prior to formal joining, provisionally appointed candidates must undergo standard medical examination as per Central Civil Services rules to ascertain sound mental and bodily health. Police verification of character and antecedents will also be conducted in accordance with central government norms.</p>
        </div>
      `
    },
    {
      id: 41,
      title: '41. Action Against Misconduct, Forgery & False Declarations (Clause 8)',
      badge: 'Misconduct Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 8, candidates furnishing fabricated, tampered, or false certificates or concealing material facts will face strict penalties:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-red-900">
            <li>Immediate cancellation/rejection of candidature at any stage.</li>
            <li>Termination from service without notice if already appointed.</li>
            <li>Criminal prosecution under relevant sections of law.</li>
            <li>Permanent or specified period debarment from any recruitment conducted by NIC.</li>
          </ul>
        </div>
      `
    },
    {
      id: 42,
      title: '42. No Modification / Correction Window Policy (Clause 10.4.6)',
      badge: 'No Corrections',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3.5 bg-amber-50 border border-amber-200 rounded-xl space-y-1.5 text-xs text-amber-950">
            <span class="font-bold uppercase tracking-wider block">Strict Finality of Submitted Data:</span>
            <p>Any request for change of Address, Email ID, Mobile Number, Name, Category, or Discipline after final submission of the application form will NOT be entertained.</p>
            <p>Particulars furnished by the applicant in the online application form will be treated as final and binding.</p>
          </div>
        </div>
      `
    },
    {
      id: 43,
      title: '43. Official Communication Channels & Candidate Responsibility (Clause 9.3)',
      badge: 'Correspondence',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>All correspondences regarding recruitment, document verification, and joining will be made through e-mail / SMS on registered credentials:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li>Candidates must maintain an active primary email and mobile number until completion of the recruitment process.</li>
            <li>Candidates are required to regularly visit the official recruitment portal (<strong>https://recruitment.nic.in/</strong>) for all notices and authorization letters.</li>
            <li>Disclaimer: NIC shall not be responsible for failure of candidates to respond to online communications resulting in rejection of candidature.</li>
          </ul>
        </div>
      `
    },
    {
      id: 44,
      title: '44. Court of Jurisdiction & Legal Matters (Clause 10.4.7)',
      badge: 'Legal',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 10.4.7 of the notification, the <strong>Court of jurisdiction for any dispute will be in Delhi</strong> only. All legal representations or proceedings arising out of this recruitment advertisement fall exclusively under courts located in New Delhi.</p>
        </div>
      `
    },
    {
      id: 45,
      title: '45. Probation Period & Career Progression in NIC',
      badge: 'Career Growth',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Scientific/Technical Assistant-A officers undergo a standard probation period of 2 years as per Central Government S&T service guidelines. Career progression follows the Flexible Complementing Scheme (FCS) / Modified FCS providing time-bound promotion avenues to higher scientific grades (Scientific Officer / Engineer-SB, Scientist-B, Scientist-C, and beyond).</p>
        </div>
      `
    },
    {
      id: 46,
      title: '46. Duties & Responsibilities of Scientific/Technical Assistant-A',
      badge: 'Job Profile',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As a core technical contributor at NIC, responsibilities include:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li>Development, deployment, and maintenance of national and state-level e-governance applications and web portals.</li>
            <li>Network administration, cloud infrastructure management, and data center operations.</li>
            <li>Data analytics, AI/ML model deployment, database management, and cybersecurity operations.</li>
            <li>Technical coordination with various central ministries, state departments, and district informatics centres.</li>
          </ul>
        </div>
      `
    },
    {
      id: 47,
      title: '47. Comparative Analysis: GATE Cutoff Trends & Competition Dynamics',
      badge: 'Score Analysis',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Since selection is purely on GATE Score across 2024, 2025, and 2026 without any written examination or interview, the competition will be direct and merit-intensive. Having equal weightage across three years ensures all high-scoring candidates across 2024–2026 compete fairly. Candidates are encouraged to apply early and verify all uploaded certificate details.</p>
        </div>
      `
    },
    {
      id: 48,
      title: '48. Official Helpdesk, Contact Details & Grievance Redressal (Clause 10.4.12)',
      badge: 'Helpdesk',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>For technical queries or issues related to online application submission:</p>
          <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs text-slate-800">
            <p><strong>Official Helpdesk Email:</strong> <a href="mailto:helpdesk-nic@nic.in" class="text-blue-600 font-mono font-bold hover:underline">helpdesk-nic@nic.in</a></p>
            <p><strong>Email Subject Line Requirement:</strong> Candidates must mention <em>Advt No: NIC/STA/2026/2</em> in the subject line along with their Application ID.</p>
            <p><strong>Official Recruitment Website:</strong> <a href="https://recruitment.nic.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold hover:underline">www.recruitment.nic.in</a></p>
            <p><strong>NIC Official Website:</strong> <a href="https://www.nic.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold hover:underline">www.nic.gov.in</a></p>
          </div>
        </div>
      `
    },
    {
      id: 49,
      title: '49. Frequently Asked Questions (FAQs) – 10 Critical Candidate Doubts Answered',
      badge: 'FAQs',
      content: `
        <div class="space-y-3 text-slate-700 text-xs sm:text-sm">
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1">
            <h5 class="font-bold text-slate-900">Q1. Is there any written exam or interview for NIC STA-A 2026?</h5>
            <p class="text-slate-600">No. Selection is strictly based on valid GATE Score (2024, 2025, or 2026) followed by Document Verification. There is NO separate written examination and NO interview.</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1">
            <h5 class="font-bold text-slate-900">Q2. Which GATE papers are eligible?</h5>
            <p class="text-slate-600">Computer Science & Information Technology (CS), Electronics & Communication Engineering (EC), and Data Science & Artificial Intelligence (DA).</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1">
            <h5 class="font-bold text-slate-900">Q3. What is the total number of vacancies?</h5>
            <p class="text-slate-600">Total 376 vacancies (CSIT: 300, ECE: 26, DS & AI: 50).</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1">
            <h5 class="font-bold text-slate-900">Q4. What is the upper age limit?</h5>
            <p class="text-slate-600">30 years for UR/EWS, 33 years for OBC (NCL), 35 years for SC/ST, and 40 years for PwBD (calculated as on 30.09.2026).</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1">
            <h5 class="font-bold text-slate-900">Q5. Is any prior work experience required?</h5>
            <p class="text-slate-600">No. Zero experience is required (Clause 3.3). Fresh graduates and post-graduates are eligible.</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1">
            <h5 class="font-bold text-slate-900">Q6. What is the application fee?</h5>
            <p class="text-slate-600">₹800/- per discipline for UR/OBC/EWS candidates. SC, ST, PwBD, and Women candidates are completely exempted (₹0).</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1">
            <h5 class="font-bold text-slate-900">Q7. Can I apply if I appeared in multiple GATE exam years?</h5>
            <p class="text-slate-600">Yes. Candidates must submit their best GATE score from any one of the eligible years (2024, 2025, or 2026) for the discipline applied.</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1">
            <h5 class="font-bold text-slate-900">Q8. How are ties resolved in the merit list?</h5>
            <p class="text-slate-600">1st Priority: Older year GATE score (2024 > 2025 > 2026); 2nd Priority: Older candidate in age; 3rd Priority: Higher percentage in essential degree qualification.</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1">
            <h5 class="font-bold text-slate-900">Q9. What is the pay scale for Scientific/Technical Assistant-A?</h5>
            <p class="text-slate-600">Pay Level 6 (₹35,400 – ₹1,12,400) under 7th CPC (Group-B S&T Non-Gazetted).</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1">
            <h5 class="font-bold text-slate-900">Q10. What is the last date to apply?</h5>
            <p class="text-slate-600">30 September 2026, 05:30 PM.</p>
          </div>
        </div>
      `
    },
    {
      id: 50,
      title: '50. Important Official Links Directory',
      badge: 'Official Links',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Access all official portals, notifications, and updates via direct links verified from the official notification:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Resource Description</th>
                  <th class="p-2.5">Official Direct Link</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-blue-900">Online Application Portal (NIC Examination Services)</td>
                  <td class="p-2.5">
                    <a href="https://examinationservices.nic.in/RecSys2026/root/Home.aspx?enc=Ei4cajBkK1gZSfgr53ImFXtMXN2MK6NKP95h1YQuush6qzOwvn7yKuo+zlkn8eWt" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold hover:underline break-all">Apply Online Portal</a>
                  </td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-purple-900">Official Detailed Notification PDF (Advt No: NIC/STA/2026/2)</td>
                  <td class="p-2.5">
                    <a href="https://recruitment.nic.in/DetailedSTA.pdf" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold hover:underline">Download Official Notification (PDF)</a>
                  </td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">NIC Official Recruitment Portal</td>
                  <td class="p-2.5">
                    <a href="https://recruitment.nic.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold hover:underline">https://recruitment.nic.in/</a>
                  </td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">National Informatics Centre (NIC) Main Website</td>
                  <td class="p-2.5">
                    <a href="https://www.nic.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold hover:underline">https://www.nic.gov.in/</a>
                  </td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-sky-800">RajDailyTools Telegram Updates Channel</td>
                  <td class="p-2.5">
                    <a href="https://t.me/Educator4ll" target="_blank" rel="noopener noreferrer" class="text-sky-600 font-bold hover:underline">Join Telegram (@Educator4ll)</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    }
  ];
}

export const NIC_STA_2026_EXAM: ExamRecord = {
  id: 'nic-sta-2026',
  slug: 'nic-scientific-technical-assistant-recruitment-2026',
  examName: 'NIC Scientific/Technical Assistant-A Recruitment 2026',
  shortName: 'NIC STA-A 2026',
  postName: 'Scientific/Technical Assistant-A (Group-B S&T Non-Gazetted)',
  organization: 'National Informatics Centre (NIC), MeitY, Govt. of India',
  category: 'Govt Exam',
  state: 'All India',
  totalVacancy: '376 Posts',
  applicationStartDate: '2026-09-01',
  applicationLastDate: '2026-09-30',
  examDate: 'No Written Exam (Selection Based on GATE Score)',
  admitCardDate: 'Not Applicable (Selection via GATE Score)',
  answerKeyDate: 'Not Applicable',
  resultDate: 'To Be Announced / Merit List Soon',
  cutOffDate: 'To Be Announced',
  status: 'APPLICATION_OPEN',
  education: ['Graduation', 'Post Graduation'],
  minimumQualificationLevel: 'B.E. / B.Tech / M.Sc. / MS / MCA in prescribed fields + Valid GATE Score (CS / EC / DA)',
  acceptedQualificationLevels: ['Graduation', 'Post Graduation'],
  higherQualificationAccepted: true,
  ageMin: 18,
  ageMax: 30,
  ageRelaxationInfo: 'OBC (NCL): 3 years (33 max), SC/ST: 5 years (35 max), PwBD: 10 years (40 max; SC/ST PwBD: 45, OBC PwBD: 43), Service Candidates: 5 years (UR/EWS: 35, SC/ST: 40, OBC: 38).',
  gender: 'All',
  logoIcon: '💻',
  officialWebsite: 'https://www.nic.gov.in/',
  officialNotification: 'https://recruitment.nic.in/DetailedSTA.pdf',
  applyLink: 'https://examinationservices.nic.in/RecSys2026/root/Home.aspx?enc=Ei4cajBkK1gZSfgr53ImFXtMXN2MK6NKP95h1YQuush6qzOwvn7yKuo+zlkn8eWt',
  description: 'NIC Scientific/Technical Assistant-A Recruitment 2026 (Advt No: NIC/STA/2026/2) – Apply online for 376 Group-B S&T posts (Level 6: ₹35,400–₹1,12,400). Selection based strictly on valid GATE 2024/2025/2026 score in CS, EC, and DA papers followed by Document Verification.',
  shortSummary: 'National Informatics Centre (NIC) invites online applications for 376 Scientific/Technical Assistant-A vacancies across CSIT, ECE, and DS & AI. Selection via valid GATE 2024/2025/2026 score + Document Verification. Online applications active from 01 to 30 September 2026.',
  importantDates: [
    { label: 'Opening Date for On-Line Applications', date: '01 September 2026 (10:00 AM)', isHighlight: true },
    { label: 'Closing Date for On-Line Applications', date: '30 September 2026 (05:30 PM)', isHighlight: true },
    { label: 'Cut-off Date for Age & Qualification', date: '30 September 2026' },
    { label: 'Document Verification (DV) Schedule', date: 'To Be Announced on NIC Website', isHighlight: true },
    { label: 'Written Exam / Admit Card', date: 'Not Applicable (GATE Score Based Selection)' }
  ],
  applicationFee: [
    { category: 'UR / OBC (NCL) / EWS Candidates (Per Discipline)', amount: 'Rs. 800/-' },
    { category: 'SC / ST / PwBD / Women Candidates', amount: 'Nil (Rs. 0/-)' }
  ],
  vacancies: [
    { category: 'Computer Sciences & Information Technology (CSIT)', postCount: 300 },
    { category: 'Electronics and Communication Engineering (ECE)', postCount: 26 },
    { category: 'Data Science and Artificial Intelligence (DS & AI)', postCount: 50 }
  ],
  selectionProcess: [
    'Stage 1: Verification of essential qualifications and valid GATE score (2024 / 2025 / 2026) in paper codes CS, EC, or DA',
    'Stage 2: Category-wise and discipline-wise merit list preparation with equal weightage to GATE 2024, 2025, and 2026 scores',
    'Stage 3: Tie-breaking resolution (Older GATE year > Older candidate in age > Higher percentage in essential degree qualification)',
    'Stage 4: Document Verification (DV) at Delhi / designated centre with biometric Aadhaar authentication',
    'Stage 5: Final Provisional Appointment Offer'
  ],
  examPattern: [
    {
      stageName: 'GATE Score Merit Selection (No Written Test Conducted by NIC)',
      mode: 'Valid GATE Score (2024 / 2025 / 2026) Evaluation',
      duration: 'GATE Exam Score Card based',
      negativeMarking: 'N/A',
      subjects: [
        { name: 'Paper CS: Computer Science and Information Technology', questions: 65, marks: 1000 },
        { name: 'Paper EC: Electronics and Communication Engineering', questions: 65, marks: 1000 },
        { name: 'Paper DA: Data Science and Artificial Intelligence', questions: 65, marks: 1000 }
      ]
    },
    {
      stageName: 'Document Verification (DV) & Aadhaar Authentication',
      mode: 'In-person verification at Delhi',
      duration: 'Original certificate verification',
      negativeMarking: 'N/A',
      subjects: [
        { name: 'Scrutiny of Original Academic, GATE, Category & Identity Credentials', questions: 1, marks: 100 }
      ]
    }
  ],
  salary: {
    payScale: 'Level 6 (₹35,400 – ₹1,12,400) of 7th CPC',
    inHand: '₹60,000 to ₹72,000+ per month (approx. including DA, HRA, TA as per city class)',
    allowances: 'DA (50%+), HRA (10%-30%), TA, CGHS Medical Facility, Children Education Allowance (CEA), LTC & NPS'
  },
  faq: [
    {
      q: 'What is the total number of vacancies in NIC Scientific/Technical Assistant-A Recruitment 2026?',
      a: 'A total of 376 vacancies are announced: Computer Sciences & Information Technology (300), Electronics and Communication Engineering (26), and Data Science and Artificial Intelligence (50).'
    },
    {
      q: 'What are the opening and closing dates for online applications?',
      a: 'Online applications opened on 01 September 2026 (10:00 AM) and close on 30 September 2026 (05:30 PM).'
    },
    {
      q: 'Is there any written examination or interview conducted by NIC?',
      a: 'No. There is NO written exam and NO interview. Selection is based purely on a valid GATE Score (2024, 2025, or 2026) followed by Document Verification.'
    },
    {
      q: 'Which GATE test papers are eligible for NIC STA-A?',
      a: 'Computer Science and Information Technology (CS), Electronics and Communication Engineering (EC), and Data Science and Artificial Intelligence (DA).'
    },
    {
      q: 'What is the application fee for NIC STA-A 2026?',
      a: 'Rs. 800/- per discipline for UR, OBC (NCL), and EWS candidates. SC, ST, PwBD, and Women candidates are completely exempted from fee payment (Nil).'
    },
    {
      q: 'What is the upper age limit as on 30/09/2026?',
      a: '30 years for UR/EWS, 33 years for OBC (NCL), 35 years for SC/ST, and 40 years for PwBD candidates. 5 years relaxation is also available for eligible serving government employees.'
    },
    {
      q: 'Is any prior work experience required for this post?',
      a: 'No experience is required. Fresh graduates and post-graduates meeting degree and GATE requirements are eligible.'
    },
    {
      q: 'How will tie cases be resolved in the merit list?',
      a: 'First by older GATE exam year (2024 > 2025 > 2026); second by older age; and third by higher percentage in the essential degree qualification.'
    }
  ],
  allInformation: generateNicSta50Sections()
};

import { ExamInfoSection, AdmissionRecord } from '../types/exam';

export function generateNvsClass9_50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. NVS Class 9 Lateral Entry Admission 2027-28 – Official Notification Overview',
      content: `Navodaya Vidyalaya Samiti (NVS), an autonomous body under the Department of School Education & Literacy, Ministry of Education, Government of India, has published the official Prospectus-cum-Notification for the **Lateral Entry Selection Test (LEST 2027)** for admission to **Class-IX** against vacant seats likely to be available in Jawahar Navodaya Vidyalayas (JNVs) for the academic session **2027-28**.

Jawahar Navodaya Vidyalayas are co-educational, fully residential institutions affiliated to the Central Board of Secondary Education (CBSE). Education in JNVs is provided completely free of charge, including board and lodging, school uniforms, textbooks, and daily stationery.

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Notification Parameter</th>
        <th class="p-3">Official Details (Prospectus 2027-28)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Conducting Organization</td>
        <td class="p-3 font-bold text-slate-900">Navodaya Vidyalaya Samiti (NVS), Ministry of Education, Govt. of India</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Admission Scheme</td>
        <td class="p-3 font-bold text-blue-700">Class IX Lateral Entry Selection Test (LEST 2027) – Session 2027-28</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Total Functional JNVs</td>
        <td class="p-3 font-bold text-emerald-700">665 Vidyalayas across 27 States and 8 Union Territories (except Tamil Nadu)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Nature of Vacancies</td>
        <td class="p-3">Admissions conducted strictly against vacant seats likely to be available in respective JNVs</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Selection Test Date</td>
        <td class="p-3 font-bold text-rose-700">Saturday, 10th April 2027 (11:00 AM to 01:30 PM)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Last Date of Registration</td>
        <td class="p-3 font-bold text-amber-700">Wednesday, 30th September 2026</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Application Fee</td>
        <td class="p-3 font-bold text-emerald-700">₹0 / Free of Cost (All Categories: UR, OBC, SC, ST, Girls, Divyang)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Official Online Portal</td>
        <td class="p-3 font-mono text-xs text-blue-600 break-all"><a href="https://cbseitms.nic.in/2026/nvsix_9" target="_blank" rel="noopener noreferrer" class="underline font-bold">https://cbseitms.nic.in/2026/nvsix_9</a></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Official Websites</td>
        <td class="p-3"><a href="https://cbseitms.rcil.gov.in/nvs/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">https://cbseitms.rcil.gov.in/nvs/</a> &amp; <a href="https://www.navodaya.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">www.navodaya.gov.in</a></td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 2,
      title: '2. Important Dates & Event Schedule (Registration, Exam, Correction Window)',
      content: `Navodaya Vidyalaya Samiti has officially published the critical timeline for Class IX Lateral Entry 2027-28 admissions. Candidates and parents must adhere strictly to these cut-off dates:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Admission Milestone</th>
        <th class="p-3">Official Schedule</th>
        <th class="p-3">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold">Online Application Commenced</td>
        <td class="p-3">August 2026</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">Active</span></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Last Date to Submit Online Application</td>
        <td class="p-3 font-bold text-amber-700">30 September 2026 (Wednesday)</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-xs">Closing Soon</span></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Online Application Correction Window</td>
        <td class="p-3">2 Days after the closing of registrations</td>
        <td class="p-3 font-semibold text-slate-600">Strict 48-Hour Window</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Release of Admit Card / Hall Ticket</td>
        <td class="p-3">Not Released / To Be Updated (Preferably 1 month before exam)</td>
        <td class="p-3 text-slate-500">Upcoming</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Date of Lateral Entry Selection Test (LEST)</td>
        <td class="p-3 font-bold text-rose-700">10 April 2027 (Saturday, 11:00 AM – 01:30 PM)</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-bold text-xs">Confirmed</span></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Selection Test Duration</td>
        <td class="p-3">2 Hours 30 Minutes (+50 minutes for Divyang candidates)</td>
        <td class="p-3 text-slate-600">Single Shift</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Declaration of Selection Test Results</td>
        <td class="p-3">Not Released / To Be Updated</td>
        <td class="p-3 text-slate-500">To Be Notified</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Document Verification &amp; Final Admission</td>
        <td class="p-3">Not Released / To Be Updated</td>
        <td class="p-3 text-slate-500">Post-Result</td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 3,
      title: '3. Navodaya Vidyalaya Scheme – Objectives & 3-Language Formula',
      content: `In accordance with the National Policy on Education (1986), the Government of India established Jawahar Navodaya Vidyalayas (JNVs) to identify and nurture talented rural children across the country.

**Key Objectives of the Navodaya Vidyalaya Scheme:**
1. **Modern Quality Education:** Providing high quality modern schooling—including a strong cultural component, environmental awareness, adventure activities, values, and physical education—primarily to talented children from rural backgrounds.
2. **Three-Language Formula:** Ensuring students attain a reasonable level of competency in three languages (Regional Mother Tongue, Hindi, and English).
3. **National Integration:** Promoting national cohesion by migrating 30% of students in Class IX between Hindi-speaking and non-Hindi-speaking states for one full academic session.
4. **Focal Points of Excellence:** Serving as district resource hubs to elevate the overall standard of secondary education through sharing of best teaching practices and infrastructure.`
    },
    {
      id: 4,
      title: '4. State-Wise Distribution of 665 Functional JNVs (27 States & 8 UTs)',
      content: `At present, **665 Jawahar Navodaya Vidyalayas** are functional across 27 States and 8 Union Territories (except Tamil Nadu, which is outside the scheme):

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-2.5">State / UT</th>
        <th class="p-2.5">Functional JNVs</th>
        <th class="p-2.5">State / UT</th>
        <th class="p-2.5">Functional JNVs</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-2.5">Andhra Pradesh</td>
        <td class="p-2.5 font-bold">13 + 02** = 15</td>
        <td class="p-2.5">Madhya Pradesh</td>
        <td class="p-2.5 font-bold">51 + 02** + 01* = 54</td>
      </tr>
      <tr>
        <td class="p-2.5">Arunachal Pradesh</td>
        <td class="p-2.5 font-bold">18</td>
        <td class="p-2.5">Maharashtra</td>
        <td class="p-2.5 font-bold">33 + 01** = 34</td>
      </tr>
      <tr>
        <td class="p-2.5">Assam</td>
        <td class="p-2.5 font-bold">29 + 01** = 30</td>
        <td class="p-2.5">Manipur</td>
        <td class="p-2.5 font-bold">12 + 02* = 14</td>
      </tr>
      <tr>
        <td class="p-2.5">Bihar</td>
        <td class="p-2.5 font-bold">38 + 01** = 39</td>
        <td class="p-2.5">Meghalaya</td>
        <td class="p-2.5 font-bold">11 + 01** = 12</td>
      </tr>
      <tr>
        <td class="p-2.5">Chandigarh (UT)</td>
        <td class="p-2.5 font-bold">1</td>
        <td class="p-2.5">Mizoram</td>
        <td class="p-2.5 font-bold">8</td>
      </tr>
      <tr>
        <td class="p-2.5">Chhattisgarh</td>
        <td class="p-2.5 font-bold">27 + 01** = 28</td>
        <td class="p-2.5">Nagaland</td>
        <td class="p-2.5 font-bold">11</td>
      </tr>
      <tr>
        <td class="p-2.5">Dadra &amp; Nagar Haveli and Daman &amp; Diu (UT)</td>
        <td class="p-2.5 font-bold">3</td>
        <td class="p-2.5">Odisha</td>
        <td class="p-2.5 font-bold">30 + 01** = 31</td>
      </tr>
      <tr>
        <td class="p-2.5">Delhi (UT)</td>
        <td class="p-2.5 font-bold">2 + 3 = 5</td>
        <td class="p-2.5">Puducherry (UT)</td>
        <td class="p-2.5 font-bold">4</td>
      </tr>
      <tr>
        <td class="p-2.5">Goa</td>
        <td class="p-2.5 font-bold">2</td>
        <td class="p-2.5">Punjab</td>
        <td class="p-2.5 font-bold">22 + 01** = 23</td>
      </tr>
      <tr>
        <td class="p-2.5">Gujarat</td>
        <td class="p-2.5 font-bold">33 + 01** = 34</td>
        <td class="p-2.5">Rajasthan</td>
        <td class="p-2.5 font-bold">33 + 02** = 35</td>
      </tr>
      <tr>
        <td class="p-2.5">Haryana</td>
        <td class="p-2.5 font-bold">21</td>
        <td class="p-2.5">Sikkim</td>
        <td class="p-2.5 font-bold">4</td>
      </tr>
      <tr>
        <td class="p-2.5">Himachal Pradesh</td>
        <td class="p-2.5 font-bold">12</td>
        <td class="p-2.5">Telangana</td>
        <td class="p-2.5 font-bold">15</td>
      </tr>
      <tr>
        <td class="p-2.5">Jammu &amp; Kashmir (UT)</td>
        <td class="p-2.5 font-bold">19 + 01** = 20</td>
        <td class="p-2.5">Tripura</td>
        <td class="p-2.5 font-bold">8</td>
      </tr>
      <tr>
        <td class="p-2.5">Jharkhand</td>
        <td class="p-2.5 font-bold">24 + 02** = 26</td>
        <td class="p-2.5">UT Andaman &amp; Nicobar Islands</td>
        <td class="p-2.5 font-bold">3</td>
      </tr>
      <tr>
        <td class="p-2.5">Karnataka</td>
        <td class="p-2.5 font-bold">30 + 01** = 31</td>
        <td class="p-2.5">Uttar Pradesh</td>
        <td class="p-2.5 font-bold">75 + 01** = 76</td>
      </tr>
      <tr>
        <td class="p-2.5">Kerala</td>
        <td class="p-2.5 font-bold">14</td>
        <td class="p-2.5">Uttarakhand</td>
        <td class="p-2.5 font-bold">13</td>
      </tr>
      <tr>
        <td class="p-2.5">Ladakh (UT)</td>
        <td class="p-2.5 font-bold">2</td>
        <td class="p-2.5">West Bengal</td>
        <td class="p-2.5 font-bold">17 + 01** = 18</td>
      </tr>
      <tr>
        <td class="p-2.5">Lakshadweep (UT)</td>
        <td class="p-2.5 font-bold">1</td>
        <td class="p-2.5 font-bold text-blue-900">Total Functional JNVs</td>
        <td class="p-2.5 font-bold text-blue-900">642 + 20** + 3* = 665</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-slate-500 italic">*Special JNV | **Additional JNV sanctioned for districts with high demographic concentration of SC/ST populations.</p>`
    },
    {
      id: 5,
      title: '5. List of 20 Excluded JNVs Where Class IX LEST 2027 Is Not Being Conducted (Annexure-I)',
      content: `As per official Annexure-I of the notification, **Class IX LEST 2027 is NOT being conducted in 20 specific JNVs** due to non-existence of Class IX or shortage of hostel accommodation. Applicants residing in or studying in these districts cannot apply for Class IX lateral entry:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-rose-50 text-rose-800 font-bold border-b border-rose-200">
      <tr>
        <th class="p-2.5">S.No.</th>
        <th class="p-2.5">Region</th>
        <th class="p-2.5">State / UT</th>
        <th class="p-2.5">District / JNV Name (Excluded from LEST 2027)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr><td class="p-2.5">1</td><td class="p-2.5">Bhopal</td><td class="p-2.5">Madhya Pradesh</td><td class="p-2.5 font-bold text-rose-700">Singrauli</td></tr>
      <tr><td class="p-2.5">2</td><td class="p-2.5">Chandigarh</td><td class="p-2.5">UT Jammu &amp; Kashmir</td><td class="p-2.5 font-bold text-rose-700">Bandipora</td></tr>
      <tr><td class="p-2.5">3</td><td class="p-2.5" rowspan="8">Hyderabad</td><td class="p-2.5" rowspan="2">UT Andaman &amp; Nicobar</td><td class="p-2.5 font-bold text-rose-700">Nicobar (Car Nicobar)</td></tr>
      <tr><td class="p-2.5">4</td><td class="p-2.5 font-bold text-rose-700">South Andaman</td></tr>
      <tr><td class="p-2.5">5</td><td class="p-2.5" rowspan="6">Telangana</td><td class="p-2.5 font-bold text-rose-700">Bhadra Kothagudem</td></tr>
      <tr><td class="p-2.5">6</td><td class="p-2.5 font-bold text-rose-700">Jagtial</td></tr>
      <tr><td class="p-2.5">7</td><td class="p-2.5 font-bold text-rose-700">Mahabubnagar</td></tr>
      <tr><td class="p-2.5">8</td><td class="p-2.5 font-bold text-rose-700">Malkhazgiri</td></tr>
      <tr><td class="p-2.5">9</td><td class="p-2.5 font-bold text-rose-700">Nizamabad</td></tr>
      <tr><td class="p-2.5">10</td><td class="p-2.5 font-bold text-rose-700">Suryapet</td></tr>
      <tr><td class="p-2.5">11</td><td class="p-2.5" rowspan="2">Jaipur</td><td class="p-2.5" rowspan="2">UT Delhi</td><td class="p-2.5 font-bold text-rose-700">East Delhi</td></tr>
      <tr><td class="p-2.5">12</td><td class="p-2.5 font-bold text-rose-700">Shahdara</td></tr>
      <tr><td class="p-2.5">13</td><td class="p-2.5" rowspan="8">Shillong</td><td class="p-2.5">Arunachal Pradesh</td><td class="p-2.5 font-bold text-rose-700">Shi Yomi</td></tr>
      <tr><td class="p-2.5">14</td><td class="p-2.5" rowspan="3">Assam</td><td class="p-2.5 font-bold text-rose-700">Kamrup Metro</td></tr>
      <tr><td class="p-2.5">15</td><td class="p-2.5 font-bold text-rose-700">Sonitpur</td></tr>
      <tr><td class="p-2.5">16</td><td class="p-2.5 font-bold text-rose-700">Majuli</td></tr>
      <tr><td class="p-2.5">17</td><td class="p-2.5" rowspan="3">Manipur</td><td class="p-2.5 font-bold text-rose-700">Thoubal</td></tr>
      <tr><td class="p-2.5">18</td><td class="p-2.5 font-bold text-rose-700">Noney</td></tr>
      <tr><td class="p-2.5">19</td><td class="p-2.5 font-bold text-rose-700">Kangpokpi-II (Senapati-II)</td></tr>
      <tr><td class="p-2.5">20</td><td class="p-2.5">Mizoram</td><td class="p-2.5 font-bold text-rose-700">Siaha</td></tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 6,
      title: '6. Special JNVs & Demographically Sanctioned SC/ST Districts (Annexure-I Blocks)',
      content: `Additional Jawahar Navodaya Vidyalayas (JNVs) have been sanctioned by the Government of India for districts with high demographic concentrations of Scheduled Caste (SC) and Scheduled Tribe (ST) populations.

**Annexure-I Block Allocations:**
- Prospective candidates seeking admission in additional JNVs (e.g., Dahod-I & II in Gujarat; Jhabua-I & II, Ratlam-I & II, Ujjain-I & II in Madhya Pradesh; Malkangiri-I & II in Odisha; Sukma-I & II in Chhattisgarh; Jammu-I & II; Amritsar-I & II in Punjab; East Godavari-I & II, Prakasam-I & II in Andhra Pradesh; Kalaburagi-I & II in Karnataka; Banswara-I & II, Sri Ganganagar-I & II in Rajasthan; Sitapur-I & II in Uttar Pradesh; Gaya-I & II in Bihar; Pakur-I & II, Palamu-I & II in Jharkhand; Nandurbar-I & II in Maharashtra) must verify their specific block jurisdiction.
- Candidates are strictly required to verify their territorial jurisdiction (block/area) against the official list in Annexure-I prior to initiating online registration.`
    },
    {
      id: 7,
      title: '7. Nature of Class IX Vacancies & Likely Available Seats',
      content: `In order to optimally utilize the infrastructure, classrooms, and hostel facilities available in Jawahar Navodaya Vidyalayas, the Samiti fills up vacant seats in Class IX.

**Key Vacancy Rules:**
- Admission is made **only against vacant seats** that remain unfilled or arise due to dropout, transfer, or migration from Class VIII to Class IX.
- The tentative vacancy position is detailed in Annexure-II of the prospectus (covering Open and Rural quota seats across UR, OBC, SC, ST, and Divyang categories).
- Vacancies are tentative and subject to change (may increase or decrease based on internal promotions and physical verification at each JNV).
- Provisional selection in the test does NOT vest any absolute right for admission if a seat in the specific category/quota ceases to exist.`
    },
    {
      id: 8,
      title: '8. Free Residential Education & Facilities Provided by Central Government',
      content: `Jawahar Navodaya Vidyalayas provide completely free, high-standard schooling under the Ministry of Education:
- **Free Boarding & Lodging:** Fully residential hostel living with nutritious meals prepared under strict hygiene standards.
- **Textbooks & Stationery:** All textbooks, study materials, and essential stationery provided free of cost.
- **School Uniforms:** Daily academic uniforms, sports kits, winter wear, and shoes provided free.
- **Modern Infrastructure:** Smart classrooms, well-equipped computer labs, modern science laboratories, library, and comprehensive sports facilities.`
    },
    {
      id: 9,
      title: '9. Vidyalaya Vikas Nidhi (VVN) Fee Policy & 100% Exemption Categories',
      content: `While education, board, lodging, uniform, and books are free, a nominal sum of **₹600/- per month** is collected towards Vidyalaya Vikas Nidhi (VVN) exclusively from students of Classes IX to XII.

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Candidate Category</th>
        <th class="p-3">Monthly VVN Contribution</th>
        <th class="p-3">Exemption Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold">SC and ST Students</td>
        <td class="p-3 font-bold text-emerald-700">₹0 / Nil</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">100% Exempted</span></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">All Girl Students</td>
        <td class="p-3 font-bold text-emerald-700">₹0 / Nil</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">100% Exempted</span></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Divyang (PwD) Students</td>
        <td class="p-3 font-bold text-emerald-700">₹0 / Nil</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">100% Exempted</span></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Students from BPL Families</td>
        <td class="p-3 font-bold text-emerald-700">₹0 / Nil</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">100% Exempted</span></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">General &amp; OBC Boys (Non-BPL, Non-Govt)</td>
        <td class="p-3 font-bold text-slate-800">₹600/- per month</td>
        <td class="p-3 text-slate-600">Standard VVN Rate</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Wards of Government Employees (Non-exempted)</td>
        <td class="p-3 font-bold text-indigo-700">₹1,500/- per month or actual CEA (min ₹600/-)</td>
        <td class="p-3 text-slate-600">Reimbursable through CEA</td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 10,
      title: '10. Complete Eligibility Criteria (Who is Eligible)',
      content: `To be eligible to appear for the Class IX Lateral Entry Selection Test (2027-28), a candidate must satisfy all of the following conditions:
1. **Bonafide Resident:** Must be a bonafide resident of the district concerned where the Jawahar Navodaya Vidyalaya is functioning and where admission is sought.
2. **Current Class VIII Enrolment:** Must be studying Class VIII during the **Academic Session 2026-27** in a Government or Government-recognized school of the same district.
3. **Same-District Rule:** District of residence and district of Class VIII study must be identical.
4. **Age Window:** Date of Birth must be strictly between **1st May 2012 and 31st July 2014 (both days inclusive)**.
5. **Nationality:** Must be an Indian National studying in India.`
    },
    {
      id: 11,
      title: '11. Ineligibility Conditions & Barred Candidates (Who is NOT Eligible)',
      content: `A candidate is strictly **NOT eligible** under any of the following circumstances:
1. **Previous Class VIII Passers:** Candidates who have already passed Class VIII in previous academic sessions (2025-26 or earlier) cannot apply.
2. **Age Outside Permissible Dates:** Date of Birth before 01-05-2012 or after 31-07-2014.
3. **District Mismatch:** Candidates whose district of Class VIII study differs from their district of residence.
4. **Unrecognized Schools:** Candidates studying in unrecognized private coaching centres, non-affiliated academies, or unrecognized schools.
5. **Repeated Attempt in Lateral Entry:** Candidates who have already appeared for the lateral entry selection test in any previous academic session are barred.`
    },
    {
      id: 12,
      title: '12. Strict Age Limit & Date of Birth Permissible Window (01 May 2012 to 31 July 2014)',
      content: `The candidate must be born between **1st May 2012 and 31st July 2014 (both days inclusive)**.

**Uniform Application Across All Categories:**
- This age criterion applies **identically and equally to ALL categories of candidates**, including General, Other Backward Classes (OBC), Scheduled Castes (SC), Scheduled Tribes (ST), and Divyang (PwD).
- Unlike government job recruitments, **no upper age relaxation** is granted to SC/ST/OBC categories in Navodaya Vidyalaya school admissions under any circumstances.

<div class="p-4 bg-amber-50 border border-amber-200 rounded-xl my-3 text-xs text-amber-900">
  <strong>Example:</strong> A candidate born on <strong>30th April 2012</strong> is <strong>NOT ELIGIBLE</strong> because they were born 1 day before the permissible start date. A candidate born on <strong>1st May 2012</strong> is <strong>ELIGIBLE</strong> because both boundary days are explicitly inclusive.
</div>`
    },
    {
      id: 13,
      title: '13. Medical Board Age Verification Policy & High Court Rulings',
      content: `Navodaya Vidyalaya Samiti reserves the right to refer any candidate to a **District Medical Board** for medical confirmation of age if any doubt arises regarding the age certificate produced:
- The decision of the Medical Board will be final, binding, and conclusive.
- If a candidate's verified medical age does not align with the prescribed age bracket (01-05-2012 to 31-07-2014), the provisional selection will be cancelled immediately.
- In accordance with High Court guidelines, misrepresenting birth records or submitting falsified birth certificates invites punitive disqualification.`
    },
    {
      id: 14,
      title: '14. Academic Qualification – Class VIII Enrolment in Session 2026-27',
      content: `The candidate must be currently enrolled in and actively studying **Class VIII during the complete academic session 2026-27**:
- Admission of provisionally selected candidates is strictly subject to successfully passing Class VIII in the 2026-27 session before the start of the 2027-28 academic year.
- A pass certificate and marksheet of Class VIII issued by the parent school must be submitted during document verification.
- Candidates who fail in Class VIII or do not complete the session are disqualified.`
    },
    {
      id: 15,
      title: '15. Recognized School Criteria (Govt. / Govt. Aided / Recognized Private Schools)',
      content: `The school in which the candidate is studying Class VIII must be recognized by the Government:
- **Eligible School Types:** Government Schools (Central / State), Government-Aided Schools, and Recognized Private Schools affiliated to CBSE, ICSE, or State Education Boards.
- The school must be recognized by the competent district education authority (DEO / BEO / DIOS) of the district where the JNV is established.
- Studies undertaken in unapproved schools or unverified home schooling are invalid.`
    },
    {
      id: 16,
      title: '16. Mandatory Same-District Condition (Study District & Residence District Match)',
      content: `The district of residence and the district of Class VIII study must be **the exact same district**:
- A student cannot study Class VIII in District 'A' and seek lateral entry admission in JNV District 'B'.
- Both the student's residence and the school where they are enrolled in Class VIII must fall within the territorial revenue boundaries of the district where the JNV is located.
- Domicile certificates and school study certificates are cross-verified to confirm identical district jurisdiction.`
    },
    {
      id: 17,
      title: '17. Bonafide Residence & Domicile Verification Rules',
      content: `All candidates must submit proof of residence issued by a competent Government authority:
- Valid residential documents include: Domicile Certificate, Permanent Resident Certificate (PRC), or Residence Certificate issued by the Tehsildar, Sub-Divisional Magistrate (SDM), or District Magistrate (DM).
- The proof of residence must clearly mention the district where the candidate is residing and where the JNV is functioning.
- Rent agreements or unauthorized declarations are not acceptable as valid residence proof.`
    },
    {
      id: 18,
      title: '18. Rural Quota Eligibility Criteria & Certification Requirements',
      content: `Candidates studying Class VIII in a school located in a notified rural area are classified as rural candidates:
- **Quota Benefits:** Rural candidates are considered under both Open quota seats and dedicated Rural quota seats.
- **Rural Certificate:** Parents must obtain and submit a certificate issued by the competent authority of the District Administration (Revenue Authority / BDO / Tehsildar) certifying that the school where the candidate studied Class VIII is located in a designated Rural area.`
    },
    {
      id: 19,
      title: '19. Urban Candidate Classification & Strict Even-One-Day Rule',
      content: `The Navodaya Vidyalaya scheme maintains a strict policy regarding urban classification:
- **Even-One-Day Rule:** A candidate who has studied Class VIII in a school located in an urban area **even for a single day of the academic session** will be classified as an **Urban Candidate**.
- **Definition of Urban Area:** Urban areas are those defined by any Government census or municipal notification as of the last date of application submission (e.g., Cantonment boards, Municipal corporations, Nagar Panchayats).
- All other areas are treated as rural. Urban candidates are considered solely against Open / Urban quota vacancies.`
    },
    {
      id: 20,
      title: '20. SC & ST Category Reservation Norms & Community Certificates',
      content: `Seats in each Jawahar Navodaya Vidyalaya are reserved for Scheduled Castes (SC) and Scheduled Tribes (ST) in proportion to their population in the district concerned:
- Existing vacant seats in SC/ST categories in Class IX are filled exclusively by eligible SC/ST candidates.
- Candidates claiming SC/ST reservation must upload and present a valid Caste Certificate issued by an authorized revenue official (Tehsildar / SDM / DM).
- The certificate must be in the prescribed central/state government format and produced during document verification.`
    },
    {
      id: 21,
      title: '21. OBC (Non-Creamy Layer) Reservation & Central List Mandate',
      content: `Reservation for Other Backward Classes (OBC) is implemented strictly in accordance with the **Central List of OBCs**:
- **Central List Requirement:** The candidate's caste/community must be listed in the Central List of OBCs issued by the Government of India (available at ncbc.nic.in).
- **Non-Creamy Layer:** Candidates must belong to the Non-Creamy Layer to avail of the reservation.
- **State List vs. Central List:** If a candidate's caste is included in the State OBC list but NOT in the Central List, they must apply as a **General (UR)** candidate.
- Certificates must be issued by a competent revenue authority in the Government of India format.`
    },
    {
      id: 22,
      title: '22. Divyang (PwD / Children with Special Needs) Reservation & UDID Rules',
      content: `Vacant seats under the Divyang / Children with Special Needs category are allocated as per Government of India guidelines:
- **Covered Disabilities:** Orthopedic, Hearing, and Visual impairments as defined by the Rights of Persons with Disabilities Act.
- **Certification:** Provisionally selected candidates must produce a valid UDID (Unique Disability ID) Card or a Disability Medical Certificate signed by the Chief Medical Officer (CMO) or District Medical Board.
- Minimum disability percentage must meet the statutory threshold (generally 40% or above).`
    },
    {
      id: 23,
      title: '23. Compensatory Extra Time for Divyang Candidates (+50 Minutes in Exam)',
      content: `To ensure equal opportunity and accessibility, candidates with special needs (Divyang) are provided compensatory extra time during the selection test:
- **Standard Test Duration:** 2 Hours 30 Minutes (150 minutes).
- **Additional Compensatory Time:** **50 Minutes** extra time is granted to Divyang candidates upon producing valid medical certification from a competent authority.
- **Total Duration for Divyang:** 3 Hours 20 Minutes (200 minutes).
- Scribe facilities are arranged if permitted under standard examination guidelines.`
    },
    {
      id: 24,
      title: '24. Selection Test Scheme – Date, Shift & Test Centers (Saturday, 10 April 2027)',
      content: `The Class IX Lateral Entry Selection Test (LEST 2027) will be held across India in a single shift:
- **Date of Examination:** **Saturday, 10th April 2027**
- **Test Timings:** 11:00 AM to 01:30 PM (2½ hours).
- **Venue / Examination Centre:** The test will be conducted in the **Jawahar Navodaya Vidyalaya of the district concerned** and/or any other exam center allotted by NVS within the district.
- **Reporting Time:** Candidates must report to the allocated center by 10:00 AM with their printed Admit Card and valid ID proof.`
    },
    {
      id: 25,
      title: '25. Selection Test Structure & Nature of Question Paper (100 Questions / 100 Marks)',
      content: `The selection test is an objective-type, pen-and-paper OMR examination:
- **Total Questions:** 100 Multiple Choice Questions (MCQs).
- **Total Marks:** 100 Marks.
- **Difficulty Level:** Standard Class VIII difficulty level based on NCERT syllabus.
- **Question Paper Layout:** Divided into 4 distinct sections: English, Hindi, Mathematics, and General Science.
- **Exam Medium:** Bilingual (English and Hindi). The medium chosen during online application cannot be altered later.`
    },
    {
      id: 26,
      title: '26. Section-Wise Marks Distribution: English (15), Hindi (15), Maths (35), Science (35)',
      content: `The composition and weightage of the four test sections are officially defined as follows:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-blue-900 text-white font-bold">
      <tr>
        <th class="p-3">Section No.</th>
        <th class="p-3">Subject / Paper</th>
        <th class="p-3 text-center">Number of Questions</th>
        <th class="p-3 text-center">Maximum Marks</th>
        <th class="p-3 text-center">Duration</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold text-slate-500">Section 1</td>
        <td class="p-3 font-bold text-slate-900">English</td>
        <td class="p-3 text-center font-mono">15 Questions</td>
        <td class="p-3 text-center font-mono font-bold">15 Marks</td>
        <td class="p-3 text-center" rowspan="4">Composite 2½ Hours (150 Minutes) without break</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold text-slate-500">Section 2</td>
        <td class="p-3 font-bold text-slate-900">Hindi</td>
        <td class="p-3 text-center font-mono">15 Questions</td>
        <td class="p-3 text-center font-mono font-bold">15 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold text-slate-500">Section 3</td>
        <td class="p-3 font-bold text-blue-700">Mathematics</td>
        <td class="p-3 text-center font-mono">35 Questions</td>
        <td class="p-3 text-center font-mono font-bold">35 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold text-slate-500">Section 4</td>
        <td class="p-3 font-bold text-emerald-700">General Science</td>
        <td class="p-3 text-center font-mono">35 Questions</td>
        <td class="p-3 text-center font-mono font-bold">35 Marks</td>
      </tr>
      <tr class="bg-slate-100/80 font-bold text-slate-900 border-t-2 border-slate-300">
        <td class="p-3" colspan="2">TOTAL TEST PAPER</td>
        <td class="p-3 text-center font-mono text-blue-800">100 Questions</td>
        <td class="p-3 text-center font-mono text-blue-800">100 Marks</td>
        <td class="p-3 text-center">150 Minutes</td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 27,
      title: '27. Sectional Qualifying Cut-off Requirement in All 4 Subjects',
      content: `A critical requirement for Class IX LEST selection is scoring qualifying marks in **each individual section**:
- As per NVS guidelines, a candidate must secure the **minimum qualifying marks in all 04 subjects** (English, Hindi, Mathematics, and General Science).
- If a candidate fails to achieve the minimum qualifying threshold in even one subject, their candidature is disqualified, irrespective of an exceptionally high score in other subjects.
- The exact sectional qualifying marks are decided by NVS as per test performance and category norms.`
    },
    {
      id: 28,
      title: '28. Merit List Calculation Formula: Maths (35) + Science (35) + Higher Language (15) = 85 Marks',
      content: `Although the test paper comprises 100 questions worth 100 marks, **the final merit list is prepared out of 85 Marks**:

<div class="p-4 bg-blue-50 border border-blue-200 rounded-xl my-3 text-xs sm:text-sm text-blue-900">
  <div class="font-bold text-sm mb-1 text-blue-950">Official Merit Formula (Clause 14):</div>
  <p class="leading-relaxed">
    <strong>Merit Score (out of 85 Marks)</strong> = <strong>Mathematics (35)</strong> + <strong>General Science (35)</strong> + <strong>Higher of the Two Language Scores [English (15) OR Hindi (15)]</strong>.
  </p>
</div>

**Calculation Mechanism:**
- Both Mathematics (35 marks) and General Science (35 marks) are compulsorily included in the merit score (70 marks).
- Between English (15 marks) and Hindi (15 marks), whichever subject yields the **higher score** for the candidate is added (15 marks).
- The language with the lower score is disregarded for merit computation (provided the candidate met the sectional qualifying threshold).`
    },
    {
      id: 29,
      title: '29. Official Tie-Breaking Rules & Order of Sequence for Equal Merit',
      content: `In case two or more candidates obtain identical merit marks in the district, the tie is resolved sequentially in the following official order:

1. **Preference to Female Candidate:** A female candidate will be preferred over a male candidate.
2. **Higher Marks in Core Two Subjects (out of 30):** If a tie still exists, the candidate who has scored higher marks out of 30 (two subjects) excluding Mental Ability Score, will be preferred.
3. **Higher Marks in All Four Subjects (out of 100):** If the tie persists, the candidate who has scored higher total marks across all 4 subjects (out of 100) will be preferred.
4. **Age Consideration (Younger Candidate):** If the tie is still unresolved, the candidate whose age is less (younger candidate) will be preferred.`
    },
    {
      id: 30,
      title: '30. Medium of Examination & Bilingual Question Paper (English & Hindi)',
      content: `The selection test is printed in bilingual format (English and Hindi):
- Questions in Mathematics and General Science will appear in both English and Hindi.
- English section questions will be in English only; Hindi section questions will be in Hindi only.
- The medium chosen by the candidate in the online application form is treated as final and cannot be modified under any circumstances.`
    },
    {
      id: 31,
      title: '31. OMR Answer Sheet Rules, Optical Scanning & Pen Guidelines (Blue/Black Ball Point)',
      content: `Answers must be recorded on a specially designed optical mark recognition (OMR) sheet:
- **Pen Specification:** Candidates must use **ONLY a Blue or Black Ball Point Pen**.
- **Pencil Strictly Prohibited:** Use of pencils or gel pens is strictly forbidden; using a pencil may lead to non-evaluation of the OMR sheet.
- **Marking Answers:** Darken the circle corresponding to the chosen option completely (A, B, C, or D).
- **No Erasers or Correction Fluids:** Erasing, scratching, using white correction fluid, or multiple darkening on an answer will invalidate that question.`
    },
    {
      id: 32,
      title: '32. Marking Scheme & Negative Marking Policy (No Negative Marking)',
      content: `The scoring scheme for Class IX LEST is transparent and candidate-friendly:
- **Correct Response:** **+1 Mark** awarded for each correct answer.
- **Incorrect Response:** **0 Marks** (NO negative marking).
- **Unattempted Question:** **0 Marks**.
- **Multiple Bubbling:** 0 Marks (treated as invalid).
- Because there is no penalty for wrong answers, candidates are encouraged to attempt all 100 questions within the 150-minute exam window.`
    },
    {
      id: 33,
      title: '33. Detailed English Syllabus & Topic-Wise Breakdown (15 Marks)',
      content: `The English section comprises 15 questions based on Class VIII language concepts:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-2.5">Unit No.</th>
        <th class="p-2.5">Topic / Concept</th>
        <th class="p-2.5">Key Focus Areas</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr><td class="p-2.5 font-mono">1</td><td class="p-2.5 font-bold">Comprehension</td><td class="p-2.5">Unseen passages, central theme, factual and inferential questions</td></tr>
      <tr><td class="p-2.5 font-mono">2</td><td class="p-2.5 font-bold">Word and Sentence</td><td class="p-2.5">Sentence formation, subject-verb agreement, vocabulary</td></tr>
      <tr><td class="p-2.5 font-mono">3</td><td class="p-2.5 font-bold">Structure Spelling</td><td class="p-2.5">Correct spelling detection, word patterns, homophones</td></tr>
      <tr><td class="p-2.5 font-mono">4</td><td class="p-2.5 font-bold">Rearranging Jumbled Words</td><td class="p-2.5">Word ordering to form meaningful sentences</td></tr>
      <tr><td class="p-2.5 font-mono">5</td><td class="p-2.5 font-bold">Passivation</td><td class="p-2.5">Active and Passive Voice transformations</td></tr>
      <tr><td class="p-2.5 font-mono">6</td><td class="p-2.5 font-bold">Use of Degrees of Comparison</td><td class="p-2.5">Positive, Comparative, and Superlative adjectives/adverbs</td></tr>
      <tr><td class="p-2.5 font-mono">7</td><td class="p-2.5 font-bold">Modal Auxiliaries</td><td class="p-2.5">Can, could, may, might, shall, should, will, would, must, ought to</td></tr>
      <tr><td class="p-2.5 font-mono">8</td><td class="p-2.5 font-bold">Use of Prepositions</td><td class="p-2.5">Prepositions of time, place, direction, and phrasal prepositions</td></tr>
      <tr><td class="p-2.5 font-mono">9</td><td class="p-2.5 font-bold">Tense Forms</td><td class="p-2.5">Present, Past, and Future tenses (Simple, Continuous, Perfect)</td></tr>
      <tr><td class="p-2.5 font-mono">10</td><td class="p-2.5 font-bold">Reported Speech</td><td class="p-2.5">Direct to Indirect speech conversion, statements, questions, commands</td></tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 34,
      title: '34. Detailed Hindi Syllabus & Vyakaran / Apathit Bodh Breakdown (15 Marks)',
      content: `The Hindi section comprises 15 questions based on Class VIII grammar and comprehension:

**क. भाषिक अनुप्रयोग और व्याकरणिक कुशलताएँ:**
1. **वर्ण विचार / वर्तनी विवेक:** वर्णमाला, स्वर, व्यंजन, वर्तनी की अशुद्धियाँ और शुद्ध रूप।
2. **शब्द-भेद (स्रोत / उत्पत्ति):** तत्सम, तद्भव, देशज और विदेशी शब्द।
3. **पर्याय / विलोम:** समानार्थक और विपरीतार्थक शब्द।
4. **शब्द विवेक:** शब्द प्रयोग में सूक्ष्म अर्थ-भेद।
5. **पद भेद (व्याकरणिक कोटि):** संज्ञा, सर्वनाम, विशेषण, क्रिया और अव्यय की पहचान।
6. **पद परिचय:** वाक्य में प्रयुक्त पदों का व्याकरणिक परिचय।
7. **अशुद्ध वाक्य को शुद्ध करना:** लिंग, वचन, कारक, और काल संबंधी अशुद्धियों का निवारण।
8. **वाक्य रचनांतरण:** सरल, संयुक्त और मिश्र वाक्यों की पहचान और रूपांतरण।
9. **मुहावरे:** प्रचलित मुहावरे और उनके व्यावहारिक अर्थ।
10. **लोकोक्तियाँ:** कहावतों का सही संदर्भ और प्रयोग।

**ख. अपठित बोधात्मक प्रश्न:**
- अपठित गद्यांश पर आधारित प्रश्न, भावार्थ, शीर्षक और निष्कर्ष।`
    },
    {
      id: 35,
      title: '35. Detailed General Science Syllabus & 13 NCERT Chapters Breakdown (35 Marks)',
      content: `The General Science section contains 35 MCQs covering all 13 core chapters of the NCERT Class 8 Science textbook:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-2">Ch.</th>
        <th class="p-2">Chapter Title</th>
        <th class="p-2">Official Syllabus Topics Covered</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr><td class="p-2 font-mono">1</td><td class="p-2 font-bold">Crop Production and Management</td><td class="p-2">Agricultural practices, soil preparation, sowing, manures &amp; fertilizers, irrigation, weed protection, harvesting, storage, animal husbandry.</td></tr>
      <tr><td class="p-2 font-mono">2</td><td class="p-2 font-bold">Microorganisms: Friend and Foe</td><td class="p-2">Classification, habitats, useful &amp; harmful microbes, food preservation techniques, nitrogen fixation and nitrogen cycle.</td></tr>
      <tr><td class="p-2 font-mono">3</td><td class="p-2 font-bold">Coal and Petroleum</td><td class="p-2">Fossil fuels, coal formation, petroleum refining, natural gas, exhaustible natural resources.</td></tr>
      <tr><td class="p-2 font-mono">4</td><td class="p-2 font-bold">Combustion and Flame</td><td class="p-2">Combustion types, conditions, fire control, flame structure, fuels and fuel efficiency (calorific value).</td></tr>
      <tr><td class="p-2 font-mono">5</td><td class="p-2 font-bold">Conservation of Plants and Animals</td><td class="p-2">Deforestation, wildlife sanctuaries, national parks, biosphere reserves, Red Data Book, endemic species, migration, reforestation.</td></tr>
      <tr><td class="p-2 font-mono">6</td><td class="p-2 font-bold">Reproduction in Animals</td><td class="p-2">Sexual reproduction, male &amp; female reproductive organs, fertilization, zygote development, asexual reproduction (binary fission, budding).</td></tr>
      <tr><td class="p-2 font-mono">7</td><td class="p-2 font-bold">Reaching the Age of Adolescence</td><td class="p-2">Puberty changes, secondary sexual characteristics, endocrine glands, hormones, sex determination, reproductive health.</td></tr>
      <tr><td class="p-2 font-mono">8</td><td class="p-2 font-bold">Force and Pressure</td><td class="p-2">Push/pull, contact &amp; non-contact forces, change of state of motion, shape change, pressure in fluids, atmospheric pressure.</td></tr>
      <tr><td class="p-2 font-mono">9</td><td class="p-2 font-bold">Friction</td><td class="p-2">Factors affecting friction, static, sliding &amp; rolling friction, friction as necessary evil, reducing &amp; increasing friction, fluid friction.</td></tr>
      <tr><td class="p-2 font-mono">10</td><td class="p-2 font-bold">Sound</td><td class="p-2">Production by vibrating bodies, propagation medium, human ear structure, amplitude, frequency, pitch, loudness, audible range, noise pollution.</td></tr>
      <tr><td class="p-2 font-mono">11</td><td class="p-2 font-bold">Chemical Effects of Electric Current</td><td class="p-2">Conducting liquids, chemical effects, electrolysis, electroplating principles and applications.</td></tr>
      <tr><td class="p-2 font-mono">12</td><td class="p-2 font-bold">Some Natural Phenomena</td><td class="p-2">Electric charges, charging by friction, lightning mechanism, lightning conductor, earthquake causes, seismograph, safety measures.</td></tr>
      <tr><td class="p-2 font-mono">13</td><td class="p-2 font-bold">Light</td><td class="p-2">Laws of reflection, regular &amp; diffused reflection, multiple reflections, dispersion, human eye structure, defects of vision, Braille system.</td></tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 36,
      title: '36. Detailed Mathematics Syllabus & 11 NCERT Units Breakdown (35 Marks)',
      content: `The Mathematics section contains 35 MCQs covering all 11 units of NCERT Class 8 Mathematics:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-2.5">Unit</th>
        <th class="p-2.5">Topic / Chapter</th>
        <th class="p-2.5">Official Syllabus Content</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr><td class="p-2.5 font-mono">1</td><td class="p-2.5 font-bold">Rational Numbers</td><td class="p-2.5">Properties (closure, commutativity, associativity), representations on number line, rational numbers between two rational numbers.</td></tr>
      <tr><td class="p-2.5 font-mono">2</td><td class="p-2.5 font-bold">Squares and Square Roots</td><td class="p-2.5">Properties of square numbers, Pythagorean triplets, finding square roots by prime factorization and division method.</td></tr>
      <tr><td class="p-2.5 font-mono">3</td><td class="p-2.5 font-bold">Cubes and Cube Roots</td><td class="p-2.5">Cube numbers, patterns, finding cube roots using prime factorization.</td></tr>
      <tr><td class="p-2.5 font-mono">4</td><td class="p-2.5 font-bold">Exponents and Powers</td><td class="p-2.5">Powers with negative exponents, laws of exponents, standard form of numbers.</td></tr>
      <tr><td class="p-2.5 font-mono">5</td><td class="p-2.5 font-bold">Direct and Inverse Proportions</td><td class="p-2.5">Direct variation, inverse variation, real-world proportional word problems.</td></tr>
      <tr><td class="p-2.5 font-mono">6</td><td class="p-2.5 font-bold">Comparing Quantities</td><td class="p-2.5">Percentages, profit and loss, discount, sales tax/VAT/GST, simple and compound interest (annual &amp; semi-annual compounding).</td></tr>
      <tr><td class="p-2.5 font-mono">7</td><td class="p-2.5 font-bold">Algebraic Expressions &amp; Identities</td><td class="p-2.5">Addition, subtraction &amp; multiplication of expressions, standard algebraic identities, factorization by grouping and identities.</td></tr>
      <tr><td class="p-2.5 font-mono">8</td><td class="p-2.5 font-bold">Linear Equations in One Variable</td><td class="p-2.5">Solving linear equations having variables on one and both sides, practical word applications.</td></tr>
      <tr><td class="p-2.5 font-mono">9</td><td class="p-2.5 font-bold">Understanding Quadrilaterals</td><td class="p-2.5">Polygons, angle sum property, properties of parallelogram, rhombus, rectangle, square, and kite.</td></tr>
      <tr><td class="p-2.5 font-mono">10</td><td class="p-2.5 font-bold">Mensuration</td><td class="p-2.5">Area of trapeziums and general quadrilaterals; surface area and volume of cube, cuboid, and cylinder.</td></tr>
      <tr><td class="p-2.5 font-mono">11</td><td class="p-2.5 font-bold">Data Handling</td><td class="p-2.5">Organizing data, frequency distribution, bar graphs, double bar graphs, pie charts, elementary probability concepts.</td></tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 37,
      title: '37. Recommended Books, NCERT Class 8 Curriculum & Preparation Strategy',
      content: `Because the test difficulty strictly mirrors the Class VIII standard, preparation should focus on NCERT foundation:
- **Core NCERT Textbooks:** NCERT Mathematics (Class 8) and NCERT Science (Class 8) are the primary source material for 70 out of 100 marks.
- **Hindi & English Grammar:** Standard Class 8 grammar handbooks (NCERT Vasant/Durva grammar sections, Wren & Martin or CBSE grammar guides).
- **Concept Clarity:** Pay close attention to definitions, scientific laws, chemical reactions, and mathematical formulas rather than rote memorization.
- **Daily Practice Routine:** Allocate 1 hour daily to Math problem solving, 1 hour to Science conceptual revision, and 30 minutes to language grammar exercises.`
    },
    {
      id: 38,
      title: '38. Mock Tests, Previous Year Papers & OMR Practice Techniques',
      content: `Familiarity with OMR sheet bubbling and exam timing is essential:
- **Time Allocation Strategy:** Aim to spend ~45 minutes on Mathematics, ~45 minutes on General Science, ~20 minutes on English, ~20 minutes on Hindi, and ~20 minutes for final OMR review.
- **OMR Bubble Precision:** Practice bubbling with a dark blue or black ballpoint pen on official 100-question OMR replica sheets to avoid stray marks.
- **Sectional Balance:** Remember that you must clear the minimum qualifying marks in each of the 4 sections, so do not neglect either language paper.`
    },
    {
      id: 39,
      title: '39. Step-by-Step Online Application Process on cbseitms.nic.in / navodaya.gov.in',
      content: `The online application for Class IX LEST must be submitted exclusively through the official portal:
1. Visit **https://cbseitms.nic.in/2026/nvsix_9** or follow the registration link on **www.navodaya.gov.in**.
2. Click on **"Candidate Registration for Class IX Lateral Entry Selection Test (2027-28)"**.
3. Select the State and District where the candidate is currently studying Class VIII in 2026-27.
4. Fill in basic personal details: Student's name, Date of Birth, Gender, Category (General/OBC/SC/ST), Father's name, Mother's name, and Aadhaar number.
5. Provide Class VIII school details: School Name, Recognized status, Board affiliation, and Rural/Urban location.
6. Upload scanned passport-size photograph, candidate signature, and parent signature.
7. Verify all entered data and click Submit. Note down the **Registration Number** and download the confirmation slip.`
    },
    {
      id: 40,
      title: '40. Documents Required for Online Registration (Photo, Signatures & Aadhaar)',
      content: `Keep the following documents ready in soft copy (JPG format, file size between **10 KB and 100 KB**) before beginning online registration:
- **Candidate Photograph:** Recent passport-size color photograph (10 KB to 100 KB, JPG).
- **Signature of Candidate:** Clear signature on white paper (10 KB to 100 KB, JPG).
- **Signature of Parent / Guardian:** Signature of father/mother/guardian (10 KB to 100 KB, JPG).
- **Aadhaar Number / APAAR ID / PEN:** Candidate's Aadhaar card or official enrollment acknowledgement number.
- **Class VIII School Certificate / Study Details:** Details regarding school name, recognition, and rural/urban classification.`
    },
    {
      id: 41,
      title: '41. Free Helpdesks at All Functional District JNVs for Rural Parents & Applicants',
      content: `To ensure rural parents and candidates face no digital barriers, free helpdesk facilities are operational:
- **Location:** In each of the functional Jawahar Navodaya Vidyalayas across India.
- **Assistance Provided:** JNV staff assist parents and candidates in scanning photographs, filling online forms, and submitting applications.
- **Cost:** **100% Free of Cost**. No fees or service charges are collected at the JNV helpdesk.
- Parents can visit the local district JNV along with the candidate and required documents during working hours.`
    },
    {
      id: 42,
      title: '42. Application Correction Window (Strict 2-Day Limit Post Deadline)',
      content: `NVS provides a brief correction window following the close of online registration:
- **Duration:** The correction window opens for **strictly two (2) days** immediately after the last date of registration (30th September 2026).
- **Permissible Edits:** Corrections are permitted only in specific selected fields (e.g., gender, category, area classification, minor typographical errors).
- **Irrevocable Finality:** Once the correction window closes, no further modifications will be entertained under any circumstances. Candidates are held legally responsible for all submitted data.`
    },
    {
      id: 43,
      title: '43. Legal Warning & FIR Clause for False Information (Allahabad High Court W.P. 11591/2023)',
      content: `Navodaya Vidyalaya Samiti has issued a stern legal notice regarding fraudulent claims:
- In compliance with the order of the **Hon'ble High Court of Allahabad** passed in W.P. No. 11591/2023 titled *Shreyam Jaiswal Vs Union of India & Ors*, an **FIR can be registered** against parents/candidates furnishing false information deliberately to create or extend any claim/right for which the candidate is not legally entitled.
- Discrepancies in date of birth, domicile, category, or rural status will lead to immediate cancellation of candidature and criminal proceedings.`
    },
    {
      id: 44,
      title: '44. Admit Card Download Guidelines & Verification Instructions',
      content: `Admit Cards for the selection test will be published on the official application portal:
- **Expected Release:** Preferably one month before the test date (March 2027) (Status: "Not Released / To Be Updated").
- **Download Procedure:** Candidates can log into **cbseitms.nic.in** using their Registration Number and Date of Birth.
- **Details Printed:** Roll Number, Candidate's Name, Exam Centre Address, Shift Timings, and Exam Day Instructions.
- **Mandatory Requirement:** Printed Admit Card along with valid photo identification must be presented at the examination hall.`
    },
    {
      id: 45,
      title: '45. Declaration of Selection Test Results & Communication Channels',
      content: `The results of the Class IX Lateral Entry Selection Test will be announced through multiple official channels:
1. **Official NVS Application Portal:** Published online on cbseitms.nic.in and navodaya.gov.in.
2. **JNV Notice Board:** Displayed prominently on the notice board of the concerned district JNV.
3. **District JNV Website:** Uploaded on the dedicated website of the respective JNV.
4. **Postal Intimation:** Provisionally selected candidates will also be informed via Speed Post or Registered Post by the concerned JNV Principal.
- **No Marks Communication:** Marks obtained in the selection test are not communicated, and there is no provision for re-totalling or re-evaluation of OMR answer scripts.`
    },
    {
      id: 46,
      title: '46. Post-Selection Document Verification & Certificates Checklist',
      content: `Provisionally selected candidates must report to the allocated JNV with original and self-attested copies of the following documents:
1. Proof of Date of Birth (Birth Certificate issued by competent municipal/government authority).
2. Proof of Residence (Domicile/Residence certificate of the same district issued by Revenue Authority).
3. Class VIII Pass Certificate and Marksheet from a Govt./Govt. recognized school.
4. Rural Area Certificate (if admitted under Rural quota) from the Tehsildar / District Administration.
5. Caste/Community Certificate for SC/ST/OBC (OBC certificate strictly as per Central List format).
6. Disability / UDID Certificate for Divyang category issued by CMO / Medical Board.
7. Aadhaar Card copy of the candidate (as per Section 7 of Aadhaar Act).`
    },
    {
      id: 47,
      title: '47. Mandatory Transfer Certificate (TC) & DEO / BEO Countersignature Rules',
      content: `Candidates must follow precise instructions before withdrawing from their current school:
- **Do NOT Take TC Early:** Parents are strongly advised to apply for a Transfer Certificate (TC) from the parent school **ONLY after the completion of document verification and final confirmation of admission** by the JNV Principal.
- **Mandatory Countersignature:** The Transfer Certificate must be counter-signed by the competent District Education Authority (District Education Officer - DEO / Block Education Officer - BEO / DIOS).
- Admissions cannot be finalized without a valid, counter-signed Transfer Certificate.`
    },
    {
      id: 48,
      title: '48. National Integration & 30% Migration Scheme in Class IX',
      content: `A core feature of the Navodaya Vidyalaya scheme is its student migration policy:
- **30% Student Migration:** Approximately 30% of students in Class IX from a Vidyalaya in a Hindi-speaking state spend one full academic year in a partner JNV located in a non-Hindi-speaking state, and vice versa.
- **Objective:** Fosters emotional national integration, intercultural appreciation, and practical mastery of the three-language formula.
- Migrated students return to their parent JNV for Class X CBSE Board examinations.`
    },
    {
      id: 49,
      title: '49. Real-Life Application & Selection Case Scenarios (Clear Examples)',
      content: `To understand the interplay of age, district jurisdiction, sectional marks, and tie-breaking, consider these realistic case scenarios:

<div class="space-y-3 my-4 text-xs">
  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
    <strong class="text-blue-800 uppercase tracking-wide block mb-1">Example 1: Date of Birth Eligibility Boundary</strong>
    <p class="text-slate-700 leading-relaxed">
      <strong>Situation:</strong> Candidate Rahul was born on <strong>28-04-2012</strong>. Candidate Sneha was born on <strong>02-05-2012</strong>. Both are in Class VIII in the same district.
      <br />
      <strong>Outcome:</strong> Sneha is <span class="font-bold text-emerald-700">ELIGIBLE</span> because 02-05-2012 falls within the window 01-05-2012 to 31-07-2014. Rahul is <span class="font-bold text-rose-700">NOT ELIGIBLE</span> because he was born 3 days prior to the cutoff date. No age relaxation applies to any category.
    </p>
  </div>

  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
    <strong class="text-emerald-800 uppercase tracking-wide block mb-1">Example 2: Merit Score Calculation (Out of 85 Marks)</strong>
    <p class="text-slate-700 leading-relaxed">
      <strong>Situation:</strong> Candidate Arvind scored: Mathematics = 32/35, General Science = 30/35, English = 13/15, Hindi = 11/15. Total test marks = 86/100.
      <br />
      <strong>Outcome:</strong> For merit ranking, Arvind receives: Math (32) + Science (30) + English (higher language, 13) = <strong>75 Marks out of 85</strong>. His Hindi score (11) satisfied the sectional qualifying cutoff but is not added to the merit score.
    </p>
  </div>

  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
    <strong class="text-purple-800 uppercase tracking-wide block mb-1">Example 3: Sectional Disqualification Despite High Total</strong>
    <p class="text-slate-700 leading-relaxed">
      <strong>Situation:</strong> Candidate Tanya scored Math = 35/35, Science = 35/35, English = 14/15, but scored <strong>02/15 in Hindi</strong> (below the NVS sectional qualifying threshold). Total = 86/100.
      <br />
      <strong>Outcome:</strong> Tanya is <span class="font-bold text-rose-700">DISQUALIFIED</span> because candidates must score minimum qualifying marks in all four subjects individually.
    </p>
  </div>

  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
    <strong class="text-amber-800 uppercase tracking-wide block mb-1">Example 4: Tie-Breaker Resolution for Identical Merit</strong>
    <p class="text-slate-700 leading-relaxed">
      <strong>Situation:</strong> Candidate Rohan (Boy) and Candidate Ritu (Girl) both secured 78/85 marks for the same JNV vacancy in the district.
      <br />
      <strong>Outcome:</strong> Under Official Tie-Breaking Rule (a), <strong>female candidates receive preference over male candidates</strong>. Ritu is placed higher in the merit list.
    </p>
  </div>
</div>`
    },
    {
      id: 50,
      title: '50. Official Contacts, Regional Offices & Direct Prospectus Links',
      content: `**Navodaya Vidyalaya Samiti Headquarters:**
- **Address:** B-15, Institutional Area, Sector 62, Noida, Gautam Budh Nagar, Uttar Pradesh 201307
- **Official Portal:** [www.navodaya.gov.in](https://www.navodaya.gov.in)
- **CBSE-ITMS Application Link:** [https://cbseitms.nic.in/2026/nvsix_9](https://cbseitms.nic.in/2026/nvsix_9)
- **Official Prospectus PDF:** [Download Class IX 2027 Prospectus](https://cbseitms.nic.in/2026/nvsix_9/assets/pdf/FINAL_CLASS_IX_PROSPECTUS_2027.pdf)
- **Technical Helpdesk Email:** ithelpdesk.nvs@gmail.com

*Disclaimer: RajDailyTools provides this informational guide based strictly on the official Prospectus-cum-Notification released by Navodaya Vidyalaya Samiti. Applicants are advised to verify details and complete registrations exclusively through the official portal at cbseitms.nic.in.*`
    }
  ];
}

export const NVS_CLASS_9_2027_ADMISSION: AdmissionRecord = {
  id: 'nvs-class-9-admission-2027',
  slug: 'nvs-class-9-admission-2027',
  university: 'Navodaya Vidyalaya Samiti (Ministry of Education, Govt. of India)',
  course: 'NVS Class 9 Lateral Entry Admission 2027-28 (LEST 2027 across 665 JNVs)',
  category: 'School / Lateral Entry',
  education: ['Other'],
  state: 'All India',
  applicationStartDate: '2026-08-20',
  applicationLastDate: '2026-09-30',
  status: 'Open',
  eligibility:
    'Must be studying Class VIII in session 2026-27 in a Govt/Govt-recognized school of the same district. Date of birth between 01-05-2012 and 31-07-2014 (both inclusive).',
  officialLink: 'https://cbseitms.rcil.gov.in/nvs/',
  applyLink: 'https://cbseitms.nic.in/2026/nvsix_9',
  officialNotification:
    'https://cbseitms.nic.in/2026/nvsix_9/assets/pdf/FINAL_CLASS_IX_PROSPECTUS_2027.pdf',
  feeDetails: '₹0 / Free of Cost (All Categories)',
  description:
    'Navodaya Vidyalaya Samiti (NVS) invites online applications for Class IX Lateral Entry Selection Test (LEST 2027) across 665 Jawahar Navodaya Vidyalayas for session 2027-28 against vacant seats.',
  entranceExamDate: '10 April 2027 (Saturday, 11:00 AM – 01:30 PM)',
  meritListDate: 'Not Released / To Be Updated',
  counsellingDate: 'Not Released / To Be Updated',
  faq: [
    {
      q: 'What is the last date to apply for NVS Class 9 Admission 2027-28?',
      a: 'The last date to submit the online application on cbseitms.nic.in is Wednesday, 30th September 2026.'
    },
    {
      q: 'When will the NVS Class 9 Lateral Entry Selection Test (LEST 2027) be conducted?',
      a: 'The test will be conducted on Saturday, 10th April 2027 from 11:00 AM to 01:30 PM.'
    },
    {
      q: 'What is the permissible date of birth for NVS Class 9 admission 2027?',
      a: 'The candidate must be born between 1st May 2012 and 31st July 2014 (both days inclusive). This applies equally to all categories (SC/ST/OBC/General/Divyang).'
    },
    {
      q: 'What is the application fee for NVS Class 9 lateral entry?',
      a: 'The application fee is completely ₹0 (Free of cost) for all candidates.'
    },
    {
      q: 'How is the final merit list calculated for NVS Class 9?',
      a: 'The merit list is prepared out of 85 marks: Mathematics (35) + General Science (35) + Higher score of either English or Hindi (15), provided the candidate clears the minimum qualifying marks in all 4 subjects.'
    },
    {
      q: 'Is there any negative marking in the Class 9 LEST examination?',
      a: 'No. There is no negative marking. Each correct answer carries 1 mark.'
    },
    {
      q: 'Can a candidate studying in an urban area claim the rural quota?',
      a: 'No. A candidate who has studied in a school located in an urban area even for a single day during Class VIII is classified as an Urban Candidate.'
    }
  ]
};

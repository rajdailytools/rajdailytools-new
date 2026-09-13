import { ExamInfoSection, AdmissionRecord } from '../types/exam';

export function generateNvsClass11_50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. NVS Class 11 Lateral Entry Admission 2027-28 – Official Notification Overview',
      content: `Navodaya Vidyalaya Samiti (NVS), an autonomous organization under the Department of School Education & Literacy, Ministry of Education, Government of India, has officially released the Prospectus-cum-Notification for the **Lateral Entry Selection Test (LEST 2027)** for admission to **Class-XI** against vacant seats likely to be available in Jawahar Navodaya Vidyalayas (JNVs) across India for the academic session **2027-28**.

JNVs are fully residential, co-educational central schools affiliated to the Central Board of Secondary Education (CBSE). Education in JNVs is completely free, including lodging, boarding, uniforms, textbooks, and daily stationery.

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
        <td class="p-3 font-semibold bg-slate-50/50">Conducting Authority</td>
        <td class="p-3 font-bold text-slate-900">Navodaya Vidyalaya Samiti (NVS), Ministry of Education, Govt. of India</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Admission Scheme</td>
        <td class="p-3 font-bold text-blue-700">Lateral Entry Selection Test (LEST) – Class XI (Session 2027-28)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Total Functional JNVs</td>
        <td class="p-3 font-bold text-emerald-700">665 Vidyalayas in 27 States and 8 Union Territories (except Tamil Nadu)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Nature of Vacancies</td>
        <td class="p-3">Admissions strictly against vacant seats remaining after accommodating regular JNV Class X students</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Date of Selection Test</td>
        <td class="p-3 font-bold text-rose-700">Saturday, 10th April 2027 (11:00 AM to 01:30 PM)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Last Date to Apply Online</td>
        <td class="p-3 font-bold text-amber-700">Wednesday, 30th September 2026</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Application Fee</td>
        <td class="p-3 font-bold text-emerald-700">₹0 / Free of Cost (Open to all eligible students)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Application Portal</td>
        <td class="p-3 font-mono text-xs text-blue-600 break-all"><a href="https://cbseitms.nic.in/2026/nvsxi_11?AspxAutoDetectCookieSupport=1" target="_blank" rel="noopener noreferrer" class="underline font-bold">https://cbseitms.nic.in/2026/nvsxi_11</a></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold bg-slate-50/50">Official Website</td>
        <td class="p-3"><a href="https://cbseitms.rcil.gov.in/nvs/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">https://cbseitms.rcil.gov.in/nvs/</a> &amp; <a href="https://www.navodaya.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">www.navodaya.gov.in</a></td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 2,
      title: '2. Important Dates & Complete Admission Timeline (2027-28)',
      content: `Aspirants and parents must adhere strictly to the schedule announced in the official prospectus for Jawahar Navodaya Vidyalaya Class XI Lateral Entry 2027:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-blue-50 text-blue-900 font-bold border-b border-blue-200">
      <tr>
        <th class="p-3">Event / Milestone</th>
        <th class="p-3">Official Date</th>
        <th class="p-3">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold">Release of Notification &amp; Prospectus</td>
        <td class="p-3">August 2026</td>
        <td class="p-3 text-emerald-700 font-bold">Released</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Online Registration Commenced</td>
        <td class="p-3">August 2026</td>
        <td class="p-3 text-emerald-700 font-bold">Active Now</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold text-rose-700">Last Date to Submit Online Application</td>
        <td class="p-3 font-bold text-rose-700">30 September 2026 (Wednesday)</td>
        <td class="p-3 text-amber-700 font-bold">Ongoing</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Online Application Correction Window</td>
        <td class="p-3">For 2-3 Days immediately after 30-09-2026</td>
        <td class="p-3 text-slate-500">Scheduled</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Issue of Admit Cards (Hall Tickets)</td>
        <td class="p-3 font-bold text-amber-600">Not Released / To Be Updated</td>
        <td class="p-3 text-slate-500">Before Exam</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold text-blue-700">Class XI Lateral Entry Selection Test (LEST 2027)</td>
        <td class="p-3 font-bold text-blue-800">10 April 2027 (Saturday, 11:00 AM – 01:30 PM)</td>
        <td class="p-3 text-blue-700 font-bold">Confirmed Date</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Declaration of Selection Test Results</td>
        <td class="p-3 font-bold text-amber-600">May / June 2027 (Not Released / To Be Updated)</td>
        <td class="p-3 text-slate-500">Upcoming</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Document Verification &amp; Medical Check-up</td>
        <td class="p-3 font-bold text-amber-600">Not Released / To Be Updated</td>
        <td class="p-3 text-slate-500">Post Result</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">10-Day Orientation Programme for Admitted Students</td>
        <td class="p-3">Before regular academic session start</td>
        <td class="p-3 text-slate-500">Post Admission</td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 3,
      title: '3. What is Jawahar Navodaya Vidyalaya (JNV) Scheme & Key Objectives',
      content: `The Jawahar Navodaya Vidyalaya scheme was conceptualized under the National Policy on Education (1986) to identify and nurture rural talent in India. 

**Salient Objectives of Navodaya Vidyalaya Samiti:**
1. **Quality Modern Education:** To deliver world-class modern education with special focus on science, mathematics, computer literacy, values, cultural awareness, physical education, and adventure sports to children primarily hailing from rural backgrounds.
2. **Three-Language Formula:** To implement the three-language curriculum effectively, cultivating functional fluency in regional languages, Hindi, and English.
3. **National Integration Through Migration:** 30% of students in Class IX from a Vidyalaya located in a Hindi-speaking district are migrated for one full academic year to a JNV located in a non-Hindi speaking district (and vice versa) to promote inter-state cultural harmony and understanding.
4. **District Resource Center:** To act as the focal point for school education quality improvement in each district through resource sharing, teacher training, and modern infrastructure.`
    },
    {
      id: 4,
      title: '4. State-Wise Distribution of 665 Functional JNVs Across India',
      content: `As per official NVS data, a total of 665 Jawahar Navodaya Vidyalayas are currently operational across 27 States and 8 Union Territories (except Tamil Nadu):

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
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
        <td class="p-2.5">Uttar Pradesh</td>
        <td class="p-2.5 font-bold">75 + 01** = 76</td>
        <td class="p-2.5">Madhya Pradesh</td>
        <td class="p-2.5 font-bold">51 + 02** + 01* = 54</td>
      </tr>
      <tr>
        <td class="p-2.5">Bihar</td>
        <td class="p-2.5 font-bold">38 + 01** = 39</td>
        <td class="p-2.5">Rajasthan</td>
        <td class="p-2.5 font-bold">33 + 02** = 35</td>
      </tr>
      <tr>
        <td class="p-2.5">Maharashtra</td>
        <td class="p-2.5 font-bold">33 + 01** = 34</td>
        <td class="p-2.5">Gujarat</td>
        <td class="p-2.5 font-bold">33 + 01** = 34</td>
      </tr>
      <tr>
        <td class="p-2.5">Karnataka</td>
        <td class="p-2.5 font-bold">30 + 01** = 31</td>
        <td class="p-2.5">Odisha</td>
        <td class="p-2.5 font-bold">30 + 01** = 31</td>
      </tr>
      <tr>
        <td class="p-2.5">Assam</td>
        <td class="p-2.5 font-bold">29 + 01** = 30</td>
        <td class="p-2.5">Chhattisgarh</td>
        <td class="p-2.5 font-bold">27 + 01** = 28</td>
      </tr>
      <tr>
        <td class="p-2.5">Jharkhand</td>
        <td class="p-2.5 font-bold">24 + 02** = 26</td>
        <td class="p-2.5">Punjab</td>
        <td class="p-2.5 font-bold">22 + 01** = 23</td>
      </tr>
      <tr>
        <td class="p-2.5">Haryana</td>
        <td class="p-2.5 font-bold">21</td>
        <td class="p-2.5">Jammu &amp; Kashmir (UT)</td>
        <td class="p-2.5 font-bold">19 + 01** = 20</td>
      </tr>
      <tr>
        <td class="p-2.5">West Bengal</td>
        <td class="p-2.5 font-bold">17 + 01** = 18</td>
        <td class="p-2.5">Arunachal Pradesh</td>
        <td class="p-2.5 font-bold">18</td>
      </tr>
      <tr>
        <td class="p-2.5">Andhra Pradesh</td>
        <td class="p-2.5 font-bold">13 + 02** = 15</td>
        <td class="p-2.5">Telangana</td>
        <td class="p-2.5 font-bold">15</td>
      </tr>
      <tr>
        <td class="p-2.5">Kerala</td>
        <td class="p-2.5 font-bold">14</td>
        <td class="p-2.5">Uttarakhand</td>
        <td class="p-2.5 font-bold">13</td>
      </tr>
      <tr>
        <td class="p-2.5">Himachal Pradesh</td>
        <td class="p-2.5 font-bold">12</td>
        <td class="p-2.5">Manipur</td>
        <td class="p-2.5 font-bold">12 + 02* = 14</td>
      </tr>
      <tr>
        <td class="p-2.5">Meghalaya</td>
        <td class="p-2.5 font-bold">11 + 01** = 12</td>
        <td class="p-2.5">Nagaland</td>
        <td class="p-2.5 font-bold">11</td>
      </tr>
      <tr>
        <td class="p-2.5">Tripura / Mizoram</td>
        <td class="p-2.5 font-bold">8 each</td>
        <td class="p-2.5">Delhi (UT)</td>
        <td class="p-2.5 font-bold">2 + 3 = 5</td>
      </tr>
      <tr>
        <td class="p-2.5">Sikkim / Puducherry</td>
        <td class="p-2.5 font-bold">4 each</td>
        <td class="p-2.5">Goa / Ladakh / DNH&amp;DD</td>
        <td class="p-2.5 font-bold">2 / 2 / 3</td>
      </tr>
      <tr class="bg-blue-50/80 font-bold text-blue-900">
        <td class="p-3" colspan="2">Total Functional JNVs Across India:</td>
        <td class="p-3 font-mono text-base" colspan="2">642 + 20** (SC/ST Districts) + 3* (Special) = 665</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-slate-500 italic">*Special JNVs. **Additional JNVs sanctioned in districts with high SC/ST demographic concentration (Annexure-II).</p>`
    },
    {
      id: 5,
      title: '5. Salient Features of Education in Navodaya Vidyalayas',
      content: `1. **CBSE Affiliation:** All JNVs are affiliated to CBSE, New Delhi, and follow the NCERT curriculum.
2. **Co-Educational Residential Setup:** Boys and girls reside in separate dedicated hostel dormitories with round-the-clock warden supervision and security.
3. **Medium of Instruction:** Mother tongue/regional language up to Class VIII. From Class IX onwards, English is the medium for Mathematics and Science, while Social Science is taught in Hindi/English.
4. **Comprehensive Facilities:** Well-equipped Physics, Chemistry, Biology, Mathematics, and Atal Tinkering Labs (ATL), high-speed smart classrooms, and broad athletic grounds.
5. **Holistic Development:** Compulsory physical training, NCC, Scout &amp; Guide, yoga, cultural programmes, and inter-JNV national level competitions.`
    },
    {
      id: 6,
      title: '6. Free Education & Vidyalaya Vikas Nidhi (VVN) Fee Rules',
      content: `In accordance with Government of India policy, education in Navodaya Vidyalayas is **free** for all students, including accommodation, food, uniform, and textbooks.

**Vidyalaya Vikas Nidhi (VVN) Contribution Rules:**
- Collected only from students of **Classes IX to XII**.
- **Standard Contribution:** **₹600/- per student per month**.
- **100% Exempted Categories (No VVN to be paid):**
  - All Scheduled Caste (SC) students
  - All Scheduled Tribe (ST) students
  - All Divyang (differently-abled) students
  - **All Girl students**
  - Students whose family income is Below Poverty Line (BPL)
- **Wards of Government Employees (Non-exempted):**
  - Charged at **₹1,500/- per month** OR the actual **Children Education Allowance (CEA)** received per month by the parent from their employer, whichever is less.
  - VVN will not be less than ₹600/- per student per month.

<div class="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900">
  <strong>Example:</strong> If a boy student belongs to the General or OBC creamy layer category, whose parents are private employees, he will contribute ₹600/month towards VVN. However, if a candidate is a girl (any category), an SC/ST boy, or from a BPL card-holding family, <strong>zero VVN (100% free)</strong> is charged.
</div>`
    },
    {
      id: 7,
      title: '7. Who is ELIGIBLE for NVS Class 11 Lateral Entry 2027-28',
      content: `To be eligible for the Class XI Lateral Entry Selection Test 2027, the candidate must satisfy **ALL three mandatory conditions**:

1. **Age / Date of Birth Window:**
   - Candidate must be born between **1st June 2010 and 31st July 2012** (both days inclusive).
   - This age criterion applies uniformly to **all candidates of all categories**, including SC, ST, OBC, General, and Divyang.
2. **Current Academic Enrollment:**
   - Candidate must be currently studying in **Class X during the academic session 2026-27** (April 2026 to March 2027 session OR January 2026 to December 2026 session).
   - The school of study must be a Government or Government recognized school (affiliated to CBSE, ICSE, or any State Education Board).
3. **District Jurisdiction (Study &amp; Residence):**
   - Candidate must be studying Class X from a school situated in the **same district** where the JNV is located.
   - Candidate must be an **Indian National** studying Class X in India.`
    },
    {
      id: 8,
      title: '8. Who is NOT ELIGIBLE – Important Disqualifications',
      content: `The NVS Prospectus cum Notification lays down strict disqualification criteria:

1. **Passed Class X in Previous Years:**
   - Candidates who have passed Class X prior to the academic session 2026-27 are **strictly NOT eligible**.
   - Repeaters who completed 10th in 2025 or earlier cannot appear.
2. **Outside District Enrollment:**
   - If a candidate is studying Class X in District "A", they are **not eligible** to apply for the JNV in District "B" under district quota.
3. **Inter-State Bar:**
   - Candidates from one State are **not eligible** for admission in another State.
4. **Foreign Nationals:**
   - Non-Indian citizens or students studying Class X in schools outside India cannot apply.
5. **Overage / Underage Applicants:**
   - Candidates born before 1st June 2010 or born after 31st July 2012 are strictly barred without exception.`
    },
    {
      id: 9,
      title: '9. Age Limit & Date of Birth Calculation Criteria',
      content: `The prescribed date of birth bracket is strictly verified with the municipal birth certificate and CBSE/Board records:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Eligibility Criterion</th>
        <th class="p-3">Official Notification Rule</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold">Earliest Permissible Date of Birth</td>
        <td class="p-3 font-bold text-slate-900">01 June 2010 (01-06-2010)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Latest Permissible Date of Birth</td>
        <td class="p-3 font-bold text-slate-900">31 July 2012 (31-07-2012)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Boundary Inclusivity</td>
        <td class="p-3 text-emerald-700 font-bold">Both days inclusive (01.06.2010 and 31.07.2012 are eligible)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Category Relaxations in Age</td>
        <td class="p-3 font-bold text-rose-700">NO RELAXATION. Applies to SC, ST, OBC, General, Divyang equally.</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Medical Board Clause</td>
        <td class="p-3">In doubtful cases of overage, candidates are referred to District Medical Board whose decision is final.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900">
  <strong>Example:</strong>
  <ul class="list-disc list-inside mt-1 space-y-1">
    <li>Candidate Rohit was born on <strong>15 August 2010</strong> &rarr; <span class="font-bold text-emerald-700">ELIGIBLE</span> (falls within 01.06.2010 to 31.07.2012).</li>
    <li>Candidate Sneha was born on <strong>10 May 2010</strong> &rarr; <span class="font-bold text-rose-700">NOT ELIGIBLE</span> (born 21 days before 01.06.2010).</li>
    <li>Candidate Aarav was born on <strong>05 August 2012</strong> &rarr; <span class="font-bold text-rose-700">NOT ELIGIBLE</span> (born 5 days after 31.07.2012).</li>
  </ul>
</div>`
    },
    {
      id: 10,
      title: '10. Class 10th Qualification & Academic Session Eligibility',
      content: `1. **Current 10th Enrollment Mandatory:** Candidates must be enrolled in and appearing for Class X from a recognized board during the **2026-27 academic session**.
2. **Qualifying Requirement:** Provisional selection in LEST 2027 will only be converted into confirmed admission if the candidate successfully **passes the Class X Board Examination (Session 2026-27)** before the admission verification date.
3. **Board Recognition:** Schools affiliated to CBSE, ICSE, National Institute of Open Schooling (NIOS), or any recognized State Education Board are fully acceptable.
4. **Regular vs Repeaters:** Candidates who are repeating Class X after failing in a previous session are **ineligible**.`
    },
    {
      id: 11,
      title: '11. District Jurisdiction & Residence Twin-Condition Rule',
      content: `NVS strictly enforces the **Twin Condition of District Residence and Study**:
- **Condition A (Study):** Candidate must be enrolled and studying Class X in a recognized school located physically within the revenue district of the concerned JNV.
- **Condition B (Residence):** The candidate's parents must be bona fide residents of that exact same district.
- **Verification:** Selected candidates must submit a valid Residence Certificate issued by the competent Government Revenue Authority (DM, ADM, SDM, or Tehsildar) of that district.

<div class="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
  <strong>Example:</strong> If a student's family resides in District Varanasi, but the student attends a boarding school in District Prayagraj for Class X, the student can only compete under the district merit of the district where both study and parental residence match, or under State merit if vacancies permit.
</div>`
    },
    {
      id: 12,
      title: '12. Rural vs Urban Candidate Classification Rules',
      content: `NVS provides preferential seat allocation for rural students. The classification criteria are rigorous:

1. **Rural Candidate:**
   - A candidate who is studying Class-X in a school located in an area officially notified as a **Rural Area** as on the last date of application.
   - Rural candidates are eligible to compete under both the **Open Quota** and the dedicated **Rural Quota**.
   - Must produce a certificate issued by District Administration confirming that the Class X school is located in a rural area.
2. **Urban Candidate:**
   - A candidate who has studied Class X in a school located in an urban area **even for a single day** of the session will be considered as an **Urban Candidate**.
   - Urban areas are those officially classified as Municipal Corporations, Municipalities, Notified Area Councils, or Cantonment Boards.

<div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800">
  <strong>Example:</strong> If Candidate Amit lives in a village but attends a Class 10 school inside the municipal corporation boundaries of the district headquarters, Amit is classified as an <strong>Urban candidate</strong> because the school of study is located in an urban area.
</div>`
    },
    {
      id: 13,
      title: '13. Reservation of Seats (SC, ST, OBC, Divyang & Girls)',
      content: `Class XI Lateral Entry Selection Test is conducted exclusively to fill **resultant vacant seats** after admitting the regular Class X students of JNV.

**Reservation Implementation Framework:**
- Vacant seats in SC, ST, OBC, and Divyang categories are reserved for eligible students of the respective category.
- **OBC Reservation:** Implemented strictly as per the **Central List of Other Backward Classes**. OBC candidates whose caste is NOT included in the Central List must apply under the **General** category.
- **Girl Students:** Vacant seats earmarked for girls will be filled by female candidates.
- **Transgender Candidates:** No separate reservation is provided; transgender applicants are considered under the 'Boys' quota for reservation in their respective categories.
- **Divyang Candidates:** Horizontal reservation for Orthopedic, Hearing, and Visual impairments, acid attack victims, and dwarfism with medical certificate from Chief Medical Officer (CMO).`
    },
    {
      id: 14,
      title: '14. Special SC / ST Concentration Districts (Annexure-II List)',
      content: `The Government of India has established additional Jawahar Navodaya Vidyalayas (JNV-II) in districts with high SC/ST demographic density. Applicants in these districts must confirm their block:

- **Gujarat:** Dahod-I &amp; Dahod-II (Blocks: Fatepura, Sanjeli, Zalod, Limdi, Devgadh Baria, Dhanpur, Garbada, Limkheda, Singvad).
- **Madhya Pradesh:** Jhabua-I &amp; II (Rama, Ranapur, Thandla, Petlawad, Meghnagar); Ratlam-I &amp; II (Piploda, Sailana, Alote, Bajna, Jaora); Ujjain-I &amp; II (Ghattiya, Tarana, Badnagar, Khachrod, Mahidpur).
- **Odisha:** Malkangiri-I &amp; II (Kalimela, Podia, Khairput, Korukonda, Kudumulugumma, Mathili).
- **Chhattisgarh:** Sukma-I (Konta) &amp; Sukma-II (Sukma, Chhindgarh).
- **Jammu &amp; Kashmir (UT):** Jammu-I &amp; Jammu-II (Bhalwal, Gandhi Nagar, Marh, R.S. Pura, Akhnoor, Bishnah, Dansal, Khour).
- **Punjab:** Amritsar-I &amp; Amritsar-II (Chogawan, Harsha Chhina, Jandiala Guru, Ajnala, Majitha, Rayya).
- **Andhra Pradesh:** East Godavari (Kakinada &amp; Polavaram) and Prakasam (Markapuram).
- **Karnataka:** Kalaburagi-I &amp; II (Afzalpur, Aland, Chincholi, Chittapur, Sedam).
- **Rajasthan:** Banswara-I &amp; II and Sri Ganganagar-I &amp; II (Anupgarh, Gharsana, Raisinghnagar, Suratgarh).
- **Uttar Pradesh:** Sitapur-I &amp; Sitapur-II (Biswan, Kashmanda, Khairbad, Laharpur, Maholi, Mishrikh).
- **Bihar &amp; Jharkhand:** Gaya-I &amp; Gaya-II; Pakur-I &amp; II; Palamu-I &amp; II.
- **Maharashtra:** Nandurbar-I &amp; II.
- **Assam &amp; Meghalaya:** Karbi Anglong-I &amp; II; East Khasi Hills-I &amp; II.`
    },
    {
      id: 15,
      title: '15. Available Academic Streams in Class XI (Science, Commerce, Humanities, Vocational)',
      content: `JNVs offer senior secondary education across four core academic streams:

1. **Science Stream:**
   - **Compulsory Subjects:** Physics and Chemistry.
   - **Electives:** Mathematics, Biology, Computer Science / Informatics Practices.
2. **Commerce Stream:**
   - **Compulsory Subjects:** Accountancy, Business Studies, and Economics.
   - **Electives:** Mathematics, Applied Mathematics, Informatics Practices.
3. **Humanities Stream:**
   - **Compulsory Subjects:** History, Geography, and Economics / Political Science.
   - **Electives:** Sociology, Psychology, Hindi Core, English Core.
4. **Vocational Stream:**
   - Specialized job-oriented CBSE vocational skill courses as notified per regional JNV.`
    },
    {
      id: 16,
      title: '16. Stream Opting Rules (Max 2 Streams & Up to 3 JNVs per Stream)',
      content: `During online form submission on the NVS portal, candidates can select stream preferences as follows:

- **Maximum Streams Allowed:** Each candidate is permitted to opt for a **maximum of two streams** (e.g., Option 1: Science, Option 2: Commerce).
- **Maximum JNVs per Stream:** For each opted stream, the candidate can choose a **maximum of three Jawahar Navodaya Vidyalayas** (in order of priority).
- **Single Stream Preference:** Candidates interested only in one particular stream (e.g. Science only) are strongly advised to select only that stream.
- **Automatic Preference Hierarchy:** If multiple streams are opted, NVS processes choices strictly in the sequence:
  $$\\text{Science} \\longrightarrow \\text{Commerce} \\longrightarrow \\text{Humanities} \\longrightarrow \\text{Vocational}$$
- **Binding Selection:** Once provisionally selected for a specific JNV and stream based on merit and vacancies, **no request for change of JNV or stream will be entertained**.`
    },
    {
      id: 17,
      title: '17. Two-Tier Merit List Process: District Merit & State Merit Lists',
      content: `Provisional selection of students is executed through a two-stage hierarchical process:

1. **Stage 1 – District Wise Merit List:**
   - A district-wise merit list is prepared from qualified candidates of the district.
   - Only candidates satisfying the twin conditions of residence and Class X study in that district are considered for district vacancies.
   - Vacancies in the home JNV are filled first.
2. **Stage 2 – State Level Common Merit List:**
   - After filling district-level vacancies, all remaining qualified candidates from the entire state are merged into a State Common Merit List.
   - Vacancies remaining unfilled in any JNV of that state are filled from the State merit list based on candidates' exercised stream/JNV options.
3. **No Inter-State Movement:** Candidates from one State are strictly ineligible for selection in JNVs of another State.`
    },
    {
      id: 18,
      title: '18. Selection Test (LEST 2027) Exam Pattern & Structure',
      content: `The Lateral Entry Selection Test (LEST) Class XI 2027 is conducted as an objective pen-and-paper test:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-blue-600 text-white font-bold">
      <tr>
        <th class="p-3">Section</th>
        <th class="p-3">Subject</th>
        <th class="p-3">No. of Questions</th>
        <th class="p-3">Max Marks</th>
        <th class="p-3">Approx Time</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-bold">Section I</td>
        <td class="p-3 font-semibold">Mental Ability</td>
        <td class="p-3 font-mono">20 MCQs</td>
        <td class="p-3 font-mono">20 Marks</td>
        <td class="p-3">30 Minutes</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">Section II</td>
        <td class="p-3 font-semibold">English</td>
        <td class="p-3 font-mono">20 MCQs</td>
        <td class="p-3 font-mono">20 Marks</td>
        <td class="p-3">30 Minutes</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">Section III</td>
        <td class="p-3 font-semibold">Science</td>
        <td class="p-3 font-mono">20 MCQs</td>
        <td class="p-3 font-mono">20 Marks</td>
        <td class="p-3">30 Minutes</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">Section IV</td>
        <td class="p-3 font-semibold">Social Science</td>
        <td class="p-3 font-mono">20 MCQs</td>
        <td class="p-3 font-mono">20 Marks</td>
        <td class="p-3">30 Minutes</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">Section V</td>
        <td class="p-3 font-semibold">Mathematics</td>
        <td class="p-3 font-mono">20 MCQs</td>
        <td class="p-3 font-mono">20 Marks</td>
        <td class="p-3">30 Minutes</td>
      </tr>
      <tr class="bg-blue-50 font-black text-blue-950">
        <td class="p-3" colspan="2">Total Test Booklet</td>
        <td class="p-3 font-mono">100 Questions</td>
        <td class="p-3 font-mono">100 Marks</td>
        <td class="p-3">2 Hours 30 Minutes</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-slate-500"><strong>Divyang Compensatory Time:</strong> Divyang students are granted an additional 50 minutes compensatory time as per Government norms.</p>`
    },
    {
      id: 19,
      title: '19. Sectional Minimum Qualifying Marks (06 out of 20 Rule)',
      content: `NVS has prescribed a strict **Sectional Cutoff**:
- Every candidate must score a **minimum of 06 marks out of 20** in **ALL 05 subjects** (Mental Ability, English, Science, Social Science, and Mathematics).
- If a candidate scores 20/20 in four subjects but scores only 05/20 in English or Mathematics, the candidate is **disqualified** from merit consideration.

<div class="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-900">
  <strong>Example:</strong> Candidate Priya scored 19 in Mental Ability, 18 in Science, 17 in Math, 16 in Social Science, but scored <strong>05 in English</strong>. Even though her total score is 75/100, Priya is <strong>disqualified</strong> because she did not meet the mandatory sectional qualifying score of 06 marks in English.
</div>`
    },
    {
      id: 20,
      title: '20. Stream-Wise Merit Score Calculation (Out of 60 Marks)',
      content: `While the test is out of 100 marks, stream-wise merit ranking is calculated on a **60-mark composite scale** based on subjects relevant to that stream:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-indigo-50 text-indigo-900 font-bold border-b border-indigo-200">
      <tr>
        <th class="p-3">Opted Stream</th>
        <th class="p-3">Subjects Considered for Merit Score</th>
        <th class="p-3">Maximum Marks</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-bold text-blue-700">Science Stream</td>
        <td class="p-3">Mental Ability (20) + Science (20) + Mathematics (20)</td>
        <td class="p-3 font-bold font-mono">60 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-bold text-emerald-700">Commerce Stream</td>
        <td class="p-3">Mental Ability (20) + Social Science (20) + Mathematics (20)</td>
        <td class="p-3 font-bold font-mono">60 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-bold text-purple-700">Humanities Stream</td>
        <td class="p-3">Mental Ability (20) + Social Science (20) + One highest subject from remaining three (English/Science/Math)</td>
        <td class="p-3 font-bold font-mono">60 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-bold text-amber-700">Vocational Stream</td>
        <td class="p-3">Mental Ability (20) + Two highest subjects from remaining four (English/Science/Math/Social Science)</td>
        <td class="p-3 font-bold font-mono">60 Marks</td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 21,
      title: '21. Overall Cut-Off Score Criteria (Out of 60)',
      content: `In addition to the sectional cut-off of 6/20 in each subject, candidates must achieve the **Overall Cut-Off out of 60 marks**:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Candidate Category</th>
        <th class="p-3">Minimum Overall Cut-Off (Out of 60)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold">General &amp; OBC Boys</td>
        <td class="p-3 font-bold text-blue-700 font-mono">21 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">General &amp; OBC Girls</td>
        <td class="p-3 font-bold text-emerald-700 font-mono">20 Marks</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">SC / ST / Divyang Candidates</td>
        <td class="p-3 font-bold text-purple-700 font-mono">18 Marks</td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 22,
      title: '22. Tie-Breaking Order of Sequence in Merit List',
      content: `When two or more candidates obtain identical marks out of 60, ties are resolved in the following strict order:

1. **Sequence I – Gender Priority:** Female candidate will be preferred over male candidate.
2. **Sequence II – Two-Subject Marks:** Candidate who scored higher marks out of 40 in the two domain subjects (excluding Mental Ability score) is ranked higher.
3. **Sequence III – Overall Marks:** Candidate who scored higher total marks across all five subjects (out of 100) will be preferred.
4. **Sequence IV – Younger Age:** If tie still exists, the candidate whose age is less (i.e. younger date of birth) will be preferred.

<div class="p-3.5 bg-indigo-50 border border-indigo-200 rounded-xl text-xs text-indigo-900">
  <strong>Example:</strong> Candidate Ankit (Male) and Candidate Neha (Female) both scored 48/60 in Science Stream. As per Sequence I, Neha is provisionally selected because female candidates receive first tie-break preference.
</div>`
    },
    {
      id: 23,
      title: '23. Detailed Syllabus – Subject: Mental Ability (20 Marks)',
      content: `Mental Ability tests general intelligence, cognitive reasoning, and spatial comprehension (20 MCQs, 20 Marks):

1. **Pattern Completion:** Identifying missing segments in complex geometric matrices.
2. **Figure Series Completion:** Recognizing sequential changes in rotational angles and elements.
3. **Geometrical Figure Completion:** Completing Triangles, Squares, and Circles with missing pieces.
4. **Mirror Imaging:** Assessing left-right lateral inversions of alphanumeric and abstract symbols.
5. **Punched Hold Pattern (Paper Folding &amp; Unfolding):** Creasing and punch hole projections.
6. **Calendar, Time and Clock:** Day calculations, hour-minute hand angles, leap year logic.
7. **Embedded Figures:** Detecting hidden simple components inside intricate figure designs.
8. **Coding-Decoding:** Letter shifting, numeric substitutions, and symbol ciphering.
9. **Orientation / Direction:** Compass coordinates, bearing angles, distance displaced.
10. **Space Visualization:** Assembling scattered 2D/3D blocks into coherent solid shapes.`
    },
    {
      id: 24,
      title: '24. Detailed Syllabus – Subject: English (20 Marks)',
      content: `English evaluates reading fluency, vocabulary, and grammatical precision (20 MCQs, 20 Marks):

**Section A: Reading Skills (10 Marks)**
- Unseen Discursive Passage with inferential and lexical questions.
- Case-based factual passage with charts, visual inputs, or statistical tables.

**Section B: Grammar (10 Marks)**
- Tenses (Present, Past, Future aspects)
- Modals (can, could, may, might, must, should, ought to)
- Subject-Verb Concord (Agreement in person and number)
- Reported Speech:
  - Commands and requests
  - Statements and assertive clauses
  - Interrogative questions (Wh- questions and auxiliary inversions)
- Determiners, Articles, Quantifiers
- Spelling rules and contextual Syntax`
    },
    {
      id: 25,
      title: '25. Detailed Syllabus – Subject: Mathematics (20 Marks)',
      content: `Mathematics syllabus corresponds strictly to the secondary NCERT curriculum (20 MCQs, 20 Marks):

- **Unit I: Number Systems:** Fundamental Theorem of Arithmetic, irrationality proofs for $\\sqrt{2}, \\sqrt{3}, \\sqrt{5}$.
- **Unit II: Algebra:**
  - Polynomials (zeros &amp; coefficients relationship).
  - Pair of Linear Equations in Two Variables (substitution, elimination, consistency).
  - Quadratic Equations ($ax^2 + bx + c = 0$, quadratic formula, discriminant nature of roots).
  - Arithmetic Progressions (nth term $a_n$, sum of $n$ terms $S_n$, real-life word problems).
- **Unit III: Coordinate Geometry:** Distance formula, Section formula (internal division), collinearity.
- **Unit IV: Geometry:**
  - Triangles: Basic Proportionality Theorem (Thales), similarity criteria (AAA, SSS, SAS).
  - Circles: Tangent theorems, radius-tangent perpendicularity, equal lengths from external point.
- **Unit V: Trigonometry:** Acute angle ratios ($0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$), identity $\\sin^2 A + \\cos^2 A = 1$, Heights and Distances (angles of elevation &amp; depression $30^\\circ, 45^\\circ, 60^\\circ$).
- **Unit VI: Mensuration:** Areas related to circles (sectors, segments with central angles $60^\\circ, 90^\\circ, 120^\\circ$), Surface Areas and Volumes of combinations of cubes, cuboids, spheres, hemispheres, cylinders, cones.
- **Unit VII: Statistics &amp; Probability:** Mean, Median, Mode of grouped data; classical probability of events.`
    },
    {
      id: 26,
      title: '26. Detailed Syllabus – Subject: Science (20 Marks)',
      content: `Science covers physical, chemical, and biological themes from NCERT Class X (20 MCQs, 20 Marks):

- **Theme: Materials (Chemical Substances - Nature &amp; Behaviour):**
  - Chemical Reactions: Balancing equations, combination, decomposition, displacement, double displacement, precipitation, redox.
  - Acids, Bases &amp; Salts: $H^+$ and $OH^-$ concepts, pH scale, preparation of NaOH, Bleaching Powder, Baking Soda, Washing Soda, Plaster of Paris.
  - Metals &amp; Non-metals: Reactivity series, ionic bond formation, metallurgy basics, corrosion prevention.
  - Carbon Compounds: Covalent bonds, homologous series, functional groups, saturated/unsaturated hydrocarbons, ethanol &amp; ethanoic acid, soaps &amp; detergents.
- **Theme: The World of the Living:**
  - Life Processes: Nutrition, respiration, transport, excretion in plants and animals.
  - Control &amp; Coordination: Plant tropic movements, plant hormones, human nervous system, reflex action, endocrine hormones.
  - Reproduction: Asexual &amp; sexual reproduction, reproductive health, safe sex.
  - Heredity: Mendel's laws of inheritance, monohybrid/dihybrid cross, sex determination.
- **Theme: Natural Phenomena &amp; How Things Work:**
  - Light: Reflection by spherical mirrors, mirror formula, refraction, Snell's law, lenses, lens formula, power, human eye defects (myopia, hypermetropia, presbyopia), prism dispersion.
  - Electricity: Ohm's law, resistance, resistivity, series/parallel combinations, Joule's heating effect, electric power ($P = VI = I^2R = V^2/R$).
  - Magnetic Effects of Current: Magnetic fields, right-hand thumb rule, solenoid, Fleming's left-hand rule, domestic circuits.
- **Theme: Natural Resources:** Ecosystems, food chains, ozone depletion, waste management.`
    },
    {
      id: 27,
      title: '27. Detailed Syllabus – Subject: Social Science (20 Marks)',
      content: `Social Science assesses historical, geographical, economic, and civic awareness (20 MCQs, 20 Marks):

- **Unit 1: History (India and the Contemporary World – II):**
  - Rise of Nationalism in Europe (French Revolution, German &amp; Italian unification).
  - Nationalism in India (Non-Cooperation, Civil Disobedience, collective belonging).
  - Making of a Global World (pre-modern trade, 19th-century economy, post-war institutions).
  - Age of Industrialization; Print Culture and the Modern World.
- **Unit 2: Geography (Contemporary India – II):**
  - Resources &amp; Development (soils of India, land use, conservation).
  - Forest and Wildlife Resources; Water Resources (multipurpose dams, rainwater harvesting).
  - Agriculture (cropping seasons Kharif/Rabi/Zaid, food &amp; cash crops).
  - Minerals &amp; Energy Resources; Manufacturing Industries; Lifelines of National Economy.
- **Unit 3: Democratic Politics – II:**
  - Power Sharing (Belgium &amp; Sri Lanka models); Federalism in India.
  - Gender, Religion &amp; Caste; Political Parties (national &amp; state parties, reforms); Outcomes of Democracy.
- **Unit 4: Economics (Understanding Economic Development):**
  - Development criteria; Sectors of the Indian Economy (Primary, Secondary, Tertiary).
  - Money and Credit (formal vs informal sources, SHGs); Globalization &amp; WTO.`
    },
    {
      id: 28,
      title: '28. OMR Sheet Answering Guidelines & Prohibited Practices',
      content: `The Lateral Entry Selection Test uses machine-gradable **Optical Mark Recognition (OMR)** answer sheets:

1. **Pen Rules:** Only **Blue or Black Ball Point Pen** must be used. **Use of pencil is strictly prohibited.**
2. **Darkening Circles:** Darken the complete circular bubble for your chosen response (A, B, C, or D).
3. **No Erasing or Overwriting:** Striking off answers, applying white correction fluid, scratching, or erasing is strictly forbidden; such questions will not be evaluated.
4. **Marking Scheme:** Each correct answer carries **+1 mark**. There is **no negative marking** for incorrect answers.
5. **Roll Number &amp; Booklet Code:** Candidates must carefully fill and bubble their Roll Number and Question Booklet Code (A, B, C, or D) on Side-1 and Side-2 of the OMR.`
    },
    {
      id: 29,
      title: '29. Step-by-Step Online Application Procedure (cbseitms.nic.in)',
      content: `Online registration is hosted on CBSE ITMS portal in partnership with NVS:

1. **Access the Portal:** Visit **https://cbseitms.nic.in/2026/nvsxi_11** or navigate from **www.navodaya.gov.in**.
2. **Registration Initiation:** Click on "Class XI Lateral Entry Registration 2027" and read the instructions.
3. **Enter Candidate Particulars:** Fill Candidate Name, Mother's Name, Father's Name, Date of Birth, Gender, Category (Gen/OBC/SC/ST), and Aadhaar number.
4. **Provide Academic Details:** Select State and District of Class X study, School Name, Board affiliation, and Rural/Urban status of the school.
5. **Exercise Stream &amp; JNV Preferences:** Select up to 2 streams and choose up to 3 preferred JNVs for each stream.
6. **Upload Required Soft Copies:** Upload JPG format files (10 to 100 KB) of:
   - Candidate's recent photograph
   - Candidate's running signature
   - Parent/Guardian's signature
7. **Review &amp; Final Submit:** Verify every entry thoroughly before final submission. Note the generated **Registration Number**.
8. **Print Confirmation:** Download and print two copies of the completed application form for future reference.`
    },
    {
      id: 30,
      title: '30. Documents & Files Required for Online Registration',
      content: `Keep the following files ready before filling the online form:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Required Document</th>
        <th class="p-3">File Format</th>
        <th class="p-3">Permitted Size Limits</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold">Candidate Recent Passport Photograph</td>
        <td class="p-3 font-mono">JPG / JPEG</td>
        <td class="p-3 font-bold text-blue-700">10 KB to 100 KB</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Candidate's Running Signature</td>
        <td class="p-3 font-mono">JPG / JPEG</td>
        <td class="p-3 font-bold text-blue-700">10 KB to 100 KB</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Parent / Guardian Signature</td>
        <td class="p-3 font-mono">JPG / JPEG</td>
        <td class="p-3 font-bold text-blue-700">10 KB to 100 KB</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Aadhaar Number / Enrollment Slip</td>
        <td class="p-3">Numeric input in portal</td>
        <td class="p-3">Valid 12-digit number</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-slate-500"><strong>Note:</strong> Original caste, residence, birth, and Class X marks certificates are <em>not</em> uploaded during registration; they are submitted during physical document verification after selection.</p>`
    },
    {
      id: 31,
      title: '31. Application Help Desks at Local JNVs (Free Assistance)',
      content: `To ensure that rural applicants face no digital barriers, NVS operates **Free Help Desks** in every functional Jawahar Navodaya Vidyalaya:

- Candidates and parents without computer or internet access can visit the nearest JNV during working hours.
- School staff will scan photographs, enter details, and submit the online application form **completely free of cost**.
- Parents should carry the candidate, passport photos, and handwritten signatures.`
    },
    {
      id: 32,
      title: '32. Online Application Correction Window Guidelines',
      content: `1. **Duration:** NVS will open an online correction window for **2 to 3 days** immediately following the registration deadline (after 30th September 2026).
2. **Permissible Corrections:** Permitted editable fields include gender, category (General/OBC/SC/ST), rural/urban status, stream preference, and school details.
3. **Finality:** Once the correction window closes, no requests for corrections or data alterations will be entertained under any circumstances.`
    },
    {
      id: 33,
      title: '33. Examination Centre Allotment Rules',
      content: `1. **Center Allocation:** The examination center is allotted in the candidate's home district (usually the local JNV or an affiliated central/state school).
2. **No Center Change:** No candidate will be permitted to appear from any center other than the one printed on their Admit Card.
3. **Reporting:** Candidates must report with their printed Admit Card and a valid Government Photo ID proof (Aadhaar, School ID card).`
    },
    {
      id: 34,
      title: '34. Admit Card Download Procedures & Important Instructions',
      content: `1. **Portal Download:** Admit cards will be released online on the NVS/CBSE ITMS portal prior to the test.
2. **Cost:** Admit cards can be downloaded free of cost by logging in with the candidate's Registration Number and Date of Birth.
3. **Discrepancy:** Verify candidate name, photograph, signature, test center name, and timing. Immediately contact the JNV Principal in case of error.
4. **Mandatory at Center:** Candidates without an authentic printed Admit Card will strictly NOT be permitted into the exam hall.`
    },
    {
      id: 35,
      title: '35. Test Day Timings & Shift Schedule (10th April 2027)',
      content: `The exam schedule for Saturday, 10th April 2027:
- **Reporting Time at Center:** 10:00 AM
- **Entry &amp; Verification:** 10:00 AM to 10:30 AM
- **Distribution of Test Booklets &amp; OMR:** 10:45 AM
- **Test Commences:** 11:00 AM
- **Test Concludes:** 01:30 PM (Duration: 2 hours 30 minutes)
- **Divyang Candidates:** Concludes at 02:20 PM (Additional 50 minutes compensatory time)`
    },
    {
      id: 36,
      title: '36. Medium of Question Paper (Bilingual English & Hindi)',
      content: `The selection test question booklet is printed **Bilingually in English and Hindi**:
- Mental Ability, Science, Mathematics, and Social Science questions are presented side-by-side in English and Hindi.
- English section questions are in English only.
- In case of any linguistic ambiguity in question interpretation, the English version is treated as final and authoritative.`
    },
    {
      id: 37,
      title: '37. Declaration of Selection Test Results & Merit Lists',
      content: `1. **Expected Timeline:** Results of LEST 2027 are scheduled to be announced by **May / June 2027**.
2. **Online Portal:** Result can be checked by logging in on the NVS portal with Registration Number and Password.
3. **Public Notice Boards:** Result sheets showing roll numbers of provisionally selected candidates are also displayed at:
   - Concerned Jawahar Navodaya Vidyalaya notice board
   - Office of District Magistrate (DM)
   - Office of District Education Officer (DEO)
   - Regional Deputy Commissioner Office, NVS
4. **Direct Notification:** The JNV Principal will also notify selected candidates via SMS and Speed Post.`
    },
    {
      id: 38,
      title: '38. Rules on Marks Communication & No Re-Evaluation',
      content: `1. **No Score Disclosure:** NVS does not communicate individual marks scored in the selection test.
2. **No Re-Totaling or Re-Evaluation:** Answer sheets are processed through an automated computer optical scanner with multiple validation algorithms. Requests for scrutiny, re-checking, or re-totalling of OMR sheets are **not entertained** under any circumstance.`
    },
    {
      id: 39,
      title: '39. Provisional Nature of Selection & Right to Admission',
      content: `Provisional selection in LEST 2027 does **not** confer an automatic right of admission to JNV.
- Actual admission is strictly subject to:
  1. Passing the Class X Board Examination (2026-27).
  2. Availability of actual vacant seats and residential accommodation in the specific JNV.
  3. Successful physical verification of all original certificates and eligibility documents.
  4. Clearing the medical examination by the Vidyalaya Doctor.`
    },
    {
      id: 40,
      title: '40. Documents to be Submitted After Selection (Verification Checklist)',
      content: `Parents of provisionally selected candidates must submit the following documents at the time of admission:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Document Required</th>
        <th class="p-3">Issuing Authority / Specification</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold">Proof of Date of Birth</td>
        <td class="p-3">Birth Certificate issued by Municipal Authority or Registrar of Births</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Class X Pass Certificate &amp; Marksheet</td>
        <td class="p-3">Issued by CBSE / ICSE / State Board for 2026-27 session</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">District Residence Certificate</td>
        <td class="p-3">Issued by competent revenue authority (DM / SDM / Tehsildar) of the district</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Rural Area Study Certificate</td>
        <td class="p-3">Certificate by District Administration that Class X school is in rural area (if applying under rural quota)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Caste / Category Certificate</td>
        <td class="p-3">SC / ST certificate or OBC Certificate as per Central List format</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Aadhaar Card Copy</td>
        <td class="p-3">Mandatory as per Section 7 of Aadhaar Act, 2016</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Divyang / Disability Certificate</td>
        <td class="p-3">Signed by Chief Medical Officer (CMO) of the district</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold text-rose-700">Transfer Certificate (TC)</td>
        <td class="p-3 font-bold text-rose-800">From parent school, counter-signed by DEO / BEO. <em>Apply only after JNV confirmation!</em></td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 41,
      title: '41. School Transfer Certificate (TC) Caution & Timing',
      content: `⚠️ **CRITICAL WARNING FOR PARENTS:**
- Candidates and parents are strictly advised **NOT to apply for a Transfer Certificate (TC)** or withdraw from their current school until their documents have been physically verified and admission has been explicitly confirmed by the Principal of the concerned JNV.
- Once confirmed, the TC must be counter-signed by the District Education Officer (DEO) or Block Education Officer (BEO).`
    },
    {
      id: 42,
      title: '42. Medical Examination by Vidyalaya Doctor Rules',
      content: `Every newly admitted student must undergo a medical examination conducted by the Vidyalaya Doctor in addition to producing a medical fitness certificate from a registered practitioner.
- Students found suffering from infectious diseases or acute ailments that hinder community residential living will not be admitted.
- Special dietary and health provisions are maintained in JNV clinics for daily wellness.`
    },
    {
      id: 43,
      title: '43. Mandatory 10-Day Orientation Programme for Admitted Students',
      content: `To facilitate a smooth transition from day schools to a fully residential system, NVS conducts a mandatory **10-day Orientation Programme**:
- Bridges conceptual learning gaps between different State Boards and CBSE.
- Familiarizes students with daily hostel schedules, dining etiquette, sports routines, and housemaster systems.
- Fosters peer friendships and teamwork across diverse cultural backgrounds.`
    },
    {
      id: 44,
      title: '44. Migration Policy (30% Inter-State Student Exchange in JNVs)',
      content: `A unique cornerstone of the Navodaya Vidyalaya scheme is the **Migration Scheme**:
- In Class IX, 30% of students from a Vidyalaya in a Hindi-speaking State are transferred for one academic year to a partner Vidyalaya in a Non-Hindi speaking State, and vice-versa.
- While lateral entry happens in Class XI, students will live in a vibrant national environment enriched by migrated peers from different cultural regions of India.`
    },
    {
      id: 45,
      title: '45. Real-Life Eligibility & Merit Calculation Examples',
      content: `Here are illustrative examples designed to clarify complicated application rules:

<div class="space-y-3 my-4">
  <div class="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-950">
    <strong class="text-blue-800 font-bold block mb-1">Example A: Science Stream Merit Score Calculation</strong>
    Candidate Rahul obtained the following test scores:
    <ul class="list-disc list-inside mt-1 space-y-0.5">
      <li>Mental Ability: 18/20 (Passed &ge; 6)</li>
      <li>English: 14/20 (Passed &ge; 6)</li>
      <li>Science: 17/20 (Passed &ge; 6)</li>
      <li>Social Science: 12/20 (Passed &ge; 6)</li>
      <li>Mathematics: 16/20 (Passed &ge; 6)</li>
    </ul>
    <strong>Stream Merit for Science:</strong> Mental Ability (18) + Science (17) + Mathematics (16) = <strong>51 / 60 Marks</strong>. Since 51 &gt; 21 (General Boy cut-off), Rahul is eligible for provisional merit selection.
  </div>

  <div class="p-3.5 bg-purple-50 border border-purple-200 rounded-xl text-xs text-purple-950">
    <strong class="text-purple-800 font-bold block mb-1">Example B: Humanities Stream Highest Subject Rule</strong>
    Candidate Sunita scored:
    <ul class="list-disc list-inside mt-1 space-y-0.5">
      <li>Mental Ability: 16/20</li>
      <li>Social Science: 18/20</li>
      <li>English: 19/20, Science: 11/20, Mathematics: 08/20</li>
    </ul>
    <strong>Stream Merit for Humanities:</strong> Mental Ability (16) + Social Science (18) + Highest of remaining three (English: 19) = <strong>53 / 60 Marks</strong>.
  </div>

  <div class="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950">
    <strong class="text-amber-800 font-bold block mb-1">Example C: Disqualification Despite High Overall Score</strong>
    Candidate Manish scored: Mental Ability: 20, Science: 20, Mathematics: 20, Social Science: 18, but <strong>English: 05/20</strong>.
    Even though his aggregate is 83/100, Manish is <strong>disqualified</strong> because he failed to achieve the sectional cutoff of 06 marks in English.
  </div>
</div>`
    },
    {
      id: 46,
      title: '46. Code of Conduct, Hostel Rules & Disciplinary Norms',
      content: `JNVs maintain high residential discipline:
1. **Attendance &amp; Participation:** Regular attendance in morning physical training (PT), academic classes, remedial coaching, and evening sports is compulsory.
2. **Mobile Phones &amp; Gadgets:** Personal smartphones are strictly restricted; students use designated communication facilities to talk to parents on scheduled weekends.
3. **Zero Tolerance on Ragging:** Ragging or bullying in hostels is strictly penalized with immediate rustication.
4. **House System:** Students are grouped into houses (Aravalli, Nilgiri, Shivalik, Udaygiri) under dedicated House Masters for mentorship.`
    },
    {
      id: 47,
      title: '47. Frequently Asked Questions (FAQs) – NVS Class XI Admission 2027',
      content: `**Q1: What is the last date to apply for NVS Class 11 Admission 2027-28?**
The last date to submit the online application form is **30th September 2026 (Wednesday)**.

**Q2: When will the JNVST Class XI Lateral Entry Selection Test be held?**
The test will be conducted on **Saturday, 10th April 2027** from 11:00 AM to 01:30 PM.

**Q3: What is the age limit for Class XI admission in Navodaya?**
The candidate must be born between **1st June 2010 and 31st July 2012** (both days inclusive). This applies to all categories.

**Q4: Is there an application fee for NVS Class XI registration?**
No, registration is **100% Free of Cost** for all candidates on cbseitms.nic.in.

**Q5: Can students from private schools apply?**
Yes, any student studying Class X in a Government or Government recognized school (affiliated to CBSE, ICSE, or State Board) in the district is eligible.

**Q6: Can a student apply for multiple streams?**
Yes, a candidate can choose up to **two streams** and up to **three JNVs** for each stream.

**Q7: Is there any negative marking in the test?**
No, there is **no negative marking**. Each correct answer receives 1 mark.`
    },
    {
      id: 48,
      title: '48. Important Official Links & Direct Portals',
      content: `Aspirants and parents must access official links directly:

<div class="overflow-x-auto my-4">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
    <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
      <tr>
        <th class="p-3">Portal Resource</th>
        <th class="p-3">Official Link / URL</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-slate-800">
      <tr>
        <td class="p-3 font-semibold">Online Application Portal</td>
        <td class="p-3"><a href="https://cbseitms.nic.in/2026/nvsxi_11?AspxAutoDetectCookieSupport=1" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">cbseitms.nic.in Application Link</a></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Official Notification / Prospectus (PDF)</td>
        <td class="p-3"><a href="https://cbseitms.nic.in/2026/nvsxi_11/assets/pdf/FINAL_CLASS_XI_PROSPECTUS_2027.pdf" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">Download Prospectus PDF</a></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">NVS Admission Portal</td>
        <td class="p-3"><a href="https://cbseitms.rcil.gov.in/nvs/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">cbseitms.rcil.gov.in/nvs/</a></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Navodaya Vidyalaya Samiti Official HQ</td>
        <td class="p-3"><a href="https://www.navodaya.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">www.navodaya.gov.in</a></td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      id: 49,
      title: '49. Related School & University Admissions on RajDailyTools',
      content: `Explore other prominent entrance exams and admission portals:
- **Allahabad University Ph.D. Admission 2026–27** (959 Seats across 49 Departments) &rarr; <a href="./allahabad-university-phd-admission-2026.html" class="text-blue-600 underline font-semibold">View AU Ph.D. Admission</a>
- **Common University Entrance Test (CUET UG 2026)** for Central Universities &rarr; <a href="./admission.html" class="text-blue-600 underline font-semibold">View CUET UG</a>
- **UP Polytechnic Diploma Admission (JEECUP 2026)** &rarr; <a href="./admission.html" class="text-blue-600 underline font-semibold">View JEECUP Diploma</a>
- **Delhi ITI Craftsmen Training Scheme 2026** &rarr; <a href="./admission.html" class="text-blue-600 underline font-semibold">View Delhi ITI</a>`
    },
    {
      id: 50,
      title: '50. Official Disclaimer & Contact Helpdesk',
      content: `**Official Headquarters Contact:**
- **Navodaya Vidyalaya Samiti (HQ):** B-15, Institutional Area, Sector 62, Noida, Uttar Pradesh 201307
- **Official Website:** www.navodaya.gov.in
- **Email:** ithelpdesk.nvs@gmail.com

*Disclaimer: RajDailyTools provides this informational guide based strictly on the official Prospectus-cum-Notification released by Navodaya Vidyalaya Samiti. Applicants are advised to verify details and complete registrations exclusively through the official portal at cbseitms.nic.in.*`
    }
  ];
}

export const NVS_CLASS_11_2027_ADMISSION: AdmissionRecord = {
  id: 'nvs-class-11-admission-2027',
  slug: 'nvs-class-11-admission-2027',
  university: 'Navodaya Vidyalaya Samiti (Ministry of Education, Govt. of India)',
  course: 'NVS Class 11 Lateral Entry Admission 2027-28 (LEST 2027 across 665 JNVs)',
  category: 'School Education',
  education: ['10th'],
  state: 'All India',
  applicationStartDate: '2026-08-20',
  applicationLastDate: '2026-09-30',
  status: 'Open',
  eligibility:
    'Must be studying Class X in session 2026-27 in a Govt/Govt-recognized school of the district. Date of birth between 01-06-2010 and 31-07-2012.',
  officialLink: 'https://cbseitms.nic.in/2026/nvsxi_11?AspxAutoDetectCookieSupport=1',
  applyLink: 'https://cbseitms.nic.in/2026/nvsxi_11?AspxAutoDetectCookieSupport=1',
  officialNotification:
    'https://cbseitms.nic.in/2026/nvsxi_11/assets/pdf/FINAL_CLASS_XI_PROSPECTUS_2027.pdf',
  feeDetails: '₹0 / Free of Cost (All Categories)',
  description:
    'Navodaya Vidyalaya Samiti (NVS) invites online applications for Class XI Lateral Entry Selection Test (LEST 2027) across 665 Jawahar Navodaya Vidyalayas for session 2027-28.',
  entranceExamDate: '10 April 2027 (Saturday, 11:00 AM – 01:30 PM)',
  meritListDate: 'May / June 2027 (Not Released / To Be Updated)',
  counsellingDate: 'Not Released / To Be Updated',
  faq: [
    {
      q: 'What is the last date to apply for NVS Class 11 Admission 2027-28?',
      a: 'The last date to submit online applications is 30th September 2026 (Wednesday).'
    },
    {
      q: 'When is the NVS Class 11 Lateral Entry Selection Test scheduled?',
      a: 'The test will be conducted on Saturday, 10th April 2027 from 11:00 AM to 01:30 PM.'
    },
    {
      q: 'What is the prescribed date of birth for NVS Class 11 admission?',
      a: 'Candidate must be born between 1st June 2010 and 31st July 2012 (both days inclusive).'
    },
    {
      q: 'What is the application fee for NVS Class 11 LEST 2027?',
      a: 'Application is 100% Free of cost for all candidates.'
    },
    {
      q: 'Can students who passed Class X in 2025 or earlier apply?',
      a: 'No. Candidates who passed Class X prior to the 2026-27 academic session are strictly ineligible.'
    }
  ]
};

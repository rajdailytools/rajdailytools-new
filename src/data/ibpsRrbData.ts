import { ExamRecord, ExamInfoSection } from '../types/exam';

/**
 * 50-Section Official Information & Expandable Tables for IBPS RRB XV 2026
 * Strictly based on CRP RRBs XV Notification (CRP-RRBs-XV-notification.pdf)
 */
export function generateIbpsRrbXv50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. Recruitment Summary',
      content: `The Institute of Banking Personnel Selection (IBPS) has officially released the detailed advertisement for CRP RRBs XV (Common Recruitment Process for Regional Rural Banks – Phase 15). This national-level recruitment drive invites online applications for 13,706 indicative vacancies of Group "A" Officers (Scale-I, Scale-II & Scale-III) and Group "B" Office Assistants (Multipurpose) across participating Regional Rural Banks in India. Online registration is active from 01.09.2026 to 21.09.2026.`
    },
    {
      id: 2,
      title: '2. Conducting Organization',
      content: `Institute of Banking Personnel Selection (IBPS), an autonomous apex recruitment and psychometric testing body operating under the governance of Public Sector Banks, the Reserve Bank of India (RBI), Ministry of Finance, and NABARD. Official portal: https://www.ibps.in/`
    },
    {
      id: 3,
      title: '3. Official Examination Title',
      content: `Common Recruitment Process for Recruitment of Officers (Scale-I, II & III) and Office Assistants (Multipurpose) in Regional Rural Banks (CRP RRBs XV).`
    },
    {
      id: 4,
      title: '4. Advertisement Details & Notification PDF',
      content: `Official Advertisement CRP-RRBs-XV Notification published on 01 September 2026 by IBPS, Mumbai. The official comprehensive notification document (75+ pages) is available for direct download at https://www.ibps.in/wp-content/uploads/CRP-RRBs-XV-notification.pdf.`
    },
    {
      id: 5,
      title: '5. Total Indicative Vacancies',
      content: `<div class="space-y-3">
  <p>There are <strong>13,706 indicative vacancies</strong> announced across all participating Regional Rural Banks. Note: As explicitly specified in the official notification, these vacancies are <em>indicative</em> and may be revised/updated based on requisitions from participating banks.</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg overflow-hidden">
      <thead class="bg-blue-50 text-blue-900 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2.5 text-left">Post Name</th>
          <th class="p-2.5 text-left">Cadre / Scale</th>
          <th class="p-2.5 text-right">Indicative Vacancies</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr class="hover:bg-slate-50">
          <td class="p-2 font-semibold">Office Assistants (Multipurpose)</td>
          <td class="p-2">Group "B" Clerical</td>
          <td class="p-2 text-right font-bold text-blue-700">8,183</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-2 font-semibold">Officer Scale-I (Assistant Manager)</td>
          <td class="p-2">Group "A" Junior Management</td>
          <td class="p-2 text-right font-bold text-blue-700">4,256</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-2 font-semibold">Officer Scale-II (General Banking Officer - GBO)</td>
          <td class="p-2">Group "A" Middle Management Scale-II</td>
          <td class="p-2 text-right font-bold text-slate-800">666</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-2 font-semibold">Officer Scale-II (Information Technology Officer)</td>
          <td class="p-2">Group "A" Specialist Cadre</td>
          <td class="p-2 text-right font-bold text-slate-800">182</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-2 font-semibold">Officer Scale-II (Chartered Accountant)</td>
          <td class="p-2">Group "A" Specialist Cadre</td>
          <td class="p-2 text-right font-bold text-slate-800">81</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-2 font-semibold">Officer Scale-II (Law Officer)</td>
          <td class="p-2">Group "A" Specialist Cadre</td>
          <td class="p-2 text-right font-bold text-slate-800">46</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-2 font-semibold">Officer Scale-II (Treasury Manager)</td>
          <td class="p-2">Group "A" Specialist Cadre</td>
          <td class="p-2 text-right font-bold text-slate-800">18</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-2 font-semibold">Officer Scale-II (Marketing Officer)</td>
          <td class="p-2">Group "A" Specialist Cadre</td>
          <td class="p-2 text-right font-bold text-slate-800">16</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-2 font-semibold">Officer Scale-II (Agriculture Officer)</td>
          <td class="p-2">Group "A" Specialist Cadre</td>
          <td class="p-2 text-right font-bold text-slate-800">38</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-2 font-semibold">Officer Scale-III (Senior Manager)</td>
          <td class="p-2">Group "A" Senior Management</td>
          <td class="p-2 text-right font-bold text-slate-800">220</td>
        </tr>
        <tr class="bg-blue-100/60 font-black text-slate-900">
          <td class="p-2.5" colspan="2">Total Indicative Vacancies (CRP RRBs XV)</td>
          <td class="p-2.5 text-right font-black text-blue-900 text-sm">13,706 Posts</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 6,
      title: '6. Participating Regional Rural Banks (RRBs)',
      content: `<div class="space-y-3">
  <p>Candidates can apply for vacancies in any one participating RRB per post. Below is the list of 28 participating Regional Rural Banks (Table A) with Head Office locations and required local language proficiencies:</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg overflow-hidden">
      <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2 text-left">State / UT</th>
          <th class="p-2 text-left">RRB Name</th>
          <th class="p-2 text-left">Head Office</th>
          <th class="p-2 text-left">Prescribed Local Language</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr><td class="p-2">Andhra Pradesh</td><td class="p-2 font-medium">Andhra Pragathi Grameena Bank</td><td class="p-2">Kadapa</td><td class="p-2">Telugu</td></tr>
        <tr><td class="p-2">Andhra Pradesh</td><td class="p-2 font-medium">Chaitanya Godavari Grameena Bank</td><td class="p-2">Guntur</td><td class="p-2">Telugu</td></tr>
        <tr><td class="p-2">Andhra Pradesh</td><td class="p-2 font-medium">Saptagiri Grameena Bank</td><td class="p-2">Chittoor</td><td class="p-2">Telugu</td></tr>
        <tr><td class="p-2">Arunachal Pradesh</td><td class="p-2 font-medium">Arunachal Pradesh Rural Bank</td><td class="p-2">Pasighat</td><td class="p-2">English</td></tr>
        <tr><td class="p-2">Assam</td><td class="p-2 font-medium">Assam Gramin Vikash Bank</td><td class="p-2">Guwahati</td><td class="p-2">Assamese, Bengali, Bodo</td></tr>
        <tr><td class="p-2">Bihar</td><td class="p-2 font-medium">Dakshin Bihar Gramin Bank</td><td class="p-2">Patna</td><td class="p-2">Hindi</td></tr>
        <tr><td class="p-2">Bihar</td><td class="p-2 font-medium">Uttar Bihar Gramin Bank</td><td class="p-2">Muzaffarpur</td><td class="p-2">Hindi</td></tr>
        <tr><td class="p-2">Chhattisgarh</td><td class="p-2 font-medium">Chhattisgarh Rajya Gramin Bank</td><td class="p-2">Raipur</td><td class="p-2">Hindi</td></tr>
        <tr><td class="p-2">Gujarat</td><td class="p-2 font-medium">Baroda Gujarat Gramin Bank</td><td class="p-2">Vadodara</td><td class="p-2">Gujarati</td></tr>
        <tr><td class="p-2">Gujarat</td><td class="p-2 font-medium">Saurashtra Gramin Bank</td><td class="p-2">Rajkot</td><td class="p-2">Gujarati</td></tr>
        <tr><td class="p-2">Haryana</td><td class="p-2 font-medium">Sarva Haryana Gramin Bank</td><td class="p-2">Rohtak</td><td class="p-2">Hindi</td></tr>
        <tr><td class="p-2">Himachal Pradesh</td><td class="p-2 font-medium">Himachal Pradesh Gramin Bank</td><td class="p-2">Mandi</td><td class="p-2">Hindi</td></tr>
        <tr><td class="p-2">Jammu & Kashmir</td><td class="p-2 font-medium">Ellaquai Dehati Bank</td><td class="p-2">Srinagar</td><td class="p-2">Dogri, Kashmiri, Urdu</td></tr>
        <tr><td class="p-2">Jammu & Kashmir</td><td class="p-2 font-medium">J&K Grameen Bank</td><td class="p-2">Jammu</td><td class="p-2">Dogri, Kashmiri, Urdu</td></tr>
        <tr><td class="p-2">Jharkhand</td><td class="p-2 font-medium">Jharkhand Rajya Gramin Bank</td><td class="p-2">Ranchi</td><td class="p-2">Hindi</td></tr>
        <tr><td class="p-2">Karnataka</td><td class="p-2 font-medium">Karnataka Gramin Bank</td><td class="p-2">Ballari</td><td class="p-2">Kannada</td></tr>
        <tr><td class="p-2">Karnataka</td><td class="p-2 font-medium">Karnataka Vikas Grameena Bank</td><td class="p-2">Dharwad</td><td class="p-2">Kannada</td></tr>
        <tr><td class="p-2">Kerala</td><td class="p-2 font-medium">Kerala Gramin Bank</td><td class="p-2">Malappuram</td><td class="p-2">Malayalam</td></tr>
        <tr><td class="p-2">Madhya Pradesh</td><td class="p-2 font-medium">Madhya Pradesh Gramin Bank</td><td class="p-2">Indore</td><td class="p-2">Hindi</td></tr>
        <tr><td class="p-2">Madhya Pradesh</td><td class="p-2 font-medium">Madhyanchal Gramin Bank</td><td class="p-2">Sagar</td><td class="p-2">Hindi</td></tr>
        <tr><td class="p-2">Maharashtra</td><td class="p-2 font-medium">Maharashtra Gramin Bank</td><td class="p-2">Nanded</td><td class="p-2">Marathi</td></tr>
        <tr><td class="p-2">Maharashtra</td><td class="p-2 font-medium">Vidharbha Konkan Gramin Bank</td><td class="p-2">Nagpur</td><td class="p-2">Marathi</td></tr>
        <tr><td class="p-2">Manipur</td><td class="p-2 font-medium">Manipur Rural Bank</td><td class="p-2">Imphal</td><td class="p-2">Manipuri</td></tr>
        <tr><td class="p-2">Meghalaya</td><td class="p-2 font-medium">Meghalaya Rural Bank</td><td class="p-2">Shillong</td><td class="p-2">Khasi, Garo</td></tr>
        <tr><td class="p-2">Mizoram</td><td class="p-2 font-medium">Mizoram Rural Bank</td><td class="p-2">Aizawl</td><td class="p-2">Mizo</td></tr>
        <tr><td class="p-2">Nagaland</td><td class="p-2 font-medium">Nagaland Rural Bank</td><td class="p-2">Kohima</td><td class="p-2">English</td></tr>
        <tr><td class="p-2">Odisha</td><td class="p-2 font-medium">Odisha Gramya Bank</td><td class="p-2">Bhubaneswar</td><td class="p-2">Odia</td></tr>
        <tr><td class="p-2">Odisha</td><td class="p-2 font-medium">Utkal Grameen Bank</td><td class="p-2">Bolangir</td><td class="p-2">Odia</td></tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 7,
      title: '7. Official Important Dates Schedule',
      content: `<div class="space-y-3">
  <p>Official schedule published in IBPS CRP RRBs XV advertisement:</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg overflow-hidden">
      <thead class="bg-blue-50 text-blue-900 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2.5 text-left">Recruitment Activity / Milestone</th>
          <th class="p-2.5 text-left">Official Timeline</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr><td class="p-2 font-medium">Online Registration including Edit / Modification of Application</td><td class="p-2 font-bold text-blue-700">01.09.2026 to 21.09.2026</td></tr>
        <tr><td class="p-2 font-medium">Payment of Application Fees / Intimation Charges (Online)</td><td class="p-2 font-bold text-blue-700">01.09.2026 to 21.09.2026</td></tr>
        <tr><td class="p-2 font-medium">Online Application Edit Window</td><td class="p-2">2 days after closure of Registration (to be notified on IBPS website)</td></tr>
        <tr><td class="p-2 font-medium">Pre-Exam Training (PET) Conduct</td><td class="p-2">November, 2026</td></tr>
        <tr><td class="p-2 font-medium">Download of Call Letters for Online Exam – Preliminary</td><td class="p-2">November / December, 2026</td></tr>
        <tr><td class="p-2 font-medium">Online Examination – Preliminary (Officers / Office Assistants)</td><td class="p-2 font-bold text-emerald-700">November / December, 2026</td></tr>
        <tr><td class="p-2 font-medium">Declaration of Result of Online Exam – Preliminary</td><td class="p-2">December, 2026 / January, 2027</td></tr>
        <tr><td class="p-2 font-medium">Download of Call Letter for Online Exam – Main / Single</td><td class="p-2">December, 2026 / January, 2027</td></tr>
        <tr><td class="p-2 font-medium">Online Examination – Main / Single</td><td class="p-2 font-bold text-indigo-700">December, 2026 / February, 2027</td></tr>
        <tr><td class="p-2 font-medium">Declaration of Result – Main / Single (Officers Scale I, II, III)</td><td class="p-2">January, 2027</td></tr>
        <tr><td class="p-2 font-medium">Download of Call Letters for Interview (Officers Scale I, II, III)</td><td class="p-2">January, 2027</td></tr>
        <tr><td class="p-2 font-medium">Conduct of Interview (Officers Scale I, II, III)</td><td class="p-2 font-bold text-purple-700">January / February, 2027</td></tr>
        <tr><td class="p-2 font-medium">Provisional Allotment to Participating RRBs</td><td class="p-2 font-bold text-amber-700">February / March, 2027</td></tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 8,
      title: '8. Application Fee & Payment Details',
      content: `<div class="space-y-3">
  <p>Application fees and intimation charges (inclusive of GST) must be paid online between <strong>01.09.2026 and 21.09.2026</strong>. Bank transaction charges are borne by the candidate.</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg overflow-hidden">
      <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2 text-left">Post Group</th>
          <th class="p-2 text-left">Candidate Category</th>
          <th class="p-2 text-right">Fee Payable (GST Included)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr>
          <td class="p-2 font-semibold" rowspan="2">Officer (Scale I, II & III)</td>
          <td class="p-2">SC / ST / PwBD candidates</td>
          <td class="p-2 text-right font-bold text-blue-700">₹175/-</td>
        </tr>
        <tr>
          <td class="p-2">All other candidates (General / OBC / EWS)</td>
          <td class="p-2 text-right font-bold text-slate-900">₹850/-</td>
        </tr>
        <tr class="border-t border-slate-200">
          <td class="p-2 font-semibold" rowspan="2">Office Assistant (Multipurpose)</td>
          <td class="p-2">SC / ST / PwBD / ESM / DESM candidates</td>
          <td class="p-2 text-right font-bold text-blue-700">₹175/-</td>
        </tr>
        <tr>
          <td class="p-2">All other candidates (General / OBC / EWS)</td>
          <td class="p-2 text-right font-bold text-slate-900">₹850/-</td>
        </tr>
        <tr class="bg-amber-50">
          <td class="p-2 font-semibold">Application Edit Window</td>
          <td class="p-2">Uniform charge for modification during edit window</td>
          <td class="p-2 text-right font-bold text-amber-900">₹200/-</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="text-[11px] text-slate-500">Payment Modes: Master/Visa/RuPay Debit or Credit Cards, Internet Banking, IMPS, Cash Cards, Mobile Wallets, or UPI.</p>
</div>`
    },
    {
      id: 9,
      title: '9. Age Limit & Crucial Date (as on 01.09.2026)',
      content: `<div class="space-y-3">
  <p>The crucial reference date for calculating age is <strong>01.09.2026</strong>. Candidates must strictly fall within the prescribed age bracket for the respective post:</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg overflow-hidden">
      <thead class="bg-blue-50 text-blue-900 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2 text-left">Post Name</th>
          <th class="p-2 text-left">Prescribed Age Range</th>
          <th class="p-2 text-left">Permissible Birth Date Range (Both Dates Inclusive)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr>
          <td class="p-2 font-semibold">Office Assistant (Multipurpose)</td>
          <td class="p-2 font-bold text-slate-800">18 to 28 Years</td>
          <td class="p-2">Born between 02.09.1998 and 01.09.2008</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Officer Scale-I (Assistant Manager)</td>
          <td class="p-2 font-bold text-slate-800">Above 18 and Below 30 Years</td>
          <td class="p-2">Born between 02.09.1996 and 01.09.2008</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Officer Scale-II (Manager)</td>
          <td class="p-2 font-bold text-slate-800">Above 21 and Below 32 Years</td>
          <td class="p-2">Born between 02.09.1994 and 01.09.2005</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Officer Scale-III (Senior Manager)</td>
          <td class="p-2 font-bold text-slate-800">Above 21 and Below 40 Years</td>
          <td class="p-2">Born between 02.09.1986 and 01.09.2005</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 10,
      title: '10. Age Relaxation Guidelines',
      content: `<div class="space-y-3">
  <p>Upper age relaxation is admissible to eligible reserved categories as per Government of India statutory guidelines:</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg overflow-hidden">
      <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2 text-left">Category</th>
          <th class="p-2 text-left">Age Relaxation Admissible</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr><td class="p-2 font-medium">Scheduled Caste / Scheduled Tribe (SC / ST)</td><td class="p-2 font-bold text-blue-700">5 Years</td></tr>
        <tr><td class="p-2 font-medium">Other Backward Classes (OBC - Non-Creamy Layer)</td><td class="p-2 font-bold text-blue-700">3 Years</td></tr>
        <tr><td class="p-2 font-medium">Persons with Benchmark Disabilities (PwBD)</td><td class="p-2 font-bold text-blue-700">10 Years</td></tr>
        <tr><td class="p-2 font-medium">Ex-Servicemen / Disabled Ex-Servicemen (Office Assistant)</td><td class="p-2">Actual military service + 3 years (8 years for Disabled ESM SC/ST), max age 50 years</td></tr>
        <tr><td class="p-2 font-medium">Widows, Divorced women & legally separated (Office Assistant)</td><td class="p-2">Up to 35 years (UR/EWS), 38 years (OBC), 40 years (SC/ST)</td></tr>
        <tr><td class="p-2 font-medium">Ex-Servicemen Commissioned Officers (Scale I, II, III)</td><td class="p-2">5 years for ECOs / SSCOs who completed at least 5 years military service</td></tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 11,
      title: '11. Educational Qualifications & Experience (as on 21.09.2026)',
      content: `<div class="space-y-3">
  <p>All qualifications must be from a University / Institution recognized by Government of India / UGC / AICTE, with results declared on or before <strong>21.09.2026</strong>:</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg overflow-hidden">
      <thead class="bg-blue-50 text-blue-900 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2 text-left">Post</th>
          <th class="p-2 text-left">Essential Educational Qualification</th>
          <th class="p-2 text-left">Experience Required</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr>
          <td class="p-2 font-semibold">Office Assistant (Multipurpose)</td>
          <td class="p-2">Bachelor's degree in any discipline. Proficiency in local language as prescribed by the participating RRB. Desirable: Working knowledge of Computer.</td>
          <td class="p-2 font-bold text-emerald-700">Nil (No experience required)</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Officer Scale-I (Assistant Manager)</td>
          <td class="p-2">Bachelor's degree in any discipline. Preference given to degrees in Agriculture, Horticulture, Forestry, Animal Husbandry, Veterinary Science, Agricultural Engineering, Pisciculture, Agricultural Marketing, IT, Management, Law, Economics or Accountancy. Proficiency in local language. Desirable: Computer knowledge.</td>
          <td class="p-2 font-bold text-emerald-700">Nil (No experience required)</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Officer Scale-II General Banking Officer (GBO)</td>
          <td class="p-2">Bachelor's degree in any discipline with minimum 50% marks in aggregate. Preference for Banking, Finance, Marketing, Agriculture, etc.</td>
          <td class="p-2 font-bold text-amber-700">Two years as an officer in a Bank or Financial Institution</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Officer Scale-II IT Officer</td>
          <td class="p-2">Bachelor's degree in Electronics / Communication / Computer Science / IT with min 50% marks. Desirable: Certificate in ASP, PHP, C++, Java, VB, VC, OCP etc.</td>
          <td class="p-2 font-bold text-amber-700">One year in the relevant field</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Officer Scale-II Chartered Accountant</td>
          <td class="p-2">Certified Associate (CA) from Institute of Chartered Accountants of India (ICAI).</td>
          <td class="p-2 font-bold text-amber-700">One year as a Chartered Accountant</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Officer Scale-II Law Officer</td>
          <td class="p-2">Degree in Law from a recognized university with minimum 50% marks in aggregate.</td>
          <td class="p-2 font-bold text-amber-700">Two years as an advocate or Law Officer in Banks / Financial Institutions</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Officer Scale-II Treasury Manager</td>
          <td class="p-2">Chartered Accountant or MBA in Finance from recognized institution.</td>
          <td class="p-2 font-bold text-amber-700">One year in the relevant field</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Officer Scale-II Marketing Officer</td>
          <td class="p-2">MBA in Marketing from a recognized university.</td>
          <td class="p-2 font-bold text-amber-700">One year in the relevant field</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Officer Scale-II Agriculture Officer</td>
          <td class="p-2">Bachelor's degree in Agriculture / Horticulture / Dairy / Animal Husbandry / Forestry / Veterinary Science / Agri Engineering / Pisciculture with min 50% marks.</td>
          <td class="p-2 font-bold text-amber-700">Two years in the relevant field</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Officer Scale-III (Senior Manager)</td>
          <td class="p-2">Bachelor's degree in any discipline with minimum 50% marks in aggregate. Preference for Banking, Finance, Marketing, Agriculture, etc.</td>
          <td class="p-2 font-bold text-red-700">Minimum 5 years experience as an Officer in a Bank or Financial Institution</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 12,
      title: '12. Local Language Proficiency Requirement',
      content: `Candidates applying for Office Assistant (Multipurpose) and Officer Scale-I must possess proficiency in the official local language of the State / UT in which the participating Regional Rural Bank is located. Candidates who have studied the local language of the State in standard 8th or higher will be considered proficient. Those who do not have such a certificate will be given 6 months from the date of joining to acquire local language proficiency during the probation period.`
    },
    {
      id: 13,
      title: '13. Nationality & Citizenship Criteria',
      content: `A candidate must be either: (i) a Citizen of India, (ii) a subject of Nepal, (iii) a subject of Bhutan, (iv) a Tibetan refugee who came to India before 01.01.1962 with the intention of permanently settling in India, or (v) a person of Indian origin who has migrated from Pakistan, Burma, Sri Lanka, or East African countries with the intention of permanently settling in India, provided they possess an eligibility certificate issued by the Government of India.`
    },
    {
      id: 14,
      title: '14. Credit History (CIBIL Status)',
      content: `Candidates applying for Officers and Office Assistants must ensure a healthy credit history. A minimum CIBIL score of 650 or above at the time of joining is generally required as per participating bank norms. Candidates without a prior credit history will not be disqualified on this ground.`
    },
    {
      id: 15,
      title: '15. How to Apply Online (Step-by-Step)',
      content: `<div class="space-y-2">
  <p>Online registration is conducted exclusively through IBPS portal links:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li><strong>For Office Assistant:</strong> https://ibpsreg.ibps.in/rrboaxvaug26/</li>
    <li><strong>For Officers Scale I, II & III:</strong> https://ibpsreg.ibps.in/rrbxvaug26/</li>
  </ul>
  <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 mt-2 space-y-1 text-xs">
    <p><strong>Step 1:</strong> Click "Click here for New Registration" and enter Name, Mobile Number, Email ID.</p>
    <p><strong>Step 2:</strong> Note down the provisional Registration Number and Password generated via SMS & Email.</p>
    <p><strong>Step 3:</strong> Fill basic, personal, educational, category, and RRB state preferences.</p>
    <p><strong>Step 4:</strong> Upload live capture photograph, scanned signature, Left Thumb Impression (LTI), and handwritten declaration.</p>
    <p><strong>Step 5:</strong> Preview the application form and verify all spellings before final submission.</p>
    <p><strong>Step 6:</strong> Pay the online fee through Debit/Credit card, Net Banking, or UPI.</p>
    <p><strong>Step 7:</strong> Download and print the e-receipt and filled application form for future reference.</p>
  </div>
</div>`
    },
    {
      id: 16,
      title: '16. Required Documents for Registration',
      content: `Valid personal email ID & mobile number; 10th / Matriculation Certificate (DOB proof); Graduation Degree / Marksheets; Caste / Category Certificate (SC/ST/OBC-NCL/EWS/PwBD); Valid photo identity proof (Aadhaar Card, PAN Card, Passport, Voter ID, Driving License); Bank details for online payment.`
    },
    {
      id: 17,
      title: '17. Photo, Signature & Document Upload Specifications (Annexure III)',
      content: `<div class="space-y-3">
  <p>Candidates must strictly adhere to the technical specifications outlined in Annexure III of the CRP RRBs XV advertisement:</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg overflow-hidden">
      <thead class="bg-blue-50 text-blue-900 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2 text-left">Document</th>
          <th class="p-2 text-left">Dimensions</th>
          <th class="p-2 text-left">File Size</th>
          <th class="p-2 text-left">Format & Standards</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr>
          <td class="p-2 font-semibold">Photograph (Live Capture / Upload)</td>
          <td class="p-2">200 x 230 pixels (4.5 x 3.5 cm)</td>
          <td class="p-2 font-bold text-blue-700">20 KB to 50 KB</td>
          <td class="p-2">JPG/JPEG format. Light/white background. Live photo capture via webcam or mobile QR.</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Signature</td>
          <td class="p-2">140 x 60 pixels</td>
          <td class="p-2 font-bold text-blue-700">10 KB to 20 KB</td>
          <td class="p-2">Black ink pen on white paper. NOT in capital / block letters.</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Left Thumb Impression (LTI)</td>
          <td class="p-2">240 x 240 pixels (200 DPI, 3x3 cm)</td>
          <td class="p-2 font-bold text-blue-700">20 KB to 50 KB</td>
          <td class="p-2">Blue or Black ink on white paper.</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Handwritten Declaration</td>
          <td class="p-2">800 x 400 pixels (200 DPI, 10x5 cm)</td>
          <td class="p-2 font-bold text-blue-700">50 KB to 100 KB</td>
          <td class="p-2">English only. Black ink on white paper. NOT in capital letters.</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Certificates (Category / Scribe / UDID)</td>
          <td class="p-2">A4 Size Document</td>
          <td class="p-2 font-bold text-blue-700">Up to 500 KB</td>
          <td class="p-2">Clear PDF format.</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
    <p class="font-bold text-slate-900">Official Handwritten Declaration Text:</p>
    <p class="italic text-slate-700 bg-white p-2 rounded border border-slate-100">
      "I, _______ (Name of the candidate), hereby declare that all the information submitted by me in the application form is correct, true and valid. I will present the supporting documents as and when required."
    </p>
  </div>
</div>`
    },
    {
      id: 18,
      title: '18. Selection Process & Stages',
      content: `<div class="space-y-3">
  <p>The recruitment methodology varies by cadre:</p>
  <ul class="list-disc pl-5 space-y-2 text-xs">
    <li><strong>Office Assistant (Multipurpose):</strong> Stage 1: Preliminary Exam (Online CBT) -> Stage 2: Main Exam (Online CBT) -> Stage 3: Provisional Allotment. (No Interview; final selection is based 100% on Main Exam merit).</li>
    <li><strong>Officer Scale-I (Assistant Manager):</strong> Stage 1: Preliminary Exam (Online CBT) -> Stage 2: Main Exam (Online CBT) -> Stage 3: Common Interview (100 Marks) -> Stage 4: Provisional Allotment (Weightage: 80% Mains + 20% Interview).</li>
    <li><strong>Officer Scale-II (GBO & Specialist Cadres):</strong> Stage 1: Single Level Online Exam -> Stage 2: Common Interview (100 Marks) -> Stage 3: Provisional Allotment (Weightage: 80% Exam + 20% Interview).</li>
    <li><strong>Officer Scale-III (Senior Manager):</strong> Stage 1: Single Level Online Exam -> Stage 2: Common Interview (100 Marks) -> Stage 3: Provisional Allotment (Weightage: 80% Exam + 20% Interview).</li>
  </ul>
</div>`
    },
    {
      id: 19,
      title: '19. Preliminary Examination Pattern (Office Assistant & Officer Scale-I)',
      content: `<div class="space-y-3">
  <p>Prelims exam consists of objective tests with a composite duration of <strong>45 minutes</strong>:</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg overflow-hidden">
      <thead class="bg-blue-50 text-blue-900 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2 text-left">Cadre</th>
          <th class="p-2 text-left">Test Name / Subject</th>
          <th class="p-2 text-center">No. of Questions</th>
          <th class="p-2 text-center">Max Marks</th>
          <th class="p-2 text-right">Duration</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr>
          <td class="p-2 font-semibold" rowspan="2">Office Assistant (Multipurpose)</td>
          <td class="p-2">1. Reasoning</td>
          <td class="p-2 text-center">40</td>
          <td class="p-2 text-center">40</td>
          <td class="p-2 text-right font-bold text-blue-700" rowspan="2">45 Minutes (Composite)</td>
        </tr>
        <tr>
          <td class="p-2">2. Numerical Ability</td>
          <td class="p-2 text-center">40</td>
          <td class="p-2 text-center">40</td>
        </tr>
        <tr class="bg-slate-50 font-bold">
          <td class="p-2" colspan="2">Total for Office Assistant Prelims</td>
          <td class="p-2 text-center">80</td>
          <td class="p-2 text-center">80</td>
          <td class="p-2 text-right">45 Minutes</td>
        </tr>
        <tr class="border-t border-slate-200">
          <td class="p-2 font-semibold" rowspan="2">Officer Scale-I (Assistant Manager)</td>
          <td class="p-2">1. Reasoning</td>
          <td class="p-2 text-center">40</td>
          <td class="p-2 text-center">40</td>
          <td class="p-2 text-right font-bold text-blue-700" rowspan="2">45 Minutes (Composite)</td>
        </tr>
        <tr>
          <td class="p-2">2. Quantitative Aptitude</td>
          <td class="p-2 text-center">40</td>
          <td class="p-2 text-center">40</td>
        </tr>
        <tr class="bg-slate-50 font-bold">
          <td class="p-2" colspan="2">Total for Officer Scale-I Prelims</td>
          <td class="p-2 text-center">80</td>
          <td class="p-2 text-center">80</td>
          <td class="p-2 text-right">45 Minutes</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 20,
      title: '20. Main Examination Pattern (Office Assistant & Officer Scale-I)',
      content: `<div class="space-y-3">
  <p>The Main Examination is an objective online test with a composite time of <strong>2 Hours (120 minutes)</strong>:</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg overflow-hidden">
      <thead class="bg-blue-50 text-blue-900 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2 text-left">Subject / Section</th>
          <th class="p-2 text-center">Questions</th>
          <th class="p-2 text-center">Max Marks</th>
          <th class="p-2 text-right">Duration</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr><td class="p-2 font-medium">1. Reasoning</td><td class="p-2 text-center">40</td><td class="p-2 text-center font-bold">50</td><td class="p-2 text-right font-bold text-blue-700" rowspan="5">120 Minutes (Composite)</td></tr>
        <tr><td class="p-2 font-medium">2. Computer Knowledge</td><td class="p-2 text-center">40</td><td class="p-2 text-center font-bold">20</td></tr>
        <tr><td class="p-2 font-medium">3. General Awareness (Financial & Banking)</td><td class="p-2 text-center">40</td><td class="p-2 text-center font-bold">40</td></tr>
        <tr><td class="p-2 font-medium">4. English Language OR Hindi Language (Optional)</td><td class="p-2 text-center">40</td><td class="p-2 text-center font-bold">40</td></tr>
        <tr><td class="p-2 font-medium">5. Numerical Ability (OA) / Quantitative Aptitude (Scale-I)</td><td class="p-2 text-center">40</td><td class="p-2 text-center font-bold">50</td></tr>
        <tr class="bg-blue-100/60 font-black text-slate-900">
          <td class="p-2.5">Total for Main Exam</td>
          <td class="p-2.5 text-center font-black">200</td>
          <td class="p-2.5 text-center font-black">200</td>
          <td class="p-2.5 text-right font-black">2 Hours</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 21,
      title: '21. Single Level Examination Pattern (Officer Scale-II & Scale-III)',
      content: `<div class="space-y-3">
  <p>Officer Scale-II and Scale-III have a single level online exam followed by interview:</p>
  <ul class="list-disc pl-5 space-y-1 text-xs">
    <li><strong>Officer Scale-II (General Banking Officer) & Scale-III:</strong> 200 Questions, 200 Marks, 120 minutes duration. Tests: Reasoning (40 Q, 50 M), Computer Knowledge (40 Q, 20 M), Financial Awareness (40 Q, 40 M), English or Hindi Language (40 Q, 40 M), Quantitative Aptitude & Data Interpretation (40 Q, 50 M).</li>
    <li><strong>Officer Scale-II (Specialist Cadre):</strong> 240 Questions, 200 Marks, 150 minutes duration. Tests: Professional Knowledge (40 Q, 40 M), Reasoning (40 Q, 40 M), Financial Awareness (40 Q, 40 M), English or Hindi (40 Q, 20 M), Computer Knowledge (40 Q, 20 M), Quantitative Aptitude & Data Interpretation (40 Q, 40 M).</li>
  </ul>
</div>`
    },
    {
      id: 22,
      title: '22. Negative Marking Scheme',
      content: `There will be penalty for wrong answers marked in the Objective Tests. For each question for which a wrong answer has been given by the candidate, <strong>one fourth or 0.25 of the marks</strong> assigned to that question will be deducted as penalty to arrive at corrected score. If a question is left blank (i.e. no answer is marked by the candidate), there will be no penalty for that question.`
    },
    {
      id: 23,
      title: '23. Medium of Examination & 13 Regional Languages',
      content: `<div class="space-y-3">
  <p>In accordance with Ministry of Finance guidelines, the Preliminary and Main/Single examinations are conducted in English, Hindi, and the specified regional language of the State:</p>
  <p class="text-xs">Medium of exam options per state: Andhra Pradesh (English, Hindi, Telugu); Assam (English, Hindi, Assamese, Bengali); Bihar (English, Hindi); Gujarat (English, Hindi, Gujarati); Jammu & Kashmir (English, Hindi, Urdu); Karnataka (English, Hindi, Kannada, Konkani); Kerala (English, Hindi, Malayalam); Maharashtra (English, Hindi, Marathi, Konkani); Odisha (English, Hindi, Odia); Punjab (English, Hindi, Punjabi); Tamil Nadu (English, Hindi, Tamil); Telangana (English, Hindi, Telugu, Urdu); West Bengal (English, Hindi, Bengali).</p>
</div>`
    },
    {
      id: 24,
      title: '24. Sectional & Overall Cut-Off Rules',
      content: `Each candidate will be required to obtain a minimum score in each test of Online Examination and also minimum total score to be considered for shortlisting for provisional allotment (Office Assistant) or interview (Officers Scale I, II and III). Cut-offs are decided based on the number of vacancies available.`
    },
    {
      id: 25,
      title: '25. Common Interview Details (Officers Scale I, II & III)',
      content: `<div class="space-y-3">
  <p>Candidates who have qualified in the Main Examination (Scale-I) or Single Online Examination (Scale-II and III) will be called for an Interview coordinated by the Nodal Regional Rural Bank with the help of NABARD and IBPS:</p>
  <ul class="list-disc pl-5 space-y-1 text-xs">
    <li><strong>Total Marks for Interview:</strong> 100 Marks.</li>
    <li><strong>Minimum Qualifying Marks in Interview:</strong> Not less than 40% (35% for SC/ST/OBC/PwBD candidates).</li>
    <li><strong>Weightage Ratio:</strong> 80:20 (80% from Main/Single Online Examination + 20% from Interview).</li>
    <li><strong>Office Assistant:</strong> No Interview. Selection is 100% based on Main examination marks.</li>
  </ul>
</div>`
    },
    {
      id: 26,
      title: '26. Pre-Exam Training (PET)',
      content: `Pre-Exam Training is arranged by participating RRBs in November 2026 for eligible candidates belonging to Scheduled Castes, Scheduled Tribes, Minority Communities, and Ex-Servicemen. Eligible candidates who opted for PET during online registration can download their PET call letters from the official IBPS website.`
    },
    {
      id: 27,
      title: '27. Salary Structure & Pay Scales',
      content: `<div class="space-y-3">
  <p>Salaries in Regional Rural Banks are governed by 12th Bipartite Settlement / Industry-wide bank wage pacts with Dearness Allowance (DA), House Rent Allowance (HRA), Special Allowance, and City Compensatory Allowance:</p>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg overflow-hidden">
      <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2 text-left">Post</th>
          <th class="p-2 text-left">Basic Pay Scale</th>
          <th class="p-2 text-right">Approx. Monthly In-Hand Salary</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr>
          <td class="p-2 font-semibold">Office Assistant (Multipurpose)</td>
          <td class="p-2">₹19,900 - ₹47,920</td>
          <td class="p-2 text-right font-bold text-blue-700">₹32,000 - ₹38,000</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Officer Scale-I (Assistant Manager)</td>
          <td class="p-2">₹36,000 - ₹63,840</td>
          <td class="p-2 text-right font-bold text-emerald-700">₹55,000 - ₹65,000</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Officer Scale-II (Manager)</td>
          <td class="p-2">₹48,170 - ₹69,810</td>
          <td class="p-2 text-right font-bold text-purple-700">₹75,000 - ₹88,000</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Officer Scale-III (Senior Manager)</td>
          <td class="p-2">₹63,840 - ₹78,230</td>
          <td class="p-2 text-right font-bold text-amber-700">₹95,000 - ₹1,15,000</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 28,
      title: '28. In-Hand Salary & Perks',
      content: `In addition to the basic pay, RRB employees receive Dearness Allowance (DA updated quarterly per AICPI), House Rent Allowance (HRA / Leased accommodation), Special Allowance, Conveyance Allowance, Medical Reimbursement, LTC/LFC, Pension under New Pension Scheme (NPS), and subsidized staff loans.`
    },
    {
      id: 29,
      title: '29. Job Profile & Duties',
      content: `Office Assistants handle cash deposits, passbook printing, account openings, customer transactions, and administrative desk work. Officer Scale-I manages branch credit appraisals, loan disbursements, agricultural finance, rural development schemes, and daily accounting. Scale-II & Scale-III handle branch management, risk monitoring, commercial lending, and zonal leadership.`
    },
    {
      id: 30,
      title: '30. Posting & Job Locations',
      content: `Selected candidates are appointed to branches and offices of the specific Regional Rural Bank they applied for within the respective State/UT. Transfer policy is within the geographical jurisdiction of that RRB.`
    },
    {
      id: 31,
      title: '31. Probation Period',
      content: `Office Assistants (Multipurpose) undergo a probation period of 1 year (or 6 months depending on RRB service regulations). Officers Scale I, II and III are placed on probation for a period of 2 years from the date of joining.`
    },
    {
      id: 32,
      title: '32. Career Growth & Promotion Hierarchy',
      content: `Structured promotion channel: Office Assistant -> Officer Scale-I (Assistant Manager) -> Officer Scale-II (Manager) -> Officer Scale-III (Senior Manager) -> Officer Scale-IV (Chief Manager) -> Officer Scale-V (Assistant General Manager) -> General Manager / Chairman.`
    },
    {
      id: 33,
      title: '33. Tie-Breaking Principle',
      content: `In cases where two or more candidates obtain equal score in the exam, candidate senior in age will be placed higher in the merit order.`
    },
    {
      id: 34,
      title: '34. Biometric & Iris Verification',
      content: `IBPS conducts biometric verification (thumb impression) and iris scan at the exam venue and interview venue. Any candidate refusing biometric capture or with non-matching verification will be disqualified.`
    },
    {
      id: 35,
      title: '35. Scribe Guidelines for PwBD Candidates',
      content: `Candidates with disability of 40% or more who are physically impaired in typing or writing can avail the service of a scribe as per Government of India guidelines. Compensatory time of 20 minutes per hour of examination is granted.`
    },
    {
      id: 36,
      title: '36. Admit Card / Call Letter Details',
      content: `Admit cards for Preliminary examination will be available for download in November / December 2026. Hard copies will NOT be sent by post. Candidates must download from https://www.ibps.in/ using Registration Number and Date of Birth.`
    },
    {
      id: 37,
      title: '37. Exam Day Instructions & Banned Items',
      content: `Candidates must carry the printed Call Letter with recent photograph affixed, valid original Photo ID proof along with a photocopy, and a ballpoint pen. Prohibited items: mobile phones, Bluetooth devices, smartwatches, calculators, bags, and metallic ornaments.`
    },
    {
      id: 38,
      title: '38. Normalization of Scores',
      content: `Because the examination is conducted in multi-shift sessions, scores across sessions will be normalized using the Equi-Percentile method to ensure fair merit listing across varying difficulty levels.`
    },
    {
      id: 39,
      title: '39. Answer Key & Objection Window',
      content: `Status: Not Released / To Be Updated. (IBPS releases candidate response summaries and final scores upon completion of the examination cycle).`
    },
    {
      id: 40,
      title: '40. Cut-Off Marks Status',
      content: `Status: Not Released / To Be Updated. (Official cut-off marks for CRP RRBs XV will be declared along with Preliminary and Main exam scorecards in December 2026 / January 2027).`
    },
    {
      id: 41,
      title: '41. Result Publication Timeline',
      content: `Status: Not Released / To Be Updated. (Prelims results expected in December 2026 / January 2027; Mains results in January 2027; Provisional Allotment in February / March 2027).`
    },
    {
      id: 42,
      title: '42. Provisional Allotment Process',
      content: `Provisional allotment to participating RRBs is made on the basis of candidate merit-cum-preference ranking, vacancy availability in the preferred RRB, and qualifying status in identity verification.`
    },
    {
      id: 43,
      title: '43. Document Verification (DV) Checklist',
      content: `Original and self-attested photocopies of: 10th / Matriculation Certificate, Degree Marksheets & Provisional/Original Degree Certificate, Caste Certificate (SC/ST/OBC-NCL/EWS), PwBD Certificate (if applicable), Discharge Certificate for Ex-Servicemen, Photo ID proof, and Printout of Online Application Form.`
    },
    {
      id: 44,
      title: '44. Pre-Appointment Medical Examination',
      content: `Candidates recommended for provisional allotment must undergo a medical fitness examination prescribed by the respective Regional Rural Bank before the formal appointment order is issued.`
    },
    {
      id: 45,
      title: '45. Recommended Preparation Books',
      content: `Quantitative Aptitude for Competitive Examinations (R.S. Aggarwal), A Modern Approach to Verbal & Non-Verbal Reasoning (R.S. Aggarwal), Banking Awareness (Arihant / Disha), Objective General English (S.P. Bakshi), Lucent's Computer Knowledge, and standard monthly banking current affairs digests.`
    },
    {
      id: 46,
      title: '46. Mock Test & Practice Resources',
      content: `Candidates are advised to take full-length 45-minute timed sectional mock tests for Prelims and 120-minute simulated tests for Mains with negative marking enabled on RajDailyTools.`
    },
    {
      id: 47,
      title: '47. Official Helpline & Contact Details',
      content: `IBPS Candidate Helpdesk: Candidate grievance portal available at http://cgrs.ibps.in/ | Official Postal Address: IBPS House, 90 Feet, D.P. Road, Near Thakur Polytechnic, Off. Western Express Highway, P.B. No. 8587, Kandivali (East), Mumbai - 400 101.`
    },
    {
      id: 48,
      title: '48. Official Important Links Directory',
      content: `<div class="space-y-3">
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs border border-slate-200 rounded-lg overflow-hidden">
      <thead class="bg-blue-50 text-blue-900 font-bold border-b border-slate-200">
        <tr>
          <th class="p-2 text-left">Official Resource</th>
          <th class="p-2 text-left">Direct Verified Link</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr>
          <td class="p-2 font-semibold">Apply Online – Office Assistant (Multipurpose)</td>
          <td class="p-2"><a href="https://ibpsreg.ibps.in/rrboaxvaug26/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold underline">https://ibpsreg.ibps.in/rrboaxvaug26/</a></td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Apply Online – Officers (Scale I, II & III)</td>
          <td class="p-2"><a href="https://ibpsreg.ibps.in/rrbxvaug26/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold underline">https://ibpsreg.ibps.in/rrbxvaug26/</a></td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Official Detailed Notification PDF (CRP RRBs XV)</td>
          <td class="p-2"><a href="https://www.ibps.in/wp-content/uploads/CRP-RRBs-XV-notification.pdf" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold underline">Download Official Notice PDF</a></td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Official IBPS Website</td>
          <td class="p-2"><a href="https://www.ibps.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold underline">https://www.ibps.in/</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`
    },
    {
      id: 49,
      title: '49. Important Notices & Corrigenda',
      content: `Any corrigendum, addendum, or vacancy revision notice for CRP RRBs XV will be published exclusively on the IBPS website https://www.ibps.in/. Candidates are advised to check regularly.`
    },
    {
      id: 50,
      title: '50. Frequently Asked Questions (FAQ)',
      content: `<div class="space-y-3 text-xs">
  <div class="p-3 bg-slate-50 rounded-xl border border-slate-100">
    <p class="font-bold text-slate-900 mb-1">Q1. What is the application period for IBPS RRB XV 2026?</p>
    <p class="text-slate-600">Online registration and fee payment are active from 01.09.2026 to 21.09.2026.</p>
  </div>
  <div class="p-3 bg-slate-50 rounded-xl border border-slate-100">
    <p class="font-bold text-slate-900 mb-1">Q2. Can a candidate apply for both Office Assistant and Officer posts?</p>
    <p class="text-slate-600">Yes! A candidate can apply for the post of Office Assistant (Multipurpose) and can also apply for ONE post of Officer (either Scale-I, Scale-II, or Scale-III). Separate applications and fees are required for each.</p>
  </div>
  <div class="p-3 bg-slate-50 rounded-xl border border-slate-100">
    <p class="font-bold text-slate-900 mb-1">Q3. Is there an interview for Office Assistant (Multipurpose)?</p>
    <p class="text-slate-600">No. There is no interview for Office Assistant posts. Final selection is 100% based on merit in the Main Examination.</p>
  </div>
  <div class="p-3 bg-slate-50 rounded-xl border border-slate-100">
    <p class="font-bold text-slate-900 mb-1">Q4. What is the crucial date for educational qualification and age calculation?</p>
    <p class="text-slate-600">Age is calculated as on 01.09.2026. Educational qualifications must be acquired on or before 21.09.2026.</p>
  </div>
  <div class="p-3 bg-slate-50 rounded-xl border border-slate-100">
    <p class="font-bold text-slate-900 mb-1">Q5. What is the penalty for wrong answers?</p>
    <p class="text-slate-600">1/4th (0.25) of the marks assigned to that question will be deducted for every incorrect response in objective tests.</p>
  </div>
</div>`
    }
  ];
}

/**
 * Complete Master ExamRecord for IBPS RRB XV Recruitment 2026
 */
export const IBPS_RRB_XV_EXAM: ExamRecord = {
  id: 'ibps-rrb-xv-2026',
  slug: 'ibps-rrb-recruitment-2026',
  examName: 'IBPS RRB XV Recruitment 2026',
  organization: 'Institute of Banking Personnel Selection (IBPS)',
  category: 'Bank',
  postName: 'Office Assistants (Multipurpose) & Officers Scale-I, II, III',
  totalVacancy: '13,706 Posts (Indicative)',
  applicationStartDate: '2026-09-01',
  applicationLastDate: '2026-09-21',
  admitCardDate: '2026-11-20',
  examDate: '2026-11-28',
  answerKeyDate: '',
  resultDate: '',
  cutOffDate: '',
  status: 'APPLICATION_OPEN',
  education: ['Graduation'],
  ageMin: 18,
  ageMax: 40,
  ageRelaxationInfo: 'OBC: +3 Years, SC/ST: +5 Years, PwBD: +10 Years, ESM: up to 50 Years',
  categoryEligibility: {
    'Office Assistant': '18 to 28 years (born 02.09.1998 - 01.09.2008)',
    'Officer Scale-I': '18 to 30 years (born 02.09.1996 - 01.09.2008)',
    'Officer Scale-II': '21 to 32 years (born 02.09.1994 - 01.09.2005)',
    'Officer Scale-III': '21 to 40 years (born 02.09.1986 - 01.09.2005)'
  },
  gender: 'All',
  state: 'All India',
  officialWebsite: 'https://www.ibps.in/',
  officialNotification: 'https://www.ibps.in/wp-content/uploads/CRP-RRBs-XV-notification.pdf',
  applyLink: 'https://ibpsreg.ibps.in/rrboaxvaug26/',
  admitCardLink: '',
  answerKeyLink: '',
  resultLink: '',
  mockTestLink: '',
  logoIcon: '🏦',
  logoBg: '#eff6ff',
  description: 'Institute of Banking Personnel Selection (IBPS) has released the official notification for CRP RRBs XV for 13,706 indicative vacancies of Officers Scale-I, II, III and Office Assistants (Multipurpose) across 28 Regional Rural Banks. Online applications open 01 to 21 September 2026.',
  shortSummary: 'IBPS CRP RRBs XV Notification 2026 out for 13,706 indicative vacancies of Office Assistants and Officers Scale I, II & III in Regional Rural Banks.',
  importantDates: [
    { label: 'Official Notification Released', date: '01 September 2026' },
    { label: 'Online Application Started', date: '01 September 2026' },
    { label: 'Last Date to Apply Online', date: '21 September 2026', isHighlight: true },
    { label: 'Last Date for Online Fee Payment', date: '21 September 2026' },
    { label: 'Application Edit Window', date: '2 Days After Registration' },
    { label: 'Pre-Exam Training (PET)', date: 'November 2026' },
    { label: 'Prelims Online Examination', date: 'November / December 2026', isHighlight: true },
    { label: 'Declaration of Prelims Result', date: 'December 2026 / January 2027' },
    { label: 'Mains / Single Online Exam', date: 'December 2026 / February 2027', isHighlight: true },
    { label: 'Conduct of Interviews (Officers)', date: 'January / February 2027' },
    { label: 'Provisional Allotment', date: 'February / March 2027' }
  ],
  applicationFee: [
    { category: 'Officers (Scale I, II, III) - SC / ST / PwBD', amount: '₹175' },
    { category: 'Officers (Scale I, II, III) - All Others', amount: '₹850' },
    { category: 'Office Assistant - SC / ST / PwBD / ESM / DESM', amount: '₹175' },
    { category: 'Office Assistant - All Others', amount: '₹850' },
    { category: 'Application Edit Window Charge', amount: '₹200' }
  ],
  selectionProcess: [
    'Office Assistant: Preliminary CBT (80 Q, 80 Marks, 45 Min) -> Main CBT (200 Q, 200 Marks, 120 Min) -> Provisional Allotment',
    'Officer Scale-I: Preliminary CBT (80 Q, 80 Marks, 45 Min) -> Main CBT (200 Q, 200 Marks, 120 Min) -> Interview (100 Marks, 80:20 Weightage)',
    'Officer Scale-II (GBO & Specialist): Single Level CBT (200/240 Q, 200 Marks) -> Interview (100 Marks, 80:20 Weightage)',
    'Officer Scale-III: Single Level CBT (200 Q, 200 Marks) -> Interview (100 Marks, 80:20 Weightage)',
    'Document Verification & Pre-Appointment Medical Examination'
  ],
  examPattern: [
    {
      tier: 'Preliminary Exam (Office Assistant)',
      mode: 'Online (CBT)',
      duration: '45 Minutes (Composite)',
      negativeMarking: '0.25 (1/4th) marks deducted per wrong answer',
      subjects: [
        { name: 'Reasoning', questions: 40, marks: 40 },
        { name: 'Numerical Ability', questions: 40, marks: 40 }
      ]
    },
    {
      tier: 'Preliminary Exam (Officer Scale-I)',
      mode: 'Online (CBT)',
      duration: '45 Minutes (Composite)',
      negativeMarking: '0.25 (1/4th) marks deducted per wrong answer',
      subjects: [
        { name: 'Reasoning', questions: 40, marks: 40 },
        { name: 'Quantitative Aptitude', questions: 40, marks: 40 }
      ]
    },
    {
      tier: 'Main Exam (Office Assistant & Officer Scale-I)',
      mode: 'Online (CBT)',
      duration: '2 Hours (120 Minutes Composite)',
      negativeMarking: '0.25 (1/4th) marks deducted per wrong answer',
      subjects: [
        { name: 'Reasoning', questions: 40, marks: 50 },
        { name: 'Computer Knowledge', questions: 40, marks: 20 },
        { name: 'General Awareness', questions: 40, marks: 40 },
        { name: 'English Language OR Hindi Language', questions: 40, marks: 40 },
        { name: 'Numerical Ability (OA) / Quantitative Aptitude (Scale-I)', questions: 40, marks: 50 }
      ]
    }
  ],
  salary: {
    payScale: 'Office Assistant (₹19,900 - ₹47,920); Officer Scale-I (₹36,000 - ₹63,840); Scale-II (₹48,170 - ₹69,810); Scale-III (₹63,840 - ₹78,230)',
    inHand: '₹32,000 - ₹38,000 (Office Assistant) & ₹55,000 - ₹65,000 (Scale-I) & ₹75,000 - ₹1,15,000 (Scale-II/III)',
    allowances: 'DA, HRA, Special Allowance, Transport Allowance, Medical Benefits, NPS Pension & Leased Accommodation'
  },
  faq: [
    {
      q: 'What is the last date to apply online for IBPS RRB XV 2026?',
      a: 'The online registration window closes on 21 September 2026. The online fee payment deadline is also 21 September 2026.'
    },
    {
      q: 'How many total vacancies are announced for IBPS RRB 2026?',
      a: 'There are 13,706 indicative vacancies announced for Office Assistants (8,183) and Officers Scale-I (4,256), Scale-II (1,047), and Scale-III (220).'
    },
    {
      q: 'Can I apply for both Office Assistant and Officer Scale-I?',
      a: 'Yes, a candidate can apply for Office Assistant (Multipurpose) and also for ONE Officer post (Scale-I, II, or III). Separate fees and registrations are required.'
    },
    {
      q: 'Is there an interview for Office Assistant (Multipurpose)?',
      a: 'No, there is no interview for Office Assistant posts. Final selection is 100% based on merit in the Main online examination.'
    },
    {
      q: 'What is the age limit for IBPS RRB 2026 as on 01.09.2026?',
      a: 'Office Assistant: 18 to 28 years; Officer Scale-I: 18 to 30 years; Officer Scale-II: 21 to 32 years; Officer Scale-III: 21 to 40 years. Age relaxations apply for reserved categories.'
    },
    {
      q: 'What are the photo and signature upload requirements for IBPS RRB?',
      a: 'Photo: 200x230 pixels (20-50 KB) with white background + live capture. Signature: 140x60 pixels (10-20 KB) in black ink, not in capital letters. Left Thumb Impression: 20-50 KB. Declaration: 50-100 KB.'
    }
  ],
  allInformation: generateIbpsRrbXv50Sections()
};

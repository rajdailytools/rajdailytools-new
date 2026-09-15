import { ExamRecord, ExamInfoSection } from '../types/exam';

export function generateUpsc112026VariousPosts50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. Recruitment Overview',
      badge: 'Official Notification',
      content: `
        <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The <strong>Union Public Service Commission (UPSC)</strong> has officially published <strong>Advertisement No. 11/2026</strong> inviting Online Recruitment Applications (ORA) for direct recruitment by selection to <strong>212 Vacancies</strong> across 7 diverse Central Government and Union Territory posts.</p>
          <p>This multi-post recruitment drive encompasses specialized positions in the <strong>Ministry of Health & Family Welfare (CHS Teaching Specialist Sub-cadre)</strong>, <strong>Ministry of Mines (Indian Bureau of Mines)</strong>, <strong>New Delhi Municipal Council (NDMC)</strong>, <strong>Government of NCT of Delhi (Directorate of Prosecution)</strong>, and the <strong>Administration of Union Territory of Ladakh (Law and Justice Department)</strong>.</p>
          
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Recruitment Parameter</th><th class="p-2.5 border border-slate-200">Official Specification (Advt. 11/2026)</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">Recruitment Authority</td><td class="p-2.5">Union Public Service Commission (UPSC), Dholpur House, Shahjahan Road, New Delhi – 110069</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Advertisement Number</td><td class="p-2.5 font-mono font-bold text-blue-700">11/2026</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Total Vacancies</td><td class="p-2.5 font-bold text-emerald-700">212 Posts across 7 Posts / Vacancy Numbers</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Cadres / Services Included</td><td class="p-2.5">Central Health Services (CHS), IBM Mines, NDMC Medical, Delhi Prosecution Service, Ladakh Law Cadre</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Pay Scales</td><td class="p-2.5">Level-07, Level-08, Level-10, and Level-11 (7th CPC Matrix) + NPA where applicable</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Application Portal</td><td class="p-2.5"><a href="https://upsconline.nic.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline">upsconline.nic.in</a> (4-Module Online System)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Application Fee</td><td class="p-2.5">₹25/- for Gen/OBC/EWS Male candidates; Exempted (₹0) for Female, SC, ST & PwBD</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Selection Process</td><td class="p-2.5">Direct Recruitment by Selection (Shortlisting / Recruitment Test + Personality Test / Interview)</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Official Website</td><td class="p-2.5"><a href="https://www.upsc.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline">upsc.gov.in</a></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: '2. Latest Update & Application Bulletin',
      badge: 'Live Notice',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl">
            <span class="font-bold text-emerald-950 block text-sm">Online Application Window is Active</span>
            <p class="text-emerald-900 mt-1">UPSC commenced online applications for Advertisement No. 11/2026 on <strong>12 September 2026</strong>. Candidates must note the staggered closing dates: <strong>02 October 2026 (18:00 Hours)</strong> for Posts 1 through 6, and <strong>09 October 2026 (18:00 Hours)</strong> for Post 7 (UT Ladakh Public Law Officer).</p>
          </div>
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950">
            <strong>Crucial Reminder on URN & CAF:</strong> UPSC now uses a 4-module portal. Candidates must complete Account Creation, Universal Registration (generating a permanent URN), Common Application Form (CAF) with live photo capture and 3-signature upload, before completing the vacancy-specific application module.
          </div>
        </div>
      `
    },
    {
      id: 3,
      title: '3. Important Dates Timeline',
      badge: 'Official Timeline',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates must strictly adhere to the schedule announced in official Advt. 11/2026:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Stage / Event</th><th class="p-2.5 border border-slate-200">Scheduled Date / Time</th><th class="p-2.5 border border-slate-200">Remarks</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">Advt. 11/2026 Release Date</td><td class="p-2.5 font-medium">12 September 2026</td><td class="p-2.5 text-emerald-700 font-bold">Published</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Online Application Start Date</td><td class="p-2.5 font-bold text-blue-700">12 September 2026</td><td class="p-2.5 text-emerald-700 font-bold">Application Open</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Closing Date for Posts 1 to 6 (General Posts)</td><td class="p-2.5 font-bold text-red-600">02 October 2026, 18:00 Hrs (6:00 PM)</td><td class="p-2.5 text-amber-700 font-semibold">Strict Deadline</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Closing Date for Post 7 (UT Ladakh Law Officer)</td><td class="p-2.5 font-bold text-red-600">09 October 2026, 18:00 Hrs (6:00 PM)</td><td class="p-2.5 text-amber-700 font-semibold">Extended for Ladakh Domiciles</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Crucial Date for Determining Eligibility</td><td class="p-2.5 font-semibold text-slate-900">Respective Closing Date (02-10-2026 or 09-10-2026)</td><td class="p-2.5 text-slate-700">Age, Degree & Experience cutoff</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Recruitment Test (RT) Date (if held)</td><td class="p-2.5 text-slate-500">Not Released / To Be Updated</td><td class="p-2.5 text-slate-500">To be notified post-shortlisting</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Interview / Personality Test Dates</td><td class="p-2.5 text-slate-500">Not Released / To Be Updated</td><td class="p-2.5 text-slate-500">Individual summons via email</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Final Recommendation List</td><td class="p-2.5 text-slate-500">Not Released / To Be Updated</td><td class="p-2.5 text-slate-500">Published on upsc.gov.in</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 4,
      title: '4. Vacancy Summary (212 Posts)',
      badge: 'Vacancies',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>A total of <strong>212 vacancies</strong> have been notified under Advt. No. 11/2026 across 7 distinct posts in 5 central and UT administrative entities:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-3">
            <div class="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
              <span class="text-xs font-bold text-slate-400 block uppercase">Directorate of Prosecution (Delhi)</span>
              <span class="text-xl font-extrabold text-blue-700 block mt-1">140 Posts</span>
              <span class="text-xs text-slate-600">Assistant Public Prosecutor (Level-10)</span>
            </div>
            <div class="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
              <span class="text-xs font-bold text-slate-400 block uppercase">Health & Family Welfare (MoHFW)</span>
              <span class="text-xl font-extrabold text-emerald-700 block mt-1">64 Posts</span>
              <span class="text-xs text-slate-600">Asst. Prof. Anatomy (4) & Gen. Medicine (60)</span>
            </div>
            <div class="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
              <span class="text-xs font-bold text-slate-400 block uppercase">UT of Ladakh Administration</span>
              <span class="text-xl font-extrabold text-purple-700 block mt-1">4 Posts</span>
              <span class="text-xs text-slate-600">Public Law Officer / District Litigation Officer</span>
            </div>
            <div class="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
              <span class="text-xs font-bold text-slate-400 block uppercase">Ministry of Mines (IBM)</span>
              <span class="text-xl font-extrabold text-amber-700 block mt-1">2 Posts</span>
              <span class="text-xs text-slate-600">Assistant Editor (Level-7)</span>
            </div>
            <div class="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
              <span class="text-xs font-bold text-slate-400 block uppercase">New Delhi Municipal Council</span>
              <span class="text-xl font-extrabold text-teal-700 block mt-1">2 Posts</span>
              <span class="text-xs text-slate-600">Specialist Anaesthesia (1) & Pediatrics (1)</span>
            </div>
            <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-center">
              <span class="text-xs font-bold text-slate-500 uppercase">Grand Total Vacancies</span>
              <span class="text-2xl font-black text-slate-900 mt-0.5 font-display">212 Posts</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 5,
      title: '5. Post-Wise Vacancy & Department Breakdown',
      badge: 'All 7 Posts',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Here is the exhaustive post-wise breakdown of all 7 posts as detailed in Advt. No. 11/2026:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr>
                  <th class="p-2.5 border border-slate-200 text-center">Item</th>
                  <th class="p-2.5 border border-slate-200">Vacancy Number</th>
                  <th class="p-2.5 border border-slate-200">Post Designation</th>
                  <th class="p-2.5 border border-slate-200">Ministry / Department</th>
                  <th class="p-2.5 border border-slate-200 text-center">Pay Level</th>
                  <th class="p-2.5 border border-slate-200 text-center">Vacancies</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr>
                  <td class="p-2.5 text-center font-bold">1</td>
                  <td class="p-2.5 font-mono font-semibold text-blue-700">26091101112</td>
                  <td class="p-2.5 font-bold text-slate-900">Specialist Grade III Assistant Professor (Anatomy)</td>
                  <td class="p-2.5">Dept. of Health and Family Welfare, Ministry of Health & Family Welfare</td>
                  <td class="p-2.5 text-center font-semibold">Level-11 + NPA</td>
                  <td class="p-2.5 text-center font-bold text-emerald-700">04</td>
                </tr>
                <tr>
                  <td class="p-2.5 text-center font-bold">2</td>
                  <td class="p-2.5 font-mono font-semibold text-blue-700">26091102112</td>
                  <td class="p-2.5 font-bold text-slate-900">Specialist Grade III Assistant Professor (General Medicine)</td>
                  <td class="p-2.5">Dept. of Health and Family Welfare, Ministry of Health & Family Welfare</td>
                  <td class="p-2.5 text-center font-semibold">Level-11 + NPA</td>
                  <td class="p-2.5 text-center font-bold text-emerald-700">60</td>
                </tr>
                <tr>
                  <td class="p-2.5 text-center font-bold">3</td>
                  <td class="p-2.5 font-mono font-semibold text-blue-700">26091103412</td>
                  <td class="p-2.5 font-bold text-slate-900">Assistant Editor</td>
                  <td class="p-2.5">Indian Bureau of Mines, Ministry of Mines</td>
                  <td class="p-2.5 text-center font-semibold">Level-07</td>
                  <td class="p-2.5 text-center font-bold text-emerald-700">02</td>
                </tr>
                <tr>
                  <td class="p-2.5 text-center font-bold">4</td>
                  <td class="p-2.5 font-mono font-semibold text-blue-700">26091104512</td>
                  <td class="p-2.5 font-bold text-slate-900">Specialist Grade II (Junior Scale) – Anaesthesiology</td>
                  <td class="p-2.5">New Delhi Municipal Council (NDMC)</td>
                  <td class="p-2.5 text-center font-semibold">Level-11 + NPA</td>
                  <td class="p-2.5 text-center font-bold text-emerald-700">01</td>
                </tr>
                <tr>
                  <td class="p-2.5 text-center font-bold">5</td>
                  <td class="p-2.5 font-mono font-semibold text-blue-700">26091105512</td>
                  <td class="p-2.5 font-bold text-slate-900">Specialist Grade-II (Junior Scale) – Pediatrics</td>
                  <td class="p-2.5">New Delhi Municipal Council (NDMC)</td>
                  <td class="p-2.5 text-center font-semibold">Level-11 + NPA</td>
                  <td class="p-2.5 text-center font-bold text-emerald-700">01</td>
                </tr>
                <tr>
                  <td class="p-2.5 text-center font-bold">6</td>
                  <td class="p-2.5 font-mono font-semibold text-blue-700">26091106212</td>
                  <td class="p-2.5 font-bold text-slate-900">Assistant Public Prosecutor (APP)</td>
                  <td class="p-2.5">Directorate of Prosecution, Home Dept., Govt. of NCT of Delhi</td>
                  <td class="p-2.5 text-center font-semibold">Level-10</td>
                  <td class="p-2.5 text-center font-bold text-emerald-700">140</td>
                </tr>
                <tr>
                  <td class="p-2.5 text-center font-bold">7</td>
                  <td class="p-2.5 font-mono font-semibold text-blue-700">26091107212</td>
                  <td class="p-2.5 font-bold text-slate-900">Public Law Officer / District Litigation Officer / Law Officer</td>
                  <td class="p-2.5">Law and Justice Dept., Administration of UT of Ladakh</td>
                  <td class="p-2.5 text-center font-semibold">Level-08</td>
                  <td class="p-2.5 text-center font-bold text-emerald-700">04</td>
                </tr>
                <tr class="bg-slate-100 font-extrabold text-slate-900">
                  <td colspan="5" class="p-2.5 text-right uppercase">Total Vacancies across all posts:</td>
                  <td class="p-2.5 text-center text-blue-700 font-bold text-sm">212</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 6,
      title: '6. Category-Wise Reservation Matrix',
      badge: 'Quota Matrix',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official category-wise reservation distribution across all 7 notified posts (Advt. 11/2026):</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr>
                  <th class="p-2.5 border border-slate-200">Post Designation</th>
                  <th class="p-2.5 border border-slate-200 text-center">UR</th>
                  <th class="p-2.5 border border-slate-200 text-center">EWS</th>
                  <th class="p-2.5 border border-slate-200 text-center">OBC</th>
                  <th class="p-2.5 border border-slate-200 text-center">SC</th>
                  <th class="p-2.5 border border-slate-200 text-center">ST</th>
                  <th class="p-2.5 border border-slate-200 text-center">PwBD</th>
                  <th class="p-2.5 border border-slate-200 text-center">Total</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr>
                  <td class="p-2.5 font-semibold">1. Asst. Prof. (Anatomy)</td>
                  <td class="p-2.5 text-center">01</td>
                  <td class="p-2.5 text-center">01</td>
                  <td class="p-2.5 text-center">-</td>
                  <td class="p-2.5 text-center">02</td>
                  <td class="p-2.5 text-center">-</td>
                  <td class="p-2.5 text-center text-slate-500">Suitable</td>
                  <td class="p-2.5 text-center font-bold">04</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">2. Asst. Prof. (General Medicine)</td>
                  <td class="p-2.5 text-center">13</td>
                  <td class="p-2.5 text-center">10</td>
                  <td class="p-2.5 text-center">30</td>
                  <td class="p-2.5 text-center">05</td>
                  <td class="p-2.5 text-center">02</td>
                  <td class="p-2.5 text-center font-bold text-purple-700">03*</td>
                  <td class="p-2.5 text-center font-bold">60</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">3. Assistant Editor (IBM)</td>
                  <td class="p-2.5 text-center">01</td>
                  <td class="p-2.5 text-center">-</td>
                  <td class="p-2.5 text-center">-</td>
                  <td class="p-2.5 text-center">01</td>
                  <td class="p-2.5 text-center">-</td>
                  <td class="p-2.5 text-center font-bold text-purple-700">01*</td>
                  <td class="p-2.5 text-center font-bold">02</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">4. Specialist Anaesthesiology (NDMC)</td>
                  <td class="p-2.5 text-center">-</td>
                  <td class="p-2.5 text-center">-</td>
                  <td class="p-2.5 text-center">-</td>
                  <td class="p-2.5 text-center">-</td>
                  <td class="p-2.5 text-center">01</td>
                  <td class="p-2.5 text-center text-slate-500">Suitable</td>
                  <td class="p-2.5 text-center font-bold">01</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">5. Specialist Pediatrics (NDMC)</td>
                  <td class="p-2.5 text-center">-</td>
                  <td class="p-2.5 text-center">01</td>
                  <td class="p-2.5 text-center">-</td>
                  <td class="p-2.5 text-center">-</td>
                  <td class="p-2.5 text-center">-</td>
                  <td class="p-2.5 text-center text-slate-500">Suitable</td>
                  <td class="p-2.5 text-center font-bold">01</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">6. Assistant Public Prosecutor (Delhi)</td>
                  <td class="p-2.5 text-center">50</td>
                  <td class="p-2.5 text-center">14</td>
                  <td class="p-2.5 text-center">37</td>
                  <td class="p-2.5 text-center">30</td>
                  <td class="p-2.5 text-center">09</td>
                  <td class="p-2.5 text-center font-bold text-purple-700">08*</td>
                  <td class="p-2.5 text-center font-bold">140</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">7. Public Law Officer (UT Ladakh)</td>
                  <td class="p-2.5 text-center">-</td>
                  <td class="p-2.5 text-center">-</td>
                  <td class="p-2.5 text-center">-</td>
                  <td class="p-2.5 text-center">-</td>
                  <td class="p-2.5 text-center">04</td>
                  <td class="p-2.5 text-center font-bold text-purple-700">01*</td>
                  <td class="p-2.5 text-center font-bold">04</td>
                </tr>
                <tr class="bg-slate-100 font-extrabold text-slate-900">
                  <td class="p-2.5 uppercase">Combined Total:</td>
                  <td class="p-2.5 text-center">65</td>
                  <td class="p-2.5 text-center">26</td>
                  <td class="p-2.5 text-center">67</td>
                  <td class="p-2.5 text-center">39</td>
                  <td class="p-2.5 text-center">15</td>
                  <td class="p-2.5 text-center font-bold text-purple-700">13 (Res.)</td>
                  <td class="p-2.5 text-center text-blue-700 font-bold">212</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-500 italic">*Asterisk denotes horizontal reservation for PwBD candidates within the respective quotas (including backlog vacancies as notified).</p>
        </div>
      `
    },
    {
      id: 7,
      title: '7. PwBD Reservation & Suitability Details',
      badge: 'Divyangjan Info',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>UPSC has specified detailed benchmark disability suitability (40% & above) and reservations post-by-post:</p>
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>Specialist Gr. III Asst. Prof. (Anatomy):</strong> Not reserved, but suitable for HH, BL, BA, OL, OA, OLA, CP, LC, DW, AAV, SD, SI (without neurological dysfunction), and Multiple Disabilities.</li>
            <li><strong>Specialist Gr. III Asst. Prof. (General Medicine):</strong> <strong>3 Vacancies Reserved (Backlog)</strong> for Locomotor category (c) [BA, OL, OA, BLA, OLA, BLOA, CP, LC, DW, AAV, SD, SI]. Also suitable for Blind/Low Vision (B, LV).</li>
            <li><strong>Assistant Editor (IBM):</strong> <strong>1 Vacancy Reserved (Backlog)</strong> for Category (a) Blindness/Low Vision [B, LV]. Also suitable for D, HH, OL, OA, OLA, BL, BA, CP, LC, DW, AAV, SD, SI, ASD (Mild/Moderate), SLD, MI, MD.</li>
            <li><strong>Specialist Anaesthesiology & Pediatrics (NDMC):</strong> Not reserved, but identified suitable for BL, OL, OA, LC, DW, AAV, SLD, MD.</li>
            <li><strong>Assistant Public Prosecutor (Delhi):</strong> <strong>8 Vacancies Reserved</strong>: 02 in Cat (a) Blind/LV, 02 in Cat (b) Hard of Hearing (HH), 01 in Cat (c) Locomotor, and 03 in Cat (d) & (e) Multiple/SLD. Post suitable for HH with not less than 60% assistive device.</li>
            <li><strong>Public Law Officer (UT Ladakh):</strong> <strong>1 Vacancy Reserved</strong> for Cat (a) Blind/Low Vision [B, LV]. Also suitable for HH, BL, BA, OL, OA, BLA, OLA, BLOA, CP, LC, DW, AAV, SLD, MD.</li>
          </ul>
        </div>
      `
    },
    {
      id: 8,
      title: '8. Application Opening Details',
      badge: 'Registration Active',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Online applications for Advt. No. 11/2026 commenced on <strong>12 September 2026</strong> on the official UPSC Online recruitment portal (<strong><a href="https://upsconline.nic.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline">upsconline.nic.in</a></strong>).</p>
          <p>Candidates can apply 24/7 during the active window. The Commission strongly advises applying well before the last date to avoid server slowdowns or connectivity delays.</p>
        </div>
      `
    },
    {
      id: 9,
      title: '9. Post-Wise Closing Dates & Strict Deadlines',
      badge: 'Closing Schedule',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates must carefully observe the two separate closing deadlines published in Advt. 11/2026:</p>
          <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <div class="flex items-start justify-between border-b border-slate-200 pb-2">
              <div>
                <strong class="text-slate-900 block font-bold">Posts 1 to 6 (All General & Medical Posts)</strong>
                <span class="text-xs text-slate-500">Anatomy, General Medicine, Assistant Editor, Anaesthesiology, Pediatrics, APP Delhi</span>
              </div>
              <span class="px-2.5 py-1 bg-red-100 text-red-800 font-bold rounded text-xs shrink-0">02 Oct 2026, 18:00 Hrs</span>
            </div>
            <div class="flex items-start justify-between pt-1">
              <div>
                <strong class="text-slate-900 block font-bold">Post 7 (Public Law Officer – UT Ladakh)</strong>
                <span class="text-xs text-slate-500">Exclusively for Domiciles of Union Territory of Ladakh</span>
              </div>
              <span class="px-2.5 py-1 bg-purple-100 text-purple-800 font-bold rounded text-xs shrink-0">09 Oct 2026, 18:00 Hrs</span>
            </div>
          </div>
          <p class="text-xs text-amber-800 font-medium">⚠️ Note: Applications submitted after 18:00 Hours on the respective closing dates will not be accepted. The portal automatically locks at exactly 18:00 Hrs.</p>
        </div>
      `
    },
    {
      id: 10,
      title: '10. Crucial Date for Determining Eligibility',
      badge: 'Cut-Off Date',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Clause 1(C) and Clause 13(c) of the instructions:</p>
          <p>The date for determining the eligibility of all candidates in every respect (Age, Educational Qualifications, Bar Practice Experience, Teaching Experience, and Category Claims) shall be the <strong>prescribed closing date for submission of Online Recruitment Application</strong>:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>For Posts 1 to 6: <strong>02 October 2026</strong></li>
            <li>For Post 7 (UT Ladakh): <strong>09 October 2026</strong></li>
          </ul>
          <p>Candidates must possess the requisite degree and minimum certified experience on or before this crucial date.</p>
        </div>
      `
    },
    {
      id: 11,
      title: '11. Recruitment Test (RT) & Interview Schedule',
      badge: 'Selection Stage',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The schedule for Recruitment Test (RT), Combined Recruitment Test (CRT), and Interviews is <strong>Not Released / To Be Updated</strong>.</p>
          <p>Where the number of applicants is manageable, UPSC conducts direct shortlisting and summons candidates for interview. If application volume is high, the Commission may conduct a computer-based or pen-paper Recruitment Test (RT) to shortlist candidates.</p>
        </div>
      `
    },
    {
      id: 12,
      title: '12. Admit Card / Interview Summon Status',
      badge: 'Hall Ticket',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Admit card / e-Summon letter status is <strong>Not Released / To Be Updated</strong>.</p>
          <p>Shortlisted candidates will receive interview summons via their registered email address and through notifications on the UPSC portal. If an RT is held, e-Admit Cards will be made available for download 2 to 3 weeks before the exam on upsc.gov.in.</p>
        </div>
      `
    },
    {
      id: 13,
      title: '13. Final Result & Merit List Publication',
      badge: 'Final List',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Result publication status is <strong>Not Released / To Be Updated</strong>.</p>
          <p>Final recommendations will be declared on upsc.gov.in and published in the Employment News following completion of interviews. The Commission does not enter into interim correspondence regarding non-selection.</p>
        </div>
      `
    },
    {
      id: 14,
      title: '14. Post 1: Specialist Gr. III Asst. Professor (Anatomy)',
      badge: 'Vac No. 26091101112',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <p><strong>Vacancy No.:</strong> 26091101112 | <strong>Posts:</strong> 04 (UR-01, EWS-01, SC-02)</p>
            <p><strong>Ministry / Dept.:</strong> Dept. of Health and Family Welfare, Ministry of Health & Family Welfare</p>
            <p><strong>Cadre & Classification:</strong> Central Health Services (CHS) Teaching Specialist Sub-cadre, Group “A”</p>
            <p><strong>Pay Scale:</strong> Level-11 plus NPA in the Pay Matrix as per 7th CPC</p>
            <p><strong>Upper Age Limit:</strong> 40 years for UR/EWS, 45 years for SC</p>
            <p><strong>Probation:</strong> 1 Year | <strong>Headquarters:</strong> Delhi with All India Service Liability</p>
          </div>
          <p><strong>Essential Qualifications:</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Educational:</strong> Post-Graduate degree in Anatomy mentioned in Section A of Schedule VI from recognized teaching institute: MS (Anatomy), MD (Anatomy), DNB (Anatomy), MBBS with MSc (Anatomy), MSc (Medical Anatomy) with PhD (Medical Anatomy), or MSc (Medical Anatomy) with DSc (Medical Anatomy).</li>
            <li><strong>Experience:</strong> At least 3 years teaching experience as Senior Resident or Tutor or Demonstrator or Registrar or Assistant Professor or Lecturer in Anatomy in a recognized teaching institution after obtaining the first PG degree. (D.M./M.Ch. duration counts towards teaching exp).</li>
          </ul>
          <p><strong>Duties:</strong> Impart theoretical and practical instructions to UG/PG medical students; conduct and guide research work in specialty; render patient care; other assigned duties.</p>
          <p class="text-xs text-slate-500">Condition: Private practice of any kind whatsoever is prohibited (NPA granted).</p>
        </div>
      `
    },
    {
      id: 15,
      title: '15. Post 2: Specialist Gr. III Asst. Professor (General Medicine)',
      badge: 'Vac No. 26091102112',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <p><strong>Vacancy No.:</strong> 26091102112 | <strong>Posts:</strong> 60 (UR-13, EWS-10, OBC-30, SC-05, ST-02) (PwBD-03* backlog)</p>
            <p><strong>Ministry / Dept.:</strong> Dept. of Health and Family Welfare, Ministry of Health & Family Welfare</p>
            <p><strong>Cadre & Classification:</strong> CHS Teaching Specialist Sub-cadre, Group “A”</p>
            <p><strong>Pay Scale:</strong> Level-11 plus NPA in the Pay Matrix as per 7th CPC</p>
            <p><strong>Upper Age Limit:</strong> 40 years for UR/EWS, 43 years for OBC, 45 years for SC/ST (relaxable up to 10 years for PwBD)</p>
            <p><strong>Probation:</strong> 1 Year | <strong>Headquarters:</strong> Delhi with All India Service Liability</p>
          </div>
          <p><strong>Essential Qualifications:</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Educational:</strong> Recognized MBBS degree (IMC Act 1956) + Post-Graduate degree in concerned specialty from recognized Teaching Institute: Doctor of Medicine (Medicine), Doctor of Medicine (General Medicine), or Diplomate National Board (Medicine / General Medicine).</li>
            <li><strong>Experience:</strong> At least 3 years teaching experience as Senior Resident, Tutor, Demonstrator, Registrar, Assistant Professor, or Lecturer in General Medicine in a recognized teaching institution after obtaining first PG degree. (Teaching experience as GDMO/Medical Officer shall NOT be counted).</li>
          </ul>
          <p><strong>Duties:</strong> Clinical care, research guidance, and teaching undergraduate and postgraduate medical students.</p>
          <p class="text-xs text-slate-500">Condition: Private practice of any kind strictly prohibited. Defence service liability for not less than 4 years if required.</p>
        </div>
      `
    },
    {
      id: 16,
      title: '16. Post 3: Assistant Editor (Indian Bureau of Mines)',
      badge: 'Vac No. 26091103412',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <p><strong>Vacancy No.:</strong> 26091103412 | <strong>Posts:</strong> 02 (UR-01, SC-01) (PwBD-01* reserved for Blind/LV backlog)</p>
            <p><strong>Ministry / Dept.:</strong> Indian Bureau of Mines, Ministry of Mines</p>
            <p><strong>Classification:</strong> General Central Service Group “B” Gazetted, Non-Ministerial</p>
            <p><strong>Pay Scale:</strong> Level-07 in the Pay Matrix as per 7th CPC (₹44,900 – ₹1,42,400)</p>
            <p><strong>Upper Age Limit:</strong> 30 years for UR, 35 years for SC (relaxable up to 10 years for PwBD)</p>
            <p><strong>Probation:</strong> 2 Years | <strong>Headquarters:</strong> Nagpur (Maharashtra) with All India Service Liability</p>
          </div>
          <p><strong>Essential Qualifications:</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Educational:</strong> Bachelor’s Degree in Journalism or Mass Communication from recognized University/Institute OR Bachelor’s degree with Economics, Statistics, or English as a subject + 1-year Diploma in Journalism or Mass Communication.</li>
            <li><strong>Experience:</strong> 3 years experience of editing and publishing works in book publishing field in a publishing house, Newspaper, News agency, publicity organisation, or Government organisation.</li>
          </ul>
          <p><strong>Desirable Qualifications:</strong> Master’s Degree in Mass Communication/Journalism/Economics/Statistics/English; Experience of working on publishing software (PageMaker, MS Office, CorelDraw, QuarkXPress, Photoshop).</p>
          <p><strong>Duties:</strong> Edit technical literature, coordinate with authors, draft content for newsletter, annual reports, social media, media house interaction, tendering for printing.</p>
        </div>
      `
    },
    {
      id: 17,
      title: '17. Post 4: Specialist Gr. II (Jr. Scale) – Anaesthesiology',
      badge: 'Vac No. 26091104512',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <p><strong>Vacancy No.:</strong> 26091104512 | <strong>Posts:</strong> 01 (ST-01)</p>
            <p><strong>Organisation:</strong> New Delhi Municipal Council (NDMC)</p>
            <p><strong>Classification:</strong> Group “A” Gazetted, Non-Ministerial</p>
            <p><strong>Pay Scale:</strong> Level-11 plus NPA in the Pay Matrix as per 7th CPC</p>
            <p><strong>Upper Age Limit:</strong> 50 years for ST (relaxable up to 10 years for PwBD)</p>
            <p><strong>Probation:</strong> 1 Year | <strong>Headquarters:</strong> New Delhi Municipal Council (Delhi)</p>
          </div>
          <p><strong>Essential Qualifications:</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Educational:</strong> Recognized MBBS degree (IMC Act 1956) + Post Graduate degree/diploma in Anaesthesiology: MD (Anesthesiology), MS (Anesthesiology), DA (2 years course), FFARCS (by exam), Specialty Board of Anesthesiology (USA), or PG Diploma in Anaesthesia (D.A.).</li>
            <li><strong>Experience:</strong> 3 years experience in the concerned specialty after obtaining the PG degree OR 5 years experience after obtaining the PG diploma.</li>
          </ul>
          <p><strong>Duties:</strong> Render patient care in anaesthesiology, conduct research, and duties assigned by authorities.</p>
          <p class="text-xs text-slate-500">Condition: Private practice of any kind is prohibited (NPA granted).</p>
        </div>
      `
    },
    {
      id: 18,
      title: '18. Post 5: Specialist Gr. II (Jr. Scale) – Pediatrics',
      badge: 'Vac No. 26091105512',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <p><strong>Vacancy No.:</strong> 26091105512 | <strong>Posts:</strong> 01 (EWS-01)</p>
            <p><strong>Organisation:</strong> New Delhi Municipal Council (NDMC)</p>
            <p><strong>Classification:</strong> General Central Service Group “A” Gazetted, Non-Ministerial</p>
            <p><strong>Pay Scale:</strong> Level-11 plus NPA in the Pay Matrix as per 7th CPC</p>
            <p><strong>Upper Age Limit:</strong> 45 years for EWS (relaxable up to 10 years for PwBD)</p>
            <p><strong>Probation:</strong> 1 Year | <strong>Headquarters:</strong> New Delhi Municipal Council (Delhi)</p>
          </div>
          <p><strong>Essential Qualifications:</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Educational:</strong> Recognized MBBS qualification + Post graduate degree/diploma in Pediatrics: MD (Paediatrics) or PG Diploma in Child Health (Diploma Paed. D.C.H.).</li>
            <li><strong>Experience:</strong> 3 years experience in Pediatrics after obtaining PG degree OR 5 years experience after obtaining PG diploma.</li>
          </ul>
          <p><strong>Duties:</strong> Pediatric patient care, research work, and administrative duties assigned by NDMC.</p>
          <p class="text-xs text-slate-500">Condition: Private practice of any kind strictly prohibited (NPA allowed).</p>
        </div>
      `
    },
    {
      id: 19,
      title: '19. Post 6: Assistant Public Prosecutor (Directorate of Prosecution, Delhi)',
      badge: 'Vac No. 26091106212',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <p><strong>Vacancy No.:</strong> 26091106212 | <strong>Posts:</strong> 140 (UR-50, EWS-14, OBC-37, SC-30, ST-09) (PwBD-08* reserved)</p>
            <p><strong>Department:</strong> Directorate of Prosecution, Home Department under Govt. of NCT of Delhi</p>
            <p><strong>Classification:</strong> General Central Service Group “A” Gazetted, Non-Ministerial</p>
            <p><strong>Pay Scale:</strong> Level-10 in the Pay Matrix as per 7th CPC (₹56,100 – ₹1,77,500)</p>
            <p><strong>Upper Age Limit:</strong> 35 years for UR/EWS, 38 years for OBC, 40 years for SC/ST (relaxable up to 10 years for PwBD)</p>
            <p><strong>Probation:</strong> 2 Years | <strong>Headquarters:</strong> National Capital Territory of Delhi</p>
            <p><strong>Mandatory Training:</strong> Induction training of at least 2 weeks duration for direct recruits.</p>
          </div>
          <p><strong>Essential Qualifications:</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Educational:</strong> Degree in Law from a recognized University / Institute.</li>
            <li><strong>Experience:</strong> Three years’ experience at the bar.</li>
          </ul>
          <p><strong>Desirable Qualification:</strong> Experience as government advocate.</p>
          <p><strong>Duties:</strong> Conduct criminal prosecutions in courts of Metropolitan Magistrates on behalf of Govt. of NCT of Delhi; teach law in police/prosecution institutions; tender legal advice to police in criminal investigations; maintain statistics of pending cases.</p>
        </div>
      `
    },
    {
      id: 20,
      title: '20. Post 7: Public Law Officer / District Litigation Officer (UT Ladakh)',
      badge: 'Vac No. 26091107212',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <p><strong>Vacancy No.:</strong> 26091107212 | <strong>Posts:</strong> 04 (ST-04) (PwBD-01* reserved for Blind/LV)</p>
            <p><strong>Department:</strong> Law and Justice Department under the Administration of UT of Ladakh</p>
            <p><strong>Classification:</strong> General Central Service Group “B” Gazetted, Non-Ministerial</p>
            <p><strong>Pay Scale:</strong> Level-08 in the Pay Matrix as per 7th CPC (₹47,600 – ₹1,51,100)</p>
            <p><strong>Upper Age Limit:</strong> 40 years for ST (relaxable up to 10 years for PwBD)</p>
            <p><strong>Probation:</strong> 2 Years | <strong>Mandatory Training:</strong> 2 weeks induction training</p>
            <p><strong>Headquarters:</strong> Union Territory of Ladakh (Leh / Kargil)</p>
            <p><strong>Special Closing Date:</strong> Extended up to <strong>09 October 2026, 18:00 Hrs</strong></p>
          </div>
          <p><strong>Essential Qualifications:</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Educational & Experience:</strong> A bachelor’s Degree in Law (Professional or integrated) from a university established by Law in India having <strong>two years actual practice at bar</strong> to be certified by the Principal District and Sessions Judge concerned or Registrar General of the High Court concerned or Supreme Court.</li>
          </ul>
          <p><strong>Mandatory Domicile Condition:</strong> Recruitment is exclusively for Domiciles of UT Ladakh (Holding Ladakh Resident Certificate - LRC, or eligible for LRC, or children of LRC holders), certified by the Tehsildar in UT Ladakh.</p>
          <p><strong>Duties:</strong> Legal opinions, vetting draft notifications/rules, DPC participation, drafting replies, and performing duties of District Litigation Officer of Leh and Kargil twin districts.</p>
        </div>
      `
    },
    {
      id: 21,
      title: '21. Upper Age Limit & Post-Wise Comparison',
      badge: 'Age Bounds',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>UPSC applies post-specific age ceilings rather than a common age limit. Here is the comparative table:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Post</th><th class="p-2.5 border border-slate-200 text-center">UR / EWS</th><th class="p-2.5 border border-slate-200 text-center">OBC</th><th class="p-2.5 border border-slate-200 text-center">SC</th><th class="p-2.5 border border-slate-200 text-center">ST</th><th class="p-2.5 border border-slate-200 text-center">PwBD Relax.</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold">1. Asst. Prof. (Anatomy)</td><td class="p-2.5 text-center font-bold">40 Yrs</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center font-bold">45 Yrs</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">+10 Yrs</td></tr>
                <tr><td class="p-2.5 font-semibold">2. Asst. Prof. (Gen. Medicine)</td><td class="p-2.5 text-center font-bold">40 Yrs</td><td class="p-2.5 text-center font-bold">43 Yrs</td><td class="p-2.5 text-center font-bold">45 Yrs</td><td class="p-2.5 text-center font-bold">45 Yrs</td><td class="p-2.5 text-center">+10 Yrs</td></tr>
                <tr><td class="p-2.5 font-semibold">3. Assistant Editor (IBM)</td><td class="p-2.5 text-center font-bold">30 Yrs</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center font-bold">35 Yrs</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">+10 Yrs</td></tr>
                <tr><td class="p-2.5 font-semibold">4. Specialist Anaesthesia (NDMC)</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center font-bold">50 Yrs</td><td class="p-2.5 text-center">+10 Yrs</td></tr>
                <tr><td class="p-2.5 font-semibold">5. Specialist Pediatrics (NDMC)</td><td class="p-2.5 text-center font-bold">45 Yrs (EWS)</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">+10 Yrs</td></tr>
                <tr><td class="p-2.5 font-semibold">6. Assistant Public Prosecutor (Delhi)</td><td class="p-2.5 text-center font-bold">35 Yrs</td><td class="p-2.5 text-center font-bold">38 Yrs</td><td class="p-2.5 text-center font-bold">40 Yrs</td><td class="p-2.5 text-center font-bold">40 Yrs</td><td class="p-2.5 text-center">+10 Yrs</td></tr>
                <tr><td class="p-2.5 font-semibold">7. Public Law Officer (UT Ladakh)</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center">-</td><td class="p-2.5 text-center font-bold">40 Yrs</td><td class="p-2.5 text-center">+10 Yrs</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 22,
      title: '22. Age Concessions & Relaxations',
      badge: 'Concessions',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 5 of the general instructions, upper age relaxations are admissible as follows:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>SC / ST Candidates:</strong> Up to 5 years relaxation in respect of vacancies reserved for them.</li>
            <li><strong>OBC Candidates:</strong> Up to 3 years relaxation in respect of vacancies reserved for them.</li>
            <li><strong>Persons with Benchmark Disabilities (PwBD):</strong> 10 years relaxation (cumulative: up to 15 years for SC/ST PwBD and 13 years for OBC PwBD), subject to maximum age of 56 years on closing date.</li>
            <li><strong>Ex-Servicemen & Commissioned Officers (ECOs/SSCOs):</strong> 5 years relaxation provided continuous military service rendered is not less than 6 months after attestation.</li>
            <li><strong>Central / UT Government Employees:</strong> Up to 5 years for General/EWS (up to 10 years for SC/ST, 8 years for OBC) with at least 3 years continuous regular service in the same or allied cadre.</li>
          </ul>
        </div>
      `
    },
    {
      id: 23,
      title: '23. Special Age Relaxation for Contractual Employees (APP Post)',
      badge: 'Delhi APP Rule',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Item No. 6 (Assistant Public Prosecutor in Govt. of NCT of Delhi), a special age relaxation policy is provided for contractual employees:</p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <p><strong>Quantum:</strong> One-time relaxation in upper age limit for a period up to <strong>5 years</strong>.</p>
            <p><strong>Service Condition:</strong> Equivalent to the number of years spent in the department on contract, provided the candidate has worked for <strong>at least 180 days</strong>.</p>
            <p><strong>Current Employment:</strong> Contractual employees working in the Directorate of Prosecution at the time of recruitment shall only be considered eligible.</p>
            <p><strong>Certificate:</strong> Candidate must obtain an "Age Relaxation Certificate" issued under the signature and seal of the Head of Department (HoD).</p>
            <p class="text-xs text-red-600 font-semibold">Note: Candidates who have already availed contractual relaxation earlier or whose services were terminated due to unsatisfactory work are ineligible.</p>
          </div>
        </div>
      `
    },
    {
      id: 24,
      title: '24. Educational Qualifications Summary Table',
      badge: 'Academic Criteria',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Educational requirements across the 7 posts strictly based on Advt. 11/2026:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Post</th><th class="p-2.5 border border-slate-200">Primary Educational Requirement</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">1. Asst. Prof. (Anatomy)</td><td class="p-2.5">Post-Graduate Degree in Anatomy (MS/MD/DNB/MSc with PhD/DSc) from recognized Teaching Institute.</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">2. Asst. Prof. (Gen. Medicine)</td><td class="p-2.5">MBBS Degree (IMC Act 1956) + MD (Medicine) / MD (General Medicine) / DNB (Medicine / General Medicine).</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">3. Assistant Editor (IBM)</td><td class="p-2.5">Bachelor’s in Journalism/Mass Comm OR Bachelor’s with Econ/Stats/English + 1-yr Diploma in Journalism/Mass Comm.</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">4. Specialist Anaesthesia (NDMC)</td><td class="p-2.5">MBBS Degree + PG Degree (MD/MS) or Diploma (DA) in Anaesthesiology.</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">5. Specialist Pediatrics (NDMC)</td><td class="p-2.5">MBBS Degree + PG Degree (MD Paediatrics) or Diploma (D.C.H.) in Pediatrics.</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">6. Assistant Public Prosecutor (Delhi)</td><td class="p-2.5 font-bold text-slate-900">Degree in Law (LL.B.) from a recognized University / Institute.</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">7. Public Law Officer (UT Ladakh)</td><td class="p-2.5 font-bold text-slate-900">Bachelor’s Degree in Law (Professional or integrated) from a university established by Law in India.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 25,
      title: '25. Teaching & Professional Experience Standards',
      badge: 'Experience Norms',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Post-wise certified experience requirements under Advt. No. 11/2026:</p>
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>Medical Teaching Posts (Anatomy & Gen. Medicine):</strong> At least <strong>3 years teaching experience</strong> as Senior Resident, Tutor, Demonstrator, Registrar, Assistant Professor, or Lecturer in the specialty in a recognized teaching institution after PG degree. GDMO service is not counted.</li>
            <li><strong>NDMC Specialist Posts (Anaesthesia & Pediatrics):</strong> <strong>3 years experience</strong> after PG Degree OR <strong>5 years experience</strong> after PG Diploma in the specialty.</li>
            <li><strong>Assistant Editor (IBM):</strong> <strong>3 years experience</strong> of editing and publishing works in book publishing field in publishing house, newspaper, news agency, publicity organisation, or Government organisation.</li>
            <li><strong>Assistant Public Prosecutor (Delhi):</strong> <strong>Three years’ experience at the bar</strong> as a practicing advocate.</li>
            <li><strong>Public Law Officer (UT Ladakh):</strong> <strong>Two years actual practice at bar</strong> certified by the Principal District & Sessions Judge concerned, Registrar General of High Court, or Supreme Court.</li>
          </ul>
          <p class="text-xs text-red-600 font-semibold">⚠️ Note: Experience rendered on part-time basis, daily wages, or visiting/guest faculty will NOT be counted for shortlisting.</p>
        </div>
      `
    },
    {
      id: 26,
      title: '26. Desirable Qualifications (DQ)',
      badge: 'Desirable Criteria',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Desirable qualifications specified in Advt. No. 11/2026:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Assistant Editor (Item 3):</strong> (i) Master’s Degree in Mass Communication, Journalism, Economics, Statistics, or English; (ii) Experience of working on publishing software: PageMaker, MS Office, CorelDraw, QuarkXPress, or Photoshop.</li>
            <li><strong>Assistant Public Prosecutor (Item 6):</strong> Experience as a Government Advocate.</li>
            <li><strong>Other Posts:</strong> No separate desirable qualification is notified.</li>
          </ul>
          <p class="text-xs text-blue-700">Crucial: UPSC may use Desirable Qualifications as a shortlisting filter to restrict the number of candidates called for interview when application numbers are high.</p>
        </div>
      `
    },
    {
      id: 27,
      title: '27. Duties & Official Responsibilities',
      badge: 'Job Description',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Key responsibilities assigned to the advertised positions:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Asst. Professors (Anatomy & Medicine):</strong> Medical instruction to UG/PG students, clinical patient care, specialty research, examinations, hospital ward management.</li>
            <li><strong>Assistant Editor:</strong> Editing technical geological/mining literature, newsletter drafting, annual reports, press interactions, web content publication, printing tenders.</li>
            <li><strong>NDMC Specialists:</strong> Clinical diagnosis, specialized surgical/pediatric patient care, research, hospital administration in NDMC facilities.</li>
            <li><strong>Assistant Public Prosecutor:</strong> Representing Govt. of NCT of Delhi in Metropolitan Magistrate courts, criminal trials, advice to police on charge sheets/investigations, case statistics.</li>
            <li><strong>Public Law Officer (Ladakh):</strong> Legal opinions, vetting draft rules and statutory notifications, DPC participation, drafting replies to ministries, District Litigation Officer duties in Leh and Kargil.</li>
          </ul>
        </div>
      `
    },
    {
      id: 28,
      title: '28. Pay Scales, Matrix Levels & NPA Rules',
      badge: 'Pay Matrix',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>All posts carry central pay matrix levels under the 7th Central Pay Commission (7th CPC):</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Post</th><th class="p-2.5 border border-slate-200 text-center">Pay Matrix Level</th><th class="p-2.5 border border-slate-200">Pay Scale Range</th><th class="p-2.5 border border-slate-200 text-center">NPA Admissible</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold">1. Asst. Prof. (Anatomy)</td><td class="p-2.5 text-center font-bold text-blue-700">Level-11</td><td class="p-2.5">₹67,700 – ₹2,08,700</td><td class="p-2.5 text-center font-bold text-emerald-700">Yes (+NPA)</td></tr>
                <tr><td class="p-2.5 font-semibold">2. Asst. Prof. (Gen. Medicine)</td><td class="p-2.5 text-center font-bold text-blue-700">Level-11</td><td class="p-2.5">₹67,700 – ₹2,08,700</td><td class="p-2.5 text-center font-bold text-emerald-700">Yes (+NPA)</td></tr>
                <tr><td class="p-2.5 font-semibold">3. Assistant Editor (IBM)</td><td class="p-2.5 text-center font-bold text-blue-700">Level-07</td><td class="p-2.5">₹44,900 – ₹1,42,400</td><td class="p-2.5 text-center text-slate-400">No</td></tr>
                <tr><td class="p-2.5 font-semibold">4. Specialist Anaesthesia (NDMC)</td><td class="p-2.5 text-center font-bold text-blue-700">Level-11</td><td class="p-2.5">₹67,700 – ₹2,08,700</td><td class="p-2.5 text-center font-bold text-emerald-700">Yes (+NPA)</td></tr>
                <tr><td class="p-2.5 font-semibold">5. Specialist Pediatrics (NDMC)</td><td class="p-2.5 text-center font-bold text-blue-700">Level-11</td><td class="p-2.5">₹67,700 – ₹2,08,700</td><td class="p-2.5 text-center font-bold text-emerald-700">Yes (+NPA)</td></tr>
                <tr><td class="p-2.5 font-semibold">6. Assistant Public Prosecutor (Delhi)</td><td class="p-2.5 text-center font-bold text-blue-700">Level-10</td><td class="p-2.5">₹56,100 – ₹1,77,500</td><td class="p-2.5 text-center text-slate-400">No</td></tr>
                <tr><td class="p-2.5 font-semibold">7. Public Law Officer (UT Ladakh)</td><td class="p-2.5 text-center font-bold text-blue-700">Level-08</td><td class="p-2.5">₹47,600 – ₹1,51,100</td><td class="p-2.5 text-center text-slate-400">No</td></tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-500">Non-Practicing Allowance (NPA) is admissible to medical posts at the prevailing Central Government rate (20% of Basic Pay, subject to basic + NPA not exceeding ₹2,37,500).</p>
        </div>
      `
    },
    {
      id: 29,
      title: '29. Estimated In-Hand Salary & Allowances',
      badge: 'Salary Estimates',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Approximate monthly gross and in-hand remuneration (location dependent, Delhi / Leh / Nagpur):</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span class="text-xs font-bold text-slate-500 uppercase">Level-11 Medical Specialists (with NPA)</span>
              <span class="text-base font-bold text-emerald-700 block">₹1,15,000 – ₹1,35,000 / month</span>
              <p class="text-xs text-slate-500">Basic ₹67,700 + 20% NPA + DA (53%) + HRA (30% Delhi) + Transport Allowance.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span class="text-xs font-bold text-slate-500 uppercase">Level-10 Assistant Public Prosecutor</span>
              <span class="text-base font-bold text-emerald-700 block">₹88,000 – ₹1,02,000 / month</span>
              <p class="text-xs text-slate-500">Basic ₹56,100 + DA + HRA (Delhi Class X) + TA + Govt. benefits.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span class="text-xs font-bold text-slate-500 uppercase">Level-08 Public Law Officer (Ladakh)</span>
              <span class="text-base font-bold text-emerald-700 block">₹72,000 – ₹85,000 / month</span>
              <p class="text-xs text-slate-500">Basic ₹47,600 + DA + Special Compensatory / Ladakh allowances.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span class="text-xs font-bold text-slate-500 uppercase">Level-07 Assistant Editor (Nagpur)</span>
              <span class="text-base font-bold text-emerald-700 block">₹65,000 – ₹76,000 / month</span>
              <p class="text-xs text-slate-500">Basic ₹44,900 + DA + HRA (Class Y) + TA + Central Govt health scheme.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 30,
      title: '30. Probation Period & Headquarters by Post',
      badge: 'Probation & HQ',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official probation tenure and headquarters allocation by post:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Post</th><th class="p-2.5 border border-slate-200 text-center">Probation Period</th><th class="p-2.5 border border-slate-200">Official Headquarters</th><th class="p-2.5 border border-slate-200">Service Liability</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold">1. Asst. Prof. (Anatomy)</td><td class="p-2.5 text-center font-bold">1 Year</td><td class="p-2.5">Delhi</td><td class="p-2.5 text-slate-600">Anywhere in India</td></tr>
                <tr><td class="p-2.5 font-semibold">2. Asst. Prof. (Gen. Medicine)</td><td class="p-2.5 text-center font-bold">1 Year</td><td class="p-2.5">Delhi</td><td class="p-2.5 text-slate-600">Anywhere in India</td></tr>
                <tr><td class="p-2.5 font-semibold">3. Assistant Editor (IBM)</td><td class="p-2.5 text-center font-bold">2 Years</td><td class="p-2.5">Nagpur (Maharashtra)</td><td class="p-2.5 text-slate-600">Anywhere in India</td></tr>
                <tr><td class="p-2.5 font-semibold">4. Specialist Anaesthesia (NDMC)</td><td class="p-2.5 text-center font-bold">1 Year</td><td class="p-2.5">NDMC (New Delhi)</td><td class="p-2.5 text-slate-600">NDMC jurisdiction</td></tr>
                <tr><td class="p-2.5 font-semibold">5. Specialist Pediatrics (NDMC)</td><td class="p-2.5 text-center font-bold">1 Year</td><td class="p-2.5">NDMC (New Delhi)</td><td class="p-2.5 text-slate-600">NDMC jurisdiction</td></tr>
                <tr><td class="p-2.5 font-semibold">6. Assistant Public Prosecutor (Delhi)</td><td class="p-2.5 text-center font-bold">2 Years</td><td class="p-2.5">NCT of Delhi</td><td class="p-2.5 text-slate-600">GNCTD Courts</td></tr>
                <tr><td class="p-2.5 font-semibold">7. Public Law Officer (Ladakh)</td><td class="p-2.5 text-center font-bold">2 Years</td><td class="p-2.5">UT of Ladakh</td><td class="p-2.5 text-slate-600">Leh and Kargil districts</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 31,
      title: '31. Service Conditions & Defence Liability Clause',
      badge: 'Service Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Key service conditions specified under Advt. No. 11/2026:</p>
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>Permanency:</strong> All vacancies are permanent. Recruits are appointed initially on temporary basis and confirmed permanent upon successful completion of probation.</li>
            <li><strong>Private Practice Prohibition:</strong> Appointees to medical specialist posts (Items 1, 2, 4, 5) are strictly barred from private practice of any kind (including consultation and laboratory practice).</li>
            <li><strong>Defence Service Liability:</strong> Appointees to CHS Teaching Specialist posts (Items 1 and 2) are liable to serve in any Defence service or post connected with the Defence of India for a period of not less than 4 years (including training), subject to not being required after 10 years from appointment or after attaining 45 years of age.</li>
            <li><strong>Pension Coverage:</strong> Governed by the National Pension System (NPS) w.e.f. 01.01.2004 as amended by Government of India.</li>
          </ul>
        </div>
      `
    },
    {
      id: 32,
      title: '32. Domicile & Reservation Rules for UT Ladakh (Post 7)',
      badge: 'Ladakh Domicile',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Item No. 7 (Public Law Officer / District Litigation Officer in UT of Ladakh):</p>
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl space-y-2">
            <strong class="text-amber-950 block font-bold">Mandatory Domicile Condition:</strong>
            <p class="text-amber-900">The recruitment is exclusively for Domiciles of the Union Territory of Ladakh under the Ladakh Civil Services Decentralization and Recruitment - Grant of Domicile Certificate (Procedure) Rules, 2025. Valid Domicile Certificate must be issued by the Tehsildar in the Administration of UT of Ladakh.</p>
            <div class="text-xs text-amber-950">
              <p>Eligible categories include:</p>
              <ul class="list-disc pl-5 space-y-0.5 mt-1">
                <li>Category A: Holding Ladakh Resident Certificate (L.R.C.) or eligible to be issued L.R.C.</li>
                <li>Category B: Children of L.R.C. holders or those eligible for holding L.R.C.</li>
              </ul>
            </div>
            <p class="text-xs text-amber-900">Governed by Jammu and Kashmir Reservation Act, 2004 as extended to UT of Ladakh and amended vide S.O. 77 dated 27.06.2025. Candidates eligible for multiple reserved categories must exercise option under one category only (Section 19).</p>
          </div>
        </div>
      `
    },
    {
      id: 33,
      title: '33. Citizenship & Nationality Criteria',
      badge: 'Citizenship',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 1(A) of the instructions, a candidate must be either:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>(a) A citizen of India, or</li>
            <li>(b) A subject of Nepal, or</li>
            <li>(c) A subject of Bhutan, or</li>
            <li>(d) A Tibetan refugee who came over to India before 1st January, 1962 with the intention of permanently settling in India, or</li>
            <li>(e) A person of Indian origin migrated from Pakistan, Burma, Sri Lanka, or East African countries with permanent settling intent (subject to Certificate of Eligibility from Government of India).</li>
          </ul>
        </div>
      `
    },
    {
      id: 34,
      title: '34. Application Fee Structure & Exemptions',
      badge: 'Fee Details',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Clause 4 of Advt. No. 11/2026:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Candidate Category</th><th class="p-2.5 border border-slate-200 text-center">Application Fee</th><th class="p-2.5 border border-slate-200">Payment Status</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">General / OBC / EWS Male Candidates</td><td class="p-2.5 text-center font-bold text-blue-700">₹25/- (Twenty Five)</td><td class="p-2.5 text-slate-700">Must pay online</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Female Candidates (All Communities)</td><td class="p-2.5 text-center font-bold text-emerald-700">NIL (₹0)</td><td class="p-2.5 text-emerald-700 font-bold">100% Exempted</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">SC / ST Candidates (Any Community)</td><td class="p-2.5 text-center font-bold text-emerald-700">NIL (₹0)</td><td class="p-2.5 text-emerald-700 font-bold">100% Exempted</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Persons with Benchmark Disability (PwBD)</td><td class="p-2.5 text-center font-bold text-emerald-700">NIL (₹0)</td><td class="p-2.5 text-emerald-700 font-bold">100% Exempted</td></tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-500">No "fee exemption" is available to OBC/EWS/Unreserved male candidates. Applications submitted without prescribed fee will be summarily rejected.</p>
        </div>
      `
    },
    {
      id: 35,
      title: '35. Fee Payment Modes & Non-Refundability',
      badge: 'Payment Rules',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Online payment can be made using Visa, Master, RuPay Credit/Debit Cards, UPI Payment, or Internet Banking of any bank.</p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <strong>Fee Non-Refundability Clause:</strong>
            <p class="text-slate-600">Fee once paid shall NOT be refunded under any circumstances nor can it be held in reserve for any other examination or selection. Candidates must complete payment before 18:00 Hrs on the closing date.</p>
          </div>
        </div>
      `
    },
    {
      id: 36,
      title: '36. UPSC 4-Module Online Application Architecture',
      badge: 'Portal Workflow',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The UPSC Online Application Portal (upsconline.nic.in) functions on a modern <strong>4-module / 4-card system</strong>:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
              <span class="text-xs font-bold text-blue-700 block">Module 1: Account Creation</span>
              <p class="text-xs text-slate-600 mt-1">Basic candidate signup, email validation, mobile OTP verification, and login credential setup.</p>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
              <span class="text-xs font-bold text-blue-700 block">Module 2: Universal Registration</span>
              <p class="text-xs text-slate-600 mt-1">Generates unique Universal Registration Number (URN). Common across all UPSC recruitment drives.</p>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
              <span class="text-xs font-bold text-blue-700 block">Module 3: Common Application Form (CAF)</span>
              <p class="text-xs text-slate-600 mt-1">Captures live webcam photo, 3-signature upload in black ink, photo ID details (Aadhaar recommended).</p>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
              <span class="text-xs font-bold text-blue-700 block">Module 4: Post / Vacancy Specific Module</span>
              <p class="text-xs text-slate-600 mt-1">Select advertised vacancy, claim post-specific experience/qualifications, upload documents, pay fee, and generate dynamic Application Number.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 37,
      title: '37. Universal Registration Number (URN) & Profile Locking',
      badge: 'URN Guide',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Important regulations regarding Universal Registration Number (URN):</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Permanent & Constant:</strong> Once registered, the URN remains unique and constant for all recruitments conducted by the Commission.</li>
            <li><strong>One-Time Edit Facility:</strong> UPSC provides a one-time facility to update or modify URN profile details.</li>
            <li><strong>Locking Mandate:</strong> Any changes made to the URN profile will NOT be reflected in applications already submitted. Updated details apply only to applications submitted after re-locking the URN profile.</li>
          </ul>
        </div>
      `
    },
    {
      id: 38,
      title: '38. Common Application Form (CAF) & Application Number',
      badge: 'Application ID',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>After completing the post-specific module and submitting the fee, a unique <strong>Application Number</strong> is generated.</p>
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950">
            <strong>Key Distinction:</strong> While the <strong>URN</strong> is universal and permanent, the <strong>Application Number</strong> is dynamic and specific to each individual post applied for. Candidates applying for multiple posts in Advt. 11/2026 will receive distinct Application Numbers for each vacancy. Both URN and Application Numbers must be retained for correspondence.
          </div>
        </div>
      `
    },
    {
      id: 39,
      title: '39. Live Photo Capture Guidelines',
      badge: 'Photo Rules',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Note 2 of the application instructions:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li>Applicants must upload their passport photograph and also <strong>capture a live photograph</strong> using a webcam/front camera while completing the CAF.</li>
            <li>Ensure clear lighting, neutral facial expression, plain background, and no spectacles/caps/masks obstructing the face.</li>
            <li>Both uploaded and live captured photos are matched algorithmically and cross-checked at the interview/exam hall through face authentication.</li>
          </ul>
        </div>
      `
    },
    {
      id: 40,
      title: '40. Signature Upload Specifications (3 Signatures in Black Ink)',
      badge: 'Signature Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Note 3 of the application instructions, UPSC mandates a specific signature protocol:</p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <strong class="text-slate-900 block font-bold">Official 3-Signature Requirement:</strong>
            <p class="text-slate-600">Applicants are required to <strong>sign three times (one below the other)</strong> on a plain white paper using a <strong>black ink pen</strong> and upload the scanned image while filling the Common Application Form (CAF).</p>
            <ul class="list-disc pl-5 text-xs text-slate-600 space-y-0.5">
              <li>Signatures must be clear, legible, and non-overlapping.</li>
              <li>Blue ink, pencil, or faint signatures are strictly rejected.</li>
              <li>Use RajDailyTools Signature Resizer tool for exact dimensional optimization.</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 41,
      title: '41. Document Upload Guidelines (PDF Only)',
      badge: 'Upload Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 2(iv), supporting documents must be uploaded in <strong>PDF format</strong> separately against each claim:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Matriculation / 10th Certificate as proof of Date of Birth.</li>
            <li>Degree / Diploma certificates along with mark sheets of all academic years.</li>
            <li>Equivalence order/letter from competent authority if claiming equivalent qualification.</li>
            <li>Experience Certificate(s) in prescribed proforma from Head of Organization.</li>
            <li>Caste / Community Certificate (SC/ST/OBC) in prescribed format + Non-Creamy Layer declaration.</li>
            <li>EWS Income & Asset Certificate / PwBD Certificate of Disability.</li>
            <li>Ladakh Domicile Certificate from Tehsildar (for Post 7).</li>
          </ul>
          <p class="text-xs text-red-600 font-semibold">❌ Strictly Prohibited: Documents like Pay Slips, Resumes, Appointment Letters, Relieving Letters, or Unsigned Experience Certificates must NOT be uploaded in the Document Module.</p>
        </div>
      `
    },
    {
      id: 42,
      title: '42. Experience Certificate Proforma & Verification',
      badge: 'Exp Proforma',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 2(iv)(d), experience certificates must be issued on official letterhead by the Head of Organization/Department, clearly indicating:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Exact duration of employment (From Date, Month, Year to To Date, Month, Year).</li>
            <li>Basic pay and consolidated pay drawn.</li>
            <li>Exact nature of duties performed and experience obtained.</li>
            <li>For Bar Practice (APP & Ladakh Law Officer): Certificate issued by Principal District & Sessions Judge, Registrar General of High Court, or Supreme Court.</li>
          </ul>
        </div>
      `
    },
    {
      id: 43,
      title: '43. Shortlisting Criteria (When Applications are Large)',
      badge: 'Scrutiny Norms',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Note-II to Clause 1(C), when application numbers are large, the Commission adopts one or more of the following official shortlisting methods:</p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <ul class="list-disc pl-5 space-y-1 text-slate-700">
              <li>(a) On the basis of Desirable Qualification (DQ) or any one or all DQs.</li>
              <li>(b) On the basis of higher educational qualifications than the minimum prescribed.</li>
              <li>(c) On the basis of higher experience in the relevant field than minimum prescribed.</li>
              <li>(d) By counting experience before or after acquisition of essential qualifications.</li>
              <li>(e) By invoking experience even in cases where no experience is mentioned in EQ/DQ.</li>
              <li>(f) <strong>By holding a Recruitment Test (RT) / Combined Recruitment Test (CRT).</strong></li>
            </ul>
          </div>
          <p class="text-xs text-blue-700 font-semibold">Candidates are therefore advised to disclose all qualifications and experience in their application over and above minimum qualifications.</p>
        </div>
      `
    },
    {
      id: 44,
      title: '44. Interview & Minimum Level of Suitability Marks',
      badge: 'Interview Marks',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Note-III to Clause 1(C), minimum qualifying suitability marks in interview (total 100 marks):</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Category</th><th class="p-2.5 border border-slate-200 text-center">Minimum Qualifying Marks (out of 100)</th><th class="p-2.5 border border-slate-200">Remarks</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2.5 font-semibold bg-slate-50">Unreserved (UR) / EWS</td><td class="p-2.5 text-center font-bold text-blue-700">50 Marks (50%)</td><td class="p-2.5">Mandatory cutoff in interview</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">Other Backward Classes (OBC)</td><td class="p-2.5 text-center font-bold text-blue-700">45 Marks (45%)</td><td class="p-2.5">Mandatory cutoff in interview</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50">SC / ST / PwBD (PH)</td><td class="p-2.5 text-center font-bold text-blue-700">40 Marks (40%)</td><td class="p-2.5">Mandatory cutoff in interview</td></tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-600">If selection is made through Recruitment Test followed by Interview, candidates must achieve minimum level of suitability in their respective category at both stages.</p>
        </div>
      `
    },
    {
      id: 45,
      title: '45. Recruitment Test (RT/CRT) Exam Centres',
      badge: 'Test Centres',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 6, if a Recruitment Test (RT) or Combined Recruitment Test (CRT) is held, tests are ordinarily conducted at:</p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <p><strong>Standard 15 Test Centres:</strong> Ahmedabad, Bhopal, Chennai, Delhi, Dispur (Guwahati), Jaipur, Jammu, Kochi, Kolkata, Lucknow, Mumbai, Nagpur, Port Blair, Ranchi, and Visakhapatnam.</p>
            <p><strong>For UT of Ladakh Posts (Item 7):</strong> Test centres will be <strong>Leh, Kargil, Srinagar, and Delhi</strong>.</p>
          </div>
        </div>
      `
    },
    {
      id: 46,
      title: '46. Travelling Allowance (TA) for Outstation Candidates',
      badge: 'TA under SR 132',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 13(e), outstation candidates summoned for interview at UPSC headquarters in New Delhi are granted travel contribution:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Restricted to Second / Sleeper Class train fare (Mail/Express) by shortest route.</li>
            <li>Candidates must bring duly filled 2 copies of TA bill forms + hard copies of journey tickets.</li>
            <li>Reimbursement is credited directly via NEFT (bring bank passbook copy or cancelled cheque).</li>
          </ul>
        </div>
      `
    },
    {
      id: 47,
      title: '47. Mandatory Face Authentication & Banned Items',
      badge: 'Exam Hall Norms',
      content: `
        <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Clause 11 & 12 of the instructions:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Mandatory Face Authentication:</strong> All candidates must undergo algorithmic face authentication at examination / interview venues.</li>
            <li><strong>Mobile Phones Strictly Banned:</strong> Use or possession of mobile phones (even in switched off mode), smartwatches, pen drives, Bluetooth devices is strictly prohibited and leads to immediate debarment.</li>
          </ul>
        </div>
      `
    },
    {
      id: 48,
      title: '48. Step-by-Step How to Apply on upsconline.nic.in',
      badge: 'Application Guide',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Follow these official steps to submit your application for Advt. No. 11/2026:</p>
          <ol class="list-decimal pl-5 space-y-1.5">
            <li>Visit <strong>upsconline.nic.in</strong> and access the Candidate Portal.</li>
            <li>Complete <strong>Module 1: Account Creation</strong> with basic details, email, and mobile OTP.</li>
            <li>Fill <strong>Module 2: Universal Registration</strong> and generate your unique permanent URN.</li>
            <li>Complete <strong>Module 3: Common Application Form (CAF)</strong> with live webcam photo, 3-signature upload in black ink, and Aadhaar ID details.</li>
            <li>Navigate to <strong>Module 4: Post/Vacancy Specific Module</strong> and select Advt. No. 11/2026.</li>
            <li>Choose your target post (Items 1 to 7) and enter specific educational and bar/teaching experience details.</li>
            <li>Upload supporting certificates (DOB, Degree, Experience, Caste, PwBD, Domicile) in PDF format.</li>
            <li>Pay ₹25/- fee online (if applicable; exempted categories skip this step).</li>
            <li>Submit the form, print out the final application, and note down your Application Number.</li>
          </ol>
        </div>
      `
    },
    {
      id: 49,
      title: '49. Official Important Links & Contact Directory',
      badge: 'Official Links',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-slate-200">
              <thead class="bg-slate-100 text-slate-800 font-bold">
                <tr><th class="p-2.5 border border-slate-200">Official Resource</th><th class="p-2.5 border border-slate-200">Description</th><th class="p-2.5 border border-slate-200 text-center">Direct Link</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr>
                  <td class="p-2.5 font-bold text-slate-900 bg-slate-50">Apply Online Portal</td>
                  <td class="p-2.5">UPSC Online Recruitment Application (ORA) Portal</td>
                  <td class="p-2.5 text-center"><a href="https://upsconline.nic.in" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 text-xs inline-block">Apply Online</a></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900 bg-slate-50">Official Notification</td>
                  <td class="p-2.5">Complete Advt. No. 11/2026 PDF (52 Pages)</td>
                  <td class="p-2.5 text-center"><a href="https://www.upsc.gov.in/" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-emerald-600 text-white rounded font-bold hover:bg-emerald-700 text-xs inline-block">View Notification</a></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900 bg-slate-50">Official Commission Website</td>
                  <td class="p-2.5">Union Public Service Commission Homepage</td>
                  <td class="p-2.5 text-center"><a href="https://www.upsc.gov.in/" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-slate-700 text-white rounded font-bold hover:bg-slate-800 text-xs inline-block">Visit UPSC</a></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900 bg-slate-50">Prescribed Proformas</td>
                  <td class="p-2.5">Caste, PwBD, Experience & Domicile Formats</td>
                  <td class="p-2.5 text-center"><a href="https://upsc.gov.in/recruitment/recruitment-performas" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-indigo-600 text-white rounded font-bold hover:bg-indigo-700 text-xs inline-block">Proformas</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 50,
      title: '50. Frequently Asked Questions (FAQ) & Helpdesk',
      badge: 'FAQ & Help',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <strong class="text-slate-900 block font-bold">Q1: Can fresh law graduates without experience apply for Assistant Public Prosecutor or Ladakh Law Officer?</strong>
            <p class="mt-1 text-slate-600">No. Assistant Public Prosecutor (Delhi) requires a minimum of 3 years experience at the bar, while Public Law Officer (Ladakh) requires 2 years actual practice at the bar certified by a competent judicial authority.</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <strong class="text-slate-900 block font-bold">Q2: What is the last date to apply?</strong>
            <p class="mt-1 text-slate-600">For Posts 1 to 6, the deadline is 02 October 2026 (18:00 Hrs). For Post 7 (UT Ladakh Public Law Officer), the deadline is 09 October 2026 (18:00 Hrs).</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <strong class="text-slate-900 block font-bold">Q3: What is the application fee?</strong>
            <p class="mt-1 text-slate-600">₹25/- for General, OBC, and EWS male candidates. Female, SC, ST, and PwBD candidates are 100% exempted from payment.</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <strong class="text-slate-900 block font-bold">Q4: Can candidates from other states apply for Post 7 (Public Law Officer Ladakh)?</strong>
            <p class="mt-1 text-slate-600">No. Post 7 is strictly restricted to valid Domiciles of Union Territory of Ladakh possessing a Domicile Certificate issued by the Tehsildar in UT Ladakh.</p>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <strong class="text-slate-900 block font-bold">Q5: What is the official UPSC Helpdesk contact?</strong>
            <p class="mt-1 text-slate-600">Helpline Phone: <strong>011-24041001</strong> / <strong>011-40303444</strong> | Email: <strong>upscsoap@nic.in</strong> (Available on all working days from 10:00 AM to 5:30 PM).</p>
          </div>
        </div>
      `
    }
  ];
}

export const UPSC_11_2026_VARIOUS_POSTS_EXAM: ExamRecord = {
  id: 'upsc-11-2026-various-posts-2026',
  slug: 'upsc-11-2026-various-posts-recruitment-2026',
  examName: 'UPSC 11/2026 Various Posts Recruitment 2026',
  organization: 'Union Public Service Commission (UPSC)',
  category: 'UPSC',
  postName: 'Various Posts (Assistant Public Prosecutor, Assistant Professor, Law Officer, Assistant Editor, Specialist)',
  totalVacancy: '212 Posts',
  applicationStartDate: '2026-09-12',
  applicationLastDate: '2026-10-02',
  admitCardDate: 'Not Released / To Be Updated',
  examDate: 'Not Released / To Be Updated',
  answerKeyDate: 'Not Released / To Be Updated',
  resultDate: 'Not Released / To Be Updated',
  cutOffDate: 'Not Released / To Be Updated',
  officialNotification: 'https://www.upsc.gov.in/',
  applyLink: 'https://upsconline.nic.in/candidate/realms/candidate-portal/login-actions/authenticate?client_id=account&tab_id=X1Xa5OxHdxo&client_data=eyJydSI6Imh0dHBzOi8vdXBzY29ubGluZS5uaWMuaW4vY2FuZGlkYXRlL3JlYWxtcy9jYW5kaWRhdGUtcG9ydGFsL2FjY291bnQvbG9naW4tcmVkaXJlY3QiLCJydCI6ImNvZGUiLCJzdCI6IjAvMTdiNzg1YzQtODUzNy0zMzI2LTIyZTUtNmRkNmRmNGE2MDk5In0',
  officialWebsite: 'https://www.upsc.gov.in/',
  description: 'UPSC 11/2026 Various Posts Recruitment 2026 – Apply online for 212 posts including Assistant Public Prosecutor, Specialist Assistant Professor, Assistant Editor & Public Law Officer. Check eligibility, age limits, pay levels & dates.',
  shortSummary: 'UPSC Advt. No. 11/2026 invites online applications for 212 vacancies across 7 posts in Central Ministries, Delhi Directorate of Prosecution, and UT of Ladakh. Apply online before closing dates (02 Oct / 09 Oct 2026).',
  logoIcon: '🏛️',
  status: 'APPLICATION_OPEN',
  state: 'All India',
  gender: 'All',
  education: ['Graduation', 'Post Graduation'],
  ageMin: 21,
  ageMax: 50,
  ageRelaxationInfo: 'SC/ST: +5 years, OBC: +3 years, PwBD: +10 years, Central Govt Employees: up to 5 years as per UPSC norms',
  importantDates: [
    { label: 'Advt. No. 11/2026 Published', date: '12 September 2026' },
    { label: 'Online Application Start Date', date: '12 September 2026', isHighlight: true },
    { label: 'Closing Date for Online Applications (Posts 1 to 6)', date: '02 October 2026 (23:59 Hrs)', isHighlight: true },
    { label: 'Closing Date for Online Applications (Post 7 - UT Ladakh)', date: '09 October 2026 (23:59 Hrs)', isHighlight: true },
    { label: 'Last Date for Complete Printing of Submitted Form', date: '03 October 2026 / 10 October 2026' },
    { label: 'Interview / Recruitment Test Date', date: 'Not Released / To Be Updated', isHighlight: true }
  ],
  applicationFee: [
    { category: 'General / OBC / EWS Male Candidates', amount: '₹25.00' },
    { category: 'SC / ST Candidates', amount: '₹0.00 (Exempted)' },
    { category: 'PwBD Candidates (Benchmark Disabilities)', amount: '₹0.00 (Exempted)' },
    { category: 'Female Candidates (All Categories)', amount: '₹0.00 (Exempted)' }
  ],
  vacancies: [
    { category: 'Assistant Public Prosecutor (Directorate of Prosecution, GNCTD)', postCount: 140 },
    { category: 'Specialist Grade III Assistant Professor - General Medicine (MoHFW)', postCount: 60 },
    { category: 'Specialist Grade III Assistant Professor - Anatomy (MoHFW)', postCount: 4 },
    { category: 'Public Law Officer / District Litigation Officer (UT of Ladakh)', postCount: 4 },
    { category: 'Assistant Editor (Indian Bureau of Mines, Ministry of Mines)', postCount: 2 },
    { category: 'Specialist Grade II (Junior Scale) - Anaesthesiology (NDMC)', postCount: 1 },
    { category: 'Specialist Grade II (Junior Scale) - Pediatrics (NDMC)', postCount: 1 }
  ],
  selectionProcess: [
    'Stage 1: Online Application Submission & Document Upload on upsconline.nic.in',
    'Stage 2: Shortlisting of candidates by UPSC (based on DQs, higher qualification, higher experience, or Recruitment Test / CRT)',
    'Stage 3: Personality Test / Interview at UPSC Dholpur House, New Delhi (Min. qualifying: UR-50, OBC-45, SC/ST/PwBD-40 out of 100)',
    'Stage 4: Document Verification & Medical Examination by Appointing Ministry/Department',
    'Stage 5: Final Recommendation & Appointment by Central Government / UT Administration'
  ],
  examPattern: [
    {
      stageName: 'Interview / Personality Test (Direct Selection)',
      mode: 'In-person Interview at UPSC, Dholpur House, New Delhi',
      duration: 'Standard interview session',
      negativeMarking: 'N/A',
      subjects: [
        { name: 'Interview / Personality Assessment (Suitability: UR-50, OBC-45, SC/ST/PwBD-40)', questions: 1, marks: 100 }
      ]
    },
    {
      stageName: 'Recruitment Test (RT) / Combined Recruitment Test (CRT) (If held due to large applications)',
      mode: 'Offline Pen-Paper OMR / Computer-Based Test (CBRT)',
      duration: '2 Hours (120 Minutes)',
      negativeMarking: 'Standard negative marking (ordinarily 1/3rd marks per wrong answer if RT held)',
      subjects: [
        { name: 'Concerned Discipline / Subject Knowledge & General Aptitude', questions: 120, marks: 300 }
      ]
    }
  ],
  salary: {
    payScale: 'Level-07 to Level-11 in 7th CPC Matrix (₹44,900 – ₹2,08,700)',
    inHand: '₹65,000 to ₹1,35,000 per month (varies by post level and location)',
    allowances: 'DA, HRA, Transport Allowance, Non-Practicing Allowance (NPA for medical posts), and Central Govt benefits'
  },
  faq: [
    {
      q: 'What is the total vacancy in UPSC Advt. 11/2026?',
      a: 'A total of 212 vacancies across 7 distinct posts are notified under UPSC Advertisement No. 11/2026.'
    },
    {
      q: 'What are the application dates for UPSC 11/2026?',
      a: 'Online applications opened on 12 September 2026. The closing date is 02 October 2026 (18:00 Hrs) for Posts 1 to 6, and 09 October 2026 (18:00 Hrs) for Post 7 (UT Ladakh).'
    },
    {
      q: 'What is the application fee?',
      a: '₹25/- for General, OBC, and EWS male candidates. Women, SC, ST, and PwBD candidates are 100% exempted.'
    },
    {
      q: 'What is the eligibility for Assistant Public Prosecutor (140 Posts)?',
      a: 'A Degree in Law (LL.B.) from a recognized university and a minimum of 3 years experience at the bar.'
    },
    {
      q: 'Can non-Ladakh residents apply for Public Law Officer (Post 7)?',
      a: 'No. Post 7 is strictly reserved for Domiciles of Union Territory of Ladakh holding a valid Domicile Certificate.'
    },
    {
      q: 'What are the minimum qualifying marks in the UPSC interview?',
      a: 'Out of 100 marks: 50 marks for UR/EWS, 45 marks for OBC, and 40 marks for SC/ST/PwBD.'
    },
    {
      q: 'Is there a live photo capture requirement during application?',
      a: 'Yes. UPSC mandates uploading a photo, capturing a live webcam photo, and uploading 3 signatures in black ink one below the other in the CAF.'
    }
  ],
  allInformation: generateUpsc112026VariousPosts50Sections()
};

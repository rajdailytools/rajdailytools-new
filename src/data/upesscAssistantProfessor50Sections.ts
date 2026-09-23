import { ExamInfoSection } from '../types/exam';

export function generateUpesscAssistantProfessor50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. Overview',
      badge: 'Overview',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The <strong>Uttar Pradesh Education Service Selection Commission (UPESSC, Prayagraj)</strong> [उ०प्र० शिक्षा सेवा चयन आयोग, 23 एलनगंज, प्रयागराज] has officially published <strong>Advertisement No. 04/2026 (विज्ञापन संख्या-04/2026)</strong> for direct recruitment to the post of <strong>Assistant Professor (सहायक आचार्य चयन परीक्षा, 2026)</strong> in non-government aided colleges (अशासकीय अनुदानित महाविद्यालय) across Uttar Pradesh. A total of <strong>1,936 vacancies</strong> are notified across 42 subjects.</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Recruitment Parameter</th>
                  <th class="p-2.5">Official Specification (Advt. No. 04/2026)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Recruiting Commission</td>
                  <td class="p-2.5 font-bold text-blue-900">UPESSC (उ०प्र० शिक्षा सेवा चयन आयोग, 23 एलनगंज, प्रयागराज-211002)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Advertisement Number</td>
                  <td class="p-2.5 font-mono font-bold text-purple-700">04/2026</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Name of Examination</td>
                  <td class="p-2.5 font-bold text-slate-900">Assistant Professor Selection Examination 2026 (सहायक आचार्य चयन परीक्षा, 2026)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Total Vacancies</td>
                  <td class="p-2.5 font-bold text-emerald-700">1,936 Posts (Co-Ed: 1,564 | Women's Colleges: 372)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Pay Scale & Cadre</td>
                  <td class="p-2.5 font-mono font-bold text-blue-800">Academic Level-10 (₹57,700 – ₹1,82,400) + AGP ₹6,000 equivalent</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Application Mode</td>
                  <td class="p-2.5 font-bold text-indigo-800">OTR Based Online Application via https://apply.upessc.org/</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Age Limit (as on 01.07.2026)</td>
                  <td class="p-2.5 font-bold text-slate-900">Maximum 62 Years (Superannuation age under Section 2.7 & 6(ख))</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Written Exam Scheme</td>
                  <td class="p-2.5 font-bold text-slate-900">120 MCQs (360 Marks, 2 Hours, -1 Negative Marking) + 40 Marks Interview = 400 Total</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: '2. Important Dates',
      badge: 'Schedule',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official schedule published under Section 1 (Page 2) of UPESSC Advertisement 04/2026:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Recruitment Event</th>
                  <th class="p-2.5">Official Date / Deadline</th>
                  <th class="p-2.5">Official Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Advertisement Publication Date</td>
                  <td class="p-2.5 font-mono font-bold text-slate-900">08 September 2026 (08.09.2026)</td>
                  <td class="p-2.5 text-emerald-700 font-semibold">Published on Official Website</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">OTR / Online Application Start Date</td>
                  <td class="p-2.5 font-mono font-bold text-blue-900">08 September 2026 (08.09.2026)</td>
                  <td class="p-2.5 text-blue-700 font-semibold">Online Portal Active</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Last Date for Online Application Fee / Application</td>
                  <td class="p-2.5 font-mono font-bold text-red-600">07 October 2026 (07.10.2026)</td>
                  <td class="p-2.5 text-red-700 font-bold">Strict Closing Deadline (23:59 IST)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Last Date for Online Application Correction</td>
                  <td class="p-2.5 font-mono font-bold text-purple-700">11 October 2026 (11.10.2026)</td>
                  <td class="p-2.5 text-purple-700 font-semibold">Correction Window Open</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Written Examination Dates</td>
                  <td class="p-2.5 font-mono font-bold text-emerald-800">19 and 20 November 2026 (19 व 20 नवम्बर 2026)</td>
                  <td class="p-2.5 text-emerald-800 font-semibold">Confirmed Written Exam Dates</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Admit Card Release Date</td>
                  <td class="p-2.5 font-semibold text-slate-600">To Be Updated / Before Exam</td>
                  <td class="p-2.5 text-slate-500">Not Released / To Be Updated</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Written Exam Result &amp; Interview Call</td>
                  <td class="p-2.5 font-semibold text-slate-600">To Be Updated</td>
                  <td class="p-2.5 text-slate-500">Not Released / To Be Updated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 3,
      title: '3. LIVE Application Deadline Countdown',
      badge: 'Live Timer',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The deadline to submit the UPESSC Assistant Professor online application and deposit the required examination fee is <strong>07 October 2026 (23:59:59 IST)</strong>. Candidates must complete OTR and fee clearance well before this target.</p>
          <div class="p-4 bg-red-50/80 border border-red-200 rounded-2xl">
            <div class="flex items-center justify-between gap-2 mb-2">
              <span class="text-xs font-bold text-red-900 uppercase">Application &amp; Fee Submission Target</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-800">07 October 2026</span>
            </div>
            <p class="text-xs text-red-800 leading-relaxed">
              Section 3.4 stipulates that completing OTR alone without completing fee payment and final submission by 07.10.2026 renders the candidature invalid. Please monitor the real-time countdown widget below or on top of this page.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 4,
      title: '4. LIVE Correction Deadline Countdown',
      badge: 'Live Timer',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The online application correction portal closes on <strong>11 October 2026 (23:59:59 IST)</strong>. Under Section 2.4 and 2.12 of the notification, candidates are granted a one-time opportunity to rectify typographical and qualifying data errors.</p>
          <div class="p-4 bg-purple-50/80 border border-purple-200 rounded-2xl">
            <div class="flex items-center justify-between gap-2 mb-2">
              <span class="text-xs font-bold text-purple-900 uppercase">Correction Window Target</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800">11 October 2026</span>
            </div>
            <p class="text-xs text-purple-800 leading-relaxed">
              <strong>Crucial Warning:</strong> Changes in Category, Sub-category, Date of Birth, and Gender are not permitted after final submission. Check all OTR preview details prior to locking.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 5,
      title: '5. LIVE Exam Countdown',
      badge: 'Live Timer',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The written examination will be held on <strong>19 and 20 November 2026</strong> across designated examination centers in Uttar Pradesh. Below is the real-time countdown to Exam Starts On 19 November 2026.</p>
          <div class="p-4 bg-blue-50/80 border border-blue-200 rounded-2xl">
            <div class="flex items-center justify-between gap-2 mb-2">
              <span class="text-xs font-bold text-blue-900 uppercase">Written Exam Commences</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800">19 November 2026</span>
            </div>
            <p class="text-xs text-blue-800 leading-relaxed">
              The test consists of 120 multiple choice questions (30 GK + 90 Subject) for 360 marks with a duration of 2 hours and negative marking (-1 per wrong answer).
            </p>
          </div>
        </div>
      `
    },
    {
      id: 6,
      title: '6. Vacancy Details',
      badge: 'Vacancies',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Requisition provided by the Director of Higher Education, UP, Prayagraj, direct recruitment is conducted for <strong>1,936 vacancies</strong> across 42 disciplines:</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
            <div class="p-3.5 bg-blue-50/60 border border-blue-200 rounded-xl">
              <div class="text-[11px] font-bold text-blue-600 uppercase">Co-Education Colleges</div>
              <div class="text-2xl font-black text-blue-900 mt-1 font-display">1,564</div>
              <div class="text-xs text-blue-700 mt-1">Postgraduate &amp; Graduate Colleges</div>
            </div>
            <div class="p-3.5 bg-pink-50/60 border border-pink-200 rounded-xl">
              <div class="text-[11px] font-bold text-pink-600 uppercase">Women's Colleges</div>
              <div class="text-2xl font-black text-pink-900 mt-1 font-display">372</div>
              <div class="text-xs text-pink-700 mt-1">Exclusively Female Cadre</div>
            </div>
            <div class="p-3.5 bg-emerald-50/60 border border-emerald-200 rounded-xl">
              <div class="text-[11px] font-bold text-emerald-600 uppercase">Consolidated Total</div>
              <div class="text-2xl font-black text-emerald-900 mt-1 font-display">1,936</div>
              <div class="text-xs text-emerald-700 mt-1">Total Posts Across 42 Subjects</div>
            </div>
          </div>
          <p class="text-xs text-slate-500 italic">Note: As per Section 5.2, the number of vacancies may increase or decrease according to state government requisitions.</p>
        </div>
      `
    },
    {
      id: 7,
      title: "7. Vacancy Distribution – Co-Education & Women's Colleges",
      badge: 'Subject Table',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official subject-wise and category-wise vacancy distribution as notified in Table 01 (Page 23 of Notification):</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2">#</th>
                  <th class="p-2">Subject Name (विषय)</th>
                  <th class="p-2">Total</th>
                  <th class="p-2">Co-Ed (Gen/SC/ST/OBC/EWS/Tot)</th>
                  <th class="p-2">Women (Gen/SC/ST/OBC/EWS/Tot)</th>
                  <th class="p-2">Horiz (Fem/PWD/DFF)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr><td class="p-2">1</td><td class="p-2 font-bold">हिन्दी (Hindi)</td><td class="p-2 font-bold text-blue-900">197</td><td class="p-2">59/29/0/40/13 = 141</td><td class="p-2">25/10/1/15/5 = 56</td><td class="p-2">0 / 7 / 3</td></tr>
                <tr><td class="p-2">2</td><td class="p-2 font-bold">अंग्रेजी (English)</td><td class="p-2 font-bold text-blue-900">111</td><td class="p-2">39/13/0/24/5 = 81</td><td class="p-2">18/4/0/7/1 = 30</td><td class="p-2">0 / 4 / 2</td></tr>
                <tr><td class="p-2">3</td><td class="p-2 font-bold">अर्थशास्त्र (Economics)</td><td class="p-2 font-bold text-blue-900">104</td><td class="p-2">30/39/0/10/0 = 79</td><td class="p-2">10/12/0/3/0 = 25</td><td class="p-2">0 / 4 / 2</td></tr>
                <tr><td class="p-2">4</td><td class="p-2 font-bold">समाजशास्त्र (Sociology)</td><td class="p-2 font-bold text-blue-900">82</td><td class="p-2">22/11/2/16/6 = 57</td><td class="p-2">10/7/0/7/1 = 25</td><td class="p-2">0 / 3 / 1</td></tr>
                <tr><td class="p-2">5</td><td class="p-2 font-bold">भौतिक विज्ञान (Physics)</td><td class="p-2 font-bold text-blue-900">96</td><td class="p-2">43/17/4/23/8 = 95</td><td class="p-2">0/0/0/1/0 = 1</td><td class="p-2">18 / 3 / 1</td></tr>
                <tr><td class="p-2">6</td><td class="p-2 font-bold">रसायन विज्ञान (Chemistry)</td><td class="p-2 font-bold text-blue-900">179</td><td class="p-2">62/35/5/47/18 = 167</td><td class="p-2">5/2/0/3/2 = 12</td><td class="p-2">23 / 7 / 3</td></tr>
                <tr><td class="p-2">7</td><td class="p-2 font-bold">गणित (Mathematics)</td><td class="p-2 font-bold text-blue-900">49</td><td class="p-2">18/14/0/12/4 = 48</td><td class="p-2">0/0/0/0/1 = 1</td><td class="p-2">8 / 1 / 0</td></tr>
                <tr><td class="p-2">8</td><td class="p-2 font-bold">वाणिज्य (Commerce)</td><td class="p-2 font-bold text-blue-900">102</td><td class="p-2">38/21/0/25/18 = 102</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">20 / 4 / 2</td></tr>
                <tr><td class="p-2">9</td><td class="p-2 font-bold">वनस्पति विज्ञान (Botany)</td><td class="p-2 font-bold text-blue-900">104</td><td class="p-2">33/21/2/28/9 = 93</td><td class="p-2">5/3/0/3/0 = 11</td><td class="p-2">9 / 4 / 2</td></tr>
                <tr><td class="p-2">10</td><td class="p-2 font-bold">इतिहास (History)</td><td class="p-2 font-bold text-blue-900">60</td><td class="p-2">23/8/0/16/2 = 49</td><td class="p-2">3/4/0/4/0 = 11</td><td class="p-2">1 / 2 / 1</td></tr>
                <tr><td class="p-2">11</td><td class="p-2 font-bold">चित्रकला (Art/Drawing)</td><td class="p-2 font-bold text-blue-900">24</td><td class="p-2">3/2/1/1/0 = 7</td><td class="p-2">9/4/0/3/1 = 17</td><td class="p-2">0 / 0 / 0</td></tr>
                <tr><td class="p-2">12</td><td class="p-2 font-bold">दर्शनशास्त्र (Philosophy)</td><td class="p-2 font-bold text-blue-900">16</td><td class="p-2">7/1/0/7/0 = 15</td><td class="p-2">1/0/0/0/0 = 1</td><td class="p-2">2 / 0 / 0</td></tr>
                <tr><td class="p-2">13</td><td class="p-2 font-bold">प्राणि विज्ञान (Zoology)</td><td class="p-2 font-bold text-blue-900">93</td><td class="p-2">36/19/0/19/7 = 81</td><td class="p-2">3/5/0/2/2 = 12</td><td class="p-2">6 / 3 / 1</td></tr>
                <tr><td class="p-2">14</td><td class="p-2 font-bold">मनोविज्ञान (Psychology)</td><td class="p-2 font-bold text-blue-900">72</td><td class="p-2">17/12/2/10/4 = 45</td><td class="p-2">15/4/0/6/2 = 27</td><td class="p-2">0 / 2 / 1</td></tr>
                <tr><td class="p-2">15</td><td class="p-2 font-bold">राजनीति शास्त्र (Political Science)</td><td class="p-2 font-bold text-blue-900">95</td><td class="p-2">30/16/2/18/7 = 73</td><td class="p-2">12/6/0/4/0 = 22</td><td class="p-2">0 / 3 / 1</td></tr>
                <tr><td class="p-2">16</td><td class="p-2 font-bold">शिक्षा शास्त्र (Education)</td><td class="p-2 font-bold text-blue-900">34</td><td class="p-2">8/2/0/3/1 = 14</td><td class="p-2">5/4/0/9/2 = 20</td><td class="p-2">0 / 1 / 0</td></tr>
                <tr><td class="p-2">17</td><td class="p-2 font-bold">संगीत गायन (Music Vocal)</td><td class="p-2 font-bold text-blue-900">12</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">5/5/0/2/0 = 12</td><td class="p-2">0 / 0 / 0</td></tr>
                <tr><td class="p-2">18</td><td class="p-2 font-bold">संस्कृत (Sanskrit)</td><td class="p-2 font-bold text-blue-900">102</td><td class="p-2">26/18/1/21/2 = 68</td><td class="p-2">13/9/0/10/2 = 34</td><td class="p-2">0 / 4 / 2</td></tr>
                <tr><td class="p-2">19</td><td class="p-2 font-bold">गृह विज्ञान (Home Science)</td><td class="p-2 font-bold text-blue-900">30</td><td class="p-2">2/1/0/1/1 = 5</td><td class="p-2">11/6/0/5/3 = 25</td><td class="p-2">0 / 1 / 0</td></tr>
                <tr><td class="p-2">20</td><td class="p-2 font-bold">भूगोल (Geography)</td><td class="p-2 font-bold text-blue-900">95</td><td class="p-2">41/19/0/26/6 = 92</td><td class="p-2">0/1/0/2/0 = 3</td><td class="p-2">16 / 3 / 1</td></tr>
                <tr><td class="p-2">21</td><td class="p-2 font-bold">शारीरिक शिक्षा (Physical Education)</td><td class="p-2 font-bold text-blue-900">35</td><td class="p-2">9/3/0/10/6 = 28</td><td class="p-2">5/0/0/2/0 = 7</td><td class="p-2">0 / 1 / 0</td></tr>
                <tr><td class="p-2">22</td><td class="p-2 font-bold">सैन्य विज्ञान (Military Science)</td><td class="p-2 font-bold text-blue-900">41</td><td class="p-2">16/11/1/10/3 = 41</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">8 / 1 / 0</td></tr>
                <tr><td class="p-2">23</td><td class="p-2 font-bold">कृषि अर्थशास्त्र (Agri Economics)</td><td class="p-2 font-bold text-blue-900">9</td><td class="p-2">4/2/0/3/0 = 9</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">1 / 0 / 0</td></tr>
                <tr><td class="p-2">24</td><td class="p-2 font-bold">मानवशास्त्र (Anthropology)</td><td class="p-2 font-bold text-blue-900">1</td><td class="p-2">1/0/0/0/0 = 1</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">0 / 0 / 0</td></tr>
                <tr><td class="p-2">25</td><td class="p-2 font-bold">संगीत वादन सितार</td><td class="p-2 font-bold text-blue-900">1</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">1/0/0/0/0 = 1</td><td class="p-2">0 / 0 / 0</td></tr>
                <tr><td class="p-2">26</td><td class="p-2 font-bold">शस्य विज्ञान (Agronomy)</td><td class="p-2 font-bold text-blue-900">11</td><td class="p-2">3/4/1/3/0 = 11</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">2 / 0 / 0</td></tr>
                <tr><td class="p-2">27</td><td class="p-2 font-bold">पशुपालन एवं दुग्ध विज्ञान</td><td class="p-2 font-bold text-blue-900">12</td><td class="p-2">4/3/0/4/1 = 12</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">2 / 0 / 0</td></tr>
                <tr><td class="p-2">28</td><td class="p-2 font-bold">कृषि रसायन (Agri Chemistry)</td><td class="p-2 font-bold text-blue-900">8</td><td class="p-2">5/0/0/2/1 = 8</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">1 / 0 / 0</td></tr>
                <tr><td class="p-2">29</td><td class="p-2 font-bold">कृषि वनस्पति (Agri Botany)</td><td class="p-2 font-bold text-blue-900">8</td><td class="p-2">3/1/0/3/1 = 8</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">1 / 0 / 0</td></tr>
                <tr><td class="p-2">30</td><td class="p-2 font-bold">कृषि अभियन्त्रण (Agri Engg)</td><td class="p-2 font-bold text-blue-900">6</td><td class="p-2">5/0/0/0/1 = 6</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">0 / 0 / 0</td></tr>
                <tr><td class="p-2">31</td><td class="p-2 font-bold">संगीत वादन तबला</td><td class="p-2 font-bold text-blue-900">9</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">2/1/1/5/0 = 9</td><td class="p-2">0 / 0 / 0</td></tr>
                <tr><td class="p-2">32</td><td class="p-2 font-bold">उद्यान विज्ञान (Horticulture)</td><td class="p-2 font-bold text-blue-900">6</td><td class="p-2">3/2/0/1/0 = 6</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">1 / 0 / 0</td></tr>
                <tr><td class="p-2">33</td><td class="p-2 font-bold">उर्दू (Urdu)</td><td class="p-2 font-bold text-blue-900">11</td><td class="p-2">2/0/0/2/0 = 4</td><td class="p-2">1/4/0/1/1 = 7</td><td class="p-2">0 / 0 / 0</td></tr>
                <tr><td class="p-2">34</td><td class="p-2 font-bold">एशियन कल्चर (Asian Culture)</td><td class="p-2 font-bold text-blue-900">1</td><td class="p-2">0/0/0/1/0 = 1</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">0 / 0 / 0</td></tr>
                <tr><td class="p-2">35</td><td class="p-2 font-bold">प्राचीन इतिहास (Ancient History)</td><td class="p-2 font-bold text-blue-900">25</td><td class="p-2">7/4/0/9/2 = 22</td><td class="p-2">1/1/0/1/0 = 3</td><td class="p-2">2 / 1 / 0</td></tr>
                <tr><td class="p-2">36</td><td class="p-2 font-bold">विधि (Law)</td><td class="p-2 font-bold text-blue-900">61</td><td class="p-2">22/15/1/14/9 = 61</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">12 / 2 / 1</td></tr>
                <tr><td class="p-2">37</td><td class="p-2 font-bold">सांख्यिकी (Statistics)</td><td class="p-2 font-bold text-blue-900">13</td><td class="p-2">6/1/0/5/1 = 13</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">2 / 0 / 0</td></tr>
                <tr><td class="p-2">38</td><td class="p-2 font-bold">भूगर्भ विज्ञान (Geology)</td><td class="p-2 font-bold text-blue-900">6</td><td class="p-2">3/2/0/1/0 = 6</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">1 / 0 / 0</td></tr>
                <tr><td class="p-2">39</td><td class="p-2 font-bold">कृषि आनुवंशिकी एवं पादप प्रजनन</td><td class="p-2 font-bold text-blue-900">5</td><td class="p-2">1/1/0/1/2 = 5</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">1 / 0 / 0</td></tr>
                <tr><td class="p-2">40</td><td class="p-2 font-bold">कीट विज्ञान (Entomology)</td><td class="p-2 font-bold text-blue-900">4</td><td class="p-2">1/0/0/3/0 = 4</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">0 / 0 / 0</td></tr>
                <tr><td class="p-2">41</td><td class="p-2 font-bold">कृषि प्रसार (Agri Extension)</td><td class="p-2 font-bold text-blue-900">4</td><td class="p-2">4/0/0/0/0 = 4</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">0 / 0 / 0</td></tr>
                <tr><td class="p-2">42</td><td class="p-2 font-bold">कृषि सांख्यिकी (Agri Stats)</td><td class="p-2 font-bold text-blue-900">2</td><td class="p-2">0/0/0/2/0 = 2</td><td class="p-2">0/0/0/0/0 = 0</td><td class="p-2">0 / 0 / 0</td></tr>
                <tr class="bg-slate-100 font-black text-slate-950">
                  <td class="p-2" colspan="2">Consolidated Total (योग)</td>
                  <td class="p-2 text-emerald-800">1,936</td>
                  <td class="p-2">636/347/22/421/138 = 1,564</td>
                  <td class="p-2">160/92/2/95/23 = 372</td>
                  <td class="p-2 text-blue-900">138 / 61 / 24</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 8,
      title: '8. Post & Department Details',
      badge: 'Cadre',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The post of Assistant Professor (सहायक आचार्य) is classified under the State Collegiate Higher Education Service (Collegiate Branch) in non-government aided colleges (अशासकीय अनुदानित महाविद्यालय) in Uttar Pradesh:</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Cadre:</strong> State Collegiate Higher Education Service (Collegiate Branch).</li>
            <li><strong>Requisition Authority:</strong> Directorate of Higher Education, UP, Prayagraj.</li>
            <li><strong>Selection Authority:</strong> Uttar Pradesh Education Service Selection Commission (UPESSC), 23 Elan Ganj, Prayagraj.</li>
            <li><strong>Nature of Duties:</strong> Undergraduate &amp; Postgraduate collegiate teaching, conducting academic research, seminars, curriculum delivery, and university examination evaluations.</li>
          </ul>
        </div>
      `
    },
    {
      id: 9,
      title: '9. Age Limit',
      badge: 'Age Limit',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official age requirements under Section 2.7 and Section 6(ख) of Advertisement 04/2026:</p>
          <div class="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2">
            <div class="flex items-center gap-2">
              <span class="font-bold text-amber-900 text-sm">Official Superannuation / Maximum Age Norm:</span>
            </div>
            <p class="text-xs text-amber-950 leading-relaxed">
              <strong>Maximum Age:</strong> Candidates must not exceed <strong>62 Years</strong> of age as on the official cut-off date (<strong>01 July 2026</strong>). Applications with age exceeding 62 years on 01.07.2026 will be summarily rejected.
            </p>
            <p class="text-xs text-amber-950 leading-relaxed">
              <strong>Minimum Age:</strong> Not specified / N/A in the official notification. Candidates must satisfy the mandatory minimum educational qualifications (Master's Degree + NET/SET/Ph.D.).
            </p>
          </div>
        </div>
      `
    },
    {
      id: 10,
      title: '10. Age Relaxation',
      badge: 'Relaxation',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Age relaxation provisions are governed by applicable Uttar Pradesh Government rules and UPESSC regulations:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li>Because the statutory maximum superannuation age for collegiate faculty in Uttar Pradesh is <strong>62 years</strong>, no candidate may cross the upper ceiling of 62 years on 01.07.2026 under any category.</li>
            <li>Candidates seeking benefits must belong permanently to Uttar Pradesh. Domicile proof is required.</li>
          </ul>
        </div>
      `
    },
    {
      id: 11,
      title: '11. Age Calculation Date',
      badge: 'Cut-Off Date',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Section 2.7 and Section 6(ख), the official cut-off date for age calculation is strictly <strong>01 July 2026 (01.07.2026)</strong>.</p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
            <p><strong>Verification Standard (Section 2.10):</strong> Only the date of birth recorded in the candidate's High School (Matriculation) or equivalent examination certificate will be recognized.</p>
            <p><strong>Example:</strong> A candidate born on 02 July 1964 will be 61 years, 11 months, and 29 days old on 01.07.2026 (Eligible). A candidate born on 30 June 1964 will be 62 years and 1 day old on 01.07.2026 (Ineligible).</p>
          </div>
        </div>
      `
    },
    {
      id: 12,
      title: '12. Pay Scale / Salary',
      badge: 'Pay Scale',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official pay scale notified under Section 6(ग) of Advertisement 04/2026:</p>
          <div class="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl">
            <div class="flex items-baseline gap-2">
              <span class="text-xs font-bold text-emerald-800 uppercase">UGC 7th CPC Matrix:</span>
              <span class="text-xl font-black text-emerald-950 font-mono">Academic Level-10 (₹57,700 – ₹1,82,400)</span>
            </div>
            <p class="text-xs text-emerald-800 mt-1">Pre-revised PB-3 (₹15,600 – ₹39,100) with Academic Grade Pay (AGP) ₹6,000.</p>
          </div>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Salary Component</th>
                  <th class="p-2.5">Amount / Rate</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr><td class="p-2.5 font-semibold bg-slate-50/50">Basic Pay (Entry Level-10, Cell-1)</td><td class="p-2.5 font-mono font-bold text-slate-900">₹57,700.00</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50/50">Dearness Allowance (DA at 50%+)</td><td class="p-2.5 font-mono text-slate-800">~₹28,850.00</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50/50">House Rent Allowance (HRA by City Class)</td><td class="p-2.5 font-mono text-slate-800">₹4,500.00 – ₹9,200.00</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50/50">Gross Estimated Emoluments</td><td class="p-2.5 font-mono font-bold text-blue-900">₹91,000 – ₹96,000 / month</td></tr>
                <tr><td class="p-2.5 font-semibold bg-slate-50/50">Estimated In-Hand Take Home Salary</td><td class="p-2.5 font-mono font-bold text-emerald-800">~₹82,000 – ₹88,000 / month</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 13,
      title: '13. Application Fee',
      badge: 'Fee Details',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official examination fee schedule prescribed in Section 4 (Page 4) of UPESSC Advertisement 04/2026:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Category (श्रेणी)</th>
                  <th class="p-2.5">Application Fee (आवेदन शुल्क)</th>
                  <th class="p-2.5">Official Remarks</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-slate-900 bg-slate-50/50">सामान्य / अनारक्षित / अन्य पिछड़ा वर्ग / आर्थिक रूप से कमजोर वर्ग एवं अन्य (UR / OBC / EWS / Other States)</td>
                  <td class="p-2.5 font-mono font-bold text-blue-900 text-sm">₹2,000.00</td>
                  <td class="p-2.5 text-slate-600">Standard Category Fee</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-purple-900 bg-purple-50/30">अनुसूचित जाति / अनुसूचित जनजाति (SC / ST of UP)</td>
                  <td class="p-2.5 font-mono font-bold text-purple-900 text-sm">₹1,500.00</td>
                  <td class="p-2.5 text-slate-600">Concessional Fee for UP SC/ST</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-emerald-900 bg-emerald-50/30">दिव्यांगजन (Divyangjan / PwD)</td>
                  <td class="p-2.5 font-mono font-bold text-emerald-900 text-sm">₹1,000.00</td>
                  <td class="p-2.5 text-slate-600">Special Concessional Rate</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-500 italic">Fee is non-refundable under any circumstance (Section 2.12).</p>
        </div>
      `
    },
    {
      id: 14,
      title: '14. Payment Method',
      badge: 'Payment',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Section 3.1 to 3.4 of the notification, only official payment gateways supported on the portal may be used:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>Payment Modes:</strong> Credit Card, Debit Card, or Net Banking.</li>
            <li><strong>Bank Gateways:</strong> ICICI Bank &amp; Union Bank / BillDesk Payment Gateway.</li>
            <li><strong>Confirmation:</strong> Fee payment is valid only after confirmation is received from the bank. Always preserve the electronic fee receipt.</li>
            <li><strong>Incomplete Submissions:</strong> Merely generating OTR or making fee payment without completing final application submission before 07.10.2026 will cancel the application.</li>
          </ul>
        </div>
      `
    },
    {
      id: 15,
      title: '15. Eligibility Overview',
      badge: 'Eligibility',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Section 7 (Pages 5-9) of the notification, candidates must satisfy the dual criteria of postgraduate academic merit and national/state qualifying testing:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3">
            <div class="p-4 bg-blue-50/70 border border-blue-200 rounded-xl">
              <span class="text-xs font-bold text-blue-900 block mb-1">Condition A: Master's Degree</span>
              <p class="text-xs text-blue-950 leading-relaxed">
                Master’s degree in the concerned / relevant / allied subject with at least <strong>55% marks</strong> (or an equivalent grade in a point scale) from an Indian University or an accredited foreign university.
              </p>
            </div>
            <div class="p-4 bg-purple-50/70 border border-purple-200 rounded-xl">
              <span class="text-xs font-bold text-purple-900 block mb-1">Condition B: Testing / Exemption</span>
              <p class="text-xs text-purple-950 leading-relaxed">
                Cleared <strong>UGC NET</strong> or <strong>CSIR NET</strong> or <strong>UP SLET / SET</strong>, OR awarded Ph.D. under UGC 2009/2016 Regulations (with 5 conditions for pre-2009 Ph.D.), OR Ph.D. from Top 500 Global Universities.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 16,
      title: '16. Subject-Wise Eligibility',
      badge: 'Subjects',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The official notification mandates subject-specific master's degrees and recognized allied subjects for each of the 42 disciplines:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Subject Category</th>
                  <th class="p-2.5">Core Educational &amp; Professional Requirement</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-blue-900 bg-blue-50/30">General Arts, Humanities &amp; Social Sciences (34 Subjects)</td>
                  <td class="p-2.5 text-slate-700">Master's Degree with ≥55% in concerned or allied subject + UGC NET / SLET or Ph.D.</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-purple-900 bg-purple-50/30">Sciences &amp; Mathematics (Physics, Chemistry, Botany, Zoology, Maths)</td>
                  <td class="p-2.5 text-slate-700">M.Sc. with ≥55% in subject/allied + CSIR NET / UGC NET or Ph.D. under 2009/2016 norms.</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-pink-900 bg-pink-50/30">Drawing &amp; Painting / Music (Vocal &amp; Instrumental)</td>
                  <td class="p-2.5 text-slate-700">M.A./Master's in Art/Music ≥55% + NET, OR Traditional/Professional 'A' Grade Artist of AIR/Doordarshan with Bachelor's degree under renowned traditional Ustad.</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-emerald-900 bg-emerald-50/30">Agricultural Sciences &amp; Engineering</td>
                  <td class="p-2.5 text-slate-700">M.Sc. (Agri) in concerned specialization / M.Tech in Agri Engg with ≥55% + ASRB/ICAR/UGC NET or Ph.D.</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-indigo-900 bg-indigo-50/30">Law (विधि)</td>
                  <td class="p-2.5 text-slate-700">LL.M. degree with ≥55% marks + UGC NET in Law or Ph.D. in Law.</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-amber-900 bg-amber-50/30">Education &amp; Physical Education</td>
                  <td class="p-2.5 text-slate-700">Master of Education (M.Ed.) or M.P.Ed./M.P.E. with ≥55% marks + NET in Education/Physical Education.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 17,
      title: '17. Educational Qualification',
      badge: 'Academic',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Academic qualifying standards and relaxation rules under Section 7 Note 1 (Page 8):</p>
          <ul class="list-disc pl-5 space-y-2 text-xs text-slate-700">
            <li><strong>Standard Requirement:</strong> Minimum <strong>55% marks</strong> (or equivalent point scale grade) at Master’s Degree level.</li>
            <li><strong>5% Relaxation (to 50% Marks):</strong> Granted to candidates belonging to Scheduled Castes (SC), Scheduled Tribes (ST), Other Backward Classes (OBC - Non Creamy Layer), and Differently-abled categories (Blindness/Low vision, Deaf/Hard of hearing, Locomotor/Cerebral Palsy/Leprosy cured/Dwarfism/Acid attack/Muscular Dystrophy, Autism/Intellectual disability, Multiple disabilities).</li>
            <li><strong>Pre-1991 Ph.D. Relaxation:</strong> Candidates who obtained their Master’s degree prior to 19 September 1991 and hold a Ph.D. are also eligible for the 5% relaxation (55% to 50%).</li>
          </ul>
        </div>
      `
    },
    {
      id: 18,
      title: '18. NET / SLET / SET Requirements',
      badge: 'NET Exam',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>National Eligibility Test guidelines under Section 7(ii) (Page 6):</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li>Candidates must have qualified UGC NET or CSIR NET or UP SLET/SET conducted for Uttar Pradesh.</li>
            <li>SET/SLET certificates accredited by UGC from states other than Uttar Pradesh are not valid for UP state recruitment.</li>
            <li><strong>Discipline Exemption (Note on Page 6 &amp; 7):</strong> NET/SLET/SET is not required in subjects/specializations for which UGC or CSIR does not conduct NET/SLET.</li>
          </ul>
        </div>
      `
    },
    {
      id: 19,
      title: '19. Ph.D. Related Eligibility / Exemptions',
      badge: 'Ph.D. Norms',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Exemption from NET/SLET/SET through Ph.D. qualification under Section 7(क)(ii) and 7(ख):</p>
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
            <p><strong>UGC 2009 / 2016 Regulations:</strong> Candidates awarded Ph.D. under UGC (Minimum Standards and Procedure for Award of M.Phil/Ph.D. Degree) Regulations, 2009 or 2016 are exempted from NET/SLET/SET.</p>
            <p><strong>5 Mandatory Conditions for Pre-July 11, 2009 Ph.D. Registrations:</strong></p>
            <ol class="list-decimal pl-5 space-y-1 text-slate-700">
              <li>Ph.D. degree must have been awarded in regular mode only;</li>
              <li>Evaluation of thesis by at least two external examiners;</li>
              <li>An open Ph.D. viva-voce examination conducted;</li>
              <li>At least two research papers published from Ph.D. work, with at least one in a refereed journal;</li>
              <li>At least two presentations in conferences/seminars sponsored/funded by UGC/ICSSR/CSIR or similar agency.</li>
            </ol>
            <p class="text-slate-500 italic mt-1">Must be certified by the Registrar or Dean (Academic Affairs) of the awarding university.</p>
            <p><strong>Top 500 Global Universities (Option ख):</strong> Candidates with Ph.D. from foreign universities ranked in Top 500 of QS, Times Higher Education (THE), or ARWU (Shanghai Jiao Tong) are directly eligible.</p>
          </div>
        </div>
      `
    },
    {
      id: 20,
      title: '20. Equivalent / Interrelated Subjects',
      badge: 'Equivalence',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official inter-related and equivalent subjects approved in the notification (Pages 8–10):</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Recruited Subject</th>
                  <th class="p-2.5">Recognized Allied / Inter-Related Subjects</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr><td class="p-2.5 font-bold">हिन्दी (Hindi)</td><td class="p-2.5">भाषा विज्ञान (Linguistics)</td></tr>
                <tr><td class="p-2.5 font-bold">अंग्रेजी (English)</td><td class="p-2.5">1. भाषा विज्ञान (Linguistics) 2. अप्लाइड अंग्रेजी (Applied English)</td></tr>
                <tr><td class="p-2.5 font-bold">संस्कृत (Sanskrit)</td><td class="p-2.5">संस्कृत में निष्णात उपाधि / सम्पूर्णानन्द संस्कृत विश्वविद्यालय से आचार्य</td></tr>
                <tr><td class="p-2.5 font-bold">इतिहास (History)</td><td class="p-2.5">1. मध्यकालीन इतिहास 2. आधुनिक इतिहास 3. प्राचीन इतिहास 4. पुरातत्त्व</td></tr>
                <tr><td class="p-2.5 font-bold">प्राचीन इतिहास (Ancient History)</td><td class="p-2.5">Archeology and Heritage Management</td></tr>
                <tr><td class="p-2.5 font-bold">एशियन कल्चर (Asian Culture)</td><td class="p-2.5">1. प्राचीन इतिहास 2. मध्यकालीन एवं आधुनिक 3. पाश्चात्य इतिहास 4. मानव शास्त्र 5. पुरातत्त्व</td></tr>
                <tr><td class="p-2.5 font-bold">शिक्षाशास्त्र (Education)</td><td class="p-2.5">Master of Education (M.Ed)</td></tr>
                <tr><td class="p-2.5 font-bold">समाज शास्त्र (Sociology)</td><td class="p-2.5">सोशल वर्क (Social Work)</td></tr>
                <tr><td class="p-2.5 font-bold">अर्थशास्त्र (Economics)</td><td class="p-2.5">व्यावहारिक अर्थशास्त्र (Applied Economics)</td></tr>
                <tr><td class="p-2.5 font-bold">राजनीति शास्त्र (Political Science)</td><td class="p-2.5">1. लोक प्रशासन 2. अन्तर्राष्ट्रीय सम्बन्ध</td></tr>
                <tr><td class="p-2.5 font-bold">शारीरिक शिक्षा (Physical Education)</td><td class="p-2.5">M.P.Ed. / M.P.E.</td></tr>
                <tr><td class="p-2.5 font-bold">सैन्य विज्ञान (Military Science)</td><td class="p-2.5">रक्षा एवं स्त्रातजिक अध्ययन (Defence &amp; Strategic Studies)</td></tr>
                <tr><td class="p-2.5 font-bold">गृह विज्ञान (Home Science)</td><td class="p-2.5">1. Food &amp; Nutrition 2. Clothing &amp; Textiles 3. Human Development 4. Family Resource Management</td></tr>
                <tr><td class="p-2.5 font-bold">वाणिज्य (Commerce)</td><td class="p-2.5">1. Business Administration 2. Accountancy &amp; Business Statistics 3. Economic Administration &amp; Financial Management</td></tr>
                <tr><td class="p-2.5 font-bold">रसायन विज्ञान (Chemistry)</td><td class="p-2.5">1. Applied/Organic/Inorganic Chemistry 2. Pharmaceutical Chemistry</td></tr>
                <tr><td class="p-2.5 font-bold">वनस्पति विज्ञान (Botany)</td><td class="p-2.5">1. Plant Science 2. Bio-Technology 3. Microbiology 4. Plant Bio-Technology 5. Bio-Chemistry 6. Marine Bio-Tech 7. Genetics 8. Environmental Science &amp; Life Sciences</td></tr>
                <tr><td class="p-2.5 font-bold">प्राणि विज्ञान (Zoology)</td><td class="p-2.5">1. Animal Science 2. Microbiology 3. Molecular &amp; Human Genetics 4. Environmental Science 5. Fisheries 6. Life Sciences</td></tr>
                <tr><td class="p-2.5 font-bold">भौतिक विज्ञान (Physics)</td><td class="p-2.5">व्यावहारिक भौतिकी (Applied Physics)</td></tr>
                <tr><td class="p-2.5 font-bold">भूगर्भ विज्ञान (Geology)</td><td class="p-2.5">Applied Geology / Earth Science</td></tr>
                <tr><td class="p-2.5 font-bold">कृषि सांख्यिकी (Agri Statistics)</td><td class="p-2.5">Agricultural Statistics / Statistics / Applied Statistics / Biostatistics / Mathematical Statistics</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 21,
      title: '21. Reservation',
      badge: 'Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Section 6(क) and Section 8.1 to 8.6 specify that reservation benefits apply strictly to Uttar Pradesh domicile candidates:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li>Candidates belonging to SC, ST, OBC, and EWS categories who are not permanent residents of UP are considered as <strong>General (Unreserved)</strong> candidates (Section 8.3).</li>
            <li>Candidates claiming multiple reservations will be granted only the single most advantageous relaxation (Section 8.2).</li>
          </ul>
        </div>
      `
    },
    {
      id: 22,
      title: '22. Category-Wise Reservation Rules',
      badge: 'Quota Matrix',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Breakdown of vertical quotas across the 1,936 posts under UP Public Services Reservation Acts:</p>
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-2.5 my-3 text-center">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl"><span class="text-[10px] text-slate-400 font-bold block uppercase">General (UR)</span><span class="text-lg font-black text-slate-900 font-display">796</span></div>
            <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl"><span class="text-[10px] text-blue-600 font-bold block uppercase">OBC (NCL)</span><span class="text-lg font-black text-blue-950 font-display">516</span></div>
            <div class="p-3 bg-purple-50 border border-purple-200 rounded-xl"><span class="text-[10px] text-purple-600 font-bold block uppercase">SC</span><span class="text-lg font-black text-purple-950 font-display">439</span></div>
            <div class="p-3 bg-pink-50 border border-pink-200 rounded-xl"><span class="text-[10px] text-pink-600 font-bold block uppercase">ST</span><span class="text-lg font-black text-pink-950 font-display">24</span></div>
            <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl"><span class="text-[10px] text-emerald-600 font-bold block uppercase">EWS (10%)</span><span class="text-lg font-black text-emerald-950 font-display">161</span></div>
          </div>
          <p class="text-xs text-slate-600">Under the UP EWS Reservation Act 2020 (Section 6(iv)(e)), unfilled EWS vacancies will not be carried forward as backlog and will be filled by eligible UR candidates.</p>
        </div>
      `
    },
    {
      id: 23,
      title: '23. Divyangjan / PwD Information',
      badge: 'PwD Specs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official provisions for Divyangjan candidates under Section 6(iii), Section 11.9, and Table 01:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>Total Horizontal Vacancies:</strong> 61 posts across subjects.</li>
            <li><strong>Identified Sub-Categories:</strong> One Arm (OA), One Leg (OL), Blind (B), Both Arms (BA), Low Vision (LV), Deaf (D), Hard of Hearing (HH), Leprosy Cured (LC), Dwarfism (DW), Acid Attack Victims (AAV).</li>
            <li><strong>Scribe Facility (Section 11.9):</strong> Permitted as per GO dated 04.12.2019 and 08.09.2022. Candidates must bring their own scribe and register at UPESSC office at least 1 week prior to the exam. Scribe users receive <strong>20 minutes per hour</strong> compensatory extra time.</li>
            <li><strong>Medical Certificate:</strong> Mandatory in format prescribed in Parishisht-5 signed by Medical Board.</li>
          </ul>
        </div>
      `
    },
    {
      id: 24,
      title: '24. Important Candidate Instructions',
      badge: 'Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Key guidelines from Section 2.1 to 2.18:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li>Registration and application form must be filled in <strong>English language only</strong> (Section 2.11).</li>
            <li>If a candidate submits multiple applications for the post, only the <strong>last finally submitted application</strong> will be accepted; earlier forms will be cancelled without fee refund (Section 2.12).</li>
            <li>Candidates must retain <strong>three printed copies</strong> of the final application form and fee receipt. Two sets with original documents must be submitted during interview/DV (Section 2.16).</li>
            <li>In-service candidates must produce a No Objection Certificate (NOC) from their employer at the time of interview (Section 9.1).</li>
            <li>Marital restrictions apply under Section 9.2: Having more than one living spouse disqualifies the candidate unless exempted by the Governor.</li>
          </ul>
        </div>
      `
    },
    {
      id: 25,
      title: '25. OTR Registration',
      badge: 'OTR',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Section 2.2, <strong>One Time Registration (OTR)</strong> is mandatory on the official portal <code>www.upessc.up.gov.in</code> before filling the online form:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
            <li>Generate unique OTR number by verifying Mobile Number and Email ID.</li>
            <li>Upload primary educational details, domicile, Aadhaar details, and basic profile once.</li>
            <li>Use the active OTR credentials to apply for Advt 04/2026 Assistant Professor posts.</li>
          </ul>
        </div>
      `
    },
    {
      id: 26,
      title: '26. How to Apply Online',
      badge: 'Guide',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Step-by-step submission workflow on <code>https://apply.upessc.org/</code>:</p>
          <ol class="list-decimal pl-5 space-y-2 text-xs text-slate-700">
            <li><strong>Step 1 (OTR Portal):</strong> Complete One Time Registration and log into UPESSC recruitment portal.</li>
            <li><strong>Step 2 (Subject Selection):</strong> Select Advertisement 04/2026 and choose the concerned subject from the 42 options.</li>
            <li><strong>Step 3 (College Stream):</strong> Choose Co-Education / Women’s College preference according to eligibility.</li>
            <li><strong>Step 4 (Uploads):</strong> Upload photo (30–300 KB), signature (10–200 KB, 140x110 px), and qualification PDFs (50–500 KB).</li>
            <li><strong>Step 5 (Fee Payment):</strong> Pay application fee via Debit/Credit Card or Net Banking.</li>
            <li><strong>Step 6 (Final Submit &amp; Print):</strong> Lock form before 07.10.2026 and print 3 hard copies.</li>
          </ol>
        </div>
      `
    },
    {
      id: 27,
      title: '27. Documents Required',
      badge: 'Documents',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official checklist of 18 documents mandated under Section 13.5 for interview and verification:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2 text-xs">
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">1. Online Application Form (2 copies)</div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">2. High School Marks Sheet &amp; Certificate (DOB proof)</div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">3. Intermediate Marks Sheet &amp; Certificate</div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">4. Graduation Marks Sheets &amp; Degree</div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">5. LL.B. Marks Sheets &amp; Degree (for Law)</div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">6. Postgraduate Marks Sheets &amp; Degree (55% / 50%)</div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">7. M.Ed. / M.P.Ed. Degree (Education / Physical Ed)</div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">8. LL.M. Marks Sheets &amp; Degree (for Law)</div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">9. Ph.D. / D.Phil. Degree Certificate</div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">10. M.Phil. Degree Certificate</div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">11. D.Litt. / D.Sc. / LL.D. Certificates</div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">12. No Objection Certificate (for In-Service)</div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">13. SC / ST / OBC / EWS / DFF Certificate (Parishisht 1-4)</div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">14. Divyangjan Certificate (Parishisht-5)</div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">15. Notarized Affidavit on Stamp (Parishisht-6)</div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">16. Character Certificate from Last Attended Institution</div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">17. Two Character Certificates from Gazetted Officers</div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">18. Court Case Clearance Affidavit</div>
          </div>
        </div>
      `
    },
    {
      id: 28,
      title: '28. Photo Upload Requirements',
      badge: 'Photo Specs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official specifications under Section 2.13:</p>
          <div class="p-4 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1.5 text-xs text-blue-950">
            <p><strong>Format:</strong> JPG or JPEG format only.</p>
            <p><strong>File Size:</strong> Between <strong>30 KB and 300 KB</strong>.</p>
            <p><strong>Pixel Resolution:</strong> Between <strong>300 and 600 pixels</strong> (Width &amp; Height).</p>
            <p><strong>Standards:</strong> Recent colored passport photograph with light/white background, frontal face view, clear visibility without dark glasses or caps.</p>
          </div>
        </div>
      `
    },
    {
      id: 29,
      title: '29. Signature Upload Requirements',
      badge: 'Signature Specs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official specifications under Section 2.13:</p>
          <div class="p-4 bg-purple-50/70 border border-purple-200 rounded-xl space-y-1.5 text-xs text-purple-950">
            <p><strong>Format:</strong> JPG or JPEG format only.</p>
            <p><strong>File Size:</strong> Between <strong>10 KB and 200 KB</strong>.</p>
            <p><strong>Exact Resolution:</strong> <strong>140 × 110 pixels</strong> (Width: 140px, Height: 110px).</p>
            <p><strong>Background:</strong> Black or dark blue ink signature on <strong>pure white background</strong>.</p>
          </div>
        </div>
      `
    },
    {
      id: 30,
      title: '30. PDF Document Upload Requirements',
      badge: 'PDF Specs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official specifications under Section 2.14:</p>
          <div class="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1.5 text-xs text-emerald-950">
            <p><strong>Format:</strong> PDF format only.</p>
            <p><strong>File Size:</strong> Between <strong>50 KB and 500 KB</strong> per document.</p>
            <p><strong>Clarity:</strong> High-resolution legible scans (150–200 DPI). Blurry or truncated documents may result in cancellation.</p>
          </div>
        </div>
      `
    },
    {
      id: 31,
      title: '31. Working Photo Resizer Tool',
      badge: 'Tool',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Use our interactive UPESSC Photo Resizer &amp; Compressor tool to adjust your passport photo to exact specifications: <strong>30–300 KB</strong> file size and <strong>300–600 px</strong> resolution.</p>
          <div class="p-4 bg-blue-50 border border-blue-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <h4 class="font-bold text-slate-900 text-sm">Launch Photo Resizer (30-300 KB)</h4>
              <p class="text-xs text-slate-600 mt-0.5">Upload image, set 300–600 px dimensions, adjust compression quality, preview, and download.</p>
            </div>
            <button
              type="button"
              onclick="window.__openUpesscApTool && window.__openUpesscApTool('photo')"
              class="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all shrink-0 cursor-pointer shadow-xs"
            >
              Open Photo Tool
            </button>
          </div>
          <p class="text-[11px] text-slate-500 italic">Disclaimer: Final acceptance of uploaded files is subject to official UPESSC portal verification. Verify the file before submission.</p>
        </div>
      `
    },
    {
      id: 32,
      title: '32. Working Signature Resizer Tool',
      badge: 'Tool',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Our interactive Signature Resizer formats scanned signatures to exact <strong>140 × 110 pixels</strong> and compresses the file size to <strong>10–200 KB</strong> on white background.</p>
          <div class="p-4 bg-purple-50 border border-purple-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <h4 class="font-bold text-slate-900 text-sm">Launch Signature Resizer (140x110 px)</h4>
              <p class="text-xs text-slate-600 mt-0.5">Upload signature, auto-crop to 140x110 px, compress to 10-200 KB, and download compliant JPG.</p>
            </div>
            <button
              type="button"
              onclick="window.__openUpesscApTool && window.__openUpesscApTool('signature')"
              class="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl transition-all shrink-0 cursor-pointer shadow-xs"
            >
              Open Signature Tool
            </button>
          </div>
          <p class="text-[11px] text-slate-500 italic">Disclaimer: Final acceptance of uploaded files is subject to official UPESSC portal verification. Verify the file before submission.</p>
        </div>
      `
    },
    {
      id: 33,
      title: '33. PDF Size / Document Tool',
      badge: 'Tool',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Guidelines and size verification for PDF certificates (50 KB to 500 KB) mandated under Section 2.14:</p>
          <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <h4 class="font-bold text-slate-900 text-sm">18 Documents Verification Checklist</h4>
              <p class="text-xs text-slate-600 mt-0.5">Track and verify all 18 certificates, affidavits, and UGC compliance letters.</p>
            </div>
            <button
              type="button"
              onclick="window.__openUpesscApTool && window.__openUpesscApTool('documents')"
              class="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shrink-0 cursor-pointer shadow-xs"
            >
              Open Checklist Tool
            </button>
          </div>
        </div>
      `
    },
    {
      id: 34,
      title: '34. Application Form Mistake Checklist',
      badge: 'Checklist',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Avoid the most common errors that lead to automatic rejection by UPESSC:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>Female Caste Certificate Error (Section 8.5):</strong> Caste certificate for female applicants must be issued from the father’s side (पिता पक्ष). Caste certificates mentioning the husband's name will be rejected.</li>
            <li><strong>Incomplete Fee Payment:</strong> Generating an OTR profile without paying the fee and pressing Final Submit by 07.10.2026.</li>
            <li><strong>Photo/Signature Specs:</strong> Signatures not matching 140x110 px or photos exceeding 300 KB.</li>
            <li><strong>Non-English Entries:</strong> Filling registration data in Hindi or other non-English characters.</li>
            <li><strong>Wrong Allied Degree:</strong> Applying without verifying the official inter-related subject mapping.</li>
          </ul>
        </div>
      `
    },
    {
      id: 35,
      title: '35. Written Examination Pattern',
      badge: 'Exam Scheme',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official examination scheme under Section 10(क) (Page 11):</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Component</th>
                  <th class="p-2.5">Question Count</th>
                  <th class="p-2.5">Marks Scheme</th>
                  <th class="p-2.5">Section Total</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-blue-900 bg-blue-50/30">Part A: General Knowledge (सामान्य ज्ञान)</td>
                  <td class="p-2.5 font-mono font-bold">30 Questions</td>
                  <td class="p-2.5">+3 per correct / -1 per wrong</td>
                  <td class="p-2.5 font-mono font-bold text-blue-900">90 Marks</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-indigo-900 bg-indigo-50/30">Part B: Concerned Subject (सम्बन्धित विषय)</td>
                  <td class="p-2.5 font-mono font-bold">90 Questions</td>
                  <td class="p-2.5">+3 per correct / -1 per wrong</td>
                  <td class="p-2.5 font-mono font-bold text-indigo-900">270 Marks</td>
                </tr>
                <tr class="bg-slate-100 font-black text-slate-950">
                  <td class="p-2.5">Total Written Examination</td>
                  <td class="p-2.5 font-mono">120 MCQs</td>
                  <td class="p-2.5">Duration: 2 Hours (120 Mins)</td>
                  <td class="p-2.5 font-mono text-emerald-800">360 Marks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-900">
            <strong>Negative Marking Rule (Minus Marking):</strong> 1 mark (-1) will be deducted for every incorrect response or multiple-bubbled option on the OMR sheet.
          </div>
        </div>
      `
    },
    {
      id: 36,
      title: '36. Subject / Syllabus Information',
      badge: 'Syllabus',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Section 10(ख), the detailed syllabus for General Knowledge and all 42 subjects is available on the Commission's website: <code>www.upessc.up.gov.in/Home/Syllabus_all</code>.</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
            <li><strong>General Knowledge (30 Qs):</strong> Teaching &amp; Research Aptitude, Information &amp; Communication Technology (ICT), People, Development &amp; Environment, Indian History, Indian Geography, Indian Constitution &amp; Economy, Current Affairs.</li>
            <li><strong>Subject Paper (90 Qs):</strong> Advanced postgraduate curriculum aligning with UGC NET / CSIR NET standards in the opted discipline.</li>
          </ul>
        </div>
      `
    },
    {
      id: 37,
      title: '37. Examination Instructions',
      badge: 'Exam Hall',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Important instructions for exam day under Section 11.1 to 11.11:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
            <li>Candidates must bring a <strong>Black Ballpoint Pen</strong> to darken the OMR bubbles. Gel pens, pencils, fountain pens, and whitener (सफेदा) are strictly prohibited (Section 11.5).</li>
            <li>No scratch marks, blade marks, or eraser marks on OMR sheets (Section 11.6).</li>
            <li>Bilingual question papers (Hindi and English), except for language subjects (Hindi, Sanskrit, English, Urdu) which will be printed in their respective languages (Section 9.5).</li>
            <li>No TA/DA will be paid for attending the written test or interview (Section 11.11).</li>
          </ul>
        </div>
      `
    },
    {
      id: 38,
      title: '38. Selection Process',
      badge: 'Selection',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Selection is conducted in two successive stages as defined in Section 10(क):</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3">
            <div class="p-4 bg-blue-50/70 border border-blue-200 rounded-xl">
              <span class="text-xs font-bold text-blue-900 block mb-1">Stage 1: OMR Written Examination</span>
              <span class="text-xl font-black text-blue-950 font-display block">360 Marks</span>
              <p class="text-xs text-blue-800 mt-1">120 MCQs (30 GK + 90 Subject). Objective test with -1 negative marking.</p>
            </div>
            <div class="p-4 bg-purple-50/70 border border-purple-200 rounded-xl">
              <span class="text-xs font-bold text-purple-900 block mb-1">Stage 2: Personal Interview</span>
              <span class="text-xl font-black text-purple-950 font-display block">40 Marks</span>
              <p class="text-xs text-purple-800 mt-1">Viva-voce evaluating domain depth, pedagogical capability, and academic aptitude.</p>
            </div>
          </div>
          <p class="text-xs text-slate-700 font-bold">Total Composite Score: 400 Marks (360 Written + 40 Interview).</p>
          <p class="text-xs text-slate-600">Tie-breaking order: Written Exam Score &gt; Interview Score &gt; Maximum % in Essential Qualification / Ph.D. &amp; JRF &gt; PG Marks &gt; Seniority in Age.</p>
        </div>
      `
    },
    {
      id: 39,
      title: '39. Interview / Viva-Voce',
      badge: 'Interview',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Interview guidelines under Section 13.1 to 13.5:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li>Shortlisted candidates will be notified at least <strong>10 days in advance</strong> via SMS, Email, and the Commission website.</li>
            <li>Attendance in the interview is mandatory (Section 13.3).</li>
            <li>All candidates must submit an affidavit on the format prescribed in <strong>Parishisht-6</strong> on the date of the interview (Section 13.4).</li>
          </ul>
        </div>
      `
    },
    {
      id: 40,
      title: '40. Document Verification',
      badge: 'Verification',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Document verification takes place on the day of the interview at the UPESSC Commission office (23 Elan Ganj, Prayagraj):</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
            <li>Candidates must bring <strong>two separate self-attested sets</strong> of all 18 specified certificates and marks sheets along with all original credentials.</li>
            <li>Failure to produce original documents during verification will result in immediate disqualification.</li>
          </ul>
        </div>
      `
    },
    {
      id: 41,
      title: '41. Final Selection / Merit',
      badge: 'Merit List',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The final merit list is compiled on an aggregate of <strong>400 Marks</strong> (360 Written + 40 Interview):</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
            <li>Recommendation letters will be issued by UPESSC according to category and subject ranking.</li>
            <li>College preference and institution allotment is performed by the Director of Higher Education, UP, Prayagraj, based on candidate preference and merit rank (Section 12).</li>
          </ul>
        </div>
      `
    },
    {
      id: 42,
      title: '42. Important Preparation Points',
      badge: 'Strategy',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Crucial exam preparation strategy recommendations:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
            <li><strong>GK Paper Mastery (30 Qs):</strong> Focus on Indian polity, ICT, teaching aptitude, and UP specific current developments.</li>
            <li><strong>Subject Depth (90 Qs):</strong> Solve previous Advt 46, 47, 50, and 51 papers alongside standard UGC NET question banks.</li>
            <li><strong>Time Management:</strong> 120 questions in 120 minutes allows 1 minute per question. Exercise caution to avoid the -1 negative marking penalty.</li>
          </ul>
        </div>
      `
    },
    {
      id: 43,
      title: '43. Important Dates Timeline',
      badge: 'Timeline',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Chronological recruitment progression:</p>
          <div class="border-l-2 border-blue-400 pl-4 space-y-3 my-3">
            <div>
              <span class="text-xs font-bold text-blue-700">08 September 2026</span>
              <p class="text-xs font-semibold text-slate-900">Advertisement 04/2026 Released &amp; OTR Registration Opens</p>
            </div>
            <div>
              <span class="text-xs font-bold text-red-600">07 October 2026</span>
              <p class="text-xs font-semibold text-slate-900">Online Application &amp; Examination Fee Deadline</p>
            </div>
            <div>
              <span class="text-xs font-bold text-purple-700">11 October 2026</span>
              <p class="text-xs font-semibold text-slate-900">Online Application Form Correction Window Closes</p>
            </div>
            <div>
              <span class="text-xs font-bold text-emerald-800">19 &amp; 20 November 2026</span>
              <p class="text-xs font-semibold text-slate-900">OMR Written Examination (120 MCQs / 360 Marks)</p>
            </div>
            <div>
              <span class="text-xs font-bold text-slate-600">To Be Updated</span>
              <p class="text-xs font-semibold text-slate-900">Interview Viva-Voce (40 Marks) &amp; Final Merit List</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 44,
      title: '44. Recruitment Process Flowchart',
      badge: 'Flowchart',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Comprehensive recruitment workflow:</p>
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
            <div class="font-mono text-slate-800">
              [OTR Registration on Portal] ➜ [Online Application &amp; Fee by 07.10.2026] ➜ [Admit Card Download] ➜ [Written Exam: 120 MCQs / 360 Marks on 19-20 Nov 2026] ➜ [Provisional Key &amp; Result] ➜ [Interview Shortlisting (1:3 or 1:4)] ➜ [Interview (40 Marks) + DV at Prayagraj] ➜ [Final Merit out of 400 Marks] ➜ [College Allotment by Higher Education Directorate]
            </div>
          </div>
        </div>
      `
    },
    {
      id: 45,
      title: '45. Application Process Flowchart',
      badge: 'Flowchart',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Online application navigation sequence:</p>
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
            <div class="font-mono text-slate-800">
              Visit apply.upessc.org ➔ Click OTR Registration ➔ Verify Mobile &amp; Email ➔ Fill Academic Credentials ➔ Upload Photo (30-300KB) &amp; Signature (140x110px) ➔ Select Subject &amp; College Stream ➔ Pay Fee (₹2000/₹1500/₹1000) ➔ Final Submit ➔ Download &amp; Print 3 Copies.
            </div>
          </div>
        </div>
      `
    },
    {
      id: 46,
      title: '46. Eligibility Checker',
      badge: 'Checker',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Check if you fulfill all four mandatory criteria for Advt 04/2026:</p>
          <div class="space-y-2 text-xs">
            <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <strong>1. Master's Degree:</strong> At least 55% marks (50% for SC/ST/OBC-NCL/PwD) in concerned or recognized allied subject.
            </div>
            <div class="p-3 bg-purple-50 border border-purple-200 rounded-xl">
              <strong>2. Testing or Ph.D.:</strong> UGC NET, CSIR NET, UP SLET/SET, or Ph.D. under UGC 2009/2016 regulations.
            </div>
            <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
              <strong>3. Age Limit:</strong> Born on or after 02 July 1964 (Maximum 62 years on 01.07.2026).
            </div>
            <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl">
              <strong>4. Nationality &amp; Domicile:</strong> Indian citizen. UP domicile required for category reservation.
            </div>
          </div>
        </div>
      `
    },
    {
      id: 47,
      title: '47. Age Eligibility Checker',
      badge: 'Age Tool',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Verify your exact age against the statutory cut-off date (<strong>01 July 2026</strong>):</p>
          <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <h4 class="font-bold text-slate-900 text-sm">Launch Age Checker (Cut-Off 01.07.2026)</h4>
              <p class="text-xs text-slate-600 mt-0.5">Input your date of birth to calculate exact Years, Months, and Days and verify superannuation limit (Max 62 Years).</p>
            </div>
            <button
              type="button"
              onclick="window.__openUpesscApTool && window.__openUpesscApTool('age')"
              class="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shrink-0 cursor-pointer shadow-xs"
            >
              Open Age Tool
            </button>
          </div>
        </div>
      `
    },
    {
      id: 48,
      title: '48. Frequently Asked Questions',
      badge: 'FAQ',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Answers to common candidate queries based on Advertisement 04/2026:</p>
          <div class="space-y-2.5">
            <details class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <summary class="font-bold text-slate-900 cursor-pointer">What is the application deadline for UPESSC Assistant Professor 2026?</summary>
              <p class="mt-1.5 text-xs text-slate-600">The last date for online application fee and final submission is 07 October 2026. Corrections are allowed until 11 October 2026.</p>
            </details>
            <details class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <summary class="font-bold text-slate-900 cursor-pointer">What are the confirmed written examination dates?</summary>
              <p class="mt-1.5 text-xs text-slate-600">The written test will be conducted on 19 and 20 November 2026 across designated centers in Uttar Pradesh.</p>
            </details>
            <details class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <summary class="font-bold text-slate-900 cursor-pointer">Is there negative marking in the UPESSC Assistant Professor exam?</summary>
              <p class="mt-1.5 text-xs text-slate-600">Yes. Section 10(क) specifies that 1 mark (-1) will be deducted for every incorrect response or multiple-bubbled question. Correct answers carry +3 marks.</p>
            </details>
            <details class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <summary class="font-bold text-slate-900 cursor-pointer">What is the maximum age limit?</summary>
              <p class="mt-1.5 text-xs text-slate-600">The maximum superannuation age is 62 years calculated as on 01 July 2026. Minimum age is not specified.</p>
            </details>
            <details class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <summary class="font-bold text-slate-900 cursor-pointer">Can candidates from other states claim reservation benefits?</summary>
              <p class="mt-1.5 text-xs text-slate-600">No. Under Section 8.3, reservation benefits (SC/ST/OBC/EWS) apply strictly to UP permanent residents. Candidates from other states are treated as Unreserved (General).</p>
            </details>
          </div>
        </div>
      `
    },
    {
      id: 49,
      title: '49. Important Official Links',
      badge: 'Official Links',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official portal links for UPESSC Assistant Professor Recruitment 2026:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-amber-300 rounded-xl overflow-hidden bg-amber-50/40">
              <thead class="bg-amber-100/80 text-amber-950 font-bold border-b border-amber-200">
                <tr>
                  <th class="p-3">Official Service / Resource</th>
                  <th class="p-3">Verified Official URL</th>
                  <th class="p-3">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-amber-200 text-slate-900">
                <tr>
                  <td class="p-3 font-bold text-blue-900">Apply Online (OTR &amp; Application Form)</td>
                  <td class="p-3 font-mono text-[11px] text-slate-600">https://apply.upessc.org/</td>
                  <td class="p-3">
                    <a href="https://apply.upessc.org/" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs inline-flex items-center gap-1">
                      <span>Apply Online</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="p-3 font-bold text-slate-900">Official Notification (Advt. 04/2026 PDF)</td>
                  <td class="p-3 font-mono text-[11px] text-slate-600">https://www.upessc.up.gov.in/Notice/51a0-7a2c-4bdd-884b-4ae7.pdf</td>
                  <td class="p-3">
                    <a href="https://www.upessc.up.gov.in/Notice/51a0-7a2c-4bdd-884b-4ae7.pdf" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-lg text-xs inline-flex items-center gap-1">
                      <span>Download PDF</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="p-3 font-bold text-indigo-900">Syllabus &amp; Exam Pattern (All 42 Subjects)</td>
                  <td class="p-3 font-mono text-[11px] text-slate-600">https://www.upessc.up.gov.in/Home/Syllabus_all</td>
                  <td class="p-3">
                    <a href="https://www.upessc.up.gov.in/Home/Syllabus_all" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg text-xs inline-flex items-center gap-1">
                      <span>View Syllabus</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="p-3 font-bold text-slate-900">UPESSC Official Commission Website</td>
                  <td class="p-3 font-mono text-[11px] text-slate-600">https://upessc.up.gov.in/</td>
                  <td class="p-3">
                    <a href="https://upessc.up.gov.in/" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold rounded-lg text-xs inline-flex items-center gap-1">
                      <span>Official Portal</span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 50,
      title: '50. Final Quick Summary',
      badge: 'Fast Facts',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Key highlights of UPESSC Assistant Professor Selection Examination 2026 (Advt. No. 04/2026):</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-xs">
              <span class="font-bold text-slate-900 block">Summary Fast Facts</span>
              <p>• Posts: 1,936 Vacancies across 42 Disciplines (Co-Ed: 1,564 | Women: 372).</p>
              <p>• Pay Scale: Academic Level-10 (₹57,700 – ₹1,82,400).</p>
              <p>• Deadlines: Apply &amp; Fee by 07.10.2026; Corrections by 11.10.2026.</p>
              <p>• Written Exam: 19 &amp; 20 November 2026 (120 MCQs, 360 Marks, -1 Penalty).</p>
              <p>• Interview: 40 Marks (Composite Merit out of 400 Marks).</p>
            </div>
            <div class="p-3.5 bg-blue-50/50 border border-blue-200 rounded-xl space-y-1 text-xs">
              <span class="font-bold text-blue-900 block">Commission Support Contacts</span>
              <p>• Technical Support: <strong>08448573939</strong> (support@upessc.org)</p>
              <p>• ICICI Payment Support: <strong>8879370946, 8657723283</strong></p>
              <p>• Union Bank Support: <strong>9137551970</strong> (pgsupport@billdesk.com)</p>
              <p>• UPESSC Office (Prayagraj): <strong>0532-2466851</strong></p>
            </div>
          </div>
        </div>
      `
    }
  ];
}

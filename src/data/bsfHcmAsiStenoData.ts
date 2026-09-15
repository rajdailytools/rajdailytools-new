import { ExamRecord, ExamInfoSection } from '../types/exam';

export const BSF_HCM_ASI_STENO_2026_EXAM: ExamRecord = {
  id: 'bsf-hcm-asi-steno-2026',
  slug: 'bsf-hcm-asi-steno-answer-key-2026',
  examName: 'BSF HCM & ASI Steno Answer Key 2026',
  shortName: 'BSF HCM & ASI Steno',
  organization: 'Border Security Force (BSF) & Central Armed Police Forces (CAPFs)',
  category: 'Defence',
  postName: 'Head Constable (Ministerial/Combatant Ministerial) & ASI (Stenographer/Combatant Stenographer)',
  totalVacancy: '1,526',
  logoIcon: '🛡️',
  logoBg: '#eff6ff',
  status: 'ANSWER_KEY_RELEASED',
  state: 'All India',
  gender: 'All',
  ageMin: 18,
  ageMax: 25,
  ageRelaxationInfo: 'SC/ST: +5 Years (up to 30), OBC: +3 Years (up to 28), Central Govt Servants: up to 40 years (Gen/OBC) & 45 years (SC/ST), Ex-Servicemen: 3 years deduction.',
  education: ['12th', 'Other'],
  minimumQualificationLevel: 'Intermediate / Senior Secondary School Certificate (10+2)',
  acceptedQualificationLevels: ['12th', 'Intermediate', 'Equivalent Diploma'],
  applicationStartDate: '2024-06-09',
  applicationLastDate: '2024-07-08',
  admitCardDate: '2026-08-19',
  examDate: '2026-09-01',
  answerKeyDate: '2026-09-10',
  resultDate: undefined, // "Not Released / To Be Updated"
  cutOffDate: undefined,
  admitCardLink: 'https://cdn.digialm.com//EForms/configuredHtml/1258/102021/login.html',
  answerKeyLink: 'https://www.digialm.com/EForms/configuredHtml/1258/102021/login.html',
  responseSheetLink: 'https://www.digialm.com/EForms/configuredHtml/1258/102021/login.html',
  officialNotification: 'https://d3t79nicn48uzj.cloudfront.net/bsf/custom/1788950396.pdf',
  resultPdfLink: 'https://d3t79nicn48uzj.cloudfront.net/bsf/custom/1756724609.pdf',
  applyLink: 'https://rectt.bsf.gov.in/',
  officialWebsite: 'https://www.bsf.gov.in/',
  salary: {
    payScale: 'ASI (Steno): Level 5 (₹29,200 – ₹92,300) | HC (Min): Level 4 (₹25,500 – ₹81,100)',
    inHand: '₹38,000 – ₹48,000 Approx. (Including DA, HRA, Transport & Allowances)',
    allowances: 'DA, HRA, Ration Money Allowance, Transport Allowance, Dress Allowance, Free Medical Facilities & NPS'
  },
  importantDates: [
    { label: 'Online Application Start Date', date: '09 June 2024' },
    { label: 'Online Application Last Date', date: '08 July 2024' },
    { label: 'Phase 1 PST & PET Result Notice', date: 'Declared (Check Official PDF)', isHighlight: true },
    { label: 'CBT Written Exam Admit Card Released', date: '19 August 2026' },
    { label: 'CBT Online Written Examination Dates', date: '01 to 03 September 2026', isHighlight: true },
    { label: 'Provisional Answer Key & Response Sheet Released', date: '10 September 2026', isHighlight: true },
    { label: 'Online Objection / Challenge Window', date: 'Active on Digialm Portal', isHighlight: true },
    { label: 'Final Answer Key & CBT Result Declaration', date: 'Not Released / To Be Updated' },
    { label: 'Phase 3 Skill Test (Typing / Steno) & DME/RME', date: 'To Be Announced' }
  ],
  applicationFee: [
    { category: 'Unreserved (UR) / OBC / EWS Male Candidates', amount: '₹100/- + Applicable Service Charges' },
    { category: 'Women Candidates (All Categories)', amount: 'Exempted (₹0/-)' },
    { category: 'Scheduled Castes (SC) Candidates', amount: 'Exempted (₹0/-)' },
    { category: 'Scheduled Tribes (ST) Candidates', amount: 'Exempted (₹0/-)' },
    { category: 'Ex-Servicemen (ESM)', amount: 'Exempted (₹0/-)' }
  ],
  vacancies: [
    { category: 'Assistant Sub Inspector (Stenographer) – All CAPFs', postCount: 243 },
    { category: 'Head Constable (Ministerial) / Havildar (Clerk) – All CAPFs & AR', postCount: 1283 }
  ],
  selectionProcess: [
    'Phase 1: Physical Standard Test (PST) & Physical Efficiency Test (PET) [Qualifying Only - Result Declared]',
    'Phase 2: Computer Based Online Written Examination (CBT - 100 Questions, 100 Marks, 100 Minutes, No Negative Marking) [Conducted 01–03 Sept 2026]',
    'Phase 2 Answer Key & Response Sheet Release: Released on 10 September 2026 with Online Objection Management',
    'Phase 3: Skill Test on Computer (Typing for HC Min @ 35 wpm Eng / 30 wpm Hindi; Shorthand for ASI Steno @ 80 wpm) [Qualifying Only]',
    'Phase 4: Document Verification (DV) – Scrutiny of Original Academic, Caste, Age & Service Certificates',
    'Phase 5: Detailed Medical Examination (DME) & Review Medical Examination (RME)',
    'Phase 6: Final Merit List Declaration – Prepared strictly on merit-cum-performance in CBT subject to qualifying Skill Test, DV & DME'
  ],
  examPattern: [
    {
      stageName: 'Phase 2: Computer Based Test (CBT)',
      mode: 'Online Computer Based Test (Bilingual: Hindi & English)',
      duration: '1 Hour 40 Minutes (100 Minutes)',
      negativeMarking: 'No Negative Marking (0 Marks Deducted for Wrong Answers)',
      subjects: [
        { name: 'Part A: Hindi / English Language (Optional)', questions: 20, marks: 20 },
        { name: 'Part B: General Intelligence', questions: 20, marks: 20 },
        { name: 'Part C: Numerical Aptitude', questions: 20, marks: 20 },
        { name: 'Part D: Clerical Aptitude', questions: 20, marks: 20 },
        { name: 'Part E: Computer Knowledge', questions: 20, marks: 20 }
      ]
    },
    {
      stageName: 'Phase 3: Skill Test (Typing / Stenography)',
      mode: 'On Computer / Typing Keyboard at Designated Exam Centres',
      duration: '10 Minutes',
      negativeMarking: 'Up to 5% Mistakes Permissible (Beyond 5% deducted from typed words)',
      subjects: [
        { name: 'HC (Min) English Typing @ 35 wpm OR Hindi Typing @ 30 wpm in Mangal Font', questions: 1, marks: 0 },
        { name: 'ASI (Steno) Dictation 10 mins @ 80 wpm + Transcription (50 mins Eng / 65 mins Hindi)', questions: 1, marks: 0 }
      ]
    }
  ],
  allInformation: generateBsfHcmAsiSteno50Sections()
};

export function generateBsfHcmAsiSteno50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: 'BSF HCM & ASI Steno Answer Key 2026 – Official Release Highlights',
      content: `The Border Security Force (BSF) as the designated Nodal Force has officially released the Computer Based Test (CBT) Provisional Answer Key and Candidate Response Sheet on 10 September 2026 for the recruitment of 1,526 posts of Assistant Sub Inspector (Stenographer/Combatant Stenographer) and Head Constable (Ministerial/Combatant Ministerial) across Central Armed Police Forces (BSF, CRPF, ITBP, CISF, SSB) and Assam Rifles (Havildar Clerk and Warrant Officer Personal Assistant). Candidates who appeared in the online examination held between 01 and 03 September 2026 can log in to the official TCS iON Digialm portal using their Roll Number and Password to access their recorded responses along with provisional answer keys.`
    },
    {
      id: 2,
      title: 'Direct Official Links & Examination Portals Directory',
      content: `<div class="overflow-x-auto my-2">
        <table class="w-full text-xs sm:text-sm border border-slate-200 divide-y divide-slate-200">
          <thead class="bg-slate-100 text-slate-700 font-bold">
            <tr>
              <th class="p-2.5 text-left">Service / Document</th>
              <th class="p-2.5 text-left">Official Link</th>
              <th class="p-2.5 text-left">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr>
              <td class="p-2.5 font-bold text-slate-800">CBT Answer Key & Response Sheet Login</td>
              <td class="p-2.5"><a href="https://www.digialm.com/EForms/configuredHtml/1258/102021/login.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold hover:underline">Download Answer Key</a></td>
              <td class="p-2.5"><span class="px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">Released (10-09-2026)</span></td>
            </tr>
            <tr>
              <td class="p-2.5 font-bold text-slate-800">Official Answer Key Notice PDF</td>
              <td class="p-2.5"><a href="https://d3t79nicn48uzj.cloudfront.net/bsf/custom/1788950396.pdf" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold hover:underline">View Notice PDF</a></td>
              <td class="p-2.5"><span class="px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-800">Official Notice</span></td>
            </tr>
            <tr>
              <td class="p-2.5 font-bold text-slate-800">CBT Admit Card Download Portal</td>
              <td class="p-2.5"><a href="https://cdn.digialm.com//EForms/configuredHtml/1258/102021/login.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold hover:underline">Download Admit Card</a></td>
              <td class="p-2.5"><span class="px-2 py-0.5 rounded text-xs font-bold bg-slate-100 text-slate-800">Released 19-08-2026</span></td>
            </tr>
            <tr>
              <td class="p-2.5 font-bold text-slate-800">Phase 1 (PST & PET) Result Notice</td>
              <td class="p-2.5"><a href="https://d3t79nicn48uzj.cloudfront.net/bsf/custom/1756724609.pdf" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold hover:underline">View PST/PET Result PDF</a></td>
              <td class="p-2.5"><span class="px-2 py-0.5 rounded text-xs font-bold bg-purple-100 text-purple-800">Result Declared</span></td>
            </tr>
            <tr>
              <td class="p-2.5 font-bold text-slate-800">BSF Recruitment Portal</td>
              <td class="p-2.5"><a href="https://rectt.bsf.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold hover:underline">rectt.bsf.gov.in</a></td>
              <td class="p-2.5"><span class="px-2 py-0.5 rounded text-xs font-bold bg-slate-100 text-slate-800">Official Portal</span></td>
            </tr>
            <tr>
              <td class="p-2.5 font-bold text-slate-800">BSF Main Official Website</td>
              <td class="p-2.5"><a href="https://www.bsf.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold hover:underline">bsf.gov.in</a></td>
              <td class="p-2.5"><span class="px-2 py-0.5 rounded text-xs font-bold bg-slate-100 text-slate-800">Headquarters</span></td>
            </tr>
          </tbody>
        </table>
      </div>`
    },
    {
      id: 3,
      title: 'Important Dates Tracker & Examination Milestones',
      content: `Here is the comprehensive chronological timeline of all key events for BSF HCM & ASI Steno 2026:
• Online Application Window: 09.06.2024 to 08.07.2024
• Phase 1 PST & PET Conducted: Completed in designated centres across India
• Phase 1 PST & PET Result Declared: Available on official portal via PDF notice
• Phase 2 CBT Admit Card Released: 19 August 2026
• Phase 2 Computer Based Online Test (CBT): 01 to 03 September 2026
• Provisional Answer Key & Response Sheet Released: 10 September 2026
• Online Objection Management Window: Active from 10 September 2026 onwards as per official notification
• Final Answer Key & CBT Result: Not Released / To Be Updated
• Phase 3 Skill Test (Typing & Steno), DV & DME: Dates to be notified after CBT result.`
    },
    {
      id: 4,
      title: 'Lifecycle Flowchart: Answer Key to Final Appointment',
      content: `The recruitment evaluation lifecycle progresses strictly through standard stages:
1. CBT Written Exam Conducted (01–03 September 2026)
2. Provisional Answer Key & Response Sheet Uploaded (10 September 2026)
3. Online Objection Management Window (Candidates submit challenges with supporting proof)
4. Scrutiny of Challenges by Subject Matter Expert Committee
5. Formulation & Publication of Final Master Answer Key
6. Multi-Shift Score Normalization Process Applied
7. CBT Written Exam Result & Cut-off Marks Published (Not Released / To Be Updated)
8. Shortlisting of Candidates: 10x for HC (Min) & 30x for ASI (Steno)
9. Phase 3 Skill Test (Typing Test for HC Min / Shorthand Test for ASI Steno)
10. Document Verification (DV) & Detailed Medical Examination (DME/RME)
11. Final Merit List compiled by BSF based on CBT normalized scores.`
    },
    {
      id: 5,
      title: 'Step-by-Step Procedure to Download BSF Response Sheet & Answer Key',
      content: `Follow these 7 official steps to view and download your question paper, recorded responses, and provisional answer key:
1. Visit the official Digialm login link: https://www.digialm.com/EForms/configuredHtml/1258/102021/login.html
2. On the Candidate Login interface, enter your Roll Number / User ID as printed on your CBT Admit Card.
3. Enter your Password (usually your Date of Birth in DDMMYYYY format or as registered).
4. Enter the visual CAPTCHA verification code displayed on screen and click 'Login'.
5. In the candidate dashboard, click on the tab titled 'Candidate Response' or 'Question Paper & Answer Key'.
6. Click on the link provided to generate and view your question paper with marked answers and correct answer keys.
7. Click 'Print' or 'Save as PDF' to safely store the complete question-by-question response sheet for raw mark verification and objection reference.`
    },
    {
      id: 6,
      title: 'Candidate Login Credentials Verification on Digialm Portal',
      content: `Candidates logging into the Digialm portal must keep the following points in mind:
• User ID / Roll Number: Use the exact Roll Number printed on your Phase 2 CBT Admit Card.
• Password: Enter your designated password (DOB in DDMMYYYY or password sent to registered mobile/email during admit card issuance).
• If you have misplaced your password, utilize the 'Forgot Password' link available on the login page by inputting your User ID and registered email address.
• Use an updated desktop browser (Google Chrome, Mozilla Firefox, or Microsoft Edge) with pop-ups allowed for optimal PDF rendering.`
    },
    {
      id: 7,
      title: 'Online Objection & Challenge Submission Procedure',
      content: `Candidates finding discrepancies in any question or provisional answer key option must submit objections strictly online:
1. Log in to the Digialm portal using your credentials during the active objection window.
2. Click on the 'Objection Form' or 'Objection Management' tab on your dashboard.
3. Click 'Add New Objection' / 'Click here to raise objection'.
4. Select the Question Number you wish to challenge from the dropdown. The official Question ID and marked answer will auto-populate.
5. Select the nature of objection (e.g., Incorrect Answer Key, Ambiguous Question, Multiple Correct Answers, All Options Incorrect).
6. Upload supporting authentic reference documents/evidence (textbook reference, standard government authority publications) in PDF/JPG format.
7. Confirm details and submit the representation. Note down the Objection Reference ID for future tracking.`
    },
    {
      id: 8,
      title: 'Official Objection Rules & Committee Scrutiny Guidelines',
      content: `As explicitly stipulated in Para 15.1.7 and 15.1.8 of the official recruitment notification:
• The Objection Management Link is hosted on the BSF website / portal after CBT conduct to invite representations.
• Representations regarding answer keys received through online mode only within the prescribed time limit will be scrutinized before finalizing the answer keys.
• Any representation received through offline mode, letter, speed post, or email, or received after the expiry of the stipulated window, will NOT be entertained under any circumstances.
• The decision of the organization / expert committee regarding answer keys shall be final and binding. No correspondence regarding answer keys shall be entertained later.`
    },
    {
      id: 9,
      title: 'Expected Score Calculation Guide & Official Marking Scheme',
      content: `Calculate your raw marks using the official BSF CBT marking scheme:
• Total Questions: 100 Multiple Choice Questions (MCQs)
• Total Marks: 100 Marks
• Marks per Correct Answer: +1 Mark
• Negative Marking: NO NEGATIVE MARKING (0 Marks deducted for incorrect answers)
• Unattempted Questions: 0 Marks

Formula for Raw Score:
Raw Score = Total Number of Correct Answers × 1.00

Example Calculation:
• Correct Responses: 78 -> 78 × 1 = 78 Marks
• Incorrect Responses: 16 -> 16 × 0 = 0 Deductions
• Unattempted Questions: 6 -> 0 Marks
• Total Raw Score = 78 / 100 Marks`
    },
    {
      id: 10,
      title: 'Interactive Score Calculator Overview & Verification Formula',
      content: `Our embedded BSF HCM & ASI Steno CBT Score Calculator allows you to quickly determine your exact raw score:
• Enter the number of correct responses out of 100 questions.
• Enter the number of incorrect responses (which will have zero penalty as per official BSF notification).
• View your calculated raw score, qualifying status against category benchmarks (45% for UR/EWS/OBC; 40% for SC/ST), and comparative percentile estimate.`
    },
    {
      id: 11,
      title: 'CBT Exam Schedule & Multi-Shift Timings (01–03 September 2026)',
      content: `The Computer Based Test for BSF Head Constable (Ministerial) and Assistant Sub Inspector (Stenographer) was conducted across designated examination centres all over India from 01 to 03 September 2026:
• Exam Dates: 01 September 2026, 02 September 2026, and 03 September 2026
• Mode: Online CBT in controlled test laboratories with biometric thumb impression and live photo capture
• Shifts: Multiple morning and afternoon shifts conducted each day
• Test Duration: 1 Hour 40 Minutes (100 Minutes) without section-wise time limits
• Examination Centres: Setup across all major states and Union Territories.`
    },
    {
      id: 12,
      title: 'BSF HCM & ASI Steno CBT Question Paper Analysis & Difficulty Level',
      content: `Feedback from candidates who appeared across shifts from 01 to 03 September 2026 indicates:
• Overall Difficulty: Easy to Moderate
• Hindi / English Language: Easy to Moderate (Grammar, vocabulary, comprehension, error spotting)
• General Intelligence: Moderate (Analogies, coding-decoding, series, paper folding, venn diagrams)
• Numerical Aptitude: Moderate (Arithmetic dominant: percentage, ratio, profit & loss, time & work, simplification)
• Clerical Aptitude: Easy (Alphabetical filing, address matching, clerical comparisons, data checking)
• Computer Knowledge: Easy to Moderate (MS Word, MS Excel, shortcuts, basic networking, operating systems)`
    },
    {
      id: 13,
      title: 'CBT Scheme of Examination & Structure Breakdown',
      content: `<div class="overflow-x-auto my-2">
        <table class="w-full text-xs sm:text-sm border border-slate-200 divide-y divide-slate-200">
          <thead class="bg-slate-100 text-slate-700 font-bold">
            <tr>
              <th class="p-2.5 text-left">Part</th>
              <th class="p-2.5 text-left">Subject / Section</th>
              <th class="p-2.5 text-center">Questions</th>
              <th class="p-2.5 text-center">Max Marks</th>
              <th class="p-2.5 text-left">Duration</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr>
              <td class="p-2.5 font-bold">Part A</td>
              <td class="p-2.5">Hindi OR English Language (Optional)</td>
              <td class="p-2.5 text-center">20</td>
              <td class="p-2.5 text-center font-bold">20</td>
              <td class="p-2.5" rowspan="5">Composite 1 Hour 40 Minutes (100 Minutes)</td>
            </tr>
            <tr>
              <td class="p-2.5 font-bold">Part B</td>
              <td class="p-2.5">General Intelligence</td>
              <td class="p-2.5 text-center">20</td>
              <td class="p-2.5 text-center font-bold">20</td>
            </tr>
            <tr>
              <td class="p-2.5 font-bold">Part C</td>
              <td class="p-2.5">Numerical Aptitude</td>
              <td class="p-2.5 text-center">20</td>
              <td class="p-2.5 text-center font-bold">20</td>
            </tr>
            <tr>
              <td class="p-2.5 font-bold">Part D</td>
              <td class="p-2.5">Clerical Aptitude</td>
              <td class="p-2.5 text-center">20</td>
              <td class="p-2.5 text-center font-bold">20</td>
            </tr>
            <tr>
              <td class="p-2.5 font-bold">Part E</td>
              <td class="p-2.5">Computer Knowledge</td>
              <td class="p-2.5 text-center">20</td>
              <td class="p-2.5 text-center font-bold">20</td>
            </tr>
            <tr class="bg-slate-50 font-bold">
              <td class="p-2.5" colspan="2">Total</td>
              <td class="p-2.5 text-center text-blue-700">100</td>
              <td class="p-2.5 text-center text-blue-700">100</td>
              <td class="p-2.5 text-emerald-700">100 Minutes (No Sectional Timer)</td>
            </tr>
          </tbody>
        </table>
      </div>`
    },
    {
      id: 14,
      title: 'Part A: English & Hindi Language Syllabus Details',
      content: `Candidates had the choice to attempt either English or Hindi:
• For English Language: Spot the error, fill in the blanks, synonyms/homonyms, antonyms, spellings/detecting miss-spelt words, idioms & phrases, one word substitution, improvement of sentences, active/passive voice, direct/indirect narration, shuffling of sentence parts, shuffling of sentences in a passage, cloze passage, comprehension passage.
• For Hindi Language: हिंदी भाषा की सामान्य जानकारी, हिंदी वर्णमाला, तद्भव-तत्सम, पर्यायवाची, विलोम शब्द, अनेकार्थक, वाक्यांशों के लिए एक शब्द, समरूपी भिन्नार्थक शब्द, अशुद्ध वाक्यों को शुद्ध करना, लिंग, वचन, कारक, सर्वनाम, विशेषण, क्रिया, काल, वाच्य, अव्यय, उपसर्ग, प्रत्यय, सन्धि, समास, विराम चिन्ह, मुहावरे एवं लोकोक्तियां, रस, छंद, अलंकार, अपठित बोध, प्रसिद्ध कवि एवं लेखक तथा उनकी रचनाएं, हिंदी भाषा में पुरस्कार।`
    },
    {
      id: 15,
      title: 'Part B: General Intelligence Syllabus Details',
      content: `Questions of both verbal and non-verbal type:
• Semantic Analogy, Symbolic/Number Analogy, Figural Analogy
• Semantic Classification, Symbolic/Number Classification, Figural Classification
• Semantic Series, Number Series, Figural Series, Problem Solving
• Word Building, Coding and De-coding, Numerical Operations, Symbolic Operations
• Trends, Space Orientation, Space Visualization, Venn Diagrams
• Drawing Inferences, Punched hole/pattern-folding & unfolding
• Figural Pattern-folding and completion, Embedded figures, Critical Thinking, Emotional Intelligence, Social Intelligence.`
    },
    {
      id: 16,
      title: 'Part C: Numerical Aptitude Syllabus Details',
      content: `Focuses on arithmetic and practical mathematical problem solving:
• Number System: Computation of whole numbers, decimals, fractions, relationship between numbers.
• Fundamental Arithmetical Operations: Percentages, Ratio & Proportion, Square roots, Averages, Interest (Simple and Compound), Profit and Loss, Discount, Partnership Business, Mixture and Alligation, Time and Distance, Time & Work.
• Mensuration, Basic Algebraic Identities, Elementary surds, Graphs of Linear Equations, Triangle and its various kinds of centres, Congruence and similarity of triangles, Circle and its chords, tangents, angles subtended by chords.
• Trigonometric ratios, Degree and Radian measures, Standard Identities, Heights and Distances, Histogram, Frequency polygon, Bar-diagram, Pie-chart.`
    },
    {
      id: 17,
      title: 'Part D: Clerical Aptitude Syllabus Details',
      content: `Assesses clerical perception, speed, precision, and accuracy:
• Alphabetic filing and indexing methods
• Attention to detail and error spotting in text and numbers
• Data checking, name and address verification
• Comparison ability (matching original and copy addresses/codes)
• Spelling checking and grammatical error detection in official records
• Office sorting, coding, and miscellaneous clerical procedures.`
    },
    {
      id: 18,
      title: 'Part E: Computer Knowledge Syllabus Details',
      content: `Evaluates fundamental computer literacy required for office automation:
• Basic computer fundamentals, history and generations of computers
• Operating systems (basics of Windows, file management, directory structure)
• Computer abbreviations and terminology
• Microsoft Office Suite: MS Word (formatting, tables, mail merge), MS Excel (spreadsheets, basic formulas, cell addressing), MS PowerPoint
• Standard keyboard short keys and shortcuts
• Computer communication, local area networks, Internet, web browsers, search engines, email basics.`
    },
    {
      id: 19,
      title: 'CBT Normalization Formula & Methodology',
      content: `Because the examination was conducted in multiple shifts from 01 to 03 September 2026 using different sets of question papers:
• As explicitly stated in Para 15.1.3 and 20.3 of the official rulebook: Marks scored by candidates in Computer Based Test (CBT) will be normalized and such normalized scores will be used to determine final merit and cut off marks.
• Normalization balances variations in the relative difficulty levels of question papers across shifts.
• Normalized score (not raw score) is the official qualifying parameter for Phase 3 shortlisting.`
    },
    {
      id: 20,
      title: 'CBT Minimum Qualifying Marks Benchmark',
      content: `As per Para 20.2 of the official notification, candidates must achieve the minimum prescribed benchmark in the CBT to be considered for Phase 3:
• Unreserved (UR): 45% (Minimum 45 Marks out of 100)
• Economically Weaker Sections (EWS): 45% (Minimum 45 Marks out of 100)
• Other Backward Classes (OBC): 45% (Minimum 45 Marks out of 100)
• Scheduled Castes (SC): 40% (Minimum 40 Marks out of 100)
• Scheduled Tribes (ST): 40% (Minimum 40 Marks out of 100)
Note: Achieving minimum qualifying marks does not guarantee a call for Phase 3; candidates must rank within the merit-based shortlisting ratio.`
    },
    {
      id: 21,
      title: 'Shortlisting Ratio for Phase 3 (Skill Test, DV & DME)',
      content: `According to Para 15.1.12 of the official advertisement:
• For Assistant Sub Inspector (Stenographer / Combatant Steno): The number of candidates qualified in Computer Based Test (CBT) will be restricted to THIRTY (30) times the number of vacancies.
• For Head Constable (Ministerial / Havildar Clerk): The number of candidates qualified in Computer Based Test (CBT) will be restricted to TEN (10) times the number of vacancies.
• Shortlisted candidates will be invited for the Phase 3 Skill Test, Document Verification, and Detailed Medical Examination.`
    },
    {
      id: 22,
      title: 'Total Vacancies Summary: Force-Wise & Post-Wise (1,526 Total Posts)',
      content: `The recruitment drives a combined grand total of 1,526 vacancies across Central Armed Police Forces (CAPFs) and Assam Rifles:
• Assistant Sub Inspector (Stenographer) / Warrant Officer (PA): 243 Posts
• Head Constable (Ministerial) / Havildar (Clerk): 1,283 Posts
• Combined Total: 1,526 Posts
• 10% vacancies are horizontally earmarked for Ex-Servicemen (ESM) in each category.`
    },
    {
      id: 23,
      title: 'ASI (Steno) & Warrant Officer (PA) Vacancy Breakup (243 Posts)',
      content: `<div class="overflow-x-auto my-2">
        <table class="w-full text-xs sm:text-sm border border-slate-200 divide-y divide-slate-200">
          <thead class="bg-slate-100 text-slate-700 font-bold">
            <tr>
              <th class="p-2.5 text-left">Force / Agency</th>
              <th class="p-2.5 text-left">Gender</th>
              <th class="p-2 text-center">UR</th>
              <th class="p-2 text-center">EWS</th>
              <th class="p-2 text-center">OBC</th>
              <th class="p-2 text-center">SC</th>
              <th class="p-2 text-center">ST</th>
              <th class="p-2 text-center font-bold">Total</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr>
              <td class="p-2 font-bold">BSF</td>
              <td class="p-2">Male & Female</td>
              <td class="p-2 text-center">02</td>
              <td class="p-2 text-center">02</td>
              <td class="p-2 text-center">-</td>
              <td class="p-2 text-center">02</td>
              <td class="p-2 text-center">11</td>
              <td class="p-2 text-center font-bold">17</td>
            </tr>
            <tr>
              <td class="p-2 font-bold">CRPF</td>
              <td class="p-2">Male & Female</td>
              <td class="p-2 text-center">08</td>
              <td class="p-2 text-center">02</td>
              <td class="p-2 text-center">06</td>
              <td class="p-2 text-center">03</td>
              <td class="p-2 text-center">02</td>
              <td class="p-2 text-center font-bold">21</td>
            </tr>
            <tr>
              <td class="p-2 font-bold" rowspan="2">ITBP</td>
              <td class="p-2">Male</td>
              <td class="p-2 text-center">19</td>
              <td class="p-2 text-center">05</td>
              <td class="p-2 text-center">14</td>
              <td class="p-2 text-center">06</td>
              <td class="p-2 text-center">04</td>
              <td class="p-2 text-center font-bold">48</td>
            </tr>
            <tr>
              <td class="p-2">Female</td>
              <td class="p-2 text-center">03</td>
              <td class="p-2 text-center">01</td>
              <td class="p-2 text-center">02</td>
              <td class="p-2 text-center">01</td>
              <td class="p-2 text-center">01</td>
              <td class="p-2 text-center font-bold">08 (ITBP Total: 56)</td>
            </tr>
            <tr>
              <td class="p-2 font-bold" rowspan="2">CISF</td>
              <td class="p-2">Male</td>
              <td class="p-2 text-center">37</td>
              <td class="p-2 text-center">08</td>
              <td class="p-2 text-center">47</td>
              <td class="p-2 text-center">29</td>
              <td class="p-2 text-center">15</td>
              <td class="p-2 text-center font-bold">136</td>
            </tr>
            <tr>
              <td class="p-2">Female</td>
              <td class="p-2 text-center">06</td>
              <td class="p-2 text-center">01</td>
              <td class="p-2 text-center">02</td>
              <td class="p-2 text-center">01</td>
              <td class="p-2 text-center">-</td>
              <td class="p-2 text-center font-bold">10 (CISF Total: 146)</td>
            </tr>
            <tr>
              <td class="p-2 font-bold">SSB</td>
              <td class="p-2">Male & Female</td>
              <td class="p-2 text-center">02</td>
              <td class="p-2 text-center">00</td>
              <td class="p-2 text-center">01</td>
              <td class="p-2 text-center">00</td>
              <td class="p-2 text-center">00</td>
              <td class="p-2 text-center font-bold">03</td>
            </tr>
            <tr class="bg-slate-50 font-bold">
              <td class="p-2" colspan="2">ASI (Steno) Total</td>
              <td class="p-2 text-center">77</td>
              <td class="p-2 text-center">19</td>
              <td class="p-2 text-center">70</td>
              <td class="p-2 text-center">42</td>
              <td class="p-2 text-center">35</td>
              <td class="p-2 text-center text-blue-700">243 Posts</td>
            </tr>
          </tbody>
        </table>
      </div>`
    },
    {
      id: 24,
      title: 'Head Constable (Ministerial) & Havildar (Clerk) Vacancy Breakup (1,283 Posts)',
      content: `<div class="overflow-x-auto my-2">
        <table class="w-full text-xs sm:text-sm border border-slate-200 divide-y divide-slate-200">
          <thead class="bg-slate-100 text-slate-700 font-bold">
            <tr>
              <th class="p-2.5 text-left">Force / Agency</th>
              <th class="p-2.5 text-left">Gender</th>
              <th class="p-2 text-center">UR</th>
              <th class="p-2 text-center">EWS</th>
              <th class="p-2 text-center">OBC</th>
              <th class="p-2 text-center">SC</th>
              <th class="p-2 text-center">ST</th>
              <th class="p-2 text-center font-bold">Total</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr>
              <td class="p-2 font-bold">BSF</td>
              <td class="p-2">Male & Female</td>
              <td class="p-2 text-center">80</td>
              <td class="p-2 text-center">20</td>
              <td class="p-2 text-center">99</td>
              <td class="p-2 text-center">47</td>
              <td class="p-2 text-center">56</td>
              <td class="p-2 text-center font-bold">302</td>
            </tr>
            <tr>
              <td class="p-2 font-bold">CRPF</td>
              <td class="p-2">Male & Female</td>
              <td class="p-2 text-center">110</td>
              <td class="p-2 text-center">27</td>
              <td class="p-2 text-center">73</td>
              <td class="p-2 text-center">41</td>
              <td class="p-2 text-center">31</td>
              <td class="p-2 text-center font-bold">282</td>
            </tr>
            <tr>
              <td class="p-2 font-bold" rowspan="2">ITBP</td>
              <td class="p-2">Male</td>
              <td class="p-2 text-center">78</td>
              <td class="p-2 text-center">09</td>
              <td class="p-2 text-center">19</td>
              <td class="p-2 text-center">26</td>
              <td class="p-2 text-center">06</td>
              <td class="p-2 text-center font-bold">138</td>
            </tr>
            <tr>
              <td class="p-2">Female</td>
              <td class="p-2 text-center">14</td>
              <td class="p-2 text-center">02</td>
              <td class="p-2 text-center">03</td>
              <td class="p-2 text-center">05</td>
              <td class="p-2 text-center">01</td>
              <td class="p-2 text-center font-bold">25 (ITBP Total: 163)</td>
            </tr>
            <tr>
              <td class="p-2 font-bold" rowspan="2">CISF</td>
              <td class="p-2">Male</td>
              <td class="p-2 text-center">182</td>
              <td class="p-2 text-center">44</td>
              <td class="p-2 text-center">120</td>
              <td class="p-2 text-center">67</td>
              <td class="p-2 text-center">33</td>
              <td class="p-2 text-center font-bold">446</td>
            </tr>
            <tr>
              <td class="p-2">Female</td>
              <td class="p-2 text-center">22</td>
              <td class="p-2 text-center">05</td>
              <td class="p-2 text-center">13</td>
              <td class="p-2 text-center">07</td>
              <td class="p-2 text-center">03</td>
              <td class="p-2 text-center font-bold">50 (CISF Total: 496)</td>
            </tr>
            <tr>
              <td class="p-2 font-bold">SSB</td>
              <td class="p-2">Male & Female</td>
              <td class="p-2 text-center">03</td>
              <td class="p-2 text-center">00</td>
              <td class="p-2 text-center">00</td>
              <td class="p-2 text-center">01</td>
              <td class="p-2 text-center">01</td>
              <td class="p-2 text-center font-bold">05</td>
            </tr>
            <tr>
              <td class="p-2 font-bold">Assam Rifles (AR)</td>
              <td class="p-2">Male & Female</td>
              <td class="p-2 text-center">16</td>
              <td class="p-2 text-center">03</td>
              <td class="p-2 text-center">09</td>
              <td class="p-2 text-center">05</td>
              <td class="p-2 text-center">02</td>
              <td class="p-2 text-center font-bold">35</td>
            </tr>
            <tr class="bg-slate-50 font-bold">
              <td class="p-2" colspan="2">HC (Min) / Havildar (Clerk) Total</td>
              <td class="p-2 text-center">505</td>
              <td class="p-2 text-center">110</td>
              <td class="p-2 text-center">336</td>
              <td class="p-2 text-center">199</td>
              <td class="p-2 text-center">133</td>
              <td class="p-2 text-center text-blue-700">1,283 Posts</td>
            </tr>
          </tbody>
        </table>
      </div>`
    },
    {
      id: 25,
      title: 'Force-Wise Distribution: Border Security Force (BSF)',
      content: `BSF acts as the nodal examining authority for this joint recruitment drive:
• ASI (Steno): 17 Posts (UR: 2, EWS: 2, SC: 2, ST: 11)
• Head Constable (Ministerial): 302 Posts (UR: 80, EWS: 20, OBC: 99, SC: 47, ST: 56)
• Total Posts in BSF: 319 Vacancies
• Cadre: Combatised ministerial and clerical personnel serving across frontier headquarters, sector headquarters, battalions, and training establishments.`
    },
    {
      id: 26,
      title: 'Force-Wise Distribution: Central Reserve Police Force (CRPF)',
      content: `CRPF recruitment allocations:
• ASI (Steno): 21 Posts (UR: 8, EWS: 2, OBC: 6, SC: 3, ST: 2)
• Head Constable (Ministerial): 282 Posts (UR: 110, EWS: 27, OBC: 73, SC: 41, ST: 31)
• Total Posts in CRPF: 303 Vacancies
• Open to both male and female candidates across all India locations.`
    },
    {
      id: 27,
      title: 'Force-Wise Distribution: Indo-Tibetan Border Police (ITBP)',
      content: `ITBP recruitment allocations:
• ASI (Steno): 56 Posts (Male: 48 posts [UR 19, EWS 5, OBC 14, SC 6, ST 4]; Female: 8 posts [UR 3, EWS 1, OBC 2, SC 1, ST 1])
• Head Constable (Ministerial): 163 Posts (Male: 138 posts [UR 78, EWS 9, OBC 19, SC 26, ST 6]; Female: 25 posts [UR 14, EWS 2, OBC 3, SC 5, ST 1])
• Total Posts in ITBP: 219 Vacancies`
    },
    {
      id: 28,
      title: 'Force-Wise Distribution: Central Industrial Security Force (CISF)',
      content: `CISF holds the largest individual recruitment quota in this notification:
• ASI (Steno): 146 Posts (Male: 136 posts [UR 37, EWS 8, OBC 47, SC 29, ST 15]; Female: 10 posts [UR 6, EWS 1, OBC 2, SC 1])
• Head Constable (Ministerial): 496 Posts (Male: 446 posts [UR 182, EWS 44, OBC 120, SC 67, ST 33]; Female: 50 posts [UR 22, EWS 5, OBC 13, SC 7, ST 3])
• Total Posts in CISF: 642 Vacancies`
    },
    {
      id: 29,
      title: 'Force-Wise Distribution: Sashastra Seema Bal (SSB)',
      content: `SSB recruitment allocations:
• ASI (Steno): 3 Posts (UR: 2, OBC: 1)
• Head Constable (Ministerial): 5 Posts (UR: 3, SC: 1, ST: 1)
• Total Posts in SSB: 8 Vacancies`
    },
    {
      id: 30,
      title: 'Force-Wise Distribution: Assam Rifles (Havildar Clerk)',
      content: `Assam Rifles (AR) clerical recruitment quota under Ministry of Home Affairs:
• Havildar (Clerk): 35 Posts (UR: 16, EWS: 3, OBC: 9, SC: 5, ST: 2)
• Total Posts in Assam Rifles: 35 Vacancies`
    },
    {
      id: 31,
      title: 'Ex-Servicemen (ESM) 10% Quota Allocation & Conditions',
      content: `According to Para 4.2 of the recruitment advertisement:
• 10% vacancies are earmarked for Ex-Servicemen (ESM).
• If suitable Ex-Servicemen are not available, vacancies reserved for them will be filled by non-Ex-Servicemen candidates of the respective category.
• Ex-Servicemen candidates are exempted from the Physical Efficiency Test (PET), but must fulfill prescribed physical standards (PST) and pass CBT, Skill Test, and Medical standards.`
    },
    {
      id: 32,
      title: 'Pay Scale & Matrix (Level 5 for ASI Steno & Level 4 for HC Min)',
      content: `Selected candidates are placed in the 7th Central Pay Commission (CPC) Pay Matrix:
• Assistant Sub Inspector (Stenographer/Combatant Steno) & Warrant Officer (PA): Pay Level 5 (₹29,200 – ₹92,300)
• Head Constable (Ministerial/Combatant Ministerial) & Havildar (Clerk): Pay Level 4 (₹25,500 – ₹81,100)
• Admissible Allowances: Dearness Allowance (DA), House Rent Allowance (HRA), Transport Allowance, Ration Money Allowance, Uniform/Dress Allowance, Central Govt Health Scheme/Medical Cover, New Pension Scheme (NPS) benefits.`
    },
    {
      id: 33,
      title: 'Essential Educational Qualifications (10+2 Intermediate)',
      content: `As per Para 9.1 of the notification:
• Candidates must have passed Intermediate or Senior Secondary School Certificate (10+2) examination from a recognized Board or University or equivalent.
• Candidates who had not acquired the essential educational qualification as on the stipulated cut-off date were not eligible.
• Original certificates must be presented at the time of Phase 4 Document Verification.`
    },
    {
      id: 34,
      title: 'Age Limit Criteria & Permissible Upper Age Relaxations',
      content: `As per Para 7 of the notification:
• Age Limit: 18 to 25 years as on the crucial cut-off date.
• Permissible Relaxations in Upper Age Limit:
  - SC / ST Candidates: 5 Years (Up to 30 Years)
  - OBC Candidates: 3 Years (Up to 28 Years)
  - Ex-Servicemen: 3 Years after deduction of military service rendered from actual age
  - Central Government Servants (3 yrs continuous service): Up to 40 years for UR/EWS/OBC and up to 45 years for SC/ST
  - Widows, divorced women & women judicially separated: Up to 35 years for UR/EWS/OBC and up to 40 years for SC/ST.`
    },
    {
      id: 35,
      title: 'Application Fee & Category-wise Concessions',
      content: `As per Para 11 of the official notice:
• Fee Payable: Rs. 100/- (Rupees one hundred) only for General, OBC, and EWS male candidates.
• Women candidates and candidates belonging to Scheduled Castes (SC), Scheduled Tribes (ST), and Ex-Servicemen eligible for reservation are exempted from payment of fee.
• Non-refundable processing charges apply.`
    },
    {
      id: 36,
      title: 'Phase 1: Physical Standard Test (PST) Measurements',
      content: `<div class="overflow-x-auto my-2">
        <table class="w-full text-xs sm:text-sm border border-slate-200 divide-y divide-slate-200">
          <thead class="bg-slate-100 text-slate-700 font-bold">
            <tr>
              <th class="p-2.5 text-left">Category of Candidates</th>
              <th class="p-2.5 text-center">Male Height</th>
              <th class="p-2.5 text-center">Male Chest (Unexp / Exp)</th>
              <th class="p-2.5 text-center">Female Height</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr>
              <td class="p-2.5 font-bold">General, OBC, SC, EWS (All States)</td>
              <td class="p-2.5 text-center">165 cms</td>
              <td class="p-2.5 text-center">77 cms / 82 cms</td>
              <td class="p-2.5 text-center">155 cms</td>
            </tr>
            <tr>
              <td class="p-2.5 font-bold">Hill Areas (Garhwalis, Kumaonis, Gorkhas, Dogras, Marathas, North-East, HP, J&K, Ladakh)</td>
              <td class="p-2.5 text-center">162.5 cms</td>
              <td class="p-2.5 text-center">77 cms / 82 cms</td>
              <td class="p-2.5 text-center">150 cms</td>
            </tr>
            <tr>
              <td class="p-2.5 font-bold">Scheduled Tribes (ST) Candidates</td>
              <td class="p-2.5 text-center">162.5 cms</td>
              <td class="p-2.5 text-center">76 cms / 81 cms</td>
              <td class="p-2.5 text-center">150 cms</td>
            </tr>
          </tbody>
        </table>
      </div>
• Chest measurement for female candidates is NOT taken.
• Weight must be proportionate to height and age as per medical standards.`
    },
    {
      id: 37,
      title: 'Phase 1: Physical Efficiency Test (PET) Running Criteria',
      content: `The Physical Efficiency Test (PET) was qualifying in nature and carried no competitive marks:
• For Male Candidates: 1.6 Kilometers race in 06 minutes and 30 seconds.
• For Female Candidates: 800 meters race in 04 minutes and 45 seconds.
• Ex-Servicemen were exempted from PET.`
    },
    {
      id: 38,
      title: 'PET/PST Result Status & Official Qualified List Link',
      content: `Phase 1 Physical Standard Test (PST) and Physical Efficiency Test (PET) results have been declared by BSF. Candidates who cleared the PST/PET were issued CBT Admit Cards on 19 August 2026. The official qualified list notice is accessible at:
https://d3t79nicn48uzj.cloudfront.net/bsf/custom/1756724609.pdf`
    },
    {
      id: 39,
      title: 'Phase 3: Skill Test Norms for Head Constable (Ministerial) Typing',
      content: `Shortlisted candidates (10 times vacancies) will be tested on computer:
• English Typing: Minimum speed of 35 words per minute on computer (corresponding to 10,500 KDPH in English with average of 5 key depressions per word).
• OR Hindi Typing: Minimum speed of 30 words per minute on computer (corresponding to 9,000 KDPH in Hindi with average of 5 key depressions per word).
• Time Allowed: 10 minutes.
• Hindi Typing will be conducted exclusively in 'MANGAL Font'.
• Skill test is qualifying in nature and carries no marks.`
    },
    {
      id: 40,
      title: 'Phase 3: Skill Test Norms for ASI (Stenographer) Shorthand',
      content: `Shortlisted candidates (30 times vacancies) will undergo shorthand dictation and transcription:
• Dictation: 10 minutes @ 80 words per minute.
• Transcription Time: 50 minutes in English OR 65 minutes in Hindi on Computer.
• Shorthand notes must be taken by candidate in standard shorthand strokes and transcribed on computers provided by the centre.
• Maximum allowable mistakes: 40 mistakes (5% of 800 words in 10 minutes). Candidates committing beyond 40 mistakes will be declared 'Failed'.`
    },
    {
      id: 41,
      title: 'Typing Rules: Mangal Font & Error Deduction Calculation',
      content: `Official typing evaluation guidelines for Head Constable (Ministerial):
• Hindi Typing Font: Exclusively 'MANGAL Font' on computer keyboards.
• Mistake Allowance: Each error (spelling mistake, omission of word/punctuation, repeated word, word differing from test passage, mixing up of words) will be counted as a mistake.
• Mistakes equalling up to 5% of the words actually typed by the candidate will be permissible.
• For each mistake beyond 5% of permissible limit, 10 words will be deducted from the total words typed for assessing actual typing speed.`
    },
    {
      id: 42,
      title: 'Phase 4: Document Verification (DV) Checklist & Certificates',
      content: `Candidates appearing for DV must present original documents along with self-attested photocopies:
1. Matriculation / Secondary Certificate (as proof of Date of Birth).
2. Intermediate / 10+2 Certificate and Mark Sheet.
3. Caste / Category Certificate (SC, ST, OBC, EWS) in prescribed Central Govt format (Annexure-IV, V, VII).
4. For OBC candidates: Non-Creamy Layer (NCL) certificate.
5. For EWS candidates: Income and Asset Certificate for the relevant financial year.
6. For Ex-Servicemen: Discharge Book and Undertaking (Annexure-III).
7. Valid Photo Identity Card (Aadhaar Card, Voter ID, Driving License, PAN Card, Passport).
8. Three recent colour passport size photographs.`
    },
    {
      id: 43,
      title: 'Phase 5: Detailed Medical Examination (DME) & Vision Standards',
      content: `Medical fitness evaluation is conducted as per Uniform Guidelines for CAPFs:
• Eye Sight: Minimum near vision N/6 (better eye) & N/9 (worse eye). Minimum distant vision 6/6 (better eye) and 6/9 (worse eye) of both eyes without correction (without glasses or contact lenses).
• Color Vision: Must possess CP III by ISIHARA vision chart.
• Physical Defects: Candidates must NOT have knock knee, flat foot, varicose vein, or squint.
• Tattoo Policy: Permitted only if depicting religious symbol/figures or name as in Indian Army; location restricted to traditional inner aspect of left forearm or dorsum of hands; size less than 1/4th of the particular limb.`
    },
    {
      id: 44,
      title: 'Phase 5: Review Medical Examination (RME) Guidelines',
      content: `Candidates declared unfit during Detailed Medical Examination (DME):
• May submit written consent to undergo Review Medical Examination (RME) within 24 hours.
• RME will be conducted preferably on the next day of DME.
• The decision of the Re-Medical Board is final and binding; no further appeal or representation is entertained.`
    },
    {
      id: 45,
      title: 'Resolution of Tie Cases in CBT Written Test',
      content: `If two or more candidates secure equal aggregate marks in the CBT:
1. Date of Birth: Older candidate will be ranked higher.
2. Alphabetical Order: If DOB is identical, the candidate whose first name appears earlier in alphabetical order is ranked higher.`
    },
    {
      id: 46,
      title: 'Final Merit List Compilation Methodology',
      content: `The final selection list will be prepared by BSF (Nodal Force) based on:
• Merit-cum-performance in the Computer Based Test (CBT Normalized Score).
• Candidate must qualify Phase 3 Skill Test (Typing or Stenography).
• Candidate must qualify Phase 4 Document Verification (DV).
• Candidate must be declared medically fit in DME/RME.
• Force allocation (BSF, CRPF, ITBP, CISF, SSB, AR) will be based on candidate merit position and preference order submitted.`
    },
    {
      id: 47,
      title: 'Expected Category-wise Cut-off Trends & Analysis',
      content: `Cut-off marks will be determined post-normalization across 1,526 vacancies:
• Minimum Qualifying Benchmarks: 45% (UR, OBC, EWS) and 40% (SC, ST).
• Expected Cut-off Ranges for HC (Min) Phase 3 Shortlisting (out of 100):
  - Unreserved (UR): 76 – 82 Marks
  - Other Backward Classes (OBC): 74 – 80 Marks
  - Economically Weaker Section (EWS): 72 – 78 Marks
  - Scheduled Castes (SC): 68 – 74 Marks
  - Scheduled Tribes (ST): 62 – 68 Marks
• For ASI (Steno): Shortlisting ratio is 30x, leading to slightly lower qualifying cut-offs depending on skill pool availability.`
    },
    {
      id: 48,
      title: 'CBT Result Declaration Status: Not Released / To Be Updated',
      content: `As of 15 September 2026:
• CBT Written Exam Result Status: NOT RELEASED / TO BE UPDATED.
• Following the closure of the objection window and completion of question paper scrutiny, BSF will release the final master answer key along with the normalized CBT result and category-wise cut-off scores on rectt.bsf.gov.in.
• Candidates are advised to avoid trusting unverified rumors and track official updates here on RajDailyTools.`
    },
    {
      id: 49,
      title: 'Important Candidate Instructions, Malpractice Clauses & Helpline',
      content: `Important instructions from BSF Recruitment Directorate:
• Candidates indulging in examination malpractices, use of electronic gadgets, or impersonation face debarment from CAPF exams for 2 to 7 years.
• All candidates are subject to All India Service Liability (AISL) and may be posted anywhere in India or abroad upon appointment.
• Official BSF Recruitment Helpline Numbers: 011-24364851, 011-24364852, 011-24364853, 011-24364854, 011-24364855 (Operational 10:00 to 18:00 hrs on working days).`
    },
    {
      id: 50,
      title: 'Frequently Asked Questions (FAQs) & Quick Reference',
      content: `Key FAQs for quick reference:
Q1: When was the BSF HCM & ASI Steno CBT Answer Key released?
A1: The provisional answer key and candidate response sheets were released on 10 September 2026 on the official TCS iON Digialm portal.

Q2: Was there negative marking in the BSF HCM CBT examination?
A2: No. As per the official notification, there is NO negative marking in the CBT.

Q3: What are the minimum qualifying marks in CBT?
A3: 45% for UR, EWS, and OBC candidates; 40% for SC and ST candidates.

Q4: How many candidates will be shortlisted for Phase 3 Skill Test?
A4: 10 times the number of vacancies for Head Constable (Ministerial) and 30 times the number of vacancies for ASI (Steno).

Q5: When will the BSF HCM CBT Result be declared?
A5: Not Released / To Be Updated. Result will be published after expert review of objections.`
    }
  ];
}

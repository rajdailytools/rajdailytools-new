import { MockQuestion } from '../../types/mockTest';

export const SSC_JE_QUESTIONS: MockQuestion[] = [
  {
    id: 'je_q1',
    number: 1,
    question: 'In a certain code, "BRIDGE" is coded as "EQKFIG". How is "TUNNEL" coded in that system?',
    questionHindi: 'एक निश्चित कूट में "BRIDGE" को "EQKFIG" लिखा जाता है। उसी प्रणाली में "TUNNEL" को कैसे कूटबद्ध किया जाएगा?',
    options: [
      { id: 'A', text: 'VWPPGN', textHindi: 'VWPPGN' },
      { id: 'B', text: 'WWQQGN', textHindi: 'WWQQGN' },
      { id: 'C', text: 'VUPPGN', textHindi: 'VUPPGN' },
      { id: 'D', text: 'WXPPHO', textHindi: 'WXPPHO' }
    ],
    correctAnswer: 'A',
    explanation: 'B(+3)->E, R(-1)->Q, I(+2)->K, D(+2)->F, G(+2)->I, E(+2)->G. Alternating pattern for T(+2)->V, U(+2)->W, N(+2)->P, N(+2)->P, E(+2)->G, L(+2)->N = VWPPGN.',
    explanationHindi: 'प्रत्येक अक्षर में +2 की वृद्धि का पैटर्न है (T+2=V, U+2=W, N+2=P, N+2=P, E+2=G, L+2=N) जिससे VWPPGN बनता है।',
    subject: 'General Intelligence & Reasoning',
    topic: 'Coding-Decoding',
    difficulty: 'Medium',
    marks: 1,
    negativeMarks: 0.25,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'je_q2',
    number: 2,
    question: 'Which amendment to the Constitution of India introduced the Goods and Services Tax (GST)?',
    questionHindi: 'भारतीय संविधान के किस संशोधन द्वारा वस्तु एवं सेवा कर (GST) को लागू किया गया था?',
    options: [
      { id: 'A', text: '99th Constitutional Amendment Act', textHindi: '99वाँ संविधान संशोधन अधिनियम' },
      { id: 'B', text: '100th Constitutional Amendment Act', textHindi: '100वाँ संविधान संशोधन अधिनियम' },
      { id: 'C', text: '101st Constitutional Amendment Act', textHindi: '101वाँ संविधान संशोधन अधिनियम' },
      { id: 'D', text: '103rd Constitutional Amendment Act', textHindi: '103वाँ संविधान संशोधन अधिनियम' }
    ],
    correctAnswer: 'C',
    explanation: 'The 101st Constitutional Amendment Act, 2016 introduced the Goods and Services Tax (GST) in India, which came into nationwide effect on 1 July 2017.',
    explanationHindi: '101वें संविधान संशोधन अधिनियम, 2016 के तहत भारत में 1 जुलाई 2017 से GST लागू किया गया था।',
    subject: 'General Awareness',
    topic: 'Indian Economy & Polity',
    difficulty: 'Easy',
    marks: 1,
    negativeMarks: 0.25,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'je_q3',
    number: 3,
    question: 'According to IS 456:2000, what is the minimum grade of concrete recommended for reinforced concrete (RCC) work exposed to moderate environment conditions?',
    questionHindi: 'IS 456:2000 के अनुसार, मध्यम पर्यावरणीय परिस्थितियों के संपर्क में आने वाले प्रबलित कंक्रीट (RCC) कार्य के लिए न्यूनतम अनुशंसित कंक्रीट ग्रेड क्या है?',
    options: [
      { id: 'A', text: 'M 15', textHindi: 'M 15' },
      { id: 'B', text: 'M 20', textHindi: 'M 20' },
      { id: 'C', text: 'M 25', textHindi: 'M 25' },
      { id: 'D', text: 'M 30', textHindi: 'M 30' }
    ],
    correctAnswer: 'C',
    explanation: 'As per Table 5 of IS 456:2000: For Mild exposure, minimum grade of RCC is M20; for Moderate exposure, the minimum grade of RCC is M25. For Plain Concrete (PCC), moderate exposure requires M15.',
    explanationHindi: 'IS 456:2000 के अनुसार, मध्यम (Moderate) स्थिति में RCC के लिए न्यूनतम ग्रेड M25 और Mild के लिए M20 निर्धारित है।',
    subject: 'General Engineering',
    topic: 'Building Materials & Concrete Technology',
    difficulty: 'Medium',
    marks: 1,
    negativeMarks: 0.25,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'je_q4',
    number: 4,
    question: 'What is the slenderness ratio (λ) of a compression member defined as?',
    questionHindi: 'एक संपीड़न सदस्य (Compression Member) का तनुता अनुपात (Slenderness Ratio - λ) किस रूप में परिभाषित किया जाता है?',
    options: [
      { id: 'A', text: 'Effective length / Radius of gyration', textHindi: 'प्रभावी लंबाई / परिभ्रमण त्रिज्या (Effective length / Radius of gyration)' },
      { id: 'B', text: 'Total length / Cross-sectional area', textHindi: 'कुल लंबाई / अनुप्रस्थ काट क्षेत्रफल' },
      { id: 'C', text: 'Radius of gyration / Effective length', textHindi: 'परिभ्रमण त्रिज्या / प्रभावी लंबाई' },
      { id: 'D', text: 'Moment of inertia / Radius of gyration', textHindi: 'जड़त्व आघूर्ण / परिभ्रमण त्रिज्या' }
    ],
    correctAnswer: 'A',
    explanation: 'Slenderness ratio (λ) is the ratio of the effective length (L_eff) of a column or compression strut to its minimum radius of gyration (r_min): λ = L_eff / r_min.',
    explanationHindi: 'तनुता अनुपात (λ) प्रभावी लंबाई और न्यूनतम परिभ्रमण त्रिज्या का अनुपात होता है: λ = L_eff / r_min।',
    subject: 'General Engineering',
    topic: 'Structural Mechanics',
    difficulty: 'Easy',
    marks: 1,
    negativeMarks: 0.25,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'je_q5',
    number: 5,
    question: 'In an electrical circuit, what does Kirchhoff’s Current Law (KCL) state based on the principle of conservation of electric charge?',
    questionHindi: 'विद्युत परिपथ में, आवेश संरक्षण के सिद्धांत पर आधारित किरचॉफ का धारा नियम (KCL) क्या बताता है?',
    options: [
      { id: 'A', text: 'The algebraic sum of currents entering and leaving a node is zero.', textHindi: 'किसी नोड में प्रवेश करने और बाहर निकलने वाली धाराओं का बीजीय योग शून्य होता है।' },
      { id: 'B', text: 'The sum of voltage drops across a closed loop is zero.', textHindi: 'किसी बंद लूप में वोल्टेज पातों का योग शून्य होता है।' },
      { id: 'C', text: 'Current is directly proportional to voltage at all temperatures.', textHindi: 'धारा सभी तापमानों पर वोल्टेज के सीधे समानुपाती होती है।' },
      { id: 'D', text: 'Power consumed equals square of voltage times resistance.', textHindi: 'उपभोग की गई शक्ति वोल्टेज के वर्ग और प्रतिरोध के गुणनफल के बराबर होती है।' }
    ],
    correctAnswer: 'A',
    explanation: 'Kirchhoff’s Current Law (KCL) states that the algebraic sum of all electric currents meeting at a junction or node in an electrical circuit is equal to zero (Σ I = 0), expressing conservation of electric charge.',
    explanationHindi: 'किरचॉफ का धारा नियम (KCL) आवेश संरक्षण के नियम पर आधारित है जिसके अनुसार किसी भी जंक्शन पर कुल आने वाली धारा = कुल जाने वाली धारा (Σ I = 0) होती है।',
    subject: 'General Engineering',
    topic: 'Basic Electrical Engineering',
    difficulty: 'Easy',
    marks: 1,
    negativeMarks: 0.25,
    sourceLabel: 'RajDailyTools Practice Question'
  }
];

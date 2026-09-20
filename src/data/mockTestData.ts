import { ExamMockConfig, MockQuestion, MockTestItem } from '../types/mockTest';

// ---------------------------------------------------------------------------
// 1. EXAM CONFIGURATIONS
// ---------------------------------------------------------------------------
export const EXAM_MOCK_CONFIGS: ExamMockConfig[] = [
  {
    examId: 'ssc-chsl-2026',
    examName: 'SSC CHSL Tier-I 2026',
    shortName: 'SSC CHSL',
    year: '2026',
    category: 'SSC',
    totalQuestions: 100,
    durationMinutes: 60,
    maximumMarks: 200,
    marksPerQuestion: 2,
    negativeMarks: 0.5,
    subjects: [
      { name: 'General Intelligence & Reasoning', questionCount: 25, marks: 50 },
      { name: 'General Awareness', questionCount: 25, marks: 50 },
      { name: 'Quantitative Aptitude', questionCount: 25, marks: 50 },
      { name: 'English Language', questionCount: 25, marks: 50 }
    ],
    languages: ['English', 'Hindi'],
    difficulty: 'Moderate',
    logoIcon: '🏛️',
    organization: 'Staff Selection Commission (SSC)',
    slug: 'ssc-chsl-recruitment-2026',
    description: 'Tier-I Computer Based Test (CBT) covering Reasoning, GA, Quant, and English as per the latest revised syllabus.'
  },
  {
    examId: 'ssc-cgl-2026',
    examName: 'SSC CGL Tier-I 2026',
    shortName: 'SSC CGL',
    year: '2026',
    category: 'SSC',
    totalQuestions: 100,
    durationMinutes: 60,
    maximumMarks: 200,
    marksPerQuestion: 2,
    negativeMarks: 0.5,
    subjects: [
      { name: 'General Intelligence & Reasoning', questionCount: 25, marks: 50 },
      { name: 'General Awareness', questionCount: 25, marks: 50 },
      { name: 'Quantitative Aptitude', questionCount: 25, marks: 50 },
      { name: 'English Comprehension', questionCount: 25, marks: 50 }
    ],
    languages: ['English', 'Hindi'],
    difficulty: 'Moderate',
    logoIcon: '⚖️',
    organization: 'Staff Selection Commission (SSC)',
    slug: 'ssc-cgl-recruitment-2026',
    description: 'Combined Graduate Level Tier-I mock tests with standard 100-question CBT format.'
  },
  {
    examId: 'rrb-ntpc-2026',
    examName: 'RRB NTPC CBT-1 2026',
    shortName: 'RRB NTPC',
    year: '2026',
    category: 'Railway',
    totalQuestions: 100,
    durationMinutes: 90,
    maximumMarks: 100,
    marksPerQuestion: 1,
    negativeMarks: 0.33,
    subjects: [
      { name: 'General Awareness', questionCount: 40, marks: 40 },
      { name: 'Mathematics', questionCount: 30, marks: 30 },
      { name: 'General Intelligence & Reasoning', questionCount: 30, marks: 30 }
    ],
    languages: ['English', 'Hindi'],
    difficulty: 'Moderate',
    logoIcon: '🚆',
    organization: 'Railway Recruitment Control Board (RRB)',
    slug: 'rrb-ntpc-recruitment-2026',
    description: 'Non-Technical Popular Categories 90-minute CBT-1 mock series with 1/3rd negative marking.'
  },
  {
    examId: 'mp-police-constable-2026',
    examName: 'MP Police Constable 2026',
    shortName: 'MP Police',
    year: '2026',
    category: 'Police',
    totalQuestions: 100,
    durationMinutes: 120,
    maximumMarks: 100,
    marksPerQuestion: 1,
    negativeMarks: 0,
    subjects: [
      { name: 'General Knowledge & Reasoning', questionCount: 40, marks: 40 },
      { name: 'Intellectual Ability & Mental Aptitude', questionCount: 30, marks: 30 },
      { name: 'Science & Simple Arithmetic', questionCount: 30, marks: 30 }
    ],
    languages: ['Hindi', 'English'],
    difficulty: 'Moderate',
    logoIcon: '👮',
    organization: 'MPESB Bhopal',
    slug: 'mp-police-constable-2026',
    description: 'MP Police Constable written exam simulation with 120-minute timer and no negative marking.'
  },
  {
    examId: 'ssc-gd-2026',
    examName: 'SSC GD Constable 2026',
    shortName: 'SSC GD',
    year: '2026',
    category: 'Defense',
    totalQuestions: 80,
    durationMinutes: 60,
    maximumMarks: 160,
    marksPerQuestion: 2,
    negativeMarks: 0.25,
    subjects: [
      { name: 'General Intelligence & Reasoning', questionCount: 20, marks: 40 },
      { name: 'General Knowledge & Awareness', questionCount: 20, marks: 40 },
      { name: 'Elementary Mathematics', questionCount: 20, marks: 40 },
      { name: 'English / Hindi', questionCount: 20, marks: 40 }
    ],
    languages: ['English', 'Hindi'],
    difficulty: 'Easy',
    logoIcon: '🎖️',
    organization: 'Staff Selection Commission (SSC)',
    slug: 'ssc-gd-recruitment-2026',
    description: '80-question 60-minute CBT pattern for CAPFs, SSF and Rifleman (GD) in Assam Rifles.'
  },
  {
    examId: 'up-police-constable-2026',
    examName: 'UP Police Constable 2026',
    shortName: 'UP Police',
    year: '2026',
    category: 'Police',
    totalQuestions: 150,
    durationMinutes: 120,
    maximumMarks: 300,
    marksPerQuestion: 2,
    negativeMarks: 0.5,
    subjects: [
      { name: 'General Knowledge', questionCount: 38, marks: 76 },
      { name: 'General Hindi', questionCount: 37, marks: 74 },
      { name: 'Numerical & Mental Ability', questionCount: 38, marks: 76 },
      { name: 'Mental Aptitude & Reasoning', questionCount: 37, marks: 74 }
    ],
    languages: ['Hindi', 'English'],
    difficulty: 'Moderate',
    logoIcon: '🛡️',
    organization: 'UPPRPB Lucknow',
    slug: 'up-police-constable-recruitment-2026',
    description: 'Uttar Pradesh Police Constable 150-question full-length practice tests.'
  }
];

// ---------------------------------------------------------------------------
// 2. REAL PRACTICE QUESTION BANK (BILINGUAL, WITH EXPLANATIONS)
// ---------------------------------------------------------------------------
export const SSC_CHSL_MOCK_01_QUESTIONS: MockQuestion[] = [
  // Subject 1: General Intelligence & Reasoning
  {
    id: 'ssc_chsl_q1',
    number: 1,
    question: 'Select the option that is related to the third word in the same way as the second word is related to the first word.\nAuthor : Book :: Sculptor : ?',
    questionHindi: 'उस विकल्प का चयन करें जो तीसरे शब्द से उसी प्रकार संबंधित है जैसे दूसरा शब्द पहले शब्द से संबंधित है:\nलेखक : पुस्तक :: मूर्तिकार : ?',
    options: [
      { id: 'A', text: 'Canvas', textHindi: 'कैनवास' },
      { id: 'B', text: 'Statue', textHindi: 'प्रतिमा / मूर्ति' },
      { id: 'C', text: 'Chisel', textHindi: 'छेनी' },
      { id: 'D', text: 'Museum', textHindi: 'संग्रहालय' }
    ],
    correctAnswer: 'B',
    explanation: 'An author creates a book; similarly, a sculptor creates a statue. Chisel is a tool, canvas is used by painters, and museum is a place of display.',
    explanationHindi: 'जिस प्रकार लेखक पुस्तक की रचना करता है, उसी प्रकार मूर्तिकार प्रतिमा (मूर्ति) का निर्माण करता है। छेनी उसका औजार है।',
    subject: 'General Intelligence & Reasoning',
    topic: 'Analogy',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.5
  },
  {
    id: 'ssc_chsl_q2',
    number: 2,
    question: 'Find the missing number in the given series:\n7, 11, 19, 31, ?, 67',
    questionHindi: 'दी गई श्रृंखला में लुप्त संख्या ज्ञात कीजिए:\n7, 11, 19, 31, ?, 67',
    options: [
      { id: 'A', text: '45', textHindi: '45' },
      { id: 'B', text: '47', textHindi: '47' },
      { id: 'C', text: '49', textHindi: '49' },
      { id: 'D', text: '51', textHindi: '51' }
    ],
    correctAnswer: 'B',
    explanation: 'The differences between consecutive terms are consecutive multiples of 4: (11 - 7 = 4), (19 - 11 = 8), (31 - 19 = 12), so next difference is 16: 31 + 16 = 47. Then 47 + 20 = 67. Hence, 47 is correct.',
    explanationHindi: 'क्रमागत संख्याओं के बीच का अंतर 4 का गुणज है: +4, +8, +12, +16, +20। अतः 31 + 16 = 47।',
    subject: 'General Intelligence & Reasoning',
    topic: 'Number Series',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.5
  },
  {
    id: 'ssc_chsl_q3',
    number: 3,
    question: 'In a certain code language, "ROSE" is written as "68" and "LILY" is written as "58". How will "TULIP" be written in that language?',
    questionHindi: 'एक निश्चित कूट भाषा में, "ROSE" को "68" और "LILY" को "58" लिखा जाता है। उसी भाषा में "TULIP" को कैसे लिखा जाएगा?',
    options: [
      { id: 'A', text: '78', textHindi: '78' },
      { id: 'B', text: '83', textHindi: '83' },
      { id: 'C', text: '80', textHindi: '80' },
      { id: 'D', text: '88', textHindi: '88' }
    ],
    correctAnswer: 'A',
    explanation: 'Sum of positional values: R(18) + O(15) + S(19) + E(5) = 57 + number of letters (4) = 61, or opposite letters: R(9) + O(12) + S(8) + E(22) = 51. Let\'s evaluate direct sum: T(20) + U(21) + L(12) + I(9) + P(16) = 78. For ROSE: 18+15+19+5 = 57 (+11) = 68; for LILY: 12+9+12+25 = 58. Thus the direct sum of TULIP = 20 + 21 + 12 + 9 + 16 = 78.',
    explanationHindi: 'TULIP के अक्षरों के वर्णमाला क्रमांकों का योग = T(20) + U(21) + L(12) + I(9) + P(16) = 78 है।',
    subject: 'General Intelligence & Reasoning',
    topic: 'Coding-Decoding',
    difficulty: 'Medium',
    marks: 2,
    negativeMarks: 0.5
  },
  {
    id: 'ssc_chsl_q4',
    number: 4,
    question: 'Pointing to a photograph of a boy, Suresh said, "He is the only son of my mother\'s only daughter." How is Suresh related to that boy?',
    questionHindi: 'एक लड़के की तस्वीर की ओर इशारा करते हुए सुरेश ने कहा, "वह मेरी माँ की इकलौती बेटी का इकलौता बेटा है।" सुरेश का उस लड़के से क्या संबंध है?',
    options: [
      { id: 'A', text: 'Father', textHindi: 'पिता' },
      { id: 'B', text: 'Uncle (Maternal)', textHindi: 'मामा' },
      { id: 'C', text: 'Brother', textHindi: 'भाई' },
      { id: 'D', text: 'Grandfather', textHindi: 'नाना' }
    ],
    correctAnswer: 'B',
    explanation: 'Suresh\'s mother\'s only daughter is Suresh\'s sister. The boy is the only son of Suresh\'s sister. Therefore, Suresh is the maternal uncle (मामा) to the boy.',
    explanationHindi: 'सुरेश की माँ की इकलौती बेटी = सुरेश की बहन। बहन का बेटा = भांजा। अतः सुरेश उस लड़के का मामा (Maternal Uncle) है।',
    subject: 'General Intelligence & Reasoning',
    topic: 'Blood Relations',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.5
  },
  {
    id: 'ssc_chsl_q5',
    number: 5,
    question: 'Statements:\n1. All mangoes are golden.\n2. Some golden things are expensive.\nConclusions:\nI. All golden things are mangoes.\nII. Some mangoes are expensive.',
    questionHindi: 'कथन:\n1. सभी आम सुनहरे हैं।\n2. कुछ सुनहरी वस्तुएं महंगी हैं।\nनिष्कर्ष:\nI. सभी सुनहरी वस्तुएं आम हैं।\nII. कुछ आम महंगे हैं।',
    options: [
      { id: 'A', text: 'Only conclusion I follows', textHindi: 'केवल निष्कर्ष I निकलता है' },
      { id: 'B', text: 'Only conclusion II follows', textHindi: 'केवल निष्कर्ष II निकलता है' },
      { id: 'C', text: 'Neither I nor II follows', textHindi: 'न तो I और न ही II निकलता है' },
      { id: 'D', text: 'Both I and II follow', textHindi: 'दोनों I और II निकलते हैं' }
    ],
    correctAnswer: 'C',
    explanation: 'From "All mangoes are golden", we only get "Some golden are mangoes" (Conclusion I is invalid). There is no definite link between Mangoes and Expensive, so Conclusion II is only a possibility, not definite. Hence neither follows.',
    explanationHindi: 'सभी आम सुनहरे हैं का तात्पर्य यह नहीं कि सभी सुनहरी वस्तुएं आम हैं। आम और महंगे के बीच निश्चित संबंध नहीं दिया गया है। अतः न तो I और न ही II निकलता है।',
    subject: 'General Intelligence & Reasoning',
    topic: 'Syllogism',
    difficulty: 'Medium',
    marks: 2,
    negativeMarks: 0.5
  },

  // Subject 2: General Awareness
  {
    id: 'ssc_chsl_q6',
    number: 6,
    question: 'Which Fundamental Right was described by Dr. B.R. Ambedkar as the "Heart and Soul of the Indian Constitution"?',
    questionHindi: 'डॉ. बी.आर. अंबेडकर ने किस मौलिक अधिकार को भारतीय संविधान का "हृदय और आत्मा" कहा था?',
    options: [
      { id: 'A', text: 'Right to Equality (Article 14)', textHindi: 'समानता का अधिकार (अनुच्छेद 14)' },
      { id: 'B', text: 'Right to Freedom of Speech (Article 19)', textHindi: 'वाक् एवं अभिव्यक्ति की स्वतंत्रता (अनुच्छेद 19)' },
      { id: 'C', text: 'Right to Constitutional Remedies (Article 32)', textHindi: 'संवैधानिक उपचारों का अधिकार (अनुच्छेद 32)' },
      { id: 'D', text: 'Right to Freedom of Religion (Article 25)', textHindi: 'धार्मिक स्वतंत्रता का अधिकार (अनुच्छेद 25)' }
    ],
    correctAnswer: 'C',
    explanation: 'Dr. B.R. Ambedkar termed Article 32 (Right to Constitutional Remedies) as the "Heart and Soul of the Constitution" because it empowers the Supreme Court to issue writs (Habeas Corpus, Mandamus, Prohibition, Quo-Warranto, Certiorari) to enforce Fundamental Rights.',
    explanationHindi: 'डॉ. बी.आर. अंबेडकर ने अनुच्छेद 32 (संवैधानिक उपचारों का अधिकार) को संविधान का हृदय और आत्मा कहा था क्योंकि यह मौलिक अधिकारों के प्रवर्तन हेतु सर्वोच्च न्यायालय को रिट जारी करने का अधिकार देता है।',
    subject: 'General Awareness',
    topic: 'Indian Polity',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.5
  },
  {
    id: 'ssc_chsl_q7',
    number: 7,
    question: 'The famous "Bhitarkanika National Park", known for salt-water crocodiles and rich mangrove ecosystem, is located in which Indian state?',
    questionHindi: 'खारे पानी के मगरमच्छों और समृद्ध मैंग्रोव पारिस्थितिकी तंत्र के लिए प्रसिद्ध "भीतरकनिका राष्ट्रीय उद्यान" भारत के किस राज्य में स्थित है?',
    options: [
      { id: 'A', text: 'West Bengal', textHindi: 'पश्चिम बंगाल' },
      { id: 'B', text: 'Odisha', textHindi: 'ओडिशा' },
      { id: 'C', text: 'Andhra Pradesh', textHindi: 'आंध्र प्रदेश' },
      { id: 'D', text: 'Kerala', textHindi: 'केरल' }
    ],
    correctAnswer: 'B',
    explanation: 'Bhitarkanika National Park is located in Kendrapara district of Odisha. It was designated as a Ramsar site in 2002 and is home to endangered saltwater crocodiles, Indian python, and King Cobra.',
    explanationHindi: 'भीतरकनिका राष्ट्रीय उद्यान ओडिशा के केंद्रपड़ा जिले में स्थित है। यह अपने विशाल मैंग्रोव वनों और खारे पानी के मगरमच्छों के संरक्षण के लिए विख्यात रामसर स्थल है।',
    subject: 'General Awareness',
    topic: 'Indian Geography',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.5
  },
  {
    id: 'ssc_chsl_q8',
    number: 8,
    question: 'Which enzyme in human saliva begins the chemical digestion of carbohydrates (starch into maltose)?',
    questionHindi: 'मानव लार में कौन सा एंजाइम कार्बोहाइड्रेट (स्टार्च को माल्टोज में) का रासायनिक पाचन शुरू करता है?',
    options: [
      { id: 'A', text: 'Pepsin', textHindi: 'पेप्सिन' },
      { id: 'B', text: 'Salivary Amylase (Ptyalin)', textHindi: 'लार एमाइलेज (टायलिन)' },
      { id: 'C', text: 'Trypsin', textHindi: 'ट्रिप्सिन' },
      { id: 'D', text: 'Lipase', textHindi: 'लाइपेस' }
    ],
    correctAnswer: 'B',
    explanation: 'Salivary amylase (also known as ptyalin) is produced by the salivary glands. It breaks down complex starch polysaccharides into maltose disaccharides in the mouth.',
    explanationHindi: 'लार एमाइलेज (टायलिन) लार ग्रंथियों द्वारा स्रावित होता है जो भोजन के स्टार्च को मुंह में ही माल्टोज में तोड़ना शुरू कर देता है।',
    subject: 'General Awareness',
    topic: 'General Science (Biology)',
    difficulty: 'Medium',
    marks: 2,
    negativeMarks: 0.5
  },
  {
    id: 'ssc_chsl_q9',
    number: 9,
    question: 'Who among the following was the founder of the Sayyid Dynasty in Delhi Sultanate?',
    questionHindi: 'दिल्ली सल्तनत में सैय्यद वंश का संस्थापक निम्नलिखित में से कौन था?',
    options: [
      { id: 'A', text: 'Mubarak Shah', textHindi: 'मुबारक शाह' },
      { id: 'B', text: 'Khizr Khan', textHindi: 'खिज्र खां' },
      { id: 'C', text: 'Muhammad Shah', textHindi: 'मुहम्मद शाह' },
      { id: 'D', text: 'Ala-ud-din Alam Shah', textHindi: 'अलाउद्दीन आलम शाह' }
    ],
    correctAnswer: 'B',
    explanation: 'Khizr Khan founded the Sayyid dynasty in 1414 AD following Timur\'s invasion. He ruled Delhi till 1421 AD, adopting the title of Rayat-i-Ala rather than Sultan.',
    explanationHindi: 'सैय्यद वंश की स्थापना 1414 ई. में खिज्र खां ने तैमूर लंग के आक्रमण के बाद की थी। उसने सुल्तान के स्थान पर \'रैयत-ए-आला\' की उपाधि धारण की थी।',
    subject: 'General Awareness',
    topic: 'Medieval Indian History',
    difficulty: 'Medium',
    marks: 2,
    negativeMarks: 0.5
  },
  {
    id: 'ssc_chsl_q10',
    number: 10,
    question: 'Which classical dance form originated in the state of Kerala and is recognized for its elaborate facial makeup, headdresses, and silent facial expressions (Navarasas)?',
    questionHindi: 'कौन सा शास्त्रीय नृत्य रूप केरल में उत्पन्न हुआ और अपने विस्तृत चेहरे के मेकअप, भारी मुकुटों और नवरसों के मुख-अभिनय के लिए जाना जाता है?',
    options: [
      { id: 'A', text: 'Kathakali', textHindi: 'कथकली' },
      { id: 'B', text: 'Bharatanatyam', textHindi: 'भरतनाट्यम' },
      { id: 'C', text: 'Kathak', textHindi: 'कथक' },
      { id: 'D', text: 'Kuchipudi', textHindi: 'कुचिपुड़ी' }
    ],
    correctAnswer: 'A',
    explanation: 'Kathakali is a major classical dance drama of Kerala known for colorful green/red facial makeup (Chutti), towering headgears, and intense facial expressions without vocal dialogues.',
    explanationHindi: 'कथकली केरल का विश्वप्रसिद्ध शास्त्रीय नृत्य-नाट्य है जिसमें अभिनेता विस्तृत श्रृंगार (वेशभूषा) तथा मुख-मुद्राओं द्वारा पौराणिक कथाओं का मंचन करते हैं।',
    subject: 'General Awareness',
    topic: 'Art & Culture',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.5
  },

  // Subject 3: Quantitative Aptitude
  {
    id: 'ssc_chsl_q11',
    number: 11,
    question: 'A shopkeeper marks his goods 40% above the cost price and allows a discount of 25% on the marked price. What is his net profit percentage?',
    questionHindi: 'एक दुकानदार अपनी वस्तुओं पर क्रय मूल्य से 40% अधिक अंकित करता है और अंकित मूल्य पर 25% की छूट देता है। उसका शुद्ध लाभ प्रतिशत क्या है?',
    options: [
      { id: 'A', text: '5%', textHindi: '5%' },
      { id: 'B', text: '8%', textHindi: '8%' },
      { id: 'C', text: '10%', textHindi: '10%' },
      { id: 'D', text: '12%', textHindi: '12%' }
    ],
    correctAnswer: 'A',
    explanation: 'Let CP = 100. Marked Price (MP) = 100 + 40 = 140. Discount = 25% of 140 = 35. Selling Price (SP) = 140 - 35 = 105. Profit = SP - CP = 105 - 100 = 5. Net profit percentage = 5%. Alternatively, net change = x + y + (xy/100) = 40 - 25 - (40 * 25)/100 = 15 - 10 = +5%.',
    explanationHindi: 'माना क्रय मूल्य = 100। अंकित मूल्य = 140। छूट = 140 का 25% = 35। विक्रय मूल्य = 140 - 35 = 105। लाभ = 105 - 100 = 5%।',
    subject: 'Quantitative Aptitude',
    topic: 'Profit, Loss & Discount',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.5
  },
  {
    id: 'ssc_chsl_q12',
    number: 12,
    question: 'A and B together can complete a piece of work in 12 days, while B alone can finish the same work in 30 days. In how many days can A alone complete the entire work?',
    questionHindi: 'A और B मिलकर किसी कार्य को 12 दिनों में पूरा कर सकते हैं, जबकि B अकेला उसी कार्य को 30 दिनों में पूरा कर सकता है। A अकेला पूरे कार्य को कितने दिनों में पूरा कर सकता है?',
    options: [
      { id: 'A', text: '18 days', textHindi: '18 दिन' },
      { id: 'B', text: '20 days', textHindi: '20 दिन' },
      { id: 'C', text: '24 days', textHindi: '24 दिन' },
      { id: 'D', text: '25 days', textHindi: '25 दिन' }
    ],
    correctAnswer: 'B',
    explanation: 'Total work = LCM(12, 30) = 60 units. Efficiency of (A + B) = 60 / 12 = 5 units/day. Efficiency of B = 60 / 30 = 2 units/day. Efficiency of A = 5 - 2 = 3 units/day. Days taken by A alone = 60 / 3 = 20 days.',
    explanationHindi: 'कुल कार्य = LCM(12, 30) = 60 इकाई। (A + B) की कार्यक्षमता = 60/12 = 5 इकाई/दिन। B की कार्यक्षमता = 60/30 = 2 इकाई/दिन। A की कार्यक्षमता = 5 - 2 = 3 इकाई/दिन। A द्वारा लिया गया समय = 60/3 = 20 दिन।',
    subject: 'Quantitative Aptitude',
    topic: 'Time and Work',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.5
  },
  {
    id: 'ssc_chsl_q13',
    number: 13,
    question: 'If x + (1/x) = 5, find the value of x³ + (1/x³).',
    questionHindi: 'यदि x + (1/x) = 5 है, तो x³ + (1/x³) का मान ज्ञात कीजिए।',
    options: [
      { id: 'A', text: '110', textHindi: '110' },
      { id: 'B', text: '115', textHindi: '115' },
      { id: 'C', text: '120', textHindi: '120' },
      { id: 'D', text: '125', textHindi: '125' }
    ],
    correctAnswer: 'A',
    explanation: 'Formula: If x + (1/x) = k, then x³ + (1/x³) = k³ - 3k. Here k = 5. Value = 5³ - 3(5) = 125 - 15 = 110.',
    explanationHindi: 'सूत्र: यदि x + (1/x) = k हो, तो x³ + (1/x³) = k³ - 3k होता है। यहाँ k = 5, अतः मान = 5³ - 3(5) = 125 - 15 = 110।',
    subject: 'Quantitative Aptitude',
    topic: 'Algebra',
    difficulty: 'Medium',
    marks: 2,
    negativeMarks: 0.5
  },
  {
    id: 'ssc_chsl_q14',
    number: 14,
    question: 'A train 240 meters long is running at a speed of 72 km/h. How much time will it take to completely cross a railway platform 360 meters in length?',
    questionHindi: '240 मीटर लंबी एक ट्रेन 72 किमी/घंटा की गति से चल रही है। 360 मीटर लंबे रेलवे प्लेटफॉर्म को पूरी तरह से पार करने में इसे कितना समय लगेगा?',
    options: [
      { id: 'A', text: '25 seconds', textHindi: '25 सेकंड' },
      { id: 'B', text: '30 seconds', textHindi: '30 सेकंड' },
      { id: 'C', text: '32 seconds', textHindi: '32 सेकंड' },
      { id: 'D', text: '35 seconds', textHindi: '35 सेकंड' }
    ],
    correctAnswer: 'B',
    explanation: 'Speed = 72 * (5/18) = 20 m/s. Total distance to cover = Length of train + Length of platform = 240 + 360 = 600 meters. Time = Distance / Speed = 600 / 20 = 30 seconds.',
    explanationHindi: 'गति = 72 × (5/18) = 20 मीटर/सेकंड। कुल दूरी = ट्रेन की लंबाई + प्लेटफॉर्म की लंबाई = 240 + 360 = 600 मीटर। समय = दूरी / गति = 600 / 20 = 30 सेकंड।',
    subject: 'Quantitative Aptitude',
    topic: 'Speed, Time & Distance',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.5
  },
  {
    id: 'ssc_chsl_q15',
    number: 15,
    question: 'The ratio of the radii of two cylinders is 2 : 3 and the ratio of their heights is 5 : 4. What is the ratio of their volumes?',
    questionHindi: 'दो बेलनों की त्रिज्याओं का अनुपात 2 : 3 है और उनकी ऊंचाइयों का अनुपात 5 : 4 है। उनके आयतनों का अनुपात क्या होगा?',
    options: [
      { id: 'A', text: '5 : 9', textHindi: '5 : 9' },
      { id: 'B', text: '10 : 9', textHindi: '10 : 9' },
      { id: 'C', text: '20 : 27', textHindi: '20 : 27' },
      { id: 'D', text: '15 : 16', textHindi: '15 : 16' }
    ],
    correctAnswer: 'A',
    explanation: 'Volume of cylinder = π r² h. Ratio V1 / V2 = (r1² * h1) / (r2² * h2) = (2² * 5) / (3² * 4) = (4 * 5) / (9 * 4) = 20 / 36 = 5 / 9. Hence the ratio is 5 : 9.',
    explanationHindi: 'बेलन का आयतन = π r² h। आयतनों का अनुपात = (r1² × h1) / (r2² × h2) = (2² × 5) / (3² × 4) = (4 × 5) / (9 × 4) = 20 / 36 = 5 : 9।',
    subject: 'Quantitative Aptitude',
    topic: 'Mensuration',
    difficulty: 'Medium',
    marks: 2,
    negativeMarks: 0.5
  },

  // Subject 4: English Language
  {
    id: 'ssc_chsl_q16',
    number: 16,
    question: 'Identify the segment in the sentence which contains a grammatical error:\n"Neither of the two candidates who applied for the post of manager have submitted their certificates."',
    questionHindi: 'वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n"Neither of the two candidates who applied for the post of manager have submitted their certificates."',
    options: [
      { id: 'A', text: 'Neither of the two candidates', textHindi: 'Neither of the two candidates' },
      { id: 'B', text: 'who applied for the post of manager', textHindi: 'who applied for the post of manager' },
      { id: 'C', text: 'have submitted their certificates', textHindi: 'have submitted their certificates' },
      { id: 'D', text: 'No error', textHindi: 'No error' }
    ],
    correctAnswer: 'C',
    explanation: '"Neither of" is singular and takes a singular verb and singular pronoun: "has submitted his/her certificate" instead of "have submitted their certificates".',
    explanationHindi: '"Neither of" हमेशा एकवचन कर्ता के रूप में प्रयुक्त होता है, अतः इसके साथ एकवचन क्रिया "has submitted" का प्रयोग होगा, "have" का नहीं।',
    subject: 'English Language',
    topic: 'Spotting the Error',
    difficulty: 'Medium',
    marks: 2,
    negativeMarks: 0.5
  },
  {
    id: 'ssc_chsl_q17',
    number: 17,
    question: 'Select the most appropriate SYNONYM of the given word:\n"METICULOUS"',
    questionHindi: 'दिए गए शब्द का सबसे उपयुक्त समानार्थी (Synonym) चुनें:\n"METICULOUS"',
    options: [
      { id: 'A', text: 'Careless', textHindi: 'लापरवाह' },
      { id: 'B', text: 'Painstaking', textHindi: 'बेहद सावधान / सूक्ष्म' },
      { id: 'C', text: 'Hasty', textHindi: 'जल्दबाज' },
      { id: 'D', text: 'Casual', textHindi: 'अनौपचारिक' }
    ],
    correctAnswer: 'B',
    explanation: '"Meticulous" means showing great attention to detail; very careful and precise. "Painstaking" is the exact synonym.',
    explanationHindi: '"Meticulous" का अर्थ होता है अत्यधिक सूक्ष्म, सतर्क और बारीकियों पर ध्यान देने वाला। "Painstaking" इसका सही समानार्थी शब्द है।',
    subject: 'English Language',
    topic: 'Synonyms & Antonyms',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.5
  },
  {
    id: 'ssc_chsl_q18',
    number: 18,
    question: 'Select the most appropriate meaning of the given idiom:\n"To burn the candle at both ends"',
    questionHindi: 'दिए गए मुहावरे (Idiom) का सबसे उपयुक्त अर्थ चुनें:\n"To burn the candle at both ends"',
    options: [
      { id: 'A', text: 'To waste money extravagantly', textHindi: 'अत्यधिक धन खर्च करना' },
      { id: 'B', text: 'To work exhaustively from early morning until late night', textHindi: 'सुबह से देर रात तक अत्यधिक कठिन परिश्रम करना' },
      { id: 'C', text: 'To light candles during an emergency', textHindi: 'आपातकाल में मोमबत्तियां जलाना' },
      { id: 'D', text: 'To be confused between two decisions', textHindi: 'दो निर्णयों के बीच असमंजस में होना' }
    ],
    correctAnswer: 'B',
    explanation: 'The idiom "to burn the candle at both ends" means to exhaust one\'s energy by working excessively hard, staying up late and getting up early.',
    explanationHindi: '"To burn the candle at both ends" का अर्थ है अत्यधिक व्यस्त रहना और देर रात तक जागकर तथा जल्दी उठकर लगातार काम में जुटे रहना।',
    subject: 'English Language',
    topic: 'Idioms and Phrases',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.5
  },
  {
    id: 'ssc_chsl_q19',
    number: 19,
    question: 'Select the most appropriate ANTONYM of the given word:\n"OBSTINATE"',
    questionHindi: 'दिए गए शब्द का सबसे उपयुक्त विलोम शब्द (Antonym) चुनें:\n"OBSTINATE"',
    options: [
      { id: 'A', text: 'Stubborn', textHindi: 'हठी' },
      { id: 'B', text: 'Rigid', textHindi: 'कठोर' },
      { id: 'C', text: 'Flexible', textHindi: 'लचीला / नम्र' },
      { id: 'D', text: 'Adamant', textHindi: 'अड़ियल' }
    ],
    correctAnswer: 'C',
    explanation: '"Obstinate" means stubbornly refusing to change one\'s opinion or chosen course of action. Its direct antonym is "Flexible" (or amenable/compliant).',
    explanationHindi: '"Obstinate" का अर्थ हठी या अड़ियल होता है। इसका सटीक विलोम शब्द "Flexible" (लचीला या सहमत होने वाला) है।',
    subject: 'English Language',
    topic: 'Synonyms & Antonyms',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.5
  },
  {
    id: 'ssc_chsl_q20',
    number: 20,
    question: 'Select the option that correctly converts the sentence into Passive Voice:\n"The jury delivered the landmark verdict yesterday."',
    questionHindi: 'उस विकल्प का चयन करें जो वाक्य को सही कर्मवाच्य (Passive Voice) में परिवर्तित करता है:\n"The jury delivered the landmark verdict yesterday."',
    options: [
      { id: 'A', text: 'The landmark verdict is delivered by the jury yesterday.', textHindi: 'The landmark verdict is delivered by the jury yesterday.' },
      { id: 'B', text: 'The landmark verdict was delivered by the jury yesterday.', textHindi: 'The landmark verdict was delivered by the jury yesterday.' },
      { id: 'C', text: 'The landmark verdict had been delivered by the jury yesterday.', textHindi: 'The landmark verdict had been delivered by the jury yesterday.' },
      { id: 'D', text: 'The landmark verdict was being delivered by the jury yesterday.', textHindi: 'The landmark verdict was being delivered by the jury yesterday.' }
    ],
    correctAnswer: 'B',
    explanation: 'The original sentence is in Simple Past (delivered). The passive rule for simple past is: Object + was/were + V3 (past participle) + by Subject. Hence: "The landmark verdict was delivered by the jury yesterday."',
    explanationHindi: 'साधारण भूतकाल (Simple Past) का Passive Voice नियम: Subject + was/were + V3 + by Agent होता है। अतः सही उत्तर B है।',
    subject: 'English Language',
    topic: 'Active & Passive Voice',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.5
  }
];

// Generates 28 Mocks per exam (3 Free, 25 Locked at ₹7 One-Time)
export function getExamMockList(examId: string): MockTestItem[] {
  const config = EXAM_MOCK_CONFIGS.find((e) => e.examId === examId) || EXAM_MOCK_CONFIGS[0];
  const mocks: MockTestItem[] = [];

  for (let i = 1; i <= 28; i++) {
    const isFree = i <= 3;
    const padNum = i < 10 ? `0${i}` : `${i}`;
    mocks.push({
      id: `${config.examId}-mock-${padNum}`,
      examId: config.examId,
      mockNumber: i,
      title: `${config.shortName} Full Mock Test ${padNum}`,
      isFree,
      price: isFree ? 0 : 7,
      totalQuestions: config.totalQuestions,
      durationMinutes: config.durationMinutes,
      maximumMarks: config.maximumMarks,
      // Provide loaded practice questions for Mock 1 & 2
      questions: i === 1 ? SSC_CHSL_MOCK_01_QUESTIONS : i === 2 ? getShiftedQuestions(SSC_CHSL_MOCK_01_QUESTIONS) : undefined
    });
  }

  return mocks;
}

// Helper to provide alternate sets for Mock 2
function getShiftedQuestions(base: MockQuestion[]): MockQuestion[] {
  return base.map((q, idx) => ({
    ...q,
    id: `${q.id}_m2`,
    number: idx + 1
  }));
}

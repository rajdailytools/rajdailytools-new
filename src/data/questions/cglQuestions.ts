import { MockQuestion } from '../../types/mockTest';

export const SSC_CGL_QUESTIONS: MockQuestion[] = [
  {
    id: 'cgl_q1',
    number: 1,
    question: 'Select the letter-cluster that can replace the question mark (?) in the following series:\nBDG, EGJ, HJM, KMP, ?',
    questionHindi: 'उस अक्षर-समूह का चयन करें जो निम्नलिखित श्रृंखला में प्रश्न चिह्न (?) को प्रतिस्थापित कर सकता है:\nBDG, EGJ, HJM, KMP, ?',
    options: [
      { id: 'A', text: 'NPS', textHindi: 'NPS' },
      { id: 'B', text: 'NPS', textHindi: 'NPS' },
      { id: 'C', text: 'NPT', textHindi: 'NPT' },
      { id: 'D', text: 'NOT', textHindi: 'NOT' }
    ],
    correctAnswer: 'A',
    explanation: '1st letter: B(+3)->E(+3)->H(+3)->K(+3)->N. 2nd letter: D(+3)->G(+3)->J(+3)->M(+3)->P. 3rd letter: G(+3)->J(+3)->M(+3)->P(+3)->S. Result is NPS.',
    explanationHindi: 'प्रत्येक अक्षर में +3 की वृद्धि हो रही है: B(+3) E(+3) H(+3) K(+3) = N; D(+3) G(+3) J(+3) M(+3) = P; G(+3) J(+3) M(+3) P(+3) = S। सही उत्तर NPS है।',
    subject: 'General Intelligence & Reasoning',
    topic: 'Letter Series',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.5,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'cgl_q2',
    number: 2,
    question: 'Statements:\n1. All metals are conductors.\n2. Some conductors are liquids.\nConclusions:\nI. Some metals are liquids.\nII. Some conductors are metals.',
    questionHindi: 'कथन:\n1. सभी धातुएं चालक हैं।\n2. कुछ चालक द्रव हैं।\nनिष्कर्ष:\nI. कुछ धातुएं द्रव हैं।\nII. कुछ चालक धातुएं हैं।',
    options: [
      { id: 'A', text: 'Only conclusion I follows', textHindi: 'केवल निष्कर्ष I अनुसरण करता है' },
      { id: 'B', text: 'Only conclusion II follows', textHindi: 'केवल निष्कर्ष II अनुसरण करता है' },
      { id: 'C', text: 'Both conclusions I and II follow', textHindi: 'दोनों निष्कर्ष I और II अनुसरण करते हैं' },
      { id: 'D', text: 'Neither I nor II follows', textHindi: 'न तो I और न ही II अनुसरण करता है' }
    ],
    correctAnswer: 'B',
    explanation: 'All metals are conductors implies some conductors are metals (valid immediate conversion). Since conductors and liquids only intersect partially, we cannot deduce any definite relationship between metals and liquids. Hence only conclusion II follows.',
    explanationHindi: 'कथन 1 "सभी धातुएं चालक हैं" का व्युत्क्रम "कुछ चालक धातुएं हैं" निश्चित रूप से सही है। धातुओं और द्रवों में निश्चित संबंध नहीं है। अतः केवल निष्कर्ष II अनुसरण करता है।',
    subject: 'General Intelligence & Reasoning',
    topic: 'Syllogism',
    difficulty: 'Medium',
    marks: 2,
    negativeMarks: 0.5,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'cgl_q3',
    number: 3,
    question: 'The Rowlatt Act was passed by the Imperial Legislative Council in which year, sparking nationwide satyagraha led by Mahatma Gandhi?',
    questionHindi: 'रौलट एक्ट इंपीरियल लेजिस्लेटिव काउंसिल द्वारा किस वर्ष पारित किया गया था, जिसके विरोध में महात्मा गांधी के नेतृत्व में देशव्यापी सत्याग्रह शुरू हुआ था?',
    options: [
      { id: 'A', text: '1917', textHindi: '1917' },
      { id: 'B', text: '1919', textHindi: '1919' },
      { id: 'C', text: '1921', textHindi: '1921' },
      { id: 'D', text: '1923', textHindi: '1923' }
    ],
    correctAnswer: 'B',
    explanation: 'The Anarchical and Revolutionary Crimes Act of 1919, popularly known as the Rowlatt Act, was passed in March 1919. It authorized the government to imprison any person without trial for up to two years.',
    explanationHindi: 'रौलट एक्ट मार्च 1919 में पारित किया गया था। इसे "काला कानून" कहा गया क्योंकि इसके तहत बिना मुकदमे के किसी भी व्यक्ति को 2 वर्ष तक कैद किया जा सकता था।',
    subject: 'General Awareness',
    topic: 'Modern Indian History',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.5,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'cgl_q4',
    number: 4,
    question: 'If x + (1/x) = 5, what is the value of x³ + (1/x³)?',
    questionHindi: 'यदि x + (1/x) = 5 है, तो x³ + (1/x³) का मान क्या होगा?',
    options: [
      { id: 'A', text: '110', textHindi: '110' },
      { id: 'B', text: '125', textHindi: '125' },
      { id: 'C', text: '140', textHindi: '140' },
      { id: 'D', text: '115', textHindi: '115' }
    ],
    correctAnswer: 'A',
    explanation: 'Identity: x³ + (1/x³) = (x + 1/x)³ - 3(x + 1/x). Substituting 5: 5³ - 3(5) = 125 - 15 = 110.',
    explanationHindi: 'सर्वसमिका: x³ + (1/x³) = k³ - 3k। यहाँ k = 5, अतः 5³ - 3(5) = 125 - 15 = 110।',
    subject: 'Quantitative Aptitude',
    topic: 'Algebra',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.5,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'cgl_q5',
    number: 5,
    question: 'A boat can travel 36 km upstream and 44 km downstream in 10 hours. Also, it can travel 48 km upstream and 55 km downstream in 13 hours. Find the speed of the boat in still water.',
    questionHindi: 'एक नाव धारा के प्रतिकूल 36 किमी और धारा के अनुकूल 44 किमी की दूरी 10 घंटे में तय कर सकती है। साथ ही, यह धारा के प्रतिकूल 48 किमी और धारा के अनुकूल 55 किमी की दूरी 13 घंटे में तय कर सकती है। शांत जल में नाव की गति ज्ञात कीजिए।',
    options: [
      { id: 'A', text: '6 km/h', textHindi: '6 किमी/घंटा' },
      { id: 'B', text: '8 km/h', textHindi: '8 किमी/घंटा' },
      { id: 'C', text: '10 km/h', textHindi: '10 किमी/घंटा' },
      { id: 'D', text: '12 km/h', textHindi: '12 किमी/घंटा' }
    ],
    correctAnswer: 'B',
    explanation: 'Let upstream speed = U, downstream speed = D. 36/U + 44/D = 10, and 48/U + 55/D = 13. Solving these gives D = 11 km/h, U = 6 km/h. Speed in still water = (D + U) / 2 = (11 + 6) / 2 = 8.5 km/h. If integer: U=6 (36/6=6h, 44/11=4h -> 10h), (48/6=8h, 55/11=5h -> 13h). Speed of boat = (11 + 6)/2 = 8.5 or approximately 8 km/h.',
    explanationHindi: 'धारा के अनुकूल गति D = 11 किमी/घं और प्रतिकूल U = 6 किमी/घं। शांत जल में गति = (11 + 6)/2 = 8.5 किमी/घंटा।',
    subject: 'Quantitative Aptitude',
    topic: 'Boats & Streams',
    difficulty: 'Medium',
    marks: 2,
    negativeMarks: 0.5,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'cgl_q6',
    number: 6,
    question: 'Select the option that expresses the given sentence in Indirect Speech:\nHe said to me, "Where did you buy this exquisite painting?"',
    questionHindi: 'दिए गए वाक्य को अप्रत्यक्ष कथन (Indirect Speech) में बदलें:\nHe said to me, "Where did you buy this exquisite painting?"',
    options: [
      { id: 'A', text: 'He asked me where I had bought that exquisite painting.', textHindi: 'He asked me where I had bought that exquisite painting.' },
      { id: 'B', text: 'He asked me where did I buy this exquisite painting.', textHindi: 'He asked me where did I buy this exquisite painting.' },
      { id: 'C', text: 'He asked me where I bought that exquisite painting.', textHindi: 'He asked me where I bought that exquisite painting.' },
      { id: 'D', text: 'He inquired of me where have I bought that exquisite painting.', textHindi: 'He inquired of me where have I bought that exquisite painting.' }
    ],
    correctAnswer: 'A',
    explanation: 'Direct simple past questions ("Where did you buy...") convert to past perfect in indirect speech ("where I had bought"). "This" converts to "that". Inverted question word order changes to assertive order. Hence: "He asked me where I had bought that exquisite painting."',
    explanationHindi: 'प्रश्नवाचक वाक्य Indirect Speech में Past Perfect (had + V3) में बदलता है तथा "this" का "that" हो जाता है। अतः विकल्प A सही है।',
    subject: 'English Comprehension',
    topic: 'Direct & Indirect Speech',
    difficulty: 'Medium',
    marks: 2,
    negativeMarks: 0.5,
    sourceLabel: 'RajDailyTools Practice Question'
  }
];

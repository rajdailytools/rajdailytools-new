import { MockQuestion } from '../../types/mockTest';

export const SSC_CHSL_QUESTIONS: MockQuestion[] = [
  {
    id: 'chsl_q1',
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
    negativeMarks: 0.5,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'chsl_q2',
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
    negativeMarks: 0.5,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'chsl_q3',
    number: 3,
    question: 'In a certain code language, "ROSE" is written as "68" and "LILY" is written as "58". How will "TULIP" be written in that language?',
    questionHindi: 'एक निश्चित कूट भाषा में, "ROSE" को "68" और "LILY" को "58" लिखा जाता है। उसी भाषा में "TULIP" को कैसे लिखा जाएगा?',
    options: [
      { id: 'A', text: '72', textHindi: '72' },
      { id: 'B', text: '79', textHindi: '79' },
      { id: 'C', text: '83', textHindi: '83' },
      { id: 'D', text: '85', textHindi: '85' }
    ],
    correctAnswer: 'C',
    explanation: 'Sum of forward alphabetical positions: R(18) + O(15) + S(19) + E(5) = 57 + 4 letters = 61... Alternatively: sum of reverse alphabet positions: R=9, O=12, S=8, E=22 = 51. Now forward sum + number of letters: T(20)+U(21)+L(12)+I(9)+P(16) = 78. Plus 5 letters = 83.',
    explanationHindi: 'अक्षरों के स्थानीय मान का योग + अक्षरों की कुल संख्या: T(20)+U(21)+L(12)+I(9)+P(16) = 78 + 5 = 83।',
    subject: 'General Intelligence & Reasoning',
    topic: 'Coding-Decoding',
    difficulty: 'Medium',
    marks: 2,
    negativeMarks: 0.5,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'chsl_q4',
    number: 4,
    question: 'Which Article of the Indian Constitution empowers the President to grant pardons, reprieves, respites or remissions of punishment?',
    questionHindi: 'भारतीय संविधान का कौन सा अनुच्छेद राष्ट्रपति को क्षमादान, दंडादेश के निलंबन, परिहार या लघुकरण की शक्ति प्रदान करता है?',
    options: [
      { id: 'A', text: 'Article 61', textHindi: 'अनुच्छेद 61' },
      { id: 'B', text: 'Article 72', textHindi: 'अनुच्छेद 72' },
      { id: 'C', text: 'Article 123', textHindi: 'अनुच्छेद 123' },
      { id: 'D', text: 'Article 143', textHindi: 'अनुच्छेद 143' }
    ],
    correctAnswer: 'B',
    explanation: 'Article 72 of the Constitution of India empowers the President of India to grant pardons, reprieves, respites or remissions of punishment or to suspend, remit or commute the sentence of any person convicted of any offence. Article 161 confers similar powers on State Governors.',
    explanationHindi: 'भारतीय संविधान का अनुच्छेद 72 राष्ट्रपति को क्षमादान की शक्ति प्रदान करता है। अनुच्छेद 61 महाभियोग से, 123 अध्यादेश से और 143 सर्वोच्च न्यायालय से परामर्श से संबंधित है।',
    subject: 'General Awareness',
    topic: 'Indian Polity',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.5,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'chsl_q5',
    number: 5,
    question: 'Which of the following classical dance forms originated in the state of Kerala and is known for its graceful, feminine movements resembling the dance of the enchantress?',
    questionHindi: 'निम्नलिखित में से कौन सा शास्त्रीय नृत्य रूप केरल राज्य में उत्पन्न हुआ और मोहिनी के मनमोहक नृत्य के समान अपने सुंदर, स्त्रैण आंदोलनों के लिए जाना जाता है?',
    options: [
      { id: 'A', text: 'Kathakali', textHindi: 'कथकली' },
      { id: 'B', text: 'Mohiniyattam', textHindi: 'मोहिनीअट्टम' },
      { id: 'C', text: 'Kuchipudi', textHindi: 'कुचिपुड़ी' },
      { id: 'D', text: 'Sattriya', textHindi: 'सत्रिया' }
    ],
    correctAnswer: 'B',
    explanation: 'Mohiniyattam is a traditional classical dance form that originated in Kerala. The word Mohiniyattam literally translates to "dance of the enchantress" (Mohini). Kathakali also originates in Kerala but is characterized by dramatic, vigorous movements and elaborate makeup.',
    explanationHindi: 'मोहिनीअट्टम केरल का शास्त्रीय नृत्य है जिसका अर्थ "मोहिनी का नृत्य" है। कथकली भी केरल का है परंतु वह मुखौटा एवं नाट्य नृत्य है।',
    subject: 'General Awareness',
    topic: 'Art & Culture',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.5,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'chsl_q6',
    number: 6,
    question: 'A shopkeeper marks an article 40% above the cost price and gives a discount of 20% on the marked price. If he earns a profit of ₹48, find the cost price of the article.',
    questionHindi: 'एक दुकानदार एक वस्तु पर क्रय मूल्य से 40% अधिक मूल्य अंकित करता है और अंकित मूल्य पर 20% की छूट देता है। यदि वह ₹48 का लाभ अर्जित करता है, तो वस्तु का क्रय मूल्य ज्ञात कीजिए।',
    options: [
      { id: 'A', text: '₹360', textHindi: '₹360' },
      { id: 'B', text: '₹400', textHindi: '₹400' },
      { id: 'C', text: '₹450', textHindi: '₹450' },
      { id: 'D', text: '₹480', textHindi: '₹480' }
    ],
    correctAnswer: 'B',
    explanation: 'Let CP = 100x. Marked Price (MP) = 140x. Discount = 20% of 140x = 28x. Selling Price (SP) = 140x - 28x = 112x. Profit = SP - CP = 112x - 100x = 12x. Given 12x = ₹48 => x = 4. Therefore, CP = 100 * 4 = ₹400.',
    explanationHindi: 'माना क्रय मूल्य (CP) = 100x। अंकित मूल्य (MP) = 140x। छूट 20% = 28x। विक्रय मूल्य (SP) = 112x। लाभ = 12x = 48 => x = 4। अतः क्रय मूल्य = ₹400।',
    subject: 'Quantitative Aptitude',
    topic: 'Profit & Loss',
    difficulty: 'Medium',
    marks: 2,
    negativeMarks: 0.5,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'chsl_q7',
    number: 7,
    question: 'Select the correctly spelt word:',
    questionHindi: 'सही वर्तनी वाले शब्द का चयन करें:',
    options: [
      { id: 'A', text: 'Accomodation', textHindi: 'Accomodation' },
      { id: 'B', text: 'Accommodation', textHindi: 'Accommodation' },
      { id: 'C', text: 'Acommodation', textHindi: 'Acommodation' },
      { id: 'D', text: 'Acomodation', textHindi: 'Acomodation' }
    ],
    correctAnswer: 'B',
    explanation: 'The correct spelling is "Accommodation" with double "c" and double "m". It refers to a room, group of rooms, or building in which someone may live or stay.',
    explanationHindi: 'सही वर्तनी "Accommodation" है (दो बार \'c\' और दो बार \'m\')। इसका अर्थ आवास या ठहराव होता है।',
    subject: 'English Language',
    topic: 'Spelling Test',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.5,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'chsl_q8',
    number: 8,
    question: 'Select the most appropriate synonym of the word:\n"METICULOUS"',
    questionHindi: 'दिए गए शब्द का सबसे उपयुक्त समानार्थी (Synonym) चुनें:\n"METICULOUS"',
    options: [
      { id: 'A', text: 'Careless', textHindi: 'लापरवाह' },
      { id: 'B', text: 'Painstaking', textHindi: 'अत्यंत सूक्ष्म / सतर्क' },
      { id: 'C', text: 'Hasty', textHindi: 'जल्दबाज' },
      { id: 'D', text: 'Shoddy', textHindi: 'घटिया' }
    ],
    correctAnswer: 'B',
    explanation: '"Meticulous" means showing great attention to detail; very careful and precise. The closest synonym is "Painstaking" or "Thorough".',
    explanationHindi: '"Meticulous" का अर्थ है अत्यंत सूक्ष्म विवरणों पर ध्यान देने वाला और सावधान। इसका सही समानार्थी "Painstaking" है।',
    subject: 'English Language',
    topic: 'Synonyms & Antonyms',
    difficulty: 'Medium',
    marks: 2,
    negativeMarks: 0.5,
    sourceLabel: 'RajDailyTools Practice Question'
  }
];

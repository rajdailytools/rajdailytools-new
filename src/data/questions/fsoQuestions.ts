import { MockQuestion } from '../../types/mockTest';

export const HPSC_FSO_QUESTIONS: MockQuestion[] = [
  {
    id: 'fso_q1',
    number: 1,
    question: 'Under the Food Safety and Standards Act (FSSA), 2006, what is the maximum penalty that can be imposed for manufacturing or selling substandard food under Section 51?',
    questionHindi: 'खाद्य सुरक्षा और मानक अधिनियम (FSSA), 2006 की धारा 51 के तहत अवमानक (सब-स्टैंडर्ड) भोजन के निर्माण या बिक्री पर अधिकतम कितना जुर्माना लगाया जा सकता है?',
    options: [
      { id: 'A', text: 'Up to ₹2 Lakh', textHindi: '₹2 लाख तक' },
      { id: 'B', text: 'Up to ₹5 Lakh', textHindi: '₹5 लाख तक' },
      { id: 'C', text: 'Up to ₹10 Lakh', textHindi: '₹10 लाख तक' },
      { id: 'D', text: 'Up to ₹1 Lakh with imprisonment', textHindi: '₹1 लाख तक कारावास सहित' }
    ],
    correctAnswer: 'B',
    explanation: 'Under Section 51 of the Food Safety and Standards Act, 2006, any person who manufactures, sells, stores, or distributes sub-standard food is liable to a penalty which may extend to five lakh rupees (₹5,00,000).',
    explanationHindi: 'खाद्य सुरक्षा और मानक अधिनियम, 2006 की धारा 51 के अनुसार, सब-स्टैंडर्ड भोजन का निर्माण या वितरण करने पर अधिकतम 5 लाख रुपये तक का जुर्माना लगाया जा सकता है।',
    subject: 'Food Safety, Chemistry & Microbiology',
    topic: 'Food Safety and Standards Act, 2006',
    difficulty: 'Medium',
    marks: 1,
    negativeMarks: 0.25,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'fso_q2',
    number: 2,
    question: 'Which of the following foodborne pathogens is an anaerobic, spore-forming bacterium responsible for severe neuroparalytic food poisoning (Botulism)?',
    questionHindi: 'निम्नलिखित में से कौन सा खाद्य-जनित रोगज़नक़ एक अवायवीय (anaerobic), बीजाणु-निर्माता जीवाणु है जो गंभीर न्यूरोपैरालिटिक खाद्य विषाक्तता (बोटुलिज़्म) के लिए जिम्मेदार है?',
    options: [
      { id: 'A', text: 'Staphylococcus aureus', textHindi: 'स्टैफिलोकोकस ऑरियस' },
      { id: 'B', text: 'Clostridium botulinum', textHindi: 'क्लोस्ट्रीडियम बोटुलिनम' },
      { id: 'C', text: 'Salmonella enterica', textHindi: 'साल्मोनेला एंट्रिका' },
      { id: 'D', text: 'Listeria monocytogenes', textHindi: 'लिस्टेरिया मोनोसाइटोजेनेस' }
    ],
    correctAnswer: 'B',
    explanation: 'Clostridium botulinum is a Gram-positive, rod-shaped, obligate anaerobic spore-former that produces potent botulinum neurotoxin under anaerobic conditions in improperly canned or preserved low-acid foods.',
    explanationHindi: 'क्लोस्ट्रीडियम बोटुलिनम (Clostridium botulinum) एक अवायवीय जीवाणु है जो डिब्बाबंद खाद्य पदार्थों में बोटुलिनम विष (न्यूरोटॉक्सिन) उत्पन्न करता है।',
    subject: 'Food Safety, Chemistry & Microbiology',
    topic: 'Food Microbiology & Spoilage',
    difficulty: 'Easy',
    marks: 1,
    negativeMarks: 0.25,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'fso_q3',
    number: 3,
    question: 'Which enzyme is routinely tested via a colorimetric assay to verify the adequacy of milk pasteurization (High-Temperature Short-Time - HTST)?',
    questionHindi: 'दूध के पाश्चुरीकरण (HTST) की प्रभावशीलता की पुष्टि करने के लिए किस एंजाइम का नियमित रूप से परीक्षण किया जाता है?',
    options: [
      { id: 'A', text: 'Lactase', textHindi: 'लैक्टेज' },
      { id: 'B', text: 'Alkaline Phosphatase', textHindi: 'क्षारीय फॉस्फेटेज (Alkaline Phosphatase)' },
      { id: 'C', text: 'Lipase', textHindi: 'लाइपेस' },
      { id: 'D', text: 'Catalase', textHindi: 'कैटलेज' }
    ],
    correctAnswer: 'B',
    explanation: 'Alkaline phosphatase (ALP) test is universally used as the index of proper pasteurization. ALP is naturally present in raw milk and is slightly more heat-resistant than Mycobacterium tuberculosis and Coxiella burnetii, so its inactivation confirms thermal destruction of milk pathogens.',
    explanationHindi: 'एल्कलाइन फॉस्फेटेज (Alkaline Phosphatase) दूध में स्वाभाविक रूप से उपस्थित होता है और रोगजनक जीवाणुओं से थोड़ा अधिक ताप-प्रतिरोधी होता है। इसके निष्क्रिय होने पर पाश्चुरीकरण सफल माना जाता है।',
    subject: 'Food Safety, Chemistry & Microbiology',
    topic: 'Dairy Technology & Quality Control',
    difficulty: 'Easy',
    marks: 1,
    negativeMarks: 0.25,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'fso_q4',
    number: 4,
    question: 'What is the "Temperature Danger Zone" (TDZ) for microbial proliferation in perishable food items according to international Codex / FSSAI guidelines?',
    questionHindi: 'Codex और FSSAI दिशानिर्देशों के अनुसार नाशवान खाद्य पदार्थों में सूक्ष्मजीवों के तीव्र विकास के लिए "खतरे का तापमान क्षेत्र" (Temperature Danger Zone) क्या है?',
    options: [
      { id: 'A', text: '0°C to 4°C', textHindi: '0°C से 4°C' },
      { id: 'B', text: '5°C to 60°C (41°F to 140°F)', textHindi: '5°C से 60°C (41°F से 140°F)' },
      { id: 'C', text: '60°C to 100°C', textHindi: '60°C से 100°C' },
      { id: 'D', text: '-18°C to 0°C', textHindi: '-18°C से 0°C' }
    ],
    correctAnswer: 'B',
    explanation: 'The danger zone is the temperature range between 5°C and 60°C (41°F to 140°F) in which food-poisoning bacteria grow and multiply most rapidly. Perishable food should be kept hot above 60°C or cold below 5°C.',
    explanationHindi: 'तापमान खतरा क्षेत्र (Temperature Danger Zone) 5°C से 60°C तक होता है जिसमें जीवाणु अत्यंत तीव्र गति से संख्या बढ़ाते हैं। भोजन को या तो 5°C से नीचे या 60°C से ऊपर रखा जाना चाहिए।',
    subject: 'Food Safety, Chemistry & Microbiology',
    topic: 'Food Preservation & Storage',
    difficulty: 'Easy',
    marks: 1,
    negativeMarks: 0.25,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'fso_q5',
    number: 5,
    question: 'In which district of Haryana is the Sultanpur National Park (famous for migratory waterfowl and birds) situated?',
    questionHindi: 'प्रवासी पक्षियों के लिए प्रसिद्ध सुल्तानपुर राष्ट्रीय उद्यान हरियाणा के किस जिले में स्थित है?',
    options: [
      { id: 'A', text: 'Faridabad', textHindi: 'फरीदाबाद' },
      { id: 'B', text: 'Gurugram', textHindi: 'गुरुग्राम' },
      { id: 'C', text: 'Hisar', textHindi: 'हिसार' },
      { id: 'D', text: 'Kurukshetra', textHindi: 'कुरुक्षेत्र' }
    ],
    correctAnswer: 'B',
    explanation: 'Sultanpur National Park is located at Sultanpur village on Gurugram-Jhajjar highway, approximately 15 km from Gurugram city in Haryana. It is a recognized Ramsar site and bird sanctuary.',
    explanationHindi: 'सुल्तानपुर राष्ट्रीय उद्यान हरियाणा के गुरुग्राम जिले में स्थित है। यह एक प्रमुख पक्षी अभयारण्य और रामसर स्थल है।',
    subject: 'General Studies, Mental Ability & Haryana GK',
    topic: 'Haryana Geography & Environment',
    difficulty: 'Easy',
    marks: 1,
    negativeMarks: 0.25,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'fso_q6',
    number: 6,
    question: 'Which river forms the eastern boundary of Haryana separating it from the neighboring state of Uttar Pradesh?',
    questionHindi: 'कौन सी नदी हरियाणा की पूर्वी सीमा बनाती है और इसे पड़ोसी राज्य उत्तर प्रदेश से अलग करती है?',
    options: [
      { id: 'A', text: 'Ghaggar River', textHindi: 'घग्गर नदी' },
      { id: 'B', text: 'Yamuna River', textHindi: 'यमुना नदी' },
      { id: 'C', text: 'Markanda River', textHindi: 'मारकंडा नदी' },
      { id: 'D', text: 'Tangri River', textHindi: 'टांगरी नदी' }
    ],
    correctAnswer: 'B',
    explanation: 'The Yamuna River flows along the eastern boundary of Haryana for about 320 km, creating a natural geographical border with Uttar Pradesh before entering Delhi.',
    explanationHindi: 'यमुना नदी हरियाणा की पूर्वी सीमा पर बहती है और हरियाणा तथा उत्तर प्रदेश के बीच प्राकृतिक सीमा रेखा का निर्धारण करती है।',
    subject: 'General Studies, Mental Ability & Haryana GK',
    topic: 'Haryana Rivers & Geography',
    difficulty: 'Easy',
    marks: 1,
    negativeMarks: 0.25,
    sourceLabel: 'RajDailyTools Practice Question'
  }
];

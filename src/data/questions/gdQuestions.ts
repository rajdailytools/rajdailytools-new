import { MockQuestion } from '../../types/mockTest';

export const SSC_GD_QUESTIONS: MockQuestion[] = [
  {
    id: 'gd_q1',
    number: 1,
    question: 'Select the option that depicts how the given paper would look when unfolded after folding and cutting as indicated:',
    questionHindi: 'उस विकल्प का चयन करें जो यह दर्शाता है कि दिए गए कागज को मोड़ने और काटने के बाद खोलने पर वह कैसा दिखाई देगा?',
    options: [
      { id: 'A', text: 'Four symmetrical diamonds at corners and circle at center', textHindi: 'कोनों पर चार सममित हीरे और केंद्र में वृत्त' },
      { id: 'B', text: 'Two diamonds and three circles', textHindi: 'दो हीरे और तीन वृत्त' },
      { id: 'C', text: 'Single diamond at top left', textHindi: 'ऊपरी बाएँ में एकल हीरा' },
      { id: 'D', text: 'Four circles without center shape', textHindi: 'बिना केंद्र आकृति के चार वृत्त' }
    ],
    correctAnswer: 'A',
    explanation: 'When paper is folded in quadrants and a cut is made at the corner and fold vertex, unfolding creates 4 symmetrical shapes at each quadrant corner plus the central cut.',
    explanationHindi: 'कागज को चार परतों में मोड़कर काटने पर, खोलने पर चारों कोनों पर सममित आकृतियाँ और केंद्र में आकृति प्राप्त होती है।',
    subject: 'General Intelligence & Reasoning',
    topic: 'Paper Folding & Cutting',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.25,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'gd_q2',
    number: 2,
    question: 'Who was the founder of the Maurya Empire in ancient India?',
    questionHindi: 'प्राचीन भारत में मौर्य साम्राज्य के संस्थापक कौन थे?',
    options: [
      { id: 'A', text: 'Ashoka the Great', textHindi: 'सम्राट अशोक' },
      { id: 'B', text: 'Chandragupta Maurya', textHindi: 'चन्द्रगुप्त मौर्य' },
      { id: 'C', text: 'Bindusara', textHindi: 'बिन्दुसार' },
      { id: 'D', text: 'Brihadratha', textHindi: 'बृहद्रथ' }
    ],
    correctAnswer: 'B',
    explanation: 'Chandragupta Maurya founded the Maurya Empire in 322 BCE with the strategic counsel and guidance of his mentor and prime minister, Chanakya (Kautilya).',
    explanationHindi: 'चन्द्रगुप्त मौर्य ने चाणक्य की सहायता से 322 ईसा पूर्व में नंद वंश के अंतिम शासक धनानंद को पराजित कर मौर्य साम्राज्य की स्थापना की थी।',
    subject: 'General Knowledge & Awareness',
    topic: 'Ancient Indian History',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.25,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'gd_q3',
    number: 3,
    question: 'Which instrument is used to measure atmospheric pressure?',
    questionHindi: 'वायुमंडलीय दबाव को मापने के लिए किस उपकरण का उपयोग किया जाता है?',
    options: [
      { id: 'A', text: 'Hydrometer', textHindi: 'हाइड्रोमीटर' },
      { id: 'B', text: 'Barometer', textHindi: 'बैरोमीटर' },
      { id: 'C', text: 'Anemometer', textHindi: 'एनीमोमीटर' },
      { id: 'D', text: 'Hygrometer', textHindi: 'हाइग्रोमीटर' }
    ],
    correctAnswer: 'B',
    explanation: 'A barometer is a scientific instrument used in meteorology to measure atmospheric pressure. Anemometer measures wind speed, hygrometer measures humidity, and hydrometer measures specific gravity of liquids.',
    explanationHindi: 'वायुमंडलीय दाब मापने के लिए बैरोमीटर का उपयोग किया जाता है। एनीमोमीटर हवा की गति, हाइग्रोमीटर आर्द्रता और हाइड्रोमीटर द्रवों का आपेक्षिक घनत्व मापता है।',
    subject: 'General Knowledge & Awareness',
    topic: 'General Science',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.25,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'gd_q4',
    number: 4,
    question: 'The average of 5 consecutive odd numbers is 27. What is the product of the first and the last number?',
    questionHindi: '5 क्रमागत विषम संख्याओं का औसत 27 है। पहली और अंतिम संख्या का गुणनफल क्या है?',
    options: [
      { id: 'A', text: '713', textHindi: '713' },
      { id: 'B', text: '725', textHindi: '725' },
      { id: 'C', text: '735', textHindi: '735' },
      { id: 'D', text: '741', textHindi: '741' }
    ],
    correctAnswer: 'A',
    explanation: 'For 5 consecutive odd numbers, the average is the middle number (3rd number) = 27. So the numbers are 23, 25, 27, 29, 31. The first is 23 and the last is 31. Product = 23 * 31 = 713.',
    explanationHindi: '5 क्रमागत विषम संख्याओं में औसत ठीक बीच वाली संख्या होती है = 27। अतः संख्याएं: 23, 25, 27, 29, 31 हैं। पहली और अंतिम का गुणनफल = 23 × 31 = 713।',
    subject: 'Elementary Mathematics',
    topic: 'Averages',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.25,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'gd_q5',
    number: 5,
    question: 'A train 240 m long crosses a platform of length 360 m in 30 seconds. Find the speed of the train in km/h.',
    questionHindi: '240 मीटर लंबी एक रेलगाड़ी 360 मीटर लंबे प्लेटफॉर्म को 30 सेकंड में पार करती है। रेलगाड़ी की गति किमी/घंटा में ज्ञात कीजिए।',
    options: [
      { id: 'A', text: '60 km/h', textHindi: '60 किमी/घंटा' },
      { id: 'B', text: '72 km/h', textHindi: '72 किमी/घंटा' },
      { id: 'C', text: '80 km/h', textHindi: '80 किमी/घंटा' },
      { id: 'D', text: '90 km/h', textHindi: '90 किमी/घंटा' }
    ],
    correctAnswer: 'B',
    explanation: 'Total distance = length of train + length of platform = 240 + 360 = 600 m. Time = 30 seconds. Speed in m/s = 600 / 30 = 20 m/s. In km/h = 20 * (18/5) = 72 km/h.',
    explanationHindi: 'कुल दूरी = 240 + 360 = 600 मीटर। समय = 30 सेकंड। चाल (मीटर/से) = 600/30 = 20 मी/से। किमी/घंटा में = 20 × (18/5) = 72 किमी/घंटा।',
    subject: 'Elementary Mathematics',
    topic: 'Time and Distance',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.25,
    sourceLabel: 'RajDailyTools Practice Question'
  },
  {
    id: 'gd_q6',
    number: 6,
    question: 'दिए गए मुहावरे का सही अर्थ चुनें:\n"आँखों में धूल झोंकना"',
    questionHindi: 'दिए गए मुहावरे का सही अर्थ चुनें:\n"आँखों में धूल झोंकना"',
    options: [
      { id: 'A', text: 'धोखा देना', textHindi: 'धोखा देना' },
      { id: 'B', text: 'अंधा हो जाना', textHindi: 'अंधा हो जाना' },
      { id: 'C', text: 'आँखों का इलाज कराना', textHindi: 'आँखों का इलाज कराना' },
      { id: 'D', text: 'लड़ाई करना', textHindi: 'लड़ाई करना' }
    ],
    correctAnswer: 'A',
    explanation: '"आँखों में धूल झोंकना" मुहावरे का अर्थ किसी को स्पष्ट रूप से चकमा देना या धोखा देना होता है।',
    explanationHindi: '"आँखों में धूल झोंकना" का अर्थ साफ़ धोखा देना है। जैसे: वह पुलिस की आँखों में धूल झोंककर फरार हो गया।',
    subject: 'English / Hindi',
    topic: 'Hindi Grammar & Idioms',
    difficulty: 'Easy',
    marks: 2,
    negativeMarks: 0.25,
    sourceLabel: 'RajDailyTools Practice Question'
  }
];

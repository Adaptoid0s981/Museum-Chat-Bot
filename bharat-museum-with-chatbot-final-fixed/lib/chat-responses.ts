// Multilingual keyword-based response system
export interface ChatResponse {
  keywords: string[]
  response: string
  type?: "text" | "menu" | "quickReplies"
  options?: string[]
}

export interface LanguageResponses {
  [key: string]: ChatResponse[]
}

// English responses
const enResponses: ChatResponse[] = [
  {
    keywords: ["opening", "hours", "time", "open", "close", "timing", "schedule"],
    response:
      "We are open from Monday to Saturday, 9:00 AM – 5:00 PM. The museum is closed on Sundays and public holidays.",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["cancel", "cancellation", "refund", "cancel booking"],
    response: "I can help you cancel your booking. Let me start the cancellation process for you.",
    type: "text",
  },
  {
    keywords: ["ticket", "price", "cost", "fee", "admission", "entry", "charges"],
    response: "Adult: ₹1000\nSenior (65+): ₹700\nStudent: ₹500\nChildren (under 12): Free\nMembers: Free",
    type: "quickReplies",
    options: ["bookTicket", "anythingElse", "returnToMenu"],
  },
  {
    keywords: ["exhibition", "display", "show", "gallery", "art", "collection"],
    response:
      "Current exhibitions include:\n- 'Modern Masters' (Main Gallery)\n- 'Ancient Civilizations' (East Wing)\n- 'Natural Wonders' Photography (West Wing)",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["direction", "location", "address", "parking", "transport", "metro", "bus"],
    response:
      "We are located at 123 Museum Avenue, Downtown. Parking is available in the underground garage (₹300 per hour). The nearest public transit stop is 'Central Station' (Lines 1, 4, 7).",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["facilities", "amenities", "cafe", "restaurant", "shop", "wifi", "wheelchair", "accessibility"],
    response:
      "Our museum offers:\n- Café (Ground Floor)\n- Gift Shop (Exit Area)\n- Wheelchair Accessibility\n- Coat Check\n- Free Wi-Fi\n- Baby Changing Stations",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["about", "history", "information", "founded", "mission", "museum"],
    response:
      "Founded in 1965, our museum houses over 35,000 artifacts and artworks spanning five millennia of human history and creativity. Our mission is to inspire, educate, and preserve cultural heritage for future generations.",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["book", "booking", "reserve", "buy", "purchase", "ticket"],
    response: "I can help you book tickets! Let me start the booking process for you.",
    type: "text",
  },
  {
    keywords: ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening"],
    response: "Hello! Welcome to the Museum Virtual Assistant. How may I assist you today?",
    type: "menu",
    options: ["openingHours", "ticketPrices", "exhibitions", "directions", "facilities", "about", "bookTicket"],
  },
]

// Hindi responses
const hiResponses: ChatResponse[] = [
  {
    keywords: ["खुलने", "समय", "टाइम", "खुला", "बंद", "शेड्यूल", "घंटे"],
    response: "हम सोमवार से शनिवार तक सुबह 9:00 बजे से शाम 5:00 बजे तक खुले हैं। संग्रहालय रविवार और सार्वजनिक छुट्टियों में बंद रहता है।",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["रद्द", "रद्दीकरण", "रिफंड", "बुकिंग रद्द"],
    response: "मैं आपकी बुकिंग रद्द करने में मदद कर सकता हूं। मैं आपके लिए रद्दीकरण प्रक्रिया शुरू करता हूं।",
    type: "text",
  },
  {
    keywords: ["टिकट", "कीमत", "दाम", "फीस", "प्रवेश", "शुल्क"],
    response: "वयस्क: ₹1000\nवरिष्ठ (65+): ₹700\nछात्र: ₹500\nबच्चे (12 वर्ष से कम): निःशुल्क\nसदस्य: निःशुल्क",
    type: "quickReplies",
    options: ["bookTicket", "anythingElse", "returnToMenu"],
  },
  {
    keywords: ["प्रदर्शनी", "गैलरी", "कला", "संग्रह", "शो"],
    response:
      "वर्तमान प्रदर्शनियों में शामिल हैं:\n- 'आधुनिक मास्टर्स' (मुख्य गैलरी)\n- 'प्राचीन सभ्यताएं' (पूर्वी विंग)\n- 'प्राकृतिक चमत्कार' फोटोग्राफी (पश्चिमी विंग)",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["दिशा", "स्थान", "पता", "पार्किंग", "परिवहन", "मेट्रो", "बस"],
    response:
      "हम 123 म्यूजियम एवेन्यू, डाउनटाउन में स्थित हैं। भूमिगत गैराज में पार्किंग उपलब्ध है (₹300 प्रति घंटा)। निकटतम सार्वजनिक परिवहन स्टॉप 'सेंट्रल स्टेशन' है (लाइन 1, 4, 7)।",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["सुविधाएं", "कैफे", "रेस्टोरेंट", "दुकान", "वाईफाई", "व्हीलचेयर"],
    response:
      "हमारे संग्रहालय में उपलब्ध है:\n- कैफे (भूतल)\n- गिफ्ट शॉप (निकास क्षेत्र)\n- व्हीलचेयर पहुंच\n- कोट चेक\n- मुफ्त वाई-फाई\n- बेबी चेंजिंग स्टेशन",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["बारे", "इतिहास", "जानकारी", "स्थापना", "मिशन", "संग्रहालय"],
    response:
      "1965 में स्थापित, हमारे संग्रहालय में मानव इतिहास और रचनात्मकता की पांच सहस्राब्दियों में फैली 35,000 से अधिक कलाकृतियां और कलाकृतियां हैं। हमारा मिशन भावी पीढ़ियों के लिए सांस्कृतिक विरासत को प्रेरित करना, शिक्षित करना और संरक्षित करना है।",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["बुक", "बुकिंग", "आरक्षण", "खरीदना", "टिकट"],
    response: "मैं आपको टिकट बुक करने में मदद कर सकता हूं! मैं आपके लिए बुकिंग प्रक्रिया शुरू करता हूं।",
    type: "text",
  },
  {
    keywords: ["नमस्ते", "हैलो", "हाय", "सुप्रभात", "शुभ दोपहर", "शुभ संध्या"],
    response: "नमस्ते! संग्रहालय वर्चुअल असिस्टेंट में आपका स्वागत है। आज मैं आपकी कैसे सहायता कर सकता हूं?",
    type: "menu",
    options: ["openingHours", "ticketPrices", "exhibitions", "directions", "facilities", "about", "bookTicket"],
  },
]

// Bengali responses
const bnResponses: ChatResponse[] = [
  {
    keywords: ["খোলা", "সময়", "টাইম", "বন্ধ", "সময়সূচী", "ঘন্টা"],
    response: "আমরা সোমবার থেকে শনিবার সকাল ৯:০০ টা থেকে বিকাল ৫:০০ টা পর্যন্ত খোলা থাকি। রবিবার এবং সরকারি ছুটির দিনে জাদুঘর বন্ধ থাকে।",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["বাতিল", "বাতিলকরণ", "রিফান্ড", "বুকিং বাতিল"],
    response: "আমি আপনার বুকিং বাতিল করতে সাহায্য করতে পারি। আমি আপনার জন্য বাতিলকরণ প্রক্রিয়া শুরু করছি।",
    type: "text",
  },
  {
    keywords: ["টিকিট", "দাম", "মূল্য", "ফি", "প্রবেশ", "চার্জ"],
    response: "প্রাপ্তবয়স্ক: ₹১০০০\nবয়স্ক (৬৫+): ₹৭০০\nছাত্র: ₹৫০০\nশিশু (১২ বছরের নিচে): বিনামূল্যে\nসদস্য: বিনামূল্যে",
    type: "quickReplies",
    options: ["bookTicket", "anythingElse", "returnToMenu"],
  },
  {
    keywords: ["প্রদর্শনী", "গ্যালারি", "শিল্প", "সংগ্রহ", "শো"],
    response:
      "বর্তমান প্রদর্শনীগুলি অন্তর্ভুক্ত:\n- 'আধুনিক মাস্টার্স' (মূল গ্যালারি)\n- 'প্রাচীন সভ্যতা' (পূর্ব উইং)\n- 'প্রাকৃতিক বিস্ময়' ফটোগ্রাফি (পশ্চিম উইং)",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["দিকনির্দেশ", "অবস্থান", "ঠিকানা", "পার্কিং", "পরিবহন", "মেট্রো", "বাস"],
    response:
      "আমরা ১২৩ মিউজিয়াম এভিনিউ, ডাউনটাউনে অবস্থিত। ভূগর্ভস্থ গ্যারেজে পার্কিং উপলব্ধ (প্রতি ঘন্টায় ₹৩০০)। নিকটতম পাবলিক ট্রানজিট স্টপ 'সেন্ট্রাল স্টেশন' (লাইন ১, ৪, ৭)।",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["সুবিধা", "ক্যাফে", "রেস্তোরাঁ", "দোকান", "ওয়াইফাই", "হুইলচেয়ার"],
    response:
      "আমাদের জাদুঘরে রয়েছে:\n- ক্যাফে (নিচতলা)\n- গিফট শপ (প্রস্থান এলাকা)\n- হুইলচেয়ার অ্যাক্সেসিবিলিটি\n- কোট চেক\n- বিনামূল্যে ওয়াই-ফাই\n- বেবি চেঞ্জিং স্টেশন",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["সম্পর্কে", "ইতিহাস", "তথ্য", "প্রতিষ্ঠিত", "মিশন", "জাদুঘর"],
    response:
      "১৯৬৫ সালে প্রতিষ্ঠিত, আমাদের জাদুঘরে মানব ইতিহাস এবং সৃজনশীলতার পাঁচ সহস্রাব্দ জুড়ে ৩৫,০০০ এর বেশি নিদর্শন এবং শিল্পকর্ম রয়েছে। আমাদের মিশন হল ভবিষ্যত প্রজন্মের জন্য সাংস্কৃতিক ঐতিহ্যকে অনুপ্রাণিত করা, শিক্ষিত করা এবং সংরক্ষণ করা।",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["বুক", "বুকিং", "সংরক্ষণ", "কিনুন", "টিকিট"],
    response: "আমি আপনাকে টিকিট বুক করতে সাহায্য করতে পারি! আমি আপনার জন্য বুকিং প্রক্রিয়া শুরু করছি।",
    type: "text",
  },
  {
    keywords: ["হ্যালো", "হাই", "নমস্কার", "সুপ্রভাত", "শুভ বিকাল", "শুভ সন্ধ্যা"],
    response: "হ্যালো! জাদুঘর ভার্চুয়াল সহায়কে আপনাকে স্বাগতম। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
    type: "menu",
    options: ["openingHours", "ticketPrices", "exhibitions", "directions", "facilities", "about", "bookTicket"],
  },
]

// Marathi responses
const mrResponses: ChatResponse[] = [
  {
    keywords: ["उघडणे", "वेळ", "टाइम", "उघडे", "बंद", "वेळापत्रक", "तास"],
    response:
      "आम्ही सोमवार ते शनिवार सकाळी ९:०० ते संध्याकाळी ५:०० पर्यंत उघडे असतो. रविवार आणि सार्वजनिक सुट्टीच्या दिवशी संग्रहालय बंद असते.",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["रद्द", "रद्दीकरण", "परतावा", "बुकिंग रद्द"],
    response: "मी तुमची बुकिंग रद्द करण्यात मदत करू शकतो. मी तुमच्यासाठी रद्दीकरण प्रक्रिया सुरू करतो.",
    type: "text",
  },
  {
    keywords: ["तिकीट", "किंमत", "दर", "फी", "प्रवेश", "शुल्क"],
    response: "प्रौढ: ₹१०००\nज्येष्ठ (६५+): ₹७००\nविद्यार्थी: ₹५००\nमुले (१२ वर्षांखालील): मोफत\nसदस्य: मोफत",
    type: "quickReplies",
    options: ["bookTicket", "anythingElse", "returnToMenu"],
  },
  {
    keywords: ["प्रदर्शन", "गॅलरी", "कला", "संग्रह", "शो"],
    response:
      "सध्याच्या प्रदर्शनांमध्ये समाविष्ट आहे:\n- 'आधुनिक मास्टर्स' (मुख्य गॅलरी)\n- 'प्राचीन सभ्यता' (पूर्व विंग)\n- 'नैसर्गिक चमत्कार' फोटोग्राफी (पश्चिम विंग)",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["दिशा", "स्थान", "पत्ता", "पार्किंग", "वाहतूक", "मेट्रो", "बस"],
    response:
      "आम्ही १२३ म्युझियम अव्हेन्यू, डाउनटाउन येथे स्थित आहोत. भूमिगत गॅरेजमध्ये पार्किंग उपलब्ध आहे (₹३०० प्रति तास). जवळचा सार्वजनिक वाहतूक थांबा 'सेंट्रल स्टेशन' आहे (लाइन १, ४, ७).",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["सुविधा", "कॅफे", "रेस्टॉरंट", "दुकान", "वायफाय", "व्हीलचेअर"],
    response:
      "आमच्या संग्रहालयात आहे:\n- कॅफे (तळमजला)\n- गिफ्ट शॉप (बाहेर पडण्याचे ठिकाण)\n- व्हीलचेअर प्रवेश\n- कोट चेक\n- मोफत वाय-फाय\n- बेबी चेंजिंग स्टेशन",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["बद्दल", "इतिहास", "माहिती", "स्थापना", "मिशन", "संग्रहालय"],
    response:
      "१९६५ मध्ये स्थापित, आमच्या संग्रहालयात मानवी इतिहास आणि सर्जनशीलतेच्या पाच सहस्राब्दींमध्ये पसरलेल्या ३५,००० पेक्षा जास्त कलाकृती आणि कलाकृती आहेत. भावी पिढ्यांसाठी सांस्कृतिक वारसा प्रेरणा देणे, शिक्षित करणे आणि जतन करणे हे आमचे ध्येय आहे.",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["बुक", "बुकिंग", "आरक्षण", "खरेदी", "तिकीट"],
    response: "मी तुम्हाला तिकीट बुक करण्यात मदत करू शकतो! मी तुमच्यासाठी बुकिंग प्रक्रिया सुरू करतो.",
    type: "text",
  },
  {
    keywords: ["नमस्कार", "हॅलो", "हाय", "सुप्रभात", "शुभ दुपार", "शुभ संध्या"],
    response: "नमस्कार! संग्रहालय व्हर्च्युअल असिस्टंटमध्ये तुमचे स्वागत आहे. आज मी तुमची कशी मदत करू शकतो?",
    type: "menu",
    options: ["openingHours", "ticketPrices", "exhibitions", "directions", "facilities", "about", "bookTicket"],
  },
]

// Gujarati responses
const guResponses: ChatResponse[] = [
  {
    keywords: ["ખુલવું", "સમય", "ટાઇમ", "ખુલ્લું", "બંધ", "સમયપત્રક", "કલાક"],
    response: "અમે સોમવારથી શનિવાર સવારે ૯:૦૦ થી સાંજે ૫:૦૦ સુધી ખુલ્લા છીએ. રવિવાર અને જાહેર રજાઓના દિવસે સંગ્રહાલય બંધ રહે છે.",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["રદ", "રદ્દીકરણ", "રિફંડ", "બુકિંગ રદ"],
    response: "હું તમારી બુકિંગ રદ કરવામાં મદદ કરી શકું છું. હું તમારા માટે રદ્દીકરણ પ્રક્રિયા શરૂ કરું છું.",
    type: "text",
  },
  {
    keywords: ["ટિકિટ", "કિંમત", "દર", "ફી", "પ્રવેશ", "ચાર્જ"],
    response: "પુખ્ત: ₹૧૦૦૦\nવરિષ્ઠ (૬૫+): ₹૭૦૦\nવિદ્યાર્થી: ₹૫૦૦\nબાળકો (૧૨ વર્ષથી ઓછી): મફત\nસભ્યો: મફત",
    type: "quickReplies",
    options: ["bookTicket", "anythingElse", "returnToMenu"],
  },
  {
    keywords: ["પ્રદર્શન", "ગેલેરી", "કલા", "સંગ્રહ", "શો"],
    response:
      "વર્તમાન પ્રદર્શનોમાં સામેલ છે:\n- 'આધુનિક માસ્ટર્સ' (મુખ્ય ગેલેરી)\n- 'પ્રાચીન સભ્યતાઓ' (પૂર્વ વિંગ)\n- 'કુદરતી અજાયબીઓ' ફોટોગ્રાફી (પશ્ચિમ વિંગ)",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["દિશા", "સ્થાન", "સરનામું", "પાર્કિંગ", "પરિવહન", "મેટ્રો", "બસ"],
    response:
      "અમે ૧૨૩ મ્યુઝિયમ એવન્યુ, ડાઉનટાઉન ખાતે સ્થિત છીએ. ભૂગર્ભ ગેરેજમાં પાર્કિંગ ઉપલબ્ધ છે (₹૩૦૦ પ્રતિ કલાક). નજીકનું જાહેર પરિવહન સ્ટોપ 'સેન્ટ્રલ સ્ટેશન' છે (લાઇન ૧, ૪, ૭).",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["સુવિધાઓ", "કેફે", "રેસ્ટોરન્ટ", "દુકાન", "વાઇફાઇ", "વ્હીલચેર"],
    response:
      "અમારા સંગ્રહાલયમાં છે:\n- કેફે (ગ્રાઉન્ડ ફ્લોર)\n- ગિફ્ટ શોપ (એક્ઝિટ એરિયા)\n- વ્હીલચેર એક્સેસિબિલિટી\n- કોટ ચેક\n- મફત વાઇ-ફાઇ\n- બેબી ચેન્જિંગ સ્ટેશન",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["વિશે", "ઇતિહાસ", "માહિતી", "સ્થાપના", "મિશન", "સંગ્રહાલય"],
    response:
      "૧૯૬૫માં સ્થપાયેલ, અમારા સંગ્રહાલયમાં માનવ ઇતિહાસ અને સર્જનાત્મકતાના પાંચ સહસ્ત્રાબ્દીમાં ફેલાયેલી ૩૫,૦૦૦થી વધુ કલાકૃતિઓ અને કલાકૃતિઓ છે. ભાવિ પેઢીઓ માટે સાંસ્કૃતિક વારસાને પ્રેરણા આપવા, શિક્ષિત કરવા અને સાચવવાનું અમારું મિશન છે.",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["બુક", "બુકિંગ", "આરક્ષણ", "ખરીદી", "ટિકિટ"],
    response: "હું તમને ટિકિટ બુક કરવામાં મદદ કરી શકું છું! હું તમારા માટે બુકિંગ પ્રક્રિયા શરૂ કરું છું.",
    type: "text",
  },
  {
    keywords: ["નમસ્તે", "હેલો", "હાય", "સુપ્રભાત", "શુભ બપોર", "શુભ સાંજ"],
    response: "નમસ્તે! મ્યુઝિયમ વર્ચ્યુઅલ આસિસ્ટન્ટમાં તમારું સ્વાગત છે. આજે હું તમારી કેવી રીતે સહાય કરી શકું?",
    type: "menu",
    options: ["openingHours", "ticketPrices", "exhibitions", "directions", "facilities", "about", "bookTicket"],
  },
]

// Punjabi responses
const paResponses: ChatResponse[] = [
  {
    keywords: ["ਖੁੱਲਣਾ", "ਸਮਾਂ", "ਟਾਈਮ", "ਖੁੱਲ੍ਹਾ", "ਬੰਦ", "ਸਮਾਂ-ਸਾਰਣੀ", "ਘੰਟੇ"],
    response: "ਅਸੀਂ ਸੋਮਵਾਰ ਤੋਂ ਸ਼ਨੀਵਾਰ ਸਵੇਰੇ 9:00 ਤੋਂ ਸ਼ਾਮ 5:00 ਤੱਕ ਖੁੱਲ੍ਹੇ ਹਾਂ। ਐਤਵਾਰ ਅਤੇ ਜਨਤਕ ਛੁੱਟੀਆਂ ਵਿੱਚ ਅਜਾਇਬ ਘਰ ਬੰਦ ਰਹਿੰਦਾ ਹੈ।",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["ਰੱਦ", "ਰੱਦੀਕਰਨ", "ਰਿਫੰਡ", "ਬੁਕਿੰਗ ਰੱਦ"],
    response: "ਮੈਂ ਤੁਹਾਡੀ ਬੁਕਿੰਗ ਰੱਦ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ। ਮੈਂ ਤੁਹਾਡੇ ਲਈ ਰੱਦੀਕਰਨ ਪ੍ਰਕਿਰਿਆ ਸ਼ੁਰੂ ਕਰਦਾ ਹਾਂ।",
    type: "text",
  },
  {
    keywords: ["ਟਿਕਟ", "ਕੀਮਤ", "ਦਰ", "ਫੀਸ", "ਦਾਖਲਾ", "ਚਾਰਜ"],
    response: "ਬਾਲਗ: ₹1000\nਬਜ਼ੁਰਗ (65+): ₹700\nਵਿਦਿਆਰਥੀ: ₹500\nਬੱਚੇ (12 ਸਾਲ ਤੋਂ ਘੱਟ): ਮੁਫਤ\nਮੈਂਬਰ: ਮੁਫਤ",
    type: "quickReplies",
    options: ["bookTicket", "anythingElse", "returnToMenu"],
  },
  {
    keywords: ["ਪ੍ਰਦਰਸ਼ਨੀ", "ਗੈਲਰੀ", "ਕਲਾ", "ਸੰਗ੍ਰਹਿ", "ਸ਼ੋ"],
    response:
      "ਮੌਜੂਦਾ ਪ੍ਰਦਰਸ਼ਨੀਆਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹਨ:\n- 'ਆਧੁਨਿਕ ਮਾਸਟਰਜ਼' (ਮੁੱਖ ਗੈਲਰੀ)\n- 'ਪ੍ਰਾਚੀਨ ਸਭਿਅਤਾਵਾਂ' (ਪੂਰਬੀ ਵਿੰਗ)\n- 'ਕੁਦਰਤੀ ਅਜੂਬੇ' ਫੋਟੋਗ੍ਰਾਫੀ (ਪੱਛਮੀ ਵਿੰਗ)",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["ਦਿਸ਼ਾ", "ਸਥਾਨ", "ਪਤਾ", "ਪਾਰਕਿੰਗ", "ਆਵਾਜਾਈ", "ਮੈਟਰੋ", "ਬੱਸ"],
    response:
      "ਅਸੀਂ 123 ਮਿਊਜ਼ੀਅਮ ਐਵੇਨਿਊ, ਡਾਊਨਟਾਊਨ ਵਿੱਚ ਸਥਿਤ ਹਾਂ। ਭੂਮੀਗਤ ਗੈਰਾਜ ਵਿੱਚ ਪਾਰਕਿੰਗ ਉਪਲਬਧ ਹੈ (₹300 ਪ੍ਰਤੀ ਘੰਟਾ)। ਸਭ ਤੋਂ ਨੇੜਲਾ ਜਨਤਕ ਆਵਾਜਾਈ ਸਟਾਪ 'ਸੈਂਟਰਲ ਸਟੇਸ਼ਨ' ਹੈ (ਲਾਈਨ 1, 4, 7)।",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["ਸਹੂਲਤਾਂ", "ਕੈਫੇ", "ਰੈਸਟੋਰੈਂਟ", "ਦੁਕਾਨ", "ਵਾਈਫਾਈ", "ਵ੍ਹੀਲਚੇਅਰ"],
    response:
      "ਸਾਡੇ ਅਜਾਇਬ ਘਰ ਵਿੱਚ ਹੈ:\n- ਕੈਫੇ (ਜ਼ਮੀਨੀ ਮੰਜ਼ਿਲ)\n- ਗਿਫਟ ਸ਼ਾਪ (ਬਾਹਰ ਨਿਕਲਣ ਵਾਲਾ ਖੇਤਰ)\n- ਵ੍ਹੀਲਚੇਅਰ ਪਹੁੰਚ\n- ਕੋਟ ਚੈੱਕ\n- ਮੁਫਤ ਵਾਈ-ਫਾਈ\n- ਬੇਬੀ ਚੇਂਜਿੰਗ ਸਟੇਸ਼ਨ",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["ਬਾਰੇ", "ਇਤਿਹਾਸ", "ਜਾਣਕਾਰੀ", "ਸਥਾਪਨਾ", "ਮਿਸ਼ਨ", "ਅਜਾਇਬ ਘਰ"],
    response:
      "1965 ਵਿੱਚ ਸਥਾਪਿਤ, ਸਾਡੇ ਅਜਾਇਬ ਘਰ ਵਿੱਚ ਮਨੁੱਖੀ ਇਤਿਹਾਸ ਅਤੇ ਰਚਨਾਤਮਕਤਾ ਦੇ ਪੰਜ ਹਜ਼ਾਰ ਸਾਲਾਂ ਵਿੱਚ ਫੈਲੇ 35,000 ਤੋਂ ਵੱਧ ਕਲਾਕ੍ਰਿਤੀਆਂ ਅਤੇ ਕਲਾਕ੍ਰਿਤੀਆਂ ਹਨ। ਸਾਡਾ ਮਿਸ਼ਨ ਭਵਿੱਖ ਦੀਆਂ ਪੀੜ੍ਹੀਆਂ ਲਈ ਸੱਭਿਆਚਾਰਕ ਵਿਰਾਸਤ ਨੂੰ ਪ੍ਰੇਰਿਤ ਕਰਨਾ, ਸਿੱਖਿਆ ਦੇਣਾ ਅਤੇ ਸੰਭਾਲਣਾ ਹੈ।",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["ਬੁੱਕ", "ਬੁਕਿੰਗ", "ਰਿਜ਼ਰਵੇਸ਼ਨ", "ਖਰੀਦੋ", "ਟਿਕਟ"],
    response: "ਮੈਂ ਤੁਹਾਨੂੰ ਟਿਕਟ ਬੁੱਕ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ! ਮੈਂ ਤੁਹਾਡੇ ਲਈ ਬੁਕਿੰਗ ਪ੍ਰਕਿਰਿਆ ਸ਼ੁਰੂ ਕਰਦਾ ਹਾਂ।",
    type: "text",
  },
  {
    keywords: ["ਸਤ ਸ੍ਰੀ ਅਕਾਲ", "ਹੈਲੋ", "ਹਾਏ", "ਸੁਪ੍ਰਭਾਤ", "ਸ਼ੁਭ ਦੁਪਹਿਰ", "ਸ਼ੁਭ ਸ਼ਾਮ"],
    response: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮਿਊਜ਼ੀਅਮ ਵਰਚੁਅਲ ਅਸਿਸਟੈਂਟ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ। ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਸਹਾਇਤਾ ਕਰ ਸਕਦਾ ਹਾਂ?",
    type: "menu",
    options: ["openingHours", "ticketPrices", "exhibitions", "directions", "facilities", "about", "bookTicket"],
  },
]

// Kannada responses
const knResponses: ChatResponse[] = [
  {
    keywords: ["ತೆರೆಯುವುದು", "ಸಮಯ", "ಟೈಮ್", "ತೆರೆದಿರುವ", "ಮುಚ್ಚಿದ", "ವೇಳಾಪಟ್ಟಿ", "ಗಂಟೆಗಳು"],
    response:
      "ನಾವು ಸೋಮವಾರದಿಂದ ಶನಿವಾರದವರೆಗೆ ಬೆಳಿಗ್ಗೆ 9:00 ರಿಂದ ಸಂಜೆ 5:00 ರವರೆಗೆ ತೆರೆದಿರುತ್ತೇವೆ. ಭಾನುವಾರ ಮತ್ತು ಸಾರ್ವಜನಿಕ ರಜಾದಿನಗಳಲ್ಲಿ ವಸ್ತುಸಂಗ್ರಹಾಲಯ ಮುಚ್ಚಿರುತ್ತದೆ.",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["ರದ್ದು", "ರದ್ದುಗೊಳಿಸುವಿಕೆ", "ಮರುಪಾವತಿ", "ಬುಕಿಂಗ್ ರದ್ದು"],
    response: "ನಾನು ನಿಮ್ಮ ಬುಕಿಂಗ್ ರದ್ದುಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡಬಹುದು. ನಾನು ನಿಮಗಾಗಿ ರದ್ದುಗೊಳಿಸುವಿಕೆ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪ್ರಾರಂಭಿಸುತ್ತೇನೆ.",
    type: "text",
  },
  {
    keywords: ["ಟಿಕೆಟ್", "ಬೆಲೆ", "ದರ", "ಶುಲ್ಕ", "ಪ್ರವೇಶ", "ಚಾರ್ಜ್"],
    response: "ವಯಸ್ಕರು: ₹1000\nಹಿರಿಯರು (65+): ₹700\nವಿದ್ಯಾರ್ಥಿಗಳು: ₹500\nಮಕ್ಕಳು (12 ವರ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ): ಉಚಿತ\nಸದಸ್ಯರು: ಉಚಿತ",
    type: "quickReplies",
    options: ["bookTicket", "anythingElse", "returnToMenu"],
  },
  {
    keywords: ["ಪ್ರದರ್ಶನ", "ಗ್ಯಾಲರಿ", "ಕಲೆ", "ಸಂಗ್ರಹ", "ಶೋ"],
    response:
      "ಪ್ರಸ್ತುತ ಪ್ರದರ್ಶನಗಳು ಒಳಗೊಂಡಿವೆ:\n- 'ಆಧುನಿಕ ಮಾಸ್ಟರ್ಸ್' (ಮುಖ್ಯ ಗ್ಯಾಲರಿ)\n- 'ಪ್ರಾಚೀನ ನಾಗರಿಕತೆಗಳು' (ಪೂರ್ವ ವಿಭಾಗ)\n- 'ನೈಸರ್ಗಿಕ ಅದ್ಭುತಗಳು' ಛಾಯಾಗ್ರಹಣ (ಪಶ್ಚಿಮ ವಿಭಾಗ)",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["ದಿಕ್ಕು", "ಸ್ಥಳ", "ವಿಳಾಸ", "ಪಾರ್ಕಿಂಗ್", "ಸಾರಿಗೆ", "ಮೆಟ್ರೋ", "ಬಸ್"],
    response:
      "ನಾವು 123 ಮ್ಯೂಸಿಯಂ ಅವೆನ್ಯೂ, ಡೌನ್‌ಟೌನ್‌ನಲ್ಲಿ ಇದ್ದೇವೆ. ಭೂಗತ ಗ್ಯಾರೇಜ್‌ನಲ್ಲಿ ಪಾರ್ಕಿಂಗ್ ಲಭ್ಯವಿದೆ (ಗಂಟೆಗೆ ₹300). ಹತ್ತಿರದ ಸಾರ್ವಜನಿಕ ಸಾರಿಗೆ ನಿಲ್ದಾಣ 'ಸೆಂಟ್ರಲ್ ಸ್ಟೇಷನ್' (ಲೈನ್ 1, 4, 7).",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["ಸೌಲಭ್ಯಗಳು", "ಕೆಫೆ", "ರೆಸ್ಟೋರೆಂಟ್", "ಅಂಗಡಿ", "ವೈಫೈ", "ವೀಲ್‌ಚೇರ್"],
    response:
      "ನಮ್ಮ ವಸ್ತುಸಂಗ್ರಹಾಲಯದಲ್ಲಿ ಇವೆ:\n- ಕೆಫೆ (ನೆಲ ಮಹಡಿ)\n- ಗಿಫ್ಟ್ ಶಾಪ್ (ನಿರ್ಗಮನ ಪ್ರದೇಶ)\n- ವೀಲ್‌ಚೇರ್ ಪ್ರವೇಶ\n- ಕೋಟ್ ಚೆಕ್\n- ಉಚಿತ ವೈ-ಫೈ\n- ಬೇಬಿ ಚೇಂಜಿಂಗ್ ಸ್ಟೇಷನ್",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["ಬಗ್ಗೆ", "ಇತಿಹಾಸ", "ಮಾಹಿತಿ", "ಸ್ಥಾಪನೆ", "ಮಿಷನ್", "ವಸ್ತುಸಂಗ್ರಹಾಲಯ"],
    response:
      "1965 ರಲ್ಲಿ ಸ್ಥಾಪಿಸಲಾದ, ನಮ್ಮ ವಸ್ತುಸಂಗ್ರಹಾಲಯವು ಮಾನವ ಇತಿಹಾಸ ಮತ್ತು ಸೃಜನಶೀಲತೆಯ ಐದು ಸಹಸ್ರಾಬ್ದಗಳಲ್ಲಿ ವ್ಯಾಪಿಸಿರುವ 35,000 ಕ್ಕೂ ಹೆಚ್ಚು ಕಲಾಕೃತಿಗಳು ಮತ್ತು ಕಲಾಕೃತಿಗಳನ್ನು ಹೊಂದಿದೆ. ಭವಿಷ್ಯದ ಪೀಳಿಗೆಗಳಿಗಾಗಿ ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು ಪ್ರೇರೇಪಿಸುವುದು, ಶಿಕ್ಷಣ ನೀಡುವುದು ಮತ್ತು ಸಂರಕ್ಷಿಸುವುದು ನಮ್ಮ ಧ್ಯೇಯವಾಗಿದೆ.",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["ಬುಕ್", "ಬುಕಿಂಗ್", "ಕಾಯ್ದಿರಿಸುವಿಕೆ", "ಖರೀದಿ", "ಟಿಕೆಟ್"],
    response: "ನಾನು ನಿಮಗೆ ಟಿಕೆಟ್ ಬುಕ್ ಮಾಡಲು ಸಹಾಯ ಮಾಡಬಹುದು! ನಾನು ನಿಮಗಾಗಿ ಬುಕಿಂಗ್ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪ್ರಾರಂಭಿಸುತ್ತೇನೆ.",
    type: "text",
  },
  {
    keywords: ["ನಮಸ್ಕಾರ", "ಹಲೋ", "ಹಾಯ್", "ಶುಭೋದಯ", "ಶುಭ ಮಧ್ಯಾಹ್ನ", "ಶುಭ ಸಂಜೆ"],
    response: "ನಮಸ್ಕಾರ! ಮ್ಯೂಸಿಯಂ ವರ್ಚುಯಲ್ ಅಸಿಸ್ಟೆಂಟ್‌ಗೆ ನಿಮ್ಮನ್ನು ಸ್ವಾಗತಿಸುತ್ತೇವೆ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
    type: "menu",
    options: ["openingHours", "ticketPrices", "exhibitions", "directions", "facilities", "about", "bookTicket"],
  },
]

// Tamil responses
const taResponses: ChatResponse[] = [
  {
    keywords: ["திறப்பு", "நேரம்", "டைம்", "திறந்த", "மூடிய", "அட்டவணை", "மணி"],
    response:
      "நாங்கள் திங்கள் முதல் சனி வரை காலை 9:00 முதல் மாலை 5:00 வரை திறந்திருக்கிறோம். ஞாயிறு மற்றும் பொது விடுமுறை நாட்களில் அருங்காட்சியகம் மூடப்பட்டிருக்கும்.",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["ரத்து", "ரத்து செய்தல்", "திரும்ப பணம்", "புக்கிங் ரத்து"],
    response: "நான் உங்கள் புக்கிங்கை ரத்து செய்ய உதவ முடியும். நான் உங்களுக்காக ரத்து செய்யும் செயல்முறையை தொடங்குகிறேன்.",
    type: "text",
  },
  {
    keywords: ["டிக்கெட்", "விலை", "கட்டணம்", "ஃபீஸ்", "நுழைவு", "சார்ஜ்"],
    response:
      "பெரியவர்கள்: ₹1000\nமூத்தவர்கள் (65+): ₹700\nமாணவர்கள்: ₹500\nகுழந்தைகள் (12 வயதுக்கு கீழ்): இலவசம்\nஉறுப்பினர்கள்: இலவசம்",
    type: "quickReplies",
    options: ["bookTicket", "anythingElse", "returnToMenu"],
  },
  {
    keywords: ["காட்சி", "கேலரி", "கலை", "சேகரிப்பு", "ஷோ"],
    response:
      "தற்போதைய காட்சிகளில் அடங்கும்:\n- 'நவீன மாஸ்டர்கள்' (முக்கிய கேலரி)\n- 'பண்டைய நாகரிகங்கள்' (கிழக்கு பிரிவு)\n- 'இயற்கை அதிசயங்கள்' புகைப்படம் (மேற்கு பிரிவு)",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["திசை", "இடம்", "முகவரி", "பார்க்கிங்", "போக்குவரத்து", "மெட்ரோ", "பஸ்"],
    response:
      "நாங்கள் 123 மியூசியம் அவென்யூ, டவுன்டவுனில் அமைந்துள்ளோம். நிலத்தடி கேரேஜில் பார்க்கிங் கிடைக்கிறது (மணிக்கு ₹300). அருகிலுள்ள பொது போக்குவரத்து நிறுத்தம் 'சென்ட்ரல் ஸ்டேஷன்' (லைன் 1, 4, 7).",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["வசதிகள்", "கஃபே", "உணவகம்", "கடை", "வைஃபை", "சக்கர நாற்காலி"],
    response:
      "எங்கள் அருங்காட்சியகத்தில் உள்ளது:\n- கஃபே (தரை தளம்)\n- பரிசு கடை (வெளியேறும் பகுதி)\n- சக்கர நாற்காலி அணுகல்\n- கோட் செக்\n- இலவச வை-ஃபை\n- குழந்தை மாற்றும் நிலையம்",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["பற்றி", "வரலாறு", "தகவல்", "நிறுவப்பட்டது", "நோக்கம்", "அருங்காட்சியகம்"],
    response:
      "1965 இல் நிறுவப்பட்ட, எங்கள் அருங்காட்சியகத்தில் மனித வரலாறு மற்றும் படைப்பாற்றலின் ஐந்து ஆயிரம் ஆண்டுகளில் பரவியுள்ள 35,000 க்கும் மேற்பட்ட கலைப்பொருட்கள் மற்றும் கலைப்படைப்புகள் உள்ளன. எதிர்கால சந்ததியினருக்காக கலாச்சார பாரம்பரியத்தை ஊக்குவிப்பது, கல்வி கற்பிப்பது மற்றும் பாதுகாப்பது எங்கள் நோக்கமாகும்.",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["புக்", "புக்கிங்", "முன்பதிவு", "வாங்க", "டிக்கெட்"],
    response: "நான் உங்களுக்கு டிக்கெட் புக் செய்ய உதவ முடியும்! நான் உங்களுக்காக புக்கிங் செயல்முறையை தொடங்குகிறேன்.",
    type: "text",
  },
  {
    keywords: ["வணக்கம்", "ஹலோ", "ஹாய்", "காலை வணக்கம்", "மதிய வணக்கம்", "மாலை வணக்கம்"],
    response: "வணக்கம்! மியூசியம் வர்ச்சுவல் அசிஸ்டெண்டிற்கு உங்களை வரவேற்கிறோம். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
    type: "menu",
    options: ["openingHours", "ticketPrices", "exhibitions", "directions", "facilities", "about", "bookTicket"],
  },
]

// Telugu responses
const teResponses: ChatResponse[] = [
  {
    keywords: ["తెరవడం", "సమయం", "టైమ్", "తెరిచిన", "మూసిన", "షెడ్యూల్", "గంటలు"],
    response:
      "మేము సోమవారం నుండి శనివారం వరకు ఉదయం 9:00 నుండి సాయంత్రం 5:00 వరకు తెరిచి ఉంటాము. ఆదివారం మరియు ప్రభుత్వ సెలవు దినాలలో మ్యూజియం మూసి ఉంటుంది.",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["రద్దు", "రద్దు చేయడం", "రీఫండ్", "బుకింగ్ రద్దు"],
    response: "నేను మీ బుకింగ్‌ను రద్దు చేయడంలో సహాయం చేయగలను. నేను మీ కోసం రద్దు ప్రక్రియను ప్రారంభిస్తున్నాను.",
    type: "text",
  },
  {
    keywords: ["టికెట్", "ధర", "రేటు", "ఫీజు", "ప్రవేశం", "చార్జ్"],
    response: "పెద్దలు: ₹1000\nవృద్ధులు (65+): ₹700\nవిద్యార్థులు: ₹500\nపిల్లలు (12 సంవత్సరాలలోపు): ఉచితం\nసభ్యులు: ఉచితం",
    type: "quickReplies",
    options: ["bookTicket", "anythingElse", "returnToMenu"],
  },
  {
    keywords: ["ప్రదర్శన", "గ్యాలరీ", "కళ", "సేకరణ", "షో"],
    response:
      "ప్రస్తుత ప్రదర్శనలలో ఉన్నాయి:\n- 'ఆధునిక మాస్టర్స్' (ప్రధాన గ్యాలరీ)\n- 'ప్రాచీన నాగరికతలు' (తూర్పు విభాగం)\n- 'సహజ అద్భుతాలు' ఫోటోగ్రఫీ (పశ్చిమ విభాగం)",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["దిశ", "స్థలం", "చిరునామా", "పార్కింగ్", "రవాణా", "మెట్రో", "బస్"],
    response:
      "మేము 123 మ్యూజియం అవెన్యూ, డౌన్‌టౌన్‌లో ఉన్నాము. భూగర్భ గ్యారేజీలో పార్కింగ్ అందుబాటులో ఉంది (గంటకు ₹300). సమీప ప్రజా రవాణా స్టాప్ 'సెంట్రల్ స్టేషన్' (లైన్ 1, 4, 7).",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["సౌకర్యాలు", "కేఫ్", "రెస్టారెంట్", "దుకాణం", "వైఫై", "వీల్‌చైర్"],
    response: "మా మ్యూజియంలో ఉన్నాయి:\n- కేఫ్ (గ్రౌండ్ ఫ్లోర్)\n- గిఫ్ట్ షాప్ (ఎగ్జిట్ ఏరియా)\n- వీల్‌చైర్ యాక్సెస్\n- కోట్ చెక్\n- ఉచిత వై-ఫై\n- బేబీ చేంజింగ్ స్టేషన్",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["గురించి", "చరిత్ర", "సమాచారం", "స్థాపన", "మిషన్", "మ్యూజియం"],
    response:
      "1965లో స్థాపించబడిన, మా మ్యూజియంలో మానవ చరిత్ర మరియు సృజనాత్మకత యొక్క ఐదు సహస్రాబ్దాలలో విస్తరించిన 35,000 కంటే ఎక్కువ కళాఖండాలు మరియు కళాకృతులు ఉన్నాయి. భవిష్యత్ తరాలకు సాంస్కృతిక వారసత్వాన్ని ప్రేరేపించడం, విద్యను అందించడం మరియు సంరక్షించడం మా లక్ష్యం.",
    type: "quickReplies",
    options: ["anythingElse", "returnToMenu"],
  },
  {
    keywords: ["బుక్", "బుకింగ్", "రిజర్వేషన్", "కొనుగోలు", "టికెట్"],
    response: "నేను మీకు టికెట్ బుక్ చేయడంలో సహాయం చేయగలను! నేను మీ కోసం బుకింగ్ ప్రక్రియను ప్రారంభిస్తున్నాను.",
    type: "text",
  },
  {
    keywords: ["నమస్కారం", "హలో", "హాయ్", "శుభోదయం", "శుభ మధ్యాహ్నం", "శుభ సాయంత్రం"],
    response: "నమస్కారం! మ్యూజియం వర్చువల్ అసిస్టెంట్‌కు మిమ్మల్ని స్వాగతం. ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?",
    type: "menu",
    options: ["openingHours", "ticketPrices", "exhibitions", "directions", "facilities", "about", "bookTicket"],
  },
]

// Main responses object
export const chatResponses: LanguageResponses = {
  en: enResponses,
  hi: hiResponses,
  bn: bnResponses,
  mr: mrResponses,
  gu: guResponses,
  pa: paResponses,
  kn: knResponses,
  ta: taResponses,
  te: teResponses,
}

// Function to find matching response based on keywords
export function findChatResponse(message: string, language: string): ChatResponse | null {
  const responses = chatResponses[language] || chatResponses.en
  const lowerMessage = message.toLowerCase()

  // Find the first response where any keyword matches
  for (const response of responses) {
    for (const keyword of response.keywords) {
      if (lowerMessage.includes(keyword.toLowerCase())) {
        return response
      }
    }
  }

  return null
}

import { QuizQuestion } from '../types';

export const QUIZ_M9_M11: QuizQuestion[] = [
  // ==================== M9: Savdo va mijozlar bilan ishlash (10 questions) ====================
  {
    id: 'm9-q1',
    topicId: 'm9',
    question: {
      uz: 'Savdo voronkasi (Sales Funnel) bosqichlarining mantiqiy ketma-ketligi qaysi qatorda to‘g‘ri ko‘rsatilgan?',
      ru: 'В каком ряду правильно указана логическая последовательность этапов воронки продаж (Sales Funnel)?',
      en: 'Which option correctly lists the logical progression of a standard Sales Funnel?',
    },
    options: {
      uz: [
        'Qamrov (Lid) → Malakalash (MQL/SQL) → Tijorat taklifi/ Muzokara → Bitim (To‘lov) → Qayta xarid',
        'To‘lov → Reklama → Qidiruv → Sovuq qo‘ng‘iroq → Kafolatni bekor qilish',
        'Shartnoma imzolash → Bozor tahlili → Logotip chizish → Mijoz qidirish',
        'Faqat omborga tovar olib kelish va narx yopishtirish',
      ],
      ru: [
        'Охват (Лид) → Квалификация → Коммерческое предложение / Переговоры → Сделка (Оплата) → Повторная продажа',
        'Оплата → Холодный звонок → Знакомство с продуктом → Возврат товара',
        'Подписание акта → Поиск клиента → Разработка логотипа → Реклама',
        'Только выкладка товара на витрину без учета обращений',
      ],
      en: [
        'Lead Capture → Qualification → Proposal / Negotiation → Closed-Won Payment → Retention / Repeat Sale',
        'Payment Collection → Cold Outreach → Brand Awareness → Refund',
        'Contract Signing → Market Sizing → Logo Design → Lead Generation',
        'Stocking inventory without tracking inquiries or follow-ups',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Savdo voronkasi keng oqimdagi potensial qiziquvchilarni bosqichma-bosqich saralab, to‘lovchi va sodiq mijozga aylantirish jarayonini ifodalaydi.',
      ru: 'Воронка продаж отражает путь клиента от первого контакта и квалификации потребности до оплаты и повторных покупок.',
      en: 'A sales funnel tracks prospects systematically from initial lead capture through qualification and proposal to closed revenue and retention.',
    },
    hint: {
      uz: 'Jarayon keng qiziqishdan aniq to‘lov va sodiqlik sari torayib boradi.',
      ru: 'Путь идет от первого обращения к оплате и удержанию.',
      en: 'Move from top-of-funnel interest down to closed payment and loyalty.',
    },
  },
  {
    id: 'm9-q2',
    topicId: 'm9',
    isCalculation: true,
    question: {
      uz: 'Oy davomida saytga 2 000 kishi kirdi, ulardan 200 nafari ariza qoldirdi (Lid), 40 nafari esa xaridni amalga oshirdi. Ariza qoldirgan lidlardan xaridga konversiya (Lead-to-Sale CR) necha foiz?',
      ru: 'За месяц сайт посетили 2 000 человек, 200 оставили заявку (лиды), а 40 совершили покупку. Какова конверсия из заявки в покупку (Lead-to-Sale CR)?',
      en: 'In one month, 2,000 visitors landed on a site, 200 submitted inquiries (leads), and 40 completed a purchase. What is the Lead-to-Sale Conversion Rate?',
    },
    options: {
      uz: ['20%', '2%', '10%', '50%'],
      ru: ['20%', '2%', '10%', '50%'],
      en: ['20%', '2%', '10%', '50%'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Liddan sotuvga konversiya = (40 xarid / 200 lid) × 100% = 20%. Saytga kirganlardan umumiy xarid konversiyasi esa 40 / 2000 = 2% ni tashkil etadi.',
      ru: 'Конверсия из лида в продажу = (40 покупок / 200 лидов) × 100% = 20% (а общая конверсия сайта 40 / 2000 = 2%).',
      en: 'Lead-to-Sale CR = (40 buyers / 200 leads) × 100% = 20% (while overall visitor-to-sale conversion is 2%).',
    },
    hint: {
      uz: 'Xaridorlar sonini arizalar (lidlar) soniga bo‘lib, 100% ga ko‘paytiring.',
      ru: 'Разделите число покупателей (40) на число заявок (200).',
      en: 'Divide buyers (40) by leads (200) and multiply by 100%.',
    },
  },
  {
    id: 'm9-q3',
    topicId: 'm9',
    question: {
      uz: 'B2B (biznesdan-biznesga) savdoning B2C (chakana iste’molchiga) savdodan eng asosiy farqi nimada?',
      ru: 'В чем заключается ключевое отличие продаж B2B от розничных продаж B2C?',
      en: 'What is a primary structural difference between B2B sales and B2C retail sales?',
    },
    options: {
      uz: [
        'B2B da bitim sikli uzoqroq, qarorni bir nechta shaxs (direktor, moliya, xarid bo‘limi) rasionallik va ROI asosida qabul qiladi',
        'B2B da shartnoma va hisobvaraq-faktura umuman ishlatilmaydi',
        'B2B da barcha xaridlar faqat hissiyot (impuls) bilan 10 soniyada amalga oshiriladi',
        'B2B da o‘rtacha chek har doim chakana do‘kondan kichik bo‘ladi',
      ],
      ru: [
        'В B2B длиннее цикл сделки, решение принимает группа лиц на основе рациональной окупаемости (ROI) и договора',
        'В B2B никогда не оформляются договоры и электронные счета-фактуры',
        'В B2B покупки совершаются импульсивно за несколько секунд у кассы',
        'В B2B средний чек всегда ниже, чем в розничном продуктовом магазине',
      ],
      en: [
        'B2B features longer sales cycles, multi-stakeholder buying committees, contract invoicing, and ROI-driven decisions',
        'B2B transactions never use contracts or electronic tax invoices',
        'B2B purchases are purely emotional 10-second impulse buys',
        'B2B average order values are always smaller than convenience store purchases',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Korporativ mijozlar shaxsiy xohish bilan emas, korxona foydasi, byudjeti, EHF (elektron hisobvaraq-faktura) va shartnoma shartlari asosida qaror qabul qiladi.',
      ru: 'Корпоративные закупки включают несколько ЛПР (директор, бухгалтер, снабженец), оценку выгоды и юридическое оформление через ЭСФ.',
      en: 'Enterprise buyers evaluate economic ROI, compliance, and electronic invoicing across multiple decision-makers.',
    },
    hint: {
      uz: 'Korxona nomidan xarid qilganda kimlar rozilik berishi kerakligini o‘ylang.',
      ru: 'Подумайте, как компания согласовывает закупку оборудования или сырья.',
      en: 'Consider how companies approve vendor contracts vs individual shoppers.',
    },
  },
  {
    id: 'm9-q4',
    topicId: 'm9',
    question: {
      uz: 'SPIN-savdo texnikasida mijozga beriladigan savollarning to‘g‘ri ketma-ketligi qanday?',
      ru: 'Какова правильная последовательность типов вопросов в технике консультативных продаж SPIN?',
      en: 'What do the four stages of the consultative SPIN Selling methodology stand for in order?',
    },
    options: {
      uz: [
        'Vaziyatli (Situation) → Muammoli (Problem) → Oqibatli (Implication) → Yo‘naltiruvchi/Yechim qiymati (Need-payoff)',
        'Sotish → Pul olish → Inkassatsiya → Narxni tushirish',
        'Salomlashish → Chegirma berish → Shoshiltirish → Xayrlashish',
        'Statistika → Prezentatsiya → Imzo → Nazorat',
      ],
      ru: [
        'Ситуационные (Situation) → Проблемные (Problem) → Извлекающие (Implication) → Направляющие (Need-payoff)',
        'Скидка → Презентация → Инвойс → Напоминание',
        'Приветствие → Спор с клиентом → Давление → Оплата',
        'Статистика → План → Исполнение → Награда',
      ],
      en: [
        'Situation → Problem → Implication → Need-Payoff',
        'Sales → Pricing → Invoicing → Negotiation',
        'Script → Pitch → Insistence → Closing',
        'Search → Prospect → Invite → Notify',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Neil Rackham tomonidan ishlab chiqilgan SPIN uslubi yirik bitimlarda mijozning o‘zi muammo ko‘lamini va yechim qiymatini anglab yetishiga yordam beradi.',
      ru: 'Методика Нила Рэкхема помогает клиенту самому осознать цену нерешенной проблемы и ценность предлагаемого решения.',
      en: 'Neil Rackham’s SPIN framework uncovers context, pain points, business cost of inaction, and the value of solving the problem.',
    },
    hint: {
      uz: 'Inglizcha S-P-I-N bosh harflarining ma’nosiga e’tibor bering.',
      ru: 'Расшифруйте аббревиатуру S-P-I-N Нила Рэкхема.',
      en: 'Match the classic Neil Rackham consultative questioning acronym.',
    },
  },
  {
    id: 'm9-q5',
    topicId: 'm9',
    question: {
      uz: 'CRM (Customer Relationship Management) tizimini joriy etish tadbirkorga qanday amaliy muammoni hal qiladi?',
      ru: 'Какую главную операционную проблему предпринимателя решает внедрение CRM-системы?',
      en: 'What core operational problem does implementing a CRM system solve for a growing business?',
    },
    options: {
      uz: [
        'Telegram, Instagram va qo‘ng‘iroqlardan kelgan lidlarning "unutib qoldirilishi"ni yo‘qotadi hamda menejerlar konversiyasini shaffof o‘lchaydi',
        'Soliq kodeksidagi QQS stavkasini avtomatik bekor qiladi',
        'Ishlab chiqarish sexidagi dastgohlarning elektr sarfini kamaytiradi',
        'Reklama bermasdan ham mijozlarni majburan do‘konga olib kiradi',
      ],
      ru: [
        'Исключает потерю заявок из звонков и соцсетей, сохраняет историю общения и оцифровывает конверсию каждого менеджера',
        'Освобождает компанию от уплаты налогов и аренды офиса',
        'Ремонтирует производственное оборудование без участия инженеров',
        'Гарантирует 100% покупку от каждого случайного прохожего',
      ],
      en: [
        'Prevents dropped leads across channels, centralizes interaction history, automates follow-up tasks, and tracks rep conversion rates',
        'Legally exempts the company from corporate income taxes',
        'Replaces physical manufacturing machinery on the factory floor',
        'Guarantees 100% conversion without product-market fit',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'O‘zbekistonda kichik bizneslar reklama byudjetining 30–40 foizini arizalarga vaqtida javob bermaslik yoki qayta bog‘lanmaslik sababli yo‘qotadi — CRM aynan shuni tartibga soladi.',
      ru: 'Без CRM менеджеры забывают перезвонить клиентам и уносят клиентскую базу в личных блокнотах при увольнении.',
      en: 'CRM centralizes customer data as a company asset, enforces follow-up SLAs, and eliminates leaky sales funnels.',
    },
    hint: {
      uz: 'Mijozlar bazasi, qo‘ng‘iroqlar tarixi va eslatmalar qayerga yoziladi?',
      ru: 'Подумайте, почему теряются заявки в чатах и блокнотах продавцов.',
      en: 'Think about what happens to inbound leads when tracked only on sticky notes.',
    },
  },
  {
    id: 'm9-q6',
    topicId: 'm9',
    question: {
      uz: 'Mijoz "Sizning mahsulotingiz raqobatchinikidan qimmat ekan" deb e’tiroz bildirganda professional sotuvchi qanday yo‘l tutishi kerak?',
      ru: 'Как должен поступить профессиональный продавец при возражении клиента «У вас дороже, чем у конкурентов»?',
      en: 'How should a consultative salesperson handle the objection "Your price is higher than your competitor’s"?',
    },
    options: {
      uz: [
        'Darhol chegirma bermasdan, e’tirozni tinglash, mijoz uchun nima muhimligini aniqlashtirish va umumiy egalik qiymati (kafolat, xizmat, tejash) ni asoslab berish',
        'Mijoz bilan tortishib, raqobatchini haqorat qilish',
        'Hech narsa so‘ramasdan narxni tannarxdan ham pastga tushirib yuborish',
        'Suhbatni shu zahoti uzib, telefonni o‘chirib qo‘yish',
      ],
      ru: [
        'Не давать мгновенную скидку, а уточнить критерии сравнения и аргументировать ценность (гарантия, ресурс, сервис, экономия в эксплуатации)',
        'Начать спорить с клиентом и оскорблять конкурентов',
        'Сразу снизить цену ниже себестоимости без выяснения деталей',
        'Прервать разговор и положить трубку',
      ],
      en: [
        'Acknowledge the concern without discounting immediately, clarify comparison criteria, and demonstrate total value, warranty, and lifecycle savings',
        'Argue aggressively and insult the competitor personally',
        'Slash the price below unit cost immediately without discussion',
        'Hang up the phone immediately',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: '"Qimmat" e’tirozi ko‘pincha mijoz mahsulot keltiradigan qo‘shimcha qiymat va farqni hali tushunmaganini bildiradi. Shoshilinch chegirma kompaniya marjasini yemiradi.',
      ru: 'Возражение «дорого» чаще всего означает дефицит понятной клиенту ценности. Необоснованные скидки уничтожают чистую прибыль.',
      en: 'Price objections typically reflect uncommunicated value differentiation; knee-jerk discounting erodes net margin.',
    },
    hint: {
      uz: 'Narx va Qiymat (Value) nisbatini eslang.',
      ru: 'Важно перевести разговор с голой цены на совокупную ценность.',
      en: 'Shift the conversation from upfront sticker price to total value delivered.',
    },
  },
  {
    id: 'm9-q7',
    topicId: 'm9',
    isCalculation: true,
    question: {
      uz: 'Obuna xizmatida oy boshida 500 ta faol mijoz bor edi. Oy davomida yangi qo‘shilganlarni hisobga olmaganda, 25 ta eski mijoz xizmatdan voz kechdi. Oylik Churn Rate (mijozlar ketish darajasi) necha foiz?',
      ru: 'В начале месяца у подписного сервиса было 500 активных клиентов. За месяц от услуг отказались 25 из них. Чему равен месячный отток (Churn Rate)?',
      en: 'A subscription business started the month with 500 active customers, and 25 of those customers canceled during the month. What is the monthly Churn Rate?',
    },
    options: {
      uz: ['5%', '25%', '2%', '95%'],
      ru: ['5%', '25%', '2%', '95%'],
      en: ['5%', '25%', '2%', '95%'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Churn Rate = (Ketgan mijozlar / Davr boshidagi mijozlar) × 100% = (25 / 500) × 100% = 5%. Demak, Retention Rate (ushlab qolish) 95% ga teng.',
      ru: 'Churn Rate = (25 ушедших / 500 на начало периода) × 100% = 5%. Удержание (Retention) составило 95%.',
      en: 'Monthly Churn Rate = (25 canceled / 500 starting customers) × 100% = 5% (corresponding to a 95% Retention Rate).',
    },
    hint: {
      uz: '25 ni 500 ga bo‘lib foizda ifodalang.',
      ru: 'Разделите количество ушедших клиентов (25) на базу в начале месяца (500).',
      en: 'Divide lost customers (25) by starting customers (500).',
    },
  },
  {
    id: 'm9-q8',
    topicId: 'm9',
    question: {
      uz: 'Kross-sotuv (Cross-sell) va Yuqori chekka ko‘tarish (Up-sell) o‘rtasidagi farq nimada?',
      ru: 'В чем разница между механиками Cross-sell (перекрестная продажа) и Up-sell (повышение чека)?',
      en: 'What distinguishes Cross-selling from Up-selling in retail and service operations?',
    },
    options: {
      uz: [
        'Up-sell — tanlangan mahsulotning qimmatroq/kengaytirilgan versiyasini taklif etish; Cross-sell — unga mos qo‘shimcha tovar (masalan, smartfonga g‘ilof) qo‘shib sotish',
        'Ikkalasi ham mijozga pulni qaytarib berishni anglatadi',
        'Cross-sell — narxni 50% arzonlashtirish, Up-sell — do‘konni yopish',
        'Up-sell faqat qishloq xo‘jaligida, Cross-sell faqat bankda ishlaydi',
      ],
      ru: [
        'Up-sell — предложение более дорогой/расширенной версии продукта; Cross-sell — продажа сопутствующего товара к основному (чехол к смартфону)',
        'Оба термина означают возврат бракованного товара поставщику',
        'Cross-sell — это ликвидационная распродажа, а Up-sell — штраф клиенту',
        'Никакой разницы нет, это названия налоговых деклараций',
      ],
      en: [
        'Up-selling upgrades the buyer to a higher-tier version of the core product; Cross-selling adds complementary items (e.g., a protective case with a phone)',
        'Both terms refer to issuing full customer refunds',
        'Cross-selling means cutting prices in half; Up-selling means closing a store',
        'Neither affects Average Order Value (AOV)',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Har ikkala usul yangi reklama xarajatisiz (CAC = 0) o‘rtacha xarid chekini (AOV) va yalpi marjani oshirishning eng samarali vositasidir.',
      ru: 'Обе механики повышают средний чек (AOV) и маржинальность на уже привлеченном клиенте без дополнительных затрат на рекламу.',
      en: 'Both strategies lift Average Order Value (AOV) and gross profit per transaction without incurring extra customer acquisition costs.',
    },
    hint: {
      uz: '"Up" — yuqoriroq versiya, "Cross" — yonma-yon to‘ldiruvchi mahsulot.',
      ru: 'Up — вверх по линейке версий, Cross — смежный сопутствующий товар.',
      en: 'Think "upgrade version" vs "complementary add-on".',
    },
  },
  {
    id: 'm9-q9',
    topicId: 'm9',
    question: {
      uz: 'NPS (Net Promoter Score) ko‘rsatkichi mijozlardan qaysi asosiy savolni so‘rash orqali o‘lchanadi?',
      ru: 'С помощью какого ключевого вопроса измеряется индекс потребительской лояльности NPS (Net Promoter Score)?',
      en: 'Which core survey question is used to measure a company’s Net Promoter Score (NPS)?',
    },
    options: {
      uz: [
        '"Kompaniyamiz/mahsulotimizni do‘stlaringiz va hamkasblaringizga 0 dan 10 gacha ballda qay darajada tavsiya qilasiz?"',
        '"Bizning korxonamiz qaysi yilda davlat ro‘yxatidan o‘tgan?"',
        '"Buxgalterimizning ish haqi qancha deb o‘ylaysiz?"',
        '"Bugun ob-havo sizga ma’qulmi?"',
      ],
      ru: [
        '«С какой вероятностью по шкале от 0 до 10 вы порекомендуете нашу компанию друзьям или коллегам?»',
        '«Знаете ли вы ИНН нашего юридического лица?»',
        '«Сколько квадратных метров занимает наш склад?»',
        '«Какой курс валют установлен сегодня?»',
      ],
      en: [
        '"On a scale of 0 to 10, how likely are you to recommend our product or company to a friend or colleague?"',
        '"In what year was our corporate charter notarized?"',
        '"Can you guess our monthly office rent?"',
        '"What tax regime does our supplier use?"',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: '9–10 ball berganlar Promouterlar (targ‘ibotchilar), 7–8 ball — Neytrallar, 0–6 ball — Detraktorlar (tanqidchilar). NPS = %Promouterlar − %Detraktorlar.',
      ru: 'Оценки 9–10 дают промоутеры, 7–8 — нейтралы, 0–6 — критики. Индекс NPS равен разнице долей промоутеров и критиков.',
      en: 'NPS subtracts the percentage of Detractors (0–6) from Promoters (9–10) to quantify organic word-of-mouth advocacy.',
    },
    hint: {
      uz: '"Promoter" — tavsiya qiluvchi mijoz degan ma’noni bildiradi.',
      ru: 'Слово Promoter переводится как сторонник, рекомендующий бренд другим.',
      en: 'Focus on willingness to recommend (0–10 scale).',
    },
  },
  {
    id: 'm9-q10',
    topicId: 'm9',
    question: {
      uz: 'O‘zbekiston Respublikasining "Iste’molchilarning huquqlarini himoya qilish to‘g‘risida"gi Qonuniga binoan, nuqsonsiz (sifatli) nooziq-ovqat tovarni (ro‘yxatdagi istisnolardan tashqari) chek va qadog‘i saqlangan holda necha kun ichida almashtirish mumkin?',
      ru: 'В течение скольких дней покупатель вправе обменять непродовольственный товар надлежащего качества (кроме перечня исключений) при сохранении товарного вида и чека согласно законодательству РУз?',
      en: 'Under Uzbekistan’s Law on Protection of Consumer Rights, within how many days can a consumer exchange an unused, non-defective non-food item (excluding statutory exceptions) with receipt intact?',
    },
    options: {
      uz: ['10 kun ichida', '1 soat ichida', '365 kun ichida', 'Sifatli tovar umuman almashtirilmaydi'],
      ru: ['В течение 10 дней', 'Только в течение 1 часа', 'В течение 3 лет', 'Обмен законом полностью запрещен'],
      en: ['Within 10 days', 'Within 1 hour only', 'Within 3 years', 'Exchanges are never permitted by law'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Qonunning 18-moddasiga muvofiq, iste’molchi maqbul sifatli nooziq-ovqat tovarni (dori-darmon, shaxsiy gigiyena kabi maxsus ro‘yxatdan tashqari) xarid kunidan e’tiboran 10 kun ichida almashtirishga haqli.',
      ru: 'Согласно ст. 18 Закона «О защите прав потребителей», непродовольственный товар надлежащего качества подлежит обмену в течение 10 дней при сохранности упаковки и чека.',
      en: 'Article 18 grants consumers 10 calendar days to exchange eligible non-food goods of proper quality if unused and accompanied by proof of purchase.',
    },
    hint: {
      uz: 'Qonunning 18-moddasida belgilangan o‘n kunlik muddatni eslang.',
      ru: 'Вспомните установленный ст. 18 десятидневный срок.',
      en: 'Recall the statutory 10-day window in Article 18.',
    },
  },

  // ==================== M10: Narx belgilash va xarajatlar (10 questions) ====================
  {
    id: 'm10-q1',
    topicId: 'm10',
    question: {
      uz: 'Quyidagi xarajatlardan qaysi biri tikuvchilik sexi uchun O‘ZGARUVCHAN xarajat (Variable Cost) hisoblanadi?',
      ru: 'Какая из перечисленных статей расходов является ПЕРЕМЕННОЙ (Variable Cost) для швейного цеха?',
      en: 'Which of the following expenses is a classic VARIABLE cost for a garment workshop?',
    },
    options: {
      uz: [
        'Har bir ko‘ylak uchun sarflanadigan mato, ip, tugma va donabay tikuvchi haqi',
        'Sex binosining shartnoma bo‘yicha oylik qat’iy ijara to‘lovi',
        'Bosh hisobchining oylik maoshi (oklad)',
        'Ofis interneti uchun oylik abonent to‘lovi',
      ],
      ru: [
        'Ткань, фурнитура и сдельная оплата швеи за каждую пошитую рубашку',
        'Фиксированная месячная аренда помещения цеха',
        'Оклад главного бухгалтера',
        'Абонентская плата за охрану и интернет в офисе',
      ],
      en: [
        'Fabric, buttons, packaging, and piece-rate sewing labor per shirt produced',
        'Fixed monthly factory building lease payment',
        'Salaried chief accountant’s monthly base pay',
        'Monthly flat-rate office internet subscription',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'O‘zgaruvchan xarajatlar ishlab chiqarish yoki sotuv hajmiga to‘g‘ri proporsional o‘zgaradi: 0 ta ko‘ylak tikilsa — mato sarfi 0, 1000 ta tikilsa — 1000 barobar.',
      ru: 'Переменные затраты напрямую зависят от объема выпуска продукции, тогда как аренда и оклады администрации — постоянные (Fixed Costs).',
      en: 'Variable costs scale directly with production volume, whereas fixed rent and administrative salaries remain constant in the short run.',
    },
    hint: {
      uz: 'Ishlab chiqarish to‘xtasa qaysi xarajat nolga tushadi?',
      ru: 'Какой расход растет строго пропорционально каждой новой единице товара?',
      en: 'Ask which cost rises directly with each additional shirt sewn.',
    },
  },
  {
    id: 'm10-q2',
    topicId: 'm10',
    isCalculation: true,
    question: {
      uz: 'Qahvaxonaning oylik doimiy xarajati (FC) = 18 000 000 so‘m. Bir finjon qahva sotish narxi (P) = 25 000 so‘m, 1 finjonning o‘zgaruvchan tannarxi (VC) = 10 000 so‘m. Zararsizlik nuqtasi (BEP) necha finjon?',
      ru: 'Постоянные расходы кофейни (FC) = 18 000 000 сум/мес. Цена чашки кофе (P) = 25 000 сум, переменные затраты на чашку (VC) = 10 000 сум. Чему равна точка безубыточности (BEP) в чашках?',
      en: 'A coffee shop has monthly fixed costs (FC) of 18,000,000 UZS. Selling price per cup (P) is 25,000 UZS, and variable cost per cup (VC) is 10,000 UZS. What is the monthly Break-Even Point (BEP) in cups?',
    },
    options: {
      uz: ['1 200 finjon', '720 finjon', '1 800 finjon', '514 finjon'],
      ru: ['1 200 чашек', '720 чашек', '1 800 чашек', '514 чашек'],
      en: ['1,200 cups', '720 cups', '1,800 cups', '514 cups'],
    },
    correctIndex: 0,
    explanation: {
      uz: '1 finjondan marjinal foyda (CM) = 25 000 − 10 000 = 15 000 so‘m. BEP = FC / (P − VC) = 18 000 000 / 15 000 = 1 200 finjon (kuniga o‘rtacha 40 finjon).',
      ru: 'Маржинальный доход на чашку = 25 000 − 10 000 = 15 000 сум. BEP = 18 000 000 / 15 000 = 1 200 чашек в месяц.',
      en: 'Unit Contribution Margin = 25,000 − 10,000 = 15,000 UZS. BEP = 18,000,000 / 15,000 = 1,200 cups per month.',
    },
    hint: {
      uz: 'BEP = FC / (P − VC) formulasini qo‘llang.',
      ru: 'Разделите постоянные расходы на маржинальную прибыль с одной чашки (25 000 − 10 000).',
      en: 'Use BEP = Fixed Costs / (Price − Variable Cost per unit).',
    },
  },
  {
    id: 'm10-q3',
    topicId: 'm10',
    isCalculation: true,
    question: {
      uz: 'Mahsulot tannarxi 100 000 so‘m. Tadbirkor unga 50% ustama (Markup) qo‘shib 150 000 so‘mdan sotdi. Shu savdodagi yalpi MARJA (Gross Margin) necha foizga teng?',
      ru: 'Себестоимость товара — 100 000 сум. Предприниматель сделал наценку (Markup) 50% и продал за 150 000 сум. Чему равна валовая МАРЖА (Gross Margin) в процентах?',
      en: 'An item costs 100,000 UZS. A merchant applies a 50% markup and sells it for 150,000 UZS. What is the Gross Margin percentage?',
    },
    options: {
      uz: ['33,3%', '50%', '66,7%', '25%'],
      ru: ['33,3%', '50%', '66,7%', '25%'],
      en: ['33.3%', '50%', '66.7%', '25%'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Yalpi foyda = 150 000 − 100 000 = 50 000 so‘m. Ustama tannarxga nisbatan (50/100 = 50%), Marja esa sotuv narxiga nisbatan hisoblanadi: (50 000 / 150 000) × 100% = 33,3%. Shu sabab 50% ustama qo‘yib "40% chegirma" bersangiz (150 000 × 0,6 = 90 000), zararga kirasiz!',
      ru: 'Наценка считается от себестоимости (50/100 = 50%), а маржа — от цены продажи: (50 000 / 150 000) × 100% = 33,3%. Путать их крайне опасно при выдаче скидок!',
      en: 'Markup divides profit by cost (50/100 = 50%), whereas Margin divides profit by selling price: (50,000 / 150,000) × 100% = 33.3%.',
    },
    hint: {
      uz: 'Marja = (Narx − Tannarx) / Sotuv narxi × 100%.',
      ru: 'Разделите прибыль (50 000) на конечную цену продажи (150 000).',
      en: 'Divide gross profit (50,000) by selling price (150,000).',
    },
  },
  {
    id: 'm10-q4',
    topicId: 'm10',
    question: {
      uz: 'Qiymatga asoslangan narxlash (Value-Based Pricing) usulining mohiyati nimadan iborat?',
      ru: 'В чем суть ценообразования на основе ценности (Value-Based Pricing)?',
      en: 'What defines Value-Based Pricing compared to Cost-Plus Pricing?',
    },
    options: {
      uz: [
        'Narx faqat xomashyo tannarxidan emas, balki mahsulot mijozga keltiradigan iqtisodiy naf, tejalgan vaqt va idrok etilgan qiymatdan kelib chiqib belgilanadi',
        'Narx har doim tannarxdan past belgilanadi',
        'Narxni faqat omborchi tasodifiy raqam tanlab belgilaydi',
        'Barcha tovarlarga bir xil 1 000 so‘m ustama qo‘yiladi',
      ],
      ru: [
        'Цена определяется воспринимаемой пользой, экономией времени или денег для клиента, а не просто формулой «себестоимость + 20%»',
        'Цена всегда устанавливается строго ниже себестоимости сырья',
        'Цена копируется у самого дешевого нелегального продавца на рынке',
        'Все товары в магазине продаются по единой фиксированной цене',
      ],
      en: [
        'Setting prices primarily according to the perceived economic benefit, ROI, or utility delivered to the customer rather than mere production cost plus a flat markup',
        'Pricing every item strictly below raw material cost',
        'Copying the lowest unverified price on the market blindly',
        'Charging an identical flat fee across unrelated product categories',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Masalan, buxgalteriya SaaS dasturining 1 ta foydalanuvchi uchun server xarajati 5 000 so‘m bo‘lishi mumkin, lekin u korxonaga oyiga 3 mln so‘mlik vaqt va jarima xavfini tejagani uchun 300 000 so‘mdan bemalol sotiladi.',
      ru: 'Программное обеспечение, консалтинг и брендовые продукты оцениваются покупателем по результату и престижу, что позволяет получать высокую маржу.',
      en: 'Software, specialized B2B services, and differentiated brands capture much higher margins by pricing against customer value created.',
    },
    hint: {
      uz: 'IT dasturlar yoki dizaynerlik xizmatlari nima uchun xomashyo narxida baholanmaydi?',
      ru: 'Подумайте, почему подписка на софт стоит намного дороже затрат на электричество сервера.',
      en: 'Consider why B2B software is priced on client savings rather than server electricity.',
    },
  },
  {
    id: 'm10-q5',
    topicId: 'm10',
    question: {
      uz: 'Amortizatsiya (eskirish) xarajati nimani ifodalaydi?',
      ru: 'Что отражает статья расходов «Амортизация» (Depreciation) в экономике предприятия?',
      en: 'What does Depreciation represent in business cost accounting?',
    },
    options: {
      uz: [
        'Asosiy vositalar (uskuna, bino, transport) qiymatining foydali xizmat muddati davomida mahsulot tannarxi yoki davr xarajatlariga bosqichma-bosqich o‘tkazib borilishi',
        'Xodimlarga bayram munosabati bilan beriladigan bir martalik mukofot',
        'Bank hisobraqamidan naqd pul yechish komissiyasi',
        'Reklama postlariga yig‘ilgan layklar soni',
      ],
      ru: [
        'Постепенный перенос стоимости основных средств (станков, авто, зданий) на расходы в течение срока их полезного использования',
        'Единовременный штраф налоговой инспекции за просрочку отчета',
        'Комиссия платежной системы за эквайринг карт',
        'Расходы на корпоративный праздник сотрудников',
      ],
      en: [
        'Systematic allocation of the cost of tangible fixed assets (machinery, vehicles, equipment) over their useful operating lives',
        'One-time holiday bonuses paid to sales staff',
        'Payment gateway card-processing fees',
        'Short-term social media ad spend',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: '120 mln so‘mlik stanok 5 yil (60 oy) xizmat qilsa, to‘g‘ri chiziqli usulda har oyda 2 mln so‘m amortizatsiya xarajati yozilib, kelgusida uskunani yangilash manbasi shakllanadi.',
      ru: 'Если станок за 120 млн сум служит 60 месяцев, ежемесячная амортизация составляет 2 млн сум — это учитывает износ капитала в P&L.',
      en: 'Allocating a 120M UZS machine over 60 months records 2M UZS/month in P&L depreciation so true economic wear-and-tear is captured.',
    },
    hint: {
      uz: 'Qimmat dastgoh vaqt o‘tishi bilan eskiradi va qiymatini yo‘qotadi.',
      ru: 'Станки и автомобили изнашиваются на протяжении нескольких лет работы.',
      en: 'Think about spreading machine wear-and-tear across its multi-year lifespan.',
    },
  },
  {
    id: 'm10-q6',
    topicId: 'm10',
    isCalculation: true,
    question: {
      uz: 'Korxonaning haqiqiy oylik sotuvi 100 mln so‘m, zararsizlik nuqtasi (BEP pulda) esa 75 mln so‘m. Moliyaviy mustahkamlik zaxirasi (Margin of Safety) necha foiz?',
      ru: 'Фактическая месячная выручка компании — 100 млн сум, а точка безубыточности в деньгах — 75 млн сум. Чему равен запас финансовой прочности (Margin of Safety) в процентах?',
      en: 'A firm’s actual monthly revenue is 100M UZS, and its break-even revenue is 75M UZS. What is its Margin of Safety percentage?',
    },
    options: {
      uz: ['25%', '75%', '33,3%', '15%'],
      ru: ['25%', '75%', '33,3%', '15%'],
      en: ['25%', '75%', '33.3%', '15%'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Moliyaviy mustahkamlik zaxirasi = ((Haqiqiy tushum − BEP tushum) / Haqiqiy tushum) × 100% = ((100 − 75) / 100) × 100% = 25%. Ya’ni sotuv 25% gacha pasaysa ham korxona zararga kirmaydi.',
      ru: 'Запас прочности = ((100 − 75) / 100) × 100% = 25%. Выручка может упасть на 25%, прежде чем компания уйдет в минус.',
      en: 'Margin of Safety = ((100M − 75M) / 100M) × 100% = 25%, showing how much sales can drop before incurring losses.',
    },
    hint: {
      uz: '(Haqiqiy tushum − BEP) ni Haqiqiy tushumga bo‘ling.',
      ru: 'Вычтите точку безубыточности из выручки и разделите на выручку.',
      en: 'Compute (Actual Revenue − Break-Even Revenue) / Actual Revenue.',
    },
  },
  {
    id: 'm10-q7',
    topicId: 'm10',
    question: {
      uz: 'Raqobatchilarni bozordan siqib chiqarish maqsadida narxni uzoq muddat o‘z tannarxidan ham past qo‘yish (demping) qanday xavf tug‘diradi?',
      ru: 'Чем опасен ценовой демпинг (долгосрочная продажа товаров ниже себестоимости ради вытеснения конкурентов)?',
      en: 'Why is aggressive predatory price dumping dangerous for a small or medium enterprise?',
    },
    options: {
      uz: [
        'Aylanma mablag‘larni yemirib kassa uzilishiga olib keladi hamda "Raqobat to‘g‘risida"gi Qonun bo‘yicha antimonopol javobgarlikka sabab bo‘lishi mumkin',
        'Kompaniyaning sof foydasini bir zumda 10 barobar oshiradi',
        'Soliq kodeksiga binoan davlat budjetidan mukofot olib keladi',
        'Xomashyo yetkazib beruvchilar xomashyoni tekinga berishni boshlaydi',
      ],
      ru: [
        'Сжигает оборотный капитал вплоть до банкротства, привлекает нелояльных охотников за скидками и нарушает антимонопольное законодательство',
        'Гарантирует мгновенный рост чистой прибыли и рентабельности',
        'Позволяет автоматически списать банковские кредиты',
        'Никаких рисков не несет',
      ],
      en: [
        'It rapidly burns working capital, attracts zero-loyalty bargain hunters, triggers price wars, and risks antitrust violations under Competition Law',
        'It immediately triples net profit margins',
        'It qualifies the business for automatic loan forgiveness',
        'Suppliers automatically make their raw materials free',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Narx urushida katta moliyaviy zaxirasi bo‘lmagan kichik korxona birinchi bo‘lib bankrotga uchraydi; qolaversa O‘zbekistonning "Raqobat to‘g‘risida"gi Qonuni insofsiz narx dempingini taqiqlaydi.',
      ru: 'В ценовой войне малый бизнес истощает резервы первым, а после возврата цен клиенты-охотники за халявой мгновенно уходят.',
      en: 'Price wars destroy industry margins and starve SMEs of working capital needed for quality and service.',
    },
    hint: {
      uz: 'Har bir sotilgan donadan zarar ko‘rilsa, sotuv ko‘paygani sari nima yuz beradi?',
      ru: 'Если каждая единица продается в минус, рост продаж лишь ускоряет убыток.',
      en: 'Selling below unit cost means higher volume accelerates total cash burn.',
    },
  },
  {
    id: 'm10-q8',
    topicId: 'm10',
    question: {
      uz: 'Miqyos samarasi (Economies of Scale) ishlab chiqarishda qanday namoyon bo‘ladi?',
      ru: 'Как проявляется эффект масштаба (Economies of Scale) на производственном предприятии?',
      en: 'How do Economies of Scale reduce unit cost as production volume expands?',
    },
    options: {
      uz: [
        'Ishlab chiqarish hajmi oshgan sari doimiy xarajatlar ko‘proq mahsulot birligiga taqsimlanadi va ulgurji xomashyo xaridida chegirmalar olinib, 1 dona tannarx pasayadi',
        'Ko‘proq mahsulot ishlab chiqarilganda 1 dona tannarx har doim 3 barobar qimmatlashadi',
        'Ishlab chiqarish hajmi oshsa ijara shartnomasi avtomatik bekor bo‘ladi',
        'Miqyos samarasi faqat yakka tartibdagi sartaroshxonada ishlaydi',
      ],
      ru: [
        'При росте выпуска постоянные расходы распределяются на большее число единиц, а оптовые закупки сырья снижают полную себестоимость единицы',
        'При росте объема выпуска себестоимость одной штуки всегда удваивается',
        'Эффект масштаба означает сокращение ассортимента до нуля',
        'При большом объеме отменяется оплата электроэнергии',
      ],
      en: [
        'Fixed overhead is spread across more units and bulk purchasing lowers input prices, decreasing average total cost per unit',
        'Producing more units always doubles the cost per item',
        'Landlords waive factory rent once output grows',
        'Variable material usage per unit drops to zero',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Masalan, 20 mln so‘mlik sex ijarasi 1 000 ta mahsulotga bo‘linsa donasiga 20 000 so‘mdan, 10 000 ta mahsulotga bo‘linsa atigi 2 000 so‘mdan to‘g‘ri keladi.',
      ru: 'Постоянные издержки на единицу (AFC = FC / Q) падают по мере роста объема выпуска Q.',
      en: 'Average fixed cost per unit (FC / Q) declines hyperbolically as output Q increases, alongside supplier volume discounts.',
    },
    hint: {
      uz: 'Doimiy xarajat (FC) ni 100 ga bo‘lish bilan 10 000 ga bo‘lishni solishtiring.',
      ru: 'Поделите фиксированную аренду сначала на 100 штук, а затем на 10 000 штук.',
      en: 'Compare fixed rent divided across 100 units versus 10,000 units.',
    },
  },
  {
    id: 'm10-q9',
    topicId: 'm10',
    question: {
      uz: 'Freemium narxlash modeli asosan qaysi sohalarda eng samarali qo‘llaniladi?',
      ru: 'В каких сферах бизнеса модель ценообразования Freemium наиболее эффективна и экономически оправдана?',
      en: 'In which industry is the Freemium pricing model most economically viable?',
    },
    options: {
      uz: [
        'Qo‘shimcha 1 nafar bepul foydalanuvchiga xizmat ko‘rsatishning marjinal xarajati nolga yaqin bo‘lgan raqamli ilovalar, SaaS va onlayn ta’lim platformalarida',
        'Ko‘p qavatli uy-joy qurilishi va sement zavodlarida',
        'Zargarlik buyumlari va oltin quymalari savdosida',
        'Avtosalonlarda yangi yuk mashinalarini sotishda',
      ],
      ru: [
        'В цифровых сервисах, мобильных приложениях и SaaS, где предельные издержки обслуживания бесплатного пользователя близки к нулю',
        'В строительстве жилых домов и производстве бетона',
        'В ювелирных магазинах при раздаче золотых колец',
        'В оптовой торговле нефтепродуктами',
      ],
      en: [
        'Digital products, mobile apps, and SaaS platforms where the marginal cost of serving an additional free-tier user is near zero',
        'Heavy steel manufacturing and cement plants',
        'Fine gold jewelry retail stores',
        'Commercial truck dealerships',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Jismoniy tovarni bepul tarqatish ulkan zarar keltiradi; ammo raqamli mahsulotda bazaviy funksiyani bepul berib, foydalanuvchilarning 3–7 foizini Pro obunaga o‘tkazish yuqori daromad keltiradi.',
      ru: 'Раздавать физический цемент бесплатно разорительно, тогда как в софте бесплатный тариф служит воронкой привлечения для платного тарифа Pro.',
      en: 'Near-zero marginal replication costs allow software firms to use free tiers as viral acquisition channels for paid Pro upgrades.',
    },
    hint: {
      uz: 'Zoom, Canva yoki Telegram Premium qanday ishlashini o‘ylang.',
      ru: 'Вспомните сервисы вроде Canva, Zoom или облачных хранилищ.',
      en: 'Think of Canva, Zoom, or Spotify where marginal user hosting cost is tiny.',
    },
  },
  {
    id: 'm10-q10',
    topicId: 'm10',
    isCalculation: true,
    question: {
      uz: 'Agar tovarning sotish narxi 200 000 so‘m va o‘zgaruvchan tannarxi 140 000 so‘m bo‘lsa, sotuvchi 15% chegirma (skidka) e’lon qilganda 1 donadan qoladigan marjinal foyda qanday o‘zgaradi?',
      ru: 'Цена товара — 200 000 сум, переменные затраты — 140 000 сум. Как изменится маржинальная прибыль с единицы, если продавец даст скидку 15%?',
      en: 'A product sells for 200,000 UZS with variable cost of 140,000 UZS. If the seller grants a 15% price discount, what happens to unit contribution margin?',
    },
    options: {
      uz: [
        '60 000 so‘mdan 30 000 so‘mga tushadi — ya’ni foyda 15% ga emas, naq 50% ga qisqaradi!',
        '60 000 so‘mdan 51 000 so‘mga tushadi (15% ga kamayadi)',
        'O‘zgarmaydi, 60 000 so‘m bo‘lib qoladi',
        '90 000 so‘mga ko‘tariladi',
      ],
      ru: [
        'Упадет с 60 000 до 30 000 сум — то есть прибыль с единицы сократится ровно на 50%!',
        'Снизится всего на 15% — до 51 000 сум',
        'Останется неизменной (60 000 сум)',
        'Вырастет до 80 000 сум',
      ],
      en: [
        'It drops from 60,000 UZS to 30,000 UZS — cutting unit contribution profit in half (by 50%)!',
        'It declines by only 15% to 51,000 UZS',
        'It stays unchanged at 60,000 UZS',
        'It increases to 90,000 UZS',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Dastlabki marja: 200 000 − 140 000 = 60 000 so‘m. 15% chegirmadan so‘ng yangi narx = 170 000 so‘m, tannarx esa o‘zgarmaydi (140 000). Yangi marja = 170 000 − 140 000 = 30 000 so‘m (-50%)! Avvalgi foydani saqlash uchun endi 2 barobar ko‘p sotishga to‘g‘ri keladi.',
      ru: 'Скидка целиком вычитается из маржи: новая цена 170 000 − себестоимость 140 000 = 30 000 сум вместо 60 000 сум. Падение прибыли двукратное!',
      en: 'Price discounts come straight out of margin: new price 170,000 − unchanged cost 140,000 = 30,000 UZS (a 50% profit drop, requiring 2x volume just to break even on gross profit).',
    },
    hint: {
      uz: '200 000 dan 15% chegirma ayiring (170 000) va undan 140 000 tannarxni olib tashlang.',
      ru: 'Новая цена 170 000 сум минус прежняя себестоимость 140 000 сум.',
      en: 'Compute new price (200k × 0.85 = 170k) minus unchanged cost (140k).',
    },
  },

  // ==================== M11: Pul oqimi (Cash Flow) (10 questions) ====================
  {
    id: 'm11-q1',
    topicId: 'm11',
    question: {
      uz: 'Nima sababdan qog‘ozda (P&L hisobotida) foydali ko‘ringan korxona amalda to‘lovga qobiliyatsiz bo‘lib qolishi ("Kassa uzilishi" / Cash Gap ga uchrashi) mumkin?',
      ru: 'Почему прибыльная по отчету P&L компания может столкнуться с кассовым разрывом и неплатежеспособностью?',
      en: 'Why can a business that reports strong accounting profit on its P&L statement still suffer a severe Cash Gap?',
    },
    options: {
      uz: [
        'Tovarlar nasiyaga (kechiktirilgan to‘lov bilan) yuklab jo‘natilgan bo‘lib, tushum hisoblangan, ammo ijara, oylik va soliqni bugun haqiqiy pulda to‘lash kerak bo‘lgani uchun',
        'Bank hisobraqamida ortiqcha naqd pul ko‘payib ketgani uchun',
        'Barcha xaridorlar 100% oldindan naqd to‘lov qilgani uchun',
        'Korxonada debitorlik qarzdorlik nolga teng bo‘lgani uchun',
      ],
      ru: [
        'Выручка признана по отгрузке с отсрочкой платежа (деньги зависли в дебиторке), а зарплату, налоги и аренду нужно платить живыми деньгами уже сегодня',
        'Из-за слишком большого остатка свободных денег на расчетном счете',
        'Потому что клиенты платят 100% предоплату наличными',
        'Из-за отсутствия каких-либо кредитов и обязательств',
      ],
      en: [
        'Revenue is booked on accrual upon shipment with 60-day payment terms (trapped in Accounts Receivable), while payroll, rent, and taxes require immediate cash outflow today',
        'Because too much cash is sitting idle in the bank account',
        'Because every customer pays 100% cash upfront',
        'Because the company holds zero inventory and zero receivables',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Hisoblash usulida (Accrual) foyda yuklab jo‘natish faktiga ko‘ra yoziladi, ammo xodim maoshi va soliqlarni EHF qog‘ozi bilan emas, faqat hisobraqamdagi real pul bilan to‘lash mumkin.',
      ru: 'Прибыль — это бухгалтерский показатель по методу начисления, а деньги на счете (Cash) — реальная ликвидность для оплаты счетов.',
      en: '"Profit is an opinion, Cash is a fact": accrual revenue tied up in unpaid invoices or unsold stock cannot pay this week’s payroll.',
    },
    hint: {
      uz: 'Nasiyaga sotilgan tovar puli 60 kundan keyin kelsa, bugungi oylik nimadan to‘lanadi?',
      ru: 'Сравните момент отгрузки товара в долг и дату выплаты зарплаты.',
      en: 'Contrast booked credit sales (AR) with immediate cash payroll obligations.',
    },
  },
  {
    id: 'm11-q2',
    topicId: 'm11',
    question: {
      uz: 'Pul oqimlari to‘g‘risidagi hisobotda (Cash Flow Statement) mablag‘lar harakati qaysi 3 ta faoliyat yo‘nalishiga ajratiladi?',
      ru: 'На какие 3 вида деятельности делятся денежные потоки в классическом отчете о движении денежных средств (ДДС / Cash Flow)?',
      en: 'Into which three standard activity categories is a Cash Flow Statement organized?',
    },
    options: {
      uz: [
        'Operatsion (OCF), Investitsion (ICF) va Moliyaviy (FCF) faoliyat oqimlari',
        'Ertalabki, tushlik va kechki kassa oqimlari',
        'Naqd, plastik va kriptovalyuta oqimlari',
        'Reklama, dizayn va kadrlar bo‘limi oqimlari',
      ],
      ru: [
        'Операционная (OCF), Инвестиционная (ICF) и Финансовая (FCF) деятельность',
        'Наличная, безналичная и бартерная деятельность',
        'Маркетинговая, юридическая и кадровая деятельность',
        'Внутренняя, районная и областная деятельность',
      ],
      en: [
        'Operating Activities (OCF), Investing Activities (ICF), and Financing Activities (FCF)',
        'Morning, Afternoon, and Evening register shifts',
        'Marketing, HR, and Legal department budgets',
        'Domestic, Regional, and Municipal ledgers',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'OCF — asosiy savdo va xizmatdan pul tushumi/chiqimi; ICF — uskuna va ko‘chmas mulk xaridi/sotuvi; FCF — kredit olish/qaytarish, ustav kapitali va dividendlar.',
      ru: 'Такое разделение показывает, зарабатывает ли основной бизнес деньги сам (OCF > 0) или живет только за счет новых кредитов (FCF).',
      en: 'Separating Operating, Investing, and Financing cash flows reveals whether core operations self-fund growth or rely on external debt.',
    },
    hint: {
      uz: 'Asosiy savdo, Uskuna xaridi va Kredit/Investitsiya uchligini eslang.',
      ru: 'Вспомните классическую тройку: OCF, ICF, FCF.',
      en: 'Recall OCF (core trade), ICF (CapEx/assets), and FCF (debt/equity).',
    },
  },
  {
    id: 'm11-q3',
    topicId: 'm11',
    isCalculation: true,
    question: {
      uz: 'Oy boshida hisobraqamda 25 mln so‘m bor edi. Oy davomida mijozlardan 90 mln so‘m pul kelib tushdi, yetkazib beruvchilar, ijara, oylik va soliqlarga jami 105 mln so‘m to‘landi. Oy yakunidagi pul qoldig‘i qancha?',
      ru: 'На начало месяца на счете было 25 млн сум. Поступления за месяц составили 90 млн сум, а выплаты — 105 млн сум. Каков остаток денег на конец месяца?',
      en: 'Opening cash balance was 25M UZS. Monthly cash inflows totaled 90M UZS, and cash outflows totaled 105M UZS. What is the closing cash balance?',
    },
    options: {
      uz: ['10 mln so‘m (sof pul oqimi −15 mln bo‘lsa ham, boshlang‘ich zaxira hisobiga kassa uzilishi yuz bermadi)', '−15 mln so‘m', '115 mln so‘m', '40 mln so‘m'],
      ru: ['10 млн сум (чистый поток −15 млн сум покрыт начальным остатком без кассового разрыва)', '−15 млн сум', '115 млн сум', '40 млн сум'],
      en: ['10M UZS (net cash flow was −15M UZS, cushioned safely by the 25M opening balance)', '−15M UZS', '115M UZS', '40M UZS'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Yakuniy qoldiq = Boshlang‘ich qoldiq + Tushumlar − Chiqimlar = 25 + 90 − 105 = 10 mln so‘m. Ammo keyingi oyda ham −15 mln salbiy oqim takrorlansa, hisobraqam −5 mln kassa uzilishiga tushadi!',
      ru: 'Конечный остаток = 25 + 90 − 105 = 10 млн сум. Отрицательный чистый поток (−15 млн) требует внимания, чтобы в следующем месяце не уйти в минус.',
      en: 'Closing Cash = 25M + 90M − 105M = 10M UZS. While positive today, repeating a −15M net burn next month would trigger a −5M cash deficit.',
    },
    hint: {
      uz: '25 + 90 − 105 ni hisoblang.',
      ru: 'Начальный остаток (25) + Приток (90) − Отток (105).',
      en: 'Calculate Opening Cash (25) + Inflows (90) − Outflows (105).',
    },
  },
  {
    id: 'm11-q4',
    topicId: 'm11',
    question: {
      uz: 'Debitorlik qarzdorlik (Accounts Receivable) va Kreditorlik qarzdorlik (Accounts Payable) tushunchalarining to‘g‘ri ta’rifi qaysi?',
      ru: 'Какое утверждение верно раскрывает понятия дебиторской и кредиторской задолженности?',
      en: 'Which statement accurately distinguishes Accounts Receivable (AR) from Accounts Payable (AP)?',
    },
    options: {
      uz: [
        'Debitorlik — xaridorlarning bizga to‘lashi kerak bo‘lgan qarzi; Kreditorlik — bizning xomashyo yetkazib beruvchilar va hamkorlar oldidagi qarzimiz',
        'Debitorlik — bizning bank oldidagi qarzimiz; Kreditorlik — bizning seyfimizdagi naqd pul',
        'Ikkalasi ham qaytarilmaydigan davlat grantini anglatadi',
        'Debitorlik — bu asosiy vositalar eskirishi',
      ],
      ru: [
        'Дебиторская — сколько должны НАМ покупатели за отгруженный товар; Кредиторская — сколько должны МЫ поставщикам и подрядчикам',
        'Дебиторская — это наши долги банку; Кредиторская — это деньги у нас в кассе',
        'Оба термина обозначают уставный капитал ООО',
        'Это виды таможенных пошлин на импорт',
      ],
      en: [
        'Accounts Receivable is money owed TO our business by customers; Accounts Payable is money WE owe to suppliers and vendors',
        'Accounts Receivable is bank debt we owe; Accounts Payable is cash in our vault',
        'Both refer to non-refundable government grants',
        'Both represent equipment depreciation schedules',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Debitorlik haddan ziyod shishib ketsa korxonaning o‘z aylanma mablag‘i birovlarning qo‘lida muzlab qoladi.',
      ru: 'Рост просроченной дебиторки замораживает оборотный капитал компании и провоцирует кассовые разрывы.',
      en: 'Excessive overdue Accounts Receivable starves the business of liquidity, whereas well-negotiated Accounts Payable terms extend cash runway.',
    },
    hint: {
      uz: 'Debitor — bizdan qarzdor xaridor; Kreditor — bizga qarzga tovar bergan yetkazib beruvchi.',
      ru: 'Дебиторы должны нам, кредиторам должны мы.',
      en: 'Receivable = cash to be received from buyers; Payable = bills to be paid to vendors.',
    },
  },
  {
    id: 'm11-q5',
    topicId: 'm11',
    isCalculation: true,
    question: {
      uz: 'Ulgurji korxonada ombordagi zaxira o‘rtacha 35 kunda sotiladi (DIO = 35), xaridorlar pulni 25 kunda to‘laydi (DSO = 25), korxona esa yetkazib beruvchiga xomashyo haqini 20 kunda to‘laydi (DPO = 20). Pul aylanish sikli (Cash Conversion Cycle — CCC) necha kun?',
      ru: 'Товар лежит на складе в среднем 35 дней (DIO), покупатели платят через 25 дней (DSO), а поставщикам компания платит через 20 дней (DPO). Чему равен цикл конвертации денег (CCC)?',
      en: 'Inventory sits in warehouse for 35 days (DIO), buyers pay in 25 days (DSO), and suppliers are paid in 20 days (DPO). What is the Cash Conversion Cycle (CCC)?',
    },
    options: {
      uz: ['40 kun', '80 kun', '30 kun', '10 kun'],
      ru: ['40 дней', '80 дней', '30 дней', '10 дней'],
      en: ['40 days', '80 days', '30 days', '10 days'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'CCC = DIO + DSO − DPO = 35 + 25 − 20 = 40 kun. Ya’ni korxona yetkazib beruvchiga pul to‘lagan kundan boshlab xaridorlardan pul qaytib kelguncha 40 kun o‘z aylanma mablag‘i hisobidan yashaydi.',
      ru: 'CCC = 35 + 25 − 20 = 40 дней. Именно на эти 40 дней предприятию нужен собственный оборотный капитал.',
      en: 'CCC = DIO (35) + DSO (25) − DPO (20) = 40 days during which working capital is tied up in operations.',
    },
    hint: {
      uz: 'CCC = DIO + DSO − DPO formulasidan foydalaning.',
      ru: 'Сложите дни склада и отсрочки клиентам и вычтите отсрочку от поставщиков.',
      en: 'Apply CCC = DIO + DSO − DPO.',
    },
  },
  {
    id: 'm11-q6',
    topicId: 'm11',
    question: {
      uz: 'Yangi dastgoh sotib olish uchun 200 mln so‘m to‘lash Pul oqimlari hisobotining (Cash Flow) qaysi bo‘limida aks etadi?',
      ru: 'В каком разделе отчета о движении денежных средств (Cash Flow) отражается покупка нового производственного станка за 200 млн сум?',
      en: 'Under which section of the Cash Flow Statement is a 200M UZS cash purchase of factory machinery recorded?',
    },
    options: {
      uz: [
        'Investitsion faoliyatdan pul oqimi (ICF — manfiy chiqim sifatida)',
        'Operatsion faoliyatdan pul oqimi (OCF)',
        'Moliyaviy faoliyatdan pul oqimi (FCF)',
        'Pul oqimi hisobotiga umuman kiritilmaydi',
      ],
      ru: [
        'Денежный поток от инвестиционной деятельности (ICF — как отток CapEx)',
        'Денежный поток от операционной деятельности (OCF)',
        'Денежный поток от финансовой деятельности (FCF)',
        'Вообще не отражается в Cash Flow, пока станок не износится',
      ],
      en: [
        'Cash Flow from Investing Activities (ICF — as a CapEx cash outflow)',
        'Cash Flow from Operating Activities (OCF)',
        'Cash Flow from Financing Activities (FCF)',
        'Omitted completely from the Cash Flow Statement',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Uzoq muddatli asosiy vositalar (CapEx) xaridi Cash Flow hisobotida to‘liq to‘langan oyda Investitsion chiqim (ICF) sifatida ko‘rinadi; P&L hisobotiga esa u amortizatsiya orqali oyma-oy o‘tadi.',
      ru: 'Капитальные вложения в оборудование (CapEx) сразу списываются с расчетного счета в разделе ICF, тогда как в P&L они попадают постепенно через амортизацию.',
      en: 'Capital expenditures (CapEx) hit Investing Cash Flow immediately when cash leaves the bank, whereas P&L recognizes them gradually via depreciation.',
    },
    hint: {
      uz: 'CapEx (uzoq muddatli aktivga sarmoya) qaysi faoliyat turiga kiradi?',
      ru: 'Покупка основных средств (CapEx) — это инвестиции компании в саму себя.',
      en: 'CapEx purchases of long-term equipment belong to Investing Activities.',
    },
  },
  {
    id: 'm11-q7',
    topicId: 'm11',
    question: {
      uz: 'To‘lov taqvimi (Payment Calendar) vositasi tadbirkorga qanday yordam beradi?',
      ru: 'Зачем предпринимателю вести платежный календарь на 4–8 недель вперед?',
      en: 'What is the primary operational purpose of maintaining a rolling 4-to-8-week Payment Calendar?',
    },
    options: {
      uz: [
        'Kunlar va haftalar kesimida kutilayotgan tushum va majburiy to‘lovlarni oldindan ko‘rib, kassa uzilishini 2–3 hafta avval aniqlash va bartaraf etish uchun',
        'Xodimlarning tug‘ilgan kunlarini tabriklash uchun',
        'Logotip ranglarini tanlash uchun',
        'Soliq tekshiruvlarini bekor qilish uchun',
      ],
      ru: [
        'Чтобы по дням сопоставлять плановые поступления и обязательные платежи, заранее выявляя кассовый разрыв за 2–3 недели до его наступления',
        'Чтобы отмечать дни рождения сотрудников отдела продаж',
        'Чтобы заменить официальный бухгалтерский баланс в налоговой',
        'Чтобы рассчитывать дизайн упаковки товара',
      ],
      en: [
        'To map daily/weekly expected inflows against mandatory bills, spotting potential cash deficits weeks in advance so management can act proactively',
        'To track employee birthdays and office holidays',
        'To replace statutory tax filings on my.soliq.uz',
        'To design social media banners',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Kassa uzilishi bugun ertalab bilinsa — kech bo‘ladi; 3 hafta oldin to‘lov taqvimida ko‘rinsa, debitorlikni tezlashtirish yoki ikkinchi darajali to‘lovni surish bilan oson hal etiladi.',
      ru: 'Платежный календарь служит радаром ликвидности и позволяет приоритизировать платежи без паники и штрафов.',
      en: 'Early visibility lets founders accelerate receivables, stagger non-urgent vendor bills, or draw a credit line before bouncing payments.',
    },
    hint: {
      uz: 'Kelgusi haftalardagi kirim va chiqim sanalarini solishtirish haqida o‘ylang.',
      ru: 'Это ежедневный график будущих приходов и расходов денег.',
      en: 'Think of a day-by-day liquidity radar matching inflows and due dates.',
    },
  },
  {
    id: 'm11-q8',
    topicId: 'm11',
    isCalculation: true,
    question: {
      uz: 'Startap hisobraqamida 180 mln so‘m mablag‘ qolgan. Uning oylik sof pul yoqish tezligi (Net Burn Rate — chiqim minus tushum) oyiga 30 mln so‘mni tashkil etmoqda. Startapning Runway (yashash muddati zaxirasi) necha oyga teng?',
      ru: 'На счете стартапа 180 млн сум. Ежемесячный чистый расход денег (Net Burn Rate) составляет 30 млн сум. Чему равен Runway (запас жизни стартапа)?',
      en: 'A startup holds 180M UZS in cash and has a monthly Net Burn Rate of 30M UZS. What is its Cash Runway?',
    },
    options: {
      uz: ['6 oy', '18 oy', '3 oy', '12 oy'],
      ru: ['6 месяцев', '18 месяцев', '3 месяца', '12 месяцев'],
      en: ['6 months', '18 months', '3 months', '12 months'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Runway = Mavjud pul qoldig‘i / Oylik Net Burn Rate = 180 mln / 30 mln = 6 oy. Demak, startap 6 oy ichida zararsizlik nuqtasiga chiqishi yoki yangi investitsiya jalb etishi shart.',
      ru: 'Runway = 180 млн / 30 млн = 6 месяцев до полного исчерпания денежных средств при текущем темпе трат.',
      en: 'Cash Runway = 180M UZS / 30M UZS per month = 6 months to reach cash-flow positivity or close new funding.',
    },
    hint: {
      uz: 'Mavjud pul zaxirasini oylik sof minusga bo‘ling.',
      ru: 'Разделите остаток денег на счете на ежемесячный чистый отток.',
      en: 'Divide Cash Balance (180M) by Monthly Net Burn (30M).',
    },
  },
  {
    id: 'm11-q9',
    topicId: 'm11',
    question: {
      uz: 'Mavsumiy biznesda (masalan, muzqaymoq ishlab chiqarish yoki o‘quv markazi) kassa uzilishining oldini olish uchun yuqori mavsumda tushgan pulni qanday boshqarish to‘g‘ri?',
      ru: 'Как правильно управлять деньгами в сезонном бизнесе (например, учебный центр или продажа кондиционеров), чтобы избежать кассового разрыва в «мертвый» сезон?',
      en: 'How should a seasonal business (e.g., an education center or summer beverage brand) manage peak-season cash inflows to prevent off-season insolvency?',
    },
    options: {
      uz: [
        'Yuqori mavsum tushumining bir qismini alohida zahira fondiga (depozitga) ajratib, kamida 3–4 oylik doimiy xarajatlarni qoplovchi moliyaviy yostiqcha shakllantirish',
        'Yozda tushgan barcha pulni shaxsiy avtomobil xaridiga sarflab yuborish',
        'Past mavsumda soliq va ijara to‘lashni shunchaki to‘xtatib qo‘yish',
        'Xodimlar maoshini 6 oy kechiktirib berish',
      ],
      ru: [
        'Формировать из пиковой выручки резервный фонд (на краткосрочном депозите) минимум на 3–4 месяца постоянных расходов низкого сезона',
        'Изымать всю летнюю выручку на личные покупки собственника',
        'Перестать платить аренду и налоги зимой без согласования',
        'Задерживать зарплату персоналу на полгода',
      ],
      en: [
        'Ring-fence a portion of peak inflows into a short-term interest-bearing reserve covering at least 3–4 months of off-season fixed overhead',
        'Withdraw 100% of peak cash for personal luxury purchases',
        'Unilaterally stop paying taxes and rent in low months',
        'Withhold employee wages for six months',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Tadbirkorlarning eng ko‘p uchraydigan xatosi — mavsum cho‘qqisidagi kassadagi ko‘p pulni "sof erkin foyda" deb o‘ylab biznesdan chiqarib olish va past mavsumda ijara to‘lay olmay qolishdir.',
      ru: 'Деньги в кассе в пик сезона — это не вся годовая прибыль, а ресурс для выживания компании в месяцы спада продаж.',
      en: 'Peak cash inflows must subsidize off-season fixed rent and core staff retention; treating peak cash as pure distributable profit causes winter collapse.',
    },
    hint: {
      uz: 'Qishda yoki yozgi ta’tilda doimiy xarajatlar (ijara, asosiy jamoa) to‘xtab qolmaydi.',
      ru: 'В низкий сезон выручка падает, а постоянная аренда остается.',
      en: 'Fixed costs continue during off-peak months even when revenue dips.',
    },
  },
  {
    id: 'm11-q10',
    topicId: 'm11',
    question: {
      uz: 'Faktoring moliyaviy xizmati kassa uzilishini yumshatishda qanday ishlaydi?',
      ru: 'Как финансовый инструмент факторинга помогает производственной или оптовой компании устранить кассовый разрыв?',
      en: 'How does invoice Factoring help a B2B supplier bridge working-capital cash gaps?',
    },
    options: {
      uz: [
        'Bank yoki moliya tashkiloti tasdiqlangan EHF (debitorlik qarzi) hisobiga tovar pulining 80–90 foizini yetkazib beruvchiga darhol to‘lab beradi, muddat kelganda esa xaridordan undirib oladi',
        'Soliq inspeksiyasi korxonaning barcha qarzlarini kechirib yuboradi',
        'Xaridor tovarni olmasdan turib ikki barobar ko‘p jarima to‘laydi',
        'Ombordagi o‘tmagan eski tovarlarni davlat sotib oladi',
      ],
      ru: [
        'Банк/фактор сразу выплачивает поставщику до 80–90% суммы поставки под уступку подтвержденной дебиторской задолженности (ЭСФ) крупного покупателя',
        'Налоговая служба списывает долги предприятия перед поставщиками',
        'Это продажа офисной мебели на аукционе',
        'Это безвозмездный грант от торговой сети',
      ],
      en: [
        'A bank or factor advances 80–90% of verified electronic invoice receivables upfront for a small fee and collects payment from the corporate buyer at maturity',
        'The tax authority forgives all supplier liabilities',
        'The government buys obsolete warehouse stock at full retail price',
        'Employees lend personal savings to the company interest-free',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Yirik supermarketlar tarmog‘iga 60 kunlik kechiktirilgan to‘lov bilan mahsulot yetkazib beruvchi ishlab chiqaruvchi faktoring orqali pulini bugunoq aylanmaga qaytarishi mumkin (O‘zbekistonda elektron faktoring platformalari faol rivojlanmoqda).',
      ru: 'Факторинг превращает замороженную дебиторскую задолженность торговых сетей в живые оборотные деньги без твердого залога недвижимости.',
      en: 'Factoring converts slow-paying B2B receivables into immediate operating cash without requiring real-estate collateral.',
    },
    hint: {
      uz: 'Tasdiqlangan hisobvaraq-fakturani (debitorlikni) bank orqali oldindan naqdlashtirish mexanizmi.',
      ru: 'Финансирование под уступку денежного требования (дебиторки).',
      en: 'Think of selling/advancing verified B2B accounts receivable for immediate cash.',
    },
  },
];

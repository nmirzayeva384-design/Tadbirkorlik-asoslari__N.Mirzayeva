import { TopicData } from '../types';

export const TOPICS_M1_M4: TopicData[] = [
  {
    id: 'm1',
    number: 1,
    code: 'M1',
    hours: 2,
    readMinutes: 14,
    iconName: 'Compass',
    roadmapStage: { uz: 'Tafakkur va imkoniyat', ru: 'Мышление и ниша', en: 'Mindset & Opportunity' },
    title: {
      uz: 'Tadbirkorlik tafakkuri va biznes imkoniyatlarni aniqlash',
      ru: 'Предпринимательское мышление и выявление бизнес-возможностей',
      en: 'Entrepreneurial Mindset & Identifying Business Opportunities',
    },
    shortDesc: {
      uz: 'Kichik biznes, mikrobiznes, startap, oilaviy va ijtimoiy tadbirkorlik farqlari hamda "Muammo – yechim – mijoz – daromad" zanjiri.',
      ru: 'Различия малого бизнеса, стартапов, семейного и социального предпринимательства; цепочка «Проблема – решение – клиент – доход».',
      en: 'Distinguishing small business, microbusiness, startups, family and social ventures, and building the Problem–Solution–Customer–Revenue chain.',
    },
    summary: {
      uz: 'Ushbu kirish mavzusida tadbirkorlikning iqtisodiy va ijtimoiy mohiyati, O‘zbekiston iqtisodiyotida xususiy sektorning o‘rni hamda oddiy maishiy noqulayliklarni daromadli biznes imkoniyatiga aylantirish algoritmi o‘rganiladi.',
      ru: 'Вводный модуль раскрывает экономическую суть предпринимательства, роль частного сектора в экономике Узбекистана и алгоритм превращения бытовых проблем людей в устойчивую бизнес-модель.',
      en: 'This foundational module explores the economic essence of entrepreneurship, the role of private enterprise in Uzbekistan, and a systematic framework for turning everyday frictions into viable ventures.',
    },
    learningObjectives: {
      uz: [
        'Kichik biznes, mikrobiznes, startap, oilaviy va ijtimoiy tadbirkorlik yondashuvlarini aniq mezonlar asosida farqlash.',
        'Yollanma ijrochi tafakkuri va tadbirkorlik tafakkuri (proaktivlik, hisoblangan tavakkalchilik) o‘rtasidagi tafovutni tahlil qilish.',
        'Kundalik hayotdagi muammolarni kuzatish orqali "Muammo – Yechim – Mijoz – Daromad manbai" zanjirini mustaqil tuzish.',
        'O‘zbekiston ЯIM va bandligida kichik tadbirkorlikning salmog‘ini rasmiy statistik ko‘rsatkichlar yordamida asoslash.',
      ],
      ru: [
        'Различать малый бизнес, микробизнес, стартап, семейное и социальное предпринимательство по ключевым критериям.',
        'Сравнивать мышление исполнителя и предпринимательское мышление (проактивность, управление риском, фокус на ценности).',
        'Формировать логическую цепочку «Проблема – Решение – Клиент – Источник дохода» на базе реальных бытовых ситуаций.',
        'Оценивать вклад малого бизнеса в ВВП и занятость населения Республики Узбекистан на основе официальной статистики.',
      ],
      en: [
        'Differentiate small business, microbusiness, startups, family enterprises, and social entrepreneurship using clear operational criteria.',
        'Contrast employee execution mindset with entrepreneurial thinking centered on proactivity, calculated risk, and value creation.',
        'Construct a complete "Problem – Solution – Customer – Revenue Stream" chain from everyday real-world observations.',
        'Interpret official macroeconomic data regarding small business contribution to Uzbekistan’s GDP and employment.',
      ],
    },
    sections: [
      {
        id: 'm1-s1',
        title: {
          uz: '1.1. Tadbirkorlikning mohiyati va asosiy yo‘nalishlari',
          ru: '1.1. Сущность предпринимательства и основные подходы',
          en: '1.1. Essence of Entrepreneurship & Core Venture Types',
        },
        paragraphs: {
          uz: [
            'Tadbirkorlik — bu shunchaki "olib-sotish" emas, balki resurslarni (mehnat, kapital, texnologiya va axborotni) yangicha uyg‘unlashtirib, insonlar yoki korxonalar muammosini hal etuvchi qiymat yaratish va buning evaziga qonuniy foyda olish faoliyatidir.',
            'Zamonaviy iqtisodiyotda tadbirkorlik bir xil qolipda bo‘lmaydi. Maqsadi, o‘sish sur’ati va boshqaruv uslubiga ko‘ra u beshta asosiy yondashuvga ajraladi: mikrobiznes, klassik kichik biznes, innovatsion startap, oilaviy tadbirkorlik hamda ijtimoiy tadbirkorlik.',
          ],
          ru: [
            'Предпринимательство — это не просто перепродажа товаров, а самостоятельная инициативная деятельность по объединению ресурсов (труда, капитала, технологий) для решения проблем потребителей и систематического получения законной прибыли.',
            'В современной экономике выделяют пять ключевых подходов, различающихся масштабом, темпами роста и миссией: микробизнес, классический малый бизнес, технологический стартап, семейное и социальное предпринимательство.',
          ],
          en: [
            'Entrepreneurship goes far beyond simple trading: it is the proactive combination of talent, capital, and technology to solve real human or corporate problems while generating sustainable, lawful profit under uncertainty.',
            'Modern economies feature five distinct entrepreneurial approaches differing in scale, scalability, and mission: microbusiness, traditional small business, high-growth startup, family enterprise, and social entrepreneurship.',
          ],
        },
        highlightTerms: ['entrepreneurship', 'small-business', 'startup', 'social-entrepreneurship'],
        comparisonTable: {
          headers: {
            uz: ['Yo‘nalish turi', 'Asosiy maqsad va masshtab', 'O‘zbekistondagi tipik misol'],
            ru: ['Формат бизнеса', 'Главная цель и масштаб', 'Типичный пример в Узбекистане'],
            en: ['Venture Type', 'Primary Goal & Scalability', 'Typical Uzbekistan Example'],
          },
          rows: {
            uz: [
              ['Mikrobiznes / O‘zini o‘zi band qilish', 'Shaxsiy va oilaviy barqaror daromad, mahalliy qamrov', 'Mahalladagi sartaroshxona, qandolatchilik, kuryerlik, dizayn frilansi'],
              ['Kichik biznes', 'Tasdiqlangan model asosida barqaror foyda va rentabellik', 'O‘quv markazi, stomatologiya klinikasi, mebel sexi, mini-market'],
              ['Startap (Startup)', 'Innovatsion yechim orqali mamlakat yoki mintaqa bo‘ylab tez o‘sish (10x)', 'Uzum ekotizimi, Payme, IMAN, Workly, Billz (avtomatlashtirish SaaS)'],
              ['Oilaviy tadbirkorlik', 'Oila a’zolari mehnati va avloddan avlodga o‘tuvchi hunar/mulk', 'Marg‘ilon atlas to‘qish ustaxonasi, G‘ijduvon kulolchilik markazi, mehmon uyi'],
              ['Ijtimoiy tadbirkorlik', 'Ijtimoiy/ekologik muammoni o‘zini o‘zi moliyalashtiruvchi modelda yechish', 'Imkoniyati cheklangan shaxslar ishlaydigan tikuv korxonasi, chiqindini qayta ishlash'],
            ],
            ru: [
              ['Микробизнес / Самозанятость', 'Стабильный личный доход, локальный охват района', 'Кофейня у дома, ателье, репетиторство, фриланс-разработка'],
              ['Малый бизнес', 'Проверенная бизнес-модель, предсказуемая рентабельность', 'Учебный центр, стоматология, мебельный цех, пекарня'],
              ['Стартап (Startup)', 'Инновационный продукт и быстрое кратное масштабирование', 'Payme, Uzum, Billz (облачная автоматизация ритейла), Express24'],
              ['Семейный бизнес', 'Объединение труда членов семьи, преемственность ремесла', 'Семейный гостевой дом в Бухаре, ремесленная мастерская в Риштане'],
              ['Социальное предпринимательство', 'Решение социальной или экологической задачи с самоокупаемостью', 'Инклюзивная мастерская, переработка пластика и макулатуры'],
            ],
            en: [
              ['Microbusiness / Self-Employed', 'Steady personal livelihood within a local neighborhood', 'Neighborhood coffee kiosk, tailoring studio, private tutoring, freelance design'],
              ['Small Business', 'Proven operating model focused on steady cash profit', 'Language academy, dental clinic, furniture workshop, local bakery'],
              ['Startup', 'Repeatable, tech-enabled model built for rapid regional scaling', 'Payme, Uzum ecosystem, Billz retail SaaS, Workly HR tech'],
              ['Family Enterprise', 'Pooled family labor and multi-generational craft or hospitality', 'Family boutique guesthouse in Samarkand, Rishtan ceramics studio'],
              ['Social Entrepreneurship', 'Self-sustaining business solving inclusion or ecological challenges', 'Inclusive textile workshop employing people with disabilities, plastic recycling'],
            ],
          },
        },
      },
      {
        id: 'm1-s2',
        title: {
          uz: '1.2. Tadbirkorlik tafakkuri: muammoni imkoniyat sifatida ko‘rish',
          ru: '1.2. Предпринимательское мышление: проблема как возможность',
          en: '1.2. Entrepreneurial Mindset: Reframing Friction into Opportunity',
        },
        paragraphs: {
          uz: [
            'Oddiy iste’molchi navbatda turib qolsa yoki kerakli xizmatni topa olmasa — shikoyat qiladi. Tadbirkorlik tafakkuriga ega inson esa o‘ziga uchta savol beradi: "Bu noqulaylik mendan tashqari yana qancha odamni qiynayapti?", "Uni qanday qilib tezroq va qulayroq hal etish mumkin?" va "Odamlar vaqtini tejash uchun qancha to‘lashga tayyor?".',
            'Professor Saras Sarasvatining "Effektuatsiya" (Effectuation) nazariyasiga ko‘ra, muvaffaqiyatli tadbirkorlar "menda million dollar bo‘lganda boshlayman" deb kutmaydi; ular "qo‘limda hozir qanday bilim, tanish va resurs bor?" degan nuqtadan kichik qadam bilan ish boshlaydi.',
          ],
          ru: [
            'Обычный потребитель, сталкиваясь с очередью, плохим сервисом или дефицитом, испытывает раздражение. Человек с предпринимательским мышлением задает три вопроса: «Как много людей сталкиваются с этой болью?», «Как решить её проще и быстрее?» и «Готовы ли за это платить?».',
            'Согласно концепции эффектуации профессора Сарас Сарасвати, успешные предприниматели не ждут идеальных условий или крупного капитала — они начинают с инвентаризации уже имеющихся навыков, контактов и доступных ресурсов.',
          ],
          en: [
            'Where a passive observer complains about long queues, slow logistics, or fragmented services, an entrepreneurial thinker asks three questions: "How many others experience this exact friction?", "How can we solve it 3x faster?", and "Will customers pay for that relief?"',
            'Drawing on Saras Sarasvathy’s Effectuation principle, seasoned founders do not wait for perfect market conditions or massive capital; they start immediately with their existing means — who they are, what they know, and whom they know.',
          ],
        },
        bulletPoints: {
          uz: [
            'Hisoblangan tavakkalchilik: ko‘r-ko‘rona qimor emas, balki kutilishi mumkin bo‘lgan maksimal yo‘qotishni oldindan chegaralab harakat qilish.',
            'Empatiya va kuzatuvchanlik: mijozning aytgan gapinigina emas, uning yechilmayotgan asl muammosini ("og‘riq nuqtasini") ilg‘ash.',
            'Moslashuvchanlik (Resilience): dastlabki xatoni mag‘lubiyat emas, balki bozor bergan qimmatli ma’lumot sifatida qabul qilish.',
          ],
          ru: [
            'Просчитанный риск: не азартная игра ва-банк, а ограничение допустимых потерь на этапе проверки идеи.',
            'Эмпатия к клиенту: способность увидеть реальную боль человека за его повседневными действиями.',
            'Адаптивность: восприятие первых ошибок не как провала, а как ценной обратной связи от рынка.',
          ],
          en: [
            'Calculated Risk (Affordable Loss): capping downside exposure rather than gambling blindly.',
            'Customer Empathy: observing real behavioral bottlenecks rather than relying on assumptions.',
            'Adaptive Resilience: treating early setbacks as empirical market data to refine the offering.',
          ],
        },
      },
      {
        id: 'm1-s3',
        title: {
          uz: '1.3. "Muammo – Yechim – Mijoz – Daromad manbai" zanjiri',
          ru: '1.3. Цепочка «Проблема – Решение – Клиент – Источник дохода»',
          en: '1.3. Building the Problem – Solution – Customer – Revenue Chain',
        },
        paragraphs: {
          uz: [
            'Har qanday barqaror biznes to‘rtta uzviy halqadan tashkil topadi. Agar zanjirning bitta halqasi uzilsa (masalan, ajoyib yechim bor, lekin unga pul to‘laydigan aniq mijoz segmenti yo‘q bo‘lsa), loyiha xayriya yoki qimmat xobbiga aylanib qoladi.',
            'Toshkent yoki viloyat markazlaridagi talabalar misolida ko‘raylik: kechki payt darsdan chiqqan talabalar arzon, issiq va foydali ovqat topishga qiynaladi (Muammo) → Kampus yaqinida 7 daqiqada tayyor bo‘ladigan sog‘lom "bowl" va sendvich nuqtasi + Telegram oldindan buyurtma boti (Yechim) → 18–23 yoshli talabalar va o‘qituvchilar (Mijoz) → Har bir porsiya sotuvi va haftalik tushlik obunasi (Daromad manbai).',
          ],
          ru: [
            'Любой жизнеспособный бизнес строится на четырех неразрывных звеньях. Если выпадает хотя бы одно звено (например, есть красивая технология, но нет платежеспособного сегмента с острой проблемой), проект остается дорогим хобби.',
            'Пример из университетской среды: студентам между парами не хватает быстрого, полезного и доступного перекуса (Проблема) → Точка здоровых боулов и сэндвичей с предзаказом через Telegram-бот без очередей (Решение) → Студенты и преподаватели кампуса (Клиент) → Розничная маржа с порции + недельные абонементы на обед (Доход).',
          ],
          en: [
            'Every durable enterprise rests on four interlocked links. If even one link is missing — for instance, building a clever product without a customer segment willing to pay — the venture remains an expensive hobby.',
            'Consider a university campus example: students struggle to find affordable, nutritious meals during short 15-minute breaks (Problem) → Grab-and-go healthy bowl kiosk paired with a zero-queue Telegram pre-order bot (Solution) → University students and faculty (Customer) → Unit retail sales plus discounted weekly lunch subscriptions (Revenue Stream).',
          ],
        },
        highlightTerms: ['value-proposition'],
      },
    ],
    diagramType: 'value-chain',
    diagramTitle: {
      uz: 'Tadbirkorlik qiymat zanjiri: 4 tayanch halqa',
      ru: 'Цепочка создания ценности: 4 базовых звена бизнеса',
      en: 'Entrepreneurial Value Chain: The 4 Core Links',
    },
    diagramNote: {
      uz: 'Har bir bosqich keyingi bosqichni mantiqan tekshiradi: muammo qanchalik o‘tkir bo‘lsa, mijoz yechim uchun shunchalik ochiq to‘laydi.',
      ru: 'Каждое звено проверяет следующее: чем острее боль клиента, тем выше готовность платить за решение.',
      en: 'Each stage validates the next: the sharper the customer pain, the stronger the willingness to pay.',
    },
    stats: [
      {
        value: { uz: '51,5%+', ru: '51,5%+', en: '51.5%+' },
        label: {
          uz: 'Kichik tadbirkorlikning O‘zbekiston ЯIMdagi ulushi',
          ru: 'Доля малого предпринимательства в ВВП Узбекистана',
          en: 'Small business share in Uzbekistan’s GDP',
        },
        subnote: { uz: 'Yaxlitlangan makroiqtisodiy ko‘rsatkich', ru: 'Округленный макроэкономический показатель', en: 'Rounded macroeconomic indicator' },
        year: '2024–2025',
        sourceName: { uz: 'Milliy statistika qo‘mitasi (stat.uz)', ru: 'Национальный комитет по статистике (stat.uz)', en: 'Statistics Agency of Uzbekistan (stat.uz)' },
        sourceUrl: 'https://stat.uz',
      },
      {
        value: { uz: '~490 ming', ru: '~490 тыс.', en: '~490K' },
        label: {
          uz: 'Faoliyat ko‘rsatayotgan kichik korxona va mikrofirmalar (fermerlarsiz)',
          ru: 'Действующие малые предприятия и микрофирмы (без фермерских хозяйств)',
          en: 'Active small enterprises & microfirms (excl. farms)',
        },
        subnote: { uz: 'Ro‘yxatdan o‘tib amalda ishlayotgan yuridik shaxslar', ru: 'Действующие юридические лица малого бизнеса', en: 'Operating registered small corporate entities' },
        year: '2025',
        sourceName: { uz: 'stat.uz — Tadbirkorlik demografiyasi', ru: 'stat.uz — Демография предприятий', en: 'stat.uz — Business Demography' },
        sourceUrl: 'https://stat.uz',
      },
      {
        value: { uz: '~280 ming', ru: '~280 тыс.', en: '~280K' },
        label: {
          uz: 'Faol yakka tartibdagi tadbirkorlar (YaTT) soni',
          ru: 'Численность активных индивидуальных предпринимателей (ИП)',
          en: 'Active Individual Entrepreneurs (YaTT)',
        },
        subnote: { uz: 'Chakana savdo, maishiy va kasbiy xizmatlar yetakchi', ru: 'Лидируют розничная торговля и бытовые услуги', en: 'Concentrated in retail trade and consumer services' },
        year: '2025',
        sourceName: { uz: 'Soliq qo‘mitasi va stat.uz', ru: 'Налоговый комитет и stat.uz', en: 'Tax Committee & stat.uz' },
        sourceUrl: 'https://my.soliq.uz',
      },
      {
        value: { uz: '~74%', ru: '~74%', en: '~74%' },
        label: {
          uz: 'Iqtisodiyotda band aholining xususiy va kichik biznesdagi salmog‘i',
          ru: 'Доля занятых в малом и частном предпринимательстве от общей занятости',
          en: 'Share of total workforce employed in small & private sector',
        },
        subnote: { uz: 'Yangi ish o‘rinlarining asosiy drayveri', ru: 'Главный драйвер создания новых рабочих мест', en: 'Primary driver of domestic job creation' },
        year: '2024–2025',
        sourceName: { uz: 'Kambag‘allikni qisqartirish va bandlik vazirligi / stat.uz', ru: 'Минзанятости и stat.uz', en: 'Ministry of Employment & stat.uz' },
        sourceUrl: 'https://stat.uz',
      },
    ],
    charts: [
      {
        id: 'm1-chart-1',
        type: 'bar',
        title: {
          uz: 'Kichik tadbirkorlik subyektlarining sohalar kesimidagi ulushi (%)',
          ru: 'Структура субъектов малого бизнеса по отраслям экономики (%)',
          en: 'Sectoral Distribution of Small Business Entities (%)',
        },
        unit: { uz: '% ulush', ru: '% доля', en: '% share' },
        year: '2025 (yaxlitlangan)',
        sourceName: { uz: 'stat.uz tahliliy ma’lumotlari', ru: 'Аналитика stat.uz', en: 'stat.uz Sectoral Overview' },
        sourceUrl: 'https://stat.uz',
        seriesLabel: { uz: 'Ulushi (%)', ru: 'Доля (%)', en: 'Share (%)' },
        data: [
          { name: { uz: 'Savdo', ru: 'Торговля', en: 'Trade' }, value: 38 },
          { name: { uz: 'Xizmatlar', ru: 'Услуги', en: 'Services' }, value: 26 },
          { name: { uz: 'Sanoat', ru: 'Промышленность', en: 'Industry' }, value: 15 },
          { name: { uz: 'Qishloq xo‘jaligi', ru: 'Сельское хоз.', en: 'Agriculture' }, value: 12 },
          { name: { uz: 'Qurilish va b.', ru: 'Строительство и др.', en: 'Construction & Other' }, value: 9 },
        ],
      },
      {
        id: 'm1-chart-2',
        type: 'area',
        title: {
          uz: 'Kichik biznesning O‘zbekiston tarmoq mahsulotidagi ulushi (%)',
          ru: 'Вклад малого бизнеса в выпуск основных отраслей (%)',
          en: 'Small Business Share Across Key Economic Outputs (%)',
        },
        unit: { uz: '%', ru: '%', en: '%' },
        year: '2024–2025',
        sourceName: { uz: 'stat.uz choraklik hisobotlari', ru: 'Квартальные отчеты stat.uz', en: 'stat.uz Quarterly Bulletins' },
        sourceUrl: 'https://stat.uz',
        seriesLabel: { uz: 'Kichik biznes ulushi (%)', ru: 'Доля малого бизнеса (%)', en: 'Small Business Share (%)' },
        data: [
          { name: { uz: 'Qishloq xo‘j.', ru: 'Агросектор', en: 'Agriculture' }, value: 94 },
          { name: { uz: 'Qurilish', ru: 'Строительство', en: 'Construction' }, value: 72 },
          { name: { uz: 'Chakana savdo', ru: 'Розничная торг.', en: 'Retail Trade' }, value: 68 },
          { name: { uz: 'Xizmatlar', ru: 'Сфера услуг', en: 'Services' }, value: 51 },
          { name: { uz: 'Sanoat', ru: 'Промышленность', en: 'Manufacturing' }, value: 28 },
        ],
      },
    ],
    legalActs: [
      {
        id: 'm1-law-1',
        docType: { uz: 'Konstitutsiya', ru: 'Конституция', en: 'Constitution' },
        title: {
          uz: 'O‘zbekiston Respublikasi Konstitutsiyasi (yangi tahrir, 65–67-moddalar)',
          ru: 'Конституция Республики Узбекистан (новая редакция, статьи 65–67)',
          en: 'Constitution of the Republic of Uzbekistan (Revised Edition, Articles 65–67)',
        },
        summary: {
          uz: 'Xususiy mulk daxlsizligi, tadbirkorlik faoliyati erkinligi, halol raqobat va qulay investitsiyaviy hamda ishbilarmonlik muhitini davlat tomonidan ta’minlash kafolatlanadi.',
          ru: 'Закрепляет неприкосновенность частной собственности, свободу предпринимательства, защиту добросовестной конкуренции и благоприятный деловой климат.',
          en: 'Guarantees inviolability of private property, freedom of entrepreneurial activity, protection of fair competition, and a favorable investment climate.',
        },
        relevance: {
          uz: 'Har bir tadbirkorning konstitutsiyaviy himoyasi va mulk huquqining oliy yuridik poydevori.',
          ru: 'Высшая юридическая гарантия права граждан на ведение бизнеса и защиту активов.',
          en: 'Establishes supreme constitutional protection for business ownership and free enterprise.',
        },
        keyClauses: {
          uz: [
            'Tadbirkorlar qonunchilikka muvofiq har qanday faoliyatni amalga oshirishga va o‘z yo‘nalishlarini mustaqil tanlashga haqli.',
            'Mulkdor o‘z mol-mulkidan faqat sud qarori asosida va qonunda nazarda tutilgan hollarda mahrum etilishi mumkin.',
            'Monopoliyalashtirishga va insofsiz raqobatga yo‘l qo‘yilmaydi.',
          ],
          ru: [
            'Предприниматели вправе осуществлять любую деятельность, не запрещенную законом, и самостоятельно выбирать направления развития.',
            'Собственник не может быть лишен своего имущества иначе как по решению суда и в случаях, предусмотренных законом.',
            'Государство обеспечивает защиту от монополизации и недобросовестной конкуренции.',
          ],
          en: [
            'Entrepreneurs are entitled to pursue any lawful commercial activity and choose business directions independently.',
            'Private property cannot be seized except by lawful court ruling under statutory provisions.',
            'Monopolization and unfair competition practices are constitutionally prohibited.',
          ],
        },
        yearNote: '2023',
        lexUrl: 'https://lex.uz/docs/6445145',
      },
      {
        id: 'm1-law-2',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Tadbirkorlik faoliyati erkinligining kafolatlari to‘g‘risida”gi Qonun',
          ru: 'Закон РУз «О гарантиях свободы предпринимательской деятельности»',
          en: 'Law "On Guarantees of Freedom of Entrepreneurial Activity"',
        },
        summary: {
          uz: 'Tadbirkorlik tushunchasi, kichik tadbirkorlik subyektlari toifalari, tadbirkor huquqlari ustuvorligi ("tadbirkor haqligi prezumpsiyasi") va davlat organlari aralashuvini cheklashni belgilaydi.',
          ru: 'Определяет понятие предпринимательства, критерии субъектов малого бизнеса, принцип приоритета прав предпринимателя и запрет незаконного вмешательства госорганов.',
          en: 'Defines entrepreneurial entities, small business classifications, the presumption of entrepreneur’s good faith, and safeguards against unlawful administrative interference.',
        },
        relevance: {
          uz: 'Kichik korxona, mikrofirma va YaTT mezonlari hamda tadbirkor huquqlari aynan shu qonunda mustahkamlangan.',
          ru: 'Базовый отраслевой закон, вводящий классификацию малого бизнеса и презумпцию правоты предпринимателя.',
          en: 'Core statutory charter defining small business categories and legal protections for business owners.',
        },
        keyClauses: {
          uz: [
            'Qonunchilikdagi barcha bartaraf etib bo‘lmaydigan qarama-qarshiliklar va noaniqliklar tadbirkorlik subyekti foydasiga talqin etiladi.',
            'Tadbirkor olgan sof foydasini soliqlar to‘langach o‘z xohishiga ko‘ra mustaqil tasarruf etadi.',
          ],
          ru: [
            'Все неустранимые противоречия и неясности законодательства толкуются в пользу субъекта предпринимательства.',
            'Чистая прибыль после уплаты налогов остается в полном распоряжении предпринимателя.',
          ],
          en: [
            'All irreconcilable ambiguities in regulatory acts must be interpreted in favor of the entrepreneur.',
            'After tax obligations are met, net profits remain at the sole disposal of the entrepreneur.',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/2006789',
      },
      {
        id: 'm1-law-3',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Oilaviy tadbirkorlik to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni',
          ru: 'Закон РУз «О семейном предпринимательстве»',
          en: 'Law "On Family Entrepreneurship"',
        },
        summary: {
          uz: 'Oilaviy korxona tashkil etish, oila a’zolari ishtiroki, turar joydan ishlab chiqarish maqsadida foydalanish va kommunal to‘lovlardagi qulayliklarni tartibga soladi.',
          ru: 'Регулирует порядок создания и работы семейных предприятий, участие членов семьи и льготные условия использования жилых помещений под мастерские.',
          en: 'Governs formation of family enterprises, participation of household members, and residential workshop utility rules.',
        },
        relevance: {
          uz: 'Oilaviy biznes va mahallada hunarmandchilik/ishlab chiqarishni boshlashning huquqiy asosi.',
          ru: 'Правовая основа для запуска ремесленного, сервисного или производственного бизнеса силами семьи.',
          en: 'Legal foundation for household-based manufacturing, crafts, and service enterprises.',
        },
        keyClauses: {
          uz: [
            'Oilaviy korxona ishtirokchilari kamida 2 nafar oila a’zosidan iborat bo‘ladi.',
            'O‘z turar joyida tovar ishlab chiqarganda kommunal xizmatlar aholi tariflari bo‘yicha to‘lanishi kafolatlanadi (qonunda belgilangan shartlarda).',
          ],
          ru: [
            'Минимальное число участников семейного предприятия — не менее двух членов семьи.',
            'При использовании жилого помещения для семейного производства сохраняются тарифы на коммунальные услуги как для населения.',
          ],
          en: [
            'Requires at least two family members participating personally in enterprise operations.',
            'Allows residential utility tariff rates when family production operates within household premises under statutory norms.',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/2004956',
      },
    ],
    caseStudy: {
      title: {
        uz: 'Keys: Samarqanddagi "EcoClean Gilam" — oddiy maishiy muammodan tizimli biznesgacha',
        ru: 'Кейс: «EcoClean Gilam» в Самарканде — от бытовой боли к системному сервису',
        en: 'Case Study: "EcoClean Carpet" in Samarkand — Turning Household Friction into a Service Business',
      },
      scenario: {
        uz: 'Universitetning 3-kurs talabasi Sardor ko‘p qavatli uylarda yashovchi oilalar kuz va bahorda gilam yuvishga juda qiynalishini (hovli yo‘qligi, avtoyuvish shoxobchalarida gilam uzoq qurib hidlanib qolishi) kuzatdi. U kichik biznes yondashuvini tanlab, sanoat siqish sentrifugasi va olib ketish-yetkazib berish xizmatiga ega "EcoClean" xizmatini ishga tushirdi.',
        ru: 'Студент 3-го курса Сардор заметил, что жителям многоэтажек в Самарканде сложно стирать и сушить ковры осенью и весной (на обычных автомойках ковры сохнут долго и приобретают запах сырости). Он запустил специализированный цех со скоростной центрифугой и бесплатным вывозом/доставкой до двери.',
        en: 'Sardor, a 3rd-year undergraduate in Samarkand, noticed apartment families struggled with seasonal carpet washing — car washes lacked spin-dryers, leaving carpets damp and musty. He launched a specialized pickup-and-delivery carpet care workshop equipped with an industrial centrifuge.',
      },
      analysis: {
        uz: 'Sardor "Muammo – Yechim – Mijoz – Daromad" zanjirini to‘g‘ri qurdi: mahsulot emas, balki "48 soatda quruq va toza gilamni eshikgacha yetkazish" qiymatini sotdi.',
        ru: 'Сардор продавал не просто стирку, а конкретную ценность: «сухой и чистый ковер с доставкой до квартиры за 48 часов».',
        en: 'Rather than selling generic washing, Sardor monetized convenience: "100% dry, sanitized carpets returned to your door within 48 hours."',
      },
      numbersBreakdown: {
        uz: [
          '1 kv. metr gilam yuvish narxi: 18 000 so‘m (o‘rtacha bitta buyurtma — 15 kv.m = 270 000 so‘m).',
          '1 ta buyurtmaning o‘zgaruvchan xarajati (yuvish vositasi, suv-elektr, yoqilg‘i, ishbay haq): 110 000 so‘m.',
          'Oyiga 180 ta oiladan buyurtma olganda yalpi tushum: 48,6 mln so‘m; doimiy xarajatlar (sex ijarasi va reklama — 12 mln so‘m) ayirilgach operatsion foyda ~16,8 mln so‘mni tashkil etdi.',
        ],
        ru: [
          'Цена стирки 1 кв. м: 18 000 сумов (средний чек с квартиры за 15 кв. м — 270 000 сумов).',
          'Переменные затраты на один заказ (химия, вода/свет, топливо, сдельная оплата): 110 000 сумов.',
          'При 180 заказах в месяц выручка составила 48,6 млн сумов, а операционная прибыль после аренды и рекламы (12 млн сумов) — около 16,8 млн сумов.',
        ],
        en: [
          'Price per sq.m: 18,000 UZS (average household order of 15 sq.m = 270,000 UZS).',
          'Variable fulfillment cost per order (detergents, utilities, fuel, piece-rate labor): 110,000 UZS.',
          'At 180 monthly orders, gross revenue hit 48.6M UZS, yielding ~16.8M UZS monthly operating profit after 12M UZS in workshop rent and ads.',
        ],
      },
      challengeQuestion: {
        uz: 'Agar Sardor qish oylarida buyurtmalar 40% ga kamayishini ko‘rsa, tadbirkorlik tafakkuriga ko‘ra eng to‘g‘ri qaror qaysi?',
        ru: 'Если зимой число заказов на стирку ковров падает на 40%, какое решение наиболее соответствует предпринимательскому подходу?',
        en: 'When winter carpet orders drop by 40%, which action best reflects an entrepreneurial value-chain mindset?',
      },
      challengeOptions: {
        uz: [
          'Sexni 3 oyga yopib, xodimlarni tarqatib yuborish va bahorni kutish',
          'Mavjud mijozlar bazasi va ko‘chma uskunadan foydalanib, qishda uyda yumshoq mebel (divan) va parda kimyoviy tozalash xizmatini qo‘shish',
          'Gilam yuvish narxini ikki barobar oshirib, yo‘qotilgan tushumni qoplashga urinish',
        ],
        ru: [
          'Закрыть цех на 3 зимних месяца и распустить обученных мастеров',
          'Запустить смежную услугу выездной химчистки диванов, матрасов и штор по уже собранной базе клиентов',
          'Поднять цену стирки в 2 раза для редких зимних клиентов',
        ],
        en: [
          'Shut down the workshop for 3 months and lay off trained technicians',
          'Introduce on-site sofa, mattress, and curtain dry-cleaning for the existing apartment customer base',
          'Double carpet washing prices during winter to offset lower volume',
        ],
      },
      correctOptionIndex: 1,
      challengeExplanation: {
        uz: 'To‘g‘ri! Mavjud mijozlar ishonchi va transport logistikasidan foydalanib, qishda uydan olib chiqib bo‘lmaydigan divan va matraslarni joyida tozalash (cross-sell) mavsumiy pasayishni barqaror daromadga aylantiradi.',
        ru: 'Верно! Использование уже лояльной базы клиентов и транспорта для выездной чистки мягкой мебели сглаживает сезонность и удерживает команду.',
        en: 'Correct! Cross-selling on-site upholstery and mattress cleaning leverages existing customer trust and fleet capacity to smooth out seasonal dips.',
      },
    },
    keyTakeaways: {
      uz: [
        'Tadbirkorlik — muammolarni hal etish orqali qiymat yaratish va hisoblangan tavakkalchilik evaziga daromad olish tizimidir.',
        'Kichik biznes tasdiqlangan modelda barqaror foyda keltirsa, startap innovatsiya orqali tez masshtablashishni maqsad qiladi.',
        'Har qanday g‘oyani boshlashdan oldin 4 ta savolga aniq javob bo‘lishi shart: Muammo nima? Yechim qanday? Mijoz kim? Pul qayerdan keladi?',
        'O‘zbekistonda kichik biznes ЯIMning yarmidan ko‘pini beradi va tadbirkor huquqlari ustuvorligi qonun bilan himoyalangan.',
        'Katta sarmoyani kutmasdan, mavjud bilim va resurslar bilan kichik amaliy qadam tashlash (effektuatsiya) muvaffaqiyat ehtimolini oshiradi.',
      ],
      ru: [
        'Предпринимательство — это системное создание ценности через решение проблем клиентов при осознанном управлении риском.',
        'Малый бизнес опирается на проверенную модель рентабельности, тогда как стартап ищет быстрое масштабирование инновации.',
        'Жизнеспособная идея обязана замыкать цепочку: Проблема → Решение → Платящий клиент → Источник дохода.',
        'В Узбекистане малый бизнес формирует более половины ВВП и защищен принципом приоритета прав предпринимателя.',
        'Принцип эффектуации учит начинать с доступных сегодня ресурсов и компетенций, не откладывая старт на годы.',
      ],
      en: [
        'Entrepreneurship systematically creates economic value by solving real problems under calculated risk.',
        'Small businesses optimize proven local profitability, whereas startups pursue rapid, tech-enabled scalability.',
        'Every viable business concept must close all four links: Problem → Solution → Paying Customer → Revenue Stream.',
        'Small enterprise accounts for over half of Uzbekistan’s GDP and enjoys statutory presumption of good faith.',
        'Effectuation favors launching leanly with your current skills and network rather than waiting for ideal capital.',
      ],
    },
  },
  {
    id: 'm2',
    number: 2,
    code: 'M2',
    hours: 2,
    readMinutes: 15,
    iconName: 'Lightbulb',
    roadmapStage: { uz: 'G‘oya va MVP', ru: 'Идея и MVP', en: 'Idea & MVP' },
    title: {
      uz: 'Mijoz muammosi asosida biznes g‘oyani shakllantirish',
      ru: 'Формирование бизнес-идеи на основе проблемы клиента',
      en: 'Formulating Business Ideas Around Customer Pain Points',
    },
    shortDesc: {
      uz: 'Bozordagi bo‘shliqlar, CustDev suhbatlari, so‘rovnoma, fikrlar shturmi va eng kam xarajatli sinov mahsuloti (MVP) tayyorlash.',
      ru: 'Поиск рыночных ниш, глубинные интервью (CustDev), мозговой штурм и создание минимально жизнеспособного продукта (MVP).',
      en: 'Spotting market gaps, conducting Customer Development interviews, brainstorming, and building a Minimum Viable Product (MVP).',
    },
    summary: {
      uz: 'Startap va yangi korxonalarning 40% dan ortig‘i bozorga kerak bo‘lmagan mahsulot yaratgani uchun yopiladi. Ushbu mavzuda mijoz muammosini empirik tekshirish (CustDev) va katta pul sarflamasdan MVP yaratish usullari o‘rgatiladi.',
      ru: 'Свыше 40% новых проектов закрываются из-за отсутствия реального рыночного спроса. Модуль обучает методам исследования клиентов (CustDev) и проверке гипотез через создание недорогого MVP.',
      en: 'Over 40% of new ventures fail simply because they build products nobody actually needs. This module covers empirical customer discovery (CustDev) and low-cost MVP prototyping.',
    },
    learningObjectives: {
      uz: [
        'Bozordagi bo‘shliqlarni (market gaps) aniqlashning 4 ta amaliy usulini (kuzatish, CustDev suhbat, so‘rovnoma, brainstorming) qo‘llash.',
        'Rob Fitspatrikning "Onam testi" (The Mom Test) qoidalari asosida mijozlarga to‘g‘ri, xolis savollar tuzish.',
        'MVP (Minimum Viable Product) tushunchasini mukammal yakuniy mahsulotdan farqlash va uning 4 ta arzon shaklini tanlash.',
        'Eric Riesning "Yaratish – O‘lchash – O‘rganish" (Build–Measure–Learn) siklini O‘zbekiston bozoridagi loyihaga tatbiq etish.',
      ],
      ru: [
        'Применять 4 метода поиска и проверки бизнес-идей: наблюдение, глубинное интервью, опрос и мозговой штурм.',
        'Составлять непредвзятые вопросы для интервью по принципам «Спроси маму» (The Mom Test) без навязывания своей идеи.',
        'Различать MVP и готовый продукт, выбирая подходящий малобюджетный формат прототипа (лендинг, бот, консьерж-MVP).',
        'Применять цикл бережливого стартапа «Создать – Измерить – Научиться» (Build–Measure–Learn).',
      ],
      en: [
        'Apply four structured discovery techniques: field observation, Customer Development interviews, surveys, and brainstorming.',
        'Formulate unbiased interview questions using "The Mom Test" principles focused on past behavior rather than polite compliments.',
        'Select low-cost MVP formats (Landing Page, Concierge, Wizard of Oz, Digital Mockup) to validate willingness to pay.',
        'Execute the Lean Startup Build–Measure–Learn feedback loop before committing capital.',
      ],
    },
    sections: [
      {
        id: 'm2-s1',
        title: {
          uz: '2.1. Bozordagi bo‘shliqlar va g‘oya topishning 4 amaliy usuli',
          ru: '2.1. Рыночные ниши и 4 метода поиска идей',
          en: '2.1. Market Gaps & Four Idea Discovery Methods',
        },
        paragraphs: {
          uz: [
            'Yaxshi biznes g‘oya osmondan ilhom bo‘lib tushmaydi — u bozordagi samarasizlikni tizimli tahlil qilish mahsulidir. O‘zbekiston hududlarida bozor bo‘shlig‘i ko‘pincha uch ko‘rinishda uchraydi: poytaxtda bor, lekin tumanlarda hali yo‘q xizmatlar; narxi haddan ziyod qimmat import mahsulot o‘rnini bosuvchi mahalliy muqobil; yoki raqamlashmagan eski jarayonlar.',
            'G‘oyani shakllantirish va tekshirishda to‘rtta usul ketma-ket ishlatiladi: bevosita kuzatish (ethnographic observation), mijoz bilan chuqur suhbat (CustDev), miqdoriy so‘rovnoma va jamoaviy fikrlar shturmi (Brainstorming / SCAMPER).',
          ],
          ru: [
            'Сильная бизнес-идея рождается не из случайного озарения, а из анализа рыночных пустот. В реалиях Узбекистана ниши часто возникают на стыке региональной экспансии (сервис уже популярен в Ташкенте, но отсутствует в регионах), импортозамещения или цифровизации рутинных процессов.',
            'Для генерации и первичной фильтрации идей комбинируют четыре инструмента: полевое наблюдение, проблемное интервью (CustDev), количественный онлайн-опрос и метод мозгового штурма (SCAMPER).',
          ],
          en: [
            'Strong business ideas rarely strike out of thin air; they emerge from diagnosing market inefficiencies. In Uzbekistan, lucrative market gaps frequently appear where capital-city conveniences have not yet reached regional districts, where local production can replace pricey imports, or where manual workflows await digitization.',
            'Founders combine four discovery methods: field observation, problem interviews (CustDev), quantitative surveys, and structured brainstorming (SCAMPER).',
          ],
        },
        highlightTerms: ['market-gap', 'custdev'],
        comparisonTable: {
          headers: {
            uz: ['Tahlil usuli', 'Qachon ishlatiladi?', 'Asosiy xatodan saqlanish qoidasi'],
            ru: ['Метод анализа', 'Когда применять?', 'Главное правило без искажений'],
            en: ['Discovery Method', 'When to Use', 'Golden Anti-Bias Rule'],
          },
          rows: {
            uz: [
              ['Kuzatish (Observation)', 'Savdo nuqtasi, bozor yoki ofisda odamlar qayerda vaqt yo‘qotishini ko‘rishda', 'O‘z taxminingizni emas, real xatti-harakatni yozib boring'],
              ['Mijoz suhbati (CustDev)', '15–20 nafar maqsadli vakilning og‘riqli muammosini chuqur tushunishda', 'Kelajak haqida ("sotib olarmidingiz?") emas, o‘tmish tajribasi haqida so‘rang'],
              ['So‘rovnoma (Survey)', 'Suhbatda topilgan muammo qanchalik ommaviyligini 100+ kishida sanashda', 'Savollar qisqa, yopiq va yetaklovchi (javobni uqtiruvchi) bo‘lmasin'],
              ['Fikrlar shturmi (Brainstorming)', 'Aniqlangan muammoga 20–30 ta muqobil yechim generatsiya qilishda', 'Birinchi bosqichda tanqid taqiqlanadi — avval miqdor, keyin saralash'],
            ],
            ru: [
              ['Наблюдение', 'Изучение реального поведения покупателей в точках продаж или онлайне', 'Фиксируйте факты и потерянное время, а не свои догадки'],
              ['Интервью (CustDev)', 'Глубокое изучение боли на выборке 15–20 целевых клиентов', 'Спрашивайте о прошлом опыте и тратах, а не «купили бы вы нашу идею?»'],
              ['Опрос ( анкетирование )', 'Количественная проверка масштаба проблемы на 100–300 респондентах', 'Избегайте наводящих вопросов и слишком длинных анкет'],
              ['Мозговой штурм', 'Поиск нестандартных вариантов решения выявленной проблемы', 'Разделяйте этап генерации идей и этап жесткой критики'],
            ],
            en: [
              ['Field Observation', 'Watching real customer bottlenecks in stores, clinics, or workflows', 'Log objective friction and wasted minutes, not personal assumptions'],
              ['CustDev Interviews', 'Uncovering root causes across 15–20 target prospects', 'Ask about past actions and money spent — never "Would you buy my app?"'],
              ['Quantitative Survey', 'Measuring prevalence across 100–300 respondents', 'Eliminate leading phrasing and keep completion under 3 minutes'],
              ['Brainstorming / SCAMPER', 'Generating diverse solution concepts for a validated pain point', 'Separate divergent idea generation strictly from critical filtering'],
            ],
          },
        },
      },
      {
        id: 'm2-s2',
        title: {
          uz: '2.2. "Onam testi" (The Mom Test): yolg‘on maqtovlarga aldanmaslik',
          ru: '2.2. «Тест мамы» (The Mom Test): как не обмануться комплиментами',
          en: '2.2. "The Mom Test": Avoiding False Positives in Customer Interviews',
        },
        paragraphs: {
          uz: [
            'Agar siz onangiz yoki do‘stingizdan: "Men onlayn gul yetkazish ilovasini ochmoqchiman, zo‘r g‘oyami?" deb so‘rasangiz, ular ko‘nglingizni og‘ritmaslik uchun "Ha, albatta!" deyishadi. Lekin ilova chiqqach birortasi xarid qilmasligi mumkin.',
            'To‘g‘ri savol quyidagicha beriladi: "Oxirgi marta yaqiningizga qachon gul yubordingiz? Qayerdan buyurtma qildingiz? O‘shanda nima sizga yoqmadi va bunga qancha pul sarfladingiz?". Agar inson muammoni hal qilish uchun hozirgacha vaqt yoki pul sarflamayotgan bo‘lsa, demak bu muammo uning uchun muhim emas.',
          ],
          ru: [
            'Если спросить маму или друзей: «Я хочу сделать приложение для доставки фермерских продуктов, классная идея?», вас похвалят из вежливости. Но комплименты не превращаются в выручку.',
            'Правильный вопрос по методике Роба Фитцпатрика звучит так: «Расскажите, как вы закупали продукты на прошлой неделе? Что вызвало неудобство? Пробовали ли вы заказывать доставку и почему перестали?». Только прошлые действия и уже потраченные деньги доказывают реальность боли.',
          ],
          en: [
            'If you pitch your idea to friends or family and ask, "Do you think my farm-to-table app is a good idea?", polite people will praise you to spare your feelings. Compliments are fake validation.',
            'Rob Fitzpatrick’s Mom Test dictates asking strictly about concrete past behavior: "Walk me through the last time you ordered groceries online. What went wrong, and how much did it cost you?" If people aren’t already trying to solve the problem today, they won’t pay for your solution tomorrow.',
          ],
        },
      },
      {
        id: 'm2-s3',
        title: {
          uz: '2.3. MVP (Eng kam xarajatli sinov mahsuloti) turlari',
          ru: '2.3. Концепция и форматы MVP (Минимально жизнеспособного продукта)',
          en: '2.3. Minimum Viable Product (MVP) Formats & Rapid Prototyping',
        },
        paragraphs: {
          uz: [
            'MVP — bu xom yoki sifatsiz mahsulot emas, balki mijozning bitta asosiy muammosini eng sodda usulda yechib, odamlar haqiqatan ham pul to‘lashga tayyorligini tekshiruvchi birinchi ishchi namunadir. Maqsad — 6 oy kod yozish yoki katta zavod qurishdan oldin 1–2 hafta ichida real buyurtma olish.',
            'O‘zbekiston sharoitida eng samarali arzon MVP formatlari: 1) bir sahifali veb-sayt yoki Instagram katalog + oldindan buyurtma formasi; 2) Telegram-bot MVP; 3) "Konsyerj MVP" (avtomatlashtirish o‘rniga dastlabki 20 ta buyurtmani qo‘lda bajarib jarayonni o‘rganish); 4) Figma raqamli interaktiv maketi yoki kichik sinov partiyasi (20 dona namuna).',
          ],
          ru: [
            'MVP (Minimum Viable Product) — это не бракованный товар, а минимальная версия продукта, решающая одну главную задачу клиента и позволяющая проверить спрос реальными деньгами за 1–2 недели вместо полугода разработки.',
            'Практичные форматы MVP в Узбекистане: 1) посадочная страница (лендинг) или витрина в Instagram с кнопкой предзаказа; 2) простой Telegram-бот; 3) «Консьерж-MVP» (ручная обработка первых заказов до написания кода); 4) кликабельный макет в Figma или пробная партия из 20–30 единиц.',
          ],
          en: [
            'An MVP is not a buggy, half-broken product; it is the leanest functional version capable of solving the core user pain point and testing real payment intent in days rather than months.',
            'High-efficiency MVP formats in Uzbekistan include: (1) a single-page catalog or Instagram storefront tracking pre-orders; (2) a lightweight Telegram order bot; (3) a "Concierge / Wizard-of-Oz MVP" fulfilling early orders manually behind the scenes; and (4) clickable Figma prototypes or micro-batches of 25 units.',
          ],
        },
        highlightTerms: ['mvp', 'pivot'],
      },
    ],
    diagramType: 'mvp-cycle',
    diagramTitle: {
      uz: 'Lean Startup: "Yaratish – O‘lchash – O‘rganish" (MVP) halqasi',
      ru: 'Цикл проверки гипотез MVP: «Создать – Измерить – Научиться»',
      en: 'Lean Startup Feedback Loop: Build – Measure – Learn',
    },
    diagramNote: {
      uz: 'Sikl qanchalik tez aylansa va xarajat kam bo‘lsa, g‘oyani to‘g‘rilash (Pivot) yoki kengaytirish shunchalik xavfsiz kechadi.',
      ru: 'Чем быстрее и дешевле один оборот цикла, тем выше шанс найти работающую модель до исчерпания бюджета.',
      en: 'Minimizing cycle time through this loop preserves founder capital until product-market fit is proven.',
    },
    stats: [
      {
        value: { uz: '42%', ru: '42%', en: '42%' },
        label: {
          uz: 'Bozorda real ehtiyoj yo‘qligi sababli yopiladigan startaplar ulushi (global tadqiqot)',
          ru: 'Доля стартапов, закрывающихся из-за отсутствия рыночного спроса на продукт',
          en: 'Share of startups failing due to "No Market Need"',
        },
        subnote: { uz: '1-raqamli inqiroz sababi — CustDev qilmaslik', ru: 'Причина провала №1 в мире', en: '#1 root cause of startup post-mortems' },
        year: 'CB Insights tahlili',
        sourceName: { uz: 'CB Insights Startup Post-Mortem hisoboti', ru: 'Отчет CB Insights', en: 'CB Insights Startup Post-Mortem Report' },
        sourceUrl: 'https://www.cbinsights.com',
      },
      {
        value: { uz: '93%+', ru: '93%+', en: '93%+' },
        label: {
          uz: 'O‘zbekistonda uy xo‘jaliklarining internet bilan qamrab olinganlik darajasi',
          ru: 'Уровень проникновения интернета среди домохозяйств Узбекистана',
          en: 'Household internet penetration in Uzbekistan',
        },
        subnote: { uz: 'Raqamli MVP va onlayn so‘rovnomalar uchun keng infratuzilma', ru: 'Позволяет быстро тестировать цифровые MVP', en: 'Enables rapid online MVP and Telegram validation' },
        year: '2025',
        sourceName: { uz: 'Raqamli texnologiyalar vazirligi / stat.uz', ru: 'Минцифры РУз / stat.uz', en: 'Ministry of Digital Technologies / stat.uz' },
        sourceUrl: 'https://digital.uz',
      },
      {
        value: { uz: '2 500+', ru: '2 500+', en: '2,500+' },
        label: {
          uz: 'IT Park Uzbekistan rezident kompaniyalari soni (raqamli mahsulot va eksport)',
          ru: 'Количество компаний-резидентов IT Park Uzbekistan',
          en: 'IT Park Uzbekistan resident tech companies',
        },
        subnote: { uz: 'Akselaratlar va inkubatsiya dasturlari ekotizimi', ru: 'Экосистема инкубации и акселерации MVP', en: 'National startup incubation & tech ecosystem' },
        year: '2025',
        sourceName: { uz: 'IT Park Uzbekistan rasmiy hisoboti', ru: 'Официальные данные IT Park Uzbekistan', en: 'IT Park Uzbekistan Official Reports' },
        sourceUrl: 'https://it-park.uz',
      },
    ],
    charts: [
      {
        id: 'm2-chart-1',
        type: 'bar',
        title: {
          uz: 'Yangi startaplar muvaffaqiyatsizligining eng ko‘p uchraydigan sabablari (%)',
          ru: 'Главные причины неудач молодых стартапов в мире (%)',
          en: 'Top Reasons Startups Fail Globally (%)',
        },
        unit: { uz: '% holatda', ru: '% кейсов', en: '% of cases' },
        year: 'Global Benchmark',
        sourceName: { uz: 'CB Insights hisoboti (bir nechta omil ko‘rsatilgan)', ru: 'Исследование CB Insights', en: 'CB Insights Post-Mortem Study' },
        sourceUrl: 'https://www.cbinsights.com',
        seriesLabel: { uz: 'Ulushi (%)', ru: 'Частота (%)', en: 'Frequency (%)' },
        data: [
          { name: { uz: 'Talab yo‘qligi', ru: 'Нет спроса', en: 'No Market Need' }, value: 42 },
          { name: { uz: 'Pul tugashi', ru: 'Кончились деньги', en: 'Ran Out of Cash' }, value: 29 },
          { name: { uz: 'Noto‘g‘ri jamoa', ru: 'Слабая команда', en: 'Not Right Team' }, value: 23 },
          { name: { uz: 'Kuchli raqobat', ru: 'Конкуренция', en: 'Outcompeted' }, value: 19 },
          { name: { uz: 'Noto‘g‘ri narx', ru: 'Ошибки цены', en: 'Pricing/Cost Issues' }, value: 18 },
        ],
      },
      {
        id: 'm2-chart-2',
        type: 'bar',
        title: {
          uz: 'MVP usuli vs An’anaviy uzoq ishlab chiqish: dastlabki sinov xarajati (mln so‘m, shartli)',
          ru: 'Сравнение затрат на первую проверку спроса: MVP против полной разработки (млн сумов)',
          en: 'Initial Demand Validation Cost: Lean MVP vs. Full Build (Million UZS, Illustrative)',
        },
        unit: { uz: 'mln so‘m', ru: 'млн сумов', en: 'M UZS' },
        year: 'O‘quv modeli',
        sourceName: { uz: 'IT Park inkubatsiya amaliyoti tahlili', ru: 'Практика инкубационных программ', en: 'Startup Incubation Cost Benchmark' },
        sourceUrl: 'https://it-park.uz',
        seriesLabel: { uz: 'Boshlang‘ich byudjet (mln so‘m)', ru: 'Бюджет старта (млн сумов)', en: 'Initial Spend (M UZS)' },
        data: [
          { name: { uz: 'Telegram-bot MVP', ru: 'Telegram-бот MVP', en: 'Telegram Bot MVP' }, value: 2.5 },
          { name: { uz: 'Lending + katalog', ru: 'Лендинг-каталог', en: 'Landing + Catalog' }, value: 4.0 },
          { name: { uz: 'Kichik namuna (30 dona)', ru: 'Пробная партия', en: 'Pilot Batch (30 pcs)' }, value: 7.5 },
          { name: { uz: 'Maxsus iOS/Android ilova', ru: 'Нативное приложение', en: 'Custom Native App' }, value: 95.0 },
        ],
      },
    ],
    legalActs: [
      {
        id: 'm2-law-1',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Innovatsion faoliyat to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni',
          ru: 'Закон РУз «Об инновационной деятельности»',
          en: 'Law "On Innovation Activity"',
        },
        summary: {
          uz: 'Yangi ishlanmalar, innovatsion loyihalar, startap-ekotizim subyektlari (texnoparklar, innovatsion markazlar, akseleratorlar) va ularni qo‘llab-quvvatlash mexanizmlarini belgilaydi.',
          ru: 'Регулирует создание и коммерциализацию новых разработок, статус технопарков, бизнес-инкубаторов, акселераторов и грантовую поддержку инновационных проектов.',
          en: 'Defines innovation projects, commercialization mechanisms, technoparks, incubators, accelerators, and state grant frameworks.',
        },
        relevance: {
          uz: 'Talaba va yosh tadqiqotchilar o‘z MVP va innovatsion g‘oyalarini texnoparklar hamda grant tanlovlari orqali rivojlantirishining huquqiy asosi.',
          ru: 'Позволяет студенческим стартапам привлекать гранты и пользоваться инфраструктурой технопарков при создании прототипов.',
          en: 'Provides the legal framework for student founders to access university incubators and innovation grants.',
        },
        keyClauses: {
          uz: [
            'Innovatsion loyiha — yangi yoki takomillashtirilgan mahsulot (xizmat) yaratish va uni amaliyotga joriy etishga qaratilgan chora-tadbirlar majmui.',
            'Davlat ilmiy va startap loyihalarni tanlov asosida moliyalashtirish hamda tajriba-konstruktorlik ishlarini qo‘llab-quvvatlaydi.',
          ],
          ru: [
            'Закрепляет понятия инновационного продукта, трансфера технологий и опытно-конструкторских работ (прототипирования).',
            'Предусматривает конкурсное финансирование стартап-проектов через уполномоченные фонды.',
          ],
          en: [
            'Establishes legal definitions for prototyping, technology transfer, and innovative products.',
            'Authorizes competitive grant funding for early-stage R&D and startup commercialization.',
          ],
        },
        yearNote: '2020 / Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/4910391',
      },
      {
        id: 'm2-law-2',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Ixtirolar, foydali modellar va sanoat namunalari to‘g‘risida”gi Qonun hamda mualliflik huquqi normalari',
          ru: 'Закон РУз «Об изобретениях, полезных моделях и промышленных образцах»',
          en: 'Law "On Inventions, Utility Models, and Industrial Designs"',
        },
        summary: {
          uz: 'Yangi texnik yechimlar, mahsulot dizayni (sanoat namunasi) va dasturiy mahsulotlarni intellektual mulk sifatida patentlash hamda himoya qilish tartibini belgilaydi.',
          ru: 'Устанавливает порядок патентования технических решений, промышленного дизайна упаковки/изделий и защиты интеллектуальной собственности.',
          en: 'Regulates patent registration and intellectual property protection for technical inventions, utility models, and product designs.',
        },
        relevance: {
          uz: 'MVP bozorda o‘zini oqlagach, mahsulot dizayni, texnologiyasi yoki dastur kodini Adliya vazirligi (Intellektual mulk) orqali rasmiy himoyalash uchun zarur.',
          ru: 'Защищает уникальную разработку, дизайн или программный код предпринимателя от копирования недобросовестными конкурентами.',
          en: 'Protects validated product designs, unique formulations, and software code against copycats.',
        },
        keyClauses: {
          uz: [
            'G‘oyaning o‘zi emas, balki uning aniq texnik yechimi, sanoat namunasi, dastur kodi yoki tovar belgisi (brend nomi) huquqiy muhofaza qilinadi.',
            'Dasturiy ta’minot va ma’lumotlar bazalari mualliflik huquqi obyekti sifatida ro‘yxatdan o‘tkazilishi mumkin.',
          ],
          ru: [
            'Абстрактная идея не патентуется — охраняется конкретное техническое решение, дизайн изделия, программный код или товарный знак.',
            'Программы для ЭВМ охраняются как объекты авторского права с возможностью получения официального свидетельства.',
          ],
          en: [
            'Abstract ideas cannot be patented — legal protection applies to concrete technical implementations, industrial designs, code, and trademarks.',
            'Software programs qualify for official intellectual property registration certificates.',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/76671',
      },
      {
        id: 'm2-law-3',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Shaxsga doir ma’lumotlar to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni',
          ru: 'Закон РУз «О персональных данных»',
          en: 'Law "On Personal Data"',
        },
        summary: {
          uz: 'So‘rovnoma, veb-sayt, Telegram-bot yoki mobil MVP orqali fuqarolarning ism-sharifi, telefon raqami va boshqa ma’lumotlarini yig‘ishda rozilik olish va xavfsiz saqlash majburiyatini belgilaydi.',
          ru: 'Определяет правила законного сбора, обработки и хранения имен, телефонов и анкет пользователей при проведении опросов и запуске цифровых MVP.',
          en: 'Governs lawful consent, collection, storage, and localization of user names, phone numbers, and survey data in digital MVPs.',
        },
        relevance: {
          uz: 'Har qanday raqamli MVP, onlayn so‘rovnoma va lid-forma yuritishda rioya etilishi shart bo‘lgan qonun.',
          ru: 'Обязателен при сборе контактов первых пользователей через лендинги, Google/Telegram-формы и ботов.',
          en: 'Mandatory compliance requirement whenever collecting customer phone numbers or profiles during MVP testing.',
        },
        keyClauses: {
          uz: [
            'Foydalanuvchidan shaxsga doir ma’lumotlarni qayta ishlashga uning aniq roziligi (oferta/belgi) olinishi kerak.',
            'O‘zbekiston Respublikasi fuqarolarining shaxsga doir ma’lumotlari jisman O‘zbekiston hududidagi serverlarda saqlanishi talab etiladi (27-1-modda).',
          ],
          ru: [
            'Сбор контактных данных требует информированного согласия субъекта персональных данных.',
            'Базы персональных данных граждан РУз при работе веб-сервисов должны храниться на серверах внутри Узбекистана (ст. 27-1).',
          ],
          en: [
            'Processing personal contact details requires explicit user consent.',
            'Databases containing personal data of Uzbek citizens must be localized on servers physically located in Uzbekistan (Article 27-1).',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/4396419',
      },
    ],
    caseStudy: {
      title: {
        uz: 'Keys: Toshkentda "Qand-Free" diabetik va fitnes shirinliklar MVP sinovi',
        ru: 'Кейс: Проверка MVP полезных десертов без сахара «Qand-Free» в Ташкенте',
        en: 'Case Study: Validating "Qand-Free" Sugar-Free Desserts MVP in Tashkent',
      },
      scenario: {
        uz: 'Malika shakar iste’mol qilmaydigan insonlar va sportchilar qahvaxonalarda o‘ziga mos shirinlik topa olmasligini payqadi. U 150 mln so‘mga sex ijaraga olish va qimmat pech xarid qilishga shoshilmadi. Avval 18 nafar fitnes-murabbiy hamda endokrinolog mijozlari bilan CustDev suhbati o‘tkazdi, so‘ng uyda 4 xil shirinlikdan iborat "Degustatsiya qutisi" MVP tayyorlab, Instagram va 3 ta fitnes-bar orqali sotuvga qo‘ydi.',
        ru: 'Малика заметила нехватку десертов без белого сахара для спортсменов и людей, следящих за гликемическим индексом. Вместо того чтобы сразу вкладывать 150 млн сумов в аренду цеха и печи, она провела 18 интервью с посетителями фитнес-клубов и собрала MVP: сет из 4 десертов с предзаказом в Instagram и на стойках 3 спортзалов.',
        en: 'Malika noticed fitness enthusiasts and sugar-conscious consumers struggled to find genuinely sugar-free pastries in local cafes. Instead of sinking 150M UZS into a commercial kitchen lease upfront, she interviewed 18 gym-goers and launched a lean MVP: a 4-piece tasting box sold via Instagram pre-orders and 3 partner gym counters.',
      },
      analysis: {
        uz: 'MVP kutilmagan haqiqatni ochdi: yakka mijozlardan ko‘ra qahvaxonalarning o‘zi (B2B) tayyor shirinlikni ulgurji sotib olishga ko‘proq qiziqish bildirdi! Malika modelini B2B yetkazib berishga moslab (Pivot), oldindan shartnoma imzolagandan keyingina kichik sex ochdi.',
        ru: 'Тест MVP выявил важный инсайт: владельцы кофеен (B2B) оказались готовы закупать десерты партиями регулярнее, чем розничные клиенты. Малика совершила пивот в сторону B2B-поставок и арендовала цех уже под подписанные контракты с 8 кофейнями.',
        en: 'The 2-week MVP revealed a crucial insight: specialty coffee shops (B2B) wanted recurring wholesale deliveries far more consistently than individual retail buyers. Malika pivoted to B2B wholesale and leased a production kitchen only after signing 8 cafe supply contracts.',
      },
      numbersBreakdown: {
        uz: [
          'MVP sinov xarajati (xomashyo, quti dizayni, stiker va maqsadli reklama): atigi 2,8 mln so‘m.',
          '2 hafta ichida 95 ta sinov qutisi 85 000 so‘mdan sotildi = 8,07 mln so‘m haqiqiy tushum.',
          'Tejab qolingan xavf: 150 mln so‘mlik chakana qandolat do‘koni ochish xatosidan saqlanib, B2B ulgurji modelga o‘tildi.',
        ],
        ru: [
          'Бюджет запуска MVP (ингредиенты, упаковка, тестовый таргет): всего 2,8 млн сумов.',
          'За 2 недели продано 95 дегустационных наборов по 85 000 сумов = 8,07 млн сумов реальной выручки.',
          'Результат: избежана ошибка открытия дорогой розничной витрины на 150 млн сумов, найдена прибыльная B2B-ниша.',
        ],
        en: [
          'Total MVP validation spend (ingredients, kraft boxes, targeted ads): just 2.8M UZS.',
          'Sold 95 tasting boxes in 14 days at 85,000 UZS = 8.07M UZS in real customer cash.',
          'Outcome: avoided a risky 150M UZS retail storefront lease and secured recurring B2B cafe contracts.',
        ],
      },
      challengeQuestion: {
        uz: 'CustDev suhbatida mijozga beriladigan quyidagi savollardan qaysi biri "Onam testi" qoidasiga TO‘LIQ MOS keladi?',
        ru: 'Какой из вопросов на проблемном интервью полностью соответствует правилам «Теста мамы» (The Mom Test)?',
        en: 'Which interview question strictly follows "The Mom Test" customer discovery rule?',
      },
      challengeOptions: {
        uz: [
          'Biz 85 ming so‘mga shakarsiz shirinlik chiqarsak, har hafta sotib olasizmi?',
          'Oxirgi bir oyda shirinlik yegingiz kelganda nima xarid qildingiz va tarkibini tanlashda nimaga qiynaldingiz?',
          'Sizningcha, shakarsiz shirinliklar brendi O‘zbekistonda muvaffaqiyatli bo‘ladimi?',
        ],
        ru: [
          'Если мы выпустим пирожные без сахара по 85 тысяч сумов, будете покупать каждую неделю?',
          'Расскажите, что вы покупали к чаю за последний месяц, когда ограничивали сахар, и что вас не устроило?',
          'Как вы думаете, станет ли бренд полезных десертов популярным в Ташкенте?',
        ],
        en: [
          'If we launch sugar-free cakes at 85,000 UZS, will you buy them every Friday?',
          'Tell me about the last month when you craved sweets while cutting sugar — what did you actually buy, and what frustrated you?',
          'Do you think a healthy pastry brand will succeed in Uzbekistan?',
        ],
      },
      correctOptionIndex: 1,
      challengeExplanation: {
        uz: '1- va 3-savollar kelajak haqidagi faraz va subyektiv fikrni so‘raydi (odamlar osongina va’da berib qo‘yadi). 2-savol esa mijozning o‘tmishdagi real harakati va sarflagan pulini tekshiradi.',
        ru: 'Вопросы 1 и 3 просят дать пустое обещание о будущем или выступить «диванным экспертом». Только 2-й вопрос проверяет реальные прошлые действия человека.',
        en: 'Options 1 and 3 invite hypothetical promises or armchair opinions. Option 2 probes concrete past behavior and actual purchasing friction.',
      },
    },
    keyTakeaways: {
      uz: [
        'Mijozga sizning mahsulotingiz emas, o‘z muammosining tez, qulay va ishonchli yechimi kerak.',
        'CustDev suhbatida g‘oyangizni maqtamang — suhbatning 80% vaqtida mijozning o‘tmish tajribasini tinglang.',
        'MVP — eng kam resurs sarflab "odamlar bunga haqiqatan pul to‘laydimi?" degan asosiy gipotezani tekshirish qurolidir.',
        'Birinchi versiyada uyalib qolmaslik uchun hamma funksiyani qo‘shishga urinish — pul va vaqt isrofidir.',
        'Agar MVP sinovi kutilgan natijani bermasa, ma’lumotlarni tahlil qilib o‘z vaqtida Pivot (modelni o‘zgartirish) qiling.',
      ],
      ru: [
        'Клиенты покупают не ваш продукт как таковой, а избавление от конкретной проблемы или экономию времени.',
        'На интервью CustDev не продавайте идею — слушайте о реальном прошлом опыте собеседника.',
        'Задача MVP — получить подтверждение спроса деньгами при минимальных вложениях времени и капитала.',
        'Перфекционизм на старте опасен: избыточные функции сжигают бюджет до контакта с реальным рынком.',
        'Отрицательный результат теста MVP — это не провал, а экономия крупных инвестиций и повод сделать осознанный пивот.',
      ],
      en: [
        'Customers never buy features for their own sake; they hire solutions to eliminate concrete pain points.',
        'During CustDev interviews, stop pitching and spend 80% of the conversation listening to past customer actions.',
        'An MVP exists to validate real willingness to pay with minimum capital and engineering time.',
        'Perfectionism before launch burns runway; ship a lean prototype early to gather genuine market feedback.',
        'When an MVP disproves your initial assumption, execute a data-backed Pivot while your capital is still intact.',
      ],
    },
  },
  {
    id: 'm3',
    number: 3,
    code: 'M3',
    hours: 2,
    readMinutes: 16,
    iconName: 'Landmark',
    roadmapStage: { uz: 'Sinov va Moliya', ru: 'Тест и Финансы', en: 'Validation & Finance' },
    title: {
      uz: 'Mahsulotni kam xarajat bilan bozorda sinab ko‘rish va biznesni moliyalashtirish',
      ru: 'Малобюджетное тестирование на рынке и источники финансирования бизнеса',
      en: 'Lean Market Testing & Business Financing Fundamentals',
    },
    shortDesc: {
      uz: 'Moliyalashtirish manbalari, biznes krediti va iste’mol kreditining tub farqlari, garov, imtiyozli davr hamda annuitet/differensial to‘lovlar.',
      ru: 'Источники капитала, фундаментальные отличия бизнес-кредита от потребительского, залог, льготный период и графики погашения.',
      en: 'Financing sources, distinguishing commercial loans from consumer debt, collateral, grace periods, and annuity vs. differential schedules.',
    },
    summary: {
      uz: 'Bozorda talab tasdiqlangach, o‘sish uchun sarmoya kerak bo‘ladi. Ushbu mavzuda o‘z mablag‘i, grant, hamkor sarmoyasi va bank krediti qiyoslanadi; daromad keltiruvchi biznes krediti bilan shaxsiy iste’mol kreditining tub farqi hamda kredit shartlari pul oqimi asosida tahlil qilinadi.',
      ru: 'Когда спрос проверен малыми затратами, для роста требуется капитал. В модуле разбираются источники финансирования, ключевая разница между инвестиционным бизнес-кредитом и потребительским займом, а также оценка кредитной нагрузки по денежному потоку.',
      en: 'Once lean market testing confirms demand, scaling requires capital. This module compares funding sources, contrasts productive business loans against consumer credit, and teaches how to evaluate collateral, grace periods, and repayment schedules against cash flow.',
    },
    learningObjectives: {
      uz: [
        'Mahsulotni kam xarajat bilan sinovdan o‘tkazgandan so‘ng kengayish uchun mos moliyalashtirish manbasini (bootstrapping, grant, kredit, investor) tanlash.',
        'Biznes krediti (yangi pul oqimi yaratuvchi investitsiya) va iste’mol krediti (kelajak daromadini yeyuvchi xarajat) o‘rtasidagi tub iqtisodiy farqni tushuntirish.',
        'Kredit shartnomasining asosiy parametrlarini: garov (likvidlik va diskont), kafillik, imtiyozli davr (grace period) va effektiv foiz stavkasini tahlil qilish.',
        'Annuitet hamda differensial to‘lov jadvallarini hisoblash va DSCR (qarzga xizmat ko‘rsatish koeffitsiyenti) orqali to‘lov qobiliyatini tekshirish.',
      ],
      ru: [
        'Выбирать оптимальный источник финансирования (собственные средства, гранты, кредит, долевые инвестиции) после дешевого теста спроса.',
        'Объяснять принципиальную разницу между бизнес-кредитом (создающим новый денежный поток) и потребительским кредитом.',
        'Анализировать ключевые условия кредитного договора: залоговый дисконт, поручительство, льготный период и полную стоимость кредита.',
        'Рассчитывать аннуитетные и дифференцированные платежи, сопоставляя их с прогнозом чистого денежного потока.',
      ],
      en: [
        'Match venture stage — from lean market test to expansion — with appropriate financing (bootstrapping, grants, bank debt, or equity).',
        'Distinguish productive business loans that generate positive net cash flow from non-productive personal consumer debt.',
        'Evaluate core loan terms including collateral valuation discounts, guarantees, grace periods, and annual interest rates.',
        'Calculate both Annuity and Differential amortization schedules and verify debt service coverage against operating cash flow.',
      ],
    },
    sections: [
      {
        id: 'm3-s1',
        title: {
          uz: '3.1. Kam xarajatli bozor sinovi va moliyalashtirish manbalari ketma-ketligi',
          ru: '3.1. Дешевый рыночный тест и лестница финансирования бизнеса',
          en: '3.1. Lean Market Validation & The Business Financing Ladder',
        },
        paragraphs: {
          uz: [
            'Oltin qoida: hali bitta ham mijozga sotib ko‘rilmagan, sinovdan o‘tmagan g‘oya uchun katta foizli bank krediti olinmaydi! Dastlabki bozor sinovi (ilk 20–50 ta sotuv) tadbirkorning shaxsiy jamg‘armasi (Bootstrapping), mijozlardan olingan oldindan to‘lov (pre-order) yoki beg‘araz yoshlar/innovatsiya grantlari hisobidan amalga oshiriladi.',
            'Qachonki birlik iqtisodiyoti (Unit Economics) musbat ekanligi isbotlansa — ya’ni 1 mln so‘m kiritib 1,4 mln so‘m qaytarib olish mexanizmi aniq ishlasa — aylanmani tezlashtirish yoki uskuna olish uchun bank krediti kuchli moliyaviy richag (leverage) vazifasini bajaradi.',
          ],
          ru: [
            'Золотое правило финансов: никогда не берите банковский кредит под непроверенную бизнес-гипотезу. Первые продажи и тест рынка финансируются за счет собственных накоплений (Bootstrapping), предоплаты первых заказчиков или безвозвратных грантов.',
            'Когда же модель доказала прибыльность на малых оборотах (понятна себестоимость, спрос и маржа), банковский бизнес-кредит становится выгодным финансовым рычагом (левериджем) для покупки оборудования или расширения оборотных запасов.',
          ],
          en: [
            'A cardinal rule of entrepreneurial finance: never take interest-bearing bank debt to test an unproven hypothesis. Initial market validation (your first 20–50 orders) should rely on personal savings (bootstrapping), customer pre-payments, or non-dilutive startup grants.',
            'Once unit economics are proven in real transactions, commercial bank credit acts as productive financial leverage — funding machinery or inventory that multiplies operating profits faster than loan interest.',
          ],
        },
        highlightTerms: ['bootstrapping', 'business-loan', 'consumer-loan'],
      },
      {
        id: 'm3-s2',
        title: {
          uz: '3.2. Biznes krediti va iste’mol kreditining tub farqlari',
          ru: '3.2. Принципиальные отличия бизнес-кредита от потребительского',
          en: '3.2. Business Loans vs. Personal Consumer Credit',
        },
        paragraphs: {
          uz: [
            'Ko‘plab boshlovchi tadbirkorlar hujjat yig‘ishga erinib, shaxsiy pasportiga yuqori foizli mikroqarz yoki iste’mol krediti olib biznesga tikishda xato qiladilar. Biznes krediti va iste’mol krediti iqtisodiy mohiyatiga ko‘ra tubdan farq qiladi.',
            'Iste’mol krediti shaxsiy xarid (telefon, to‘y, maishiy jihoz) uchun olinadi: u yangi pul oqimi yaratmaydi va sizning oylik daromadingizni qisqartiradi. Biznes krediti esa daromad keltiruvchi aktivga (tikuv mashinasi, non pechi, xomashyo) yo‘naltiriladi: to‘g‘ri hisoblanganda aktiv keltiradigan oylik foyda kreditning asosiy qarzi va foizini to‘lab, ustiga sof foyda ham qoldiradi.',
          ],
          ru: [
            'Частая ошибка новичков — оформление личного микрозайма или потребительского кредита с высокой ставкой и коротким сроком для вложения в дело. Экономическая природа этих продуктов противоположна.',
            'Потребительский кредит берется на личное потребление: купленная вещь не генерирует выручку, а выплаты ложатся нагрузкой на бюджет семьи. Бизнес-кредит инвестируется в производительный актив (станок, печь, товарный запас), который сам зарабатывает деньги на погашение долга и приносит чистую прибыль сверх процентов.',
          ],
          en: [
            'A costly rookie mistake is taking high-interest personal microloans or consumer credit cards to fund business operations. Economically, the two instruments are opposites.',
            'Consumer credit finances depreciating personal consumption that generates zero cash inflow. A Business Loan finances productive assets (ovens, CNC routers, fast-moving inventory) engineered to generate monthly operating profits exceeding principal and interest obligations.',
          ],
        },
        comparisonTable: {
          headers: {
            uz: ['Taqqoslash mezoni', 'Biznes krediti (Tadbirkorlik uchun)', 'Iste’mol krediti / Mikroqarz (Shaxsiy)'],
            ru: ['Критерий сравнения', 'Бизнес-кредит', 'Потребительский кредит / Микрозайм'],
            en: ['Comparison Dimension', 'Commercial Business Loan', 'Personal Consumer Loan'],
          },
          rows: {
            uz: [
              ['Kredit oluvchi', 'Yuridik shaxs (MChJ, OK) yoki YaTT / o‘zini o‘zi band qilgan shaxs', 'Jismoniy shaxs (shaxsiy iste’mol uchun)'],
              ['Iqtisodiy natijasi', 'Yangi tushum va ish o‘rni yaratadi, foiz xarajati foyda solig‘i bazasidan chegirilishi mumkin', 'Yangi daromad keltirmaydi, oila byudjetidan qoplanadi'],
              ['Imtiyozli davr (Grace period)', 'Mavjud (uskuna o‘rnatilib ishga tushguncha 3–12 oygacha asosiy qarz kechiktiriladi)', 'Odatda mavjud emas — birinchi oydan to‘liq to‘lov boshlanadi'],
              ['Davlat qo‘llab-quvvatlashi', 'Tadbirkorlikni rivojlantirish kompaniyasi kafilligi va foiz kompensatsiyalari mavjud', 'Tijorat shartlarida, tadbirkorlik kafilliklari tatbiq etilmaydi'],
            ],
            ru: [
              ['Заемщик', 'Юридическое лицо (ООО), ИП или самозанятый предприниматель', 'Физическое лицо (на личные бытовые цели)'],
              ['Экономический эффект', 'Создает добавленную стоимость и выручку; проценты учитываются в расходах бизнеса', 'Не создает дохода, погашается из личной зарплаты'],
              ['Льготный период', 'Предусмотрен (3–12 мес. отсрочки по основному долгу на запуск оборудования)', 'Как правило отсутствует'],
              ['Господдержка', 'Доступны поручительства и компенсации части ставки для МСБ', 'Стандартные розничные условия банка'],
            ],
            en: [
              ['Borrower Entity', 'Registered LLC (MChJ), Sole Proprietor (YaTT), or Self-Employed', 'Individual consumer (personal household use)'],
              ['Economic Impact', 'Generates new operating cash flow; interest is often tax-deductible', 'Generates zero business income; repaid out of personal wages'],
              ['Grace Period', 'Common (3–12 months principal deferral while equipment ramps up)', 'Rarely available; full amortization starts Month 1'],
              ['SME Support Instruments', 'Eligible for state credit guarantees and subsidized SME programs', 'Ineligible for enterprise guarantee funds'],
            ],
          },
        },
      },
      {
        id: 'm3-s3',
        title: {
          uz: '3.3. Garov, kafillik, imtiyozli davr va pul oqimi tahlili',
          ru: '3.3. Залог, поручительство, льготный период и анализ денежного потока',
          en: '3.3. Collateral, Guarantees, Grace Period & Cash Flow Coverage',
        },
        paragraphs: {
          uz: [
            'Bank kredit berishda 5 ta asosiy shartni ko‘rib chiqadi: 1) Foiz stavkasi va muddat; 2) Garov ta’minoti (ko‘chmas mulk, transport yoki suǵurta polisi — banklar garovni bozor narxidan 70–80% likvid qiymatda qabul qiladi, ya’ni 100 mln so‘mlik kredit uchun taxminan 125–130 mln so‘mlik mulk talab etiladi); 3) Uchinchi shaxs kafilligi; 4) Imtiyozli davr (uskuna keltirib ishga tushirilguncha faqat foiz to‘lab turish davri); 5) To‘lov jadvali (Annuitet — har oy bir xil summa; Differensial — kamayib boruvchi summa).',
            'Eng muhim mezon — Pul oqimi (Cash Flow) tahlili: korxonaning barcha operatsion xarajatlaridan keyin qoladigan oylik sof pul oqimi oylik kredit to‘lovidan kamida 1,3–1,5 barobar ko‘p bo‘lishi (DSCR ≥ 1,3) lozim. Aks holda kichik savdo pasayishi korxonani jarima va garovni yo‘qotish xavfiga olib keladi.',
          ],
          ru: [
            'Ключевые параметры кредитного договора: 1) Процентная ставка и срок; 2) Залог (банк оценивает залог с залоговым дисконтом 20–30%, поэтому для кредита в 100 млн сумов потребуется ликвидное имущество рыночной стоимостью ~125–130 млн сумов); 3) Поручительство; 4) Льготный период (Grace period — отсрочка выплаты тела кредита на время монтажа и запуска линии); 5) График платежей (аннуитетный — равными суммами; дифференцированный — убывающими платежами с меньшей переплатой).',
            'Главное правило безопасности — запас прочности денежного потока (DSCR): ежемесячная чистая операционная прибыль бизнеса должна минимум в 1,3–1,5 раза превышать ежемесячный платеж по кредиту.',
          ],
          en: [
            'Commercial loan underwriting centers on five mechanics: (1) Interest rate & tenor; (2) Collateral (banks apply a 20–30% liquidity haircut, meaning a 100M UZS loan typically requires ~125–130M UZS of appraised collateral); (3) Guarantees; (4) Grace Period (deferring principal repayment while machinery is installed); and (5) Amortization method (Annuity equal installments vs. Differential declining installments).',
            'Golden solvency rule — Debt Service Coverage Ratio (DSCR): projected monthly net operating cash flow should be at least 1.3x–1.5x the scheduled monthly loan payment to absorb seasonal fluctuations safely.',
          ],
        },
        highlightTerms: ['collateral', 'grace-period', 'annuity', 'differential-payment'],
      },
    ],
    diagramType: 'credit-comparison',
    diagramTitle: {
      uz: 'Biznes krediti qanday qilib o‘zini o‘zi qoplaydi (Moliyaviy richag sxemasi)',
      ru: 'Схема работы инвестиционного бизнес-кредита (финансовый рычаг)',
      en: 'How Productive Business Credit Pays for Itself (Financial Leverage)',
    },
    diagramNote: {
      uz: 'Loyiha rentabelligi (ROI) kredit foiz stavkasidan yuqori bo‘lgandagina qarz olish biznes qiymatini oshiradi.',
      ru: 'Кредит выгоден бизнесу только тогда, когда рентабельность вложенных средств уверенно превышает процентную ставку банка.',
      en: 'Debt creates founder wealth only when Return on Invested Capital (ROIC) comfortably exceeds the annual interest rate.',
    },
    stats: [
      {
        value: { uz: '14,0%', ru: '14,0%', en: '14.0%' },
        label: {
          uz: 'O‘zbekiston Respublikasi Markaziy bankining asosiy stavkasi (yillik)',
          ru: 'Основная ставка Центрального банка Республики Узбекистан (годовых)',
          en: 'Central Bank of Uzbekistan Key Policy Rate (per annum)',
        },
        subnote: { uz: 'Tijorat banklari kredit stavkalari uchun bazaviy mo‘ljal', ru: 'Базовый ориентир стоимости денег в экономике', en: 'Monetary benchmark guiding commercial loan rates' },
        year: '2026',
        sourceName: { uz: 'O‘zbekiston Respublikasi Markaziy banki (cbu.uz)', ru: 'Центральный банк РУз (cbu.uz)', en: 'Central Bank of Uzbekistan (cbu.uz)' },
        sourceUrl: 'https://cbu.uz',
      },
      {
        value: { uz: '21% – 25%', ru: '21% – 25%', en: '21% – 25%' },
        label: {
          uz: 'Milliy valyutadagi tijorat biznes kreditlarining o‘rtacha bozor foiz oralig‘i',
          ru: 'Среднерыночный диапазон ставок по коммерческим кредитам в сумах',
          en: 'Typical commercial UZS business loan rate range',
        },
        subnote: { uz: 'Imtiyozli davlat dasturlarida stavkalar pastroq bo‘lishi mumkin', ru: 'По льготным госпрограммам ставки ниже рыночных', en: 'Subsidized SME lines offer lower preferential rates' },
        year: '2025–2026',
        sourceName: { uz: 'Markaziy bank statistik byulleteni', ru: 'Статистический бюллетень ЦБ РУз', en: 'CBU Interest Rate Statistics' },
        sourceUrl: 'https://cbu.uz',
      },
      {
        value: { uz: '125%+', ru: '125%+', en: '125%+' },
        label: {
          uz: 'Bank amaliyotida standart garov qoplami talabi (kredit summasiga nisbatan)',
          ru: 'Стандартное требование залогового покрытия к сумме кредита в банках',
          en: 'Standard collateral coverage requirement relative to loan principal',
        },
        subnote: { uz: 'Garov yetmaganda Tadbirkorlik kompaniyasi kafilligi yordam beradi', ru: 'При нехватке залога возможно поручительство госфонда', en: 'State SME guarantee funds can bridge partial collateral shortfalls' },
        year: 'Amaldagi bank standarti',
        sourceName: { uz: 'Tijorat banklari kredit siyosati', ru: 'Кредитная политика комбанков', en: 'Commercial Banking Practice' },
        sourceUrl: 'https://cbu.uz',
      },
    ],
    charts: [
      {
        id: 'm3-chart-1',
        type: 'line',
        title: {
          uz: '120 mln so‘m kredit (24%, 12 oy): Annuitet va Differensial oylik to‘lovlar farqi (mln so‘m)',
          ru: 'Кредит 120 млн сумов (24%, 12 мес.): сравнение аннуитетного и дифференцированного платежа',
          en: '120M UZS Loan (24%, 12 Months): Annuity vs. Differential Monthly Installment (M UZS)',
        },
        unit: { uz: 'mln so‘m', ru: 'млн сумов', en: 'M UZS' },
        year: 'Moliyaviy model',
        sourceName: { uz: 'Standart bank amortizatsiya formulasi', ru: 'Стандартная формула амортизации кредита', en: 'Standard Loan Amortization Formula' },
        sourceUrl: 'https://cbu.uz',
        seriesLabel: { uz: 'Differensial to‘lov', ru: 'Дифференцированный', en: 'Differential Payment' },
        secondarySeriesLabel: { uz: 'Annuitet to‘lov', ru: 'Аннуитетный', en: 'Annuity Payment' },
        data: [
          { name: { uz: '1-oy', ru: '1 мес', en: 'M1' }, value: 12.4, secondaryValue: 11.35 },
          { name: { uz: '3-oy', ru: '3 мес', en: 'M3' }, value: 12.0, secondaryValue: 11.35 },
          { name: { uz: '6-oy', ru: '6 мес', en: 'M6' }, value: 11.4, secondaryValue: 11.35 },
          { name: { uz: '9-oy', ru: '9 мес', en: 'M9' }, value: 10.8, secondaryValue: 11.35 },
          { name: { uz: '12-oy', ru: '12 мес', en: 'M12' }, value: 10.2, secondaryValue: 11.35 },
        ],
      },
      {
        id: 'm3-chart-2',
        type: 'bar',
        title: {
          uz: 'Kichik biznes loyihalarini dastlabki moliyalashtirish manbalari tarkibi (taxminiy %)',
          ru: 'Структура источников стартового капитала малого бизнеса (оценочно, %)',
          en: 'Typical Early-Stage SME Capital Mix (Illustrative %)',
        },
        unit: { uz: '%', ru: '%', en: '%' },
        year: '2025',
        sourceName: { uz: 'Kichik biznes tadqiqotlari va Jahon banki Enterprise Surveys', ru: 'Обследования МСБ / World Bank', en: 'World Bank Enterprise Surveys & SME Studies' },
        sourceUrl: 'https://www.enterprisesurveys.org',
        seriesLabel: { uz: 'Ulushi (%)', ru: 'Доля (%)', en: 'Share (%)' },
        data: [
          { name: { uz: 'Shaxsiy mablag‘', ru: 'Личные средства', en: 'Founder Savings' }, value: 62 },
          { name: { uz: 'Bank krediti', ru: 'Банковский кредит', en: 'Bank Loans' }, value: 21 },
          { name: { uz: 'Hamkor/Oila ulushi', ru: 'Партнеры / Семья', en: 'Partners & Family' }, value: 11 },
          { name: { uz: 'Grant / Venchur', ru: 'Гранты / Венчур', en: 'Grants & VC' }, value: 6 },
        ],
      },
    ],
    legalActs: [
      {
        id: 'm3-law-1',
        docType: { uz: 'Kodeks / Qonun', ru: 'Кодекс и Закон РУз', en: 'Civil Code & Banking Law' },
        title: {
          uz: 'O‘zbekiston Respublikasi Fuqarolik kodeksi (Kredit shartnomasi, 744–748-moddalar) va “Banklar va bank faoliyati to‘g‘risida”gi Qonun',
          ru: 'Гражданский кодекс РУз (Кредитный договор, ст. 744–748) и Закон «О банках и банковской деятельности»',
          en: 'Civil Code of Uzbekistan (Loan Agreements, Arts. 744–748) & Law "On Banks and Banking Activity"',
        },
        summary: {
          uz: 'Kredit shartnomasining yozma shakli, muddatlilik, qaytarishlilik, to‘lovlilik tamoyillari va banklar tomonidan foiz stavkalarini belgilash qoidalarini tartibga soladi.',
          ru: 'Устанавливает правовую природу кредитного договора, принципы срочности, платности и возвратности, а также прозрачность банковских условий.',
          en: 'Governs statutory loan contract requirements, principles of maturity, interest, repayment, and borrower disclosure rights.',
        },
        relevance: {
          uz: 'Bank bilan kredit shartnomasi imzolashda tadbirkorning huquq va majburiyatlarini belgilovchi asosiy norma.',
          ru: 'Определяет права и обязанности заемщика и банка при заключении кредитного договора.',
          en: 'Defines enforceable rights and obligations between commercial borrowers and lending banks.',
        },
        keyClauses: {
          uz: [
            'Kredit shartnomasi albatta yozma (yoki E-IMZO bilan tasdiqlangan elektron) shaklda tuzilishi shart.',
            'Bank bir tomonlama tartibda kredit shartlaridagi foiz stavkasini qarz oluvchi zarariga o‘zgartirishga haqli emas (qonun va shartnomada boshqacha ko‘zda tutilmagan bo‘lsa).',
          ],
          ru: [
            'Кредитный договор заключается строго в письменной (или электронной с ЭЦП) форме.',
            'Банк обязан до подписания раскрыть полную стоимость кредита и график платежей без скрытых комиссий.',
          ],
          en: [
            'Credit agreements must be executed in written or digitally signed form.',
            'Banks must transparently disclose the full amortization schedule and effective cost of borrowing prior to signing.',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/4590452',
      },
      {
        id: 'm3-law-2',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Garov to‘g‘risida”gi Qonun hamda “Nobank kredit tashkilotlari va mikromoliyalashtirish faoliyati to‘g‘risida”gi Qonun',
          ru: 'Законы РУз «О залоге» и «О небанковских кредитных организациях и микрофинансовой деятельности»',
          en: 'Law "On Pledge (Collateral)" & Law "On Non-Bank Credit Organizations and Microfinance"',
        },
        summary: {
          uz: 'Ko‘char va ko‘chmas mulkni garovga qo‘yish, garov reyestri hamda mikromoliya tashkilotlaridan tadbirkorlik maqsadlarida mikrokredit olish tartibini belgilaydi.',
          ru: 'Регулирует оформление имущества в залог, ведение залогового реестра и правила получения микрокредитов для малого бизнеса.',
          en: 'Regulates asset pledging, the national collateral registry, and microfinance credit ceilings for small businesses.',
        },
        relevance: {
          uz: 'Garov mulkini rasmiylashtirish va kichik biznes uchun tezlashtirilgan mikrokredit jalb etish tartibini tushunish uchun.',
          ru: 'Помогает грамотно оценить риски залога и возможности микрофинансирования для микробизнеса.',
          en: 'Essential for structuring collateral security and accessing microfinance facilities.',
        },
        keyClauses: {
          uz: [
            'Garovga qo‘yilgan mol-mulk odatda tadbirkorning o‘z foydalanishida qoladi (ipoteka va uskuna garovida), lekin bank roziligisiz sotilishi mumkin emas.',
            'Islomiy moliyalashtirish tamoyillariga mos xizmatlar (murobaha — ustama bilan bo‘lib to‘lash) mikromoliya tashkilotlari tomonidan ham ko‘rsatilishi mumkin.',
          ],
          ru: [
            'Заложенное оборудование или помещение остается в пользовании предпринимателя, но не может быть продано без согласия залогодержателя.',
            'Закон позволяет микрофинансовым организациям оказывать услуги исламского финансирования (напр., мурабаха).',
          ],
          en: [
            'Pledged business premises or machinery remain in the entrepreneur’s operational possession but cannot be alienated without lender consent.',
            'Permits microfinance institutions to offer Islamic finance structures such as Murabaha mark-up financing.',
          ],
        },
        yearNote: '2022 / Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/5972411',
      },
      {
        id: 'm3-law-3',
        docType: { uz: 'Prezident qarori va dasturlari', ru: 'Программы господдержки МСБ', en: 'Presidential SME Support Programs' },
        title: {
          uz: 'Kichik va o‘rta biznesni moliyaviy qo‘llab-quvvatlash hamda “Tadbirkorlikni rivojlantirish kompaniyasi” AJ kafillik mexanizmlari',
          ru: 'Механизмы поручительства и поддержки АО «Компания по развитию предпринимательства» и программы семейного предпринимательства',
          en: 'SME Credit Guarantees & Entrepreneurship Development Company Support Mechanisms',
        },
        summary: {
          uz: 'Garovi yetarli bo‘lmagan istiqbolli kichik biznes loyihalariga kredit summasining ma’lum qismigacha kafillik berish va ayrim ustuvor yo‘nalishlarda foiz xarajatlarini qisman qoplashni nazarda tutadi.',
          ru: 'Предоставляет финансовое поручительство предпринимателям при нехватке собственного залога и частичную компенсацию процентных расходов по приоритетным проектам.',
          en: 'Provides partial credit guarantees for viable SMEs lacking full collateral and targeted interest subsidies in priority sectors.',
        },
        relevance: {
          uz: 'Yosh va hududiy tadbirkorlar uchun "Oilaviy tadbirkorlik" (oilakredit.uz) hamda kafillik dasturlaridan foydalanish imkonini beradi.',
          ru: 'Открывает доступ к льготным ресурсам (включая платформу oilakredit.uz) при недостатке залоговой базы.',
          en: 'Enables collateral-constrained founders to access formal credit via digital portals such as oilakredit.uz.',
        },
        keyClauses: {
          uz: [
            'Arizalar inson omilisiz yagona elektron platformalar orqali skoring asosida ko‘rib chiqiladi.',
            'Imtiyozli kredit maqsadli sarflanishi shart — mablag‘ni boshqa shaxsiy maqsadga ishlatish imtiyoz bekor bo‘lishiga olib keladi.',
          ],
          ru: [
            'Заявки подаются онлайн и проходят автоматизированный скоринг.',
            'Строгий целевой характер: нецелевое расходование кредитных средств влечет досрочное взыскание и отмену льгот.',
          ],
          en: [
            'Loan applications undergo automated digital scoring through unified online portals.',
            'Proceeds must be used strictly for the approved business purpose; diversion triggers immediate recall.',
          ],
        },
        yearNote: '2024–2026 (Amaldagi shartlarni tekshiring)',
        lexUrl: 'https://lex.uz',
      },
    ],
    hasDynamicRateWarning: true,
    caseStudy: {
      title: {
        uz: 'Keys: Namangandagi "Baraka Non" sexi uchun 100 mln so‘mlik pech krediti hisobi',
        ru: 'Кейс: Расчет кредита 100 млн сумов на ротационную печь для пекарни «Baraka Non» в Намангане',
        en: 'Case Study: Evaluating a 100M UZS Rotary Oven Loan for "Baraka Bakery" in Namangan',
      },
      scenario: {
        uz: 'Tadbirkor Jasur kichik ijaradagi tandirda kuniga 400 ta qolipli non va bulochka pishirib, do‘konlardan barqaror buyurtma yig‘di (bozor sinovi muvaffaqiyatli o‘tdi). Endi u energiya tejamkor zamonaviy rotatsion pech olish uchun bankdan 24 oy muddatga, yillik 22% stavkada, 2 oy imtiyozli davr bilan 100 mln so‘m biznes krediti olmoqchi.',
        ru: 'Предприниматель Жасур протестировал сбыт выпечки на арендованной малой печи и получил твердые заявки от 12 магазинов района. Для масштабирования он планирует взять бизнес-кредит 100 млн сумов под 22% годовых на 24 месяца (с льготным периодом 2 месяца) на покупку энергоэффективной ротационной печи.',
        en: 'After validating steady wholesale demand across 12 neighborhood grocery stores using a small rented oven, Jasur plans to borrow 100M UZS at 22% per annum for 24 months (with a 2-month grace period) to purchase an energy-efficient rotary bakery oven.',
      },
      analysis: {
        uz: 'Yangi pech ishlab chiqarish quvvatini 3 barobar oshiradi va gaz-elektr sarfini 25% qisqartiradi. Dastlabki 2 oyda (pech yetkazilishi va o‘rnatilishi davrida) Jasur faqat foiz to‘laydi: 100 mln × 22% / 12 = oyiga ~1,83 mln so‘m. 3-oydan boshlab asosiy qarz + foiz to‘lovi oyiga ~5,48 mln so‘mni tashkil qiladi, yangi pech esa oyiga qo‘shimcha 11,5 mln so‘m sof operatsion pul oqimi beradi.',
        ru: 'В первые 2 месяца (доставка и пусконаладка печи) за счет льготного периода Жасур платит только проценты (~1,83 млн сумов/мес). С 3-го месяца платеж составляет ~5,48 млн сумов, тогда как прирост чистой операционной прибыли от новой печи равен 11,5 млн сумов в месяц (DSCR = 2,1 — высокий запас прочности).',
        en: 'During the 2-month grace period while installing the oven, Jasur pays interest only (~1.83M UZS/month). From Month 3 onward, monthly debt service is ~5.48M UZS against an incremental net operating cash flow of 11.5M UZS/month (DSCR = 2.1x — healthy safety buffer).',
      },
      numbersBreakdown: {
        uz: [
          'Kredit summasi: 100 000 000 so‘m | Stavka: yillik 22% | Muddat: 24 oy (2 oy imtiyozli).',
          '1–2-oylarda to‘lov (faqat foiz): ~1 833 333 so‘m/oy.',
          '3–24-oylarda annuitet to‘lov: ~5 480 000 so‘m/oy | Qo‘shimcha sof pul oqimi: 11 500 000 so‘m/oy (kredit to‘langach +6 mln so‘m sof ortiqcha foyda qoladi).',
        ],
        ru: [
          'Сумма кредита: 100 000 000 сумов | Ставка: 22% годовых | Срок: 24 мес. (2 мес. льготный период).',
          'Платеж в 1–2 месяцы (только проценты): ~1 833 333 сумов/мес.',
          'Аннуитетный платеж с 3 по 24 месяц: ~5 480 000 сумов/мес при приросте чистого денежного потока +11 500 000 сумов/мес.',
        ],
        en: [
          'Principal: 100,000,000 UZS | Rate: 22% p.a. | Term: 24 months (2-month grace period).',
          'Months 1–2 payment (interest only): ~1,833,333 UZS/month.',
          'Months 3–24 annuity payment: ~5,480,000 UZS/month vs. +11,500,000 UZS incremental monthly cash flow (+6M UZS net surplus).',
        ],
      },
      challengeQuestion: {
        uz: 'Agar yangi pech keltiradigan qo‘shimcha sof pul oqimi oyiga 11,5 mln emas, atigi 5,0 mln so‘m bo‘lganda (oylik kredit to‘lovi 5,48 mln so‘m), Jasur qanday qaror qabul qilishi kerak edi?',
        ru: 'Если бы расчет показал, что новая печь принесет только 5,0 млн сумов дополнительного денежного потока при ежемесячном платеже банку 5,48 млн сумов, как следовало поступить Жасуру?',
        en: 'If financial modeling showed the new oven would generate only 5.0M UZS incremental monthly cash flow against a 5.48M UZS monthly loan installment, what should Jasur do?',
      },
      challengeOptions: {
        uz: [
          'Baribir kreditni olish, yetmagan 480 ming so‘mni har oy do‘stlaridan qarz olib yopib turish',
          'Shartlarda kredit olmaslik: kredit muddatini 36 oyga uzaytirish yoki arzonroq uskuna / imtiyozli stavka topib DSCR > 1,3 bo‘lishiga erishish',
          'Non sifatini tushirib un miqdorini kamaytirish',
        ],
        ru: [
          'Все равно брать кредит в надежде, что продажи как-нибудь вырастут сами',
          'Отказаться от таких условий: пересмотреть срок до 36 месяцев, найти оборудование дешевле или снизить ставку, чтобы поток уверенно перекрывал платеж (DSCR > 1,3)',
          'Уменьшить вес буханки без предупреждения магазинов',
        ],
        en: [
          'Sign the loan anyway and hope sales miraculously increase later',
          'Decline current terms: extend loan tenor to 36 months, source lower-cost machinery, or secure a subsidized rate until DSCR exceeds 1.3x',
          'Secretly shrink loaf weights to cut flour costs',
        ],
      },
      correctOptionIndex: 1,
      challengeExplanation: {
        uz: 'Oylik kredit to‘lovi kutilayotgan sof pul oqimidan katta (DSCR < 1,0) bo‘lsa, bu kredit korxonani kassa inqiroziga tortadi. Muddatni uzaytirish yoki arzonroq muqobil topish orqali oylik yuklamani tushirish shart.',
        ru: 'При DSCR меньше 1,0 кредит генерирует ежемесячный кассовый дефицит. Необходимо удлинить срок кредитования или снизить капитальные затраты.',
        en: 'Borrowing when DSCR < 1.0 guarantees monthly cash drain. Restructuring tenor or lowering capex is essential before signing.',
      },
    },
    calculatorId: 'credit',
    keyTakeaways: {
      uz: [
        'Sinovdan o‘tmagan g‘oya uchun qarz olinmaydi — dastlabki bozor sinovi minimal shaxsiy mablag‘ yoki oldindan buyurtma bilan o‘tkaziladi.',
        'Biznes krediti yangi pul oqimi yaratuvchi aktivga tikiladi; iste’mol krediti esa shaxsiy xarajat bo‘lib, biznes uchun qimmat va noqulaydir.',
        'Imtiyozli davr (Grace period) uskunani olib kelib ishga tushirish va ilk savdoga chiqish bosqichida kassa bosimini yengillashtiradi.',
        'Differensial jadvalda dastlabki oylar yuki og‘irroq, ammo jami foiz to‘lovi annuitetga qaraganda kamroq chiqadi.',
        'Xavfsiz kredit qoidasi: kutilayotgan oylik sof operatsion pul oqimi kredit to‘lovidan kamida 30–50% ko‘p bo‘lishi shart.',
      ],
      ru: [
        'Не привлекайте заемный капитал до подтверждения спроса реальными продажами на малом тесте.',
        'Бизнес-кредит финансирует доходные активы, а потребительский кредит проедает будущие личные доходы.',
        'Льготный период помогает пережить этап монтажа оборудования и выхода на плановую мощность без выплаты тела долга.',
        'При дифференцированном графике общая переплата по процентам ниже, но нагрузка в первые месяцы выше, чем при аннуитете.',
        'Безопасный ориентир для заемщика: чистый операционный поток должен перекрывать платеж по кредиту минимум в 1,3–1,5 раза.',
      ],
      en: [
        'Never borrow commercial debt to test an unvalidated idea; validate demand leanly first.',
        'Productive business credit funds cash-generating assets, unlike consumer debt which drains personal income.',
        'Grace periods protect early liquidity while equipment is delivered, installed, and ramped up.',
        'Differential amortization minimizes total lifetime interest paid, while Annuity installments offer predictable flat budgeting.',
        'Maintain a Debt Service Coverage Ratio (DSCR) of at least 1.3x–1.5x to weather unexpected slow months.',
      ],
    },
  },
  {
    id: 'm4',
    number: 4,
    code: 'M4',
    hours: 2,
    readMinutes: 15,
    iconName: 'FileCheck2',
    roadmapStage: { uz: 'Ro‘yxatdan o‘tish', ru: 'Регистрация', en: 'Legal Registration' },
    title: {
      uz: 'Biznesni qonuniy rasmiylashtirish va davlat ro‘yxatidan o‘tkazish',
      ru: 'Организационно-правовые формы и государственная регистрация бизнеса',
      en: 'Legal Business Structures & Official State Registration',
    },
    shortDesc: {
      uz: 'YaTT, MChJ, oilaviy korxona va o‘zini o‘zi band qilish; E-IMZO, firma nomi va fo.birdarcha.uz orqali 15 daqiqada ro‘yxatdan o‘tish; litsenziyalar.',
      ru: 'Самозанятость, ИП, ООО, семейное предприятие; ЭЦП (E-IMZO), резервирование названия на fo.birdarcha.uz, лицензии и риски нелегальной работы.',
      en: 'Self-employed, Sole Proprietorship (YaTT), LLC (MChJ), Family Enterprise; E-IMZO, 15-minute online registration via fo.birdarcha.uz, and licensing.',
    },
    summary: {
      uz: 'Biznes rasmiy maqomga ega bo‘lgandagina B2B shartnomalar tuza oladi, bankda hisobvaraq ochadi, terminal va marketpleyslarga ulanadi hamda brendini himoya qiladi. Ushbu mavzuda O‘zbekistonda eng ko‘p tanlanadigan tashkiliy-huquqiy shakllar va onlayn ro‘yxatdan o‘tish qadamlari o‘rganiladi.',
      ru: 'Официальная регистрация открывает доступ к корпоративным контрактам, расчетному счету, эквайрингу, маркетплейсам и госпрограммам. Модуль разбирает выбор между самозанятостью, ИП и ООО, пошаговую онлайн-регистрацию с E-IMZO и систему лицензирования.',
      en: 'Formal registration unlocks corporate B2B contracts, merchant banking, marketplace onboarding, and legal brand protection. This module compares Uzbekistan’s legal entity structures, walks through online incorporation with E-IMZO, and clarifies licensing compliance.',
    },
    learningObjectives: {
      uz: [
        'O‘zini o‘zi band qilgan shaxs, YaTT, MChJ, oilaviy korxona va kooperativlarning mulkiy javobgarligi, hamkorlar soni hamda xodim yollash imkoniyatlarini qiyoslash.',
        'E-IMZO olish, firma nomini zahiralash, ustav va yuridik manzilni kiritib fo.birdarcha.uz / my.gov.uz orqali onlayn ro‘yxatdan o‘tish tartibini bajarish.',
        'Litsenziyalanadigan, ruxsatnoma olinadigan va xabardor qilish tartibida ishlaydigan faoliyat turlarini (license.gov.uz) farqlash.',
        'Davlat ro‘yxatidan o‘tmasdan yoki litsenziyasiz noqonuniy tadbirkorlik bilan shug‘ullanishning ma’muriy, soliq va jinoiy xavflarini bilish.',
      ],
      ru: [
        'Сравнивать самозанятость, ИП (YaTT), ООО (MChJ), семейное предприятие и кооператив по имущественной ответственности, числу учредителей и найму штата.',
        'Понимать пошаговый процесс онлайн-регистрации бизнеса через fo.birdarcha.uz / my.gov.uz с использованием ключа E-IMZO.',
        'Различать лицензируемые виды деятельности, разрешительные процедуры и уведомительный порядок (license.gov.uz).',
        'Оценивать административные, налоговые и правовые последствия незаконной предпринимательской деятельности без регистрации.',
      ],
      en: [
        'Compare Self-Employment, Sole Proprietorship (YaTT), LLC (MChJ), Family Enterprise, and Cooperatives across liability, co-ownership, and hiring rules.',
        'Execute the end-to-end online registration workflow on fo.birdarcha.uz / my.gov.uz using E-IMZO, name reservation, and legal address registration.',
        'Distinguish licensing, permits, and simple notification regimes on license.gov.uz.',
        'Identify statutory administrative, tax, and criminal penalties associated with unregistered or unlicensed commercial operations.',
      ],
    },
    sections: [
      {
        id: 'm4-s1',
        title: {
          uz: '4.1. Tadbirkorlikning tashkiliy-huquqiy shakllari: qaysi birini tanlash kerak?',
          ru: '4.1. Организационно-правовые формы бизнеса в Узбекистане',
          en: '4.1. Choosing the Right Legal Structure in Uzbekistan',
        },
        paragraphs: {
          uz: [
            'Biznes shaklini tanlash 4 ta savolga bog‘liq: 1) Yolǵiz boshlaysizmi yoki hamkorlar (ta’sischilar) bormi? 2) Qancha xodim yollaysiz? 3) Xaridorlaringiz oddiy aholimi (B2C) yoki yirik korxonalarmi (B2B)? 4) Shaxsiy mol-mulkingiz bo‘yicha tavakkalchilik darajasi qanday?',
            'Eng muhim huquqiy farq — mulkiy javobgarlik: YaTT yuridik shaxs hisoblanmaydi va biznes qarzlari bo‘yicha jismoniy shaxs sifatida o‘z mol-mulki bilan javob beradi. MChJ (Mas’uliyati cheklangan jamiyat) esa alohida yuridik shaxs bo‘lib, ta’sischilar odatda jamiyat ustav fondiga kiritgan o‘z ulushlari qiymati doirasida xavf ko‘taradilar.',
          ],
          ru: [
            'Выбор организационно-правовой формы зависит от четырех вопросов: работаете ли вы в одиночку или с партнерами, планируете ли нанимать штат, кто ваши клиенты (розница или крупные B2B-компании) и каков уровень рисков.',
            'Ключевое юридическое отличие лежит в плоскости ответственности: ИП (YaTT) ведет бизнес без образования юрлица и отвечает по долгам бизнеса личным имуществом, тогда как ООО (MChJ) — самостоятельное юридическое лицо, участники которого несут риск убытков в пределах стоимости своих долей в уставном фонде.',
          ],
          en: [
            'Selecting an entity format hinges on four factors: solo vs. co-founders, headcount plans, B2C vs. corporate B2B clientele, and liability exposure.',
            'The defining legal boundary is asset liability: a Sole Proprietor (YaTT) operates without forming a separate legal entity and bears unlimited personal liability for business debts, whereas an LLC (MChJ) shields founders by limiting risk to their contributed charter capital.',
          ],
        },
        highlightTerms: ['self-employed', 'yatt', 'mchj', 'family-enterprise', 'charter-capital'],
        comparisonTable: {
          headers: {
            uz: ['Mezon', 'O‘zini o‘zi band qilish', 'YaTT (Yakka tadbirkor)', 'Oilaviy korxona (OK)', 'MChJ (Mas’uliyati cheklangan jamiyat)'],
            ru: ['Критерий', 'Самозанятый', 'ИП (YaTT)', 'Семейное предприятие', 'ООО (MChJ)'],
            en: ['Criterion', 'Self-Employed', 'Sole Proprietor (YaTT)', 'Family Enterprise', 'LLC (MChJ)'],
          },
          rows: {
            uz: [
              ['Yuridik shaxs maqomi', 'Yo‘q (jismoniy shaxs)', 'Yo‘q (jismoniy shaxs)', 'Ha (yuridik shaxs)', 'Ha (yuridik shaxs)'],
              ['Ta’sischilar (egalari)', '1 nafar jismoniy shaxs', '1 nafar jismoniy shaxs', 'Kamida 2 nafar oila a’zosi', '1 tadan 50 nafargacha (jismoniy/yuridik shaxs)'],
              ['Yollanma xodim olish', 'Mumkin emas (shaxsiy mehnat)', 'Qonunda belgilangan cheklangan songacha (1–5 nafar)', 'Oila a’zolari + mehnat shartnomasi bo‘yicha xodimlar', 'Cheklanmagan (kichik yoki yirik korxona)'],
              ['Mulkiy javobgarlik', 'Shaxsiy javobgarlik', 'O‘ziga tegishli mol-mulk bilan to‘liq javobgar', 'Qonunchilikka muvofiq korxona va ishtirokchilar mulki', 'Kiritilgan ulush (ustav fondi) doirasida cheklangan'],
              ['Faoliyat doirasi', 'Tasdiqlangan ro‘yxatdagi maishiy/raqamli xizmatlar', 'Ruxsat etilgan chakana savdo, hunar va xizmat turlari', 'Ishlab chiqarish, hunarmandchilik, servis, mehmon uyi', 'Qonun bilan taqiqlanmagan deyarli barcha sohalar va B2B'],
            ],
            ru: [
              ['Статус юрлица', 'Нет (физлицо)', 'Нет (физлицо)', 'Да (юридическое лицо)', 'Да (юридическое лицо)'],
              ['Учредители', '1 человек', '1 человек', 'Минимум 2 члена семьи', 'От 1 до 50 участников (физ. и юрлица)'],
              ['Наем работников', 'Запрещен', 'До 5 работников (в зависимости от вида деятельности)', 'Члены семьи + наемные работники в пределах лимита МБ', 'Без ограничений'],
              ['Ответственность', 'Личная', 'Полная всем личным имуществом', 'По правилам закона о семейном бизнесе', 'Ограничена долей в уставном фонде'],
              ['Виды деятельности', 'Строгий перечень бытовых и цифровых услуг', 'Перечень разрешенных для ИП видов торговли и услуг', 'Производство, ремесло, общепит, гостевые дома', 'Любые разрешенные законом виды, экспорт, тендеры B2B'],
            ],
            en: [
              ['Legal Entity Status', 'No (Individual)', 'No (Individual)', 'Yes (Corporate Entity)', 'Yes (Corporate Entity)'],
              ['Founders / Owners', '1 individual', '1 individual', 'At least 2 family members', '1 to 50 shareholders (individuals or companies)'],
              ['Hiring Employees', 'Not permitted', 'Capped (1–5 staff by activity category)', 'Family members + hired staff within SME limits', 'Unlimited hiring capacity'],
              ['Asset Liability', 'Personal', 'Unlimited personal asset liability', 'Governed by Family Enterprise statute', 'Limited to charter capital contribution'],
              ['Permitted Scope', 'Approved list of micro/freelance services', 'Approved list of retail & consumer services', 'Light manufacturing, crafts, hospitality', 'All lawful industries, export, corporate B2B, VC equity'],
            ],
          },
        },
      },
      {
        id: 'm4-s2',
        title: {
          uz: '4.2. Onlayn ro‘yxatdan o‘tkazish bosqichlari: E-IMZO va fo.birdarcha.uz',
          ru: '4.2. Онлайн-регистрация за 15–30 минут: E-IMZO, название и адрес',
          en: '4.2. Step-by-Step Online Registration via fo.birdarcha.uz & E-IMZO',
        },
        paragraphs: {
          uz: [
            'O‘zbekistonda tadbirkorlik subyektlarini davlat ro‘yxatidan o‘tkazish to‘liq raqamlashtirilgan bo‘lib, Davlat xizmatlari markaziga bormasdan fo.birdarcha.uz (yoki my.gov.uz) tizimi orqali onlayn amalga oshiriladi (onlayn murojaatda davlat boji stavkasiga chegirma qo‘llaniladi).',
            'Ketma-ketlik 5 qadamdan iborat: 1) e-imzo.soliq.uz orqali E-IMZO kaliti olish; 2) fo.birdarcha.uz tizimida firma nomini tekshirish va zahiralash (60 kunga bepul saqlanadi, qonunga zid va chalg‘ituvchi so‘zlarsiz); 3) Ta’sischilar ulushi, ustav fondi, asosiy faoliyat kodi (IFUT / OKED) va kadastr raqami tasdiqlangan yuridik manzilni kiritish; 4) Namunaviy ustav va ta’sis shartnomasini E-IMZO bilan imzolab davlat bojini to‘lash va STIR (INN) biriktirilgan Guvohnomani yuklab olish; 5) Tijorat bankida masofadan yoki filialda asosiy hisobvaraq ochish.',
          ],
          ru: [
            'Регистрация бизнеса в Узбекистане автоматизирована на портале fo.birdarcha.uz (а также через my.gov.uz или Центры госуслуг; при онлайн-подаче действует скидка на госпошлину).',
            'Пять шагов запуска: 1) Получение ключа ЭЦП на e-imzo.soliq.uz; 2) Онлайн-резервирование уникального фирменного наименования; 3) Указание размера уставного фонда, долей учредителей, кода ОКЭД и кадастрового номера юридического адреса; 4) Подписание типового устава ключом E-IMZO, оплата госпошлины и мгновенное получение Свидетельства о госрегистрации с ИНН; 5) Открытие расчетного счета в выбранном банке.',
          ],
          en: [
            'Business incorporation in Uzbekistan is fully digital via fo.birdarcha.uz and my.gov.uz, taking under 30 minutes online (with discounted state registration fees compared to in-person filing).',
            'The five-step workflow: (1) Obtain an E-IMZO digital key via e-imzo.soliq.uz; (2) Reserve a unique trade name online (held for 60 days); (3) Enter charter capital, founder equity splits, activity code (OKED), and cadastral-verified legal address; (4) Digitally sign the model charter, pay the small registration fee, and download the official Certificate with Tax ID (STIR/INN); (5) Open a corporate bank account.',
          ],
        },
        highlightTerms: ['e-imzo'],
      },
      {
        id: 'm4-s3',
        title: {
          uz: '4.3. Litsenziyalash, ruxsatnomalar va noqonuniy faoliyat xavflari',
          ru: '4.3. Лицензии, уведомления и правовые риски нелегальной работы',
          en: '4.3. Licensing, Notifications & Risks of Unregistered Activity',
        },
        paragraphs: {
          uz: [
            'Ko‘pchilik faoliyat turlari (tikuvchilik, kafe, IT, dizayn, chakana nooziq-ovqat do‘koni) hech qanday litsenziya talab qilmaydi — ro‘yxatdan o‘tgach darhol ishlash mumkin. Biroq fuqarolar hayoti, sog‘lig‘i va xavfsizligiga daxldor sohalar uch pog‘onali tartibda nazorat qilinadi (barchasi license.gov.uz yagona axborot tizimi orqali elektron olinadi):',
            '1) Litsenziya talab etiladigan turlar (tibbiy xizmat, dori vositalari savdosi, xususiy maktab/bog‘cha va nodavlat ta’lim, yo‘lovchi tashish, moliya); 2) Ruxsat etish xususiyatiga ega hujjatlar (sanitariya-epidemiologiya, yong‘in, tashqi reklama pasporti); 3) Xabardor qilish tartibi (masalan, umumiy ovqatlanish yoki chakana savdo boshlaganligi haqida vakolatli organni elektron xabardor qilish). Ro‘yxatdan o‘tmasdan yoki litsenziyasiz faoliyat yuritish Ma’muriy javobgarlik to‘g‘risidagi kodeks (176-modda) va Jinoyat kodeksi (188–190-moddalar, juda ko‘p miqdorda daromad olinganda) bo‘yicha katta jarima hamda huquqiy javobgarlikka sabab bo‘ladi.',
          ],
          ru: [
            'Большинство видов малого бизнеса не требуют лицензий. Однако чувствительные для здоровья и безопасности сферы регулируются тремя механизмами через единый портал license.gov.uz:',
            '1) Лицензирование (медицина, фармацевтика, негосударственное образование, перевозки, финансы); 2) Разрешительные документы (санитарные, строительные, паспорт наружной рекламы); 3) Уведомительный порядок (достаточно отправить электронное уведомление о начале деятельности, не дожидаясь решения чиновника). Работа без госрегистрации или обязательной лицензии грозит крупными штрафами по КоАО РУз (ст. 176), доначислением налогов, а при особо крупном доходе — уголовной ответственностью (ст. 188, 190 УК РУз).',
          ],
          en: [
            'Most everyday ventures require no special license beyond incorporation. Sensitive sectors affecting public health or safety follow a modernized three-tier digital system on license.gov.uz:',
            '(1) Licensing (healthcare, pharmaceuticals, private education, passenger transport, financial services); (2) Permits (food safety, construction, outdoor signage); and (3) Simple Notification (filing an instant digital notice upon starting eligible retail or catering operations). Operating unregistered or without mandatory licenses triggers steep fines under Administrative Liability Code Art. 176, back-tax assessments, and criminal liability for large-scale violations (Criminal Code Arts. 188, 190).',
          ],
        },
        highlightTerms: ['license'],
      },
    ],
    diagramType: 'legal-forms',
    diagramTitle: {
      uz: 'Tashkiliy-huquqiy shaklni tanlash qaror daraxti',
      ru: 'Алгоритм выбора организационно-правовой формы бизнеса',
      en: 'Decision Matrix: Selecting Your Legal Business Form',
    },
    diagramNote: {
      uz: 'Kichik yakka xizmatdan (O‘zini o‘zi band qilish / YaTT) boshlab, jamoa va B2B shartnomalar paydo bo‘lganda MChJ ga o‘tish eng tabiiy evolyutsiyadir.',
      ru: 'Естественный путь: тест гипотезы как самозанятый или ИП → переход к ООО при найме команды и выходе на B2B.',
      en: 'Many founders test solo as Self-Employed or YaTT before incorporating an MChJ when onboarding co-founders or B2B clients.',
    },
    stats: [
      {
        value: { uz: '15–30 daq.', ru: '15–30 мин.', en: '15–30 min' },
        label: {
          uz: 'fo.birdarcha.uz portali orqali biznesni onlayn davlat ro‘yxatidan o‘tkazish vaqti',
          ru: 'Время онлайн-регистрации ИП или ООО через портал fo.birdarcha.uz',
          en: 'Online business registration time on fo.birdarcha.uz',
        },
        subnote: { uz: 'E-IMZO mavjud bo‘lganda inson omilisiz avtomatik guvohnoma beriladi', ru: 'Автоматическая выдача свидетельства с ИНН', en: 'Automated digital certificate issuance with Tax ID' },
        year: '2025–2026',
        sourceName: { uz: 'Adliya vazirligi — Davlat xizmatlari portali', ru: 'Министерство юстиции РУз', en: 'Ministry of Justice — Public Services Portal' },
        sourceUrl: 'https://fo.birdarcha.uz',
      },
      {
        value: { uz: '4 mln+', ru: '4 млн+', en: '4M+' },
        label: {
          uz: 'O‘zbekistonda ro‘yxatdan o‘tgan o‘zini o‘zi band qilgan fuqarolar soni',
          ru: 'Число зарегистрированных самозанятых граждан в Узбекистане',
          en: 'Registered self-employed individuals in Uzbekistan',
        },
        subnote: { uz: 'Soliq mobil ilovasi orqali bepul ro‘yxatdan o‘tish va mehnat staji hisobi', ru: 'Бесплатная регистрация в приложении Soliq', en: 'Zero-fee instant registration via the Soliq mobile app' },
        year: '2025',
        sourceName: { uz: 'O‘zbekiston Respublikasi Soliq qo‘mitasi', ru: 'Налоговый комитет РУз', en: 'Tax Committee of Uzbekistan' },
        sourceUrl: 'https://my.soliq.uz',
      },
      {
        value: { uz: '100%', ru: '100%', en: '100%' },
        label: {
          uz: 'license.gov.uz tizimi orqali elektron shaklga o‘tkazilgan litsenziya va ruxsatnomalar',
          ru: 'Перевод выдачи лицензий и разрешений в электронный формат (license.gov.uz)',
          en: 'Digitization of licenses and permits via license.gov.uz',
        },
        subnote: { uz: 'QR-kodli elektron hujjatlar qog‘oz nusxani to‘liq almashtiradi', ru: 'Электронные реестры с QR-верификацией', en: 'QR-verified digital certificates replace paper stamps' },
        year: '2025',
        sourceName: { uz: '“Litsenziya” axborot tizimi (license.gov.uz)', ru: 'ИС «Лицензия» (license.gov.uz)', en: 'License Information System (license.gov.uz)' },
        sourceUrl: 'https://license.gov.uz',
      },
    ],
    charts: [
      {
        id: 'm4-chart-1',
        type: 'pie',
        title: {
          uz: 'Yangi tashkil etilayotgan tijorat yuridik shaxslari tarkibida tashkiliy shakllar (%)',
          ru: 'Доля организационно-правовых форм среди новых коммерческих юрлиц (%)',
          en: 'Share of Legal Forms Among Newly Registered Corporate Entities (%)',
        },
        unit: { uz: '%', ru: '%', en: '%' },
        year: '2025 (stat.uz asosida)',
        sourceName: { uz: 'stat.uz — Korxonalar va tashkilotlar yagona davlat reyestri', ru: 'ЕГРПО stat.uz', en: 'stat.uz Unified State Business Register' },
        sourceUrl: 'https://stat.uz',
        seriesLabel: { uz: 'Ulushi (%)', ru: 'Доля (%)', en: 'Share (%)' },
        data: [
          { name: { uz: 'MChJ (ООО)', ru: 'ООО (MChJ)', en: 'LLC (MChJ)' }, value: 81 },
          { name: { uz: 'Oilaviy korxona', ru: 'Семейные предпр.', en: 'Family Enterprise' }, value: 13 },
          { name: { uz: 'Xususiy korxona va b.', ru: 'Частные предпр. и др.', en: 'Private Ent. & Other' }, value: 6 },
        ],
      },
      {
        id: 'm4-chart-2',
        type: 'bar',
        title: {
          uz: 'Litsenziya islohoti natijasida qisqartirilgan va xabardor qilishga o‘tkazilgan tartiblar',
          ru: 'Оптимизация лицензий и разрешительных процедур для бизнеса в РУз (кол-во видов)',
          en: 'Streamlined Regulatory Regimes on license.gov.uz (Illustrative Counts)',
        },
        unit: { uz: 'ta faoliyat/hujjat turi', ru: 'видов процедур', en: 'regulated categories' },
        year: 'O‘RQ-701 tahriri',
        sourceName: { uz: 'Adliya vazirligi va license.gov.uz ma’lumotlari', ru: 'Минюст РУз / license.gov.uz', en: 'Ministry of Justice / license.gov.uz' },
        sourceUrl: 'https://license.gov.uz',
        seriesLabel: { uz: 'Tartiblar soni', ru: 'Количество видов', en: 'Number of Categories' },
        data: [
          { name: { uz: 'Litsenziyalanadigan', ru: 'Лицензируемые', en: 'Licensing' }, value: 50 },
          { name: { uz: 'Ruxsatnomalar', ru: 'Разрешительные', en: 'Permits' }, value: 120 },
          { name: { uz: 'Xabardor qilish', ru: 'Уведомительные', en: 'Notification Only' }, value: 34 },
        ],
      },
    ],
    legalActs: [
      {
        id: 'm4-law-1',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Mas’uliyati cheklangan jamiyatlar to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni',
          ru: 'Закон РУз «Об обществах с ограниченной ответственностью»',
          en: 'Law "On Limited Liability Companies (MChJ)"',
        },
        summary: {
          uz: 'MChJ ta’sis etish, ustav fondini shakllantirish, ta’sischilar umumiy yig‘ilishi, direktor vakolatlari, foydani (dividendlarni) taqsimlash va jamiyatdan chiqish tartibini belgilaydi.',
          ru: 'Регламентирует учреждение ООО, формирование уставного фонда, права участников, распределение дивидендов и корпоративное управление.',
          en: 'Governs LLC incorporation, charter capital rules, shareholder governance, dividend distribution, and member exit procedures.',
        },
        relevance: {
          uz: 'O‘zbekistonda yuridik shaxslarning 80% dan ortig‘i aynan MChJ shaklida ishlaydi; sherikchilikda biznes ochishning asosiy qonuni.',
          ru: 'Главный закон для партнерского бизнеса (более 80% всех новых юрлиц открываются в форме ООО).',
          en: 'Foundational corporate statute governing over 80% of newly formed businesses and co-founder partnerships.',
        },
        keyClauses: {
          uz: [
            'MChJ ishtirokchilari uning majburiyatlari bo‘yicha javobgar bo‘lmaydilar va o‘z ulushlari qiymati doirasida zarar ko‘rish xavfini zimmalariga oladilar.',
            'Litsenziya talablari bo‘lmagan oddiy MChJlar uchun ustav fondining minimal miqdoriga qat’iy yuqori cheklov olib tashlangan — uni ta’sischilar mustaqil belgilaydi.',
          ],
          ru: [
            'Участники ООО несут риск убытков в пределах стоимости внесенных ими вкладов в уставный фонд.',
            'Для обычных видов деятельности без специальных лицензионных требований размер уставного фонда определяется учредителями самостоятельно.',
          ],
          en: [
            'Shareholders bear risk of loss solely up to the value of their charter capital contributions.',
            'For non-licensed general activities, statutory minimum charter capital barriers have been abolished — founders set capital freely.',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/22525',
      },
      {
        id: 'm4-law-2',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Litsenziyalash, ruxsat berish va xabardor qilish tartib-taomillari to‘g‘risida”gi Qonun (O‘RQ-701)',
          ru: 'Закон РУз «О лицензировании, разрешительных и уведомительных процедурах» (ЗРУ-701)',
          en: 'Law "On Licensing, Permitting, and Notification Procedures" (Law No. ZRU-701)',
        },
        summary: {
          uz: 'Qaysi faoliyat turlari litsenziya, qaysilari ruxsatnoma va qaysilari oddiy xabarnoma talab qilishining yakuniy yagona ro‘yxatini (1–3-ilovalar) belgilab bergan kodekslashgan qonun.',
          ru: 'Единый закон с исчерпывающими перечнями видов деятельности, требующих лицензии, разрешения или простого уведомления через license.gov.uz.',
          en: 'Comprehensive statute establishing exhaustive schedules of activities requiring licenses, permits, or digital notifications.',
        },
        relevance: {
          uz: 'Yangi biznes boshlashdan avval "mening sohamga litsenziya kerakmi?" savoliga aniq huquqiy javob beradi.',
          ru: 'Позволяет за 2 минуты проверить в приложениях к закону, нужна ли вашему бизнесу лицензия.',
          en: 'Provides a single authoritative checklist to verify regulatory prerequisites before launch.',
        },
        keyClauses: {
          uz: [
            'Ushbu qonun ilovalarida ko‘rsatilmagan faoliyat turlariga davlat organlari qo‘shimcha litsenziya yoki ruxsatnoma talab qilishga haqli emas.',
            'Barcha arizalar va reyestrlar “Litsenziya” axborot tizimi (license.gov.uz) orqali yuritiladi.',
          ],
          ru: [
            'Госорганам запрещено требовать разрешения, не включенные в перечни данного закона.',
            'Все процедуры проходят дистанционно через портал license.gov.uz.',
          ],
          en: [
            'Agencies are strictly barred from demanding any license or permit not explicitly listed in this statute’s schedules.',
            'All filings and issuances occur online via license.gov.uz.',
          ],
        },
        yearNote: '2021 / Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/5511879',
      },
      {
        id: 'm4-law-3',
        docType: { uz: 'Vazirlar Mahkamasi qarori', ru: 'Постановление Кабинета Министров РУз', en: 'Cabinet of Ministers Resolution' },
        title: {
          uz: '“Tadbirkorlik subyektlarini davlat ro‘yxatidan o‘tkazish tartibi to‘g‘risidagi nizomni tasdiqlash haqida”gi VM 66-son qarori',
          ru: 'Постановление КМ РУз № 66 «О порядке государственной регистрации субъектов предпринимательства»',
          en: 'Cabinet of Ministers Resolution No. 66 "On Regulations for State Registration of Business Entities"',
        },
        summary: {
          uz: 'YaTT, MChJ va boshqa tadbirkorlik subyektlarini internet orqali avtomatlashtirilgan tizimda 30 daqiqa ichida ro‘yxatdan o‘tkazish, qayta ro‘yxatdan o‘tkazish va boj stavkalarini belgilaydi.',
          ru: 'Определяет регламент автоматизированной регистрации ИП и юрлиц за 30 минут, типовые формы учредительных документов и размеры госпошлин.',
          en: 'Sets technical rules, model charters, and fee schedules for automated 30-minute business incorporation.',
        },
        relevance: {
          uz: 'fo.birdarcha.uz tizimining bevosita ishlash reglamenti.',
          ru: 'Практический регламент работы портала fo.birdarcha.uz.',
          en: 'Operational regulation powering the fo.birdarcha.uz registration portal.',
        },
        keyClauses: {
          uz: [
            'Ro‘yxatdan o‘tkazishda soliq va statistika organlariga alohida borish talab etilmaydi — hisobga qo‘yish avtomatik bajariladi.',
            'Yuridik manzil o‘zgarganda yoki ta’sischilar tarkibi yangilanganda tizim orqali qayta ro‘yxatdan o‘tkazish majburiy.',
          ],
          ru: [
            'Постановка на учет в налоговых органах и органах статистики происходит автоматически одновременно с регистрацией.',
            'При смене юридического адреса или состава учредителей вносятся изменения через ту же систему.',
          ],
          en: [
            'Tax and statistical agency onboarding occurs automatically in real time upon registration.',
            'Changes in legal address or equity ownership require prompt online re-registration.',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/3111347',
      },
    ],
    hasDynamicRateWarning: true,
    caseStudy: {
      title: {
        uz: 'Keys: Uch nafar IT va ingliz tili o‘qituvchisi "SmartStep Academy" o‘quv markazini ochmoqda',
        ru: 'Кейс: Три партнера открывают учебный центр «SmartStep Academy» — ИП или ООО?',
        en: 'Case Study: Three Co-Founders Launching "SmartStep Academy" — Choosing YaTT vs. MChJ',
      },
      scenario: {
        uz: 'Aziz, Dilnoza va Bekzod o‘z mablag‘laridan 40 mln so‘mdan (jami 120 mln so‘m) ulush qo‘shib, Buxoro shahrida 8 nafar o‘qituvchi ishlaydigan IT va ingliz tili o‘quv markazi ochmoqchi. Shuningdek, mahalliy bank filiali o‘z xodimlarini korporativ shartnoma asosida o‘qitishni taklif qildi. Do‘stlardan biri "hujjati oson bo‘lsin deb bittamizning nomimizga YaTT ochaylik" dedi.',
        ru: 'Азиз, Дильноза и Бекзод складываются по 40 млн сумов (всего 120 млн сумов), чтобы открыть в Бухаре учебный центр английского языка и программирования с наймом 8 преподавателей и корпоративным контрактом с местным банком. Один из партнеров предложил сэкономить время и открыть ИП (YaTT) на имя одного из них.',
        en: 'Aziz, Dilnoza, and Bekzod are pooling 40M UZS each (120M UZS total) to open an English & coding center in Bukhara employing 8 instructors, with a local bank already offering a corporate staff-training contract. One partner suggests registering a simple Sole Proprietorship (YaTT) under just one founder’s name.',
      },
      analysis: {
        uz: 'YaTT varianti bu yerda 3 ta jiddiy xatolikka ega: 1) YaTTda uchta ta’sischining 33,3% dan ulushi yuridik mustahkamlanmaydi (nizoda qolgan ikki sherik huquqsiz qoladi); 2) YaTTda 8 nafar xodim yollash mumkin emas; 3) Nodavlat ta’lim xizmati ko‘rsatish (xabardor qilish/litsenziya tartibi) va yirik B2B shartnomalar uchun MChJ eng to‘g‘ri shakldir.',
        ru: 'ИП здесь категорически не подходит по трем причинам: 1) В ИП невозможно юридически зафиксировать доли трех партнеров (33,3% у каждого); 2) Лимит найма сотрудников у ИП не позволяет оформить 8 преподавателей и администраторов; 3) Для образовательной деятельности и корпоративных договоров B2B оптимальна форма ООО (MChJ).',
        en: 'Forming a YaTT here fails on three critical fronts: (1) YaTT cannot legally record 33.3% co-founder equity splits; (2) YaTT employee caps prohibit hiring 8+ instructors; and (3) Non-state educational services and corporate B2B contracts require an MChJ legal entity.',
      },
      numbersBreakdown: {
        uz: [
          'Tanlangan shakl: "SmartStep Academy" MChJ | Ustav fondi: 120 mln so‘m (har bir ta’sischida 33,33% ulush).',
          'fo.birdarcha.uz orqali onlayn ro‘yxatdan o‘tish vaqti: 25 daqiqa (E-IMZO bilan barcha 3 ta’sischi masofadan tasdiqladi).',
          'license.gov.uz orqali nodavlat ta’lim talablari tekshirilib, binoda yong‘in va sanitariya normalari bajarildi hamda bank bilan 65 mln so‘mlik B2B shartnoma imzolandi.',
        ],
        ru: [
          'Выбранная форма: ООО «SmartStep Academy» с уставным фондом 120 млн сумов (доли партнеров закрепленны в уставе).',
          'Время онлайн-регистрации на fo.birdarcha.uz: 25 минут.',
          'Выполнены требования license.gov.uz к учебным курсам и подписан первый B2B-контракт с банком на 65 млн сумов.',
        ],
        en: [
          'Selected structure: "SmartStep Academy" MChJ | Charter capital: 120M UZS (equal 33.33% founder shares).',
          'Online registration time on fo.birdarcha.uz: 25 minutes signed digitally via E-IMZO.',
          'Completed regulatory filing on license.gov.uz and closed the 65M UZS corporate B2B training contract.',
        ],
      },
      challengeQuestion: {
        uz: 'Agar talaba yollanma ishchi olmasdan, uyda yolg‘iz o‘zi grafik dizayn va SMM xizmatlarini ko‘rsatib boshlamoqchi bo‘lsa, eng kam xarajatli qonuniy start shakli qaysi?',
        ru: 'Какая законная форма наиболее проста и выгодна на старте для студента, который в одиночку без наемных работников оказывает услуги графического дизайна на заказ?',
        en: 'Which lawful status is leanest for a solo student starting freelance graphic design without hiring any employees?',
      },
      challengeOptions: {
        uz: [
          'Aksiyadorlik jamiyati (AJ) ochish',
          'Soliq mobil ilovasi orqali o‘zini o‘zi band qilgan shaxs sifatida ro‘yxatdan o‘tish (yoki aylanma va B2B talabiga qarab YaTT)',
          'Umuman ro‘yxatdan o‘tmasdan faqat shaxsiy plastik kartaga pul o‘tkazib ishlash',
        ],
        ru: [
          'Открыть Акционерное общество (АО)',
          'Зарегистрироваться как самозанятое лицо в приложении Soliq (или ИП при росте оборотов)',
          'Работать нелегально с переводами на личную карту физлица',
        ],
        en: [
          'Incorporate a Joint-Stock Company (JSC)',
          'Register in minutes as a Self-Employed individual via the Soliq app (upgrading to YaTT/MChJ as revenue scales)',
          'Operate informally via unregistered P2P transfers',
        ],
      },
      correctOptionIndex: 1,
      challengeExplanation: {
        uz: 'O‘zini o‘zi band qilish ro‘yxatiga grafik dizayn va raqamli xizmatlar kiritilgan: bir necha daqiqada bepul ro‘yxatdan o‘tiladi, qonuniy shartnoma va xizmat cheki berish hamda mehnat staji yuritish mumkin.',
        ru: 'Дизайн и IT-услуги входят в перечень для самозанятых: бесплатная регистрация за пару минут дает легальный статус и возможность официально принимать оплату.',
        en: 'Graphic design and freelance digital work qualify for instant Self-Employed registration, granting lawful invoicing and pension-tenure options.',
      },
    },
    keyTakeaways: {
      uz: [
        'Yolg‘iz va xodimsiz xizmat turlari uchun — O‘zini o‘zi band qilish; kichik yakka savdo uchun — YaTT; hamkorlar, xodimlar shtati va B2B uchun — MChJ maqbuldir.',
        'MChJ ishtirokchilari shaxsiy kvartirasi yoki mashinasi bilan emas, jamiyatga kiritgan ulushi doirasida tavakkal qiladilar.',
        'E-IMZO kaliti va fo.birdarcha.uz portali yordamida korxonani 30 daqiqa ichida uydan chiqmasdan davlat ro‘yxatidan o‘tkazish mumkin.',
        'Biznes boshlashdan avval license.gov.uz portalida faoliyat turi litsenziya yoki xabarnoma talab qilishini albatta tekshiring.',
        'Rasmiy ishlash jarimalardan saqlaydi, yirik korporativ mijozlar ishonchini uyg‘otadi va bank kreditlari hamda davlat grantlariga yo‘l ochadi.',
      ],
      ru: [
        'Самозанятость идеальна для одиночного старта в услугах, ИП — для малой розницы, а ООО — для партнерства, найма штата и B2B-сделок.',
        'Форма ООО отделяет имущество компании от личного имущества учредителей.',
        'С ключом E-IMZO регистрация бизнеса на портале fo.birdarcha.uz занимает до 30 минут онлайн.',
        'Перед запуском обязательно сверьте код деятельности с реестрами лицензий и уведомлений на license.gov.uz.',
        'Легальный статус защищает доли основателей, открывает доступ к эквайрингу, маркетплейсам и госзакупкам.',
      ],
      en: [
        'Match legal form to ambition: Self-Employed for solo freelance, YaTT for solo micro-retail, and MChJ (LLC) for co-founders, staff, and B2B.',
        'An MChJ creates a distinct corporate veil separating business obligations from founders’ personal assets.',
        'With an E-IMZO digital signature, online incorporation via fo.birdarcha.uz completes in under 30 minutes.',
        'Always verify whether your activity requires a license, permit, or digital notice on license.gov.uz prior to opening.',
        'Operating formally protects co-founder equity, unlocks merchant payments and marketplaces, and eliminates penalty exposure.',
      ],
    },
  },
];

import { QuizQuestion } from '../types';

export const QUIZ_M6_M8: QuizQuestion[] = [
  // ==================== M6 (10 questions) ====================
  {
    id: 'm6-q1',
    topicId: 'm6',
    question: {
      uz: 'Aleksandr Ostervalderning Business Model Canvas (Biznes-model kanvasi) shabloni jami nechta o‘zaro bog‘liq blokdan iborat?',
      ru: 'Из скольких взаимосвязанных структурных блоков состоит шаблон Business Model Canvas А. Остервальдера?',
      en: 'How many interconnected building blocks make up Alexander Osterwalder’s Business Model Canvas?',
    },
    options: {
      uz: ['9 ta blok', '4 ta blok', '12 ta blok', '3 ta blok'],
      ru: ['Из 9 блоков', 'Из 4 блоков', 'Из 12 блоков', 'Из 5 блоков'],
      en: ['9 building blocks', '4 blocks', '12 blocks', '5 blocks'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'BMC 9 ta blokdan tashkil topadi: Mijoz segmentlari, Qiymat taklifi, Kanallar, Mijoz munosabatlari, Daromad oqimlari, Asosiy resurslar, Asosiy jarayonlar, Asosiy hamkorlar va Xarajatlar tarkibi.',
      ru: 'Классическая канва Остервальдера включает ровно 9 блоков на одном листе.',
      en: 'Osterwalder’s Canvas maps 9 core blocks spanning customers, value proposition, infrastructure, and finances.',
    },
    hint: {
      uz: 'O‘ngda 4 ta, o‘rtada 1 ta, chapda 3 ta va pastda moliya.',
      ru: 'Вспомните сетку канвы на одной странице.',
      en: 'Recall the classic single-page 9-box layout.',
    },
  },
  {
    id: 'm6-q2',
    topicId: 'm6',
    question: {
      uz: 'Kompaniya o‘zi omborda tovar saqlamasdan, mustaqil sotuvchilar va xaridorlarni yagona raqamli maydonda bog‘lab komissiya (Take rate) oladigan model qanday ataladi?',
      ru: 'Как называется модель, объединяющая независимых продавцов и покупателей на одной площадке за комиссию со сделок?',
      en: 'Which business model connects third-party sellers with buyers on a unified digital storefront and monetizes via transaction commission?',
    },
    options: {
      uz: ['Ko‘p tomonlama onlayn platforma / Marketpleys', 'Xomashyo qazib olish modeli', 'Yakka hunarmandchilik ustaxonasi', 'B2G davlat tenderi'],
      ru: ['Двусторонняя онлайн-платформа / Маркетплейс', 'Классическое производство полного цикла', 'Франчайзинг с паушальным взносом', 'Бартерный обмен'],
      en: ['Multi-Sided Platform / Online Marketplace', 'Vertically integrated factory ownership', 'B2G public tender contracting', 'Pure brick-and-mortar kiosk'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Uzum Market, MyTaxi kabi platformalar sotuvchi va iste’molchini bog‘lab tarmoq effekti hamda tranzaksiya komissiyasidan daromad oladi.',
      ru: 'Маркетплейсы масштабируются за счет сетевого эффекта и комиссии (Take rate) с каждой транзакции.',
      en: 'Marketplaces capture take-rate commissions while scaling assortments through third-party merchants.',
    },
    hint: {
      uz: 'Uzum Market yoki MyTaxi qanday modelda ishlaydi?',
      ru: 'Подумайте о модели Uzum Market или агрегаторов такси.',
      en: 'Think of Uzum Market or ride-hailing apps.',
    },
  },
  {
    id: 'm6-q3',
    topicId: 'm6',
    question: {
      uz: 'Franshiza (Franchising) modelida “Pauşal to‘lov” va “Royalti” nimani bildiradi?',
      ru: 'Что означают термины «Паушальный взнос» и «Роялти» во франчайзинге?',
      en: 'In a Franchise business model, what do the Upfront Franchise Fee and ongoing Royalty represent?',
    },
    options: {
      uz: [
        'Pauşal to‘lov — tarmoqqa kirish va tayyor brend/standartlarni olish uchun bir martalik to‘lov; Royalti — brend va tizimdan foydalanganlik uchun oylik muntazam to‘lov',
        'Ikkalasi ham bojxona boji',
        'Xodimlarga beriladigan mukofot',
        'Bank krediti jarimasi',
      ],
      ru: [
        'Паушальный взнос — разовый стартовый платеж за вход в сеть и ноу-хау; Роялти — регулярные ежемесячные отчисления правообладателю',
        'Виды налоговых штрафов',
        'Премии курьерам за скорость',
        'Возвратный залог арендодателю',
      ],
      en: [
        'Upfront Fee is the one-time entry payment for brand rights & SOPs; Royalty is the recurring monthly fee for ongoing brand/system support',
        'Two types of municipal taxes',
        'Customs duties on machinery',
        'Refundable security deposits',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Franshayzi pauşal to‘lov evaziga tayyor standartlarni oladi, har oylik royalti evaziga esa umumiy marketing va IT tizimdan foydalanadi.',
      ru: 'Паушальный взнос окупает запуск партнера, а роялти финансирует поддержку и маркетинг сети.',
      en: 'Upfront fees cover onboarding and SOP transfer, while recurring royalties fund continuous brand support.',
    },
    hint: {
      uz: 'Biri kirishda 1 marta, ikkinchisi har oy to‘lanadi.',
      ru: 'Один платеж разовый на входе, второй — регулярный.',
      en: 'One is paid once at signing; the other recurs monthly.',
    },
  },
  {
    id: 'm6-q4',
    topicId: 'm6',
    isCalculation: true,
    question: {
      uz: 'Hisob-kitob: SaaS kompaniyasi Obuna modelida ishlaydi: oylik narxi — 300 000 so‘m. Oy boshida 120 faol do‘kon bor edi, 25 yangi ulandi va 5 tasi bekor qildi. Oy yakunidagi oylik takroriy tushum (MRR) qancha?',
      ru: 'Расчет: SaaS-сервис продает подписку за 300 000 сумов/мес. Было 120 клиентов, подключились 25 новых, отключились 5. Чему равен MRR на конец месяца?',
      en: 'Calculation: A SaaS charges 300,000 UZS/month. Starting with 120 active subscribers, it adds 25 new stores and loses 5 to churn. What is ending MRR?',
    },
    options: {
      uz: ['42 000 000 so‘m (140 faol obunachi × 300 000)', '36 000 000 so‘m', '45 000 000 so‘m', '7 500 000 so‘m'],
      ru: ['42 000 000 сумов ((120 + 25 − 5) × 300 000)', '36 000 000 сумов', '45 000 000 сумов', '7 500 000 сумов'],
      en: ['42,000,000 UZS ((120 + 25 − 5) × 300,000)', '36,000,000 UZS', '45,000,000 UZS', '7,500,000 UZS'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Faol mijozlar: 120 + 25 − 5 = 140 ta. MRR = 140 × 300 000 = 42 000 000 so‘m.',
      ru: 'Активная база: 140 точек × 300 000 = 42 млн сумов.',
      en: 'Active base = 140 stores × 300,000 = 42,000,000 UZS.',
    },
    hint: {
      uz: '(120 + 25 − 5) × 300 000.',
      ru: 'Найдите число активных подписчиков и умножьте на тариф.',
      en: 'Compute net active subscribers × 300,000 UZS.',
    },
  },
  {
    id: 'm6-q5',
    topicId: 'm6',
    question: {
      uz: 'Korxona ishlab chiqargan partalarini xarid.uzex.uz elektron portali orqali davlat maktablariga sotsa, bu qaysi yo‘nalishga kiradi?',
      ru: 'Цех поставляет парты государственным школам через портал госзакупок xarid.uzex.uz. К какому сегменту относится модель?',
      en: 'A furniture maker supplies desks to public schools via the xarid.uzex.uz e-procurement exchange. Which model is this?',
    },
    options: {
      uz: ['B2G (Business-to-Government)', 'C2C (Consumer-to-Consumer)', 'Freemium', 'B2C chakana savdo'],
      ru: ['B2G (Бизнес для государства)', 'C2C (Потребитель для потребителя)', 'Freemium', 'Розничный B2C'],
      en: ['B2G (Business-to-Government)', 'C2C (Peer-to-Peer)', 'Freemium', 'B2C Retail'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Byudjet va davlat buyurtmachilariga davlat xaridlari portali orqali mahsulot yetkazish B2G modelidir.',
      ru: 'Продажи бюджетным организациям классифицируются как B2G.',
      en: 'Supplying public-sector agencies through procurement portals exemplifies B2G commerce.',
    },
    hint: {
      uz: 'Government — davlat tashkiloti.',
      ru: 'G = Government (госзаказчик).',
      en: 'G stands for Government.',
    },
  },
  {
    id: 'm6-q6',
    topicId: 'm6',
    question: {
      uz: '“Freemium” (Free + Premium) biznes-modelining asosiy ishlash mexanizmi qanday?',
      ru: 'Как работает монетизация в бизнес-модели «Freemium»?',
      en: 'How does monetization work in a "Freemium" business model?',
    },
    options: {
      uz: [
        'Bazaviy xizmat bepul (keng auditoriya yig‘iladi), kengaytirilgan qulayliklar uchun faol foydalanuvchilarning bir qismi PRO tarif oladi',
        'Barcha xizmatlar umrbod tekin bo‘ladi',
        'Kirish chiptasi juda qimmat bo‘ladi',
        'Faqat ulgurji savdo qilinadi',
      ],
      ru: [
        'Базовый функционал бесплатен для массового охвата, а за расширенные возможности часть пользователей покупает платную подписку',
        'Все товары бесплатны навсегда без платных тарифов',
        'Продукт продается только заводам',
        'Оплата принимается только бартером',
      ],
      en: [
        'Core features are free forever to drive viral adoption, while power users upgrade to paid Pro tiers',
        'Every feature is 100% free with zero revenue streams',
        'Customers pay massive upfront fees before testing',
        'Goods are traded strictly via barter',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Bepul tarif CAC ni kamaytiradi, 3–8% pullik PRO foydalanuvchilar esa butun platforma foydasini shakllantiradi.',
      ru: 'Бесплатный доступ растит базу, а конверсия активных юзеров в Premium генерирует прибыль.',
      en: 'Free tiers slash acquisition friction, while paid upgrades fund the platform profitably.',
    },
    hint: {
      uz: 'Free (bepul baza) + Premium (pullik qo‘shimcha).',
      ru: 'Сочетание Free и Premium.',
      en: 'Free base + Premium upgrade.',
    },
  },
  {
    id: 'm6-q7',
    topicId: 'm6',
    question: {
      uz: 'Osterwalder kanvasining (BMC) markazida joylashgan va Mijoz segmentini kompaniya mahsuloti bilan bog‘lovchi asosiy blok qaysi?',
      ru: 'Какой блок находится в центре канвы Остервальдера и связывает продукт с потребностями клиента?',
      en: 'Which block sits at the center of Osterwalder’s Business Model Canvas, bridging operations and customer segments?',
    },
    options: {
      uz: ['Qiymat taklifi (Value Proposition)', 'Ofis xo‘jalik xarajatlari', 'Bank rekvizitlari', 'Arxiv hujjatlari'],
      ru: ['Ценностное предложение (Value Proposition)', 'Штатное расписание', 'Банковские реквизиты', 'Амортизация мебели'],
      en: ['Value Proposition', 'Office Supplies Ledger', 'Bank Routing Details', 'Furniture Depreciation'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Qiymat taklifi mijoz nima sababdan boshqalarni emas, aynan sizni tanlashini tushuntiruvchi markaziy ustundir.',
      ru: 'Ценностное предложение соединяет правую (рынок) и левую (ресурсы) части канвы.',
      en: 'The Value Proposition anchors the Canvas, articulating why buyers choose you.',
    },
    hint: {
      uz: 'Mijozga beriladigan aniq foyda va yechim.',
      ru: 'Главная выгода для клиента.',
      en: 'The core promise of customer benefit.',
    },
  },
  {
    id: 'm6-q8',
    topicId: 'm6',
    question: {
      uz: 'O‘zbekiston Fuqarolik kodeksida franshiza shartnomasi rasmiy tilda qanday nomlanadi?',
      ru: 'Как в Гражданском кодексе РУз официально именуется договор франчайзинга (глава 50)?',
      en: 'Under Chapter 50 of Uzbekistan’s Civil Code, what is the formal statutory term for a Franchising agreement?',
    },
    options: {
      uz: ['Kompleks tadbirkorlik litsenziyasi shartnomasi', 'Oddiy ijara shartnomasi', 'Mehnat pudrati shartnomasi', 'Hadya shartnomasi'],
      ru: ['Договор комплексной предпринимательской лицензии', 'Договор бытового проката', 'Договор дарения', 'Трудовой контракт'],
      en: ['Complex Entrepreneurial License Agreement', 'Residential Lease Contract', 'Charitable Gift Deed', 'Employment Agreement'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'FK 862-moddasida franchayzing "Kompleks tadbirkorlik litsenziyasi" deb nomlangan.',
      ru: 'Глава 50 ГК РУз регулирует франчайзинг как договор комплексной предпринимательской лицензии.',
      en: 'Article 862 codifies franchising under Complex Entrepreneurial Licensing.',
    },
    hint: {
      uz: 'Firma nomi + texnologiya kompleks tarzda berilishi.',
      ru: 'Передача комплекса исключительных прав.',
      en: 'Grants a bundle ("complex") of brand and know-how rights.',
    },
  },
  {
    id: 'm6-q9',
    topicId: 'm6',
    isCalculation: true,
    question: {
      uz: 'Hisob-kitob: Marketpleys tovar narxining 12% i miqdorida komissiya va logistika uchun 8 000 so‘m oladi. Tannarxi 90 000 so‘mlik tovar 150 000 so‘mdan sotilsa, har donadan qancha yalpi foyda qoladi?',
      ru: 'Расчет: Маркетплейс берет комиссию 12% от цены и 8 000 сумов за логистику. Товар продается за 150 000 сумов при закупке 90 000 сумов. Какова валовая прибыль с 1 шт.?',
      en: 'Calculation: A marketplace charges 12% commission plus 8,000 UZS logistics. Listing an item with 90,000 UZS COGS at 150,000 UZS leaves how much unit gross profit?',
    },
    options: {
      uz: ['34 000 so‘m (150 000 − 90 000 − 18 000 − 8 000)', '60 000 so‘m', '42 000 so‘m', '52 000 so‘m'],
      ru: ['34 000 сумов (150 000 − 90 000 − 18 000 − 8 000)', '60 000 сумов', '42 000 сумов', '52 000 сумов'],
      en: ['34,000 UZS (150,000 − 90,000 − 18,000 − 8,000)', '60,000 UZS', '42,000 UZS', '52,000 UZS'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Komissiya: 18 000 so‘m. Logistika: 8 000 so‘m. Qoldiq: 150 000 − 90 000 − 18 000 − 8 000 = 34 000 so‘m.',
      ru: 'Комиссия 18 000 + логистика 8 000 + закупка 90 000 = 116 000 сумов затрат. Остаток: 34 000 сумов.',
      en: '150k − 90k COGS − 18k fee − 8k shipping = 34,000 UZS.',
    },
    hint: {
      uz: '150 mingdan 90 ming, 18 ming va 8 mingni ayiring.',
      ru: 'Вычтите себестоимость, 12% комиссии и логистику.',
      en: 'Deduct COGS, 12% of 150k, and 8k shipping.',
    },
  },
  {
    id: 'm6-q10',
    topicId: 'm6',
    question: {
      uz: '“Ustara va lezviya” (Razor & Blades) biznes-modeliga qaysi misol mos keladi?',
      ru: 'Какой пример иллюстрирует бизнес-модель «Бритва и лезвия»?',
      en: 'Which example illustrates the classic "Razor and Blades" recurring consumables model?',
    },
    options: {
      uz: [
        'Kapsulali qahva mashinasini arzon narxda sotib, unga tushadigan qahva kapsulalarini doimiy yuqori marja bilan sotish',
        'Kvartirani bir marta sotish',
        'Sartaroshxonada soch olish',
        'Meva ulgurji eksporti',
      ],
      ru: [
        'Продажа кофемашины с низкой маржой ради регулярной высокомаржинальной продажи капсул (или картриджей к принтеру)',
        'Разовая продажа земельного участка',
        'Услуги разового репетитора',
        'Оптовая продажа цемента',
      ],
      en: [
        'Selling a capsule coffee machine near cost while earning high recurring margins on proprietary pods',
        'Selling an apartment once',
        'One-off event photography',
        'Bulk grain wholesaling',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Asosiy qurilma mijozni ekotizimga bog‘laydi, sarflanuvchi kapsulalar esa barqaror foyda keltiradi.',
      ru: 'Базовое устройство формирует привязку, а расходники генерируют высокий LTV.',
      en: 'Low-margin hardware locks in ongoing high-margin consumable refills.',
    },
    hint: {
      uz: 'Qurilma + doimiy almashtiriladigan sarf materiali.',
      ru: 'Устройство + регулярные расходники.',
      en: 'Base hardware + proprietary refills.',
    },
  },

  // ==================== M7 (10 questions) ====================
  {
    id: 'm7-q1',
    topicId: 'm7',
    question: {
      uz: 'TAM, SAM va SOM bozor ko‘rsatkichlarining kattadan kichikka to‘g‘ri munosabati qanday?',
      ru: 'Каково правильное соотношение уровней оценки рынка TAM, SAM и SOM от большего к меньшему?',
      en: 'What is the correct descending size relationship among TAM, SAM, and SOM?',
    },
    options: {
      uz: ['TAM ≥ SAM ≥ SOM', 'SOM > SAM > TAM', 'SAM > TAM > SOM', 'Uchalasi doimo teng'],
      ru: ['TAM ≥ SAM ≥ SOM', 'SOM > SAM > TAM', 'SAM > TAM > SOM', 'Все три всегда равны'],
      en: ['TAM ≥ SAM ≥ SOM', 'SOM > SAM > TAM', 'SAM > TAM > SOM', 'All three are identical'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'TAM — umumiy bozor, SAM — sizning modelingiz qamrovi, SOM — yaqin davrda amalda egallanadigan real ulush.',
      ru: 'SOM является частью SAM, а SAM — частью общего рынка TAM.',
      en: 'SOM nests inside SAM, which nests inside overall category TAM.',
    },
    hint: {
      uz: 'Tashqi katta doiradan ichki doiraga.',
      ru: 'От общего рынка страны к реальному плану точки.',
      en: 'From total category ceiling inward to realistic capture.',
    },
  },
  {
    id: 'm7-q2',
    topicId: 'm7',
    isCalculation: true,
    question: {
      uz: 'Hisob-kitob: Shaharda 50 000 avtomobil egasi yiliga 1 200 000 so‘m yuvishga sarflaydi (SAM). Markazingiz kuniga 15 mashinaga xizmat ko‘rsatadi (yiliga 300 kun, chek 200 000 so‘m). SAM va 1-yilgi SOM qancha?',
      ru: 'Расчет: В городе 50 000 авто тратят по 1,2 млн сумов/год (SAM). Точка обслуживает 15 авто/день × 300 дней при чеке 200 000 сумов. Чему равны SAM и годовой SOM?',
      en: 'Calculation: 50,000 local cars spend 1.2M UZS/yr (SAM). Your bay services 15 cars/day × 300 days at 200,000 UZS. Find SAM and capacity-bound SOM:',
    },
    options: {
      uz: ['SAM = 60 mlrd so‘m; SOM = 900 mln so‘m (1,5%)', 'SAM = 6 mlrd; SOM = 9 mlrd', 'SAM = 60 mlrd; SOM = 60 mlrd', 'SAM = 1,2 mlrd; SOM = 300 mln'],
      ru: ['SAM = 60 млрд сумов; SOM = 900 млн сумов (1,5%)', 'SAM = 6 млрд; SOM = 9 млрд', 'SAM = 60 млрд; SOM = 30 млрд', 'SAM = 12 млрд; SOM = 200 млн'],
      en: ['SAM = 60B UZS; SOM = 900M UZS (1.5%)', 'SAM = 6B; SOM = 9B', 'SAM = 60B; SOM = 60B', 'SAM = 12B; SOM = 200M'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'SAM = 50 000 × 1,2 mln = 60 mlrd so‘m. SOM = 15 × 300 × 200 000 = 900 mln so‘m.',
      ru: 'SAM = 60 млрд сумов; реальная пропускная мощность SOM = 900 млн сумов.',
      en: 'SAM = 60B UZS; bottom-up capacity SOM = 900M UZS.',
    },
    hint: {
      uz: 'SAM: 50 ming × 1,2 mln; SOM: 15 × 300 × 200 ming.',
      ru: 'Умножьте 15 × 300 × 200 000 для SOM.',
      en: 'Multiply 15 × 300 × 200,000 for SOM.',
    },
  },
  {
    id: 'm7-q3',
    topicId: 'm7',
    question: {
      uz: 'Mijozlarni “qadriyatlari, hayot tarzi va eko-mahsulotlarga munosabati” bo‘yicha guruhlash qaysi segmentlash turiga kiradi?',
      ru: 'К какому виду сегментации относится разделение по ценностям, стилю жизни и интересам?',
      en: 'Grouping consumers by values, lifestyle, and eco-consciousness represents which segmentation lens?',
    },
    options: {
      uz: ['Psixografik segmentlash', 'Geografik segmentlash', 'Bojxona segmentlashi', 'Soliq segmentlashi'],
      ru: ['Психографическая сегментация', 'Географическая сегментация', 'Кадастровая сегментация', 'Налоговая сегментация'],
      en: ['Psychographic segmentation', 'Geographic segmentation', 'Cadastral segmentation', 'Fiscal segmentation'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Qadriyatlar, qiziqish va hayot tarzi — psixografik segmentlash mezonlaridir.',
      ru: 'Интересы, ценности и образ жизни составляют психографический профиль.',
      en: 'Values, attitudes, and lifestyles define psychographic cohorts.',
    },
    hint: {
      uz: 'Inson ruhiyati va qadriyatlari bilan bog‘liq atama.',
      ru: 'Связано с психологией и стилем жизни.',
      en: 'Tied to attitudes and lifestyle.',
    },
  },
  {
    id: 'm7-q4',
    topicId: 'm7',
    question: {
      uz: '“Buyer Persona” (Ideal mijoz portreti) nima uchun tuziladi?',
      ru: 'Зачем предпринимателю составлять «Портрет идеального клиента» (Buyer Persona)?',
      en: 'Why do founders build a detailed "Buyer Persona"?',
    },
    options: {
      uz: [
        'Maqsadli mijozning og‘riqlari, motivlari, shubhalari va axborot kanallarini aniq tushunib, mahsulot va reklamani nishonga olish uchun',
        'Soliq inspeksiyasiga topshirish uchun',
        'Bankda hisobraqam ochishda majburiy hujjat bo‘lgani uchun',
        'Xodimlar davomatini tekshirish uchun',
      ],
      ru: [
        'Чтобы понимать мотивы, возражения и медиапривычки типичного покупателя при настройке продукта и рекламы',
        'Для обязательной сдачи в статистику',
        'Для получения лицензии',
        'Для расчета амортизации',
      ],
      en: [
        'To align product features and ad messaging around a concrete buyer archetype’s frustrations, triggers, and channels',
        'Because tax authorities mandate it monthly',
        'To register a charter on fo.birdarcha.uz',
        'To calculate depreciation',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Aniq Persona bo‘lganda dizayner ham, marketolog ham, sotuvchi ham mijoz ehtiyojini aniq biladi.',
      ru: 'Персона помогает формулировать офферы, бьющие точно в боль покупателя.',
      en: 'A sharp Buyer Persona keeps product and marketing aligned on real buyer triggers.',
    },
    hint: {
      uz: 'Mijoz motiv va qo‘rquvini tushunish quroli.',
      ru: 'Инструмент точной настройки маркетинга.',
      en: 'Aligns messaging with human triggers.',
    },
  },
  {
    id: 'm7-q5',
    topicId: 'm7',
    question: {
      uz: '“Iste’molchilarning huquqlarini himoya qilish to‘g‘risida”gi Qonunga ko‘ra O‘zbekistonda sotilayotgan tovar yorlig‘i qaysi tilda bo‘lishi majburiy?',
      ru: 'На каком языке обязательно должна доводиться информация о товаре согласно Закону РУз «О защите прав потребителей»?',
      en: 'Under Uzbekistan’s Consumer Protection Law, in which language must product labels mandatorily appear?',
    },
    options: {
      uz: ['Davlat tilida (o‘zbek tilida; qo‘shimcha ravishda boshqa tillarda ham berilishi mumkin)', 'Faqat xorijiy tilda bo‘lsa kifoya', 'Til talabi yo‘q', 'Faqat shtrix-kod bo‘lsa yetarli'],
      ru: ['На государственном (узбекском) языке с правом дублирования на других языках', 'Достаточно только иностранного языка', 'Требований нет', 'Достаточно QR-кода без текста'],
      en: ['In the state language (Uzbek), with optional additional translations alongside it', 'Foreign language alone suffices', 'No language rules exist', 'Barcodes replace text'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Qonunning 6-moddasiga ko‘ra tovar tarkibi, muddati va ishlab chiqaruvchisi haqidagi ma’lumot davlat tilida bo‘lishi shart.',
      ru: 'Маркировка на государственном языке обязательна для всех реализуемых в рознице товаров.',
      en: 'Retail goods sold in Uzbekistan must carry clear Uzbek-language disclosures.',
    },
    hint: {
      uz: 'Import tovarlardagi majburiy stikerni eslang.',
      ru: 'Обязательный стикер на товарах в супермаркете.',
      en: 'Mandatory local-language label rule.',
    },
  },
  {
    id: 'm7-q6',
    topicId: 'm7',
    question: {
      uz: 'Bozor hajmini “Pastdan yuqoriga” (Bottom-up) baholash usuli qanday ishlaydi?',
      ru: 'В чем заключается метод оценки рынка «снизу вверх» (Bottom-up)?',
      en: 'How does the "Bottom-Up" market sizing method work?',
    },
    options: {
      uz: [
        'Aniq savdo nuqtalari / mijozlar soni, real quvvat, konversiya va o‘rtacha chekni ko‘paytirib pastdan aniq hisoblash',
        'Jahon ЯIM raqamini 0,01% ga ko‘paytirish',
        'Raqamlarni tekshirmasdan taxminiy yozish',
        'Faqat inflyatsiyaga qarash',
      ],
      ru: [
        'Расчет от первичных единиц: реальное число целевых клиентов × конверсия × частота покупок × средний чек',
        'Взять мировой рынок и угадать процент',
        'Опрос двух знакомых',
        'Копирование чужой презентации',
      ],
      en: [
        'Building up from concrete operational units: verified target buyers × conversion × frequency × average ticket',
        'Taking global trillions and guessing 0.01%',
        'Picking arbitrary round numbers',
        'Using national GDP unfiltered',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Bottom-up hisobi korxonaning real ishlab chiqarish va sotuv fizikasiga tayanadi.',
      ru: 'Расчет «снизу вверх» доказывает реалистичность плана продаж.',
      en: 'Bottom-up math grounds projections in verifiable unit capacity.',
    },
    hint: {
      uz: 'Bitta birlik va real quvvatdan boshlab ko‘paytirish.',
      ru: 'От одного клиента и мощности точки вверх.',
      en: 'Start from tangible unit capacity.',
    },
  },
  {
    id: 'm7-q7',
    topicId: 'm7',
    question: {
      uz: 'O‘zbekistonda tuman va viloyatlar kesimida rasmiy demografik va tarmoq statistikasini bepul olish portali qaysi?',
      ru: 'На каком официальном портале доступны бесплатные статданные по регионам и отраслям РУз?',
      en: 'Which official portal provides free regional demographic and sectoral datasets across Uzbekistan?',
    },
    options: {
      uz: ['stat.uz va siat.stat.uz', 'kinopoisk.ru', 'wikipedia.org', 'booking.com'],
      ru: ['stat.uz и аналитический портал siat.stat.uz', 'youtube.com', 'booking.com', 'avito.ru'],
      en: ['stat.uz and siat.stat.uz', 'imdb.com', 'pinterest.com', 'reddit.com'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'siat.stat.uz tizimida minglab rasmiy ko‘rsatkichlar hududlar kesimida ochiq berilgan.',
      ru: 'Портал siat.stat.uz дает точные таблицы по регионам для расчета TAM и SAM.',
      en: 'siat.stat.uz offers open-access regional tables for TAM/SAM modeling.',
    },
    hint: {
      uz: 'Milliy statistika qo‘mitasi portali.',
      ru: 'Официальный домен статистики РУз.',
      en: 'Official Statistics Agency domain.',
    },
  },
  {
    id: 'm7-q8',
    topicId: 'm7',
    question: {
      uz: 'JTBD (Jobs-To-Be-Done) yondashuvining asosiy g‘oyasi nimada?',
      ru: 'В чем ключевая идея подхода Jobs-To-Be-Done (JTBD)?',
      en: 'What is the core insight of the Jobs-To-Be-Done (JTBD) framework?',
    },
    options: {
      uz: [
        'Mijoz mahsulotning o‘zini emas, hayotidagi muayyan vazifani hal qilish natijasini “ishga yollaydi”',
        'Mijozlarni korxonaga ishchi qilib olish kerak',
        'Faqat arzon xomashyo olish kerak',
        'Segmentlash taqiqlanadi',
      ],
      ru: [
        'Покупатель «нанимает» продукт для решения конкретной жизненной задачи и получения результата',
        'Нужно нанимать больше продавцов',
        'Клиент смотрит только на цену',
        'Характеристики важнее пользы',
      ],
      en: [
        'Customers "hire" products to accomplish specific progress or outcomes in a given context',
        'Companies should hire customers as staff',
        'Price is the sole factor in buying',
        'Demographics explain everything',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: '“Odamlar drel emas, devordagi teshikni (aniqrog‘i, osilgan rasmni) xarid qiladilar”.',
      ru: 'JTBD фокусирует маркетинг на контексте и желанном результате клиента.',
      en: 'JTBD focuses product design on the concrete outcome the customer wants accomplished.',
    },
    hint: {
      uz: '“Drel emas, devordagi teshik” misoli.',
      ru: 'Метафора про дрель и отверстие в стене.',
      en: 'Quarter-inch drill vs. quarter-inch hole.',
    },
  },
  {
    id: 'm7-q9',
    topicId: 'm7',
    question: {
      uz: 'Raqobatchining mashhur tovar qadog‘ini xaridorni chalg‘itadigan darajada o‘xshatib chiqarish qonunchilikda qanday baholanadi?',
      ru: 'Как квалифицируется законом выпуск товара в упаковке, имитирующей бренд конкурента до степени смешения?',
      en: 'How does Uzbekistan’s Competition Law classify launching look-alike packaging imitating a rival brand?',
    },
    options: {
      uz: ['Insofsiz raqobat — qonun bilan taqiqlanadi va jarimaga tortiladi', 'Qonuniy marketing usuli', 'Innovatsion yondashuv', 'Davlat standarti'],
      ru: ['Недобросовестная конкуренция, запрещенная Законом «О конкуренции»', 'Законный бенчмаркинг', 'Креативный брендинг', 'Социальное предпринимательство'],
      en: ['Unlawful Unfair Competition subject to regulatory penalties', 'Smart legal growth hacking', 'Protected innovation', 'Standard franchising'],
    },
    correctIndex: 0,
    explanation: {
      uz: '“Raqobat to‘g‘risida”gi Qonun o‘zga brend va qadoqni taqlid qilishni insofsiz raqobat sifatida taqiqlaydi.',
      ru: 'Имитация чужого товарного знака пресекается Комитетом по конкуренции.',
      en: 'Trade-dress imitation deceives consumers and triggers statutory fines.',
    },
    hint: {
      uz: 'Insofsiz raqobat taqiqi.',
      ru: 'Запрет на введение потребителя в заблуждение.',
      en: 'Statutory ban on deceptive imitation.',
    },
  },
  {
    id: 'm7-q10',
    topicId: 'm7',
    question: {
      uz: 'Cheklangan byudjetli yosh biznes bozorga kirishda qanday segment strategiyasini tanlashi eng to‘g‘ri?',
      ru: 'Какая стратегия выбора сегмента наиболее эффективна на старте при малом бюджете?',
      en: 'With limited startup capital, which market entry segmentation strategy works best?',
    },
    options: {
      uz: [
        'Muammosi eng o‘tkir bo‘lgan tor segmentni (“platsdarm”) tanlab, avval o‘sha yerda yetakchi bo‘lish, so‘ng kengayish',
        'Birinchi kundanoq hamma yoshdagilarga bir xil reklama berish',
        'Mahsulotga qiziqmaydigan guruhni tanlash',
        'Segmentlashdan voz kechish',
      ],
      ru: [
        'Сфокусироваться на узком сегменте с острой болью («плацдарм»), занять там долю и затем расширяться',
        'Распылить малый бюджет на всё население страны',
        'Выбрать сегмент без спроса',
        'Работать без портрета клиента',
      ],
      en: [
        'Dominate a focused, high-urgency niche beachhead first before expanding into adjacent segments',
        'Spread a tiny budget across all 38M citizens Day 1',
        'Target buyers with zero pain',
        'Ignore segmentation',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Tor segmentda tez obro‘ va tavsiya (word-of-mouth) yig‘ish keyingi kengayish uchun pul yaratadi.',
      ru: 'Фокус на узком плацдарме экономит бюджет и запускает сарафанное радио.',
      en: 'Winning a beachhead builds density and cash flow to fund broader expansion.',
    },
    hint: {
      uz: 'Resurslarni bir nuqtaga jamlash.',
      ru: 'Принцип фокусировки на старте.',
      en: 'Concentrate scarce resources on one beachhead.',
    },
  },

  // ==================== M8 (10 questions) ====================
  {
    id: 'm8-q1',
    topicId: 'm8',
    question: {
      uz: 'Klassik “4P” Marketing-miks modeliga qaysi to‘rtta element kiradi?',
      ru: 'Какие четыре элемента образуют комплекс маркетинга «4P»?',
      en: 'Which four elements comprise the classic "4P" Marketing Mix?',
    },
    options: {
      uz: ['Product, Price, Place, Promotion', 'Profit, Police, Paper, Phone', 'Plan, People, Soliq, Patent', 'Printer, Poster, Pochta, Pul'],
      ru: ['Product (Продукт), Price (Цена), Place (Дистрибуция), Promotion (Продвижение)', 'План, Прибыль, Персонал, Налоги', 'Производство, Патент, Почта, Премия', 'Презентация, Партнеры, Портал, Печать'],
      en: ['Product, Price, Place, and Promotion', 'Profit, Payroll, Patents, and Paperwork', 'Planning, Policing, Printing, and Postage', 'Pitching, Partnering, Borrowing, and Banking'],
    },
    correctIndex: 0,
    explanation: {
      uz: '4P — mahsulot, narx, sotish joyi/kanali va reklama rag‘batlantirishning uyg‘un tizimidir.',
      ru: 'Комплекс 4P объединяет продукт, цену, каналы сбыта и продвижение.',
      en: 'Product, Price, Place, and Promotion form the four tactical levers of marketing.',
    },
    hint: {
      uz: 'P harfi bilan boshlanadigan 4 ta marketing dastagi.',
      ru: 'Продукт, Цена, Место, Продвижение.',
      en: 'Offering, Pricing, Channel, Communication.',
    },
  },
  {
    id: 'm8-q2',
    topicId: 'm8',
    isCalculation: true,
    question: {
      uz: 'Hisob-kitob: O‘quv markazi reklamaga 6 000 000 so‘m va SMM-mutaxassisga 3 000 000 so‘m to‘ladi. Natijada 60 nafar yangi o‘quvchi xarid qildi. To‘liq CAC qancha?',
      ru: 'Расчет: Центр потратил 6 млн сумов на таргет и 3 млн сумов на оплату SMM-специалиста, получив 60 новых оплативших учеников. Чему равен полный CAC?',
      en: 'Calculation: A center spends 6M UZS on ad media plus 3M UZS on SMM labor, acquiring 60 paying students. What is full CAC?',
    },
    options: {
      uz: ['150 000 so‘m ((6 mln + 3 mln) ÷ 60)', '100 000 so‘m', '50 000 so‘m', '540 000 so‘m'],
      ru: ['150 000 сумов ((6 млн + 3 млн) ÷ 60)', '100 000 сумов', '50 000 сумов', '300 000 сумов'],
      en: ['150,000 UZS ((6M + 3M) ÷ 60)', '100,000 UZS', '50,000 UZS', '300,000 UZS'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'To‘liq CAC = 9 000 000 ÷ 60 = 150 000 so‘m.',
      ru: 'Полный CAC включает и бюджет, и оплату подрядчиков: 9 млн ÷ 60 = 150 000 сумов.',
      en: 'Fully loaded CAC = 9M ÷ 60 = 150,000 UZS.',
    },
    hint: {
      uz: 'Jami 9 mln so‘mni 60 mijozga bo‘ling.',
      ru: 'Разделите все затраты на маркетинг (9 млн) на 60 клиентов.',
      en: 'Divide 9M UZS total spend by 60 buyers.',
    },
  },
  {
    id: 'm8-q3',
    topicId: 'm8',
    question: {
      uz: '“Reklama to‘g‘risida”gi Qonunga muvofiq quyidagilardan qaysi biri QONUNBUZARLIK hisoblanadi?',
      ru: 'Что из перечисленного нарушает Закон РУз «О рекламе»?',
      en: 'Which practice violates Uzbekistan’s Law "On Advertising" (ZRU-776)?',
    },
    options: {
      uz: [
        'Hujjatsiz “№1 eng zo‘r va eng arzon!” deb yozish hamda narxni sun’iy oshirib soxta chegirma e’lon qilish',
        'Narx va muddatni davlat tilida aniq ko‘rsatish',
        'Ish vaqti va manzilni yozish',
        'Haqiqiy 10% chegirma berish',
      ],
      ru: [
        'Неподтвержденные заявления «Самый лучший №1!» и искусственное завышение цены для фейковой скидки',
        'Указание точной цены и сроков акции на госязыке',
        'Публикация адреса филиала',
        'Показ реального цеха',
      ],
      en: [
        'Unsubstantiated "#1 Best/Cheapest!" claims or inflating fake reference prices to advertise deceptive discounts',
        'Transparent UZS pricing in Uzbek',
        'Sharing product tutorial videos',
        'Listing store hours on maps',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Tasdiqlanmagan ustunlik iboralari va yolg‘on chegirmalar qonun bilan taqiqlangan.',
      ru: 'Закон запрещает ложные скидки и неподтвержденные превосходные степени.',
      en: 'Unverified superlatives and fake discounts carry statutory penalties.',
    },
    hint: {
      uz: 'Asossiz “№1” da’vosi va soxta chegirma.',
      ru: 'Слова «самый», «№1» без доказательств.',
      en: 'Unverified "#1" claims and fake discounts.',
    },
  },
  {
    id: 'm8-q4',
    topicId: 'm8',
    question: {
      uz: 'Mahalladagi stomatologiya, avtoservis yoki qahvaxona uchun bepul “issiq” mijoz olib keluvchi raqamli kanal qaysi?',
      ru: 'Какой бесплатный инструмент приводит самых «горячих» локальных клиентов для кофейни или автосервиса?',
      en: 'Which zero-cost channel captures high-intent local buyers searching right now for a nearby cafe or clinic?',
    },
    options: {
      uz: ['2GIS, Yandex Maps va Google Maps da to‘liq profil va haqiqiy izohlar (otzivlar)', 'Boshqa viloyat gazetasi', 'Xalqaro pochta xatlari', 'Manzilni yashirish'],
      ru: ['Карточка с фото, прайсом и отзывами в 2GIS, Яндекс Картах и Google Maps', 'Радио в соседней области', 'Бумажные письма заводам', 'Скрытие адреса'],
      en: ['Optimized profiles with photos and reviews on 2GIS, Yandex Maps, and Google Maps', 'Print ads in a distant city', 'Cold overseas emails', 'Hiding store hours'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Xaritada qidirayotgan odam hoziroq xarid qilishga tayyor — yuqori reyting bepul mijoz oqimini beradi.',
      ru: 'Поиск в 2GIS и Яндекс Картах дает горячий локальный трафик при нулевом бюджете.',
      en: 'Local map searchers convert immediately with zero ad spend.',
    },
    hint: {
      uz: 'Yaqin joyni smartfonda qaysi xarita ilovasidan qidirishadi?',
      ru: 'Геосервисы в смартфоне.',
      en: 'Smartphone navigation & directory apps.',
    },
  },
  {
    id: 'm8-q5',
    topicId: 'm8',
    question: {
      uz: 'MChJ ochgandan keyin o‘z brend logotipini va qadoq nomini taqlidchilardan himoyalash uchun qanday yuridik qadam zarur?',
      ru: 'Какой шаг необходим после открытия ООО, чтобы защитить название бренда и логотип от копирования?',
      en: 'After incorporating an LLC, what legal step secures exclusive nationwide rights to your Brand Name and Logo?',
    },
    options: {
      uz: [
        'Adliya vazirligi (Intellektual mulk) orqali Tovar belgisini (Trademark) rasmiy ro‘yxatdan o‘tkazish',
        'Instagram sahifa ochish kifoya',
        'Vizitka chop etish yetarli',
        'Qo‘shimcha hech narsa kerak emas',
      ],
      ru: [
        'Зарегистрировать Товарный знак (знак обслуживания) в органах интеллектуальной собственности при Минюсте РУз',
        'Создать аккаунт в соцсети',
        'Напечатать пакеты с логотипом',
        'Устав ООО автоматически защищает любые логотипы',
      ],
      en: [
        'Register the Trademark officially with the Intellectual Property office under the Ministry of Justice',
        'Opening a social handle grants statutory trademark rights',
        'Printing business cards creates legal monopoly',
        'LLC registration automatically trademarks all logos',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Tovar belgisi guvohnomasi 10 yil muddatga (uzaytirish huquqi bilan) brendga mutlaq huquq beradi.',
      ru: 'Только свидетельство на товарный знак юридически защищает бренд.',
      en: 'Trademark registration grants enforceable 10-year renewable brand ownership.',
    },
    hint: {
      uz: '® belgisi bilan himoyalanadigan intellektual mulk.',
      ru: 'Интеллектуальная собственность на бренд.',
      en: 'IP protection for brand marks.',
    },
  },
  {
    id: 'm8-q6',
    topicId: 'm8',
    question: {
      uz: 'D2C (Direct-to-Consumer) savdo kanalining ulgurji vositachilarga nisbatan asosiy ustunligi nimada?',
      ru: 'В чем главное преимущество прямого канала D2C перед продажей через оптовых посредников?',
      en: 'What is the main advantage of Direct-to-Consumer (D2C) sales over wholesale middlemen?',
    },
    options: {
      uz: ['To‘liq marja o‘zingizda qoladi va yakuniy mijoz bazasi bilan bevosita aloqa bo‘ladi', 'Logistika umuman kerak bo‘lmaydi', 'Reklama shart emas', 'Bir kunda 10 ming do‘konga kiriladi'],
      ru: ['Сохранение полной маржи и прямой доступ к базе и отзывам конечных покупателей', 'Отсутствие доставки', 'Не нужен маркетинг', 'Отказ от кассовых чеков'],
      en: ['Retaining full retail margin while owning direct customer data and relationships', 'Zero fulfillment needed', 'Zero marketing required', 'Exemption from return laws'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'D2C da vositachi ustamasi kompaniyada qoladi va CRM orqali qayta sotuv yo‘lga qo‘yiladi.',
      ru: 'В D2C производитель зарабатывает розничную маржу и напрямую управляет LTV клиента.',
      en: 'D2C maximizes unit margin and first-party customer ownership.',
    },
    hint: {
      uz: 'Vositachisiz sotganda nima tejaladi?',
      ru: 'Маржа и прямой контакт с покупателем.',
      en: 'Full margin + direct buyer data.',
    },
  },
  {
    id: 'm8-q7',
    topicId: 'm8',
    isCalculation: true,
    question: {
      uz: 'Hisob-kitob: Do‘kon 80 000 so‘mlik buyurtmaga ham bepul kuryer qo‘ydi. Tovar tannarxi 52 000 so‘m, kuryer xarajati 25 000 so‘m, CAC 15 000 so‘m. Buyurtma natijasi qanday?',
      ru: 'Расчет: Чек заказа — 80 000 сумов (закупка 52 000). Бесплатный для клиента курьер стоит магазину 25 000, CAC — 15 000 сумов. Итог заказа?',
      en: 'Calculation: An 80,000 UZS order (52,000 UZS COGS) gets free courier shipping costing the merchant 25,000 UZS, plus 15,000 UZS CAC. Net result?',
    },
    options: {
      uz: ['−12 000 so‘m zarar! (Bepul yetkazish faqat minimal chek chegarasidan berilishi shart)', '+28 000 so‘m foyda', '+3 000 so‘m foyda', '0 so‘m'],
      ru: ['−12 000 сумов убытка! (Нужен порог минимального заказа для бесплатной доставки)', '+28 000 сумов прибыли', '+3 000 сумов прибыли', '0 сумов'],
      en: ['−12,000 UZS loss! (Requires a minimum order value threshold)', '+28,000 UZS profit', '+3,000 UZS profit', '0 UZS'],
    },
    correctIndex: 0,
    explanation: {
      uz: '80 000 − 52 000 − 25 000 − 15 000 = −12 000 so‘m zarar.',
      ru: '80 − 52 − 25 − 15 = −12 тыс. сумов убытка на каждом мелком заказе.',
      en: '80k − 52k − 25k − 15k = −12,000 UZS loss.',
    },
    hint: {
      uz: '80 mingdan barcha 3 xarajatni ayiring.',
      ru: 'Вычтите из 80 тыс. себестоимость, курьера и CAC.',
      en: 'Subtract 52k, 25k, and 15k from 80k.',
    },
  },
  {
    id: 'm8-q8',
    topicId: 'm8',
    question: {
      uz: 'Targetlangan raqamli reklamaning ko‘cha bilbordidan asosiy ustunligi nimada?',
      ru: 'В чем главное преимущество таргетированной рекламы перед уличным билбордом?',
      en: 'What is the core advantage of digital Targeted Ads over a roadside billboard?',
    },
    options: {
      uz: [
        'Aniq yosh, hudud va qiziqishdagi segmentga ko‘rsatish hamda har bir klik/lid narxini aniq o‘lchash imkoni',
        'Internetsiz ishlashi',
        'Faqat 1 kishiga ko‘rinishi',
        'Video qo‘yib bo‘lmasligi',
      ],
      ru: [
        'Точный показ целевому сегменту (гео, интересы), малый бюджет теста и точная аналитика стоимости заявки',
        'Работа без интернета',
        'Невозможность остановить рекламу',
        'Гарантия 100% покупки каждым прохожим',
      ],
      en: [
        'Precision audience filtering, low test budgets, and exact click-to-lead ROI tracking',
        'Works offline without smartphones',
        'Cannot be paused once launched',
        'Bans video creatives',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Target reklama byudjetni aniq maqsadli mijozga yo‘naltiradi va CAC ni o‘lchaydi.',
      ru: 'Таргет исключает переплату за нецелевую аудиторию и оцифровывает конверсию.',
      en: 'Granular targeting and conversion tracking eliminate blind ad spend.',
    },
    hint: {
      uz: 'Aniq nishon + raqamli analitika.',
      ru: 'Точность сегментации и измеримость.',
      en: 'Precision targeting + measurable analytics.',
    },
  },
  {
    id: 'm8-q9',
    topicId: 'm8',
    question: {
      uz: 'Oziq-ovqat va dori logistikasida “Sovuq zanjir” (Cold Chain) nimani anglatadi?',
      ru: 'Что означает «Холодовая цепь» (Cold Chain) в логистике продуктов и лекарств?',
      en: 'In food and pharma logistics, what does maintaining the "Cold Chain" mean?',
    },
    options: {
      uz: [
        'Ombordan to transport va xaridorgacha talab etilgan harorat rejimini uzluksiz saqlash',
        'Faqat qishda sotish',
        'Muzlatkichni tunda o‘chirib qo‘yish',
        'Sovuq qo‘ng‘iroqlar qilish',
      ],
      ru: [
        'Непрерывное соблюдение температурного режима от цеха и рефрижератора до витрины и клиента',
        'Торговля только зимой',
        'Хранение на улице',
        'Отключение холодильников на ночь',
      ],
      en: [
        'Unbroken temperature-controlled storage and refrigerated transit from production to delivery',
        'Selling only in winter',
        'Turning off freezers overnight',
        'Cold-calling corporate leads',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Harorat zanjiri uzilsa mahsulot buziladi va iste’molchi salomatligiga xavf tug‘diradi.',
      ru: 'Термосумки и рефрижераторы сохраняют свежесть и безопасность продукции.',
      en: 'Continuous refrigeration safeguards product quality and consumer health.',
    },
    hint: {
      uz: 'Harorat nazorati zanjiri.',
      ru: 'Контроль температуры при перевозке.',
      en: 'Unbroken temperature control.',
    },
  },
  {
    id: 'm8-q10',
    topicId: 'm8',
    question: {
      uz: 'Sog‘lom biznesda LTV (mijoz keltirgan umrbod yalpi foyda) va CAC nisbati kamida qanday bo‘lishi tavsiya etiladi?',
      ru: 'Какое соотношение LTV к CAC считается здоровым эталоном для масштабирования бизнеса?',
      en: 'What benchmark LTV : CAC ratio signals healthy, scalable unit economics?',
    },
    options: {
      uz: ['LTV ≥ 3 × CAC', 'LTV = 0,5 × CAC', 'CAC > LTV', 'LTV = 0'],
      ru: ['LTV ≥ 3 × CAC', 'CAC вдвое больше LTV', 'LTV = 0', 'Не имеет значения'],
      en: ['LTV ≥ 3 × CAC', 'LTV = 0.5 × CAC', 'CAC > LTV', 'Irrelevant'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'LTV kamida 3 barobar CAC dan katta bo‘lganda marketing, operatsion xarajat va sof foyda to‘liq qoplanadi.',
      ru: 'Пропорция 3:1 и выше позволяет прибыльно масштабировать рекламу.',
      en: 'A 3:1+ LTV:CAC ratio funds acquisition, overhead, and compounding profit.',
    },
    hint: {
      uz: '3 ga 1 nisbati.',
      ru: 'Эталон 3 к 1.',
      en: '3:1 gold standard.',
    },
  },
];

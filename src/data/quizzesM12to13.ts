import { QuizQuestion } from '../types';

export const QUIZ_M12_M13: QuizQuestion[] = [
  // ==================== M12: Foyda va rentabellik (10 questions) ====================
  {
    id: 'm12-q1',
    topicId: 'm12',
    question: {
      uz: 'Foyda va zararlar hisobotida (P&L) "Yalpi foyda" (Gross Profit) qanday hisoblanadi?',
      ru: 'Как рассчитывается показатель «Валовая прибыль» (Gross Profit) в отчете о прибылях и убытках (P&L)?',
      en: 'How is Gross Profit calculated on a standard Profit & Loss (P&L) statement?',
    },
    options: {
      uz: [
        'Sof tushum (Revenue, QQS siz) − Sotilgan mahsulotning bevosita tannarxi (COGS)',
        'Sof tushum − Barcha soliqlar va dividendlar',
        'Kassadagi pul qoldig‘i + Bank krediti',
        'Operatsion foyda + Ofis ijarasi',
      ],
      ru: [
        'Чистая выручка (без НДС) − Прямая себестоимость реализованной продукции (COGS)',
        'Выручка − Все налоги, проценты по кредитам и дивиденды',
        'Остаток наличных в кассе + Уставный капитал',
        'Чистая прибыль + Административные оклады',
      ],
      en: [
        'Net Revenue (excluding VAT) − Cost of Goods Sold (COGS)',
        'Revenue − All corporate income taxes and shareholder dividends',
        'Ending bank cash balance + Loan proceeds',
        'Operating Profit + Office rent',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Yalpi foyda mahsulotni ishlab chiqarish yoki ulgurji xarid qilish bo‘yicha bevosita xarajatlar (COGS) chegirilgandan keyin korxonada ma’muriy, marketing, kredit va soliqlarni qoplash uchun qancha mablag‘ qolishini ko‘rsatadi.',
      ru: 'Валовая прибыль отражает эффективность основного продукта до вычета коммерческих и управленческих расходов (OPEX).',
      en: 'Gross Profit measures unit production/merchandising profitability before deducting operating overhead (OPEX), interest, and taxes.',
    },
    hint: {
      uz: 'P&L pog‘onasining eng birinchi ayirmasini (Tushum minus COGS) eslang.',
      ru: 'Первая ступень отчета P&L: Выручка минус прямая себестоимость.',
      en: 'First step down the P&L waterfall: Revenue minus direct COGS.',
    },
  },
  {
    id: 'm12-q2',
    topicId: 'm12',
    isCalculation: true,
    question: {
      uz: 'Korxona oylik ko‘rsatkichlari: Tushum (QQSsiz) = 200 mln so‘m, COGS = 110 mln so‘m, OPEX (ijara, maosh, reklama) = 50 mln so‘m, Amortizatsiya = 5 mln so‘m, Kredit foizi = 5 mln so‘m, Foyda solig‘i (15%) = 4,5 mln so‘m. Sof foyda (Net Profit) qancha?',
      ru: 'Показатели за месяц: Выручка = 200 млн сум, COGS = 110 млн, OPEX = 50 млн, Амортизация = 5 млн, Проценты по кредиту = 5 млн, Налог на прибыль (15%) = 4,5 млн сум. Чему равна Чистая прибыль (Net Profit)?',
      en: 'Monthly P&L figures: Net Revenue = 200M UZS, COGS = 110M, OPEX = 50M, Depreciation = 5M, Loan Interest = 5M, Corporate Income Tax (15%) = 4.5M UZS. What is Net Profit?',
    },
    options: {
      uz: ['25,5 mln so‘m', '90 mln so‘m', '40 mln so‘m', '30 mln so‘m'],
      ru: ['25,5 млн сум', '90 млн сум', '40 млн сум', '30 млн сум'],
      en: ['25.5M UZS', '90M UZS', '40M UZS', '30M UZS'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Yalpi foyda = 200 − 110 = 90 mln. EBITDA = 90 − 50 = 40 mln. EBIT = 40 − 5 = 35 mln. Soliqdan oldingi foyda (EBT) = 35 − 5 = 30 mln. Sof foyda = 30 − 4,5 = 25,5 mln so‘m (ROS = 12,75%).',
      ru: 'По ступеням P&L: 200 − 110 (COGS) − 50 (OPEX) − 5 (Аморт.) − 5 (Проценты) = 30 млн EBT. Вычитаем налог 4,5 млн = 25,5 млн сум чистой прибыли.',
      en: 'Waterfall: 200M − 110M (COGS) = 90M Gross; − 50M OPEX = 40M EBITDA; − 5M Depr. = 35M EBIT; − 5M Interest = 30M EBT; − 4.5M Tax = 25.5M UZS Net Profit.',
    },
    hint: {
      uz: '200 dan barcha xarajatlar, amortizatsiya, kredit foizi va foyda solig‘ini ketma-ket ayiring.',
      ru: 'Пройдите водопад P&L сверху вниз до последней строки.',
      en: 'Subtract COGS, OPEX, Depreciation, Interest, and Tax sequentially from 200M.',
    },
  },
  {
    id: 'm12-q3',
    topicId: 'm12',
    question: {
      uz: 'EBITDA ko‘rsatkichi tahlilchilar va investorlar uchun nima sababdan muhim?',
      ru: 'Почему инвесторы и банки активно используют показатель EBITDA при оценке бизнеса?',
      en: 'Why do investors and commercial lenders scrutinize EBITDA when comparing businesses?',
    },
    options: {
      uz: [
        'U turli soliq rejimlari, kredit yuki va eskirish usullaridan xoli holda biznesning sof operatsion pul ishlash quvvatini ko‘rsatadi',
        'U faqat xodimlarning sonini o‘lchaydi',
        'U korxonaning davlat oldidagi soliq qarzini anglatadi',
        'U faqat zarar ko‘rayotgan korxonalarda mavjud bo‘ladi',
      ],
      ru: [
        'Он очищает операционный результат от различий в налоговых режимах, долговой нагрузке и правилах амортизации, позволяя объективно сравнивать компании',
        'Он показывает сумму штрафов за год',
        'Он заменяет собой уставный капитал',
        'Он равен общей выручке с НДС',
      ],
      en: [
        'It isolates core operating cash-generating performance independent of financing structure, tax jurisdiction, and accounting depreciation schedules',
        'It measures employee headcount growth',
        'It equals gross revenue inclusive of VAT',
        'It tracks unpaid tax penalties',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Ikki bir xil ishlab chiqarish sexining biri kredit olgan, ikkinchisi o‘z binosida ishlashi mumkin — EBITDA ularning operatsion samaradorligini teng sharoitda taqqoslash imkonini beradi.',
      ru: 'EBITDA (прибыль до вычета процентов, налогов и амортизации) служит базой для оценки стоимости бизнеса (например, мультипликатор 4–6x EBITDA).',
      en: 'EBITDA enables apples-to-apples operational benchmarking and valuation multiples (e.g., EV/EBITDA) across differently financed firms.',
    },
    hint: {
      uz: 'Earnings Before Interest, Taxes, Depreciation & Amortization so‘zlarini tarjima qiling.',
      ru: 'Прибыль ДО процентов, налогов и амортизации.',
      en: 'Look at what EBITDA strips out: Interest, Taxes, Depreciation, and Amortization.',
    },
  },
  {
    id: 'm12-q4',
    topicId: 'm12',
    isCalculation: true,
    question: {
      uz: 'Tadbirkor qadoqlash liniyasiga 300 mln so‘m sarmoya kiritdi va yil davomida barcha xarajat hamda soliqlardan keyin 90 mln so‘m sof foyda oldi. Yillik ROI (investitsiya rentabelligi) necha foiz?',
      ru: 'Предприниматель инвестировал в упаковочную линию 300 млн сум и за год получил 90 млн сум чистой прибыли. Чему равен годовой ROI?',
      en: 'An entrepreneur invested 300M UZS in a packaging line and earned 90M UZS in annual net profit. What is the annual Return on Investment (ROI)?',
    },
    options: {
      uz: ['30%', '3,33%', '70%', '210%'],
      ru: ['30%', '3,33%', '70%', '210%'],
      en: ['30%', '3.33%', '70%', '210%'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'ROI = (Sof foyda / Kiritilgan investitsiya) × 100% = (90 / 300) × 100% = 30%. Loyiha o‘zini 300 / 90 ≈ 3,33 yilda (40 oyda) qoplaydi.',
      ru: 'ROI = (90 млн / 300 млн) × 100% = 30% годовых, а простой срок окупаемости составляет 3,33 года.',
      en: 'Annual ROI = (90M / 300M) × 100% = 30%, corresponding to a simple payback period of 3.33 years.',
    },
    hint: {
      uz: 'Sof foydani (90) investitsiya summasiga (300) bo‘lib 100% ga ko‘paytiring.',
      ru: 'Разделите годовую чистую прибыль (90) на сумму инвестиций (300).',
      en: 'Divide annual Net Profit (90M) by Investment Capital (300M).',
    },
  },
  {
    id: 'm12-q5',
    topicId: 'm12',
    question: {
      uz: 'O‘zbekistonda so‘mdagi xavfsiz bank omonatlari yillik 19–21% daromad berayotgan sharoitda, yangi biznes loyihasi yillik atigi 12% ROI ko‘rsatsa, iqtisodiy nuqtayi nazardan bu nimani anglatadi?',
      ru: 'Если банковский вклад в сумах приносит 19–21% годовых без операционного риска, а бизнес-проект показывает прогнозируемый ROI всего 12% годовых, какой вывод верен?',
      en: 'If risk-free UZS bank deposits yield ~19–21% annually while a proposed business venture projects only 12% annual ROI in UZS, what is the rational economic conclusion?',
    },
    options: {
      uz: [
        'Loyiha muqobil xarajat (Opportunity Cost) va tadbirkorlik tavakkalchiligi mukofotini oqlamaydi — biznes modeli yoki marjani qayta ko‘rib chiqish zarur',
        '12% foyda 20% omonatdan ko‘proq pul keltiradi',
        'Muqobil daromad stavkasi tadbirkorlikda hech qachon hisobga olinmaydi',
        'Bank krediti olib shu loyihaga kiritish yanada foydali bo‘ladi',
      ],
      ru: [
        'Проект не покрывает альтернативную доходность капитала (Opportunity Cost) и премию за предпринимательский риск — модель требует доработки',
        '12% в бизнесе математически больше, чем 20% на депозите',
        'Стоит взять кредит под 24% для вложения в бизнес с доходностью 12%',
        'Альтернативные издержки существуют только в учебниках, а не в реальной жизни',
      ],
      en: [
        'The project fails to beat the risk-free Opportunity Cost benchmark and offers negative risk premium; its unit economics must be improved before investing',
        '12% return generates more wealth than a 20% deposit on the same capital',
        'Borrowing at 24% interest to earn 12% ROI creates positive leverage',
        'Opportunity cost is irrelevant to capital allocation',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Tadbirkorlik xavf bilan bog‘liq bo‘lgani sababli biznesning kutilayotgan rentabelligi (ROE/ROI) risksiz muqobil stavkadan (bank depozitidan) sezilarli yuqori bo‘lishi kerak.',
      ru: 'Капитал всегда сравнивается с безрисковой альтернативой: предприниматель должен зарабатывать ставку депозита плюс премию за риск.',
      en: 'Sound capital allocation requires expected business ROE/ROI to exceed passive deposit rates plus an entrepreneurial risk premium.',
    },
    hint: {
      uz: 'Muqobil tanlov qiymati (Opportunity Cost) tushunchasini qo‘llang.',
      ru: 'Сравните доходность с риском (12%) и безрисковый депозит (20%).',
      en: 'Compare risky 12% return against passive 20% bank deposit Opportunity Cost.',
    },
  },
  {
    id: 'm12-q6',
    topicId: 'm12',
    question: {
      uz: 'ROS (Return on Sales — Sotuv rentabelligi) va Kapital aylanuvchanligi (Asset Turnover) nisbati bo‘yicha supermarket va zargarlik saloni qanday farqlanadi?',
      ru: 'Чем отличается бизнес-модель продуктового супермаркета от ювелирного бутика с точки зрения рентабельности продаж (ROS) и оборачиваемости запасов?',
      en: 'How does a grocery supermarket differ from a luxury jewelry boutique in terms of Return on Sales (ROS) and inventory turnover (DuPont logic)?',
    },
    options: {
      uz: [
        'Supermarket past sof marja (ROS 3–5%), ammo juda tez aylanuvchanlik hisobiga; zargarlik esa sekin aylanuvchanlik, ammo yuqori marja (ROS 20–35%) hisobiga kapital rentabelligiga erishadi',
        'Supermarket non va sutdan 90% sof foyda oladi',
        'Zargarlik do‘konida oltin uzuklar har kuni minglab dona sotiladi va 1% marja qo‘yiladi',
        'Har ikkala sohada marja va aylanuvchanlik mutlaqo bir xil',
      ],
      ru: [
        'Супермаркет зарабатывает за счет низкой маржи (ROS 3–5%) и высокой скорости оборота товара, а ювелирный бутик — за счет высокой маржи при редких продажах',
        'Продуктовый магазин имеет чистую рентабельность продаж 80%',
        'Ювелирный салон оборачивает весь склад каждые 24 часа с наценкой 2%',
        'Оборачиваемость никак не влияет на итоговую доходность капитала (ROE)',
      ],
      en: [
        'Supermarkets earn strong ROE via thin net margins (3–5% ROS) multiplied by rapid inventory turnover, whereas jewelry boutiques rely on high margins with slower turnover',
        'Grocery supermarkets operate on 80% net profit margins',
        'Luxury jewelers turn over their entire vault daily at a 2% markup',
        'Asset turnover has no impact on Return on Equity',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'DuPont formulasiga ko‘ra, umumiy kapital samaradorligi = Sof marja (ROS) × Aktivlar aylanuvchanligi × Moliyaviy richag. Past marjali savdoda aylanish tezligi hal qiluvchi omildir.',
      ru: 'Формула Дюпона показывает, что высокую доходность на капитал (ROE) дают либо высокая маржа, либо быстрая оборачиваемость активов.',
      en: 'DuPont analysis demonstrates that Return on Assets/Equity is driven by Net Profit Margin multiplied by Asset Turnover.',
    },
    hint: {
      uz: 'Supermarketda tovar haftada necha marta aylanadi, zargarlikda-chi?',
      ru: 'Вспомните модель Дюпона: Маржа × Оборачиваемость.',
      en: 'Apply DuPont logic: Margin × Turnover.',
    },
  },
  {
    id: 'm12-q7',
    topicId: 'm12',
    question: {
      uz: 'O‘zbekiston Soliq kodeksiga ko‘ra, MChJ sof foydasidan jismoniy shaxs bo‘lgan O‘zbekiston rezidenti ta’sischisiga dividend to‘langanda necha foiz soliq ushlab qolinadi?',
      ru: 'По какой базовой ставке удерживается налог у источника выплаты при распределении дивидендов из чистой прибыли ООО учредителю — физлицу резиденту Узбекистана?',
      en: 'Under Uzbekistan’s Tax Code, what withholding tax rate applies when an LLC distributes net profit dividends to a resident individual founder?',
    },
    options: {
      uz: ['5%', '12%', '15%', '25%'],
      ru: ['5%', '12%', '15%', '25%'],
      en: ['5%', '12%', '15%', '25%'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'MChJ avval o‘z soliq rejimiga ko‘ra soliqlarini to‘lab sof foydani shakllantiradi; ta’sischi (rezident) ga dividend yechilganda to‘lov manbaida 5% dividend solig‘i ushlab qolinadi.',
      ru: 'Дивиденды выплачиваются строго из чистой прибыли после налогообложения компании, а ставка налога на дивиденды для резидентов РУз составляет 5%.',
      en: 'Dividends are distributed from post-tax net earnings and are subject to a 5% withholding tax for Uzbekistan tax residents.',
    },
    hint: {
      uz: 'Ish haqidan olinadigan 12% JShDS dan ancha past, imtiyozli bir xonali stavkani eslang.',
      ru: 'Для резидентов действует льготная ставка ниже стандартных 12% НДФЛ.',
      en: 'Recall the preferential single-digit resident dividend withholding rate in Uzbekistan.',
    },
  },
  {
    id: 'm12-q8',
    topicId: 'm12',
    isCalculation: true,
    question: {
      uz: 'Korxona sof foydasi 120 mln so‘m. Ta’sischilar qaroriga binoan sof foydaning 60 foizi biznesni kengaytirishga qayta yo‘naltirildi (Reinvestment), qolgan 40 foizi dividend qilib taqsimlandi (rezident ta’sischiga). Ta’sischi qo‘liga 5% dividend solig‘idan so‘ng qancha sof pul oladi?',
      ru: 'Чистая прибыль ООО — 120 млн сум. 60% направлено на реинвестирование, а 40% — на выплату дивидендов учредителю-резиденту. Сколько чистых денег на руки получит учредитель после удержания 5% налога на дивиденды?',
      en: 'An LLC earned 120M UZS net profit. Founders reinvest 60% and distribute 40% as dividends to a resident owner. After 5% dividend withholding tax, how much net cash does the founder receive?',
    },
    options: {
      uz: ['45,6 mln so‘m', '48,0 mln so‘m', '72,0 mln so‘m', '42,24 mln so‘m'],
      ru: ['45,6 млн сум', '48,0 млн сум', '72,0 млн сум', '42,24 млн сум'],
      en: ['45.6M UZS', '48.0M UZS', '72.0M UZS', '42.24M UZS'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Dividendga ajratilgan summa = 120 mln × 40% = 48 mln so‘m. Dividend solig‘i (5%) = 48 × 0,05 = 2,4 mln so‘m. Qo‘lga tegadigan sof dividend = 48 − 2,4 = 45,6 mln so‘m (72 mln esa korxona rivojiga qoldi).',
      ru: 'Начисленные дивиденды = 120 × 0,4 = 48 млн сум. Удерживаем 5% налог (2,4 млн сум) и получаем 45,6 млн сум к выплате.',
      en: 'Gross dividend = 120M × 40% = 48M UZS. Less 5% tax (2.4M UZS) = 45.6M UZS net payout to founder (while 72M UZS stays reinvested).',
    },
    hint: {
      uz: 'Avval 120 mln ning 40 foizini toping (48 mln), so‘ng undan 5% chegirib tashlang.',
      ru: 'Найдите 40% от 120 млн (48 млн) и вычтите 5% налога.',
      en: 'Take 40% of 120M (48M) and deduct 5% withholding tax.',
    },
  },
  {
    id: 'm12-q9',
    topicId: 'm12',
    question: {
      uz: 'Operatsion richag (Operating Leverage) yuqori bo‘lgan biznesning xususiyati qanday?',
      ru: 'Какой особенностью обладает компания с высоким операционным рычагом (высокой долей постоянных затрат)?',
      en: 'What characterizes a business with high Operating Leverage (high fixed costs, low variable costs)?',
    },
    options: {
      uz: [
        'Zararsizlik nuqtasidan o‘tgach sotuv hajmining kichik o‘sishi sof foydaning keskin ko‘payishiga olib keladi, lekin sotuv tushganda zarar ham tez kattalashadi',
        'Sotuv qancha o‘zgarmasin foyda har doim bir xil qoladi',
        'Doimiy xarajatlar umuman mavjud bo‘lmaydi',
        'Zararsizlik nuqtasi birinchi sotilgan donadayoq yopiladi',
      ],
      ru: [
        'После прохождения точки безубыточности небольшой прирост выручки дает кратный рост прибыли, но при падении спроса убытки тоже растут быстрее',
        'Прибыль вообще не зависит от объема продаж',
        'У компании полностью отсутствуют постоянные расходы',
        'Риск убытков в кризис равен нулю',
      ],
      en: [
        'Once past break-even, incremental sales flow mostly to net profit (amplifying upside), whereas revenue drops trigger steep losses',
        'Net profit stays completely flat regardless of sales volume',
        'Fixed overhead is zero in all months',
        'Break-even occurs at just 1 unit sold',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Mehmonxona, aviakompaniya yoki o‘quv markazi doimiy xarajatlarni qoplab bo‘lgach, har bir qo‘shimcha mijoz tushumining katta qismi to‘g‘ridan-to‘g‘ri sof foydaga aylanadi.',
      ru: 'Отели, авиакомпании и IT-платформы имеют высокий операционный рычаг: заполнение дополнительных мест почти не увеличивает издержки.',
      en: 'Airlines, hotels, and SaaS companies exhibit high operating leverage because serving extra customers above break-even incurs minimal variable cost.',
    },
    hint: {
      uz: 'Mehmonxonada 70% xona xarajatlarni qoplasa, 85% to‘lganda nima bo‘lishini o‘ylang.',
      ru: 'Вспомните экономику отеля или самолета с высокими постоянными расходами.',
      en: 'Think of a hotel or airline once fixed operating expenses are covered.',
    },
  },
  {
    id: 'm12-q10',
    topicId: 'm12',
    question: {
      uz: 'Kichik tadbirkorlarning shaxsiy ro‘zg‘or pulini va korxona kassasini aralashtirib yuborishi qanday salbiy oqibatga olib keladi?',
      ru: 'К чему приводит частая ошибка малого бизнеса — смешивание личного кошелька собственника и кассы предприятия?',
      en: 'What is the consequence of commingling the founder’s personal household expenses with company cash accounts?',
    },
    options: {
      uz: [
        'Haqiqiy sof foyda va rentabellik buzib ko‘rsatiladi, aylanma mablag‘ yashirincha yeb qo‘yiladi hamda MChJda soliq va korporativ huquqiy xatarlar kelib chiqadi',
        'Buxgalteriya hisobi yanada aniq va oson bo‘ladi',
        'Banklar bunday korxonaga eng arzon kredit ajratadi',
        'Investorlar bunday odatni yuqori baholaydi',
      ],
      ru: [
        'Искажается реальная рентабельность (P&L), незаметно проедается оборотный капитал и возникают налоговые риски при выводе средств ООО',
        'Упрощается финансовый аудит перед привлечением инвестора',
        'Повышается кредитный рейтинг компании в банке',
        'Никаких негативных последствий нет',
      ],
      en: [
        'It distorts true P&L profitability, silently drains working capital, deters investors, and creates tax/compliance liabilities for an LLC',
        'It simplifies financial audits and due diligence',
        'It improves commercial bank credit scoring',
        'It doubles operating margins automatically',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Ta’sischi korxonada direktor bo‘lib ishlasa o‘ziga rasmiy maosh belgilashi, mulkdor sifatida esa faqat sof foydadan belgilangan tartibda dividend olishi moliyaviy intizom oltin qoidasidir.',
      ru: 'Финансовая гигиена требует четкого разделения: зарплата за труд директора и дивиденды из подтвержденной чистой прибыли.',
      en: 'Financial hygiene requires strict separation of entity accounts: pay a market salary for operational management and declare dividends only from verified net profits.',
    },
    hint: {
      uz: 'Yuridik shaxs (MChJ) mulki va shaxsiy hamyon chegarasini eslang.',
      ru: 'Деньги в кассе компании принадлежат бизнесу, а не личному бюджету.',
      en: 'Company cash belongs to the operating entity, not a personal piggy bank.',
    },
  },

  // ==================== M13: Biznes-reja tuzish (10 questions) ====================
  {
    id: 'm13-q1',
    topicId: 'm13',
    question: {
      uz: 'Biznes-rejaning "Qisqacha rezume" (Executive Summary) bo‘limi hujjatning eng boshida joylashsa-da, amaliyotda qachon yozilishi tavsiya etiladi?',
      ru: 'Хотя раздел «Резюме проекта» (Executive Summary) идет первым в бизнес-плане, в какой момент его рекомендуется писать?',
      en: 'Although the Executive Summary appears on page one of a Business Plan, when should it actually be written?',
    },
    options: {
      uz: [
        'Barcha bozor, ishlab chiqarish va moliyaviy hisob-kitob bo‘limlari to‘liq tayyor bo‘lgandan so‘ng eng oxirida',
        'Hali hech qanday raqam va bozor tahlili hisoblanmasdan oldin taxminan',
        'Faqat logotip chizilgan kuni',
        'Rezumeni umuman yozmaslik kerak',
      ],
      ru: [
        'В самую последнюю очередь, когда полностью готовы маркетинговый, производственный и финансовый разделы с точными цифрами',
        'До начала любых расчетов и анализа рынка наугад',
        'Его пишет сотрудник банка вместо предпринимателя',
        'Резюме вообще не включают в бизнес-план',
      ],
      en: [
        'At the very end, once market sizing, operations, CapEx, and financial projections (NPV, IRR, Payback) are finalized',
        'Before doing any market research or financial math',
        'Never — executive summaries are obsolete',
        'Only after the loan has already been repaid',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Investor yoki bank kredit qo‘mitasi dastlab 1–2 betlik Rezumeni o‘qiydi; unda aniq CapEx, kutilayotgan tushum, sof foyda va o‘zini qoplash muddati barcha hisob-kitoblardan xulosa qilib keltiriladi.',
      ru: 'Резюме — это концентрат всего документа (суть, сумма инвестиций, выручка, окупаемость), поэтому его формируют на базе готовой финмодели.',
      en: 'An Executive Summary distills the entire plan’s validated numbers into 1–2 compelling pages, so it can only be drafted accurately after the underlying model is complete.',
    },
    hint: {
      uz: 'Yakuniy raqamlarni bilmasdan turib qisqa xulosa yozib bo‘ladimi?',
      ru: 'Можно ли указать точную окупаемость и IRR до составления финмодели?',
      en: 'You cannot summarize accurate CapEx and payback figures before calculating them.',
    },
  },
  {
    id: 'm13-q2',
    topicId: 'm13',
    question: {
      uz: 'Bankdan investitsion kredit olish uchun yoziladigan biznes-reja bilan venchur investorga mo‘ljallangan startap biznes-rejasining asosiy urg‘usi nimasi bilan farq qiladi?',
      ru: 'Чем отличается главный фокус бизнес-плана для коммерческого банка от бизнес-плана для венчурного инвестора?',
      en: 'How does the primary focus of a Business Plan prepared for a commercial bank differ from one pitched to a venture capital investor?',
    },
    options: {
      uz: [
        'Bankni barqaror pul oqimi (DSCR), past xatar va likvid garov qiziqtirsa; venchur investorni bozorning karrasiga (10x) o‘sish salohiyati va masshtablashuv qiziqtiradi',
        'Bank garov so‘ramaydi, venchur investor esa kvartirani garovga oladi',
        'Bankka faqat reklama shiori yetarli, moliyaviy jadval kerak emas',
        'Ikkalasining ham talabi mutlaqo bir xil',
      ],
      ru: [
        'Банку важны предсказуемый денежный поток для погашения графика, твердый залог и низкий риск; венчурному инвестору — кратный рост стоимости доли и масштабируемость',
        'Банк забирает 50% доли в ООО, а инвестор требует залог автомобиля',
        'Банк вообще не смотрит на финансовые таблицы',
        'Никакой разницы в акцентах не существует',
      ],
      en: [
        'Banks prioritize predictable debt-service cash flow (DSCR), downside protection, and hard collateral, whereas VC investors seek rapid scalability and 10x equity upside',
        'Banks demand equity shares while VCs require real-estate mortgages',
        'Banks ignore financial projections completely',
        'Both audiences evaluate identical criteria',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Bankning daromadi qat’iy foiz stavkasi bilan chegaralangan, shu bois u kredit qaytmaslik xataridan qochadi; ulushdor investor esa kompaniya qiymati o‘sishidan daromad topadi.',
      ru: 'Банк не участвует в сверхприбыли компании, поэтому оценивает надежность возврата тела долга и процентов.',
      en: 'Lenders have capped upside (interest) and focus on repayment certainty, while equity investors underwrite asymmetric growth potential.',
    },
    hint: {
      uz: 'Qarz beruvchi (kreditor) va ulushdor (investor) maqsadini solishtiring.',
      ru: 'Подумайте, на чем зарабатывает банк (проценты) и на чем венчурный фонд (рост капитализации).',
      en: 'Contrast fixed-interest debt protection vs equity valuation growth.',
    },
  },
  {
    id: 'm13-q3',
    topicId: 'm13',
    question: {
      uz: 'Biznes-rejadagi CAPEX va OPEX tushunchalari o‘rtasidagi farq nimada?',
      ru: 'В чем разница между бюджетами CAPEX и OPEX в инвестиционном плане проекта?',
      en: 'In a Business Plan’s financial model, what is the distinction between CAPEX and OPEX?',
    },
    options: {
      uz: [
        'CAPEX — uzoq muddatli aktivlar (bino ta’miri, dastgoh, texnika) ga kapital xarajatlar; OPEX — kundalik joriy faoliyat (ijara, maosh, kommunal, reklama) xarajatlari',
        'CAPEX — soliq jarimalari; OPEX — bank omonatlari',
        'CAPEX har kuni to‘lanadi, OPEX 10 yilda bir marta to‘lanadi',
        'Ikkalasi ham faqat valyuta kursini bildiradi',
      ],
      ru: [
        'CAPEX — капитальные затраты на запуск и покупку основных средств; OPEX — регулярные ежемесячные операционные расходы бизнеса',
        'CAPEX — это расходы на рекламу в соцсетях, а OPEX — покупка завода',
        'CAPEX платят только ИП, а OPEX — только АО',
        'Это названия двух государственных банков',
      ],
      en: [
        'CAPEX covers upfront/long-term capital investments (machinery, fit-out, vehicles), while OPEX covers recurring monthly operating expenses (rent, payroll, marketing, utilities)',
        'CAPEX means daily office coffee; OPEX means buying a factory building',
        'CAPEX applies only to exporters; OPEX applies only to importers',
        'Both terms refer to shareholder dividends',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Startap yoki sexni ishga tushirishda nafaqat uskuna olishga (CAPEX), balki zararsizlik nuqtasiga chiqquncha dastlabki 3–6 oylik OPEX va aylanma mablag‘ zaxirasiga ham pul rejalashtirish shart!',
      ru: 'Частая ошибка новичков — потратить весь бюджет на ремонт и станки (CAPEX), забыв заложить оборотный капитал и OPEX на первые месяцы раскрутки.',
      en: 'A robust startup budget funds both initial CAPEX and working capital to cover early-month OPEX until break-even.',
    },
    hint: {
      uz: 'Capital Expenditure (kapital sarmoya) va Operating Expense (operatsion xarajat).',
      ru: 'Капитальные вложения против текущих операционных издержек.',
      en: 'Capital Expenditure vs Operating Expense.',
    },
  },
  {
    id: 'm13-q4',
    topicId: 'm13',
    question: {
      uz: 'Loyihaning Sof keltirilgan qiymati — NPV (Net Present Value) > 0 bo‘lishi nimani bildiradi?',
      ru: 'Что означает положительное значение чистой приведенной стоимости проекта (NPV > 0)?',
      en: 'What does a positive Net Present Value (NPV > 0) signify in investment appraisal?',
    },
    options: {
      uz: [
        'Pulning vaqt qiymati (diskont stavkasi) hisobga olinganda ham kelajakdagi pul oqimlari boshlang‘ich investitsiyani to‘liq qoplab, qo‘shimcha iqtisodiy qiymat yaratadi',
        'Loyiha mutlaqo zararli va uni darhol yopish kerak',
        'Loyihada hech qanday boshlang‘ich xarajat yo‘q',
        'Inflyatsiya va muqobil daromad nolga teng',
      ],
      ru: [
        'Будущие денежные потоки с учетом дисконтирования (стоимости денег во времени) полностью окупают стартовые инвестиции и создают дополнительную стоимость',
        'Проект убыточен и не возвращает вложенный капитал',
        'Проект никогда не выйдет на самоокупаемость',
        'Ставка дисконтирования отрицательна',
      ],
      en: [
        'Discounted future net cash flows exceed the initial capital outlay at the required hurdle rate, meaning the project creates net economic wealth',
        'The project destroys investor value and should be rejected',
        'Initial investment required is zero',
        'Time value of money is ignored',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Bugungi 100 mln so‘m 3 yildan keyingi 100 mln so‘mdan qadrliroqdir. NPV kelgusidagi oqimlarni diskont stavkasi orqali bugungi qiymatga keltirib baholaydi; NPV > 0 — loyiha moliyaviy jihatdan maqbul.',
      ru: 'В отличие от простой окупаемости, NPV учитывает инфляцию и альтернативную стоимость капитала во времени.',
      en: 'Because a soum today is worth more than a soum three years from now, NPV > 0 confirms the project beats its discount/hurdle rate.',
    },
    hint: {
      uz: 'Pulning vaqt qiymatini hisobga olganda musbat natija nimani anglatadi?',
      ru: 'Положительный NPV — зеленый свет для инвестиционного решения.',
      en: 'Positive NPV indicates value creation above the discount hurdle rate.',
    },
  },
  {
    id: 'm13-q5',
    topicId: 'm13',
    question: {
      uz: 'Biznes-rejadagi "Sezuvchanlik tahlili" (Sensitivity / Scenario Analysis) nima uchun tuziladi?',
      ru: 'Зачем в финансовой модели бизнес-плана проводят анализ чувствительности и три сценария (пессимистичный, базовый, оптимистичный)?',
      en: 'Why does a credible Business Plan include Sensitivity Analysis and three scenarios (Pessimistic, Base, Optimistic)?',
    },
    options: {
      uz: [
        'Sotuv 20% kam bo‘lsa yoki xomashyo 15% qimmatlashsa ham loyiha kreditni to‘lay olishi va yashab qolish chegarasini (stress-test) tekshirish uchun',
        'Hujjat sahifalari sonini sun’iy ko‘paytirish uchun',
        'Faqat eng ideal "pushti ko‘zoynak" prognozini ko‘rsatish uchun',
        'Soliq hisobotini yashirish uchun',
      ],
      ru: [
        'Чтобы проверить устойчивость бизнеса (стресс-тест) при падении продаж на 20–30%, росте цен на сырье или задержке запуска',
        'Просто для увеличения объема документа до 100 страниц',
        'Чтобы показать инвестору только идеальный фантастический результат',
        'Это требование дизайнера логотипа',
      ],
      en: [
        'To stress-test financial resilience if sales fall 20–30% short of plan, raw material costs rise, or launch timelines slip',
        'Merely to pad the document page count',
        'To present only best-case hockey-stick assumptions',
        'To avoid calculating break-even volume',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Tajribali bankir va investorlar birinchi navbatda Pessimistik ssenariyga qaraydi: agar og‘ir sharoitda ham korxona kassa uzilishiga tushmasa, demak loyiha pishiq hisoblangan.',
      ru: 'Реальность редко совпадает с идеальным планом — стресс-тест показывает запас выживаемости проекта.',
      en: 'Sophisticated lenders and investors underwrite the Pessimistic case first to verify downside survival.',
    },
    hint: {
      uz: 'Rejadagidek sotilmasa yoki xomashyo oshsa nima bo‘lishini oldindan sinash.',
      ru: 'Стресс-тест ключевых параметров модели (цена, объем, издержки).',
      en: 'Think of stress-testing price, volume, and input-cost shocks.',
    },
  },
  {
    id: 'm13-q6',
    topicId: 'm13',
    question: {
      uz: 'UNIDO metodologiyasiga ko‘ra "Ishlab chiqarish va operatsion reja" bo‘limida qaysi masalalar aniq ko‘rsatilishi shart?',
      ru: 'Какие параметры обязательно раскрываются в «Производственном / Операционном плане» по стандартам UNIDO?',
      en: 'Under UNIDO business planning standards, what details must the Operations & Production Plan specify?',
    },
    options: {
      uz: [
        'Joylashuv va bino talablari, texnologik zanjir va uskunalar quvvati, xomashyo yetkazib beruvchilar, kommunal quvvatlar hamda shtat jadvali',
        'Faqat Instagram sahifasining rangi va shriftlari',
        'Faqat raqobatchilarning biografiyasi',
        'Faqat xalqaro siyosiy yangiliklar sharhi',
      ],
      ru: [
        'Локация и помещения, технологический процесс, спецификация и мощность оборудования, поставщики сырья, энергоресурсы и штатное расписание',
        'Только рекламные слоганы и макеты визиток',
        'Только общие макроэкономические цитаты из интернета',
        'Личные хобби учредителей',
      ],
      en: [
        'Facility location, technological workflow, equipment capacity specs, verified raw material suppliers, utility requirements, quality control, and staffing schedule',
        'Social media color palettes and typography choices only',
        'Generic global macroeconomic trivia',
        'Founders’ personal hobbies',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'O‘zbekistonda ishlab chiqarish loyihalarida elektr quvvati (kVt), gaz/suv ulanishi, xomashyo uzluksizligi va dastgoh unumdorligi aniqlashtirilmasa, qog‘ozdagi sotuv rejasini amalda bajarib bo‘lmaydi.',
      ru: 'Без расчета реальной мощности линии, лимитов электроэнергии и логистики сырья любой план продаж остается фантазией.',
      en: 'Sales forecasts fail if bottlenecked by unverified machine throughput, power supply limits, or raw material lead times.',
    },
    hint: {
      uz: 'Mahsulot amalda qayerda, qanday dastgohda, qaysi xomashyo va kimlar tomonidan yaratiladi?',
      ru: 'Где, на каком оборудовании, из какого сырья и чьими руками создается продукт.',
      en: 'Focus on physical/operational execution: facility, machinery, inputs, utilities, and labor.',
    },
  },
  {
    id: 'm13-q7',
    topicId: 'm13',
    isCalculation: true,
    question: {
      uz: 'Tikuv sexini ochish uchun dastgoh va ta’mirga (CAPEX) 240 mln so‘m, dastlabki mato zaxirasi va 2 oylik aylanma mablag‘ga 60 mln so‘m sarflandi. Sex ishga tushgach har oyda o‘rtacha 25 mln so‘m sof pul oqimi keltirsa, oddiy o‘zini qoplash muddati (Simple Payback Period) qancha?',
      ru: 'На ремонт и станки (CAPEX) вложено 240 млн сум, в стартовый оборотный капитал — 60 млн сум. Проект генерирует чистый денежный поток 25 млн сум в месяц. Чему равен простой срок окупаемости (Payback Period)?',
      en: 'Launching a sewing workshop requires 240M UZS in CAPEX plus 60M UZS in initial working capital. Once operating, it generates 25M UZS in monthly net cash flow. What is the Simple Payback Period?',
    },
    options: {
      uz: ['12 oy (1 yil)', '9,6 oy', '24 oy', '6 oy'],
      ru: ['12 месяцев (1 год)', '9,6 месяца', '24 месяца', '6 месяцев'],
      en: ['12 months (1 year)', '9.6 months', '24 months', '6 months'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Jami boshlang‘ich investitsiya = CAPEX (240) + Aylanma kapital (60) = 300 mln so‘m. Payback = 300 mln / 25 mln = 12 oy.',
      ru: 'Совокупные стартовые инвестиции включают и CAPEX, и оборотный капитал: (240 + 60) / 25 = 12 месяцев.',
      en: 'Total initial capital outlay = 240M CAPEX + 60M working capital = 300M UZS. Payback = 300M / 25M per month = 12 months.',
    },
    hint: {
      uz: 'Jami sarmoyani (240 + 60) oylik sof oqimga (25) bo‘ling.',
      ru: 'Сложите CAPEX и оборотный капитал (240 + 60) и разделите на 25 млн.',
      en: 'Sum total upfront investment (240M + 60M = 300M) and divide by 25M/month.',
    },
  },
  {
    id: 'm13-q8',
    topicId: 'm13',
    question: {
      uz: 'Biznes-reja tuzishda eng ko‘p uchraydigan va kredit qo‘mitasi rad javobiga sabab bo‘ladigan xato qaysi?',
      ru: 'Какая типичная ошибка в бизнес-плане чаще всего вызывает недоверие и отказ кредитного комитета или инвестора?',
      en: 'Which common flaw in amateur Business Plans most frequently leads to immediate rejection by lenders or investors?',
    },
    options: {
      uz: [
        '"Bizda umuman raqobatchi yo‘q" deyish hamda 1-oydanoq 100% quvvatda sotuv bo‘lishini asossiz yozish',
        'Uskunalar uchun 3 ta yetkazib beruvchining rasmiy tijorat taklifini (KP) ilova qilish',
        'Soliq va ijtimoiy to‘lovlarni amaldagi Soliq kodeksi bo‘yicha aniq hisoblash',
        'Mavsumiylik omilini hisobga olish',
      ],
      ru: [
        'Утверждение «у нас совсем нет конкурентов» и нереалистичный план 100% загрузки мощностей с первого же дня открытия',
        'Прикладывание реальных коммерческих предложений от поставщиков оборудования',
        'Учет сезонности и периода выхода на плановую мощность',
        'Точный расчет налоговой нагрузки по НК РУз',
      ],
      en: [
        'Claiming "we have zero competitors" and assuming 100% capacity utilization from Day 1 without ramp-up time or working capital buffer',
        'Attaching three verified supplier price quotes for machinery',
        'Modeling realistic seasonal sales dips',
        'Computing statutory payroll and corporate taxes accurately',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Har qanday mahsulotning bevosita yoki bilvosita muqobili bor; shuningdek ishga tushirishda ta’mir, sinov va mijoz yig‘ish bosqichlari (ramp-up period) kamida 3–6 oy vaqt oladi.',
      ru: 'Заявление об отсутствии конкурентов сигнализирует о незнании рынка, а отсутствие периода раскачки ведет к кассовому разрыву в первые месяцы.',
      en: 'Claiming zero competition signals market naivety, and ignoring ramp-up months guarantees an immediate cash crunch.',
    },
    hint: {
      uz: 'Yangi ochilgan korxona birinchi kuniyoq 100% to‘la quvvatda sota oladimi?',
      ru: 'Вспомните про косвенных конкурентов и период выхода на мощность.',
      en: 'Consider ramp-up reality and indirect substitutes.',
    },
  },
  {
    id: 'm13-q9',
    topicId: 'm13',
    question: {
      uz: 'Gantt diagrammasi (Gantt Chart) biznes-rejaning qaysi qismida va nima maqsadda ishlatiladi?',
      ru: 'Для чего в организационном разделе бизнес-плана используется диаграмма Ганта (Gantt Chart)?',
      en: 'What role does a Gantt Chart serve inside the Implementation & Organizational section of a Business Plan?',
    },
    options: {
      uz: [
        'Loyihani ishga tushirish bosqichlarini (ro‘yxatdan o‘tish, ta’mir, uskuna keltirish, yollash, test sotuv) haftalar/oylar va mas’ullar kesimida vizual kalendar rejalashtirish uchun',
        'Valyuta kursini bashorat qilish uchun',
        'Buxgalteriya balansini almashtirish uchun',
        'Mijozlarning yoshini aniqlash uchun',
      ],
      ru: [
        'Для наглядного календарного планирования этапов запуска проекта по неделям/месяцам с указанием сроков, зависимостей и ответственных',
        'Для расчета ставки НДС на импорт',
        'Вместо трудового договора с директором',
        'Для дизайна вывески магазина',
      ],
      en: [
        'To visualize the chronological launch roadmap — licensing, fit-out, equipment delivery, hiring, and pilot launch — across weeks/months with clear milestones',
        'To calculate foreign exchange interest swaps',
        'To replace formal employment contracts',
        'To design product packaging labels',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Gantt jadvali qaysi vazifalar parallel bajarilishi mumkinligini (masalan, uskuna yo‘lda kelayotganda binoni ta’mirlash va xodim qidirish) va kritik yo‘lni ko‘rsatib beradi.',
      ru: 'Календарный график Ганта дисциплинирует команду и показывает банку четкий план освоения инвестиционных средств.',
      en: 'A Gantt timeline aligns parallel workstreams and demonstrates execution readiness to lenders and partners.',
    },
    hint: {
      uz: 'Vaqt o‘qi bo‘ylab vazifalar ketma-ketligi chizilgan kalendar jadvalni eslang.',
      ru: 'Горизонтальные полосы задач и этапов по оси времени.',
      en: 'Think of horizontal task timelines, dependencies, and launch milestones.',
    },
  },
  {
    id: 'm13-q10',
    topicId: 'm13',
    question: {
      uz: 'IRR (Internal Rate of Return — Ichki daromadlilik normasi) ko‘rsatkichini bank krediti foiz stavkasi bilan qanday solishtirish kerak?',
      ru: 'Как правильно интерпретировать показатель внутренней нормы доходности проекта (IRR) при привлечении банковского кредита?',
      en: 'How should an entrepreneur compare a project’s Internal Rate of Return (IRR) against the cost of commercial bank debt?',
    },
    options: {
      uz: [
        'Loyiha moliyaviy jihatdan foydali bo‘lishi uchun IRR ko‘rsatkichi jalb etilayotgan kreditning yillik foiz stavkasidan (va kapital qiymatidan) sezilarli yuqori bo‘lishi shart',
        'IRR kredit foizidan qancha kichik bo‘lsa shuncha yaxshi',
        'IRR har doim manfiy son bo‘lishi kerak',
        'IRR faqat xodimlar sonini ko‘rsatadi',
      ],
      ru: [
        'Проект целесообразно кредитовать только если его IRR уверенно превышает процентную ставку по кредиту и стоимость капитала (WACC)',
        'IRR должен быть в два раза ниже ставки банковского кредита',
        'IRR всегда должен равняться нулю',
        'IRR не связан с денежными потоками проекта',
      ],
      en: [
        'The project’s IRR must comfortably exceed the effective loan interest rate (and weighted cost of capital, WACC) to generate positive net value',
        'IRR should ideally be half the bank loan interest rate',
        'IRR must always be negative',
        'IRR has no connection to cash flows',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'IRR — bu NPV = 0 bo‘ladigan maksimal diskont (foiz) stavkasidir. Agar loyiha IRR = 34% bo‘lsa va kredit 22% dan olinsa, loyiha qarz foizini yopib, ta’sischiga sof qiymat qoldiradi.',
      ru: 'IRR показывает максимальную ставку привлечения капитала, при которой проект еще не уходит в убыток.',
      en: 'IRR represents the break-even discount rate where NPV = 0; borrowing below IRR creates positive financial leverage, while borrowing above IRR destroys equity.',
    },
    hint: {
      uz: '22% li kredit olib, 15% ichki daromad beradigan ishga tiksa nima bo‘ladi?',
      ru: 'IRR — это потолок процентной ставки, который способен выдержать проект.',
      en: 'IRR is the maximum cost of capital the project can sustain before NPV turns negative.',
    },
  },
];

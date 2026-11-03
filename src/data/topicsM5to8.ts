import { TopicData } from '../types';

export const TOPICS_M5_M8: TopicData[] = [
  {
    id: 'm5',
    number: 5,
    code: 'M5',
    hours: 2,
    readMinutes: 16,
    iconName: 'Receipt',
    roadmapStage: { uz: 'Soliq va hujjatlar', ru: 'Налоги и учет', en: 'Taxes & Accounting' },
    title: {
      uz: 'Tadbirkor qanday soliqlarni to‘laydi va hujjatlarni yuritadi',
      ru: 'Какие налоги платит предприниматель и как ведет первичные документы',
      en: 'Business Taxation Regimes & Primary Financial Documentation',
    },
    shortDesc: {
      uz: 'Soddalashtirilgan (aylanmadan soliq) va umumiy soliq rejimlari (QQS, foyda solig‘i), my.soliq.uz kabineti hamda EHF, fiskal chek va yuk xati qoidalari.',
      ru: 'Упрощенный (налог с оборота) и общеустановленный режимы (НДС, налог на прибыль), кабинет my.soliq.uz, ЭСФ, онлайн-ККМ и ТТН.',
      en: 'Simplified Turnover Tax vs. General Regime (VAT & CIT), tax incentives, filing via my.soliq.uz, and managing E-Invoices, fiscal receipts, and waybills.',
    },
    summary: {
      uz: 'Soliq intizomi va to‘g‘ri birlamchi hujjatlar — biznes xavfsizligining qalqonidir. Ushbu mavzuda O‘zbekistonda kichik biznes uchun soddalashtirilgan hamda umumiy soliq tizimlari farqi, my.soliq.uz orqali hisobot topshirish va EHF / onlayn-NKM yuritish tartibi amaliy misollar bilan tushuntiriladi.',
      ru: 'Налоговая грамотность и порядок в первичных документах защищают бизнес от штрафов и блокировки счетов. В модуле разбираются режимы налогообложения в Узбекистане, работа в личном кабинете my.soliq.uz и правила оформления ЭСФ и фискальных чеков.',
      en: 'Tax compliance and clean primary bookkeeping shield enterprises from penalties. This module compares Uzbekistan’s simplified Turnover Tax against the general VAT/CIT regime, explains e-filing via my.soliq.uz, and details e-invoicing and fiscal receipt rules.',
    },
    learningObjectives: {
      uz: [
        'Soddalashtirilgan soliq rejimi (aylanmadan olinadigan soliq — 1 mlrd so‘mgacha chegara) va umumiy soliq rejimi (QQS 12% + Foyda solig‘i 15%) qaysi biznesga foydaliroq ekanini hisoblash.',
        'Yoshlar, xotin-qizlar, eksportyorlar va IT Park rezidentlari uchun amaldagi qonuniy soliq imtiyozlarini bilish.',
        'my.soliq.uz shaxsiy kabineti va elektron hujjat aylanishi (EDO) tizimlarida E-IMZO orqali hisobot topshirish muddatlarini tushunish.',
        'Elektron hisobvaraq-faktura (EHF + MXIK kodi), elektron tovar-transport yuk xati (ETTYX), onlayn-NKM fiskal cheki va daromad-xarajat daftarini yuritish qoidalarini qo‘llash.',
      ],
      ru: [
        'Сравнивать налог с оборота (при годовой выручке до 1 млрд сумов) и общеустановленный режим (НДС 12% + налог на прибыль 15%).',
        'Ориентироваться в действующих налоговых льготах (для экспортеров, резидентов IT Park, социального и молодежного бизнеса).',
        'Работать со структурой личного кабинета налогоплательщика my.soliq.uz и сроками сдачи электронной отчетности.',
        'Грамотно оформлять первичные документы: ЭСФ с кодами ИКПУ, электронные ТТН, чеки онлайн-ККМ и книгу учета доходов и расходов.',
      ],
      en: [
        'Compare Simplified Turnover Tax (under 1B UZS threshold) against the General Tax Regime (12% VAT + 15% CIT) based on margin structure.',
        'Identify statutory tax incentives available to exporters, IT Park residents, and social enterprises.',
        'Navigate taxpayer compliance workflows and electronic declarations inside the my.soliq.uz portal.',
        'Properly execute primary accounting documents: Electronic Invoices (EHF with MXIK codes), e-Waybills, Online Cash Register fiscal receipts, and ledgers.',
      ],
    },
    sections: [
      {
        id: 'm5-s1',
        title: {
          uz: '5.1. Soddalashtirilgan va umumiy soliq rejimlari hamda imtiyozlar',
          ru: '5.1. Упрощенный и общеустановленный налоговые режимы в РУз',
          en: '5.1. Simplified Turnover Tax vs. General Tax Regime & Incentives',
        },
        paragraphs: {
          uz: [
            'O‘zbekiston Respublikasi Soliq kodeksiga muvofiq kichik biznes subyektlari yillik jami daromadi hajmi va mijozlar tarkibiga qarab ikkita asosiy soliq rejimidan birida ishlaydi:',
            '1) Soddalashtirilgan rejim — Aylanmadan olinadigan soliq: yillik jami daromadi 1 milliard so‘mdan oshmaydigan MChJ va YaTTlar uchun mo‘ljallangan (QQS va foyda solig‘i o‘rniga tushumdan to‘lanadi; MChJlar uchun bazaviy stavka — 4%, elektron tijorat va ayrim sohalarda pasaytirilgan stavkalar hamda YaTT/mikrobiznes uchun yangilangan yengillashtirilgan qoidalar amal qiladi). 2) Umumiy soliq rejimi: yillik aylanmasi 1 mlrd so‘mdan oshgan (yoki ixtiyoriy o‘tgan) korxonalar Qo‘shilgan qiymat solig‘i (bazaviy 12%) va Foyda solig‘ini (bazaviy 15%) to‘laydi. Bundan tashqari yollanma xodimlar ish haqidan JShDS (12%) va Ijtimoiy soliq hisoblanadi.',
          ],
          ru: [
            'Согласно Налоговому кодексу Республики Узбекистан, малый бизнес выбирает один из двух основных налоговых режимов в зависимости от годового оборота и цепочки контрагентов:',
            '1) Упрощенный режим — Налог с оборота: доступен предприятиям и ИП с совокупным годовым доходом до 1 млрд сумов. Он заменяет НДС и налог на прибыль (базовая ставка для юрлиц — 4% с выручки; для e-commerce и отдельных сфер предусмотрены специальные пониженные ставки). 2) Общеустановленный режим: обязателен при превышении порога 1 млрд сумов (или выбирается добровольно при работе с крупными плательщиками НДС) и включает НДС (12%) и Налог на прибыль (базово 15%). Дополнительно с зарплаты штата удерживается НДФЛ (12%) и начисляется социальный налог.',
          ],
          en: [
            'Under Uzbekistan’s Tax Code, small businesses operate under one of two primary regimes dictated by annual gross revenue and B2B client structure:',
            '(1) Simplified Regime — Turnover Tax: available to entities and sole proprietors whose annual gross revenue stays below 1 billion UZS, replacing VAT and Corporate Income Tax with a single flat levy on gross receipts (standard corporate rate 4%, with lowered specialized rates for e-commerce and micro-proprietors). (2) General Regime: mandatory above 1B UZS (or chosen voluntarily when selling to VAT-registered corporate buyers), comprising 12% VAT and 15% Corporate Income Tax on net profit, alongside standard payroll taxes (12% PIT and Social Tax).',
          ],
        },
        highlightTerms: ['turnover-tax', 'vat', 'cit', 'social-tax'],
        comparisonTable: {
          headers: {
            uz: ['Ko‘rsatkich', 'Aylanmadan olinadigan soliq (Soddalashtirilgan)', 'Umumiy rejim (QQS + Foyda solig‘i)'],
            ru: ['Параметр', 'Налог с оборота (Упрощенный)', 'Общеустановленный режим (НДС + Прибыль)'],
            en: ['Parameter', 'Turnover Tax (Simplified)', 'General Regime (VAT + CIT)'],
          },
          rows: {
            uz: [
              ['Yillik tushum chegarasi', '1 milliard so‘mgacha', '1 mlrd so‘mdan yuqori (yoki ixtiyoriy)'],
              ['Asosiy stavkalar (bazaviy)', 'Jami tushumdan 4% (sohaga ko‘ra tabaqalashgan / pasaytirilgan stavkalar bor)', 'QQS: 12% | Foyda solig‘i: sof foydadan 15%'],
              ['Xarajatlarni chegirish', 'Xarajatlar soliq bazasini kamaytirmaydi (soliq tushumdan olinadi)', 'Asoslangan hujjatli xarajatlar foyda solig‘i bazasidan chegiriladi'],
              ['Kimlar uchun qulay?', 'Yuqori marjali xizmatlar va chakana B2C savdo (kichik aylanmada)', 'Kam marjali ulgurji savdo, ishlab chiqarish va QQS to‘lovchi yirik B2B mijozlar bilan ishlashda'],
            ],
            ru: [
              ['Лимит годового дохода', 'До 1 миллиарда сумов', 'Свыше 1 млрд сумов (либо добровольно с любого оборота)'],
              ['Базовые ставки', '4% от валовой выручки (есть сниженные отраслевые ставки)', 'НДС: 12% | Налог на прибыль: 15% от чистой налоговой прибыли'],
              ['Учет расходов', 'Расходы не уменьшают базу (налог платится со всего оборота)', 'Документально подтвержденные расходы вычитаются из базы налога на прибыль'],
              ['Кому выгоднее?', 'Высокомаржинальные услуги, кафе и малая розница B2C', 'Оптовая торговля с низкой наценкой, производство и поставщики крупных B2B-компаний'],
            ],
            en: [
              ['Annual Revenue Ceiling', 'Up to 1 billion UZS', 'Above 1B UZS (or voluntary opt-in at any size)'],
              ['Standard Base Rates', '4% of gross turnover (with lower sector-specific tiers)', 'VAT: 12% | Corporate Income Tax: 15% of taxable net profit'],
              ['Expense Deductions', 'Expenses do not reduce tax base (levied on top-line receipts)', 'Documented business expenses reduce CIT base; input VAT is creditable'],
              ['Best Suited For', 'High-margin services and B2C retail below threshold', 'Low-margin wholesale, manufacturing, and B2B suppliers to VAT payers'],
            ],
          },
        },
      },
      {
        id: 'm5-s2',
        title: {
          uz: '5.2. my.soliq.uz shaxsiy kabineti va elektron hisobotlar tartibi',
          ru: '5.2. Личный кабинет my.soliq.uz и электронная сдача отчетности',
          en: '5.2. Taxpayer Portal (my.soliq.uz) & Automated E-Reporting',
        },
        paragraphs: {
          uz: [
            'Bugungi kunda O‘zbekistonda tadbirkor soliq inspeksiyasiga qog‘oz papka ko‘tarib bormaydi. Barcha jarayonlar my.soliq.uz elektron soliq xizmatlari portali hamda Soliq mobil ilovasi orqali E-IMZO yordamida bajariladi.',
            'Avtomatlashtirish darajasi yuqori: onlayn-NKM cheklari, marketpleys savdolari va EHF tizimidagi hisob-fakturalar asosida QQS hamda aylanmadan olinadigan soliq hisobotlarining katta qismi shaxsiy kabinetda avtomatik shakllantiriladi (proaktiv hisobot). Tadbirkor yoki buxgalter ma’lumotlarni tekshirib, Soliq kodeksida belgilangan muddatlarda tasdiqlaydi va soliq to‘lov topshiriqnomasini bankka yuboradi.',
          ],
          ru: [
            'Взаимодействие бизнеса с налоговыми органами в Узбекистане переведено в цифровой формат через портал my.soliq.uz и мобильное приложение Soliq.',
            'Благодаря интеграции онлайн-ККМ, маркетплейсов и операторов ЭДО отчеты по налогу с оборота и НДС формируются в кабинете автоматически (проактивно) на основе пробитых чеков и выставленных ЭСФ. Задача предпринимателя или бухгалтера — сверить данные, подписать отчет ключом E-IMZO в установленные сроки и вовремя провести платеж.',
          ],
          en: [
            'Tax administration in Uzbekistan operates paperlessly via my.soliq.uz and the Soliq mobile app authenticated by E-IMZO.',
            'Because Online Cash Registers, marketplaces, and E-Invoice operators feed real-time transaction data directly to the Tax Committee, Turnover Tax and VAT returns pre-populate automatically inside the taxpayer dashboard. Founders review pre-filled figures, verify tax credits, sign digitally before statutory monthly/quarterly deadlines, and remit payment online.',
          ],
        },
      },
      {
        id: 'm5-s3',
        title: {
          uz: '5.3. Birlamchi moliyaviy hujjatlar: EHF, fiskal chek, yuk xati va daftar',
          ru: '5.3. Первичные документы: ЭСФ, фискальный чек, ТТН и книга учета',
          en: '5.3. Primary Accounting Documents: E-Invoices, Fiscal Receipts & Waybills',
        },
        paragraphs: {
          uz: [
            'Buxgalteriyaning temir qoidasi: "Hujjat yo‘q — operatsiya yo‘q". Har bir xo‘jalik operatsiyasi birlamchi moliyaviy hujjat bilan tasdiqlanishi shart: 1) Elektron hisobvaraq-faktura (EHF) — yuridik shaxslar va YaTTlar o‘rtasida tovar sotilganda yoki xizmat ko‘rsatilganda Didox, Soliqservis, Faktura kabi operatorlar orqali rasmiylashtiriladi (har bir satrda tasnif.soliq.uz dagi aniq MXIK kodi ko‘rsatiladi); 2) Onlayn-NKM yoki virtual kassa fiskal cheki — aholi bilan naqd pul yoki bank kartasi orqali savdoda QR-kodli chek berilishi shart.',
            '3) Elektron tovar-transport yuk xati (ETTYX / ЭТТН) — yuklarni transportda tashish va xaridorga yetkazishda elektron rasmiylashtiriladi; 4) Daromad va xarajatlar hisobi daftari — YaTT va mikrobiznes subyektlari kunlik tushum hamda hujjatli xarajatlarni tartibli qayd etib borishi zarur.',
          ],
          ru: [
            'Главное правило учета: каждая сделка подтверждается первичным документом. Основные виды первички в РУз: 1) Электронный счет-фактура (ЭСФ) — оформляется при отгрузке товаров/услуг между юрлицами и ИП через операторов ЭДО с обязательным указанием кода ИКПУ (tasnif.soliq.uz); 2) Чек онлайн-ККМ или виртуальной кассы с фискальным признаком и QR-кодом — обязателен при расчетах с населением наличными и картами.',
            '3) Электронная товарно-транспортная накладная (ЭТТН) — подтверждает реальное перемещение груза автотранспортом от поставщика к покупателю; 4) Книга учета доходов и расходов — базовый регистр для ИП и малых форм бизнеса.',
          ],
          en: [
            'The iron law of compliance: every commercial transaction requires a primary source document. Four core instruments govern Uzbek businesses: (1) Electronic Tax Invoice (EHF) — issued via EDO platforms (Didox, Soliqservis) for B2B goods/services, mandating exact MXIK product codes from tasnif.soliq.uz; (2) Online Cash Register / Virtual POS Fiscal Receipt — QR-coded receipt mandatory for all retail cash and card sales.',
            '(3) Electronic Consignment Waybill (E-TTN) — digitally tracks physical cargo shipment from seller to buyer; and (4) Income & Expense Ledger — systematic daily tracking for sole proprietors and micro-enterprises.',
          ],
        },
        highlightTerms: ['esf', 'online-nkm', 'mxik'],
      },
    ],
    diagramType: 'tax-regimes',
    diagramTitle: {
      uz: 'O‘zbekistonda soliq rejimini tanlash va hujjat aylanishi sxemasi',
      ru: 'Схема выбора налогового режима и электронного документооборота',
      en: 'Tax Regime Architecture & Digital Compliance Flow in Uzbekistan',
    },
    diagramNote: {
      uz: 'Stavkalar va chegara miqdorlar 2025–2026-yillar amaldagi bazaviy me’yorlari bo‘yicha keltirilgan; soliq imtiyozlarini my.soliq.uz dan tekshiring.',
      ru: 'Базовые ставки и пороги приведены по состоянию на 2025–2026 гг.; отраслевые льготы уточняйте на my.soliq.uz.',
      en: 'Base rates and thresholds reflect 2025–2026 statutory benchmarks; verify sector exemptions on my.soliq.uz.',
    },
    stats: [
      {
        value: { uz: '1 mlrd so‘m', ru: '1 млрд сумов', en: '1B UZS' },
        label: {
          uz: 'Aylanmadan olinadigan soliq rejimida ishlashning yillik jami daromad chegarasi',
          ru: 'Предельный годовой доход для применения упрощенного налога с оборота',
          en: 'Annual gross revenue ceiling for the simplified Turnover Tax regime',
        },
        subnote: { uz: 'Ushbu chegaradan oshganda QQS va foyda solig‘iga o‘tiladi', ru: 'При превышении — переход на НДС и налог на прибыль', en: 'Exceeding this threshold triggers transition to VAT & CIT' },
        year: '2025–2026',
        sourceName: { uz: 'O‘zbekiston Respublikasi Soliq kodeksi (461-modda)', ru: 'Налоговый кодекс РУз (ст. 461)', en: 'Tax Code of Uzbekistan (Art. 461)' },
        sourceUrl: 'https://lex.uz/docs/4674902',
      },
      {
        value: { uz: '12% / 15%', ru: '12% / 15%', en: '12% / 15%' },
        label: {
          uz: 'Umumiy rejimdagi bazaviy QQS (12%) va Foyda solig‘i (15%) stavkalari',
          ru: 'Базовые ставки НДС (12%) и налога на прибыль (15%) в Узбекистане',
          en: 'Standard Value Added Tax (12%) & Corporate Income Tax (15%) rates',
        },
        subnote: { uz: 'Mintaqadagi raqobatbardosh QQS stavkalaridan biri', ru: 'Одна из конкурентных ставок НДС в регионе', en: 'Competitive indirect tax benchmark in Central Asia' },
        year: '2025–2026',
        sourceName: { uz: 'Soliq qo‘mitasi (soliq.uz)', ru: 'Налоговый комитет РУз (soliq.uz)', en: 'Tax Committee of Uzbekistan (soliq.uz)' },
        sourceUrl: 'https://soliq.uz',
      },
      {
        value: { uz: '100%', ru: '100%', en: '100%' },
        label: {
          uz: 'B2B hisobvaraq-fakturalar (EHF) va soliq hisobotlarining elektronlashganlik darajasi',
          ru: 'Уровень цифровизации счетов-фактур (ЭСФ) и налоговой отчетности',
          en: 'Share of B2B tax invoices (EHF) and declarations processed electronically',
        },
        subnote: { uz: 'Avtomatik proaktiv hisobot tizimi joriy etilgan', ru: 'Проактивное автозаполнение деклараций', en: 'Real-time EDO integration powers pre-filled returns' },
        year: '2025',
        sourceName: { uz: 'my.soliq.uz raqamli tahlili', ru: 'Цифровая статистика my.soliq.uz', en: 'my.soliq.uz Digital Tax Platform' },
        sourceUrl: 'https://my.soliq.uz',
      },
    ],
    charts: [
      {
        id: 'm5-chart-1',
        type: 'bar',
        title: {
          uz: 'O‘zbekistonda asosiy soliq turlarining bazaviy stavkalari (%) — 2025–2026 tahriri',
          ru: 'Базовые ставки основных налогов в Республике Узбекистан (%) — 2025–2026 гг.',
          en: 'Standard Statutory Business Tax Rates in Uzbekistan (%) — 2025–2026',
        },
        unit: { uz: '%', ru: '%', en: '%' },
        year: '2025–2026',
        sourceName: { uz: 'O‘zbekiston Respublikasi Soliq kodeksi', ru: 'Налоговый кодекс РУз', en: 'Tax Code of the Republic of Uzbekistan' },
        sourceUrl: 'https://lex.uz/docs/4674902',
        seriesLabel: { uz: 'Bazaviy stavka (%)', ru: 'Базовая ставка (%)', en: 'Base Rate (%)' },
        data: [
          { name: { uz: 'Aylanma soliq (MChJ)', ru: 'Налог с оборота', en: 'Turnover Tax (Base)' }, value: 4 },
          { name: { uz: 'QQS (НДС)', ru: 'НДС (VAT)', en: 'VAT (QQS)' }, value: 12 },
          { name: { uz: 'JShDS (НДФЛ)', ru: 'НДФЛ', en: 'Personal Income Tax' }, value: 12 },
          { name: { uz: 'Ijtimoiy soliq', ru: 'Соц. налог', en: 'Social Tax' }, value: 12 },
          { name: { uz: 'Foyda solig‘i', ru: 'Налог на прибыль', en: 'Corp. Income Tax' }, value: 15 },
        ],
      },
      {
        id: 'm5-chart-2',
        type: 'bar',
        title: {
          uz: 'Misol: Yillik tushumi 800 mln so‘m korxonada soliq yuki taqqoslovi (mln so‘m, QQS hisobga olinganda)',
          ru: 'Пример сравнения налоговой нагрузки при выручке 800 млн сумов при разной рентабельности (млн сумов)',
          en: 'Tax Burden Simulation on 800M UZS Revenue: High-Margin Service vs. Low-Margin Trade (M UZS)',
        },
        unit: { uz: 'mln so‘m', ru: 'млн сумов', en: 'M UZS' },
        year: 'O‘quv hisob modeli',
        sourceName: { uz: 'Soliq kodeksi normalari asosida hisob-kitob', ru: 'Расчетная модель по нормам НК РУз', en: 'Tax Code Simulation Model' },
        sourceUrl: 'https://my.soliq.uz',
        seriesLabel: { uz: 'Aylanmadan soliq (4%)', ru: 'Налог с оборота (4%)', en: 'Turnover Tax (4%)' },
        secondarySeriesLabel: { uz: 'Foyda solig‘i (15%)', ru: 'Налог на прибыль (15%)', en: 'CIT (15% of net profit)' },
        data: [
          { name: { uz: 'Xizmat (marja 50%)', ru: 'Услуги (маржа 50%)', en: 'Service (50% margin)' }, value: 32, secondaryValue: 60 },
          { name: { uz: 'Ulgurji savdo (marja 8%)', ru: 'Опт (маржа 8%)', en: 'Wholesale (8% margin)' }, value: 32, secondaryValue: 9.6 },
        ],
      },
    ],
    legalActs: [
      {
        id: 'm5-law-1',
        docType: { uz: 'Kodeks', ru: 'Кодекс РУз', en: 'Code of the RUz' },
        title: {
          uz: 'O‘zbekiston Respublikasining Soliq kodeksi (yangi tahrir)',
          ru: 'Налоговый кодекс Республики Узбекистан (новая редакция)',
          en: 'Tax Code of the Republic of Uzbekistan (Revised Edition)',
        },
        summary: {
          uz: 'Barcha umumbelgilangan va maxsus soliq rejimlari (QQS, foyda solig‘i, aylanmadan olinadigan soliq, JShDS, ijtimoiy, mol-mulk va yer soliqlari), hisobot muddatlari va soliq tekshiruvlari tartibini belgilovchi asosiy hujjat.',
          ru: 'Основной кодифицированный акт, определяющий виды налогов, налоговую базу, ставки, льготы, порядок сдачи отчетности и камерального контроля.',
          en: 'Primary statutory code governing all national taxes, simplified regimes, filing deadlines, deductions, and audit procedures.',
        },
        relevance: {
          uz: 'Har bir tadbirkor va buxgalterning stol usti huquqiy hujjati (xususan 68-bob — Aylanmadan olinadigan soliq).',
          ru: 'Настольная книга руководителя и бухгалтера (особенно глава 68 — Налог с оборота).',
          en: 'Essential statutory reference for tax planning and compliance (notably Chapter 68 — Turnover Tax).',
        },
        keyClauses: {
          uz: [
            'Aylanmadan olinadigan soliq to‘lovchilar kalendar yil davomida jami daromadi 1 mlrd so‘mdan oshgan oydan keyingi oyning 1-sanasidan QQS va foyda solig‘iga o‘tadi.',
            'Tovar eksporti bo‘yicha QQS 0% stavkada qo‘llaniladi (eksportni rag‘batlantirish).',
          ],
          ru: [
            'При превышении порога 1 млрд сумов налогоплательщик переходит на уплату НДС и налога на прибыль с 1-го числа следующего месяца.',
            'Экспорт товаров облагается НДС по нулевой (0%) ставке с правом возмещения входного НДС.',
          ],
          en: [
            'Entities surpassing 1B UZS cumulative annual revenue transition to VAT and CIT starting the first day of the following month.',
            'Exported goods qualify for 0% zero-rated VAT with input VAT refund eligibility.',
          ],
        },
        yearNote: '2025–2026 amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/4674902',
      },
      {
        id: 'm5-law-2',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Buxgalteriya hisobi to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni',
          ru: 'Закон РУз «О бухгалтерском учете»',
          en: 'Law "On Accounting"',
        },
        summary: {
          uz: 'Yuridik shaxslarda buxgalteriya hisobini tashkil etish, birlamchi hisob hujjatlarining majburiy rekvizitlari, inventarizatsiya va moliyaviy hisobotlarni saqlash muddatlarini belgilaydi.',
          ru: 'Устанавливает обязанность ведения бухучета, обязательные реквизиты первичных учетных документов и ответственность руководителя.',
          en: 'Establishes statutory bookkeeping duties, mandatory elements of primary accounting vouchers, and document retention periods.',
        },
        relevance: {
          uz: 'Hisob-faktura, dalolatnoma va yuk xatlarining yuridik haqiqiyligini belgilab beradi.',
          ru: 'Объясняет, почему без правильно оформленной первички расходы не признаются при проверке.',
          en: 'Defines why undocumented cash outlays cannot be legally deducted as business expenses.',
        },
        keyClauses: {
          uz: [
            'Buxgalteriya hisobini tashkil etish uchun korxona rahbari javobgar hisoblanadi (buxgalter yollash, autsorsing shartnomasi yoki kichik korxonada shaxsan yuritish orqali).',
            'Birlamchi hisob hujjatlari xo‘jalik operatsiyasi sodir etilgan paytda tuzilishi va kamida 5 yil saqlanishi lozim.',
          ],
          ru: [
            'Ответственность за организацию бухгалтерского учета несет руководитель предприятия.',
            'Первичные документы составляются в момент совершения операции и хранятся не менее 5 лет.',
          ],
          en: [
            'The company director bears statutory responsibility for organizing proper accounting (in-house or outsourced).',
            'Primary vouchers must be generated upon transaction execution and archived for at least 5 years.',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/2931253',
      },
      {
        id: 'm5-law-3',
        docType: { uz: 'Vazirlar Mahkamasi qarorlari', ru: 'Постановления КМ РУз № 943 и № 489', en: 'Cabinet of Ministers Resolutions No. 943 & No. 489' },
        title: {
          uz: 'Onlayn nazorat-kassa mashinalari (VM 943-son) hamda Elektron hisobvaraq-fakturalar va yuk xatlari tizimi (VM 489-son) to‘g‘risidagi qarorlar',
          ru: 'Постановления КМ РУз об онлайн-ККМ (№ 943) и порядке применения электронных счетов-фактур ЭСФ (№ 489)',
          en: 'Cabinet Resolutions on Online Cash Registers (No. 943) & Electronic Tax Invoices EHF (No. 489)',
        },
        summary: {
          uz: 'Chakana savdoda QR-kodli va fiskal belgili chek berish majburiyati, xaridorlarga 1% keshbek qaytarilishi hamda EHF/ETTYX elektron imzolash muddatlarini tartibga soladi.',
          ru: 'Регулируют обязательную выдачу фискальных чеков с QR-кодом (и систему 1% кешбэка покупателям), а также регламент выставления и подтверждения ЭСФ.',
          en: 'Mandate QR-coded fiscal receipts (powering the 1% consumer cashback ecosystem) and establish technical rules for EHF e-invoicing.',
        },
        relevance: {
          uz: 'Do‘kon, qahvaxona yoki ulgurji korxonada har kuni qo‘llaniladigan amaliy qoidalar.',
          ru: 'Ежедневные правила кассовой дисциплины и электронного документооборота.',
          en: 'Day-to-day POS cash discipline and digital invoicing rules.',
        },
        keyClauses: {
          uz: [
            'Terminal cheki (slip) fiskal chek o‘rnini bosmaydi — karta orqali to‘lovda ham onlayn-NKM/integratsiyalashgan kassa fiskal cheki berilishi shart.',
            'EHF taqdim etilganda ikkinchi tomon belgilangan muddatda uni E-IMZO bilan tasdiqlashi yoki asoslantirilgan rad etishi lozim.',
          ],
          ru: [
            'Банковский слип POS-терминала не заменяет фискальный чек онлайн-ККМ — при оплате картой также пробивается фискальный чек.',
            'Каждый товар или услуга в чеке и ЭСФ обязаны иметь корректный код ИКПУ (MXIK).',
          ],
          en: [
            'A standalone bank card terminal slip does not replace an Online Cash Register fiscal receipt; integrated POS receipts are mandatory.',
            'Every line item on fiscal receipts and EHF invoices must carry an accurate MXIK classification code.',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/4945168',
      },
    ],
    hasDynamicRateWarning: true,
    caseStudy: {
      title: {
        uz: 'Keys: "Toshkent Agro-Ulgurji" MChJ nima uchun 1 mlrd so‘mga yetmasdan ixtiyoriy QQSga o‘tdi?',
        ru: 'Кейс: Почему оптовая компания «Toshkent Agro-Ulgurji» добровольно перешла с налога с оборота на НДС?',
        en: 'Case Study: Why "Tashkent Agro-Wholesale" MChJ Voluntarily Switched from Turnover Tax to General Regime',
      },
      scenario: {
        uz: 'Otabek oziq-ovqat mahsulotlarini zavodlardan ulgurji olib, restoran tarmoqlariga kichik ustama (7% marja) bilan yetkazib beradi. Uning yillik savdosi 750 mln so‘m. Agar u 4% aylanmadan soliqda qolsa: 1) yirik restoran tarmoqlari QQS to‘lovchisi bo‘lgani uchun undan xarid qilishni xohlamayapti (QQSni hisobga ololmaydi); 2) 750 mln tushumdan 4% aylanma soliq = 30 mln so‘m, holbuki kompaniyaning barcha operatsion xarajatlaridan keyingi sof foydasi atigi 35 mln so‘m!',
        ru: 'Отабек закупает продукты на фабриках (с НДС) и поставляет их сетям ресторанов с небольшой оптовой наценкой (чистая рентабельность до налогов около 4,7%). Его годовая выручка — 750 млн сумов. На налоге с оборота (4%) он должен заплатить 30 млн сумов из 35 млн сумов прибыли, а крупные сети ресторанов отказываются работать без зачета НДС.',
        en: 'Otabek buys packaged foods from VAT-registered factories and wholesales them to restaurant chains on a thin net margin (~35M UZS pre-tax profit on 750M UZS annual turnover). Under the 4% Turnover Tax, his tax bill is 30M UZS (wiping out 85% of profit!), and VAT-paying restaurant chains avoid non-VAT suppliers.',
      },
      analysis: {
        uz: 'Otabek buxgalter bilan hisob-kitob qilib, ixtiyoriy ravishda umumiy soliq rejimiga (QQS + Foyda solig‘i) o‘tdi. Zavoddan olgan QQSni hisobga kiritdi (zachet), restoranlar mamnunlik bilan shartnoma tuzdi, foyda solig‘i esa 35 mln so‘m sof foydaning 15% i — ya’ni 30 mln o‘rniga atigi 5,25 mln so‘m bo‘ldi!',
        ru: 'Перейдя добровольно на общеустановленный режим, Отабек стал принимать к зачету входной НДС от фабрик, сохранил крупных B2B-клиентов, а налог на прибыль составил 15% от 35 млн сумов реальной прибыли — всего 5,25 млн сумов вместо 30 млн!',
        en: 'By voluntarily opting into the General Regime, Otabek credited factory input VAT, unlocked major restaurant chain B2B contracts, and paid 15% CIT strictly on his 35M UZS profit — just 5.25M UZS instead of 30M UZS!',
      },
      numbersBreakdown: {
        uz: [
          'Yillik tushum: 750 mln so‘m | Hujjatli xarajatlar (tannarx, transport, oylik): 715 mln so‘m | Soliqoldi foyda: 35 mln so‘m.',
          'Aylanmadan soliqda (4%): 750 mln × 4% = 30 mln so‘m soliq (qo‘lda atigi 5 mln so‘m qoladi).',
          'Umumiy rejimda (Foyda solig‘i 15%): 35 mln × 15% = 5,25 mln so‘m foyda solig‘i (+ farq hisobidan QQS zacheti va yangi B2B mijozlar).',
        ],
        ru: [
          'Годовая выручка: 750 млн сумов | Подтвержденные расходы: 715 млн сумов | Прибыль до налога: 35 млн сумов.',
          'На налоге с оборота (4%): 750 млн × 4% = 30 млн сумов налога.',
          'На налоге на прибыль (15%): 35 млн × 15% = 5,25 млн сумов + сохранение контрактов с плательщиками НДС.',
        ],
        en: [
          'Annual Revenue: 750M UZS | Documented Costs: 715M UZS | Pre-tax Profit: 35M UZS.',
          'Under 4% Turnover Tax: 750M × 4% = 30M UZS tax bill.',
          'Under 15% Corporate Income Tax: 35M × 15% = 5.25M UZS CIT + full B2B VAT chain compatibility.',
        ],
      },
      challengeQuestion: {
        uz: 'Aksincha, agar dizayn studiyasining yillik tushumi 500 mln so‘m, xarajatlari juda kam (atigi 100 mln so‘m) va mijozlari QQS to‘lamaydigan kichik korxonalar bo‘lsa, qaysi rejimda soliq kamroq chiqadi?',
        ru: 'А какой режим выгоднее дизайн-студии с выручкой 500 млн сумов, малыми расходами (100 млн сумов, прибыль 400 млн) и клиентами — неплательщиками НДС?',
        en: 'Conversely, which regime minimizes tax for a design studio earning 500M UZS revenue with only 100M UZS expenses (400M UZS profit) serving non-VAT clients?',
      },
      challengeOptions: {
        uz: [
          'Aylanmadan olinadigan soliq (4%): 500 mln × 4% = 20 mln so‘m (umumiy rejimda 12% QQS + foyda solig‘i ancha ko‘p chiqar edi)',
          'Umumiy rejim (QQS 12% + Foyda solig‘i 15%), chunki u har doim arzon',
          'Hujjat yuritmasdan naqd pulda ishlash',
        ],
        ru: [
          'Налог с оборота (4%): 500 млн × 4% = 20 млн сумов (на общем режиме только налог на прибыль 15% с 400 млн дал бы 60 млн + НДС)',
          'Общеустановленный режим с НДС',
          'Прием оплаты без договоров и чеков',
        ],
        en: [
          'Simplified Turnover Tax (4%): 500M × 4% = 20M UZS (vs. 60M UZS CIT alone + VAT under General Regime)',
          'General VAT + CIT regime',
          'Operating off-the-books without invoices',
        ],
      },
      correctOptionIndex: 0,
      challengeExplanation: {
        uz: 'Yuqori rentabellikka (80% marja) ega va kiruvchi QQSi deyarli yo‘q xizmat ko‘rsatish bizneslari uchun 1 mlrd so‘mgacha 4% aylanmadan soliq juda tejamkor hisoblanadi.',
        ru: 'При высокой маржинальности услуг и отсутствии входного НДС упрощенный налог с оборота (4%) существенно выгоднее.',
        en: 'High-margin service firms with minimal input VAT save substantially under the 4% Turnover Tax up to the 1B UZS threshold.',
      },
    },
    keyTakeaways: {
      uz: [
        'Yillik aylanmasi 1 mlrd so‘mgacha bo‘lgan yuqori marjali xizmat va B2C chakana savdo uchun odatda Aylanmadan olinadigan soliq qulay.',
        'Kam ustamali ulgurji savdo va QQS to‘lovchi yirik korporatsiyalar bilan ishlovchi B2B korxonalarga Umumiy rejim foydaliroq bo‘lishi mumkin.',
        'my.soliq.uz kabinetida EHF va onlayn-NKM ma’lumotlari asosida hisobotlar avtomatik shakllanadi — muddatlarni o‘tkazib yubormaslik muhim.',
        'Plastik karta terminali slipi fiskal chek emas: chakana savdoda har doim QR-kodli onlayn-NKM fiskal cheki berilishi shart.',
        'Har bir xarajat (xomashyo, ijara) rasmiy EHF va shartnoma bilan tasdiqlansagina buxgalteriya hamda soliq hisobida tan olinadi.',
      ],
      ru: [
        'Выбор налогового режима зависит от маржинальности бизнеса и того, являются ли ваши покупатели плательщиками НДС.',
        'Порог применения упрощенного налога с оборота в Узбекистане составляет 1 млрд сумов годового дохода.',
        'Отчетность в my.soliq.uz формируется проактивно на базе пробитых фискальных чеков и подписанных ЭСФ.',
        'Розничная продажа без выдачи чека онлайн-ККМ с QR-кодом влечет серьезные налоговые штрафы.',
        'Документальное подтверждение каждого расхода через ЭДО — основа чистого учета и защиты при камеральном контроле.',
      ],
      en: [
        'Choose your tax regime by modeling profit margin and whether your B2B customers require VAT invoices.',
        'Uzbekistan’s Simplified Turnover Tax applies up to 1 billion UZS in annual gross revenue.',
        'my.soliq.uz pre-populates tax returns automatically from live EHF e-invoices and Online Cash Register feeds.',
        'Retail card terminal slips never substitute for QR-verified Online Cash Register fiscal receipts.',
        'Every business expense must be backed by a valid digital EHF invoice and contract to qualify for legal deduction.',
      ],
    },
  },
  {
    id: 'm6',
    number: 6,
    code: 'M6',
    hours: 2,
    readMinutes: 15,
    iconName: 'LayoutGrid',
    roadmapStage: { uz: 'Biznes-model', ru: 'Бизнес-модель', en: 'Business Model' },
    title: {
      uz: 'Biznes-model qanday ishlaydi',
      ru: 'Как работает бизнес-модель предприятия',
      en: 'How a Business Model Works: Architecture & Monetization',
    },
    shortDesc: {
      uz: 'Aleksandr Ostervalderning 9 blokli Biznes-model kanvasi (BMC) hamda zamonaviy modellar: obuna, franshiza, onlayn platforma, B2B va B2C.',
      ru: 'Шаблон Business Model Canvas Остервальдера (9 блоков) и современные модели монетизации: подписка, франшиза, маркетплейс, B2B и B2C.',
      en: 'Osterwalder’s 9-block Business Model Canvas (BMC) and modern monetization patterns: Subscription, Franchise, Marketplace Platform, B2B, and B2C.',
    },
    summary: {
      uz: 'Bir xil mahsulot (masalan, qahva yoki dastur) butunlay turlicha biznes-modellar orqali sotilishi mumkin. Ushbu mavzuda biznesning 9 ta tayanch blokini Ostervalder kanvasida yig‘ish va bozorda eng samarali daromad modellarini qo‘llash o‘rganiladi.',
      ru: 'Один и тот же продукт можно продавать совершенно по-разному. В этом модуле мы соберем архитектуру компании на одной странице по методу Александра Остервальдера (9 блоков BMC) и разберем современные модели монетизации.',
      en: 'Identical products can win or lose purely based on their underlying business model. This module maps enterprise logic onto Osterwalder’s 9-block Business Model Canvas and examines high-leverage monetization architectures.',
    },
    learningObjectives: {
      uz: [
        'Biznes-model tushunchasini (kompaniya qanday qiymat yaratishi, yetkazishi va monetizatsiya qilishi) oddiy mahsulot tavsifidan farqlash.',
        'Aleksandr Ostervalder va Iv Pinyening 9 blokli Business Model Canvas (BMC) sxemasini aniq loyiha uchun to‘ldirish.',
        'B2B, B2C, B2G, C2C yo‘nalishlari hamda Obuna (Subscription), Franshiza, Freemium va Ko‘p tomonlama platforma (Marketplace) modellarini qiyoslash.',
        'O‘zbekiston bozoridagi muvaffaqiyatli kompaniyalar qaysi biznes-model evaziga kengayganini tahlil qilish.',
      ],
      ru: [
        'Понимать назначение бизнес-модели как целостной формулы создания, доставки ценности и извлечения выручки.',
        'Заполнять все 9 взаимосвязанных блоков шаблона Business Model Canvas (Остервальдера) под собственный проект.',
        'Различать модели B2B, B2C, B2G, подписку (Subscription), франчайзинг, Freemium и двусторонние онлайн-платформы.',
        'Анализировать примеры успешных бизнес-моделей на рынке Узбекистана.',
      ],
      en: [
        'Define a business model as the integrated blueprint for creating, delivering, and capturing economic value.',
        'Construct a complete 9-block Osterwalder Business Model Canvas (BMC) for a startup or SME venture.',
        'Contrast B2B, B2C, B2G, Subscription, Franchise, Freemium, and Multi-Sided Platform architectures.',
        'Deconstruct how leading Uzbek companies scale using network effects and recurring revenue.',
      ],
    },
    sections: [
      {
        id: 'm6-s1',
        title: {
          uz: '6.1. Osterwalder Biznes-model kanvasining (BMC) 9 ta bloki',
          ru: '6.1. Девять блоков канвы бизнес-модели А. Остервальдера (BMC)',
          en: '6.1. The 9 Building Blocks of Osterwalder’s Business Model Canvas',
        },
        paragraphs: {
          uz: [
            '40 betlik biznes-reja yozishdan oldin zamonaviy tadbirkorlar butun biznes mantiqini bitta A3 varag‘idagi 9 ta blokka joylashtiradilar. Kanvasning o‘ng qismi "Bozor va mijoz" (daromad keladigan tomon), chap qismi "Ichki jarayon va samaradorlik" (xarajat ketadigan tomon), markazi esa "Qiymat taklifi"dir.',
            'To‘ldirish tartibi doimo 1-blok — Mijoz segmentlaridan (CS) va 2-blok — Qiymat taklifidan (VP) boshlanadi, so‘ng Kanallar (CH), Mijoz bilan munosabatlar (CR), Daromad oqimlari (R$), Asosiy resurslar (KR), Asosiy jarayonlar (KA), Asosiy hamkorlar (KP) va Xarajatlar tarkibi (C$) aniqlanadi.',
          ],
          ru: [
            'До написания объемного бизнес-плана предприниматели проектируют логику компании на одном листе из 9 блоков — Business Model Canvas. Правая половина канвы отвечает за ценность и рынок (генерация выручки), левая — за операционную инфраструктуру и издержки.',
            'Заполнение всегда идет в строгом порядке: 1) Сегменты клиентов → 2) Ценностное предложение → 3) Каналы сбыта → 4) Взаимоотношения с клиентами → 5) Потоки доходов → 6) Ключевые ресурсы → 7) Ключевые процессы → 8) Ключевые партнеры → 9) Структура издержек.',
          ],
          en: [
            'Before drafting a 40-page document, founders visualize their entire enterprise on one page across 9 blocks. The right side of the Canvas addresses external customer value and revenue; the left side governs internal operations and cost structure, bridged at the center by the Value Proposition.',
            'Always map blocks in sequence: (1) Customer Segments → (2) Value Proposition → (3) Channels → (4) Customer Relationships → (5) Revenue Streams → (6) Key Resources → (7) Key Activities → (8) Key Partners → (9) Cost Structure.',
          ],
        },
        highlightTerms: ['bmc', 'value-proposition'],
      },
      {
        id: 'm6-s2',
        title: {
          uz: '6.2. Zamonaviy daromad va kengayish modellari',
          ru: '6.2. Современные бизнес-модели на рынке',
          en: '6.2. Modern Business Model Archetypes in Practice',
        },
        paragraphs: {
          uz: [
            'Bir martalik oddiy sotuvdan ko‘ra takroriy pul oqimi yoki tarmoq effekti beruvchi biznes-modellar investorlar tomonidan 3–5 barobar yuqori baholanadi. Bugun O‘zbekistonda eng tez o‘sayotgan 5 ta modelni ko‘rib chiqamiz.',
          ],
          ru: [
            'Компании с регулярной выручкой или платформенным сетевым эффектом растут быстрее и оцениваются инвесторами значительно выше разовой розничной торговли.',
          ],
          en: [
            'Ventures built on recurring revenues or asset-light network effects compound far faster than one-off transactional shops.',
          ],
        },
        highlightTerms: ['b2b', 'b2c', 'b2g', 'subscription-model', 'franchise'],
        comparisonTable: {
          headers: {
            uz: ['Biznes-model nomi', 'Qanday pul ishlaydi?', 'Kuchli tomoni va O‘zbekistondagi misol'],
            ru: ['Бизнес-модель', 'Механика монетизации', 'Преимущество и пример в Узбекистане'],
            en: ['Model Archetype', 'Monetization Engine', 'Strategic Advantage & Uzbek Example'],
          },
          rows: {
            uz: [
              ['Obuna (Subscription / SaaS)', 'Oylik yoki yillik doimiy abonent to‘lovi', 'Oldindan bashorat qilinadigan tushum (Yandex Plus, Billz SaaS, fitnes abonement)'],
              ['Franshiza (Franchising)', 'Bir martalik pauşal to‘lov + oylik savdodan royalti (%) yoki xomashyo yetkazish', 'Boshqalarning sarmoyasi hisobiga tarmoqni tez kengaytirish (Oqtepa Lavash, Evos, Safia hamkorlik formatlari, o‘quv tarmoqlari)'],
              ['Onlayn platforma / Marketpleys', 'Sotuvchi va xaridorni uchrashtirganlik uchun har bir bitimdan komissiya (Take rate)', 'O‘zi tovar ishlab chiqarmasdan millionlab assortimentga ega bo‘lish (Uzum Market, OLX, MyTaxi)'],
              ['Freemium', 'Bazaviy xizmat bepul, kengaytirilgan PRO imkoniyatlar pullik', 'Tez va arzon foydalanuvchi yig‘ish (Telegram Premium, til o‘rganish ilovalari)'],
              ['B2B korporativ autsorsing', 'Korxonalarga uzoq muddatli shartnoma bo‘yicha xizmat ko‘rsatish', 'Katta o‘rtacha chek va past mijoz ketishi (korporativ keytering, buxgalteriya autsorsingi, logistika)'],
            ],
            ru: [
              ['Подписка (Subscription / SaaS)', 'Регулярный ежемесячный/годовой платеж за доступ', 'Предсказуемый рекуррентный доход MRR (Billz, Workly, фитнес-клубы)'],
              ['Франшиза (Франчайзинг)', 'Паушальный взнос на старте + ежемесячное роялти с оборота', 'Быстрый рост сети за счет капитала партнеров-франчайзи (общепит, аптеки, образовательные центры)'],
              ['Онлайн-платформа / Маркетплейс', 'Комиссия с транзакции между продавцом и покупателем', 'Сетевой эффект без заморозки денег в собственных товарах (Uzum Market, MyTaxi, Express24)'],
              ['Freemium', 'Базовый функционал бесплатен, доплата за расширенный тариф', 'Вирусный охват широкой аудитории (онлайн-сервисы, EdTech-приложения)'],
              ['B2B-контракты', 'Долгосрочное абонентское обслуживание юридических лиц', 'Высокий средний чек и стабильность (IT-интеграция, клининг, оптовые поставки)'],
            ],
            en: [
              ['Subscription / SaaS', 'Recurring monthly or annual access fee', 'Predictable Monthly Recurring Revenue (Billz retail SaaS, Workly, gym memberships)'],
              ['Franchising', 'Upfront franchise fee + ongoing % royalty or supply margin', 'Rapid regional scaling using franchisees’ capex (QSR chains, pharmacies, academies)'],
              ['Multi-Sided Platform', 'Transaction take-rate commission connecting buyers & sellers', 'Compounding network effects without owning inventory (Uzum Market, MyTaxi)'],
              ['Freemium', 'Core tier free forever; paid upgrade for power features', 'Frictionless viral user acquisition (EdTech apps, productivity tools)'],
              ['B2B Retainer Services', 'Multi-month corporate SLA contracts', 'High average contract value & low churn (outsourced accounting, B2B catering)'],
            ],
          },
        },
      },
    ],
    diagramType: 'bmc-canvas',
    diagramTitle: {
      uz: 'Osterwalder Biznes-model kanvasi (9 blokli interaktiv sxema)',
      ru: 'Канва бизнес-модели Остервальдера (интерактивная структура 9 блоков)',
      en: 'Osterwalder’s 9-Block Business Model Canvas',
    },
    diagramNote: {
      uz: 'Har bir blok o‘zaro bog‘langan: qiymat taklifi o‘zgarsa, kanallar va xarajatlar tarkibi ham mos ravishda qayta ko‘rib chiqiladi.',
      ru: 'Все 9 блоков связаны: изменение ценностного предложения требует пересчета ресурсов и каналов сбыта.',
      en: 'All 9 blocks interlock: shifting your Value Proposition ripples across Channels, Key Resources, and Cost Structure.',
    },
    stats: [
      {
        value: { uz: '$1,3–2,0+ mlrd', ru: '$1,3–2,0+ млрд', en: '$1.3B–$2.0B+' },
        label: {
          uz: 'O‘zbekiston elektron tijorat (marketpleys va onlayn savdo) bozorining baholangan hajmi',
          ru: 'Оценочный объем рынка электронной коммерции Узбекистана',
          en: 'Estimated Uzbekistan e-commerce & marketplace market volume',
        },
        subnote: { uz: 'Platforma biznes-modellarining jadal o‘sishi natijasi', ru: 'Стремительный рост платформенных моделей', en: 'Driven by rapid marketplace & fintech adoption' },
        year: '2025',
        sourceName: { uz: 'Xalqaro va mahalliy e-commerce tahlillari (KPMG / tarmoq hisobotlari)', ru: 'Отраслевые обзоры e-commerce', en: 'Regional E-Commerce Industry Reports' },
        sourceUrl: 'https://digital.uz',
      },
      {
        value: { uz: '9% – 11%', ru: '9% – 11%', en: '9% – 11%' },
        label: {
          uz: 'Chakana savdo umumiy hajmida elektron tijorat ulushini yetkazish maqsadli ko‘rsatkichi',
          ru: 'Целевой ориентир доли электронной коммерции в розничной торговле РУз',
          en: 'National target share of e-commerce in total retail trade',
        },
        subnote: { uz: 'Hozirgi ~4–5% ko‘rsatkichdan ikki barobar o‘sish salohiyati', ru: 'Потенциал двукратного роста с текущих ~4–5%', en: 'Over 2x expansion trajectory from ~4–5% baseline' },
        year: '2025–2027 maqsadi',
        sourceName: { uz: 'Raqamli iqtisodiyot va e-tijoratni rivojlantirish dasturlari', ru: 'Госпрограммы развития цифровой экономики', en: 'National Digital Economy Strategy' },
        sourceUrl: 'https://lex.uz',
      },
      {
        value: { uz: '3–5x', ru: '3–5x', en: '3–5x' },
        label: {
          uz: 'Obuna (MRR) modelidagi kompaniyalarning bir martalik savdo biznesiga nisbatan o‘rtacha yuqori baholanishi',
          ru: 'Премия в оценке подписочных (MRR) компаний по сравнению с разовыми продажами',
          en: 'Typical valuation multiple premium for recurring-revenue models over one-off sales',
        },
        subnote: { uz: 'Mijoz sodiqligi va pul oqimi barqarorligi hisobiga', ru: 'За счет предсказуемого денежного потока', en: 'Reflects predictable retention and lower re-acquisition cost' },
        year: 'Global SaaS/VC me’yori',
        sourceName: { uz: 'Xalqaro venchur tahlili', ru: 'Международная венчурная аналитика', en: 'Global Venture Valuation Benchmarks' },
        sourceUrl: 'https://it-park.uz',
      },
    ],
    charts: [
      {
        id: 'm6-chart-1',
        type: 'line',
        title: {
          uz: '12 oylik tushum dinamikasi: Bir martalik savdo vs Obuna (Subscription) modeli (mln so‘m, shartli)',
          ru: 'Динамика выручки за 12 мес.: Разовые продажи против Подписочной модели (млн сумов)',
          en: '12-Month Revenue Compounding: One-Off Sales vs. Recurring Subscription (M UZS)',
        },
        unit: { uz: 'mln so‘m', ru: 'млн сумов', en: 'M UZS' },
        year: 'Biznes-model simulyatsiyasi',
        sourceName: { uz: 'Har oy 30 ta yangi mijoz qo‘shilgandagi matematik model', ru: 'Модель при притоке 30 новых клиентов/мес.', en: 'Cohort Retention Model (30 new customers/mo)' },
        sourceUrl: 'https://it-park.uz',
        seriesLabel: { uz: 'Obuna modeli (jamlanuvchi)', ru: 'Подписочная модель', en: 'Subscription Model' },
        secondarySeriesLabel: { uz: 'Bir martalik sotuv', ru: 'Разовые продажи', en: 'One-Off Transactional' },
        data: [
          { name: { uz: '1-oy', ru: '1 мес', en: 'M1' }, value: 9, secondaryValue: 24 },
          { name: { uz: '3-oy', ru: '3 мес', en: 'M3' }, value: 25, secondaryValue: 26 },
          { name: { uz: '6-oy', ru: '6 мес', en: 'M6' }, value: 47, secondaryValue: 25 },
          { name: { uz: '9-oy', ru: '9 мес', en: 'M9' }, value: 66, secondaryValue: 28 },
          { name: { uz: '12-oy', ru: '12 мес', en: 'M12' }, value: 84, secondaryValue: 27 },
        ],
      },
      {
        id: 'm6-chart-2',
        type: 'pie',
        title: {
          uz: 'O‘zbekistonda onlayn xaridlarda yetakchi tovar toifalari ulushi (%)',
          ru: 'Топ категорий товаров в онлайн-торговле Узбекистана (%)',
          en: 'Leading Consumer Categories in Uzbekistan Online Commerce (%)',
        },
        unit: { uz: '%', ru: '%', en: '%' },
        year: '2025',
        sourceName: { uz: 'Elektron tijorat bozori tahlillari', ru: 'Аналитика рынка e-commerce РУз', en: 'Uzbekistan E-Commerce Category Breakdown' },
        sourceUrl: 'https://digital.uz',
        seriesLabel: { uz: 'Ulushi (%)', ru: 'Доля (%)', en: 'Share (%)' },
        data: [
          { name: { uz: 'Elektronika va maishiy tex.', ru: 'Электроника и техника', en: 'Electronics & Appliances' }, value: 35 },
          { name: { uz: 'Kiyim-kechak va poyabzal', ru: 'Одежда и обувь', en: 'Fashion & Apparel' }, value: 22 },
          { name: { uz: 'Go‘zallik va uy-ro‘zg‘or', ru: 'Красота и товары для дома', en: 'Beauty & Home Goods' }, value: 24 },
          { name: { uz: 'Oziq-ovqat yetkazish va b.', ru: 'Продукты и прочее', en: 'Grocery Delivery & Other' }, value: 19 },
        ],
      },
    ],
    legalActs: [
      {
        id: 'm6-law-1',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Elektron tijorat to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni (yangi tahrir)',
          ru: 'Закон РУз «Об электронной коммерции» (новая редакция)',
          en: 'Law "On Electronic Commerce" (Revised Edition)',
        },
        summary: {
          uz: 'Onlayn savdo platformalari (marketpleyslar), raqamli maydoncha operatorlari, elektron ommaviy oferta shartnomalari va eskrou/onlayn to‘lov xavfsizligini tartibga soladi.',
          ru: 'Регулирует работу маркетплейсов, интернет-магазинов, юридическую силу электронных договоров (публичной оферты) и защиту онлайн-покупателей.',
          en: 'Governs online marketplaces, digital platform operators, legally binding electronic public offers, and consumer payment safeguards.',
        },
        relevance: {
          uz: 'Onlayn platforma, obuna xizmati va internet-do‘kon biznes-modellarining to‘g‘ridan-to‘g‘ri huquqiy asosi.',
          ru: 'Правовой фундамент для маркетплейсов, SaaS-сервисов и онлайн-магазинов.',
          en: 'Core legal framework for marketplace, SaaS subscription, and e-commerce business models.',
        },
        keyClauses: {
          uz: [
            'Elektron tijoratdagi elektron shartnoma (oferta tugmasini bosish va to‘lov qilish) qog‘ozda imzolangan shartnoma bilan teng yuridik kuchga ega.',
            'Sotuvchi o‘z rasmiy nomi, STIR (INN), manzili va tovar qaytarish shartlarini ochiq ko‘rsatishi shart.',
          ],
          ru: [
            'Электронный договор (акцепт публичной оферты) приравнивается к письменному бумажному договору.',
            'Продавец на платформе обязан раскрывать достоверные реквизиты, цену и условия возврата.',
          ],
          en: [
            'Digital click-wrap contracts and public offers carry identical legal enforceability to signed paper agreements.',
            'Online sellers must transparently disclose legal entity details, full pricing, and return policies.',
          ],
        },
        yearNote: '2022 / 2025 qo‘shimchalar bilan',
        lexUrl: 'https://lex.uz/docs/6213382',
      },
      {
        id: 'm6-law-2',
        docType: { uz: 'Kodeks', ru: 'Кодекс РУз', en: 'Civil Code of the RUz' },
        title: {
          uz: 'O‘zbekiston Respublikasi Fuqarolik kodeksi (50-bob: Kompleks tadbirkorlik litsenziyasi — Franchayzing, 862–874-moddalar)',
          ru: 'Гражданский кодекс РУз (Глава 50: Комплексная предпринимательская лицензия — Франчайзинг, ст. 862–874)',
          en: 'Civil Code of Uzbekistan (Chapter 50: Complex Entrepreneurial License — Franchising, Arts. 862–874)',
        },
        summary: {
          uz: 'Franshiza shartnomasini tuzish, tovar belgisi va tijorat sirini (nou-xau) boshqa tadbirkorga haq evaziga berish hamda sifat nazorati majburiyatlarini belgilaydi.',
          ru: 'Определяет правила договора франчайзинга (передачи бренда, технологии и стандартов работы за вознаграждение) и его государственной регистрации.',
          en: 'Regulates franchising agreements granting rights to trademarks, trade secrets, and operating standards in return for royalties.',
        },
        relevance: {
          uz: 'Tayyor brend franshizasini sotib olish yoki o‘z tarmog‘ini franshiza orqali viloyatlarga yoyishda qo‘llaniladi.',
          ru: 'Юридическая база при покупке готовой франшизы или упаковке собственной сети во франшизу.',
          en: 'Essential statute when buying a franchise or packaging your own successful brand for regional franchising.',
        },
        keyClauses: {
          uz: [
            'Franchayzing shartnomasi yozma ravishda tuziladi va vakolatli davlat organida ro‘yxatdan o‘tkazilishi kerak.',
            'Franshiza beruvchi (litsenziar) standartlarni taqdim etishi, oluvchi esa xizmat sifatini brend darajasidan tushirmasligi shart.',
          ],
          ru: [
            'Договор комплексной предпринимательской лицензии требует письменной формы и обязательной регистрации.',
            'Франчайзи обязан соблюдать единые стандарты качества сети правообладателя.',
          ],
          en: [
            'Franchise contracts must be executed in writing and officially registered to protect trademark rights.',
            'Franchisees are legally bound to uphold uniform quality standards matching the licensor’s brand.',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/180552',
      },
      {
        id: 'm6-law-3',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Davlat xaridlari to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni (B2G modeli uchun)',
          ru: 'Закон РУз «О государственных закупках» (для бизнес-модели B2G)',
          en: 'Law "On Public Procurement" (Governing B2G Business Models)',
        },
        summary: {
          uz: 'Kichik biznes subyektlarining elektron do‘kon, boshlang‘ich narxni pasaytirish auksioni va tenderlar (xarid.uzex.uz, etender.uzex.uz) orqali davlat buyurtmalarida qatnashish tartibini belgilaydi.',
          ru: 'Устанавливает прозрачный порядок участия малого бизнеса в электронных магазинах, аукционах на понижение цены и тендерах госзаказчиков.',
          en: 'Establishes transparent digital auction, e-shop, and tender rules enabling SMEs to win government supply contracts.',
        },
        relevance: {
          uz: 'Maktab, shifoxona va davlat korxonalariga mebel, oziq-ovqat yoki IT xizmat sotish (B2G) modelini ochadi.',
          ru: 'Позволяет малому бизнесу легально продавать товары школам, больницам и госкомпаниям без личных связей.',
          en: 'Unlocks reliable B2G demand from public schools, hospitals, and state enterprises via open online bidding.',
        },
        keyClauses: {
          uz: [
            'Barcha davlat xaridlari ochiq elektron portallar orqali va oldindan mablag‘ni hisob-kliring palatasida band qilish (to‘lov kafolati) asosida o‘tkaziladi.',
          ],
          ru: [
            'Оплата по сделкам в электронном магазине гарантируется депонированием средств заказчика в расчетно-клиринговой палате биржи.',
          ],
          en: [
            'Exchange clearinghouse escrow guarantees supplier payment once contracted goods are delivered and accepted.',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/5382976',
      },
    ],
    caseStudy: {
      title: {
        uz: 'Keys: "Toza Suv Filtr" korxonasining bir martalik savdodan Obuna (Subscription) modeliga o‘tishi',
        ru: 'Кейс: Трансформация компании «Toza Suv Filtr» от разовой продажи фильтров к подписочной модели',
        en: 'Case Study: Transforming "Toza Suv Filter" from One-Off Appliance Sales to Recurring Subscriptions',
      },
      scenario: {
        uz: 'Farg‘onalik tadbirkor Bobur uy uchun teskari osmos suv filtrlarini 2,8 mln so‘mdan sotar edi. Muammo: ko‘pchilik oilalarga 2,8 mln so‘mni birdaniga to‘lash og‘irlik qilar, sotib olganlar esa 6 oydan keyin kartrij almashtirishni esdan chiqarib qo‘yar va Bobur har oy yangidan qimmat reklama berib yangi mijoz qidirishga majbur bo‘lardi.',
        ru: 'Предприниматель Бобур в Фергане продавал бытовые фильтры очистки воды по 2,8 млн сумов. Высокий разовый чек отпугивал семьи, а каждый месяц приходилось заново тратить большой бюджет на поиск новых покупателей.',
        en: 'Bobur sold household reverse-osmosis water purifiers in Fergana for 2.8M UZS upfront. High upfront prices deterred middle-income families, forcing Bobur onto an expensive monthly ad treadmill to replace one-off buyers.',
      },
      analysis: {
        uz: 'Bobur mahsulotni o‘zgartirmadi, lekin Biznes-modelni o‘zgartirdi ("Water-as-a-Service"): o‘rnatish bepul, oila oyiga atigi 119 000 so‘m obuna to‘laydi (ichiga uskuna, har 6 oyda usta kelib kartrijlarni bepul yangilashi va kafolat kiradi). Natijada konversiya 3,5 barobar oshdi, 24 oyda bitta mijozdan tushum 2,85 mln so‘mga yetdi va 2-yildan keyin sof marja keskin ko‘tarildi.',
        ru: 'Бобур не менял сам фильтр, но сменил бизнес-модель на подписку: бесплатная установка за 119 000 сумов/мес. с регулярной заменой картриджей мастером компании. Конверсия выросла в 3,5 раза, а к 12-му месяцу база из 600 подписчиков приносила 71,4 млн сумов стабильной ежемесячной выручки без скачков.',
        en: 'Without changing the hardware, Bobur switched to a Subscription model: free installation for 119,000 UZS/month including scheduled filter cartridge replacements. Conversion jumped 3.5x, building a base of 600 subscribers generating 71.4M UZS in predictable monthly recurring revenue.',
      },
      numbersBreakdown: {
        uz: [
          'Eski model: oyiga 22 ta filtr sotuvi × 2,8 mln = 61,6 mln so‘m (keyingi oy 0 dan boshlanadi).',
          'Yangi obuna modeli: oyiga 65 ta yangi obunachi qo‘shiladi; 12-oyga borib 650 faol oila × 119 000 so‘m = oyiga 77,35 mln so‘m doimiy tushum!',
          'Mijoz uchun qulaylik: katta boshlang‘ich xarajatsiz doimo toza suv; biznes uchun esa uzoq muddatli barqaror LTV.',
        ],
        ru: [
          'Старая модель: ~22 разовые продажи/мес., нестабильный поток и высокие затраты на рекламу.',
          'Новая модель: к концу года 650 активных семей × 119 000 сумов = 77,35 млн сумов предсказуемой ежемесячной выручки (MRR).',
          'Выгода обеих сторон: клиенту доступно без крупного платежа, бизнесу — высокий LTV и лояльность.',
        ],
        en: [
          'Old Transactional Model: ~22 one-off sales/month resetting to zero on the 1st of every month.',
          'New Subscription Model: 650 active households by Month 12 × 119,000 UZS = 77.35M UZS recurring monthly revenue.',
          'Win-win alignment: zero upfront barrier for families; compounding LTV and high enterprise value for Bobur.',
        ],
      },
      challengeQuestion: {
        uz: 'Osterwalder Biznes-model kanvasida "har 6 oyda eslatma yuborish va usta tomonidan bepul servis ko‘rsatish" qaysi blokka kiradi?',
        ru: 'К какому из 9 блоков канвы Остервальдера в первую очередь относится механика удержания и регулярного сервисного сопровождения подписчиков?',
        en: 'In Osterwalder’s Business Model Canvas, automated cartridge reminders and ongoing subscriber care primarily belong to which block?',
      },
      challengeOptions: {
        uz: [
          'Mijozlar bilan munosabatlar (Customer Relationships) va Asosiy jarayonlar',
          'Faqat Asosiy hamkorlar (Key Partners)',
          'Ustav kapitali bloki (kanvasda bunday blok yo‘q)',
        ],
        ru: [
          'Взаимоотношения с клиентами (Customer Relationships) и Ключевые процессы',
          'Только Ключевые партнеры',
          'Блок налоговой отчетности',
        ],
        en: [
          'Customer Relationships (and Key Activities)',
          'Key Partners exclusively',
          'Charter Capital block',
        ],
      },
      correctOptionIndex: 0,
      challengeExplanation: {
        uz: 'Mijozni jalb qilgandan so‘ng uni saqlab qolish (retention), qayta aloqa va servis sodiqligi Kanvasning "Mijozlar bilan munosabatlar" (Customer Relationships) blokida aks ettiriladi.',
        ru: 'Механизмы удержания, заботы и продления подписки описываются в блоке «Взаимоотношения с клиентами» (Customer Relationships).',
        en: 'Subscriber retention workflows and proactive lifecycle service live squarely inside Customer Relationships.',
      },
    },
    keyTakeaways: {
      uz: [
        'Kuchli biznes-model o‘rtacha mahsulotni ham bozor yetakchisiga aylantira oladi; zaif model esa eng yaxshi ixtiro bilan ham zarar ko‘radi.',
        'Osterwalder Kanvasi 9 ta blok orqali daromad (o‘ng tomon) va xarajatlar (chap tomon) muvozanatini bitta sahifada ko‘rsatadi.',
        'Obuna (Subscription) modeli biznesga eng qimmatli narsani — kelasi oy tushumini oldindan aniq bashorat qilish imkonini beradi.',
        'Franshiza tarmoqni tez kengaytirishga yordam beradi, biroq kuchli standartlar va sifat nazoratisiz brend obro‘siga putur yetkazishi mumkin.',
        'Marketpleys va platformalarda muvaffaqiyat siri — ham sotuvchi, ham xaridor uchun bir vaqtda qulaylik va xavfsizlik yaratishdir.',
      ],
      ru: [
        'Бизнес-модель важнее самого товара: изменение способа монетизации способно кратно ускорить рост компании.',
        'Business Model Canvas связывает ценностное предложение с конкретными сегментами клиентов, каналами и экономикой издержек.',
        'Рекуррентные модели (подписка, абонентские B2B-договоры) обеспечивают устойчивость бизнеса в несезон.',
        'Франчайзинг масштабирует только уже отлаженную и прибыльную собственную точку — нельзя продавать франшизу убыточного проекта.',
        'Онлайн-платформы выигрывают за счет низких предельных издержек и сетевого эффекта.',
      ],
      en: [
        'Superior business models routinely outperform superior standalone products.',
        'Osterwalder’s 9-block Canvas aligns external customer value capture (right side) with operational cost efficiency (left side).',
        'Recurring subscription and B2B retainer models stabilize cash flow and command higher company valuations.',
        'Franchise only after your flagship unit runs profitably on documented, repeatable SOPs.',
        'Platform marketplaces thrive on trust, liquidity, and two-sided network effects.',
      ],
    },
  },
  {
    id: 'm7',
    number: 7,
    code: 'M7',
    hours: 2,
    readMinutes: 15,
    iconName: 'Users',
    roadmapStage: { uz: 'Mijoz va Bozor', ru: 'Клиент и Рынок', en: 'Customer & Market' },
    title: {
      uz: 'Mijoz kim va unga nima kerak? Segmentlash va bozor hajmi',
      ru: 'Кто ваш клиент и что ему нужно? Сегментация и оценка рынка',
      en: 'Knowing Your Customer: Segmentation, Persona & Market Sizing',
    },
    shortDesc: {
      uz: 'Maqsadli auditoriyani segmentlash, ideal mijoz portreti (Buyer Persona) hamda TAM, SAM va SOM bozor hajmlarini hisoblash.',
      ru: 'Сегментация целевой аудитории, портрет идеального клиента (Persona) и расчет емкости рынка по методике TAM, SAM, SOM.',
      en: 'Target market segmentation, crafting actionable Buyer Personas, and quantifying TAM, SAM, and SOM market opportunity.',
    },
    summary: {
      uz: '“Mening mahsulotim hammaga kerak” degan javob — marketingdagi eng katta xatodir: hammaga sotaman degan tadbirkor hech kimga sota olmaydi. Ushbu mavzuda mijozlarni aniq segmentlarga ajratish, jonli Persona yaratish va bozor sig‘imini (TAM / SAM / SOM) raqamlarda hisoblash o‘rgatiladi.',
      ru: 'Фраза «наш продукт нужен всем» — верный признак провала маркетинга. В модуле изучаются критерии сегментации рынка, составление портрета клиента (Buyer Persona) и расчет реального объема рынка по модели TAM–SAM–SOM.',
      en: 'Claiming "everyone is our customer" guarantees unfocused marketing. This module teaches precision market segmentation, behavioral Buyer Persona design, and bottom-up/top-down TAM–SAM–SOM market sizing.',
    },
    learningObjectives: {
      uz: [
        'Bozorni 4 ta klassik mezon (geografik, demografik, psixografik va xulq-atvor) bo‘yicha aniq xarid segmentlariga bo‘lish.',
        'Ideal mijoz portretini (Buyer Persona) ehtiyoj, og‘riq, xarid to‘siqlari va axborot kanallari bilan birga tuzish.',
        'TAM (Umumiy bozor), SAM (Mavjud qamrov bozori) va SOM (Real egallanadigan bozor) ko‘rsatkichlarini so‘mda va mijoz sonida hisoblash.',
        'Yuqoridan pastga (Top-down) va pastdan yuqoriga (Bottom-up) bozor baholash usullarini amalda qo‘llash.',
      ],
      ru: [
        'Сегментировать рынок по географическим, демографическим, психографическим и поведенческим признакам.',
        'Составлять детальный портрет идеального покупателя (Buyer Persona) с учетом мотивов и возражений.',
        'Рассчитывать показатели TAM, SAM и SOM в денежном выражении и количестве потенциальных клиентов.',
        'Применять методы оценки рынка «сверху вниз» (Top-down) и «снизу вверх» (Bottom-up).',
      ],
      en: [
        'Segment heterogeneous markets across geographic, demographic, psychographic, and behavioral dimensions.',
        'Build a concrete Buyer Persona capturing triggers, frustrations, decision barriers, and preferred media channels.',
        'Quantify TAM, SAM, and SOM in both currency (UZS) and unit headcount.',
        'Cross-check Top-Down macroeconomic estimates against realistic Bottom-Up operational capacity.',
      ],
    },
    sections: [
      {
        id: 'm7-s1',
        title: {
          uz: '7.1. Maqsadli mijozlarni segmentlashning 4 ustuni',
          ru: '7.1. Четыре критерия сегментации целевой аудитории',
          en: '7.1. Four Pillars of Target Market Segmentation',
        },
        paragraphs: {
          uz: [
            'Segmentlash — umumiy bozorni ehtiyojlari, to‘lov qobiliyati va xarid odatlari bir-biriga o‘xshash bo‘lgan aniq guruhlarga ajratishdir. Masalan, "bolalar kiyimi" bozori juda keng, ammo "Toshkent shahrida yashovchi, 1–5 yoshli farzandi bor, ekologik paxta matoni qadrlaydigan va Instagram orqali buyurtma qiladigan o‘rta+ daromadli onalar" — bu aniq segmentdir.',
            'To‘rtta asosiy segmentlash mezoni: 1) Geografik (viloyat, shahar/qishloq, mahalla zichligi, iqlim); 2) Demografik (yosh, jins, oilaviy holat, oylik daromad, kasb); 3) Psixografik (qadriyatlar, hayot tarzi, statusga intilish yoki tejamkorlik); 4) Xulq-atvor (qanchalik tez-tez xarid qiladi, o‘rtacha cheki qancha, chegirmaga ta’sirchanligi).',
          ],
          ru: [
            'Сегментация делит неоднородный рынок на понятные группы людей, которые одинаково реагируют на рекламу и продукт. Вместо размытого «продаем кофе всем» бизнес выделяет сегмент: «офисные сотрудники 22–38 лет в деловом центре, покупающие латте навынос по пути на работу с 8:15 до 9:30».',
            'Четыре разреза сегментации: 1) Географический (город, район, радиус пешей доступности); 2) Демографический (возраст, пол, состав семьи, уровень дохода); 3) Психографический (ценности, интересы, стиль жизни); 4) Поведенческий (частота покупки, повод, чувствительность к цене).',
          ],
          en: [
            'Segmentation partitions a broad population into focused buyer cohorts sharing similar needs and purchasing behavior. Instead of targeting "everyone who drinks coffee," a smart founder targets "office professionals aged 22–38 within a 400-meter walk of business centers grabbing morning takeaway lattes between 8:15 and 9:30 AM."',
            'The four segmentation lenses: (1) Geographic (region, urban density, walking radius); (2) Demographic (age, income bracket, occupation, household size); (3) Psychographic (values, lifestyle, status vs. thrift); and (4) Behavioral (purchase frequency, occasion, brand loyalty).',
          ],
        },
        highlightTerms: ['segmentation'],
      },
      {
        id: 'm7-s2',
        title: {
          uz: '7.2. Ideal mijoz portreti (Buyer Persona) va JTBD yondashuvi',
          ru: '7.2. Портрет идеального клиента (Persona) и концепция Jobs-To-Be-Done',
          en: '7.2. Crafting a Buyer Persona & Jobs-To-Be-Done (JTBD)',
        },
        paragraphs: {
          uz: [
            'Segment aniqlangach, jamoa ko‘z oldida jonli inson gavdalanishi uchun Buyer Persona (mijoz avatari) tuziladi. Unda aniq ism va yosh (masalan, "Nodira, 29 yosh, bank xodimi, 2 farzand onasi, oylik oilaviy daromadi 16 mln so‘m"), uning asosiy maqsadi ("kechqurun ishdan charchab kelganda 20 daqiqada oilasiga mazali ovqat tayyorlash"), qo‘rquvi ("yarim tayyor mahsulot sifatsiz bo‘lib chiqishidan xavotir") va qaysi Telegram kanallarni o‘qishi yoziladi.',
            'Garvard professori Kleyton Kristensenning JTBD (Jobs-To-Be-Done) tamoyili shuni to‘ldiradi: mijoz "drel sotib olmoqchi emas, unga devordagi 8 mm teshik (aniqrog‘i, chiroyli osilgan rasm) kerak". Mijoz mahsulotingizni qanday "ishni bajarishga yollayotganini" tushunsangiz, reklama matningiz nishonga aniq tegadi.',
          ],
          ru: [
            'Buyer Persona превращает сухую статистику в конкретного человека: например, «Нодира, 29 лет, специалист в банке, мама двоих детей, доход семьи 16 млн сумов». В карточке персоны фиксируются её главная задача (накормить семью ужином за 20 минут после работы), страхи (сомнение в свежести полуфабрикатов) и каналы доверия.',
            'Метод Jobs-To-Be-Done дополняет портрет: человек «нанимает» продукт для выполнения конкретной жизненной задачи — продавайте результат этой задачи, а не технические характеристики.',
          ],
          en: [
            'A Buyer Persona humanizes demographic numbers into a vivid profile — e.g., "Nodira, 29, bank analyst, mother of two, household income 16M UZS, wants a wholesome family dinner ready in 20 minutes after commuting, worries about preservative-laden frozen foods, and trusts parenting Telegram channels."',
            'Clayton Christensen’s Jobs-To-Be-Done (JTBD) framework sharpens this further: people don’t want a quarter-inch drill; they want a quarter-inch hole to hang a family portrait. Market the outcome your customer hires your product to achieve.',
          ],
        },
        highlightTerms: ['buyer-persona'],
      },
      {
        id: 'm7-s3',
        title: {
          uz: '7.3. Bozor hajmini baholash: TAM, SAM va SOM',
          ru: '7.3. Оценка емкости рынка: TAM, SAM и SOM',
          en: '7.3. Market Sizing Methodology: TAM, SAM & SOM',
        },
        paragraphs: {
          uz: [
            'Investor yoki bank "bozoringiz qancha?" deb so‘raganda "O‘zbekistonda 38 million aholi bor, har biri 10 ming so‘mdan bersa 380 mlrd bo‘ladi" deyish jiddiy xatodir. Professional tahlilda 3 ta konsentrik doira hisoblanadi:',
            '• TAM (Total Addressable Market) — mamlakat yoki mintaqadagi ushbu mahsulot toifasiga bo‘lgan jami yillik talab.\n• SAM (Serviceable Available Market) — TAM ning siz tanlagan shahar/viloyat, narx segmenti va tarqatish kanali qamrab ola oladigan qismi.\n• SOM (Serviceable Obtainable Market) — mavjud ishlab chiqarish quvvatingiz, marketing byudjetingiz va raqobatchilarni hisobga olganda yaqin 1 yilda amalda qo‘lga kiritishingiz mumkin bo‘lgan haqiqiy ulush (odatda SAM ning 1–5% atrofida). SOM har doim "Pastdan yuqoriga" (Bottom-up: nechta usta × kuniga nechta buyurtma × o‘rtacha chek) usulida tekshirilishi shart.',
          ],
          ru: [
            'Оценивать рынок фразой «в Узбекистане 38 млн жителей, если каждый купит на 10 тысяч сумов...» некорректно. В финансовом анализе используют три вложенных уровня:',
            '• TAM (Общий объем рынка) — совокупный годовой спрос на категорию продукта в стране.\n• SAM (Доступный рынок) — часть TAM в вашем регионе, ценовом сегменте и канале продаж.\n• SOM (Реально достижимый рынок) — доля SAM, которую ваш бизнес реально способен занять за 1–2 года с учетом производственной мощности и бюджета на маркетинг. SOM обязательно проверяется расчетом «снизу вверх» (Bottom-up).',
          ],
          en: [
            'Telling an investor "Uzbekistan has 38 million people, and if just 1% buy..." signals amateur analysis. Rigorous market sizing quantifies three nested tiers:',
            '• TAM (Total Addressable Market): aggregate annual spending across the entire product category nationwide.\n• SAM (Serviceable Available Market): the portion of TAM reachable by your specific geography, price tier, and channel.\n• SOM (Serviceable Obtainable Market): the realistic slice of SAM your venture can capture in Year 1–2 given production capacity, sales headcount, and competition — cross-checked Bottom-Up.',
          ],
        },
        highlightTerms: ['tam', 'sam', 'som'],
      },
    ],
    diagramType: 'tam-sam-som',
    diagramTitle: {
      uz: 'TAM → SAM → SOM: Bozor hajmini toraytirib real maqsadni aniqlash',
      ru: 'Модель TAM → SAM → SOM: от общей емкости рынка к реальному плану продаж',
      en: 'TAM → SAM → SOM Concentric Market Sizing Funnel',
    },
    diagramNote: {
      uz: 'Pastdagi interaktiv TAM/SAM/SOM kalkulyatorida o‘z biznes g‘oyangiz raqamlarini kiritib doiralarni hisoblab ko‘ring.',
      ru: 'Ниже на странице доступен интерактивный калькулятор TAM/SAM/SOM для расчета вашей собственной ниши.',
      en: 'Use the embedded TAM/SAM/SOM calculator below to model your own venture’s addressable revenue.',
    },
    stats: [
      {
        value: { uz: '37,5–38 mln+', ru: '37,5–38 млн+', en: '37.5M–38M+' },
        label: {
          uz: 'O‘zbekiston Respublikasi doimiy aholisi soni (Markaziy Osiyodagi eng yirik iste’mol bozori)',
          ru: 'Численность постоянного населения Узбекистана (крупнейший рынок ЦА)',
          en: 'Permanent population of Uzbekistan (Central Asia’s largest consumer market)',
        },
        subnote: { uz: 'Har yili ~700–800 ming tabiiy o‘sish kuzatilmoqda', ru: 'Ежегодный прирост создает новый спрос', en: 'Strong demographic expansion fuels domestic B2C demand' },
        year: '2025–2026',
        sourceName: { uz: 'Milliy statistika qo‘mitasi (stat.uz demografiya)', ru: 'Нацкомстат РУз (stat.uz)', en: 'Statistics Agency of Uzbekistan (stat.uz)' },
        sourceUrl: 'https://stat.uz',
      },
      {
        value: { uz: '~29 yosh', ru: '~29 лет', en: '~29 years' },
        label: {
          uz: 'O‘zbekiston aholisining o‘rtacha yoshi (yosh va raqamli texnologiyalarga ochiq bozor)',
          ru: 'Средний возраст населения Узбекистана (молодая аудитория)',
          en: 'Median age of Uzbekistan’s population',
        },
        subnote: { uz: 'Ta’lim, IT, umumiy ovqatlanish va bolalar tovarlari uchun yuqori TAM', ru: 'Высокий спрос на EdTech, общепит, детские товары и жилье', en: 'Drives outsized demand in EdTech, foodservice, housing, and retail' },
        year: '2025',
        sourceName: { uz: 'stat.uz demografik to‘plami', ru: 'Демографический сборник stat.uz', en: 'stat.uz Demographic Yearbook' },
        sourceUrl: 'https://stat.uz',
      },
      {
        value: { uz: '~51%', ru: '~51%', en: '~51%' },
        label: {
          uz: 'Shahar aholisining umumiy aholidagi salmog‘i (urbanizatsiya darajasi)',
          ru: 'Доля городского населения в общей численности (урбанизация)',
          en: 'Urban population share across Uzbekistan',
        },
        subnote: { uz: 'Shahar va qishloq iste’mol odatlarini alohida segmentlash zarur', ru: 'Важно при географической сегментации SAM', en: 'Crucial split when filtering national TAM down to urban SAM' },
        year: '2025',
        sourceName: { uz: 'stat.uz hududiy statistikasi', ru: 'Региональная статистика stat.uz', en: 'stat.uz Regional Statistics' },
        sourceUrl: 'https://stat.uz',
      },
    ],
    charts: [
      {
        id: 'm7-chart-1',
        type: 'bar',
        title: {
          uz: 'O‘zbekiston aholisining yosh guruhlari kesimidagi taxminiy tarkibi (%) — Segmentlash asosi',
          ru: 'Возрастная структура населения Узбекистана (%) — база для демографической сегментации',
          en: 'Approximate Age Structure of Uzbekistan’s Population (%) — Segmentation Baseline',
        },
        unit: { uz: '%', ru: '%', en: '%' },
        year: '2025',
        sourceName: { uz: 'stat.uz demografik ma’lumotlari asosida yaxlitlangan', ru: 'Округлено по данным stat.uz', en: 'Rounded from stat.uz Demographic Data' },
        sourceUrl: 'https://stat.uz',
        seriesLabel: { uz: 'Aholi ulushi (%)', ru: 'Доля населения (%)', en: 'Population Share (%)' },
        data: [
          { name: { uz: '0–15 yosh', ru: '0–15 лет', en: 'Ages 0–15' }, value: 32 },
          { name: { uz: '16–29 yosh', ru: '16–29 лет', en: 'Ages 16–29' }, value: 24 },
          { name: { uz: '30–44 yosh', ru: '30–44 года', en: 'Ages 30–44' }, value: 22 },
          { name: { uz: '45–59 yosh', ru: '45–59 лет', en: 'Ages 45–59' }, value: 13 },
          { name: { uz: '60+ yosh', ru: '60+ лет', en: 'Ages 60+' }, value: 9 },
        ],
      },
      {
        id: 'm7-chart-2',
        type: 'bar',
        title: {
          uz: 'Misol: Toshkentdagi korporativ tushlik yetkazish xizmati uchun TAM / SAM / SOM (mlrd so‘m/yil)',
          ru: 'Пример расчета TAM / SAM / SOM для сервиса доставки корпоративных обедов в Ташкенте (млрд сумов/год)',
          en: 'Illustrative TAM / SAM / SOM Sizing: Corporate Office Lunch Delivery in Tashkent (Billion UZS/yr)',
        },
        unit: { uz: 'mlrd so‘m', ru: 'млрд сумов', en: 'B UZS' },
        year: 'O‘quv keys modeli',
        sourceName: { uz: 'Pastdan yuqoriga (Bottom-up) hisob namunasi', ru: 'Расчетный кейс Bottom-up', en: 'Bottom-Up Market Sizing Example' },
        sourceUrl: 'https://stat.uz',
        seriesLabel: { uz: 'Bozor hajmi (mlrd so‘m)', ru: 'Емкость (млрд сумов)', en: 'Market Volume (B UZS)' },
        data: [
          { name: { uz: 'TAM (Shahar ofis tushliklari)', ru: 'TAM (Все офисные обеды)', en: 'TAM (All Office Lunches)' }, value: 1800 },
          { name: { uz: 'SAM (Biznes-markazlar, 3 tum.)', ru: 'SAM (БЦ в 3 районах)', en: 'SAM (3 Central Districts)' }, value: 240 },
          { name: { uz: 'SOM (1-yil quvvati: 500 porsiya/kun)', ru: 'SOM (План 1 года: 500 обедов/д)', en: 'SOM (Yr 1 Capacity: 500/day)' }, value: 5.4 },
        ],
      },
    ],
    legalActs: [
      {
        id: 'm7-law-1',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Iste’molchilarning huquqlarini himoya qilish to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni',
          ru: 'Закон РУз «О защите прав потребителей»',
          en: 'Law "On Protection of Consumer Rights"',
        },
        summary: {
          uz: 'Mijozning mahsulot haqida to‘liq va to‘g‘ri ma’lumot olish, xavfsiz tovar xarid qilish, nuqsonli tovarni almashtirish yoki sifatli tovarni belgilangan muddatda qaytarish huquqlarini belgilaydi.',
          ru: 'Закрепляет право потребителя на достоверную информацию о товаре на государственном языке, безопасность продукции, гарантийный ремонт и возврат/обмен.',
          en: 'Establishes consumer rights to accurate Uzbek-language product labeling, safety standards, warranty remedies, and statutory return/exchange windows.',
        },
        relevance: {
          uz: 'Mijoz bilan ishlovchi har qanday B2C biznes rioya etishi shart bo‘lgan asosiy qonun.',
          ru: 'Базовый закон для любого B2C-бизнеса: правила маркировки, чеков и возвратов.',
          en: 'Cornerstone compliance law for every B2C enterprise regarding labeling, warranties, and returns.',
        },
        keyClauses: {
          uz: [
            'Tovar yorlig‘i va foydalanish yo‘riqnomasida davlat tilida (o‘zbek tilida) tarkibi, yaroqlilik muddati va ishlab chiqaruvchi haqida ma’lumot bo‘lishi shart.',
            'Iste’molchi nuqsonsiz nooziq-ovqat tovarini xarid qilgan kundan e’tiboran 10 kun ichida almashtirishga (qonunda istisno qilingan tovarlardan tashqari) haqli.',
          ],
          ru: [
            'Информация о товаре и изготовителе обязательно доводится до потребителя на государственном языке.',
            'Потребитель вправе в течение 10 дней обменять непродовольственный товар надлежащего качества (кроме перечня невозвратных товаров).',
          ],
          en: [
            'Product information, ingredients, and expiration dates must be clearly provided in the state language (Uzbek).',
            'Consumers hold a 10-day right to exchange unused non-food goods of proper quality (excluding statutory hygiene/medical exceptions).',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/4704',
      },
      {
        id: 'm7-law-2',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Rasmiy statistika to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni',
          ru: 'Закон РУз «Об официальной статистике»',
          en: 'Law "On Official Statistics"',
        },
        summary: {
          uz: 'Davlat statistika organlari tomonidan ochiq demografik va iqtisodiy ma’lumotlarni e’lon qilish hamda tadbirkorlar uchun ma’lumotlardan foydalanish kafolatlarini belgilaydi.',
          ru: 'Гарантирует открытый и бесплатный доступ бизнеса и исследователей к агрегированным официальным статистическим данным на stat.uz и siat.stat.uz.',
          en: 'Guarantees open public access to official demographic, regional, and industry datasets on stat.uz and siat.stat.uz for market research.',
        },
        relevance: {
          uz: 'TAM va SAM ni uydirma raqamlar bilan emas, balki siat.stat.uz rasmiy ochiq ma’lumotlar bazasi asosida hisoblash imkonini beradi.',
          ru: 'Позволяет предпринимателю брать точные данные по регионам, доходам и численности населения из портала siat.stat.uz.',
          en: 'Empowers founders to source verified regional demographics and retail spending directly from siat.stat.uz.',
        },
        keyClauses: {
          uz: [
            'Rasmiy statistika ma’lumotlari hamma uchun ochiq va bepul e’lon qilinadi; individual respondentlar siri esa qat’iy himoyalanadi.',
          ],
          ru: [
            'Официальная статистическая информация является общедоступной и открытой на государственных веб-ресурсах.',
          ],
          en: [
            'Aggregated official statistical series are publicly accessible free of charge via national data portals.',
          ],
        },
        yearNote: '2021',
        lexUrl: 'https://lex.uz/docs/5572410',
      },
      {
        id: 'm7-law-3',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Raqobat to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni (yangi tahrir)',
          ru: 'Закон РУз «О конкуренции» (новая редакция)',
          en: 'Law "On Competition" (Revised Edition)',
        },
        summary: {
          uz: 'Tovar bozorining chegaralarini aniqlash, ustun mavqeni suiiste’mol qilishni va insofsiz raqobatni (boshqa brend qadog‘ini takrorlash, yolg‘on taqqoslash) taqiqlashni tartibga soladi.',
          ru: 'Определяет понятие границ товарного рынка, доминирующего положения и запрещает недобросовестную конкуренцию (имитацию чужих брендов и дискредитацию).',
          en: 'Defines relevant product/geographic market boundaries and prohibits unfair competition, trademark imitation, and deceptive claims.',
        },
        relevance: {
          uz: 'Bozor ulushini (SOM) oshirishda halol raqobat qoidalariga rioya etish va o‘z brendini taqlidchilardan himoyalash uchun.',
          ru: 'Защищает ваш бизнес от копирования упаковки конкурентами и устанавливает правила честной борьбы за долю рынка.',
          en: 'Protects brands against look-alike packaging and sets legal boundaries for competitive market positioning.',
        },
        keyClauses: {
          uz: [
            'Raqobatchi tovarining tashqi ko‘rinishi, nomi va firmasini iste’molchini chalg‘itadigan darajada takrorlash insofsiz raqobat sifatida taqiqlanadi.',
          ],
          ru: [
            'Запрещается введение потребителей в заблуждение и копирование внешнего вида товара другого хозяйствующего субъекта.',
          ],
          en: [
            'Imitating a competitor’s trade dress, brand mark, or packaging to confuse consumers is strictly unlawful.',
          ],
        },
        yearNote: '2023',
        lexUrl: 'https://lex.uz/docs/6518381',
      },
    ],
    caseStudy: {
      title: {
        uz: 'Keys: Andijonda bolalar robototexnika va dasturlash klubi uchun TAM / SAM / SOM hisobi',
        ru: 'Кейс: Расчет TAM / SAM / SOM для детского клуба робототехники в Андижане',
        en: 'Case Study: Calculating TAM, SAM & SOM for a Kids’ Robotics Club in Andijan',
      },
      scenario: {
        uz: 'Diyorbek Andijon shahrida 8–14 yoshli maktab o‘quvchilari uchun haftasiga 3 marta o‘tiladigan Robototexnika to‘garagini (oylik to‘lov — 500 000 so‘m, o‘quv davomiyligi yiliga o‘rtacha 9 oy = yillik LTV 4,5 mln so‘m) ochmoqchi. Investor undan aniq bozor hisobini so‘radi.',
        ru: 'Диёрбек открывает в городе Андижане кружок робототехники и электроники для школьников 8–14 лет (абонемент — 500 000 сумов/мес., в среднем 9 месяцев обучения в году = 4,5 млн сумов с ученика в год). Инвестор попросил обосновать TAM, SAM и SOM.',
        en: 'Diyorbek plans to open a hands-on Robotics & STEM club in Andijan city for schoolkids aged 8–14 (tuition 500,000 UZS/month across 9 active months/year = 4.5M UZS annual revenue per student). A local angel investor asked for clear TAM, SAM, and SOM numbers.',
      },
      analysis: {
        uz: 'Diyorbek siat.stat.uz ma’lumotlaridan foydalanib hisobladi: 1) TAM (butun Andijon viloyatidagi 8–14 yoshli barcha pullik to‘garakka borishi mumkin bo‘lgan ~90 000 o‘quvchi × 4,5 mln) = 405 mlrd so‘m; 2) SAM (faqat Andijon shahrida yashovchi va oyiga 500 ming so‘m to‘lay oladigan oilalarning texnikaga qiziquvchi ~8 000 farzandi × 4,5 mln) = 36 mlrd so‘m; 3) SOM (1-yilda 3 ta jihozlangan xona quvvati: 18 ta guruh × 12 o‘quvchi = 216 nafar faol o‘quvchi × 4,5 mln) = 972 mln so‘m (SAM ning 2,7% ulushi — juda real va ishonchli ko‘rsatkich!).',
        ru: 'Расчет Диёрбека: 1) TAM (все дети 8–14 лет в Андижанской области из семей, оплачивающих доп. образование: ~90 000 чел. × 4,5 млн) = 405 млрд сумов; 2) SAM (дети 8–14 лет в самом г. Андижане из платежеспособного сегмента с интересом к STEM: ~8 000 чел. × 4,5 млн) = 36 млрд сумов; 3) SOM (реальная вместимость 3 классов в 1-й год: 18 групп × 12 учеников = 216 детей × 4,5 млн) = 972 млн сумов/год (2,7% от SAM).',
        en: 'Diyorbek’s calculation: (1) TAM (all ~90,000 kids aged 8–14 across Andijan region in fee-paying tutoring households × 4.5M UZS) = 405B UZS; (2) SAM (~8,000 STEM-interested kids within Andijan city able to afford 500k/mo × 4.5M UZS) = 36B UZS; (3) SOM (Year 1 capacity of 3 lab classrooms: 18 groups × 12 kids = 216 students × 4.5M UZS) = 972M UZS/year (2.7% of SAM — realistic and capacity-grounded!).',
      },
      numbersBreakdown: {
        uz: [
          'TAM (Viloyat bo‘yicha jami potensial): 405 mlrd so‘m/yil.',
          'SAM (Andijon shahri maqsadli segmenti): 36 mlrd so‘m/yil (8 000 potensial o‘quvchi).',
          'SOM (1-yildagi haqiqiy quvvat — 216 o‘quvchi): 972 mln so‘m/yil (SAM ning 2,7% i).',
        ],
        ru: [
          'TAM (областной потенциал): 405 млрд сумов/год.',
          'SAM (целевой сегмент г. Андижана): 36 млрд сумов/год (8 000 детей).',
          'SOM (реальный план 1-го года на 3 класса — 216 учеников): 972 млн сумов/год (2,7% от SAM).',
        ],
        en: [
          'TAM (Regional category ceiling): 405B UZS/year.',
          'SAM (Andijan city target demographic): 36B UZS/year (8,000 prospects).',
          'SOM (Year 1 classroom capacity — 216 students): 972M UZS/year (2.7% of SAM).',
        ],
      },
      challengeQuestion: {
        uz: 'Bolalar robototexnika klubida "Xaridor" (pul to‘lovchi) va "Foydalanuvchi" (iste’molchi) bir odammi? Reklama kimga yo‘naltirilishi kerak?',
        ru: 'Совпадают ли в детском образовательном центре «Покупатель» (плательщик) и «Пользователь»? На кого настраивать рекламу?',
        en: 'In a children’s robotics academy, are the Economic Buyer and the End User the same person? Who should targeted ads address?',
      },
      challengeOptions: {
        uz: [
          'Foydalanuvchi — 8–14 yoshli bola, lekin Xaridor (qaror qabul qiluvchi va to‘lovchi) — 30–45 yoshli ota-ona; asosiy maqsadli reklama ota-onalarning farzand kelajagi haqidagi motiviga yo‘naltiriladi',
          'Reklamani faqat 8 yoshli bolalarga ko‘rsatish kifoya, ular o‘zi to‘laydi',
          'Hech qanday farqi yo‘q, barcha yoshdagilarga (18–65+) bir xil reklama yoqiladi',
        ],
        ru: [
          'Пользователь — ребенок, но Плательщик — родители 30–45 лет; реклама настраивается на родителей с акцентом на будущее и навыки ребенка, а пробный урок должен увлечь самого ребенка',
          'Рекламу нужно показывать только детям младших классов',
          'Настраивать таргет на все возрасты подряд без сегментации',
        ],
        en: [
          'The child is the End User, while parents aged 30–45 are the Economic Buyers; ads must address parents’ aspirations while the trial class delights the child',
          'Target paid ads exclusively at 8-year-olds since they attend class',
          'Run unsegmented ads across ages 18–65+',
        ],
      },
      correctOptionIndex: 0,
      challengeExplanation: {
        uz: 'Ko‘plab sohalarda (bolalar tovarlari, korporativ dasturlar, sovg‘alar) Foydalanuvchi va To‘lovchi boshqa-boshqa shaxslardir. Persona tuzishda har ikkalasining ehtiyoji inobatga olinadi, to‘lov qarorini esa ota-ona qabul qiladi.',
        ru: 'Разделение ролей «Пользователь» и «Плательщик» критически важно: платит родитель (ему важна польза и безопасность), а удерживает абонемент интерес ребенка на уроке.',
        en: 'Separating Economic Buyer (parent) from End User (student) prevents wasted ad spend: messaging wins parental trust while engaging lessons drive retention.',
      },
    },
    calculatorId: 'tamsamsom',
    keyTakeaways: {
      uz: [
        '“Mahsulotim hammaga kerak” deyish — reklama byudjetini shamolga sovurish demakdir; aniq va tor segmentdan boshlang.',
        'Yaxshi segment 3 shartga javob beradi: aniq muammosi bor, to‘lov qobiliyatiga ega va unga reklama kanali orqali yetib borish mumkin.',
        'Buyer Persona va JTBD mijozning qaysi hayotiy vazifasini hal qilayotganingizni ko‘rsatib beradi.',
        'Bozor hajmini baholashda TAM uzoq muddatli ufqni, SAM maqsadli maydonni, SOM esa 1-yildagi haqiqiy savdo rejangizni bildiradi.',
        'SOM ni har doim "Pastdan yuqoriga" (xodimlar, xonalar, uskunalar quvvati × o‘rtacha chek) usulida tekshirib haqiqatga moslang.',
      ],
      ru: [
        'Узкая и понятная целевая ниша на старте всегда эффективнее попытки продавать «всем подряд».',
        'Платежеспособный сегмент должен испытывать осознанную боль и быть достижимым через конкретные каналы связи.',
        'Всегда различайте роли «Покупателя» (кто платит) и «Пользователя» (кто использует продукт).',
        'TAM показывает масштаб мечты для инвестора, SAM — рабочий рынок, а SOM — реалистичный план выручки на ближайший год.',
        'Проверяйте SOM методом «снизу вверх» через вашу фактическую пропускную способность.',
      ],
      en: [
        'Focused beachhead segmentation always beats vague mass-market messaging for early-stage ventures.',
        'A viable target segment must experience acute friction, possess purchasing power, and congregate in reachable channels.',
        'Always distinguish the Economic Buyer (decision-maker with the wallet) from the daily End User.',
        'TAM frames long-term category scale, SAM defines your reachable arena, and SOM anchors Year 1 execution.',
        'Validate SOM bottom-up against real physical capacity, staffing, and marketing budget.',
      ],
    },
  },
  {
    id: 'm8',
    number: 8,
    code: 'M8',
    hours: 2,
    readMinutes: 15,
    iconName: 'Megaphone',
    roadmapStage: { uz: 'Marketing va Logistika', ru: 'Маркетинг и Сбыт', en: 'Marketing & Delivery' },
    title: {
      uz: 'Mahsulotni reklama qilish va mijozga yetkazish',
      ru: 'Продвижение продукта и организация каналов доставки до клиента',
      en: 'Product Promotion, Digital Marketing & Distribution Channels',
    },
    shortDesc: {
      uz: 'Marketing-miks (4P), kichik byudjetli raqamli marketing (SMM, Telegram, Target), CAC hisobi hamda distribyutsiya va logistika zanjiri.',
      ru: 'Концепция маркетинг-микса (4P), малобюджетный цифровой маркетинг (SMM, Telegram, таргет), метрика CAC, дистрибуция и логистика.',
      en: 'The 4P Marketing Mix, lean digital acquisition (Instagram, Telegram, targeted ads), CAC economics, and distribution/logistics planning.',
    },
    summary: {
      uz: 'Eng ajoyib mahsulot ham omborda chang bosib yotsa — foyda keltirmaydi. Ushbu mavzuda Marketing-miks (4P) elementlarini uyg‘unlashtirish, O‘zbekistonda kam xarajat bilan samarali ishlaydigan raqamli reklama kanallarini tanlash va tovarni xaridorga uzluksiz yetkazish logistikasi o‘rganiladi.',
      ru: 'Даже лучший товар бесполезен, если целевой клиент не знает о нем или не может удобно его получить. Модуль объединяет классику 4P с практическими инструментами SMM, таргетированной рекламы, маркетплейсов и последней мили логистики в Узбекистане.',
      en: 'Even an exceptional product fails if prospects never discover it or struggle to receive it. This module integrates the classic 4P Marketing Mix with high-ROI digital marketing channels in Uzbekistan and reliable distribution logistics.',
    },
    learningObjectives: {
      uz: [
        'Marketing-miksning 4P (Product, Price, Place, Promotion) elementlarini yagona pozitsiyalash strategiyasida birlashtirish.',
        'O‘zbekiston bozorida kichik biznes uchun arzon va o‘lchanadigan raqamli kanallarni (Instagram Reels/Target, Telegram kanallar va botlar, 2GIS/Yandex Xaritalar, Marketpleyslar) tanlash.',
        'Mijozni jalb qilish qiymatini (CAC = Reklama byudjeti / Yangi mijozlar soni) hisoblash va ROAS samaradorligini baholash.',
        'To‘g‘ridan-to‘g‘ri (D2C) va bilvosita (ulgurji, diler, marketpleys punktlari) distribyutsiya kanallari hamda "oxirgi mil" logistikasini rejalashtirish.',
      ],
      ru: [
        'Согласовывать элементы комплекса 4P (Продукт, Цена, Место сбыта, Продвижение) без внутренних противоречий.',
        'Выбирать эффективные малобюджетные digital-каналы в Узбекистане (Instagram, Telegram, геосервисы 2GIS/Яндекс Карты, маркетплейсы).',
        'Рассчитывать стоимость привлечения клиента (CAC) и окупаемость рекламных вложений (ROAS / ROMI).',
        'Проектировать прямые и непрямые каналы дистрибуции, складскую обработку и доставку «последней мили».',
      ],
      en: [
        'Harmonize all four levers of the 4P Marketing Mix (Product, Price, Place, Promotion) around your target segment.',
        'Select high-efficiency digital acquisition channels in Uzbekistan (Instagram Reels/Ads, Telegram ecosystems, 2GIS/Yandex Maps SEO, Marketplaces).',
        'Compute Customer Acquisition Cost (CAC) and Return on Ad Spend (ROAS) to eliminate unprofitable campaigns.',
        'Design direct (D2C) and indirect wholesale/marketplace distribution networks alongside last-mile delivery logistics.',
      ],
    },
    sections: [
      {
        id: 'm8-s1',
        title: {
          uz: '8.1. Marketing-miks (4P): to‘rt g‘ildirak bir tomonga aylanishi shart',
          ru: '8.1. Концепция Маркетинг-микс (4P): гармония четырех элементов',
          en: '8.1. The 4P Marketing Mix: Synchronizing Product, Price, Place & Promotion',
        },
        paragraphs: {
          uz: [
            'Jerom Makkarti taklif etgan 4P modeli marketing faqat "reklama posteri chizish" emasligini ko‘rsatadi. To‘rtta dastak o‘zaro uyg‘un bo‘lishi shart:',
            '1) Product (Mahsulot): sifat, qadoq dizayni, brend nomi, kafolat va servis; 2) Price (Narx): narx darajasi, chegirmalar, bo‘lib to‘lash (muddatli to‘lov / nasiya) imkoniyati; 3) Place (Sotish joyi va kanali): xaridor tovarni qayerdan va qanchalik oson topishi (gavjum ko‘chadagi do‘kon, supermarket peshtaxtasi, Uzum Market yoki uyingizgacha yetkazish); 4) Promotion (Rag‘batlantirish): maqsadli reklama, PR, blogerlar (influencer), aksiyalar va sodiqlik dasturlari. Agar siz premium narxdagi (Price) shokoladni arzon ulgurji bozor chetida oddiy selofanda (Product + Place) sotsangiz — 4P buziladi va savdo yurmaydi.',
          ],
          ru: [
            'Модель 4P показывает, что реклама бессильна, если страдают остальные элементы комплекса:',
            '1) Product (Продукт) — свойства, упаковка, ассортимент и гарантия; 2) Price (Цена) — прайс-лист, скидки за объем и возможность рассрочки (BNPL); 3) Place (Место/Дистрибуция) — локация точки, представленность на полках сетей и маркетплейсах, удобство заказа; 4) Promotion (Продвижение) — реклама, контент, акции и PR. Все 4 элемента должны работать на один и тот же сегмент: премиальный продукт требует соответствующей упаковки, сервиса и локации.',
          ],
          en: [
            'Jerome McCarthy’s 4P framework demonstrates why advertising alone cannot rescue misaligned fundamentals. All four levers must reinforce a single positioning:',
            '(1) Product: core quality, packaging, assortment, warranty; (2) Price: list price, volume tiers, installment/BNPL options; (3) Place: physical foot-traffic location, retail shelf placement, or online checkout friction; and (4) Promotion: paid media, organic content, influencer partnerships, and referral incentives.',
          ],
        },
        highlightTerms: ['marketing-4p'],
      },
      {
        id: 'm8-s2',
        title: {
          uz: '8.2. Zamonaviy va hamyonbop raqamli marketing kanallari + CAC hisobi',
          ru: '8.2. Малобюджетный цифровой маркетинг в Узбекистане и расчет CAC',
          en: '8.2. Lean Digital Marketing Channels in Uzbekistan & CAC Math',
        },
        paragraphs: {
          uz: [
            'Kichik biznes uchun televideniye yoki ulkan ko‘cha bilbordlari qimmat va natijasini o‘lchash qiyin. Raqamli (digital) marketingda esa 500 000 so‘m bilan ham tajriba boshlab, har bir so‘m necha nafar mijoz olib kelganini aniq o‘lchash mumkin.',
            'O‘zbekistonda eng yuqori natija beruvchi 4 ta arzon kanal: 1) Qisqa vertikal videolar (Instagram Reels, YouTube Shorts) — mahsulot qanday tayyorlanishini va foydasini ko‘rsatish orqali bepul organik qamrov; 2) Maqsadli (Targeted) reklama — aynan 3 km radiusda yashovchi yoki muayyan yosh/qiziqishdagi foydalanuvchilarga e’lon ko‘rsatish; 3) Telegram ekotizimi — sohaviy kanallarda post joylashtirish va katalog-botlar; 4) Lokal GEO-marketing — qahvaxona, klinika, ustaxona va o‘quv markazini 2GIS, Yandex Maps hamda Google Maps xaritalariga bepul joylashtirib, ijobiy izohlar (otziv) yig‘ish.',
          ],
          ru: [
            'В отличие от наружных баннеров, цифровой маркетинг позволяет стартовать с малого бюджета и точно оцифровать результат каждого объявления через метрику CAC (Customer Acquisition Cost = Рекламный бюджет / Число новых покупателей).',
            'Четыре доступных канала в РУз: 1) Экспертные и продуктовые короткие видео (Instagram Reels / Shorts) для бесплатного органического охвата; 2) Таргетированная реклама с настройкой по гео-радиусу (например, 2 км вокруг пекарни) и интересам; 3) Продвижение в тематических Telegram-каналах и через Telegram Mini Apps; 4) Бесплатное продвижение локального бизнеса на картах 2GIS, Яндекс Карты и Google Maps с работой над рейтингом и отзывами.',
          ],
          en: [
            'Unlike costly billboards, digital marketing lets founders test acquisition starting under $50 while tracking exact Customer Acquisition Cost (CAC = Total Ad Spend ÷ New Paying Customers Acquired).',
            'Four high-ROI channels across Uzbekistan: (1) Short-form vertical video (Instagram Reels, YouTube Shorts) demonstrating behind-the-scenes craft for organic reach; (2) Hyper-local Targeted Ads filtered to a 2–5 km radius and buyer interests; (3) Niche Telegram channel placements & Mini-App bots; and (4) Zero-cost Local Map SEO on 2GIS, Yandex Maps, and Google Maps backed by verified customer reviews.',
          ],
        },
        highlightTerms: ['smm-targeting', 'cac', 'marketplace'],
      },
      {
        id: 'm8-s3',
        title: {
          uz: '8.3. Distribyutsiya kanallari va logistika zanjirini rejalashtirish',
          ru: '8.3. Каналы дистрибуции и логистика «последней мили»',
          en: '8.3. Distribution Architecture & Last-Mile Logistics Planning',
        },
        paragraphs: {
          uz: [
            'Distribyutsiya — mahsulot ishlab chiqaruvchidan yakuniy iste’molchi qo‘liga yetib borguncha bosib o‘tadigan yo‘ldir. Ikki asosiy model mavjud: 1) To‘g‘ridan-to‘g‘ri kanal (Direct / D2C): Ishlab chiqaruvchi → Xaridor (firma do‘koni, shaxsiy sayt/Instagram + kuryer). Afzalligi: butun marja o‘zingizda qoladi va mijoz bazasini bevosita bilasiz. 2) Bilvosita kanal (Indirect): Ishlab chiqaruvchi → Distribyutor / Ulgurji baza / Marketpleys → Chakana do‘konlar → Xaridor. Afzalligi: bir vaqtda minglab savdo nuqtalariga chiqish.',
            'Logistikada uchta xavfni oldindan hisoblang: tovar yetkazish narxi marjani "yeb qo‘ymasligi" (bepul yetkazish faqat minimal buyurtma summasidan, masalan 150 000 so‘mdan yuqori chekda berilishi), sovuq zanjir (oziq-ovqat va gullar uchun harorat rejimi) hamda qaytarilgan tovarlar (return logistics) foizi.',
          ],
          ru: [
            'Дистрибуция бывает прямой (D2C: производитель продает напрямую через свой магазин, сайт или Instagram с курьерской доставкой, сохраняя всю маржу и контакты клиентов) и непрямой (через региональных дистрибьюторов, розничные сети или пункты выдачи маркетплейсов, что дает быстрый охват всей страны).',
            'При планировании логистики важно контролировать долю доставки в чеке: устанавливайте порог бесплатной доставки (например, от 150 000 сумов), учитывайте процент невыкупа/возвратов и соблюдайте условия хранения при транспортировке.',
          ],
          en: [
            'Distribution follows either Direct-to-Consumer (D2C) pathways — retaining full margin and first-party customer data via brand stores or Instagram + couriers — or Indirect channels leveraging regional wholesalers, supermarket chains, and marketplace pickup points (PVZ) for nationwide reach.',
            'Smart logistics unit economics require three guardrails: setting a minimum order value threshold for free delivery so courier fees don’t erode margin, maintaining cold-chain packaging for perishables, and budgeting for reverse/return rates.',
          ],
        },
      },
    ],
    diagramType: 'marketing-4p',
    diagramTitle: {
      uz: 'Marketing-miks (4P) va Distribyutsiya zanjiri sxemasi',
      ru: 'Матрица Маркетинг-микс (4P) и каналы доведения товара до клиента',
      en: 'Integrated 4P Marketing Mix & Distribution Channels',
    },
    diagramNote: {
      uz: 'Har bir P elementi markazdagi Maqsadli Mijoz (Target Persona) ehtiyojiga xizmat qiladi.',
      ru: 'В центре системы 4P всегда находится конкретный портрет целевого клиента.',
      en: 'Every 4P decision orbits around the validated Target Customer Persona at the center.',
    },
    stats: [
      {
        value: { uz: '34 mln+', ru: '34 млн+', en: '34M+' },
        label: {
          uz: 'O‘zbekistonda faol mobil aloqa va mobil internet abonent ulanishlari soni',
          ru: 'Количество активных абонентских подключений мобильной связи и интернета в РУз',
          en: 'Active mobile cellular & internet connections across Uzbekistan',
        },
        subnote: { uz: 'Reklama va savdoning asosiy ekrani — smartfon (Mobile-first)', ru: 'Смартфон — главный экран потребления контента', en: 'Confirms Uzbekistan is overwhelmingly a mobile-first market' },
        year: '2025',
        sourceName: { uz: 'Raqamli texnologiyalar vazirligi / stat.uz', ru: 'Минцифры РУз / stat.uz', en: 'Ministry of Digital Technologies / stat.uz' },
        sourceUrl: 'https://digital.uz',
      },
      {
        value: { uz: '1 000+ PVZ', ru: '1 000+ ПВЗ', en: '1,000+ Pickup Points' },
        label: {
          uz: 'Mamlakat shahar va tumanlarida marketpleyslarning buyurtma topshirish punktlari tarmog‘i',
          ru: 'Сеть пунктов выдачи заказов (ПВЗ) маркетплейсов по городам и районам Узбекистана',
          en: 'Nationwide marketplace parcel pickup points enabling regional SME distribution',
        },
        subnote: { uz: 'Hududiy tadbirkorga o‘z mahsulotini butun respublikaga sotish yo‘li', ru: 'Готовая логистика по всей стране для малого производителя', en: 'Lets regional artisans ship nationwide without building private fleets' },
        year: '2025',
        sourceName: { uz: 'O‘zbekiston e-tijorat infratuzilmasi ochiq ma’lumotlari', ru: 'Открытые данные операторов e-commerce РУз', en: 'Uzbekistan E-Commerce Logistics Data' },
        sourceUrl: 'https://digital.uz',
      },
      {
        value: { uz: '≥ 3 : 1', ru: '≥ 3 : 1', en: '≥ 3 : 1' },
        label: {
          uz: 'Sog‘lom biznesda LTV : CAC (mijoz keltirgan foyda va uni jalb qilish xarajati) oltin nisbati',
          ru: 'Эталонное соотношение LTV к CAC (пожизненной прибыли с клиента к стоимости его привлечения)',
          en: 'Healthy benchmark ratio of Customer Lifetime Value (LTV) to CAC',
        },
        subnote: { uz: 'Agar LTV < CAC bo‘lsa, har bir yangi sotuv biznesni zararga tortadi', ru: 'При LTV ≤ CAC масштабирование рекламы убыточно', en: 'Scaling paid ads when LTV ≤ CAC accelerates losses' },
        year: 'Marketing standarti',
        sourceName: { uz: 'Unit Economics xalqaro amaliyoti', ru: 'Международный стандарт юнит-экономики', en: 'Standard Unit Economics Benchmark' },
        sourceUrl: 'https://it-park.uz',
      },
    ],
    charts: [
      {
        id: 'm8-chart-1',
        type: 'bar',
        title: {
          uz: 'Misol: Kichik biznesda 4 ta reklama kanalida 1 ta xarid qiluvchi mijozni jalb qilish qiymati (CAC, ming so‘m)',
          ru: 'Пример сравнения стоимости привлечения 1 покупателя (CAC) по каналам (тыс. сумов)',
          en: 'Sample Customer Acquisition Cost (CAC) Comparison Across Local Channels (Thousand UZS)',
        },
        unit: { uz: 'ming so‘m', ru: 'тыс. сумов', en: 'K UZS' },
        year: 'O‘quv amaliy tahlili',
        sourceName: { uz: 'Chakana xizmat va e-commerce o‘quv keysi', ru: 'Учебный срез малого бизнеса', en: 'SME Digital Marketing Case Benchmark' },
        sourceUrl: 'https://it-park.uz',
        seriesLabel: { uz: 'CAC (ming so‘m)', ru: 'CAC (тыс. сумов)', en: 'CAC (K UZS)' },
        data: [
          { name: { uz: '2GIS / Xaritalar + tavsiya', ru: '2GIS / Карты + сарафан', en: '2GIS Maps & Referrals' }, value: 12 },
          { name: { uz: 'Instagram Target + Reels', ru: 'Instagram Таргет + Reels', en: 'Instagram Ads + Reels' }, value: 35 },
          { name: { uz: 'Telegram sohaviy kanallar', ru: 'Telegram-посевы', en: 'Telegram Channel Ads' }, value: 42 },
          { name: { uz: 'Ko‘cha flayer/bannerlari', ru: 'Уличные флаеры/баннеры', en: 'Offline Flyers/Banners' }, value: 95 },
        ],
      },
      {
        id: 'm8-chart-2',
        type: 'pie',
        title: {
          uz: 'O‘zbekistonda kichik va o‘rta biznes reklama byudjetining kanallar bo‘yicha zamonaviy taqsimoti (%)',
          ru: 'Распределение маркетингового бюджета современного малого бизнеса в РУз (%)',
          en: 'Typical Modern SME Marketing Budget Allocation in Uzbekistan (%)',
        },
        unit: { uz: '%', ru: '%', en: '%' },
        year: '2025',
        sourceName: { uz: 'O‘zbekiston Marketing Uyushmasi tahlillari asosida', ru: 'По обзорам рынка рекламы РУз', en: 'Uzbekistan Digital Advertising Market Trends' },
        sourceUrl: 'https://marketing.uz',
        seriesLabel: { uz: 'Ulushi (%)', ru: 'Доля (%)', en: 'Budget Share (%)' },
        data: [
          { name: { uz: 'SMM va Target reklama', ru: 'SMM и Таргет', en: 'SMM & Targeted Ads' }, value: 46 },
          { name: { uz: 'Telegram va Blogerlar', ru: 'Telegram и Блогеры', en: 'Telegram & Influencers' }, value: 26 },
          { name: { uz: 'Marketpleys ichki reklamasi', ru: 'Продвижение на маркетплейсах', en: 'Marketplace Ads' }, value: 16 },
          { name: { uz: 'Oflayn / POS / Tadbirlar', ru: 'Офлайн и акции в точках', en: 'Offline / In-Store Promo' }, value: 12 },
        ],
      },
    ],
    legalActs: [
      {
        id: 'm8-law-1',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Reklama to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni (yangi tahrir, O‘RQ-776)',
          ru: 'Закон РУз «О рекламе» (новая редакция, ЗРУ-776)',
          en: 'Law "On Advertising" (Revised Edition, Law No. ZRU-776)',
        },
        summary: {
          uz: 'Reklamaga qo‘yiladigan til talablari, yolg‘on va insofsiz reklamani taqiqlash, chegirma/aksiyalarni e’lon qilish shartlari, dori vositalari, energetiklar va moliyaviy xizmatlar reklamasi cheklovlarini belgilaydi.',
          ru: 'Регулирует требования к языку рекламы, запрещает недостоверную рекламу и ложные скидки, устанавливает правила рекламы в интернете, у блогеров и на конструкциях.',
          en: 'Governs advertising language rules, bans deceptive discounts or unverified "number one" claims, and regulates influencer, outdoor, and restricted-category ads.',
        },
        relevance: {
          uz: 'SMM post, banner yoki aksiya e’lon qilishda jarimaga tushmaslik uchun har bir tadbirkor bilishi zarur.',
          ru: 'Критически важен при запуске акций, SMM-креативов и вывесок, чтобы избежать штрафов Комитета по конкуренции.',
          en: 'Essential compliance guide for running social ads, discount campaigns, and storefront signage.',
        },
        keyClauses: {
          uz: [
            'O‘zbekiston hududida reklama davlat tilida tarqatiladi; reklama mazmunining tarjimasi qo‘shimcha ravishda boshqa tillarda ham berilishi mumkin (qonunda belgilangan o‘lcham va tartibda).',
            'Hujjatli tasdiqlanmagan “eng arzon”, “ №1”, “yagona”, “100% kafolat” kabi bo‘rttirilgan iboralarni ishlatish hamda narxni sun’iy oshirib yolg‘on chegirma yozish taqiqlanadi.',
          ],
          ru: [
            'Реклама распространяется на государственном языке с правом дополнительного дублирования перевода на другие языки при соблюдении пропорций закона.',
            'Запрещено использовать неподтвержденные слова в превосходной степени («самый лучший», «№1», «самый дешевый») и фейковые зачеркнутые цены.',
          ],
          en: [
            'Advertisements in Uzbekistan must appear in the state language (Uzbek), with optional translations permitted under statutory formatting rules.',
            'Unsubstantiated superlatives ("#1", "cheapest", "best") and artificially inflated strike-through discounts are illegal.',
          ],
        },
        yearNote: '2022 / Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/6052631',
      },
      {
        id: 'm8-law-2',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Tovar belgilari, xizmat ko‘rsatish belgilari va tovar kelib chiqqan joy nomlari to‘g‘risida”gi Qonun',
          ru: 'Закон РУз «О товарных знаках, знаках обслуживания и наименованиях мест происхождения товаров»',
          en: 'Law "On Trademarks, Service Marks, and Appellations of Origin"',
        },
        summary: {
          uz: 'Brend nomi va logotipni Adliya vazirligi huzuridagi Intellektual mulk muassasasida ro‘yxatdan o‘tkazish hamda mutlaq foydalanish huquqini himoyalash tartibini belgilaydi.',
          ru: 'Определяет порядок регистрации логотипа и названия бренда (товарного знака) и защиту от незаконного использования конкурентами.',
          en: 'Governs trademark registration for brand names and logos, granting exclusive nationwide commercial rights.',
        },
        relevance: {
          uz: 'Reklamaga millionlab so‘m sarflab brendni tanitgandan keyin boshqa shaxs shu nomni o‘zlashtirib olmasligi uchun tovar belgisini ro‘yxatdan o‘tkazish shart.',
          ru: 'Не вкладывайте бюджет в раскрутку названия и вывески, пока не проверите и не подадите заявку на регистрацию товарного знака!',
          en: 'Register your trademark early so copycats cannot hijack brand equity built through your marketing spend.',
        },
        keyClauses: {
          uz: [
            'MChJning firma nomi sifatida ro‘yxatdan o‘tganlik avtomatik ravishda Tovar belgisi (brend) guvohnomasini bermaydi — tovar belgisi alohida ro‘yxatdan o‘tkaziladi (10 yil muddatga, keyin uzaytirish huquqi bilan).',
          ],
          ru: [
            'Название ООО в свидетельстве о регистрации бизнеса не заменяет свидетельство на Товарный знак — бренд регистрируется отдельно сроком на 10 лет.',
          ],
          en: [
            'Incorporating an LLC trade name does not automatically grant Trademark protection — trademarks require separate IP filing (valid 10 years, renewable).',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/24925',
      },
      {
        id: 'm8-law-3',
        docType: { uz: 'Kodeks / Qonun', ru: 'Гражданский кодекс и Закон о транспорте', en: 'Civil Code & Transport Legislation' },
        title: {
          uz: 'O‘zbekiston Respublikasi Fuqarolik kodeksi (Yuk tashish va transport ekspeditsiyasi, 40–41-boblar)',
          ru: 'Гражданский кодекс РУз (Перевозка грузов и транспортная экспедиция, главы 40–41)',
          en: 'Civil Code of Uzbekistan (Freight Carriage & Transport Forwarding, Chapters 40–41)',
        },
        summary: {
          uz: 'Tovarni logistika kompaniyasi yoki kuryerlik xizmati orqali yetkazib berishda yukning butligi, kechikishi va yo‘qolishi bo‘yicha moddiy javobgarlikni belgilaydi.',
          ru: 'Распределяет ответственность отправителя и перевозчика/курьерской службы за сохранность товара и сроки доставки.',
          en: 'Allocates legal liability between merchants and logistics carriers for damaged, delayed, or lost shipments.',
        },
        relevance: {
          uz: 'Viloyatlararo distribyutsiya va kuryerlik xizmatlari bilan shartnoma tuzishda tovar qiymatini sug‘urtalash/himoyalash uchun.',
          ru: 'Важен при заключении договоров с курьерскими службами и региональными перевозчиками.',
          en: 'Protects merchants when contracting third-party courier and regional freight partners.',
        },
        keyClauses: {
          uz: [
            'Tashuvchi yukni qabul qilib olgan paytdan to oluvchiga topshirgunga qadar yukning yo‘qolishi yoki shikastlanishi uchun moddiy javobgar bo‘ladi (agar fors-major isbotlanmasa).',
          ],
          ru: [
            'Перевозчик несет имущественную ответственность за утрату, недостачу или повреждение принятого к перевозке груза.',
          ],
          en: [
            'Carriers bear financial liability for cargo loss or damage occurring between dispatch acceptance and recipient handover.',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/180552',
      },
    ],
    caseStudy: {
      title: {
        uz: 'Keys: Marg‘ilonlik hunarmandning "Ipak Scarf" brendini Instagram + Marketpleys orqali 6 barobar o‘stirishi',
        ru: 'Кейс: Рост продаж маргиланской мастерской «Ipak Scarf» в 6 раз через связку Reels + Маркетплейс',
        en: 'Case Study: Scaling Margilan’s "Ipak Scarf" 6x via Instagram Reels + Marketplace Logistics',
      },
      scenario: {
        uz: 'Marg‘ilonda tabiiy ipak sharflar to‘quvchi ustaxona avval mahsulotini faqat mahalliy bozordagi ulgurji olib-sotarlar orqali dona narxi 90 000 so‘mdan (atigi 15 000 so‘m foyda bilan) sotar edi. Usta o‘g‘li bilan 4P va distribyutsiya modelini yangiladi: 1) Product: sovg‘abop magnitli quti va parvarish yo‘riqnomasi qo‘shildi; 2) Price: chakana narx 185 000 so‘m etib belgilandi; 3) Promotion: to‘quv dastgohidagi jonli jarayondan qisqa Reels videolar olindi va ayollar auditoriyasiga oyiga 3 mln so‘mlik target yoqildi; 4) Place: Toshkent va 12 ta viloyatga arzon hamda tez yetkazish uchun mahsulot Uzum Market omboriga va pochta integratsiyasiga ulandi.',
        ru: 'Семейная мастерская в Маргилане сдавала шелковые шарфы перекупщикам по 90 000 сумов с минимальной маржой 15 000 сумов. Обновив комплекс 4P (подарочная коробка, розничная цена 185 000 сумов, короткие видео Reels с ткацкого станка + таргет на 3 млн сумов и отгрузка через ПВЗ маркетплейса по всей стране), бренд вышел напрямую на конечных покупательниц.',
        en: 'A family silk-weaving workshop in Margilan previously sold scarves to middlemen at 90,000 UZS (earning just 15,000 UZS profit). Upgrading all 4Ps — gift-ready magnetic boxes (Product), 185,000 UZS retail pricing (Price), loom-weaving Reels + 3M UZS targeted ads (Promotion), and nationwide marketplace PVZ fulfillment (Place) — connected them directly to urban buyers.',
      },
      analysis: {
        uz: '3 mln so‘m reklama + organik Reels videolar oyiga 240 ta xarid olib keldi (CAC = 3 000 000 / 240 = 12 500 so‘m!). Har bir sharfdan barcha qadoq, komissiya va logistikadan keyingi sof foyda 58 000 so‘mga chiqdi.',
        ru: 'При бюджете 3 млн сумов мастерская получила 240 розничных заказов в месяц (CAC = 12 500 сумов при чистой марже 58 000 сумов с шарфа после комиссий и упаковки).',
        en: '3M UZS in ad spend plus viral Reels generated 240 monthly orders (CAC = 12,500 UZS against 58,000 UZS net unit margin after packaging and fulfillment fees).',
      },
      numbersBreakdown: {
        uz: [
          'Reklama xarajati: 3 000 000 so‘m/oy | Jalb qilingan xaridorlar: 240 nafar | CAC = 12 500 so‘m.',
          'Bir donadan sof marja: eski ulgurjida 15 000 so‘m → yangi D2C/Marketpleys modelida 58 000 so‘m.',
          'Oylik sof foyda o‘sishi: 3,6 mln so‘mdan → ~13,9 mln so‘mga (+3,8x birinchi chorakdayoq).',
        ],
        ru: [
          'Рекламный бюджет: 3 000 000 сумов/мес. | Покупателей: 240 | CAC = 12 500 сумов.',
          'Чистая прибыль с единицы выросла с 15 000 до 58 000 сумов.',
          'Ежемесячная прибыль мастерской выросла с 3,6 млн до ~13,9 млн сумов.',
        ],
        en: [
          'Monthly Ad Spend: 3,000,000 UZS | Orders: 240 | CAC = 12,500 UZS.',
          'Unit profit jumped from 15,000 UZS (middleman wholesale) to 58,000 UZS (direct branded retail).',
          'Monthly workshop net profit expanded from 3.6M UZS to ~13.9M UZS in Quarter 1.',
        ],
      },
      challengeQuestion: {
        uz: 'Agar tadbirkor reklama kampaniyasiga 4 000 000 so‘m sarflab, natijada 50 nafar yangi xaridor olsa va har bir xaridor keltiradigan yalpi foyda (marja) 60 000 so‘m (qayta xaridsiz) bo‘lsa, kampaniya natijasi qanday?',
        ru: 'Предприниматель потратил на рекламу 4 000 000 сумов, привлек 50 разовых покупателей, а валовая маржа с одного заказа составляет 60 000 сумов. Выгодна ли такая реклама?',
        en: 'A merchant spends 4,000,000 UZS on ads, acquires 50 one-time buyers, and earns 60,000 UZS gross profit per order. Evaluate this campaign:',
      },
      challengeOptions: {
        uz: [
          'Zararli: CAC = 80 000 so‘m (4 mln / 50), bu bitta mijozdan qoladigan 60 000 so‘m foydadan katta (har bir buyurtmada −20 000 so‘m zarar)',
          'Foydali, chunki 50 ta buyurtma ko‘p ko‘rinadi',
          'CAC 12 500 so‘mga teng',
        ],
        ru: [
          'Убыточна: CAC равен 80 000 сумов (4 млн / 50), что превышает маржу с клиента 60 000 сумов (−20 000 сумов убытка на каждом заказе)',
          'Выгодна, ведь выручка растет',
          'CAC равен 20 000 сумов',
        ],
        en: [
          'Unprofitable: CAC is 80,000 UZS (4M ÷ 50), exceeding the 60,000 UZS unit gross profit (−20,000 UZS net loss per order)',
          'Profitable because top-line order volume increased',
          'CAC equals 15,000 UZS',
        ],
      },
      correctOptionIndex: 0,
      challengeExplanation: {
        uz: 'CAC = 4 000 000 / 50 = 80 000 so‘m. Agar mijoz qayta xarid qilmasa (LTV = 60 000 so‘m), LTV < CAC bo‘lib qoladi. Bunday holatda yo reklama kreativini yaxshilab CAC ni tushirish, yo o‘rtacha chek va qayta xaridni oshirish shart.',
        ru: 'CAC (80 000 сумов) выше маржи (60 000 сумов). Нужно либо докручивать конверсию и снижать CAC, либо увеличивать средний чек и повторные покупки (LTV).',
        en: 'With CAC at 80,000 UZS vs. 60,000 UZS unit gross margin, every ad-driven order loses 20,000 UZS unless repeat purchases lift LTV or ad targeting lowers CAC.',
      },
    },
    keyTakeaways: {
      uz: [
        '4P qoidasi: zo‘r reklama (Promotion) sifatsiz qadoq (Product), noto‘g‘ri narx (Price) yoki noqulay yetkazishni (Place) uzoq qutqara olmaydi.',
        'Raqamli marketingni har doim kichik test byudjeti bilan boshlang va CAC (bitta mijoz necha so‘mga tushganini) o‘lchang.',
        'Mahalliy xizmat biznesi (kafe, stomatologiya, o‘quv markazi, avtoservis) uchun 2GIS va Yandex Maps xaritalari — eng arzon va "issiq" mijoz manbaidir.',
        'O‘zbekiston “Reklama to‘g‘risida”gi qonuniga muvofiq davlat tilidagi matn va haqqoniy ma’lumot me’yorlariga qat’iy amal qiling.',
        'Marketpleyslar va kuryerlik tarmoqlari viloyatdagi kichik ishlab chiqaruvchiga butun respublika bozorini ochib beradi.',
      ],
      ru: [
        'Маркетинг — это не только реклама, а синхронная работа Продукта, Цены, Дистрибуции и Продвижения (4P).',
        'Никогда не масштабируйте рекламный бюджет, пока не посчитаете CAC и не убедитесь, что LTV клиента существенно выше.',
        'Для локального офлайн-бизнеса регистрация и отзывы в 2GIS и Яндекс Картах дают самых целевых клиентов бесплатно.',
        'Соблюдайте Закон «О рекламе» РУз (требования к государственному языку и запрет на ложные скидки) и регистрируйте товарный знак.',
        'Грамотная логистика и работа с ПВЗ маркетплейсов снимают географические барьеры для региональных производителей.',
      ],
      en: [
        'Great ads cannot fix broken unit economics: align Product, Price, Place, and Promotion cohesively.',
        'Track Customer Acquisition Cost (CAC) religiously before scaling paid social campaigns.',
        'For brick-and-mortar services, optimizing 2GIS and Yandex Maps listings delivers high-intent local buyers at near-zero CAC.',
        'Comply strictly with Uzbekistan’s Advertising Law regarding Uzbek-language copy and truthful discount claims, and register your Trademark early.',
        'National marketplace pickup networks empower regional workshops to sell countrywide without heavy logistics capex.',
      ],
    },
  },
];

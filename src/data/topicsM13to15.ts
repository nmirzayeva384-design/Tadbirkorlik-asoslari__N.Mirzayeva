import { TopicData } from '../types';

export const TOPICS_M13_M15: TopicData[] = [
  {
    id: 'm13',
    number: 13,
    code: 'M13',
    hours: 2,
    readMinutes: 16,
    iconName: 'Globe2',
    roadmapStage: { uz: 'Biznes-reja va Eksport', ru: 'Бизнес-план и Экспорт', en: 'Business Plan & Export' },
    title: {
      uz: 'Biznes-reja tuzish va mahsulotni tashqi bozorga olib chiqish',
      ru: 'Разработка бизнес-плана и выход продукции на экспортные рынки',
      en: 'Writing a Bankable Business Plan & Expanding into Export Markets',
    },
    shortDesc: {
      uz: 'UNIDO standarti bo‘yicha biznes-reja tuzilishi, bank va investor talablari farqi hamda xalqaro sertifikatlash va eksport asoslari.',
      ru: 'Структура бизнес-плана (стандарт UNIDO), различие требований банков и инвесторов, а также сертификация и выход на экспорт.',
      en: 'Structuring a business plan (UNIDO framework), tailoring for commercial banks vs. equity investors, and export readiness.',
    },
    summary: {
      uz: 'Biznes-reja — bu byurokratik qog‘oz emas, balki loyihangiz qog‘ozdayoq xatolardan tozalanadigan "parvoz simulyatori"dir. Ushbu mavzuda professional biznes-rejaning 7 ta asosiy bo‘limi, bank va venchur investori nimaga e’tibor berishi hamda O‘zbekiston mahsulotlarini tashqi bozorga eksport qilish qadamlari o‘rganiladi.',
      ru: 'Бизнес-план — это финансово-операционная дорожная карта проекта. В модуле изучаются ключевые разделы профессионального бизнес-плана, разница акцентов для банка и инвестора, а также пошаговый алгоритм вывода узбекской продукции на экспорт.',
      en: 'A business plan acts as your venture’s flight simulator — stress-testing assumptions on paper before risking real capital. This module covers the 7 core sections of a UNIDO-grade plan, bank vs. equity investor criteria, and international export standards.',
    },
    learningObjectives: {
      uz: [
        'Xalqaro UNIDO standarti asosida biznes-rejaning asosiy bo‘limlarini (Rezyume, Bozor va Marketing, Ishlab chiqarish, Tashkiliy reja, Moliyaviy model va Xavflar) tuzish.',
        'Tijorat banki (asosiy e’tibor — garov, barqaror pul oqimi va DSCR) hamda Ulushdor investor (asosiy e’tibor — bozor o‘sishi, jamoa va 5–10x masshtab) talablarini farqlash.',
        'SWOT-tahlil va sezuvchanlik tahlilini (pessimistik, bazaviy, optimistik ssenariylar) moliyaviy rejaga bog‘lash.',
        'O‘zbekistondan eksportga chiqish bosqichlarini: maqsadli mamlakat tanlash, xalqaro sifat sertifikatlari (ISO, HACCP, GlobalG.A.P., Halal), Incoterms va 0% QQS imtiyozini tushunish.',
      ],
      ru: [
        'Формировать структуру бизнес-плана (Резюме, Маркетинг, Производственный, Организационный, Финансовый планы и Анализ рисков).',
        'Адаптировать акценты бизнес-плана под требования банка (залог и возвратность кредита) или инвестора (рост капитализации и рынок).',
        'Проводить SWOT-анализ и сценарное моделирование финансовой устойчивости проекта.',
        'Понимать базовые процедуры экспорта: выбор рынка, международную сертификацию (ISO, HACCP, GlobalG.A.P., Halal), условия Incoterms и 0% ставку НДС.',
      ],
      en: [
        'Assemble all core sections of a professional Business Plan (Executive Summary, Market & Marketing, Operations, Organization, Financials, Risk Mitigation).',
        'Tailor financial narratives to satisfy commercial bankers (downside protection, collateral, DSCR) vs. equity investors (TAM scale, unit economics, exit potential).',
        'Integrate SWOT diagnostics and 3-scenario sensitivity modeling (Base, Upside, Downside).',
        'Navigate Uzbekistan’s export toolkit: international quality certifications (ISO, HACCP, GlobalG.A.P., Halal), Incoterms, and 0% VAT export treatment.',
      ],
    },
    sections: [
      {
        id: 'm13-s1',
        title: {
          uz: '13.1. Biznes-rejaning 7 ta tayanch bo‘limi',
          ru: '13.1. Структура и основные разделы бизнес-плана',
          en: '13.1. Structure & Core Sections of a Professional Business Plan',
        },
        paragraphs: {
          uz: [
            'Yaxshi biznes-reja 15–25 sahifadan oshmasligi, suvdek cho‘zilgan umumiy gaplardan xoli bo‘lishi va aniq hisob-kitoblarga tayanishi kerak. Eng muhim bo‘lim — 1-betdagi Rezyume (Executive Summary): u eng oxirida, barcha hisoblar tayyor bo‘lgach yoziladi va 1 sahifada loyiha mohiyati, kerakli sarmoya, kutilayotgan sof foyda hamda o‘zini oqlash muddatini (Payback) lo‘nda aytadi.',
            'Asosiy tarkibiy tuzilishi: 1) Loyiha rezyumesi; 2) Mahsulot va qiymat taklifi tavsifi; 3) Bozor tahlili (TAM/SAM/SOM, raqobatchilar jadvali, SWOT) va Marketing rejasi (kanallar, CAC); 4) Ishlab chiqarish / Operatsion reja (bino, uskuna quvvati, xomashyo yetkazuvchilar); 5) Tashkiliy va huquqiy reja (shtat jadvali, ish haqi fondi); 6) Moliyaviy reja (CAPEX boshlang‘ich sarmoya, 12–36 oylik P&L va Cash Flow, BEP, ROI); 7) Xavflar tahlili va ularni kamaytirish choralari.',
          ],
          ru: [
            'Качественный бизнес-план лаконичен (15–25 страниц) и опирается на проверяемые цифры. Открывает документ Резюме проекта (Executive Summary) на 1–2 страницы — оно пишется в самом конце работы и дает выжимку сути проекта, суммы инвестиций, ROI и срока окупаемости.',
            'Семь классических разделов (по методике UNIDO): 1) Резюме; 2) Описание продукта и технологии; 3) Анализ рынка и план маркетинга (SWOT, конкуренты, каналы сбыта); 4) Производственный план (помещение, смета оборудования, поставщики); 5) Организационный план и команда; 6) Финансовая модель (CAPEX, прогноз P&L и Cash Flow на 1–3 года, точка безубыточности); 7) Оценка рисков и стресс-тест.',
          ],
          en: [
            'An effective business plan spans 15–25 crisp, numbers-driven pages free of fluff. It opens with a 1-page Executive Summary — written last — crystallizing the problem, solution, capital required, ROI, and payback horizon.',
            'Following the international UNIDO standard, seven sections anchor the document: (1) Executive Summary; (2) Product & Value Proposition; (3) Market Analysis (TAM/SAM/SOM, SWOT, competitor matrix) & Marketing Plan; (4) Operations & Production Plan (facility, equipment specs, supply chain); (5) Organization & Management Team; (6) Financial Model (CAPEX schedule, 12–36 month P&L and Cash Flow, BEP, NPV/ROI); and (7) Risk Assessment & Sensitivity Scenarios.',
          ],
        },
        highlightTerms: ['business-plan', 'swot'],
      },
      {
        id: 'm13-s2',
        title: {
          uz: '13.2. Bank uchun biznes-reja vs Investor uchun biznes-reja',
          ru: '13.2. Разница требований: что ищет Банк, а что — Инвестор?',
          en: '13.2. Tailoring Criteria: Commercial Bankers vs. Equity Investors',
        },
        paragraphs: {
          uz: [
            'Bitta shablonni ham bankka, ham xususiy investorga yuborish xato — chunki ularning daromad modeli ikki xil! Bank sizning foydangiz o‘sishidan ulush olmaydi, u faqat o‘z foizini va kredit tanasini yo‘qotmaslikni o‘ylaydi. Investor esa o‘z pulini yo‘qotish xavfini bo‘yniga oladi, evaziga kompaniya 5–10 barobar o‘sib ulushi qimmatlashishini va dividend olishni kutadi.',
          ],
          ru: [
            'Нельзя нести одинаковый акцент в банк и венчурному/частному инвестору: у них противоположное отношение к риску. Банк зарабатывает фиксированный процент и боится дефолта, а долевой инвестор ищет кратный рост стоимости бизнеса.',
          ],
          en: [
            'Never pitch a loan officer the same way you pitch an angel investor — their risk-reward payoffs are fundamentally different. A bank earns capped interest and prioritizes downside asset protection; an equity investor embraces risk in pursuit of 5–10x upside.',
          ],
        },
        comparisonTable: {
          headers: {
            uz: ['Mezon', 'Tijorat banki (Kredit uchun)', 'Ulushdor investor / Fond (Equity uchun)'],
            ru: ['Критерий оценки', 'Коммерческий банк (Кредитный комитет)', 'Долевой инвестор / Бизнес-ангел'],
            en: ['Evaluation Lens', 'Commercial Bank (Debt Underwriting)', 'Equity Investor / Angel / VC'],
          },
          rows: {
            uz: [
              ['Asosiy savoli', '“Savdo 30% tushib ketsa ham oyma-oy kreditni to‘lay oladimi va garovi yetarlimi?”', '“Bu jamoa bozorni tez egallab, biznesni 3–5 yilda necha barobar katta qila oladi?”'],
              ['Eng muhim ko‘rsatkichlar', 'Garov likvidligi, ta’sischi ulushi (≥25–30%), Cash Flow va DSCR ≥ 1,3', 'TAM/SAM hajmi, Unit Economics (LTV/CAC), oylik o‘sish sur’ati, ROE va jamoa tajribasi'],
              ['Pessimistik ssenariy', 'Juda qattiq tekshiriladi (konservativ prognoz afzal)', 'Bozor kengayishi va raqobat ustunligi (moat) chuqur tekshiriladi'],
            ],
            ru: [
              ['Главный вопрос', '«Вернет ли заемщик тело долга и проценты в срок даже при спаде продаж?»', '«Способна ли эта команда масштабировать бизнес в 5–10 раз на большом рынке?»'],
              ['Ключевые метрики', 'Твердый залог, собственный вклад инициатора (от 25–30%), DSCR ≥ 1,3', 'Объем рынка TAM/SAM, LTV/CAC, темп роста выручки, защита от конкурентов'],
              ['Фокус внимания', 'Консервативный сценарий Cash Flow и кредитная история', 'Сила команды основателей, масштабируемость и стратегия дивидендов/выхода'],
            ],
            en: [
              ['Core Question', '"Can cash flow service monthly debt even in a 30% downturn, and is collateral liquid?"', '"Can this founding team capture a large market and compound company value 5–10x?"'],
              ['Primary Metrics', 'Appraised collateral, ≥25–30% founder cash skin-in-the-game, DSCR ≥ 1.3x', 'TAM/SAM scale, LTV:CAC ratio, month-over-month traction, ROE, defensible moat'],
              ['Stress Focus', 'Conservative downside Cash Flow & clean credit history', 'Scalability bottlenecks, founder commitment, and governance/exit pathway'],
            ],
          },
        },
      },
      {
        id: 'm13-s3',
        title: {
          uz: '13.3. Mahsulotni tashqi bozorga olib chiqish (Eksport asoslari)',
          ru: '13.3. Основы экспортной деятельности: от локального цеха к внешним рынкам',
          en: '13.3. Export Fundamentals: Taking Uzbek Products Global',
        },
        paragraphs: {
          uz: [
            'Mahalliy bozorda mustahkam o‘rin olgach, eksport valyuta tushumi va katta buyurtmalar eshigini ochadi (to‘qimachilik, quritilgan va sarxil meva-sabzavot, qandolatchilik, qurilish materiallari, IT va BPO xizmatlar — O‘zbekistonning kuchli eksport yo‘nalishlaridir).',
            'Tashqi bozorga chiqish 4 bosqichdan o‘tadi: 1) Maqsadli mamlakat tahlili (bojxona bojlari, GSP+ Yevropa Ittifoqi imtiyozlari, qo‘shni Markaziy Osiyo va Yaqin Sharq logistikasi); 2) Mahsulotni xalqaro standartlarga moslashtirish va sertifikatlash (oziq-ovqat uchun HACCP / ISO 22000, qishloq xo‘jaligida GlobalG.A.P., musulmon davlatlari uchun Halal, Yevropa uchun CE va qadoq yorlig‘ini importyor davlat tilida tayyorlash); 3) Xalqaro shartnoma va Incoterms 2020 shartlarini (EXW, FCA, DAP, CIF — transport va sug‘urta mas’uliyati qayerda o‘tishini) kelishish hamda akkreditiv/oldindan to‘lov kafolatini olish; 4) Tashqi savdo shartnomasini Yagona elektron axborot tizimida (TSO YEAT) ro‘yxatga kiritish, bojxona yuk deklaratsiyasi (BYuD) rasmiylashtirish va 0% QQS imtiyozidan foydalanish.',
          ],
          ru: [
            'Экспорт обеспечивает валютную выручку, крупные партии сбыта и диверсификацию страновых рисков. Сильные экспортные ниши МСБ Узбекистана — текстиль и трикотаж, сушеная и свежая плодоовощная продукция, стройматериалы, ремесленные изделия на зарубежных маркетплейсах и экспорт IT-услуг.',
            'Четыре шага подготовки к экспорту: 1) Анализ целевой страны, пошлин и преференций (например, статус GSP+ для беспошлинного ввоза тысяч позиций в ЕС, зоны свободной торговли СНГ); 2) Адаптация упаковки и международная сертификация (ISO 9001, пищевая безопасность HACCP / ISO 22000, GlobalG.A.P., Halal, OEKO-TEX для текстиля); 3) Внешнеторговый контракт с четким базисом поставки Incoterms 2020 (FCA, DAP, CIF) и безопасной формой расчетов (предоплата или аккредитив); 4) Регистрация контракта в ЕЭИСВО, электронное таможенное декларирование и применение 0% ставки НДС.',
          ],
          en: [
            'Exporting unlocks hard-currency revenue, larger wholesale volumes, and geographic diversification — particularly across Uzbekistan’s competitive strengths in textiles, dried fruits/nuts, building materials, handicrafts, and IT/BPO services.',
            'Four practical steps govern export launch: (1) Target market screening & tariff preferences (leveraging Uzbekistan’s EU GSP+ duty-free access for 6,200+ goods and CIS free-trade corridors); (2) Packaging localization & international quality certification (ISO 9001, HACCP/ISO 22000, GlobalG.A.P., OEKO-TEX, Halal); (3) Drafting an export contract specifying Incoterms 2020 delivery obligations (FCA, DAP, CIF) and secure payment (advance wire or Letter of Credit); and (4) Registering the contract in the Unified Foreign Trade System (YEISVO), clearing digital customs, and claiming 0% export VAT.',
          ],
        },
        highlightTerms: ['incoterms-export'],
      },
    ],
    diagramType: 'business-plan-blocks',
    diagramTitle: {
      uz: 'Biznes-reja arxitekturasi va Tashqi bozorga (Eksportga) chiqish yo‘l xaritasi',
      ru: 'Архитектура бизнес-плана и дорожная карта выхода на экспорт',
      en: 'Business Plan Architecture & Export Readiness Roadmap',
    },
    diagramNote: {
      uz: 'O‘zbekistonda xalqaro sertifikat olish va xalqaro ko‘rgazmalarda qatnashish xarajatlarining bir qismini davlat subsidiyalari orqali qoplash mexanizmlari amal qiladi.',
      ru: 'Государственные механизмы содействия экспорту в РУз частично компенсируют затраты МСБ на международную сертификацию и выставки.',
      en: 'Uzbekistan’s export promotion programs partially reimburse SMEs for international ISO/GlobalG.A.P. certifications and trade fair booths.',
    },
    stats: [
      {
        value: { uz: '$27–33+ mlrd', ru: '$27–33+ млрд', en: '$27B–$33B+' },
        label: {
          uz: 'O‘zbekiston Respublikasining yillik jami eksport hajmi (tovar va xizmatlar)',
          ru: 'Годовой совокупный объем экспорта товаров и услуг Республики Узбекистан',
          en: 'Annual total exports of goods and services from Uzbekistan',
        },
        subnote: { uz: 'Yuqori qo‘shilgan qiymatli tayyor mahsulot va IT-eksport ulushi o‘smoqda', ru: 'Растет доля готовой продукции и IT-услуг', en: 'Rising share of value-added manufactured goods and IT services' },
        year: '2024–2025',
        sourceName: { uz: 'Milliy statistika qo‘mitasi (stat.uz — Tashqi savdo)', ru: 'Нацкомстат РУз (stat.uz — Внешняя торговля)', en: 'Statistics Agency of Uzbekistan (stat.uz Foreign Trade)' },
        sourceUrl: 'https://stat.uz',
      },
      {
        value: { uz: '6 200+ tovar', ru: '6 200+ товаров', en: '6,200+ Product Lines' },
        label: {
          uz: 'Yevropa Ittifoqining GSP+ imtiyozli tizimi doirasida O‘zbekiston ishlab chiqaruvchilari bojsiz eksport qila oladigan tovar turlari',
          ru: 'Товарные позиции, которые узбекские производители могут ввозить в ЕС беспошлинно по системе GSP+',
          en: 'Tariff lines eligible for duty-free export from Uzbekistan to the European Union under GSP+',
        },
        subnote: { uz: 'To‘qimachilik, oziq-ovqat va plastmassa sanoati uchun katta ustunlik', ru: 'Конкурентное преимущество для текстиля и агропереработки', en: 'Major tariff advantage for Uzbek textiles and processed foods' },
        year: 'Amaldagi maqom',
        sourceName: { uz: 'Investitsiyalar, sanoat va savdo vazirligi (miit.uz)', ru: 'МИПТ РУз (miit.uz)', en: 'Ministry of Investment, Industry and Trade (miit.uz)' },
        sourceUrl: 'https://miit.uz',
      },
      {
        value: { uz: '0% QQS', ru: '0% НДС', en: '0% Export VAT' },
        label: {
          uz: 'O‘zbekistondan tovarlar eksportiga qo‘llaniladigan Qo‘shilgan qiymat solig‘i stavkasi',
          ru: 'Ставка НДС при экспорте товаров с таможенной территории Республики Узбекистан',
          en: 'Value Added Tax rate applied to exported goods leaving Uzbekistan',
        },
        subnote: { uz: 'Xomashyo xaridida to‘langan kiruvchi QQS eksportyorga qaytariladi (qoplanadi)', ru: 'С правом возврата (возмещения) входного НДС экспортеру', en: 'Includes statutory refund of domestic input VAT paid on materials' },
        year: '2025–2026',
        sourceName: { uz: 'O‘zbekiston Respublikasi Soliq kodeksi (260-modda)', ru: 'Налоговый кодекс РУз (ст. 260)', en: 'Tax Code of Uzbekistan (Art. 260)' },
        sourceUrl: 'https://lex.uz/docs/4674902',
      },
    ],
    charts: [
      {
        id: 'm13-chart-1',
        type: 'bar',
        title: {
          uz: '3 ssenariyli Biznes-reja sezuvchanlik tahlili: 1-yil kutilayotgan sof foyda (mln so‘m)',
          ru: 'Сценарный стресс-тест в бизнес-плане: чистая прибыль за 1-й год работы (млн сумов)',
          en: '3-Scenario Business Plan Sensitivity Model: Year 1 Projected Net Profit (M UZS)',
        },
        unit: { uz: 'mln so‘m', ru: 'млн сумов', en: 'M UZS' },
        year: 'UNIDO standarti',
        sourceName: { uz: 'Investitsion loyiha tahlili namunasi', ru: 'Методика стресс-тестирования UNIDO', en: 'UNIDO Financial Stress-Test Methodology' },
        sourceUrl: 'https://miit.uz',
        seriesLabel: { uz: 'Yillik sof foyda (mln so‘m)', ru: 'Годовая чистая прибыль (млн сумов)', en: 'Annual Net Profit (M UZS)' },
        data: [
          { name: { uz: 'Pessimistik (−25% sotuv)', ru: 'Пессимистичный (−25%)', en: 'Downside (−25% sales)' }, value: 68 },
          { name: { uz: 'Bazaviy (Real reja)', ru: 'Базовый (реалистичный)', en: 'Base Case (Realistic)' }, value: 185 },
          { name: { uz: 'Optimistik (+20% sotuv)', ru: 'Оптимистичный (+20%)', en: 'Upside (+20% sales)' }, value: 290 },
        ],
      },
      {
        id: 'm13-chart-2',
        type: 'pie',
        title: {
          uz: 'Kichik va o‘rta biznes eksport salohiyati yuqori bo‘lgan yo‘nalishlar tarkibi (namunaviy %)',
          ru: 'Перспективные экспортные направления для малого и среднего бизнеса Узбекистана (%)',
          en: 'High-Potential SME Non-Resource Export Sectors in Uzbekistan (Illustrative %)',
        },
        unit: { uz: '%', ru: '%', en: '%' },
        year: '2025',
        sourceName: { uz: 'stat.uz va IT Park tashqi savdo tahlillari asosida', ru: 'Аналитика несырьевого экспорта РУз', en: 'Uzbekistan Non-Commodity Export Mix' },
        sourceUrl: 'https://stat.uz',
        seriesLabel: { uz: 'Ulushi (%)', ru: 'Доля (%)', en: 'Share (%)' },
        data: [
          { name: { uz: 'To‘qimachilik va tayyor kiyim', ru: 'Текстиль и готовая одежда', en: 'Textiles & Apparel' }, value: 36 },
          { name: { uz: 'Meva-sabzavot va oziq-ovqat', ru: 'Плодоовощная и пищевая', en: 'Agri-Food & Dried Fruit' }, value: 28 },
          { name: { uz: 'IT va BPO xizmatlar eksporti', ru: 'Экспорт IT и BPO-услуг', en: 'IT & BPO Digital Export' }, value: 20 },
          { name: { uz: 'Qurilish mat., hunarmand. va b.', ru: 'Стройматериалы, ремесла и др.', en: 'Building Materials & Crafts' }, value: 16 },
        ],
      },
    ],
    legalActs: [
      {
        id: 'm13-law-1',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Investitsiyalar va investitsiya faoliyati to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni (O‘RQ-598)',
          ru: 'Закон РУз «Об инвестициях и инвестиционной деятельности» (ЗРУ-598)',
          en: 'Law "On Investments and Investment Activity" (Law No. ZRU-598)',
        },
        summary: {
          uz: 'Mahalliy va xorijiy investorlarning huquqlari, davlat kafolatlari, foydani erkin repatriatsiya qilish, erkin iqtisodiy hamda kichik sanoat zonalari imtiyozlarini tartibga soladi.',
          ru: 'Закрепляет права отечественных и иностранных инвесторов, гарантии от национализации, свободный перевод прибыли и преференции промышленных зон.',
          en: 'Protects domestic and foreign investors, guarantees profit repatriation, and regulates Special Economic and Small Industrial Zone incentives.',
        },
        relevance: {
          uz: 'Biznes-reja asosida xususiy yoki xorijiy investor jalb qilish va sanoat zonasiga joylashishning huquqiy poydevori.',
          ru: 'Правовая основа привлечения инвестиций в проект и размещения цеха в малой промзоне.',
          en: 'Legal foundation for raising private/foreign equity and securing industrial zone plots.',
        },
        keyClauses: {
          uz: [
            'Investor o‘z investitsiya faoliyatidan olgan daromadini soliqlar to‘langach cheklovsiz tasarruf etish va qayta investitsiyalash huquqiga ega.',
            'Investitsiya kiritilgandan keyin qonunchilik yomonlashgan taqdirda qonunda belgilangan barqarorlik kafolatlari amal qiladi.',
          ],
          ru: [
            'Инвестор вправе свободно владеть, пользоваться и распоряжаться объектами и результатами инвестиций.',
            'Государство гарантирует защиту инвестиций независимо от форм собственности.',
          ],
          en: [
            'Investors hold unrestricted rights to reinvest or repatriate post-tax returns.',
            'Provides statutory stability clauses protecting approved long-term investments.',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/4664142',
      },
      {
        id: 'm13-law-2',
        docType: { uz: 'Qonun va Bojxona kodeksi', ru: 'Закон о ВЭД и Таможенный кодекс РУз', en: 'Foreign Economic Activity Law & Customs Code' },
        title: {
          uz: '“Tashqi iqtisodiy faoliyat to‘g‘risida”gi Qonun, Bojxona kodeksi hamda “Texnik jihatdan tartibga solish to‘g‘risida”gi Qonun',
          ru: 'Закон РУз «О внешнеэкономической деятельности», Таможенный кодекс и Закон «О техническом регулировании»',
          en: 'Law "On Foreign Economic Activity", Customs Code & Law "On Technical Regulation"',
        },
        summary: {
          uz: 'Tadbirkorlik subyektlarining tashqi bozorga mustaqil chiqish huquqi, eksport bojxona bojlarining bekor qilinganligi (ayrim xomashyolardan tashqari), valyuta tushumi intizomi va muvofiqlik sertifikatlarini belgilaydi.',
          ru: 'Закрепляет право любого зарегистрированного юрлица и ИП на ведение экспорта, отсутствие экспортных таможенных пошлин на готовую продукцию и стандарты качества.',
          en: 'Grants registered businesses direct export rights, zero export customs duties on finished goods, and aligns national technical standards with ISO norms.',
        },
        relevance: {
          uz: 'Birinchi eksport shartnomasini imzolash va bojxonadan muammosiz o‘tkazish qoidalari.',
          ru: 'Базовые правила заключения экспортного контракта и прохождения таможни («Единое окно»).',
          en: 'Core compliance guide for executing export contracts and clearing Single-Window customs.',
        },
        keyClauses: {
          uz: [
            'O‘zbekistonda ro‘yxatdan o‘tgan korxonalar eksport faoliyatini qo‘shimcha maxsus eksport litsenziyasisiz amalga oshirishga haqli (maxsus nazoratdagi tovarlardan tashqari).',
            'Eksport shartnomasi bo‘yicha valyuta tushumi qonunchilikda belgilangan muddatlarda korxonaning O‘zbekistondagi bank hisobvarag‘iga kelib tushishi nazorat qilinadi.',
          ],
          ru: [
            'Любое предприятие вправе напрямую заключать экспортные контракты с иностранными покупателями.',
            'Экспортер обязан соблюдать установленные законодательством сроки репатриации валютной выручки по контракту.',
          ],
          en: [
            'Registered Uzbek companies may sign direct export contracts without intermediary export licenses.',
            'Exporters must observe statutory foreign-currency repatriation timelines on shipped invoices.',
          ],
        },
        yearNote: '2023–2026 amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/2876354',
      },
    ],
    caseStudy: {
      title: {
        uz: 'Keys: Samarqanddagi "Sunny Raisins" quritilgan meva korxonasining GSP+ orqali Polshaga ilk eksporti',
        ru: 'Кейс: Выход самаркандской компании «Sunny Raisins» на экспорт в Польшу по преференциям GSP+',
        en: 'Case Study: How Samarkand’s "Sunny Raisins" Unlocked Duty-Free Export to Poland via EU GSP+',
      },
      scenario: {
        uz: 'Samarqandlik tadbirkor Akmal mayiz va turshakni yuvib saralab, ichki ulgurji bozorda kg ni 26 000 so‘mdan sotar edi. U tashqi bozorga chiqish bo‘yicha 2 yillik biznes-reja tuzdi: lazerli optik saralash (sortex) liniyasi uchun bankdan kredit oldi, xalqaro oziq-ovqat xavfsizligi sertifikati — ISO 22000 (HACCP) ni joriy etdi va 10 kg li gofrokarton qadoqni ingliz/polyak tillarida standartlashtirdi.',
        ru: 'Предприниматель Акмаль из Самарканда продавал сушеный виноград и курагу на внутреннем оптовом рынке по 26 000 сумов/кг. Разработав экспортный бизнес-план, он установил линию лазерной фотосепарации, внедрил пищевой стандарт ISO 22000 (HACCP) и адаптировал 10-кг упаковку под требования сетей Восточной Европы.',
        en: 'Akmal previously sold washed raisins domestically in Samarkand at 26,000 UZS/kg. Drafting a 2-year export business plan, he installed optical laser sorting, earned ISO 22000 (HACCP) food-safety certification, and redesigned 10-kg export cartons in English and Polish.',
      },
      analysis: {
        uz: 'Xalqaro oziq-ovqat ko‘rgazmasida Varshavadagi distribyutor bilan FCA Tashkent shartida 20 tonnalik ilk shartnoma imzolandi. GSP+ tufayli Polshalik xaridor Yevropa bojxonasida import boji to‘lamadi, Akmal esa O‘zbekistonda 0% QQS qo‘llab, xomashyo va qadoqdagi kiruvchi QQSni qaytarib oldi. Eksport narxi kilogrammiga ekvivalentda 41 000 so‘mga to‘g‘ri kelib, sof marja 2,4 barobar oshdi.',
        ru: 'На международной выставке был подписан первый контракт на 20 тонн (1 фура) с дистрибьютором из Варшавы на условиях FCA. Благодаря GSP+ покупатель ввез товар в ЕС с 0% пошлиной, а Акмаль применил 0% ставку НДС и возместил входной НДС по упаковке. Чистая маржа на килограмме выросла в 2,4 раза.',
        en: 'At an international food expo, Akmal signed an initial 20-ton (1 truckload) FCA contract with a Warsaw distributor. Thanks to EU GSP+ zero tariffs and Uzbekistan’s 0% export VAT refund, net margin per kilogram expanded 2.4x.',
      },
      numbersBreakdown: {
        uz: [
          'Ilk eksport partiyasi: 20 000 kg (1 ta 20 tonnalik refrijerator fura).',
          'Ichki bozordagi ulgurji narx: 26 000 so‘m/kg → Sertifikatlangan eksport narxi (FCA): ~41 000 so‘m/kg ekvivalenti.',
          'Qo‘shimcha imtiyoz: ISO 22000 sertifikatlash xarajatining sezilarli qismi eksportni qo‘llab-quvvatlash mexanizmi orqali qoplab berildi.',
        ],
        ru: [
          'Пилотная экспортная партия: 20 000 кг.',
          'Цена реализации выросла с 26 000 сумов/кг (внутренний опт) до ~41 000 сумов/кг в валютном эквиваленте (FCA).',
          'Часть расходов на сертификацию ISO 22000 компенсирована за счет программ поддержки экспортеров.',
        ],
        en: [
          'Pilot export shipment: 20,000 kg (1 full truckload).',
          'Realized price jumped from 26,000 UZS/kg (domestic bulk) to ~41,000 UZS/kg equivalent (FCA certified grade).',
          'Export promotion subsidies reimbursed a major share of ISO 22000 certification fees.',
        ],
      },
      challengeQuestion: {
        uz: 'Biznes-rejaning 1-sahifasidagi Rezyume (Executive Summary) qachon yozilishi metodik jihatdan eng to‘g‘ri?',
        ru: 'В какой момент работы над бизнес-планом методически правильно писать его первый раздел — Резюме (Executive Summary)?',
        en: 'Methodologically, at what stage should you write Page 1 — the Executive Summary — of a Business Plan?',
      },
      challengeOptions: {
        uz: [
          'Eng boshida, hali bozor va moliya hisob-kitoblari qilinmasdan taxminiy raqamlar bilan',
          'Eng oxirida — bozor, ishlab chiqarish, CAPEX, P&L, Cash Flow va xavflar to‘liq hisoblab bo‘lingandan keyin ularning aniq qaymog‘i sifatida',
          'Rezyume yozish umuman shart emas, investor 25 betning hammasini o‘zi o‘qib oladi',
        ],
        ru: [
          'В самый первый день работы над документом «из головы»',
          'В самом конце — когда уже сведены маркетинг, смета оборудования, финансовая модель P&L/Cash Flow и известны точные ROI и срок окупаемости',
          'Резюме можно вообще пропустить',
        ],
        en: [
          'On Day 1 using rough guesses before building the financial model',
          'Dead last — once market sizing, CAPEX, P&L, Cash Flow, and ROI figures are fully reconciled',
          'Skip the Executive Summary entirely',
        ],
      },
      correctOptionIndex: 1,
      challengeExplanation: {
        uz: 'Rezyume hujjatning 1-sahifasida tursa-da, u barcha bo‘limlar va moliyaviy model yakunlangach eng oxirida yoziladi — chunki investor va kredit qo‘mitasi dastlabki qarorni aynan shu 1 betdagi aniq raqamlarga qarab qabul qiladi.',
        ru: 'Хотя Резюме открывает документ, пишется оно строго последним, концентрируя проверенные цифры всей финансовой модели на одной странице.',
        en: 'Though placed on Page 1, the Executive Summary is always written last so every figure reflects verified model outputs.',
      },
    },
    keyTakeaways: {
      uz: [
        'Biznes-reja avvalo investor uchun emas, ta’sischining o‘zi qimmat xatolarni qog‘ozdayoq ko‘rishi uchun kerak.',
        'Moliyaviy bo‘limda faqat bitta "pushti rang" prognoz emas, balki sotuv −25% kam chiqqanda ham korxona yashab qolishini ko‘rsatuvchi Pessimistik ssenariy bo‘lishi shart.',
        'Bankka garov va barqaror Cash Flow muhim; investorga esa katta bozor, kuchli jamoa va masshtablashish tezligi muhim.',
        'Eksport barqaror sifat va xalqaro sertifikatdan (ISO, HACCP, GlobalG.A.P., Halal) boshlanadi.',
        'O‘zbekistonda eksport qiluvchi korxonalar uchun 0% QQS va GSP+ kabi jiddiy tashqi savdo ustunliklari mavjud.',
      ],
      ru: [
        'Главный читатель бизнес-плана — сам предприниматель: бумага и Excel терпят ошибки бесплатно, реальный рынок — нет.',
        'Любая финансовая модель обязана содержать пессимистичный сценарий (стресс-тест падения выручки на 20–30%).',
        'Адаптируйте подачу: банку показывайте надежность возврата и залог, инвестору — масштаб рынка и кратный рост.',
        'Международные сертификаты качества и правильный выбор условий Incoterms — пропуск на экспортные рынки.',
        'Нулевая ставка НДС при экспорте и преференции GSP+ делают узбекские товары конкурентоспособными за рубежом.',
      ],
      en: [
        'The primary beneficiary of writing a rigorous business plan is the founder — catching fatal math flaws before spending cash.',
        'Every credible financial model includes a Downside Stress-Test (−25% sales) proving survival capability.',
        'Speak the capital provider’s language: collateral and DSCR for bankers; scalable TAM and ROE for equity investors.',
        'Export success starts with repeatable quality, international certification (ISO, HACCP, Halal), and clear Incoterms.',
        'Zero-rated export VAT and EU GSP+ duty-free access give Uzbek producers strong international cost competitiveness.',
      ],
    },
  },
  {
    id: 'm14',
    number: 14,
    code: 'M14',
    hours: 2,
    readMinutes: 15,
    iconName: 'ShieldAlert',
    roadmapStage: { uz: 'Jamoa va Xavflar', ru: 'Команда и Риски', en: 'Team & Risk Matrix' },
    title: {
      uz: 'Jamoani shakllantirish, xodimlarni boshqarish va xavflarni aniqlash',
      ru: 'Формирование команды, управление персоналом и оценка бизнес-рисков',
      en: 'Team Building, HR Motivation, Delegation & Business Risk Management',
    },
    shortDesc: {
      uz: 'Hammuassislarni (co-founders) va ilk xodimlarni tanlash, moddiy/nomoddiy motivatsiya (KPI), delegatsiya hamda 4 guruh biznes xavflari.',
      ru: 'Выбор сооснователей и первых сотрудников, система мотивации (оклад + KPI), делегирование и матрица 4 видов бизнес-рисков.',
      en: 'Selecting complementary co-founders and early hires, designing KPI incentives, mastering delegation, and mapping the 4-category Risk Matrix.',
    },
    summary: {
      uz: 'Investorlar aytadilar: "A-darajali jamoa B-darajali g‘oyadan katta biznes qura oladi, ammo B-darajali jamoa A-darajali g‘oyani ham barbod qiladi". Ushbu mavzuda bir-birini to‘ldiruvchi jamoa yig‘ish, xodimlarni adolatli rag‘batlantirish, vazifalarni delegatsiya qilish va biznes risklarini oldindan jilovlash o‘rganiladi.',
      ru: 'Сильная команда способна вытянуть среднюю идею, но слабая команда разрушит даже гениальный проект. Модуль посвящен партнерским соглашениям сооснователей, найму, мотивации по KPI, делегированию и управлению финансовыми, рыночными, операционными и правовыми рисками.',
      en: 'An A-grade team can pivot a B-grade idea to victory, whereas a fractured team ruins even an A-grade opportunity. This module covers complementary co-founder selection, KPI compensation, effective delegation, and systematic financial/market/operational/legal risk mitigation.',
    },
    learningObjectives: {
      uz: [
        'Hammuassislarni (Co-founders) bir xil emas, balki bir-birini to‘ldiruvchi ko‘nikmalar (Mahsulot/Texnologiya + Savdo/Marketing + Moliya/Operatsiya) tamoyili bo‘yicha tanlash va ulushlarni Vesting kelishuvi bilan himoyalash.',
        'Moddiy motivatsiya (bazaviy oklad + aniq o‘lchanadigan KPI bonusi) hamda nomoddiy motivatsiya (o‘sish, hurmat, korporativ madaniyat) muvozanatini qurish.',
        'Rahbarni "hamma ishni o‘zi qiluvchi" tuzog‘idan qutqaruvchi to‘g‘ri Delegatsiya qoidalarini qo‘llash.',
        'Biznes xavflarini 4 toifaga (Moliyaviy, Bozor, Operatsion, Huquqiy) ajratib, Ehtimollik × Ta’sir kuchi matritsasida oldini olish rejasini tuzish.',
      ],
      ru: [
        'Формировать ядро сооснователей по принципу взаимодополняемости компетенций и фиксировать договоренности (вестинг долей, зоны ответственности).',
        'Выстраивать сбалансированную систему материальной (оклад + KPI) и нематериальной мотивации персонала.',
        'Применять алгоритм эффективного делегирования без потери качества и контроля.',
        'Классифицировать бизнес-риски (финансовые, рыночные, операционные, правовые) и разрабатывать меры их минимизации.',
      ],
      en: [
        'Assemble complementary co-founders across Product/Tech, Sales/Growth, and Operations/Finance backed by clear Vesting agreements.',
        'Design balanced compensation structures pairing base pay with transparent KPI incentives and non-monetary culture drivers.',
        'Delegate operational tasks systematically using clear outcomes, authority boundaries, and checkpoints.',
        'Classify Financial, Market, Operational, and Legal risks inside an Impact × Probability matrix with concrete mitigation playbooks.',
      ],
    },
    sections: [
      {
        id: 'm14-s1',
        title: {
          uz: '14.1. Hammuassislar (Co-founders) va ilk jamoani tanlash mezonlari',
          ru: '14.1. Роль команды: выбор сооснователей и первых сотрудников',
          en: '14.1. Co-Founder Alignment & Hiring Your First Core Team',
        },
        paragraphs: {
          uz: [
            'Do‘stchilikda eng ko‘p uchraydigan xato — uch nafar bir xil kasbdagi kursdosh yig‘ilib, hech qanday yozma shartnomasiz "ulushimiz 33/33/33, birga ishlaymiz!" deyishidir. 6 oydan keyin biri boshqa ishga o‘tib ketsa ham korxonaning 33% ulushiga da’vogar bo‘lib qoladi va qolgan ikki sherikning ishtiyoqi so‘nadi.',
            'Sog‘lom startap va kichik biznes qoidalari: 1) Bir-birini to‘ldirish (masalan, 1-sherik ishlab chiqarish/texnologiya ustasi — "Hacker/Maker", 2-sherik savdo, muzokara va marketing yetakchisi — "Hustler"); 2) Boshidayoq qiyin savollarni yozma kelishib olish (kim direktor, kim haftasiga necha soat va qancha pul tikadi, sherik chiqib ketsa ulushi qanday baholanadi — Vesting mexanizmi); 3) Ilk 5–10 xodimni tanlashda nafaqat diplomga, balki mas’uliyat, tez o‘rganuvchanlik (soft skills) va halollikka ustuvorlik berish.',
          ],
          ru: [
            'Главная мина замедленного действия на старте — объединение друзей с одинаковыми навыками и устным дележом долей «50 на 50». Если через полгода один партнер теряет интерес и уходит в найм, он юридически остается владельцем половины компании, блокируя привлечение инвестиций.',
            'Три правила сильной команды на старте: 1) Взаимодополняемость ролей (один отвечает за продукт/производство, второй — за продажи и финансы); 2) Партнерское соглашение «на берегу» с механизмом поэтапного закрепления долей (Vesting); 3) Найм первых сотрудников по ценностям, обучаемости и личной ответственности за результат.',
          ],
          en: [
            'The classic co-founder landmine is three friends with identical skills shaking hands on an unwritten 33/33/33 split. Six months later, one partner drifts away to a salaried job while legally retaining a third of the company’s dead equity.',
            'Three rules build durable founding teams: (1) Complementary capabilities (pairing a Product/Operations builder with a Sales/Commercial closer); (2) Signing an explicit Founders’ Agreement with multi-year equity Vesting before incorporating; and (3) Hiring your first 5 employees for ownership mentality, integrity, and learning agility.',
          ],
        },
        highlightTerms: ['co-founder-vesting'],
      },
      {
        id: 'm14-s2',
        title: {
          uz: '14.2. Xodimlarni motivatsiya qilish (KPI) va to‘g‘ri delegatsiya',
          ru: '14.2. Мотивация персонала (материальная и нематериальная) и делегирование',
          en: '14.2. Employee Motivation Systems (KPIs) & Effective Delegation',
        },
        paragraphs: {
          uz: [
            'Agar sotuvchiga faqat qat’iy 5 mln so‘m oylik bersangiz — u 10 ta mijoz kelsa ham, 100 ta mijoz kelsa ham bir xil maosh olgani uchun jon kuydirmaydi. Agar faqat foiz (0 so‘m oklad) bersangiz — xavfsizlik hissi yo‘qolib, kuchli kadrlar ketib qoladi. Eng samarali moddiy tizim: Bazaviy barqaror oklad (xavfsizlik uchun) + 2–3 ta shaffof KPI ko‘rsatkichi bo‘yicha bonus (sotuv rejasi bajarilishi, konversiya yoki nuqsonsiz sifat uchun).',
            'Nomoddiy motivatsiya ham pullik mukofotdan kam emas: tushunarli martaba pillapoyasi, jamoa oldida e’tirof etish, o‘qitish va qulay ish muhiti. Delegatsiya (vakolat berish) esa "ishni tashlab qo‘yish" emas, balki 5 qadamli algoritmdir: Vazifa maqsadini tushuntirish → Kutilayotgan aniq natija namunasini ko‘rsatish → Resurs va qaror qabul qilish chegarasini berish → Oraliq nazorat nuqtasini (deadline) belgilash → Yakunda tahlil va fikr-mulohaza berish.',
          ],
          ru: [
            'Голый фиксированный оклад порождает пассивность, а работа совсем без оклада отпугивает сильных специалистов. Оптимальная формула материальной мотивации: Твердая базовая часть + прозрачная переменная премия по 2–3 измеримым KPI, на которые сотрудник напрямую влияет.',
            'Нематериальная мотивация удерживает таланты вдолгую: уважительная культура, обучение, понятный рост и признание заслуг. А грамотное делегирование освобождает предпринимателя от операционной текучки для стратегии: ставьте задачу по формату SMART, наделяйте полномочиями и проверяйте в промежуточных точках, не впадая в микроменеджмент.',
          ],
          en: [
            'Pure flat salaries breed complacency; 100% commission-only pay triggers high turnover. Optimal compensation pairs a fair base salary with 2–3 transparent KPI bonuses directly within the employee’s control (e.g., closed revenue, SLA speed, zero-defect output).',
            'Non-monetary motivation — psychological safety, skill mentorship, public recognition, and clear career progression — drives long-term retention. Meanwhile, structured Delegation frees founders from bottlenecking growth: define desired outcomes clearly, grant bounded authority, set mid-course check-ins, and coach without micromanaging.',
          ],
        },
        highlightTerms: ['delegation-kpi'],
      },
      {
        id: 'm14-s3',
        title: {
          uz: '14.3. Biznes xavflarini (risklarini) klassifikatsiya qilish va boshqarish',
          ru: '14.3. Классификация и матрица управления бизнес-рисками',
          en: '14.3. Classifying & Mitigating the Four Categories of Business Risk',
        },
        paragraphs: {
          uz: [
            'Xavfsiz biznes bo‘lmaydi — ammo xavfni oldindan ko‘rib sug‘urtalangan biznes bo‘ladi. Barcha biznes risklari 4 ta katta guruhga bo‘linadi:',
          ],
          ru: [
            'Предприниматель не может обнулить риски, но обязан классифицировать их и подготовить план действий «Б» по четырем направлениям:',
          ],
          en: [
            'Risk cannot be eliminated from entrepreneurship, but it can be systematically mapped and hedged across four core domains:',
          ],
        },
        comparisonTable: {
          headers: {
            uz: ['Risk guruhi', 'Hayotiy xavf misollari', 'Oldini olish (Mitigation) chorasi'],
            ru: ['Категория риска', 'Конкретные примеры угроз', 'Инструменты снижения риска'],
            en: ['Risk Category', 'Concrete Threat Examples', 'Practical Mitigation Playbook'],
          },
          rows: {
            uz: [
              ['1. Moliyaviy risklar', 'Kassa uzilishi, valyuta kursi o‘zgarishi (import xomashyoda), foiz stavkasi va inflyatsiya', '2 oylik zaxira fondi, to‘lov taqvimi, mahalliy xomashyo ulushini oshirish, milliy valyutada qarz olish'],
              ['2. Bozor risklari', 'Yirik raqobatchi kirishi, mavsumiy talab tushishi, bitta yirik xaridorga qaram bo‘lib qolish', 'Mijozlarni diversifikatsiya qilish (1 mijoz < 20% tushum), mavsumga qarshi ikkinchi mahsulot, kuchli servis'],
              ['3. Operatsion risklar', 'Asosiy usta/sotuvchi ketib qolishi, yagona yetkazib beruvchi to‘xtashi, uskuna buzilishi, kiberxavf', 'Kamida 2–3 muqobil yetkazib beruvchi (backup), jarayon reglamenti, CRM zaxira nusxasi, mulk sug‘urtasi'],
              ['4. Huquqiy (Yuridik) risklar', 'Rasmiy mehnat shartnomasiz ishlash jarimasi, litsenziya/soliq xatosi, ro‘yxatdan o‘tmagan brend tortib olinishi', 'Yagona milliy mehnat tizimi (my.mehnat.uz), buxgalteriya auditi, tovar belgisini Adliyada ro‘yxatdan o‘tkazish'],
            ],
            ru: [
              ['1. Финансовые риски', 'Кассовый разрыв, неплатеж крупного дебитора, скачок валютного курса на импортное сырье', 'Платежный календарь, резервный фонд, предоплата, кредиты в валюте выручки (сумах)'],
              ['2. Рыночные риски', 'Приход сетевого конкурента, падение спроса в несезон, зависимость от 1–2 заказчиков', 'Диверсификация базы (не более 20% выручки на 1 клиента), расширение линейки, программа лояльности'],
              ['3. Операционные риски', 'Уход ключевого мастера вместе с базой, поломка станка, срыв поставки единственным поставщиком', 'Регламенты работы, хранение базы в CRM, минимум 2 резервных поставщика, страхование цеха'],
              ['4. Правовые риски', 'Штрафы за неоформленных работников, ошибки в налогах, споры партнеров, потеря незащищенного бренда', 'Оформление договоров в ЕНСТ (my.mehnat.uz), регистрация товарного знака, письменный устав и договоры'],
            ],
            en: [
              ['1. Financial Risks', 'Cash gaps, major buyer default, FX volatility on imported inputs', '2-month cash reserve, rolling payment calendar, matching UZS debt to UZS revenue'],
              ['2. Market Risks', 'Aggressive new entrant, seasonal slump, >40% revenue concentration in one client', 'Cap single-client share (<20%), launch counter-seasonal services, build loyalty lock-in'],
              ['3. Operational Risks', 'Key technician quitting, single-supplier halt, equipment breakdown, data loss', 'Document SOPs, maintain ≥2 backup suppliers, lock contacts in CRM, insure machinery'],
              ['4. Legal & Compliance Risks', 'Informal labor fines, tax/license violations, trademark hijacking, co-founder disputes', 'Register all hires on my.mehnat.uz, trademark brand early, sign clear B2B & founder contracts'],
            ],
          },
        },
      },
    ],
    diagramType: 'risk-matrix',
    diagramTitle: {
      uz: 'Biznes xavflarini baholash matritsasi (Ehtimollik × Zarar darajasi)',
      ru: 'Матрица оценки бизнес-рисков (Вероятность × Сила ущерба)',
      en: 'Enterprise Risk Assessment Matrix (Probability × Financial Impact)',
    },
    diagramNote: {
      uz: 'Yuqori ehtimollik va yuqori zararga ega "Qizil hudud" risklari biznes ochilmasdanoq birinchi navbatda himoyalanishi shart.',
      ru: 'Риски из правого верхнего квадрата («Красная зона») требуют превентивной защиты еще до старта продаж.',
      en: 'High-Probability / High-Impact threats in the top-right quadrant demand preventive controls before launch.',
    },
    stats: [
      {
        value: { uz: '23%', ru: '23%', en: '23%' },
        label: {
          uz: 'Jamoa ichidagi kelishmovchilik va noto‘g‘ri kadrlar tanlovi tufayli yopilgan startaplar ulushi',
          ru: 'Доля стартапов, потерпевших неудачу из-за конфликтов сооснователей и ошибок в команде',
          en: 'Share of startups failing directly due to co-founder conflict or wrong team composition',
        },
        subnote: { uz: '3-raqamli global inqiroz sababi — yozma kelishuv yo‘qligi', ru: 'Входит в топ-3 причин закрытия молодых компаний', en: 'Top-3 global failure driver alongside market need and cash' },
        year: 'CB Insights / Harvard tahlili',
        sourceName: { uz: 'Noam Wasserman "The Founder’s Dilemmas" (HBS)', ru: 'Исследование Гарвардской школы бизнеса', en: 'Harvard Business School Founder’s Dilemmas Study' },
        sourceUrl: 'https://hbr.org',
      },
      {
        value: { uz: '100% elektron', ru: '100% в ЕНСТ', en: '100% Digital' },
        label: {
          uz: 'my.mehnat.uz (YaMMT) orqali mehnat shartnomalari va elektron mehnat daftarchalarini yuritish',
          ru: 'Регистрация трудовых договоров и электронных трудовых книжек в системе my.mehnat.uz',
          en: 'Digital registration of employment contracts and workbooks via my.mehnat.uz',
        },
        subnote: { uz: 'Norasmiy xodim ishlatish huquqiy xavfini bartaraf etadi', ru: 'Исключает штрафы за неофициальный наем персонала', en: 'Eliminates informal-labor compliance penalties' },
        year: '2025–2026',
        sourceName: { uz: 'Kambag‘allikni qisqartirish va bandlik vazirligi', ru: 'Минзанятости РУз (my.mehnat.uz)', en: 'Ministry of Employment (my.mehnat.uz)' },
        sourceUrl: 'https://my.mehnat.uz',
      },
      {
        value: { uz: '≤ 20%', ru: '≤ 20%', en: '≤ 20%' },
        label: {
          uz: 'Bitta yirik B2B xaridorga yoki bitta xomashyo yetkazuvchiga xavfsiz bog‘liqlik chegarasi',
          ru: 'Безопасный порог концентрации выручки на одном крупном клиенте (диверсификация риска)',
          en: 'Safe maximum revenue concentration threshold in any single B2B customer',
        },
        subnote: { uz: 'Agar 1 mijoz 60% savdo bersa — u ketsa biznes to‘xtaydi', ru: 'Защита от внезапного расторжения контракта ключевым заказчиком', en: 'Prevents existential shock if a major account churns' },
        year: 'Risk-menejment me’yori',
        sourceName: { uz: 'Korporativ risk-menejment standarti (ISO 31000)', ru: 'Стандарт управления рисками ISO 31000', en: 'ISO 31000 Risk Management Standard' },
        sourceUrl: 'https://www.iso.org',
      },
    ],
    charts: [
      {
        id: 'm14-chart-1',
        type: 'bar',
        title: {
          uz: 'Savdo bo‘limi samaradorligi taqqoslovi: Faqat qat’iy oylik vs Oklad + KPI tizimi (oylik sotuv, mln so‘m)',
          ru: 'Выручка на 1 менеджера: фиксированный оклад против системы «Оклад + прозрачный KPI» (млн сумов)',
          en: 'Monthly Sales Rep Output: Flat Salary Only vs. Base + Transparent KPI Bonus (M UZS)',
        },
        unit: { uz: 'mln so‘m', ru: 'млн сумов', en: 'M UZS' },
        year: 'HR-tahlil modeli',
        sourceName: { uz: 'Kichik biznesda KPI joriy etish amaliyoti', ru: 'Практика внедрения KPI в отделах продаж', en: 'SME Sales Compensation Benchmark' },
        sourceUrl: 'https://my.mehnat.uz',
        seriesLabel: { uz: 'Oklad + KPI tizimi', ru: 'Оклад + KPI', en: 'Base + KPI System' },
        secondarySeriesLabel: { uz: 'Faqat bir xil oklad', ru: 'Только фикс. оклад', en: 'Flat Salary Only' },
        data: [
          { name: { uz: '1-oy', ru: '1 мес', en: 'M1' }, value: 85, secondaryValue: 78 },
          { name: { uz: '2-oy', ru: '2 мес', en: 'M2' }, value: 104, secondaryValue: 80 },
          { name: { uz: '3-oy', ru: '3 мес', en: 'M3' }, value: 126, secondaryValue: 76 },
          { name: { uz: '4-oy', ru: '4 мес', en: 'M4' }, value: 138, secondaryValue: 79 },
        ],
      },
      {
        id: 'm14-chart-2',
        type: 'bar',
        title: {
          uz: 'Kichik biznesda eng ko‘p moliyaviy yo‘qotish keltiruvchi risk omillari bahosi (10 ballik ta’sir indeksi)',
          ru: 'Индекс потенциального ущерба типовых рисков малого бизнеса (по 10-балльной шкале)',
          en: 'Severity Index of Common SME Business Risks (10-Point Impact Scale)',
        },
        unit: { uz: 'ball (1–10)', ru: 'баллов (1–10)', en: 'severity (1–10)' },
        year: 'Risk-matritsa',
        sourceName: { uz: 'Kichik tadbirkorlik risk-tahlili', ru: 'Матрица рисков МСБ', en: 'SME Risk Assessment Benchmark' },
        sourceUrl: 'https://lex.uz',
        seriesLabel: { uz: 'Xavf kuchi (1–10)', ru: 'Уровень угрозы (1–10)', en: 'Impact Score (1–10)' },
        data: [
          { name: { uz: 'Ta’sischilar nizosi', ru: 'Конфликт учредителей', en: 'Co-Founder Deadlock' }, value: 9.2 },
          { name: { uz: 'Kassa uzilishi', ru: 'Кассовый разрыв', en: 'Cash Flow Insolvency' }, value: 8.8 },
          { name: { uz: 'Soliq / litsenziya jarimasi', ru: 'Налоговые/лиценз. штрафы', en: 'Tax / License Fine' }, value: 8.1 },
          { name: { uz: 'Yagona yetkazuvchi uzilishi', ru: 'Сбой 1 поставщика', en: 'Single-Supplier Failure' }, value: 7.4 },
          { name: { uz: 'Kadrlar ketishi', ru: 'Уход ключевого спеца', en: 'Key Staff Churn' }, value: 6.9 },
        ],
      },
    ],
    legalActs: [
      {
        id: 'm14-law-1',
        docType: { uz: 'Kodeks', ru: 'Кодекс РУз', en: 'Code of the RUz' },
        title: {
          uz: 'O‘zbekiston Respublikasining Mehnat kodeksi (yangi tahrir, O‘RQ-798)',
          ru: 'Трудовой кодекс Республики Узбекистан (новая редакция, ЗРУ-798)',
          en: 'Labor Code of the Republic of Uzbekistan (Revised Edition, Law No. ZRU-798)',
        },
        summary: {
          uz: 'Xodimni ishga qabul qilish, sinov muddati (oddiy xodimlarga 3 oygacha, rahbar/bosh buxgalterga 6 oygacha), ish vaqti, ta’tillar, mukofotlash, moddiy javobgarlik va mehnat shartnomasini bekor qilish tartibini belgilaydi. Mikrofirmalar uchun soddalashtirilgan mehnat tartibi bobini (34-bob) o‘z ichiga oladi!',
          ru: 'Регулирует прием на работу, испытательный срок (до 3 мес., для руководителей и главбухов — до 6 мес.), оплату труда, материальную ответственность и специальные упрощенные нормы для микрофирм и ИП (глава 34).',
          en: 'Governs employment contracts, probation periods (up to 3 months standard; 6 months for executives/chief accountants), wages, liability, and simplified HR rules specifically for microfirms (Chapter 34).',
        },
        relevance: {
          uz: 'Xodimlarni qonuniy ishga olish, sinov muddati belgilash va mehnat nizolaridan himoyalanishning asosiy kodeksi.',
          ru: 'Главный закон для грамотного найма, установления испытательного срока и защиты работодателя от трудовых споров.',
          en: 'Primary HR compliance statute protecting both employers and staff across hiring, probation, and termination.',
        },
        keyClauses: {
          uz: [
            'Xodimni ishga haqiqatda qo‘yish faqat yozma/elektron mehnat shartnomasi tuzilib my.mehnat.uz tizimida ro‘yxatga olingach amalga oshiriladi.',
            'Mikrofirmalar ish beruvchilari lokal hujjatlarni (ichki mehnat tartibi qoidalarini) alohida qabul qilmasdan, barcha shartlarni bevosita mehnat shartnomasining o‘ziga kiritish huquqiga ega!',
          ],
          ru: [
            'Трудовой договор обязательно регистрируется в Единой национальной системе труда (my.mehnat.uz).',
            'Микрофирмы освобождены от бюрократии лишних локальных актов — условия труда и премирования достаточно прописать прямо в трудовом договоре.',
          ],
          en: [
            'All employment contracts must be executed and logged digitally in the Unified National Labor System (my.mehnat.uz).',
            'Microfirms enjoy streamlined compliance: HR rules and KPI bonus terms can be embedded directly inside individual employment contracts without separate corporate rulebooks.',
          ],
        },
        yearNote: '2023 / Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/6257288',
      },
      {
        id: 'm14-law-2',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Sug‘urta faoliyati to‘g‘risida”gi Qonun hamda “Tijorat siri to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni',
          ru: 'Законы РУз «О страховой деятельности» и «О коммерческой тайне»',
          en: 'Law "On Insurance Activity" & Law "On Trade Secrets (NDA)"',
        },
        summary: {
          uz: 'Korxona binosi, uskunasi va yuklarini yong‘in/tabiiy ofat xavfidan sug‘urtalash hamda xodimlar bilan Tijorat sirini oshkor qilmaslik majburiyatini (NDA) rasmiylashtirish imkonini beradi.',
          ru: 'Позволяют застраховать имущество и грузы от форс-мажора, а также юридически защитить клиентскую базу, рецептуры и ноу-хау режимом коммерческой тайны (NDA).',
          en: 'Enables commercial property/cargo risk insurance and provides enforceable NDA protection over proprietary recipes, code, and CRM lists.',
        },
        relevance: {
          uz: 'Operatsion va bozor risklarini (yong‘in, baza o‘g‘irlanishi, retsept tarqalishi) yuridik jihatdan jilovlash quroli.',
          ru: 'Защищает бизнес от потери цеха при пожаре и кражи клиентской базы недобросовестным сотрудником.',
          en: 'Mitigates catastrophic asset loss and prevents departing employees from misappropriating client lists or trade secrets.',
        },
        keyClauses: {
          uz: [
            'Mijozlar ro‘yxati, narx siyosati va ishlab chiqarish texnologiyasini himoyalash uchun korxonada “Tijorat siri rejimi” joriy etilib, xodim imzosi bilan tanishtirilishi lozim.',
          ],
          ru: [
            'Для юридической силы NDA на предприятии должен быть утвержден перечень сведений, составляющих коммерческую тайну.',
          ],
          en: [
            'Enforceable NDA protection requires formally defining confidential asset categories and obtaining signed employee acknowledgment.',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/2485769',
      },
    ],
    caseStudy: {
      title: {
        uz: 'Keys: "Baraka Tekstil" sexida bosh texnolog va yagona mato yetkazuvchiga qaramlik inqirozidan xulosa',
        ru: 'Кейс: Как швейный цех «Baraka Tekstil» преодолел операционный кризис зависимости от одного человека и поставщика',
        en: 'Case Study: Resolving Single-Point-of-Failure Risks at "Baraka Textile"',
      },
      scenario: {
        uz: 'Toshkent viloyatidagi kichik trikotaj sexida barcha andozalar (lekalo), mijoz kontaktlari va tikuv me’yorlari faqat bitta bosh ustaning kompyuterida va xotirasida saqlanar, mato esa faqat bitta importyor firmadan olinar edi. Mavsum qizg‘in paytda bosh usta raqobatchi korxonaga o‘tib ketdi, mato yetkazuvchi esa bojxona kechikishi tufayli 2 haftaga to‘xtab qoldi — sex 90 mln so‘mlik jarima xavfi ostida qoldi!',
        ru: 'В трикотажном цехе все лекала, контакты заказчиков и настройки раскроя хранились исключительно у одного старшего технолога, а полотно закупалось у единственного поставщика. В разгар осеннего сезона технолог ушел к конкурентам, а поставка ткани задержалась на 2 недели — цех оказался на грани срыва контрактов на 90 млн сумов.',
        en: 'At a knitwear workshop in Tashkent region, all garment patterns, buyer contacts, and cutting specs lived exclusively on one head technologist’s laptop, while fabric came from a single supplier. At peak autumn rush, the technologist quit for a rival and the sole fabric supplier stalled for 14 days — threatening 90M UZS in contract penalties!',
      },
      analysis: {
        uz: 'Ta’sischi tezkor choralar bilan buyurtmani qutqarib qolgach, 4 bosqichli risk-himoya tizimini qurdirdi: 1) Barcha lekalo va texnologik kartalar kompaniya bulutli xotirasiga (Cloud) ko‘chirildi va NDA joriy etildi; 2) Har bir muhim lavozimga shogird-o‘rinbosar biriktirildi; 3) Namangan va Farg‘onadagi 2 ta mahalliy mato fabrikasi bilan zaxira shartnomalari tuzildi; 4) Xodimlar oyligi " bazaviy oklad + o‘z vaqtida va brak-nuqsonsiz topshirilgan partiya bonusi (KPI)" tizimiga o‘tkazildi.',
        ru: 'Закрыв кризис, основатель внедрил систему риск-менеджмента: 1) Оцифровал лекала и техкарты в корпоративном облаке и ввел NDA; 2) Подготовил кадровый дубль (помощника технолога); 3) Заключил резервные договоры с двумя отечественными фабриками полотна в Ферганской долине; 4) Привязал премию бригад к KPI сроков и отсутствию брака.',
        en: 'After scrambling to save the shipment, the founder overhauled operational risk controls: (1) Centralized all CAD patterns and SOPs in company-owned cloud storage under signed NDAs; (2) Cross-trained a deputy technologist; (3) Contracted two backup domestic fabric mills in Namangan and Fergana; and (4) Tied team bonuses to on-time, zero-defect KPI milestones.',
      },
      numbersBreakdown: {
        uz: [
          'Inqiroz yo‘qotishi (shoshilinch qimmat mato olish va qo‘shimcha smena): −18 mln so‘m.',
          'Yangi tizim samarasi: brak darajasi 6,5% dan 1,4% ga tushdi, xodimlar qo‘nimsizligi 2 barobar kamaydi.',
          'Xomashyo xavfsizligi: 3 ta yetkazib beruvchi (60% / 25% / 15% taqsimot) uzluksiz ishni kafolatladi.',
        ],
        ru: [
          'Разовый убыток от незакрытого риска (срочная переплата за ткань и сверхурочные): −18 млн сумов.',
          'Эффект внедрения регламентов и KPI: доля брака снизилась с 6,5% до 1,4%.',
          'Диверсификация закупок между 3 поставщиками (60% / 25% / 15%) полностью сняла риск простоя.',
        ],
        en: [
          'One-time crisis cost (emergency rush fabric premium + overtime): −18M UZS.',
          'Post-KPI & SOP impact: defect rate dropped from 6.5% to 1.4%, stabilizing retention.',
          'Splitting sourcing across 3 mills (60% / 25% / 15%) eliminated single-supplier downtime.',
        ],
      },
      challengeQuestion: {
        uz: 'Uch nafar do‘st startap ochayotganda "kimdir 1-yilda ketib qolsa, ulushi korxonada qolishi va ulush 3 yil davomida ishlab berilgan sari biriktirilishi" mexanizmi nima deb ataladi?',
        ru: 'Как называется механизм партнерского соглашения, при котором доли сооснователей закрепляются не сразу в первый день, а поэтапно в течение 3–4 лет реальной работы в проекте?',
        en: 'What is the governance mechanism whereby co-founders earn their ownership equity progressively over 3–4 years of active contribution rather than receiving 100% upfront on Day 1?',
      },
      challengeOptions: {
        uz: [
          'Vesting (Cliff & Vesting kelishuvi)',
          'Faktoring',
          'Amortizatsiya',
        ],
        ru: [
          'Вестинг (Vesting с пороговым периодом Cliff)',
          'Франчайзинг',
          'Инкотермс',
        ],
        en: [
          'Equity Vesting (with a 1-year Cliff)',
          'Accounts Receivable Factoring',
          'Straight-Line Depreciation',
        ],
      },
      correctOptionIndex: 0,
      challengeExplanation: {
        uz: 'Vesting (odatda 1 yillik "Cliff" sinov davri bilan 3–4 yilga mo‘ljallanadi) faol ishlayotgan sheriklarni erta ketib qolgan hammuassisning "o‘lik ulushi" muammosidan adolatli himoya qiladi.',
        ru: 'Механизм Vesting защищает компанию и оставшихся основателей от ситуации, когда ушедший через 3 месяца партнер сохраняет крупную долю в бизнесе.',
        en: 'Vesting (typically 4 years with a 1-year cliff) ensures equity rewards sustained execution and protects active founders from early dropouts.',
      },
    },
    keyTakeaways: {
      uz: [
        'Sherikni o‘zingizga o‘xshaganini emas, sizda yo‘q ko‘nikmani to‘ldiradiganini va qadriyati halol bo‘lganini tanlang.',
        'Pul kelmasdan oldin ulush, vazifa va ajralish shartlarini yozma kelishib olish — do‘stlikni ham, biznesni ham saqlab qoladi.',
        'Yaxshi KPI tizimida xodim ko‘proq daromad topsa — korxona ham avtomatik ravishda ko‘proq sof foyda ko‘radi (Win-Win).',
        'Biznesda "yagona nuqtali qaramlik"dan (1 ta yulduz xodim, 1 ta yetkazib beruvchi, 1 ta xaridor) qoching.',
        'Mehnat shartnomalarini my.mehnat.uz da rasmiylashtirish va savdo bazasini CRM + NDA bilan himoyalash huquqiy xotirjamlik garovidir.',
      ],
      ru: [
        'Подбирайте сооснователей по принципу комплементарности навыков (продукт + продажи + финансы) и фиксируйте договоренности письменно.',
        'Эффективная мотивация сочетает рыночный базовый оклад, понятные бонусы за KPI и здоровую культуру уважения.',
        'Делегируйте рутину с четкими критериями результата и точками контроля, оставляя себе стратегию и развитие.',
        'Устраняйте «точки единичного отказа»: один ключевой сотрудник без дублера, один поставщик или один крупный клиент.',
        'Соблюдение Трудового кодекса РУз (упрощенные нормы для микрофирм) и защита коммерческой тайны страхуют от правовых потерь.',
      ],
      en: [
        'Recruit co-founders who complement your blind spots across Product, Sales, and Finance — and put equity vesting in writing Day 1.',
        'Align incentives so higher employee KPI bonuses automatically reflect higher company net profit.',
        'Delegate repeatable execution via documented SOPs and clear checkpoints so you can lead strategy.',
        'Eliminate single points of failure across key personnel, raw material suppliers, and major B2B buyers.',
        'Leverage Uzbekistan’s simplified microfirm Labor Code rules on my.mehnat.uz alongside signed NDAs.',
      ],
    },
  },
  {
    id: 'm15',
    number: 15,
    code: 'M15',
    hours: 2,
    readMinutes: 16,
    iconName: 'Presentation',
    roadmapStage: { uz: 'Pitch Deck va Start!', ru: 'Питч и Старт!', en: 'Pitch Deck & Launch!' },
    title: {
      uz: 'Biznes g‘oyani taqdim etish va tadbirkorlik yo‘lini boshlash',
      ru: 'Презентация бизнес-идеи (Pitch Deck) и старт предпринимательского пути',
      en: 'Pitching Your Venture (Pitch Deck, Elevator Pitch) & Launching Forward',
    },
    shortDesc: {
      uz: '10 slaydli Pitch Deck oltin standarti, 90 soniyalik Elevator Pitch texnikasi, investorlarning o‘tkir savollariga javob va 90 kunlik harakat rejasi.',
      ru: 'Золотой стандарт Pitch Deck (10–12 слайдов), техника Elevator Pitch за 90 секунд, ответы на каверзные вопросы инвесторов и план первых 90 дней.',
      en: 'The 10-Slide Pitch Deck gold standard, crafting a 90-second Elevator Pitch, mastering investor Q&A, and your first 90-day launch checklist.',
    },
    summary: {
      uz: 'Kursning yakuniy cho‘qqisi! Siz muammoni topdingiz, MVP sinadingiz, soliq, biznes-model, marketing, savdo, narx, pul oqimi, foyda va jamoani hisobladingiz. Endi bularning barchasini investor, grant komissiyasi yoki hamkor oldida 3–5 daqiqada ishonchli va jozibali himoya qilish (Pitching) mahoratini egallaysiz.',
      ru: 'Финальный модуль объединяет все знания курса М1–М14 в убедительное выступление перед инвесторами, грантовой комиссией или стратегическими партнерами: структура идеального Pitch Deck, речь Elevator Pitch и обоснование инвестиционного запроса.',
      en: 'The capstone module! Synthesizing everything mastered from M1 through M14, you will structure a compelling 10-slide investor Pitch Deck, deliver a crisp 90-second Elevator Pitch, defend your financial ask under Q&A scrutiny, and map your 90-day launch plan.',
    },
    learningObjectives: {
      uz: [
        'Guy Kawasaki va Sequoia Capital xalqaro standartiga mos 10–12 slaydli Pitch Deck strukturasini mantiqiy hikoya (storytelling) ko‘rinishida yig‘ish.',
        '60–120 soniyalik "Elevator Pitch" (Liftda taqdimot) nutqini Ilgak → Muammo → Yechim → Isbot (Traction) → Chaqiqriq (Ask) formulasida tayyorlash.',
        'Moliyaviy so‘rovni (Investment Ask) "menga 200 mln so‘m kerak" deb emas, aniq sarf yo‘nalishlari (Use of Funds) va erishiladigan marralar (Milestones) bilan asoslab berish.',
        'Investor va hakamlarning eng ko‘p beriladigan 7 ta qiyin savoliga fakt va raqamlar bilan xotirjam javob qaytarish.',
      ],
      ru: [
        'Собирать убедительную презентацию Pitch Deck из 10–12 слайдов по мировому стандарту Sequoia Capital / Гая Кавасаки.',
        'Формулировать яркую 90-секундную речь Elevator Pitch по формуле: Крючок → Боль → Решение → Трекшн → Запрос.',
        'Грамотно обосновывать сумму запрашиваемых инвестиций (Use of Funds) и целевые показатели роста.',
        'Уверенно отвечать на сложные вопросы инвесторов и экспертов о конкурентах, юнит-экономике и рисках.',
      ],
      en: [
        'Construct a crisp 10-to-12 slide Pitch Deck following the Sequoia Capital / Guy Kawasaki narrative arc.',
        'Deliver a memorable 90-second Elevator Pitch structured around Hook → Pain → Solution → Traction → Ask.',
        'Justify your Investment Ask with a transparent Use-of-Funds breakdown tied to concrete 12-month milestones.',
        'Handle tough investor Q&A on unit economics, defensibility, competition, and execution risks with poise.',
      ],
    },
    sections: [
      {
        id: 'm15-s1',
        title: {
          uz: '15.1. Pitch Deck: 10 slaydli xalqaro oltin standart',
          ru: '15.1. Структура идеального Pitch Deck (10 ключевых слайдов)',
          en: '15.1. The 10-Slide Investor Pitch Deck Architecture',
        },
        paragraphs: {
          uz: [
            'Pitch Deck — bu ekranga ko‘chirilgan Word matni EMAS! Gay Kavasakining mashhur "10 / 20 / 30 qoidasi"ni eslab qoling: ~10 ta slayd, uzoǵi bilan 20 daqiqa (ko‘pincha Demo Day va tanlovlarda 3–5 daqiqa!) va slayd shrifti 24–30 punktdan kichik bo‘lmasligi (slaydda kam so‘z, katta raqam va vizual sxema). Pitch Deck maqsadi — sahnadayoq shartnoma imzolash emas, balki investorda "Men bu jamoa bilan ertaga alohida uchrashib chuqur gaplashishim shart!" degan qiziqish uyg‘otishdir.',
          ],
          ru: [
            'Pitch Deck — это визуальная история с крупными цифрами, а не мелкий текст для чтения с листа (правило Гая Кавасаки 10/20/30: около 10 слайдов, крупный шрифт, фокус на сути; на питч-сессиях часто дается всего 3–5 минут). Главная цель питча — заинтересовать инвестора и получить приглашение на детальную встречу (Due Diligence).',
          ],
          en: [
            'A Pitch Deck is visual storytelling anchored by sharp metrics — never a wall of tiny text read aloud (Guy Kawasaki’s 10/20/30 rule: ~10 slides, bold legible type, zero clutter; Demo Days typically grant just 3–5 minutes). Its goal is earning the follow-up Due Diligence meeting.',
          ],
        },
        highlightTerms: ['pitch-deck', 'angel-investor', 'venture-capital'],
        comparisonTable: {
          headers: {
            uz: ['Slayd № va nomi', 'Slaydda nima bo‘lishi shart?', 'Kursning qaysi mavzusidan olinadi?'],
            ru: ['Слайд № и название', 'Ключевое содержание слайда', 'Связь с модулями курса'],
            en: ['Slide # & Title', 'Essential Slide Content', 'Linked Course Module'],
          },
          rows: {
            uz: [
              ['1. Titul va 1 jumlalik mohiyat', 'Brend nomi, logotip va loyiha nima qilishini 8–10 so‘zda ifodalovchi aniq ibora', 'M1, M8'],
              ['2. Muammo (Problem)', 'Mijoz kim va u bugun qancha vaqt/pul yo‘qotmoqda? (hayotiy fakt bilan)', 'M1, M2'],
              ['3. Yechim va Mahsulot (Solution)', 'Mahsulotingiz muammoni qanday hal qiladi? (MVP skrinshoti yoki jonli namuna)', 'M2, M3'],
              ['4. Bozor hajmi (Market Size)', 'TAM → SAM → SOM (pastdan yuqoriga isbotlangan real raqamlarda)', 'M7'],
              ['5. Biznes-model (Monetization)', 'Qanday pul ishlaysiz? O‘rtacha chek, marja, obuna yoki komissiya %', 'M6, M10'],
              ['6. Natijalar (Traction)', 'Eng kuchli slayd! Ilk sotuvlar, tushum o‘sishi, oldindan shartnomalar, LTV/CAC', 'M8, M9'],
              ['7. Raqobatchilar va Ustunlik', '“Bizda raqobatchi yo‘q” demang! Taqqoslash matritsasi va sizning ustunligingiz', 'M7, M8'],
              ['8. Go-to-Market strategiyasi', 'Mijozlarni qaysi kanallardan va qancha CAC bilan jalb qilasiz?', 'M8, M9'],
              ['9. Jamoa (Team)', 'Nima uchun aynan sizning jamoangiz bu ishni uddalaydi? (tajriba va rollar)', 'M14'],
              ['10. Moliya va Investitsiya so‘rovi (The Ask)', '3 yillik P&L prognozi + qancha sarmoya kerak, qayerga sarflanadi va 12 oyda qanday natija beradi', 'M3, M11, M12, M13'],
            ],
            ru: [
              ['1. Титул и слоган сути', 'Название, логотип и 1 фраза, объясняющая проект за 5 секунд', 'M1, M8'],
              ['2. Проблема (Problem)', 'Чья боль решается и во сколько обходится клиенту статус-кво', 'M1, M2'],
              ['3. Решение и Продукт', 'Наглядная демонстрация продукта / MVP и ключевой выгоды', 'M2, M3'],
              ['4. Объем рынка (Market)', 'Расчет TAM → SAM → SOM с опорой на статистику', 'M7'],
              ['5. Бизнес-модель', 'На чем зарабатывает компания, средний чек, маржинальность, BEP', 'M6, M10'],
              ['6. Трекшн (Traction)', 'Главный слайд доверия: первые продажи, выручка, клиенты, пилоты', 'M8, M9'],
              ['7. Конкуренты', 'Никогда не говорите «конкурентов нет»! Покажите честное сравнение', 'M7, M8'],
              ['8. Маркетинг и продажи', 'Каналы привлечения, воронка конверсии и целевой CAC', 'M8, M9'],
              ['9. Команда (Team)', 'Ключевые компетенции сооснователей и релевантный опыт', 'M14'],
              ['10. Финансы и Запрос (The Ask)', 'Прогноз выручки/прибыли, сумма инвестиций, статьи трат и ожидаемый ROI', 'M3, M11, M12, M13'],
            ],
            en: [
              ['1. Title & One-Liner', 'Brand mark and a crystal-clear 10-word value statement', 'M1, M8'],
              ['2. The Problem', 'Quantified customer pain point and broken status quo', 'M1, M2'],
              ['3. Solution & Product Demo', 'Visual screenshot/photo of your working MVP and 3x advantage', 'M2, M3'],
              ['4. Market Opportunity', 'Credible bottom-up TAM → SAM → SOM sizing', 'M7'],
              ['5. Business Model', 'How you monetize, unit pricing, gross margin, and BEP', 'M6, M10'],
              ['6. Traction & Proof', 'Strongest slide: early sales, pilot LOIs, MoM growth, LTV:CAC', 'M8, M9'],
              ['7. Competitive Landscape', 'Never claim "zero competitors"! Map alternatives honestly', 'M7, M8'],
              ['8. Go-To-Market Plan', 'Acquisition channels, sales funnel math, and target CAC', 'M8, M9'],
              ['9. Founding Team', 'Complementary founder domain expertise and execution track record', 'M14'],
              ['10. Financials & The Ask', 'P&L trajectory + exact funding sought, Use of Funds, and 12-mo milestones', 'M3, M11, M12, M13'],
            ],
          },
        },
      },
      {
        id: 'm15-s2',
        title: {
          uz: '15.2. "Elevator Pitch" (Liftda 90 soniyalik taqdimot) formulasi',
          ru: '15.2. Техника «Elevator Pitch»: как увлечь идеей за 60–90 секунд',
          en: '15.2. Mastering the 90-Second Elevator Pitch Formula',
        },
        paragraphs: {
          uz: [
            'Tasavvur qiling, biznes-forumda liftga nufuzli investor yoki yirik tarmoq rahbari bilan birga kirdingiz — lift 9-qavatga chiqquncha sizda atigi 60–90 soniya bor! Uzun kirish so‘zlarsiz 5 jumlalik temir formuladan foydalaning:',
            '1) Ilgak (Hook — diqqatni tortuvchi raqam/fakt): "Bilasizmi, Toshkentdagi 1 200 dan ortiq kichik do‘konlar ombordagi hisob xatosi tufayli tushumining 8% ini yo‘qotadi?"\n2) Yechim: "Biz telefon kamerasi orqali 15 daqiqada tovar qoldig‘ini sanab, avtomatik buyurtma tuzuvchi «TezOmbor» mobil tizimini yaratdik."\n3) Biznes-model: "Do‘konlar oyiga 250 000 so‘m obuna to‘laydi."\n4) Isbot (Traction): "Oxirgi 2 oyda 45 ta do‘kon ulandi va oylik takroriy tushumimiz 11,2 mln so‘mga yetdi, ketish darajasi 0%."\n5) Aniq chaqiriq (Call-to-Action): "Biz yil oxirigacha 500 ta do‘konga chiqish uchun sarmoya raundini ochyapmiz — payshanba kuni 15 daqiqaga taqdimotimizni ko‘rsatsam bo‘ladimi?"',
          ],
          ru: [
            'Elevator Pitch — это концентрированная устная презентация длительностью 60–90 секунд (время поездки в лифте), построенная из 5 четких предложений:',
            '1) Крючок (факт острой боли): «Более 1 200 небольших магазинов у дома теряют до 8% оборота из-за ручного переучета и просрочки».\n2) Решение: «Мы запустили мобильный сервис TezOmbor, который проводит ревизию камерой смартфона за 15 минут и сам формирует заказ поставщикам».\n3) Монетизация: «Магазины платят подписку 250 000 сумов в месяц».\n4) Доказательство (Трекшн): «За 2 месяца подключено 45 платящих точек, выручка 11,2 млн сумов/мес. без единого отключения».\n5) Призыв к действию: «Мы привлекаем инвестиции для роста до 500 магазинов — удобно ли созвониться в четверг на 15 минут и показать демо?».',
          ],
          en: [
            'An Elevator Pitch distills your entire venture into 60–90 compelling seconds using a 5-sentence architecture:',
            '(1) The Hook (quantified pain): "Over 1,200 neighborhood grocers in Tashkent lose up to 8% of revenue to stockouts and manual inventory errors."\n(2) The Solution: "We built TezOmbor — a smartphone-camera inventory app that audits shelves in 15 minutes and auto-reorders stock."\n(3) Business Model: "Stores pay a 250,000 UZS monthly SaaS subscription."\n(4) Traction Proof: "In just 8 weeks, 45 paying stores signed on, generating 11.2M UZS MRR with zero churn."\n(5) Clear Ask: "We’re raising seed capital to reach 500 stores by year-end — could I share a 15-minute live demo this Thursday?"',
          ],
        },
      },
      {
        id: 'm15-s3',
        title: {
          uz: '15.3. Investorlarning kutilayotgan savollari va moliyaviy so‘rovni asoslash',
          ru: '15.3. Подготовка к вопросам инвесторов и обоснование инвестиционного запроса',
          en: '15.3. Defending Your Financial Ask & Handling Tough Investor Q&A',
        },
        paragraphs: {
          uz: [
            'Moliyaviy so‘rovda hech qachon "Menga 300–500 mln atrofida pul kerak, reklama va rivojlanishga ishlatamiz" deb mavhum gapirmang! Aniq ayting: "Biz 20% ulush evaziga 400 mln so‘m investitsiya jalb qilmoqdamiz. Sarf taqsimoti: 45% (180 mln) — qadoqlash liniyasi xaridi, 35% (140 mln) — 6 oylik savdo va marketing (CAC = 35 ming so‘m hisobida 4 000 yangi mijoz), 20% (80 mln) — aylanma xomashyo zaxirasi. Natijada 12-oyga borib oylik tushum 220 mln so‘mga, sof foyda 42 mln so‘mga chiqadi (ROI o‘zini 14 oyda oqlaydi)".',
            'Savol-javobda (Q&A) tayyor turiladigan 5 ta klassik savol: 1) Bitta mijozni jalb qilish (CAC) qancha turadi va u qancha foyda (LTV) qoldiradi? 2) Yirik o‘yinchi (masalan, Uzum yoki yirik zavod) ertaga shu ishni boshlasa, qanday himoyalanasiz? 3) Zararsizlik nuqtangiz qayerda va qachon musbat Cash Flow ga chiqasiz? 4) Eng katta xavf nima? 5) O‘zingiz bu loyihaga shaxsiy mablag‘ingiz va 100% vaqtingizni tikdingizmi (Skin in the game)? Bilmagan raqamingizni hech qachon sahnada uydirmang — halollik ishonchning yarmidir.',
          ],
          ru: [
            'Инвестиционный запрос (The Ask) должен быть математически прозрачным: точная сумма, предлагаемая доля (или условия займа), распределение средств по статьям в процентах (оборудование, маркетинг, оборотный капитал) и конкретный рубеж выручки через 12 месяцев.',
            'Пять проверочных вопросов любого опытного инвестора: 1) Каковы текущие CAC и LTV? 2) Почему крупный игрок не скопирует вас завтра за месяц? 3) Когда компания проходит точку безубыточности? 4) В чем главный риск невыполнения плана? 5) Чем лично рискуют и сколько вложили сами основатели? Никогда не выдумывайте цифры на ходу — честный ответ «я уточню эти данные и пришлю сегодня вечером» вызывает уважение.',
          ],
          en: [
            'Never state a vague range like "We need 300–500M UZS for growth." Specify precision: "We are raising 400M UZS for 20% equity: 45% (180M) automated packaging line, 35% (140M) customer acquisition acquiring 4,000 buyers at 35K UZS CAC, and 20% (80M) working capital — scaling monthly revenue to 220M UZS and 42M UZS Net Profit by Month 12."',
            'Prepare crisp data for the Top 5 Investor Q&A probes: (1) Exact CAC vs. LTV unit math; (2) Defensibility if an incumbent copies you; (3) Break-Even month and cash runway; (4) Your single biggest execution bottleneck; and (5) Founder skin-in-the-game (full-time focus + personal capital). Never bluff an unknown metric on stage.',
          ],
        },
      },
    ],
    diagramType: 'pitch-deck-10',
    diagramTitle: {
      uz: '10 slaydli Pitch Deck hikoya chizig‘i va Tadbirkorning ilk 90 kunlik start rejasi',
      ru: 'Логика 10 слайдов Pitch Deck и чек-лист старта в первые 90 дней',
      en: '10-Slide Pitch Deck Narrative Arc & Your 90-Day Launch Blueprint',
    },
    diagramNote: {
      uz: 'Tabriklaymiz! Ushbu 15-mavzu bilan "Tadbirkorlik asoslari" kursining to‘liq yo‘l xaritasini yakunladingiz — bilimingizni sinash uchun Yakuniy imtihonga o‘ting!',
      ru: 'Поздравляем с завершением всех 15 тем! Проверьте комплексное освоение курса в разделе «Итоговый экзамен» и получите именной сертификат.',
      en: 'Congratulations on completing all 15 modules! Head to the Final Exam to benchmark your mastery across all topics and claim your certificate.',
    },
    stats: [
      {
        value: { uz: '~3 daq. 20 son.', ru: '~3 мин. 20 сек.', en: '~3m 20s' },
        label: {
          uz: 'Venchur investorlar bitta yuborilgan Pitch Deck taqdimotini ko‘rib chiqishga sarflaydigan o‘rtacha vaqt',
          ru: 'Среднее время, которое инвестор тратит на первичный просмотр присланного Pitch Deck',
          en: 'Average time VCs spend reviewing an inbound Pitch Deck before deciding to pass or meet',
        },
        subnote: { uz: 'Slaydlar bir qarashda tushunarli va raqamlarga boy bo‘lishi shart', ru: 'Каждый слайд должен считываться за 15–20 секунд', en: 'Every slide must communicate its core takeaway within 15–20 seconds' },
        year: 'DocSend / Harvard tadqiqoti',
        sourceName: { uz: 'DocSend Pitch Deck Interest Metrics hisoboti', ru: 'Исследование DocSend Pitch Deck Analytics', en: 'DocSend Fundraising Analytics Study' },
        sourceUrl: 'https://www.docsend.com',
      },
      {
        value: { uz: '$145 mln+', ru: '$145 млн+', en: '$145M+' },
        label: {
          uz: 'O‘zbekistonda startap va venchur ekotizimini rivojlantirish fondlari (UzVC, IT Park Ventures, bank venchur fondlari) ko‘lami',
          ru: 'Совокупный ресурс государственных и корпоративных венчурных фондов экосистемы стартапов РУз',
          en: 'Combined capital pool across Uzbekistan’s public and bank-backed startup venture funds',
        },
        subnote: { uz: 'Mahalliy startaplar uchun Seed va Pre-Series A investitsiya imkoniyatlari kengaymoqda', ru: 'Растущая доступность посевных инвестиций внутри страны', en: 'Expanding domestic Seed and Pre-Series A funding access for local founders' },
        year: '2025–2026',
        sourceName: { uz: 'IT Park Uzbekistan va Raqamli texnologiyalar vazirligi', ru: 'IT Park Uzbekistan / Минцифры РУз', en: 'IT Park Uzbekistan & Digital Ministry Reports' },
        sourceUrl: 'https://it-park.uz',
      },
      {
        value: { uz: '10–12 slayd', ru: '10–12 слайдов', en: '10–12 Slides' },
        label: {
          uz: 'Muvaffaqiyatli sarmoya jalb qilgan startap taqdimotlarining eng optimal hajmi',
          ru: 'Оптимальный объем презентации стартапов, успешно закрывших посевной раунд',
          en: 'Optimal deck length of seed-funded startups (detailed tables go in Appendix)',
        },
        subnote: { uz: 'Qo‘shimcha jadvallar savol-javob uchun Ilova (Appendix) slaydlariga qo‘yiladi', ru: 'Детальные расчеты выносятся в слайды Приложения (Appendix)', en: 'Keep main deck crisp; place granular financial tables in Appendix slides' },
        year: 'Global VC standarti',
        sourceName: { uz: 'Sequoia Capital & Y Combinator tavsiyalari', ru: 'Рекомендации Sequoia Capital и Y Combinator', en: 'Sequoia Capital & Y Combinator Guidelines' },
        sourceUrl: 'https://www.ycombinator.com',
      },
    ],
    charts: [
      {
        id: 'm15-chart-1',
        type: 'bar',
        title: {
          uz: 'Investorlar Pitch Deck ko‘rishda eng ko‘p vaqt va diqqat ajratadigan slaydlar (soniya)',
          ru: 'На каких слайдах Pitch Deck дольше всего задерживается внимание инвестора (секунд)',
          en: 'Slides Commanding the Longest Investor Attention Span in a Pitch Deck (Seconds)',
        },
        unit: { uz: 'soniya', ru: 'секунд', en: 'seconds' },
        year: 'DocSend tahlili',
        sourceName: { uz: 'DocSend Startup Fundraising tadqiqoti', ru: 'Аналитика просмотров DocSend', en: 'DocSend Investor Viewing Heatmap' },
        sourceUrl: 'https://www.docsend.com',
        seriesLabel: { uz: 'Ko‘rish vaqti (soniya)', ru: 'Время изучения (сек.)', en: 'Viewing Time (sec)' },
        data: [
          { name: { uz: 'Moliya va Ask', ru: 'Финансы и Запрос', en: 'Financials & Ask' }, value: 28 },
          { name: { uz: 'Jamoa (Team)', ru: 'Команда (Team)', en: 'Founding Team' }, value: 24 },
          { name: { uz: 'Natija (Traction)', ru: 'Трекшн (Продажи)', en: 'Traction & Metrics' }, value: 23 },
          { name: { uz: 'Biznes-model', ru: 'Бизнес-модель', en: 'Business Model' }, value: 20 },
          { name: { uz: 'Mahsulot va Bozor', ru: 'Продукт и Рынок', en: 'Product & Market' }, value: 18 },
        ],
      },
      {
        id: 'm15-chart-2',
        type: 'pie',
        title: {
          uz: 'Misol: 400 mln so‘mlik Seed-investitsiya so‘rovining asoslangan sarf taqsimoti (Use of Funds, %)',
          ru: 'Пример структуры целевого использования привлекаемых инвестиций (Use of Funds, %)',
          en: 'Sample Seed Round "Use of Funds" Allocation Slide (%)',
        },
        unit: { uz: '%', ru: '%', en: '%' },
        year: 'Pitch Deck namunasi',
        sourceName: { uz: 'Ishlab chiqarish-savdo loyihasi etaloni', ru: 'Эталон инвестиционного тизера', en: 'Seed Pitch Allocation Benchmark' },
        sourceUrl: 'https://it-park.uz',
        seriesLabel: { uz: 'Ulushi (%)', ru: 'Доля (%)', en: 'Allocation (%)' },
        data: [
          { name: { uz: 'Uskuna / Mahsulot (CAPEX)', ru: 'Оборудование / Продукт', en: 'Equipment / Product R&D' }, value: 45 },
          { name: { uz: 'Marketing va Savdo o‘sishi', ru: 'Маркетинг и Продажи', en: 'Sales & Marketing Growth' }, value: 35 },
          { name: { uz: 'Aylanma xomashyo zaxirasi', ru: 'Оборотный капитал', en: 'Working Capital Buffer' }, value: 20 },
        ],
      },
    ],
    legalActs: [
      {
        id: 'm15-law-1',
        docType: { uz: 'Prezident qarori va ekotizim normalari', ru: 'Акты Президента и КМ РУз о венчурной экосистеме', en: 'Presidential Decrees on Startup & Venture Ecosystem' },
        title: {
          uz: 'Raqamli startaplar ekotizimini rivojlantirish, venchur moliyalashtirish hamda IT Park rezidentligi imtiyozlari to‘g‘risidagi me’yoriy hujjatlar',
          ru: 'Нормативно-правовые акты о развитии экосистемы стартапов, венчурном финансировании и статусе резидента IT Park',
          en: 'Regulatory Acts on Startup Ecosystem Support, Venture Financing & IT Park Residency Incentives',
        },
        summary: {
          uz: 'Mahalliy startaplarning xalqaro akseleratorlarda qatnashishi, venchur fondlardan ulushli sarmoya jalb qilishi, "Yoshlar tadbirkorligi" jamg‘armalari hamda IT Park soliq imtiyozlarini tartibga soladi.',
          ru: 'Определяют механизмы работы венчурных фондов, грантовых программ для молодежного предпринимательства и налоговых преференций резидентов IT Park.',
          en: 'Governs venture fund equity investments, youth entrepreneurship grants, accelerator co-financing, and IT Park tax incentives.',
        },
        relevance: {
          uz: 'Pitch Deck bilan mahalliy venchur fondlar (IT Park Ventures, UzVC, AloqaVentures, SQB Ventures va b.) hamda davlat grant tanlovlariga murojaat qilish yo‘lini ochadi.',
          ru: 'Практический ориентир, куда именно в Узбекистане идти с готовым Pitch Deck за грантом или посевной инвестицией.',
          en: 'Maps concrete funding avenues in Uzbekistan (IT Park Ventures, UzVC, AloqaVentures, youth startup grants) once your Pitch Deck is ready.',
        },
        keyClauses: {
          uz: [
            'Venchur va grant tanlovlarida g‘olib bo‘lishning asosiy mezoni — ishlab turgan MVP, asoslangan bozor hisobi va shaffof yuridik shaxs (MChJ) mavjudligidir.',
          ],
          ru: [
            'Для получения венчурных инвестиций проект оформляется в прозрачное юридическое лицо с чистыми правами на интеллектуальную собственность.',
          ],
          en: [
            'Securing institutional seed funding requires clean LLC incorporation, IP ownership clarity, and verifiable early traction.',
          ],
        },
        yearNote: '2024–2026 amaldagi dasturlar',
        lexUrl: 'https://lex.uz',
      },
      {
        id: 'm15-law-2',
        docType: { uz: 'Qonun / Fuqarolik kodeksi', ru: 'Закон об ООО и ГК РУз (инвестиционные сделки)', en: 'Law "On LLCs" & Civil Code Investment Provisions' },
        title: {
          uz: 'Investor kiritilganda MChJ ustav fondini ko‘paytirish va korporativ boshqaruv bitimlari',
          ru: 'Порядок входа инвестора в состав участников ООО через увеличение уставного фонда и защита прав миноритариев',
          en: 'Statutory Procedures for Onboarding Equity Investors via LLC Charter Capital Expansion',
        },
        summary: {
          uz: 'Yangi investor kiritgan mablag‘ hisobiga MChJ ustav fondini oshirish, ulushlarni qayta taqsimlash (dilution) va ta’sis hujjatlarini fo.birdarcha.uz orqali qayta ro‘yxatdan o‘tkazish tartibini belgilaydi.',
          ru: 'Регулирует юридическое оформление сделки с инвестором: внесение вклада в уставный капитал ООО, перераспределение долей и госрегистрацию изменений.',
          en: 'Regulates legal closing of an equity round: capital injection into the LLC, proportional share dilution, and state registry updates.',
        },
        relevance: {
          uz: 'Pitch muvaffaqiyatli o‘tgach, investor pulini "tilxat bilan naqd" emas, qonuniy korporativ ulush sifatida rasmiylashtirish uchun.',
          ru: 'Объясняет, как юридически чисто закрыть сделку после успешного питча.',
          en: 'Ensures seed investments are closed cleanly through formal corporate filings rather than informal handshakes.',
        },
        keyClauses: {
          uz: [
            'Uchinchi shaxs (investor) qo‘shimcha ulush kiritishi hisobiga ustav fondini ko‘paytirish ishtirokchilar umumiy yig‘ilishi qarori bilan tasdiqlanadi va davlat ro‘yxatidan o‘tkaziladi.',
          ],
          ru: [
            'Вход нового участника (инвестора) оформляется решением общего собрания учредителей с регистрацией новой редакции устава.',
          ],
          en: [
            'Admitting an equity investor requires a formal shareholder resolution and updated state corporate registration.',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/22525',
      },
    ],
    caseStudy: {
      title: {
        uz: 'Keys: Talabalar jamoasining "AgroDrone" loyihasi bilan Demo Day tanlovida 350 mln so‘m investitsiya yutishi',
        ru: 'Кейс: Как студенческая команда «AgroDrone» выиграла 350 млн сумов инвестиций благодаря сильному трекшну в Pitch Deck',
        en: 'Case Study: How Student Startup "AgroDrone" Secured 350M UZS on Demo Day Through Metrics-Driven Pitching',
      },
      scenario: {
        uz: 'Universitet bitiruvchilari Jasmina (agronom-tahlilchi) va Timur (muhandis) bog‘ va paxta maydonlarini zararkunandalarga qarshi aniq nuqtali purkovchi agrodron servisini yaratdilar. Birinchi mashq taqdimotida ular 4 daqiqa davomida dron parraklari va akkumulyator texnik xususiyatlarini gapirib, hakamlarni zeriktirib qo‘yishdi.',
        ru: 'Выпускники вуза Жасмина и Тимур запустили сервис точечной обработки садов и полей агродронами. На репетиции питча они 4 минуты рассказывали про физику винтов и емкость батарей — эксперты скучали и не понимали экономику бизнеса.',
        en: 'Graduates Jasmina and Timur launched a precision orchard-spraying drone service. During rehearsal, they spent 4 minutes lecturing on rotor physics and battery chemistry — losing the judges’ attention completely.',
      },
      analysis: {
        uz: 'Mentor yordamida jamoa Pitch Deckni 180 darajaga o‘zgartirdi: 1-soniyadanoq Muammo va Qiymat aytildi ("Fermer traktor bilan dori sepganda hosilning 7% ini ezib nobud qiladi va 40% ko‘p kimyoviy dori sarflaydi; bizning dron esa 1 gektarni 12 daqiqada 180 000 so‘mga hech bir tupni shikastlamay qayta ishlaydi!"). 6-slaydda eng kuchli dalil — Traction ko‘rsatildi: "Toshkent viloyatidagi 6 ta fermer xo‘jaligida 320 gektar maydonni sinovdan o‘tkazib, 57,6 mln so‘m real tushum oldik va bahorgi mavsumga yana 1 100 gektarga oldindan shartnoma imzoladik!". Hakamlar bir ovozdan 2 ta qo‘shimcha sanoat droni olish uchun 350 mln so‘m investitsiya ajratishdi.',
        ru: 'Пересобрав Pitch Deck на языке выгоды клиента и цифр (экономия 40% агрохимии, 0% вытаптывания посевов трактором и главное — реальный трекшн: уже обработано 320 га на 57,6 млн сумов выручки + предзаказы еще на 1 100 га), команда за 3 минуты убедила инвесткомитет и привлекла 350 млн сумов на масштабирование парка дронов.',
        en: 'Rebuilding their Pitch Deck around farmer ROI (40% pesticide savings, zero tractor crop trampling) and undeniable Traction (320 hectares already sprayed for 57.6M UZS cash + signed spring contracts for 1,100 hectares), the duo won unanimous approval for a 350M UZS fleet-expansion investment in 3 minutes flat.',
      },
      numbersBreakdown: {
        uz: [
          'Taqdimot vaqti: aniq 3 daqiqa nutq + 2 daqiqa Q&A (10 ta toza slayd).',
          'Asosiy argument: "g‘oya" emas, balki 57,6 mln so‘m amalda olingan tushum va 198 mln so‘mlik imzolangan buyurtmalar portfeli.',
          'Investitsiya so‘rovi: 350 mln so‘m → 2 ta yangi agrodron + mobil quvvatlash stansiyasi → 1 mavsumda o‘zini oqlash (ROI = 82%).',
        ],
        ru: [
          'Тайминг питча: ровно 3 минуты презентации + 2 минуты ответов на вопросы по юнит-экономике.',
          'Решающий фактор: твердый трекшн (57,6 млн сумов фактической выручки и контракты на весну).',
          'Целевой запрос: 350 млн сумов на 2 промышленных дрона с окупаемостью за 1 агросезон.',
        ],
        en: [
          'Pitch timing: 3 minutes crisp narrative + 2 minutes unit-economics Q&A across 10 clean slides.',
          'Decisive proof: 57.6M UZS settled pilot revenue + 198M UZS signed spring pipeline.',
          'Transparent Ask: 350M UZS for 2 industrial drones + mobile charging rig (projected Year 1 ROI = 82%).',
        ],
      },
      challengeQuestion: {
        uz: 'Agar Pitch Deck namoyishida investor: "Sizda raqobatchilar bormi?" deb so‘rasa, qaysi javob eng katta XATO hisoblanadi?',
        ru: 'Какой ответ основателя на вопрос инвестора «Кто ваши конкуренты?» считается грубейшей ошибкой на питче?',
        en: 'During Pitch Q&A, an investor asks "Who are your competitors?" Which response is a classic credibility-killing mistake?',
      },
      challengeOptions: {
        uz: [
          '“Bizning mahsulotimiz mutlaqo yagona, O‘zbekistonda ham, dunyoda ham bizga hech qanday raqobatchi yo‘q!”',
          'To‘g‘ridan-to‘g‘ri raqobatchilarni ham, bilvosita muqobillarni ham (masalan, mijozning eski odati yoki Excel ishlatishini) tan olib, o‘zingizning 2–3 ta o‘lchanadigan ustunligingizni ko‘rsatish',
          'Raqobatchilar kuchli tomonini hurmat bilan tilga olib, o‘z tor segmentingizdagi tezlik va narx/sifat farqini asoslash',
        ],
        ru: [
          '«У нас уникальный продукт, аналогов и конкурентов нет вообще!»',
          'Назвать прямых и косвенных конкурентов (включая старые привычки клиента) и спокойно показать свои измеримые преимущества в выбранном сегменте',
          'Показать матрицу сравнения по 4 ключевым критериям ценности для клиента',
        ],
        en: [
          '"Our idea is completely unique — we have zero competitors anywhere!"',
          'Acknowledge both direct rivals and indirect status-quo workarounds honestly, then highlight your measurable 2–3x wedge advantage',
          'Present a clear competitive matrix anchored on customer decision criteria',
        ],
      },
      correctOptionIndex: 0,
      challengeExplanation: {
        uz: '“Raqobatchimiz yo‘q” deyish investorga ikki narsani anglatadi: yo siz bozorni umuman o‘rganmagansiz, yoki bu muammo hech kimni qiziqtirmagani uchun bozorning o‘zi yo‘q (42% inqiroz sababi!). Hatto yangi ixtiroda ham bilvosita raqobatchi — mijozning muammoni hozirgi eski usulda hal qilayotgan odatidir.',
        ru: 'Фраза «у нас нет конкурентов» сигнализирует инвестору либо о плохом знании рынка, либо об отсутствии платежеспособного спроса. Конкурентом всегда выступает хотя бы текущая привычка клиента решать проблему старым способом.',
        en: 'Claiming "zero competitors" tells experienced investors either you skipped market research or no market need exists. Even category creators compete against customers’ current manual workarounds.',
      },
    },
    keyTakeaways: {
      uz: [
        'Pitch Deck — hujjat emas, jonli hikoyadir: 10–12 slayd, kam matn, yirik raqamlar va ishonarli vizual dalillar.',
        'Investorlar chiroyli va’dalarga emas, Tractionga (allaqachon qilingan ilk sotuvlar, CustDev va o‘sish tezligiga) pul tikadilar.',
        '90 soniyalik Elevator Pitchingizni istalgan vaqtda uyg‘otib so‘rashsa ham adashmasdan aytib bera oladigan darajada mashq qiling.',
        'Savol-javobda raqobatchilarni yerga urmang va bilmagan raqamingizni to‘qimang — intellektual halollik uzoq muddatli hamkorlik kalitidir.',
        'Eng yaxshi biznes-reja va Pitch Deck ham birinchi amaliy qadamsiz qog‘ozligicha qoladi: bugunoq kichik MVP bilan tadbirkorlik yo‘lingizni boshlang!',
      ],
      ru: [
        'Сильный Pitch Deck строится вокруг доказанной боли клиента, работающего MVP, понятной юнит-экономики и сильной команды.',
        'Слайд Traction (первые продажи и реальные клиенты) убеждает сильнее любых трехлетних прогнозов.',
        'Держите наготове четкий 90-секундный Elevator Pitch для деловых встреч и нетворкинга.',
        'Запрашивая инвестиции, всегда показывайте точную смету использования средств и измеримый результат через 12 месяцев.',
        'Предпринимательство — это навык действия: начните с малого теста уже на этой неделе и последовательно применяйте инструменты всех 15 модулей!',
      ],
      en: [
        'A winning Pitch Deck pairs an urgent customer pain point with real MVP traction, sound unit economics, and a complementary team.',
        'Real customer revenue (Traction) outweighs ten pages of hypothetical spreadsheets.',
        'Rehearse your 90-second Elevator Pitch until it flows naturally in any networking encounter.',
        'Tie every UZS of your Investment Ask to specific Use-of-Funds buckets and 12-month revenue milestones.',
        'Entrepreneurship is a bias toward disciplined action — launch your lean MVP this week and put all 15 modules to work!',
      ],
    },
  },
];

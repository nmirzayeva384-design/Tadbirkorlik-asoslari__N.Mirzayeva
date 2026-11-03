import { GlossaryTerm } from '../types';
import { GLOSSARY_TERMS as BASE_TERMS } from './glossary';

const EXTRA_TERMS: GlossaryTerm[] = [
  {
    id: 'ebitda',
    term: { uz: 'EBITDA', ru: 'EBITDA', en: 'EBITDA' },
    category: 'finance',
    definition: {
      uz: 'Foizlar, soliqlar hamda eskirish (amortizatsiya) chegirilgunga qadar bo‘lgan operatsion foyda; kompaniyalarni solishtirishda keng qo‘llaniladi.',
      ru: 'Прибыль компании до вычета процентов по кредитам, налогов и амортизации основных средств.',
      en: 'Earnings Before Interest, Taxes, Depreciation, and Amortization — widely used proxy for core operating cash generation.',
    },
    relatedTopicId: 'm12',
  },
  {
    id: 'unit-economics',
    term: { uz: 'Yunit-iqtisodiyot (Unit Economics)', ru: 'Юнит-экономика', en: 'Unit Economics' },
    category: 'finance',
    definition: {
      uz: 'Biznesning bitta birlik (1 ta mijoz yoki 1 ta buyurtma) miqyosida foyda yoki zarar keltirishini hisoblash usuli.',
      ru: 'Метод экономического моделирования, определяющий прибыльность бизнеса в расчете на одну базовую единицу (одного клиента или один заказ).',
      en: 'Direct revenues and variable acquisition/fulfillment costs measured on a per-customer or per-order basis.',
    },
    relatedTopicId: 'm10',
  },
  {
    id: 'pivot',
    term: { uz: 'Pivot (Biznes yo‘nalishini burish)', ru: 'Пивот (смена модели)', en: 'Pivot' },
    category: 'strategy',
    definition: {
      uz: 'MVP sinovi natijasida dastlabki g‘oya ishlamasa, to‘plangan tajriba asosida mahsulot yoki mijoz segmentini tubdan o‘zgartirish.',
      ru: 'Обоснованное изменение бизнес-модели, продукта или целевого сегмента стартапа на основе обратной связи рынка.',
      en: 'A structured course correction designed to test a new fundamental hypothesis about the product, business model, or target segment.',
    },
    relatedTopicId: 'm2',
  },
  {
    id: 'angel-investor',
    term: { uz: 'Biznes-farishta (Angel Investor)', ru: 'Бизнес-ангел', en: 'Angel Investor' },
    category: 'finance',
    definition: {
      uz: 'Startapning eng ilk bosqichida o‘z shaxsiy mablag‘ini ulush (equity) evaziga kirituvchi va tajribasi bilan ko‘maklashuvchi xususiy sarmoyador.',
      ru: 'Частный инвестор, вкладывающий личные средства и экспертизу в стартапы на самых ранних стадиях в обмен на долю в компании.',
      en: 'An affluent individual who invests personal capital into early-stage startups in exchange for ownership equity and mentorship.',
    },
    relatedTopicId: 'm15',
  },
  {
    id: 'venture-capital',
    term: { uz: 'Venchur kapitali (VC)', ru: 'Венчурный капитал (VC)', en: 'Venture Capital (VC)' },
    category: 'finance',
    definition: {
      uz: 'Yuqori xavfga ega, ammo tez o‘sish salohiyati katta bo‘lgan texnologik startaplarga maxsus fondlar tomonidan kiritiladigan sarmoya.',
      ru: 'Долгосрочные высокорисковые инвестиции специализированных фондов в быстрорастущие технологические стартапы.',
      en: 'Institutional private equity financing provided by specialized funds to high-growth-potential startups.',
    },
    relatedTopicId: 'm15',
  },
  {
    id: 'markup-margin',
    term: { uz: 'Ustama (Markup) va Marja (Margin) farqi', ru: 'Наценка и Маржа', en: 'Markup vs. Margin' },
    category: 'finance',
    definition: {
      uz: 'Ustama — tannarxga nisbatan qo‘shilgan foiz; Marja esa foydaning yakuniy sotuv narxidagi ulushi (masalan, 100 so‘m olinsa va 150 so‘mga sotilsa: ustama 50%, marja 33.3%).',
      ru: 'Наценка считается от себестоимости, а маржа (рентабельность цены) — от конечной цены продажи.',
      en: 'Markup is profit expressed as a percentage of unit cost, whereas Gross Margin is profit expressed as a percentage of selling price.',
    },
    relatedTopicId: 'm10',
  },
  {
    id: 'mxik',
    term: { uz: 'MXIK (Mahsulot va xizmatlarning identifikatsiya kodi)', ru: 'ИКПУ (Код продукции и услуг)', en: 'MXIK / Product Tax Classification Code' },
    category: 'legal',
    definition: {
      uz: 'O‘zbekistonda elektron hisob-faktura (EHF) va onlayn-NKM cheklarida har bir tovar yoki xizmat uchun majburiy ko‘rsatiladigan yagona raqamli kod (tasnif.soliq.uz).',
      ru: 'Единый идентификационный код продукции и услуг в Узбекистане (tasnif.soliq.uz), обязательный для указания в ЭСФ и фискальных чеках.',
      en: 'Mandatory unified catalog code (tasnif.soliq.uz) required on every electronic invoice and fiscal receipt in Uzbekistan.',
    },
    relatedTopicId: 'm5',
  },
  {
    id: 'social-tax',
    term: { uz: 'Ijtimoiy soliq va JShDS', ru: 'Социальный налог и НДФЛ', en: 'Social Tax & Personal Income Tax' },
    category: 'legal',
    definition: {
      uz: 'Rasmiy ish haqi fondidan ish beruvchi to‘laydigan ijtimoiy soliq (bazaviy 12%) va xodim daromadidan ushlab qolinadigan JShDS (12%).',
      ru: 'Налоги с фонда оплаты труда в Узбекистане: социальный налог работодателя (базово 12%) и подоходный налог с работника (12%).',
      en: 'Payroll taxes in Uzbekistan comprising employer-paid Social Tax (standard 12%) and employee Personal Income Tax withholding (12%).',
    },
    relatedTopicId: 'm5',
  },
  {
    id: 'swot',
    term: { uz: 'SWOT-tahlil', ru: 'SWOT-анализ', en: 'SWOT Analysis' },
    category: 'strategy',
    definition: {
      uz: 'Loyihaning ichki kuchli (Strengths) va zaif (Weaknesses) tomonlarini hamda tashqi imkoniyatlar (Opportunities) va xavflarni (Threats) tizimli baholash usuli.',
      ru: 'Метод стратегического планирования, оценивающий сильные и слабые стороны проекта, а также рыночные возможности и угрозы.',
      en: 'Strategic planning matrix evaluating internal Strengths and Weaknesses alongside external market Opportunities and Threats.',
    },
    relatedTopicId: 'm13',
  },
  {
    id: 'b2g',
    term: { uz: 'B2G (Davlat xaridlari bilan ishlash)', ru: 'B2G (Госзакупки)', en: 'B2G (Business-to-Government)' },
    category: 'strategy',
    definition: {
      uz: 'Tadbirkorlik subyektining davlat tashkilotlari va byudjet muassasalariga elektron tender/auksion portallari (xarid.uzex.uz) orqali mahsulot sotishi.',
      ru: 'Поставка товаров и услуг государственным учреждениям через электронные порталы государственных закупок (xarid.uzex.uz).',
      en: 'Supplying goods or services to public-sector agencies via transparent e-procurement portals such as xarid.uzex.uz.',
    },
    relatedTopicId: 'm6',
  },
  {
    id: 'nps',
    term: { uz: 'NPS (Mijoz sodiqligi indeksi)', ru: 'NPS (Индекс лояльности клиентов)', en: 'NPS (Net Promoter Score)' },
    category: 'marketing',
    definition: {
      uz: 'Mijozlar kompaniyangizni do‘st va hamkasblariga tavsiya qilishga qanchalik tayyor ekanligini 0 dan 10 gacha shkalada o‘lchovchi ko‘rsatkich.',
      ru: 'Метрика готовности текущих клиентов рекомендовать ваш продукт знакомым и коллегам по шкале от 0 до 10.',
      en: 'Customer loyalty metric gauging willingness to recommend a brand to peers on a 0–10 scale (% Promoters minus % Detractors).',
    },
    relatedTopicId: 'm9',
  },
  {
    id: 'burn-rate',
    term: { uz: 'Burn Rate va Runway', ru: 'Burn Rate и Runway', en: 'Burn Rate & Cash Runway' },
    category: 'finance',
    definition: {
      uz: 'Burn Rate — startap har oyda sarflayotgan sof pul miqdori; Runway esa mavjud pul zaxirasi kompaniya o‘zini oqlaguncha necha oyga yetishini bildiradi.',
      ru: 'Burn Rate — скорость ежемесячного «сжигания» денег стартапом; Runway — количество месяцев работы до исчерпания кэша.',
      en: 'Burn Rate measures monthly net negative cash flow; Runway calculates how many months of cash reserves remain before insolvency.',
    },
    relatedTopicId: 'm11',
  },
  {
    id: 'co-founder-vesting',
    term: { uz: 'Ta’sischilar kelishuvi va Vesting', ru: 'Соглашение сооснователей и Вестинг', en: 'Founders’ Agreement & Vesting' },
    category: 'operations',
    definition: {
      uz: 'Hammuassislarning mas’uliyati hamda kompaniyadagi ulushlari bir zumda emas, balki 3–4 yil ishlash davomida bosqichma-bosqich biriktirilishi mexanizmi.',
      ru: 'Договоренность партнеров и механизм поэтапного закрепления долей в компании по мере реального вклада и времени работы (обычно 3–4 года).',
      en: 'Governance contract whereby co-founders earn ownership equity progressively over a multi-year cliff and vesting schedule.',
    },
    relatedTopicId: 'm14',
  },
  {
    id: 'marketplace',
    term: { uz: 'Marketpleys (Onlayn savdo platformasi)', ru: 'Маркетплейс', en: 'Online Marketplace' },
    category: 'marketing',
    definition: {
      uz: 'Minglab mustaqil sotuvchilar va millionlab xaridorlarni yagona raqamli vitrina hamda logistika tarmog‘ida birlashtiruvchi platforma (Uzum Market, Yandex Market).',
      ru: 'Цифровая платформа электронной коммерции, объединяющая множество независимых продавцов и покупателей с готовой логистикой и оплатой.',
      en: 'Multi-sided e-commerce platform connecting third-party merchants with buyers via integrated payment and fulfillment infrastructure.',
    },
    relatedTopicId: 'm8',
  },
];

export const ALL_GLOSSARY_TERMS: GlossaryTerm[] = [...BASE_TERMS, ...EXTRA_TERMS];

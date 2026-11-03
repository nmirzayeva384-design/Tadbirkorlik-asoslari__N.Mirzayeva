import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DiagramType, Language, LocalizedText } from '../types';
import { tText } from '../data/i18n';
import { ArrowRight, CheckCircle2, AlertTriangle, Info } from 'lucide-react';

interface TopicDiagramProps {
  type: DiagramType;
  title: LocalizedText;
  note: LocalizedText;
  lang: Language;
}

const tr = (uz: string, ru: string, en: string, lang: Language) =>
  lang === 'uz' ? uz : lang === 'ru' ? ru : en;

export const TopicDiagram: React.FC<TopicDiagramProps> = ({ type, title, note, lang }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const renderDiagramContent = () => {
    switch (type) {
      case 'value-chain': {
        const steps = [
          {
            step: '01',
            name: tr('Mijoz og‘rig‘i (Muammo)', 'Боль клиента (Проблема)', 'Customer Pain Point', lang),
            desc: tr(
              'Bozorda qondirilmagan aniq ehtiyoj, vaqt yo‘qotilishi yoki qimmat muqobil aniqlanadi.',
              'Выявляется неудовлетворенная потребность, потеря времени или дорогостоящая альтернатива.',
              'Identify an unmet need, wasted time, or costly inefficiency in everyday life or B2B workflows.',
              lang
            ),
          },
          {
            step: '02',
            name: tr('Resurslar va Inovatsiya', 'Ресурсы и Инновация', 'Resources & Innovation', lang),
            desc: tr(
              'Mehnat, texnologiya, xomashyo va nou-xau birlashtirilib yangi yechim yaratiladi.',
              'Объединяются труд, капитал, технологии и ноу-хау для создания нового решения.',
              'Combine talent, capital, raw inputs, and operational know-how into a better solution.',
              lang
            ),
          },
          {
            step: '03',
            name: tr('Qo‘shilgan qiymat (Mahsulot)', 'Добавленная стоимость', 'Value Added Output', lang),
            desc: tr(
              'Xomashyodan yuqori foydalilikka ega tayyor mahsulot yoki xizmat shakllanadi.',
              'Формируется готовый товар или услуга с ценностью выше суммы затраченных ресурсов.',
              'Deliver a finished product or service worth significantly more to buyers than input costs.',
              lang
            ),
          },
          {
            step: '04',
            name: tr('Ayirboshlash va Tushum', 'Рыночный обмен и Выручка', 'Market Exchange & Revenue', lang),
            desc: tr(
              'Mijoz ixtiyoriy ravishda pul to‘laydi — bozor g‘oyaning haqiqiyligini tasdiqlaydi.',
              'Покупатель добровольно голосует сумом — рынок подтверждает ценность продукта.',
              'Customers voluntarily pay in UZS, validating real economic demand.',
              lang
            ),
          },
          {
            step: '05',
            name: tr('Sof foyda va Reinvestitsiya', 'Чистая прибыль и Рост', 'Net Profit & Reinvestment', lang),
            desc: tr(
              'Soliqlar va xarajatlardan keyin qolgan foyda kengayish hamda yangi ish o‘rinlariga yo‘naltiriladi.',
              'Прибыль после уплаты налогов реинвестируется в масштабирование и рабочие места.',
              'Surplus after costs and taxes fuels business expansion, jobs, and founder returns.',
              lang
            ),
          },
        ];

        return (
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {steps.map((item, idx) => {
                const isSelected = activeIndex === idx;
                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-800/70 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                    }`}
                  >
                    <div className={`text-xs font-mono mb-1.5 ${isSelected ? 'text-indigo-200' : 'text-slate-500 dark:text-slate-400'}`}>
                      {item.step}
                    </div>
                    <div className="font-semibold text-sm leading-snug">{item.name}</div>
                  </button>
                );
              })}
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 flex items-start gap-3">
              <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-1">
                  {steps[activeIndex]?.step}. {steps[activeIndex]?.name}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">{steps[activeIndex]?.desc}</p>
              </div>
            </div>
          </div>
        );
      }

      case 'mvp-cycle': {
        const phases = [
          {
            code: '01 · HYPOTHESIS & BUILD',
            title: tr('Yaratish (Minimal MVP)', 'Создать (Минимальный MVP)', 'Build (Minimum Viable Product)', lang),
            detail: tr(
              '6 oy kod yozish o‘rniga 7–14 kunda asosiy muammoni yechuvchi eng sodda prototip (Telegram-bot, landing, test partiya) tayyorlanadi.',
              'Вместо долгих разработок за 7–14 дней собирается базовый прототип (лендинг, бот, пробная партия) с одной главной функцией.',
              'Build only the core value-delivering prototype in 7–14 days instead of spending months on unvalidated features.',
              lang
            ),
          },
          {
            code: '02 · MEASURE METRICS',
            title: tr('O‘lchash (Real mijoz va to‘lov)', 'Измерить (Реальные метрики)', 'Measure (Real Buyer Behavior)', lang),
            detail: tr(
              'Maqtovlar emas, balki konversiya, birinchi real xarid cheki, CAC va qayta xarid ko‘rsatkichlari raqamlarda o‘lchanadi.',
              'Измеряются не комплименты знакомых, а конверсия в заявку, реальные предоплаты и удержание.',
              'Measure actual conversion rates, paid pre-orders, and retention rather than polite verbal compliments.',
              lang
            ),
          },
          {
            code: '03 · LEARN: PERSEVERE OR PIVOT',
            title: tr('O‘rganish (Davom etish yoki Pivot)', 'Выводы (Масштабировать или Пивот)', 'Learn (Persevere or Pivot)', lang),
            detail: tr(
              'Gipoteza tasdiqlansa — tizim kuchaytiriladi; tasdiqlanmasa — katta pul yo‘qotmasdan model yoki auditoriya o‘zgartiriladi (Pivot).',
              'Если гипотеза подтвердилась — усиливаем продукт; если нет — делаем пивот (меняем сегмент или механику) с минимальными потерями.',
              'If unit demand holds, double down; if invalidated, pivot segment or channel before burning capital.',
              lang
            ),
          },
        ];
        const safeIdx = activeIndex % phases.length;
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <svg viewBox="0 0 260 240" className="w-full max-w-[260px]" role="img" aria-label="Lean Startup Build Measure Learn Loop">
                <circle cx="130" cy="120" r="82" fill="none" stroke="currentColor" className="text-slate-200 dark:text-slate-700" strokeWidth="10" strokeDasharray="6 6" />
                {[
                  { cx: 130, cy: 38, label: 'BUILD', idx: 0, color: '#4f46e5' },
                  { cx: 204, cy: 164, label: 'MEASURE', idx: 1, color: '#059669' },
                  { cx: 56, cy: 164, label: 'LEARN', idx: 2, color: '#d97706' },
                ].map((node) => (
                  <g
                    key={node.label}
                    onClick={() => setActiveIndex(node.idx)}
                    className="cursor-pointer"
                  >
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r={safeIdx === node.idx ? 34 : 29}
                      fill={node.color}
                      opacity={safeIdx === node.idx ? 1 : 0.78}
                    />
                    <text
                      x={node.cx}
                      y={node.cy + 4}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="10"
                      fontWeight="700"
                    >
                      {node.label}
                    </text>
                  </g>
                ))}
                <text x="130" y="118" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200" fontSize="12" fontWeight="700">
                  LEAN MVP
                </text>
                <text x="130" y="134" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400" fontSize="10">
                  CustDev Sikli
                </text>
              </svg>
            </div>
            <div className="lg:col-span-7 space-y-3">
              {phases.map((p, idx) => (
                <button
                  key={p.code}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    safeIdx === idx
                      ? 'bg-white dark:bg-slate-800 border-indigo-500 shadow-sm'
                      : 'bg-slate-50/70 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-1">{p.code}</div>
                  <div className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-1">{p.title}</div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{p.detail}</p>
                </button>
              ))}
            </div>
          </div>
        );
      }

      case 'credit-comparison': {
        const sources = [
          {
            title: tr('Shaxsiy jamg‘arma (Bootstrapping)', 'Собственные средства (Bootstrapping)', 'Bootstrapping & Reinvestment', lang),
            cost: tr('Foiz xarajati: 0%', 'Процентная ставка: 0%', 'Interest Cost: 0%', lang),
            equity: tr('Ulush yo‘qotilmaydi (100% nazorat)', '100% контроль остается у основателя', '100% Ownership Retained', lang),
            bestFor: tr('Ilk MVP sinovi va kichik xizmat biznesi', 'Тест MVP и малый сервисный бизнес', 'Early MVP validation & lean service startups', lang),
          },
          {
            title: tr('Bank krediti va Lizing', 'Банковский кредит и Лизинг', 'Commercial Loan & Leasing', lang),
            cost: tr('UZS stavka: ~18–25% yillik + Garov (125%)', 'Ставка UZS: ~18–25% годовых + Залог', 'UZS Rate: ~18–25% p.a. + Collateral', lang),
            equity: tr('Kompaniya ulushi berilmaydi, qat’iy grafik', 'Доля не отдается, строгий график выплат', 'Zero equity dilution; strict monthly schedule', lang),
            bestFor: tr('Tushumi barqaror savdo va ishlab chiqarish uskunasi', 'Действующий бизнес с понятным Cash Flow', 'Established cash-flowing SMEs & machinery', lang),
          },
          {
            title: tr('Davlat grantlari va Subsidiyalar', 'Государственные гранты и Субсидии', 'State Grants & Guarantees', lang),
            cost: tr('Qaytarilmaydigan / imtiyozli maqsadli mablag‘', 'Целевое безвозмездное / льготное финансирование', 'Non-dilutive / preferential targeted support', lang),
            equity: tr('Ulush olinmaydi, ammo maqsadli hisobot shart', 'Доля сохраняется, строгий целевой отчет', 'Zero dilution; strict milestone auditing', lang),
            bestFor: tr('Yoshlar, xotin-qizlar, ilmiy va eksport loyihalari', 'Инновационные, молодежные и экспортные проекты', 'R&D, youth/women initiatives & export SMEs', lang),
          },
          {
            title: tr('Biznes-farishta va Venchur kapital', 'Бизнес-ангелы и Венчурные фонды', 'Angel & Venture Capital (Equity)', lang),
            cost: tr('Garov va oylik kredit foizi yo‘q', 'Нет залога и ежемесячных процентов', 'No collateral or monthly interest payments', lang),
            equity: tr('10–25% ulush (Equity) va ustav kelishuvi', 'Передача 10–25% доли (Equity) инвестору', '10–25% equity stake + smart mentorship', lang),
            bestFor: tr('Tez masshtablashuvchi IT va texnologik startaplar', 'Быстрорастущие IT и технологические стартапы', 'High-growth scalable tech startups', lang),
          },
        ];
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sources.map((s) => (
              <div key={s.title} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
                <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{s.title}</div>
                <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  <div>• {s.cost}</div>
                  <div>• {s.equity}</div>
                  <div className="text-indigo-700 dark:text-indigo-300 font-medium pt-1">{s.bestFor}</div>
                </div>
              </div>
            ))}
          </div>
        );
      }

      case 'legal-forms': {
        const forms = [
          {
            code: '01 · Self-Employed',
            name: tr('O‘zini o‘zi band qilgan shaxs', 'Самозанятое лицо', 'Self-Employed Individual', lang),
            staff: tr('Yollanma xodimsiz (0 nafar)', 'Без наемных работников (0 чел.)', '0 hired employees', lang),
            liability: tr('Jismoniy shaxs mulki doirasida', 'Личная имущественная ответственность', 'Personal liability', lang),
            ideal: tr('Frilanser, repetitor, kuryer, hunarmand (ruxsat etilgan ro‘yxat)', 'Фриланс, репетиторство, бытовые услуги из перечня', 'Freelancers, tutors, couriers on statutory list', lang),
          },
          {
            code: '02 · Sole Proprietor (YaTT)',
            name: tr('Yakka tartibdagi tadbirkor (YaTT)', 'Индивидуальный предприниматель (ИП)', 'Sole Proprietor (YaTT / IE)', lang),
            staff: tr('5 nafargacha xodim yollash huquqi', 'До 5 наемных работников', 'Up to 5 hired employees', lang),
            liability: tr('To‘liq shaxsiy mulkiy javobgarlik', 'Полная ответственность всем имуществом', 'Unlimited personal liability', lang),
            ideal: tr('Chakana savdo do‘koni, kichik xizmat shoxobchasi', 'Розничная точка, небольшое ателье или кафе', 'Small retail shop, neighborhood service outlet', lang),
          },
          {
            code: '03 · Limited Liability Co. (MChJ)',
            name: tr('Mas’uliyati cheklangan jamiyat (MChJ)', 'Общество с ограниченной ответственностью (ООО)', 'Limited Liability Company (MChJ / LLC)', lang),
            staff: tr('Cheklanmagan xodimlar va hammuassislar (1–50)', 'Без лимита штата, от 1 до 50 учредителей', 'Unlimited staff; 1–50 equity shareholders', lang),
            liability: tr('Ustav fondidagi ulush doirasida cheklangan!', 'Ограничена вкладом в уставный капитал!', 'Limited strictly to contributed charter capital!', lang),
            ideal: tr('Ishlab chiqarish, B2B savdo, IT startap va investitsiya jalb etish', 'Производство, опт B2B, IT-стартапы, привлечение инвесторов', 'Manufacturing, B2B trade, startups raising equity', lang),
          },
        ];
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {forms.map((f) => (
              <div key={f.code} className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-1">{f.code}</div>
                  <h4 className="font-semibold text-base text-slate-900 dark:text-slate-100 mb-3">{f.name}</h4>
                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{tr('Xodimlar:', 'Штат:', 'Staff:', lang)}</span> {f.staff}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{tr('Javobgarlik:', 'Ответственность:', 'Liability:', lang)}</span> {f.liability}
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-200 dark:border-slate-700 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                  {f.ideal}
                </div>
              </div>
            ))}
          </div>
        );
      }

      case 'tax-regimes': {
        return (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 text-center">
              <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-1">
                {tr('YILLIK JAMI DAROMAD CHEGARASI (SOLIQ KODEKSI)', 'ПОРОГ СОВОКУПНОГО ГОДОВОГО ДОХОДА (НК РУз)', 'ANNUAL GROSS REVENUE THRESHOLD (TAX CODE)', lang)}
              </div>
              <div className="text-lg font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                1 000 000 000 {tr('so‘m (1 mlrd so‘m)', 'сум (1 млрд сум)', 'UZS (1 Billion UZS)', lang)}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
                <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                  {tr('≤ 1 MLRD SO‘MGACHA (VA IMPORTSIZ)', 'ДО 1 МЛРД СУМ (БЕЗ ИМПОРТА)', '≤ 1 BILLION UZS (NO DIRECT IMPORT)', lang)}
                </div>
                <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
                  {tr('Aylanmadan olinadigan soliq rejimi', 'Налог с оборота (упрощенный режим)', 'Turnover Tax Regime (Simplified)', lang)}
                </h4>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5">
                  <li>• {tr('Bazaviy stavka: yalpi tushumdan 4% (ayrim sohalarda 1–2%)', 'Базовая ставка: 4% с выручки (льготные 1–2%)', 'Base rate: 4% of gross revenue (1–2% in preferential categories)', lang)}</li>
                  <li>• {tr('QQS (12%) va Foyda solig‘i (15%) o‘rniga bitta sodda soliq', 'Заменяет НДС (12%) и налог на прибыль (15%)', 'Replaces both VAT (12%) and Corporate Income Tax (15%)', lang)}</li>
                  <li>• {tr('B2C chakana va yuqori marjali xizmatlar uchun qulay', 'Удобно для B2C услуг и высокой маржинальности', 'Ideal for high-margin B2C retail and local services', lang)}</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
                <div className="text-xs font-mono text-amber-600 dark:text-amber-400">
                  {tr('> 1 MLRD SO‘MDAN YUQORI (YOKI IMPORT / IXTIYORIY)', 'СВЫШЕ 1 МЛРД СУМ (ИЛИ ИМПОРТ / ДОБРОВОЛЬНО)', '> 1 BILLION UZS (OR IMPORT / VOLUNTARY)', lang)}
                </div>
                <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
                  {tr('Umumbelgilangan soliq rejimi (QQS + Foyda)', 'Общеустановленный режим (НДС + Прибыль)', 'General Tax Regime (VAT + CIT)', lang)}
                </h4>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5">
                  <li>• {tr('QQS: qo‘shilgan qiymatdan 12% (eksport uchun 0% stavka!)', 'НДС: 12% с зачетом входящего НДС (экспорт — 0%!)', 'VAT: 12% with input VAT credit (0% zero-rating on exports!)', lang)}</li>
                  <li>• {tr('Foyda solig‘i: hujjatlangan xarajatlardan keyingi sof foydadan 15%', 'Налог на прибыль: 15% с разницы доходов и расходов', 'Corporate Income Tax: 15% on net taxable profit (IT Park: 0%)', lang)}</li>
                  <li>• {tr('Yirik B2B zanjirlari va past marjali ulgurji savdo uchun zarur', 'Необходим для работы с крупными B2B клиентами с НДС', 'Essential for B2B supply chains and low-margin wholesale', lang)}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      }

      case 'bmc-canvas': {
        const blocks = [
          {
            id: 'kp',
            title: tr('8. Asosiy hamkorlar', '8. Ключевые партнеры', '8. Key Partners', lang),
            ex: tr('Xomashyo zavodlari, Payme/Click, kuryerlik xizmatlari, Uzum logistika.', 'Поставщики сырья, платежные шлюзы Payme/Click, логистика.', 'Raw material suppliers, Payme/Click gateways, logistics partners.', lang),
          },
          {
            id: 'ka',
            title: tr('7. Asosiy jarayonlar', '7. Ключевые процессы', '7. Key Activities', lang),
            ex: tr('Ishlab chiqarish, sifat nazorati, dasturlash, marketing va mijoz xizmati.', 'Производство, разработка ПО, контроль качества, маркетинг.', 'Production, R&D coding, quality assurance, performance marketing.', lang),
          },
          {
            id: 'kr',
            title: tr('6. Asosiy resurslar', '6. Ключевые ресурсы', '6. Key Resources', lang),
            ex: tr('Dastgohlar, IT platforma, patent/brend, malakali jamoa, aylanma mablag‘.', 'Оборудование, IT-платформа, бренд, команда, оборотный капитал.', 'Machinery, proprietary code, brand IP, skilled staff, working capital.', lang),
          },
          {
            id: 'vp',
            title: tr('2. Qiymat taklifi (Markaz)', '2. Ценностное предложение', '2. Value Proposition', lang),
            ex: tr('Mijozga aniq qanday og‘riqni hal qilamiz? Tezlik, kafolat, qulay narx yoki moslashuvchanlik.', 'Какую боль решаем? Экономия времени, гарантия качества, удобство.', 'Why customers choose us: speed, local warranty, cost savings, UX.', lang),
          },
          {
            id: 'cr',
            title: tr('4. Mijoz munosabatlari', '4. Отношения с клиентами', '4. Customer Relationships', lang),
            ex: tr('Shaxsiy menejer, CRM eslatmalar, bonus/keshbek dasturi, o‘z-o‘ziga xizmat.', 'Персональный менеджер, программа лояльности, автосервис.', 'Dedicated account manager, loyalty cashback, automated self-service.', lang),
          },
          {
            id: 'ch',
            title: tr('3. Sotuv kanallari', '3. Каналы сбыта', '3. Channels', lang),
            ex: tr('Telegram-bot, Instagram, Uzum Market, shaxsiy do‘kon, B2B savdo bo‘limi.', 'Telegram-бот, Uzum Market, розничные точки, прямые B2B продажи.', 'Telegram bot, Uzum Market, flagship store, B2B direct sales.', lang),
          },
          {
            id: 'cs',
            title: tr('1. Mijoz segmentlari', '1. Сегменты клиентов', '1. Customer Segments', lang),
            ex: tr('Kim uchun qiymat yaratamiz? Aniq B2C oilalar yoki B2B kichik do‘konlar segmenti.', 'Для кого создаем продукт? Точный портрет целевого сегмента B2C/B2B.', 'Specific target buyer personas or B2B industry verticals.', lang),
          },
          {
            id: 'cost',
            title: tr('9. Xarajatlar tarkibi', '9. Структура издержек', '9. Cost Structure', lang),
            ex: tr('Doimiy xarajatlar (ijara, oklad) va o‘zgaruvchan tannarx (xomashyo, komissiya).', 'Постоянные (аренда, оклады) и переменные (сырье, логистика) затраты.', 'Fixed overhead (rent, base payroll) + variable COGS & commissions.', lang),
          },
          {
            id: 'rev',
            title: tr('5. Daromad oqimlari', '5. Потоки выручки', '5. Revenue Streams', lang),
            ex: tr('Bir martalik savdo, oylik SaaS obuna, tranzaksiya komissiyasi, servis haqi.', 'Разовые продажи, ежемесячная подписка, комиссия со сделок.', 'Direct unit sales, recurring SaaS subscriptions, marketplace take-rate.', lang),
          },
        ];
        const safeIdx = activeIndex % blocks.length;
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
              {/* Column 1: KP */}
              <button
                type="button"
                onClick={() => setActiveIndex(0)}
                className={`lg:row-span-2 text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  safeIdx === 0 ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                }`}
              >
                <div className="font-semibold text-xs mb-1.5">{blocks[0].title}</div>
                <p className={`text-xs leading-relaxed ${safeIdx === 0 ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-300'}`}>{blocks[0].ex}</p>
              </button>

              {/* Column 2: KA + KR */}
              <button
                type="button"
                onClick={() => setActiveIndex(1)}
                className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  safeIdx === 1 ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                }`}
              >
                <div className="font-semibold text-xs mb-1">{blocks[1].title}</div>
                <p className={`text-xs leading-relaxed ${safeIdx === 1 ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-300'}`}>{blocks[1].ex}</p>
              </button>

              {/* Column 3: VP */}
              <button
                type="button"
                onClick={() => setActiveIndex(3)}
                className={`lg:row-span-2 text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  safeIdx === 3 ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 hover:border-emerald-500'
                }`}
              >
                <div className="font-semibold text-xs mb-1.5">{blocks[3].title}</div>
                <p className={`text-xs leading-relaxed ${safeIdx === 3 ? 'text-emerald-50' : 'text-slate-700 dark:text-slate-200'}`}>{blocks[3].ex}</p>
              </button>

              {/* Column 4: CR + CH */}
              <button
                type="button"
                onClick={() => setActiveIndex(4)}
                className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  safeIdx === 4 ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                }`}
              >
                <div className="font-semibold text-xs mb-1">{blocks[4].title}</div>
                <p className={`text-xs leading-relaxed ${safeIdx === 4 ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-300'}`}>{blocks[4].ex}</p>
              </button>

              {/* Column 5: CS */}
              <button
                type="button"
                onClick={() => setActiveIndex(6)}
                className={`lg:row-span-2 text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  safeIdx === 6 ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                }`}
              >
                <div className="font-semibold text-xs mb-1.5">{blocks[6].title}</div>
                <p className={`text-xs leading-relaxed ${safeIdx === 6 ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-300'}`}>{blocks[6].ex}</p>
              </button>

              {/* Row 2 of Col 2 & Col 4 */}
              <button
                type="button"
                onClick={() => setActiveIndex(2)}
                className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  safeIdx === 2 ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                }`}
              >
                <div className="font-semibold text-xs mb-1">{blocks[2].title}</div>
                <p className={`text-xs leading-relaxed ${safeIdx === 2 ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-300'}`}>{blocks[2].ex}</p>
              </button>

              <button
                type="button"
                onClick={() => setActiveIndex(5)}
                className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  safeIdx === 5 ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                }`}
              >
                <div className="font-semibold text-xs mb-1">{blocks[5].title}</div>
                <p className={`text-xs leading-relaxed ${safeIdx === 5 ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-300'}`}>{blocks[5].ex}</p>
              </button>
            </div>

            {/* Bottom Finance Row: Cost + Revenue */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setActiveIndex(7)}
                className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  safeIdx === 7 ? 'bg-amber-600 text-white border-amber-600' : 'bg-slate-50 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 hover:border-amber-400'
                }`}
              >
                <div className="font-semibold text-xs mb-1">{blocks[7].title}</div>
                <p className={`text-xs leading-relaxed ${safeIdx === 7 ? 'text-amber-50' : 'text-slate-600 dark:text-slate-300'}`}>{blocks[7].ex}</p>
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex(8)}
                className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  safeIdx === 8 ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-50 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
                }`}
              >
                <div className="font-semibold text-xs mb-1">{blocks[8].title}</div>
                <p className={`text-xs leading-relaxed ${safeIdx === 8 ? 'text-emerald-50' : 'text-slate-600 dark:text-slate-300'}`}>{blocks[8].ex}</p>
              </button>
            </div>
          </div>
        );
      }

      case 'tam-sam-som': {
        const rings = [
          {
            key: 'TAM',
            label: tr('TAM — Umumiy mavjud bozor', 'TAM — Общий объем рынка', 'TAM — Total Addressable Market', lang),
            desc: tr(
              'Mamlakat yoki mintaqadagi ushbu toifadagi barcha potensial xaridorlarning yillik puldagi umumiy talabi (masalan, O‘zbekistondagi barcha til o‘rganuvchilar bozori: 1,8 trln so‘m).',
              'Совокупный годовой спрос всех потенциальных потребителей данной категории в стране (например, весь рынок изучения языков в РУз).',
              'Total annual monetary demand across every potential buyer in the broad category nationwide.',
              lang
            ),
          },
          {
            key: 'SAM',
            label: tr('SAM — Xizmat ko‘rsatish mumkin bo‘lgan bozor', 'SAM — Доступный объем рынка', 'SAM — Serviceable Available Market', lang),
            desc: tr(
              'Sizning biznes-modelingiz, narx segmentingiz va geografik qamrovingiz (masalan, Toshkent shahridagi onlayn/kechki IELTS segmenti: 240 mlrd so‘m) yetib bora oladigan qism.',
              'Часть рынка, доступная именно вашей бизнес-модели, ценовому сегменту и географии присутствия.',
              'The slice of TAM reachable through your specific product format, pricing tier, and geographic footprint.',
              lang
            ),
          },
          {
            key: 'SOM',
            label: tr('SOM — Haqiqatda egallanadigan bozor ulushi', 'SOM — Реально достижимый рынок', 'SOM — Serviceable Obtainable Market', lang),
            desc: tr(
              'Mavjud jamoangiz, reklama byudjetingiz va xizmat quvvatingiz bilan yaqin 1–2 yilda real qo‘lga kiritadigan ulushingiz (masalan, 3,6 mlrd so‘m). Biznes-reja aynan SOM ustiga quriladi!',
              'Реальная доля SAM, которую ваша компания способна занять за 1–2 года с учетом конкуренции и ваших мощностей. Именно SOM закладывается в план продаж!',
              'Realistic 1–2 year revenue capture constrained by your actual budget, sales capacity, and competition.',
              lang
            ),
          },
        ];
        const safeIdx = activeIndex % 3;
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <svg viewBox="0 0 240 240" className="w-full max-w-[230px]" role="img" aria-label="TAM SAM SOM Concentric Market Circles">
                <circle
                  cx="120"
                  cy="120"
                  r="105"
                  onClick={() => setActiveIndex(0)}
                  className="cursor-pointer transition-opacity"
                  fill={safeIdx === 0 ? '#4f46e5' : '#e0e7ff'}
                  opacity={safeIdx === 0 ? 0.92 : 0.65}
                />
                <circle
                  cx="120"
                  cy="142"
                  r="72"
                  onClick={() => setActiveIndex(1)}
                  className="cursor-pointer transition-opacity"
                  fill={safeIdx === 1 ? '#0284c7' : '#bae6fd'}
                  opacity={safeIdx === 1 ? 0.95 : 0.8}
                />
                <circle
                  cx="120"
                  cy="165"
                  r="38"
                  onClick={() => setActiveIndex(2)}
                  className="cursor-pointer transition-opacity"
                  fill="#059669"
                />
                <text x="120" y="42" textAnchor="middle" fontSize="13" fontWeight="700" fill={safeIdx === 0 ? '#ffffff' : '#312e81'}>
                  TAM
                </text>
                <text x="120" y="96" textAnchor="middle" fontSize="13" fontWeight="700" fill={safeIdx === 1 ? '#ffffff' : '#0c4a6e'}>
                  SAM
                </text>
                <text x="120" y="169" textAnchor="middle" fontSize="13" fontWeight="700" fill="#ffffff">
                  SOM
                </text>
              </svg>
            </div>
            <div className="lg:col-span-7 space-y-3">
              {rings.map((r, i) => (
                <button
                  key={r.key}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    safeIdx === i
                      ? 'bg-white dark:bg-slate-800 border-indigo-500 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-1">{r.label}</div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{r.desc}</p>
                </button>
              ))}
            </div>
          </div>
        );
      }

      case 'marketing-4p': {
        const pillars = [
          {
            p: 'Product',
            title: tr('1. Product (Mahsulot va sifat)', '1. Product (Продукт и упаковка)', '1. Product (Core Offer & UX)', lang),
            desc: tr('Assortiment, sifat standarti, qadoqlash dizayni, o‘zbek/rus tilidagi tushunarli yo‘riqnoma, servis va kafolat.', 'Ассортимент, качество, удобная упаковка, сертификация, гарантийный сервис.', 'Features, quality consistency, localized packaging, warranty, and brand identity.', lang),
          },
          {
            p: 'Price',
            title: tr('2. Price (Narx va to‘lov shartlari)', '2. Price (Цена и условия оплаты)', '2. Price (Pricing & Payment Terms)', lang),
            desc: tr('Asosiy narx, chegirmalar tizimi, ulgurji tariflar hamda muddatli to‘lov (Uzum Nasiya, Alif, Payme) qulayligi.', 'Прайс-лист, оптовые скидки, бонусы и подключение рассрочки (BNPL).', 'List price, volume tiers, loyalty cashback, and BNPL installment integration.', lang),
          },
          {
            p: 'Place',
            title: tr('3. Place (Joylashuv va distributsiya)', '3. Place (Каналы и дистрибуция)', '3. Place (Distribution & Access)', lang),
            desc: tr('Mijozga yetkazish nuqtalari: gavjum lokatsiya, marketpleyslar (Uzum Market), Telegram-bot va tez yetkazib berish.', 'Точки продаж, полка супермаркета, маркетплейсы, Telegram-магазин и доставка.', 'Retail footfall location, Uzum Market presence, Telegram store, and last-mile delivery.', lang),
          },
          {
            p: 'Promotion',
            title: tr('4. Promotion (Ilgari surish va reklama)', '4. Promotion (Продвижение)', '4. Promotion (Acquisition & PR)', lang),
            desc: tr('Instagram/Telegram target, SEO/Google qidiruv, blogerlar (influencer) integratsiyasi, tavsiya dasturlari (ROMI nazorati bilan).', 'Таргет в Instagram/Telegram, контент-маркетинг, лидеры мнений, реферальные акции.', 'Targeted social ads, search marketing, creator partnerships, and referral loops tracked by ROMI.', lang),
          },
        ];
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((item) => (
              <div key={item.p} className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-1">4P MARKETING MIX</div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        );
      }

      case 'sales-funnel': {
        const stages = [
          { label: tr('1. Reklama qamrovi (Impressions / Clicks)', '1. Охват и переходы на сайт/бот', '1. Traffic & Ad Clicks', lang), count: '10 000', rate: '100%', widthPct: '100%' },
          { label: tr('2. Murojaat / Lidlar (CRM ga tushgan arizalar)', '2. Заявки / Лиды в CRM', '2. Captured Leads in CRM', lang), count: '800', rate: 'CR1: 8%', widthPct: '78%' },
          { label: tr('3. Malakalangan muloqot va Tijorat taklifi', '3. Квалификация и КП / Встреча', '3. Qualified & Proposal Sent', lang), count: '320', rate: 'CR2: 40%', widthPct: '56%' },
          { label: tr('4. Muvaffaqiyatli xarid (To‘lov qilgan mijozlar)', '4. Оплата (Закрытые сделки)', '4. Closed-Won Paying Buyers', lang), count: '96', rate: 'CR3: 30%', widthPct: '38%' },
          { label: tr('5. Qayta xarid va Sodiq mijozlar (LTV)', '5. Повторные покупки (Retention)', '5. Repeat Buyers & Advocates', lang), count: '48', rate: 'Ret: 50%', widthPct: '26%' },
        ];
        return (
          <div className="space-y-2.5 max-w-2xl mx-auto">
            {stages.map((st, idx) => (
              <div key={st.label} className="flex flex-col items-center">
                <div
                  style={{ width: st.widthPct }}
                  className={`min-w-[230px] px-4 py-3 rounded-xl flex items-center justify-between gap-3 text-white shadow-xs transition-all ${
                    idx === 3 ? 'bg-emerald-600' : idx === 4 ? 'bg-amber-600' : 'bg-indigo-600'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-medium truncate">{st.label}</span>
                  <span className="text-xs font-mono shrink-0 tabular-nums">
                    {st.count} · {st.rate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        );
      }

      case 'cost-structure': {
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
              <svg viewBox="0 0 380 220" className="w-full" role="img" aria-label="Break-Even Point Chart">
                {/* Axes */}
                <line x1="40" y1="190" x2="355" y2="190" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="40" y1="20" x2="40" y2="190" stroke="#94a3b8" strokeWidth="1.5" />
                {/* Fixed Cost horizontal line */}
                <line x1="40" y1="135" x2="345" y2="135" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 4" />
                {/* Total Cost line: starts at FC (40,135) to (345,55) */}
                <line x1="40" y1="135" x2="345" y2="55" stroke="#ef4444" strokeWidth="2.5" />
                {/* Total Revenue line: starts at (40,190) to (345,25) */}
                <line x1="40" y1="190" x2="345" y2="25" stroke="#10b981" strokeWidth="2.5" />
                {/* Intersection BEP at x=198, y=94 */}
                <circle cx="198" cy="94" r="6" fill="#4f46e5" stroke="#ffffff" strokeWidth="2" />
                <line x1="198" y1="94" x2="198" y2="190" stroke="#4f46e5" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="198" y="82" textAnchor="middle" fontSize="11" fontWeight="700" className="fill-indigo-600 dark:fill-indigo-400">
                  BEP (Foyda = 0)
                </text>
                <text x="342" y="21" textAnchor="end" fontSize="10" fontWeight="600" fill="#10b981">
                  TR (Tushum)
                </text>
                <text x="342" y="51" textAnchor="end" fontSize="10" fontWeight="600" fill="#ef4444">
                  TC (FC + VC)
                </text>
                <text x="342" y="130" textAnchor="end" fontSize="10" fontWeight="600" fill="#f59e0b">
                  FC (Doimiy)
                </text>
                <text x="115" y="165" fontSize="10" fill="#ef4444">
                  {tr('Zarar zonasi', 'Зона убытка', 'Loss Zone', lang)}
                </text>
                <text x="265" y="75" fontSize="10" fill="#10b981">
                  {tr('Sof foyda', 'Зона прибыли', 'Profit Zone', lang)}
                </text>
              </svg>
            </div>
            <div className="lg:col-span-5 space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div className="font-mono font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                  BEP (dona) = FC / (P − VC)
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  {tr(
                    'Har bir sotilgan birlikdan qoladigan marjinal foyda (P − VC) avval oylik doimiy xarajatlarni (FC) qoplaydi; BEP nuqtasidan keyingi har bir sotuv sof foydani shakllantiradi.',
                    'Маржинальная прибыль с единицы (P − VC) сначала покрывает постоянные издержки (FC), а после точки BEP работает на чистую прибыль.',
                    'Unit contribution margin (P − VC) first pays down monthly Fixed Costs (FC); every unit sold past BEP generates operating profit.',
                    lang
                  )}
                </p>
              </div>
            </div>
          </div>
        );
      }

      case 'cashflow-cycle': {
        const flows = [
          {
            code: 'OCF · OPERATING',
            title: tr('1. Operatsion pul oqimi', '1. Операционный поток (OCF)', '1. Operating Cash Flow (OCF)', lang),
            inflow: tr('+ Mijozlardan naqd, terminal, Payme/Click va EHF tushumlari', '+ Поступления оплаты от покупателей', '+ Customer cash, card & invoice collections', lang),
            outflow: tr('− Xomashyo, ijara, ish haqi, kommunal va joriy soliqlar', '− Оплата сырья, аренды, зарплат и налогов', '− Supplier bills, rent, payroll, utilities & taxes', lang),
          },
          {
            code: 'ICF · INVESTING',
            title: tr('2. Investitsion pul oqimi', '2. Инвестиционный поток (ICF)', '2. Investing Cash Flow (ICF)', lang),
            inflow: tr('+ Eski uskuna/aktivni sotishdan tushum yoki depozit foizi', '+ Продажа старых активов, проценты по вкладу', '+ Asset disposal proceeds or deposit interest', lang),
            outflow: tr('− Yangi dastgoh, bino ta’miri, transport va IT litsenziya (CAPEX)', '− Покупка станков, авто, ремонт цеха (CAPEX)', '− Machinery, renovation, vehicles & CAPEX outlays', lang),
          },
          {
            code: 'FCF · FINANCING',
            title: tr('3. Moliyaviy pul oqimi', '3. Финансовый поток (FCF)', '3. Financing Cash Flow (FCF)', lang),
            inflow: tr('+ Ustav sarmoyasi kiritish, bank krediti yoki investitsiya olish', '+ Вклад учредителей, получение кредита', '+ Founder equity injection or loan disbursement', lang),
            outflow: tr('− Kredit asosiy qarzi/foizini so‘ndirish va dividend to‘lash', '− Погашение тела кредита и выплата дивидендов', '− Loan principal repayment & shareholder dividends', lang),
          },
        ];
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {flows.map((f) => (
              <div key={f.code} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
                <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400">{f.code}</div>
                <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">{f.title}</h4>
                <div className="text-xs text-emerald-700 dark:text-emerald-400">{f.inflow}</div>
                <div className="text-xs text-rose-700 dark:text-rose-400">{f.outflow}</div>
              </div>
            ))}
          </div>
        );
      }

      case 'profit-waterfall': {
        const rows = [
          { name: tr('Sof Tushum (Revenue, QQSsiz)', 'Чистая выручка (без НДС)', 'Net Revenue (excl. VAT)', lang), val: '200.0 mln', pct: '100%', tone: 'bg-indigo-600' },
          { name: tr('− Sotilgan tovar tannarxi (COGS)', '− Прямая себестоимость (COGS)', '− Cost of Goods Sold (COGS)', lang), val: '−110.0 mln', pct: '55%', tone: 'bg-rose-500' },
          { name: tr('= Yalpi Foyda (Gross Profit)', '= Валовая прибыль (Gross Profit)', '= Gross Profit', lang), val: '90.0 mln', pct: '45%', tone: 'bg-sky-600' },
          { name: tr('− Operatsion xarajatlar (OPEX)', '− Операционные расходы (OPEX)', '− Operating Expenses (OPEX)', lang), val: '−50.0 mln', pct: '25%', tone: 'bg-rose-500' },
          { name: tr('= EBITDA (Operatsion oqim)', '= EBITDA', '= EBITDA', lang), val: '40.0 mln', pct: '20%', tone: 'bg-indigo-500' },
          { name: tr('− Amortizatsiya, Kredit foizi va Foyda solig‘i (15%)', '− Амортизация, Проценты и Налог (15%)', '− Depr., Interest & 15% Tax', lang), val: '−14.5 mln', pct: '7.25%', tone: 'bg-amber-500' },
          { name: tr('= SOF FOYDA (Net Profit / ROS)', '= ЧИСТАЯ ПРИБЫЛЬ (Net Profit)', '= NET PROFIT (Bottom Line)', lang), val: '25.5 mln', pct: '12.75%', tone: 'bg-emerald-600' },
        ];
        return (
          <div className="space-y-2">
            {rows.map((r) => (
              <div key={r.name} className="flex items-center justify-between gap-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/70">
                <div className="flex items-center gap-3 min-w-0">
                  <span className={`w-2.5 h-2.5 rounded-sm shrink-0 ${r.tone}`} aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100 truncate">{r.name}</span>
                </div>
                <div className="text-xs sm:text-sm font-mono tabular-nums text-slate-900 dark:text-slate-100 shrink-0">
                  {r.val} <span className="text-slate-500 dark:text-slate-400">({r.pct})</span>
                </div>
              </div>
            ))}
          </div>
        );
      }

      case 'business-plan-blocks': {
        const blocks = [
          tr('01. Loyiha rezumesi (Executive Summary)', '01. Резюме проекта (Executive Summary)', '01. Executive Summary', lang),
          tr('02. Mahsulot va Qiymat taklifi tavsifi', '02. Описание продукта и ценности', '02. Product & Value Proposition', lang),
          tr('03. Bozor tahlili (TAM/SAM/SOM) va Raqobatchilar', '03. Анализ рынка и конкурентов', '03. Market Analysis & Competition', lang),
          tr('04. Marketing va Savdo voronkasi rejasi', '04. План маркетинга и продаж', '04. Go-to-Market & Sales Plan', lang),
          tr('05. Ishlab chiqarish, Joylashuv va CAPEX', '05. Производственный и операционный план', '05. Operations, Facility & CAPEX', lang),
          tr('06. Tashkiliy tuzilma, Shtat va Huquqiy shakl', '06. Организационный план и команда', '06. Organization, Team & Legal Setup', lang),
          tr('07. Moliyaviy model (P&L, Cash Flow, BEP, NPV, IRR)', '07. Финансовая модель (P&L, ДДС, NPV, IRR)', '07. Financial Model (P&L, CF, NPV, IRR)', lang),
          tr('08. Risklar matritsasi va Stress-ssenariylar', '08. Анализ рисков и стресс-сценарии', '08. Risk Matrix & Sensitivity Analysis', lang),
        ];
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {blocks.map((b) => (
              <div key={b} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100">
                {b}
              </div>
            ))}
          </div>
        );
      }

      case 'risk-matrix': {
        const cells = [
          {
            zone: tr('Kritik xatar (Yuqori ehtimol × Katta zarar)', 'Критический риск (Высокая вероятность × Высокий ущерб)', 'Critical Risk (High Likelihood × Severe Impact)', lang),
            level: 'CRITICAL',
            example: tr('Yagona yirik mijozga 80% qaramlik yoki muzlatkich omborida zaxira generatorsiz ishlash.', 'Зависимость от одного клиента на 80% выручки или работа без договоров.', '80% revenue concentration in one client or cold-chain storage without backup power.', lang),
            action: tr('Chora: Darhol diversifikatsiya qilish, zaxira tizim o‘rnatish yoki jarayondan voz kechish.', 'Действие: Немедленная диверсификация, резервирование или отказ от операции.', 'Action: Immediate diversification, engineering redundancy, or risk avoidance.', lang),
            style: 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200',
          },
          {
            zone: tr('Jiddiy xatar (Past ehtimol × Katta zarar)', 'Высокий ущерб при редкой вероятности', 'High-Impact Tail Risk (Low Likelihood × Severe Impact)', lang),
            level: 'TRANSFER / INSURE',
            example: tr('Yong‘in, yirik uskuna ishdan chiqishi yoki kutilmagan bojxona/logistika uzilishi.', 'Пожар на складе, поломка дорогого импортного станка, форс-мажор в логистике.', 'Warehouse fire, major imported machine breakdown, or cross-border transit disruption.', lang),
            action: tr('Chora: Mulkni sug‘urtalash, shartnomada fors-major bandi va ehtiyot qismlar zaxirasi.', 'Действие: Страхование имущества, форс-мажорные оговорки и склад запчастей.', 'Action: Commercial property insurance, force-majeure clauses, and critical spare parts.', lang),
            style: 'bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200',
          },
          {
            zone: tr('Operatsion xatar (Yuqori ehtimol × O‘rtacha zarar)', 'Операционный частый риск', 'Operational Friction (High Likelihood × Moderate Impact)', lang),
            level: 'MITIGATE (SOP)',
            example: tr('Savdo menejerlarining lidlarga kech javob berishi yoki kadrlar almashinuvi.', 'Потеря заявок менеджерами, текучесть линейного персонала, мелкий брак.', 'Slow sales lead response times, frontline staff turnover, or minor packaging defects.', lang),
            action: tr('Chora: CRM avtomatlashtirish, SOP reglamentlar, o‘qitish va KPI tizimi.', 'Действие: Внедрение CRM, чек-листов SOP и прозрачной мотивации KPI.', 'Action: CRM SLA automation, documented SOP checklists, and structured onboarding.', lang),
            style: 'bg-sky-50 dark:bg-sky-950/30 border-sky-300 dark:border-sky-800 text-sky-900 dark:text-sky-200',
          },
          {
            zone: tr('Qabul qilinadigan xatar (Past ehtimol × Kichik zarar)', 'Приемлемый фоновый риск', 'Acceptable Minor Risk (Low Likelihood × Low Impact)', lang),
            level: 'MONITOR',
            example: tr('Ofis kanselyariya narxlari o‘zgarishi yoki mayda kunlik maishiy xarajatlar.', 'Мелкие колебания цен на хозтовары или разовые задержки курьера на 15 минут.', 'Minor office supply price fluctuations or occasional 15-minute courier delays.', lang),
            action: tr('Chora: Oddiy operatsion zaxira (5% contingency) doirasida qabul qilish.', 'Действие: Покрытие из стандартного 5% операционного резерва.', 'Action: Absorb routinely within a standard 5% operating contingency buffer.', lang),
            style: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200',
          },
        ];
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cells.map((c) => (
              <div key={c.level} className={`p-4 rounded-xl border ${c.style} space-y-2`}>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold">{c.level}</span>
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                </div>
                <div className="font-semibold text-sm">{c.zone}</div>
                <p className="text-xs opacity-90">{c.example}</p>
                <div className="text-xs font-semibold pt-1">{c.action}</div>
              </div>
            ))}
          </div>
        );
      }

      case 'pitch-deck-10':
      default: {
        const slides = [
          { n: '01', name: tr('Muammo (Problem)', 'Проблема (Problem)', 'Problem', lang), tip: tr('Mijozning o‘tkir, tez-tez uchraydigan va pul/vaqt yo‘qotadigan og‘rig‘i.', 'Острая и дорогая проблема конкретного сегмента клиентов.', 'Vivid, costly customer pain point backed by real context.', lang) },
          { n: '02', name: tr('Yechim (Solution)', 'Решение (Solution)', 'Solution', lang), tip: tr('Mahsulotingiz muammoni qanday 3–5 barobar oson va samarali hal qiladi?', 'Как ваш продукт решает проблему быстрее, дешевле или удобнее.', 'Clear, concise value proposition solving the pain point.', lang) },
          { n: '03', name: tr('Mahsulot Demo / MVP', 'Продукт в действии', 'Product Demo / MVP', lang), tip: tr('Ishlab turgan interfeys skrinshoti, jarayon sxemasi yoki namuna.', 'Скриншоты рабочего MVP, живой пример использования.', 'Screenshots, workflow, or tangible prototype in action.', lang) },
          { n: '04', name: tr('Bozor ko‘lami (TAM/SAM/SOM)', 'Объем рынка (TAM/SAM/SOM)', 'Market Size (TAM/SAM/SOM)', lang), tip: tr('Pastdan yuqoriga (Bottom-up) asoslangan real bozor sig‘imi va o‘sish sur’ati.', 'Расчет рынка снизу вверх в деньгах и темп роста ниши.', 'Bottom-up addressable market sizing and growth tailwinds.', lang) },
          { n: '05', name: tr('Biznes-model va Monetizatsiya', 'Бизнес-модель', 'Business Model', lang), tip: tr('Kim, nima uchun va qanday tarifda pul to‘laydi? Yunit-iqtisodiyot (LTV/CAC).', 'Как именно вы зарабатываете, средний чек, маржа и LTV/CAC.', 'Revenue model, pricing tiers, gross margin, and LTV/CAC.', lang) },
          { n: '06', name: tr('Traction (Erishilgan natijalar)', 'Трекшн (Результаты)', 'Traction & Validation', lang), tip: tr('Joriy tushum (MRR), to‘lovchi mijozlar soni, oylik o‘sish va pilot shartnomalar.', 'Фактическая выручка, платящие клиенты, динамика MoM и письма о намерениях.', 'Verified revenue, active buyers, MoM growth, and signed pilots.', lang) },
          { n: '07', name: tr('Go-to-Market (Bozorga chiqish)', 'Маркетинг и продажи', 'Go-to-Market Strategy', lang), tip: tr('Mijozlarni qaysi kanallar orqali va qancha CAC bilan jalb qilasiz?', 'Каналы масштабирования продаж и стоимость привлечения клиента.', 'Scalable customer acquisition channels and sales funnel.', lang) },
          { n: '08', name: tr('Raqobat va Ustunlik', 'Конкуренты и преимущество', 'Competition & Unfair Advantage', lang), tip: tr('2×2 pozitsiyalash matritsasi va nusxalash qiyin bo‘lgan ustunligingiz.', 'Матрица позиционирования 2×2 и защита от копирования.', '2×2 positioning matrix and defensible competitive moat.', lang) },
          { n: '09', name: tr('Jamoa (Team)', 'Команда (Team)', 'Founding Team', lang), tip: tr('Nega aynan sizning jamoangiz ushbu sohada g‘olib chiqa oladi? (Founder-Market Fit).', 'Релевантный опыт сооснователей в индустрии, разработке и продажах.', 'Relevant domain expertise and complementary execution track record.', lang) },
          { n: '10', name: tr('Moliya va Investitsiya so‘rovi (The Ask)', 'Финансы и Запрос (The Ask)', 'Financials & The Ask', lang), tip: tr('2–3 yillik prognoz, so‘ralayotgan summa, Use of Funds va 12–18 oylik marralar.', 'Прогноз выручки, сумма инвестиций, распределение средств и целевые KPI.', 'Financial projection, exact funding sought, Use of Funds, and milestones.', lang) },
        ];
        const safeIdx = activeIndex % slides.length;
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {slides.map((s, idx) => (
                <button
                  key={s.n}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    safeIdx === idx
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-800/70 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                  }`}
                >
                  <div className={`text-xs font-mono mb-1 ${safeIdx === idx ? 'text-indigo-200' : 'text-slate-500'}`}>
                    Slide {s.n}
                  </div>
                  <div className="text-xs font-semibold leading-snug line-clamp-2">{s.name}</div>
                </button>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-1">
                  SLIDE {slides[safeIdx].n} / 10 · GUY KAWASAKI 10-20-30 STANDARD
                </div>
                <div className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-1">{slides[safeIdx].name}</div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">{slides[safeIdx].tip}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveIndex((safeIdx + 1) % slides.length)}
                className="px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-indigo-500 shrink-0 inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>{tr('Keyingi slayd', 'Далее', 'Next Slide', lang)}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        );
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.25 }}
      className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 print-card"
    >
      <div className="mb-5">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1.5">
          {tText(title, lang)}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {tText(note, lang)}
        </p>
      </div>

      {renderDiagramContent()}

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
        <span>
          {tr(
            'Interaktiv sxema: batafsil ma’lumot ko‘rish uchun bloklar ustiga bosing.',
            'Интерактивная схема: нажимайте на блоки для детального просмотра.',
            'Interactive model: click individual blocks or stages to inspect details.',
            lang
          )}
        </span>
      </div>
    </motion.div>
  );
};

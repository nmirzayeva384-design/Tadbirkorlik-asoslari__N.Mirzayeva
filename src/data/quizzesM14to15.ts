import { QuizQuestion } from '../types';

export const QUIZ_M14_M15: QuizQuestion[] = [
  // ==================== M14: Boshqaruv, jamoa va risklar (10 questions) ====================
  {
    id: 'm14-q1',
    topicId: 'm14',
    question: {
      uz: 'O‘zbekiston Respublikasi Mehnat kodeksiga binoan yangi xodimni ishga qabul qilish jarayoni qaysi raqamli tizimda ro‘yxatdan o‘tkazilishi shart?',
      ru: 'В какой единой государственной цифровой системе работодатель в Узбекистане обязан регистрировать трудовые договоры и электронные трудовые книжки?',
      en: 'In which official state digital platform must Uzbekistan employers register employment contracts and electronic workbooks?',
    },
    options: {
      uz: [
        'Yagona milliy mehnat tizimi — YAMMT (my.mehnat.uz)',
        'Faqat og‘zaki kelishuv va shaxsiy daftarda',
        'Faqat xorijiy ijtimoiy tarmoqlarda',
        'Mehnat shartnomasini rasmiylashtirish qonunda talab qilinmaydi',
      ],
      ru: [
        'Единая национальная система труда — ЕНСТ (my.mehnat.uz)',
        'Достаточно устной договоренности без записи',
        'В личном блокноте директора без подписания приказа',
        'Трудовые договоры в малом бизнесе отменены',
      ],
      en: [
        'Unified National Labor System — YAMMT / ENST (my.mehnat.uz)',
        'Informal verbal handshake only',
        'Paper notebook kept privately by the manager',
        'Employment contracts are optional for LLCs',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'O‘zbekiston Mehnat kodeksi va Vazirlar Mahkamasi qarorlariga ko‘ra, barcha mehnat shartnomalari va elektron mehnat daftarchalari YAMMT (my.mehnat.uz) orqali yuritiladi; norasmiy yollash ma’muriy javobgarlikka sabab bo‘ladi.',
      ru: 'Регистрация трудовых отношений в ЕНСТ (my.mehnat.uz) обязательна и защищает как работника, так и работодателя при спорах.',
      en: 'Registering employment agreements on my.mehnat.uz ensures statutory labor compliance, pension tracking, and legal clarity for both employer and staff.',
    },
    hint: {
      uz: 'Elektron mehnat daftarchasi yuritiladigan rasmiy portal nomini eslang.',
      ru: 'Официальный портал электронных трудовых книжек РУз.',
      en: 'Recall the official portal managing electronic labor records in Uzbekistan.',
    },
  },
  {
    id: 'm14-q2',
    topicId: 'm14',
    question: {
      uz: 'Startap hammuassislari (Co-founders) o‘rtasida tuziladigan "Vesting" (masalan, 4 yillik vesting, 1 yillik cliff bilan) mexanizmi qanday xatardan himoya qiladi?',
      ru: 'От какого критического риска защищает стартап механизм «Вестинга» долей сооснователей (например, 4 года с 1-летним клиффом)?',
      en: 'What critical governance risk does a 4-year Founder Vesting schedule with a 1-year cliff prevent?',
    },
    options: {
      uz: [
        'Hammuassislardan biri 3–6 oydan keyin loyihani tashlab ketib, ishlamasdan kompaniyaning 50% ulushini o‘zida "o‘lik yuk" (Dead Equity) sifatida olib qolishidan',
        'Ofis ijara narxi oshishidan',
        'Valyuta kursi tebranishidan',
        'Elektr energiyasi uzilishidan',
      ],
      ru: [
        'От ситуации, когда партнер уходит из проекта через пару месяцев, но навсегда уносит 50% доли компании («мертвый капитал» / Dead Equity)',
        'От сезонного спада розничных продаж',
        'От повышения таможенных пошлин на сырье',
        'От поломки кассового аппарата',
      ],
      en: [
        'A co-founder quitting after a few months while walking away permanently with 50% "dead equity", crippling future fundraising and remaining founders’ motivation',
        'Seasonal dips in consumer foot traffic',
        'Foreign exchange rate volatility',
        'Warehouse equipment wear-and-tear',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Vesting qoidasiga ko‘ra ulush bir kunda emas, balki kelishilgan 3–4 yil va KPI davomida bosqichma-bosqich biriktiriladi; 1 yilga (cliff) yetmay ketgan hamkor ulushsiz chiqadi.',
      ru: 'При вестинге доля зарабатывается реальным трудом во времени; инвестор никогда не вложится в стартап, где половина компании принадлежит ушедшему человеку.',
      en: 'Vesting ensures equity is earned over sustained multi-year execution and keeps the cap table clean for future investors.',
    },
    hint: {
      uz: 'Ikki do‘st 50/50 ochgan biznesda biri 3 oyda ketib qolsa nima bo‘lishini tasavvur qiling.',
      ru: 'Подумайте о проблеме «мертвой доли» (Dead Equity) ушедшего партнера.',
      en: 'Think about preventing "Dead Equity" on the startup cap table.',
    },
  },
  {
    id: 'm14-q3',
    topicId: 'm14',
    question: {
      uz: 'KPI (Key Performance Indicators) va OKR (Objectives and Key Results) boshqaruv vositalarining uyg‘un qo‘llanilishi nimani ta’minlaydi?',
      ru: 'Как соотносятся инструменты управления KPI и OKR в растущей компании?',
      en: 'How do KPIs (Key Performance Indicators) and OKRs (Objectives and Key Results) complement each other in team management?',
    },
    options: {
      uz: [
        'KPI muntazam operatsion me’yor va samaradorlikni (masalan, konversiya, javob tezligi) o‘lchaydi; OKR esa jamoani choraklik ulkan rivojlanish marralari sari birlashtiradi',
        'KPI va OKR faqat xodimlarni jarimaga tortish uchun o‘ylab topilgan',
        'OKR buxgalteriya balansining ikkinchi nomi',
        'Kichik biznesda hech qanday raqamli maqsad qo‘yib bo‘lmaydi',
      ],
      ru: [
        'KPI контролируют регулярное операционное здоровье процессов, а OKR фокусируют команду на амбициозных целях прорыва и развития на квартал/год',
        'Оба инструмента нужны исключительно для начисления штрафов',
        'OKR заменяет собой трудовой договор',
        'KPI применяется только на государственных заводах',
      ],
      en: [
        'KPIs monitor ongoing operational health metrics (e.g., SLA, conversion, defect rate), while OKRs align teams around ambitious quarterly strategic breakthroughs',
        'Both systems exist solely to dock employee wages',
        'OKRs replace statutory tax reporting',
        'KPIs forbid setting measurable sales targets',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Aniq o‘lchovsiz boshqarib bo‘lmaydi: savdo menejerida javob tezligi va sotuv rejasi KPI bo‘lsa, yangi hududiy bozorga kirish va mobil ilovani ishga tushirish OKR orqali boshqariladi.',
      ru: 'KPI удерживают стабильность текущей работы, а OKR двигают компанию на новый уровень без распыления ресурсов.',
      en: 'KPIs keep the core engine running smoothly while OKRs drive focused strategic transformation.',
    },
    hint: {
      uz: 'Kundalik me’yoriy ko‘rsatkich va choraklik strategik sakrash maqsadini farqlang.',
      ru: 'Регулярный градусник процессов (KPI) против амбициозного вектора роста (OKR).',
      en: 'Contrast operational dashboard metrics (KPIs) with stretch strategic goals (OKRs).',
    },
  },
  {
    id: 'm14-q4',
    topicId: 'm14',
    question: {
      uz: 'Risklar matritsasida (Ehtimollik × Ta’sir kuchi) "Ehtimolligi yuqori va zarar ta’siri ham juda og‘ir" (Qizil zona) bo‘lgan xatarga nisbatan qanday strategiya qo‘llaniladi?',
      ru: 'Какая стратегия управления рисками применяется к угрозам из «красной зоны» матрицы (высокая вероятность И критический ущерб)?',
      en: 'On a standard Risk Matrix (Probability × Impact), how must management treat a "Red Zone" risk (High Probability AND High Financial Impact)?',
    },
    options: {
      uz: [
        'Xatardan voz kechish yoki biznes jarayonni zudlik bilan qayta qurib, zaxira mexanizmlari (diversifikatsiya, shartnomaviy himoya, sug‘urta) orqali ta’sirni keskin pasaytirish',
        'E’tibor bermasdan omadga ishonib ishlashda davom etish',
        'Xatarni yilda bir marta eslab qo‘yish',
        'Faqat logotipni o‘zgartirish bilan cheklanish',
      ],
      ru: [
        'Немедленное устранение источника риска или перестройка процесса (диверсификация поставщиков/клиентов, жесткая защита, страхование) до запуска',
        'Полное игнорирование в надежде на удачу',
        'Фиксация риска на бумаге без плана действий',
        'Увеличение рекламного бюджета без изменения процессов',
      ],
      en: [
        'Immediate risk avoidance or structural mitigation (supplier/client diversification, contractual safeguards, hedging/insurance) before scaling operations',
        'Accepting it passively and hoping for good luck',
        'Reviewing it once every five years',
        'Increasing ad spend while ignoring operational vulnerability',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Masalan, kompaniya tushumining 85 foizi yagona xaridorga yoki yagona xomashyo yetkazib beruvchiga bog‘langan bo‘lsa, bu qizil xatardir — u zudlik bilan diversifikatsiya qilinishi shart.',
      ru: 'Критические риски (например, зависимость от одного клиента на 80% выручки или отсутствие резервного генератора для холодильного склада) могут уничтожить бизнес за один день.',
      en: 'Existential high-likelihood risks — like single-customer concentration or cold-storage power failure — require immediate engineering or contractual mitigation.',
    },
    hint: {
      uz: 'Kompaniyani bankrot qilishi ehtimoli katta bo‘lgan xavfga beparvo qarab bo‘ladimi?',
      ru: 'Красный квадрант матрицы требует первоочередных превентивных мер.',
      en: 'Top-right quadrant risks threaten survival and demand immediate preventive action.',
    },
  },
  {
    id: 'm14-q5',
    topicId: 'm14',
    question: {
      uz: 'RACI mas’uliyat matritsasida har bir vazifa bo‘yicha NECHTA shaxs "Accountable" (A — yakuniy natija uchun bosh javobgar/tasdiqlovchi) bo‘lishi kerak?',
      ru: 'Сколько человек должно иметь роль «Accountable» (A — конечный ответственный за результат задачи) в матрице ответственности RACI?',
      en: 'In a RACI responsibility matrix, how many individuals should be assigned as "Accountable" (A) for any single deliverable?',
    },
    options: {
      uz: [
        'Qat’iy 1 nafar shaxs (chunki "hammaning javobgarligi — hech kimning javobgarligi emas")',
        'Kamida 5–6 nafar bo‘lim boshlig‘i bir vaqtda',
        'Hech kim javobgar bo‘lmasligi kerak',
        'Butun kompaniya jamoasi baravariga',
      ],
      ru: [
        'Строго один человек (иначе возникает коллективная безответственность)',
        'Минимум три руководителя одновременно',
        'Ни одного человека',
        'Все сотрудники компании поровну',
      ],
      en: [
        'Strictly ONE person per task (because shared ultimate accountability means no one is truly accountable)',
        'At least four department heads jointly',
        'Zero people',
        'Every employee in the company equally',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Bajaruvchilar (R — Responsible) bir nechta bo‘lishi mumkin, biroq yakuniy natijani qabul qiluvchi va javob beruvchi shaxs (A — Accountable) har doim bitta bo‘lishi boshqaruv oltin qoidasidir.',
      ru: 'Исполнителей (R) может быть несколько, но владелец результата (A) всегда строго один.',
      en: 'While multiple team members may be Responsible (R) for execution, assigning exactly one Accountable (A) owner eliminates finger-pointing.',
    },
    hint: {
      uz: '"Yetti enaganing qo‘lida bola ko‘zsiz qolar" maqolini boshqaruvga tatbiq eting.',
      ru: 'У семи нянек дитя без глазу: сколько владельцев результата должно быть у задачи?',
      en: 'Shared final ownership breeds diffusion of responsibility.',
    },
  },
  {
    id: 'm14-q6',
    topicId: 'm14',
    question: {
      uz: 'Tadbirkorning barcha mayda operatsion ishlarni o‘zi bajarishga urinishi va vakolat bermasligi (Mikromenejment) kompaniya o‘sishiga qanday ta’sir ko‘rsatadi?',
      ru: 'К чему приводит микроменеджмент и отказ предпринимателя делегировать рутинные задачи по мере роста компании?',
      en: 'How does founder micromanagement and refusal to delegate affect a growing enterprise?',
    },
    options: {
      uz: [
        'Rahbarning o‘zi "tor bo‘g‘in"ga (Bottleneck) aylanib qoladi, qarorlar sekinlashadi, kuchli xodimlar tashabbuskorlikni yo‘qotadi va strategiyaga vaqt qolmaydi',
        'Kompaniya 10 barobar tezroq masshtablashadi',
        'Rahbarning bo‘sh vaqti ko‘payib ketadi',
        'Xodimlar mustaqil ravishda yangi innovatsiyalar yaratadi',
      ],
      ru: [
        'Собственник сам становится «узким горлышком» (Bottleneck), тормозит скорость решений, выжигает сильных сотрудников и теряет фокус на стратегии',
        'Компания автоматически масштабируется в 10 регионов',
        'У руководителя появляется много свободного времени на стратегию',
        'Инициативность команды вырастает до максимума',
      ],
      en: [
        'The founder becomes the operational bottleneck, slowing execution, stifling top talent autonomy, and starving strategic growth of leadership focus',
        'The company scales effortlessly across 10 cities',
        'Team initiative and ownership skyrocket',
        'Founder burnout drops to zero',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Samarali delegatsiyalash — bu nazoratsiz tashlab qo‘yish emas, balki reglamentlar (SOP), vakolat chegaralari va KPI asosida jamoaga mas’uliyat topshirishdir.',
      ru: 'Делегирование строится на регламентах (SOP), понятных полномочиях и контрольных точках, освобождая основателя для развития бизнеса.',
      en: 'Structured delegation via documented SOPs and clear KPIs frees founders from daily firefighting so they can build scalable systems.',
    },
    hint: {
      uz: 'Hamma imzo va mayda savol bitta odamning stolida yig‘ilib qolsa nima bo‘ladi?',
      ru: 'Представьте пробку, когда каждое мелкое решение ждет одного человека.',
      en: 'Imagine every minor operational decision queued behind one exhausted person.',
    },
  },
  {
    id: 'm14-q7',
    topicId: 'm14',
    isCalculation: true,
    question: {
      uz: 'MChJda xodimning hisoblangan yalpi oylik ish haqi (Gross Salary) 6 000 000 so‘m. Umumiy tartibda JShDS 12% va korxona hisobidan Ijtimoiy soliq 12% bo‘lsa: xodim qo‘liga (Net) qancha oladi va bu xodim korxonaga jami qanchaga tushadi?',
      ru: 'Начисленный оклад сотрудника ООО (Gross) — 6 000 000 сум. При ставке НДФЛ 12% и социальном налоге работодателя 12%: сколько сотрудник получит «на руки» (Net) и каковы полные затраты компании?',
      en: 'An LLC employee’s gross monthly salary is 6,000,000 UZS. With 12% Personal Income Tax withheld and 12% employer Social Tax: what is net take-home pay and total employer payroll cost?',
    },
    options: {
      uz: [
        'Qo‘lga (Net): 5 280 000 so‘m; Korxonaning jami xarajati: 6 720 000 so‘m',
        'Qo‘lga (Net): 6 000 000 so‘m; Korxonaning jami xarajati: 6 000 000 so‘m',
        'Qo‘lga (Net): 4 560 000 so‘m; Korxonaning jami xarajati: 6 000 000 so‘m',
        'Qo‘lga (Net): 5 280 000 so‘m; Korxonaning jami xarajati: 5 280 000 so‘m',
      ],
      ru: [
        'На руки (Net): 5 280 000 сум; Полные затраты компании: 6 720 000 сум',
        'На руки (Net): 6 000 000 сум; Полные затраты компании: 6 000 000 сум',
        'На руки (Net): 4 560 000 сум; Полные затраты компании: 6 000 000 сум',
        'На руки (Net): 5 280 000 сум; Полные затраты компании: 6 000 000 сум',
      ],
      en: [
        'Net take-home: 5,280,000 UZS; Total employer cost: 6,720,000 UZS',
        'Net take-home: 6,000,000 UZS; Total employer cost: 6,000,000 UZS',
        'Net take-home: 4,560,000 UZS; Total employer cost: 6,000,000 UZS',
        'Net take-home: 5,280,000 UZS; Total employer cost: 5,280,000 UZS',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'JShDS (12%) xodim oyligidan ushlanadi: 6 000 000 × (1 − 0,12) = 5 280 000 so‘m qo‘lga. Ijtimoiy soliq (12%) esa ish beruvchi hisobidan qo‘shimcha to‘lanadi: 6 000 000 + 720 000 = 6 720 000 so‘m.',
      ru: 'НДФЛ 12% (720 тыс.) удерживается из оклада (6 млн − 0,72 млн = 5,28 млн), а соцналог 12% (720 тыс.) начисляется сверху за счет работодателя (6,72 млн сум).',
      en: '12% PIT (720k) is deducted from gross pay (5.28M net), while 12% Social Tax (720k) is paid on top by the employer, bringing total cost to 6.72M UZS.',
    },
    hint: {
      uz: '6 mln dan 12% ayirsangiz Net chiqadi; 6 mln ga 12% qo‘shsangiz korxona xarajati chiqadi.',
      ru: 'Вычтите 12% из 6 млн для выплаты на руки и прибавьте 12% к 6 млн для расходов фирмы.',
      en: 'Subtract 12% from 6M for Net pay; add 12% on top of 6M for total employer cost.',
    },
  },
  {
    id: 'm14-q8',
    topicId: 'm14',
    question: {
      uz: 'Import qilingan uskunani chet el valyutasida (USD) kreditga olib, mahsulotni faqat ichki bozorda milliy valyutada (UZS) sotuvchi korxona birinchi navbatda qaysi moliyaviy xatarga duch keladi?',
      ru: 'Какому финансовому риску в первую очередь подвержено предприятие, взявшее валютный кредит (в USD), но получающее всю выручку на внутреннем рынке в сумах (UZS)?',
      en: 'Which financial risk directly threatens a manufacturer that borrows in foreign currency (USD) while earning 100% of its revenue domestically in UZS?',
    },
    options: {
      uz: [
        'Valyuta kursi xatari (Currency / FX Risk) — kurs oshganda kredit yuki so‘mda qimmatlashib ketadi',
        'Hech qanday moliyaviy xatar bo‘lmaydi',
        'Faqat kadrlar qo‘nimsizligi xatari',
        'Mualliflik huquqi buzilishi xatari',
      ],
      ru: [
        'Валютному риску (FX Risk) — при росте курса доллара платежи по кредиту в пересчете на сумы резко возрастают',
        'Валютные кредиты полностью лишены рисков',
        'Только риску увольнения маркетолога',
        'Риску устаревания логотипа',
      ],
      en: [
        'Foreign Exchange (FX) Mismatch Risk — local currency depreciation inflates UZS debt-service obligations without raising domestic revenue automatically',
        'Zero financial risk because FX rates never move',
        'Employee vacation scheduling risk only',
        'Trademark expiration risk',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Moliya boshqaruvining muhim qoidasi: qarz valyutasi daromad valyutasiga mos bo‘lishi kerak. Eksport tushumi bo‘lmagan biznesga valyuta krediti olish katta xatar tug‘diradi.',
      ru: 'Золотое правило казначейства: берите кредит в той валюте, в которой зарабатываете выручку (или формируйте экспортную выручку для естественного хеджирования).',
      en: 'Treasury best practice matches debt currency to revenue currency; unhedged USD debt against domestic UZS sales creates severe FX exposure.',
    },
    hint: {
      uz: 'Daromad so‘mda, qarz to‘lovi esa dollarda bo‘lsa, kurs o‘zgarganda nima yuz beradi?',
      ru: 'Сопоставьте валюту выручки (UZS) и валюту долга (USD).',
      en: 'Compare revenue currency (UZS) against debt repayment currency (USD).',
    },
  },
  {
    id: 'm14-q9',
    topicId: 'm14',
    question: {
      uz: 'Standart operatsion tartib-qoidalar — SOP (Standard Operating Procedures) yozib chiqish kichik biznesga nima beradi?',
      ru: 'Какую практическую пользу малому и среднему бизнесу приносит описание стандартных операционных процедур (SOP / регламентов)?',
      en: 'Why are documented Standard Operating Procedures (SOPs) essential for scaling a service or retail business?',
    },
    options: {
      uz: [
        'Yangi xodimlarni 3 barobar tezroq o‘qitish, xizmat sifatini barcha filiallarda bir xil ushlash va "yulduz xodim" ketib qolishiga qaramlikni kamaytirish',
        'Ishni sekinlashtirish va mijozlarga xizmat ko‘rsatmaslik',
        'Soliq stavkalarini o‘zgartirish',
        'Faqat arxiv javonini qog‘oz bilan to‘ldirish',
      ],
      ru: [
        'Ускоряет адаптацию новичков (онбординг), обеспечивает стабильное качество сервиса на всех точках и снижает зависимость бизнеса от отдельных «незаменимых» людей',
        'Нужно только для гигантских корпораций с 50 000 сотрудников',
        'Полностью заменяет продукт и маркетинг',
        'Запрещает сотрудникам общаться с клиентами',
      ],
      en: [
        'Accelerates new-hire onboarding, standardizes customer quality across branches, and reduces key-person dependency when staff turn over',
        'SOPs are useful only for companies with 50,000+ employees',
        'SOPs eliminate the need for products or customers',
        'SOPs prevent managers from measuring quality',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Masalan, qahvaxona tarmog‘i yoki franchayzing modelida SOP (retseptura, kutib olish skripti, tozalik chek-listi) bo‘lmasa, 2-filial ochilishi bilan sifat tushib ketadi.',
      ru: 'Системный бизнес и франчайзинг невозможны без коротких, понятных чек-листов и инструкций ключевых процессов.',
      en: 'Clear checklists and playbooks turn tribal knowledge into repeatable institutional systems ready for multi-branch expansion.',
    },
    hint: {
      uz: 'McDonald’s yoki Safia har bir filialida sifat qanday bir xil chiqishini o‘ylang.',
      ru: 'Подумайте, как сети кофеен добиваются одинакового вкуса и сервиса в 50 точках.',
      en: 'Consider how multi-branch cafés deliver identical quality regardless of which barista is on shift.',
    },
  },
  {
    id: 'm14-q10',
    topicId: 'm14',
    question: {
      uz: 'Shartnomalardagi "Fors-major" (engib bo‘lmas kuch holatlari) bandi va Kontragentni tekshirish (Due Diligence / my.soliq.uz da halollik reytingi) qaysi xatar turini kamaytiradi?',
      ru: 'Какую группу предпринимательских рисков снижают проверка контрагента перед сделкой и грамотная проработка оговорки о форс-мажоре в договоре?',
      en: 'Which risk category is mitigated by performing counterparty due diligence and drafting clear force-majeure and dispute clauses in commercial contracts?',
    },
    options: {
      uz: [
        'Huquqiy va shartnomaviy xatarlarni (firibgar kontragent, to‘lov qaytmasligi, kutilmagan favqulodda holatlarda jarimalar)',
        'Dizayn shriftlari eskirishi xatarini',
        'Mahsulot kaloriyasi o‘zgarishi xatarini',
        'Ofis Wi-Fi paroli unutilishi xatarini',
      ],
      ru: [
        'Юридические и договорные риски (недобросовестные поставщики, неплатежи, штрафные санкции при чрезвычайных обстоятельствах)',
        'Риск неудачного выбора цвета упаковки',
        'Только климатические осадки',
        'Риск падения охвата сторис в соцсетях',
      ],
      en: [
        'Legal and contractual counterparty risks (fraudulent vendors, uncollectible receivables, and unexcused breach penalties during extraordinary events)',
        'Logo typography trends',
        'Social media algorithm shifts',
        ' Packaging color preferences',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'O‘zbekistonda shartnoma imzolashdan avval kontragentning STIR (INN) orqali soliq qarzdorligi, QQS guvohnomasi faolligi va Barqarorlik reytingini tekshirish millionlab so‘mlik yo‘qotishlarning oldini oladi.',
      ru: 'Проверка контрагента по ИНН (активность свидетельства плательщика НДС, судебные споры, налоговый разрыв) защищает компанию от доначислений и невозврата авансов.',
      en: 'Verifying a counterparty’s TIN/VAT status and Sustainability Rating before wiring advances prevents tax clawbacks and bad-debt write-offs.',
    },
    hint: {
      uz: 'Shartnoma tuzishdan oldin hamkorning ishonchliligini tekshirish haqida o‘ylang.',
      ru: 'Проверка ИНН партнера и юридическая чистота условий поставки.',
      en: 'Focus on legal safeguards and vetting business partners before transferring funds.',
    },
  },

  // ==================== M15: Pitch va taqdimot (10 questions) ====================
  {
    id: 'm15-q1',
    topicId: 'm15',
    question: {
      uz: 'Gay Kavasaki (Guy Kawasaki) tomonidan ommalashgan investorlar uchun taqdimotning oltin "10 / 20 / 30" qoidasi nimani anglatadi?',
      ru: 'Что означает классическое правило презентации для инвесторов «10 / 20 / 30» Гая Кавасаки?',
      en: 'What do the numbers in Guy Kawasaki’s classic "10 / 20 / 30 Rule" of pitching stand for?',
    },
    options: {
      uz: [
        '10 ta slayd, uzoog‘i bilan 20 daqiqa vaqt va slaydlarda kamida 30 kegl (o‘lcham) dagi yirik, o‘qishli shrift',
        '10 soat ma’ruza, 200 ta slayd va 30 ta video rolik',
        '10 nafar ma’ruzachi, 20 ta jadval va har slaydda 30 qator mayda matn',
        '10% chegirma, 20% kredit va 30% soliq',
      ],
      ru: [
        '10 слайдов, не более 20 минут выступления и размер шрифта на слайдах не менее 30 пунктов',
        '10 часов рассказов, 20 страниц текста и 30 таблиц Excel',
        '10 спикеров на сцене, 20 микрофонов и 30 вопросов',
        '10 млн инвестиций под 20% доли на 30 лет',
      ],
      en: [
        '10 slides, no more than 20 minutes of speaking time, and minimum 30-point font size for crisp legibility',
        '10 hours, 200 slides, and 30 dense spreadsheets',
        '10 speakers, 20 videos, and 30 lines of tiny bullet text per slide',
        '10% discount, 20% interest, and 30% equity',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: '10 ta yadro slayd eng muhim fikrlarni jamlashga majbur qiladi, 20 daqiqa savol-javobga vaqt qoldiradi, 30+ o‘lchamli shrift esa slaydga matn to‘ldirib yuborishning oldini oladi.',
      ru: 'Крупный шрифт не позволяет превратить слайд в «простыню текста», заставляя спикера говорить по сути, а слайд использовать как визуальную опору.',
      en: 'Concise slide count, tight timing for Q&A, and large type force clarity and prevent speakers from reading walls of text.',
    },
    hint: {
      uz: 'Slaydlar soni — Vaqt — Shrift o‘lchami.',
      ru: 'Количество слайдов — Длительность в минутах — Кегль шрифта.',
      en: 'Slides — Minutes — Minimum Font Size.',
    },
  },
  {
    id: 'm15-q2',
    topicId: 'm15',
    question: {
      uz: '"Elevator Pitch" (60 soniyalik lift taqdimoti) ning asosiy maqsadi nima?',
      ru: 'Какова главная цель короткого 60-секундного питча (Elevator Pitch)?',
      en: 'What is the primary objective of a 60-second Elevator Pitch?',
    },
    options: {
      uz: [
        'Qisqa va aniq tarzda muammo, yechim, bozor ko‘lami va erishilgan natijani (Traction) aytib, suhbatdoshda qiziqish uyg‘otish hamda keyingi batafsil uchrashuvni belgilash',
        '60 soniya ichida 50 betlik ustav va buxgalteriya balansini o‘qib berish',
        'Investordan liftning o‘zidayoq naqd pulni sanab olish',
        'O‘z maktab va bolalik xotiralarini aytib berish',
      ],
      ru: [
        'За 30–60 секунд емко раскрыть проблему, решение, рынок и трекшн, чтобы заинтересовать собеседника и договориться о полноценной встрече',
        'Прочитать вслух все 50 страниц бизнес-плана на максимальной скорости',
        'Подписать нотариальный договор купли-продажи доли прямо в коридоре',
        'Рассказать биографию всех родственников основателя',
      ],
      en: [
        'Communicate the problem, solution, market size, and real traction clearly in 30–60 seconds to spark curiosity and secure a dedicated follow-up meeting',
        'Recite all 50 pages of the financial appendix at speed',
        'Close and wire the entire investment round on the spot',
        'Share unrelated childhood stories',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: '1 daqiqada investitsiya bitimi yopilmaydi — Elevator Pitch vazifasi ilgak (Hook) tashlab, keyingi 30 daqiqalik uchrashuv yoki Pitch Deck yuborishga ruxsat olishdir.',
      ru: 'Задача короткого питча — не закрыть сделку на бегу, а завоевать внимание и получить слот в календаре инвестора или клиента.',
      en: 'An elevator pitch doesn’t close a round on the spot; it earns the next conversation.',
    },
    hint: {
      uz: '1 daqiqalik tanishuvdan ko‘zlangan real natija nima?',
      ru: 'Главная конверсия минутного питча — назначенная встреча.',
      en: 'The conversion goal of a 60-second pitch is securing the full meeting.',
    },
  },
  {
    id: 'm15-q3',
    topicId: 'm15',
    question: {
      uz: 'Investorlar Pitch Deck ichida eng katta ishonch bilan qaraydigan "Traction" (Erishilgan amaliy natijalar) slaydida nimalar ko‘rsatilishi kerak?',
      ru: 'Что должно быть представлено на слайде «Traction» (Трекшн / Достигнутые результаты), который сильнее всего убеждает инвесторов?',
      en: 'What evidence belongs on the "Traction" slide — often the single most persuasive slide in an investor Pitch Deck?',
    },
    options: {
      uz: [
        'Haqiqiy to‘lovchi mijozlar soni, oylik tushum o‘sishi (MRR/MoM), imzolangan B2B shartnomalar (LOI), Retention ko‘rsatkichi va sinovdan o‘tgan yunit-iqtisodiyot',
        'Faqat "kelajakda milliard dollar topamiz" degan orzular',
        'Ofisga olingan mebellar fotosurati',
        'Ijtimoiy tarmoqda sotib olingan soxta obunachilar soni',
      ],
      ru: [
        'Реальная выручка и темп ее роста (MoM), число платящих клиентов, удержание (Retention), подписанные преддоговоры (LOI) и подтвержденная юнит-экономика',
        'Обещания заработать миллиард через 10 лет без единой продажи сегодня',
        'Фотографии ремонта офиса и дипломов об окончании школы',
        'Количество накрученных ботов в социальных сетях',
      ],
      en: [
        'Verified paying customers, month-over-month revenue growth (MRR), retention metrics, signed B2B pilot letters of intent, and proven unit economics',
        'Unvalidated 10-year billionaire fantasies with zero current users',
        'Photos of office chairs and participation certificates',
        'Purchased vanity follower counts',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'G‘oyalar arzon, ijro va bozor tasdig‘i qimmat: hatto kichik bo‘lsa ham real to‘lov qilgan 50 ta mijoz va barqaror oylik o‘sish 100 betlik nazariyadan kuchliroq dalildir.',
      ru: 'Трекшн доказывает, что рынок уже голосует за продукт деньгами, а команда умеет превращать гипотезы в выручку.',
      en: 'Real customer revenue and retention prove market pull and execution capability far better than speculative projections.',
    },
    hint: {
      uz: 'Va’dalar emas, amalda bajarilgan o‘lchovli dalillar.',
      ru: 'Факты, выручка и динамика роста вместо обещаний.',
      en: 'Hard proof of market demand and execution momentum.',
    },
  },
  {
    id: 'm15-q4',
    topicId: 'm15',
    isCalculation: true,
    question: {
      uz: 'Startap investordan kompaniyaning 20% ulushi (Equity) evaziga $150 000 investitsiya jalb qilmoqda. Bitim yakunlangandan keyingi kompaniya bahosi (Post-money Valuation) va bitimgacha bo‘lgan bahosi (Pre-money Valuation) qanchaga teng?',
      ru: 'Стартап привлекает $150 000 инвестиций в обмен на 20% доли компании (после раунда). Чему равны оценка компании после инвестиций (Post-money) и до инвестиций (Pre-money)?',
      en: 'A startup raises $150,000 from an angel investor in exchange for a 20% post-round equity stake. What are the Post-money Valuation and Pre-money Valuation?',
    },
    options: {
      uz: [
        'Post-money = $750 000; Pre-money = $600 000',
        'Post-money = $150 000; Pre-money = $120 000',
        'Post-money = $300 000; Pre-money = $150 000',
        'Post-money = $1 500 000; Pre-money = $1 350 000',
      ],
      ru: [
        'Post-money = $750 000; Pre-money = $600 000',
        'Post-money = $150 000; Pre-money = $120 000',
        'Post-money = $300 000; Pre-money = $150 000',
        'Post-money = $1 500 000; Pre-money = $1 350 000',
      ],
      en: [
        'Post-money = $750,000; Pre-money = $600,000',
        'Post-money = $150,000; Pre-money = $120,000',
        'Post-money = $300,000; Pre-money = $150,000',
        'Post-money = $1,500,000; Pre-money = $1,350,000',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Agar 20% ulush = $150 000 bo‘lsa, 100% kompaniya (Post-money) = $150 000 / 0,20 = $750 000. Pre-money = Post-money − Investitsiya = $750 000 − $150 000 = $600 000.',
      ru: 'Post-money = Инвестиции / Доля инвестора = $150 000 / 0,20 = $750 000. Вычитаем сумму раунда ($150 000) и получаем Pre-money = $600 000.',
      en: 'Post-money Valuation = $150,000 / 0.20 = $750,000. Subtracting the $150,000 cash injected yields Pre-money Valuation = $600,000.',
    },
    hint: {
      uz: '20% = $150 ming bo‘lsa, 100% qancha bo‘ladi? So‘ng undan $150 mingni ayiring.',
      ru: 'Разделите $150 000 на 0,20 для Post-money, затем вычтите $150 000.',
      en: 'Divide $150k by 20% (0.20) for Post-money, then subtract $150k for Pre-money.',
    },
  },
  {
    id: 'm15-q5',
    topicId: 'm15',
    question: {
      uz: 'Pitch Deck yakunidagi "The Ask" (Investitsiya so‘rovi) slaydida nimalar aniq va shaffof ko‘rsatilishi shart?',
      ru: 'Какая информация обязательно должна быть четко указана на финальном слайде «The Ask» (Запрос к инвестору)?',
      en: 'What specific details must appear clearly on the closing "The Ask" (Use of Funds) slide of a Pitch Deck?',
    },
    options: {
      uz: [
        'So‘ralayotgan aniq summa, mablag‘larning sarflanish yo‘nalishlari (% va summada), necha oylik Runway berishi hamda shu pul evaziga qaysi aniq marralarga (Milestones) erishilishi',
        '"Qancha bersangiz ham olaveramiz" degan mavhum jumla',
        'Faqat asoschining telefon raqami, summasiz va maqsadsiz',
        'Pulni shaxsiy uy va mashina olishga ishlatish rejasi',
      ],
      ru: [
        'Точная запрашиваемая сумма, структура распределения средств (Use of Funds), горизонт Runway (в месяцах) и конкретные измеримые рубежи (Milestones), которых достигнет компания',
        'Фраза «дадите сколько не жалко, а мы разберемся»',
        'План покупки личной квартиры основателю за счет раунда',
        'Просто слово «Спасибо за внимание!» без цифр',
      ],
      en: [
        'Exact funding amount sought, percentage allocation across key growth drivers (Use of Funds), months of Runway funded, and specific measurable Milestones achieved',
        'A vague statement saying "invest whatever amount you feel like"',
        'Just a giant "Thank You!" graphic with zero numbers or next steps',
        'Plans to spend investor funds on personal luxury cars',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Investor pulni shunchaki "xarajat qilish" uchun emas, balki kompaniyani keyingi bosqichga (masalan, MRR ni 3 barobar oshirish va 3 ta hududga chiqishga) olib chiqish uchun beradi.',
      ru: 'Инвестор покупает конкретный план роста: например, $100k на 14 месяцев для выхода на $25k MRR и точку безубыточности.',
      en: 'Investors fund clear milestone transitions — knowing exact capital allocation and target KPIs builds immediate confidence.',
    },
    hint: {
      uz: 'Qancha pul kerak, nimaga sarflanadi va 12–18 oyda qanday natija beradi?',
      ru: 'Сумма + Распределение (Use of Funds) + Целевые результаты.',
      en: 'Amount + Use of Funds breakdown + Concrete target milestones.',
    },
  },
  {
    id: 'm15-q6',
    topicId: 'm15',
    question: {
      uz: 'Taqdimotdagi "Raqobat tahlili" (Competition) slaydini qaysi formatda ko‘rsatish eng professional yondashuv sanaladi?',
      ru: 'Какой визуальный формат слайда «Конкуренты» в Pitch Deck считается наиболее убедительным и профессиональным?',
      en: 'Which visual approach on the "Competition" slide best demonstrates strategic positioning without sounding arrogant?',
    },
    options: {
      uz: [
        '2 o‘qli pozitsiyalash matritsasi (masalan, Tezlik/Qulaylik vs Narx/Mahalliylashtirish) yoki mijoz uchun muhim mezonlar bo‘yicha xolis ustunliklar jadvali',
        '"Bizda dunyoda birorta ham raqobatchi yo‘q" deb yozilgan bo‘sh slayd',
        'Raqobatchi kompaniyalar ustidan kuluvchi karikaturalar',
        'Raqobatchilarni umuman tilga olmaslik va savoldan qochish',
      ],
      ru: [
        'Двухосевая матрица позиционирования (2×2) по ключевым ценностям для клиента или честная сравнительная матрица дифференциации',
        'Пустой слайд с надписью «У нас 0 конкурентов в мире»',
        'Оскорбительные мемы в адрес действующих игроков рынка',
        'Полное удаление упоминаний о рынке и альтернативах',
      ],
      en: [
        'A 2×2 positioning matrix anchored on two critical customer value axes (or an honest feature/segment differentiation grid) showing your defensible wedge',
        'A blank slide claiming "We have zero direct or indirect competitors"',
        'Insulting caricatures of existing market leaders',
        'Refusing to acknowledge how customers currently solve the problem',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Mijoz bugun ham o‘z muammosini qandaydir yo‘l bilan (hatto Excel yoki Telegram guruh orqali bo‘lsa ham) hal qilmoqda; 2×2 matritsa nima uchun aynan sizning yechimingiz qulayroq ekanini ko‘rsatadi.',
      ru: 'Даже таблица в блокноте — это косвенный конкурент CRM-системы. Уважительное сравнение подчеркивает вашу уникальную нишу.',
      en: 'Even manual spreadsheets are status-quo competitors; a sharp 2×2 matrix highlights your strategic wedge while showing deep market awareness.',
    },
    hint: {
      uz: 'Ikki mezon o‘qi bo‘yicha kompaniyangizni yuqori o‘ng burchakda asoslash usulini eslang.',
      ru: 'Матрица позиционирования 2×2 по значимым для клиента осям.',
      en: 'Think of a clean 2×2 strategic positioning map.',
    },
  },
  {
    id: 'm15-q7',
    topicId: 'm15',
    question: {
      uz: 'Savol-javob (Q&A) sessiyasida hakam yoki investor siz hali aniq hisoblamagan qiyin savolni bersa, qanday javob berish eng to‘g‘ri?',
      ru: 'Как правильнее всего ответить во время сессии вопросов и ответов (Q&A), если инвестор задал узкий вопрос, точной цифры по которому вы сейчас не помните?',
      en: 'During pitch Q&A, if an investor asks for a granular metric you do not know offhand, what is the best professional response?',
    },
    options: {
      uz: [
        'To‘qima raqam aytmasdan, savolning muhimligini tan olish, mavjud yaqin mantiqiy ma’lumotni aytish va uchrashuvdan so‘ng 24 soat ichida aniq hisob-kitobni yuborishni bildirish',
        'Yo‘q joydan yolg‘on raqam to‘qib, ishonch bilan aldab o‘tish',
        'Savol bergan hakam bilan janjallashib ketish',
        'Indamasdan sahnadan tushib ketish',
      ],
      ru: [
        'Честно зафиксировать вопрос, не выдумывать цифры на ходу, привести смежный проверенный факт и пообещать прислать точный расчет в течение 24 часов после питча',
        'Уверенно соврать и назвать случайную цифру с потолка',
        'Обвинить инвестора в некомпетентности',
        'Промолчать до конца выступления',
      ],
      en: [
        'Never fabricate numbers — acknowledge the question candidly, share what related data you do have, and commit to sending the exact verified breakdown within 24 hours',
        'Bluff confidently with invented statistics',
        'Argue that the investor’s question is irrelevant',
        'Walk off the stage silently',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Investorlar taqdimotda nafaqat biznes-modelni, balki asoschining halolligi, intellektual kamtarligi va stressda muloqot madaniyatini tekshiradi. Yolg‘on raqam ishonchni bir zumda yo‘q qiladi.',
      ru: 'Выдуманная цифра легко вскрывается на Due Diligence и навсегда закрывает сделку, а честность и быстрый фоллоу-ап с расчетом вызывают уважение.',
      en: 'Investors test founder integrity during Q&A; bluffing destroys trust instantly, whereas honest follow-through turns a tough question into a second touchpoint.',
    },
    hint: {
      uz: 'Investor uchun yolg‘on aytadigan ta’sischidan xavfliroq narsa bormi?',
      ru: 'Честность + обещание быстрого письма с точным расчетом.',
      en: 'Integrity + prompt 24-hour data follow-up wins investor trust.',
    },
  },
  {
    id: 'm15-q8',
    topicId: 'm15',
    question: {
      uz: 'O‘zbekistonda yoshlar va startaplar o‘z loyihasini akseleratsiya qilish hamda venchur sarmoya (Pre-seed / Seed) jalb etish uchun qaysi mahalliy ekotizim institutlariga murojaat qilishi mumkin?',
      ru: 'В какие профильные институты и фонды стартап-экосистемы Узбекистана предприниматель может подать заявку на акселерацию и венчурные инвестиции?',
      en: 'Which active institutions in Uzbekistan’s startup ecosystem provide acceleration programs and early-stage venture funding?',
    },
    options: {
      uz: [
        'IT Park inkubatsiya/akseleratsiya dasturlari, UzVC milliy venchur fondi, IT Park Ventures, AloqaVentures, Yoshlar Ventures va C-Space / Startup Garage rezidentlik dasturlari',
        'Faqat yo‘l harakati xavfsizligi xizmatiga',
        'Faqat kommunal suv ta’minoti korxonasiga',
        'O‘zbekistonda birorta ham akselerator va venchur fond mavjud emas',
      ],
      ru: [
        'Программы IT Park, национальный фонд UzVC, фонды AloqaVentures, IT Park Ventures, Yoshlar Ventures и частные акселераторы',
        'Только в кассу железнодорожного вокзала',
        'Только в жилищно-коммунальную службу района',
        'В Узбекистане нет ни одного венчурного фонда или инкубатора',
      ],
      en: [
        'IT Park incubation/acceleration programs, UzVC National Venture Fund, AloqaVentures, IT Park Ventures, Yoshlar Ventures, and private startup hubs',
        'Municipal water utility offices only',
        'Traffic police departments only',
        'Uzbekistan has zero accelerators or venture funds',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'So‘nggi yillarda O‘zbekistonda davlat va korporativ venchur fondlari (UzVC, AloqaVentures, IT Park Ventures, SQB Ventures, Yoshlar Ventures) hamda universitet inkubatorlari faol shakllandi.',
      ru: 'Стартап-экосистема Узбекистана активно растет: работают государственные и корпоративные венчурные фонды, грантовые конкурсы и университетские инкубаторы.',
      en: 'Uzbekistan’s startup infrastructure now spans state-backed and corporate VC funds, university incubation centers, and IT Park programs.',
    },
    hint: {
      uz: 'IT Park va O‘zbekistondagi venchur fondlar nomlarini eslang.',
      ru: 'Вспомните IT Park и действующие венчурные фонды страны.',
      en: 'Recall IT Park and Uzbekistan’s active venture capital funds.',
    },
  },
  {
    id: 'm15-q9',
    topicId: 'm15',
    question: {
      uz: 'Taqdimotda "Storytelling" (hikoya orqali yetkazish) usulini qo‘llash nima uchun quruq jadvallarni ketma-ket o‘qishdan samaraliroq?',
      ru: 'Почему прием сторителлинга (начало питча с реальной жизненной истории типичного клиента и его боли) работает лучше сухих абстрактных определений?',
      en: 'Why does opening a pitch with a concrete customer story ("Storytelling") outperform reciting dry technical specifications?',
    },
    options: {
      uz: [
        'Tinglovchi real insonning aniq muammosini bir zumda his qiladi, so‘ngra keltirilgan raqamlar va yechim xotirada kuchli muhrlanib qoladi',
        'Storytelling moliyaviy hisob-kitoblarni butunlay keraksiz qiladi',
        'Hikoya aytilsa raqobatchilar haqida so‘rashmaydi',
        'U faqat bolalar ertaklari uchun ishlatiladi, biznesda emas',
      ],
      ru: [
        'Конкретный пример живого клиента мгновенно включает эмпатию аудитории и делает масштаб проблемы осязаемым перед переходом к цифрам рынка',
        'История позволяет вообще не считать экономику и рынок',
        'Сторителлинг запрещает инвесторам задавать вопросы',
        'В бизнесе эмоции и понятные примеры не работают',
      ],
      en: [
        'Relatable human context hooks attention immediately and makes the pain point tangible before zooming out to market-wide TAM/SAM numbers and unit economics',
        'Stories replace the need for valid financial math',
        'Storytelling prevents judges from asking questions',
        'Concrete customer examples confuse B2B buyers',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: '"Toshkentlik kichik do‘kon egasi Anvar aka har oyda nasiya daftaridagi chalkashlikdan 4 mln so‘m yo‘qotadi — va O‘zbekistonda bunday do‘konlardan 120 mingtasi bor" degan kirish muammoni ham hayotiy, ham raqamli ko‘rsatadi.',
      ru: 'Связка «конкретный герой и его боль → масштаб таких же клиентов на рынке → ваше решение» идеально удерживает фокус внимания.',
      en: 'Bridging from one vivid persona’s costly pain point directly to 100,000 similar businesses combines emotional clarity with analytical scale.',
    },
    hint: {
      uz: 'Aniq mijoz misolidan umumiy bozor ko‘lamiga o‘tish ko‘prigini o‘ylang.',
      ru: 'От понятной боли одного клиента — к масштабу всего рынка.',
      en: 'Connect one vivid customer pain story to macro market scale.',
    },
  },
  {
    id: 'm15-q10',
    topicId: 'm15',
    question: {
      uz: 'Investor uchrashuvidan keyin yuboriladigan "Data Room" (Ma’lumotlar xonasi / papkasi) odatda qanday hujjatlarni o‘z ichiga oladi?',
      ru: 'Какие материалы обычно включает в себя папка инвестора (Investor Data Room), которую стартап отправляет после успешного питча для этапа Due Diligence?',
      en: 'What documents typically reside inside a startup’s Investor Data Room shared after a successful pitch meeting?',
    },
    options: {
      uz: [
        'To‘liq Pitch Deck, 24–36 oylik dinamik Excel moliyaviy model (P&L, Cash Flow, Unit Economics), ta’sis hujjatlari (Guvoohnoma, Ustav, Cap Table), asosiy shartnomalar va jamoa rezumelari',
        'Faqat bitta reklama flayeri',
        'Faqat ijtimoiy tarmoqdagi izohlar skrinshoti',
        'Hech qanday hujjat yuborilmaydi, investor so‘zga ishonib pul o‘tkazadi',
      ],
      ru: [
        'Полный Pitch Deck, детальная финансовая модель в таблицах (P&L, ДДС, юнит-экономика), учредительные документы и Cap Table, ключевые контракты и метрики когорт',
        'Только визитная карточка директора',
        'Только фотографии корпоратива команды',
        'Никаких документов — сделки всегда закрываются на слово',
      ],
      en: [
        'Full Pitch Deck, dynamic 24–36 month financial model (P&L, Cash Flow, Unit Economics), corporate charter & Cap Table, key B2B contracts/IP, and cohort metrics',
        'Only a single promotional flyer',
        'Screenshots of personal group chats',
        'Nothing — institutional investors wire funds without Due Diligence',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Pitch — eshikni ochadi, Data Room va Due Diligence (kompleks tekshiruv) esa bitimni yakunlaydi. Tartibli Data Room tadbirkorning professional tayyorgarligidan darak beradi.',
      ru: 'Структурированный Data Room ускоряет проверку Due Diligence с нескольких месяцев до нескольких недель и повышает доверие к основателям.',
      en: 'Pitching opens the door, while a clean, transparent Data Room accelerates investor Due Diligence to actually close the round.',
    },
    hint: {
      uz: 'Investor pul o‘tkazishdan oldin qaysi moliyaviy va huquqiy hujjatlarni tekshiradi?',
      ru: 'Пакет документов для проверки бизнеса (Due Diligence) перед сделкой.',
      en: 'Think of the structured Due Diligence folder investors inspect before wiring capital.',
    },
  },
];

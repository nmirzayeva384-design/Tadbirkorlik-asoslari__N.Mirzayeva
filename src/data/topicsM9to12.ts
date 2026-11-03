import { TopicData } from '../types';

export const TOPICS_M9_M12: TopicData[] = [
  {
    id: 'm9',
    number: 9,
    code: 'M9',
    hours: 2,
    readMinutes: 15,
    iconName: 'Filter',
    roadmapStage: { uz: 'Savdo va CRM', ru: 'Продажи и CRM', en: 'Sales & CRM' },
    title: {
      uz: 'Savdo jarayonini tashkil etish va mijozlar bilan ishlash',
      ru: 'Организация процесса продаж и системная работа с клиентами',
      en: 'Structuring Sales Pipelines, Negotiation & CRM Systems',
    },
    shortDesc: {
      uz: 'Savdo voronkasi (Sales Funnel), konversiya hisobi, muzokaralar va e’tirozlar bilan ishlash texnikasi hamda CRM avtomatlashtiruvi.',
      ru: 'Воронка продаж (Sales Funnel), расчет конверсии этапов, техники переговоров, отработка возражений и внедрение CRM-систем.',
      en: 'Sales Funnel optimization, stage conversion math, consultative negotiation, objection handling, and CRM automation.',
    },
    summary: {
      uz: 'Marketing mijozni eshik oldiga olib keladi, ammo kassaga pul tushishini Savdo bo‘limi ta’minlaydi. Ushbu mavzuda Savdo voronkasi konversiyalarini boshqarish, mijoz e’tirozlarini professional yechish va CRM tizimi orqali birorta murojaatni yo‘qotmaslik o‘rganiladi.',
      ru: 'Маркетинг генерирует входящий интерес (лиды), но реальные деньги в кассу приносит выстроенный процесс продаж. Модуль охватывает воронку продаж, отработку возражений и автоматизацию базы клиентов в CRM.',
      en: 'Marketing sparks initial inquiries, but disciplined sales execution turns leads into cash revenue. This module covers Sales Funnel conversion engineering, consultative objection handling, and CRM pipeline management.',
    },
    learningObjectives: {
      uz: [
        'Savdo voronkasining (Sales Funnel) 5 bosqichini (Qamrov → Lid → Muloqot/Taklif → To‘lov → Sodiqlik/Qayta xarid) raqamlashtirish va bo‘g‘iq joylarni (bottleneck) topish.',
        'SPIN va konsultativ savdo yondashuvi orqali mijozga bosim o‘tkazmasdan ehtiyojni aniqlash.',
        'Eng ko‘p uchraydigan e’tirozlarni (“Qimmat”, “O‘ylab ko‘raman”, “Boshqa joyda arzonroq”) qimmat va asoslar yordamida qayta ishlash.',
        'Excel va daftardan zamonaviy CRM tizimlariga (AmoCRM, Bitrix24 va lokal tizimlar) o‘tish orqali javob berish tezligi va LTV ni oshirish.',
      ],
      ru: [
        'Оцифровывать этапы воронки продаж (Охват → Лид → КП/Встреча → Сделка → Повторная продажа) и находить «узкие горлышки» конверсии.',
        'Вести консультативные переговоры на языке выгоды клиента (выявление потребности → презентация ценности).',
        'Профессионально отрабатывать типовые возражения («Дорого», «Я подумаю», «У конкурента дешевле»).',
        'Понимать устройство и экономический эффект внедрения CRM-системы для удержания клиентской базы.',
      ],
      en: [
        'Quantify each stage of the Sales Funnel (Impressions → Leads → Qualified Proposals → Closed Deals → Repeat Retention) to fix conversion leaks.',
        'Apply consultative selling techniques that uncover customer needs before presenting solutions.',
        'Resolve classic buyer objections ("Too expensive," "Need to think," "Cheaper elsewhere") without desperate discounting.',
        'Implement CRM workflows (lead capture, SLA response timers, automated follow-ups) to maximize LTV.',
      ],
    },
    sections: [
      {
        id: 'm9-s1',
        title: {
          uz: '9.1. Savdo voronkasi (Sales Funnel) va konversiya matematikasi',
          ru: '9.1. Воронка продаж (Sales Funnel) и математика конверсии',
          en: '9.1. The Sales Funnel & Stage-by-Stage Conversion Math',
        },
        paragraphs: {
          uz: [
            'Savdo — bu omad emas, aniq o‘lchanadigan voronka jarayonidir. Masalan, reklamangizni 10 000 kishi ko‘rdi (Qamrov) → shundan 300 nafari Direct/Telegramga yozdi (Lid, CR1 = 3%) → sotuvchi 200 nafariga mos taklif/hisob chiqardi (Malakali muloqot) → 50 nafari to‘lov qildi (Xarid, lid-to-sale konversiyasi = 16,7%) → 20 nafari keyingi oy yana xarid qildi (Sodiqlik / Retention = 40%).',
            'Ko‘pchilik tadbirkorlar savdo kam bo‘lsa "reklamaga ko‘proq pul tikish kerak" deb o‘ylaydi. Holbuki, Instagram Directga yozilgan xabarga menejer 4 soat kechikib "Ha, bor, narxi 300 ming" deb quruq javob qaytarayotgan bo‘lsa — reklama byudjetini oshirish shunchaki teshik chelakka suv quyishdir! Lid konversiyasini 10% dan 20% ga ko‘tarish reklama sarfini 1 so‘mga ham oshirmasdan tushumni 2 barobar ko‘paytiradi.',
          ],
          ru: [
            'Продажи — это управляемая воронка показателей. Допустим, рекламу увидели 10 000 человек → 300 оставили заявку (Лиды, CR = 3%) → 50 оплатили заказ (Конверсия из лида в продажу = 16,7%) → 20 вернулись повторно.',
            'Главная ошибка — заливать деньгами рекламу при «дырявом» отделе продаж. Если менеджер отвечает в Telegram спустя 3 часа односложной фразой «Цена в личке», вы теряете до половины горячих клиентов. Увеличение конверсии обработки заявок с 10% до 20% удваивает выручку при нулевых доп. затратах на маркетинг.',
          ],
          en: [
            'Sales is an engineered conversion funnel, not luck: 10,000 Ad Impressions → 300 Inbound Leads (3% CTR) → 200 Qualified Consultations → 50 Closed Sales (16.7% lead-to-close CR) → 20 Repeat Buyers (40% retention).',
            'Pouring money into ads while sales reps take 4 hours to send a curt one-word price reply is pouring water into a leaky bucket. Lifting lead-to-sale conversion from 10% to 20% doubles top-line revenue without spending a single extra UZS on advertising.',
          ],
        },
        highlightTerms: ['sales-funnel', 'conversion-rate', 'lead'],
      },
      {
        id: 'm9-s2',
        title: {
          uz: '9.2. Samarali muloqot, muzokara va e’tirozlar bilan ishlash texnikasi',
          ru: '9.2. Этапы продаж, переговоры и работа с возражениями',
          en: '9.2. Consultative Selling & Objection Handling Framework',
        },
        paragraphs: {
          uz: [
            'Professional savdo 5 qadamdan iborat: 1) Kontakt o‘rnatish va iliq salomlashish; 2) Ehtiyojni aniqlash (ochiq savollar berish: "Qanday maqsadda qidiryapsiz?", "Siz uchun muddat muhimroqmi yoki kengaytirilgan kafolatmi?"); 3) Aynan mijoz ehtiyojiga mos yechimni Xususiyat → Afzallik → Foyda (XAF / FAB) tilida taqdim etish; 4) E’tirozlar bilan ishlash; 5) Bitimni yopish (aniq keyingi qadamni taklif qilish: "Bugun soat 16:00 da yetkazib beraylikmi yoki ertaga ertalab?").',
            'Mijoz "Qimmat ekan" desa, bu har doim ham "pulim yo‘q" degani emas — ko‘pincha "nima uchun bu narxga arzishini hali tushunmadim" degan signaldir. Bahslashmang: avval mijozni tushunganingizni tasdiqlang ("Ha, bozorda arzonroq variantlar uchrab turadi"), so‘ng uzoq muddatli tejamkorlik, kafolat, servis yoki muddatli to‘lov yechimini ko‘rsating.',
          ],
          ru: [
            'Классическая структура экспертной продажи включает 5 шагов: 1) Установление контакта; 2) Выявление потребностей через открытые вопросы; 3) Презентация продукта на языке выгоды клиента (Свойство → Преимущество → Выгода); 4) Отработка возражений; 5) Закрытие сделки (четкий призыв к следующему шагу).',
            'Возражение «Дорого» чаще всего означает: «Я пока не увидел ценности на эту сумму». Не спорьте с клиентом и не спешите давать скидку — присоединитесь к сомнению, уточните критерий сравнения и обоснуйте цену сроком службы, гарантией и экономией времени.',
          ],
          en: [
            'Consultative selling follows five disciplined steps: (1) Rapport & fast response; (2) Needs discovery via open-ended questions; (3) Tailored presentation translating Features into tangible Customer Benefits; (4) Objection resolution; and (5) Clear call-to-close.',
            'When a buyer says "That’s expensive," it rarely means "I have zero budget" — it means "You haven’t established enough value differential yet." Acknowledge calmly, clarify what alternative they are comparing against, and anchor total cost of ownership, warranty security, or installment flexibility.',
          ],
        },
      },
      {
        id: 'm9-s3',
        title: {
          uz: '9.3. CRM tizimlari va mijozlar bazasini avtomatlashtirish',
          ru: '9.3. Автоматизация продаж: зачем малому бизнесу CRM-система',
          en: '9.3. Sales Automation: CRM Pipelines & Retention Discipline',
        },
        paragraphs: {
          uz: [
            'Savdo menejeri mijozlar raqamini shaxsiy telefonida yoki qog‘oz daftarda yuritsa, u ishdan bo‘shagan kuni kompaniyaning eng qimmatli aktivi — mijozlar bazasi ham u bilan chiqib ketadi! CRM (Customer Relationship Management) tizimi Instagram, Telegram, veb-sayt va IP-telefoniyadan tushgan barcha murojaatlarni avtomatik yagona oynaga yig‘adi.',
            'CRM beradigan 4 ustunlik: 1) Birorta lid unutilmaydi — har bir kartochkada "ertaga soat 11:00 da qayta bog‘lanish" vazifasi yonib turadi; 2) Rahbar qaysi bosqichda nechta mijoz va qancha pul muzlab turganini 1 soniyada ko‘radi; 3) Qo‘ng‘iroq yozuvlari va chatlar saqlanadi; 4) Mavjud mijozlarga tug‘ilgan kun tabrigi yoki qayta xarid eslatmasini avtomatik yuborib, LTV hamda NPS sodiqlik indeksini oshiradi.',
          ],
          ru: [
            'Ведение клиентов в блокноте или личном телефоне продавца — огромный риск: забываются перезвоны, а при увольнении сотрудника база уходит вместе с ним. CRM-система автоматически собирает заявки с сайта, Instagram, Telegram и телефонии в единую канбан-доску.',
            'Что дает CRM малому бизнесу: 1) 0% потерянных обращений; 2) Автоматические напоминания менеджерам о следующем шаге; 3) Прозрачная аналитика конверсии по каждому продавцу; 4) Сегментированные рассылки и повторные продажи текущей базе (рост LTV и NPS).',
          ],
          en: [
            'Storing buyer leads inside a salesperson’s personal phone or paper notebook invites lost follow-ups and catastrophic data loss when staff churn. A CRM platform automatically aggregates Instagram DMs, Telegram inquiries, web forms, and VoIP calls into a visual Kanban pipeline.',
            'Four immediate CRM payoffs: (1) Zero dropped leads via mandatory next-step tasks; (2) Real-time pipeline revenue visibility per rep; (3) Recorded call/chat quality coaching; and (4) Automated repeat-purchase triggers that compound LTV and Net Promoter Score (NPS).',
          ],
        },
        highlightTerms: ['crm', 'ltv', 'nps'],
      },
    ],
    diagramType: 'sales-funnel',
    diagramTitle: {
      uz: 'Savdo voronkasi (Sales Funnel) va CRM bosqichlari',
      ru: 'Этапы воронки продаж (Sales Funnel) в CRM-системе',
      en: 'End-to-End Sales Funnel & CRM Pipeline Stages',
    },
    diagramNote: {
      uz: 'Murojaatga birinchi 5 daqiqa ichida javob berish konversiyani 30 daqiqadan keyin javob berishga qaraganda bir necha barobar yuqori saqlaydi.',
      ru: 'Правило 5 минут: ответ на входящую заявку в первые 5 минут кратно повышает конверсию в продажу.',
      en: 'The 5-Minute SLA Rule: responding to inbound leads within 5 minutes dramatically outperforms 30+ minute delays.',
    },
    stats: [
      {
        value: { uz: '5–7x arzon', ru: 'в 5–7 раз дешевле', en: '5–7x Cheaper' },
        label: {
          uz: 'Mavjud mijozga qayta sotish xarajati yangi mijozni noldan jalb qilishga (CAC) nisbatan',
          ru: 'Удержание и повторная продажа текущему клиенту по сравнению с привлечением нового',
          en: 'Retaining and selling to an existing customer vs. acquiring a brand-new buyer',
        },
        subnote: { uz: 'CRM bazasi bilan ishlash sof foydaning asosiy manbai', ru: 'Повторные продажи формируют основную чистую прибыль', en: 'Repeat CRM monetization drives net profitability' },
        year: 'Harvard Business Review tahlili',
        sourceName: { uz: 'HBR & Bain Customer Retention tadqiqoti', ru: 'Исследование Bain & Co / HBR', en: 'HBR & Bain Retention Economics Study' },
        sourceUrl: 'https://hbr.org',
      },
      {
        value: { uz: '≤ 5 daqiqa', ru: '≤ 5 минут', en: '≤ 5 Minutes' },
        label: {
          uz: 'Onlayn murojaatga (lidga) javob berishning oltin standarti (Speed-to-Lead)',
          ru: 'Золотой стандарт скорости первого ответа менеджеру по входящей онлайн-заявке',
          en: 'Benchmark "Speed-to-Lead" response time before buyer intent cools',
        },
        subnote: { uz: '30 daqiqadan so‘ng mijoz allaqachon 2–3 raqobatchiga yozib ulguradi', ru: 'Через 30 минут клиент уже общается с конкурентами', en: 'After 30 minutes, prospects have typically messaged competitors' },
        year: 'CRM Benchmark',
        sourceName: { uz: 'Lead Response Management tadqiqoti', ru: 'Аналитика Lead Response Management', en: 'Lead Response Management Benchmark' },
        sourceUrl: 'https://hbr.org',
      },
      {
        value: { uz: '+25% – 40%', ru: '+25% – 40%', en: '+25% – 40%' },
        label: {
          uz: 'Tartibli CRM va skriptlar joriy etilganda kichik biznesda lid konversiyasining o‘rtacha o‘sishi',
          ru: 'Средний прирост конверсии из заявки в оплату после внедрения CRM и регламентов',
          en: 'Typical lift in lead-to-sale conversion after implementing CRM tasks & scripts',
        },
        subnote: { uz: 'Yo‘qotilgan va unutilgan murojaatlarni bartaraf etish hisobiga', ru: 'За счет исключения забытых звонков и чатов', en: 'Driven primarily by eliminating forgotten follow-ups' },
        year: 'Amaliy ko‘rsatkich',
        sourceName: { uz: 'CRM integratsiya keyslari tahlili', ru: 'Практика внедрения CRM в МСБ', en: 'SME CRM Implementation Benchmarks' },
        sourceUrl: 'https://it-park.uz',
      },
    ],
    charts: [
      {
        id: 'm9-chart-1',
        type: 'bar',
        title: {
          uz: 'Lidga javob berish vaqtining xarid konversiyasiga ta’siri (nisbiy samaradorlik, %)',
          ru: 'Зависимость конверсии в квалифицированный диалог от скорости ответа на заявку (%)',
          en: 'Relative Lead Qualification Rate by First-Response Speed (%)',
        },
        unit: { uz: '% samaradorlik', ru: '% эффективности', en: '% relative conversion' },
        year: 'Savdo tahlili',
        sourceName: { uz: 'InsideSales / HBR Speed-to-Lead tadqiqoti', ru: 'Исследование HBR Speed-to-Lead', en: 'HBR Speed-to-Lead Study' },
        sourceUrl: 'https://hbr.org',
        seriesLabel: { uz: 'Konversiya ehtimoli (%)', ru: 'Вероятность контакта (%)', en: 'Qualification Index (%)' },
        data: [
          { name: { uz: '5 daq. ichida', ru: 'До 5 мин', en: 'Under 5 min' }, value: 100 },
          { name: { uz: '15 daqiqada', ru: 'Через 15 мин', en: '15 min' }, value: 58 },
          { name: { uz: '30 daqiqada', ru: 'Через 30 мин', en: '30 min' }, value: 32 },
          { name: { uz: '2+ soatdan keyin', ru: 'Спустя 2+ часа', en: '2+ hours later' }, value: 14 },
        ],
      },
      {
        id: 'm9-chart-2',
        type: 'line',
        title: {
          uz: '1 000 ta lid olgan ikki kompaniya voronkasi: CRM siz vs CRM bilan (mijozlar soni)',
          ru: 'Сравнение воронки на 1 000 входящих лидов: хаотичные продажи против CRM-системы',
          en: 'Pipeline Comparison on 1,000 Leads: Ad-Hoc Chat Handling vs. Structured CRM',
        },
        unit: { uz: 'mijoz', ru: 'клиентов', en: 'prospects' },
        year: 'O‘quv modeli',
        sourceName: { uz: 'Savdo voronkasi simulyatsiyasi', ru: 'Модель воронки продаж', en: 'Sales Funnel Benchmark Model' },
        sourceUrl: 'https://it-park.uz',
        seriesLabel: { uz: 'CRM va reglament bilan', ru: 'С внедренной CRM', en: 'Structured CRM Pipeline' },
        secondarySeriesLabel: { uz: 'CRM siz (tartibsiz)', ru: 'Без CRM (блокнот)', en: 'Unstructured Manual' },
        data: [
          { name: { uz: 'Lidlar', ru: 'Заявки', en: 'Leads' }, value: 1000, secondaryValue: 1000 },
          { name: { uz: 'Aloqaga chiqildi', ru: 'Дозвон/ответ', en: 'Contacted' }, value: 920, secondaryValue: 640 },
          { name: { uz: 'Taklif berildi', ru: 'Отправлено КП', en: 'Proposal Sent' }, value: 610, secondaryValue: 350 },
          { name: { uz: 'Xarid (To‘lov)', ru: 'Оплата', en: 'Closed Won' }, value: 195, secondaryValue: 95 },
          { name: { uz: 'Qayta xarid', ru: 'Повторная покупка', en: 'Repeat Sale' }, value: 85, secondaryValue: 22 },
        ],
      },
    ],
    legalActs: [
      {
        id: 'm9-law-1',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Xo‘jalik yurituvchi subyektlar faoliyatining shartnomaviy-huquqiy bazasi to‘g‘risida”gi Qonun',
          ru: 'Закон РУз «О договорно-правовой базе деятельности хозяйствующих субъектов»',
          en: 'Law "On the Contractual-Legal Framework of Business Entities"',
        },
        summary: {
          uz: 'B2B savdo bitimlarida shartnomaning muhim shartlari (predmeti, miqdori, sifati, narxi, muddatlari), tomonlar javobgarligi va shartnomani buzganlik uchun penya/jarimalarni tartibga soladi.',
          ru: 'Определяет обязательные реквизиты и существенные условия хозяйственных договоров (предмет, цена, сроки, ответственность и пеня за просрочку).',
          en: 'Sets mandatory clauses for commercial B2B contracts (subject, quantity, price, delivery dates, and late-payment penalties).',
        },
        relevance: {
          uz: 'Yirik B2B bitimlarni og‘zaki va’da bilan emas, to‘g‘ri tuzilgan yuridik shartnoma bilan mustahkamlash uchun.',
          ru: 'Защищает продавца в B2B-сделках от неоплаты и срыва сроков приемки товара.',
          en: 'Protects B2B sellers against non-payment or scope disputes when closing commercial deals.',
        },
        keyClauses: {
          uz: [
            'Xo‘jalik shartnomasida predmet, miqdor, sifat, narx va bajarish muddatlari aniq ko‘rsatilishi shart.',
            'To‘lov kechiktirilgan taqdirda qonunda belgilangan miqdorda penya undirish huquqi vujudga keladi.',
          ],
          ru: [
            'Договор считается заключенным при согласовании всех существенных условий в письменной или электронной форме.',
            'За просрочку оплаты товаров или работ предусмотрена законная неустойка (пеня).',
          ],
          en: [
            'Commercial contracts require explicit agreement on deliverables, price, quality specs, and timelines.',
            'Establishes statutory late-payment penalty remedies for overdue B2B invoices.',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/11360',
      },
      {
        id: 'm9-law-2',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Shaxsga doir ma’lumotlar to‘g‘risida”gi Qonun va SMS/xabarnoma yuborish qoidalari',
          ru: 'Закон РУз «О персональных данных» и нормы рассылки рекламных сообщений (спам-контроль)',
          en: 'Law "On Personal Data" & Opt-In Messaging Compliance',
        },
        summary: {
          uz: 'CRM bazasidagi mijozlar telefon raqamlari xavfsizligini saqlash, bazani uchinchi shaxslarga sotmaslik va mijoz rad etganda reklama SMS yuborishni darhol to‘xtatishni talab etadi.',
          ru: 'Обязывает защищать клиентскую базу CRM от утечек и запрещает навязчивые рекламные рассылки без согласия абонента.',
          en: 'Mandates strict CRM database security, forbids selling customer lists, and requires honoring opt-out requests on promotional SMS.',
        },
        relevance: {
          uz: 'CRM yuritish va SMS/Telegram qayta aloqa kampaniyalarida qonuniylikni ta’minlaydi.',
          ru: 'Определяет этичные и законные рамки работы с клиентской базой в CRM.',
          en: 'Governs lawful customer database management and lifecycle retention messaging.',
        },
        keyClauses: {
          uz: [
            'Mijozlar bazasini ruxsatsiz uchinchi shaxslarga berish ma’muriy va jinoiy javobgarlikka sabab bo‘ladi.',
            'Reklama xabarnomalari faqat oldindan rozilik bergan mijozlarga yuborilishi va obunani bekor qilish imkoni bo‘lishi shart.',
          ],
          ru: [
            'Незаконная передача базы клиентов третьим лицам влечет юридическую ответственность.',
            'Абонент вправе в любой момент потребовать прекращения рекламных рассылок.',
          ],
          en: [
            'Unauthorized disclosure or sale of CRM customer contacts carries statutory penalties.',
            'Customers retain the unconditional right to opt out of promotional broadcasts.',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/4396419',
      },
    ],
    caseStudy: {
      title: {
        uz: 'Keys: Toshkentdagi "MebelCraft" oshxona mebellari sexida CRM joriy etib savdoni +72% oshirish',
        ru: 'Кейс: Рост выручки цеха кухонной мебели «MebelCraft» на +72% за счет воронки CRM без увеличения рекламы',
        en: 'Case Study: Boosting "MebelCraft" Custom Kitchen Sales by +72% via CRM Pipeline Discipline',
      },
      scenario: {
        uz: 'Oshxona mebellari ishlab chiqaruvchi "MebelCraft" oyiga Instagram reklamaga 12 mln so‘m sarflab 300 ta murojaat (lid) olar, lekin 2 nafar sotuvchi yozishmalarni tartibsiz olib borgani sababli o‘lchov olishga (zamer) atigi 36 ta mijozni ko‘ndirar va yakunda 14 ta buyurtma (o‘rtacha chek — 15 mln so‘m = 210 mln so‘m tushum) yopardi.',
        ru: 'Цех «MebelCraft» тратил 12 млн сумов в месяц на таргет и получал 300 заявок в Instagram, но менеджеры забывали перезванивать и теряли чаты. В итоге до бесплатного выезда замерщика доходило лишь 36 человек, а в договор (средний чек 15 млн сумов) закрывалось 14 сделок (210 млн сумов выручки).',
        en: '"MebelCraft" spent 12M UZS monthly on Instagram ads generating 300 inquiries, yet disorganized DM handling meant only 36 prospects booked a free home measurement and just 14 signed orders (at 15M UZS average ticket = 210M UZS revenue).',
      },
      analysis: {
        uz: 'Rahbar oddiy CRM tizimini o‘rnatdi va voronkaga "3D dizayn va bepul o‘lchov" oraliq bosqichini hamda 5 daqiqalik javob standartini kiritdi. Reklama byudjeti o‘zgarmadi (300 lid), biroq o‘lchovga chiqish 36 tadan 65 taga, shartnoma esa 14 tadan 24 taga yetdi (tushum 210 mln dan 360 mln so‘mga ko‘tarildi — +150 mln so‘m o‘sish!).',
        ru: 'После подключения CRM с интеграцией Instagram, регламентом ответа за 5 минут и промежуточным шагом «Бесплатный 3D-эскиз на замере» на тех же 300 лидах число замеров выросло с 36 до 65, а количество оплаченных кухонь — с 14 до 24 (выручка выросла с 210 до 360 млн сумов без копейки доп. затрат на рекламу!).',
        en: 'Connecting Instagram DMs to a CRM with a 5-minute response SLA and a "Free 3D Kitchen Render Visit" milestone lifted home measurements from 36 to 65 and closed orders from 14 to 24 on the exact same 300 leads — expanding monthly revenue from 210M to 360M UZS (+72%) with zero extra ad spend!',
      },
      numbersBreakdown: {
        uz: [
          'Reklama xarajati o‘zgarmadi: 12 mln so‘m/oy (300 ta lid).',
          'Eski voronka: 300 lid → 36 o‘lchov (12%) → 14 xarid (umumiy CR = 4,67%) = 210 mln so‘m.',
          'CRM bilan yangi voronka: 300 lid → 65 o‘lchov (21,7%) → 24 xarid (umumiy CR = 8,0%) = 360 mln so‘m (+71,4% o‘sish).',
        ],
        ru: [
          'Рекламный бюджет неизменен: 12 млн сумов (300 лидов).',
          'Было без CRM: 300 лидов → 36 замеров → 14 сделок (CR 4,67%) = 210 млн сумов.',
          'Стало с CRM: 300 лидов → 65 замеров → 24 сделки (CR 8,0%) = 360 млн сумов.',
        ],
        en: [
          'Ad budget held constant: 12M UZS/month (300 leads).',
          'Before CRM: 300 leads → 36 site visits → 14 orders (4.67% overall CR) = 210M UZS.',
          'After CRM: 300 leads → 65 site visits → 24 orders (8.0% overall CR) = 360M UZS (+71.4% lift).',
        ],
      },
      challengeQuestion: {
        uz: 'Agar qimmatbaho mahsulotda (mebel, ta’lim kursi, B2B uskuna) sotuvchi birinchi xabardayoq to‘g‘ridan-to‘g‘ri "15 mln so‘m to‘lang" deyish o‘rniga "Bepul o‘lchov / bepul sinov darsi"ga taklif qilsa, bu savdo voronkasida nima deb ataladi?',
        ru: 'Как в воронке продаж называется легкий промежуточный шаг (бесплатный замер, пробный урок, тест-драйв), на который клиенту проще согласиться перед дорогой покупкой?',
        en: 'In sales pipeline design, what is a low-friction intermediate commitment (free site measure, trial lesson, demo) called before asking for a high-ticket purchase?',
      },
      challengeOptions: {
        uz: [
          'Keyingi asosiy qadam (Key Stage / Tripwire-bosqich) — mijoz ishonchini uyg‘otib xarid konversiyasini keskin oshiruvchi ko‘prik',
          'Kassa uzilishi',
          'Aylanmadan soliq',
        ],
        ru: [
          'Ключевой этап воронки (КЭВ / лид-магнит) — снижает стресс выбора и кратно повышает конверсию в договор',
          'Дебиторская задолженность',
          'Демпинг цен',
        ],
        en: [
          'Key Funnel Milestone (Lead Magnet / Micro-Commitment) — builds trust face-to-face and multiplies close rates',
          'Cash Flow Deficit',
          'Predatory Pricing',
        ],
      },
      correctOptionIndex: 0,
      challengeExplanation: {
        uz: 'Murakkab va qimmat mahsulotlar chatda bir xabar bilan sotilmaydi: birinchi aloqaning maqsadi pul so‘rash emas, balki mijozni "Keyingi oson qadam"ga (uchrashuv, sinov darsi, o‘lchov) olib o‘tishdir.',
        ru: 'Дорогие продукты продаются через промежуточный ключевой этап (пробный урок, замер, демонстрация), где клиент лично убеждается в экспертности компании.',
        en: 'High-ticket items rarely close cold in chat; selling the low-risk micro-commitment (trial class, 3D measure, live demo) unlocks trust.',
      },
    },
    calculatorId: 'funnel',
    keyTakeaways: {
      uz: [
        'Reklama faqat lid olib keladi; lidni real pulga aylantirish — savdo voronkasi va menejer mahoratining ishidir.',
        'Voronkaning har bir bosqichidagi konversiyani 10–15% ga yaxshilash yakuniy tushumni reklama xarajatisiz keskin oshiradi.',
        'Mijozga mahsulotning texnik xususiyatini emas, uning muammosi qanday hal bo‘lishini (Foyda / Natijani) soting.',
        'E’tiroz — bu rad javobi emas, balki mijozning qo‘shimcha ishonch va dalil so‘rashidir.',
        'Mijozlar bazasi kompaniyaning oltin mulkidir: uni daftar yoki shaxsiy telefonda emas, yagona CRM tizimida yuriting.',
      ],
      ru: [
        'Управляйте продажами через цифры каждого этапа воронки, а не интуитивные ощущения «клиентов мало».',
        'Скорость ответа решает: связывайтесь с онлайн-заявкой в первые 5 минут, пока интерес клиента максимален.',
        'В дорогих нишах продавайте не сразу весь чек в переписке, а легкий ключевой шаг (замер, аудит, пробный урок).',
        'Возражение «дорого» лечится раскрытием ценности, гарантий и сервиса, а не мгновенным обрушением цены.',
        'CRM-система защищает базу клиентов от потери и автоматизирует повторные продажи (рост LTV).',
      ],
      en: [
        'Manage sales mathematically across funnel stages rather than guessing why revenue fluctuates.',
        'Speed-to-lead wins deals: contact inbound digital inquiries within 5 minutes while buyer intent peaks.',
        'For high-ticket offerings, sell the low-risk next step (demo, trial lesson, site visit) rather than forcing cold chat checkout.',
        'Handle price objections by anchoring value, reliability, and ROI rather than réflexively slashing margins.',
        'Treat your CRM database as a core company asset powering retention and compounding LTV.',
      ],
    },
  },
  {
    id: 'm10',
    number: 10,
    code: 'M10',
    hours: 2,
    readMinutes: 16,
    iconName: 'Tag',
    roadmapStage: { uz: 'Narx va Tannarx', ru: 'Цена и Безубыточность', en: 'Pricing & Break-Even' },
    title: {
      uz: 'Mahsulot narxini shakllantirish va zararsizlik nuqtasi',
      ru: 'Ценообразование продукта, себестоимость и точка безубыточности',
      en: 'Product Pricing Strategies, Cost Structure & Break-Even Analysis',
    },
    shortDesc: {
      uz: 'To‘g‘ri va egri xarajatlar, doimiy va o‘zgaruvchan xarajatlar, 3 xil narx belgilash metodi hamda Break-even (zararsizlik nuqtasi) hisobi.',
      ru: 'Прямые и косвенные, постоянные и переменные затраты; методы ценообразования и расчет точки безубыточности (Break-even point).',
      en: 'Direct vs. indirect costs, fixed vs. variable expenses, Cost-Plus / Competitive / Value-Based pricing, and Break-Even Point math.',
    },
    summary: {
      uz: 'Narxni juda past qo‘ysangiz — ko‘p ishlab zarar ko‘rasiz; asossiz qimmat qo‘ysangiz — mijoz raqobatchiga ketadi. Ushbu mavzuda mahsulot tannarxini zargarona aniqlikda hisoblash, narxlashning 3 ta strategiyasi va korxona necha dona sotganda noldan foydaga chiqishini (Break-even) topish o‘rgatiladi.',
      ru: 'Слишком низкая цена ведет к работе в убыток при полных оборотах, слишком высокая без обоснования — к потере рынка. Модуль учит точно считать себестоимость, выбирать стратегию цены и находить точку безубыточности.',
      en: 'Underpricing leads to busy insolvency; unsubstantiated overpricing kills volume. This module teaches rigorous unit cost accounting, three strategic pricing methodologies, and exact Break-Even Point modeling.',
    },
    learningObjectives: {
      uz: [
        'Tannarxni shakllantirishda to‘g‘ri (xomashyo, ishbay haq) va egri xarajatlarni, shuningdek doimiy (Fixed) hamda o‘zgaruvchan (Variable) xarajatlarni ajratish.',
        'Narx belgilashning 3 ta asosiy metodini: Xarajat + ustama (Cost-plus), Raqobatchilarga yo‘naltirilgan va Qiymatga asoslangan (Value-based) narxlashni qo‘llash.',
        'Ustama (Markup) va Marja (Gross Margin) tushunchalarini adashtirmasdan hisoblash.',
        'Zararsizlik nuqtasini (Break-even Point) donada va so‘mda hisoblash hamda xavfsizlik zaxirasini (Margin of Safety) baholash.',
      ],
      ru: [
        'Классифицировать затраты предприятия на прямые/косвенные и постоянные (Fixed Costs) / переменные (Variable Costs).',
        'Применять три метода ценообразования: затратный («себестоимость + наценка»), конкурентный и ценностный (Value-based).',
        'Безошибочно различать торговую наценку (Markup) и маржинальность продаж (Margin).',
        'Рассчитывать точку безубыточности (BEP) в натуральном и денежном выражении и запас финансовой прочности.',
      ],
      en: [
        'Classify business expenses accurately across Direct vs. Indirect and Fixed (FC) vs. Variable (VC) categories.',
        'Apply Cost-Plus, Competitor-Benchmarked, and Value-Based pricing strategies appropriately.',
        'Distinguish Markup (% added to cost) from Gross Margin (% of final selling price) without mathematical errors.',
        'Compute the Break-Even Point (in units and UZS revenue) and evaluate Margin of Safety.',
      ],
    },
    sections: [
      {
        id: 'm10-s1',
        title: {
          uz: '10.1. Tannarx anatomiyasi: doimiy va o‘zgaruvchan xarajatlar',
          ru: '10.1. Структура себестоимости: постоянные и переменные затраты',
          en: '10.1. Anatomy of Cost: Fixed vs. Variable & Direct vs. Indirect',
        },
        paragraphs: {
          uz: [
            'Ko‘plab yangi tadbirkorlar qahva narxini hisoblashda faqat qahva doni, sut va stakan pulini (6 500 so‘m) sanab, "20 000 so‘mdan sotsam, 13 500 so‘m sof foyda!" deb xato o‘ylaydilar. Ular do‘kon ijarasi, barista oyligi, elektr, kassa apparati, soliq va to‘kilib isrof bo‘lgan sutni unutib qo‘yadilar.',
            'Moliyaviy tahlil uchun barcha xarajatlar ikki guruhga bo‘linadi:\n• O‘zgaruvchan xarajatlar (Variable Costs — VC): sotuv hajmiga to‘g‘ri proporsional o‘zgaradi (1 dona mahsulot xomashyosi, qadog‘i, ishbay usta haqi, sotuv komissiyasi, yetkazish). 0 ta sotsangiz — VC = 0.\n• Doimiy xarajatlar (Fixed Costs — FC): bu oyda 10 ta sotsangiz ham, 1 000 ta sotsangiz ham baribir to‘lanadigan xarajatlar (bino ijarasi, ma’muriyat va buxgalter oyligi, internet, qo‘riqlash, uskuna amortizatsiyasi).',
          ],
          ru: [
            'Типичная ошибка новичка в кофейне — посчитать только зерно, молоко и стаканчик (6 500 сумов) и решить, что при цене 20 000 сумов чистая прибыль равна 13 500 сумам. При этом забываются аренда, оклад бариста, электричество, эквайринг, налог и списания.',
            'Для управленческого учета расходы жестко делят на две группы:\n• Переменные затраты (Variable Costs — VC): растут вместе с каждой произведенной единицей (сырье, упаковка, сдельная оплата, комиссия эквайринга/маркетплейса).\n• Постоянные затраты (Fixed Costs — FC): не зависят от объема продаж в текущем месяце (аренда помещения, фиксированные оклады, охрана, абонплата за интернет и ПО).',
          ],
          en: [
            'Novice cafe owners often add up coffee beans, milk, and cup (6,500 UZS), price a latte at 20,000 UZS, and mistakenly celebrate 13,500 UZS as "pure profit" — overlooking storefront rent, barista base wages, utilities, card processing fees, taxes, and spoilage.',
            'Managerial accounting separates expenses into two behaviors:\n• Variable Costs (VC): scale directly with each unit produced or sold (raw ingredients, packaging, piece-rate labor, payment/marketplace commissions).\n• Fixed Costs (FC): recur monthly regardless of whether you sell 10 units or 10,000 units (rent, salaried staff, software subscriptions, security, depreciation).',
          ],
        },
        highlightTerms: ['cogs', 'fixed-costs', 'variable-costs', 'unit-economics'],
      },
      {
        id: 'm10-s2',
        title: {
          uz: '10.2. Narx belgilashning 3 ta asosiy metodi hamda Ustama vs Marja',
          ru: '10.2. Три метода ценообразования: затратный, конкурентный, ценностный',
          en: '10.2. Three Pricing Methodologies & Markup vs. Margin',
        },
        paragraphs: {
          uz: [
            'Narx belgilashda uchta yondashuv birgalikda tahlil qilinadi: 1) Xarajatlarga asoslangan (Cost-plus) narxlash — tannarx ustiga maqsadli ustama qo‘shish (pastki chegarani — bundan arzon sotish mumkin emasligini ko‘rsatadi); 2) Raqobatchilarga yo‘naltirilgan narxlash — bozordagi o‘xshash mahsulotlar narx koridorini hisobga olish (standart tovarlar uchun); 3) Qiymatga asoslangan (Value-based) narxlash — mahsulot mijozga qancha foyda, nufuz yoki vaqt tejamkorligi berishiga qarab narx qo‘yish (eng yuqori marja aynan shu usulda olinadi).',
            'Muhim eslatma: Ustama (Markup) va Marjani (Margin) adashtirmang! Agar tovarni 100 000 so‘mga olib 150 000 so‘mga sotsangiz: Ustama = (50 / 100) = 50%, ammo Marja = (50 / 150) = 33,3%! Agar sotuvchi 33,3% marjali tovarga o‘ylamasdan "35% chegirma!" bersa — u har bir sotuvdan zarar ko‘radi!',
          ],
          ru: [
            'Три базовых подхода к цене: 1) Затратный метод («издержки плюс наценка») — задает минимальный пол цены, ниже которого бизнес убыточен; 2) Конкурентное ценообразование — ориентация на среднерыночный коридор цен однородных товаров; 3) Ценностное ценообразование (Value-based) — цена строится от ощущаемой ценности и выгоды для клиента (позволяет зарабатывать максимальную маржу за счет бренда, скорости или уникального сервиса).',
            'Внимание: не путайте Наценку и Маржу! Товар куплен за 100 000 сумов, продан за 150 000 сумов: Наценка = 50%, но Маржа в цене = 50 / 150 = 33,3%. Если дать скидку 35% от конечной цены (до 97 500 сумов), вы уйдете в прямой убыток!',
          ],
          en: [
            'Smart pricing triangulates three lenses: (1) Cost-Plus Pricing — sets the absolute price floor so unit costs are covered; (2) Competitive Benchmarking — calibrates against rival alternatives for commoditized goods; and (3) Value-Based Pricing — anchors price to the economic gain, convenience, or prestige perceived by the buyer (unlocking superior margins).',
            'Critical math trap — Markup vs. Margin: buying at 100,000 UZS and selling at 150,000 UZS is a 50% Markup, yet only a 33.3% Gross Margin! Granting a reckless "35% off sale" drops the price to 97,500 UZS — losing money on every unit.',
          ],
        },
        highlightTerms: ['markup-margin'],
      },
      {
        id: 'm10-s3',
        title: {
          uz: '10.3. Zararsizlik nuqtasi (Break-even Point — BEP) formulasi',
          ru: '10.3. Расчет точки безубыточности (Break-even Point)',
          en: '10.3. Calculating the Break-Even Point (BEP)',
        },
        paragraphs: {
          uz: [
            'Zararsizlik nuqtasi (BEP) — korxona o‘zining barcha oylik doimiy va o‘zgaruvchan xarajatlarini 100% qoplab, foydasi aynan 0 so‘mga tenglashadigan minimal savdo hajmidir.',
            'Formula juda sodda va qudratli:\n• Marjinal foyda (1 donadan) = Sotuv narxi (P) − O‘zgaruvchan xarajat (VC).\n• BEP (donada) = Oylik doimiy xarajatlar (FC) ÷ (P − VC).\nMasalan: tikuv sexining oylik doimiy xarajati (ijara, kesuvchi va ustaboshi maoshi) FC = 24 000 000 so‘m. Bitta ko‘ylak ulgurji narxi P = 140 000 so‘m, mato + tugma + tikuvchi ishbay haqi VC = 90 000 so‘m. Har bir ko‘ylakdan qoladigan marjinal foyda = 50 000 so‘m. Demak, BEP = 24 000 000 ÷ 50 000 = 480 dona ko‘ylak! Oyiga 479 ta sotilsa — sex zararda; 481-ko‘ylakdan boshlab har bir donasi sof 50 000 so‘m operatsion foyda keltiradi.',
          ],
          ru: [
            'Точка безубыточности (BEP) показывает, сколько единиц продукции нужно продать за месяц, чтобы выйти «в ноль» и покрыть все постоянные и переменные затраты.',
            'Формула:\n• Маржинальная прибыль на единицу = Цена (P) − Переменные затраты на единицу (VC).\n• BEP (в штуках) = Постоянные затраты за месяц (FC) ÷ (P − VC).\nПример: постоянные расходы швейного цеха FC = 24 000 000 сумов/мес. Оптовая цена рубашки P = 140 000 сумов, переменные затраты (ткань, фурнитура, сдельная работа) VC = 90 000 сумов (маржинальная прибыль = 50 000 сумов). BEP = 24 000 000 ÷ 50 000 = 480 рубашек в месяц (или 67,2 млн сумов выручки). Начиная с 481-й рубашки цех зарабатывает чистую операционную прибыль.',
          ],
          en: [
            'The Break-Even Point (BEP) reveals the exact monthly sales threshold where Total Revenue equals Total Costs (Net Operating Profit = 0).',
            'Formula:\n• Unit Contribution Margin = Selling Price (P) − Unit Variable Cost (VC).\n• BEP (Units) = Monthly Fixed Costs (FC) ÷ (P − VC).\nExample: A garment workshop carries FC = 24,000,000 UZS/month. Each shirt wholesales at P = 140,000 UZS with fabric + piece-rate sewing VC = 90,000 UZS (Contribution Margin = 50,000 UZS). BEP = 24,000,000 ÷ 50,000 = 480 shirts/month (67.2M UZS revenue). Every shirt sold from #481 upward adds 50,000 UZS directly to operating profit.',
          ],
        },
        highlightTerms: ['contribution-margin', 'breakeven'],
      },
    ],
    diagramType: 'cost-structure',
    diagramTitle: {
      uz: 'Zararsizlik nuqtasi (Break-even) grafigi: Xarajat va Tushum chiziqlari kesishuvi',
      ru: 'График точки безубыточности: пересечение выручки и совокупных затрат',
      en: 'Break-Even Analysis Diagram: Revenue vs. Total Cost Intersection',
    },
    diagramNote: {
      uz: 'Pastdagi interaktiv Zararsizlik va Narx kalkulyatorida o‘z loyihangiz raqamlarini sinab ko‘ring.',
      ru: 'Ниже на странице вы можете интерактивно менять цену и издержки в калькуляторе безубыточности.',
      en: 'Experiment with your own fixed costs, unit variable costs, and price in the interactive calculator below.',
    },
    stats: [
      {
        value: { uz: '6,2% – 6,5%', ru: '6,2% – 6,5%', en: '6.2% – 6.5%' },
        label: {
          uz: 'O‘zbekistonda yillik umumiy inflyatsiya ko‘rsatkichi (xomashyo va tannarxni qayta ko‘rib chiqish mo‘ljali)',
          ru: 'Годовой уровень общей инфляции в Узбекистане (ориентир для индексации себестоимости)',
          en: 'Annual headline inflation rate in Uzbekistan (benchmark for periodic cost-structure reviews)',
        },
        subnote: { uz: 'Tannarx kalkulyatsiyasini har chorakda yangilab turish tavsiya etiladi', ru: 'Пересматривайте калькуляцию себестоимости ежеквартально', en: 'Update unit BOM cost sheets quarterly to protect margins' },
        year: '2026',
        sourceName: { uz: 'Markaziy bank (cbu.uz) va stat.uz', ru: 'Центральный банк РУз и stat.uz', en: 'Central Bank of Uzbekistan & stat.uz' },
        sourceUrl: 'https://cbu.uz',
      },
      {
        value: { uz: '≥ 25% – 30%', ru: '≥ 25% – 30%', en: '≥ 25% – 30%' },
        label: {
          uz: 'Kichik biznes uchun tavsiya etiladigan Xavfsizlik zaxirasi (amaldagi sotuvning BEP dan yuqoriligi)',
          ru: 'Рекомендуемый запас финансовой прочности (превышение фактических продаж над точкой безубыточности)',
          en: 'Recommended Margin of Safety above Break-Even sales volume',
        },
        subnote: { uz: 'Mavsumiy pasayishda ham zararga tushmaslik kafolati', ru: 'Позволяет пережить сезонный спад на 20–25% без убытка', en: 'Absorbs 20–25% seasonal dips without slipping into losses' },
        year: 'Moliya me’yori',
        sourceName: { uz: 'Boshqaruv hisobi standarti', ru: 'Стандарт управленческого учета', en: 'Managerial Accounting Standard' },
        sourceUrl: 'https://cbu.uz',
      },
      {
        value: { uz: '+11,1%', ru: '+11,1%', en: '+11.1%' },
        label: {
          uz: '30% marjali mahsulotda tannarx o‘zgarmagan holda narxni atigi 3,3% to‘g‘ri optimallashtirishning foydaga ta’siri',
          ru: 'Прирост операционной прибыли при повышении точности цены всего на 3,3% (эффект ценового рычага)',
          en: 'Operating profit lift from a 3.3% value-based price optimization (McKinsey Pricing Leverage)',
        },
        subnote: { uz: 'Narx — foydaga eng kuchli ta’sir qiluvchi moliyaviy dastak', ru: 'Цена сильнее всех рычагов влияет на чистую прибыль', en: 'Pricing is the highest-leverage driver of net margin' },
        year: 'McKinsey tahlili',
        sourceName: { uz: 'McKinsey Power of Pricing tadqiqoti', ru: 'Исследование McKinsey Power of Pricing', en: 'McKinsey Power of Pricing Study' },
        sourceUrl: 'https://www.mckinsey.com',
      },
    ],
    charts: [
      {
        id: 'm10-chart-1',
        type: 'line',
        title: {
          uz: 'Tikuv sexi misolida Zararsizlik nuqtasi (FC = 24 mln, P = 140 ming, VC = 90 ming so‘m)',
          ru: 'График точки безубыточности швейного цеха (BEP = 480 шт. / 67,2 млн сумов)',
          en: 'Garment Workshop Break-Even Curve (BEP = 480 Shirts / 67.2M UZS)',
        },
        unit: { uz: 'mln so‘m', ru: 'млн сумов', en: 'M UZS' },
        year: 'Moliyaviy model',
        sourceName: { uz: 'BEP formulasi hisob-kitobi', ru: 'Управленческая модель BEP', en: 'Break-Even Financial Model' },
        sourceUrl: 'https://stat.uz',
        seriesLabel: { uz: 'Tushum (Revenue)', ru: 'Выручка', en: 'Total Revenue' },
        secondarySeriesLabel: { uz: 'Jami xarajat (FC + VC)', ru: 'Полные затраты (FC + VC)', en: 'Total Costs (FC + VC)' },
        data: [
          { name: { uz: '0 dona', ru: '0 шт', en: '0 pcs' }, value: 0, secondaryValue: 24.0 },
          { name: { uz: '240 dona', ru: '240 шт', en: '240 pcs' }, value: 33.6, secondaryValue: 45.6 },
          { name: { uz: '480 (BEP)', ru: '480 (BEP)', en: '480 (BEP)' }, value: 67.2, secondaryValue: 67.2 },
          { name: { uz: '720 dona', ru: '720 шт', en: '720 pcs' }, value: 100.8, secondaryValue: 88.8 },
          { name: { uz: '960 dona', ru: '960 шт', en: '960 pcs' }, value: 134.4, secondaryValue: 110.4 },
        ],
      },
      {
        id: 'm10-chart-2',
        type: 'bar',
        title: {
          uz: '1 stakan qahva (22 000 so‘m) chakana narxining haqiqiy tarkibi (ming so‘m)',
          ru: 'Реальная структура цены чашки кофе 22 000 сумов в городской кофейне (тыс. сумов)',
          en: 'True Unit Economics Breakdown of a 22,000 UZS Specialty Coffee Cup (K UZS)',
        },
        unit: { uz: 'ming so‘m', ru: 'тыс. сумов', en: 'K UZS' },
        year: 'HoReCa misoli',
        sourceName: { uz: 'Toshkent qahvaxonalari o‘rtacha kalkulyatsiyasi', ru: 'Усредненная калькуляция HoReCa', en: 'Urban Cafe Unit Economics Model' },
        sourceUrl: 'https://stat.uz',
        seriesLabel: { uz: 'Summa (ming so‘m)', ru: 'Сумма (тыс. сумов)', en: 'Amount (K UZS)' },
        data: [
          { name: { uz: 'Don, sut va stakan (VC)', ru: 'Зерно, молоко, стакан', en: 'Beans, Milk, Cup (VC)' }, value: 7.2 },
          { name: { uz: 'Ijara va kommunal ulushi', ru: 'Доля аренды и комм.', en: 'Rent & Utilities Share' }, value: 5.5 },
          { name: { uz: 'Barista maoshi va soliq', ru: 'Зарплата и налоги', en: 'Staff Wages & Taxes' }, value: 4.8 },
          { name: { uz: 'Sof operatsion foyda', ru: 'Чистая прибыль', en: 'Net Operating Profit' }, value: 4.5 },
        ],
      },
    ],
    legalActs: [
      {
        id: 'm10-law-1',
        docType: { uz: 'Qonun / Nizom', ru: 'Законодательство о бухучете и НСБУ', en: 'National Accounting Standards (BHMS)' },
        title: {
          uz: 'Mahsulot (ishlar, xizmatlar)ni ishlab chiqarish va sotish xarajatlari tarkibi to‘g‘risidagi Nizom (VM 54-son qarori) va BHMS standartlari',
          ru: 'Положение о составе затрат по производству и реализации продукции (работ, услуг) (ПКМ РУз № 54) и НСБУ',
          en: 'Regulation on the Composition of Production and Sales Costs (Cabinet Resolution No. 54) & National Accounting Standards',
        },
        summary: {
          uz: 'Ishlab chiqarish tannarxiga kiritiladigan moddiy xarajatlar, mehnatga haq to‘lash, amortizatsiya hamda davr xarajatlarini (ma’muriy, sotish va moliyaviy) tasniflash tartibini belgilaydi.',
          ru: 'Классифицирует прямые производственные затраты (формирующие себестоимость продукции) и расходы периода (административные, коммерческие, финансовые).',
          en: 'Defines statutory classification of direct manufacturing COGS versus period operating expenses (SG&A and financial costs).',
        },
        relevance: {
          uz: 'Buxgalteriya va soliq hisobida mahsulot tannarxini to‘g‘ri shakllantirishning me’yoriy asosi.',
          ru: 'Базовый нормативный документ для правильной калькуляции себестоимости на предприятии.',
          en: 'Core accounting regulation governing accurate unit cost calculation in Uzbekistan.',
        },
        keyClauses: {
          uz: [
            'Mahsulotni ishlab chiqarish tannarxiga bevosita moddiy, mehnat va ustama ishlab chiqarish xarajatlari kiritiladi.',
            'Sotish (reklama), ma’muriy boshqaruv va kredit foizlari davr xarajatlari sifatida yalpi foydadan chegiriladi.',
          ],
          ru: [
            'Прямые материальные и трудовые затраты формируют производственную себестоимость.',
            'Расходы на рекламу, администрацию и проценты по кредитам относятся к расходам периода.',
          ],
          en: [
            'Direct materials, production labor, and factory overhead comprise manufacturing COGS.',
            'Marketing, general administration, and loan interest are accounted for as period operating expenses.',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/264884',
      },
      {
        id: 'm10-law-2',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“Raqobat to‘g‘risida”gi Qonun va erkin bozor narxlari tamoyili (narxlarni davlat tomonidan tartibga solish chegaralari)',
          ru: 'Закон РУз «О конкуренции» и принципы свободного рыночного ценообразования',
          en: 'Law "On Competition" & Free Market Pricing Principles',
        },
        summary: {
          uz: 'O‘zbekistonda tovar va xizmatlarning mutlaq ko‘pchiligi bo‘yicha narxlar tadbirkor tomonidan talab va taklifdan kelib chiqib mustaqil belgilanadi (faqat tabiiy monopoliyalar va ijtimoiy muhim dori/resurslar ro‘yxati bundan mustasno).',
          ru: 'Закрепляет право предпринимателя самостоятельно устанавливать цены на свои товары и услуги, за исключением узкого перечня социально значимых позиций и естественных монополий.',
          en: 'Affirms entrepreneurs’ freedom to set market prices independently, except within narrowly defined natural monopolies or essential medicine price caps.',
        },
        relevance: {
          uz: 'Narxlash erkinligi, shuningdek kartel kelishuvlari (raqobatchilar bilan yashirincha narxni sun’iy oshirish) taqiqlanishini tushuntiradi.',
          ru: 'Объясняет свободу ценообразования и одновременно запрет на картельные ценовые сговоры.',
          en: 'Clarifies pricing autonomy alongside strict prohibitions against price-fixing cartels.',
        },
        keyClauses: {
          uz: [
            'Sotuvda narxnoma (sennik) milliy valyutada — so‘mda aniq va tushunarli ko‘rsatilishi shart.',
            'Raqobatchilar o‘rtasida bozor narxini sun’iy ushlab turish bo‘yicha kartel kelishuvlari qonun bilan taqiqlanadi.',
          ],
          ru: [
            'Цены на товары и услуги на внутреннем рынке РУз указываются и оплачиваются исключительно в национальной валюте — сумах.',
            'Ценовые сговоры (картели) между конкурентами запрещены.',
          ],
          en: [
            'All domestic retail and consumer price tags in Uzbekistan must be denominated in national currency (UZS).',
            'Horizontal price-fixing agreements among competitors are illegal.',
          ],
        },
        yearNote: '2023 / Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/6518381',
      },
    ],
    caseStudy: {
      title: {
        uz: 'Keys: "Chorsu Burger" fast-fud nuqtasining zararsizlik nuqtasi va halokatli chegirma xatosi',
        ru: 'Кейс: Точка безубыточности бургерной «Chorsu Burger» и почему скидка 30% увела её в минус',
        en: 'Case Study: "Chorsu Burger" Break-Even Math & How a Reckless 30% Discount Triggered Losses',
      },
      scenario: {
        uz: 'Kamol Toshkentda kichik burger shoxobchasi ochdi. Uning oylik doimiy xarajatlari (ijara, 2 ta oshpaz oyligi, kommunal) FC = 21 000 000 so‘m. Bitta firma burgerining narxi P = 35 000 so‘m, ichidagi go‘sht kotleti, bulochka, pishloq, sous va quti xarajati VC = 21 000 so‘m. Bir oyda 1 800 dona burger sotilmoqda. Qo‘shni ko‘chada yangi kafe ochilgach, Kamol o‘ylamasdan bir oyga "Barcha burgerlarga −30% chegirma! (24 500 so‘m)" e’lon qildi.',
        ru: 'Камол открыл точку бургеров. Постоянные расходы FC = 21 000 000 сумов/мес. Цена бургера P = 35 000 сумов, переменные затраты на продукты и упаковку VC = 21 000 сумов. Продажи шли на уровне 1 800 бургеров в месяц. Испугавшись нового конкурента, Камол объявил акцию на месяц: «Скидка −30% на всё! Бургер за 24 500 сумов».',
        en: 'Kamol runs a burger shop with monthly Fixed Costs FC = 21,000,000 UZS. Signature burgers sell at P = 35,000 UZS with patty, bun, cheese, sauce, and box Variable Cost VC = 21,000 UZS. Selling 1,800 burgers/month profitably, he panicked when a rival opened nearby and launched a month-long "−30% Off Everything! (24,500 UZS)" promo.',
      },
      analysis: {
        uz: 'Keling, raqamlarga qaraylik! Chegirmagacha: marjinal foyda = 35 000 − 21 000 = 14 000 so‘m; BEP = 21 000 000 ÷ 14 000 = 1 500 ta burger (1 800 ta sotuvda Kamol oyiga +4,2 mln so‘m foydada edi). −30% chegirmadan so‘ng (narx 24 500 so‘m): marjinal foyda bor-yo‘g‘i 3 500 so‘mga (24 500 − 21 000) tushib qoldi! Yangi BEP = 21 000 000 ÷ 3 500 = 6 000 ta burger! Sotuv 2 barobar oshib 3 600 taga chiqqanida ham, Kamol oy oxirida −8,4 mln so‘m sof zarar bilan chiqdi!',
        ru: 'Считаем математику! До акции: маржинальная прибыль = 35 000 − 21 000 = 14 000 сумов; BEP = 21 млн ÷ 14 тыс. = 1 500 бургеров (при 1 800 шт. прибыль была +4,2 млн сумов). Со скидкой −30% (цена 24 500): маржинальная прибыль рухнула в 4 раза — до 3 500 сумов! Новая точка безубыточности выросла с 1 500 до 6 000 бургеров! Даже удвоив продажи до 3 600 штук, Камол получил −8,4 млн сумов убытка!',
        en: 'Look at the unit math: Before discounting, Contribution Margin = 35,000 − 21,000 = 14,000 UZS; BEP = 21M ÷ 14K = 1,500 burgers (earning +4.2M UZS profit at 1,800 units). At 24,500 UZS (−30%), Contribution Margin collapsed 4x to just 3,500 UZS! Break-even skyrocketed from 1,500 to 6,000 burgers! Even after doubling volume to 3,600 burgers, Kamol lost −8.4M UZS that month!',
      },
      numbersBreakdown: {
        uz: [
          'Oddiy narxda (35 000 so‘m): Marjinal foyda = 14 000 so‘m | BEP = 1 500 dona (52,5 mln so‘m).',
          '−30% chegirmada (24 500 so‘m): Marjinal foyda = 3 500 so‘m | Yangi BEP = 6 000 dona (4 barobar o‘sdi!).',
          'To‘g‘ri yechim: narxni buzish o‘rniga tannarxi atigi 3 000 so‘mlik limonadni qo‘shib "Kombo to‘plam — 42 000 so‘m" (qiymat va o‘rtacha chekni oshirish) taklif qilish kerak edi.',
        ],
        ru: [
          'Базовая цена (35 000 сумов): Маржа = 14 000 сумов | BEP = 1 500 бургеров.',
          'При скидке −30% (24 500 сумов): Маржа = 3 500 сумов | Новая BEP = 6 000 бургеров.',
          'Грамотная альтернатива скидке: запуск комбо-набора с высокомаржинальным напитком (себестоимость 3 000 сумов) за 42 000 сумов.',
        ],
        en: [
          'Regular Price (35,000 UZS): Unit Contribution = 14,000 UZS | BEP = 1,500 units.',
          '−30% Promo Price (24,500 UZS): Unit Contribution = 3,500 UZS | New BEP = 6,000 units (4x jump!).',
          'Smart alternative: bundle a high-margin craft lemonade (3,000 UZS cost) into a 42,000 UZS Combo Meal.',
        ],
      },
      challengeQuestion: {
        uz: 'Agar kofe-burchakning oylik doimiy xarajati (ijara + oylik) 12 000 000 so‘m, 1 stakan kapuchino narxi 20 000 so‘m va o‘zgaruvchan xarajati 8 000 so‘m bo‘lsa, oylik Zararsizlik nuqtasi (BEP) necha stakan?',
        ru: 'Постоянные расходы кофе-поинта — 12 000 000 сумов/мес., цена капучино — 20 000 сумов, переменные затраты на стакан — 8 000 сумов. Чему равна точка безубыточности (BEP)?',
        en: 'A coffee kiosk has monthly Fixed Costs of 12,000,000 UZS, sells cappuccinos at 20,000 UZS, and incurs 8,000 UZS unit Variable Cost. What is its monthly Break-Even Point?',
      },
      challengeOptions: {
        uz: [
          '600 stakan (12 mln / 20 ming)',
          '1 000 stakan (12 000 000 ÷ (20 000 − 8 000) = 1 000 stakan yoki kuniga ~34 stakan)',
          '1 500 stakan',
        ],
        ru: [
          '600 стаканов',
          '1 000 стаканов (12 000 000 ÷ (20 000 − 8 000) = 1 000 шт., т.е. ~34 стакана в день)',
          '1 500 стаканов',
        ],
        en: [
          '600 cups',
          '1,000 cups (12,000,000 ÷ (20,000 − 8,000) = 1,000 cups, or ~34 cups/day)',
          '1,500 cups',
        ],
      },
      correctOptionIndex: 1,
      challengeExplanation: {
        uz: 'Marjinal foyda = 20 000 − 8 000 = 12 000 so‘m. Doimiy xarajat (12 000 000 so‘m) ÷ 12 000 so‘m = 1 000 stakan/oy (30 kunda kuniga 33–34 stakan).',
        ru: 'Маржинальная прибыль со стакана: 20 000 − 8 000 = 12 000 сумов. Делим постоянные издержки 12 млн на 12 тыс. и получаем ровно 1 000 стаканов в месяц.',
        en: 'Unit Contribution Margin = 20,000 − 8,000 = 12,000 UZS. Dividing 12,000,000 UZS Fixed Costs by 12,000 UZS yields exactly 1,000 cups/month.',
      },
    },
    calculatorId: 'breakeven',
    keyTakeaways: {
      uz: [
        'To‘liq hisoblanmagan tannarx — yashirin bankrotlik sababchisi: soliq, logistika, qadoq va eskirishni doim hisobga kiriting.',
        'Narxning pastki chegarasini Tannarx belgilaydi, yuqori chegarasini esa mijoz his qiladigan Qiymat (Value) belgilaydi.',
        'Ustama (tannarxga nisbatan %) va Marjani (sotuv narxiga nisbatan %) hech qachon adashtirmang.',
        'Katta chegirma berishdan oldin yangi Zararsizlik nuqtasini (BEP) hisoblang — ba’zan chegirma o‘rniga sovg‘a/bonus berish 3 barobar foydaliroq.',
        'Har bir tadbirkor o‘zining kunlik zararsizlik normasini (masalan, "kuniga 34 stakan kofe") yoddan bilishi shart.',
      ],
      ru: [
        'Точное разделение постоянных и переменных затрат — фундамент правильного ценообразования.',
        'Не демпингуйте вслепую: снижение цены на 20–30% способно увеличить необходимую точку безубыточности в 3–4 раза.',
        'Всегда считайте скидки от маржинальной прибыли, а не от оборота.',
        'Ценностное ценообразование (упаковка, скорость, гарантия, сервис) позволяет уйти от ценовых войн.',
        'Переводите месячную точку безубыточности в понятный ежедневный план продаж для команды.',
      ],
      en: [
        'Rigorous separation of Fixed and Variable costs is the bedrock of sustainable pricing.',
        'Never launch deep percentage discounts before modeling how drastically they inflate your Break-Even volume.',
        'Keep Markup (on cost) and Gross Margin (on price) mathematically distinct.',
        'Value-based differentiation (speed, warranty, bundling, brand trust) insulates margins from race-to-the-bottom price wars.',
        'Translate monthly BEP into a crystal-clear daily unit target for your frontline team.',
      ],
    },
  },
  {
    id: 'm11',
    number: 11,
    code: 'M11',
    hours: 2,
    readMinutes: 16,
    iconName: 'Wallet',
    roadmapStage: { uz: 'Pul oqimi (Cash Flow)', ru: 'Денежный поток', en: 'Cash Flow' },
    title: {
      uz: 'Biznesda pul oqimini rejalashtirish: kirim, chiqim va aylanma mablag‘lar',
      ru: 'Планирование денежного потока (Cash Flow), кассовый разрыв и оборотный капитал',
      en: 'Cash Flow Planning, Preventing Cash Deficits & Working Capital Control',
    },
    shortDesc: {
      uz: 'Pul oqimi hisoboti (Cash Flow Statement), kassa defitsiti sabablari va oldini olish hamda debitorlik/kreditorlik qarzdorlik boshqaruvi.',
      ru: 'Отчет о движении денежных средств (ДДС), причины и профилактика кассовых разрывов, управление дебиторской и кредиторской задолженностью.',
      en: 'Cash Flow Statement (Operating, Investing, Financing), diagnosing and preventing cash gaps, and managing AR/AP working capital.',
    },
    summary: {
      uz: 'Moliya olamida mashhur hikmat bor: "Foyda — bu fikr, Pul oqimi (Cash) esa — haqiqat". Qog‘ozda millionlab foyda ko‘rayotgan korxona ertaga ijara va oylikka naqd pul topa olmay yopilib ketishi mumkin. Ushbu mavzuda pul harakatini 3 oqimda rejalashtirish, kassa uzilishining oldini olish va nasiya (debitorlik) nazorati o‘rganiladi.',
      ru: 'В бизнесе говорят: «Прибыль на бумаге — это мнение, а деньги на счете — это факт». Даже прибыльная по договорам компания может обанкротиться из-за кассового разрыва. Модуль учит вести платежный календарь, отчет ДДС и управлять дебиторкой.',
      en: 'As the classic finance adage warns: "Revenue is vanity, profit is sanity, but Cash is King." Profitable companies on paper go bankrupt every year due to sudden cash gaps. This module covers Cash Flow forecasting, payment calendars, and Accounts Receivable/Payable discipline.',
    },
    learningObjectives: {
      uz: [
        'Pul oqimi to‘g‘risidagi hisobotning (Cash Flow Statement / ODDS) 3 ta bo‘limini: Operatsion, Investitsion va Moliyaviy oqimlarni yuritish.',
        'Kassa defitsiti (pul yetishmovchiligi) qanday yuzaga kelishini aniqlash va To‘lov taqvimi (Payment Calendar) yordamida uni 2–4 hafta oldin bartaraf etish.',
        'Debitorlik qarzdorligi (xaridorlarning sizdan qarzi) va Kreditorlik qarzdorligi (sizning yetkazib beruvchilardan qarzingiz) muvozanatini saqlash.',
        'Pul konversiyasi siklini (Cash Conversion Cycle) qisqartirish orqali tashqi kreditsiz aylanma mablag‘ni bo‘shatish.',
      ],
      ru: [
        'Составлять Отчет о движении денежных средств (ДДС) в разрезе операционной, инвестиционной и финансовой деятельности.',
        'Выявлять причины кассовых разрывов и предотвращать их с помощью еженедельного платежного календаря.',
        'Контролировать дебиторскую (долги клиентов вам) и кредиторскую (ваши долги поставщикам) задолженность.',
        'Ускорять оборачиваемость оборотного капитала (Working Capital) для высвобождения живых денег.',
      ],
      en: [
        'Structure a Cash Flow Statement across Operating, Investing, and Financing activities.',
        'Forecast and prevent Cash Deficits (liquidity gaps) weeks in advance using a rolling Payment Calendar.',
        'Balance Accounts Receivable (money owed by buyers) against Accounts Payable (supplier payment terms).',
        'Shorten the Cash Conversion Cycle to unlock internal working capital without borrowing.',
      ],
    },
    sections: [
      {
        id: 'm11-s1',
        title: {
          uz: '11.1. Pul oqimi hisoboti (Cash Flow): 3 ta asosiy daryo',
          ru: '11.1. Отчет о движении денежных средств (ДДС): три вида потоков',
          en: '11.1. The Cash Flow Statement: Operating, Investing & Financing Streams',
        },
        paragraphs: {
          uz: [
            'Pul oqimi hisoboti faqat bitta narsani — kassaga va bank hisobvarag‘iga haqiqatda pul kelib tushgan va chiqib ketgan sanani tan oladi. Shartnoma imzolangani hali "kirim" emas! Professional boshqaruvda pullar uchta savatga ajratiladi:',
            '1) Operatsion pul oqimi (OCF): asosiy savdodan tushgan pullar minus xomashyo, ijara, oylik, soliq va reklama to‘lovlari. Sog‘lom biznesda OCF barqaror musbat (+) bo‘lishi shart!\n2) Investitsion pul oqimi (ICF): uzoq muddatli uskuna, bino yoki mashina sotib olish (− chiqim) yoki eski uskunani sotish (+ kirim).\n3) Moliyaviy pul oqimi (FCF): bank krediti yoki investor sarmoyasi kirishi (+ kirim) hamda kredit tanasi va ta’sischi dividendlarini to‘lash (− chiqim).',
          ],
          ru: [
            'Отчет ДДС (Cash Flow) учитывает только реальные списания и поступления на расчетном счете и в кассе. Деньги делятся на три потока:',
            '1) Операционный поток (OCF): выручка от клиентов минус закупка сырья, аренда, зарплаты, маркетинг и налоги. Именно он показывает здоровье основного бизнеса и обязан быть положительным (+).\n2) Инвестиционный поток (ICF): покупка станков, ремонта, автотранспорта (обычно со знаком «минус» у растущей компании).\n3) Финансовый поток (FCF): получение и возврат тела кредитов, вклады учредителей и выплата дивидендов.',
          ],
          en: [
            'A Cash Flow Statement tracks strictly settled cash movements entering and leaving bank accounts and registers — ignoring unpaid invoices. Cash movements divide into three streams:',
            '(1) Operating Cash Flow (OCF): customer cash collections minus supplier payments, rent, payroll, ads, and taxes — the lifeblood of business viability that must turn reliably positive (+);\n(2) Investing Cash Flow (ICF): capital expenditures on machinery, renovations, or vehicles; and\n(3) Financing Cash Flow (FCF): loan drawdowns/equity injections (+) minus loan principal repayments and founder dividends (−).',
          ],
        },
        highlightTerms: ['cash-flow', 'burn-rate'],
      },
      {
        id: 'm11-s2',
        title: {
          uz: '11.2. Kassa defitsiti (uzilishi): nima uchun foydali korxona pulsiz qoladi?',
          ru: '11.2. Кассовый разрыв: причины возникновения и методы лечения',
          en: '11.2. Cash Deficits (Cash Gaps): Root Causes & Prevention',
        },
        paragraphs: {
          uz: [
            'Tasavvur qiling: mebel sexi 1-sanada 100 mln so‘mlik buyurtma oldi, mijoz 30% (30 mln) avans berdi, qolgan 70 mln so‘mni mebel o‘rnatilgach 25-sanada to‘laydi. Sex esa 5-sanada 55 mln so‘mga yog‘och olishi va 10-sanada 15 mln so‘m ijara to‘lashi kerak. Jami chiqim = 70 mln, qo‘ldagi pul esa = 30 mln! 10-sanada sexda −40 mln so‘m Kassa defitsiti yuz beradi, vaholanki oy yakunida bu buyurtma +20 mln so‘m foyda keltiradi!',
            'Kassa uzilishining 4 sababi: 1) Mijozlarga uzoq nasiya berib, xomashyoni naqdga olish; 2) Omborda o‘lik (sotilmay yotgan) tovar zaxirasini ko‘paytirib yuborish; 3) Ta’sischining kassadagi aylanma pulni "mening foydam" deb shaxsiy maqsadga olib qo‘yishi; 4) Mavsumiy soliqlarni va yirik to‘lovlarni oldindan rejalashtirmaslik. Davosi: haftalik To‘lov taqvimi yuritish, avans ulushini oshirish (50–70%), yetkazib beruvchidan to‘lov kechiktirish (otsrochka) olish va 1–2 oylik zahira fondini saqlash.',
          ],
          ru: [
            'Классический пример кассового разрыва: цех подписал выгодный контракт на 100 млн сумов с авансом 30 млн (остаток 70 млн придет только 25-го числа), но уже 10-го числа нужно заплатить 55 млн за сырье и 15 млн за аренду. Сделка прибыльна, но 10-го числа на счете не хватает 40 млн сумов!',
            'Четыре главные причины разрывов: 1) Отсрочка платежа покупателям превышает отсрочку от поставщиков; 2) Заморозка денег в неликвидных складских запасах; 3) Хаотичный вывод оборотных денег собственником на личные траты; 4) Отсутствие платежного календаря. Профилактика: предоплата от 50%, синхронизация сроков оплат, факторинг/овердрафт и резервный фонд.',
          ],
          en: [
            'Consider a classic cash trap: a workshop signs a profitable 100M UZS contract on the 1st with a 30M UZS deposit (70M UZS due upon delivery on the 25th). Yet raw materials (55M UZS) and rent (15M UZS) must be paid in cash by the 10th. Despite +20M UZS contract profit, the company hits a −40M UZS Cash Deficit on the 10th!',
            'Four primary culprits trigger cash gaps: (1) Granting long customer credit while paying suppliers upfront; (2) Overstocking slow-moving inventory; (3) Founders withdrawing working capital as personal spending; and (4) Operating without a weekly Payment Calendar. Solutions: require ≥50% customer deposits, negotiate supplier credit terms, maintain a 2-month cash reserve, and isolate client advances.',
          ],
        },
        highlightTerms: ['cash-gap'],
      },
      {
        id: 'm11-s3',
        title: {
          uz: '11.3. Debitorlik va kreditorlik qarzdorligi boshqaruvi',
          ru: '11.3. Управление оборотным капиталом: дебиторка и кредиторка',
          en: '11.3. Working Capital Mastery: Accounts Receivable & Payable',
        },
        paragraphs: {
          uz: [
            'Debitorlik qarzdorligi (AR) — bu aslida sizning mijozlarga bepul (foizsiz) berib qo‘ygan pulingizdir. Agar debitorlik muddati cho‘zilib ketsa, inflyatsiya pul qadrini yemiradi va umidsiz qarz (qaytmaslik) xavfi ortadi. Har bir mijoz uchun kredit limiti, aniq shartnoma muddati va avtomatik eslatma tizimi bo‘lishi shart.',
            'Kreditorlik qarzdorligi (AP) — yetkazib beruvchilar oldidagi majburiyatingiz. Ishonchli hamkor sifatida o‘z vaqtida to‘lab, 15–30 kunlik tovar nasiyasi olish — biznes uchun eng arzon (0% foizli) aylanma moliyalashtirish manbaidir; biroq muddatni buzish penya va tovar uzilishiga olib keladi.',
          ],
          ru: [
            'Дебиторская задолженность (AR) — ваши деньги, временно находящиеся в чужом обороте. Просроченная дебиторка обесценивается инфляцией и требует жесткого регламента: лимит отгрузки в долг на одного контрагента, напоминания за 3 дня до срока и скидка 2% за 100% предоплату.',
            'Кредиторская задолженность (AP) при соблюдении договорных сроков служит бесплатным товарным кредитом от поставщиков, но допускать просрочку по налогам, зарплате и ключевым партнерам категорически нельзя.',
          ],
          en: [
            'Accounts Receivable (AR) represents interest-free capital lent to your buyers. Unchecked overdue receivables erode under inflation and starve operations. Enforce credit limits per buyer, send automated reminders 3 days prior to maturity, and offer small 2% early-payment incentives.',
            'Conversely, well-managed Accounts Payable (AP) — negotiating 15–30 day supplier trade credit while paying punctually — provides zero-interest working capital financing without eroding trust.',
          ],
        },
        highlightTerms: ['accounts-receivable', 'accounts-payable', 'working-capital'],
      },
    ],
    diagramType: 'cashflow-cycle',
    diagramTitle: {
      uz: 'Aylanma mablag‘lar va Pul konversiyasi sikli (Xomashyo → Ombor → Nasiya → Pul)',
      ru: 'Цикл конверсии денежных средств (Оборотный капитал в движении)',
      en: 'Working Capital & The Cash Conversion Cycle',
    },
    diagramNote: {
      uz: 'Pul omborda va debitorlikda qancha kam kun ushlanib qolsa, bir yilda aynan o‘sha sarmoya shuncha ko‘p marta aylanib foyda keltiradi.',
      ru: 'Чем короче путь от оплаты сырья до прихода денег от покупателя, тем меньше потребность в кредитах.',
      en: 'Every day shaved off inventory holding and receivable collection unlocks trapped cash.',
    },
    stats: [
      {
        value: { uz: '29%', ru: '29%', en: '29%' },
        label: {
          uz: 'Pul mablag‘i tugab qolishi (kassa uzilishi) sababli faoliyatini to‘xtatgan yosh bizneslar ulushi',
          ru: 'Доля закрывшихся молодых компаний по причине нехватки ликвидности («кончились деньги»)',
          en: 'Share of new businesses failing specifically due to running out of cash',
        },
        subnote: { uz: '2-raqamli global biznes inqirozi omili', ru: 'Вторая по частоте причина банкротств в мире', en: '#2 leading cause of business closure globally' },
        year: 'CB Insights / US Bank tahlili',
        sourceName: { uz: 'Xalqaro kichik biznes likvidlik tadqiqotlari', ru: 'Исследования ликвидности МСБ', en: 'Global SME Liquidity Studies' },
        sourceUrl: 'https://www.cbinsights.com',
      },
      {
        value: { uz: '2–3 oylik FC', ru: '2–3 мес. FC', en: '2–3 Months FC' },
        label: {
          uz: 'Korxona hisobvarag‘ida saqlanishi tavsiya etiladigan minimal "xavfsizlik yostiqchasi" (zaxira fondi)',
          ru: 'Рекомендуемый размер финансовой подушки безопасности бизнеса (в постоянных расходах)',
          en: 'Recommended minimum operating cash reserve buffer (in monthly Fixed Costs)',
        },
        subnote: { uz: 'Fors-major va mavsumiy pasayishda jamoani saqlab qoladi', ru: 'Защита от внезапных сбоев поставок или несезона', en: 'Protects payroll and rent obligations during unexpected shocks' },
        year: 'Korporativ moliya me’yori',
        sourceName: { uz: 'Moliyaviy menejment standarti', ru: 'Стандарт финансового менеджмента', en: 'Corporate Treasury Best Practice' },
        sourceUrl: 'https://cbu.uz',
      },
      {
        value: { uz: '24/7 Tezkor', ru: '24/7 ANOR', en: '24/7 Instant' },
        label: {
          uz: 'Markaziy bankning ANOR tezkor to‘lovlar tizimi orqali banklararo pul o‘tkazmalari rejimi',
          ru: 'Круглосуточная система мгновенных межбанковских платежей ЦБ РУз (ANOR)',
          en: 'Round-the-clock interbank settlement via Central Bank’s ANOR instant payment rail',
        },
        subnote: { uz: 'Dam olish kunlarida ham B2B hisob-kitoblarni uzluksiz yuritish imkoni', ru: 'Ускоряет оборачиваемость денег бизнеса в выходные', en: 'Eliminates weekend settlement delays in B2B cash collection' },
        year: '2025–2026',
        sourceName: { uz: 'O‘zbekiston Respublikasi Markaziy banki (cbu.uz)', ru: 'Центральный банк РУз (cbu.uz)', en: 'Central Bank of Uzbekistan (cbu.uz)' },
        sourceUrl: 'https://cbu.uz',
      },
    ],
    charts: [
      {
        id: 'm11-chart-1',
        type: 'bar',
        title: {
          uz: '6 oylik Pul oqimi misoli: 3-oyda yirik xomashyo xaridi tufayli Kassa defitsiti yuzaga kelishi (mln so‘m)',
          ru: 'Пример 6-месячного плана ДДС с возникновением кассового разрыва в 3-м месяце (млн сумов)',
          en: '6-Month Cash Flow Forecast Illustrating a Month-3 Cash Deficit Trap (M UZS)',
        },
        unit: { uz: 'mln so‘m', ru: 'млн сумов', en: 'M UZS' },
        year: 'Pul oqimi modeli',
        sourceName: { uz: 'Kassa rejalashtirish simulyatsiyasi', ru: 'Модель платежного календаря', en: 'Treasury Cash Flow Simulation' },
        sourceUrl: 'https://cbu.uz',
        seriesLabel: { uz: 'Oy oxiriga pul qoldig‘i', ru: 'Остаток денег на конец месяца', en: 'Ending Cash Balance' },
        data: [
          { name: { uz: '1-oy', ru: '1 мес', en: 'M1' }, value: 18 },
          { name: { uz: '2-oy', ru: '2 мес', en: 'M2' }, value: 26 },
          { name: { uz: '3-oy (Defitsit!)', ru: '3 мес (Разрыв!)', en: 'M3 (Deficit!)' }, value: -14 },
          { name: { uz: '4-oy', ru: '4 мес', en: 'M4' }, value: 12 },
          { name: { uz: '5-oy', ru: '5 мес', en: 'M5' }, value: 31 },
          { name: { uz: '6-oy', ru: '6 мес', en: 'M6' }, value: 49 },
        ],
      },
      {
        id: 'm11-chart-2',
        type: 'pie',
        title: {
          uz: 'Savdo-ishlab chiqarish korxonasida Aylanma mablag‘lar (Working Capital) bog‘lanib qoladigan joylar (%)',
          ru: 'Типичная структура оборотных активов малого торгово-производственного бизнеса (%)',
          en: 'Typical Working Capital Tie-Up in an SME Trading/Manufacturing Firm (%)',
        },
        unit: { uz: '%', ru: '%', en: '%' },
        year: 'Moliya tahlili',
        sourceName: { uz: 'Boshqaruv buxgalteriyasi amaliyoti', ru: 'Практика управленческого учета', en: 'SME Working Capital Benchmark' },
        sourceUrl: 'https://stat.uz',
        seriesLabel: { uz: 'Ulushi (%)', ru: 'Доля (%)', en: 'Share (%)' },
        data: [
          { name: { uz: 'Ombordagi tovar va xomashyo', ru: 'Запасы на складе', en: 'Inventory & Raw Stock' }, value: 48 },
          { name: { uz: 'Debitorlik (nasiyadagi pul)', ru: 'Дебиторская задолженность', en: 'Accounts Receivable' }, value: 37 },
          { name: { uz: 'Hisobraqam va kassadagi pul', ru: 'Свободные деньги на счете', en: 'Liquid Cash & Bank' }, value: 15 },
        ],
      },
    ],
    legalActs: [
      {
        id: 'm11-law-1',
        docType: { uz: 'Qonun', ru: 'Закон РУз', en: 'Law of the RUz' },
        title: {
          uz: '“To‘lovlar va to‘lov tizimlari to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni',
          ru: 'Закон РУз «О платежах и платежных системах»',
          en: 'Law "On Payments and Payment Systems"',
        },
        summary: {
          uz: 'Naqdsiz hisob-kitoblar, to‘lov topshiriqnomalari, to‘lov tashkilotlari (Payme, Click, Uzum Nasiya va b.), elektron pullar va bank hisobvaraqlari orqali o‘tkazmalar tartibini belgilaydi.',
          ru: 'Регулирует безналичные расчеты, работу платежных организаций, эквайринг, исполнение платежных поручений и защиту переводов.',
          en: 'Governs cashless settlements, payment service providers, merchant acquiring, wire transfer execution, and e-money.',
        },
        relevance: {
          uz: 'Korxona pul oqimlarini bank va to‘lov tizimlari orqali qonuniy hamda xavfsiz yuritish asosi.',
          ru: 'Правовая основа ежедневных банковских платежей и интернет-эквайринга бизнеса.',
          en: 'Legal backbone for corporate bank transfers and digital merchant payment processing.',
        },
        keyClauses: {
          uz: [
            'Yuridik shaxslar o‘rtasidagi hisob-kitoblar qonunchilikka muvofiq bank hisobvaraqlari orqali naqdsiz shaklda amalga oshiriladi.',
            'Bank mijozning hisobvarag‘idagi pul mablag‘larini faqat mijoz topshirig‘iga binoan yoki qonunda belgilangan majburiy tartibda (soliq/sud ijrosi) hisobdan chiqarishi mumkin.',
          ],
          ru: [
            'Расчеты между юридическими лицами производятся в безналичном порядке через банковские счета.',
            'Списание средств со счета без распоряжения владельца допускается только в случаях, прямо предусмотренных законом.',
          ],
          en: [
            'Corporate B2B settlements are conducted cashlessly via commercial bank accounts.',
            'Funds cannot be debited from a business account without client authorization except under statutory tax or judicial enforcement orders.',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/4575786',
      },
      {
        id: 'm11-law-2',
        docType: { uz: 'Qonun / Kodeks', ru: 'Закон о неплатежеспособности и ГК РУз', en: 'Law "On Insolvency" & Civil Code Factoring Rules' },
        title: {
          uz: '“To‘lovga qobiliyatsizlik to‘g‘risida”gi Qonun hamda Fuqarolik kodeksining Pul talabnomasidan boshqa shaxs foydasiga voz kechish (Faktoring) normalari',
          ru: 'Закон РУз «О неплатежеспособности» и нормы ГК РУз о финансировании под уступку денежного требования (Факторинг)',
          en: 'Law "On Insolvency" & Civil Code Provisions on Factoring (Receivables Financing)',
        },
        summary: {
          uz: 'Debitorlik qarzdorligini bank/moliya tashkilotiga sotib darhol pul olish (faktoring) imkoniyatini hamda qarzlarni uzoq muddat to‘lay olmaslik (to‘lovga qobiliyatsizlik) oqibatlarini belgilaydi.',
          ru: 'Определяет инструмент факторинга (быстрое получение денег под дебиторскую задолженность) и процедуры финансового оздоровления или банкротства при неплатежеспособности.',
          en: 'Establishes legal mechanisms for Factoring (converting B2B receivables into immediate cash) and governs corporate insolvency.',
        },
        relevance: {
          uz: 'Yirik tarmoqlarga tovar topshirganda 30–60 kun pul kutmasdan faktoring orqali kassa defitsitini yopish usulini beradi.',
          ru: 'Факторинг в Узбекистане активно развивается как легальный способ закрыть кассовый разрыв при поставках с отсрочкой.',
          en: 'Factoring lets Uzbek SMEs eliminate cash gaps when supplying large supermarket chains on 30–60 day credit terms.',
        },
        keyClauses: {
          uz: [
            'Faktoring shartnomasiga ko‘ra moliya agenti tadbirkorga mijozdan olinishi kerak bo‘lgan qarz hisobidan tezkor mablag‘ beradi.',
            'Debitorlik qarzini sud orqali undirishda da’vo muddati (umumiy qoida bo‘yicha 3 yil) o‘tib ketmasligini va solishtirma dalolatnomalar imzolanishini nazorat qilish shart.',
          ],
          ru: [
            'По договору факторинга поставщик получает основную сумму выручки сразу после отгрузки, не дожидаясь окончания отсрочки покупателя.',
            'Регулярно подписывайте акты сверки взаиморасчетов, чтобы не пропустить срок исковой давности (3 года).',
          ],
          en: [
            'Under factoring, a bank advances up to 80–90% of an approved B2B invoice immediately upon delivery.',
            'Sign periodic reconciliation acts with debtors to preserve the 3-year statutory limitation period.',
          ],
        },
        yearNote: '2022–2025 islohotlari bilan',
        lexUrl: 'https://lex.uz/docs/5957612',
      },
    ],
    caseStudy: {
      title: {
        uz: 'Keys: "Poligraf-Print" bosmaxonasida maktab mavsumidagi −45 mln so‘mlik kassa uzilishini bartaraf etish',
        ru: 'Кейс: Как типография «Poligraf-Print» предотвратила кассовый разрыв на −45 млн сумов перед учебным сезоном',
        en: 'Case Study: How "Poligraf-Print" Averted a −45M UZS Pre-Season Cash Deficit',
      },
      scenario: {
        uz: 'Avgust oyida xususiy o‘quv markazlaridan 180 mln so‘mlik o‘quv qo‘llanmalari chop etishga buyurtma tushdi. Buyurtmachilar faqat 20% (36 mln so‘m) oldindan to‘lov berib, qolgan 144 mln so‘mni sentabr o‘rtasida to‘lashni so‘rashdi. Bosmaxona esa avgustning o‘zida 75 mln so‘mlik qog‘oz-bo‘yoq olishi va 26 mln so‘m oylik/ijara to‘lashi kerak edi (boshlang‘ich qoldiq 20 mln + 36 mln avans − 101 mln chiqim = avgustda −45 mln so‘m kassa defitsiti!).',
        ru: 'В августе типография получила заказы от учебных центров на печать пособий на 180 млн сумов с авансом всего 20% (36 млн) и постоплатой в сентябре. При этом уже в августе нужно оплатить бумагу на 75 млн и зарплату/аренду на 26 млн. При остатке на счете 20 млн в августе возникал кассовый разрыв −45 млн сумов!',
        en: 'In August, "Poligraf-Print" won 180M UZS in workbook printing contracts from academies offering just 20% upfront (36M UZS) with balance due mid-September. However, August paper purchases (75M UZS) and payroll/rent (26M UZS) against a 20M UZS starting balance projected a −45M UZS August cash deficit!',
      },
      analysis: {
        uz: 'Rahbar Pul oqimi kalkulyatorida xavfni 3 hafta oldin ko‘rdi va ikki tomonlama muzokara o‘tkazdi: 1) O‘quv markazlariga 3% tezkorlik chegirmasi evaziga oldindan to‘lovni 20% dan 50% ga (90 mln so‘mga) ko‘tardi; 2) Qog‘oz ulgurji yetkazib beruvchisi bilan 75 mln so‘mning yarmini avgustda, yarmini 20-sentabrda to‘lashga kelishdi. Natijada bir so‘m ham kredit olmasdan avgust oyi +46 mln so‘m musbat pul qoldig‘i bilan yopildi!',
        ru: 'Увидев разрыв заранее в таблице Cash Flow, директор применил два инструмента без кредита: 1) Предложил заказчикам бонусную ламинацию обложек при авансе 50% (приток вырос с 36 до 90 млн); 2) Договорился с оптовиком бумаги об оплате 50/50 с отсрочкой на 25 дней. Итог августа: +46 млн сумов на счете вместо кассового провала!',
        en: 'Spotting the gap 3 weeks early in his Cash Flow model, the founder acted on both sides without borrowing: (1) Negotiated 50% upfront deposits (90M UZS) from academies by throwing in free glossy cover lamination; and (2) Split the 75M UZS paper invoice 50/50 on 25-day supplier credit. August closed with a healthy +46M UZS cash balance!',
      },
      numbersBreakdown: {
        uz: [
          'Rejasiz holat (avgust oxiri): 20 mln (qoldiq) + 36 mln (20% avans) − 101 mln (chiqim) = −45 mln so‘m DEFITSIT.',
          'Boshqarilgan holat: 20 mln + 90 mln (50% avans) − 63,5 mln (50% qog‘oz + oylik/ijara) = +46,5 mln so‘m MUSBAT qoldiq.',
          'Sentabrda qolgan 90 mln so‘m tushib, qog‘ozning ikkinchi yarmi (37,5 mln) bemalol yopildi.',
        ],
        ru: [
          'Без управления ДДС (август): 20 + 36 − 101 = −45 млн сумов (нечем платить зарплату и бумагу).',
          'После работы с авансом и отсрочкой: 20 + 90 − 63,5 = +46,5 млн сумов на счете.',
          'В сентябре пришли оставшиеся 90 млн от клиентов и спокойно закрыли 37,5 млн поставщику бумаги.',
        ],
        en: [
          'Unmanaged August Cash: 20M + 36M − 101M = −45M UZS insolvency gap.',
          'Restructured August Cash: 20M + 90M (50% deposit) − 63.5M (split paper + payroll) = +46.5M UZS surplus.',
          'September collections (90M UZS) comfortably cleared the remaining 37.5M UZS supplier payable.',
        ],
      },
      challengeQuestion: {
        uz: 'Korxona oy boshida 15 mln so‘m pulga ega edi. Oy davomida mijozlarga 80 mln so‘mlik tovar jo‘natdi, lekin shundan faqat 50 mln so‘mi hisobvaraqqa kelib tushdi (30 mln nasiya). Oy ichida xomashyo, ijara va oylikka 58 mln so‘m to‘landi. Oy oxirida hisobraqamda qancha pul qoldi?',
        ru: 'На начало месяца на счете было 15 млн сумов. Отгружено товара на 80 млн, из которых реально оплачено 50 млн (30 млн — дебиторка). Фактические выплаты за месяц составили 58 млн сумов. Каков остаток денег на конец месяца?',
        en: 'Starting cash is 15M UZS. Goods worth 80M UZS are shipped, with 50M UZS collected in cash (30M UZS on credit). Total cash outflows paid equal 58M UZS. What is the ending cash balance?',
      },
      challengeOptions: {
        uz: [
          '37 mln so‘m (15 + 80 − 58)',
          '7 mln so‘m (15 mln qoldiq + 50 mln haqiqiy kirim − 58 mln haqiqiy chiqim = 7 mln so‘m)',
          '22 mln so‘m',
        ],
        ru: [
          '37 млн сумов',
          '7 млн сумов (15 млн нач. остаток + 50 млн реальный приход − 58 млн реальный расход = 7 млн сумов)',
          '−8 млн сумов',
        ],
        en: [
          '37M UZS',
          '7M UZS (15M opening cash + 50M actual cash inflow − 58M cash outflow = 7M UZS)',
          '22M UZS',
        ],
      },
      correctOptionIndex: 1,
      challengeExplanation: {
        uz: 'Pul oqimi (Cash Flow) hisobotida jo‘natilgan 80 mln emas, faqat bankka kelib tushgan 50 mln so‘m hisobga olinadi: 15 + 50 − 58 = 7 mln so‘m.',
        ru: 'В Cash Flow учитываются только живые поступления (50 млн), а не сумма накладных (80 млн): 15 + 50 − 58 = 7 млн сумов.',
        en: 'Cash Flow counts only settled cash receipts (50M UZS), never uncollected receivables: 15M + 50M − 58M = 7M UZS.',
      },
    },
    calculatorId: 'cashflow',
    keyTakeaways: {
      uz: [
        'Hisobraqamdagi aylanma pul — ta’sischining shaxsiy hamyoni emas: mijoz avansini tovar yetkazilmaguncha dividend sifatida ishlatmang.',
        'Kassa defitsiti kutilmaganda kelmaydi — u To‘lov taqvimi (Payment Calendar) yuritilmagani uchun ko‘rinmay qoladi.',
        'Sog‘lom tizim qoidasi: mijozdan pul olish muddati yetkazib beruvchiga pul to‘lash muddatidan qisqaroq bo‘lishi kerak.',
        'Omborda chang bosib yotgan ortiqcha tovar — muzlatib qo‘yilgan naqd puldir.',
        'Har oyda sof foydaning 10–15% ini korxona xavfsizlik zaxira fondiga ajratib boring.',
      ],
      ru: [
        'Никогда не смешивайте личный кошелек собственника и оборотную кассу предприятия.',
        'Ведите платежный календарь минимум на 4–6 недель вперед, чтобы видеть кассовые ямы заранее.',
        'Управляйте дебиторкой системно: лимиты долга, акты сверки и мотивация клиентов за предоплату.',
        'Избыточный неликвидный товар на складе вымывает живые деньги из бизнеса не хуже убытков.',
        'Положительный операционный денежный поток (OCF > 0) — главный индикатор жизнеспособности компании.',
      ],
      en: [
        'Never treat customer pre-payments in the company account as personal founder profit.',
        'Maintain a rolling 4-to-8 week Payment Calendar so liquidity bottlenecks surface early enough to negotiate terms.',
        'Keep receivable collection days shorter than supplier payable days whenever possible.',
        'Slow-moving warehouse inventory is frozen cash starving your operations.',
        'Positive Operating Cash Flow (OCF > 0) backed by a 2–3 month reserve buffer keeps enterprises resilient.',
      ],
    },
  },
  {
    id: 'm12',
    number: 12,
    code: 'M12',
    hours: 2,
    readMinutes: 16,
    iconName: 'TrendingUp',
    roadmapStage: { uz: 'Foyda va Rentabellik', ru: 'Прибыль и ROI', en: 'P&L & Profitability' },
    title: {
      uz: 'Biznesda foyda va zarar tahlili hamda rentabellik ko‘rsatkichlari',
      ru: 'Анализ прибылей и убытков (P&L) и показатели рентабельности',
      en: 'Profit & Loss (P&L) Analysis and Return Ratios (ROI, ROE, ROS)',
    },
    shortDesc: {
      uz: 'P&L hisoboti (Yalpi, Operatsion va Sof foyda), Cash Flow va Foyda o‘rtasidagi tub farq hamda ROI, ROE, ROS rentabellik tahlili.',
      ru: 'Отчет о прибылях и убытках P&L (валовая, операционная и чистая прибыль), разница между прибылью и Cash Flow, расчет ROI, ROE и ROS.',
      en: 'Mastering the P&L Statement (Gross, Operating, Net Profit), reconciling Cash Flow vs. Accrual Profit, and computing ROI, ROE, and ROS.',
    },
    summary: {
      uz: 'Kassada pul ko‘p bo‘lishi har doim ham biznes foyda bilan ishlayotganini bildirmaydi (balki bu mijozlarning hali bajarilmagan avanslari yoki to‘lanmagan soliqlaridir!). Ushbu mavzuda P&L hisoboti pog‘onalari, Cash Flow va Profit farqi hamda sarmoya bank omonatidan foydaliroq ishlayotganini (ROI, ROE, ROS) tekshirish o‘rgatiladi.',
      ru: 'Наличие денег в кассе еще не означает, что бизнес прибылен — это могут быть неотработанные авансы клиентов. В модуле разбирается структура отчета P&L, отличие метода начисления от кассового метода и оценка эффективности капитала через ROI, ROE и ROS.',
      en: 'A full cash drawer does not prove profitability if those funds represent unearned customer deposits or unpaid supplier bills. This module dissects the multi-step P&L statement, contrasts Accrual Profit with Cash Flow, and evaluates capital efficiency via ROI, ROE, and ROS.',
    },
    learningObjectives: {
      uz: [
        'Foyda va zararlar to‘g‘risidagi hisobotni (P&L) pog‘onama-pog‘ona tuzish: Tushum → Tannarx → Yalpi foyda → Operatsion xarajatlar (OPEX) → Operatsion foyda (EBIT) → Foiz va Soliq → Sof foyda.',
        'Hisoblash usulidagi Foyda (Accrual Profit) bilan Kassa usulidagi Pul oqimi (Cash Flow) o‘rtasidagi 4 ta asosiy farqni tushuntirish.',
        'ROI (Investitsiya rentabelligi), ROE (Xususiy kapital rentabelligi) va ROS (Sotuv rentabelligi / sof marja) ko‘rsatkichlarini hisoblash.',
        'Biznesning ROE ko‘rsatkichini O‘zbekiston banklaridagi xavfsiz depozit foizlari bilan solishtirib investitsion xulosa chiqarish.',
      ],
      ru: [
        'Составлять отчет P&L по уровням прибыли: Выручка → Себестоимость → Валовая прибыль → OPEX → Операционная прибыль (EBIT) → Чистая прибыль.',
        'Объяснять разницу между бухгалтерской прибылью (метод начисления) и денежным потоком (кассовый метод) на примере авансов, отсрочек и амортизации.',
        'Рассчитывать ключевые коэффициенты рентабельности: ROI, ROE и ROS.',
        'Оценивать экономическую целесообразность бизнеса путем сравнения ROE с доходностью банковского депозита.',
      ],
      en: [
        'Build a multi-tier P&L Statement from Net Revenue down through COGS, Gross Profit, OPEX, EBIT, Interest/Tax, and Net Profit.',
        'Reconcile why Accrual Profit differs from Cash Flow across pre-payments, credit sales, inventory purchases, and depreciation.',
        'Compute and interpret ROI (Return on Investment), ROE (Return on Equity), and ROS (Return on Sales).',
        'Benchmark venture ROE against risk-free UZS bank deposit rates to judge true economic value creation.',
      ],
    },
    sections: [
      {
        id: 'm12-s1',
        title: {
          uz: '12.1. P&L (Foyda va zararlar hisoboti): foydaning 3 ta qavati',
          ru: '12.1. Отчет P&L (ОПиУ): валовая, операционная и чистая прибыль',
          en: '12.1. Multi-Step P&L Architecture: Gross, Operating & Net Profit',
        },
        paragraphs: {
          uz: [
            'P&L hisoboti ma’lum bir davrda (oy, chorak, yil) korxona o‘z mahsulotini mijozga haqiqatda topshirgan (majburiyatni bajargan) hajm bo‘yicha qancha sof boylik yaratganini ko‘rsatadi:',
            '1) Yalpi foyda (Gross Profit) = Sotuv tushumi − Sotilgan mahsulot tannarxi (COGS). Bu ko‘rsatkich ishlab chiqarish yoki savdo ustamasining o‘zi sog‘lomligini bildiradi.\n2) Operatsion foyda (EBIT / EBITDA) = Yalpi foyda − Operatsion davr xarajatlari (OPEX: ofis/do‘kon ijarasi, marketing, ma’muriyat maoshi, kommunal). Bu biznesning kundalik asosiy faoliyati qanchalik samarali ekanini ko‘rsatadi.\n3) Sof foyda (Net Profit) = Operatsion foyda − Eskirish (amortizatsiya) − Bank krediti foizlari − Soliqlar. Faqatgina mana shu eng pastki satrdagi ("Bottom line") Sof foydadan dividend olish yoki rivojlanishga qayta investitsiya qilish mumkin!',
          ],
          ru: [
            'Отчет P&L строится по методу начисления (выручка признается в момент фактической отгрузки товара или оказания услуги, а не просто прихода аванса) и раскрывает три уровня прибыли:',
            '1) Валовая прибыль (Gross Profit) = Выручка − Прямая себестоимость (COGS).\n2) Операционная прибыль (EBIT) = Валовая прибыль − Операционные расходы (OPEX: аренда, реклама, оклады управления).\n3) Чистая прибыль (Net Profit) = Операционная прибыль − Проценты по кредитам − Налоги. Только чистая прибыль является реальным заработком собственников, из которого можно безопасно распределять дивиденды.',
          ],
          en: [
            'Prepared on an accrual basis (recognizing revenue when goods/services are actually delivered), the P&L cascades through three diagnostic profit tiers:',
            '(1) Gross Profit = Net Revenue − Cost of Goods Sold (COGS), isolating unit production/merchandising health;\n(2) Operating Profit (EBIT) = Gross Profit − Operating Expenses (OPEX: rent, marketing, admin salaries), measuring core operational execution; and\n(3) Net Profit = EBIT − Loan Interest − Taxes — the true "bottom line" available for founder dividends or retained reinvestment.',
          ],
        },
        highlightTerms: ['pnl', 'gross-profit', 'operating-profit', 'net-profit', 'ebitda'],
      },
      {
        id: 'm12-s2',
        title: {
          uz: '12.2. Pul oqimi (Cash Flow) va Foyda (Profit) o‘rtasidagi 4 ta tub farq',
          ru: '12.2. Четыре главных отличия Денежного потока (Cash Flow) от Прибыли (P&L)',
          en: '12.2. Four Crucial Differences Between Cash Flow and Profit',
        },
        paragraphs: {
          uz: [
            'Talabalar va tadbirkorlar eng ko‘p adashtiradigan masala — nima uchun hisobraqamdagi pul qoldig‘i P&L dagi sof foydaga teng emas? Mana 4 ta aniq farq:',
          ],
          ru: [
            'Почему остаток денег на счете почти никогда не совпадает с чистой прибылью в отчете P&L? Разберем четыре классические ситуации:',
          ],
          en: [
            'Why does your ending bank balance almost never match your P&L Net Profit? Four accounting mechanics explain the divergence:',
          ],
        },
        comparisonTable: {
          headers: {
            uz: ['Xo‘jalik operatsiyasi', 'Pul oqimida (Cash Flow) qanday ko‘rinadi?', 'Foyda hisobotida (P&L) qanday ko‘rinadi?'],
            ru: ['Хозяйственная операция', 'В отчете Cash Flow (ДДС)', 'В отчете P&L (Прибыль)'],
            en: ['Business Transaction', 'Impact on Cash Flow Statement', 'Impact on P&L Statement'],
          },
          rows: {
            uz: [
              ['Mijoz 6 oylik kurs uchun 3 mln so‘m oldindan to‘ladi', 'Bugunoq +3 000 000 so‘m kirim', 'Har oyda dars o‘tilgan sari 500 000 so‘mdan tushum tan olinadi'],
              ['60 mln so‘mlik uskuna olindi (xizmat muddati 5 yil = 60 oy)', 'Xarid oyida −60 000 000 so‘m investitsion chiqim', 'Birdaniga xarajat bo‘lmaydi — har oyda 1 mln so‘mdan amortizatsiya chegiriladi'],
              ['Bankdan 100 mln so‘m kredit olindi va keyin tanasi qaytarildi', '+100 mln kirim / tanasini qaytarishda −chiqim', 'Kredit tanasi daromad ham, xarajat ham EMAS; P&L da faqat bank FOIZI xarajat bo‘ladi'],
              ['Omborga 50 mln so‘mlik tovar xarid qilindi (hali sotilmadi)', '−50 000 000 so‘m operatsion chiqim', 'Tovar mijozga sotilmaguncha P&L da xarajat (COGS) sifatida yozilmaydi'],
            ],
            ru: [
              ['Клиент внес предоплату 3 млн сумов за 6 месяцев обучения', '+3 000 000 сумов приход сразу в день оплаты', 'Выручка признается по 500 000 сумов в месяц по мере проведения занятий'],
              ['Куплен станок за 60 млн сумов (срок службы 60 мес.)', '−60 000 000 сумов инвестиционный отток сразу', 'Списывается на расходы плавно через амортизацию по 1 млн сумов/мес.'],
              ['Получен кредит 100 млн сумов и возвращается основной долг', '+100 млн приход / −выплата тела долга', 'Тело кредита НЕ влияет на P&L — в расходы идут только начисленные ПРОЦЕНТЫ'],
              ['Закуплен товар на склад на 50 млн сумов (лежит на полке)', '−50 000 000 сумов отток денег', 'Расход (себестоимость) появится в P&L только в момент продажи товара'],
            ],
            en: [
              ['Student pre-pays 3M UZS upfront for a 6-month course', '+3,000,000 UZS immediate cash inflow', 'Recognized evenly at 500,000 UZS/month as classes are delivered'],
              ['Purchase 60M UZS machine (5-year / 60-month useful life)', '−60,000,000 UZS investing cash outflow Day 1', 'Expensed gradually at 1,000,000 UZS/month via Depreciation'],
              ['Receive & repay 100M UZS bank loan principal', '+100M inflow / −principal outflows', 'Loan principal is NEITHER revenue nor expense; only Interest hits P&L'],
              ['Buy 50M UZS stock sitting unsold in warehouse', '−50,000,000 UZS cash outflow', 'Zero P&L expense until those specific units are sold (COGS)'],
            ],
          },
        },
      },
      {
        id: 'm12-s3',
        title: {
          uz: '12.3. Rentabellik ko‘rsatkichlari: ROI, ROE va ROS',
          ru: '12.3. Коэффициенты рентабельности: ROI, ROE и ROS',
          en: '12.3. Profitability & Return Ratios: ROI, ROE & ROS',
        },
        paragraphs: {
          uz: [
            '“Oyiga 20 mln so‘m sof foyda oldim” degan raqam sarmoya hajmisiz hech narsani anglatmaydi: agar bu foydani 50 mln so‘m sarmoya bilan topsangiz — ajoyib natija; agar 5 milliard so‘m bino va uskuna tikib oyiga 20 mln topsangiz — pulingiz bank omonatiga qaraganda 4 barobar yomon ishlayapti! Samaradorlikni 3 ta foiz ko‘rsatkichi o‘lchaydi:',
            '• ROS (Return on Sales — Sotuv rentabelligi) = (Sof foyda ÷ Sotuv tushumi) × 100%. Har 100 so‘mlik savdodan necha so‘m sof foyda qolishini ko‘rsatadi.\n• ROI (Return on Investment — Investitsiya rentabelligi) = (Loyiha sof foydasi ÷ Jami kiritilgan investitsiya) × 100%. Shuningdek O‘zini oqlash muddati (Payback Period) = Investitsiya ÷ Oylik/Yillik sof foyda.\n• ROE (Return on Equity — Xususiy kapital rentabelligi) = (Yillik sof foyda ÷ Ta’sischilarning shaxsiy kiritgan kapitali) × 100%. O‘zbekistonda milliy valyutadagi bank omonatlari yillik ~18–21% daromad berishini hisobga olsak, tadbirkorlik tavakkalchiligini oqlash uchun kichik biznesning yillik ROE ko‘rsatkichi kamida 30–35% dan yuqori bo‘lishi mantiqan zarur.',
          ],
          ru: [
            'Абсолютная сумма прибыли ничего не говорит об эффективности без привязки к вложенному капиталу. Для оценки используют три показателя рентабельности:',
            '• ROS (Рентабельность продаж) = (Чистая прибыль ÷ Выручка) × 100% — сколько тийинов чистой прибыли приносит каждый сум выручки.\n• ROI (Окупаемость инвестиций) = (Прибыль от вложения ÷ Сумма инвестиций) × 100%.\n• ROE (Рентабельность собственного капитала) = (Годовая чистая прибыль ÷ Собственный капитал учредителей) × 100%. С учетом ставок по сумовым банковским вкладам в РУз (~18–21% годовых), бизнес должен обеспечивать ROE существенно выше депозита (от 30–35%+ годовых) как премию за предпринимательский риск.',
          ],
          en: [
            'Absolute profit numbers are meaningless without knowing how much capital was tied up to earn them. Three core ratios benchmark efficiency:',
            '• ROS (Return on Sales / Net Profit Margin) = (Net Profit ÷ Revenue) × 100% — how many UZS of bottom-line profit remain per 100 UZS sold.\n• ROI (Return on Investment) = (Net Gain ÷ Total Investment Cost) × 100%, alongside Payback Period = Investment ÷ Annual Net Cash Flow.\n• ROE (Return on Equity) = (Annual Net Profit ÷ Founders’ Equity Invested) × 100%. Given risk-free UZS bank deposits yielding ~18–21% per annum, an active Uzbek business should target an ROE above 30–35%+ to reward entrepreneurial risk.',
          ],
        },
        highlightTerms: ['roi', 'roe-ros'],
      },
    ],
    diagramType: 'profit-waterfall',
    diagramTitle: {
      uz: 'P&L "Sharshara" (Waterfall) sxemasi: Tushumdan Sof foydagacha bo‘lgan yo‘l',
      ru: 'Каскадная схема P&L (Waterfall): как выручка превращается в чистую прибыль',
      en: 'P&L Waterfall Cascade: From Top-Line Revenue to Bottom-Line Net Profit',
    },
    diagramNote: {
      uz: 'Pastdagi interaktiv P&L va ROI/ROE/ROS kalkulyatorida korxona rentabelligini hisoblab ko‘ring.',
      ru: 'Используйте встроенный калькулятор P&L и ROI/ROE/ROS ниже для расчета показателей вашего бизнеса.',
      en: 'Model your own revenue, COGS, OPEX, and equity capital in the interactive P&L + ROI calculator below.',
    },
    stats: [
      {
        value: { uz: '18% – 22%', ru: '18% – 22%', en: '18% – 22%' },
        label: {
          uz: 'O‘zbekiston tijorat banklarida so‘mdagi muddatli omonatlarning o‘rtacha yillik foiz daromadliligi',
          ru: 'Средняя доходность срочных банковских вкладов в национальной валюте в РУз (альтернативная доходность)',
          en: 'Typical annual yield on UZS term bank deposits (risk-free opportunity cost benchmark)',
        },
        subnote: { uz: 'Biznes ROE ko‘rsatkichi shu passiv daromaddan sezilarli yuqori bo‘lishi shart', ru: 'Бизнес с ROE ниже ставки вклада экономически неэффективен', en: 'Business ROE must comfortably beat deposit yields to justify risk' },
        year: '2025–2026',
        sourceName: { uz: 'Markaziy bank depozit statistikasi (cbu.uz)', ru: 'Статистика ставок ЦБ РУз (cbu.uz)', en: 'Central Bank Deposit Rate Bulletin (cbu.uz)' },
        sourceUrl: 'https://cbu.uz',
      },
      {
        value: { uz: '8% – 25%', ru: '8% – 25%', en: '8% – 25%' },
        label: {
          uz: 'Chakana savdo (8–12%), ishlab chiqarish (12–18%) va xizmat/IT (20–30%+) sohalarida me’yoriy ROS (sof marja)',
          ru: 'Ориентиры чистой рентабельности продаж (ROS): ритейл (8–12%), производство (12–18%), услуги/IT (20–30%+)',
          en: 'Healthy Net Profit Margin (ROS) ranges: Retail (8–12%), Manufacturing (12–18%), Services/SaaS (20–30%+)',
        },
        subnote: { uz: 'Past ROS yuqori tovar aylanishi tezligi bilan kompensatsiya qilinadi', ru: 'Низкий ROS в торговле компенсируется быстрой оборачиваемостью', en: 'Lower retail ROS is offset by rapid inventory turnover' },
        year: 'Tarmoq etaloni',
        sourceName: { uz: 'Tarmoq moliyaviy tahlili ko‘rsatkichlari', ru: 'Отраслевые финансовые ориентиры', en: 'Sectoral Financial Benchmarks' },
        sourceUrl: 'https://stat.uz',
      },
      {
        value: { uz: '5% JShDS', ru: '5% налог', en: '5% Dividend Tax' },
        label: {
          uz: 'O‘zbekiston rezident ta’sischilariga sof foydadan dividend to‘lashda ushlab qolinadigan soliq stavkasi',
          ru: 'Базовая ставка налога на дивиденды при распределении чистой прибыли учредителям — резидентам РУз',
          en: 'Standard dividend withholding tax rate when distributing Net Profit to resident founders in Uzbekistan',
        },
        subnote: { uz: 'Sof foydani qonuniy shaxsiy daromadga aylantirish stavkasi', ru: 'Законный вывод прибыли собственником после уплаты налогов компании', en: 'Low statutory tax rate on lawful profit distribution' },
        year: '2025–2026',
        sourceName: { uz: 'O‘zbekiston Respublikasi Soliq kodeksi', ru: 'Налоговый кодекс РУз', en: 'Tax Code of Uzbekistan' },
        sourceUrl: 'https://lex.uz/docs/4674902',
      },
    ],
    charts: [
      {
        id: 'm12-chart-1',
        type: 'bar',
        title: {
          uz: 'Oylik P&L misoli: 200 mln so‘m tushum qanday qilib 36 mln so‘m sof foydaga aylanadi (mln so‘m)',
          ru: 'Декомпозиция месячного отчета P&L предприятия с выручкой 200 млн сумов (млн сумов)',
          en: 'Monthly P&L Breakdown: From 200M UZS Revenue to 36M UZS Net Profit (M UZS)',
        },
        unit: { uz: 'mln so‘m', ru: 'млн сумов', en: 'M UZS' },
        year: 'P&L Model',
        sourceName: { uz: 'O‘quv korxonasi moliyaviy hisoboti', ru: 'Учебный отчет ОПиУ', en: 'Sample SME Income Statement' },
        sourceUrl: 'https://stat.uz',
        seriesLabel: { uz: 'Ko‘rsatkich (mln so‘m)', ru: 'Сумма (млн сумов)', en: 'Amount (M UZS)' },
        data: [
          { name: { uz: 'Tushum (Revenue)', ru: 'Выручка', en: 'Net Revenue' }, value: 200 },
          { name: { uz: 'Yalpi foyda (GP)', ru: 'Валовая прибыль', en: 'Gross Profit' }, value: 90 },
          { name: { uz: 'Operatsion foyda (EBIT)', ru: 'Операц. прибыль', en: 'Operating Profit' }, value: 46 },
          { name: { uz: 'Sof foyda (Net Profit)', ru: 'Чистая прибыль', en: 'Net Profit' }, value: 36 },
        ],
      },
      {
        id: 'm12-chart-2',
        type: 'bar',
        title: {
          uz: 'Sarmoya samaradorligini solishtirish: Yillik ROE (%) ko‘rsatkichlari',
          ru: 'Сравнение годовой доходности вложений: Банковский вклад против ROE малого бизнеса (%)',
          en: 'Annual Return Comparison: Risk-Free UZS Bank Deposit vs. Active Business ROE (%)',
        },
        unit: { uz: '% yillik', ru: '% годовых', en: '% annual' },
        year: '2025–2026',
        sourceName: { uz: 'Investitsion tahlil taqqoslovi', ru: 'Инвестиционный анализ', en: 'Capital Allocation Benchmark' },
        sourceUrl: 'https://cbu.uz',
        seriesLabel: { uz: 'Yillik daromadlilik (%)', ru: 'Доходность (% годовых)', en: 'Annual Return (%)' },
        data: [
          { name: { uz: 'Inflyatsiya', ru: 'Инфляция', en: 'Inflation' }, value: 6.4 },
          { name: { uz: 'Sust biznes (samarsiz)', ru: 'Слабый бизнес', en: 'Underperforming Biz' }, value: 14.0 },
          { name: { uz: 'Bank so‘m omonati', ru: 'Банковский депозит', en: 'UZS Bank Deposit' }, value: 20.0 },
          { name: { uz: 'Samarali kichik biznes', ru: 'Успешный малый бизнес', en: 'Healthy SME ROE' }, value: 42.0 },
        ],
      },
    ],
    legalActs: [
      {
        id: 'm12-law-1',
        docType: { uz: 'Milliy standart (BHMS / MHXS)', ru: 'НСБУ и МСФО в Узбекистане', en: 'National Accounting Standards & IFRS' },
        title: {
          uz: '“Moliyaviy hisobot shakllari va ularni to‘ldirish qoidalari” (Moliyaviy natijalar to‘g‘risidagi hisobot — 2-shakl) hamda MHXSga (IFRS) o‘tish qarorlari',
          ru: 'Правила заполнения форм финансовой отчетности (Форма № 2 «Отчет о финансовых результатах») и переход на МСФО',
          en: 'Financial Reporting Rules (Form No. 2 "Statement of Financial Results") & IFRS Adoption Regulations',
        },
        summary: {
          uz: 'Rasmiy buxgalteriyada korxonaning yillik moliyaviy natijalari (sof tushum, tannarx, yalpi foyda, davr xarajatlari va sof foyda) aks ettiriladigan 2-sonli shakl standartini belgilaydi.',
          ru: 'Утверждает структуру официального Отчета о финансовых результатах (аналог P&L в национальной отчетности), сдаваемого юридическими лицами.',
          en: 'Establishes the statutory structure of Uzbekistan’s official Income Statement (Form No. 2) filed by legal entities.',
        },
        relevance: {
          uz: 'Bank krediti olishda va investor tekshiruvida (Due Diligence) so‘raladigan 1- va 2-shakl moliyaviy hisobotlarni tushunish uchun.',
          ru: 'Банки и инвесторы оценивают платежеспособность бизнеса именно по Форме № 1 (Баланс) и Форме № 2 (ОФР/P&L).',
          en: 'Commercial banks and investors audit Form No. 1 (Balance Sheet) and Form No. 2 (P&L) during underwriting.',
        },
        keyClauses: {
          uz: [
            'Daromadlar va xarajatlar pul qachon to‘langanidan qat’i nazar, ular yuz bergan hisobot davrida (hisoblash tamoyili bo‘yicha) tan olinadi.',
          ],
          ru: [
            'Принцип начисления (Accrual basis): доходы и расходы отражаются в том периоде, к которому они относятся экономически.',
          ],
          en: [
            'Accrual accounting rule: revenues and matching expenses are recorded in the period earned or incurred, regardless of cash settlement date.',
          ],
        },
        yearNote: 'Amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/640284',
      },
      {
        id: 'm12-law-2',
        docType: { uz: 'Qonun va Soliq kodeksi', ru: 'Закон об ООО (ст. 25–26) и Налоговый кодекс РУз', en: 'Law "On LLCs" (Arts. 25–26) & Tax Code Dividend Rules' },
        title: {
          uz: 'MChJ sof foydasini ishtirokchilar o‘rtasida taqsimlash (dividend to‘lash) tartibi va cheklovlari',
          ru: 'Порядок распределения чистой прибыли ООО между участниками и налогообложение дивидендов',
          en: 'Statutory Rules on Distributing LLC Net Profit (Dividends) & Solvency Restrictions',
        },
        summary: {
          uz: 'Ta’sischilar umumiy yig‘ilishi qarori asosida choraklik, yarim yillik yoki yillik sof foydani ulushlarga mutanosib taqsimlash hamda to‘lovga qobiliyatsizlik belgilari bo‘lganda dividend to‘lashni taqiqlashni belgilaydi.',
          ru: 'Разрешает распределять чистую прибыль (ежеквартально, раз в полгода или раз в год) пропорционально долям после уплаты налогов и запрещает вывод дивидендов при признаках банкротства.',
          en: 'Governs quarterly/annual dividend distributions from audited Net Profit and prohibits payouts if the company faces insolvency.',
        },
        relevance: {
          uz: 'Biznesdan shaxsiy daromadni "kassadan naqd olib ketish" bilan emas, qonuniy 5% dividend solig‘ini to‘lab olish tartibini o‘rgatadi.',
          ru: 'Показывает, как собственнику легально получать личный доход из чистой прибыли ООО под 5% налога на дивиденды.',
          en: 'Clarifies how founders legally withdraw personal wealth from corporate Net Profit via the 5% resident dividend tax.',
        },
        keyClauses: {
          uz: [
            'Ustav fondi to‘liq shakllantirilmaguncha yoki jamiyat sof aktivlari qiymati ustav fondidan kam bo‘lib qolsa, foydani taqsimlashga yo‘l qo‘yilmaydi.',
            'To‘lov manbaida 5% dividend solig‘i (O‘zbekiston rezidentlari uchun) ushlab qolinib byudjetga o‘tkaziladi.',
          ],
          ru: [
            'Нельзя распределять дивиденды до полной оплаты уставного фонда или при отрицательных чистых активах.',
            'Предприятие выступает налоговым агентом и удерживает 5% налога при перечислении дивидендов учредителю-резиденту.',
          ],
          en: [
            'Dividends cannot be declared until charter capital is paid in full and net assets exceed statutory minimums.',
            'The company withholds a 5% dividend tax at source when paying resident individual shareholders.',
          ],
        },
        yearNote: '2025–2026 amaldagi tahrir',
        lexUrl: 'https://lex.uz/docs/22525',
      },
    ],
    hasDynamicRateWarning: true,
    caseStudy: {
      title: {
        uz: 'Keys: Ikki do‘stning bahsi — qaysi biznes samaraliroq: Avtoyuvish shoxobchasimi yoki Onlayn kiyim brendimi?',
        ru: 'Кейс: Спор двух предпринимателей — где выше рентабельность капитала (ROE и ROS)?',
        en: 'Case Study: Comparing Two Ventures — Car Wash vs. Apparel Brand Through ROS & ROE',
      },
      scenario: {
        uz: 'Sherzod 600 mln so‘m shaxsiy sarmoya tikib 3 boksli avtoyuvish shoxobchasi ochdi: yillik tushumi 480 mln so‘m, barcha xarajat va soliqlardan keyingi yillik sof foydasi — 108 mln so‘m. Uning do‘sti Ulug‘bek esa atigi 150 mln so‘m xususiy kapital bilan mahalliy trikotaj brendi (autsorsing tikuv + marketpleys) boshladi: yillik tushumi 900 mln so‘m, yillik sof foydasi — 90 mln so‘m. Sherzod: "Mening sof foydam ko‘proq (108 mln > 90 mln), demak mening biznesim kuchliroq!" dedi.',
        ru: 'Шерзод вложил 600 млн сумов своих денег в автомойку: годовая выручка — 480 млн сумов, чистая прибыль за год — 108 млн сумов. Его друг Улугбек вложил 150 млн сумов собственного капитала в бренд базовой одежды на маркетплейсах: годовая выручка — 900 млн сумов, чистая прибыль — 90 млн сумов. Шерзод утверждает, что его бизнес успешнее (108 млн > 90 млн).',
        en: 'Sherzod invested 600M UZS of personal equity into a car wash generating 480M UZS annual revenue and 108M UZS Net Profit. His friend Ulugbek invested 150M UZS equity into a local knitwear brand generating 900M UZS annual revenue and 90M UZS Net Profit. Sherzod boasts his business is superior because 108M > 90M.',
      },
      analysis: {
        uz: 'Rentabellik tahlili haqiqatni ochib berdi! Sherzodda ROS (sotuv marjasi) yuqori = 108 / 480 = 22,5%, BIROQ uning xususiy kapitali samaradorligi ROE = (108 ÷ 600) × 100% = yillik atigi 18%! Sherzod 600 mln so‘mni hech qanday bosh og‘riqsiz 20% lik bank omonatiga qo‘ysa yiliga 120 mln so‘m olar edi! Ulug‘bekda esa ROS = 10% bo‘lsa-da, kapital tez aylangani tufayli ROE = (90 ÷ 150) × 100% = yillik 60%! Ulug‘bekning har bir so‘mi 3,3 barobar samaraliroq ishlamoqda.',
        ru: 'Считаем коэффициенты! У Шерзода высокая маржа продаж ROS = 22,5%, НО рентабельность вложенного капитала ROE = (108 ÷ 600) × 100% = всего 18% годовых! На обычном банковском вкладе под 20% его 600 млн принесли бы 120 млн сумов без рисков. У Улугбека ROS скромнее (10%), зато за счет высокой оборачиваемости его ROE = (90 ÷ 150) × 100% = 60% годовых (окупаемость вложений — 1,7 года против 5,5 лет у автомойки)!',
        en: 'Ratio analysis flips the verdict! While Sherzod enjoys a higher ROS (22.5% vs. 10%), his Return on Equity is ROE = (108M ÷ 600M) = just 18% p.a. — underperforming a passive 20% UZS bank deposit (120M UZS)! Ulugbek’s fast-turning asset-light model delivers ROE = (90M ÷ 150M) = 60% p.a., paying back his capital in 1.7 years vs. Sherzod’s 5.5 years.',
      },
      numbersBreakdown: {
        uz: [
          'Sherzod (Avtoyuvish): Kapital = 600 mln | Sof foyda = 108 mln | ROS = 22,5% | ROE = 18% (bank omonatidan past!).',
          'Ulug‘bek (Kiyim brendi): Kapital = 150 mln | Sof foyda = 90 mln | ROS = 10,0% | ROE = 60% (yuqori samaradorlik!).',
          'Xulosa: Sherzod avtoyuvish yonida qo‘shimcha deteyling va qahva-zona ochib bino quvvatini oshirishi shart.',
        ],
        ru: [
          'Шерзод: Капитал = 600 млн | Прибыль = 108 млн | ROS = 22,5% | ROE = 18% (ниже депозита!).',
          'Улугбек: Капитал = 150 млн | Прибыль = 90 млн | ROS = 10,0% | ROE = 60% (отличная отдача!).',
          'Вывод для Шерзода: нужно догружать площадь высокомаржинальным детейлингом и кофе-зоной, поднимая ROE.',
        ],
        en: [
          'Sherzod (Car Wash): Equity = 600M | Net Profit = 108M | ROS = 22.5% | ROE = 18% (below 20% bank deposit).',
          'Ulugbek (Apparel): Equity = 150M | Net Profit = 90M | ROS = 10.0% | ROE = 60% (3.3x capital efficiency).',
          'Strategic takeaway: Sherzod must add detailing bays and a cafe upsell to sweat his 600M UZS asset harder.',
        ],
      },
      challengeQuestion: {
        uz: 'Korxonaning oylik sotuv tushumi 150 mln so‘m, tovar tannarxi (COGS) 85 mln so‘m, operatsion xarajatlar (ijara, maosh, reklama) 35 mln so‘m, kredit foizi va soliqlar 12 mln so‘m bo‘lsa, Yalpi foyda va Sof foyda qanchaga teng?',
        ru: 'Выручка за месяц — 150 млн сумов, прямая себестоимость (COGS) — 85 млн, операционные расходы (OPEX) — 35 млн, проценты и налоги — 12 млн. Чему равны Валовая прибыль и Чистая прибыль?',
        en: 'Monthly Revenue is 150M UZS, COGS is 85M UZS, Operating Expenses (OPEX) are 35M UZS, and Interest + Taxes total 12M UZS. Calculate Gross Profit and Net Profit:',
      },
      challengeOptions: {
        uz: [
          'Yalpi foyda = 65 mln so‘m; Sof foyda = 18 mln so‘m (ROS = 12%)',
          'Yalpi foyda = 115 mln so‘m; Sof foyda = 30 mln so‘m',
          'Yalpi foyda = 150 mln so‘m; Sof foyda = 65 mln so‘m',
        ],
        ru: [
          'Валовая прибыль = 65 млн сумов; Чистая прибыль = 18 млн сумов (ROS = 12%)',
          'Валовая прибыль = 115 млн сумов; Чистая прибыль = 30 млн сумов',
          'Валовая прибыль = 150 млн сумов; Чистая прибыль = 65 млн сумов',
        ],
        en: [
          'Gross Profit = 65M UZS; Net Profit = 18M UZS (ROS = 12%)',
          'Gross Profit = 115M UZS; Net Profit = 30M UZS',
          'Gross Profit = 150M UZS; Net Profit = 65M UZS',
        ],
      },
      correctOptionIndex: 0,
      challengeExplanation: {
        uz: 'Yalpi foyda = 150 − 85 = 65 mln so‘m. Operatsion foyda = 65 − 35 = 30 mln so‘m. Sof foyda = 30 − 12 = 18 mln so‘m (Sotuv rentabelligi ROS = 18 / 150 = 12%).',
        ru: 'Валовая прибыль = 150 − 85 = 65 млн; Операционная прибыль = 65 − 35 = 30 млн; Чистая прибыль = 30 − 12 = 18 млн сумов (ROS = 12%).',
        en: 'Gross Profit = 150M − 85M = 65M UZS; Operating Profit = 65M − 35M = 30M UZS; Net Profit = 30M − 12M = 18M UZS (12% ROS).',
      },
    },
    calculatorId: 'pnl',
    keyTakeaways: {
      uz: [
        'Tadbirkorning ikkita moliyaviy ko‘zi bor: P&L (biznes foydalimi?) va Cash Flow (ertaga to‘lashga pul yetadimi?) — ikkalasi ham har oy yuritilishi shart.',
        'Kreditning asosiy tanasini qaytarish P&L da xarajat hisoblanmaydi (faqat foizi xarajat), lekin Cash Flow dan real pulni olib chiqib ketadi.',
        'Dividend faqat barcha xarajatlar, eskirish va soliqlar to‘langandan keyin qolgan Sof foydadan taqsimlanadi.',
        'ROI va ROE sizning vaqtingiz hamda sarmoyangiz bank omonatidan ko‘ra samaraliroq ishlayotganini tekshiruvchi halol tarozidir.',
        'Kam marjali (past ROS) biznes tez aylanma hisobiga yuqori marjali, ammo sekin biznesdan ko‘ra yuqori ROE berishi mumkin.',
      ],
      ru: [
        'Управляйте бизнесом сразу по двум отчетам: P&L отвечает за рентабельность модели, а Cash Flow — за платежеспособность.',
        'Аванс клиента увеличивает деньги в кассе сегодня, но становится выручкой в P&L только после фактического выполнения обязательств.',
        'Дивиденды собственников выплачиваются строго из чистой прибыли, а не из оборотной выручки.',
        'Всегда сравнивайте годовой ROE бизнеса с доходностью безрискового банковского депозита.',
        'Высокая рентабельность капитала достигается сочетанием контроля издержек (ROS) и высокой скорости оборота активов.',
      ],
      en: [
        'Fly your business with both instruments: P&L proves model profitability while Cash Flow guarantees survival liquidity.',
        'Customer pre-payments boost Cash Flow immediately, yet only become P&L revenue once goods or services are delivered.',
        'Distribute founder dividends strictly out of verified Net Profit, never out of raw top-line cash.',
        'Always benchmark annual ROE against risk-free UZS deposit rates to ensure risk is genuinely rewarded.',
        'Superior ROE combines disciplined cost control (ROS) with rapid asset turnover.',
      ],
    },
  },
];

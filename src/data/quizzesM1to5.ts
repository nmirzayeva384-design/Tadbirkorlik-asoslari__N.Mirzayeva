import { QuizQuestion } from '../types';

export const QUIZ_M1_M5: QuizQuestion[] = [
  // ==================== M1 (10 questions) ====================
  {
    id: 'm1-q1',
    topicId: 'm1',
    question: {
      uz: 'Klassik kichik biznes va innovatsion startap (Startup) o‘rtasidagi eng asosiy farq nimada?',
      ru: 'В чем заключается главное отличие инновационного стартапа от классического малого бизнеса?',
      en: 'What is the primary distinction between a tech Startup and a traditional Small Business?',
    },
    options: {
      uz: [
        'Startap yangi va tez masshtablashadigan (10x o‘sadigan) biznes-model izlaydi, kichik biznes esa tasdiqlangan modelda barqaror foyda oladi',
        'Startap soliq to‘lamaydi, kichik biznes esa soliq to‘laydi',
        'Kichik biznesda faqat 1 kishi ishlaydi, startapda esa kamida 100 kishi bo‘lishi shart',
        'Startap faqat qishloq xo‘jaligida ochiladi',
      ],
      ru: [
        'Стартап ищет воспроизводимую и кратно масштабируемую инновационную бизнес-модель, а малый бизнес работает по проверенной модели ради стабильной прибыли',
        'Стартапы полностью освобождены от любых законов',
        'В малом бизнесе запрещено использовать интернет',
        'Стартап не ставит целью получение дохода в будущем',
      ],
      en: [
        'A startup searches for a repeatable, rapidly scalable model built on innovation, whereas a small business operates a proven model for steady local profit',
        'Startups never register as legal entities',
        'Small businesses are prohibited from using digital marketing',
        'Startups only exist in heavy manufacturing',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Stiv Blank ta’rifiga ko‘ra, startap — tez o‘suvchi va keng ko‘lamda takrorlanuvchi modelni qidirayotgan tuzilma; kichik biznes esa mahalliy bozorda tasdiqlangan model asosida ishlaydi.',
      ru: 'Стартап ориентирован на быстрый кратный рост (масштабирование) за счет инновации, тогда как классический малый бизнес (пекарня, салон) работает по понятной локальной модели.',
      en: 'Startups engineer rapid multi-market scalability, whereas traditional small businesses optimize reliable cash profitability in established categories.',
    },
    hint: {
      uz: 'Masshtablashish (o‘sish tezligi) va innovatsiya mezoniga e’tibor bering.',
      ru: 'Подумайте о масштабируемости и новизне бизнес-модели.',
      en: 'Focus on scalability versus proven local operations.',
    },
  },
  {
    id: 'm1-q2',
    topicId: 'm1',
    question: {
      uz: 'O‘zbekiston qonunchiligidagi “tadbirkor haqligi prezumpsiyasi” tamoyili nimani anglatadi?',
      ru: 'Что означает принцип «приоритета прав предпринимателя» в законодательстве Узбекистана?',
      en: 'What does the statutory "Presumption of Entrepreneur’s Good Faith" guarantee in Uzbekistan?',
    },
    options: {
      uz: [
        'Qonunchilikdagi bartaraf etib bo‘lmaydigan barcha qarama-qarshiliklar va noaniqliklar tadbirkor foydasiga talqin etiladi',
        'Tadbirkor mijoz oldida hech qachon javobgar bo‘lmaydi',
        'Tadbirkor shartnoma shartlarini bir tomonlama bekor qilishi mumkin',
        'Har qanday korxonaga davlat byudjetidan bepul subsidiya beriladi',
      ],
      ru: [
        'Все неустранимые противоречия и неясности актов законодательства толкуются в пользу субъекта предпринимательства',
        'Предприниматель освобождается от выполнения договоров с клиентами',
        'Государственные органы не имеют права принимать отчетность',
        'Любой убыток бизнеса компенсируется из бюджета',
      ],
      en: [
        'All irreconcilable ambiguities and contradictions in regulatory acts must be interpreted in favor of the entrepreneur',
        'Entrepreneurs are exempt from consumer warranty laws',
        'Businesses can unilaterally cancel bank loan repayments',
        'Every company receives automatic state subsidies',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: '“Tadbirkorlik faoliyati erkinligining kafolatlari to‘g‘risida”gi Qonunning 11-moddasiga binoan qonunchilikdagi noaniqliklar tadbirkor foydasiga hal qilinadi.',
      ru: 'Статья 11 Закона РУз «О гарантиях свободы предпринимательской деятельности» закрепляет толкование любых неясностей законодательства в пользу бизнеса.',
      en: 'Article 11 of the Law "On Guarantees of Freedom of Entrepreneurial Activity" mandates resolving statutory ambiguities in favor of the business entity.',
    },
    hint: {
      uz: 'Qonun hujjatlarida ikki xil tushuniladigan norma chiqib qolsa, kimning foydasiga yechiladi?',
      ru: 'Вспомните правило толкования неясных норм закона.',
      en: 'Consider how unclear legal clauses are resolved between agencies and businesses.',
    },
  },
  {
    id: 'm1-q3',
    topicId: 'm1',
    question: {
      uz: 'Tadbirkorlik qiymat zanjirining to‘g‘ri mantiqiy ketma-ketligini ko‘rsating:',
      ru: 'Укажите правильную логическую цепочку формирования жизнеспособного бизнеса:',
      en: 'Select the accurate logical sequence of the Entrepreneurial Value Chain:',
    },
    options: {
      uz: [
        'Muammo → Yechim → Mijoz segmenti → Daromad manbai',
        'Kredit olish → Ofis ijarasi → Logotip chizish → Mijoz qidirish',
        'Reklama → Xodim olish → Muammo o‘ylab topish → Soliq',
        'Uskuna xaridi → Ishlab chiqarish → Omborda saqlash →Chegirma',
      ],
      ru: [
        'Проблема → Решение → Платящий клиент → Источник дохода',
        'Кредит → Аренда дорогого офиса → Поиск идеи → Реклама',
        'Логотип → Сайт → Закупка товара → Поиск кому он нужен',
        'Производство → Склад → Скидки → Списание',
      ],
      en: [
        'Problem → Solution → Target Customer → Revenue Stream',
        'Bank Loan → Office Lease → Logo Design → Customer Search',
        'Factory Build → Warehouse Stock → Heavy Discounting',
        'Hiring Staff → Writing PR → Inventing a Problem',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Barqaror biznes har doim real muammodan boshlanadi, unga mos yechim beradi, aniq mijozga yo‘naltiriladi va tushunarli monetizatsiyaga ega bo‘ladi.',
      ru: 'Устойчивый бизнес стартует с реальной боли, предлагает решение конкретному сегменту и замыкает цикл понятной монетизацией.',
      en: 'Viable ventures originate with validated customer friction, deliver a targeted solution, and capture value via a clear revenue mechanism.',
    },
    hint: {
      uz: 'Avval bino emas, insonlarning qaysi muammosi hal bo‘lishi turadi.',
      ru: 'С чего начинается любая ценность для рынка?',
      en: 'Value creation always begins with an unsolved friction.',
    },
  },
  {
    id: 'm1-q4',
    topicId: 'm1',
    question: {
      uz: 'Ijtimoiy tadbirkorlikning (Social Entrepreneurship) xayriya fondidan asosiy farqi nimada?',
      ru: 'Чем социальное предпринимательство принципиально отличается от благотворительного фонда?',
      en: 'How does Social Entrepreneurship fundamentally differ from a pure charity?',
    },
    options: {
      uz: [
        'Ijtimoiy muammoni hal qilish bilan birga tovar/xizmat sotib o‘zini o‘zi moliyaviy ta’minlaydi va foyda oladi',
        'Faqat bir martalik ehson yig‘ish hisobiga kun ko‘radi',
        'Xodimlariga umuman maosh to‘lamaydi',
        'Sifatga e’tibor bermaydi',
      ],
      ru: [
        'Решает социальную или экологическую проблему через устойчивую самоокупаемую бизнес-модель (продажу товаров/услуг), а не только за счет пожертвований',
        'Существует исключительно на разовые гранты и пожертвования',
        'Не имеет права продавать продукцию на рынке',
        'Работает только с государственными заказами',
      ],
      en: [
        'It solves social or environmental challenges through a self-sustaining commercial revenue model rather than relying solely on donations',
        'It relies 100% on one-time philanthropic gifts',
        'It is legally barred from earning operating surpluses',
        'It employs exclusively unpaid volunteers',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Ijtimoiy korxona — haqiqiy biznes bo‘lib, o‘z savdo tushumi hisobidan yashaydi va ayni paytda ijtimoiy missiyani (masalan, nogironligi bo‘lgan shaxslar bandligini) bajaradi.',
      ru: 'Социальное предприятие зарабатывает выручку на рынке, обеспечивая финансовую независимость своей социальной миссии.',
      en: 'Social enterprises blend commercial self-sufficiency with measurable social or ecological impact.',
    },
    hint: {
      uz: 'Pul manbai ehsonmi yoki tizimli savdo tushumimi?',
      ru: 'Обратите внимание на источник финансовой устойчивости.',
      en: 'Consider how operations are sustainably funded.',
    },
  },
  {
    id: 'm1-q5',
    topicId: 'm1',
    isCalculation: true,
    question: {
      uz: 'Vaziyatli hisob: Talaba kampus yonida sendvich nuqtasi ochmoqchi. Kuniga 85 ta sendvich 22 000 so‘mdan sotilsa, bir oylik (26 o‘quv kuni) yalpi tushum qancha bo‘ladi?',
      ru: 'Расчет: Студент открывает точку сэндвичей у кампуса. При продаже 85 сэндвичей в день по 22 000 сумов какова месячная выручка за 26 учебных дней?',
      en: 'Calculation: A campus sandwich kiosk sells 85 sandwiches/day at 22,000 UZS across 26 academic days/month. What is its monthly gross revenue?',
    },
    options: {
      uz: [
        '48 620 000 so‘m',
        '1 870 000 so‘m',
        '56 100 000 so‘m',
        '38 400 000 so‘m',
      ],
      ru: [
        '48 620 000 сумов',
        '1 870 000 сумов',
        '56 100 000 сумов',
        '38 400 000 сумов',
      ],
      en: [
        '48,620,000 UZS',
        '1,870,000 UZS',
        '56,100,000 UZS',
        '38,400,000 UZS',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Kunlik tushum: 85 × 22 000 = 1 870 000 so‘m. 26 o‘quv kunida: 1 870 000 × 26 = 48 620 000 so‘m.',
      ru: 'Дневная выручка: 85 × 22 000 = 1 870 000 сумов. За 26 рабочих дней: 1 870 000 × 26 = 48 620 000 сумов.',
      en: 'Daily revenue = 85 × 22,000 = 1,870,000 UZS. Over 26 operating days: 1,870,000 × 26 = 48,620,000 UZS.',
    },
    hint: {
      uz: '85 × 22 000 × 26 ni ko‘paytiring.',
      ru: 'Умножьте дневное количество на цену и на 26 дней.',
      en: 'Multiply daily units × unit price × 26 days.',
    },
  },
  {
    id: 'm1-q6',
    topicId: 'm1',
    question: {
      uz: 'Saras Sarasvatining "Effektuatsiya" (Effectuation) tamoyiliga ko‘ra tajribali tadbirkor ishni nimadan boshlaydi?',
      ru: 'С чего начинает запуск дела успешный предприниматель согласно принципу «эффектуации» Сарас Сарасвати?',
      en: 'According to Saras Sarasvathy’s Effectuation principle, how do expert entrepreneurs initiate a venture?',
    },
    options: {
      uz: [
        'Hozir qo‘lida mavjud bo‘lgan shaxsiy bilim, resurs va tanishlar imkoniyatidan kelib chiqib ilk amaliy qadamni tashlaydi',
        'Katta investor topilmaguncha 5 yil hech narsa qilmay kutadi',
        'Bor-budini garovga qo‘yib yagona tavakkalga tikadi',
        'Faqat davlat buyurtmasini kutib o‘tiradi',
      ],
      ru: [
        'Отталкивается от уже имеющихся сегодня навыков, ресурсов и контактов, ограничивая допустимый риск потерь',
        'Ждет появления идеального инвестора с миллионом долларов',
        'Берет максимальный кредит без проверки спроса',
        'Копирует бизнес крупнейшей корпорации один в один',
      ],
      en: [
        'Starts immediately with existing means (skills, network, affordable loss) rather than waiting for huge external capital',
        'Waits years until raising $1M before testing anything',
        'Bets all family assets on a single untested gamble',
        'Focuses solely on writing theoretical reports',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Effektuatsiya ("Bird-in-hand" va "Affordable loss") — mavjud imkoniyatlardan boshlash va yo‘qotish mumkin bo‘lgan chegarani belgilab harakat qilishdir.',
      ru: 'Принцип «птицы в руке» и «допустимых потерь» позволяет стартовать быстро с минимальным риском.',
      en: 'Effectuation starts with your bird-in-hand resources while capping downside to an affordable loss.',
    },
    hint: {
      uz: '“Qo‘limda hozir nima bor?” savolini eslang.',
      ru: 'Вспомните подход «начать с того, что уже в руках».',
      en: 'Think of the "Bird-in-Hand" principle.',
    },
  },
  {
    id: 'm1-q7',
    topicId: 'm1',
    question: {
      uz: 'O‘zbekiston Respublikasida kichik tadbirkorlikning yalpi ichki mahsulotdagi (ЯIM) ulushi taxminan qancha?',
      ru: 'Какова примерная доля малого предпринимательства в ВВП Республики Узбекистан по данным официальной статистики?',
      en: 'Approximately what share of Uzbekistan’s GDP is generated by the small business sector?',
    },
    options: {
      uz: [
        '50% dan yuqori (~51–54% atrofida)',
        'Atigi 5–8%',
        '15% atrofida',
        '98%',
      ],
      ru: [
        'Свыше 50% (около 51–54%)',
        'Около 7%',
        'Не более 18%',
        '98%',
      ],
      en: [
        'Over 50% (~51–54%)',
        'Roughly 6%',
        'Around 17%',
        '98%',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Milliy statistika qo‘mitasi (stat.uz) ma’lumotlariga ko‘ra kichik tadbirkorlik O‘zbekiston ЯIMning yarmidan ko‘pini (~51,5%+) va bandlikning ~74% ini ta’minlaydi.',
      ru: 'По данным stat.uz, малый бизнес формирует более половины ВВП страны (~51,5%+) и основную часть рабочих мест.',
      en: 'According to stat.uz, small businesses contribute over half of national GDP (~51.5%+) and roughly three-quarters of employment.',
    },
    hint: {
      uz: 'Milliy iqtisodiyotning yarmidan ko‘prog‘i.',
      ru: 'Более половины экономики страны.',
      en: 'More than half of national output.',
    },
  },
  {
    id: 'm1-q8',
    topicId: 'm1',
    question: {
      uz: '“Oilaviy tadbirkorlik to‘g‘risida”gi Qonunga ko‘ra oilaviy korxona ishtirokchilari kamida necha nafar bo‘lishi kerak?',
      ru: 'Каково минимальное количество участников семейного предприятия согласно Закону РУз «О семейном предпринимательстве»?',
      en: 'Under Uzbekistan’s Law "On Family Entrepreneurship," what is the minimum number of participating family members?',
    },
    options: {
      uz: [
        'Kamida 2 nafar oila a’zosi',
        '1 nafar shaxs kifoya',
        'Kamida 10 nafar qarindosh',
        'Kamida 50 nafar ta’sischi',
      ],
      ru: [
        'Не менее 2 членов семьи',
        'Достаточно 1 человека',
        'Минимум 10 родственников',
        'Минимум 25 человек',
      ],
      en: [
        'At least 2 family members',
        '1 solo individual',
        'Minimum 10 relatives',
        'Minimum 25 shareholders',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Oilaviy korxona oila boshlig‘i va xotini (eri), farzandlar yoki boshqa qarindoshlardan iborat kamida 2 nafar oila a’zosi tomonidan tuziladi.',
      ru: 'Семейное предприятие создается добровольно не менее чем двумя членами семьи.',
      en: 'A Family Enterprise requires at least two family members pooling labor and property.',
    },
    hint: {
      uz: '“Oila” bo‘lishi uchun bitta odam yetarlimi?',
      ru: 'Может ли «семья» в корпоративном праве состоять из одного участника?',
      en: 'Can a family partnership consist of just one person?',
    },
  },
  {
    id: 'm1-q9',
    topicId: 'm1',
    isCalculation: true,
    question: {
      uz: 'Hisob-kitob: Kichik ustaxona oyiga 200 dona stol sotadi (narxi 450 000 so‘m). Xomashyo va ishbay haq 1 donasiga 280 000 so‘m, doimiy ijara va soliqlar oyiga 14 000 000 so‘m. Oylik sof foyda qancha?',
      ru: 'Расчет: Мастерская продает 200 столов в месяц по 450 000 сумов. Прямые затраты на 1 стол — 280 000 сумов, постоянные расходы и налоги — 14 000 000 сумов/мес. Какова чистая прибыль?',
      en: 'Calculation: A workshop sells 200 desks/month at 450,000 UZS. Unit variable cost is 280,000 UZS, and monthly fixed costs + taxes are 14,000,000 UZS. Find monthly net profit:',
    },
    options: {
      uz: [
        '20 000 000 so‘m',
        '34 000 000 so‘m',
        '90 000 000 so‘m',
        '16 000 000 so‘m',
      ],
      ru: [
        '20 000 000 сумов',
        '34 000 000 сумов',
        '90 000 000 сумов',
        '16 000 000 сумов',
      ],
      en: [
        '20,000,000 UZS',
        '34,000,000 UZS',
        '90,000,000 UZS',
        '16,000,000 UZS',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: '1 ta stoldan marja: 450 000 − 280 000 = 170 000 so‘m. 200 ta stoldan yalpi marja: 200 × 170 000 = 34 000 000 so‘m. Doimiy xarajat (14 mln) ayirilgach: 34 − 14 = 20 000 000 so‘m.',
      ru: 'Маржа со стола: 170 000 сумов × 200 шт. = 34 000 000 сумов. Вычитаем 14 000 000 постоянных расходов = 20 000 000 сумов.',
      en: 'Unit margin = 170,000 UZS × 200 units = 34,000,000 UZS gross contribution. Subtracting 14,000,000 UZS fixed costs leaves 20,000,000 UZS.',
    },
    hint: {
      uz: '200 × (450 ming − 280 ming) − 14 mln.',
      ru: '200 × (450 тыс. − 280 тыс.) − 14 млн.',
      en: 'Compute 200 × (450k − 280k) − 14M.',
    },
  },
  {
    id: 'm1-q10',
    topicId: 'm1',
    question: {
      uz: 'Quyidagi vaziyatlardan qaysi biri haqiqiy tadbirkorlik imkoniyatiga eng yaqin?',
      ru: 'Какая из перечисленных ситуаций указывает на реальную бизнес-возможность?',
      en: 'Which scenario signals a genuine commercial business opportunity?',
    },
    options: {
      uz: [
        'Sanoat zonasidagi 40 ta korxona ishchilari tushlik uchun 3 km uzoqqa taksida qatnab vaqt va pul yo‘qotayotgani',
        'Tadbirkorning shunchaki o‘zi yoqtirgan, lekin hech kim so‘ramaydigan suvenir yasashi',
        'Qonun bilan taqiqlangan tovar savdosi',
        'Bozorda 15 ta bo‘sh turgan do‘kon bor ko‘chada 16-bir xil do‘konni ochish',
      ],
      ru: [
        'Сотрудники 40 цехов в промзоне ежедневно тратят 40 минут и деньги на такси, чтобы найти горячий обед',
        'Хобби основателя, за которое никто из знакомых не готов платить',
        'Деятельность, прямо запрещенная законодательством',
        'Открытие 15-го одинакового ларька без отличий на падающем рынке',
      ],
      en: [
        'Workers across 40 factories in an industrial park spending 40 minutes daily commuting by taxi just to find hot lunch',
        'A personal craft hobby nobody is willing to pay for',
        'An activity prohibited by national law',
        'Opening a 16th identical kiosk next to 15 empty ones',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Odamlar muammoni yechish uchun allaqachon vaqt va taksi puli sarflayotgani — o‘tkir to‘lovga qodir talab borligining eng kuchli belgisidir.',
      ru: 'Когда люди уже тратят время и деньги на неудобное решение — перед вами подтвержденный платежеспособный спрос.',
      en: 'Customers actively spending time and taxi fare on a painful workaround proves urgent, monetizable demand.',
    },
    hint: {
      uz: 'Qayerda ommaviy noqulaylik va yo‘qotilayotgan pul bor?',
      ru: 'Где люди уже несут регулярные потери времени и денег?',
      en: 'Look where people already spend money overcoming daily friction.',
    },
  },

  // ==================== M2 (10 questions) ====================
  {
    id: 'm2-q1',
    topicId: 'm2',
    question: {
      uz: 'MVP (Minimum Viable Product) tushunchasining eng to‘g‘ri ta’rifi qaysi?',
      ru: 'Какое определение точнее всего раскрывает суть MVP (Minimum Viable Product)?',
      en: 'Which statement accurately defines a Minimum Viable Product (MVP)?',
    },
    options: {
      uz: [
        'Asosiy qiymatni yetkazib beradigan va haqiqiy mijoz talabini minimal vaqt hamda xarajat bilan sinashga xizmat qiladigan dastlabki ishchi versiya',
        'Xatolarga to‘la, ishlamaydigan yaroqsiz mahsulot',
        '2 yil davomida barcha 50 ta qo‘shimcha funksiyasi to‘liq yozib bo‘lingan yakuniy dastur',
        'Faqat qog‘ozdagi biznes-reja matni',
      ],
      ru: [
        'Минимальная рабочая версия продукта с ключевой ценностью, позволяющая с малыми затратами проверить реальный спрос и собрать обратную связь',
        'Нерабочий бракованный товар низкого качества',
        'Финальная версия продукта со всеми возможными функциями спустя 2 года разработки',
        'Презентация без какого-либо взаимодействия с клиентами',
      ],
      en: [
        'The leanest functional version delivering core value to validate real buyer demand and gather feedback at minimal cost',
        'A broken, unusable product shipped carelessly',
        'A fully featured enterprise platform built over 24 months in secret',
        'An internal spreadsheet never shown to prospects',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'MVP maqsadi — katta sarmoya tikishdan oldin asosiy farazni ("mijoz bunga haqiqatan pul to‘laydimi?") eng qisqa yo‘l bilan tekshirishdir.',
      ru: 'MVP решает одну главную задачу клиента и проверяет готовность платить до крупных капитальных вложений.',
      en: 'An MVP tests your riskiest demand hypothesis with real customers before committing heavy capital.',
    },
    hint: {
      uz: 'Tezkor o‘rganish va minimal xarajat kalit so‘zlariga qarang.',
      ru: 'Ключ — минимальные затраты ради проверки спроса.',
      en: 'Focus on validated learning with minimal capital.',
    },
  },
  {
    id: 'm2-q2',
    topicId: 'm2',
    question: {
      uz: 'CB Insights xalqaro tahliliga ko‘ra yosh startaplar yopilishining 1-raqamli sababi (42% holatda) nima?',
      ru: 'Какова причина №1 закрытия стартапов в мире (42% случаев по данным CB Insights)?',
      en: 'According to CB Insights, what is the #1 reason startups fail globally (cited in 42% of cases)?',
    },
    options: {
      uz: [
        'Bozorda mahsulotga real ehtiyoj (talab) yo‘qligi',
        'Ofis mebeli eskirmaganligi',
        'Logotip rangi noto‘g‘ri tanlangani',
        'Buxgalteriya dasturi qimmatligi',
      ],
      ru: [
        'Отсутствие реальной рыночной потребности в созданном продукте (No Market Need)',
        'Неудачный цвет логотипа',
        'Отсутствие собственного здания',
        'Слишком маленький штат юристов на старте',
      ],
      en: [
        'No market need — building something customers don’t actually want to pay for',
        'Imperfect brand logo colors',
        'Not owning corporate real estate',
        'Too few board advisors',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Ta’sischilar mijoz bilan gaplashmasdan (CustDev qilmasdan) o‘z xayolidagi mahsulotni yasashi — 42% startaplarni halokatga olib keladi.',
      ru: '42% проектов гибнут потому, что годами пилят продукт, не проверив наличие острой боли у клиентов.',
      en: 'Skipping Customer Development to build in isolation accounts for 42% of startup failures.',
    },
    hint: {
      uz: 'CustDev nima uchun o‘tkaziladi?',
      ru: 'Зачем проверять спрос до разработки?',
      en: 'Why do founders validate demand first?',
    },
  },
  {
    id: 'm2-q3',
    topicId: 'm2',
    question: {
      uz: 'Rob Fitspatrikning "Onam testi" (The Mom Test) qoidasiga ko‘ra CustDev suhbatida qanday savol berish XATO?',
      ru: 'Какой вопрос нарушает правила глубинного интервью «Тест мамы» (The Mom Test)?',
      en: 'Which interview question violates "The Mom Test" customer discovery rule?',
    },
    options: {
      uz: [
        '“Men til o‘rgatuvchi yangi ilova qilyapman, chiqsa 99 ming so‘mga sotib olarmidingiz?”',
        '“Oxirgi 3 oyda ingliz tilini o‘rganishga qancha pul sarfladingiz va nima qiyinchilik tug‘dirdi?”',
        '“Hozir bu muammoni qanday hal qilyapsiz?”',
        '“Oxirgi marta kurs tanlaganingizda nimadan norozi bo‘lgansiz?”',
      ],
      ru: [
        '«Если мы запустим наше крутое приложение за 99 тысяч сумов, вы точно его купите?»',
        '«Расскажите, как вы решали эту задачу в прошлый раз и во сколько это обошлось?»',
        '«Что больше всего раздражало вас при последнем заказе?»',
        '«Пробовали ли вы уже искать альтернативы на рынке?»',
      ],
      en: [
        '"If we build our awesome new app for 99,000 UZS, would you buy it?"',
        '"Walk me through the last time you encountered this problem — what did you do?"',
        '"How much money did you spend trying to solve this over the past quarter?"',
        '"What frustrated you most about your current solution?"',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Kelajak zamondagi faraziy savolga ("sotib olarmidingiz?") odamlar mulozamat yuzasidan yolg‘on "ha" deb javob beradilar. Faqat o‘tmishdagi haqiqiy xatti-harakat haqida so‘rash kerak.',
      ru: 'Гипотетические вопросы о будущем собирают вежливую ложь. Спрашивать нужно только о реальном прошлом опыте и уже потраченных деньгах.',
      en: 'Hypothetical future questions invite polite false positives; always anchor on concrete past actions and actual spending.',
    },
    hint: {
      uz: 'Kelajak haqida va’da so‘raydigan savolni toping.',
      ru: 'Найдите вопрос о гипотетическом будущем.',
      en: 'Spot the hypothetical future-tense pitch question.',
    },
  },
  {
    id: 'm2-q4',
    topicId: 'm2',
    question: {
      uz: '“Konsyerj MVP” (Concierge MVP) nima degani?',
      ru: 'В чем суть подхода «Консьерж-MVP» (Concierge MVP)?',
      en: 'How does a "Concierge MVP" operate?',
    },
    options: {
      uz: [
        'Murakkab avtomatik dastur yozishdan avval dastlabki mijozlarga xizmatni ta’sischining o‘zi qo‘lda bajarib berib, talabni tekshirishi',
        'Mehmonxona qurish uchun bankdan kredit olish',
        'Faqat qimmatbaho lyuks tovarlar sotish',
        'Barcha jarayonni birinchi kundan sun’iy intellektga topshirish',
      ],
      ru: [
        'Ручное выполнение услуги для первых клиентов силами команды до затрат на сложную разработку и автоматизацию',
        'Найм швейцара в офис стартапа',
        'Разработка дорогого мобильного приложения за полгода',
        'Покупка готовой франшизы отеля',
      ],
      en: [
        'Delivering the service manually to early customers before writing complex automation code in order to validate real value',
        'Hiring luxury hotel staff on Day 1',
        'Spending 12 months coding backend servers before talking to users',
        'Outsourcing strategy to an external agency',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Konsyerj MVP dasturlashga 1 so‘m ham sarflamay, dastlabki 15–30 mijoz ehtiyojini jonli jarayonda chuqur tushunib olish imkonini beradi.',
      ru: 'Консьерж-MVP экономит месяцы разработки и дает живое понимание всех нюансов клиентского запроса.',
      en: 'Manual fulfillment lets founders learn edge cases intimately while collecting real revenue at zero software cost.',
    },
    hint: {
      uz: 'Kod yozmasdan qo‘lda xizmat ko‘rsatib sinash.',
      ru: 'Ручное обслуживание первых заказов вместо дорогого кода.',
      en: 'Manual execution prior to software automation.',
    },
  },
  {
    id: 'm2-q5',
    topicId: 'm2',
    question: {
      uz: 'O‘zbekistonda raqamli MVP yoki onlayn so‘rovnoma orqali foydalanuvchilarning ism va telefon raqamlarini yig‘ishda qaysi qonun talabi bajarilishi shart?',
      ru: 'Требования какого закона РУз обязательны при сборе имен и телефонов пользователей на лендинге или в Telegram-боте MVP?',
      en: 'Which Uzbekistan law governs collecting user names and phone numbers inside an online MVP or lead form?',
    },
    options: {
      uz: [
        '“Shaxsga doir ma’lumotlar to‘g‘risida”gi Qonun (rozilik olish va serverda xavfsiz saqlash)',
        '“Urush faxriylari to‘g‘risida”gi Qonun',
        '“Avtomobil yo‘llari to‘g‘risida”gi Qonun',
        'Hech qanday qonun tatbiq etilmaydi',
      ],
      ru: [
        'Закон РУз «О персональных данных» (получение согласия и защита/локализация базы)',
        'Лесной кодекс РУз',
        'Закон «О племенном животноводстве»',
        'В интернете законы не действуют',
      ],
      en: [
        'Law "On Personal Data" (explicit user consent, data security, and local server storage rules)',
        'Maritime Shipping Code',
        'Law "On Forestry"',
        'Digital forms are unregulated',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Telefon raqami va F.I.Sh. shaxsga doir ma’lumot bo‘lib, foydalanuvchi roziligi va O‘zbekiston hududida lokalizatsiya/himoya talablariga bo‘ysunadi.',
      ru: 'Сбор контактов регулируется Законом «О персональных данных» (включая ст. 27-1 о хранении баз данных граждан РУз).',
      en: 'Collecting identifiable contact details triggers strict consent and localization duties under the Law "On Personal Data."',
    },
    hint: {
      uz: 'Foydalanuvchi ma’lumotlari daxlsizligi haqidagi qonun.',
      ru: 'Закон о защите личных данных граждан.',
      en: 'Think of data privacy legislation.',
    },
  },
  {
    id: 'm2-q6',
    topicId: 'm2',
    isCalculation: true,
    question: {
      uz: 'Hisob-kitob: Talaba 90 mln so‘mga mobil ilova buyurtma qilish o‘rniga 3,5 mln so‘mga Telegram-bot MVP yasadi va reklamaga 1,5 mln so‘m sarfladi. 2 haftada 80 kishi 75 000 so‘mlik obuna sotib oldi. MVP sinovining sof pul natijasi va tejalgan sarmoya xavfi qancha?',
      ru: 'Расчет: Вместо разработки приложения за 90 млн сумов основатель собрал Telegram-бот MVP за 3,5 млн и потратил 1,5 млн на тест рекламы. Получено 80 оплат по 75 000 сумов. Каков финансовый итог теста?',
      en: 'Calculation: Instead of spending 90M UZS on a custom app, a founder spends 3.5M UZS on a Telegram bot MVP + 1.5M UZS on test ads, winning 80 paid orders at 75,000 UZS. What is the net cash result of the MVP test?',
    },
    options: {
      uz: [
        'Jami tushum 6 mln so‘m, 5 mln xarajat qoplanib +1 mln so‘m foyda chiqdi va talab real pullar bilan isbotlandi',
        '−4 mln so‘m zarar ko‘rildi',
        'Tushum 3,5 mln so‘m bo‘ldi',
        '90 mln so‘m sarflab yuborildi',
      ],
      ru: [
        'Выручка 6 млн сумов полностью окупила затраты на MVP (5 млн), принесла +1 млн сумов и доказала спрос деньгами',
        'Убыток составил −4 млн сумов',
        'Выручка равна 3,5 млн сумов',
        'Спрос не подтвержден',
      ],
      en: [
        '6.0M UZS revenue covered all 5.0M UZS MVP + ad costs, yielding +1.0M UZS surplus while proving paid demand',
        'Net loss of −4.0M UZS',
        'Total revenue was 3.5M UZS',
        'Demand failed validation',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Tushum: 80 × 75 000 = 6 000 000 so‘m. MVP + reklama xarajati: 3,5 + 1,5 = 5 000 000 so‘m. Sof natija: +1 000 000 so‘m va 85 mln so‘mlik erta tavakkalning oldi olindi!',
      ru: 'Выручка 80 × 75 000 = 6 млн сумов минус 5 млн затрат = +1 млн сумов и твердый трекшн.',
      en: '80 × 75,000 = 6.0M UZS revenue minus 5.0M UZS test outlay = +1.0M UZS positive cash proof.',
    },
    hint: {
      uz: '80 × 75 000 dan (3,5 mln + 1,5 mln) ni ayiring.',
      ru: 'Посчитайте 80 × 75 000 минус (3,5 + 1,5 млн).',
      en: 'Calculate (80 × 75,000) − (3.5M + 1.5M).',
    },
  },
  {
    id: 'm2-q7',
    topicId: 'm2',
    question: {
      uz: 'Lean Startup metodologiyasidagi asosiy qayta aloqa halqasi qanday ketma-ketlikda aylanadi?',
      ru: 'Как выглядит базовый цикл обратной связи в методологии Бережливого стартапа (Lean Startup Эрика Риса)?',
      en: 'What are the three stages of Eric Ries’s Lean Startup feedback loop?',
    },
    options: {
      uz: [
        'Yaratish (Build) → O‘lchash (Measure) → O‘rganish (Learn)',
        'Kredit olish → Qurish → Unutish',
        'Reja tuzish → 3 yil yopiq ishlash → Taqdimot',
        'Nusxalash → Narxni tushirish → Yopish',
      ],
      ru: [
        'Создать (Build) → Измерить (Measure) → Научиться (Learn)',
        'Придумать → Потратить весь бюджет → Закрыться',
        'Скопировать → Демпинговать → Ждать',
        'Нанять штат → Арендовать офис → Искать идею',
      ],
      en: [
        'Build → Measure → Learn',
        'Borrow → Build → Hope',
        'Plan → Hide for 2 Years → Launch',
        'Copy → Discount → Liquidate',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Gipoteza asosida kichik MVP yaratiladi (Build), mijozlar xarid/konversiya metrikalari o‘lchanadi (Measure) va xulosa chiqarilib yaxshilanadi yoki Pivot qilinadi (Learn).',
      ru: 'Быстрая сборка гипотезы → замер метрик поведения клиентов → выводы для улучшения или пивота.',
      en: 'Ship a minimal test (Build), track empirical buyer actions (Measure), and iterate or pivot (Learn).',
    },
    hint: {
      uz: 'Eric Ries kitobidagi 3 ta mashhur fe’l.',
      ru: 'Три шага проверки продуктовой гипотезы.',
      en: 'Three classic Lean Startup verbs.',
    },
  },
  {
    id: 'm2-q8',
    topicId: 'm2',
    question: {
      uz: 'Fikrlar shturmi (Brainstorming) jarayonining birinchi — g‘oyalar generatsiyasi bosqichida qaysi harakat QAT’IY TAQIQLANADI?',
      ru: 'Что категорически запрещено на первом этапе классического мозгового штурма (генерации идей)?',
      en: 'During Stage 1 (divergent idea generation) of a Brainstorming session, what behavior is strictly prohibited?',
    },
    options: {
      uz: [
        'Aytilgan g‘oyalarni darhol tanqid qilish, masxara qilish va “bu bo‘lmaydi” deb to‘xtatib qo‘yish',
        'Noodatiy g‘oyalarni doskaga yozib borish',
        'Boshqa ishtirokchi g‘oyasini rivojlantirib to‘ldirish',
        'Qisqa vaqt ichida ko‘p variant taklif etish',
      ],
      ru: [
        'Критика, насмешки и оценка идей фразами «это глупо / не сработает»',
        'Запись всех идей на флипчарт',
        'Развитие и дополнение идей коллег',
        'Генерация смелых нестандартных вариантов',
      ],
      en: [
        'Criticizing, judging, or dismissing ideas prematurely during generation',
        'Writing every idea visibly on a whiteboard',
        'Building upon teammates’ concepts',
        'Aiming for high idea quantity first',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Erta tanqid ijodiy oqimni bo‘g‘adi; saralash va tanqidiy tahlil faqat 2-bosqichda amalga oshiriladi.',
      ru: 'Разделение генерации и критики позволяет найти неочевидные прорывные решения.',
      en: 'Premature judgment shuts down creativity; critical filtering belongs strictly in Stage 2.',
    },
    hint: {
      uz: 'Ijodkorlikni bir zumda o‘ldiradigan narsa nima?',
      ru: 'Что блокирует смелые идеи в группе?',
      en: 'What shuts down creative participation fastest?',
    },
  },
  {
    id: 'm2-q9',
    topicId: 'm2',
    question: {
      uz: 'Startapda “Pivot” qilish nimani bildiradi?',
      ru: 'Что в практике стартапов называется словом «Пивот» (Pivot)?',
      en: 'What does executing a "Pivot" mean in an early-stage venture?',
    },
    options: {
      uz: [
        'MVP sinovidan olingan real ma’lumotlar asosida mahsulot formati, mijoz segmenti yoki biznes-model yo‘nalishini asosli o‘zgartirish',
        'Kompaniyani bankrot deb e’lon qilib tadbirkorlikdan butunlay voz kechish',
        'Ofis devorini boshqa rangga bo‘yash',
        'Soliq hisobotini kechiktirish',
      ],
      ru: [
        'Структурный разворот бизнес-модели или смена целевого сегмента на основе выводов тестирования MVP',
        'Полная ликвидация бизнеса навсегда',
        'Косметическая смена шрифта на визитке',
        'Увольнение бухгалтера',
      ],
      en: [
        'A data-driven strategic shift in target segment, product focus, or monetization model after MVP testing',
        'Shutting down permanently and abandoning entrepreneurship',
        'Changing office wallpaper',
        'Delaying tax filings',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Masalan, YouTube avval tanishuv sayti sifatida ochilib, foydalanuvchilar umumiy videolar yuklashni xohlayotganini ko‘rgach video-xostingga Pivot qilgan.',
      ru: 'Многие гиганты (YouTube, Slack, Instagram) стали успешными именно после своевременного пивота.',
      en: 'Iconic companies like YouTube and Slack succeeded by pivoting once early MVP usage revealed stronger adjacent demand.',
    },
    hint: {
      uz: 'Basketbolda bir oyoq tayanchda turib yo‘nalishni burish harakati.',
      ru: 'Осознанная смена курса при сохранении накопленного опыта.',
      en: 'Changing strategic direction while keeping one foot anchored in learnings.',
    },
  },
  {
    id: 'm2-q10',
    topicId: 'm2',
    isCalculation: true,
    question: {
      uz: 'Hisob: Tadbirkor 200 kishilik onlayn so‘rovnoma va lending-MVP o‘tkazdi: 200 kishidan 60 nafari muammo borligini aytdi, lekin "50% oldindan to‘lov bilan buyurtma berish" tugmasini 12 kishi bosib to‘lov qildi. Haqiqiy to‘lov konversiyasi necha foiz?',
      ru: 'Расчет: На лендинге MVP из 200 посетителей 60 человек ответили в анкете «проблема актуальна», а реально внесли предоплату за заказ 12 человек. Какова реальная конверсия в оплату от всех посетителей?',
      en: 'Calculation: Out of 200 MVP landing page visitors, 60 say the problem matters in a poll, while 12 actually submit pre-payment. What is the true visitor-to-paid conversion rate?',
    },
    options: {
      uz: [
        '6% (12 ÷ 200 × 100%)',
        '30% (60 ÷ 200 × 100%)',
        '20%',
        '72%',
      ],
      ru: [
        '6% (12 ÷ 200 × 100%)',
        '30% (60 ÷ 200 × 100%)',
        '20%',
        '72%',
      ],
      en: [
        '6% (12 ÷ 200 × 100%)',
        '30% (60 ÷ 200 × 100%)',
        '20%',
        '72%',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'So‘zdagi qiziqish 30% bo‘lsa-da, MVPda haqiqiy o‘lchov — pul to‘laganlar ulushi: (12 / 200) × 100% = 6% (yaxshi ko‘rsatkich!).',
      ru: 'В MVP важны реальные оплаты, а не просто слова: 12 / 200 × 100% = 6%.',
      en: 'Paid commitments outweigh verbal survey clicks: 12 ÷ 200 × 100% = 6%.',
    },
    hint: {
      uz: 'To‘lov qilgan 12 kishini jami 200 tashrif buyuruvchiga bo‘ling.',
      ru: 'Разделите 12 реальных оплат на 200 посетителей.',
      en: 'Divide 12 paying buyers by 200 total visitors.',
    },
  },

  // ==================== M3 (10 questions) ====================
  {
    id: 'm3-q1',
    topicId: 'm3',
    question: {
      uz: 'Biznes krediti va shaxsiy iste’mol krediti o‘rtasidagi tub iqtisodiy farq nimada?',
      ru: 'В чем состоит фундаментальное экономическое отличие бизнес-кредита от потребительского?',
      en: 'What is the fundamental economic difference between a Business Loan and a Consumer Loan?',
    },
    options: {
      uz: [
        'Biznes krediti yangi pul oqimi va qo‘shimcha foyda yaratuvchi aktivga yo‘naltiriladi; iste’mol krediti esa daromad keltirmaydigan shaxsiy xaridga ketib, oilaviy daromaddan qoplanadi',
        'Iste’mol kreditini umuman qaytarish shart emas',
        'Biznes kreditida foiz stavkasi har doim 0% bo‘ladi',
        'Ikkalasining hech qanday farqi yo‘q',
      ],
      ru: [
        'Бизнес-кредит инвестируется в активы, генерирующие новый денежный поток для самоокупаемости долга, а потребительский кредит идет на личное потребление без создания дохода',
        'Потребительский кредит выдается только юридическим лицам',
        'Бизнес-кредит не требует подписания договора',
        'Разницы между ними не существует',
      ],
      en: [
        'A Business Loan finances income-producing assets that service the debt and yield surplus profit, whereas Consumer Credit funds non-productive personal consumption',
        'Consumer loans are only granted to factories',
        'Business loans never charge interest',
        'There is zero economic difference',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'To‘g‘ri olingan biznes krediti uskuna yoki tovar aylanmasi orqali o‘z foizini o‘zi ishlab topadi va tadbirkorga ortiqcha sof foyda qoldiradi.',
      ru: 'Инвестиционный бизнес-кредит сам окупает свои проценты за счет роста производства или оборота.',
      en: 'Productive debt pays for itself out of incremental operating cash flows.',
    },
    hint: {
      uz: 'Qaysi biri yangi daromad ishlab chiqaradi?',
      ru: 'Какой из кредитов создает новую выручку?',
      en: 'Ask which loan creates new cash inflows.',
    },
  },
  {
    id: 'm3-q2',
    topicId: 'm3',
    question: {
      uz: 'Kredit shartnomasidagi “Imtiyozli davr” (Grace period) nimani anglatadi?',
      ru: 'Что означает условие «Льготный период» (Grace period) в бизнес-кредите?',
      en: 'What does a "Grace Period" provide in a commercial equipment loan?',
    },
    options: {
      uz: [
        'Dastlabki belgilangan oylarda asosiy qarz tanasini to‘lash kechiktirilib, faqat hisoblangan foizlar to‘lab boriladigan davr',
        'Kreditdan butunlay voz kechish huquqi',
        'Bank tadbirkorga sovg‘a sifatida pul beradigan oy',
        'Garov mulkini ruxsatsiz sotib yuborish davri',
      ],
      ru: [
        'Начальный период (например, 3–6 мес.), когда заемщик временно освобожден от погашения основного долга и платит только проценты, пока запускает оборудование',
        'Полное прощение половины кредита банком',
        'Период, когда проценты вообще не начисляются и долг списывается',
        'Штрафной срок за просрочку',
      ],
      en: [
        'An initial window (e.g., 3–6 months) during which principal repayments are deferred and only interest is paid while machinery ramps up',
        'Complete forgiveness of the loan principal',
        'Permission to sell pledged collateral without telling the bank',
        'A late-payment penalty surcharge',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Uskuna chetdan keltirilib o‘rnatilguncha va ilk sotuv boshlanguncha asosiy qarz to‘lanmay turishi korxonani kassa bosimidan himoya qiladi.',
      ru: 'Льготный период дает время привезти, смонтировать станок и начать продажи до старта выплат тела кредита.',
      en: 'Deferring principal amortization gives founders breathing room during equipment delivery and installation.',
    },
    hint: {
      uz: 'Asosiy qarz (tana) va foiz to‘lovi taqsimotini eslang.',
      ru: 'Что происходит с выплатой основного долга в первые месяцы?',
      en: 'Consider principal deferral versus interest servicing.',
    },
  },
  {
    id: 'm3-q3',
    topicId: 'm3',
    isCalculation: true,
    question: {
      uz: 'Hisob-kitob: Bank garov mulkini bozor narxining 75% likvid qiymatida (25% diskont bilan) qabul qiladi. Tadbirkor 150 mln so‘m biznes krediti olishi uchun kamida qancha bozor qiymatiga ega mulkni garovga qo‘yishi kerak?',
      ru: 'Расчет: Банк принимает недвижимость в залог с коэффициентом залогового дисконта 75% от рыночной оценки. Какова минимальная рыночная стоимость залога для получения кредита 150 млн сумов?',
      en: 'Calculation: A bank applies a 75% loan-to-collateral valuation ratio (25% haircut). To secure a 150M UZS business loan, what minimum appraised market value of collateral is required?',
    },
    options: {
      uz: [
        '200 mln so‘m (200 mln × 75% = 150 mln)',
        '150 mln so‘m',
        '112,5 mln so‘m',
        '300 mln so‘m',
      ],
      ru: [
        '200 млн сумов (200 млн × 75% = 150 млн)',
        '150 млн сумов',
        '112,5 млн сумов',
        '300 млн сумов',
      ],
      en: [
        '200M UZS (200M × 75% = 150M UZS)',
        '150M UZS',
        '112.5M UZS',
        '300M UZS',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Garov bozor bahosi = Kredit summasi ÷ 0,75 = 150 000 000 ÷ 0,75 = 200 000 000 so‘m.',
      ru: 'Рыночная стоимость залога = 150 млн ÷ 0,75 = 200 млн сумов.',
      en: 'Required market collateral = 150M UZS ÷ 0.75 = 200M UZS.',
    },
    hint: {
      uz: '150 mln so‘mni 0,75 ga bo‘ling.',
      ru: 'Разделите сумму кредита 150 млн на 0,75.',
      en: 'Divide 150M UZS by 0.75.',
    },
  },
  {
    id: 'm3-q4',
    topicId: 'm3',
    question: {
      uz: 'Annuitet va Differensial kredit to‘lov jadvallarini solishtirganda qaysi fikr TO‘G‘RI?',
      ru: 'Какое утверждение верно при сравнении аннуитетного и дифференцированного графиков погашения кредита при одинаковой ставке и сроке?',
      en: 'Comparing Annuity and Differential loan schedules at identical rate and tenor, which statement is TRUE?',
    },
    options: {
      uz: [
        'Differensial usulda dastlabki oylarda to‘lov yuki kattaroq bo‘ladi, lekin jami to‘lanadigan foiz summasi annuitetga qaraganda kamroq chiqadi',
        'Annuitet usulida har oyda to‘lov kamayib boradi',
        'Differensial usulda foiz umuman hisoblanmaydi',
        'Ikkala usulda ham jami foiz to‘lovi tiyin-tiyinigacha bir xil chiqadi',
      ],
      ru: [
        'При дифференцированном графике первые платежи выше, но итоговая переплата по процентам за весь срок меньше, чем при аннуитетном',
        'Аннуитетный платеж каждый месяц разный',
        'При дифференцированном графике основной долг платится только в последний день',
        'Сумма переплаты абсолютно одинакова в обоих методах',
      ],
      en: [
        'Differential schedules have higher early installments, but lower total cumulative interest paid over the loan’s life than Annuity schedules',
        'Annuity monthly payments shrink every single month',
        'Differential loans charge zero interest',
        'Total lifetime interest is identical down to the last UZS',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Differensial usulda asosiy qarz 1-oydanoq tezroq uzilgani sababli qolgan qoldiq tez kamayadi va jami foiz tejaladi; Annuitet esa rejalashtirishga qulay bir xil to‘lov beradi.',
      ru: 'Быстрое снижение тела долга при дифференцированном методе уменьшает базу начисления процентов.',
      en: 'Faster early principal reduction under Differential amortization shrinks the interest-bearing balance sooner.',
    },
    hint: {
      uz: 'Qaysi birida asosiy qarz erta oylarda tezroq kamayadi?',
      ru: 'Где быстрее уменьшается остаток основного долга?',
      en: 'Consider which method reduces principal faster in early months.',
    },
  },
  {
    id: 'm3-q5',
    topicId: 'm3',
    isCalculation: true,
    question: {
      uz: 'Hisob-kitob: Differensial kredit — 60 mln so‘m, muddati 12 oy, yillik stavkasi 24% (oyiga 2%). Imtiyozli davr yo‘q. 1-oydagi jami to‘lov (asosiy qarz + foiz) qancha bo‘ladi?',
      ru: 'Расчет: Дифференцированный кредит 60 млн сумов на 12 месяцев под 24% годовых (2% в месяц) без льготного периода. Чему равен общий платеж за 1-й месяц?',
      en: 'Calculation: A 60M UZS Differential loan for 12 months at 24% p.a. (2%/month) with no grace period. Calculate the total Month 1 payment (principal + interest):',
    },
    options: {
      uz: [
        '6 200 000 so‘m (5 mln asosiy qarz + 1,2 mln foiz)',
        '5 000 000 so‘m',
        '1 200 000 so‘m',
        '7 400 000 so‘m',
      ],
      ru: [
        '6 200 000 сумов (5 млн тело долга + 1,2 млн проценты)',
        '5 000 000 сумов',
        '1 200 000 сумов',
        '7 400 000 сумов',
      ],
      en: [
        '6,200,000 UZS (5.0M principal + 1.2M interest)',
        '5,000,000 UZS',
        '1,200,000 UZS',
        '7,400,000 UZS',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Oylik asosiy qarz: 60 mln ÷ 12 = 5 000 000 so‘m. 1-oy foizi: 60 mln × 2% = 1 200 000 so‘m. Jami 1-oy to‘lovi = 6 200 000 so‘m (2-oyda qoldiq 55 mln bo‘lib, to‘lov 6,1 mln ga tushadi).',
      ru: 'Тело долга в месяц: 60 ÷ 12 = 5 млн. Проценты за 1-й месяц: 60 млн × 2% = 1,2 млн. Итого: 6,2 млн сумов.',
      en: 'Monthly principal = 60M ÷ 12 = 5.0M UZS. Month 1 interest = 60M × 2% = 1.2M UZS. Total = 6,200,000 UZS.',
    },
    hint: {
      uz: '(60 mln / 12) + (60 mln × 24% / 12).',
      ru: 'Сложите 1/12 основного долга и месячный процент (2% от 60 млн).',
      en: 'Add 1/12th of principal plus 2% monthly interest on 60M.',
    },
  },
  {
    id: 'm3-q6',
    topicId: 'm3',
    question: {
      uz: '“Bootstrapping” strategiyasi nimani anglatadi?',
      ru: 'Что означает термин «Бутстрэппинг» (Bootstrapping) в финансировании стартапа?',
      en: 'What does "Bootstrapping" mean when launching a new business?',
    },
    options: {
      uz: [
        'Tashqi qarz va investor ulushisiz, shaxsiy jamg‘arma hamda ilk mijozlar to‘lovini qayta investitsiyalash hisobiga o‘sish',
        'Poyabzal ishlab chiqarish zavodi ochish',
        'Davlat bankidan yirik valyuta krediti olish',
        'Aksiyalarni fond birjasiga chiqarish (IPO)',
      ],
      ru: [
        'Запуск и развитие компании на собственные сбережения и реинвестирование выручки от первых клиентов без кредитов и инвесторов',
        'Получение крупного банковского кредита под залог квартиры',
        'Продажа 80% доли компании в первый день',
        'Обувной бизнес',
      ],
      en: [
        'Self-funding growth through personal savings and reinvested early customer revenue without external debt or equity dilution',
        'Taking high-interest consumer loans',
        'Selling 70% of company equity pre-launch',
        'Manufacturing leather boots',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Bootstrapping ta’sischiga 100% ulushni o‘zida saqlab qolish va xarajatlarga tejamkor yondashish intizomini beradi.',
      ru: 'Бутстрэппинг сохраняет 100% контроля за основателем и приучает бизнес зарабатывать с первых дней.',
      en: 'Bootstrapping preserves 100% founder equity and enforces strict capital discipline.',
    },
    hint: {
      uz: 'Tashqi sarmoyadorsiz o‘z kuchi bilan ko‘tarilish.',
      ru: 'Развитие «на свои» и выручку клиентов.',
      en: 'Growing purely on founder cash and customer revenue.',
    },
  },
  {
    id: 'm3-q7',
    topicId: 'm3',
    question: {
      uz: 'Tadbirkorning garovi kredit olish uchun biroz yetarli bo‘lmaganda O‘zbekistonda qaysi rasmiy institut moliyaviy kafillik bera oladi?',
      ru: 'Какой институт поддержки в Узбекистане предоставляет поручительство малому бизнесу при частичной нехватке залога по банковскому кредиту?',
      en: 'Which official institution in Uzbekistan can provide partial credit guarantees for viable SMEs lacking full collateral?',
    },
    options: {
      uz: [
        '“Tadbirkorlikni rivojlantirish kompaniyasi” AJ (tadbirkorlikni qo‘llab-quvvatlash kafillik mexanizmi)',
        'Yo‘l harakati xavfsizligi xizmati',
        'Gidrometeorologiya markazi',
        'FHDYo bo‘limi',
      ],
      ru: [
        'АО «Компания по развитию предпринимательства» (механизмы поручительства для МСБ)',
        'Служба безопасности дорожного движения',
        'Узгидромет',
        'Органы ЗАГС',
      ],
      en: [
        'Entrepreneurship Development Company JSC (state-backed SME guarantee programs)',
        'Traffic Police Department',
        'National Weather Service',
        'Civil Registry Office',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: '“Tadbirkorlikni rivojlantirish kompaniyasi” AJ tijorat banklari kreditlari bo‘yicha garov yetmagan qismiga belgilangan me’yorlarda kafillik taqdim etadi.',
      ru: 'АО «Компания по развитию предпринимательства» помогает перспективным проектам МСБ закрыть нехватку залогового обеспечения.',
      en: 'The Entrepreneurship Development Company JSC bridges partial collateral gaps for creditworthy SME projects.',
    },
    hint: {
      uz: 'Nomida aynan “Tadbirkorlikni rivojlantirish” birikmasi bor tashkilot.',
      ru: 'Специализированная госкомпания поддержки предпринимательства.',
      en: 'Look for the specialized SME development institution.',
    },
  },
  {
    id: 'm3-q8',
    topicId: 'm3',
    question: {
      uz: 'Bank tahlilidagi DSCR (Debt Service Coverage Ratio — qarzga xizmat ko‘rsatish koeffitsiyenti) xavfsiz bo‘lishi uchun qanday qiymatda bo‘lishi tavsiya etiladi?',
      ru: 'Какое значение коэффициента покрытия долга денежным потоком (DSCR) считается безопасным для заемщика?',
      en: 'What Debt Service Coverage Ratio (DSCR = Net Operating Cash Flow ÷ Debt Service) represents a safe cushion for a business borrower?',
    },
    options: {
      uz: [
        'Kamida 1,3 – 1,5 va undan yuqori (sof pul oqimi kredit to‘lovidan 30–50% ko‘p)',
        '0,5 (pul oqimi kredit to‘lovining yarmiga teng)',
        '0,0',
        'Manfiy ko‘rsatkich (−1,2)',
      ],
      ru: [
        'Не менее 1,3 – 1,5 и выше (операционный поток на 30–50% превышает платеж по кредиту)',
        '0,5 (денег хватает только на половину платежа)',
        '0,8',
        'Отрицательное значение',
      ],
      en: [
        'At least 1.3x – 1.5x or higher (operating cash flow exceeds loan installments by 30–50%+)',
        '0.5x (cash flow covers only half the payment)',
        '0.8x',
        'Negative ratio',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'DSCR ≥ 1,3 bo‘lganda savdo kutilmaganda 20% pasaysa ham korxona kreditni kechiktirmasdan to‘lay oladi.',
      ru: 'Запас прочности 30–50% защищает бизнес от просрочки в случае сезонного снижения выручки.',
      en: 'A 1.3x–1.5x DSCR buffer ensures temporary revenue dips never trigger loan default.',
    },
    hint: {
      uz: 'Kirim chiqimdan kamida 1,3 barobar katta bo‘lishi kerak.',
      ru: 'Чистый поток должен уверенно превышать единицу (1,0) по отношению к платежу.',
      en: 'Cash available must comfortably exceed 1.0x the loan payment.',
    },
  },
  {
    id: 'm3-q9',
    topicId: 'm3',
    question: {
      uz: 'Qaysi holatda biznes uchun yillik 23% stavkali bank kreditini olish IQTISODIY FOYDALI hisoblanadi?',
      ru: 'В каком случае привлечение банковского кредита под 23% годовых экономически ВЫГОДНО для бизнеса?',
      en: 'When does borrowing commercial bank debt at 23% per annum create positive economic value for the founder?',
    },
    options: {
      uz: [
        'Sotuv talabi sinovdan o‘tgan va kreditga olingan aktiv keltiradigan yillik operatsion rentabellik (ROIC) 40–50% ni tashkil etganda',
        'Biznesning yillik rentabelligi atigi 12% bo‘lganda',
        'Hali g‘oya sinab ko‘rilmagan va bitta ham mijoz topilmaganda',
        'Kredit puliga direktor uchun shaxsiy qimmatbaho avtomobil olinganda',
      ],
      ru: [
        'Когда спрос подтвержден и рентабельность вложенного капитала (например, 45% годовых) уверенно выше ставки кредита 23%',
        'Когда рентабельность бизнеса составляет всего 12% годовых',
        'Когда еще нет ни продукта, ни первых продаж',
        'Когда кредит тратится на непроизводственные предметы роскоши',
      ],
      en: [
        'When demand is validated and the asset generates a 40–50% annual Return on Invested Capital, far exceeding the 23% cost of debt',
        'When the project yields only 12% annual return',
        'Before any MVP customer testing has occurred',
        'When spent on non-productive executive luxury perks',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Moliyaviy richag qoidasi: Loyiha rentabelligi (45%) > Kredit stavkasi (23%) bo‘lsagina, o‘rtadagi +22% farq ta’sischining xususiy kapitalini o‘stiradi.',
      ru: 'Эффект финансового рычага положителен только тогда, когда отдача бизнеса выше стоимости заемных денег.',
      en: 'Positive financial leverage requires Return on Invested Capital to comfortably clear the interest hurdle.',
    },
    hint: {
      uz: 'Daromadlilik foizi va kredit foizini taqqoslang.',
      ru: 'Сравните процент прибыли проекта со ставкой банка.',
      en: 'Compare project return % against the 23% loan rate.',
    },
  },
  {
    id: 'm3-q10',
    topicId: 'm3',
    question: {
      uz: 'Tijorat banklari kredit foiz stavkalariga bevosita mo‘ljal (benchmark) bo‘lib xizmat qiluvchi makroiqtisodiy ko‘rsatkich qaysi?',
      ru: 'Какой макроэкономический показатель Центрального банка РУз служит базовым ориентиром для ставок по кредитам и вкладам в экономике?',
      en: 'Which macroeconomic benchmark set by the Central Bank of Uzbekistan guides commercial lending and deposit rates?',
    },
    options: {
      uz: [
        'Markaziy bankning asosiy stavkasi (Policy Rate)',
        'Bazaviy hisoblash miqdori (BHM)',
        'Eng kam ish haqi miqdori',
        'Bojxona boji stavkasi',
      ],
      ru: [
        'Основная ставка Центрального банка Республики Узбекистан',
        'Базовая расчетная величина (БРВ)',
        'Минимальный размер оплаты труда',
        'Ставка госпошлины за регистрацию',
      ],
      en: [
        'The Central Bank Key Policy Rate',
        'Base Calculation Amount (BHM)',
        'Statutory Minimum Wage',
        'Vehicle Registration Fee',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Markaziy bank Boshqaruvi tomonidan belgilanadigan asosiy stavka (masalan, 14%) pul-kredit bozoridagi resurslar qiymatini belgilab beradi.',
      ru: 'Основная ставка ЦБ РУз определяет стоимость фондирования банков и влияет на рыночные ставки кредитования.',
      en: 'The Central Bank’s Key Policy Rate anchors interbank liquidity pricing and commercial loan rates.',
    },
    hint: {
      uz: 'cbu.uz e’lon qiladigan asosiy foiz ko‘rsatkichi.',
      ru: 'Главный инструмент денежно-кредитной политики ЦБ.',
      en: 'Primary monetary policy lever published on cbu.uz.',
    },
  },

  // ==================== M4 (10 questions) ====================
  {
    id: 'm4-q1',
    topicId: 'm4',
    question: {
      uz: 'MChJ (Mas’uliyati cheklangan jamiyat) va YaTT (Yakka tartibdagi tadbirkor) o‘rtasidagi eng muhim huquqiy javobgarlik farqi nimada?',
      ru: 'В чем главное отличие имущественной ответственности учредителя ООО (MChJ) от ИП (YaTT)?',
      en: 'What is the decisive legal liability difference between an LLC (MChJ) shareholder and a Sole Proprietor (YaTT)?',
    },
    options: {
      uz: [
        'YaTT majburiyatlar bo‘yicha o‘z shaxsiy mol-mulki bilan javobgar bo‘ladi; MChJ ishtirokchilari esa odatda jamiyatga kiritgan o‘z ulushlari qiymati doirasida tavakkal qiladilar',
        'YaTT soliqdan 100% ozod, MChJ esa ozod emas',
        'MChJ da bittadan ko‘p ta’sischi bo‘lishi mumkin emas',
        'YaTT faqat xorijiy fuqarolar uchun ochiladi',
      ],
      ru: [
        'ИП отвечает по бизнес-обязательствам своим личным имуществом, а участники ООО несут риск убытков в пределах стоимости внесенных долей в уставный фонд',
        'ООО не является юридическим лицом, а ИП является',
        'У ООО может быть только один работник',
        'ИП освобожден от соблюдения законов о торговле',
      ],
      en: [
        'A YaTT carries unlimited personal asset liability for business debts, whereas MChJ shareholders limit risk to their charter capital contributions',
        'An MChJ is not a legal entity, whereas a YaTT is',
        'An MChJ cannot open a corporate bank account',
        'A YaTT can have up to 50 co-founders',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: '“Mas’uliyati cheklangan jamiyatlar to‘g‘risida”gi Qonunga binoan MChJ alohida yuridik shaxs bo‘lib, uning mulki ta’sischilarning shaxsiy mulkidan ajratilgan.',
      ru: 'Именно отделение имущества юрлица от личного имущества собственников дало название форме «Общество с ограниченной ответственностью».',
      en: 'Corporate personhood separates an MChJ’s liabilities from its founders’ personal homes and savings.',
    },
    hint: {
      uz: '“Mas’uliyati cheklangan” atamasining ma’nosini o‘ylang.',
      ru: 'Вдумайтесь в само название «ограниченная ответственность».',
      en: 'Reflect on what "Limited Liability" literally protects.',
    },
  },
  {
    id: 'm4-q2',
    topicId: 'm4',
    question: {
      uz: 'O‘zbekistonda E-IMZO nima va u tadbirkorga nima uchun kerak?',
      ru: 'Что такое E-IMZO в Узбекистане и какую юридическую силу он имеет?',
      en: 'What is E-IMZO in Uzbekistan, and what legal standing does it hold?',
    },
    options: {
      uz: [
        'Qog‘ozdagi imzo bilan teng yuridik kuchga ega elektron raqamli imzo — biznesni ro‘yxatdan o‘tkazish, my.soliq.uz hisobotlari va EHF imzolash uchun ishlatiladi',
        'Faqat grafik logotip chizish dasturi',
        'Reklama bannerlarini joylashtirish ruxsatnomasi',
        'Xalqaro haydovchilik guvohnomasi',
      ],
      ru: [
        'Электронная цифровая подпись, равнозначная собственноручной подписи и необходимая для регистрации бизнеса, сдачи отчетов на my.soliq.uz и подписания ЭСФ',
        'Графический редактор для печатей',
        'Банковская кредитная карта',
        'Товарный знак компании',
      ],
      en: [
        'A cryptographic Electronic Digital Signature legally equivalent to a handwritten signature, used for business registration, e-tax filings, and EHF invoices',
        'A logo design mobile app',
        'An outdoor billboard permit',
        'A customs transit stamp',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: '“Elektron raqamli imzo to‘g‘risida”gi Qonunga muvofiq E-IMZO bilan tasdiqlangan elektron hujjat qog‘oz hujjat bilan bir xil huquqiy kuchga ega.',
      ru: 'Ключ E-IMZO обеспечивает юридическую значимость всех онлайн-действий предпринимателя на госпорталах и в ЭДО.',
      en: 'E-IMZO authenticates legally binding corporate filings across fo.birdarcha.uz, my.soliq.uz, and EDO platforms.',
    },
    hint: {
      uz: 'fo.birdarcha.uz va my.soliq.uz ga kirish kaliti.',
      ru: 'Цифровой ключ для всех государственных и налоговых порталов.',
      en: 'Digital cryptographic key for state and tax portals.',
    },
  },
  {
    id: 'm4-q3',
    topicId: 'm4',
    question: {
      uz: 'To‘rt nafar dasturchi hamkorlikda ulushlarni bo‘lishib, 15 nafar xodim yollaydigan IT-kompaniya ochmoqchi. Qaysi shakl ularga TO‘G‘RI keladi?',
      ru: 'Четыре партнера объединяют капитал и открывают IT-компанию с планом найма 15 разработчиков. Какая форма им подходит?',
      en: 'Four co-founders are pooling capital to launch a software firm hiring 15 engineers. Which legal structure fits?',
    },
    options: {
      uz: [
        'MChJ (Mas’uliyati cheklangan jamiyat)',
        'O‘zini o‘zi band qilgan shaxs',
        'YaTT (Yakka tartibdagi tadbirkor)',
        'Dehqon xo‘jaligi',
      ],
      ru: [
        'ООО (MChJ — Общество с ограниченной ответственностью)',
        'Самозанятость',
        'ИП (YaTT)',
        'Дехканское хозяйство',
      ],
      en: [
        'LLC (MChJ — Limited Liability Company)',
        'Self-Employed status',
        'Sole Proprietorship (YaTT)',
        'Dehkan Household Farm',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'O‘zini o‘zi band qilishda xodim yollab bo‘lmaydi, YaTTda 4 ta ta’sischi va 15 ta xodim bo‘lishi mumkin emas. Hamkorlik va katta shtat uchun faqat MChJ mos.',
      ru: 'Только ООО позволяет юридически закрепить доли 4 учредителей, нанять 15+ сотрудников и получить статус резидента IT Park.',
      en: 'Only an MChJ legally accommodates 4 equity co-founders, 15+ employees, and IT Park corporate residency.',
    },
    hint: {
      uz: 'Bir nechta ta’sischi va 15 xodim shartiga e’tibor bering.',
      ru: 'Учтите 4 соучредителей и штат 15 человек.',
      en: 'Note the 4 co-founders and 15-employee headcount.',
    },
  },
  {
    id: 'm4-q4',
    topicId: 'm4',
    question: {
      uz: 'Tadbirkor tanlagan faoliyat turi uchun litsenziya, ruxsatnoma yoki xabarnoma kerak-kerakmasligini qaysi rasmiy yagona portal orqali tekshiradi va oladi?',
      ru: 'Через какой официальный портал в Узбекистане проверяется необходимость лицензии и подаются электронные заявления и уведомления?',
      en: 'Which official unified portal in Uzbekistan is used to check licensing requirements and submit digital permit/notification filings?',
    },
    options: {
      uz: [
        'license.gov.uz (“Litsenziya” axborot tizimi)',
        'obhavo.uz',
        'futbol.uz',
        'auto.uz',
      ],
      ru: [
        'license.gov.uz (Информационная система «Лицензия»)',
        'meteo.uz',
        'sport.uz',
        'kino.uz',
      ],
      en: [
        'license.gov.uz ("License" Information System)',
        'meteo.uz',
        'tourism.uz',
        'railways.uz',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'O‘RQ-701-son Qonunga asosan barcha litsenziya, ruxsatnoma va xabarnomalar license.gov.uz tizimida elektron rasmiylashtiriladi.',
      ru: 'Портал license.gov.uz объединяет все реестры лицензий, разрешений и уведомительных процедур РУз.',
      en: 'license.gov.uz processes all statutory licenses, permits, and notifications digitally.',
    },
    hint: {
      uz: 'Adliya vazirligining litsenziyalash portali.',
      ru: 'Государственный домен .gov.uz по лицензированию.',
      en: 'Official .gov.uz portal dedicated to licensing.',
    },
  },
  {
    id: 'm4-q5',
    topicId: 'm4',
    question: {
      uz: '“Xabardor qilish tartibi” (Уведомительный порядок) litsenziyalashdan nimasi bilan farq qiladi?',
      ru: 'Чем «уведомительный порядок» начала деятельности отличается от классического лицензирования?',
      en: 'How does the "Notification Procedure" differ from traditional Licensing under Law No. ZRU-701?',
    },
    options: {
      uz: [
        'Tadbirkor belgilangan minimal talablarni bajarishini tasdiqlab license.gov.uz orqali elektron xabarnoma yuboradi va javob kutmasdan faoliyatni boshlayveradi',
        'Komissiya qarorini 6 oy kutish talab etiladi',
        'Vazirlikka qog‘oz ariza olib borib navbatda turiladi',
        'Har oyda qayta imtihon topshiriladi',
      ],
      ru: [
        'Предприниматель направляет электронное уведомление через систему о соответствии требованиям и сразу вправе начать работу без ожидания разрешительного решения',
        'Нужно ждать решения комиссии минимум 90 дней',
        'Требуется личное собеседование в министерстве',
        'Уведомление подается только на бумаге через почту',
      ],
      en: [
        'The entrepreneur submits a digital compliance notice on license.gov.uz and may commence operations immediately without awaiting prior agency approval',
        'Requires a 6-month committee hearing',
        'Mandates in-person paper submission at a ministry',
        'Applies only to commercial banks',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Xabardor qilish tartibi ma’muriy byurokratiyani keskin qisqartirgan: tizim avtomatik tasdiqnoma beradi va tadbirkor shu zahoti ish boshlaydi.',
      ru: 'Уведомительный порядок исключает ожидание чиновничьего одобрения перед стартом бизнеса.',
      en: 'Notification replaces prior bureaucratic gatekeeping with instant digital filing and statutory compliance.',
    },
    hint: {
      uz: 'Ruxsat kutish shart emas — xabar berib ish boshlanadi.',
      ru: 'Достаточно уведомить уполномоченный орган онлайн.',
      en: 'Notify digitally and start operating right away.',
    },
  },
  {
    id: 'm4-q6',
    topicId: 'm4',
    question: {
      uz: 'MChJ ning oddiy (litsenziya talablari bo‘lmagan) faoliyat turlari uchun ustav fondining eng kam miqdori qanday belgilangan?',
      ru: 'Каков сегодня минимальный размер уставного фонда для обычного ООО (без специальных лицензионных требований) в Узбекистане?',
      en: 'For a standard non-licensed MChJ (LLC) in Uzbekistan, how is minimum charter capital determined today?',
    },
    options: {
      uz: [
        'Qat’iy yuqori majburiy chegara bekor qilingan — ustav fondi miqdorini ta’sischilar o‘zlari mustaqil belgilaydilar',
        'Kamida 400 million so‘m bo‘lishi shart',
        'Kamida $100 000 ekvivalenti bo‘lishi shart',
        'Kamida 1 milliard so‘m',
      ],
      ru: [
        'Обязательный минимальный порог отменен — размер уставного фонда определяется учредителями самостоятельно в уставе',
        'Не менее 400 млн сумов для всех ООО',
        'Строго от $50 000',
        'Не менее 1 млрд сумов',
      ],
      en: [
        'Mandatory minimum thresholds were abolished for general businesses — founders determine charter capital freely in the charter',
        'Strictly 400M UZS minimum for every shop',
        'Minimum $50,000 USD equivalent',
        'Minimum 1B UZS',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Biznes ochishni yengillashtirish islohotlari doirasida oddiy MChJlar uchun minimal ustav kapitali talabi olib tashlangan (faqat bank, sug‘urta va ayrim litsenziyali sohalarda maxsus talab bor).',
      ru: 'Учредители обычного ООО сами определяют комфортный стартовый уставный капитал при регистрации на fo.birdarcha.uz.',
      en: 'Reforms eliminated arbitrary minimum capital barriers for general LLCs, reserving capital floors strictly for regulated financial/licensed sectors.',
    },
    hint: {
      uz: 'Kichik biznes ochishni osonlashtirish islohotini eslang.',
      ru: 'Вспомните реформу по упрощению старта ООО.',
      en: 'Recall ease-of-doing-business incorporation reforms.',
    },
  },
  {
    id: 'm4-q7',
    topicId: 'm4',
    question: {
      uz: 'O‘zini o‘zi band qilgan shaxs (Самозанятый) maqomida ishlovchi fuqaro nechta yollanma xodim ishlatishga haqli?',
      ru: 'Сколько наемных работников по трудовому договору вправе нанимать самозанятое лицо в Узбекистане?',
      en: 'How many salaried employees is a registered Self-Employed individual legally permitted to hire in Uzbekistan?',
    },
    options: {
      uz: [
        '0 nafar — o‘zini o‘zi band qilgan shaxs yollanma xodimlarni jalb qilmasdan faqat shaxsiy mehnati bilan ishlaydi',
        '3 nafargacha',
        '10 nafargacha',
        'Cheklanmagan miqdorda',
      ],
      ru: [
        '0 работников — самозанятый не вправе использовать труд наемных работников (для найма нужно перейти в ИП или ООО)',
        'До 5 человек',
        'До 15 человек',
        'Без ограничений',
      ],
      en: [
        'Zero (0) — self-employed status prohibits hiring employees; hiring staff requires upgrading to YaTT or MChJ',
        'Up to 3 employees',
        'Up to 10 employees',
        'Unlimited staff',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'O‘zini o‘zi band qilish instituti aynan yollanma ishchisiz yakka shaxsiy mehnat daromadini legallashtirish uchun mo‘ljallangan.',
      ru: 'При необходимости нанять даже одного сотрудника предприниматель обязан зарегистрировать ИП (YaTT) или ООО (MChJ).',
      en: 'Self-employment covers strictly solo personal labor; onboarding even one employee requires YaTT or MChJ registration.',
    },
    hint: {
      uz: 'Nomining o‘zi aytib turibdi: “o‘zini o‘zi” band qilish.',
      ru: 'Ответ скрыт в самом термине «само-занятый».',
      en: 'The term "Self-Employed" itself holds the clue.',
    },
  },
  {
    id: 'm4-q8',
    topicId: 'm4',
    question: {
      uz: 'fo.birdarcha.uz tizimida tanlangan firma nomini onlayn zahiralab qo‘yish (bron qilish) qancha muddatga amal qiladi?',
      ru: 'На какой срок резервируется свободное фирменное наименование в электронной системе fo.birdarcha.uz до регистрации юрлица?',
      en: 'For how many days is a reserved company name held in the fo.birdarcha.uz system prior to completing incorporation?',
    },
    options: {
      uz: [
        '60 kun muddatga',
        'Atigi 1 soatga',
        '10 yilga',
        'Umrbod',
      ],
      ru: [
        'На 60 календарных дней',
        'Только на 2 часа',
        'На 5 лет',
        'Бессрочно',
      ],
      en: [
        '60 calendar days',
        'Only 1 hour',
        '5 years',
        'Permanently without incorporation',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Tasdiqlangan firma nomi zahiraga olingan kundan boshlab 60 kun mobaynida saqlanadi, shu vaqt ichida ta’sis hujjatlari bilan ro‘yxatdan o‘tkaziladi.',
      ru: 'Электронный резерв фирменного наименования действует 60 дней, чего более чем достаточно для регистрации ООО.',
      en: 'Online trade name reservation remains valid for 60 days while founders finalize incorporation.',
    },
    hint: {
      uz: 'Ikki oyga teng kunlar soni.',
      ru: 'Примерно два месяца.',
      en: 'Roughly two months.',
    },
  },
  {
    id: 'm4-q9',
    topicId: 'm4',
    isCalculation: true,
    question: {
      uz: 'Hisob-kitob: MChJ ustav fondi 200 mln so‘m etib belgilandi. Aziz 90 mln so‘m pul, Lola 60 mln so‘mlik qadoqlash uskunasi, Sardor 50 mln so‘m pul kiritdi. Lolaning jamiyatdagi ulushi (va ovoz/dividend huquqi) necha foiz?',
      ru: 'Расчет: Уставный фонд ООО составляет 200 млн сумов. Азиз внес 90 млн деньгами, Лола — оборудование оценкой 60 млн, Сардор — 50 млн деньгами. Какова доля Лолы в уставном фонде?',
      en: 'Calculation: An MChJ forms with 200M UZS charter capital: Aziz contributes 90M cash, Lola contributes 60M in appraised packaging equipment, and Sardor contributes 50M cash. What is Lola’s equity stake?',
    },
    options: {
      uz: [
        '30% (60 mln ÷ 200 mln × 100%)',
        '33,3% (uch kishi bo‘lgani uchun teng bo‘linadi)',
        '0% (uskuna ulush hisoblanmaydi)',
        '60%',
      ],
      ru: [
        '30% (60 млн ÷ 200 млн × 100%)',
        '33,3%',
        '0% (вклад имуществом запрещен)',
        '60%',
      ],
      en: [
        '30% (60M ÷ 200M × 100%)',
        '33.3% (always equal regardless of contribution)',
        '0% (equipment cannot count as capital)',
        '60%',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'MChJ ustav fondiga pul ham, kelishilgan tartibda baholangan mol-mulk (uskuna) ham kiritilishi mumkin. Lolaning ulushi: 60 ÷ 200 = 30%.',
      ru: 'Вкладом в уставный фонд могут быть деньги и оцененное имущество. Доля Лолы: 60 / 200 = 30%.',
      en: 'Both cash and appraised in-kind assets qualify as charter capital contributions: 60M ÷ 200M = 30%.',
    },
    hint: {
      uz: '60 mln ni jami 200 mln ustav fondiga bo‘ling.',
      ru: 'Разделите вклад Лолы (60 млн) на общий уставный фонд (200 млн).',
      en: 'Divide Lola’s 60M contribution by the 200M total.',
    },
  },
  {
    id: 'm4-q10',
    topicId: 'm4',
    question: {
      uz: 'Davlat ro‘yxatidan o‘tmasdan yoki majburiy litsenziyasiz (masalan, litsenziyasiz xususiy tibbiy xizmat ko‘rsatib) tadbirkorlik bilan shug‘ullanish qanday oqibatga olib keladi?',
      ru: 'Какие последствия влечет ведение бизнеса без государственной регистрации или обязательной лицензии (например, подпольная медицинская практика)?',
      en: 'What are the legal consequences of conducting unregistered commercial operations or practicing without a mandatory license?',
    },
    options: {
      uz: [
        'Ma’muriy jarima, olingan daromad/soliqlarni undirish, ko‘p va juda ko‘p miqdorda esa jinoiy javobgarlikka tortilish',
        'Faqat og‘zaki tanbeh berilib, keyingi yildan soliqdan ozod qilinadi',
        'Hech qanday huquqiy xavf yo‘q',
        'Bank tomonidan imtiyozli kredit beriladi',
      ],
      ru: [
        'Крупные административные штрафы (КоАО ст. 176), взыскание налогов, а при крупном размере дохода — уголовная ответственность (УК ст. 188, 190)',
        'Никакой ответственности в первые 2 года нет',
        'Выдается почетная грамота',
        'Автоматическая легализация задним числом без штрафов',
      ],
      en: [
        'Steep administrative fines (Admin Code Art. 176), tax assessments, and criminal prosecution for large-scale violations (Criminal Code Arts. 188, 190)',
        'Complete immunity during the first two years',
        'Automatic free grant eligibility',
        'Zero legal risk',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Ro‘yxatdan o‘tish atigi 15–30 daqiqa va arzon bo‘lgan sharoitda noqonuniy ishlash o‘z biznesini jarima hamda jinoiy xavf ostiga qo‘yishdir.',
      ru: 'Нелегальное предпринимательство несет прямые риски штрафов, конфискации предметов правонарушения и уголовного преследования.',
      en: 'With online registration taking 20 minutes, operating illegally exposes founders to severe fines and criminal liability.',
    },
    hint: {
      uz: 'MJtK 176-modda va JK 188/190-moddalarini eslang.',
      ru: 'Вспомните нормы КоАО и УК РУз о незаконном предпринимательстве.',
      en: 'Recall Administrative and Criminal Code penalties.',
    },
  },

  // ==================== M5 (10 questions) ====================
  {
    id: 'm5-q1',
    topicId: 'm5',
    question: {
      uz: 'O‘zbekiston Soliq kodeksiga ko‘ra aylanmadan olinadigan soliq (soddalashtirilgan rejim) qo‘llash uchun yillik jami daromad chegarasi qancha?',
      ru: 'Каков предельный размер совокупного годового дохода для применения налога с оборота в Узбекистане?',
      en: 'Under Uzbekistan’s Tax Code, what is the annual gross revenue ceiling for remaining on the simplified Turnover Tax regime?',
    },
    options: {
      uz: [
        '1 milliard so‘mgacha',
        '100 milliard so‘mgacha',
        '10 million so‘mgacha',
        'Chegara belgilanmagan',
      ],
      ru: [
        'До 1 миллиарда сумов в год',
        'До 50 миллиардов сумов',
        'До 10 миллионов сумов',
        'Лимита не существует',
      ],
      en: [
        'Up to 1 billion UZS per calendar year',
        'Up to 50 billion UZS',
        'Up to 10 million UZS',
        'Unlimited annual turnover',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Soliq kodeksining 461-moddasiga muvofiq yillik jami daromadi 1 mlrd so‘mdan oshmagan soliq to‘lovchilar aylanmadan olinadigan soliqni tanlashga haqli.',
      ru: 'Порог для упрощенного налога с оборота установлен на уровне 1 млрд сумов за налоговый период (год).',
      en: 'Article 461 sets the simplified Turnover Tax threshold at 1 billion UZS annual gross income.',
    },
    hint: {
      uz: '1 000 000 000 so‘m chegarasini eslang.',
      ru: 'Девять нулей в национальной валюте.',
      en: 'One billion in national currency.',
    },
  },
  {
    id: 'm5-q2',
    topicId: 'm5',
    question: {
      uz: '2025–2026-yillar amaldagi tahririda O‘zbekistonda bazaviy QQS (НДС) va Foyda solig‘i stavkalari necha foiz?',
      ru: 'Каковы базовые ставки НДС и Налога на прибыль на общеустановленном режиме в Узбекистане (2025–2026 гг.)?',
      en: 'What are the standard base rates for VAT (QQS) and Corporate Income Tax in Uzbekistan (2025–2026 framework)?',
    },
    options: {
      uz: [
        'QQS — 12%, Foyda solig‘i — 15%',
        'QQS — 20%, Foyda solig‘i — 30%',
        'QQS — 0%, Foyda solig‘i — 4%',
        'QQS — 5%, Foyda solig‘i — 5%',
      ],
      ru: [
        'НДС — 12%, Налог на прибыль — 15%',
        'НДС — 20%, Налог на прибыль — 25%',
        'НДС — 4%, Налог на прибыль — 12%',
        'Оба налога по 5%',
      ],
      en: [
        'VAT — 12%, Corporate Income Tax — 15%',
        'VAT — 20%, Corporate Income Tax — 30%',
        'VAT — 4%, Corporate Income Tax — 10%',
        'Both 5%',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'O‘zbekistonda QQSning standart stavkasi 12% (eksportda 0%) va korxonalar foyda solig‘ining bazaviy stavkasi 15% ni tashkil etadi.',
      ru: 'Базовая ставка НДС в РУз составляет 12%, а стандартная ставка налога на прибыль юридических лиц — 15%.',
      en: 'Standard VAT is 12% and general Corporate Income Tax is 15%.',
    },
    hint: {
      uz: '2023-yildan QQS 15% dan 12% ga tushirilgan edi.',
      ru: 'НДС был снижен до 12%, налог на прибыль — 15%.',
      en: 'VAT stands at 12% alongside 15% CIT.',
    },
  },
  {
    id: 'm5-q3',
    topicId: 'm5',
    isCalculation: true,
    question: {
      uz: 'Hisob-kitob: Konsalting firmasi Aylanmadan olinadigan soliq (4% bazaviy stavka) to‘lovchisi. Chorak davomida mijozlarga 150 mln so‘mlik xizmat ko‘rsatdi, ofis va kompyuter xarajatlari 40 mln so‘m bo‘ldi. Chorak uchun hisoblanadigan aylanma soliq summasi qancha?',
      ru: 'Расчет: Консалтинговое ООО платит налог с оборота по ставке 4%. За квартал оказано услуг на 150 млн сумов, расходы на офис составили 40 млн сумов. Чему равен налог с оборота за квартал?',
      en: 'Calculation: A consulting LLC on the 4% simplified Turnover Tax bills 150M UZS in Q1 and incurs 40M UZS in office expenses. How much Turnover Tax is owed for Q1?',
    },
    options: {
      uz: [
        '6 000 000 so‘m (150 mln × 4%, xarajatlar chegirilmaydi)',
        '4 400 000 so‘m ((150 − 40) × 4%)',
        '16 500 000 so‘m',
        '1 600 000 so‘m',
      ],
      ru: [
        '6 000 000 сумов (150 млн × 4% — при налоге с оборота расходы базу не уменьшают)',
        '4 400 000 сумов ((150 − 40) × 4%)',
        '16 500 000 сумов',
        '1 600 000 сумов',
      ],
      en: [
        '6,000,000 UZS (150M × 4% — expenses are not deducted from gross turnover)',
        '4,400,000 UZS ((150M − 40M) × 4%)',
        '16,500,000 UZS',
        '1,600,000 UZS',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Aylanmadan olinadigan soliqda xarajatlar ayirilmaydi — soliq to‘g‘ridan-to‘g‘ri jami 150 mln so‘m tushumning 4% idan (6 mln so‘m) hisoblanadi.',
      ru: 'Налог с оборота берется со всей валовой выручки без вычета затрат: 150 000 000 × 4% = 6 000 000 сумов.',
      en: 'Turnover Tax applies directly to gross top-line receipts without deducting expenses: 150M × 4% = 6,000,000 UZS.',
    },
    hint: {
      uz: '“Aylanmadan soliq” foydadan emas, jami tushumdan olinadi.',
      ru: 'Учитываются ли расходы при расчете налога с оборота?',
      en: 'Remember Turnover Tax hits gross revenue, not net profit.',
    },
  },
  {
    id: 'm5-q4',
    topicId: 'm5',
    question: {
      uz: 'Aholi bilan chakana savdoda mijoz Humo/Uzcard kartasi orqali POS-terminalda to‘lov qilganda sotuvchi qanday chek berishi shart?',
      ru: 'Какой документ обязан выдать продавец розничному покупателю при оплате банковской картой через терминал?',
      en: 'When a retail shopper pays via Uzcard/Humo bank card in a store, what receipt must the cashier issue?',
    },
    options: {
      uz: [
        'QR-kodli va fiskal belgili Onlayn-NKM (yoki virtual/integratsiyalashgan kassa) fiskal chekini berishi shart — oddiy terminal slipi uning o‘rnini bosmaydi',
        'Faqat ko‘k rangli bank terminali qog‘ozini (slipni) berish yetarli, kassa urilmaydi',
        'Og‘zaki rahmat aytish yetarli',
        'Oy oxirida EHF yuboriladi',
      ],
      ru: [
        'Фискальный чек онлайн-ККМ (или интегрированной кассы) с QR-кодом — обычный банковский слип терминала не заменяет фискальный чек',
        'Достаточно только слипа платежного терминала без пробития по кассе',
        'При оплате картой чеки вообще не выдаются',
        'Товарную накладную без цены',
      ],
      en: [
        'A QR-coded Online Cash Register fiscal receipt — a standalone bank terminal slip does not substitute for fiscalization',
        'Only the card terminal slip without ringing up the cash register',
        'Card payments require no receipt at all',
        'A handwritten note',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'VM 943-son qaroriga muvofiq naqd va plastik karta savdosining har ikkalasida QR-kodli fiskal chek urilishi majburiy (hozirda ko‘p terminallar onlayn-NKM bilan 2-si 1-da birlashtirilgan).',
      ru: 'Непробитие фискального чека при карточной оплате считается нарушением кассовой дисциплины.',
      en: 'Both cash and card retail sales must generate a QR-coded fiscal receipt transmitted to Soliq.',
    },
    hint: {
      uz: 'Soliq ilovasida 1% keshbek skanerlash uchun nima bo‘lishi kerak?',
      ru: 'На каком чеке печатается фискальный QR-код?',
      en: 'Which receipt carries the fiscal QR code?',
    },
  },
  {
    id: 'm5-q5',
    topicId: 'm5',
    question: {
      uz: 'Elektron hisobvaraq-faktura (EHF) va onlayn-NKM cheklarida har bir tovar/xizmat uchun ko‘rsatiladigan “MXIK” (ИКПУ) nima?',
      ru: 'Что такое код ИКПУ (MXIK), обязательный при выставлении ЭСФ и настройке онлайн-ККМ в Узбекистане?',
      en: 'What is the mandatory "MXIK" (IKPU) code required on every Electronic Tax Invoice (EHF) and fiscal receipt in Uzbekistan?',
    },
    options: {
      uz: [
        'tasnif.soliq.uz katalogidagi Mahsulot va xizmatlarning yagona identifikatsiya kodi',
        'Direktorning uy telefoni raqami',
        'Bank filiali MFO kodi',
        'Avtomobil davlat raqami',
      ],
      ru: [
        'Единый идентификационный код продукции и услуг из национального каталога tasnif.soliq.uz',
        'Почтовый индекс склада',
        'Личный ПИНФЛ кассира',
        'Код валюты платежа',
      ],
      en: [
        'The Unified Product and Service Identification Code from the official tasnif.soliq.uz catalog',
        'The store’s postal zip code',
        'The bank branch routing code',
        'The courier’s license plate',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'MXIK kodi Soliq qo‘mitasi tizimiga mamlakat bo‘ylab qaysi tovar qancha hajmda kirim va chiqim bo‘layotganini avtomatik tanish imkonini beradi.',
      ru: 'Корректный код ИКПУ из tasnif.soliq.uz обязателен для легального зачета НДС и работы кассы.',
      en: 'Accurate MXIK codes link inventory inflows and sales invoices across Uzbekistan’s digital tax ecosystem.',
    },
    hint: {
      uz: 'M-X-I-K qisqartmasini yoyib o‘qing.',
      ru: 'Расшифруйте: Идентификационный Код Продукции и Услуг.',
      en: 'Product and Service Identification Code.',
    },
  },
  {
    id: 'm5-q6',
    topicId: 'm5',
    question: {
      uz: 'Yuridik shaxslar o‘rtasida tovar yetkazib berilganda yoki xizmat ko‘rsatilganda buxgalteriyada daromad va xaridni tasdiqlovchi asosiy birlamchi elektron hujjat qaysi?',
      ru: 'Какой первичный электронный документ подтверждает отгрузку товара или оказание услуг между двумя юридическими лицами в РУз?',
      en: 'Which primary digital accounting document certifies B2B delivery of goods or completion of services between two legal entities?',
    },
    options: {
      uz: [
        'Elektron hisobvaraq-faktura (EHF / ЭСФ, yuk tashishda ETTYX bilan birga)',
        'Telegramdagi oddiy skrinshot',
        'Vizitka qog‘ozi',
        'Reklama bukleti',
      ],
      ru: [
        'Электронный счет-фактура — ЭСФ (и ЭТТН при перевозке товара)',
        'Переписка в мессенджере',
        'Устная договоренность директоров',
        'Рекламный прайс-лист',
      ],
      en: [
        'Electronic Tax Invoice — EHF (paired with an Electronic Waybill E-TTN when shipping goods)',
        'A chat screenshot',
        'A verbal handshake',
        'A promotional flyer',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Edo operatorlari (Didox, Soliqservis va b.) orqali ikki tomonning E-IMZO kaliti bilan imzolangan EHF asosiy birlamchi soliq va hisob hujjatidir.',
      ru: 'Только подписанный обеими сторонами в системе ЭДО счет-фактура (ЭСФ) юридически закрывает сделку.',
      en: 'Dual-signed EHF invoices processed via licensed EDO operators legally substantiate B2B revenue and deductible costs.',
    },
    hint: {
      uz: 'Didox yoki my.soliq.uz da yuboriladigan asosiy hujjat.',
      ru: 'Главный документ в системах электронного документооборота.',
      en: 'Core document signed via E-IMZO in EDO systems.',
    },
  },
  {
    id: 'm5-q7',
    topicId: 'm5',
    isCalculation: true,
    question: {
      uz: 'Hisob-kitob: Umumiy rejimdagi korxonaning yillik QQS siz tushumi 2 000 mln so‘m, hujjat bilan tasdiqlangan barcha chegiriladigan xarajatlari (tannarx, oylik, ijara) 1 600 mln so‘m. 15% stavkada Foyda solig‘i qancha bo‘ladi?',
      ru: 'Расчет: Предприятие на общем режиме получило выручку (без НДС) 2 000 млн сумов, документально подтвержденные вычитаемые расходы составили 1 600 млн сумов. Чему равен Налог на прибыль (15%)?',
      en: 'Calculation: A company on the General Regime earns 2,000M UZS net revenue (excl. VAT) and incurs 1,600M UZS in documented deductible expenses. Calculate its 15% Corporate Income Tax:',
    },
    options: {
      uz: [
        '60 mln so‘m ((2 000 − 1 600) × 15%)',
        '300 mln so‘m (2 000 × 15%)',
        '80 mln so‘m',
        '240 mln so‘m',
      ],
      ru: [
        '60 млн сумов ((2 000 − 1 600) × 15%)',
        '300 млн сумов (2 000 × 15%)',
        '80 млн сумов',
        '240 млн сумов',
      ],
      en: [
        '60M UZS ((2,000M − 1,600M) × 15%)',
        '300M UZS (2,000M × 15%)',
        '80M UZS',
        '240M UZS',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Soliq bazasi (foyda) = 2 000 − 1 600 = 400 mln so‘m. Foyda solig‘i = 400 mln × 15% = 60 mln so‘m.',
      ru: 'Налогооблагаемая прибыль: 2 000 − 1 600 = 400 млн сумов. Налог 15% от 400 млн = 60 млн сумов.',
      en: 'Taxable profit = 2,000M − 1,600M = 400M UZS. At 15% CIT, tax due = 60M UZS.',
    },
    hint: {
      uz: 'Avval tushumdan xarajatlarni ayiring, so‘ng 15% toping.',
      ru: 'Сначала найдите налогооблагаемую прибыль (доходы минус расходы), затем умножьте на 15%.',
      en: 'Subtract deductible costs from revenue first, then multiply by 15%.',
    },
  },
  {
    id: 'm5-q8',
    topicId: 'm5',
    question: {
      uz: '“Buxgalteriya hisobi to‘g‘risida”gi Qonunga muvofiq korxonada buxgalteriya hisobini to‘g‘ri tashkil etish uchun yakuniy javobgarlik kimning zimmasida bo‘ladi?',
      ru: 'Кто несет ответственность за организацию бухгалтерского учета на предприятии согласно Закону РУз «О бухгалтерском учете»?',
      en: 'Under Uzbekistan’s Law "On Accounting," who bears ultimate statutory responsibility for organizing proper bookkeeping in a company?',
    },
    options: {
      uz: [
        'Korxona rahbari (direktori)',
        'Ofis menejeri',
        'Xizmat ko‘rsatuvchi bank kassiri',
        'Yetkazib beruvchi kuryer',
      ],
      ru: [
        'Руководитель (директор) предприятия',
        'Рядовой продавец-консультант',
        'Операционист обслуживающего банка',
        'Системный администратор',
      ],
      en: [
        'The company Director (Chief Executive)',
        'Frontline sales clerks',
        'The commercial bank teller',
        'External delivery couriers',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Qonunning 11-moddasiga binoan buxgalteriya hisobi va hisobotini tashkil etish uchun bevosita xo‘jalik yurituvchi subyekt rahbari javobgardir.',
      ru: 'Даже при найме бухгалтера или аутсорсинговой компании ответственность за организацию учета лежит на директоре.',
      en: 'Even when delegating to an accountant or outsourcing firm, the company Director holds statutory responsibility for accounting organization.',
    },
    hint: {
      uz: 'Hujjatlarga 1-shaxs sifatida E-IMZO qo‘yuvchi mansabdor.',
      ru: 'Первое должностное лицо компании.',
      en: 'The primary executive signatory of the entity.',
    },
  },
  {
    id: 'm5-q9',
    topicId: 'm5',
    question: {
      uz: 'Qaysi holatda yillik aylanmasi 600 mln so‘m bo‘lgan kichik korxonaga Aylanmadan soliqda qolmasdan ixtiyoriy ravishda QQS + Foyda solig‘i rejimiga o‘tish foydali bo‘ladi?',
      ru: 'В какой ситуации малому предприятию с оборотом 600 млн сумов выгодно добровольно перейти с налога с оборота на общеустановленный режим с НДС?',
      en: 'When does it make strategic sense for an SME with 600M UZS revenue to voluntarily opt out of Turnover Tax into the General VAT + CIT regime?',
    },
    options: {
      uz: [
        'Asosiy xaridorlari QQS to‘lovchi yirik korporatsiyalar bo‘lganda va savdo ustamasi (marjasi) past bo‘lganda',
        'Xarajatlari deyarli nolga teng bo‘lib, faqat oddiy aholiga (B2C) xizmat ko‘rsatganda',
        'Korxonada buxgalter yo‘q bo‘lganda',
        'Umuman tovar sotmaganda',
      ],
      ru: [
        'Когда основные клиенты — крупные плательщики НДС (требующие зачет НДС) и бизнес работает с низкой торговой наценкой',
        'При рентабельности услуг 85% и продажах только физлицам',
        'Когда нет ни одного подтверждающего документа на расходы',
        'Ни при каких обстоятельствах',
      ],
      en: [
        'When selling on thin wholesale margins primarily to large VAT-registered B2B buyers who require VAT invoices',
        'When running an 85%-margin B2C tutoring service with zero input costs',
        'When expenses lack invoices entirely',
        'Never under any circumstances',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Yirik B2B kompaniyalar kiruvchi QQSni hisobga olish uchun QQS to‘lovchi yetkazib beruvchini afzal ko‘radi, kam marjada esa 15% foyda solig‘i 4% aylanma soliqdan kamroq chiqadi.',
      ru: 'Зачет НДС делает вас привлекательным поставщиком для крупного бизнеса, а налог с малой чистой прибыли ниже 4% со всего оборота.',
      en: 'Issuing VAT invoices unlocks corporate B2B accounts, while 15% tax on a thin profit beats 4% tax on entire gross turnover.',
    },
    hint: {
      uz: 'M5 amaliy keysidagi ulgurji oziq-ovqat misolini eslang.',
      ru: 'Вспомните кейс оптового поставщика ресторанов из темы М5.',
      en: 'Recall the low-margin B2B wholesale case study.',
    },
  },
  {
    id: 'm5-q10',
    topicId: 'm5',
    question: {
      uz: 'O‘zbekistondan xorijga tovar eksport qilinganda Qo‘shilgan qiymat solig‘i (QQS) necha foiz stavkada qo‘llaniladi?',
      ru: 'Какая ставка НДС применяется при официальном экспорте товаров из Республики Узбекистан?',
      en: 'What VAT rate applies to officially exported goods shipped out of Uzbekistan?',
    },
    options: {
      uz: [
        '0% (nol darajali stavka, kiruvchi QQSni qaytarib olish huquqi bilan)',
        '12%',
        '25%',
        '15%',
      ],
      ru: [
        '0% (нулевая ставка с правом возмещения входного НДС)',
        '12%',
        '20%',
        '15%',
      ],
      en: [
        '0% zero-rated VAT (with eligibility to claim refunds on domestic input VAT)',
        '12%',
        '20%',
        '15%',
      ],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Soliq kodeksining 260-moddasiga ko‘ra tovarlar eksportiga 0% QQS stavkasi tatbiq etiladi — bu mahalliy mahsulotning jahon bozoridagi narxini raqobatbardosh qiladi.',
      ru: 'Нулевая ставка НДС стимулирует экспортеров и позволяет вернуть НДС, уплаченный поставщикам сырья внутри страны.',
      en: 'Zero-rating exports under Tax Code Art. 260 keeps Uzbek goods price-competitive abroad.',
    },
    hint: {
      uz: 'Eksportni rag‘batlantiruvchi nol stavka.',
      ru: 'Льготная стимулирующая ставка для экспортеров.',
      en: 'Export-promoting zero rate.',
    },
  },
];

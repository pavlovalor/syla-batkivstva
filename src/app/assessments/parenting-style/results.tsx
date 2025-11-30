'use client';

interface ParentingStyleResultsProps {
  answers: Record<string, string>;
}

type Style = 'a' | 'b' | 'c' | 'd';

interface CombinationResult {
  message: string;
  advice: string;
}

const styleNames: Record<Style, string> = {
  a: 'Авторитетний',
  b: 'Авторитарний',
  c: 'Поблажливий',
  d: 'Байдужий',
};

// All 16 combinations of beliefs × actions
const combinationResults: Record<string, CombinationResult> = {
  'a-a': {
    message: 'Ви вірите в силу любові та чітких меж — і саме так дієте щодня. Це стиль, який найкраще сприяє розвитку відповідальності, впевненості й самостійності дитини.',
    advice: 'Збережіть цей баланс, і навіть у стресових ситуаціях намагайтесь тримати обидва крила — підтримку й кордони.',
  },
  'a-b': {
    message: 'Ваші переконання про любов і межі сильні, але в діях інколи більше строгості й контролю. Можливо, це через втому чи бажання швидше досягти результату.',
    advice: 'Додайте трохи більше пояснень і тепла там, де зараз переважають вимоги.',
  },
  'a-c': {
    message: 'Ви щиро прагнете поєднувати любов і межі, але на практиці часто межі розмиваються. Це природно, особливо коли не хочеться сварок або бракує сил.',
    advice: 'Почніть із одного чіткого правила й послідовно його тримайте — це зміцнить упевненість дитини.',
  },
  'a-d': {
    message: 'Ви хочете поєднувати любов і межі, але зараз вам важко це реалізувати в діях. Можливо, ви виснажені або щось відволікає від батьківства.',
    advice: 'Зробіть один крок назустріч дитині — хоча б 20 хвилин без гаджетів, тільки для вас двох.',
  },
  'b-a': {
    message: 'Ви вірите в силу дисципліни, але у щоденних діях проявляєте більше тепла й гнучкості. Це показує, що серцем ви шукаєте баланс.',
    advice: 'Продовжуйте розвивати довіру — дисципліна стане ефективнішою, коли вона спирається на близькість.',
  },
  'b-b': {
    message: 'Ваші переконання і дії збігаються: ви ставите чіткі вимоги й прагнете контролю. Це дає порядок, але важливо не втратити контакт із почуттями дитини.',
    advice: 'Спробуйте частіше пояснювати «чому» і дати дитині можливість висловитись.',
  },
  'b-c': {
    message: 'Ви вірите в дисципліну, але в житті часто м\'якшаєте й дозволяєте більше, ніж планували. Можливо, бо не хочете конфліктів.',
    advice: 'Визначте 1–2 правила, де будете особливо послідовні. Це додасть впевненості вам і дитині.',
  },
  'b-d': {
    message: 'Ви хочете виховати слухняність, але зараз у щоденних діях цього мало. Можливо, вам не вистачає ресурсу чи підтримки.',
    advice: 'Надягніть «кисневу маску спочатку на себе» — зробіть щось, що наповнює вас. Виділіть час для спільного ритуалу з дитиною (читання, розмови і обійми під час вкладання), щоб відновити зв\'язок.',
  },
  'c-a': {
    message: 'Ви вірите в тепло й свободу, але у щоденних діях створюєте і кордони. Це допомагає дитині відчувати себе в безпеці.',
    advice: 'Продовжуйте так — ваша дитина зростає в любові й водночас вчиться відповідальності.',
  },
  'c-b': {
    message: 'Ви хочете бути м\'якими й приймаючими, але іноді дієте більш жорстко. Можливо, у моменти стресу включається контроль.',
    advice: 'Перед тим, як поставити вимогу, спробуйте запитати себе: «Чого я хочу навчити цим?»',
  },
  'c-c': {
    message: 'Ваші переконання й дії дуже гармонійні: ви ставите любов і тепло на перше місце. Але дитині може бракувати ясності й меж.',
    advice: 'Почніть із одного маленького правила, яке важливе для безпеки чи розвитку дитини.',
  },
  'c-d': {
    message: 'Ви щиро вірите в силу любові, але зараз у діях її не видно. Можливо, це через втому чи зовнішні обставини.',
    advice: 'Дайте собі дозвіл на паузу й спробуйте повернутися до дитини у «дрібничках» — коротких іграх чи розмовах.',
  },
  'd-a': {
    message: 'Ваші переконання можуть говорити про втому чи відстороненість, але дії показують: ви будуєте зв\'язок і створюєте межі. Це великий вклад!',
    advice: 'Продовжуйте робити ці кроки, навіть якщо в глибині душі вам складно. Зв\'язок із дитиною підживить і вас.',
  },
  'd-b': {
    message: 'Ви відсторонені у переконаннях, але у діях схиляєтесь до контролю й вимог. Можливо, це автоматична реакція у стресі.',
    advice: 'Зупиніться на мить перед вимогою — запитайте себе: чи це справді важливо зараз?',
  },
  'd-c': {
    message: 'У переконаннях ви не хочете втручатись, але іноді у діях м\'якшаєте й намагаєтесь втішити чи «відкупитись». Це природно, якщо бракує ресурсу.',
    advice: 'Зосередьтесь на маленькому щоденному ритуалі, який допоможе відновити зв\'язок.',
  },
  'd-d': {
    message: 'Ваші переконання й дії зараз свідчать про відстороненість. Можливо, вам бракує сил, підтримки або внутрішнього ресурсу.',
    advice: 'Почніть із турботи про себе, неможливо налити з порожньої чашки.',
  },
};

function getDominantStyle(counts: Record<Style, number>): Style[] {
  const maxCount = Math.max(...Object.values(counts));
  const dominantStyles = Object.entries(counts)
    .filter(([_, count]) => count === maxCount)
    .map(([style]) => style as Style);
  
  // If tie, return all tied styles, otherwise return the single dominant one
  return dominantStyles.length > 1 ? dominantStyles : [dominantStyles[0]];
}

export default function ParentingStyleResults({ answers }: ParentingStyleResultsProps) {
  // Separate beliefs (odd questions: q1, q3, q5, q7, q9, q11) and actions (even questions: q2, q4, q6, q8, q10, q12)
  const beliefAnswers: string[] = [];
  const actionAnswers: string[] = [];

  Object.entries(answers).forEach(([questionId, answer]) => {
    const questionNum = parseInt(questionId.replace('q', ''));
    if (questionNum % 2 === 1) {
      // Odd: beliefs
      beliefAnswers.push(answer);
    } else {
      // Even: actions
      actionAnswers.push(answer);
    }
  });

  // Count styles for beliefs
  const beliefCounts: Record<Style, number> = { a: 0, b: 0, c: 0, d: 0 };
  beliefAnswers.forEach((answer) => {
    if (answer in beliefCounts) {
      beliefCounts[answer as Style]++;
    }
  });

  // Count styles for actions
  const actionCounts: Record<Style, number> = { a: 0, b: 0, c: 0, d: 0 };
  actionAnswers.forEach((answer) => {
    if (answer in actionCounts) {
      actionCounts[answer as Style]++;
    }
  });

  // Get dominant styles (handle ties)
  const dominantBeliefStyles = getDominantStyle(beliefCounts);
  const dominantActionStyles = getDominantStyle(actionCounts);

  // Use first dominant style for each (or handle multiple if needed)
  const beliefStyle = dominantBeliefStyles[0];
  const actionStyle = dominantActionStyles[0];

  // Get result for this combination
  const combinationKey = `${beliefStyle}-${actionStyle}`;
  const result = combinationResults[combinationKey] || combinationResults['a-a'];

  return (
    <div className="space-y-6 xxs:mt-6 sm:mt-8">
      {/* Style indicators */}
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <div className="px-3 py-1.5 rounded-full bg-brand-50">
          <span className="text-fg-tertiary">Переконання: </span>
          <span className="font-semibold text-fg-primary">{styleNames[beliefStyle]}</span>
        </div>
        <div className="px-3 py-1.5 rounded-full bg-brand-50">
          <span className="text-fg-tertiary">Дії: </span>
          <span className="font-semibold text-fg-primary">{styleNames[actionStyle]}</span>
        </div>
      </div>

      {/* Main message */}
      <div className="space-y-4">
        {/* Message block */}
        <div className="flex gap-4 py-4 m-0">
          <div className="shrink-0">
            <div className="w-10 h-10 rounded-lg border border-brand-200 flex items-center justify-center bg-bg-primary">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-fg-secondary"
              >
                <path
                  d="M6.09436 11.2288C6.03221 10.8282 5.99996 10.4179 5.99996 10C5.99996 5.58172 9.60525 2 14.0526 2C18.4999 2 22.1052 5.58172 22.1052 10C22.1052 10.9981 21.9213 11.9535 21.5852 12.8345C21.5154 13.0175 21.4804 13.109 21.4646 13.1804C21.4489 13.2512 21.4428 13.301 21.4411 13.3735C21.4394 13.4466 21.4493 13.5272 21.4692 13.6883L21.8717 16.9585C21.9153 17.3125 21.9371 17.4895 21.8782 17.6182C21.8266 17.731 21.735 17.8205 21.6211 17.8695C21.4911 17.9254 21.3146 17.8995 20.9617 17.8478L17.7765 17.3809C17.6101 17.3565 17.527 17.3443 17.4512 17.3448C17.3763 17.3452 17.3245 17.3507 17.2511 17.3661C17.177 17.3817 17.0823 17.4172 16.893 17.4881C16.0097 17.819 15.0524 18 14.0526 18C13.6344 18 13.2237 17.9683 12.8227 17.9073M7.63158 22C10.5965 22 13 19.5376 13 16.5C13 13.4624 10.5965 11 7.63158 11C4.66668 11 2.26316 13.4624 2.26316 16.5C2.26316 17.1106 2.36028 17.6979 2.53955 18.2467C2.61533 18.4787 2.65322 18.5947 2.66566 18.6739C2.67864 18.7567 2.68091 18.8031 2.67608 18.8867C2.67145 18.9668 2.65141 19.0573 2.61134 19.2383L2 22L4.9948 21.591C5.15827 21.5687 5.24 21.5575 5.31137 21.558C5.38652 21.5585 5.42641 21.5626 5.50011 21.5773C5.5701 21.5912 5.67416 21.6279 5.88227 21.7014C6.43059 21.8949 7.01911 22 7.63158 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-base sm:text-lg text-fg-secondary leading-relaxed">
              {result.message}
            </p>
          </div>
        </div>

        {/* Advice block */}
        <div className="flex gap-4 py-4 m-0">
          <div className="shrink-0">
            <div className="w-10 h-10 rounded-lg border border-brand-200 flex items-center justify-center bg-bg-primary">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-fg-secondary"
              >
                <path
                  d="M12 2V3M3 12H2M5.5 5.5L4.8999 4.8999M18.5 5.5L19.1002 4.8999M22 12H21M10 13.5H14M12 13.5V18.5M15.5 16.874C17.0141 15.7848 18 14.0075 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 14.0075 6.98593 15.7848 8.5 16.874V18.8C8.5 19.9201 8.5 20.4802 8.71799 20.908C8.90973 21.2843 9.21569 21.5903 9.59202 21.782C10.0198 22 10.5799 22 11.7 22H12.3C13.4201 22 13.9802 22 14.408 21.782C14.7843 21.5903 15.0903 21.2843 15.282 20.908C15.5 20.4802 15.5 19.9201 15.5 18.8V16.874Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-base sm:text-lg text-fg-secondary leading-relaxed">
              {result.advice}
            </p>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="mt-8 p-6 rounded-lg bg-linear-to-br from-brand-50 to-[white] border border-brand-200 flex flex-col">
        <h3 className="text-lg sm:text-xl font-semibold text-fg-primary mb-2">
          Хочете стати впевненим лідером у своїй родині?
        </h3>
        <p className="text-sm sm:text-base text-fg-secondary mb-4 leading-relaxed">
          Виховувати від цінностей, а не від реакцій, поєднувати безумовну любов і чіткі межі і мати практичні інструменти на щодень, які допомагають зберігати фокус у складних моментах?
        </p>
        <p className="text-sm text-fg-secondary mb-4 leading-relaxed">
          У наборі «Лідерство з любов&apos;ю» ми зібрали книгу-гайд з проактивного батьківства та інструменти, що допомагають закласти міцний фундамент у стосунках з дитиною — щоденник наміру, картки потреб, цінностей, дихальні практики, візуальні нагадування, схеми та чек-листи для складних моментів, планери та покрокові алгоритми для реальних життєвих ситуацій.
        </p>

        
        <a
          href="https://t.me/syla_batkivstva_bot?start=ZGw6MjkxODA4"
          target="_blank"
          rel="noopener noreferrer"
          className="flex sm:inline-flex items-center justify-center gap-3 px-4 py-2.5 w-full sm:w-auto rounded-lg bg-[#0088cc] hover:bg-[#0077b3] text-white font-medium text-sm sm:text-base transition-colors shadow-sm hover:shadow-md"
        >
          <img
            src="/images/telegram-logo.svg"
            alt="Telegram"
            className="w-5 h-5 shrink-0 scale-140"
          />
          <span>Перейти у чат-бот і дізнатися більше</span>
        </a>
      </div>
    </div>
  );
}

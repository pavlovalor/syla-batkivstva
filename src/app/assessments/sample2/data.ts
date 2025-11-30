import type { Assessment } from '../components/types';
import CommunicationStyleResults from './results';

export const assessment: Assessment = {
  id: 'communication-style',
  slug: 'sample2',
  title: 'Оцінка комунікації з дитиною',
  description: 'Перевірте, наскільки ефективно ви спілкуєтесь зі своєю дитиною',
  resultsComponent: CommunicationStyleResults,
  questions: [
    {
      id: 'q1',
      text: 'Коли дитина розповідає про свій день, ви:',
      options: [
        { value: 'a', label: 'Уважно слухаю, задаю питання' },
        { value: 'b', label: 'Слухаю, але часто відволікаюсь' },
        { value: 'c', label: 'Зазвичай зайнятий/зайнята іншими справами' },
        { value: 'd', label: 'Дитина рідко ділиться зі мною' },
      ],
    },
    {
      id: 'q2',
      text: 'Як часто ви обговорюєте з дитиною її почуття?',
      options: [
        { value: 'a', label: 'Щодня або майже щодня' },
        { value: 'b', label: 'Кілька разів на тиждень' },
        { value: 'c', label: 'Інколи, коли є проблеми' },
        { value: 'd', label: 'Рідко або ніколи' },
      ],
    },
    {
      id: 'q3',
      text: 'Коли дитина плаче або засмучена, ви зазвичай:',
      options: [
        { value: 'a', label: 'Обіймаю і питаю, що сталось' },
        { value: 'b', label: 'Даю час заспокоїтись, потім розмовляємо' },
        { value: 'c', label: 'Кажу, що плакати не варто' },
        { value: 'd', label: 'Залишаю на одинці' },
      ],
    },
    {
      id: 'q4',
      text: 'Чи знаєте ви імена найкращих друзів вашої дитини?',
      options: [
        { value: 'a', label: 'Так, знаю їх особисто' },
        { value: 'b', label: 'Знаю імена з розповідей' },
        { value: 'c', label: 'Знаю деякі імена' },
        { value: 'd', label: 'Не дуже обізнаний/обізнана' },
      ],
    },
    {
      id: 'q5',
      text: 'Як ви реагуєте на помилки дитини?',
      options: [
        { value: 'a', label: 'Обговорюємо, що можна зробити інакше' },
        { value: 'b', label: 'Пояснюю правильний шлях' },
        { value: 'c', label: 'Критикую і вказую на помилку' },
        { value: 'd', label: 'Не завжди реагую' },
      ],
    },
  ],
};


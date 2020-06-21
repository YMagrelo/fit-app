import React from 'react';

export const Heading = () => (
  <div className="heading">
    <h1 className="heading__title">Запись на тренировки онлайн</h1>
    <p className="heading__list-title">На нашем сайте вы сможете:</p>
    <ul className="heading__list">

      <li className="heading__item">
          Узнать расписание тренировок в спортивных клубах
      </li>
      <li className="heading__item">Записаться на тренировку</li>
      <li className="heading__item">
          Выбрать абонемент и оплатить его кредитной картой
      </li>
    </ul>
  </div>
);

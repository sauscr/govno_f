// src/pages/TargetIndicators.js

import React, { useState } from 'react';
import ProgressChart from './ProgressChart';

const data = {
    labels: ['Январь', 'Февраль', 'Март', 'Апрель'],
    values: [50, 70, 80, 90],
};

const TargetIndicators = () => {
  const [indicators, setIndicators] = useState([]);
  const [newIndicator, setNewIndicator] = useState({
    name: '',
    unit: '',
    plan: '',
    fact: '',
    status: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIndicator({ ...newIndicator, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIndicators([...indicators, newIndicator]);
    setNewIndicator({
      name: '',
      unit: '',
      plan: '',
      fact: '',
      status: '',
    });
  };

  return (
    <div>
      <h1>Отчет по целевым индикаторам</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Название индикатора:
          <input type="text" name="name" value={newIndicator.name} onChange={handleInputChange} />
        </label>
        <label>
          Единицы измерения:
          <input type="text" name="unit" value={newIndicator.unit} onChange={handleInputChange} />
        </label>
        <label>
          Плановый показатель:
          <input type="number" name="plan" value={newIndicator.plan} onChange={handleInputChange} />
        </label>
        <label>
          Фактический показатель:
          <input type="number" name="fact" value={newIndicator.fact} onChange={handleInputChange} />
        </label>
        <label>
          Статус:
          <select name="status" value={newIndicator.status} onChange={handleInputChange}>
            <option value="completed">Выполнен</option>
            <option value="in_progress">В процессе</option>
            <option value="not_started">Не начат</option>
          </select>
        </label>
        <button type="submit">Добавить индикатор</button>
      </form>

      <h2>Список целевых индикаторов</h2>
      <ul>
        {indicators.map((indicator, index) => (
          <li key={index}>
            {indicator.name} — {indicator.unit} — План: {indicator.plan} — Факт: {indicator.fact} — Статус: {indicator.status}
          </li>
        ))}
      </ul>
      <h2>Целевые индикаторы</h2>
            <ProgressChart data={data} />
    </div>
  );
};

export default TargetIndicators;

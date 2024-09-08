// src/pages/Activities.js

import React, { useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({
    name: '',
    responsible: '',
    deadline: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewActivity({ ...newActivity, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActivities([...activities, newActivity]);
    setNewActivity({
      name: '',
      responsible: '',
      deadline: '',
    });
  };

  return (
    <div>
      <h1>Отчет по мероприятиям</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Название мероприятия:
          <input type="text" name="name" value={newActivity.name} onChange={handleInputChange} />
        </label>
        <label>
          Ответственный:
          <input type="text" name="responsible" value={newActivity.responsible} onChange={handleInputChange} />
        </label>
        <label>
          Срок выполнения:
          <input type="date" name="deadline" value={newActivity.deadline} onChange={handleInputChange} />
        </label>
        <button type="submit">Добавить мероприятие</button>
      </form>

      <h2>Список мероприятий</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity.name} — Ответственный: {activity.responsible} — Срок выполнения: {activity.deadline}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;

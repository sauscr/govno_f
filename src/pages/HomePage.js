// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Добро пожаловать на TEST_SITE</h1>
      <p>Здесь вы можете найти все необходимые данные</p>
      <div className="buttons">
        <Link to="/target-indicators">
          <button>***TARGET_INDICATORS***</button>
        </Link>
        <Link to="/activities">
          <button>***ACTIVITIES***</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

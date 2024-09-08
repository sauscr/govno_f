import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaTasks, FaFileAlt } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/target-indicators"><FaChartLine /> Целевые индикаторы</Link></li>
                <li><Link to="/activities"><FaTasks /> Мероприятия</Link></li>
                <li><Link to="/reports"><FaFileAlt /> Отчеты</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;

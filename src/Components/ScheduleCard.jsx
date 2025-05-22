// ScheduleCard.jsx
import React from 'react';
import './ScheduleCard.css';
import { Link } from 'react-router-dom';
import HeartIcon from '../assets/navbar/heart.svg?react';

const ScheduleCard = ({ data }) => {
  return (
    <Link to={`/speaker/${data.id}`} state={{ speaker: data }} className="schedule-card-link">
      <div className="schedule-card">
        <div className="speaker-section">
          <img className="speaker-image" src={data.image} alt={data.speaker} />
          <div className="speaker-info">
            <div className="speaker-name">{data.speaker}</div>
            <div className="speaker-position">{data.position}</div>
            <div className="talk-title">“{data.title}”</div>
            <div className="tags">
              <div className="tag-location">{data.hall}</div>
              <div className="tag-time">{data.time}</div>
          </div>
        </div>
        <HeartIcon className="favorite-icon" />
      </div>
    </div>
    </Link>
  );
};

export default ScheduleCard;

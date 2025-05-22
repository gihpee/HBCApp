import React from 'react';
import './SchedulePage.css';
import ScheduleCard from '../ScheduleCard';

const fakeSchedule = [
  {
    time: '10:00 - 11:00',
    items: [
      {
        id: 1,
        speaker: 'ОЛЕГ ТОРБОСОВ',
        title: '10 уроков жизни',
        position: 'Основатель WhiteWill',
        image: 'https://experum.ru/uploads/media/avatar/0001/02/thumb_1118_avatar_portrait285.jpeg',
        hall: 'Малый зал',
        time: '10:00 - 11:00'
      },
      {
        id: 2,
        speaker: 'ЕВГЕНИЙ ДАВЫДОВ',
        title: 'Приоритизация и упрощение: основа роста бизнеса, команды и тебя самого',
        position: 'Сооснователь SETTERS',
        image: 'https://experum.ru/uploads/media/avatar/0001/02/thumb_1118_avatar_portrait285.jpeg',
        hall: 'Малый зал',
        time: '10:00 - 11:00'
      }
    ]
  },
  {
    time: '11:00 - 12:00',
    items: [
      {
        id: 3,
        speaker: 'ОЛЕГ ТОРБОСОВ',
        title: '10 уроков жизни',
        position: 'Основатель WhiteWill',
        image: 'https://experum.ru/uploads/media/avatar/0001/02/thumb_1118_avatar_portrait285.jpeg',
        hall: 'Малый зал',
        time: '11:00 - 12:00'
      }
    ]
  }
];

const SchedulePage = () => {
  return (
    <div className="schedule-page">
      <h1 className="page-title">Расписание</h1>
      {fakeSchedule.map(block => (
        <div key={block.time} className="schedule-block">
          <div className='time-block'>
            <p>{block.time}</p>
            <div className="time-line"></div>
          </div>
          <div className="card-list">
            {block.items.map(item => (
              <ScheduleCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SchedulePage;

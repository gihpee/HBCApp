import React, { useState } from 'react';
import './DatingPage.css';
import TgIcon from '../../assets/tg.svg?react';
import SphereIcon from '../../assets/sphere.svg?react';
import DatingIcon from '../../assets/dating.svg?react';
import CloseIcon from '../../assets/close.svg?react';

const fakeUsers = [
  {
    id: 1,
    name: 'Кузнецов Фёдор',
    age: 19,
    tag: 'Нетворкинг',
    description: 'Коммуникационный дизайнер, интересно развитие в IT',
    instagram: 'fedya_kuz',
    interest: 'Предпринимаю / IT',
    image: 'https://experum.ru/uploads/media/avatar/0001/02/thumb_1118_avatar_portrait285.jpeg'
  },
  {
    id: 2,
    name: 'Екатерина Волкова',
    age: 21,
    tag: 'Образование',
    description: 'Изучаю поведенческую экономику и менторю школьников',
    instagram: 'katya_volk',
    interest: 'Образование / Соцпроекты',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mizulina_Ekaterina.jpg/1200px-Mizulina_Ekaterina.jpg'
  }
];

const DatingPage = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleSwitch = (direction = 1) => {
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + direction + fakeUsers.length) % fakeUsers.length);
      setAnimating(false);
    }, 300); // соответствует длительности CSS-анимации
  };

  const currentUser = fakeUsers[index];

  return (
    <div className="dating-page">
      <div className="page-header">
        <h1 className="page-title">Дейтинг</h1>
        <div className="dating-btn"><DatingIcon /></div>
      </div>

      <div className={`card-container animated-card ${animating ? 'fade-out' : 'fade-in'}`} key={currentUser.id}>
        <img src={currentUser.image} alt={currentUser.name} className="user-image" />

        <div className="user-card">
          <div className="user-name">{currentUser.name} | {currentUser.age}</div>
          <div className="user-tag">{currentUser.tag}</div>
          <div className="user-description">{currentUser.description}</div>
          <div className="user-meta"><TgIcon /> {currentUser.instagram}</div>
          <div className="user-meta"><SphereIcon /> {currentUser.interest}</div>
        </div>
      </div>

      <div className="button-row">
        <button className="btn-skip" onClick={() => handleSwitch(1)}><CloseIcon /></button>
        <button className="btn-next" onClick={() => handleSwitch(1)}><DatingIcon /></button>
      </div>
    </div>
  );
};

export default DatingPage;

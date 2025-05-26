import React, { useState } from "react";
import ScheduleCard from "../ScheduleCard";
import "./FavoriteSpeakersPage.css";

const markedSpeaker = {
    id: 1,
    speaker: 'ОЛЕГ ТОРБОСОВ',
    position: 'Основатель WhiteWill',
    image: 'https://experum.ru/uploads/media/avatar/0001/02/thumb_1118_avatar_portrait285.jpeg',
    title: '10 уроков жизни',
    hall: 'Малый зал',
    time: '10:00 - 11:00',
};

const recommendedSpeaker = {
    id: 2,
    speaker: 'ЕВГЕНИЙ ДАВЫДОВ',
    position: 'Сооснователь SETTERS',
    image: 'https://experum.ru/uploads/media/avatar/0001/02/thumb_1118_avatar_portrait285.jpeg',
    title: 'Приоритизация и упрощение: основа роста бизнеса, команды и тебя самого',
    hall: 'Большой зал',
    time: '10:00 - 11:00',
};

const FavoriteSpeakersPage = () => {
    const [tab, setTab] = useState("marked");

    return (
        <div className="favorites-page">
            <h1 className="page-title">Избранные спикеры</h1>
            <div className="favorites-desc">
                Здесь собраны все выступления, которые вы отметили, <br />
                а также персональные рекомендации по компаниям и нетворкингу.
            </div>
            <div className="favorites-tabs">
                <button
                    className={`favorites-tab-btn${tab === "marked" ? " active" : ""}`}
                    onClick={() => setTab("marked")}
                >
                    Отмеченные вами выступления
                </button>
                <button
                    className={`favorites-tab-btn${tab === "recommended" ? " active" : ""}`}
                    onClick={() => setTab("recommended")}
                >
                    Рекомендации
                </button>
            </div>
            <div className="favorites-list">
                {tab === "marked" && <ScheduleCard data={markedSpeaker} />}
                {tab === "recommended" && <ScheduleCard data={recommendedSpeaker} />}
            </div>
        </div>
    );
};

export default FavoriteSpeakersPage;

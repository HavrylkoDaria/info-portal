import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>Про нас</h1>
      </div>
      <div className="about-content">
        <div className="section">
          <h2 className="section-title">Наша місія</h2>
          <div className="section-text">
            Наш інститут прагне забезпечити якісну освіту в галузі інформаційних технологій та робототехніки, надихаючи студентів на досягнення нових висот у науці, технологіях та інноваціях.
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Наші цілі</h2>
          <ul className="section-list">
            <li>Забезпечити студентам доступ до сучасних знань та технологій.</li>
            <li>Сприяти розвитку наукових досліджень у сфері інформаційних технологій.</li>
            <li>Підготувати висококваліфікованих фахівців для вирішення складних завдань сучасного світу.</li>
          </ul>
        </div>

        <div className="section">
          <h2 className="section-title">Наші досягнення</h2>
          <ul className="section-list">
            <li>Участь у міжнародних наукових проектах.</li>
            <li>Премії та відзнаки на конкурсах і олімпіадах.</li>
            <li>Розвиток інноваційних технологій та рішень у сфері IT і робототехніки.</li>
          </ul>
        </div>

        <div className="section">
          <h2 className="section-title">Наші викладачі</h2>
          <div className="section-text">
            Наших студентів ведуть висококваліфіковані викладачі з багаторічним досвідом у галузі інформаційних технологій та робототехніки. Вони прагнуть не лише передати знання, але й надихнути на творчий підхід до розв'язання складних завдань.
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Наші студенти</h2>
          <div className="section-text">
            Студенти нашого інституту активно залучаються до наукової діяльності, беруть участь у міжнародних студентських конференціях, олімпіадах та професійних змаганнях, демонструючи високий рівень знань та навичок.
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Наші партнери</h2>
          <div className="section-text">
            Наш інститут активно співпрацює з провідними науковими установами та виробничими компаніями, що дозволяє нашим студентам і викладачам брати участь у міжнародних проектах та конференціях.
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Наші досягнення</h2>
          <div className="section-text">
            Ми пишаємося нашими досягненнями та продовжуємо працювати над вдосконаленням освітнього процесу і підготовки молодого покоління фахівців для майбутнього.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
